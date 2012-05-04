/* start module: ClassTest */
$pyjs.loaded_modules['ClassTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ClassTest'].__was_initialized__) return $pyjs.loaded_modules['ClassTest'];
	var $m = $pyjs.loaded_modules["ClassTest"];
	$m.__repr__ = function() { return "<module: ClassTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ClassTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'ClassTest.py, line 1:\n    import sys';
		$m.__track_lines__[2] = 'ClassTest.py, line 2:\n    from UnitTest import UnitTest, IN_BROWSER';
		$m.__track_lines__[6] = 'ClassTest.py, line 6:\n    if True:';
		$m.__track_lines__[7] = 'ClassTest.py, line 7:\n    import imports.circ1';
		$m.__track_lines__[8] = 'ClassTest.py, line 8:\n    from imports import exec_order, imports as IMPORTS';
		$m.__track_lines__[9] = 'ClassTest.py, line 9:\n    from imports import exec_order as EXEC_ORDER';
		$m.__track_lines__[10] = 'ClassTest.py, line 10:\n    import I18N';
		$m.__track_lines__[12] = 'ClassTest.py, line 12:\n    from imports.classes import WithAttribute';
		$m.__track_lines__[14] = 'ClassTest.py, line 14:\n    import imports.decors # must be in this form';
		$m.__track_lines__[16] = 'ClassTest.py, line 16:\n    global names';
		$m.__track_lines__[17] = 'ClassTest.py, line 17:\n    names = {}';
		$m.__track_lines__[19] = 'ClassTest.py, line 19:\n    class SubAssignBase(object):';
		$m.__track_lines__[20] = "ClassTest.py, line 20:\n    names['SubAssign'] = 'SubAssign'";
		$m.__track_lines__[21] = 'ClassTest.py, line 21:\n    def __init__(self):';
		$m.__track_lines__[22] = 'ClassTest.py, line 22:\n    pass';
		$m.__track_lines__[24] = 'ClassTest.py, line 24:\n    class SubAssign(SubAssignBase):';
		$m.__track_lines__[25] = 'ClassTest.py, line 25:\n    def __init__(self):';
		$m.__track_lines__[26] = 'ClassTest.py, line 26:\n    SubAssignBase.__init__(self)';
		$m.__track_lines__[27] = "ClassTest.py, line 27:\n    names['SubAssignBase'] = 'SubAssignBase'";
		$m.__track_lines__[29] = 'ClassTest.py, line 29:\n    class GetAttribute():';
		$m.__track_lines__[31] = 'ClassTest.py, line 31:\n    getIt = WithAttribute.ATTR';
		$m.__track_lines__[33] = 'ClassTest.py, line 33:\n    class Sink:';
		$m.__track_lines__[34] = 'ClassTest.py, line 34:\n    def __init__(self):';
		$m.__track_lines__[35] = 'ClassTest.py, line 35:\n    self.sink = "Sink"';
		$m.__track_lines__[37] = 'ClassTest.py, line 37:\n    class SinkInfo:';
		$m.__track_lines__[38] = 'ClassTest.py, line 38:\n    def __init__(self, object_type):';
		$m.__track_lines__[39] = 'ClassTest.py, line 39:\n    self.object_type=object_type';
		$m.__track_lines__[40] = 'ClassTest.py, line 40:\n    self.instance=None';
		$m.__track_lines__[42] = 'ClassTest.py, line 42:\n    def createInstance(self):';
		$m.__track_lines__[43] = 'ClassTest.py, line 43:\n    return self.object_type()';
		$m.__track_lines__[45] = 'ClassTest.py, line 45:\n    def getInstance(self):';
		$m.__track_lines__[46] = 'ClassTest.py, line 46:\n    if self.instance==None:';
		$m.__track_lines__[47] = 'ClassTest.py, line 47:\n    self.instance=self.createInstance()';
		$m.__track_lines__[48] = 'ClassTest.py, line 48:\n    return self.instance';
		$m.__track_lines__[50] = 'ClassTest.py, line 50:\n    class Trees(Sink):';
		$m.__track_lines__[51] = 'ClassTest.py, line 51:\n    def __init__(self):';
		$m.__track_lines__[52] = 'ClassTest.py, line 52:\n    Sink.__init__(self)';
		$m.__track_lines__[53] = 'ClassTest.py, line 53:\n    self.test = "Trees"';
		$m.__track_lines__[55] = 'ClassTest.py, line 55:\n    class TestClass1Bug339(object):';
		$m.__track_lines__[56] = 'ClassTest.py, line 56:\n    def __init__(self):';
		$m.__track_lines__[57] = 'ClassTest.py, line 57:\n    self.test = TestClass2()';
		$m.__track_lines__[59] = 'ClassTest.py, line 59:\n    self.test.test_method(test_arg=0)';
		$m.__track_lines__[64] = 'ClassTest.py, line 64:\n    test = TestClass2()';
		$m.__track_lines__[65] = 'ClassTest.py, line 65:\n    test.test_method(test_arg=0)';
		$m.__track_lines__[67] = 'ClassTest.py, line 67:\n    self.test = TestClass2()';
		$m.__track_lines__[68] = 'ClassTest.py, line 68:\n    self.test.test_method(0)';
		$m.__track_lines__[70] = 'ClassTest.py, line 70:\n    class TestClass2(object):';
		$m.__track_lines__[71] = 'ClassTest.py, line 71:\n    def test_method(self, test_arg):';
		$m.__track_lines__[74] = 'ClassTest.py, line 74:\n    self.value = 0';
		$m.__track_lines__[76] = 'ClassTest.py, line 76:\n    class UserListPanel():';
		$m.__track_lines__[77] = 'ClassTest.py, line 77:\n    def setUsers(self, title, screennames=None):';
		$m.__track_lines__[78] = 'ClassTest.py, line 78:\n    pass';
		$m.__track_lines__[80] = 'ClassTest.py, line 80:\n    class TestClassBug342(object):';
		$m.__track_lines__[81] = 'ClassTest.py, line 81:\n    def __init__(self):';
		$m.__track_lines__[82] = 'ClassTest.py, line 82:\n    self.u = UserListPanel()';
		$m.__track_lines__[83] = "ClassTest.py, line 83:\n    self.u.setUsers('title', screennames=33)";
		$m.__track_lines__[86] = 'ClassTest.py, line 86:\n    class ClassTest(UnitTest):';
		$m.__track_lines__[88] = 'ClassTest.py, line 88:\n    def testInstancePassing(self):';
		$m.__track_lines__[89] = 'ClassTest.py, line 89:\n    s = SinkInfo(Trees)';
		$m.__track_lines__[90] = 'ClassTest.py, line 90:\n    i = s.getInstance()';
		$m.__track_lines__[91] = 'ClassTest.py, line 91:\n    self.assertEquals(i.test, "Trees")';
		$m.__track_lines__[92] = 'ClassTest.py, line 92:\n    self.assertEquals(i.sink, "Sink")';
		$m.__track_lines__[94] = 'ClassTest.py, line 94:\n    def testBug342(self):';
		$m.__track_lines__[95] = 'ClassTest.py, line 95:\n    try:';
		$m.__track_lines__[96] = 'ClassTest.py, line 96:\n    t = TestClassBug342()';
		$m.__track_lines__[98] = 'ClassTest.py, line 98:\n    self.fail("Bug #342 encountered")';
		$m.__track_lines__[100] = 'ClassTest.py, line 100:\n    self.assertTrue(True)';
		$m.__track_lines__[102] = 'ClassTest.py, line 102:\n    def testBug339(self):';
		$m.__track_lines__[103] = 'ClassTest.py, line 103:\n    try:';
		$m.__track_lines__[104] = 'ClassTest.py, line 104:\n    TestClass1Bug339()';
		$m.__track_lines__[106] = 'ClassTest.py, line 106:\n    self.fail("Bug #339 encountered")';
		$m.__track_lines__[108] = 'ClassTest.py, line 108:\n    self.assertTrue(True)';
		$m.__track_lines__[110] = 'ClassTest.py, line 110:\n    def testSubAssign(self):';
		$m.__track_lines__[111] = "ClassTest.py, line 111:\n    self.assertEquals(names['SubAssignBase'], 'SubAssignBase')";
		$m.__track_lines__[112] = "ClassTest.py, line 112:\n    self.assertEquals(names['SubAssign'], 'SubAssign')";
		$m.__track_lines__[115] = 'ClassTest.py, line 115:\n    def testClassVars(self):';
		$m.__track_lines__[116] = 'ClassTest.py, line 116:\n    expected_result1="test"';
		$m.__track_lines__[117] = 'ClassTest.py, line 117:\n    expected_result2=1';
		$m.__track_lines__[120] = 'ClassTest.py, line 120:\n    self.assertEquals(ExampleClass.x, expected_result1)';
		$m.__track_lines__[121] = 'ClassTest.py, line 121:\n    self.assertEquals(ExampleClass.x.upper(), expected_result1.upper())';
		$m.__track_lines__[124] = 'ClassTest.py, line 124:\n    y = ExampleClass()';
		$m.__track_lines__[125] = 'ClassTest.py, line 125:\n    self.assertEquals(y.x, expected_result1)';
		$m.__track_lines__[128] = 'ClassTest.py, line 128:\n    ExampleClass.x = expected_result2';
		$m.__track_lines__[129] = 'ClassTest.py, line 129:\n    self.assertEquals(ExampleClass.x, expected_result2)';
		$m.__track_lines__[132] = 'ClassTest.py, line 132:\n    z = ExampleClass()';
		$m.__track_lines__[133] = 'ClassTest.py, line 133:\n    self.assertEquals(z.x, expected_result2)';
		$m.__track_lines__[136] = 'ClassTest.py, line 136:\n    self.assertEquals(y.x, expected_result2)';
		$m.__track_lines__[139] = 'ClassTest.py, line 139:\n    self.assertEquals(ExampleClass.c, 1|2)';
		$m.__track_lines__[148] = 'ClassTest.py, line 148:\n    try:';
		$m.__track_lines__[149] = 'ClassTest.py, line 149:\n    ExampleClass().fail_a()';
		$m.__track_lines__[150] = 'ClassTest.py, line 150:\n    self.fail("Failed to raise error on ExampleClass().fail_a() bug #217")';
		$m.__track_lines__[152] = 'ClassTest.py, line 152:\n    self.assertTrue(True)';
		$m.__track_lines__[154] = 'ClassTest.py, line 154:\n    self.fail("Failed to raise NameError or AttributeError on ExampleClass().fail_a() bug #217")';
		$m.__track_lines__[156] = 'ClassTest.py, line 156:\n    self.fail("Failed to raise NameError or AttributeError on ExampleClass().fail_a()")';
		$m.__track_lines__[160] = 'ClassTest.py, line 160:\n    if IN_BROWSER:';
		$m.__track_lines__[161] = 'ClassTest.py, line 161:\n    from __pyjamas__ import JS';
		$m.__track_lines__[162] = 'ClassTest.py, line 162:\n    try:';
		$m.__track_lines__[163] = 'ClassTest.py, line 163:\n    x = ExampleClass().fail_a()';
		$m.__track_lines__[164] = "ClassTest.py, line 164:\n    self.assertTrue(JS('pyjslib.isUndefined(@{{x}})'))";
		$m.__track_lines__[166] = 'ClassTest.py, line 166:\n    self.assertTrue(True)';
		$m.__track_lines__[168] = 'ClassTest.py, line 168:\n    def test_iops(self):';
		$m.__track_lines__[169] = 'ClassTest.py, line 169:\n    class X(object):';
		$m.__track_lines__[170] = 'ClassTest.py, line 170:\n    def __init__(self, x):';
		$m.__track_lines__[171] = 'ClassTest.py, line 171:\n    self.x = x';
		$m.__track_lines__[173] = 'ClassTest.py, line 173:\n    def __add__(self, y):';
		$m.__track_lines__[174] = 'ClassTest.py, line 174:\n    return X(self.x + y.x)';
		$m.__track_lines__[176] = 'ClassTest.py, line 176:\n    def __mul__(self, y):';
		$m.__track_lines__[177] = 'ClassTest.py, line 177:\n    return X(self.x * y.x)';
		$m.__track_lines__[179] = 'ClassTest.py, line 179:\n    def __sub__(self, y):';
		$m.__track_lines__[180] = 'ClassTest.py, line 180:\n    return X(self.x - y.x)';
		$m.__track_lines__[182] = 'ClassTest.py, line 182:\n    def __iadd__(self, y):';
		$m.__track_lines__[183] = 'ClassTest.py, line 183:\n    self.x += y.x';
		$m.__track_lines__[184] = 'ClassTest.py, line 184:\n    return self';
		$m.__track_lines__[186] = 'ClassTest.py, line 186:\n    def __imul__(self, y):';
		$m.__track_lines__[187] = 'ClassTest.py, line 187:\n    self.x *= y.x';
		$m.__track_lines__[188] = 'ClassTest.py, line 188:\n    return self';
		$m.__track_lines__[190] = 'ClassTest.py, line 190:\n    a = a0 = X(2)';
		$m.__track_lines__[191] = 'ClassTest.py, line 191:\n    b = b0 = X(4)';
		$m.__track_lines__[192] = 'ClassTest.py, line 192:\n    c = a + b';
		$m.__track_lines__[193] = 'ClassTest.py, line 193:\n    d = a * b';
		$m.__track_lines__[194] = 'ClassTest.py, line 194:\n    self.assertTrue(c is not a and c is not b)';
		$m.__track_lines__[195] = 'ClassTest.py, line 195:\n    self.assertTrue(d is not a and d is not b and d is not c)';
		$m.__track_lines__[196] = 'ClassTest.py, line 196:\n    self.assertEqual(c.x, 6)';
		$m.__track_lines__[197] = 'ClassTest.py, line 197:\n    self.assertEqual(d.x, 8)';
		$m.__track_lines__[198] = 'ClassTest.py, line 198:\n    a += b';
		$m.__track_lines__[199] = "ClassTest.py, line 199:\n    self.assertTrue(a is a0, 'Bug #573 __iadd__ should modify object in-place')";
		$m.__track_lines__[200] = 'ClassTest.py, line 200:\n    self.assertEqual(a.x, 6)';
		$m.__track_lines__[201] = "ClassTest.py, line 201:\n    self.assertEqual(a0.x, a.x, 'Bug #573 __iadd__ should modify all references to an object')";
		$m.__track_lines__[202] = 'ClassTest.py, line 202:\n    a -= b';
		$m.__track_lines__[203] = 'ClassTest.py, line 203:\n    self.assertTrue(a is not a0)';
		$m.__track_lines__[204] = 'ClassTest.py, line 204:\n    self.assertEqual(a.x, 2)';
		$m.__track_lines__[205] = "ClassTest.py, line 205:\n    self.assertNotEqual(a0.x, a.x, 'Bug #573 reference should not have same value after __iadd__ & __neg__')";
		$m.__track_lines__[206] = 'ClassTest.py, line 206:\n    b *= c';
		$m.__track_lines__[207] = "ClassTest.py, line 207:\n    self.assertTrue(b is b0, 'Bug #573 __imul__ should modify object in-place')";
		$m.__track_lines__[208] = 'ClassTest.py, line 208:\n    self.assertEqual(b.x, 24)';
		$m.__track_lines__[209] = "ClassTest.py, line 209:\n    self.assertEqual(b0.x, b.x, 'Bug #573 __imul__ should modify all references to an object')";
		$m.__track_lines__[211] = 'ClassTest.py, line 211:\n    def test_getattr(self):';
		$m.__track_lines__[212] = 'ClassTest.py, line 212:\n    class X(object):';
		$m.__track_lines__[213] = 'ClassTest.py, line 213:\n    def __init__(self, x=0):';
		$m.__track_lines__[214] = 'ClassTest.py, line 214:\n    self.x = x';
		$m.__track_lines__[216] = 'ClassTest.py, line 216:\n    def __getattr__(self, name):';
		$m.__track_lines__[217] = 'ClassTest.py, line 217:\n    return X(self.x + 1)';
		$m.__track_lines__[219] = 'ClassTest.py, line 219:\n    x = X()';
		$m.__track_lines__[220] = 'ClassTest.py, line 220:\n    self.assertEqual(x.x, 0)';
		$m.__track_lines__[221] = 'ClassTest.py, line 221:\n    try:';
		$m.__track_lines__[222] = 'ClassTest.py, line 222:\n    self.assertEqual(x.next.x, 1)';
		$m.__track_lines__[223] = 'ClassTest.py, line 223:\n    self.assertEqual(x.next.bla.x, 2)';
		$m.__track_lines__[224] = 'ClassTest.py, line 224:\n    self.assertEqual(x.a.b.c.x, 3)';
		$m.__track_lines__[226] = 'ClassTest.py, line 226:\n    self.fail("Bug #575 __getattr__ method not supported")';
		$m.__track_lines__[228] = 'ClassTest.py, line 228:\n    def test_deep_property_access(self):';
		$m.__track_lines__[229] = 'ClassTest.py, line 229:\n    class X(object):';
		$m.__track_lines__[230] = 'ClassTest.py, line 230:\n    def __init__(self, x=0):';
		$m.__track_lines__[231] = 'ClassTest.py, line 231:\n    self.x = x';
		$m.__track_lines__[234] = 'ClassTest.py, line 233:\n    @property ... def bla(self):';
		$m.__track_lines__[235] = 'ClassTest.py, line 235:\n    return self.next';
		$m.__track_lines__[238] = 'ClassTest.py, line 237:\n    @property ... def next(self):';
		$m.__track_lines__[239] = 'ClassTest.py, line 239:\n    return X(self.x + 1)';
		$m.__track_lines__[241] = 'ClassTest.py, line 241:\n    x = X()';
		$m.__track_lines__[243] = 'ClassTest.py, line 243:\n    self.assertEqual(x.x, 0)';
		$m.__track_lines__[244] = 'ClassTest.py, line 244:\n    try:';
		$m.__track_lines__[245] = 'ClassTest.py, line 245:\n    self.assertEqual(x.next.x, 1)';
		$m.__track_lines__[246] = 'ClassTest.py, line 246:\n    self.assertEqual(x.next.bla.x, 2)';
		$m.__track_lines__[247] = 'ClassTest.py, line 247:\n    self.assertEqual(x.next.bla.next.x, 3)';
		$m.__track_lines__[248] = 'ClassTest.py, line 248:\n    self.assertEqual(x.bla.next.bla.next.bla.x, 5)';
		$m.__track_lines__[250] = 'ClassTest.py, line 250:\n    self.fail("Bug #576 Deep property access not supported")';
		$m.__track_lines__[252] = 'ClassTest.py, line 252:\n    def test_slice(self):';
		$m.__track_lines__[253] = 'ClassTest.py, line 253:\n    class X(object):';
		$m.__track_lines__[254] = 'ClassTest.py, line 254:\n    def __init__(self, data):';
		$m.__track_lines__[255] = 'ClassTest.py, line 255:\n    self.data = data';
		$m.__track_lines__[257] = 'ClassTest.py, line 257:\n    def __getitem__(self, index):';
		$m.__track_lines__[258] = 'ClassTest.py, line 258:\n    assert isinstance(index, slice)';
		$m.__track_lines__[259] = 'ClassTest.py, line 259:\n    return self.data[index]';
		$m.__track_lines__[261] = 'ClassTest.py, line 261:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[262] = 'ClassTest.py, line 262:\n    assert isinstance(index, slice)';
		$m.__track_lines__[263] = 'ClassTest.py, line 263:\n    self.data[index] = value';
		$m.__track_lines__[265] = 'ClassTest.py, line 265:\n    data = [1, 2, 3]';
		$m.__track_lines__[266] = 'ClassTest.py, line 266:\n    x = X(data)';
		$m.__track_lines__[267] = "ClassTest.py, line 267:\n    self.assertEqual(data[:2], x[:2], 'Bug #577 __getitem__ should be used for slicing')";
		$m.__track_lines__[268] = "ClassTest.py, line 268:\n    self.assertEqual(x[:2], [1, 2], 'Bug #577 __getitem__ not supported')";
		$m.__track_lines__[269] = 'ClassTest.py, line 269:\n    try:';
		$m.__track_lines__[270] = 'ClassTest.py, line 270:\n    x[1:2] = [5]';
		$m.__track_lines__[271] = "ClassTest.py, line 271:\n    self.assertEqual(data[:], x[:], 'Bug #577 __setitem__ should be used for slice assignment')";
		$m.__track_lines__[272] = 'ClassTest.py, line 272:\n    self.assertEqual(x[1:], [5, 3])';
		$m.__track_lines__[274] = "ClassTest.py, line 274:\n    self.fail('Bug #577 slice / __getitem__ / __setitem__ not supported')";
		$m.__track_lines__[277] = 'ClassTest.py, line 277:\n    def testInheritedProperties(self):';
		$m.__track_lines__[278] = 'ClassTest.py, line 278:\n    expected_result1="test"';
		$m.__track_lines__[279] = 'ClassTest.py, line 279:\n    expected_result2=1';
		$m.__track_lines__[280] = 'ClassTest.py, line 280:\n    expected_result3="other"';
		$m.__track_lines__[283] = 'ClassTest.py, line 283:\n    obj1 = ExampleParentClass()';
		$m.__track_lines__[284] = 'ClassTest.py, line 284:\n    self.assertEquals(obj1.x, expected_result1)';
		$m.__track_lines__[287] = 'ClassTest.py, line 287:\n    obj1.x = expected_result2';
		$m.__track_lines__[288] = 'ClassTest.py, line 288:\n    obj2 = ExampleChildClass()';
		$m.__track_lines__[289] = 'ClassTest.py, line 289:\n    self.assertEquals(obj2.x, expected_result1)';
		$m.__track_lines__[292] = 'ClassTest.py, line 292:\n    obj2.x = expected_result3';
		$m.__track_lines__[293] = 'ClassTest.py, line 293:\n    self.assertEquals(obj2.x, expected_result3)';
		$m.__track_lines__[296] = 'ClassTest.py, line 296:\n    self.assertEquals(obj1.x, expected_result2)';
		$m.__track_lines__[298] = 'ClassTest.py, line 298:\n    obj = ExampleChildClass(b = 222)';
		$m.__track_lines__[299] = 'ClassTest.py, line 299:\n    self.assertEquals(obj.prop_a, 1)';
		$m.__track_lines__[300] = 'ClassTest.py, line 300:\n    self.assertEquals(obj.prop_b, 222)';
		$m.__track_lines__[303] = 'ClassTest.py, line 303:\n    def testInheritedPropertyObjects(self):';
		$m.__track_lines__[304] = 'ClassTest.py, line 304:\n    expected_result1 = "another"';
		$m.__track_lines__[305] = 'ClassTest.py, line 305:\n    expected_result2 = "other"';
		$m.__track_lines__[308] = 'ClassTest.py, line 308:\n    obj1 = ExampleParentObject()';
		$m.__track_lines__[309] = 'ClassTest.py, line 309:\n    self.assertEquals(len(obj1.x), 0)';
		$m.__track_lines__[312] = 'ClassTest.py, line 312:\n    obj1.x.append(expected_result2)';
		$m.__track_lines__[314] = 'ClassTest.py, line 314:\n    obj2 = ExampleChildObject()';
		$m.__track_lines__[315] = 'ClassTest.py, line 315:\n    self.assertEquals(len(obj2.x), 1)';
		$m.__track_lines__[318] = 'ClassTest.py, line 318:\n    obj2.x.append(expected_result1)';
		$m.__track_lines__[319] = 'ClassTest.py, line 319:\n    self.assertEquals(obj2.x[1], expected_result1)';
		$m.__track_lines__[322] = 'ClassTest.py, line 322:\n    self.assertEquals(obj1.x[0], expected_result2)';
		$m.__track_lines__[325] = 'ClassTest.py, line 325:\n    def testInheritedConstructors(self):';
		$m.__track_lines__[326] = 'ClassTest.py, line 326:\n    expected_result1 = "test"';
		$m.__track_lines__[327] = 'ClassTest.py, line 327:\n    expected_result2 = "parent"';
		$m.__track_lines__[328] = 'ClassTest.py, line 328:\n    expected_result3 = "grandparent"';
		$m.__track_lines__[329] = 'ClassTest.py, line 329:\n    expected_result4 = "older"';
		$m.__track_lines__[332] = 'ClassTest.py, line 332:\n    obj1 = ExampleChildNoConstructor()';
		$m.__track_lines__[333] = 'ClassTest.py, line 333:\n    self.assertEquals(obj1.x, expected_result1, "ExampleParentConstructor.__init__() was NOT called for ExampleChildNoConstructor")';
		$m.__track_lines__[336] = 'ClassTest.py, line 336:\n    obj2 = ExampleChildConstructor()';
		$m.__track_lines__[337] = 'ClassTest.py, line 337:\n    self.assertNotEqual(getattr(obj2, "x", None), expected_result1, "ExampleParentConstructor.__init__() was called for ExampleChildConstructor")';
		$m.__track_lines__[340] = 'ClassTest.py, line 340:\n    obj3 = ExampleChildExplicitConstructor()';
		$m.__track_lines__[341] = 'ClassTest.py, line 341:\n    self.assertEquals(obj3.x, expected_result1, "ExampleParentConstructor.__init__() was NOT called for ExampleChildExplicitConstructor")';
		$m.__track_lines__[344] = 'ClassTest.py, line 344:\n    self.assertEquals(obj1.y, expected_result2, "Did not inherit property from parent")';
		$m.__track_lines__[345] = 'ClassTest.py, line 345:\n    self.assertEquals(obj2.y, expected_result2, "Did not inherit property from parent")';
		$m.__track_lines__[346] = 'ClassTest.py, line 346:\n    self.assertEquals(obj1.z, expected_result3, "Did not inherit property from grandparent")';
		$m.__track_lines__[347] = 'ClassTest.py, line 347:\n    self.assertEquals(obj2.z, expected_result3, "Did not inherit property from grandparent")';
		$m.__track_lines__[349] = 'ClassTest.py, line 349:\n    res = getattr(obj1, "r", None)';
		$m.__track_lines__[350] = 'ClassTest.py, line 350:\n    self.assertNotEqual(res, expected_result4, "ExampleGrandParentConstructor.__init__() was called (%s)" % res)';
		$m.__track_lines__[351] = 'ClassTest.py, line 351:\n    self.assertNotEqual(getattr(obj2, "r", None), expected_result4, "ExampleGrandParentConstructor.__init__() was called")';
		$m.__track_lines__[354] = 'ClassTest.py, line 354:\n    self.assertEqual(ExampleChildConstructor.y, expected_result2, "Did not inherit class var from parent")';
		$m.__track_lines__[355] = 'ClassTest.py, line 355:\n    self.assertEqual(ExampleChildNoConstructor.y, expected_result2, "Did not inherit class var from parent")';
		$m.__track_lines__[356] = 'ClassTest.py, line 356:\n    self.assertEqual(ExampleChildExplicitConstructor.y, expected_result2, "Did not inherit class var from parent")';
		$m.__track_lines__[359] = 'ClassTest.py, line 359:\n    self.assertEqual(ExampleChildConstructor.z, expected_result3, "Did not inherit class var from grandparent")';
		$m.__track_lines__[360] = 'ClassTest.py, line 360:\n    self.assertEqual(ExampleChildNoConstructor.z, expected_result3, "Did not inherit class var from grandparent")';
		$m.__track_lines__[361] = 'ClassTest.py, line 361:\n    self.assertEqual(ExampleChildExplicitConstructor.z, expected_result3, "Did not inherit class var from grandparent")';
		$m.__track_lines__[363] = 'ClassTest.py, line 363:\n    def testInheritFromType(self):';
		$m.__track_lines__[365] = 'ClassTest.py, line 365:\n    i_types = [(int, 1), (float, 1.5), (str, "test"), (long, 1),';
		$m.__track_lines__[367] = 'ClassTest.py, line 367:\n    for cls, val in i_types:';
		$m.__track_lines__[368] = 'ClassTest.py, line 368:\n    try:';
		$m.__track_lines__[369] = 'ClassTest.py, line 369:\n    class subclassed_type(cls):';
		$m.__track_lines__[370] = 'ClassTest.py, line 370:\n    def test_inh_method(self):';
		$m.__track_lines__[371] = 'ClassTest.py, line 371:\n    return 1';
		$m.__track_lines__[372] = 'ClassTest.py, line 372:\n    subclassed_type.__name__ = cls.__name__';
		$m.__track_lines__[373] = 'ClassTest.py, line 373:\n    inst = subclassed_type(val)';
		$m.__track_lines__[374] = 'ClassTest.py, line 374:\n    self.assertEqual(inst, val, "Subclasses of type \'%s\' are not instantiated properly, issue #623" % cls.__name__)';
		$m.__track_lines__[375] = 'ClassTest.py, line 375:\n    self.assertEqual(inst.test_inh_method(), 1, "Methods of subclasses of type \'%s\' fail, issue #623" % cls.__name__)';
		$m.__track_lines__[376] = 'ClassTest.py, line 376:\n    self.assertEqual(str(inst), str(val), "__str__ of subclasses of type \'%s\' fail, issue #623" % cls.__name__)';
		$m.__track_lines__[377] = 'ClassTest.py, line 377:\n    self.assertEqual(type(inst), subclassed_type, "Subclasses of type \'%s\' have wrong type, issue #623" % cls.__name__)';
		$m.__track_lines__[378] = 'ClassTest.py, line 378:\n    self.assertTrue(isinstance(inst, subclassed_type), "Subclasses of type \'%s\' have wrong type, issue #623" % cls.__name__)';
		$m.__track_lines__[380] = 'ClassTest.py, line 380:\n    self.fail("Subclassing type \'%s\' does not work, issue #623" % cls.__name__)';
		$m.__track_lines__[383] = 'ClassTest.py, line 383:\n    class SubclassedString(str): pass';
		$m.__track_lines__[384] = 'ClassTest.py, line 384:\n    class SubclassedInt(int): pass';
		$m.__track_lines__[385] = 'ClassTest.py, line 385:\n    class SubclassedFloat(float): pass';
		$m.__track_lines__[386] = 'ClassTest.py, line 386:\n    try:';
		$m.__track_lines__[387] = 'ClassTest.py, line 387:\n    self.assertEqual(str(SubclassedString("string")), "string", "#484")';
		$m.__track_lines__[389] = 'ClassTest.py, line 389:\n    self.fail("Could not instantiate subclassed string, bug #484")';
		$m.__track_lines__[390] = 'ClassTest.py, line 390:\n    try:';
		$m.__track_lines__[391] = 'ClassTest.py, line 391:\n    v = str(SubclassedInt(1))';
		$m.__track_lines__[392] = 'ClassTest.py, line 392:\n    self.assertEqual(v, "1", "bug #484 - %s != \'1\'" % v)';
		$m.__track_lines__[394] = 'ClassTest.py, line 394:\n    self.fail("Could not instantiate subclassed int")';
		$m.__track_lines__[395] = 'ClassTest.py, line 395:\n    try:';
		$m.__track_lines__[396] = 'ClassTest.py, line 396:\n    self.assertEqual(str(SubclassedFloat(1.1)), "1.1", "#484")';
		$m.__track_lines__[398] = 'ClassTest.py, line 398:\n    self.fail("Could not instantiate subclassed float")';
		$m.__track_lines__[399] = "ClassTest.py, line 399:\n    self.assertTrue(isinstance(SubclassedString('abc'), object),";
		$m.__track_lines__[402] = 'ClassTest.py, line 402:\n    self.assertTrue(isinstance(SubclassedInt(1), object),';
		$m.__track_lines__[405] = 'ClassTest.py, line 405:\n    self.assertTrue(isinstance(SubclassedFloat(1.1), object),';
		$m.__track_lines__[410] = 'ClassTest.py, line 410:\n    def testClassMethods(self):';
		$m.__track_lines__[411] = 'ClassTest.py, line 411:\n    results = ExampleClass.sampleClassMethod("a")';
		$m.__track_lines__[412] = 'ClassTest.py, line 412:\n    self.assertEqual(results[0], ExampleClass, "Expected first parameter to be the class instance")';
		$m.__track_lines__[413] = 'ClassTest.py, line 413:\n    self.assertEqual(results[1], "a")';
		$m.__track_lines__[415] = 'ClassTest.py, line 415:\n    results = ExampleParentClass.sampleClassMethod("a")';
		$m.__track_lines__[416] = 'ClassTest.py, line 416:\n    self.assertEqual(results[0], ExampleParentClass, "Expected first parameter to be the class instance")';
		$m.__track_lines__[417] = 'ClassTest.py, line 417:\n    self.assertEqual(results[1], "a")';
		$m.__track_lines__[419] = 'ClassTest.py, line 419:\n    results = ExampleChildClass.sampleClassMethod("a")';
		$m.__track_lines__[420] = 'ClassTest.py, line 420:\n    self.assertEqual(results[0], ExampleChildClass, "Expected first parameter to be the class instance")';
		$m.__track_lines__[421] = 'ClassTest.py, line 421:\n    self.assertEqual(results[1], "a")';
		$m.__track_lines__[423] = 'ClassTest.py, line 423:\n    results = ExampleClass.sampleClassMethodVarargs("a", "b", "c")';
		$m.__track_lines__[424] = 'ClassTest.py, line 424:\n    self.assertEqual(results[0], ExampleClass, "Expected first parameter to be the class instance")';
		$m.__track_lines__[425] = 'ClassTest.py, line 425:\n    self.assertEqual(results[1][0], "a")';
		$m.__track_lines__[426] = 'ClassTest.py, line 426:\n    self.assertEqual(results[1][1], "b")';
		$m.__track_lines__[427] = 'ClassTest.py, line 427:\n    self.assertEqual(results[1][2], "c")';
		$m.__track_lines__[429] = 'ClassTest.py, line 429:\n    results = ExampleClass.sampleClassMethodKwargs(c=9, b=8, a=7)';
		$m.__track_lines__[430] = 'ClassTest.py, line 430:\n    self.assertEqual(results[0], ExampleClass, "Expected first parameter to be the class instance")';
		$m.__track_lines__[431] = 'ClassTest.py, line 431:\n    self.assertEqual(results[1], 7)';
		$m.__track_lines__[432] = 'ClassTest.py, line 432:\n    self.assertEqual(results[2], 8)';
		$m.__track_lines__[433] = 'ClassTest.py, line 433:\n    self.assertEqual(results[3], 9)';
		$m.__track_lines__[439] = 'ClassTest.py, line 439:\n    results = ExampleClass().sampleClassMethod("a")';
		$m.__track_lines__[440] = 'ClassTest.py, line 440:\n    self.assertEqual(results[0], ExampleClass, "Expected first parameter to be the class instance")';
		$m.__track_lines__[441] = 'ClassTest.py, line 441:\n    self.assertEqual(results[1], "a")';
		$m.__track_lines__[443] = 'ClassTest.py, line 443:\n    results = ExampleParentClass().sampleClassMethod("a")';
		$m.__track_lines__[444] = 'ClassTest.py, line 444:\n    self.assertEqual(results[0], ExampleParentClass, "Expected first parameter to be the class instance")';
		$m.__track_lines__[445] = 'ClassTest.py, line 445:\n    self.assertEqual(results[1], "a")';
		$m.__track_lines__[447] = 'ClassTest.py, line 447:\n    results = ExampleChildClass().sampleClassMethod("a")';
		$m.__track_lines__[448] = 'ClassTest.py, line 448:\n    self.assertEqual(results[0], ExampleChildClass, "Expected first parameter to be the class instance")';
		$m.__track_lines__[449] = 'ClassTest.py, line 449:\n    self.assertEqual(results[1], "a")';
		$m.__track_lines__[451] = 'ClassTest.py, line 451:\n    results = ExampleClass().sampleClassMethodVarargs("a", "b", "c")';
		$m.__track_lines__[452] = 'ClassTest.py, line 452:\n    self.assertEqual(results[0], ExampleClass, "Expected first parameter to be the class instance")';
		$m.__track_lines__[453] = 'ClassTest.py, line 453:\n    self.assertEqual(results[1][0], "a")';
		$m.__track_lines__[454] = 'ClassTest.py, line 454:\n    self.assertEqual(results[1][1], "b")';
		$m.__track_lines__[455] = 'ClassTest.py, line 455:\n    self.assertEqual(results[1][2], "c")';
		$m.__track_lines__[458] = "ClassTest.py, line 458:\n    self.assertEqual(ExampleParentClass().inert('inert'), 'inert')";
		$m.__track_lines__[459] = "ClassTest.py, line 459:\n    self.assertEqual(ExampleParentClass().global_x1(), 'global test')";
		$m.__track_lines__[460] = "ClassTest.py, line 460:\n    self.assertEqual(ExampleParentClass().global_x2(), 'global test')";
		$m.__track_lines__[463] = 'ClassTest.py, line 463:\n    instance = RecurseMe()';
		$m.__track_lines__[464] = 'ClassTest.py, line 464:\n    self.assertEqual(instance.chain[0], 0)';
		$m.__track_lines__[465] = 'ClassTest.py, line 465:\n    self.assertEqual(instance.chain[1], 1)';
		$m.__track_lines__[467] = 'ClassTest.py, line 467:\n    def testStaticMethod(self):';
		$m.__track_lines__[468] = 'ClassTest.py, line 468:\n    self.assertEqual(ExampleClass.sampleStaticMethod("a"), "a", "Expected static method to take the parameter I give as its first parameter")';
		$m.__track_lines__[469] = 'ClassTest.py, line 469:\n    try:';
		$m.__track_lines__[470] = 'ClassTest.py, line 470:\n    m = ExampleClass.oldIdiomStaticMethod("middle")';
		$m.__track_lines__[471] = 'ClassTest.py, line 471:\n    self.assertEqual(m,"beforemiddleafter")';
		$m.__track_lines__[473] = 'ClassTest.py, line 473:\n    self.fail("Issue #415 - staticmethod(method) idiom does not work")';
		$m.__track_lines__[475] = 'ClassTest.py, line 475:\n    def test_method_alias(self):';
		$m.__track_lines__[476] = 'ClassTest.py, line 476:\n    class C(object):';
		$m.__track_lines__[477] = 'ClassTest.py, line 477:\n    def original(self):';
		$m.__track_lines__[478] = 'ClassTest.py, line 478:\n    return 5';
		$m.__track_lines__[480] = 'ClassTest.py, line 480:\n    alias = original';
		$m.__track_lines__[482] = 'ClassTest.py, line 482:\n    def method_using_alias(self):';
		$m.__track_lines__[483] = 'ClassTest.py, line 483:\n    return self.alias()';
		$m.__track_lines__[485] = 'ClassTest.py, line 485:\n    c = C()';
		$m.__track_lines__[486] = 'ClassTest.py, line 486:\n    self.assertEqual(c.original(), 5)';
		$m.__track_lines__[487] = 'ClassTest.py, line 487:\n    try:';
		$m.__track_lines__[488] = 'ClassTest.py, line 488:\n    self.assertEqual(c.alias(), 5)';
		$m.__track_lines__[489] = 'ClassTest.py, line 489:\n    self.assertEqual(c.method_using_alias(), 5)';
		$m.__track_lines__[491] = 'ClassTest.py, line 491:\n    self.fail("Bug #578 : method alias fails")';
		$m.__track_lines__[493] = 'ClassTest.py, line 493:\n    def test_class_isinstance_type(self):';
		$m.__track_lines__[494] = 'ClassTest.py, line 494:\n    class C(object):';
		$m.__track_lines__[495] = 'ClassTest.py, line 495:\n    pass';
		$m.__track_lines__[496] = 'ClassTest.py, line 496:\n    self.assertTrue(isinstance(C, type), "Bug #579 type type not supported")';
		$m.__track_lines__[498] = 'ClassTest.py, line 498:\n    def test__new__Method(self):';
		$m.__track_lines__[499] = 'ClassTest.py, line 499:\n    c = OtherClass1()';
		$m.__track_lines__[500] = "ClassTest.py, line 500:\n    self.assertEqual(c.__class__.__name__, 'ObjectClass')";
		$m.__track_lines__[501] = 'ClassTest.py, line 501:\n    self.assertEqual(c.prop, 1)';
		$m.__track_lines__[502] = 'ClassTest.py, line 502:\n    c = OtherSubclass1()';
		$m.__track_lines__[503] = 'ClassTest.py, line 503:\n    self.assertEqual(c.__class__.__name__, \'ObjectClass\', "Issue #414: __new__ method on superclass not called")';
		$m.__track_lines__[504] = 'ClassTest.py, line 504:\n    c = OtherClass2()';
		$m.__track_lines__[505] = "ClassTest.py, line 505:\n    self.assertEqual(c.__class__.__name__, 'OtherClass2')";
		$m.__track_lines__[506] = 'ClassTest.py, line 506:\n    try:';
		$m.__track_lines__[507] = 'ClassTest.py, line 507:\n    prop = c.prop';
		$m.__track_lines__[508] = 'ClassTest.py, line 508:\n    self.fail("failed to raise an error on c.prop (improperly follows explicit __new__ with implicit __init__)")';
		$m.__track_lines__[510] = 'ClassTest.py, line 510:\n    self.assertTrue(True)';
		$m.__track_lines__[511] = 'ClassTest.py, line 511:\n    self.assertTrue(c.init, "OtherClass2.__init__() is not executed")';
		$m.__track_lines__[512] = 'ClassTest.py, line 512:\n    try:';
		$m.__track_lines__[513] = 'ClassTest.py, line 513:\n    c = OtherClass3(41, 42)';
		$m.__track_lines__[514] = 'ClassTest.py, line 514:\n    self.assertTrue(True)';
		$m.__track_lines__[516] = 'ClassTest.py, line 516:\n    self.fail("Issue #417: __new__ method fails for lack of arguments")';
		$m.__track_lines__[517] = 'ClassTest.py, line 517:\n    self.assertEqual(c.y if hasattr(c,"y") else 0, 42, "Issue #417: __new__ method not passed constructor arguments.")';
		$m.__track_lines__[519] = 'ClassTest.py, line 519:\n    try:';
		$m.__track_lines__[520] = 'ClassTest.py, line 520:\n    c = OtherClass3()';
		$m.__track_lines__[521] = 'ClassTest.py, line 521:\n    self.fail("Issue #418: __new__ method doesn\'t fail for lack of arguments")';
		$m.__track_lines__[523] = 'ClassTest.py, line 523:\n    self.assertTrue(True)';
		$m.__track_lines__[524] = 'ClassTest.py, line 524:\n    try:';
		$m.__track_lines__[525] = 'ClassTest.py, line 525:\n    c = OtherClass4()';
		$m.__track_lines__[527] = 'ClassTest.py, line 527:\n    self.fail("TypeError on OtherClass4()")';
		$m.__track_lines__[528] = 'ClassTest.py, line 528:\n    c = OtherSubclass4(1, 2, c=3, d=4)';
		$m.__track_lines__[529] = 'ClassTest.py, line 529:\n    try:';
		$m.__track_lines__[530] = 'ClassTest.py, line 530:\n    self.assertEqual(c.args, (1,2))';
		$m.__track_lines__[532] = 'ClassTest.py, line 532:\n    self.fail("c.args is not defined")';
		$m.__track_lines__[533] = 'ClassTest.py, line 533:\n    try:';
		$m.__track_lines__[534] = 'ClassTest.py, line 534:\n    self.assertEqual(c.kwargs, dict(c=3, d=4))';
		$m.__track_lines__[536] = 'ClassTest.py, line 536:\n    self.fail("c.kwargs is not defined")';
		$m.__track_lines__[537] = 'ClassTest.py, line 537:\n    instance = MultiBase.__new__(MultiInherit1)';
		$m.__track_lines__[538] = "ClassTest.py, line 538:\n    self.assertEqual(instance.name, 'MultiInherit1')";
		$m.__track_lines__[539] = 'ClassTest.py, line 539:\n    instance = MultiInherit1.__new__(MultiBase)';
		$m.__track_lines__[540] = "ClassTest.py, line 540:\n    self.assertEqual(instance.name, 'MultiBase')";
		$m.__track_lines__[541] = 'ClassTest.py, line 541:\n    instance = object.__new__(MultiInherit1, **{})';
		$m.__track_lines__[542] = "ClassTest.py, line 542:\n    self.assertEqual(instance.name, 'MultiInherit1')";
		$m.__track_lines__[548] = 'ClassTest.py, line 548:\n    def testIsInstance(self):';
		$m.__track_lines__[549] = 'ClassTest.py, line 549:\n    c = ExampleChildClass()';
		$m.__track_lines__[550] = 'ClassTest.py, line 550:\n    self.failIf(isinstance(c, ExampleClass))';
		$m.__track_lines__[551] = 'ClassTest.py, line 551:\n    self.failUnless(isinstance(c, ExampleChildClass))';
		$m.__track_lines__[552] = 'ClassTest.py, line 552:\n    self.failUnless(isinstance(c, ExampleParentClass))';
		$m.__track_lines__[554] = 'ClassTest.py, line 554:\n    def testIsInstanceNested(self):';
		$m.__track_lines__[555] = 'ClassTest.py, line 555:\n    c = ExampleChildClass()';
		$m.__track_lines__[556] = 'ClassTest.py, line 556:\n    self.failUnless(isinstance(c, (ExampleClass, ExampleChildClass)))';
		$m.__track_lines__[557] = 'ClassTest.py, line 557:\n    self.failIf(isinstance(c, (ExampleClass, ExampleParentObject)))';
		$m.__track_lines__[558] = 'ClassTest.py, line 558:\n    self.failUnless(isinstance(c, (ExampleClass, (ExampleChildClass,))))';
		$m.__track_lines__[560] = 'ClassTest.py, line 560:\n    def testInstanceChecking(self):';
		$m.__track_lines__[561] = 'ClassTest.py, line 561:\n    try:';
		$m.__track_lines__[562] = 'ClassTest.py, line 562:\n    ExampleChildClass.get_x(ExampleChildClass())';
		$m.__track_lines__[563] = 'ClassTest.py, line 563:\n    self.assertTrue(True)';
		$m.__track_lines__[565] = 'ClassTest.py, line 565:\n    self.fail(e)';
		$m.__track_lines__[566] = 'ClassTest.py, line 566:\n    try:';
		$m.__track_lines__[567] = 'ClassTest.py, line 567:\n    ExampleChildClass.get_x(ExampleClass())';
		$m.__track_lines__[568] = "ClassTest.py, line 568:\n    self.fail('Failed to raise error for invalid instance')";
		$m.__track_lines__[570] = "ClassTest.py, line 570:\n    self.assertTrue(e.args[0].find('get_x() must be called') >= 0, e.args[0])";
		$m.__track_lines__[572] = 'ClassTest.py, line 572:\n    def testIsSubclass(self):';
		$m.__track_lines__[573] = 'ClassTest.py, line 573:\n    class A: pass';
		$m.__track_lines__[574] = 'ClassTest.py, line 574:\n    class B(A): pass';
		$m.__track_lines__[575] = 'ClassTest.py, line 575:\n    class C(B): pass';
		$m.__track_lines__[576] = 'ClassTest.py, line 576:\n    class D: pass';
		$m.__track_lines__[577] = 'ClassTest.py, line 577:\n    class E(D, C): pass';
		$m.__track_lines__[579] = 'ClassTest.py, line 579:\n    self.assertTrue(issubclass(A, A))';
		$m.__track_lines__[580] = 'ClassTest.py, line 580:\n    self.assertTrue(issubclass(C, A))';
		$m.__track_lines__[581] = 'ClassTest.py, line 581:\n    self.assertTrue(issubclass(E, A))';
		$m.__track_lines__[582] = 'ClassTest.py, line 582:\n    self.assertTrue(issubclass(E, (PassMeAClass, A)))';
		$m.__track_lines__[583] = 'ClassTest.py, line 583:\n    self.assertFalse(issubclass(A, PassMeAClass))';
		$m.__track_lines__[585] = 'ClassTest.py, line 585:\n    self.assertRaises(TypeError, issubclass, PassMeAClass(), PassMeAClass)';
		$m.__track_lines__[586] = 'ClassTest.py, line 586:\n    self.assertRaises(TypeError, issubclass, PassMeAClass, PassMeAClass())';
		$m.__track_lines__[587] = 'ClassTest.py, line 587:\n    self.assertRaises(TypeError, issubclass, None, PassMeAClass)';
		$m.__track_lines__[589] = 'ClassTest.py, line 589:\n    def testMetaClass(self):';
		$m.__track_lines__[590] = "ClassTest.py, line 590:\n    Klass = type('MyClass', (object,), {'method': method, 'x': 5})";
		$m.__track_lines__[591] = 'ClassTest.py, line 591:\n    instance = Klass()';
		$m.__track_lines__[592] = 'ClassTest.py, line 592:\n    self.assertEqual(instance.method(), 1)';
		$m.__track_lines__[593] = 'ClassTest.py, line 593:\n    self.assertEqual(instance.x, 5)';
		$m.__track_lines__[595] = 'ClassTest.py, line 595:\n    def testMetaClassInheritFromType(self):';
		$m.__track_lines__[596] = 'ClassTest.py, line 596:\n    class Metaklass(type):';
		$m.__track_lines__[597] = 'ClassTest.py, line 597:\n    def metamethod(cls):';
		$m.__track_lines__[598] = 'ClassTest.py, line 598:\n    return 2';
		$m.__track_lines__[599] = 'ClassTest.py, line 599:\n    class Klass(object):';
		$m.__track_lines__[600] = 'ClassTest.py, line 600:\n    __metaclass__ = Metaklass';
		$m.__track_lines__[601] = 'ClassTest.py, line 601:\n    def method(cls):';
		$m.__track_lines__[602] = 'ClassTest.py, line 602:\n    return 1';
		$m.__track_lines__[603] = 'ClassTest.py, line 603:\n    x = 5';
		$m.__track_lines__[604] = 'ClassTest.py, line 604:\n    try:';
		$m.__track_lines__[605] = 'ClassTest.py, line 605:\n    self.assertEqual(Klass.metamethod(), 2)';
		$m.__track_lines__[606] = 'ClassTest.py, line 606:\n    instance = Klass()';
		$m.__track_lines__[607] = 'ClassTest.py, line 607:\n    self.assertEqual(instance.method(), 1)';
		$m.__track_lines__[608] = 'ClassTest.py, line 608:\n    self.assertEqual(instance.x, 5)';
		$m.__track_lines__[610] = "ClassTest.py, line 610:\n    self.fail('bug #298 - missing metaclass features')";
		$m.__track_lines__[612] = 'ClassTest.py, line 612:\n    def testMetaClassDct(self):';
		$m.__track_lines__[613] = 'ClassTest.py, line 613:\n    class MetaklassDctSaver(type):';
		$m.__track_lines__[614] = 'ClassTest.py, line 614:\n    def __init__(cls, name, bases, dct):';
		$m.__track_lines__[615] = 'ClassTest.py, line 615:\n    super(MetaklassDctSaver, cls).__init__(name, bases, dct)';
		$m.__track_lines__[616] = 'ClassTest.py, line 616:\n    cls.saved_dct = dct';
		$m.__track_lines__[617] = 'ClassTest.py, line 617:\n    class MyClass(object):';
		$m.__track_lines__[618] = 'ClassTest.py, line 618:\n    __metaclass__ = MetaklassDctSaver';
		$m.__track_lines__[619] = 'ClassTest.py, line 619:\n    a = 1';
		$m.__track_lines__[620] = 'ClassTest.py, line 620:\n    b = 2';
		$m.__track_lines__[621] = 'ClassTest.py, line 621:\n    try:';
		$m.__track_lines__[622] = 'ClassTest.py, line 622:\n    self.assertTrue(isinstance(MyClass.saved_dct, dict))';
		$m.__track_lines__[623] = 'ClassTest.py, line 623:\n    self.assertTrue("a" in MyClass.saved_dct)';
		$m.__track_lines__[624] = 'ClassTest.py, line 624:\n    self.assertTrue("b" in MyClass.saved_dct)';
		$m.__track_lines__[626] = "ClassTest.py, line 626:\n    self.fail('bug #298 - missing metaclass features')";
		$m.__track_lines__[628] = 'ClassTest.py, line 628:\n    def testMultiSuperclass(self):';
		$m.__track_lines__[629] = "ClassTest.py, line 629:\n    new_value = 'New value'";
		$m.__track_lines__[630] = 'ClassTest.py, line 630:\n    c = ExampleMultiSuperclassNoConstructor(new_value)';
		$m.__track_lines__[632] = 'ClassTest.py, line 632:\n    self.assertEqual(c.x, new_value)';
		$m.__track_lines__[634] = 'ClassTest.py, line 634:\n    self.assertEqual(c.y, ExampleMultiSuperclassParent2.y)';
		$m.__track_lines__[636] = 'ClassTest.py, line 636:\n    self.assertEqual(c.get_value(), new_value)';
		$m.__track_lines__[638] = 'ClassTest.py, line 638:\n    c = ExampleMultiSuperclassExplicitConstructor(new_value)';
		$m.__track_lines__[640] = 'ClassTest.py, line 640:\n    self.assertEqual(c.x, ExampleMultiSuperclassParent1.x)';
		$m.__track_lines__[642] = 'ClassTest.py, line 642:\n    self.assertEqual(c.y, ExampleMultiSuperclassParent2.y)';
		$m.__track_lines__[644] = 'ClassTest.py, line 644:\n    self.assertEqual(c.z, new_value)';
		$m.__track_lines__[646] = 'ClassTest.py, line 646:\n    self.assertEqual(c.get_value(), new_value)';
		$m.__track_lines__[648] = "ClassTest.py, line 648:\n    self.assertEqual(c.get_values(), ':'.join([ExampleMultiSuperclassParent1.x, ExampleMultiSuperclassParent2.y, new_value]))";
		$m.__track_lines__[650] = 'ClassTest.py, line 650:\n    def testMultiDoubleInherit(self):';
		$m.__track_lines__[651] = 'ClassTest.py, line 651:\n    i = DoubleInherit(1,2,3)';
		$m.__track_lines__[652] = 'ClassTest.py, line 652:\n    self.assertEqual(i.get_x(), 1)';
		$m.__track_lines__[653] = 'ClassTest.py, line 653:\n    self.assertEqual(i.get_y(), 2)';
		$m.__track_lines__[654] = 'ClassTest.py, line 654:\n    self.assertEqual(i.get_z(), 3)';
		$m.__track_lines__[656] = 'ClassTest.py, line 656:\n    MultiInherit2.set_x(i, 5)';
		$m.__track_lines__[657] = 'ClassTest.py, line 657:\n    self.assertEqual(MultiInherit1.get_x(i), 5)';
		$m.__track_lines__[659] = "ClassTest.py, line 659:\n    self.assertEqual(i.getName(), 'MultiInherit2', 'Inheritance prolem issue #560')";
		$m.__track_lines__[660] = "ClassTest.py, line 660:\n    self.assertEqual(str(i), 'MultiInherit2', 'Inheritance prolem issue #560')";
		$m.__track_lines__[661] = 'ClassTest.py, line 661:\n    i = DoubleInheritReversed(1,2,3)';
		$m.__track_lines__[662] = "ClassTest.py, line 662:\n    self.assertEqual(i.getName(), 'MultiInherit2')";
		$m.__track_lines__[663] = "ClassTest.py, line 663:\n    self.assertEqual(str(i), 'MultiInherit2')";
		$m.__track_lines__[665] = 'ClassTest.py, line 665:\n    def testClassArguments(self):';
		$m.__track_lines__[666] = 'ClassTest.py, line 666:\n    c = ClassArguments()';
		$m.__track_lines__[667] = 'ClassTest.py, line 667:\n    try:';
		$m.__track_lines__[670] = 'ClassTest.py, line 670:\n    c.no_args()';
		$m.__track_lines__[671] = 'ClassTest.py, line 671:\n    self.fail("Exception should be raised on \'c.no_args()\'")';
		$m.__track_lines__[673] = 'ClassTest.py, line 673:\n    self.assertEqual(e.args[0], "no_args() takes no arguments (1 given)")';
		$m.__track_lines__[675] = 'ClassTest.py, line 675:\n    self.assertEqual(c.self_arg(), True)';
		$m.__track_lines__[676] = 'ClassTest.py, line 676:\n    self.assertEqual(c.two_args(1), 1)';
		$m.__track_lines__[677] = 'ClassTest.py, line 677:\n    try:';
		$m.__track_lines__[680] = 'ClassTest.py, line 680:\n    c.two_args()';
		$m.__track_lines__[681] = 'ClassTest.py, line 681:\n    self.fail("Exception should be raised on \'c.two_args()\'")';
		$m.__track_lines__[683] = 'ClassTest.py, line 683:\n    self.assertEqual(e.args[0], "two_args() takes exactly 2 arguments (1 given)")';
		$m.__track_lines__[685] = 'ClassTest.py, line 685:\n    def testSuperTest(self):';
		$m.__track_lines__[686] = 'ClassTest.py, line 686:\n    c = DoubleInherit(1,2,3)';
		$m.__track_lines__[687] = 'ClassTest.py, line 687:\n    self.assertEqual(super(DoubleInherit, c).get_y(), 2)';
		$m.__track_lines__[688] = 'ClassTest.py, line 688:\n    c.y = 4';
		$m.__track_lines__[689] = 'ClassTest.py, line 689:\n    self.assertEqual(super(DoubleInherit, c).get_y(), 4)';
		$m.__track_lines__[691] = 'ClassTest.py, line 691:\n    instance = super(MultiBase, MultiInherit1).__new__(MultiInherit1)';
		$m.__track_lines__[692] = "ClassTest.py, line 692:\n    self.assertEqual(instance.name, 'MultiInherit1')";
		$m.__track_lines__[693] = 'ClassTest.py, line 693:\n    instance = super(MultiBase, MultiInherit1).__new__(MultiBase)';
		$m.__track_lines__[694] = "ClassTest.py, line 694:\n    self.assertEqual(instance.name, 'MultiBase')";
		$m.__track_lines__[696] = 'ClassTest.py, line 696:\n    instance = super(MultiBase, MultiInherit1).__new__(MultiInherit1)';
		$m.__track_lines__[697] = 'ClassTest.py, line 697:\n    instance.__init__(1,2)';
		$m.__track_lines__[698] = 'ClassTest.py, line 698:\n    self.assertEqual(instance.x, 1)';
		$m.__track_lines__[699] = 'ClassTest.py, line 699:\n    self.assertEqual(instance.y, 2)';
		$m.__track_lines__[700] = 'ClassTest.py, line 700:\n    try:';
		$m.__track_lines__[701] = 'ClassTest.py, line 701:\n    z = instance.z';
		$m.__track_lines__[702] = 'ClassTest.py, line 702:\n    self.fail("failed to raise error for instance.z")';
		$m.__track_lines__[704] = 'ClassTest.py, line 704:\n    self.assertTrue(True)';
		$m.__track_lines__[706] = 'ClassTest.py, line 706:\n    self.fail("failed to raise Attribute error for instance.z")';
		$m.__track_lines__[708] = 'ClassTest.py, line 708:\n    def testSuperArgTest(self):';
		$m.__track_lines__[709] = 'ClassTest.py, line 709:\n    a2 = SuperArg2(a=1,b=2,c=3)';
		$m.__track_lines__[710] = 'ClassTest.py, line 710:\n    a3 = SuperArg3(a=1,b=2,c=3)';
		$m.__track_lines__[711] = 'ClassTest.py, line 711:\n    self.assertEqual(["SuperArg2",a2.a1_args], [\'SuperArg2\', [(\'a\', 1), (\'b\', 2), (\'c\', 3)]])';
		$m.__track_lines__[712] = 'ClassTest.py, line 712:\n    self.assertEqual(["SuperArg3",a3.a1_args], [\'SuperArg3\', [(\'a\', 1), (\'b\', 2), (\'c\', 3)]])';
		$m.__track_lines__[714] = 'ClassTest.py, line 714:\n    def testImportTest(self):';
		$m.__track_lines__[715] = 'ClassTest.py, line 715:\n    import imports';
		$m.__track_lines__[716] = "ClassTest.py, line 716:\n    self.assertEqual(imports.exec_order[0], 'circ1-1')";
		$m.__track_lines__[717] = "ClassTest.py, line 717:\n    self.assertEqual(exec_order[1], 'circ2-1')";
		$m.__track_lines__[718] = "ClassTest.py, line 718:\n    self.assertEqual(EXEC_ORDER[2], 'circ2-2')";
		$m.__track_lines__[719] = "ClassTest.py, line 719:\n    self.assertEqual(imports.exec_order[3], 'circ1-2')";
		$m.__track_lines__[720] = 'ClassTest.py, line 720:\n    self.assertEqual(imports.exec_order[3], IMPORTS.exec_order[3])';
		$m.__track_lines__[722] = 'ClassTest.py, line 722:\n    import imports.child';
		$m.__track_lines__[723] = "ClassTest.py, line 723:\n    teststring = 'import test'";
		$m.__track_lines__[724] = 'ClassTest.py, line 724:\n    try:';
		$m.__track_lines__[725] = 'ClassTest.py, line 725:\n    c = imports.child.Child()';
		$m.__track_lines__[726] = 'ClassTest.py, line 726:\n    self.assertEqual(c.value(teststring), teststring)';
		$m.__track_lines__[728] = 'ClassTest.py, line 728:\n    self.fail(e.message)';
		$m.__track_lines__[730] = 'ClassTest.py, line 730:\n    class C(imports.child.Child): pass';
		$m.__track_lines__[731] = 'ClassTest.py, line 731:\n    c = C()';
		$m.__track_lines__[732] = 'ClassTest.py, line 732:\n    self.assertEqual(c.value(teststring), teststring)';
		$m.__track_lines__[734] = 'ClassTest.py, line 734:\n    def testPassMeAClass(self):';
		$m.__track_lines__[735] = 'ClassTest.py, line 735:\n    res = PassMeAClassFunction(PassMeAClass)';
		$m.__track_lines__[736] = 'ClassTest.py, line 736:\n    self.assertEqual(res, "foo in PassMeAClass")';
		$m.__track_lines__[738] = 'ClassTest.py, line 738:\n    def testClassAttributeAccess(self):';
		$m.__track_lines__[739] = 'ClassTest.py, line 739:\n    self.assertEqual(GetAttribute.getIt, WithAttribute.ATTR)';
		$m.__track_lines__[741] = 'ClassTest.py, line 741:\n    def testNameMapping(self):';
		$m.__track_lines__[742] = "ClassTest.py, line 742:\n    instance = MultiBase('a')";
		$m.__track_lines__[743] = 'ClassTest.py, line 743:\n    r = instance.prototype(1, 2, 3)';
		$m.__track_lines__[744] = "ClassTest.py, line 744:\n    self.assertEqual(r[0], 'MultiBase')";
		$m.__track_lines__[745] = 'ClassTest.py, line 745:\n    self.assertEqual(r[1], 1)';
		$m.__track_lines__[746] = 'ClassTest.py, line 746:\n    self.assertEqual(r[2], 2)';
		$m.__track_lines__[747] = 'ClassTest.py, line 747:\n    self.assertEqual(r[3], 3)';
		$m.__track_lines__[749] = "ClassTest.py, line 749:\n    instance = MultiInherit1('a', 'b')";
		$m.__track_lines__[750] = 'ClassTest.py, line 750:\n    r = instance.call(1, 2, 3)';
		$m.__track_lines__[751] = "ClassTest.py, line 751:\n    self.assertEqual(r[0], 'MultiInherit1')";
		$m.__track_lines__[752] = 'ClassTest.py, line 752:\n    self.assertEqual(r[1], 1)';
		$m.__track_lines__[753] = 'ClassTest.py, line 753:\n    self.assertEqual(r[2], 2)';
		$m.__track_lines__[754] = 'ClassTest.py, line 754:\n    self.assertEqual(r[3], 3)';
		$m.__track_lines__[756] = 'ClassTest.py, line 756:\n    def testGlobalClassFactory(self):';
		$m.__track_lines__[758] = 'ClassTest.py, line 758:\n    gregister("passme", PassMeAClass)';
		$m.__track_lines__[759] = 'ClassTest.py, line 759:\n    gregister("exchild", ExampleChildClass)';
		$m.__track_lines__[760] = 'ClassTest.py, line 760:\n    gregister("mscp1", ExampleMultiSuperclassParent1)';
		$m.__track_lines__[762] = 'ClassTest.py, line 762:\n    pmc = ggetObject("passme")';
		$m.__track_lines__[763] = 'ClassTest.py, line 763:\n    self.assertEqual(pmc.foo(), "foo in PassMeAClass", "foo !in PassMeAClass")';
		$m.__track_lines__[765] = 'ClassTest.py, line 765:\n    try:';
		$m.__track_lines__[766] = 'ClassTest.py, line 766:\n    pmc = ggetObject("mscp1", 5)';
		$m.__track_lines__[768] = 'ClassTest.py, line 768:\n    self.assertEqual(False, True, "Exception indicates bug in compiler: \'Error: uncaught exception: ExampleMultiSuperclassParent1() arguments after ** must be a dictionary 5\'")';
		$m.__track_lines__[770] = 'ClassTest.py, line 770:\n    self.assertEqual(pmc.x, 5, "pass me class x != 5")';
		$m.__track_lines__[771] = 'ClassTest.py, line 771:\n    try:';
		$m.__track_lines__[772] = 'ClassTest.py, line 772:\n    pmc = ggetObject("exchild", 5, 7) # 5 is ignored';
		$m.__track_lines__[774] = 'ClassTest.py, line 774:\n    self.assertEqual(False, True, "Exception indicates bug in compiler: \'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7\'")';
		$m.__track_lines__[776] = 'ClassTest.py, line 776:\n    self.assertEqual(pmc.prop_a, 1, "pass me class prop_a != 1")';
		$m.__track_lines__[777] = 'ClassTest.py, line 777:\n    self.assertEqual(pmc.prop_b, 7, "pass me class prop_b != 7")';
		$m.__track_lines__[779] = 'ClassTest.py, line 779:\n    def testClassFactory(self):';
		$m.__track_lines__[781] = 'ClassTest.py, line 781:\n    f = Factory()';
		$m.__track_lines__[782] = 'ClassTest.py, line 782:\n    f.register("passme", PassMeAClass)';
		$m.__track_lines__[783] = 'ClassTest.py, line 783:\n    f.register("exchild", ExampleChildClass)';
		$m.__track_lines__[785] = 'ClassTest.py, line 785:\n    try:';
		$m.__track_lines__[786] = 'ClassTest.py, line 786:\n    pmc = f.getObjectCompilerBug("passme")';
		$m.__track_lines__[788] = 'ClassTest.py, line 788:\n    self.assertEqual(False, True, "Compiler bug in class factory test")';
		$m.__track_lines__[790] = 'ClassTest.py, line 790:\n    self.assertEqual(pmc.foo(), "foo in PassMeAClass")';
		$m.__track_lines__[792] = 'ClassTest.py, line 792:\n    pmc = f.getObject("passme")';
		$m.__track_lines__[793] = 'ClassTest.py, line 793:\n    self.assertEqual(pmc.foo(), "foo in PassMeAClass")';
		$m.__track_lines__[795] = 'ClassTest.py, line 795:\n    try:';
		$m.__track_lines__[796] = 'ClassTest.py, line 796:\n    pmc = f.getObject("exchild", 5, 7) # 5 is ignored';
		$m.__track_lines__[798] = 'ClassTest.py, line 798:\n    self.assertEqual(False, True, "Exception indicates bug in compiler: \'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7\'")';
		$m.__track_lines__[800] = 'ClassTest.py, line 800:\n    self.assertEqual(pmc.prop_a, 1)';
		$m.__track_lines__[801] = 'ClassTest.py, line 801:\n    self.assertEqual(pmc.prop_b, 7)';
		$m.__track_lines__[803] = 'ClassTest.py, line 803:\n    def testClassFactory(self):';
		$m.__track_lines__[805] = 'ClassTest.py, line 805:\n    f = Factory()';
		$m.__track_lines__[806] = 'ClassTest.py, line 806:\n    f.register("passme", PassMeAClass)';
		$m.__track_lines__[807] = 'ClassTest.py, line 807:\n    f.register("exchild", ExampleChildClass)';
		$m.__track_lines__[809] = 'ClassTest.py, line 809:\n    try:';
		$m.__track_lines__[810] = 'ClassTest.py, line 810:\n    pmc = f.getObjectCompilerBug("passme")';
		$m.__track_lines__[812] = 'ClassTest.py, line 812:\n    self.assertEqual(False, True, "Compiler bug in class factory test")';
		$m.__track_lines__[814] = 'ClassTest.py, line 814:\n    self.assertEqual(pmc.foo(), "foo in PassMeAClass")';
		$m.__track_lines__[816] = 'ClassTest.py, line 816:\n    pmc = f.getObject("passme")';
		$m.__track_lines__[817] = 'ClassTest.py, line 817:\n    self.assertEqual(pmc.foo(), "foo in PassMeAClass")';
		$m.__track_lines__[819] = 'ClassTest.py, line 819:\n    try:';
		$m.__track_lines__[820] = 'ClassTest.py, line 820:\n    pmc = f.getObject("exchild", 5, 7) # 5 is ignored';
		$m.__track_lines__[822] = 'ClassTest.py, line 822:\n    self.assertEqual(False, True, "Exception indicates bug in compiler: \'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7\'")';
		$m.__track_lines__[824] = 'ClassTest.py, line 824:\n    self.assertEqual(pmc.prop_a, 1)';
		$m.__track_lines__[825] = 'ClassTest.py, line 825:\n    self.assertEqual(pmc.prop_b, 7)';
		$m.__track_lines__[827] = 'ClassTest.py, line 827:\n    def testImportKeywords(self):';
		$m.__track_lines__[828] = 'ClassTest.py, line 828:\n    import imports.enum.super';
		$m.__track_lines__[829] = 'ClassTest.py, line 829:\n    self.assertEqual(imports.enum.super.var, 1)';
		$m.__track_lines__[830] = 'ClassTest.py, line 830:\n    self.assertEqual(imports.enum.super.function(), 2)';
		$m.__track_lines__[832] = 'ClassTest.py, line 832:\n    from imports import enumerate';
		$m.__track_lines__[833] = 'ClassTest.py, line 833:\n    self.assertEqual(enumerate.list, 1)';
		$m.__track_lines__[835] = 'ClassTest.py, line 835:\n    from imports.enumerate import dict';
		$m.__track_lines__[836] = 'ClassTest.py, line 836:\n    self.assertEqual(dict(), (1,2))';
		$m.__track_lines__[838] = 'ClassTest.py, line 838:\n    def testDescriptors(self):';
		$m.__track_lines__[839] = 'ClassTest.py, line 839:\n    global revealAccessLog';
		$m.__track_lines__[840] = 'ClassTest.py, line 840:\n    decorated = Decorated()';
		$m.__track_lines__[841] = 'ClassTest.py, line 841:\n    revealAccessLog = None';
		$m.__track_lines__[843] = 'ClassTest.py, line 843:\n    self.assertEqual(decorated.x, 10)';
		$m.__track_lines__[844] = 'ClassTest.py, line 844:\n    self.assertEqual(revealAccessLog, "Retrieving var \'x\'")';
		$m.__track_lines__[846] = 'ClassTest.py, line 846:\n    decorated.x = 5';
		$m.__track_lines__[847] = 'ClassTest.py, line 847:\n    self.assertEqual(revealAccessLog, "Updating var \'x\': 5")';
		$m.__track_lines__[848] = 'ClassTest.py, line 848:\n    self.assertEqual(decorated.x, 5)';
		$m.__track_lines__[850] = 'ClassTest.py, line 850:\n    del decorated.x';
		$m.__track_lines__[851] = 'ClassTest.py, line 851:\n    self.assertEqual(revealAccessLog, "Deleting var \'x\'")';
		$m.__track_lines__[852] = 'ClassTest.py, line 852:\n    try:';
		$m.__track_lines__[853] = 'ClassTest.py, line 853:\n    x = decorated.x';
		$m.__track_lines__[854] = 'ClassTest.py, line 854:\n    self.fail("Failed to raise error for \'del decorated.x\'")';
		$m.__track_lines__[856] = 'ClassTest.py, line 856:\n    self.assertTrue(True)';
		$m.__track_lines__[859] = 'ClassTest.py, line 859:\n    self.fail("Failed to raise Attribute error for \'del decorated.x\'")';
		$m.__track_lines__[861] = 'ClassTest.py, line 861:\n    def testProperty(self):';
		$m.__track_lines__[862] = 'ClassTest.py, line 862:\n    p = OldStylePropertyDecorating()';
		$m.__track_lines__[864] = 'ClassTest.py, line 864:\n    p.x = 1';
		$m.__track_lines__[865] = 'ClassTest.py, line 865:\n    self.assertEqual(p._x, 1)';
		$m.__track_lines__[866] = 'ClassTest.py, line 866:\n    self.assertEqual(p.x, 1)';
		$m.__track_lines__[867] = 'ClassTest.py, line 867:\n    del p.x';
		$m.__track_lines__[868] = 'ClassTest.py, line 868:\n    try:';
		$m.__track_lines__[869] = 'ClassTest.py, line 869:\n    x = p._x';
		$m.__track_lines__[870] = 'ClassTest.py, line 870:\n    self.fail("Failed to raise error for \'x = p._x\'")';
		$m.__track_lines__[872] = 'ClassTest.py, line 872:\n    self.assertTrue(True)';
		$m.__track_lines__[874] = 'ClassTest.py, line 874:\n    self.fail("Failed to raise Attribute error for \'x = p._x\'")';
		$m.__track_lines__[876] = 'ClassTest.py, line 876:\n    p = NewStylePropertyDecorating()';
		$m.__track_lines__[878] = 'ClassTest.py, line 878:\n    p.x = 1';
		$m.__track_lines__[879] = 'ClassTest.py, line 879:\n    self.assertEqual(p._x, 1)';
		$m.__track_lines__[880] = 'ClassTest.py, line 880:\n    self.assertEqual(p.x, 1)';
		$m.__track_lines__[881] = 'ClassTest.py, line 881:\n    del p.x';
		$m.__track_lines__[882] = 'ClassTest.py, line 882:\n    try:';
		$m.__track_lines__[883] = 'ClassTest.py, line 883:\n    x = p._x';
		$m.__track_lines__[884] = 'ClassTest.py, line 884:\n    self.fail("Failed to raise error for \'x = p._x\'")';
		$m.__track_lines__[886] = 'ClassTest.py, line 886:\n    self.assertTrue(True)';
		$m.__track_lines__[888] = 'ClassTest.py, line 888:\n    self.fail("Failed to raise Attribute error for \'x = p._x\'")';
		$m.__track_lines__[890] = 'ClassTest.py, line 890:\n    def testDynamicLoading(self):';
		$m.__track_lines__[891] = 'ClassTest.py, line 891:\n    self.assertEqual(I18N.i18n.example(),';
		$m.__track_lines__[893] = 'ClassTest.py, line 893:\n    self.assertEqual(I18N.domain.i18n.example(),';
		$m.__track_lines__[895] = 'ClassTest.py, line 895:\n    self.assertEqual(I18N.domain.subdomain.i18n.example(),';
		$m.__track_lines__[897] = 'ClassTest.py, line 897:\n    self.assertEqual(I18N.i18n.another_example(),';
		$m.__track_lines__[899] = 'ClassTest.py, line 899:\n    self.assertEqual(I18N.domain.i18n.another_example(),';
		$m.__track_lines__[901] = "ClassTest.py, line 901:\n    I18N.set_locale('en_US')";
		$m.__track_lines__[902] = 'ClassTest.py, line 902:\n    self.assertEqual(I18N.i18n.example(),';
		$m.__track_lines__[904] = 'ClassTest.py, line 904:\n    self.assertEqual(I18N.domain.i18n.example(),';
		$m.__track_lines__[906] = 'ClassTest.py, line 906:\n    self.assertEqual(I18N.domain.subdomain.i18n.example(),';
		$m.__track_lines__[908] = 'ClassTest.py, line 908:\n    self.assertEqual(I18N.i18n.another_example(),';
		$m.__track_lines__[910] = 'ClassTest.py, line 910:\n    self.assertEqual(I18N.domain.i18n.another_example(),';
		$m.__track_lines__[913] = 'ClassTest.py, line 913:\n    def testClassesAnywhere(self):';
		$m.__track_lines__[914] = 'ClassTest.py, line 914:\n    class A(object):';
		$m.__track_lines__[915] = 'ClassTest.py, line 915:\n    def __init__(self, what):';
		$m.__track_lines__[916] = 'ClassTest.py, line 916:\n    if not what:';
		$m.__track_lines__[917] = 'ClassTest.py, line 917:\n    class B(object):';
		$m.__track_lines__[918] = 'ClassTest.py, line 918:\n    def __init__(self):';
		$m.__track_lines__[919] = 'ClassTest.py, line 919:\n    self.v = 0';
		$m.__track_lines__[921] = 'ClassTest.py, line 921:\n    class B(object):';
		$m.__track_lines__[922] = 'ClassTest.py, line 922:\n    def __init__(self):';
		$m.__track_lines__[923] = 'ClassTest.py, line 923:\n    self.v = 1';
		$m.__track_lines__[924] = 'ClassTest.py, line 924:\n    self.b = B()';
		$m.__track_lines__[926] = 'ClassTest.py, line 926:\n    a = A(0)';
		$m.__track_lines__[927] = 'ClassTest.py, line 927:\n    self.assertEqual(a.b.v, 0)';
		$m.__track_lines__[928] = 'ClassTest.py, line 928:\n    a = A(1)';
		$m.__track_lines__[929] = 'ClassTest.py, line 929:\n    self.assertEqual(a.b.v, 1)';
		$m.__track_lines__[931] = 'ClassTest.py, line 931:\n    def testClassDefinitionCode(self):';
		$m.__track_lines__[932] = 'ClassTest.py, line 932:\n    class A(object):';
		$m.__track_lines__[933] = 'ClassTest.py, line 933:\n    def __init__(self, what):';
		$m.__track_lines__[934] = 'ClassTest.py, line 934:\n    class B(object):';
		$m.__track_lines__[935] = 'ClassTest.py, line 935:\n    if not what:';
		$m.__track_lines__[936] = 'ClassTest.py, line 936:\n    def __init__(self):';
		$m.__track_lines__[937] = 'ClassTest.py, line 937:\n    self.v = 0';
		$m.__track_lines__[939] = 'ClassTest.py, line 939:\n    def __init__(self):';
		$m.__track_lines__[940] = 'ClassTest.py, line 940:\n    self.v = 1';
		$m.__track_lines__[941] = 'ClassTest.py, line 941:\n    self.b = B()';
		$m.__track_lines__[943] = 'ClassTest.py, line 943:\n    a = A(0)';
		$m.__track_lines__[944] = 'ClassTest.py, line 944:\n    self.assertEqual(a.b.v, 0)';
		$m.__track_lines__[945] = 'ClassTest.py, line 945:\n    a = A(1)';
		$m.__track_lines__[946] = 'ClassTest.py, line 946:\n    self.assertEqual(a.b.v, 1)';
		$m.__track_lines__[948] = 'ClassTest.py, line 948:\n    class A(object):';
		$m.__track_lines__[949] = 'ClassTest.py, line 949:\n    l = [1,2,3]';
		$m.__track_lines__[950] = 'ClassTest.py, line 950:\n    l[1] = 22';
		$m.__track_lines__[951] = 'ClassTest.py, line 951:\n    d = {}';
		$m.__track_lines__[952] = "ClassTest.py, line 952:\n    d['a'] = 1";
		$m.__track_lines__[953] = 'ClassTest.py, line 953:\n    l1 = []';
		$m.__track_lines__[954] = 'ClassTest.py, line 954:\n    l2 = []';
		$m.__track_lines__[955] = 'ClassTest.py, line 955:\n    for i in range(4):';
		$m.__track_lines__[956] = 'ClassTest.py, line 956:\n    l1.append(i)';
		$m.__track_lines__[957] = 'ClassTest.py, line 957:\n    i = 0';
		$m.__track_lines__[958] = 'ClassTest.py, line 958:\n    while i < 4:';
		$m.__track_lines__[959] = 'ClassTest.py, line 959:\n    l2.append(i)';
		$m.__track_lines__[960] = 'ClassTest.py, line 960:\n    i += 1';
		$m.__track_lines__[962] = 'ClassTest.py, line 962:\n    a = A()';
		$m.__track_lines__[963] = 'ClassTest.py, line 963:\n    v = [1,22,3]';
		$m.__track_lines__[964] = 'ClassTest.py, line 964:\n    self.assertTrue(a.l == v, "%r == %r" % (a.l, v))';
		$m.__track_lines__[965] = "ClassTest.py, line 965:\n    v = {'a': 1}";
		$m.__track_lines__[966] = 'ClassTest.py, line 966:\n    self.assertTrue(a.d == v, "%r == %r" % (a.d, v))';
		$m.__track_lines__[967] = 'ClassTest.py, line 967:\n    v = [0,1,2,3]';
		$m.__track_lines__[968] = 'ClassTest.py, line 968:\n    self.assertTrue(a.l1 == v, "%r == %r" % (a.l1, v))';
		$m.__track_lines__[969] = 'ClassTest.py, line 969:\n    self.assertTrue(a.l2 == v, "%r == %r" % (a.l2, v))';
		$m.__track_lines__[971] = 'ClassTest.py, line 971:\n    def testGenericMethodDecorators(self):';
		$m.__track_lines__[975] = 'ClassTest.py, line 975:\n    obj = DecoratedMethods()';
		$m.__track_lines__[976] = 'ClassTest.py, line 976:\n    self.assertEqual(obj.mtd1("b"), "1b2")';
		$m.__track_lines__[977] = 'ClassTest.py, line 977:\n    self.assertEqual(obj.mtd2("b"), "31b24")';
		$m.__track_lines__[978] = 'ClassTest.py, line 978:\n    self.assertEqual(obj.mtd3("b"), "abc")';
		$m.__track_lines__[979] = 'ClassTest.py, line 979:\n    self.assertEqual(obj.mtd4("b"), "a3b4c")';
		$m.__track_lines__[981] = 'ClassTest.py, line 981:\n    exc_raised = False';
		$m.__track_lines__[982] = 'ClassTest.py, line 982:\n    try:';
		$m.__track_lines__[983] = 'ClassTest.py, line 983:\n    res = obj.mtd5("b")';
		$m.__track_lines__[985] = 'ClassTest.py, line 985:\n    exc_raised = True';
		$m.__track_lines__[986] = 'ClassTest.py, line 986:\n    self.assertTrue(exc_raised, "TypeError wrong arguments count not raised")';
		$m.__track_lines__[988] = 'ClassTest.py, line 988:\n    self.assertEqual(obj.mtd_static("b"), "5b6")';
		$m.__track_lines__[989] = 'ClassTest.py, line 989:\n    self.assertEqual(DecoratedMethods.mtd_static(*["b"], **{}), "5b6")';
		$m.__track_lines__[990] = 'ClassTest.py, line 990:\n    self.assertEqual(obj.mtd_static2("b"), "55b66")';
		$m.__track_lines__[991] = 'ClassTest.py, line 991:\n    self.assertEqual(DecoratedMethods.mtd_static("b"), "5b6")';
		$m.__track_lines__[992] = 'ClassTest.py, line 992:\n    self.assertEqual(DecoratedMethods.mtd_static2("b"), "55b66")';
		$m.__track_lines__[994] = 'ClassTest.py, line 994:\n    try:';
		$m.__track_lines__[995] = 'ClassTest.py, line 995:\n    self.assertEqual(obj.mtd_class("b"), "7b8")';
		$m.__track_lines__[996] = 'ClassTest.py, line 996:\n    self.assertEqual(obj.mtd_class2("b"), "77b88")';
		$m.__track_lines__[997] = 'ClassTest.py, line 997:\n    self.assertEqual(DecoratedMethods.mtd_class("b"), "7b8")';
		$m.__track_lines__[998] = 'ClassTest.py, line 998:\n    self.assertEqual(DecoratedMethods.mtd_class2("b"), "77b88")';
		$m.__track_lines__[1000] = 'ClassTest.py, line 1000:\n    msg = str(e)';
		$m.__track_lines__[1001] = 'ClassTest.py, line 1001:\n    if "fnc() takes exactly 2 arguments (1 given)" in msg:';
		$m.__track_lines__[1002] = 'ClassTest.py, line 1002:\n    msg = "bug #318 - " + msg';
		$m.__track_lines__[1003] = 'ClassTest.py, line 1003:\n    self.fail("Bug #580 : %s " % msg)';
		$m.__track_lines__[1005] = 'ClassTest.py, line 1005:\n    def testExpressionInherit(self):';
		$m.__track_lines__[1006] = 'ClassTest.py, line 1006:\n    class X(object):';
		$m.__track_lines__[1007] = 'ClassTest.py, line 1007:\n    def m1(self):';
		$m.__track_lines__[1008] = 'ClassTest.py, line 1008:\n    return 1';
		$m.__track_lines__[1009] = 'ClassTest.py, line 1009:\n    class Y(object):';
		$m.__track_lines__[1010] = 'ClassTest.py, line 1010:\n    def m2(self):';
		$m.__track_lines__[1011] = 'ClassTest.py, line 1011:\n    return 2';
		$m.__track_lines__[1013] = 'ClassTest.py, line 1013:\n    cl = [list, X, Y]';
		$m.__track_lines__[1014] = 'ClassTest.py, line 1014:\n    class T(cl[0]):';
		$m.__track_lines__[1015] = 'ClassTest.py, line 1015:\n    pass';
		$m.__track_lines__[1016] = 'ClassTest.py, line 1016:\n    self.assertEqual(T([1]), [1])';
		$m.__track_lines__[1018] = 'ClassTest.py, line 1018:\n    class T(cl[1], cl[2]):';
		$m.__track_lines__[1019] = 'ClassTest.py, line 1019:\n    pass';
		$m.__track_lines__[1020] = 'ClassTest.py, line 1020:\n    t = T()';
		$m.__track_lines__[1021] = 'ClassTest.py, line 1021:\n    self.assertEqual(t.m1(), 1)';
		$m.__track_lines__[1022] = 'ClassTest.py, line 1022:\n    self.assertEqual(t.m2(), 2)';
		$m.__track_lines__[1024] = 'ClassTest.py, line 1024:\n    class T2(type(t)):';
		$m.__track_lines__[1025] = 'ClassTest.py, line 1025:\n    pass';
		$m.__track_lines__[1026] = 'ClassTest.py, line 1026:\n    t2 = T2()';
		$m.__track_lines__[1027] = 'ClassTest.py, line 1027:\n    self.assertEqual(t2.m1(), 1)';
		$m.__track_lines__[1028] = 'ClassTest.py, line 1028:\n    self.assertEqual(t2.m2(), 2)';
		$m.__track_lines__[1030] = 'ClassTest.py, line 1030:\n    class PassMeAClass(object):';
		$m.__track_lines__[1031] = 'ClassTest.py, line 1031:\n    def __init__(self):';
		$m.__track_lines__[1032] = 'ClassTest.py, line 1032:\n    pass';
		$m.__track_lines__[1033] = 'ClassTest.py, line 1033:\n    def foo(self):';
		$m.__track_lines__[1034] = 'ClassTest.py, line 1034:\n    return "foo in PassMeAClass"';
		$m.__track_lines__[1036] = 'ClassTest.py, line 1036:\n    def PassMeAClassFunction(klass):';
		$m.__track_lines__[1037] = 'ClassTest.py, line 1037:\n    c = klass()';
		$m.__track_lines__[1038] = 'ClassTest.py, line 1038:\n    return c.foo()';
		$m.__track_lines__[1041] = 'ClassTest.py, line 1041:\n    def method(self):';
		$m.__track_lines__[1042] = 'ClassTest.py, line 1042:\n    return 1';
		$m.__track_lines__[1046] = 'ClassTest.py, line 1046:\n    class ExampleClass:';
		$m.__track_lines__[1047] = 'ClassTest.py, line 1047:\n    x = "test"';
		$m.__track_lines__[1048] = 'ClassTest.py, line 1048:\n    a = 1';
		$m.__track_lines__[1049] = 'ClassTest.py, line 1049:\n    b = 2';
		$m.__track_lines__[1050] = 'ClassTest.py, line 1050:\n    c = a|b';
		$m.__track_lines__[1053] = 'ClassTest.py, line 1052:\n    @classmethod ... def sampleClassMethod(cls, arg):';
		$m.__track_lines__[1054] = 'ClassTest.py, line 1054:\n    return cls, arg';
		$m.__track_lines__[1057] = 'ClassTest.py, line 1056:\n    @classmethod ... def sampleClassMethodVarargs(cls, *args):';
		$m.__track_lines__[1058] = 'ClassTest.py, line 1058:\n    return cls, args';
		$m.__track_lines__[1061] = 'ClassTest.py, line 1060:\n    @classmethod ... def sampleClassMethodKwargs(cls, a=0, b=1, c=2):';
		$m.__track_lines__[1062] = 'ClassTest.py, line 1062:\n    return cls, a, b, c';
		$m.__track_lines__[1065] = 'ClassTest.py, line 1064:\n    @staticmethod ... def sampleStaticMethod(arg):';
		$m.__track_lines__[1066] = 'ClassTest.py, line 1066:\n    return arg';
		$m.__track_lines__[1068] = 'ClassTest.py, line 1068:\n    def shouldntWork(arg):';
		$m.__track_lines__[1069] = 'ClassTest.py, line 1069:\n    return "before" + arg + "after"';
		$m.__track_lines__[1071] = 'ClassTest.py, line 1071:\n    oldIdiomStaticMethod = staticmethod(shouldntWork)';
		$m.__track_lines__[1073] = 'ClassTest.py, line 1073:\n    def fail_a(self):';
		$m.__track_lines__[1074] = 'ClassTest.py, line 1074:\n    return a';
		$m.__track_lines__[1077] = "ClassTest.py, line 1077:\n    x = 'global test'";
		$m.__track_lines__[1079] = 'ClassTest.py, line 1079:\n    class ExampleParentClass:';
		$m.__track_lines__[1080] = 'ClassTest.py, line 1080:\n    x = "test"';
		$m.__track_lines__[1082] = 'ClassTest.py, line 1082:\n    def __init__(self, a=1, b=2):';
		$m.__track_lines__[1083] = 'ClassTest.py, line 1083:\n    self.prop_a = a';
		$m.__track_lines__[1084] = 'ClassTest.py, line 1084:\n    self.prop_b = b';
		$m.__track_lines__[1087] = 'ClassTest.py, line 1086:\n    @classmethod ... def sampleClassMethod(cls, arg):';
		$m.__track_lines__[1088] = 'ClassTest.py, line 1088:\n    return cls, arg';
		$m.__track_lines__[1090] = 'ClassTest.py, line 1090:\n    def get_x(self):';
		$m.__track_lines__[1091] = 'ClassTest.py, line 1091:\n    return self.x';
		$m.__track_lines__[1093] = 'ClassTest.py, line 1093:\n    def inert(self, x):';
		$m.__track_lines__[1094] = 'ClassTest.py, line 1094:\n    return x';
		$m.__track_lines__[1096] = 'ClassTest.py, line 1096:\n    def global_x1(self):';
		$m.__track_lines__[1097] = 'ClassTest.py, line 1097:\n    return x';
		$m.__track_lines__[1099] = 'ClassTest.py, line 1099:\n    def global_x2(self):';
		$m.__track_lines__[1100] = 'ClassTest.py, line 1100:\n    return x';
		$m.__track_lines__[1102] = 'ClassTest.py, line 1102:\n    class ExampleChildClass(ExampleParentClass):';
		$m.__track_lines__[1103] = 'ClassTest.py, line 1103:\n    def __init__(self, a = 11, b = 22):';
		$m.__track_lines__[1104] = 'ClassTest.py, line 1104:\n    ExampleParentClass.__init__(self, b = b)';
		$m.__track_lines__[1107] = 'ClassTest.py, line 1107:\n    class ExampleParentObject:';
		$m.__track_lines__[1108] = 'ClassTest.py, line 1108:\n    x = []';
		$m.__track_lines__[1110] = 'ClassTest.py, line 1110:\n    class ExampleChildObject(ExampleParentObject):';
		$m.__track_lines__[1111] = 'ClassTest.py, line 1111:\n    pass';
		$m.__track_lines__[1115] = 'ClassTest.py, line 1115:\n    class ExampleGrandParentConstructor:';
		$m.__track_lines__[1116] = 'ClassTest.py, line 1116:\n    z = "grandparent"';
		$m.__track_lines__[1118] = 'ClassTest.py, line 1118:\n    def __init__(self):';
		$m.__track_lines__[1119] = 'ClassTest.py, line 1119:\n    self.r = "older"';
		$m.__track_lines__[1121] = 'ClassTest.py, line 1121:\n    def older(self):';
		$m.__track_lines__[1122] = 'ClassTest.py, line 1122:\n    self.w = 2';
		$m.__track_lines__[1124] = 'ClassTest.py, line 1124:\n    class ExampleParentConstructor(ExampleGrandParentConstructor):';
		$m.__track_lines__[1125] = 'ClassTest.py, line 1125:\n    y = "parent"';
		$m.__track_lines__[1127] = 'ClassTest.py, line 1127:\n    def __init__(self):';
		$m.__track_lines__[1128] = 'ClassTest.py, line 1128:\n    self.x = "test"';
		$m.__track_lines__[1130] = 'ClassTest.py, line 1130:\n    def dosomething(self):';
		$m.__track_lines__[1131] = 'ClassTest.py, line 1131:\n    self.m = 1';
		$m.__track_lines__[1133] = 'ClassTest.py, line 1133:\n    class ExampleChildConstructor(ExampleParentConstructor):';
		$m.__track_lines__[1134] = 'ClassTest.py, line 1134:\n    def __init__(self):';
		$m.__track_lines__[1135] = 'ClassTest.py, line 1135:\n    pass';
		$m.__track_lines__[1137] = 'ClassTest.py, line 1137:\n    class ExampleChildNoConstructor(ExampleParentConstructor):';
		$m.__track_lines__[1138] = 'ClassTest.py, line 1138:\n    pass';
		$m.__track_lines__[1140] = 'ClassTest.py, line 1140:\n    class ExampleChildExplicitConstructor(ExampleParentConstructor):';
		$m.__track_lines__[1141] = 'ClassTest.py, line 1141:\n    def __init__(self):';
		$m.__track_lines__[1142] = 'ClassTest.py, line 1142:\n    ExampleParentConstructor.__init__(self)';
		$m.__track_lines__[1153] = 'ClassTest.py, line 1153:\n    class ObjectClass(object):';
		$m.__track_lines__[1154] = 'ClassTest.py, line 1154:\n    def __init__(self):';
		$m.__track_lines__[1155] = 'ClassTest.py, line 1155:\n    self.prop = 1';
		$m.__track_lines__[1157] = 'ClassTest.py, line 1157:\n    class OtherClass1(object):';
		$m.__track_lines__[1158] = 'ClassTest.py, line 1158:\n    def __new__(cls):';
		$m.__track_lines__[1159] = 'ClassTest.py, line 1159:\n    return ObjectClass()';
		$m.__track_lines__[1161] = 'ClassTest.py, line 1161:\n    class OtherSubclass1(OtherClass1):';
		$m.__track_lines__[1162] = 'ClassTest.py, line 1162:\n    pass';
		$m.__track_lines__[1164] = 'ClassTest.py, line 1164:\n    class OtherClass2(object):';
		$m.__track_lines__[1165] = 'ClassTest.py, line 1165:\n    init = False';
		$m.__track_lines__[1166] = 'ClassTest.py, line 1166:\n    def __new__(cls):';
		$m.__track_lines__[1167] = 'ClassTest.py, line 1167:\n    return ObjectClass.__new__(cls)';
		$m.__track_lines__[1168] = 'ClassTest.py, line 1168:\n    def __init__(self):';
		$m.__track_lines__[1169] = 'ClassTest.py, line 1169:\n    self.init = True';
		$m.__track_lines__[1171] = 'ClassTest.py, line 1171:\n    class OtherClass3(object):';
		$m.__track_lines__[1172] = 'ClassTest.py, line 1172:\n    def __new__(cls, x, y):';
		$m.__track_lines__[1173] = 'ClassTest.py, line 1173:\n    val = object.__new__(cls)';
		$m.__track_lines__[1174] = 'ClassTest.py, line 1174:\n    val.x, val.y = x,y';
		$m.__track_lines__[1175] = 'ClassTest.py, line 1175:\n    return val';
		$m.__track_lines__[1177] = 'ClassTest.py, line 1177:\n    class OtherClass4Mixin:';
		$m.__track_lines__[1178] = 'ClassTest.py, line 1178:\n    pass';
		$m.__track_lines__[1180] = 'ClassTest.py, line 1180:\n    class OtherClass4(object, OtherClass4Mixin):';
		$m.__track_lines__[1181] = 'ClassTest.py, line 1181:\n    def __new__(cls, *args, **kwargs):';
		$m.__track_lines__[1182] = 'ClassTest.py, line 1182:\n    return super(OtherClass4, cls).__new__(cls, *args, **kwargs)';
		$m.__track_lines__[1184] = 'ClassTest.py, line 1184:\n    class OtherSubclass4(OtherClass4):';
		$m.__track_lines__[1185] = 'ClassTest.py, line 1185:\n    def __init__(self, *args, **kwargs):';
		$m.__track_lines__[1186] = 'ClassTest.py, line 1186:\n    self.args = args';
		$m.__track_lines__[1187] = 'ClassTest.py, line 1187:\n    self.kwargs = kwargs';
		$m.__track_lines__[1189] = 'ClassTest.py, line 1189:\n    class ExampleMultiSuperclassParent1:';
		$m.__track_lines__[1190] = "ClassTest.py, line 1190:\n    x = 'Initial X'";
		$m.__track_lines__[1192] = 'ClassTest.py, line 1192:\n    def __init__(self, x):';
		$m.__track_lines__[1193] = 'ClassTest.py, line 1193:\n    self.x = x';
		$m.__track_lines__[1194] = 'ClassTest.py, line 1194:\n    def get_value(self):';
		$m.__track_lines__[1195] = 'ClassTest.py, line 1195:\n    return self.x';
		$m.__track_lines__[1197] = 'ClassTest.py, line 1197:\n    class ExampleMultiSuperclassParent2:';
		$m.__track_lines__[1198] = "ClassTest.py, line 1198:\n    y = 'Initial Y'";
		$m.__track_lines__[1200] = 'ClassTest.py, line 1200:\n    def __init__(self, y):';
		$m.__track_lines__[1201] = 'ClassTest.py, line 1201:\n    self.y = y';
		$m.__track_lines__[1202] = 'ClassTest.py, line 1202:\n    def get_value(self):';
		$m.__track_lines__[1203] = 'ClassTest.py, line 1203:\n    return self.y';
		$m.__track_lines__[1205] = 'ClassTest.py, line 1205:\n    class ExampleMultiSuperclassNoConstructor(ExampleMultiSuperclassParent1, ExampleMultiSuperclassParent2):';
		$m.__track_lines__[1206] = "ClassTest.py, line 1206:\n    z = 'Initial Z'";
		$m.__track_lines__[1208] = 'ClassTest.py, line 1208:\n    class ExampleMultiSuperclassExplicitConstructor(ExampleMultiSuperclassParent1, ExampleMultiSuperclassParent2):';
		$m.__track_lines__[1209] = "ClassTest.py, line 1209:\n    z = 'Initial Z'";
		$m.__track_lines__[1211] = 'ClassTest.py, line 1211:\n    def __init__(self, z):';
		$m.__track_lines__[1212] = 'ClassTest.py, line 1212:\n    self.z = z';
		$m.__track_lines__[1213] = 'ClassTest.py, line 1213:\n    def get_value(self):';
		$m.__track_lines__[1214] = 'ClassTest.py, line 1214:\n    return self.z';
		$m.__track_lines__[1215] = 'ClassTest.py, line 1215:\n    def get_values(self):';
		$m.__track_lines__[1216] = "ClassTest.py, line 1216:\n    return ':'.join([self.x, self.y, self.z])";
		$m.__track_lines__[1218] = 'ClassTest.py, line 1218:\n    class ClassArguments:';
		$m.__track_lines__[1219] = 'ClassTest.py, line 1219:\n    def no_args( ):';
		$m.__track_lines__[1220] = 'ClassTest.py, line 1220:\n    return False';
		$m.__track_lines__[1221] = 'ClassTest.py, line 1221:\n    def self_arg(self):';
		$m.__track_lines__[1222] = 'ClassTest.py, line 1222:\n    return True';
		$m.__track_lines__[1223] = 'ClassTest.py, line 1223:\n    def two_args(self, arg1):';
		$m.__track_lines__[1224] = 'ClassTest.py, line 1224:\n    return arg1';
		$m.__track_lines__[1226] = 'ClassTest.py, line 1226:\n    class MultiBase(object):';
		$m.__track_lines__[1227] = "ClassTest.py, line 1227:\n    name = 'MultiBase'";
		$m.__track_lines__[1228] = 'ClassTest.py, line 1228:\n    def __init__(self, x):';
		$m.__track_lines__[1229] = 'ClassTest.py, line 1229:\n    self.x = x';
		$m.__track_lines__[1231] = 'ClassTest.py, line 1231:\n    def get_x(self):';
		$m.__track_lines__[1232] = 'ClassTest.py, line 1232:\n    return self.x';
		$m.__track_lines__[1234] = 'ClassTest.py, line 1234:\n    def set_x(self,x ):';
		$m.__track_lines__[1235] = 'ClassTest.py, line 1235:\n    self.x = x';
		$m.__track_lines__[1237] = 'ClassTest.py, line 1237:\n    def prototype(self, default, arguments, this):';
		$m.__track_lines__[1238] = 'ClassTest.py, line 1238:\n    return (self.name, default, arguments, this)';
		$m.__track_lines__[1240] = 'ClassTest.py, line 1240:\n    def getName(self):';
		$m.__track_lines__[1241] = "ClassTest.py, line 1241:\n    return 'MultiBase'";
		$m.__track_lines__[1244] = 'ClassTest.py, line 1244:\n    class MultiInherit1(MultiBase):';
		$m.__track_lines__[1245] = "ClassTest.py, line 1245:\n    name = 'MultiInherit1'";
		$m.__track_lines__[1246] = 'ClassTest.py, line 1246:\n    def __init__(self, x, y):';
		$m.__track_lines__[1247] = 'ClassTest.py, line 1247:\n    self.y = y';
		$m.__track_lines__[1248] = 'ClassTest.py, line 1248:\n    MultiBase.__init__(self, x) # yes it gets called twice';
		$m.__track_lines__[1250] = 'ClassTest.py, line 1250:\n    def get_y(self):';
		$m.__track_lines__[1251] = 'ClassTest.py, line 1251:\n    return self.y';
		$m.__track_lines__[1253] = 'ClassTest.py, line 1253:\n    def call(self, default, arguments, this):';
		$m.__track_lines__[1254] = 'ClassTest.py, line 1254:\n    return self.prototype(default, arguments, this)';
		$m.__track_lines__[1257] = 'ClassTest.py, line 1257:\n    class MultiInherit2(MultiBase):';
		$m.__track_lines__[1258] = "ClassTest.py, line 1258:\n    name = 'MultiInherit2'";
		$m.__track_lines__[1259] = 'ClassTest.py, line 1259:\n    def __init__(self, x, z):';
		$m.__track_lines__[1260] = 'ClassTest.py, line 1260:\n    self.z = z';
		$m.__track_lines__[1261] = 'ClassTest.py, line 1261:\n    MultiBase.__init__(self, x) # yes it gets called twice';
		$m.__track_lines__[1263] = 'ClassTest.py, line 1263:\n    def get_z(self):';
		$m.__track_lines__[1264] = 'ClassTest.py, line 1264:\n    return self.z';
		$m.__track_lines__[1266] = 'ClassTest.py, line 1266:\n    def __str__(self):';
		$m.__track_lines__[1267] = "ClassTest.py, line 1267:\n    return 'MultiInherit2'";
		$m.__track_lines__[1269] = 'ClassTest.py, line 1269:\n    def getName(self):';
		$m.__track_lines__[1270] = "ClassTest.py, line 1270:\n    return 'MultiInherit2'";
		$m.__track_lines__[1273] = 'ClassTest.py, line 1273:\n    class DoubleInherit(MultiInherit1, MultiInherit2):';
		$m.__track_lines__[1274] = "ClassTest.py, line 1274:\n    name = 'DoubleInherit'";
		$m.__track_lines__[1275] = 'ClassTest.py, line 1275:\n    def __init__(self, x, y, z):';
		$m.__track_lines__[1276] = 'ClassTest.py, line 1276:\n    MultiInherit1.__init__(self, x, y) # MultiBase __init__ called once';
		$m.__track_lines__[1277] = 'ClassTest.py, line 1277:\n    MultiInherit2.__init__(self, x, z) # MultiBase __init__ called twice';
		$m.__track_lines__[1280] = 'ClassTest.py, line 1280:\n    class DoubleInheritReversed(MultiInherit2, MultiInherit1):';
		$m.__track_lines__[1281] = "ClassTest.py, line 1281:\n    name = 'DoubleInheritReversed'";
		$m.__track_lines__[1282] = 'ClassTest.py, line 1282:\n    def __init__(self, x, y, z):';
		$m.__track_lines__[1283] = 'ClassTest.py, line 1283:\n    MultiInherit1.__init__(self, x, y) # MultiBase __init__ called once';
		$m.__track_lines__[1284] = 'ClassTest.py, line 1284:\n    MultiInherit2.__init__(self, x, z) # MultiBase __init__ called twice';
		$m.__track_lines__[1287] = 'ClassTest.py, line 1287:\n    class RecurseMe(object):';
		$m.__track_lines__[1288] = 'ClassTest.py, line 1288:\n    chain = []';
		$m.__track_lines__[1289] = 'ClassTest.py, line 1289:\n    def __init__(self):';
		$m.__track_lines__[1290] = 'ClassTest.py, line 1290:\n    self.chain.append(0)';
		$m.__track_lines__[1292] = 'ClassTest.py, line 1292:\n    class RecurseMe(RecurseMe):';
		$m.__track_lines__[1293] = 'ClassTest.py, line 1293:\n    def __init__(self):';
		$m.__track_lines__[1296] = 'ClassTest.py, line 1296:\n    super(self.__class__, self).__init__()';
		$m.__track_lines__[1297] = 'ClassTest.py, line 1297:\n    self.chain.append(1)';
		$m.__track_lines__[1299] = 'ClassTest.py, line 1299:\n    class Factory:';
		$m.__track_lines__[1300] = 'ClassTest.py, line 1300:\n    _classes = {}';
		$m.__track_lines__[1301] = 'ClassTest.py, line 1301:\n    def __init__(self):';
		$m.__track_lines__[1302] = 'ClassTest.py, line 1302:\n    pass';
		$m.__track_lines__[1303] = 'ClassTest.py, line 1303:\n    def register(self, className, classe):';
		$m.__track_lines__[1304] = 'ClassTest.py, line 1304:\n    Factory._classes[className] = classe';
		$m.__track_lines__[1306] = 'ClassTest.py, line 1306:\n    def getObjectCompilerBug(self, className,*args, **kargs):';
		$m.__track_lines__[1307] = 'ClassTest.py, line 1307:\n    return Factory._classes[className](*args, **kargs)';
		$m.__track_lines__[1309] = 'ClassTest.py, line 1309:\n    def getObject(self, className,*args, **kargs):';
		$m.__track_lines__[1310] = 'ClassTest.py, line 1310:\n    f = Factory._classes[className]';
		$m.__track_lines__[1311] = 'ClassTest.py, line 1311:\n    return f(*args, **kargs)';
		$m.__track_lines__[1313] = 'ClassTest.py, line 1313:\n    global gclasses';
		$m.__track_lines__[1314] = 'ClassTest.py, line 1314:\n    gclasses = {}';
		$m.__track_lines__[1316] = 'ClassTest.py, line 1316:\n    def gregister(className, classe):';
		$m.__track_lines__[1317] = 'ClassTest.py, line 1317:\n    gclasses[className] = classe';
		$m.__track_lines__[1318] = 'ClassTest.py, line 1318:\n    def ggetObject(className, *args, **kargs):';
		$m.__track_lines__[1319] = 'ClassTest.py, line 1319:\n    classe = gclasses[className]';
		$m.__track_lines__[1320] = 'ClassTest.py, line 1320:\n    return classe(*args, **kargs)';
		$m.__track_lines__[1322] = 'ClassTest.py, line 1322:\n    revealAccessLog = None';
		$m.__track_lines__[1323] = 'ClassTest.py, line 1323:\n    class RevealAccess(object):';
		$m.__track_lines__[1324] = "ClassTest.py, line 1324:\n    def __init__(self, initval=None, name='var'):";
		$m.__track_lines__[1325] = 'ClassTest.py, line 1325:\n    self.val = initval';
		$m.__track_lines__[1326] = 'ClassTest.py, line 1326:\n    self.name = name';
		$m.__track_lines__[1327] = 'ClassTest.py, line 1327:\n    def __get__(self, obj, objtype=None):';
		$m.__track_lines__[1328] = 'ClassTest.py, line 1328:\n    global revealAccessLog';
		$m.__track_lines__[1329] = "ClassTest.py, line 1329:\n    revealAccessLog = 'Retrieving %s' % self.name";
		$m.__track_lines__[1330] = 'ClassTest.py, line 1330:\n    return self.val';
		$m.__track_lines__[1331] = 'ClassTest.py, line 1331:\n    def __set__(self, obj, val):';
		$m.__track_lines__[1332] = 'ClassTest.py, line 1332:\n    global revealAccessLog';
		$m.__track_lines__[1333] = "ClassTest.py, line 1333:\n    revealAccessLog = 'Updating %s: %s' % (self.name, val)";
		$m.__track_lines__[1334] = 'ClassTest.py, line 1334:\n    self.val = val';
		$m.__track_lines__[1335] = 'ClassTest.py, line 1335:\n    def __delete__(self, obj):';
		$m.__track_lines__[1336] = 'ClassTest.py, line 1336:\n    global revealAccessLog';
		$m.__track_lines__[1337] = "ClassTest.py, line 1337:\n    revealAccessLog = 'Deleting %s' % self.name";
		$m.__track_lines__[1338] = 'ClassTest.py, line 1338:\n    del self.val';
		$m.__track_lines__[1340] = 'ClassTest.py, line 1340:\n    class Decorated(object):';
		$m.__track_lines__[1341] = 'ClassTest.py, line 1341:\n    x = RevealAccess(10, "var \'x\'")';
		$m.__track_lines__[1343] = 'ClassTest.py, line 1343:\n    class OldStylePropertyDecorating(object):';
		$m.__track_lines__[1344] = 'ClassTest.py, line 1344:\n    def __init__(self):';
		$m.__track_lines__[1345] = 'ClassTest.py, line 1345:\n    self._x = None';
		$m.__track_lines__[1347] = 'ClassTest.py, line 1347:\n    def getx(self):';
		$m.__track_lines__[1348] = 'ClassTest.py, line 1348:\n    return self._x';
		$m.__track_lines__[1349] = 'ClassTest.py, line 1349:\n    def setx(self, value):';
		$m.__track_lines__[1350] = 'ClassTest.py, line 1350:\n    self._x = value';
		$m.__track_lines__[1351] = 'ClassTest.py, line 1351:\n    def delx(self):';
		$m.__track_lines__[1352] = 'ClassTest.py, line 1352:\n    del self._x';
		$m.__track_lines__[1353] = 'ClassTest.py, line 1353:\n    x = property(getx, setx, delx, "I\'m the \'x\' property.")';
		$m.__track_lines__[1356] = 'ClassTest.py, line 1356:\n    class Property(object):';
		$m.__track_lines__[1357] = 'ClassTest.py, line 1357:\n    def __init__(self, fget=None, fset=None, fdel=None, doc=None):';
		$m.__track_lines__[1358] = 'ClassTest.py, line 1358:\n    self.fget = fget';
		$m.__track_lines__[1359] = 'ClassTest.py, line 1359:\n    self.fset = fset';
		$m.__track_lines__[1360] = 'ClassTest.py, line 1360:\n    self.fdel = fdel';
		$m.__track_lines__[1361] = "ClassTest.py, line 1361:\n    if not doc is None or not hasattr(fget, '__doc__') :";
		$m.__track_lines__[1362] = 'ClassTest.py, line 1362:\n    self.__doc__ = doc';
		$m.__track_lines__[1364] = 'ClassTest.py, line 1364:\n    self.__doc__ = fget.__doc__';
		$m.__track_lines__[1366] = 'ClassTest.py, line 1366:\n    def __get__(self, obj, objtype=None):';
		$m.__track_lines__[1367] = 'ClassTest.py, line 1367:\n    if obj is None:';
		$m.__track_lines__[1368] = 'ClassTest.py, line 1368:\n    return self';
		$m.__track_lines__[1369] = 'ClassTest.py, line 1369:\n    if self.fget is None:';
		$m.__track_lines__[1370] = 'ClassTest.py, line 1370:\n    raise AttributeError, "unreadable attribute"';
		$m.__track_lines__[1371] = 'ClassTest.py, line 1371:\n    return self.fget(obj)';
		$m.__track_lines__[1373] = 'ClassTest.py, line 1373:\n    def __set__(self, obj, value):';
		$m.__track_lines__[1374] = 'ClassTest.py, line 1374:\n    if self.fset is None:';
		$m.__track_lines__[1375] = 'ClassTest.py, line 1375:\n    raise AttributeError, "can\'t set attribute"';
		$m.__track_lines__[1376] = 'ClassTest.py, line 1376:\n    self.fset(obj, value)';
		$m.__track_lines__[1378] = 'ClassTest.py, line 1378:\n    def __delete__(self, obj):';
		$m.__track_lines__[1379] = 'ClassTest.py, line 1379:\n    if self.fdel is None:';
		$m.__track_lines__[1380] = 'ClassTest.py, line 1380:\n    raise AttributeError, "can\'t delete attribute"';
		$m.__track_lines__[1381] = 'ClassTest.py, line 1381:\n    self.fdel(obj)';
		$m.__track_lines__[1383] = 'ClassTest.py, line 1383:\n    def setter(self, fset):';
		$m.__track_lines__[1384] = 'ClassTest.py, line 1384:\n    self.fset = fset';
		$m.__track_lines__[1385] = 'ClassTest.py, line 1385:\n    return self';
		$m.__track_lines__[1387] = 'ClassTest.py, line 1387:\n    def deleter(self, fdel):';
		$m.__track_lines__[1388] = 'ClassTest.py, line 1388:\n    self.fdel = fdel';
		$m.__track_lines__[1389] = 'ClassTest.py, line 1389:\n    return self';
		$m.__track_lines__[1391] = 'ClassTest.py, line 1391:\n    def property_setter(self, fset):';
		$m.__track_lines__[1392] = "ClassTest.py, line 1392:\n    self.__setattr__('fset', fset)";
		$m.__track_lines__[1393] = 'ClassTest.py, line 1393:\n    return self';
		$m.__track_lines__[1394] = 'ClassTest.py, line 1394:\n    def property_deleter(self, fdel):';
		$m.__track_lines__[1395] = "ClassTest.py, line 1395:\n    self.__setattr__('fdel', fdel)";
		$m.__track_lines__[1396] = 'ClassTest.py, line 1396:\n    return self';
		$m.__track_lines__[1401] = 'ClassTest.py, line 1401:\n    property = property';
		$m.__track_lines__[1402] = "ClassTest.py, line 1402:\n    if not hasattr(property, 'setter'):";
		$m.__track_lines__[1404] = 'ClassTest.py, line 1404:\n    property = Property';
		$m.__track_lines__[1406] = 'ClassTest.py, line 1406:\n    class NewStylePropertyDecorating(object):';
		$m.__track_lines__[1407] = 'ClassTest.py, line 1407:\n    def __init__(self):';
		$m.__track_lines__[1408] = 'ClassTest.py, line 1408:\n    self._x = None';
		$m.__track_lines__[1410] = 'ClassTest.py, line 1409:\n    @property ... def x(self):';
		$m.__track_lines__[1412] = 'ClassTest.py, line 1412:\n    return self._x';
		$m.__track_lines__[1414] = 'ClassTest.py, line 1413:\n    @x.setter ... def x(self, value):';
		$m.__track_lines__[1415] = 'ClassTest.py, line 1415:\n    self._x = value';
		$m.__track_lines__[1417] = 'ClassTest.py, line 1416:\n    @x.deleter ... def x(self):';
		$m.__track_lines__[1418] = 'ClassTest.py, line 1418:\n    del self._x';
		$m.__track_lines__[1420] = 'ClassTest.py, line 1420:\n    class SuperArg1(object) :';
		$m.__track_lines__[1421] = 'ClassTest.py, line 1421:\n    def __init__(self,a=None,b=None,c=None) :';
		$m.__track_lines__[1422] = "ClassTest.py, line 1422:\n    self.a1_args = [('a', a),('b',b),('c',c)]";
		$m.__track_lines__[1424] = 'ClassTest.py, line 1424:\n    class SuperArg2(SuperArg1) :';
		$m.__track_lines__[1425] = 'ClassTest.py, line 1425:\n    def __init__(self,a=None,b=None,c=None) :';
		$m.__track_lines__[1426] = "ClassTest.py, line 1426:\n    self.a2_args = [('a', a),('b',b),('c',c)]";
		$m.__track_lines__[1427] = 'ClassTest.py, line 1427:\n    super(SuperArg2,self).__init__(a=a,b=b,c=c)';
		$m.__track_lines__[1429] = 'ClassTest.py, line 1429:\n    class SuperArg3(SuperArg1) :';
		$m.__track_lines__[1430] = 'ClassTest.py, line 1430:\n    def __init__(self,a=None,b=None,c=None) :';
		$m.__track_lines__[1431] = "ClassTest.py, line 1431:\n    self.a3_args = [('a', a),('b',b),('c',c)]";
		$m.__track_lines__[1432] = 'ClassTest.py, line 1432:\n    super(SuperArg3,self).__init__(a,b,c)';
		$m.__track_lines__[1438] = 'ClassTest.py, line 1438:\n    def mdeco1(f):';
		$m.__track_lines__[1439] = 'ClassTest.py, line 1439:\n    def fn1(self, x):';
		$m.__track_lines__[1440] = 'ClassTest.py, line 1440:\n    if not isinstance(self, DecoratedMethods):';
		$m.__track_lines__[1441] = 'ClassTest.py, line 1441:\n    raise TypeError("fn1 - self is not instance of DecoratedMethods")';
		$m.__track_lines__[1442] = 'ClassTest.py, line 1442:\n    return "1" + f(self, x) + "2"';
		$m.__track_lines__[1443] = 'ClassTest.py, line 1443:\n    return fn1';
		$m.__track_lines__[1445] = 'ClassTest.py, line 1445:\n    def mdeco2(f):';
		$m.__track_lines__[1446] = 'ClassTest.py, line 1446:\n    def fn2(self, x):';
		$m.__track_lines__[1447] = 'ClassTest.py, line 1447:\n    if not isinstance(self, DecoratedMethods):';
		$m.__track_lines__[1448] = 'ClassTest.py, line 1448:\n    raise TypeError("fn2 - self is not instance of DecoratedMethods")';
		$m.__track_lines__[1449] = 'ClassTest.py, line 1449:\n    return "3" + f(self, x) + "4"';
		$m.__track_lines__[1450] = 'ClassTest.py, line 1450:\n    return fn2';
		$m.__track_lines__[1452] = 'ClassTest.py, line 1452:\n    def mdeco_with_wrong_args(f):';
		$m.__track_lines__[1453] = 'ClassTest.py, line 1453:\n    def fn_wwa(x): # correct definition should be fn(self, x), this must raise an exc';
		$m.__track_lines__[1454] = 'ClassTest.py, line 1454:\n    return "5" + f(x) + "6"';
		$m.__track_lines__[1455] = 'ClassTest.py, line 1455:\n    return fn_wwa';
		$m.__track_lines__[1457] = 'ClassTest.py, line 1457:\n    def mdeco_static(f):';
		$m.__track_lines__[1458] = 'ClassTest.py, line 1458:\n    def fns(x):';
		$m.__track_lines__[1459] = 'ClassTest.py, line 1459:\n    return "5" + f(x) + "6"';
		$m.__track_lines__[1460] = 'ClassTest.py, line 1460:\n    return fns';
		$m.__track_lines__[1462] = 'ClassTest.py, line 1462:\n    def mdeco_class(f):';
		$m.__track_lines__[1463] = 'ClassTest.py, line 1463:\n    def fnc(cls, x):';
		$m.__track_lines__[1464] = 'ClassTest.py, line 1464:\n    if cls is not DecoratedMethods:';
		$m.__track_lines__[1465] = 'ClassTest.py, line 1465:\n    raise TypeError("fnc - cls is not DecoratedMethods")';
		$m.__track_lines__[1466] = 'ClassTest.py, line 1466:\n    return "7" + f(cls, x) + "8"';
		$m.__track_lines__[1467] = 'ClassTest.py, line 1467:\n    return fnc';
		$m.__track_lines__[1469] = 'ClassTest.py, line 1469:\n    class DecoratedMethods(object):';
		$m.__track_lines__[1471] = 'ClassTest.py, line 1470:\n    @mdeco1 ... def mtd1(self, x):';
		$m.__track_lines__[1472] = 'ClassTest.py, line 1472:\n    return x';
		$m.__track_lines__[1476] = 'ClassTest.py, line 1474:\n    @mdeco2 ... def mtd2(self, x):';
		$m.__track_lines__[1477] = 'ClassTest.py, line 1477:\n    return x';
		$m.__track_lines__[1480] = 'ClassTest.py, line 1479:\n    @imports.decors.othermoduledeco1 ... def mtd3(self, x):';
		$m.__track_lines__[1481] = 'ClassTest.py, line 1481:\n    return x';
		$m.__track_lines__[1485] = 'ClassTest.py, line 1483:\n    @imports.decors.othermoduledeco1 ... def mtd4(self, x):';
		$m.__track_lines__[1486] = 'ClassTest.py, line 1486:\n    return x';
		$m.__track_lines__[1489] = 'ClassTest.py, line 1488:\n    @mdeco_with_wrong_args ... def mtd5(self, x):';
		$m.__track_lines__[1490] = 'ClassTest.py, line 1490:\n    return x';
		$m.__track_lines__[1494] = 'ClassTest.py, line 1492:\n    @staticmethod ... def mtd_static(x):';
		$m.__track_lines__[1495] = 'ClassTest.py, line 1495:\n    return x';
		$m.__track_lines__[1500] = 'ClassTest.py, line 1497:\n    @staticmethod ... def mtd_static2(x):';
		$m.__track_lines__[1501] = 'ClassTest.py, line 1501:\n    return x';
		$m.__track_lines__[1505] = 'ClassTest.py, line 1503:\n    @classmethod ... def mtd_class(cls, x):';
		$m.__track_lines__[1506] = 'ClassTest.py, line 1506:\n    return x';
		$m.__track_lines__[1511] = 'ClassTest.py, line 1508:\n    @classmethod ... def mtd_class2(cls, x):';
		$m.__track_lines__[1512] = 'ClassTest.py, line 1512:\n    return x';
		var $bool23,$bool22,$bool1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_42 = new $p['int'](42);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_22 = new $p['int'](22);
		var $constant_int_41 = new $p['int'](41);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_222 = new $p['int'](222);
		$pyjs.track.module='ClassTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['IN_BROWSER'] = $p['___import___']('UnitTest.IN_BROWSER', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		if ((($bool1=true) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$pyjs.track.lineno=7;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['imports'] = $p['___import___']('imports.circ1', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		}
		$pyjs.track.lineno=8;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['exec_order'] = $p['___import___']('imports.exec_order', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['IMPORTS'] = $p['___import___']('imports.imports', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=9;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['EXEC_ORDER'] = $pyjs.loaded_modules['imports']['exec_order'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=10;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['I18N'] = $p['___import___']('I18N', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=12;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['WithAttribute'] = $p['___import___']('imports.classes.WithAttribute', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=14;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['imports'] = $p['___import___']('imports.decors', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track.lineno=17;
		$m['names'] = $p['dict']([]);
		$pyjs.track.lineno=19;
		$m['SubAssignBase'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'c43b1b24f9115073b77124bb7b826910';
			$pyjs.track.lineno=20;
			$m['names'].__setitem__('SubAssign', 'SubAssign');
			$pyjs.track.lineno=21;
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
					if (self.prototype.__md5__ !== 'c43b1b24f9115073b77124bb7b826910') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:21};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=21;
				$pyjs.track.lineno=22;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=19;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SubAssignBase', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=24;
		$m['SubAssign'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'f323ca54ccd173cb1b4bffdbfaff8184';
			$pyjs.track.lineno=25;
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
					if (self.prototype.__md5__ !== 'f323ca54ccd173cb1b4bffdbfaff8184') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:25};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=25;
				$pyjs.track.lineno=26;
				$m['SubAssignBase']['__init__'](self);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=27;
			$m['names'].__setitem__('SubAssignBase', 'SubAssignBase');
			$pyjs.track.lineno=24;
			var $bases = new Array($m['SubAssignBase']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SubAssign', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=29;
		$m['GetAttribute'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '5fda3b4b30dc900fdd90430602309f5c';
			$pyjs.track.lineno=31;
			$cls_definition['getIt'] = $p['getattr']($m['WithAttribute'], 'ATTR');
			$pyjs.track.lineno=29;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('GetAttribute', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=33;
		$m['Sink'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '3b51fd51f3f0bddabef66aa7e8e6ed82';
			$pyjs.track.lineno=34;
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
					if (self.prototype.__md5__ !== '3b51fd51f3f0bddabef66aa7e8e6ed82') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:34};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=34;
				$pyjs.track.lineno=35;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sink', 'Sink') : $p['setattr'](self, 'sink', 'Sink'); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=33;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Sink', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=37;
		$m['SinkInfo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'b440c8d8c9749a0edd049e366f94c2ba';
			$pyjs.track.lineno=38;
			$method = $pyjs__bind_method2('__init__', function(object_type) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					object_type = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b440c8d8c9749a0edd049e366f94c2ba') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:38};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=38;
				$pyjs.track.lineno=39;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('object_type', object_type) : $p['setattr'](self, 'object_type', object_type); 
				$pyjs.track.lineno=40;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('instance', null) : $p['setattr'](self, 'instance', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['object_type']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=42;
			$method = $pyjs__bind_method2('createInstance', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b440c8d8c9749a0edd049e366f94c2ba') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:42};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=43;
				var $pyjs__ret = self['object_type']();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createInstance'] = $method;
			$pyjs.track.lineno=45;
			$method = $pyjs__bind_method2('getInstance', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b440c8d8c9749a0edd049e366f94c2ba') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2;
				$pyjs.track={module:'ClassTest', lineno:45};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=45;
				$pyjs.track.lineno=46;
				if ((($bool2=$p['op_eq']($p['getattr'](self, 'instance'), null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$pyjs.track.lineno=47;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('instance', self['createInstance']()) : $p['setattr'](self, 'instance', self['createInstance']()); 
				}
				$pyjs.track.lineno=48;
				$pyjs.track.lineno=48;
				var $pyjs__ret = $p['getattr'](self, 'instance');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getInstance'] = $method;
			$pyjs.track.lineno=37;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SinkInfo', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=50;
		$m['Trees'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '9c1955c46beae9b5a1189de76c868e7a';
			$pyjs.track.lineno=51;
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
					if (self.prototype.__md5__ !== '9c1955c46beae9b5a1189de76c868e7a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:51};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=51;
				$pyjs.track.lineno=52;
				$m['Sink']['__init__'](self);
				$pyjs.track.lineno=53;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test', 'Trees') : $p['setattr'](self, 'test', 'Trees'); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=50;
			var $bases = new Array($m['Sink']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Trees', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=55;
		$m['TestClass1Bug339'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '4a121da7dde1676ee80cd776976b317a';
			$pyjs.track.lineno=56;
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
					if (self.prototype.__md5__ !== '4a121da7dde1676ee80cd776976b317a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var test;
				$pyjs.track={module:'ClassTest', lineno:56};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=57;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test', (typeof TestClass2 == "undefined"?$m.TestClass2:TestClass2)()) : $p['setattr'](self, 'test', (typeof TestClass2 == "undefined"?$m.TestClass2:TestClass2)()); 
				$pyjs.track.lineno=59;
				$pyjs_kwargs_call(self['test'], 'test_method', null, null, [{test_arg:$constant_int_0}]);
				$pyjs.track.lineno=64;
				test = (typeof TestClass2 == "undefined"?$m.TestClass2:TestClass2)();
				$pyjs.track.lineno=65;
				$pyjs_kwargs_call(test, 'test_method', null, null, [{test_arg:$constant_int_0}]);
				$pyjs.track.lineno=67;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('test', (typeof TestClass2 == "undefined"?$m.TestClass2:TestClass2)()) : $p['setattr'](self, 'test', (typeof TestClass2 == "undefined"?$m.TestClass2:TestClass2)()); 
				$pyjs.track.lineno=68;
				self['test']['test_method']($constant_int_0);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=55;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestClass1Bug339', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=70;
		$m['TestClass2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'c65416e3d46f2c0b980478fa548fa911';
			$pyjs.track.lineno=71;
			$method = $pyjs__bind_method2('test_method', function(test_arg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					test_arg = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c65416e3d46f2c0b980478fa548fa911') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:71};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=71;
				$pyjs.track.lineno=74;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('value', $constant_int_0) : $p['setattr'](self, 'value', $constant_int_0); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['test_arg']]);
			$cls_definition['test_method'] = $method;
			$pyjs.track.lineno=70;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestClass2', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=76;
		$m['UserListPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '88413494269ce9c8db703fe31cadcb33';
			$pyjs.track.lineno=77;
			$method = $pyjs__bind_method2('setUsers', function(title, screennames) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					screennames = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '88413494269ce9c8db703fe31cadcb33') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof screennames == 'undefined') screennames=arguments.callee.__args__[4][1];

				$pyjs.track={module:'ClassTest', lineno:77};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=77;
				$pyjs.track.lineno=78;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['title'],['screennames', null]]);
			$cls_definition['setUsers'] = $method;
			$pyjs.track.lineno=76;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('UserListPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=80;
		$m['TestClassBug342'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '34b4d883c44295268a604b2deb3dc833';
			$pyjs.track.lineno=81;
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
					if (self.prototype.__md5__ !== '34b4d883c44295268a604b2deb3dc833') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:81};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=81;
				$pyjs.track.lineno=82;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('u', $m['UserListPanel']()) : $p['setattr'](self, 'u', $m['UserListPanel']()); 
				$pyjs.track.lineno=83;
				$pyjs_kwargs_call(self['u'], 'setUsers', null, null, [{screennames:$constant_int_33}, 'title']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=80;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TestClassBug342', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=86;
		$m['ClassTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'd86dcdab5c7f000b33fc169e51a0cf97';
			$pyjs.track.lineno=88;
			$method = $pyjs__bind_method2('testInstancePassing', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,s;
				$pyjs.track={module:'ClassTest', lineno:88};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=88;
				$pyjs.track.lineno=89;
				s = $m['SinkInfo']($m['Trees']);
				$pyjs.track.lineno=90;
				i = s['getInstance']();
				$pyjs.track.lineno=91;
				self['assertEquals']($p['getattr'](i, 'test'), 'Trees');
				$pyjs.track.lineno=92;
				self['assertEquals']($p['getattr'](i, 'sink'), 'Sink');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInstancePassing'] = $method;
			$pyjs.track.lineno=94;
			$method = $pyjs__bind_method2('testBug342', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,t;
				$pyjs.track={module:'ClassTest', lineno:94};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=94;
				$pyjs.track.lineno=95;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=96;
					t = $m['TestClassBug342']();
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=98;
						self['fail']('Bug #342 encountered');
					}
				} finally {
					$pyjs.track.lineno=100;
					self['assertTrue'](true);
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBug342'] = $method;
			$pyjs.track.lineno=102;
			$method = $pyjs__bind_method2('testBug339', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'ClassTest', lineno:102};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=102;
				$pyjs.track.lineno=103;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=104;
					$m['TestClass1Bug339']();
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=106;
						self['fail']('Bug #339 encountered');
					}
				} finally {
					$pyjs.track.lineno=108;
					self['assertTrue'](true);
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBug339'] = $method;
			$pyjs.track.lineno=110;
			$method = $pyjs__bind_method2('testSubAssign', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $4,$2,$3,$1;
				$pyjs.track={module:'ClassTest', lineno:110};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=110;
				$pyjs.track.lineno=111;
				self['assertEquals']((typeof ($1=$m['names']).__array != 'undefined'?
					((typeof $1.__array[$2='SubAssignBase']) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__('SubAssignBase')), 'SubAssignBase');
				$pyjs.track.lineno=112;
				self['assertEquals']((typeof ($3=$m['names']).__array != 'undefined'?
					((typeof $3.__array[$4='SubAssign']) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__('SubAssign')), 'SubAssign');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSubAssign'] = $method;
			$pyjs.track.lineno=115;
			$method = $pyjs__bind_method2('testClassVars', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$bool3,$pyjs_try_err,y,x,z,expected_result1,expected_result2;
				$pyjs.track={module:'ClassTest', lineno:115};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=115;
				$pyjs.track.lineno=116;
				expected_result1 = 'test';
				$pyjs.track.lineno=117;
				expected_result2 = $constant_int_1;
				$pyjs.track.lineno=120;
				self['assertEquals']($p['getattr']((typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'x'), expected_result1);
				$pyjs.track.lineno=121;
				self['assertEquals']($m.ExampleClass['x']['upper'](), expected_result1['upper']());
				$pyjs.track.lineno=124;
				y = (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass)();
				$pyjs.track.lineno=125;
				self['assertEquals']($p['getattr'](y, 'x'), expected_result1);
				$pyjs.track.lineno=128;
				$m.ExampleClass.__is_instance__ && typeof $m.ExampleClass.__setattr__ == 'function' ? $m.ExampleClass.__setattr__('x', expected_result2) : $p['setattr']($m.ExampleClass, 'x', expected_result2); 
				$pyjs.track.lineno=129;
				self['assertEquals']($p['getattr']((typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'x'), expected_result2);
				$pyjs.track.lineno=132;
				z = (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass)();
				$pyjs.track.lineno=133;
				self['assertEquals']($p['getattr'](z, 'x'), expected_result2);
				$pyjs.track.lineno=136;
				self['assertEquals']($p['getattr'](y, 'x'), expected_result2);
				$pyjs.track.lineno=139;
				self['assertEquals']($p['getattr']((typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'c'), $p['op_bitor2']($constant_int_1, $constant_int_2));
				$pyjs.track.lineno=148;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=149;
					$m.ExampleClass()['fail_a']();
					$pyjs.track.lineno=150;
					self['fail']('Failed to raise error on ExampleClass().fail_a() bug #217');
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
					$pyjs.track.module='ClassTest';
					if ((($pyjs_try_err_name == $p['NameError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['NameError']))||(($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=152;
						self['assertTrue'](true);
					} else if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						$pyjs.track.lineno=154;
						self['fail']('Failed to raise NameError or AttributeError on ExampleClass().fail_a() bug #217');
					} else {
						$pyjs.track.lineno=156;
						self['fail']('Failed to raise NameError or AttributeError on ExampleClass().fail_a()');
					}
				}
				$pyjs.track.lineno=160;
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
					$pyjs.track.lineno=161;
					$pyjs.track.lineno=162;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=163;
						x = $m.ExampleClass()['fail_a']();
						$pyjs.track.lineno=164;
						self['assertTrue'](pyjslib.isUndefined(x));
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
						$pyjs.track.module='ClassTest';
						if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							$pyjs.track.lineno=166;
							self['assertTrue'](true);
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassVars'] = $method;
			$pyjs.track.lineno=168;
			$method = $pyjs__bind_method2('test_iops', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul8,b0,$mul6,$assign2,$sub3,$assign1,$sub4,$and1,$and2,$and3,$and4,$and5,a0,$bool6,$bool4,$bool5,$mul7,X,$mul5,a,c,b,d,$add6,$add7,$add5,$add8;
				$pyjs.track={module:'ClassTest', lineno:168};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=168;
				$pyjs.track.lineno=169;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '2e367dfe3c83f1939ff091f48dda149f';
					$pyjs.track.lineno=170;
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
							if (self.prototype.__md5__ !== '2e367dfe3c83f1939ff091f48dda149f') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:170};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=170;
						$pyjs.track.lineno=171;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['x']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=173;
					$method = $pyjs__bind_method2('__add__', function(y) {
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
							if (self.prototype.__md5__ !== '2e367dfe3c83f1939ff091f48dda149f') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add2,$add1;
						$pyjs.track={module:'ClassTest', lineno:173};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=173;
						$pyjs.track.lineno=174;
						$pyjs.track.lineno=174;
						var $pyjs__ret = X((typeof ($add1=$p['getattr'](self, 'x'))==typeof ($add2=$p['getattr'](y, 'x')) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2)));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['y']]);
					$cls_definition['__add__'] = $method;
					$pyjs.track.lineno=176;
					$method = $pyjs__bind_method2('__mul__', function(y) {
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
							if (self.prototype.__md5__ !== '2e367dfe3c83f1939ff091f48dda149f') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $mul2,$mul1;
						$pyjs.track={module:'ClassTest', lineno:176};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=176;
						$pyjs.track.lineno=177;
						$pyjs.track.lineno=177;
						var $pyjs__ret = X((typeof ($mul1=$p['getattr'](self, 'x'))==typeof ($mul2=$p['getattr'](y, 'x')) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2)));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['y']]);
					$cls_definition['__mul__'] = $method;
					$pyjs.track.lineno=179;
					$method = $pyjs__bind_method2('__sub__', function(y) {
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
							if (self.prototype.__md5__ !== '2e367dfe3c83f1939ff091f48dda149f') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $sub2,$sub1;
						$pyjs.track={module:'ClassTest', lineno:179};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=179;
						$pyjs.track.lineno=180;
						$pyjs.track.lineno=180;
						var $pyjs__ret = X((typeof ($sub1=$p['getattr'](self, 'x'))==typeof ($sub2=$p['getattr'](y, 'x')) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2)));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['y']]);
					$cls_definition['__sub__'] = $method;
					$pyjs.track.lineno=182;
					$method = $pyjs__bind_method2('__iadd__', function(y) {
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
							if (self.prototype.__md5__ !== '2e367dfe3c83f1939ff091f48dda149f') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add3,$add4;
						$pyjs.track={module:'ClassTest', lineno:182};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=182;
						$pyjs.track.lineno=183;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', (typeof ($add3=$p['getattr'](self, 'x'))==typeof ($add4=$p['getattr'](y, 'x')) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4))) : $p['setattr'](self, 'x', (typeof ($add3=$p['getattr'](self, 'x'))==typeof ($add4=$p['getattr'](y, 'x')) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4))); 
						$pyjs.track.lineno=184;
						$pyjs.track.lineno=184;
						var $pyjs__ret = self;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['y']]);
					$cls_definition['__iadd__'] = $method;
					$pyjs.track.lineno=186;
					$method = $pyjs__bind_method2('__imul__', function(y) {
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
							if (self.prototype.__md5__ !== '2e367dfe3c83f1939ff091f48dda149f') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $mul4,$mul3;
						$pyjs.track={module:'ClassTest', lineno:186};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=186;
						$pyjs.track.lineno=187;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', (typeof ($mul3=$p['getattr'](self, 'x'))==typeof ($mul4=$p['getattr'](y, 'x')) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4))) : $p['setattr'](self, 'x', (typeof ($mul3=$p['getattr'](self, 'x'))==typeof ($mul4=$p['getattr'](y, 'x')) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4))); 
						$pyjs.track.lineno=188;
						$pyjs.track.lineno=188;
						var $pyjs__ret = self;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['y']]);
					$cls_definition['__imul__'] = $method;
					$pyjs.track.lineno=169;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=190;
				$assign1 = X($constant_int_2);
				a = $assign1;
				a0 = $assign1;
				$pyjs.track.lineno=191;
				$assign2 = X($constant_int_4);
				b = $assign2;
				b0 = $assign2;
				$pyjs.track.lineno=192;
				c = (typeof ($add5=a)==typeof ($add6=b) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				$pyjs.track.lineno=193;
				d = (typeof ($mul5=a)==typeof ($mul6=b) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6));
				$pyjs.track.lineno=194;
				self['assertTrue'](((($bool4=$and1=!$p['op_is'](c, a)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!$p['op_is'](c, b):$and1));
				$pyjs.track.lineno=195;
				self['assertTrue'](((($bool5=$and3=!$p['op_is'](d, a)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool6=$and4=!$p['op_is'](d, b)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!$p['op_is'](d, c):$and4):$and3));
				$pyjs.track.lineno=196;
				self['assertEqual']($p['getattr'](c, 'x'), $constant_int_6);
				$pyjs.track.lineno=197;
				self['assertEqual']($p['getattr'](d, 'x'), $constant_int_8);
				$pyjs.track.lineno=198;
				a = (typeof ($add7=a)==typeof ($add8=b) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				$pyjs.track.lineno=199;
				self['assertTrue']($p['op_is'](a, a0), 'Bug #573 __iadd__ should modify object in-place');
				$pyjs.track.lineno=200;
				self['assertEqual']($p['getattr'](a, 'x'), $constant_int_6);
				$pyjs.track.lineno=201;
				self['assertEqual']($p['getattr'](a0, 'x'), $p['getattr'](a, 'x'), 'Bug #573 __iadd__ should modify all references to an object');
				$pyjs.track.lineno=202;
				a = (typeof ($sub3=a)==typeof ($sub4=b) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4));
				$pyjs.track.lineno=203;
				self['assertTrue'](!$p['op_is'](a, a0));
				$pyjs.track.lineno=204;
				self['assertEqual']($p['getattr'](a, 'x'), $constant_int_2);
				$pyjs.track.lineno=205;
				self['assertNotEqual']($p['getattr'](a0, 'x'), $p['getattr'](a, 'x'), 'Bug #573 reference should not have same value after __iadd__ & __neg__');
				$pyjs.track.lineno=206;
				b = (typeof ($mul7=b)==typeof ($mul8=c) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8));
				$pyjs.track.lineno=207;
				self['assertTrue']($p['op_is'](b, b0), 'Bug #573 __imul__ should modify object in-place');
				$pyjs.track.lineno=208;
				self['assertEqual']($p['getattr'](b, 'x'), $constant_int_24);
				$pyjs.track.lineno=209;
				self['assertEqual']($p['getattr'](b0, 'x'), $p['getattr'](b, 'x'), 'Bug #573 __imul__ should modify all references to an object');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_iops'] = $method;
			$pyjs.track.lineno=211;
			$method = $pyjs__bind_method2('test_getattr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var X,$pyjs_try_err,x;
				$pyjs.track={module:'ClassTest', lineno:211};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=211;
				$pyjs.track.lineno=212;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '461aaf4f3bfd3409b1c7f88e35b36ffd';
					$pyjs.track.lineno=213;
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
							if (self.prototype.__md5__ !== '461aaf4f3bfd3409b1c7f88e35b36ffd') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];

						$pyjs.track={module:'ClassTest', lineno:213};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=213;
						$pyjs.track.lineno=214;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['x', $constant_int_0]]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=216;
					$method = $pyjs__bind_method2('__getattr__', function(name) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							name = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '461aaf4f3bfd3409b1c7f88e35b36ffd') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add9,$add10;
						$pyjs.track={module:'ClassTest', lineno:216};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=216;
						$pyjs.track.lineno=217;
						$pyjs.track.lineno=217;
						var $pyjs__ret = X((typeof ($add9=$p['getattr'](self, 'x'))==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10)));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['name']]);
					$cls_definition['__getattr__'] = $method;
					$pyjs.track.lineno=212;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=219;
				x = X();
				$pyjs.track.lineno=220;
				self['assertEqual']($p['getattr'](x, 'x'), $constant_int_0);
				$pyjs.track.lineno=221;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=222;
					self['assertEqual']($p['getattr']($p['getattr'](x, 'next'), 'x'), $constant_int_1);
					$pyjs.track.lineno=223;
					self['assertEqual']($p['getattr']($p['getattr']($p['getattr'](x, 'next'), 'bla'), 'x'), $constant_int_2);
					$pyjs.track.lineno=224;
					self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](x, 'a'), 'b'), 'c'), 'x'), $constant_int_3);
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=226;
						self['fail']('Bug #575 __getattr__ method not supported');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_getattr'] = $method;
			$pyjs.track.lineno=228;
			$method = $pyjs__bind_method2('test_deep_property_access', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var X,$pyjs_try_err,x;
				$pyjs.track={module:'ClassTest', lineno:228};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=228;
				$pyjs.track.lineno=229;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '9c369c7082993bb8331d2939f519cc0b';
					$pyjs.track.lineno=230;
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
							if (self.prototype.__md5__ !== '9c369c7082993bb8331d2939f519cc0b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];

						$pyjs.track={module:'ClassTest', lineno:230};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=230;
						$pyjs.track.lineno=231;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['x', $constant_int_0]]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=234;
					$method = $pyjs__bind_method2('bla', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '9c369c7082993bb8331d2939f519cc0b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:234};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=234;
						$pyjs.track.lineno=235;
						$pyjs.track.lineno=235;
						var $pyjs__ret = $p['getattr'](self, 'next');
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['bla'] = $p['property']($p['staticmethod']($method));
					$pyjs.track.lineno=238;
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
							if (self.prototype.__md5__ !== '9c369c7082993bb8331d2939f519cc0b') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $add11,$add12;
						$pyjs.track={module:'ClassTest', lineno:238};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=238;
						$pyjs.track.lineno=239;
						$pyjs.track.lineno=239;
						var $pyjs__ret = X((typeof ($add11=$p['getattr'](self, 'x'))==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12)));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['next'] = $p['property']($p['staticmethod']($method));
					$pyjs.track.lineno=229;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=241;
				x = X();
				$pyjs.track.lineno=243;
				self['assertEqual']($p['getattr'](x, 'x'), $constant_int_0);
				$pyjs.track.lineno=244;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=245;
					self['assertEqual']($p['getattr']($p['getattr'](x, 'next'), 'x'), $constant_int_1);
					$pyjs.track.lineno=246;
					self['assertEqual']($p['getattr']($p['getattr']($p['getattr'](x, 'next'), 'bla'), 'x'), $constant_int_2);
					$pyjs.track.lineno=247;
					self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](x, 'next'), 'bla'), 'next'), 'x'), $constant_int_3);
					$pyjs.track.lineno=248;
					self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](x, 'bla'), 'next'), 'bla'), 'next'), 'bla'), 'x'), $constant_int_5);
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=250;
						self['fail']('Bug #576 Deep property access not supported');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_deep_property_access'] = $method;
			$pyjs.track.lineno=252;
			$method = $pyjs__bind_method2('test_slice', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var X,$pyjs_try_err,data,x;
				$pyjs.track={module:'ClassTest', lineno:252};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=252;
				$pyjs.track.lineno=253;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '51e9a4d1b262289a5400e6bd40f4b375';
					$pyjs.track.lineno=254;
					$method = $pyjs__bind_method2('__init__', function(data) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							data = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '51e9a4d1b262289a5400e6bd40f4b375') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:254};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=254;
						$pyjs.track.lineno=255;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('data', data) : $p['setattr'](self, 'data', data); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['data']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=257;
					$method = $pyjs__bind_method2('__getitem__', function(index) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							index = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '51e9a4d1b262289a5400e6bd40f4b375') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $6,$5;
						$pyjs.track={module:'ClassTest', lineno:257};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=257;
						$pyjs.track.lineno=258;
						if (!( $p['isinstance'](index, $p['slice']) )) {
						   throw $p['AssertionError']();
						 }
						$pyjs.track.lineno=259;
						$pyjs.track.lineno=259;
						var $pyjs__ret = (typeof ($5=$p['getattr'](self, 'data')).__array != 'undefined'?
							((typeof $5.__array[$6=index]) != 'undefined'?$5.__array[$6]:
								$5.__getitem__($6)):
								$5.__getitem__(index));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self'],['index']]);
					$cls_definition['__getitem__'] = $method;
					$pyjs.track.lineno=261;
					$method = $pyjs__bind_method2('__setitem__', function(index, value) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
						} else {
							var self = arguments[0];
							index = arguments[1];
							value = arguments[2];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '51e9a4d1b262289a5400e6bd40f4b375') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:261};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=261;
						$pyjs.track.lineno=262;
						if (!( $p['isinstance'](index, $p['slice']) )) {
						   throw $p['AssertionError']();
						 }
						$pyjs.track.lineno=263;
						$p['getattr'](self, 'data').__setitem__(index, value);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['index'],['value']]);
					$cls_definition['__setitem__'] = $method;
					$pyjs.track.lineno=253;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=265;
				data = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=266;
				x = X(data);
				$pyjs.track.lineno=267;
				self['assertEqual']($p['__getslice'](data, 0, $constant_int_2), $p['__getslice'](x, 0, $constant_int_2), 'Bug #577 __getitem__ should be used for slicing');
				$pyjs.track.lineno=268;
				self['assertEqual']($p['__getslice'](x, 0, $constant_int_2), $p['list']([$constant_int_1, $constant_int_2]), 'Bug #577 __getitem__ not supported');
				$pyjs.track.lineno=269;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=270;
					$p['__setslice'](x, $constant_int_1, $constant_int_2, $p['list']([$constant_int_5]));
					$pyjs.track.lineno=271;
					self['assertEqual']($p['__getslice'](data, 0, null), $p['__getslice'](x, 0, null), 'Bug #577 __setitem__ should be used for slice assignment');
					$pyjs.track.lineno=272;
					self['assertEqual']($p['__getslice'](x, $constant_int_1, null), $p['list']([$constant_int_5, $constant_int_3]));
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=274;
						self['fail']('Bug #577 slice / __getitem__ / __setitem__ not supported');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_slice'] = $method;
			$pyjs.track.lineno=277;
			$method = $pyjs__bind_method2('testInheritedProperties', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj1,obj2,obj,expected_result1,expected_result2,expected_result3;
				$pyjs.track={module:'ClassTest', lineno:277};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=277;
				$pyjs.track.lineno=278;
				expected_result1 = 'test';
				$pyjs.track.lineno=279;
				expected_result2 = $constant_int_1;
				$pyjs.track.lineno=280;
				expected_result3 = 'other';
				$pyjs.track.lineno=283;
				obj1 = (typeof ExampleParentClass == "undefined"?$m.ExampleParentClass:ExampleParentClass)();
				$pyjs.track.lineno=284;
				self['assertEquals']($p['getattr'](obj1, 'x'), expected_result1);
				$pyjs.track.lineno=287;
				obj1.__is_instance__ && typeof obj1.__setattr__ == 'function' ? obj1.__setattr__('x', expected_result2) : $p['setattr'](obj1, 'x', expected_result2); 
				$pyjs.track.lineno=288;
				obj2 = (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)();
				$pyjs.track.lineno=289;
				self['assertEquals']($p['getattr'](obj2, 'x'), expected_result1);
				$pyjs.track.lineno=292;
				obj2.__is_instance__ && typeof obj2.__setattr__ == 'function' ? obj2.__setattr__('x', expected_result3) : $p['setattr'](obj2, 'x', expected_result3); 
				$pyjs.track.lineno=293;
				self['assertEquals']($p['getattr'](obj2, 'x'), expected_result3);
				$pyjs.track.lineno=296;
				self['assertEquals']($p['getattr'](obj1, 'x'), expected_result2);
				$pyjs.track.lineno=298;
				obj = $pyjs_kwargs_call(null, (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass), null, null, [{b:$constant_int_222}]);
				$pyjs.track.lineno=299;
				self['assertEquals']($p['getattr'](obj, 'prop_a'), $constant_int_1);
				$pyjs.track.lineno=300;
				self['assertEquals']($p['getattr'](obj, 'prop_b'), $constant_int_222);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInheritedProperties'] = $method;
			$pyjs.track.lineno=303;
			$method = $pyjs__bind_method2('testInheritedPropertyObjects', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj1,obj2,$10,$9,$len2,$8,$len1,$7,expected_result1,expected_result2;
				$pyjs.track={module:'ClassTest', lineno:303};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=303;
				$pyjs.track.lineno=304;
				expected_result1 = 'another';
				$pyjs.track.lineno=305;
				expected_result2 = 'other';
				$pyjs.track.lineno=308;
				obj1 = (typeof ExampleParentObject == "undefined"?$m.ExampleParentObject:ExampleParentObject)();
				$pyjs.track.lineno=309;
				self['assertEquals']((($len1=$p['getattr'](obj1, 'x')) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), $constant_int_0);
				$pyjs.track.lineno=312;
				obj1['x']['append'](expected_result2);
				$pyjs.track.lineno=314;
				obj2 = (typeof ExampleChildObject == "undefined"?$m.ExampleChildObject:ExampleChildObject)();
				$pyjs.track.lineno=315;
				self['assertEquals']((($len2=$p['getattr'](obj2, 'x')) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))), $constant_int_1);
				$pyjs.track.lineno=318;
				obj2['x']['append'](expected_result1);
				$pyjs.track.lineno=319;
				self['assertEquals']((typeof ($7=$p['getattr'](obj2, 'x')).__array != 'undefined'?
					((typeof $7.__array[$8=$constant_int_1]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($constant_int_1)), expected_result1);
				$pyjs.track.lineno=322;
				self['assertEquals']((typeof ($9=$p['getattr'](obj1, 'x')).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_0)), expected_result2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInheritedPropertyObjects'] = $method;
			$pyjs.track.lineno=325;
			$method = $pyjs__bind_method2('testInheritedConstructors', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj1,obj3,obj2,res,expected_result4,expected_result1,expected_result2,expected_result3;
				$pyjs.track={module:'ClassTest', lineno:325};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=325;
				$pyjs.track.lineno=326;
				expected_result1 = 'test';
				$pyjs.track.lineno=327;
				expected_result2 = 'parent';
				$pyjs.track.lineno=328;
				expected_result3 = 'grandparent';
				$pyjs.track.lineno=329;
				expected_result4 = 'older';
				$pyjs.track.lineno=332;
				obj1 = (typeof ExampleChildNoConstructor == "undefined"?$m.ExampleChildNoConstructor:ExampleChildNoConstructor)();
				$pyjs.track.lineno=333;
				self['assertEquals']($p['getattr'](obj1, 'x'), expected_result1, 'ExampleParentConstructor.__init__() was NOT called for ExampleChildNoConstructor');
				$pyjs.track.lineno=336;
				obj2 = (typeof ExampleChildConstructor == "undefined"?$m.ExampleChildConstructor:ExampleChildConstructor)();
				$pyjs.track.lineno=337;
				self['assertNotEqual']($p['getattr'](obj2, 'x', null), expected_result1, 'ExampleParentConstructor.__init__() was called for ExampleChildConstructor');
				$pyjs.track.lineno=340;
				obj3 = (typeof ExampleChildExplicitConstructor == "undefined"?$m.ExampleChildExplicitConstructor:ExampleChildExplicitConstructor)();
				$pyjs.track.lineno=341;
				self['assertEquals']($p['getattr'](obj3, 'x'), expected_result1, 'ExampleParentConstructor.__init__() was NOT called for ExampleChildExplicitConstructor');
				$pyjs.track.lineno=344;
				self['assertEquals']($p['getattr'](obj1, 'y'), expected_result2, 'Did not inherit property from parent');
				$pyjs.track.lineno=345;
				self['assertEquals']($p['getattr'](obj2, 'y'), expected_result2, 'Did not inherit property from parent');
				$pyjs.track.lineno=346;
				self['assertEquals']($p['getattr'](obj1, 'z'), expected_result3, 'Did not inherit property from grandparent');
				$pyjs.track.lineno=347;
				self['assertEquals']($p['getattr'](obj2, 'z'), expected_result3, 'Did not inherit property from grandparent');
				$pyjs.track.lineno=349;
				res = $p['getattr'](obj1, 'r', null);
				$pyjs.track.lineno=350;
				self['assertNotEqual'](res, expected_result4, $p['sprintf']('ExampleGrandParentConstructor.__init__() was called (%s)', res));
				$pyjs.track.lineno=351;
				self['assertNotEqual']($p['getattr'](obj2, 'r', null), expected_result4, 'ExampleGrandParentConstructor.__init__() was called');
				$pyjs.track.lineno=354;
				self['assertEqual']($p['getattr']((typeof ExampleChildConstructor == "undefined"?$m.ExampleChildConstructor:ExampleChildConstructor), 'y'), expected_result2, 'Did not inherit class var from parent');
				$pyjs.track.lineno=355;
				self['assertEqual']($p['getattr']((typeof ExampleChildNoConstructor == "undefined"?$m.ExampleChildNoConstructor:ExampleChildNoConstructor), 'y'), expected_result2, 'Did not inherit class var from parent');
				$pyjs.track.lineno=356;
				self['assertEqual']($p['getattr']((typeof ExampleChildExplicitConstructor == "undefined"?$m.ExampleChildExplicitConstructor:ExampleChildExplicitConstructor), 'y'), expected_result2, 'Did not inherit class var from parent');
				$pyjs.track.lineno=359;
				self['assertEqual']($p['getattr']((typeof ExampleChildConstructor == "undefined"?$m.ExampleChildConstructor:ExampleChildConstructor), 'z'), expected_result3, 'Did not inherit class var from grandparent');
				$pyjs.track.lineno=360;
				self['assertEqual']($p['getattr']((typeof ExampleChildNoConstructor == "undefined"?$m.ExampleChildNoConstructor:ExampleChildNoConstructor), 'z'), expected_result3, 'Did not inherit class var from grandparent');
				$pyjs.track.lineno=361;
				self['assertEqual']($p['getattr']((typeof ExampleChildExplicitConstructor == "undefined"?$m.ExampleChildExplicitConstructor:ExampleChildExplicitConstructor), 'z'), expected_result3, 'Did not inherit class var from grandparent');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInheritedConstructors'] = $method;
			$pyjs.track.lineno=363;
			$method = $pyjs__bind_method2('testInheritFromType', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var SubclassedFloat,subclassed_type,$iter1_nextval,$iter1_type,val,SubclassedInt,v,$iter1_iter,i_types,SubclassedString,$pyjs_try_err,inst,$iter1_array,$pyjs__trackstack_size_1,cls,$iter1_idx;
				$pyjs.track={module:'ClassTest', lineno:363};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=363;
				$pyjs.track.lineno=365;
				i_types = $p['list']([$p['tuple']([$p['int'], $constant_int_1]), $p['tuple']([$p['float'], 1.5]), $p['tuple']([$p['str'], 'test']), $p['tuple']([$p['long'], $constant_int_1]), $p['tuple']([$p['tuple'], $p['tuple']([$constant_int_1, $constant_int_2])]), $p['tuple']([$p['list'], $p['list']([$constant_int_1, $constant_int_2])]), $p['tuple']([$p['dict'], $p['dict']([['1', $constant_int_1]])]), $p['tuple']([$p['set'], $p['set']($p['list']([$constant_int_1, $constant_int_2]))])]);
				$pyjs.track.lineno=367;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = i_types;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
					cls = $tupleassign1[0];
					val = $tupleassign1[1];
					$pyjs.track.lineno=368;
					var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=369;
						subclassed_type = (function(){
							var $cls_definition = new Object();
							var $method;
							$cls_definition.__module__ = 'ClassTest';
							$cls_definition.__md5__ = '1c3a2ddb985435dabfcf80e9ba077a4a';
							$pyjs.track.lineno=370;
							$method = $pyjs__bind_method2('test_inh_method', function() {
								if (this.__is_instance__ === true) {
									var self = this;
									if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
								} else {
									var self = arguments[0];
									if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
									if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
								}
								if ($pyjs.options.arg_instance_type) {
									if (self.prototype.__md5__ !== '1c3a2ddb985435dabfcf80e9ba077a4a') {
										if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
											$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
										}
									}
								}

								$pyjs.track={module:'ClassTest', lineno:370};$pyjs.trackstack.push($pyjs.track);
								$pyjs.track.module='ClassTest';
								$pyjs.track.lineno=370;
								$pyjs.track.lineno=371;
								$pyjs.track.lineno=371;
								var $pyjs__ret = $constant_int_1;
								$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
								return $pyjs__ret;
							}
	, 1, [null,null,['self']]);
							$cls_definition['test_inh_method'] = $method;
							$pyjs.track.lineno=369;
							var $bases = new Array(cls);
							var $data = $p['dict']();
							for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
							return $p['_create_class']('subclassed_type', $p['tuple']($bases), $data);
						})();
						$pyjs.track.lineno=372;
						subclassed_type.__is_instance__ && typeof subclassed_type.__setattr__ == 'function' ? subclassed_type.__setattr__('__name__', $p['getattr'](cls, '__name__')) : $p['setattr'](subclassed_type, '__name__', $p['getattr'](cls, '__name__')); 
						$pyjs.track.lineno=373;
						inst = subclassed_type(val);
						$pyjs.track.lineno=374;
						self['assertEqual'](inst, val, $p['sprintf']("Subclasses of type '%s' are not instantiated properly, issue #623", $p['getattr'](cls, '__name__')));
						$pyjs.track.lineno=375;
						self['assertEqual'](inst['test_inh_method'](), $constant_int_1, $p['sprintf']("Methods of subclasses of type '%s' fail, issue #623", $p['getattr'](cls, '__name__')));
						$pyjs.track.lineno=376;
						self['assertEqual']($p['str'](inst), $p['str'](val), $p['sprintf']("__str__ of subclasses of type '%s' fail, issue #623", $p['getattr'](cls, '__name__')));
						$pyjs.track.lineno=377;
						self['assertEqual']($p['type'](inst), subclassed_type, $p['sprintf']("Subclasses of type '%s' have wrong type, issue #623", $p['getattr'](cls, '__name__')));
						$pyjs.track.lineno=378;
						self['assertTrue']($p['isinstance'](inst, subclassed_type), $p['sprintf']("Subclasses of type '%s' have wrong type, issue #623", $p['getattr'](cls, '__name__')));
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
						$pyjs.track.module='ClassTest';
						if (true) {
							$pyjs.track.lineno=380;
							self['fail']($p['sprintf']("Subclassing type '%s' does not work, issue #623", $p['getattr'](cls, '__name__')));
						}
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=383;
				SubclassedString = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '45b056fbe084b1cf625ad513bba49216';
					$pyjs.track.lineno=383;
					$pyjs.track.lineno=383;
					var $bases = new Array($p['str']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('SubclassedString', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=384;
				SubclassedInt = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '4b7fe19764e912fdb5e5d70751aff6fa';
					$pyjs.track.lineno=384;
					$pyjs.track.lineno=384;
					var $bases = new Array($p['int']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('SubclassedInt', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=385;
				SubclassedFloat = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '923238059c055965b5470af5f1d26781';
					$pyjs.track.lineno=385;
					$pyjs.track.lineno=385;
					var $bases = new Array($p['float']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('SubclassedFloat', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=386;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=387;
					self['assertEqual']($p['str'](SubclassedString('string')), 'string', '#484');
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=389;
						self['fail']('Could not instantiate subclassed string, bug #484');
					}
				}
				$pyjs.track.lineno=390;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=391;
					v = $p['str'](SubclassedInt($constant_int_1));
					$pyjs.track.lineno=392;
					self['assertEqual'](v, '1', $p['sprintf']("bug #484 - %s != '1'", v));
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=394;
						self['fail']('Could not instantiate subclassed int');
					}
				}
				$pyjs.track.lineno=395;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=396;
					self['assertEqual']($p['str'](SubclassedFloat(1.1)), '1.1', '#484');
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=398;
						self['fail']('Could not instantiate subclassed float');
					}
				}
				$pyjs.track.lineno=399;
				self['assertTrue']($p['isinstance'](SubclassedString('abc'), $p['object']), 'Issue #670 derived from int/float/str not instance of object');
				$pyjs.track.lineno=402;
				self['assertTrue']($p['isinstance'](SubclassedInt($constant_int_1), $p['object']), 'Issue #670 derived from int/float/str not instance of object');
				$pyjs.track.lineno=405;
				self['assertTrue']($p['isinstance'](SubclassedFloat(1.1), $p['object']), 'Issue #670 derived from int/float/str not instance of object');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInheritFromType'] = $method;
			$pyjs.track.lineno=410;
			$method = $pyjs__bind_method2('testClassMethods', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $32,results,$33,$66,$65,$39,$29,$28,$55,$74,$21,$20,$22,$25,$24,$27,$26,instance,$49,$48,$69,$68,$43,$42,$41,$40,$47,$46,$45,$44,$72,$73,$70,$60,$71,$62,$51,$64,$67,$14,$15,$16,$17,$11,$12,$13,$36,$37,$34,$35,$18,$19,$30,$31,$58,$59,$61,$63,$50,$38,$52,$53,$54,$23,$56,$57;
				$pyjs.track={module:'ClassTest', lineno:410};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=410;
				$pyjs.track.lineno=411;
				results = $m.ExampleClass['sampleClassMethod']('a');
				$pyjs.track.lineno=412;
				self['assertEqual']((typeof ($11=results).__array != 'undefined'?
					((typeof $11.__array[$12=$constant_int_0]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($constant_int_0)), (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'Expected first parameter to be the class instance');
				$pyjs.track.lineno=413;
				self['assertEqual']((typeof ($13=results).__array != 'undefined'?
					((typeof $13.__array[$14=$constant_int_1]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($constant_int_1)), 'a');
				$pyjs.track.lineno=415;
				results = $m.ExampleParentClass['sampleClassMethod']('a');
				$pyjs.track.lineno=416;
				self['assertEqual']((typeof ($15=results).__array != 'undefined'?
					((typeof $15.__array[$16=$constant_int_0]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($constant_int_0)), (typeof ExampleParentClass == "undefined"?$m.ExampleParentClass:ExampleParentClass), 'Expected first parameter to be the class instance');
				$pyjs.track.lineno=417;
				self['assertEqual']((typeof ($17=results).__array != 'undefined'?
					((typeof $17.__array[$18=$constant_int_1]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__($constant_int_1)), 'a');
				$pyjs.track.lineno=419;
				results = $m.ExampleChildClass['sampleClassMethod']('a');
				$pyjs.track.lineno=420;
				self['assertEqual']((typeof ($19=results).__array != 'undefined'?
					((typeof $19.__array[$20=$constant_int_0]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__($constant_int_0)), (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass), 'Expected first parameter to be the class instance');
				$pyjs.track.lineno=421;
				self['assertEqual']((typeof ($21=results).__array != 'undefined'?
					((typeof $21.__array[$22=$constant_int_1]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__($constant_int_1)), 'a');
				$pyjs.track.lineno=423;
				results = $m.ExampleClass['sampleClassMethodVarargs']('a', 'b', 'c');
				$pyjs.track.lineno=424;
				self['assertEqual']((typeof ($23=results).__array != 'undefined'?
					((typeof $23.__array[$24=$constant_int_0]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($constant_int_0)), (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'Expected first parameter to be the class instance');
				$pyjs.track.lineno=425;
				self['assertEqual']((typeof ($27=(typeof ($25=results).__array != 'undefined'?
					((typeof $25.__array[$26=$constant_int_1]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $27.__array[$28=$constant_int_0]) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__($constant_int_0)), 'a');
				$pyjs.track.lineno=426;
				self['assertEqual']((typeof ($31=(typeof ($29=results).__array != 'undefined'?
					((typeof $29.__array[$30=$constant_int_1]) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $31.__array[$32=$constant_int_1]) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__($constant_int_1)), 'b');
				$pyjs.track.lineno=427;
				self['assertEqual']((typeof ($35=(typeof ($33=results).__array != 'undefined'?
					((typeof $33.__array[$34=$constant_int_1]) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $35.__array[$36=$constant_int_2]) != 'undefined'?$35.__array[$36]:
						$35.__getitem__($36)):
						$35.__getitem__($constant_int_2)), 'c');
				$pyjs.track.lineno=429;
				results = $pyjs_kwargs_call($m.ExampleClass, 'sampleClassMethodKwargs', null, null, [{c:$constant_int_9, b:$constant_int_8, a:$constant_int_7}]);
				$pyjs.track.lineno=430;
				self['assertEqual']((typeof ($37=results).__array != 'undefined'?
					((typeof $37.__array[$38=$constant_int_0]) != 'undefined'?$37.__array[$38]:
						$37.__getitem__($38)):
						$37.__getitem__($constant_int_0)), (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'Expected first parameter to be the class instance');
				$pyjs.track.lineno=431;
				self['assertEqual']((typeof ($39=results).__array != 'undefined'?
					((typeof $39.__array[$40=$constant_int_1]) != 'undefined'?$39.__array[$40]:
						$39.__getitem__($40)):
						$39.__getitem__($constant_int_1)), $constant_int_7);
				$pyjs.track.lineno=432;
				self['assertEqual']((typeof ($41=results).__array != 'undefined'?
					((typeof $41.__array[$42=$constant_int_2]) != 'undefined'?$41.__array[$42]:
						$41.__getitem__($42)):
						$41.__getitem__($constant_int_2)), $constant_int_8);
				$pyjs.track.lineno=433;
				self['assertEqual']((typeof ($43=results).__array != 'undefined'?
					((typeof $43.__array[$44=$constant_int_3]) != 'undefined'?$43.__array[$44]:
						$43.__getitem__($44)):
						$43.__getitem__($constant_int_3)), $constant_int_9);
				$pyjs.track.lineno=439;
				results = $m.ExampleClass()['sampleClassMethod']('a');
				$pyjs.track.lineno=440;
				self['assertEqual']((typeof ($45=results).__array != 'undefined'?
					((typeof $45.__array[$46=$constant_int_0]) != 'undefined'?$45.__array[$46]:
						$45.__getitem__($46)):
						$45.__getitem__($constant_int_0)), (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'Expected first parameter to be the class instance');
				$pyjs.track.lineno=441;
				self['assertEqual']((typeof ($47=results).__array != 'undefined'?
					((typeof $47.__array[$48=$constant_int_1]) != 'undefined'?$47.__array[$48]:
						$47.__getitem__($48)):
						$47.__getitem__($constant_int_1)), 'a');
				$pyjs.track.lineno=443;
				results = $m.ExampleParentClass()['sampleClassMethod']('a');
				$pyjs.track.lineno=444;
				self['assertEqual']((typeof ($49=results).__array != 'undefined'?
					((typeof $49.__array[$50=$constant_int_0]) != 'undefined'?$49.__array[$50]:
						$49.__getitem__($50)):
						$49.__getitem__($constant_int_0)), (typeof ExampleParentClass == "undefined"?$m.ExampleParentClass:ExampleParentClass), 'Expected first parameter to be the class instance');
				$pyjs.track.lineno=445;
				self['assertEqual']((typeof ($51=results).__array != 'undefined'?
					((typeof $51.__array[$52=$constant_int_1]) != 'undefined'?$51.__array[$52]:
						$51.__getitem__($52)):
						$51.__getitem__($constant_int_1)), 'a');
				$pyjs.track.lineno=447;
				results = $m.ExampleChildClass()['sampleClassMethod']('a');
				$pyjs.track.lineno=448;
				self['assertEqual']((typeof ($53=results).__array != 'undefined'?
					((typeof $53.__array[$54=$constant_int_0]) != 'undefined'?$53.__array[$54]:
						$53.__getitem__($54)):
						$53.__getitem__($constant_int_0)), (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass), 'Expected first parameter to be the class instance');
				$pyjs.track.lineno=449;
				self['assertEqual']((typeof ($55=results).__array != 'undefined'?
					((typeof $55.__array[$56=$constant_int_1]) != 'undefined'?$55.__array[$56]:
						$55.__getitem__($56)):
						$55.__getitem__($constant_int_1)), 'a');
				$pyjs.track.lineno=451;
				results = $m.ExampleClass()['sampleClassMethodVarargs']('a', 'b', 'c');
				$pyjs.track.lineno=452;
				self['assertEqual']((typeof ($57=results).__array != 'undefined'?
					((typeof $57.__array[$58=$constant_int_0]) != 'undefined'?$57.__array[$58]:
						$57.__getitem__($58)):
						$57.__getitem__($constant_int_0)), (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), 'Expected first parameter to be the class instance');
				$pyjs.track.lineno=453;
				self['assertEqual']((typeof ($61=(typeof ($59=results).__array != 'undefined'?
					((typeof $59.__array[$60=$constant_int_1]) != 'undefined'?$59.__array[$60]:
						$59.__getitem__($60)):
						$59.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $61.__array[$62=$constant_int_0]) != 'undefined'?$61.__array[$62]:
						$61.__getitem__($62)):
						$61.__getitem__($constant_int_0)), 'a');
				$pyjs.track.lineno=454;
				self['assertEqual']((typeof ($65=(typeof ($63=results).__array != 'undefined'?
					((typeof $63.__array[$64=$constant_int_1]) != 'undefined'?$63.__array[$64]:
						$63.__getitem__($64)):
						$63.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $65.__array[$66=$constant_int_1]) != 'undefined'?$65.__array[$66]:
						$65.__getitem__($66)):
						$65.__getitem__($constant_int_1)), 'b');
				$pyjs.track.lineno=455;
				self['assertEqual']((typeof ($69=(typeof ($67=results).__array != 'undefined'?
					((typeof $67.__array[$68=$constant_int_1]) != 'undefined'?$67.__array[$68]:
						$67.__getitem__($68)):
						$67.__getitem__($constant_int_1))).__array != 'undefined'?
					((typeof $69.__array[$70=$constant_int_2]) != 'undefined'?$69.__array[$70]:
						$69.__getitem__($70)):
						$69.__getitem__($constant_int_2)), 'c');
				$pyjs.track.lineno=458;
				self['assertEqual']($m.ExampleParentClass()['inert']('inert'), 'inert');
				$pyjs.track.lineno=459;
				self['assertEqual']($m.ExampleParentClass()['global_x1'](), 'global test');
				$pyjs.track.lineno=460;
				self['assertEqual']($m.ExampleParentClass()['global_x2'](), 'global test');
				$pyjs.track.lineno=463;
				instance = (typeof RecurseMe == "undefined"?$m.RecurseMe:RecurseMe)();
				$pyjs.track.lineno=464;
				self['assertEqual']((typeof ($71=$p['getattr'](instance, 'chain')).__array != 'undefined'?
					((typeof $71.__array[$72=$constant_int_0]) != 'undefined'?$71.__array[$72]:
						$71.__getitem__($72)):
						$71.__getitem__($constant_int_0)), $constant_int_0);
				$pyjs.track.lineno=465;
				self['assertEqual']((typeof ($73=$p['getattr'](instance, 'chain')).__array != 'undefined'?
					((typeof $73.__array[$74=$constant_int_1]) != 'undefined'?$73.__array[$74]:
						$73.__getitem__($74)):
						$73.__getitem__($constant_int_1)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassMethods'] = $method;
			$pyjs.track.lineno=467;
			$method = $pyjs__bind_method2('testStaticMethod', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,m;
				$pyjs.track={module:'ClassTest', lineno:467};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=467;
				$pyjs.track.lineno=468;
				self['assertEqual']($m.ExampleClass['sampleStaticMethod']('a'), 'a', 'Expected static method to take the parameter I give as its first parameter');
				$pyjs.track.lineno=469;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=470;
					m = $m.ExampleClass['oldIdiomStaticMethod']('middle');
					$pyjs.track.lineno=471;
					self['assertEqual'](m, 'beforemiddleafter');
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=473;
						self['fail']('Issue #415 - staticmethod(method) idiom does not work');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStaticMethod'] = $method;
			$pyjs.track.lineno=475;
			$method = $pyjs__bind_method2('test_method_alias', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$pyjs_try_err,C;
				$pyjs.track={module:'ClassTest', lineno:475};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=475;
				$pyjs.track.lineno=476;
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '24de63ebed91d50b80c54857a30a823d';
					$pyjs.track.lineno=477;
					$method = $pyjs__bind_method2('original', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '24de63ebed91d50b80c54857a30a823d') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:477};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=477;
						$pyjs.track.lineno=478;
						$pyjs.track.lineno=478;
						var $pyjs__ret = $constant_int_5;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['original'] = $method;
					$pyjs.track.lineno=480;
					$cls_definition['alias'] = $p['staticmethod']($cls_definition['original']);
					$pyjs.track.lineno=482;
					$method = $pyjs__bind_method2('method_using_alias', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '24de63ebed91d50b80c54857a30a823d') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:482};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=482;
						$pyjs.track.lineno=483;
						$pyjs.track.lineno=483;
						var $pyjs__ret = self['alias']();
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['method_using_alias'] = $method;
					$pyjs.track.lineno=476;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=485;
				c = C();
				$pyjs.track.lineno=486;
				self['assertEqual'](c['original'](), $constant_int_5);
				$pyjs.track.lineno=487;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=488;
					self['assertEqual'](c['alias'](), $constant_int_5);
					$pyjs.track.lineno=489;
					self['assertEqual'](c['method_using_alias'](), $constant_int_5);
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=491;
						self['fail']('Bug #578 : method alias fails');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_method_alias'] = $method;
			$pyjs.track.lineno=493;
			$method = $pyjs__bind_method2('test_class_isinstance_type', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var C;
				$pyjs.track={module:'ClassTest', lineno:493};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=493;
				$pyjs.track.lineno=494;
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '7350ee8d626094b23b418242afa7bc3b';
					$pyjs.track.lineno=495;
					$pyjs.track.lineno=494;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=496;
				self['assertTrue']($p['isinstance'](C, $p['type']), 'Bug #579 type type not supported');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_class_isinstance_type'] = $method;
			$pyjs.track.lineno=498;
			$method = $pyjs__bind_method2('test__new__Method', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,prop,instance,$pyjs_try_err,$bool7;
				$pyjs.track={module:'ClassTest', lineno:498};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=498;
				$pyjs.track.lineno=499;
				c = (typeof OtherClass1 == "undefined"?$m.OtherClass1:OtherClass1)();
				$pyjs.track.lineno=500;
				self['assertEqual']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), 'ObjectClass');
				$pyjs.track.lineno=501;
				self['assertEqual']($p['getattr'](c, 'prop'), $constant_int_1);
				$pyjs.track.lineno=502;
				c = (typeof OtherSubclass1 == "undefined"?$m.OtherSubclass1:OtherSubclass1)();
				$pyjs.track.lineno=503;
				self['assertEqual']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), 'ObjectClass', 'Issue #414: __new__ method on superclass not called');
				$pyjs.track.lineno=504;
				c = (typeof OtherClass2 == "undefined"?$m.OtherClass2:OtherClass2)();
				$pyjs.track.lineno=505;
				self['assertEqual']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), 'OtherClass2');
				$pyjs.track.lineno=506;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=507;
					prop = $p['getattr'](c, 'prop');
					$pyjs.track.lineno=508;
					self['fail']('failed to raise an error on c.prop (improperly follows explicit __new__ with implicit __init__)');
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=510;
						self['assertTrue'](true);
					}
				}
				$pyjs.track.lineno=511;
				self['assertTrue']($p['getattr'](c, 'init'), 'OtherClass2.__init__() is not executed');
				$pyjs.track.lineno=512;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=513;
					c = (typeof OtherClass3 == "undefined"?$m.OtherClass3:OtherClass3)($constant_int_41, $constant_int_42);
					$pyjs.track.lineno=514;
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=516;
						self['fail']('Issue #417: __new__ method fails for lack of arguments');
					}
				}
				$pyjs.track.lineno=517;
				self['assertEqual'](((($bool7=$p['hasattr'](c, 'y')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($p['getattr'](c, 'y')) : ($constant_int_0)), $constant_int_42, 'Issue #417: __new__ method not passed constructor arguments.');
				$pyjs.track.lineno=519;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=520;
					c = (typeof OtherClass3 == "undefined"?$m.OtherClass3:OtherClass3)();
					$pyjs.track.lineno=521;
					self['fail']("Issue #418: __new__ method doesn't fail for lack of arguments");
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=523;
						self['assertTrue'](true);
					}
				}
				$pyjs.track.lineno=524;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=525;
					c = (typeof OtherClass4 == "undefined"?$m.OtherClass4:OtherClass4)();
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs.track.lineno=527;
						self['fail']('TypeError on OtherClass4()');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=528;
				c = $pyjs_kwargs_call(null, (typeof OtherSubclass4 == "undefined"?$m.OtherSubclass4:OtherSubclass4), null, null, [{c:$constant_int_3, d:$constant_int_4}, $constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=529;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=530;
					self['assertEqual']($p['getattr'](c, 'args'), $p['tuple']([$constant_int_1, $constant_int_2]));
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						$pyjs.track.lineno=532;
						self['fail']('c.args is not defined');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=533;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=534;
					self['assertEqual']($p['getattr'](c, 'kwargs'), $pyjs_kwargs_call(null, $p['dict'], null, null, [{c:$constant_int_3, d:$constant_int_4}]));
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						$pyjs.track.lineno=536;
						self['fail']('c.kwargs is not defined');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=537;
				instance = $m.MultiBase['__new__']((typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1));
				$pyjs.track.lineno=538;
				self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiInherit1');
				$pyjs.track.lineno=539;
				instance = $m.MultiInherit1['__new__']((typeof MultiBase == "undefined"?$m.MultiBase:MultiBase));
				$pyjs.track.lineno=540;
				self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiBase');
				$pyjs.track.lineno=541;
				instance = $pyjs_kwargs_call($p['object'], '__new__', null, $p['dict']([]), [{}, (typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1)]);
				$pyjs.track.lineno=542;
				self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiInherit1');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test__new__Method'] = $method;
			$pyjs.track.lineno=548;
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
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				$pyjs.track={module:'ClassTest', lineno:548};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=548;
				$pyjs.track.lineno=549;
				c = (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)();
				$pyjs.track.lineno=550;
				self['failIf']($p['isinstance'](c, (typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass)));
				$pyjs.track.lineno=551;
				self['failUnless']($p['isinstance'](c, (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)));
				$pyjs.track.lineno=552;
				self['failUnless']($p['isinstance'](c, (typeof ExampleParentClass == "undefined"?$m.ExampleParentClass:ExampleParentClass)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsInstance'] = $method;
			$pyjs.track.lineno=554;
			$method = $pyjs__bind_method2('testIsInstanceNested', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c;
				$pyjs.track={module:'ClassTest', lineno:554};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=554;
				$pyjs.track.lineno=555;
				c = (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)();
				$pyjs.track.lineno=556;
				self['failUnless']($p['isinstance'](c, $p['tuple']([(typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)])));
				$pyjs.track.lineno=557;
				self['failIf']($p['isinstance'](c, $p['tuple']([(typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), (typeof ExampleParentObject == "undefined"?$m.ExampleParentObject:ExampleParentObject)])));
				$pyjs.track.lineno=558;
				self['failUnless']($p['isinstance'](c, $p['tuple']([(typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass), $p['tuple']([(typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)])])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsInstanceNested'] = $method;
			$pyjs.track.lineno=560;
			$method = $pyjs__bind_method2('testInstanceChecking', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $76,$77,$75,$78,$cmp2,$pyjs_try_err,e,$cmp1;
				$pyjs.track={module:'ClassTest', lineno:560};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=560;
				$pyjs.track.lineno=561;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=562;
					$m.ExampleChildClass['get_x']((typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass)());
					$pyjs.track.lineno=563;
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=565;
						self['fail'](e);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=566;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=567;
					$m.ExampleChildClass['get_x']((typeof ExampleClass == "undefined"?$m.ExampleClass:ExampleClass)());
					$pyjs.track.lineno=568;
					self['fail']('Failed to raise error for invalid instance');
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=570;
						self['assertTrue'](((((($cmp1=(typeof ($75=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $75.__array[$76=$constant_int_0]) != 'undefined'?$75.__array[$76]:
								$75.__getitem__($76)):
								$75.__getitem__($constant_int_0))['find']('get_x() must be called'))===($cmp2=$constant_int_0)?0:
							(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
								($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
								$p['cmp']($cmp1, $cmp2))))|1) == 1), (typeof ($77=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $77.__array[$78=$constant_int_0]) != 'undefined'?$77.__array[$78]:
								$77.__getitem__($78)):
								$77.__getitem__($constant_int_0)));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInstanceChecking'] = $method;
			$pyjs.track.lineno=572;
			$method = $pyjs__bind_method2('testIsSubclass', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var A,C,B,E,D;
				$pyjs.track={module:'ClassTest', lineno:572};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=572;
				$pyjs.track.lineno=573;
				A = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '77a09c425e9dc0d8a9245525a83df91b';
					$pyjs.track.lineno=573;
					$pyjs.track.lineno=573;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('A', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=574;
				B = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = 'd2f5ed135817b82913a972b6188d2313';
					$pyjs.track.lineno=574;
					$pyjs.track.lineno=574;
					var $bases = new Array(A);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('B', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=575;
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = 'e0733924f93c1028dcabb072e9e94079';
					$pyjs.track.lineno=575;
					$pyjs.track.lineno=575;
					var $bases = new Array(B);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=576;
				D = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '5693b1da6551437ff7e479302f5433de';
					$pyjs.track.lineno=576;
					$pyjs.track.lineno=576;
					var $bases = new Array(pyjslib.object);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('D', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=577;
				E = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '6754f92ae13e84c49392d8ccf330e6e4';
					$pyjs.track.lineno=577;
					$pyjs.track.lineno=577;
					var $bases = new Array(D,C);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('E', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=579;
				self['assertTrue']($p['issubclass'](A, A));
				$pyjs.track.lineno=580;
				self['assertTrue']($p['issubclass'](C, A));
				$pyjs.track.lineno=581;
				self['assertTrue']($p['issubclass'](E, A));
				$pyjs.track.lineno=582;
				self['assertTrue']($p['issubclass'](E, $p['tuple']([(typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass), A])));
				$pyjs.track.lineno=583;
				self['assertFalse']($p['issubclass'](A, (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass)));
				$pyjs.track.lineno=585;
				self['assertRaises']($p['TypeError'], $p['issubclass'], (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass)(), (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
				$pyjs.track.lineno=586;
				self['assertRaises']($p['TypeError'], $p['issubclass'], (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass), (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass)());
				$pyjs.track.lineno=587;
				self['assertRaises']($p['TypeError'], $p['issubclass'], null, (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIsSubclass'] = $method;
			$pyjs.track.lineno=589;
			$method = $pyjs__bind_method2('testMetaClass', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var instance,Klass;
				$pyjs.track={module:'ClassTest', lineno:589};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=589;
				$pyjs.track.lineno=590;
				Klass = $p['type']('MyClass', $p['tuple']([$p['object']]), $p['dict']([['method', (typeof method == "undefined"?$m.method:method)], ['x', $constant_int_5]]));
				$pyjs.track.lineno=591;
				instance = Klass();
				$pyjs.track.lineno=592;
				self['assertEqual'](instance['method'](), $constant_int_1);
				$pyjs.track.lineno=593;
				self['assertEqual']($p['getattr'](instance, 'x'), $constant_int_5);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMetaClass'] = $method;
			$pyjs.track.lineno=595;
			$method = $pyjs__bind_method2('testMetaClassInheritFromType', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var instance,$pyjs_try_err,Metaklass,Klass;
				$pyjs.track={module:'ClassTest', lineno:595};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=595;
				$pyjs.track.lineno=596;
				Metaklass = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = 'e326d6463f4f98943cf318d713f7bd35';
					$pyjs.track.lineno=597;
					$method = $pyjs__bind_method2('metamethod', function() {
						if (this.__is_instance__ === true) {
							var cls = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var cls = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (cls.prototype.__md5__ !== 'e326d6463f4f98943cf318d713f7bd35') {
								if (!$p['_isinstance'](cls, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], cls);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:597};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=597;
						$pyjs.track.lineno=598;
						$pyjs.track.lineno=598;
						var $pyjs__ret = $constant_int_2;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['cls']]);
					$cls_definition['metamethod'] = $method;
					$pyjs.track.lineno=596;
					var $bases = new Array($p['type']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('Metaklass', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=599;
				Klass = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '99026ae1eb90605d32de0f0bce34f289';
					$pyjs.track.lineno=600;
					$cls_definition['__metaclass__'] = Metaklass;
					$pyjs.track.lineno=601;
					$method = $pyjs__bind_method2('method', function() {
						if (this.__is_instance__ === true) {
							var cls = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var cls = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (cls.prototype.__md5__ !== '99026ae1eb90605d32de0f0bce34f289') {
								if (!$p['_isinstance'](cls, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], cls);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:601};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=601;
						$pyjs.track.lineno=602;
						$pyjs.track.lineno=602;
						var $pyjs__ret = $constant_int_1;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['cls']]);
					$cls_definition['method'] = $method;
					$pyjs.track.lineno=603;
					$cls_definition['x'] = $constant_int_5;
					$pyjs.track.lineno=599;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('Klass', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=604;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=605;
					self['assertEqual'](Klass['metamethod'](), $constant_int_2);
					$pyjs.track.lineno=606;
					instance = Klass();
					$pyjs.track.lineno=607;
					self['assertEqual'](instance['method'](), $constant_int_1);
					$pyjs.track.lineno=608;
					self['assertEqual']($p['getattr'](instance, 'x'), $constant_int_5);
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=610;
						self['fail']('bug #298 - missing metaclass features');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMetaClassInheritFromType'] = $method;
			$pyjs.track.lineno=612;
			$method = $pyjs__bind_method2('testMetaClassDct', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var MetaklassDctSaver,MyClass,$pyjs_try_err;
				$pyjs.track={module:'ClassTest', lineno:612};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=612;
				$pyjs.track.lineno=613;
				MetaklassDctSaver = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = 'a2ddf58bd8c16b26146dc2cc42f71faa';
					$pyjs.track.lineno=614;
					$method = $pyjs__bind_method2('__init__', function(name, bases, dct) {
						if (this.__is_instance__ === true) {
							var cls = this;
							if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
						} else {
							var cls = arguments[0];
							name = arguments[1];
							bases = arguments[2];
							dct = arguments[3];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (cls.prototype.__md5__ !== 'a2ddf58bd8c16b26146dc2cc42f71faa') {
								if (!$p['_isinstance'](cls, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], cls);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:614};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=614;
						$pyjs.track.lineno=615;
						$p['$$super'](MetaklassDctSaver, cls)['__init__'](name, bases, dct);
						$pyjs.track.lineno=616;
						cls.__is_instance__ && typeof cls.__setattr__ == 'function' ? cls.__setattr__('saved_dct', dct) : $p['setattr'](cls, 'saved_dct', dct); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['cls'],['name'],['bases'],['dct']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=613;
					var $bases = new Array($p['type']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('MetaklassDctSaver', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=617;
				MyClass = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '04bbfeeedbf2606ab3b7710bccae9101';
					$pyjs.track.lineno=618;
					$cls_definition['__metaclass__'] = MetaklassDctSaver;
					$pyjs.track.lineno=619;
					$cls_definition['a'] = $constant_int_1;
					$pyjs.track.lineno=620;
					$cls_definition['b'] = $constant_int_2;
					$pyjs.track.lineno=617;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('MyClass', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=621;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=622;
					self['assertTrue']($p['isinstance']($p['getattr'](MyClass, 'saved_dct'), $p['dict']));
					$pyjs.track.lineno=623;
					self['assertTrue']($p['getattr'](MyClass, 'saved_dct').__contains__('a'));
					$pyjs.track.lineno=624;
					self['assertTrue']($p['getattr'](MyClass, 'saved_dct').__contains__('b'));
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
					$pyjs.track.module='ClassTest';
					if (true) {
						$pyjs.track.lineno=626;
						self['fail']('bug #298 - missing metaclass features');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMetaClassDct'] = $method;
			$pyjs.track.lineno=628;
			$method = $pyjs__bind_method2('testMultiSuperclass', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var new_value,c;
				$pyjs.track={module:'ClassTest', lineno:628};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=628;
				$pyjs.track.lineno=629;
				new_value = 'New value';
				$pyjs.track.lineno=630;
				c = (typeof ExampleMultiSuperclassNoConstructor == "undefined"?$m.ExampleMultiSuperclassNoConstructor:ExampleMultiSuperclassNoConstructor)(new_value);
				$pyjs.track.lineno=632;
				self['assertEqual']($p['getattr'](c, 'x'), new_value);
				$pyjs.track.lineno=634;
				self['assertEqual']($p['getattr'](c, 'y'), $p['getattr']((typeof ExampleMultiSuperclassParent2 == "undefined"?$m.ExampleMultiSuperclassParent2:ExampleMultiSuperclassParent2), 'y'));
				$pyjs.track.lineno=636;
				self['assertEqual'](c['get_value'](), new_value);
				$pyjs.track.lineno=638;
				c = (typeof ExampleMultiSuperclassExplicitConstructor == "undefined"?$m.ExampleMultiSuperclassExplicitConstructor:ExampleMultiSuperclassExplicitConstructor)(new_value);
				$pyjs.track.lineno=640;
				self['assertEqual']($p['getattr'](c, 'x'), $p['getattr']((typeof ExampleMultiSuperclassParent1 == "undefined"?$m.ExampleMultiSuperclassParent1:ExampleMultiSuperclassParent1), 'x'));
				$pyjs.track.lineno=642;
				self['assertEqual']($p['getattr'](c, 'y'), $p['getattr']((typeof ExampleMultiSuperclassParent2 == "undefined"?$m.ExampleMultiSuperclassParent2:ExampleMultiSuperclassParent2), 'y'));
				$pyjs.track.lineno=644;
				self['assertEqual']($p['getattr'](c, 'z'), new_value);
				$pyjs.track.lineno=646;
				self['assertEqual'](c['get_value'](), new_value);
				$pyjs.track.lineno=648;
				self['assertEqual'](c['get_values'](), ':'['join']($p['list']([$p['getattr']((typeof ExampleMultiSuperclassParent1 == "undefined"?$m.ExampleMultiSuperclassParent1:ExampleMultiSuperclassParent1), 'x'), $p['getattr']((typeof ExampleMultiSuperclassParent2 == "undefined"?$m.ExampleMultiSuperclassParent2:ExampleMultiSuperclassParent2), 'y'), new_value])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMultiSuperclass'] = $method;
			$pyjs.track.lineno=650;
			$method = $pyjs__bind_method2('testMultiDoubleInherit', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i;
				$pyjs.track={module:'ClassTest', lineno:650};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=650;
				$pyjs.track.lineno=651;
				i = (typeof DoubleInherit == "undefined"?$m.DoubleInherit:DoubleInherit)($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=652;
				self['assertEqual'](i['get_x'](), $constant_int_1);
				$pyjs.track.lineno=653;
				self['assertEqual'](i['get_y'](), $constant_int_2);
				$pyjs.track.lineno=654;
				self['assertEqual'](i['get_z'](), $constant_int_3);
				$pyjs.track.lineno=656;
				$m.MultiInherit2['set_x'](i, $constant_int_5);
				$pyjs.track.lineno=657;
				self['assertEqual']($m.MultiInherit1['get_x'](i), $constant_int_5);
				$pyjs.track.lineno=659;
				self['assertEqual'](i['getName'](), 'MultiInherit2', 'Inheritance prolem issue #560');
				$pyjs.track.lineno=660;
				self['assertEqual']($p['str'](i), 'MultiInherit2', 'Inheritance prolem issue #560');
				$pyjs.track.lineno=661;
				i = (typeof DoubleInheritReversed == "undefined"?$m.DoubleInheritReversed:DoubleInheritReversed)($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=662;
				self['assertEqual'](i['getName'](), 'MultiInherit2');
				$pyjs.track.lineno=663;
				self['assertEqual']($p['str'](i), 'MultiInherit2');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMultiDoubleInherit'] = $method;
			$pyjs.track.lineno=665;
			$method = $pyjs__bind_method2('testClassArguments', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,e,$79,$82,$81,$80,$pyjs_try_err;
				$pyjs.track={module:'ClassTest', lineno:665};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=665;
				$pyjs.track.lineno=666;
				c = (typeof ClassArguments == "undefined"?$m.ClassArguments:ClassArguments)();
				$pyjs.track.lineno=667;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=670;
					c['no_args']();
					$pyjs.track.lineno=671;
					self['fail']("Exception should be raised on 'c.no_args()'");
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=673;
						self['assertEqual']((typeof ($79=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $79.__array[$80=$constant_int_0]) != 'undefined'?$79.__array[$80]:
								$79.__getitem__($80)):
								$79.__getitem__($constant_int_0)), 'no_args() takes no arguments (1 given)');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=675;
				self['assertEqual'](c['self_arg'](), true);
				$pyjs.track.lineno=676;
				self['assertEqual'](c['two_args']($constant_int_1), $constant_int_1);
				$pyjs.track.lineno=677;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=680;
					c['two_args']();
					$pyjs.track.lineno=681;
					self['fail']("Exception should be raised on 'c.two_args()'");
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=683;
						self['assertEqual']((typeof ($81=$p['getattr'](e, 'args')).__array != 'undefined'?
							((typeof $81.__array[$82=$constant_int_0]) != 'undefined'?$81.__array[$82]:
								$81.__getitem__($82)):
								$81.__getitem__($constant_int_0)), 'two_args() takes exactly 2 arguments (1 given)');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassArguments'] = $method;
			$pyjs.track.lineno=685;
			$method = $pyjs__bind_method2('testSuperTest', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,e,instance,$pyjs_try_err,z;
				$pyjs.track={module:'ClassTest', lineno:685};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=685;
				$pyjs.track.lineno=686;
				c = (typeof DoubleInherit == "undefined"?$m.DoubleInherit:DoubleInherit)($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=687;
				self['assertEqual']($p['$$super']((typeof DoubleInherit == "undefined"?$m.DoubleInherit:DoubleInherit), c)['get_y'](), $constant_int_2);
				$pyjs.track.lineno=688;
				c.__is_instance__ && typeof c.__setattr__ == 'function' ? c.__setattr__('y', $constant_int_4) : $p['setattr'](c, 'y', $constant_int_4); 
				$pyjs.track.lineno=689;
				self['assertEqual']($p['$$super']((typeof DoubleInherit == "undefined"?$m.DoubleInherit:DoubleInherit), c)['get_y'](), $constant_int_4);
				$pyjs.track.lineno=691;
				instance = $p['$$super']((typeof MultiBase == "undefined"?$m.MultiBase:MultiBase), (typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1))['__new__']((typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1));
				$pyjs.track.lineno=692;
				self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiInherit1');
				$pyjs.track.lineno=693;
				instance = $p['$$super']((typeof MultiBase == "undefined"?$m.MultiBase:MultiBase), (typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1))['__new__']((typeof MultiBase == "undefined"?$m.MultiBase:MultiBase));
				$pyjs.track.lineno=694;
				self['assertEqual']($p['getattr'](instance, '$$name'), 'MultiBase');
				$pyjs.track.lineno=696;
				instance = $p['$$super']((typeof MultiBase == "undefined"?$m.MultiBase:MultiBase), (typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1))['__new__']((typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1));
				$pyjs.track.lineno=697;
				instance['__init__']($constant_int_1, $constant_int_2);
				$pyjs.track.lineno=698;
				self['assertEqual']($p['getattr'](instance, 'x'), $constant_int_1);
				$pyjs.track.lineno=699;
				self['assertEqual']($p['getattr'](instance, 'y'), $constant_int_2);
				$pyjs.track.lineno=700;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=701;
					z = $p['getattr'](instance, 'z');
					$pyjs.track.lineno=702;
					self['fail']('failed to raise error for instance.z');
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=704;
						self['assertTrue'](true);
					} else {
						$pyjs.track.lineno=706;
						self['fail']('failed to raise Attribute error for instance.z');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSuperTest'] = $method;
			$pyjs.track.lineno=708;
			$method = $pyjs__bind_method2('testSuperArgTest', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a2,a3;
				$pyjs.track={module:'ClassTest', lineno:708};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=708;
				$pyjs.track.lineno=709;
				a2 = $pyjs_kwargs_call(null, (typeof SuperArg2 == "undefined"?$m.SuperArg2:SuperArg2), null, null, [{a:$constant_int_1, b:$constant_int_2, c:$constant_int_3}]);
				$pyjs.track.lineno=710;
				a3 = $pyjs_kwargs_call(null, (typeof SuperArg3 == "undefined"?$m.SuperArg3:SuperArg3), null, null, [{a:$constant_int_1, b:$constant_int_2, c:$constant_int_3}]);
				$pyjs.track.lineno=711;
				self['assertEqual']($p['list'](['SuperArg2', $p['getattr'](a2, 'a1_args')]), $p['list'](['SuperArg2', $p['list']([$p['tuple'](['a', $constant_int_1]), $p['tuple'](['b', $constant_int_2]), $p['tuple'](['c', $constant_int_3])])]));
				$pyjs.track.lineno=712;
				self['assertEqual']($p['list'](['SuperArg3', $p['getattr'](a3, 'a1_args')]), $p['list'](['SuperArg3', $p['list']([$p['tuple'](['a', $constant_int_1]), $p['tuple'](['b', $constant_int_2]), $p['tuple'](['c', $constant_int_3])])]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSuperArgTest'] = $method;
			$pyjs.track.lineno=714;
			$method = $pyjs__bind_method2('testImportTest', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,e,$89,$88,$87,imports,$84,$83,$91,$92,$93,$94,teststring,$pyjs_try_err,$90,$86,C,$85;
				$pyjs.track={module:'ClassTest', lineno:714};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=714;
				$pyjs.track.lineno=715;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				imports = $p['___import___']('imports', null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=716;
				self['assertEqual']((typeof ($83=$p['getattr'](imports, 'exec_order')).__array != 'undefined'?
					((typeof $83.__array[$84=$constant_int_0]) != 'undefined'?$83.__array[$84]:
						$83.__getitem__($84)):
						$83.__getitem__($constant_int_0)), 'circ1-1');
				$pyjs.track.lineno=717;
				self['assertEqual']((typeof ($85=$m['exec_order']).__array != 'undefined'?
					((typeof $85.__array[$86=$constant_int_1]) != 'undefined'?$85.__array[$86]:
						$85.__getitem__($86)):
						$85.__getitem__($constant_int_1)), 'circ2-1');
				$pyjs.track.lineno=718;
				self['assertEqual']((typeof ($87=$m['EXEC_ORDER']).__array != 'undefined'?
					((typeof $87.__array[$88=$constant_int_2]) != 'undefined'?$87.__array[$88]:
						$87.__getitem__($88)):
						$87.__getitem__($constant_int_2)), 'circ2-2');
				$pyjs.track.lineno=719;
				self['assertEqual']((typeof ($89=$p['getattr'](imports, 'exec_order')).__array != 'undefined'?
					((typeof $89.__array[$90=$constant_int_3]) != 'undefined'?$89.__array[$90]:
						$89.__getitem__($90)):
						$89.__getitem__($constant_int_3)), 'circ1-2');
				$pyjs.track.lineno=720;
				self['assertEqual']((typeof ($91=$p['getattr'](imports, 'exec_order')).__array != 'undefined'?
					((typeof $91.__array[$92=$constant_int_3]) != 'undefined'?$91.__array[$92]:
						$91.__getitem__($92)):
						$91.__getitem__($constant_int_3)), (typeof ($93=$p['getattr']($m['IMPORTS'], 'exec_order')).__array != 'undefined'?
					((typeof $93.__array[$94=$constant_int_3]) != 'undefined'?$93.__array[$94]:
						$93.__getitem__($94)):
						$93.__getitem__($constant_int_3)));
				$pyjs.track.lineno=722;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				imports = $p['___import___']('imports.child', null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=723;
				teststring = 'import test';
				$pyjs.track.lineno=724;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=725;
					c = imports['child']['Child']();
					$pyjs.track.lineno=726;
					self['assertEqual'](c['value'](teststring), teststring);
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=728;
						self['fail']($p['getattr'](e, 'message'));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=730;
				C = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '92a19f7607cccd5a74ee7a265ea04864';
					$pyjs.track.lineno=730;
					$pyjs.track.lineno=730;
					var $bases = new Array($p['getattr']($p['getattr'](imports, 'child'), 'Child'));
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('C', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=731;
				c = C();
				$pyjs.track.lineno=732;
				self['assertEqual'](c['value'](teststring), teststring);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImportTest'] = $method;
			$pyjs.track.lineno=734;
			$method = $pyjs__bind_method2('testPassMeAClass', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var res;
				$pyjs.track={module:'ClassTest', lineno:734};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=734;
				$pyjs.track.lineno=735;
				res = (typeof PassMeAClassFunction == "undefined"?$m.PassMeAClassFunction:PassMeAClassFunction)((typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
				$pyjs.track.lineno=736;
				self['assertEqual'](res, 'foo in PassMeAClass');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPassMeAClass'] = $method;
			$pyjs.track.lineno=738;
			$method = $pyjs__bind_method2('testClassAttributeAccess', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:738};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=738;
				$pyjs.track.lineno=739;
				self['assertEqual']($p['getattr']($m['GetAttribute'], 'getIt'), $p['getattr']($m['WithAttribute'], 'ATTR'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassAttributeAccess'] = $method;
			$pyjs.track.lineno=741;
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
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $101,$100,$103,$102,$98,$99,$107,$106,$109,$95,$97,instance,r,$110,$108,$105,$96,$104;
				$pyjs.track={module:'ClassTest', lineno:741};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=741;
				$pyjs.track.lineno=742;
				instance = (typeof MultiBase == "undefined"?$m.MultiBase:MultiBase)('a');
				$pyjs.track.lineno=743;
				r = instance['$$prototype']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=744;
				self['assertEqual']((typeof ($95=r).__array != 'undefined'?
					((typeof $95.__array[$96=$constant_int_0]) != 'undefined'?$95.__array[$96]:
						$95.__getitem__($96)):
						$95.__getitem__($constant_int_0)), 'MultiBase');
				$pyjs.track.lineno=745;
				self['assertEqual']((typeof ($97=r).__array != 'undefined'?
					((typeof $97.__array[$98=$constant_int_1]) != 'undefined'?$97.__array[$98]:
						$97.__getitem__($98)):
						$97.__getitem__($constant_int_1)), $constant_int_1);
				$pyjs.track.lineno=746;
				self['assertEqual']((typeof ($99=r).__array != 'undefined'?
					((typeof $99.__array[$100=$constant_int_2]) != 'undefined'?$99.__array[$100]:
						$99.__getitem__($100)):
						$99.__getitem__($constant_int_2)), $constant_int_2);
				$pyjs.track.lineno=747;
				self['assertEqual']((typeof ($101=r).__array != 'undefined'?
					((typeof $101.__array[$102=$constant_int_3]) != 'undefined'?$101.__array[$102]:
						$101.__getitem__($102)):
						$101.__getitem__($constant_int_3)), $constant_int_3);
				$pyjs.track.lineno=749;
				instance = (typeof MultiInherit1 == "undefined"?$m.MultiInherit1:MultiInherit1)('a', 'b');
				$pyjs.track.lineno=750;
				r = instance['$$call']($constant_int_1, $constant_int_2, $constant_int_3);
				$pyjs.track.lineno=751;
				self['assertEqual']((typeof ($103=r).__array != 'undefined'?
					((typeof $103.__array[$104=$constant_int_0]) != 'undefined'?$103.__array[$104]:
						$103.__getitem__($104)):
						$103.__getitem__($constant_int_0)), 'MultiInherit1');
				$pyjs.track.lineno=752;
				self['assertEqual']((typeof ($105=r).__array != 'undefined'?
					((typeof $105.__array[$106=$constant_int_1]) != 'undefined'?$105.__array[$106]:
						$105.__getitem__($106)):
						$105.__getitem__($constant_int_1)), $constant_int_1);
				$pyjs.track.lineno=753;
				self['assertEqual']((typeof ($107=r).__array != 'undefined'?
					((typeof $107.__array[$108=$constant_int_2]) != 'undefined'?$107.__array[$108]:
						$107.__getitem__($108)):
						$107.__getitem__($constant_int_2)), $constant_int_2);
				$pyjs.track.lineno=754;
				self['assertEqual']((typeof ($109=r).__array != 'undefined'?
					((typeof $109.__array[$110=$constant_int_3]) != 'undefined'?$109.__array[$110]:
						$109.__getitem__($110)):
						$109.__getitem__($constant_int_3)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testNameMapping'] = $method;
			$pyjs.track.lineno=756;
			$method = $pyjs__bind_method2('testGlobalClassFactory', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,pmc;
				$pyjs.track={module:'ClassTest', lineno:756};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=756;
				$pyjs.track.lineno=758;
				(typeof gregister == "undefined"?$m.gregister:gregister)('passme', (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
				$pyjs.track.lineno=759;
				(typeof gregister == "undefined"?$m.gregister:gregister)('exchild', (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass));
				$pyjs.track.lineno=760;
				(typeof gregister == "undefined"?$m.gregister:gregister)('mscp1', (typeof ExampleMultiSuperclassParent1 == "undefined"?$m.ExampleMultiSuperclassParent1:ExampleMultiSuperclassParent1));
				$pyjs.track.lineno=762;
				pmc = (typeof ggetObject == "undefined"?$m.ggetObject:ggetObject)('passme');
				$pyjs.track.lineno=763;
				self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass', 'foo !in PassMeAClass');
				$pyjs.track.lineno=765;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=766;
					pmc = (typeof ggetObject == "undefined"?$m.ggetObject:ggetObject)('mscp1', $constant_int_5);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=770;
						self['assertEqual']($p['getattr'](pmc, 'x'), $constant_int_5, 'pass me class x != 5');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ClassTest';
						if (true) {
							$pyjs.track.lineno=768;
							self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleMultiSuperclassParent1() arguments after ** must be a dictionary 5'");
						}
					}
				}
				$pyjs.track.lineno=771;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=772;
					pmc = (typeof ggetObject == "undefined"?$m.ggetObject:ggetObject)('exchild', $constant_int_5, $constant_int_7);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=776;
						self['assertEqual']($p['getattr'](pmc, 'prop_a'), $constant_int_1, 'pass me class prop_a != 1');
						$pyjs.track.lineno=777;
						self['assertEqual']($p['getattr'](pmc, 'prop_b'), $constant_int_7, 'pass me class prop_b != 7');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ClassTest';
						if (true) {
							$pyjs.track.lineno=774;
							self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7'");
						}
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGlobalClassFactory'] = $method;
			$pyjs.track.lineno=779;
			$method = $pyjs__bind_method2('testClassFactory', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var pmc,$pyjs_try_err,f;
				$pyjs.track={module:'ClassTest', lineno:779};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=779;
				$pyjs.track.lineno=781;
				f = (typeof Factory == "undefined"?$m.Factory:Factory)();
				$pyjs.track.lineno=782;
				f['register']('passme', (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
				$pyjs.track.lineno=783;
				f['register']('exchild', (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass));
				$pyjs.track.lineno=785;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=786;
					pmc = f['getObjectCompilerBug']('passme');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=790;
						self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ClassTest';
						if (true) {
							$pyjs.track.lineno=788;
							self['assertEqual'](false, true, 'Compiler bug in class factory test');
						}
					}
				}
				$pyjs.track.lineno=792;
				pmc = f['getObject']('passme');
				$pyjs.track.lineno=793;
				self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
				$pyjs.track.lineno=795;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=796;
					pmc = f['getObject']('exchild', $constant_int_5, $constant_int_7);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=800;
						self['assertEqual']($p['getattr'](pmc, 'prop_a'), $constant_int_1);
						$pyjs.track.lineno=801;
						self['assertEqual']($p['getattr'](pmc, 'prop_b'), $constant_int_7);
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ClassTest';
						if (true) {
							$pyjs.track.lineno=798;
							self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7'");
						}
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassFactory'] = $method;
			$pyjs.track.lineno=803;
			$method = $pyjs__bind_method2('testClassFactory', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var pmc,$pyjs_try_err,f;
				$pyjs.track={module:'ClassTest', lineno:803};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=803;
				$pyjs.track.lineno=805;
				f = (typeof Factory == "undefined"?$m.Factory:Factory)();
				$pyjs.track.lineno=806;
				f['register']('passme', (typeof PassMeAClass == "undefined"?$m.PassMeAClass:PassMeAClass));
				$pyjs.track.lineno=807;
				f['register']('exchild', (typeof ExampleChildClass == "undefined"?$m.ExampleChildClass:ExampleChildClass));
				$pyjs.track.lineno=809;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=810;
					pmc = f['getObjectCompilerBug']('passme');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=814;
						self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ClassTest';
						if (true) {
							$pyjs.track.lineno=812;
							self['assertEqual'](false, true, 'Compiler bug in class factory test');
						}
					}
				}
				$pyjs.track.lineno=816;
				pmc = f['getObject']('passme');
				$pyjs.track.lineno=817;
				self['assertEqual'](pmc['foo'](), 'foo in PassMeAClass');
				$pyjs.track.lineno=819;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=820;
					pmc = f['getObject']('exchild', $constant_int_5, $constant_int_7);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=824;
						self['assertEqual']($p['getattr'](pmc, 'prop_a'), $constant_int_1);
						$pyjs.track.lineno=825;
						self['assertEqual']($p['getattr'](pmc, 'prop_b'), $constant_int_7);
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='ClassTest';
						if (true) {
							$pyjs.track.lineno=822;
							self['assertEqual'](false, true, "Exception indicates bug in compiler: 'Error: uncaught exception: ExampleChildClass() arguments after ** must be a dictionary 7'");
						}
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassFactory'] = $method;
			$pyjs.track.lineno=827;
			$method = $pyjs__bind_method2('testImportKeywords', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var imports,dict,enumerate;
				$pyjs.track={module:'ClassTest', lineno:827};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=827;
				$pyjs.track.lineno=828;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				imports = $p['___import___']('imports.enum.super', null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=829;
				self['assertEqual']($p['getattr']($p['getattr']($p['getattr'](imports, '$$enum'), '$$super'), '$$var'), $constant_int_1);
				$pyjs.track.lineno=830;
				self['assertEqual'](imports['$$enum']['$$super']['$$function'](), $constant_int_2);
				$pyjs.track.lineno=832;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				enumerate = $p['___import___']('imports.enumerate', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=833;
				self['assertEqual']($p['getattr'](enumerate, 'list'), $constant_int_1);
				$pyjs.track.lineno=835;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				dict = $p['___import___']('imports.enumerate.dict', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=836;
				self['assertEqual'](dict(), $p['tuple']([$constant_int_1, $constant_int_2]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImportKeywords'] = $method;
			$pyjs.track.lineno=838;
			$method = $pyjs__bind_method2('testDescriptors', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$pyjs_try_err,x,decorated;
				$pyjs.track={module:'ClassTest', lineno:838};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=838;
				$pyjs.track.lineno=839;
				$pyjs.track.lineno=840;
				decorated = (typeof Decorated == "undefined"?$m.Decorated:Decorated)();
				$pyjs.track.lineno=841;
				$m['revealAccessLog'] = null;
				$pyjs.track.lineno=843;
				self['assertEqual']($p['getattr'](decorated, 'x'), $constant_int_10);
				$pyjs.track.lineno=844;
				self['assertEqual']($m['revealAccessLog'], "Retrieving var 'x'");
				$pyjs.track.lineno=846;
				decorated.__is_instance__ && typeof decorated.__setattr__ == 'function' ? decorated.__setattr__('x', $constant_int_5) : $p['setattr'](decorated, 'x', $constant_int_5); 
				$pyjs.track.lineno=847;
				self['assertEqual']($m['revealAccessLog'], "Updating var 'x': 5");
				$pyjs.track.lineno=848;
				self['assertEqual']($p['getattr'](decorated, 'x'), $constant_int_5);
				$pyjs.track.lineno=850;
				$p['delattr'](decorated, 'x');
				$pyjs.track.lineno=851;
				self['assertEqual']($m['revealAccessLog'], "Deleting var 'x'");
				$pyjs.track.lineno=852;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=853;
					x = $p['getattr'](decorated, 'x');
					$pyjs.track.lineno=854;
					self['fail']("Failed to raise error for 'del decorated.x'");
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=856;
						self['assertTrue'](true);
					} else {
						$pyjs.track.lineno=859;
						self['fail']("Failed to raise Attribute error for 'del decorated.x'");
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDescriptors'] = $method;
			$pyjs.track.lineno=861;
			$method = $pyjs__bind_method2('testProperty', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var p,$pyjs_try_err,e,x;
				$pyjs.track={module:'ClassTest', lineno:861};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=861;
				$pyjs.track.lineno=862;
				p = (typeof OldStylePropertyDecorating == "undefined"?$m.OldStylePropertyDecorating:OldStylePropertyDecorating)();
				$pyjs.track.lineno=864;
				p.__is_instance__ && typeof p.__setattr__ == 'function' ? p.__setattr__('x', $constant_int_1) : $p['setattr'](p, 'x', $constant_int_1); 
				$pyjs.track.lineno=865;
				self['assertEqual']($p['getattr'](p, '_x'), $constant_int_1);
				$pyjs.track.lineno=866;
				self['assertEqual']($p['getattr'](p, 'x'), $constant_int_1);
				$pyjs.track.lineno=867;
				$p['delattr'](p, 'x');
				$pyjs.track.lineno=868;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=869;
					x = $p['getattr'](p, '_x');
					$pyjs.track.lineno=870;
					self['fail']("Failed to raise error for 'x = p._x'");
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=872;
						self['assertTrue'](true);
					} else {
						$pyjs.track.lineno=874;
						self['fail']("Failed to raise Attribute error for 'x = p._x'");
					}
				}
				$pyjs.track.lineno=876;
				p = (typeof NewStylePropertyDecorating == "undefined"?$m.NewStylePropertyDecorating:NewStylePropertyDecorating)();
				$pyjs.track.lineno=878;
				p.__is_instance__ && typeof p.__setattr__ == 'function' ? p.__setattr__('x', $constant_int_1) : $p['setattr'](p, 'x', $constant_int_1); 
				$pyjs.track.lineno=879;
				self['assertEqual']($p['getattr'](p, '_x'), $constant_int_1);
				$pyjs.track.lineno=880;
				self['assertEqual']($p['getattr'](p, 'x'), $constant_int_1);
				$pyjs.track.lineno=881;
				$p['delattr'](p, 'x');
				$pyjs.track.lineno=882;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=883;
					x = $p['getattr'](p, '_x');
					$pyjs.track.lineno=884;
					self['fail']("Failed to raise error for 'x = p._x'");
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=886;
						self['assertTrue'](true);
					} else {
						$pyjs.track.lineno=888;
						self['fail']("Failed to raise Attribute error for 'x = p._x'");
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testProperty'] = $method;
			$pyjs.track.lineno=890;
			$method = $pyjs__bind_method2('testDynamicLoading', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:890};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=890;
				$pyjs.track.lineno=891;
				self['assertEqual']($m['I18N']['i18n']['example'](), 'This is an example');
				$pyjs.track.lineno=893;
				self['assertEqual']($m['I18N']['domain']['i18n']['example'](), 'This is a domain example');
				$pyjs.track.lineno=895;
				self['assertEqual']($m['I18N']['domain']['subdomain']['i18n']['example'](), 'This is a subdomain example');
				$pyjs.track.lineno=897;
				self['assertEqual']($m['I18N']['i18n']['another_example'](), 'This is another example');
				$pyjs.track.lineno=899;
				self['assertEqual']($m['I18N']['domain']['i18n']['another_example'](), 'This is another example');
				$pyjs.track.lineno=901;
				$m['I18N']['set_locale']('en_US');
				$pyjs.track.lineno=902;
				self['assertEqual']($m['I18N']['i18n']['example'](), 'This is an en_US example');
				$pyjs.track.lineno=904;
				self['assertEqual']($m['I18N']['domain']['i18n']['example'](), 'This is a domain en_US example');
				$pyjs.track.lineno=906;
				self['assertEqual']($m['I18N']['domain']['subdomain']['i18n']['example'](), 'This is a subdomain en_US example');
				$pyjs.track.lineno=908;
				self['assertEqual']($m['I18N']['i18n']['another_example'](), 'This is en_US another example');
				$pyjs.track.lineno=910;
				self['assertEqual']($m['I18N']['domain']['i18n']['another_example'](), 'This is en_US another example');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDynamicLoading'] = $method;
			$pyjs.track.lineno=913;
			$method = $pyjs__bind_method2('testClassesAnywhere', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var A,a;
				$pyjs.track={module:'ClassTest', lineno:913};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=913;
				$pyjs.track.lineno=914;
				A = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = 'aa12d3976c1f04d5405ed82a33a28592';
					$pyjs.track.lineno=915;
					$method = $pyjs__bind_method2('__init__', function(what) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							what = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'aa12d3976c1f04d5405ed82a33a28592') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var $bool9,$bool8,B;
						$pyjs.track={module:'ClassTest', lineno:915};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=915;
						$pyjs.track.lineno=916;
						if ((($bool9=!(($bool8=what) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
							false :
							(typeof $bool8=='object'?
								(typeof $bool8.__nonzero__=='function'?
									$bool8.__nonzero__() :
									(typeof $bool8.__len__=='function'?
										($bool8.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
							$pyjs.track.lineno=917;
							B = (function(){
								var $cls_definition = new Object();
								var $method;
								$cls_definition.__module__ = 'ClassTest';
								$cls_definition.__md5__ = 'f9f72eb72343893db35b98c821710f55';
								$pyjs.track.lineno=918;
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
										if (self.prototype.__md5__ !== 'f9f72eb72343893db35b98c821710f55') {
											if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
												$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
											}
										}
									}

									$pyjs.track={module:'ClassTest', lineno:918};$pyjs.trackstack.push($pyjs.track);
									$pyjs.track.module='ClassTest';
									$pyjs.track.lineno=918;
									$pyjs.track.lineno=919;
									self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('v', $constant_int_0) : $p['setattr'](self, 'v', $constant_int_0); 
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									return null;
								}
	, 1, [null,null,['self']]);
								$cls_definition['__init__'] = $method;
								$pyjs.track.lineno=917;
								var $bases = new Array($p['object']);
								var $data = $p['dict']();
								for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
								return $p['_create_class']('B', $p['tuple']($bases), $data);
							})();
						}
						else {
							$pyjs.track.lineno=921;
							B = (function(){
								var $cls_definition = new Object();
								var $method;
								$cls_definition.__module__ = 'ClassTest';
								$cls_definition.__md5__ = '83a7429088022f8402d9c945ac7c12bf';
								$pyjs.track.lineno=922;
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
										if (self.prototype.__md5__ !== '83a7429088022f8402d9c945ac7c12bf') {
											if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
												$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
											}
										}
									}

									$pyjs.track={module:'ClassTest', lineno:922};$pyjs.trackstack.push($pyjs.track);
									$pyjs.track.module='ClassTest';
									$pyjs.track.lineno=922;
									$pyjs.track.lineno=923;
									self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('v', $constant_int_1) : $p['setattr'](self, 'v', $constant_int_1); 
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									return null;
								}
	, 1, [null,null,['self']]);
								$cls_definition['__init__'] = $method;
								$pyjs.track.lineno=921;
								var $bases = new Array($p['object']);
								var $data = $p['dict']();
								for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
								return $p['_create_class']('B', $p['tuple']($bases), $data);
							})();
						}
						$pyjs.track.lineno=924;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('b', B()) : $p['setattr'](self, 'b', B()); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['what']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=914;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('A', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=926;
				a = A($constant_int_0);
				$pyjs.track.lineno=927;
				self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), $constant_int_0);
				$pyjs.track.lineno=928;
				a = A($constant_int_1);
				$pyjs.track.lineno=929;
				self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassesAnywhere'] = $method;
			$pyjs.track.lineno=931;
			$method = $pyjs__bind_method2('testClassDefinitionCode', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var A,a,v;
				$pyjs.track={module:'ClassTest', lineno:931};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=931;
				$pyjs.track.lineno=932;
				A = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = 'a787535979c209d829af873419fbde63';
					$pyjs.track.lineno=933;
					$method = $pyjs__bind_method2('__init__', function(what) {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
						} else {
							var self = arguments[0];
							what = arguments[1];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'a787535979c209d829af873419fbde63') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}
						var B;
						$pyjs.track={module:'ClassTest', lineno:933};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=933;
						$pyjs.track.lineno=934;
						B = (function(){
							var $cls_definition = new Object();
							var $method;
							$cls_definition.__module__ = 'ClassTest';
							$cls_definition.__md5__ = 'b1116e328b07be5962304f03ca8d1f4b';
							$pyjs.track.lineno=935;
							if ((($bool11=!(($bool10=what) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
								false :
								(typeof $bool10=='object'?
									(typeof $bool10.__nonzero__=='function'?
										$bool10.__nonzero__() :
										(typeof $bool10.__len__=='function'?
											($bool10.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
								$pyjs.track.lineno=936;
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
										if (self.prototype.__md5__ !== 'b1116e328b07be5962304f03ca8d1f4b') {
											if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
												$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
											}
										}
									}

									$pyjs.track={module:'ClassTest', lineno:936};$pyjs.trackstack.push($pyjs.track);
									$pyjs.track.module='ClassTest';
									$pyjs.track.lineno=936;
									$pyjs.track.lineno=937;
									self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('v', $constant_int_0) : $p['setattr'](self, 'v', $constant_int_0); 
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									return null;
								}
	, 1, [null,null,['self']]);
								$cls_definition['__init__'] = $method;
							}
							else {
								$pyjs.track.lineno=939;
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
										if (self.prototype.__md5__ !== 'b1116e328b07be5962304f03ca8d1f4b') {
											if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
												$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
											}
										}
									}

									$pyjs.track={module:'ClassTest', lineno:939};$pyjs.trackstack.push($pyjs.track);
									$pyjs.track.module='ClassTest';
									$pyjs.track.lineno=939;
									$pyjs.track.lineno=940;
									self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('v', $constant_int_1) : $p['setattr'](self, 'v', $constant_int_1); 
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									return null;
								}
	, 1, [null,null,['self']]);
								$cls_definition['__init__'] = $method;
							}
							$pyjs.track.lineno=934;
							var $bases = new Array($p['object']);
							var $data = $p['dict']();
							for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
							return $p['_create_class']('B', $p['tuple']($bases), $data);
						})();
						$pyjs.track.lineno=941;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('b', B()) : $p['setattr'](self, 'b', B()); 
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return null;
					}
	, 1, [null,null,['self'],['what']]);
					$cls_definition['__init__'] = $method;
					$pyjs.track.lineno=932;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('A', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=943;
				a = A($constant_int_0);
				$pyjs.track.lineno=944;
				self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), $constant_int_0);
				$pyjs.track.lineno=945;
				a = A($constant_int_1);
				$pyjs.track.lineno=946;
				self['assertEqual']($p['getattr']($p['getattr'](a, 'b'), 'v'), $constant_int_1);
				$pyjs.track.lineno=948;
				A = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '7575acd65c81dad50abecbd69cebea83';
					$pyjs.track.lineno=949;
					$cls_definition['l'] = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
					$pyjs.track.lineno=950;
					$cls_definition['l'].__setitem__($constant_int_1, $constant_int_22);
					$pyjs.track.lineno=951;
					$cls_definition['d'] = $p['dict']([]);
					$pyjs.track.lineno=952;
					$cls_definition['d'].__setitem__('a', $constant_int_1);
					$pyjs.track.lineno=953;
					$cls_definition['l1'] = $p['list']([]);
					$pyjs.track.lineno=954;
					$cls_definition['l2'] = $p['list']([]);
					$pyjs.track.lineno=955;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter2_iter = $p['range']($constant_int_4);
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						$cls_definition['i'] = $iter2_nextval;
						$pyjs.track.lineno=956;
						$cls_definition['l1']['append']($cls_definition['i']);
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='ClassTest';
					$pyjs.track.lineno=957;
					$cls_definition['i'] = $constant_int_0;
					$pyjs.track.lineno=958;
					while ((($bool12=((($cmp3=$cls_definition['i'])===($cmp4=$constant_int_4)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						$pyjs.track.lineno=959;
						$cls_definition['l2']['append']($cls_definition['i']);
						$pyjs.track.lineno=960;
						$cls_definition['i'] = (typeof ($add13=$cls_definition['i'])==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
							$add13+$add14:
							$p['op_add']($add13,$add14));
					}
					$pyjs.track.lineno=948;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('A', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=962;
				a = A();
				$pyjs.track.lineno=963;
				v = $p['list']([$constant_int_1, $constant_int_22, $constant_int_3]);
				$pyjs.track.lineno=964;
				self['assertTrue']($p['op_eq']($p['getattr'](a, 'l'), v), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'l'), v])));
				$pyjs.track.lineno=965;
				v = $p['dict']([['a', $constant_int_1]]);
				$pyjs.track.lineno=966;
				self['assertTrue']($p['op_eq']($p['getattr'](a, 'd'), v), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'd'), v])));
				$pyjs.track.lineno=967;
				v = $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=968;
				self['assertTrue']($p['op_eq']($p['getattr'](a, 'l1'), v), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'l1'), v])));
				$pyjs.track.lineno=969;
				self['assertTrue']($p['op_eq']($p['getattr'](a, 'l2'), v), $p['sprintf']('%r == %r', $p['tuple']([$p['getattr'](a, 'l2'), v])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassDefinitionCode'] = $method;
			$pyjs.track.lineno=971;
			$method = $pyjs__bind_method2('testGenericMethodDecorators', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj,res,$bool13,$add15,$add16,$pyjs_try_err,t,msg,e,exc_raised;
				$pyjs.track={module:'ClassTest', lineno:971};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=971;
				$pyjs.track.lineno=975;
				obj = (typeof DecoratedMethods == "undefined"?$m.DecoratedMethods:DecoratedMethods)();
				$pyjs.track.lineno=976;
				self['assertEqual'](obj['mtd1']('b'), '1b2');
				$pyjs.track.lineno=977;
				self['assertEqual'](obj['mtd2']('b'), '31b24');
				$pyjs.track.lineno=978;
				self['assertEqual'](obj['mtd3']('b'), 'abc');
				$pyjs.track.lineno=979;
				self['assertEqual'](obj['mtd4']('b'), 'a3b4c');
				$pyjs.track.lineno=981;
				exc_raised = false;
				$pyjs.track.lineno=982;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=983;
					res = obj['mtd5']('b');
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						t = $pyjs_try_err;
						$pyjs.track.lineno=985;
						exc_raised = true;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=986;
				self['assertTrue'](exc_raised, 'TypeError wrong arguments count not raised');
				$pyjs.track.lineno=988;
				self['assertEqual'](obj['mtd_static']('b'), '5b6');
				$pyjs.track.lineno=989;
				self['assertEqual']($pyjs_kwargs_call($m.DecoratedMethods, 'mtd_static', $p['list'](['b']), $p['dict']([]), [{}]), '5b6');
				$pyjs.track.lineno=990;
				self['assertEqual'](obj['mtd_static2']('b'), '55b66');
				$pyjs.track.lineno=991;
				self['assertEqual']($m.DecoratedMethods['mtd_static']('b'), '5b6');
				$pyjs.track.lineno=992;
				self['assertEqual']($m.DecoratedMethods['mtd_static2']('b'), '55b66');
				$pyjs.track.lineno=994;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=995;
					self['assertEqual'](obj['mtd_class']('b'), '7b8');
					$pyjs.track.lineno=996;
					self['assertEqual'](obj['mtd_class2']('b'), '77b88');
					$pyjs.track.lineno=997;
					self['assertEqual']($m.DecoratedMethods['mtd_class']('b'), '7b8');
					$pyjs.track.lineno=998;
					self['assertEqual']($m.DecoratedMethods['mtd_class2']('b'), '77b88');
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
					$pyjs.track.module='ClassTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=1000;
						msg = $p['str'](e);
						$pyjs.track.lineno=1001;
						if ((($bool13=msg.__contains__('fnc() takes exactly 2 arguments (1 given)')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
							$pyjs.track.lineno=1002;
							msg = (typeof ($add15='bug #318 - ')==typeof ($add16=msg) && (typeof $add15=='number'||typeof $add15=='string')?
								$add15+$add16:
								$p['op_add']($add15,$add16));
							$pyjs.track.lineno=1003;
							self['fail']($p['sprintf']('Bug #580 : %s ', msg));
						}
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGenericMethodDecorators'] = $method;
			$pyjs.track.lineno=1005;
			$method = $pyjs__bind_method2('testExpressionInherit', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd86dcdab5c7f000b33fc169e51a0cf97') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $116,$114,$115,$112,$113,$111,t2,cl,T2,T,Y,X,t;
				$pyjs.track={module:'ClassTest', lineno:1005};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1005;
				$pyjs.track.lineno=1006;
				X = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '48fde3c9793a5c7d4cdcfce30c9acd47';
					$pyjs.track.lineno=1007;
					$method = $pyjs__bind_method2('m1', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== '48fde3c9793a5c7d4cdcfce30c9acd47') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:1007};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=1007;
						$pyjs.track.lineno=1008;
						$pyjs.track.lineno=1008;
						var $pyjs__ret = $constant_int_1;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['m1'] = $method;
					$pyjs.track.lineno=1006;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('X', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=1009;
				Y = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = 'c1eda95bd191db69458dd77329e23c5f';
					$pyjs.track.lineno=1010;
					$method = $pyjs__bind_method2('m2', function() {
						if (this.__is_instance__ === true) {
							var self = this;
							if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
						} else {
							var self = arguments[0];
							if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
							if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
						}
						if ($pyjs.options.arg_instance_type) {
							if (self.prototype.__md5__ !== 'c1eda95bd191db69458dd77329e23c5f') {
								if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
									$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
								}
							}
						}

						$pyjs.track={module:'ClassTest', lineno:1010};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='ClassTest';
						$pyjs.track.lineno=1010;
						$pyjs.track.lineno=1011;
						$pyjs.track.lineno=1011;
						var $pyjs__ret = $constant_int_2;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
	, 1, [null,null,['self']]);
					$cls_definition['m2'] = $method;
					$pyjs.track.lineno=1009;
					var $bases = new Array($p['object']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('Y', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=1013;
				cl = $p['list']([$p['list'], X, Y]);
				$pyjs.track.lineno=1014;
				T = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '94a451da9e29d1035062cf292cacb18e';
					$pyjs.track.lineno=1015;
					$pyjs.track.lineno=1014;
					var $bases = new Array((typeof ($111=cl).__array != 'undefined'?
					((typeof $111.__array[$112=$constant_int_0]) != 'undefined'?$111.__array[$112]:
						$111.__getitem__($112)):
						$111.__getitem__($constant_int_0)));
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('T', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=1016;
				self['assertEqual'](T($p['list']([$constant_int_1])), $p['list']([$constant_int_1]));
				$pyjs.track.lineno=1018;
				T = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '18448dc80389422639ea652fa0780381';
					$pyjs.track.lineno=1019;
					$pyjs.track.lineno=1018;
					var $bases = new Array((typeof ($113=cl).__array != 'undefined'?
					((typeof $113.__array[$114=$constant_int_1]) != 'undefined'?$113.__array[$114]:
						$113.__getitem__($114)):
						$113.__getitem__($constant_int_1)),(typeof ($115=cl).__array != 'undefined'?
					((typeof $115.__array[$116=$constant_int_2]) != 'undefined'?$115.__array[$116]:
						$115.__getitem__($116)):
						$115.__getitem__($constant_int_2)));
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('T', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=1020;
				t = T();
				$pyjs.track.lineno=1021;
				self['assertEqual'](t['m1'](), $constant_int_1);
				$pyjs.track.lineno=1022;
				self['assertEqual'](t['m2'](), $constant_int_2);
				$pyjs.track.lineno=1024;
				T2 = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'ClassTest';
					$cls_definition.__md5__ = '3b18c59ce57a39f99e48082da899b281';
					$pyjs.track.lineno=1025;
					$pyjs.track.lineno=1024;
					var $bases = new Array($p['type'](t));
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('T2', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=1026;
				t2 = T2();
				$pyjs.track.lineno=1027;
				self['assertEqual'](t2['m1'](), $constant_int_1);
				$pyjs.track.lineno=1028;
				self['assertEqual'](t2['m2'](), $constant_int_2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExpressionInherit'] = $method;
			$pyjs.track.lineno=86;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ClassTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1030;
		$m['PassMeAClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '0dc2c46537b325cf65d0f78c89a8b6f5';
			$pyjs.track.lineno=1031;
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
					if (self.prototype.__md5__ !== '0dc2c46537b325cf65d0f78c89a8b6f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1031};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1031;
				$pyjs.track.lineno=1032;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1033;
			$method = $pyjs__bind_method2('foo', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0dc2c46537b325cf65d0f78c89a8b6f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1033};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1033;
				$pyjs.track.lineno=1034;
				$pyjs.track.lineno=1034;
				var $pyjs__ret = 'foo in PassMeAClass';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['foo'] = $method;
			$pyjs.track.lineno=1030;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('PassMeAClass', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1036;
		$m['PassMeAClassFunction'] = function(klass) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var c;
			$pyjs.track={module:'ClassTest',lineno:1036};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ClassTest';
			$pyjs.track.lineno=1036;
			$pyjs.track.lineno=1037;
			c = klass();
			$pyjs.track.lineno=1038;
			$pyjs.track.lineno=1038;
			var $pyjs__ret = c['foo']();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['PassMeAClassFunction'].__name__ = 'PassMeAClassFunction';

		$m['PassMeAClassFunction'].__bind_type__ = 0;
		$m['PassMeAClassFunction'].__args__ = [null,null,['klass']];
		$pyjs.track.lineno=1041;
		$m['method'] = function(self) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'ClassTest',lineno:1041};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ClassTest';
			$pyjs.track.lineno=1041;
			$pyjs.track.lineno=1042;
			$pyjs.track.lineno=1042;
			var $pyjs__ret = $constant_int_1;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['method'].__name__ = 'method';

		$m['method'].__bind_type__ = 0;
		$m['method'].__args__ = [null,null,['self']];
		$pyjs.track.lineno=1046;
		$m['ExampleClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '897f293f350d85a9a2950db7dd62d57c';
			$pyjs.track.lineno=1047;
			$cls_definition['x'] = 'test';
			$pyjs.track.lineno=1048;
			$cls_definition['a'] = $constant_int_1;
			$pyjs.track.lineno=1049;
			$cls_definition['b'] = $constant_int_2;
			$pyjs.track.lineno=1050;
			$cls_definition['c'] = $p['op_bitor2']($cls_definition['a'], $cls_definition['b']);
			$pyjs.track.lineno=1053;
			$method = $pyjs__bind_method2('sampleClassMethod', function(arg) {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 1, arguments.length);
    var cls = this.prototype;

				$pyjs.track={module:'ClassTest', lineno:1053};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1053;
				$pyjs.track.lineno=1054;
				$pyjs.track.lineno=1054;
				var $pyjs__ret = $p['tuple']([cls, arg]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['cls'],['arg']]);
			$cls_definition['sampleClassMethod'] = $method;
			$pyjs.track.lineno=1057;
			$method = $pyjs__bind_method2('sampleClassMethodVarargs', function() {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
    var cls = this.prototype;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));


				$pyjs.track={module:'ClassTest', lineno:1057};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1057;
				$pyjs.track.lineno=1058;
				$pyjs.track.lineno=1058;
				var $pyjs__ret = $p['tuple']([cls, args]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, ['args',null,['cls']]);
			$cls_definition['sampleClassMethodVarargs'] = $method;
			$pyjs.track.lineno=1061;
			$method = $pyjs__bind_method2('sampleClassMethodKwargs', function(a, b, c) {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
    var cls = this.prototype;
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

				$pyjs.track={module:'ClassTest', lineno:1061};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1061;
				$pyjs.track.lineno=1062;
				$pyjs.track.lineno=1062;
				var $pyjs__ret = $p['tuple']([cls, a, b, c]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['cls'],['a', $constant_int_0],['b', $constant_int_1],['c', $constant_int_2]]);
			$cls_definition['sampleClassMethodKwargs'] = $method;
			$pyjs.track.lineno=1065;
			$method = $pyjs__bind_method2('sampleStaticMethod', function(arg) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

				$pyjs.track={module:'ClassTest', lineno:1065};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1065;
				$pyjs.track.lineno=1066;
				$pyjs.track.lineno=1066;
				var $pyjs__ret = arg;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null,['arg']]);
			$cls_definition['sampleStaticMethod'] = $method;
			$pyjs.track.lineno=1068;
			$method = $pyjs__bind_method2('shouldntWork', function() {
				if (this.__is_instance__ === true) {
					var arg = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var arg = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (arg.prototype.__md5__ !== '897f293f350d85a9a2950db7dd62d57c') {
						if (!$p['_isinstance'](arg, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], arg);
						}
					}
				}
				var $add20,$add17,$add18,$add19;
				$pyjs.track={module:'ClassTest', lineno:1068};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1068;
				$pyjs.track.lineno=1069;
				$pyjs.track.lineno=1069;
				var $pyjs__ret = (typeof ($add19=(typeof ($add17='before')==typeof ($add18=arg) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)))==typeof ($add20='after') && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['arg']]);
			$cls_definition['shouldntWork'] = $method;
			$pyjs.track.lineno=1071;
			$cls_definition['oldIdiomStaticMethod'] = $p['staticmethod']($p['staticmethod']($cls_definition['shouldntWork']));
			$pyjs.track.lineno=1073;
			$method = $pyjs__bind_method2('fail_a', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '897f293f350d85a9a2950db7dd62d57c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1073};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1073;
				$pyjs.track.lineno=1074;
				$pyjs.track.lineno=1074;
				var $pyjs__ret = (typeof a == "undefined"?$m.a:a);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['fail_a'] = $method;
			$pyjs.track.lineno=1046;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleClass', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1077;
		$m['x'] = 'global test';
		$pyjs.track.lineno=1079;
		$m['ExampleParentClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'fbb9d2f3bf45fd5e6b015224c5a28870';
			$pyjs.track.lineno=1080;
			$cls_definition['x'] = 'test';
			$pyjs.track.lineno=1082;
			$method = $pyjs__bind_method2('__init__', function(a, b) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fbb9d2f3bf45fd5e6b015224c5a28870') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];

				$pyjs.track={module:'ClassTest', lineno:1082};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1082;
				$pyjs.track.lineno=1083;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('prop_a', a) : $p['setattr'](self, 'prop_a', a); 
				$pyjs.track.lineno=1084;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('prop_b', b) : $p['setattr'](self, 'prop_b', b); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a', $constant_int_1],['b', $constant_int_2]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1087;
			$method = $pyjs__bind_method2('sampleClassMethod', function(arg) {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 1, arguments.length);
    var cls = this.prototype;

				$pyjs.track={module:'ClassTest', lineno:1087};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1087;
				$pyjs.track.lineno=1088;
				$pyjs.track.lineno=1088;
				var $pyjs__ret = $p['tuple']([cls, arg]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['cls'],['arg']]);
			$cls_definition['sampleClassMethod'] = $method;
			$pyjs.track.lineno=1090;
			$method = $pyjs__bind_method2('get_x', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fbb9d2f3bf45fd5e6b015224c5a28870') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1090};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1090;
				$pyjs.track.lineno=1091;
				$pyjs.track.lineno=1091;
				var $pyjs__ret = $p['getattr'](self, 'x');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_x'] = $method;
			$pyjs.track.lineno=1093;
			$method = $pyjs__bind_method2('inert', function(x) {
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
					if (self.prototype.__md5__ !== 'fbb9d2f3bf45fd5e6b015224c5a28870') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1093};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1093;
				$pyjs.track.lineno=1094;
				$pyjs.track.lineno=1094;
				var $pyjs__ret = x;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['inert'] = $method;
			$pyjs.track.lineno=1096;
			$method = $pyjs__bind_method2('global_x1', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fbb9d2f3bf45fd5e6b015224c5a28870') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1096};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1096;
				$pyjs.track.lineno=1097;
				$pyjs.track.lineno=1097;
				var $pyjs__ret = $m['x'];
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['global_x1'] = $method;
			$pyjs.track.lineno=1099;
			$method = $pyjs__bind_method2('global_x2', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fbb9d2f3bf45fd5e6b015224c5a28870') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1099};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1099;
				$pyjs.track.lineno=1100;
				$pyjs.track.lineno=1100;
				var $pyjs__ret = $m['x'];
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['global_x2'] = $method;
			$pyjs.track.lineno=1079;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleParentClass', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1102;
		$m['ExampleChildClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '96404500289b7215da363b6cd5112b59';
			$pyjs.track.lineno=1103;
			$method = $pyjs__bind_method2('__init__', function(a, b) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '96404500289b7215da363b6cd5112b59') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];

				$pyjs.track={module:'ClassTest', lineno:1103};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1103;
				$pyjs.track.lineno=1104;
				$pyjs_kwargs_call($m['ExampleParentClass'], '__init__', null, null, [{b:b}, self]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a', $constant_int_11],['b', $constant_int_22]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1102;
			var $bases = new Array($m['ExampleParentClass']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleChildClass', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1107;
		$m['ExampleParentObject'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '52edfdd41f2975bd978d87754d69db74';
			$pyjs.track.lineno=1108;
			$cls_definition['x'] = $p['list']([]);
			$pyjs.track.lineno=1107;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleParentObject', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1110;
		$m['ExampleChildObject'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'fb2ac617fc66801e6e1c79992b75fe29';
			$pyjs.track.lineno=1111;
			$pyjs.track.lineno=1110;
			var $bases = new Array($m['ExampleParentObject']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleChildObject', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1115;
		$m['ExampleGrandParentConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'ecfe01f653689c095da58c2ba8b4f0a6';
			$pyjs.track.lineno=1116;
			$cls_definition['z'] = 'grandparent';
			$pyjs.track.lineno=1118;
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
					if (self.prototype.__md5__ !== 'ecfe01f653689c095da58c2ba8b4f0a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1118};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1118;
				$pyjs.track.lineno=1119;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('r', 'older') : $p['setattr'](self, 'r', 'older'); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1121;
			$method = $pyjs__bind_method2('older', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ecfe01f653689c095da58c2ba8b4f0a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1121};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1121;
				$pyjs.track.lineno=1122;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('w', $constant_int_2) : $p['setattr'](self, 'w', $constant_int_2); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['older'] = $method;
			$pyjs.track.lineno=1115;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleGrandParentConstructor', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1124;
		$m['ExampleParentConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '1376e721c93114964ca1acb35a757e61';
			$pyjs.track.lineno=1125;
			$cls_definition['y'] = 'parent';
			$pyjs.track.lineno=1127;
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
					if (self.prototype.__md5__ !== '1376e721c93114964ca1acb35a757e61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1127};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1127;
				$pyjs.track.lineno=1128;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', 'test') : $p['setattr'](self, 'x', 'test'); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1130;
			$method = $pyjs__bind_method2('dosomething', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1376e721c93114964ca1acb35a757e61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1130};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1130;
				$pyjs.track.lineno=1131;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('m', $constant_int_1) : $p['setattr'](self, 'm', $constant_int_1); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['dosomething'] = $method;
			$pyjs.track.lineno=1124;
			var $bases = new Array($m['ExampleGrandParentConstructor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleParentConstructor', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1133;
		$m['ExampleChildConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '92c60e7f19c292fcc4a1dd985129f0c4';
			$pyjs.track.lineno=1134;
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
					if (self.prototype.__md5__ !== '92c60e7f19c292fcc4a1dd985129f0c4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1134};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1134;
				$pyjs.track.lineno=1135;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1133;
			var $bases = new Array($m['ExampleParentConstructor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleChildConstructor', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1137;
		$m['ExampleChildNoConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'b597f719a90ee2424e1786e03846a73c';
			$pyjs.track.lineno=1138;
			$pyjs.track.lineno=1137;
			var $bases = new Array($m['ExampleParentConstructor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleChildNoConstructor', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1140;
		$m['ExampleChildExplicitConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '19e1121944f9b4c718ae9a01589149a4';
			$pyjs.track.lineno=1141;
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
					if (self.prototype.__md5__ !== '19e1121944f9b4c718ae9a01589149a4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1141};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1141;
				$pyjs.track.lineno=1142;
				$m['ExampleParentConstructor']['__init__'](self);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1140;
			var $bases = new Array($m['ExampleParentConstructor']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleChildExplicitConstructor', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1153;
		$m['ObjectClass'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '0eeecc80a43aed58f9d30ab5d1525b2d';
			$pyjs.track.lineno=1154;
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
					if (self.prototype.__md5__ !== '0eeecc80a43aed58f9d30ab5d1525b2d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1154};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1154;
				$pyjs.track.lineno=1155;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('prop', $constant_int_1) : $p['setattr'](self, 'prop', $constant_int_1); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1153;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ObjectClass', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1157;
		$m['OtherClass1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '109e744c6811b91fb3a65c724999bd96';
			$pyjs.track.lineno=1158;
			$method = $pyjs__bind_method2('__new__', function(cls) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

				$pyjs.track={module:'ClassTest', lineno:1158};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1158;
				$pyjs.track.lineno=1159;
				$pyjs.track.lineno=1159;
				var $pyjs__ret = $m['ObjectClass']();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null,['cls']]);
			$cls_definition['__new__'] = $method;
			$pyjs.track.lineno=1157;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherClass1', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1161;
		$m['OtherSubclass1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '39f5ab5dc156dd54f375f8b220cc7f85';
			$pyjs.track.lineno=1162;
			$pyjs.track.lineno=1161;
			var $bases = new Array($m['OtherClass1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherSubclass1', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1164;
		$m['OtherClass2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'e6fea4c6154f8ca8e34a2f8632fb17af';
			$pyjs.track.lineno=1165;
			$cls_definition['init'] = false;
			$pyjs.track.lineno=1166;
			$method = $pyjs__bind_method2('__new__', function(cls) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

				$pyjs.track={module:'ClassTest', lineno:1166};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1166;
				$pyjs.track.lineno=1167;
				$pyjs.track.lineno=1167;
				var $pyjs__ret = $m['ObjectClass']['__new__'](cls);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null,['cls']]);
			$cls_definition['__new__'] = $method;
			$pyjs.track.lineno=1168;
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
					if (self.prototype.__md5__ !== 'e6fea4c6154f8ca8e34a2f8632fb17af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1168};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1168;
				$pyjs.track.lineno=1169;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('init', true) : $p['setattr'](self, 'init', true); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1164;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherClass2', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1171;
		$m['OtherClass3'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'aa70a44ff44dd8a7e8b0dc45d8891af2';
			$pyjs.track.lineno=1172;
			$method = $pyjs__bind_method2('__new__', function(cls, x, y) {
				if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				var val;
				$pyjs.track={module:'ClassTest', lineno:1172};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1172;
				$pyjs.track.lineno=1173;
				val = $p['object']['__new__'](cls);
				$pyjs.track.lineno=1174;
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
				val.__is_instance__ && typeof val.__setattr__ == 'function' ? val.__setattr__('x', $tupleassign2[0]) : $p['setattr'](val, 'x', $tupleassign2[0]); 
				val.__is_instance__ && typeof val.__setattr__ == 'function' ? val.__setattr__('y', $tupleassign2[1]) : $p['setattr'](val, 'y', $tupleassign2[1]); 
				$pyjs.track.lineno=1175;
				$pyjs.track.lineno=1175;
				var $pyjs__ret = val;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null,['cls'],['x'],['y']]);
			$cls_definition['__new__'] = $method;
			$pyjs.track.lineno=1171;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherClass3', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1177;
		$m['OtherClass4Mixin'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '82c495b0df58d025eab06dc1a80990fb';
			$pyjs.track.lineno=1178;
			$pyjs.track.lineno=1177;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherClass4Mixin', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1180;
		$m['OtherClass4'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '69b491ed1417a592427b62f73d646efb';
			$pyjs.track.lineno=1181;
			$method = $pyjs__bind_method2('__new__', function(cls) {
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
					if (typeof cls != 'undefined') {
						if (cls !== null && typeof cls['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = cls;
							cls = arguments[1];
						}
					} else {
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1181};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1181;
				$pyjs.track.lineno=1182;
				$pyjs.track.lineno=1182;
				var $pyjs__ret = $pyjs_kwargs_call($p['$$super']($m['OtherClass4'], cls), '__new__', args, kwargs, [{}, cls]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, ['args',['kwargs'],['cls']]);
			$cls_definition['__new__'] = $method;
			$pyjs.track.lineno=1180;
			var $bases = new Array($p['object'],$m['OtherClass4Mixin']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherClass4', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1184;
		$m['OtherSubclass4'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '378e578fb0feb9442afa34319f20686a';
			$pyjs.track.lineno=1185;
			$method = $pyjs__bind_method2('__init__', function() {
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
					if (self.prototype.__md5__ !== '378e578fb0feb9442afa34319f20686a') {
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

				$pyjs.track={module:'ClassTest', lineno:1185};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1185;
				$pyjs.track.lineno=1186;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('args', args) : $p['setattr'](self, 'args', args); 
				$pyjs.track.lineno=1187;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('kwargs', kwargs) : $p['setattr'](self, 'kwargs', kwargs); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1184;
			var $bases = new Array($m['OtherClass4']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('OtherSubclass4', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1189;
		$m['ExampleMultiSuperclassParent1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '1532a6a35d121dfc91a2629c5fa08a98';
			$pyjs.track.lineno=1190;
			$cls_definition['x'] = 'Initial X';
			$pyjs.track.lineno=1192;
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
					if (self.prototype.__md5__ !== '1532a6a35d121dfc91a2629c5fa08a98') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1192};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1192;
				$pyjs.track.lineno=1193;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1194;
			$method = $pyjs__bind_method2('get_value', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1532a6a35d121dfc91a2629c5fa08a98') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1194};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1194;
				$pyjs.track.lineno=1195;
				$pyjs.track.lineno=1195;
				var $pyjs__ret = $p['getattr'](self, 'x');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_value'] = $method;
			$pyjs.track.lineno=1189;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleMultiSuperclassParent1', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1197;
		$m['ExampleMultiSuperclassParent2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '076d1f2bcd028b60bc5ae76e7d62739b';
			$pyjs.track.lineno=1198;
			$cls_definition['y'] = 'Initial Y';
			$pyjs.track.lineno=1200;
			$method = $pyjs__bind_method2('__init__', function(y) {
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
					if (self.prototype.__md5__ !== '076d1f2bcd028b60bc5ae76e7d62739b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1200};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1200;
				$pyjs.track.lineno=1201;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('y', y) : $p['setattr'](self, 'y', y); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['y']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1202;
			$method = $pyjs__bind_method2('get_value', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '076d1f2bcd028b60bc5ae76e7d62739b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1202};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1202;
				$pyjs.track.lineno=1203;
				$pyjs.track.lineno=1203;
				var $pyjs__ret = $p['getattr'](self, 'y');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_value'] = $method;
			$pyjs.track.lineno=1197;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleMultiSuperclassParent2', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1205;
		$m['ExampleMultiSuperclassNoConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '509d1d4d307b063b10fda494adc86688';
			$pyjs.track.lineno=1206;
			$cls_definition['z'] = 'Initial Z';
			$pyjs.track.lineno=1205;
			var $bases = new Array($m['ExampleMultiSuperclassParent1'],$m['ExampleMultiSuperclassParent2']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleMultiSuperclassNoConstructor', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1208;
		$m['ExampleMultiSuperclassExplicitConstructor'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'd66b36468517dac7bc2c10aa3ffbe121';
			$pyjs.track.lineno=1209;
			$cls_definition['z'] = 'Initial Z';
			$pyjs.track.lineno=1211;
			$method = $pyjs__bind_method2('__init__', function(z) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					z = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd66b36468517dac7bc2c10aa3ffbe121') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1211};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1211;
				$pyjs.track.lineno=1212;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('z', z) : $p['setattr'](self, 'z', z); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['z']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1213;
			$method = $pyjs__bind_method2('get_value', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd66b36468517dac7bc2c10aa3ffbe121') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1213};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1213;
				$pyjs.track.lineno=1214;
				$pyjs.track.lineno=1214;
				var $pyjs__ret = $p['getattr'](self, 'z');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_value'] = $method;
			$pyjs.track.lineno=1215;
			$method = $pyjs__bind_method2('get_values', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd66b36468517dac7bc2c10aa3ffbe121') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1215};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1215;
				$pyjs.track.lineno=1216;
				$pyjs.track.lineno=1216;
				var $pyjs__ret = ':'['join']($p['list']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'z')]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_values'] = $method;
			$pyjs.track.lineno=1208;
			var $bases = new Array($m['ExampleMultiSuperclassParent1'],$m['ExampleMultiSuperclassParent2']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ExampleMultiSuperclassExplicitConstructor', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1218;
		$m['ClassArguments'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'f532d9a1f92bf80fa97c5a0a88e5e240';
			$pyjs.track.lineno=1219;
			$method = $pyjs__bind_method2('no_args', function() {
				if (this.__is_instance__ === true) {
					if ($pyjs.options.arg_count && arguments.length != -1) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length+1);
				} else {
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
				}

				$pyjs.track={module:'ClassTest', lineno:1219};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1219;
				$pyjs.track.lineno=1220;
				$pyjs.track.lineno=1220;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null]);
			$cls_definition['no_args'] = $method;
			$pyjs.track.lineno=1221;
			$method = $pyjs__bind_method2('self_arg', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f532d9a1f92bf80fa97c5a0a88e5e240') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1221};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1221;
				$pyjs.track.lineno=1222;
				$pyjs.track.lineno=1222;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['self_arg'] = $method;
			$pyjs.track.lineno=1223;
			$method = $pyjs__bind_method2('two_args', function(arg1) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					arg1 = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f532d9a1f92bf80fa97c5a0a88e5e240') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1223};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1223;
				$pyjs.track.lineno=1224;
				$pyjs.track.lineno=1224;
				var $pyjs__ret = arg1;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['arg1']]);
			$cls_definition['two_args'] = $method;
			$pyjs.track.lineno=1218;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ClassArguments', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1226;
		$m['MultiBase'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '491e0515e8fe914fb263120b05183d38';
			$pyjs.track.lineno=1227;
			$cls_definition['$$name'] = 'MultiBase';
			$pyjs.track.lineno=1228;
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
					if (self.prototype.__md5__ !== '491e0515e8fe914fb263120b05183d38') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1228};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1228;
				$pyjs.track.lineno=1229;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1231;
			$method = $pyjs__bind_method2('get_x', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '491e0515e8fe914fb263120b05183d38') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1231};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1231;
				$pyjs.track.lineno=1232;
				$pyjs.track.lineno=1232;
				var $pyjs__ret = $p['getattr'](self, 'x');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_x'] = $method;
			$pyjs.track.lineno=1234;
			$method = $pyjs__bind_method2('set_x', function(x) {
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
					if (self.prototype.__md5__ !== '491e0515e8fe914fb263120b05183d38') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1234};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1234;
				$pyjs.track.lineno=1235;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('x', x) : $p['setattr'](self, 'x', x); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['set_x'] = $method;
			$pyjs.track.lineno=1237;
			$method = $pyjs__bind_method2('$$prototype', function($$default, $$arguments, $$this) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					$$default = arguments[1];
					$$arguments = arguments[2];
					$$this = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '491e0515e8fe914fb263120b05183d38') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$default,$$this,$$arguments;
				$pyjs.track={module:'ClassTest', lineno:1237};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1237;
				$pyjs.track.lineno=1238;
				$pyjs.track.lineno=1238;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, '$$name'), $$default, $$arguments, $$this]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['$$default'],['$$arguments'],['$$this']]);
			$cls_definition['$$prototype'] = $method;
			$pyjs.track.lineno=1240;
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
					if (self.prototype.__md5__ !== '491e0515e8fe914fb263120b05183d38') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1240};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1240;
				$pyjs.track.lineno=1241;
				$pyjs.track.lineno=1241;
				var $pyjs__ret = 'MultiBase';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getName'] = $method;
			$pyjs.track.lineno=1226;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MultiBase', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1244;
		$m['MultiInherit1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'd9a6141b64196ef2c77462d653da292e';
			$pyjs.track.lineno=1245;
			$cls_definition['$$name'] = 'MultiInherit1';
			$pyjs.track.lineno=1246;
			$method = $pyjs__bind_method2('__init__', function(x, y) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd9a6141b64196ef2c77462d653da292e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1246};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1246;
				$pyjs.track.lineno=1247;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('y', y) : $p['setattr'](self, 'y', y); 
				$pyjs.track.lineno=1248;
				$m['MultiBase']['__init__'](self, x);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1250;
			$method = $pyjs__bind_method2('get_y', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd9a6141b64196ef2c77462d653da292e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1250};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1250;
				$pyjs.track.lineno=1251;
				$pyjs.track.lineno=1251;
				var $pyjs__ret = $p['getattr'](self, 'y');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_y'] = $method;
			$pyjs.track.lineno=1253;
			$method = $pyjs__bind_method2('$$call', function($$default, $$arguments, $$this) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					$$default = arguments[1];
					$$arguments = arguments[2];
					$$this = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd9a6141b64196ef2c77462d653da292e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$default,$$this,$$arguments;
				$pyjs.track={module:'ClassTest', lineno:1253};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1253;
				$pyjs.track.lineno=1254;
				$pyjs.track.lineno=1254;
				var $pyjs__ret = self['$$prototype']($$default, $$arguments, $$this);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['$$default'],['$$arguments'],['$$this']]);
			$cls_definition['$$call'] = $method;
			$pyjs.track.lineno=1244;
			var $bases = new Array($m['MultiBase']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MultiInherit1', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1257;
		$m['MultiInherit2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '2275ae424411c252d2906363237c856b';
			$pyjs.track.lineno=1258;
			$cls_definition['$$name'] = 'MultiInherit2';
			$pyjs.track.lineno=1259;
			$method = $pyjs__bind_method2('__init__', function(x, z) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					z = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2275ae424411c252d2906363237c856b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1259};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1259;
				$pyjs.track.lineno=1260;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('z', z) : $p['setattr'](self, 'z', z); 
				$pyjs.track.lineno=1261;
				$m['MultiBase']['__init__'](self, x);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x'],['z']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1263;
			$method = $pyjs__bind_method2('get_z', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2275ae424411c252d2906363237c856b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1263};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1263;
				$pyjs.track.lineno=1264;
				$pyjs.track.lineno=1264;
				var $pyjs__ret = $p['getattr'](self, 'z');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_z'] = $method;
			$pyjs.track.lineno=1266;
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
					if (self.prototype.__md5__ !== '2275ae424411c252d2906363237c856b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1266};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1266;
				$pyjs.track.lineno=1267;
				$pyjs.track.lineno=1267;
				var $pyjs__ret = 'MultiInherit2';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs.track.lineno=1269;
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
					if (self.prototype.__md5__ !== '2275ae424411c252d2906363237c856b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1269};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1269;
				$pyjs.track.lineno=1270;
				$pyjs.track.lineno=1270;
				var $pyjs__ret = 'MultiInherit2';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getName'] = $method;
			$pyjs.track.lineno=1257;
			var $bases = new Array($m['MultiBase']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('MultiInherit2', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1273;
		$m['DoubleInherit'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'a6e76ad8d3cc89dd9500aa13642bbe1b';
			$pyjs.track.lineno=1274;
			$cls_definition['$$name'] = 'DoubleInherit';
			$pyjs.track.lineno=1275;
			$method = $pyjs__bind_method2('__init__', function(x, y, z) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					z = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a6e76ad8d3cc89dd9500aa13642bbe1b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1275};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1275;
				$pyjs.track.lineno=1276;
				$m['MultiInherit1']['__init__'](self, x, y);
				$pyjs.track.lineno=1277;
				$m['MultiInherit2']['__init__'](self, x, z);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['z']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1273;
			var $bases = new Array($m['MultiInherit1'],$m['MultiInherit2']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DoubleInherit', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1280;
		$m['DoubleInheritReversed'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'c989db3dbcc072e4cc057c3ac68dc5af';
			$pyjs.track.lineno=1281;
			$cls_definition['$$name'] = 'DoubleInheritReversed';
			$pyjs.track.lineno=1282;
			$method = $pyjs__bind_method2('__init__', function(x, y, z) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					z = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c989db3dbcc072e4cc057c3ac68dc5af') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1282};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1282;
				$pyjs.track.lineno=1283;
				$m['MultiInherit1']['__init__'](self, x, y);
				$pyjs.track.lineno=1284;
				$m['MultiInherit2']['__init__'](self, x, z);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['z']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1280;
			var $bases = new Array($m['MultiInherit2'],$m['MultiInherit1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DoubleInheritReversed', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1287;
		$m['RecurseMe'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '9fa5b9e32c8d5911869cc8a5ba88ca46';
			$pyjs.track.lineno=1288;
			$cls_definition['chain'] = $p['list']([]);
			$pyjs.track.lineno=1289;
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
					if (self.prototype.__md5__ !== '9fa5b9e32c8d5911869cc8a5ba88ca46') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1289};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1289;
				$pyjs.track.lineno=1290;
				self['chain']['append']($constant_int_0);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1287;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RecurseMe', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1292;
		$m['RecurseMe'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '5e07b54c5ec7350a029feff2e2209f92';
			$pyjs.track.lineno=1293;
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
					if (self.prototype.__md5__ !== '5e07b54c5ec7350a029feff2e2209f92') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1293};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1293;
				$pyjs.track.lineno=1296;
				$p['$$super']($p['getattr'](self, '__class__'), self)['__init__']();
				$pyjs.track.lineno=1297;
				self['chain']['append']($constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1292;
			var $bases = new Array($m['RecurseMe']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RecurseMe', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1299;
		$m['Factory'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '9c40ad176f6bdddad7412397628b13d1';
			$pyjs.track.lineno=1300;
			$cls_definition['_classes'] = $p['dict']([]);
			$pyjs.track.lineno=1301;
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
					if (self.prototype.__md5__ !== '9c40ad176f6bdddad7412397628b13d1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1301};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1301;
				$pyjs.track.lineno=1302;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1303;
			$method = $pyjs__bind_method2('register', function(className, classe) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					className = arguments[1];
					classe = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9c40ad176f6bdddad7412397628b13d1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1303};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1303;
				$pyjs.track.lineno=1304;
				$p['getattr']($m['Factory'], '_classes').__setitem__(className, classe);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['className'],['classe']]);
			$cls_definition['register'] = $method;
			$pyjs.track.lineno=1306;
			$method = $pyjs__bind_method2('getObjectCompilerBug', function(className) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kargs != 'undefined') args.__array.push(kargs);
						var kargs = arguments[arguments.length+1];
					} else {
						delete kargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					className = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kargs != 'undefined') args.__array.push(kargs);
						kargs = arguments[arguments.length+1];
					} else {
						delete kargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9c40ad176f6bdddad7412397628b13d1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kargs == 'undefined') {
					kargs = $p['__empty_dict']();
					if (typeof className != 'undefined') {
						if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
							kargs = className;
							className = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $117,$118;
				$pyjs.track={module:'ClassTest', lineno:1306};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1306;
				$pyjs.track.lineno=1307;
				$pyjs.track.lineno=1307;
				var $pyjs__ret = $pyjs_kwargs_call(null, (typeof ($117=$p['getattr']($m['Factory'], '_classes')).__array != 'undefined'?
					((typeof $117.__array[$118=className]) != 'undefined'?$117.__array[$118]:
						$117.__getitem__($118)):
						$117.__getitem__(className)), args, kargs, [{}]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, ['args',['kargs'],['self'],['className']]);
			$cls_definition['getObjectCompilerBug'] = $method;
			$pyjs.track.lineno=1309;
			$method = $pyjs__bind_method2('getObject', function(className) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kargs != 'undefined') args.__array.push(kargs);
						var kargs = arguments[arguments.length+1];
					} else {
						delete kargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					className = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kargs != 'undefined') args.__array.push(kargs);
						kargs = arguments[arguments.length+1];
					} else {
						delete kargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9c40ad176f6bdddad7412397628b13d1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kargs == 'undefined') {
					kargs = $p['__empty_dict']();
					if (typeof className != 'undefined') {
						if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
							kargs = className;
							className = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var f,$119,$120;
				$pyjs.track={module:'ClassTest', lineno:1309};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1309;
				$pyjs.track.lineno=1310;
				f = (typeof ($119=$p['getattr']($m['Factory'], '_classes')).__array != 'undefined'?
					((typeof $119.__array[$120=className]) != 'undefined'?$119.__array[$120]:
						$119.__getitem__($120)):
						$119.__getitem__(className));
				$pyjs.track.lineno=1311;
				$pyjs.track.lineno=1311;
				var $pyjs__ret = $pyjs_kwargs_call(null, f, args, kargs, [{}]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, ['args',['kargs'],['self'],['className']]);
			$cls_definition['getObject'] = $method;
			$pyjs.track.lineno=1299;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Factory', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1313;
		$pyjs.track.lineno=1314;
		$m['gclasses'] = $p['dict']([]);
		$pyjs.track.lineno=1316;
		$m['gregister'] = function(className, classe) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'ClassTest',lineno:1316};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ClassTest';
			$pyjs.track.lineno=1316;
			$pyjs.track.lineno=1317;
			$m['gclasses'].__setitem__(className, classe);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['gregister'].__name__ = 'gregister';

		$m['gregister'].__bind_type__ = 0;
		$m['gregister'].__args__ = [null,null,['className'],['classe']];
		$pyjs.track.lineno=1318;
		$m['ggetObject'] = function(className) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kargs != 'undefined') args.__array.push(kargs);
				kargs = arguments[arguments.length+1];
			} else {
				delete kargs['$pyjs_is_kwarg'];
			}
			if (typeof kargs == 'undefined') {
				kargs = $p['__empty_dict']();
				if (typeof className != 'undefined') {
					if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
						kargs = className;
						className = arguments[1];
					}
				} else {
				}
			}
			var classe,$122,$121;
			$pyjs.track={module:'ClassTest',lineno:1318};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ClassTest';
			$pyjs.track.lineno=1318;
			$pyjs.track.lineno=1319;
			classe = (typeof ($121=$m['gclasses']).__array != 'undefined'?
				((typeof $121.__array[$122=className]) != 'undefined'?$121.__array[$122]:
					$121.__getitem__($122)):
					$121.__getitem__(className));
			$pyjs.track.lineno=1320;
			$pyjs.track.lineno=1320;
			var $pyjs__ret = $pyjs_kwargs_call(null, classe, args, kargs, [{}]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['ggetObject'].__name__ = 'ggetObject';

		$m['ggetObject'].__bind_type__ = 0;
		$m['ggetObject'].__args__ = ['args',['kargs'],['className']];
		$pyjs.track.lineno=1322;
		$m['revealAccessLog'] = null;
		$pyjs.track.lineno=1323;
		$m['RevealAccess'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '13c3430b9d7b67210231148ffc614fe7';
			$pyjs.track.lineno=1324;
			$method = $pyjs__bind_method2('__init__', function(initval, name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					initval = arguments[1];
					name = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '13c3430b9d7b67210231148ffc614fe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof initval == 'undefined') initval=arguments.callee.__args__[3][1];
				if (typeof name == 'undefined') name=arguments.callee.__args__[4][1];

				$pyjs.track={module:'ClassTest', lineno:1324};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1324;
				$pyjs.track.lineno=1325;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('val', initval) : $p['setattr'](self, 'val', initval); 
				$pyjs.track.lineno=1326;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', name) : $p['setattr'](self, '$$name', name); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['initval', null],['name', 'var']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1327;
			$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					objtype = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '13c3430b9d7b67210231148ffc614fe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof objtype == 'undefined') objtype=arguments.callee.__args__[4][1];

				$pyjs.track={module:'ClassTest', lineno:1327};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1327;
				$pyjs.track.lineno=1328;
				$pyjs.track.lineno=1329;
				$m['revealAccessLog'] = $p['sprintf']('Retrieving %s', $p['getattr'](self, '$$name'));
				$pyjs.track.lineno=1330;
				$pyjs.track.lineno=1330;
				var $pyjs__ret = $p['getattr'](self, 'val');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
			$cls_definition['__get__'] = $method;
			$pyjs.track.lineno=1331;
			$method = $pyjs__bind_method2('__set__', function(obj, val) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					val = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '13c3430b9d7b67210231148ffc614fe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1331};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1331;
				$pyjs.track.lineno=1332;
				$pyjs.track.lineno=1333;
				$m['revealAccessLog'] = $p['sprintf']('Updating %s: %s', $p['tuple']([$p['getattr'](self, '$$name'), val]));
				$pyjs.track.lineno=1334;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('val', val) : $p['setattr'](self, 'val', val); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['obj'],['val']]);
			$cls_definition['__set__'] = $method;
			$pyjs.track.lineno=1335;
			$method = $pyjs__bind_method2('__delete__', function(obj) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '13c3430b9d7b67210231148ffc614fe7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1335};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1335;
				$pyjs.track.lineno=1336;
				$pyjs.track.lineno=1337;
				$m['revealAccessLog'] = $p['sprintf']('Deleting %s', $p['getattr'](self, '$$name'));
				$pyjs.track.lineno=1338;
				$p['delattr'](self, 'val');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['obj']]);
			$cls_definition['__delete__'] = $method;
			$pyjs.track.lineno=1323;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RevealAccess', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1340;
		$m['Decorated'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '9f1161eb350442b1324acfe375e5f4e7';
			$pyjs.track.lineno=1341;
			$cls_definition['x'] = $m['RevealAccess']($constant_int_10, "var 'x'");
			$pyjs.track.lineno=1340;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Decorated', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1343;
		$m['OldStylePropertyDecorating'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '6f7703ed74272201026603047b73aff9';
			$pyjs.track.lineno=1344;
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
					if (self.prototype.__md5__ !== '6f7703ed74272201026603047b73aff9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1344};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1344;
				$pyjs.track.lineno=1345;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', null) : $p['setattr'](self, '_x', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1347;
			$method = $pyjs__bind_method2('getx', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6f7703ed74272201026603047b73aff9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1347};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1347;
				$pyjs.track.lineno=1348;
				$pyjs.track.lineno=1348;
				var $pyjs__ret = $p['getattr'](self, '_x');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getx'] = $method;
			$pyjs.track.lineno=1349;
			$method = $pyjs__bind_method2('setx', function(value) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6f7703ed74272201026603047b73aff9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1349};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1349;
				$pyjs.track.lineno=1350;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', value) : $p['setattr'](self, '_x', value); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['setx'] = $method;
			$pyjs.track.lineno=1351;
			$method = $pyjs__bind_method2('delx', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '6f7703ed74272201026603047b73aff9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1351};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1351;
				$pyjs.track.lineno=1352;
				$p['delattr'](self, '_x');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['delx'] = $method;
			$pyjs.track.lineno=1353;
			$cls_definition['x'] = $p['property']($p['staticmethod']($cls_definition['getx']), $p['staticmethod']($cls_definition['setx']), $p['staticmethod']($cls_definition['delx']), "I'm the 'x' property.");
			$pyjs.track.lineno=1343;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('OldStylePropertyDecorating', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1356;
		$m['Property'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '1755d89339653fd52d874ec9efb8be0b';
			$pyjs.track.lineno=1357;
			$method = $pyjs__bind_method2('__init__', function(fget, fset, fdel, doc) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					fget = arguments[1];
					fset = arguments[2];
					fdel = arguments[3];
					doc = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1755d89339653fd52d874ec9efb8be0b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof fget == 'undefined') fget=arguments.callee.__args__[3][1];
				if (typeof fset == 'undefined') fset=arguments.callee.__args__[4][1];
				if (typeof fdel == 'undefined') fdel=arguments.callee.__args__[5][1];
				if (typeof doc == 'undefined') doc=arguments.callee.__args__[6][1];
				var $or1,$or2,$bool14,$bool15,$bool16,$bool17;
				$pyjs.track={module:'ClassTest', lineno:1357};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1357;
				$pyjs.track.lineno=1358;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fget', fget) : $p['setattr'](self, 'fget', fget); 
				$pyjs.track.lineno=1359;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fset', fset) : $p['setattr'](self, 'fset', fset); 
				$pyjs.track.lineno=1360;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fdel', fdel) : $p['setattr'](self, 'fdel', fdel); 
				$pyjs.track.lineno=1361;
				if ((($bool17=((($bool15=$or1=!(($bool14=$p['op_is'](doc, null)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
						 true ) )?$or1:!(($bool16=$p['hasattr'](fget, '__doc__')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16.__nonzero__=='function'?
							$bool16.__nonzero__() :
							(typeof $bool16.__len__=='function'?
								($bool16.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					$pyjs.track.lineno=1362;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__doc__', doc) : $p['setattr'](self, '__doc__', doc); 
				}
				else {
					$pyjs.track.lineno=1364;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__doc__', $p['getattr'](fget, '__doc__')) : $p['setattr'](self, '__doc__', $p['getattr'](fget, '__doc__')); 
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1366;
			$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					objtype = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1755d89339653fd52d874ec9efb8be0b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof objtype == 'undefined') objtype=arguments.callee.__args__[4][1];
				var $bool18,$bool19;
				$pyjs.track={module:'ClassTest', lineno:1366};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1366;
				$pyjs.track.lineno=1367;
				if ((($bool18=$p['op_is'](obj, null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					$pyjs.track.lineno=1368;
					$pyjs.track.lineno=1368;
					var $pyjs__ret = self;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=1369;
				if ((($bool19=$p['op_is']($p['getattr'](self, 'fget'), null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					$pyjs.track.lineno=1370;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['AttributeError'];
					var $pyjs__raise_expr2 = 'unreadable attribute';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=1371;
				$pyjs.track.lineno=1371;
				var $pyjs__ret = self['fget'](obj);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
			$cls_definition['__get__'] = $method;
			$pyjs.track.lineno=1373;
			$method = $pyjs__bind_method2('__set__', function(obj, value) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					value = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1755d89339653fd52d874ec9efb8be0b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool20;
				$pyjs.track={module:'ClassTest', lineno:1373};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1373;
				$pyjs.track.lineno=1374;
				if ((($bool20=$p['op_is']($p['getattr'](self, 'fset'), null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					$pyjs.track.lineno=1375;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['AttributeError'];
					var $pyjs__raise_expr2 = "can't set attribute";
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=1376;
				self['fset'](obj, value);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['obj'],['value']]);
			$cls_definition['__set__'] = $method;
			$pyjs.track.lineno=1378;
			$method = $pyjs__bind_method2('__delete__', function(obj) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					obj = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1755d89339653fd52d874ec9efb8be0b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool21;
				$pyjs.track={module:'ClassTest', lineno:1378};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1378;
				$pyjs.track.lineno=1379;
				if ((($bool21=$p['op_is']($p['getattr'](self, 'fdel'), null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					$pyjs.track.lineno=1380;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['AttributeError'];
					var $pyjs__raise_expr2 = "can't delete attribute";
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=1381;
				self['fdel'](obj);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['obj']]);
			$cls_definition['__delete__'] = $method;
			$pyjs.track.lineno=1383;
			$method = $pyjs__bind_method2('setter', function(fset) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fset = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1755d89339653fd52d874ec9efb8be0b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1383};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1383;
				$pyjs.track.lineno=1384;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fset', fset) : $p['setattr'](self, 'fset', fset); 
				$pyjs.track.lineno=1385;
				$pyjs.track.lineno=1385;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['fset']]);
			$cls_definition['setter'] = $method;
			$pyjs.track.lineno=1387;
			$method = $pyjs__bind_method2('deleter', function(fdel) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fdel = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1755d89339653fd52d874ec9efb8be0b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1387};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1387;
				$pyjs.track.lineno=1388;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fdel', fdel) : $p['setattr'](self, 'fdel', fdel); 
				$pyjs.track.lineno=1389;
				$pyjs.track.lineno=1389;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['fdel']]);
			$cls_definition['deleter'] = $method;
			$pyjs.track.lineno=1391;
			$method = $pyjs__bind_method2('property_setter', function(fset) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fset = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1755d89339653fd52d874ec9efb8be0b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1391};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1391;
				$pyjs.track.lineno=1392;
				self['__setattr__']('fset', fset);
				$pyjs.track.lineno=1393;
				$pyjs.track.lineno=1393;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['fset']]);
			$cls_definition['property_setter'] = $method;
			$pyjs.track.lineno=1394;
			$method = $pyjs__bind_method2('property_deleter', function(fdel) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fdel = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1755d89339653fd52d874ec9efb8be0b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1394};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1394;
				$pyjs.track.lineno=1395;
				self['__setattr__']('fdel', fdel);
				$pyjs.track.lineno=1396;
				$pyjs.track.lineno=1396;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['fdel']]);
			$cls_definition['property_deleter'] = $method;
			$pyjs.track.lineno=1356;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Property', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1401;
		$m['property'] = $p['property'];
		$pyjs.track.lineno=1402;
		if ((($bool23=!(($bool22=$p['hasattr']($m['property'], 'setter')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
			$pyjs.track.lineno=1404;
			$m['property'] = $m['Property'];
		}
		$pyjs.track.lineno=1406;
		$m['NewStylePropertyDecorating'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '5ecaee72075f6a4c7067f9c6bef4d255';
			$pyjs.track.lineno=1407;
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
					if (self.prototype.__md5__ !== '5ecaee72075f6a4c7067f9c6bef4d255') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1407};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1407;
				$pyjs.track.lineno=1408;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', null) : $p['setattr'](self, '_x', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1410;
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
					if (self.prototype.__md5__ !== '5ecaee72075f6a4c7067f9c6bef4d255') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1410};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1410;
				$pyjs.track.lineno=1412;
				$pyjs.track.lineno=1412;
				var $pyjs__ret = $p['getattr'](self, '_x');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['x'] = $m['property']($p['staticmethod']($method));
			$pyjs.track.lineno=1414;
			$method = $pyjs__bind_method2('x', function(value) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5ecaee72075f6a4c7067f9c6bef4d255') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1414};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1414;
				$pyjs.track.lineno=1415;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', value) : $p['setattr'](self, '_x', value); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['x'] = $cls_definition['x']['setter']($p['staticmethod']($method));
			$pyjs.track.lineno=1417;
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
					if (self.prototype.__md5__ !== '5ecaee72075f6a4c7067f9c6bef4d255') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1417};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1417;
				$pyjs.track.lineno=1418;
				$p['delattr'](self, '_x');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['x'] = $cls_definition['x']['deleter']($p['staticmethod']($method));
			$pyjs.track.lineno=1406;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('NewStylePropertyDecorating', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1420;
		$m['SuperArg1'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = 'bcce4a30d3373cfd8990cdb77f5286db';
			$pyjs.track.lineno=1421;
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
					if (self.prototype.__md5__ !== 'bcce4a30d3373cfd8990cdb77f5286db') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

				$pyjs.track={module:'ClassTest', lineno:1421};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1421;
				$pyjs.track.lineno=1422;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('a1_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])) : $p['setattr'](self, 'a1_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1420;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SuperArg1', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1424;
		$m['SuperArg2'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '09377ae4f66bc1e3e07d5dfe670e70f0';
			$pyjs.track.lineno=1425;
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
					if (self.prototype.__md5__ !== '09377ae4f66bc1e3e07d5dfe670e70f0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

				$pyjs.track={module:'ClassTest', lineno:1425};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1425;
				$pyjs.track.lineno=1426;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('a2_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])) : $p['setattr'](self, 'a2_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])); 
				$pyjs.track.lineno=1427;
				$pyjs_kwargs_call($p['$$super']($m['SuperArg2'], self), '__init__', null, null, [{a:a, b:b, c:c}]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1424;
			var $bases = new Array($m['SuperArg1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SuperArg2', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1429;
		$m['SuperArg3'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '59c217a0654c32ba1fa28a274eec9ef9';
			$pyjs.track.lineno=1430;
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
					if (self.prototype.__md5__ !== '59c217a0654c32ba1fa28a274eec9ef9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				if (typeof b == 'undefined') b=arguments.callee.__args__[4][1];
				if (typeof c == 'undefined') c=arguments.callee.__args__[5][1];

				$pyjs.track={module:'ClassTest', lineno:1430};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1430;
				$pyjs.track.lineno=1431;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('a3_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])) : $p['setattr'](self, 'a3_args', $p['list']([$p['tuple'](['a', a]), $p['tuple'](['b', b]), $p['tuple'](['c', c])])); 
				$pyjs.track.lineno=1432;
				$p['$$super']($m['SuperArg3'], self)['__init__'](a, b, c);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a', null],['b', null],['c', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1429;
			var $bases = new Array($m['SuperArg1']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SuperArg3', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1438;
		$m['mdeco1'] = function(f) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var fn1;
			$pyjs.track={module:'ClassTest',lineno:1438};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ClassTest';
			$pyjs.track.lineno=1438;
			$pyjs.track.lineno=1439;
			fn1 = function(self, x) {
				if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				var $add21,$add22,$add24,$bool25,$bool24,$add23;
				$pyjs.track={module:'ClassTest',lineno:1439};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1439;
				$pyjs.track.lineno=1440;
				if ((($bool25=!(($bool24=$p['isinstance'](self, (typeof DecoratedMethods == "undefined"?$m.DecoratedMethods:DecoratedMethods))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					$pyjs.track.lineno=1441;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('fn1 - self is not instance of DecoratedMethods'));
				}
				$pyjs.track.lineno=1442;
				$pyjs.track.lineno=1442;
				var $pyjs__ret = (typeof ($add23=(typeof ($add21='1')==typeof ($add22=f(self, x)) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22)))==typeof ($add24='2') && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			fn1.__name__ = 'fn1';

			fn1.__bind_type__ = 0;
			fn1.__args__ = [null,null,['self'],['x']];
			$pyjs.track.lineno=1443;
			$pyjs.track.lineno=1443;
			var $pyjs__ret = fn1;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['mdeco1'].__name__ = 'mdeco1';

		$m['mdeco1'].__bind_type__ = 0;
		$m['mdeco1'].__args__ = [null,null,['f']];
		$pyjs.track.lineno=1445;
		$m['mdeco2'] = function(f) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var fn2;
			$pyjs.track={module:'ClassTest',lineno:1445};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ClassTest';
			$pyjs.track.lineno=1445;
			$pyjs.track.lineno=1446;
			fn2 = function(self, x) {
				if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				var $add28,$add25,$add27,$add26,$bool27,$bool26;
				$pyjs.track={module:'ClassTest',lineno:1446};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1446;
				$pyjs.track.lineno=1447;
				if ((($bool27=!(($bool26=$p['isinstance'](self, (typeof DecoratedMethods == "undefined"?$m.DecoratedMethods:DecoratedMethods))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					$pyjs.track.lineno=1448;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('fn2 - self is not instance of DecoratedMethods'));
				}
				$pyjs.track.lineno=1449;
				$pyjs.track.lineno=1449;
				var $pyjs__ret = (typeof ($add27=(typeof ($add25='3')==typeof ($add26=f(self, x)) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)))==typeof ($add28='4') && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			fn2.__name__ = 'fn2';

			fn2.__bind_type__ = 0;
			fn2.__args__ = [null,null,['self'],['x']];
			$pyjs.track.lineno=1450;
			$pyjs.track.lineno=1450;
			var $pyjs__ret = fn2;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['mdeco2'].__name__ = 'mdeco2';

		$m['mdeco2'].__bind_type__ = 0;
		$m['mdeco2'].__args__ = [null,null,['f']];
		$pyjs.track.lineno=1452;
		$m['mdeco_with_wrong_args'] = function(f) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var fn_wwa;
			$pyjs.track={module:'ClassTest',lineno:1452};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ClassTest';
			$pyjs.track.lineno=1452;
			$pyjs.track.lineno=1453;
			fn_wwa = function(x) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $add29,$add30,$add31,$add32;
				$pyjs.track={module:'ClassTest',lineno:1453};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1453;
				$pyjs.track.lineno=1454;
				$pyjs.track.lineno=1454;
				var $pyjs__ret = (typeof ($add31=(typeof ($add29='5')==typeof ($add30=f(x)) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)))==typeof ($add32='6') && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			fn_wwa.__name__ = 'fn_wwa';

			fn_wwa.__bind_type__ = 0;
			fn_wwa.__args__ = [null,null,['x']];
			$pyjs.track.lineno=1455;
			$pyjs.track.lineno=1455;
			var $pyjs__ret = fn_wwa;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['mdeco_with_wrong_args'].__name__ = 'mdeco_with_wrong_args';

		$m['mdeco_with_wrong_args'].__bind_type__ = 0;
		$m['mdeco_with_wrong_args'].__args__ = [null,null,['f']];
		$pyjs.track.lineno=1457;
		$m['mdeco_static'] = function(f) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var fns;
			$pyjs.track={module:'ClassTest',lineno:1457};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ClassTest';
			$pyjs.track.lineno=1457;
			$pyjs.track.lineno=1458;
			fns = function(x) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $add35,$add36,$add34,$add33;
				$pyjs.track={module:'ClassTest',lineno:1458};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1458;
				$pyjs.track.lineno=1459;
				$pyjs.track.lineno=1459;
				var $pyjs__ret = (typeof ($add35=(typeof ($add33='5')==typeof ($add34=f(x)) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34)))==typeof ($add36='6') && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			fns.__name__ = 'fns';

			fns.__bind_type__ = 0;
			fns.__args__ = [null,null,['x']];
			$pyjs.track.lineno=1460;
			$pyjs.track.lineno=1460;
			var $pyjs__ret = fns;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['mdeco_static'].__name__ = 'mdeco_static';

		$m['mdeco_static'].__bind_type__ = 0;
		$m['mdeco_static'].__args__ = [null,null,['f']];
		$pyjs.track.lineno=1462;
		$m['mdeco_class'] = function(f) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var fnc;
			$pyjs.track={module:'ClassTest',lineno:1462};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='ClassTest';
			$pyjs.track.lineno=1462;
			$pyjs.track.lineno=1463;
			fnc = function(cls, x) {
				if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				var $add38,$add39,$add37,$add40,$bool28;
				$pyjs.track={module:'ClassTest',lineno:1463};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1463;
				$pyjs.track.lineno=1464;
				if ((($bool28=!$p['op_is'](cls, (typeof DecoratedMethods == "undefined"?$m.DecoratedMethods:DecoratedMethods))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					$pyjs.track.lineno=1465;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('fnc - cls is not DecoratedMethods'));
				}
				$pyjs.track.lineno=1466;
				$pyjs.track.lineno=1466;
				var $pyjs__ret = (typeof ($add39=(typeof ($add37='7')==typeof ($add38=f(cls, x)) && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38)))==typeof ($add40='8') && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			fnc.__name__ = 'fnc';

			fnc.__bind_type__ = 0;
			fnc.__args__ = [null,null,['cls'],['x']];
			$pyjs.track.lineno=1467;
			$pyjs.track.lineno=1467;
			var $pyjs__ret = fnc;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['mdeco_class'].__name__ = 'mdeco_class';

		$m['mdeco_class'].__bind_type__ = 0;
		$m['mdeco_class'].__args__ = [null,null,['f']];
		$pyjs.track.lineno=1469;
		$m['DecoratedMethods'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ClassTest';
			$cls_definition.__md5__ = '8630eaa7d9c7f9258e9aaebe920cbd00';
			$pyjs.track.lineno=1471;
			$method = $pyjs__bind_method2('mtd1', function(x) {
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
					if (self.prototype.__md5__ !== '8630eaa7d9c7f9258e9aaebe920cbd00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1471};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1471;
				$pyjs.track.lineno=1472;
				$pyjs.track.lineno=1472;
				var $pyjs__ret = x;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['mtd1'] = $pyjs__decorated_method('mtd1', $m['mdeco1']($p['staticmethod']($method)), 1);
			$pyjs.track.lineno=1476;
			$method = $pyjs__bind_method2('mtd2', function(x) {
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
					if (self.prototype.__md5__ !== '8630eaa7d9c7f9258e9aaebe920cbd00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1476};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1476;
				$pyjs.track.lineno=1477;
				$pyjs.track.lineno=1477;
				var $pyjs__ret = x;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['mtd2'] = $pyjs__decorated_method('mtd2', $pyjs__decorated_method('mtd2', $m['mdeco2']($m['mdeco1']($p['staticmethod']($method))), 1), 1);
			$pyjs.track.lineno=1480;
			$method = $pyjs__bind_method2('mtd3', function(x) {
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
					if (self.prototype.__md5__ !== '8630eaa7d9c7f9258e9aaebe920cbd00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1480};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1480;
				$pyjs.track.lineno=1481;
				$pyjs.track.lineno=1481;
				var $pyjs__ret = x;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['mtd3'] = $pyjs__decorated_method('mtd3', $m['imports']['decors']['othermoduledeco1']($p['staticmethod']($method)), 1);
			$pyjs.track.lineno=1485;
			$method = $pyjs__bind_method2('mtd4', function(x) {
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
					if (self.prototype.__md5__ !== '8630eaa7d9c7f9258e9aaebe920cbd00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1485};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1485;
				$pyjs.track.lineno=1486;
				$pyjs.track.lineno=1486;
				var $pyjs__ret = x;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['mtd4'] = $pyjs__decorated_method('mtd4', $pyjs__decorated_method('mtd4', $m['imports']['decors']['othermoduledeco1']($m['mdeco2']($p['staticmethod']($method))), 1), 1);
			$pyjs.track.lineno=1489;
			$method = $pyjs__bind_method2('mtd5', function(x) {
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
					if (self.prototype.__md5__ !== '8630eaa7d9c7f9258e9aaebe920cbd00') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'ClassTest', lineno:1489};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1489;
				$pyjs.track.lineno=1490;
				$pyjs.track.lineno=1490;
				var $pyjs__ret = x;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['mtd5'] = $pyjs__decorated_method('mtd5', $m['mdeco_with_wrong_args']($p['staticmethod']($method)), 1);
			$pyjs.track.lineno=1494;
			$method = $pyjs__bind_method2('mtd_static', function(x) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

				$pyjs.track={module:'ClassTest', lineno:1494};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1494;
				$pyjs.track.lineno=1495;
				$pyjs.track.lineno=1495;
				var $pyjs__ret = x;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null,['x']]);
			$cls_definition['mtd_static'] = $p['staticmethod']($m['mdeco_static']($p['staticmethod']($method)));
			$pyjs.track.lineno=1500;
			$method = $pyjs__bind_method2('mtd_static2', function(x) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

				$pyjs.track={module:'ClassTest', lineno:1500};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1500;
				$pyjs.track.lineno=1501;
				$pyjs.track.lineno=1501;
				var $pyjs__ret = x;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null,['x']]);
			$cls_definition['mtd_static2'] = $p['staticmethod']($m['mdeco_static']($m['mdeco_static']($p['staticmethod']($method))));
			$pyjs.track.lineno=1505;
			$method = $pyjs__bind_method2('mtd_class', function(x) {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 1, arguments.length);
    var cls = this.prototype;

				$pyjs.track={module:'ClassTest', lineno:1505};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1505;
				$pyjs.track.lineno=1506;
				$pyjs.track.lineno=1506;
				var $pyjs__ret = x;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['cls'],['x']]);
			$cls_definition['mtd_class'] = $m['mdeco_class']($p['staticmethod']($method));
			$pyjs.track.lineno=1511;
			$method = $pyjs__bind_method2('mtd_class2', function(x) {
    if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_class_expected(arguments.callee.__name__, arguments.callee.__class__.__name__);
    if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 1, arguments.length);
    var cls = this.prototype;

				$pyjs.track={module:'ClassTest', lineno:1511};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ClassTest';
				$pyjs.track.lineno=1511;
				$pyjs.track.lineno=1512;
				$pyjs.track.lineno=1512;
				var $pyjs__ret = x;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 2, [null,null,['cls'],['x']]);
			$cls_definition['mtd_class2'] = $m['mdeco_class']($m['mdeco_class']($p['staticmethod']($method)));
			$pyjs.track.lineno=1469;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DecoratedMethods', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ClassTest */


/* end module: ClassTest */


/*
PYJS_DEPS: ['sys', 'UnitTest.UnitTest', 'UnitTest', 'UnitTest.IN_BROWSER', 'imports.circ1', 'imports', 'imports.exec_order', 'imports.imports', 'I18N', 'imports.classes.WithAttribute', 'imports.classes', 'imports.decors', 'imports.child', 'imports.enum.super', 'imports.enum', 'imports.enumerate', 'imports.enumerate.dict']
*/
