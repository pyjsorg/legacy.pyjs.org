/* start module: NoInlineCodeTest */
$pyjs.loaded_modules['NoInlineCodeTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['NoInlineCodeTest'].__was_initialized__) return $pyjs.loaded_modules['NoInlineCodeTest'];
	var $m = $pyjs.loaded_modules["NoInlineCodeTest"];
	$m.__repr__ = function() { return "<module: NoInlineCodeTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'NoInlineCodeTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'NoInlineCodeTest.py, line 1:\n    # Tests for the implementatuion of --no-inline-code';
		$m.__track_lines__[3] = 'NoInlineCodeTest.py, line 3:\n    import sys';
		$m.__track_lines__[4] = 'NoInlineCodeTest.py, line 4:\n    import UnitTest';
		$m.__track_lines__[5] = 'NoInlineCodeTest.py, line 5:\n    import urllib';
		$m.__track_lines__[7] = 'NoInlineCodeTest.py, line 7:\n    def test(a):';
		$m.__track_lines__[8] = 'NoInlineCodeTest.py, line 8:\n    return None';
		$m.__track_lines__[10] = 'NoInlineCodeTest.py, line 10:\n    class NoInlineCodeTest(UnitTest.UnitTest):';
		$m.__track_lines__[12] = 'NoInlineCodeTest.py, line 12:\n    def test_bool(self):';
		$m.__track_lines__[13] = 'NoInlineCodeTest.py, line 13:\n    i1 = bool(1)';
		$m.__track_lines__[14] = 'NoInlineCodeTest.py, line 14:\n    def fn():';
		$m.__track_lines__[15] = 'NoInlineCodeTest.py, line 15:\n    i2 = True';
		$m.__track_lines__[16] = 'NoInlineCodeTest.py, line 16:\n    bool = test';
		$m.__track_lines__[17] = 'NoInlineCodeTest.py, line 17:\n    i3 = bool(1)';
		$m.__track_lines__[18] = 'NoInlineCodeTest.py, line 18:\n    i4 = True';
		$m.__track_lines__[19] = 'NoInlineCodeTest.py, line 19:\n    self.assertEqual(i1, True)';
		$m.__track_lines__[20] = 'NoInlineCodeTest.py, line 20:\n    self.assertEqual(i1, i2)';
		$m.__track_lines__[21] = 'NoInlineCodeTest.py, line 21:\n    self.assertNotEqual(i1, i3)';
		$m.__track_lines__[22] = 'NoInlineCodeTest.py, line 22:\n    self.assertEqual(i1, i4)';
		$m.__track_lines__[23] = 'NoInlineCodeTest.py, line 23:\n    fn()';
		$m.__track_lines__[25] = 'NoInlineCodeTest.py, line 25:\n    def test_int(self):';
		$m.__track_lines__[26] = 'NoInlineCodeTest.py, line 26:\n    i1 = int(1)';
		$m.__track_lines__[27] = 'NoInlineCodeTest.py, line 27:\n    def fn():';
		$m.__track_lines__[28] = 'NoInlineCodeTest.py, line 28:\n    i2 = 1';
		$m.__track_lines__[29] = 'NoInlineCodeTest.py, line 29:\n    int = test';
		$m.__track_lines__[30] = 'NoInlineCodeTest.py, line 30:\n    i3 = int(1)';
		$m.__track_lines__[31] = 'NoInlineCodeTest.py, line 31:\n    i4 = 1';
		$m.__track_lines__[32] = 'NoInlineCodeTest.py, line 32:\n    self.assertEqual(i1, 1)';
		$m.__track_lines__[33] = 'NoInlineCodeTest.py, line 33:\n    self.assertEqual(i1, i2)';
		$m.__track_lines__[34] = 'NoInlineCodeTest.py, line 34:\n    self.assertNotEqual(i1, i3)';
		$m.__track_lines__[35] = 'NoInlineCodeTest.py, line 35:\n    self.assertEqual(i1, i4)';
		$m.__track_lines__[36] = 'NoInlineCodeTest.py, line 36:\n    fn()';
		$m.__track_lines__[38] = 'NoInlineCodeTest.py, line 38:\n    def test_hexint(self):';
		$m.__track_lines__[39] = 'NoInlineCodeTest.py, line 39:\n    i1 = int(1)';
		$m.__track_lines__[40] = 'NoInlineCodeTest.py, line 40:\n    def fn():';
		$m.__track_lines__[41] = 'NoInlineCodeTest.py, line 41:\n    i2 = 0x1';
		$m.__track_lines__[42] = 'NoInlineCodeTest.py, line 42:\n    int = hex = test';
		$m.__track_lines__[43] = 'NoInlineCodeTest.py, line 43:\n    i3 = int(0x1)';
		$m.__track_lines__[44] = 'NoInlineCodeTest.py, line 44:\n    i4 = 0x1';
		$m.__track_lines__[45] = 'NoInlineCodeTest.py, line 45:\n    self.assertEqual(i1, 1)';
		$m.__track_lines__[46] = 'NoInlineCodeTest.py, line 46:\n    self.assertEqual(i1, i2)';
		$m.__track_lines__[47] = 'NoInlineCodeTest.py, line 47:\n    self.assertNotEqual(i1, i3)';
		$m.__track_lines__[48] = 'NoInlineCodeTest.py, line 48:\n    self.assertEqual(i1, i4)';
		$m.__track_lines__[49] = 'NoInlineCodeTest.py, line 49:\n    fn()';
		$m.__track_lines__[51] = 'NoInlineCodeTest.py, line 51:\n    def test_long(self):';
		$m.__track_lines__[52] = 'NoInlineCodeTest.py, line 52:\n    i1 = long(1)';
		$m.__track_lines__[53] = 'NoInlineCodeTest.py, line 53:\n    def fn():';
		$m.__track_lines__[54] = 'NoInlineCodeTest.py, line 54:\n    i2 = 1L';
		$m.__track_lines__[55] = 'NoInlineCodeTest.py, line 55:\n    long = test';
		$m.__track_lines__[56] = 'NoInlineCodeTest.py, line 56:\n    i3 = long(1)';
		$m.__track_lines__[57] = 'NoInlineCodeTest.py, line 57:\n    i4 = 1L';
		$m.__track_lines__[58] = 'NoInlineCodeTest.py, line 58:\n    self.assertEqual(i1, 1L)';
		$m.__track_lines__[59] = 'NoInlineCodeTest.py, line 59:\n    self.assertEqual(i1, i2)';
		$m.__track_lines__[60] = 'NoInlineCodeTest.py, line 60:\n    self.assertNotEqual(i1, i3)';
		$m.__track_lines__[61] = 'NoInlineCodeTest.py, line 61:\n    self.assertEqual(i1, i4)';
		$m.__track_lines__[62] = 'NoInlineCodeTest.py, line 62:\n    fn()';
		$m.__track_lines__[64] = 'NoInlineCodeTest.py, line 64:\n    def test_float(self):';
		$m.__track_lines__[65] = 'NoInlineCodeTest.py, line 65:\n    i1 = float(1.0)';
		$m.__track_lines__[66] = 'NoInlineCodeTest.py, line 66:\n    def fn():';
		$m.__track_lines__[67] = 'NoInlineCodeTest.py, line 67:\n    i2 = 1.0';
		$m.__track_lines__[68] = 'NoInlineCodeTest.py, line 68:\n    float = test';
		$m.__track_lines__[69] = 'NoInlineCodeTest.py, line 69:\n    i3 = float(1.0)';
		$m.__track_lines__[70] = 'NoInlineCodeTest.py, line 70:\n    i4 = 1.0';
		$m.__track_lines__[71] = 'NoInlineCodeTest.py, line 71:\n    self.assertEqual(i1, 1.0)';
		$m.__track_lines__[72] = 'NoInlineCodeTest.py, line 72:\n    self.assertEqual(i1, i2)';
		$m.__track_lines__[73] = 'NoInlineCodeTest.py, line 73:\n    self.assertNotEqual(i1, i3)';
		$m.__track_lines__[74] = 'NoInlineCodeTest.py, line 74:\n    self.assertEqual(i1, i4)';
		$m.__track_lines__[75] = 'NoInlineCodeTest.py, line 75:\n    fn()';
		$m.__track_lines__[77] = 'NoInlineCodeTest.py, line 77:\n    def test_tuple(self):';
		$m.__track_lines__[78] = 'NoInlineCodeTest.py, line 78:\n    i1 = tuple((1,))';
		$m.__track_lines__[79] = 'NoInlineCodeTest.py, line 79:\n    def fn():';
		$m.__track_lines__[80] = 'NoInlineCodeTest.py, line 80:\n    i2 = (1,)';
		$m.__track_lines__[81] = 'NoInlineCodeTest.py, line 81:\n    tuple = test';
		$m.__track_lines__[82] = 'NoInlineCodeTest.py, line 82:\n    i3 = tuple((1,))';
		$m.__track_lines__[83] = 'NoInlineCodeTest.py, line 83:\n    i4 = (1,)';
		$m.__track_lines__[84] = 'NoInlineCodeTest.py, line 84:\n    self.assertEqual(i1, (1,))';
		$m.__track_lines__[85] = 'NoInlineCodeTest.py, line 85:\n    self.assertEqual(i1, i2)';
		$m.__track_lines__[86] = 'NoInlineCodeTest.py, line 86:\n    self.assertNotEqual(i1, i3)';
		$m.__track_lines__[87] = 'NoInlineCodeTest.py, line 87:\n    self.assertEqual(i1, i4)';
		$m.__track_lines__[88] = 'NoInlineCodeTest.py, line 88:\n    fn()';
		$m.__track_lines__[90] = 'NoInlineCodeTest.py, line 90:\n    def test_list(self):';
		$m.__track_lines__[91] = 'NoInlineCodeTest.py, line 91:\n    i1 = list([1])';
		$m.__track_lines__[92] = 'NoInlineCodeTest.py, line 92:\n    def fn():';
		$m.__track_lines__[93] = 'NoInlineCodeTest.py, line 93:\n    i2 = [1]';
		$m.__track_lines__[94] = 'NoInlineCodeTest.py, line 94:\n    list = test';
		$m.__track_lines__[95] = 'NoInlineCodeTest.py, line 95:\n    i3 = list([1])';
		$m.__track_lines__[96] = 'NoInlineCodeTest.py, line 96:\n    i4 = [1]';
		$m.__track_lines__[97] = 'NoInlineCodeTest.py, line 97:\n    self.assertEqual(i1, [1])';
		$m.__track_lines__[98] = 'NoInlineCodeTest.py, line 98:\n    self.assertEqual(i1, i2)';
		$m.__track_lines__[99] = 'NoInlineCodeTest.py, line 99:\n    self.assertNotEqual(i1, i3)';
		$m.__track_lines__[100] = 'NoInlineCodeTest.py, line 100:\n    self.assertEqual(i1, i4)';
		$m.__track_lines__[101] = 'NoInlineCodeTest.py, line 101:\n    fn()';
		$m.__track_lines__[103] = 'NoInlineCodeTest.py, line 103:\n    def test_dict(self):';
		$m.__track_lines__[104] = 'NoInlineCodeTest.py, line 104:\n    i1 = dict(a=1)';
		$m.__track_lines__[105] = 'NoInlineCodeTest.py, line 105:\n    def fn():';
		$m.__track_lines__[106] = "NoInlineCodeTest.py, line 106:\n    i2 = {'a':1}";
		$m.__track_lines__[107] = 'NoInlineCodeTest.py, line 107:\n    dict = test';
		$m.__track_lines__[108] = 'NoInlineCodeTest.py, line 108:\n    i3 = dict(a=1)';
		$m.__track_lines__[109] = "NoInlineCodeTest.py, line 109:\n    i4 = {'a':1}";
		$m.__track_lines__[110] = "NoInlineCodeTest.py, line 110:\n    self.assertEqual(i1, {'a':1})";
		$m.__track_lines__[111] = 'NoInlineCodeTest.py, line 111:\n    self.assertEqual(i1, i2)';
		$m.__track_lines__[112] = 'NoInlineCodeTest.py, line 112:\n    self.assertNotEqual(i1, i3)';
		$m.__track_lines__[113] = 'NoInlineCodeTest.py, line 113:\n    self.assertEqual(i1, i4)';
		$m.__track_lines__[114] = 'NoInlineCodeTest.py, line 114:\n    fn()';
		$m.__track_lines__[116] = 'NoInlineCodeTest.py, line 116:\n    def test_set(self):';
		$m.__track_lines__[117] = 'NoInlineCodeTest.py, line 117:\n    i1 = set([1])';
		$m.__track_lines__[118] = 'NoInlineCodeTest.py, line 118:\n    _set = set';
		$m.__track_lines__[119] = 'NoInlineCodeTest.py, line 119:\n    def fn():';
		$m.__track_lines__[120] = 'NoInlineCodeTest.py, line 120:\n    set = test';
		$m.__track_lines__[121] = 'NoInlineCodeTest.py, line 121:\n    i3 = set([1])';
		$m.__track_lines__[122] = 'NoInlineCodeTest.py, line 122:\n    i4 = _set([1])';
		$m.__track_lines__[123] = 'NoInlineCodeTest.py, line 123:\n    self.assertNotEqual(i1, i3)';
		$m.__track_lines__[124] = 'NoInlineCodeTest.py, line 124:\n    self.assertEqual(i1, i4)';
		$m.__track_lines__[125] = 'NoInlineCodeTest.py, line 125:\n    fn()';
		$m.__track_lines__[127] = 'NoInlineCodeTest.py, line 127:\n    def test_ArithmeticError(self):';
		$m.__track_lines__[128] = 'NoInlineCodeTest.py, line 128:\n    e1 = ArithmeticError';
		$m.__track_lines__[129] = 'NoInlineCodeTest.py, line 129:\n    def fn():';
		$m.__track_lines__[130] = 'NoInlineCodeTest.py, line 130:\n    ArithmeticError = bool';
		$m.__track_lines__[131] = 'NoInlineCodeTest.py, line 131:\n    try:';
		$m.__track_lines__[132] = 'NoInlineCodeTest.py, line 132:\n    a = 1/0';
		$m.__track_lines__[134] = 'NoInlineCodeTest.py, line 134:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[135] = 'NoInlineCodeTest.py, line 135:\n    self.assertFalse(isinstance(e, ArithmeticError))';
		$m.__track_lines__[137] = 'NoInlineCodeTest.py, line 137:\n    self.fail("Failed to raise ArithmeticError")';
		$m.__track_lines__[138] = 'NoInlineCodeTest.py, line 138:\n    fn()';
		$m.__track_lines__[140] = 'NoInlineCodeTest.py, line 140:\n    def test_AttributeError(self):';
		$m.__track_lines__[141] = 'NoInlineCodeTest.py, line 141:\n    e1 = AttributeError';
		$m.__track_lines__[142] = 'NoInlineCodeTest.py, line 142:\n    def fn():';
		$m.__track_lines__[143] = 'NoInlineCodeTest.py, line 143:\n    AttributeError = bool';
		$m.__track_lines__[144] = 'NoInlineCodeTest.py, line 144:\n    try:';
		$m.__track_lines__[145] = 'NoInlineCodeTest.py, line 145:\n    a = e1.noooo';
		$m.__track_lines__[147] = 'NoInlineCodeTest.py, line 147:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[148] = 'NoInlineCodeTest.py, line 148:\n    self.assertFalse(isinstance(e, AttributeError))';
		$m.__track_lines__[150] = 'NoInlineCodeTest.py, line 150:\n    self.fail("Failed to raise AttributeError")';
		$m.__track_lines__[151] = 'NoInlineCodeTest.py, line 151:\n    fn()';
		$m.__track_lines__[153] = 'NoInlineCodeTest.py, line 153:\n    def test_BaseException(self):';
		$m.__track_lines__[154] = 'NoInlineCodeTest.py, line 154:\n    e1 = BaseException';
		$m.__track_lines__[155] = 'NoInlineCodeTest.py, line 155:\n    def fn():';
		$m.__track_lines__[156] = 'NoInlineCodeTest.py, line 156:\n    BaseException = bool';
		$m.__track_lines__[157] = 'NoInlineCodeTest.py, line 157:\n    try:';
		$m.__track_lines__[158] = 'NoInlineCodeTest.py, line 158:\n    a = 1/0';
		$m.__track_lines__[160] = 'NoInlineCodeTest.py, line 160:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[161] = 'NoInlineCodeTest.py, line 161:\n    self.assertFalse(isinstance(e, BaseException))';
		$m.__track_lines__[163] = 'NoInlineCodeTest.py, line 163:\n    self.fail("Failed to raise BaseException")';
		$m.__track_lines__[164] = 'NoInlineCodeTest.py, line 164:\n    fn()';
		$m.__track_lines__[166] = 'NoInlineCodeTest.py, line 166:\n    def test_Exception(self):';
		$m.__track_lines__[167] = 'NoInlineCodeTest.py, line 167:\n    e1 = Exception';
		$m.__track_lines__[168] = 'NoInlineCodeTest.py, line 168:\n    def fn():';
		$m.__track_lines__[169] = 'NoInlineCodeTest.py, line 169:\n    Exception = bool';
		$m.__track_lines__[170] = 'NoInlineCodeTest.py, line 170:\n    try:';
		$m.__track_lines__[171] = 'NoInlineCodeTest.py, line 171:\n    a = 1/0';
		$m.__track_lines__[173] = 'NoInlineCodeTest.py, line 173:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[174] = 'NoInlineCodeTest.py, line 174:\n    self.assertFalse(isinstance(e, Exception))';
		$m.__track_lines__[176] = 'NoInlineCodeTest.py, line 176:\n    self.fail("Failed to raise Exception")';
		$m.__track_lines__[177] = 'NoInlineCodeTest.py, line 177:\n    fn()';
		$m.__track_lines__[179] = 'NoInlineCodeTest.py, line 179:\n    def _test_GeneratorExit(self):';
		$m.__track_lines__[180] = 'NoInlineCodeTest.py, line 180:\n    e1 = GeneratorExit';
		$m.__track_lines__[181] = 'NoInlineCodeTest.py, line 181:\n    def fn():';
		$m.__track_lines__[182] = 'NoInlineCodeTest.py, line 182:\n    GeneratorExit = bool';
		$m.__track_lines__[183] = 'NoInlineCodeTest.py, line 183:\n    try:';
		$m.__track_lines__[184] = 'NoInlineCodeTest.py, line 184:\n    a = 1/0';
		$m.__track_lines__[186] = 'NoInlineCodeTest.py, line 186:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[187] = 'NoInlineCodeTest.py, line 187:\n    self.assertFalse(isinstance(e, GeneratorExit))';
		$m.__track_lines__[189] = 'NoInlineCodeTest.py, line 189:\n    self.fail("Failed to raise GeneratorExit")';
		$m.__track_lines__[190] = 'NoInlineCodeTest.py, line 190:\n    fn()';
		$m.__track_lines__[192] = 'NoInlineCodeTest.py, line 192:\n    def test_ImportError(self):';
		$m.__track_lines__[193] = 'NoInlineCodeTest.py, line 193:\n    e1 = ImportError';
		$m.__track_lines__[194] = 'NoInlineCodeTest.py, line 194:\n    def fn():';
		$m.__track_lines__[195] = 'NoInlineCodeTest.py, line 195:\n    ImportError = bool';
		$m.__track_lines__[196] = 'NoInlineCodeTest.py, line 196:\n    try:';
		$m.__track_lines__[197] = 'NoInlineCodeTest.py, line 197:\n    import nosuchmodule';
		$m.__track_lines__[199] = 'NoInlineCodeTest.py, line 199:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[200] = 'NoInlineCodeTest.py, line 200:\n    self.assertFalse(isinstance(e, ImportError))';
		$m.__track_lines__[202] = 'NoInlineCodeTest.py, line 202:\n    self.fail("Failed to raise ImportError")';
		$m.__track_lines__[203] = 'NoInlineCodeTest.py, line 203:\n    fn()';
		$m.__track_lines__[205] = 'NoInlineCodeTest.py, line 205:\n    def test_IndexError(self):';
		$m.__track_lines__[206] = 'NoInlineCodeTest.py, line 206:\n    e1 = IndexError';
		$m.__track_lines__[207] = 'NoInlineCodeTest.py, line 207:\n    def fn():';
		$m.__track_lines__[208] = 'NoInlineCodeTest.py, line 208:\n    IndexError = bool';
		$m.__track_lines__[209] = 'NoInlineCodeTest.py, line 209:\n    try:';
		$m.__track_lines__[210] = 'NoInlineCodeTest.py, line 210:\n    a = [0][1]';
		$m.__track_lines__[212] = 'NoInlineCodeTest.py, line 212:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[213] = 'NoInlineCodeTest.py, line 213:\n    self.assertFalse(isinstance(e, IndexError))';
		$m.__track_lines__[215] = 'NoInlineCodeTest.py, line 215:\n    self.fail("Failed to raise IndexError")';
		$m.__track_lines__[216] = 'NoInlineCodeTest.py, line 216:\n    fn()';
		$m.__track_lines__[218] = 'NoInlineCodeTest.py, line 218:\n    def test_KeyError(self):';
		$m.__track_lines__[219] = 'NoInlineCodeTest.py, line 219:\n    e1 = KeyError';
		$m.__track_lines__[220] = 'NoInlineCodeTest.py, line 220:\n    def fn():';
		$m.__track_lines__[221] = 'NoInlineCodeTest.py, line 221:\n    KeyError = bool';
		$m.__track_lines__[222] = 'NoInlineCodeTest.py, line 222:\n    try:';
		$m.__track_lines__[223] = "NoInlineCodeTest.py, line 223:\n    a = dict(a=1)['b']";
		$m.__track_lines__[225] = 'NoInlineCodeTest.py, line 225:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[226] = 'NoInlineCodeTest.py, line 226:\n    self.assertFalse(isinstance(e, KeyError))';
		$m.__track_lines__[228] = 'NoInlineCodeTest.py, line 228:\n    self.fail("Failed to raise KeyError")';
		$m.__track_lines__[229] = 'NoInlineCodeTest.py, line 229:\n    fn()';
		$m.__track_lines__[231] = 'NoInlineCodeTest.py, line 231:\n    def test_LookupError(self):';
		$m.__track_lines__[232] = 'NoInlineCodeTest.py, line 232:\n    e1 = LookupError';
		$m.__track_lines__[233] = 'NoInlineCodeTest.py, line 233:\n    def fn():';
		$m.__track_lines__[234] = 'NoInlineCodeTest.py, line 234:\n    LookupError = bool';
		$m.__track_lines__[235] = 'NoInlineCodeTest.py, line 235:\n    try:';
		$m.__track_lines__[236] = 'NoInlineCodeTest.py, line 236:\n    a = set([1]).remove(2)';
		$m.__track_lines__[238] = 'NoInlineCodeTest.py, line 238:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[239] = 'NoInlineCodeTest.py, line 239:\n    self.assertFalse(isinstance(e, LookupError))';
		$m.__track_lines__[241] = 'NoInlineCodeTest.py, line 241:\n    self.fail("Failed to raise LookupError")';
		$m.__track_lines__[242] = 'NoInlineCodeTest.py, line 242:\n    fn()';
		$m.__track_lines__[244] = 'NoInlineCodeTest.py, line 244:\n    def _test_NameError(self):';
		$m.__track_lines__[246] = 'NoInlineCodeTest.py, line 246:\n    e1 = NameError';
		$m.__track_lines__[247] = 'NoInlineCodeTest.py, line 247:\n    def fn():';
		$m.__track_lines__[248] = 'NoInlineCodeTest.py, line 248:\n    NameError = bool';
		$m.__track_lines__[249] = 'NoInlineCodeTest.py, line 249:\n    try:';
		$m.__track_lines__[250] = 'NoInlineCodeTest.py, line 250:\n    a = nosuchname';
		$m.__track_lines__[252] = 'NoInlineCodeTest.py, line 252:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[253] = 'NoInlineCodeTest.py, line 253:\n    self.assertFalse(isinstance(e, NameError))';
		$m.__track_lines__[255] = 'NoInlineCodeTest.py, line 255:\n    self.fail("Failed to raise NameError")';
		$m.__track_lines__[256] = 'NoInlineCodeTest.py, line 256:\n    fn()';
		$m.__track_lines__[258] = 'NoInlineCodeTest.py, line 258:\n    def _test_RuntimeError(self):';
		$m.__track_lines__[260] = 'NoInlineCodeTest.py, line 260:\n    e1 = RuntimeError';
		$m.__track_lines__[261] = 'NoInlineCodeTest.py, line 261:\n    def fn():';
		$m.__track_lines__[262] = 'NoInlineCodeTest.py, line 262:\n    RuntimeError = bool';
		$m.__track_lines__[263] = 'NoInlineCodeTest.py, line 263:\n    try:';
		$m.__track_lines__[264] = 'NoInlineCodeTest.py, line 264:\n    a = dict(a=1,b=2,c=3)';
		$m.__track_lines__[265] = 'NoInlineCodeTest.py, line 265:\n    for k, v in a.iteritems():';
		$m.__track_lines__[266] = "NoInlineCodeTest.py, line 266:\n    a['_%s' % k] = v";
		$m.__track_lines__[268] = 'NoInlineCodeTest.py, line 268:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[269] = 'NoInlineCodeTest.py, line 269:\n    self.assertFalse(isinstance(e, RuntimeError))';
		$m.__track_lines__[271] = 'NoInlineCodeTest.py, line 271:\n    self.fail("Failed to raise RuntimeError")';
		$m.__track_lines__[272] = 'NoInlineCodeTest.py, line 272:\n    fn()';
		$m.__track_lines__[274] = 'NoInlineCodeTest.py, line 274:\n    def test_StandardError(self):';
		$m.__track_lines__[275] = 'NoInlineCodeTest.py, line 275:\n    e1 = StandardError';
		$m.__track_lines__[276] = 'NoInlineCodeTest.py, line 276:\n    def fn():';
		$m.__track_lines__[277] = 'NoInlineCodeTest.py, line 277:\n    StandardError = bool';
		$m.__track_lines__[278] = 'NoInlineCodeTest.py, line 278:\n    try:';
		$m.__track_lines__[279] = 'NoInlineCodeTest.py, line 279:\n    a = 1/0';
		$m.__track_lines__[281] = 'NoInlineCodeTest.py, line 281:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[282] = 'NoInlineCodeTest.py, line 282:\n    self.assertFalse(isinstance(e, StandardError))';
		$m.__track_lines__[284] = 'NoInlineCodeTest.py, line 284:\n    self.fail("Failed to raise StandardError")';
		$m.__track_lines__[285] = 'NoInlineCodeTest.py, line 285:\n    fn()';
		$m.__track_lines__[287] = 'NoInlineCodeTest.py, line 287:\n    def _test_StopIteration(self):';
		$m.__track_lines__[289] = 'NoInlineCodeTest.py, line 289:\n    e1 = StopIteration';
		$m.__track_lines__[290] = 'NoInlineCodeTest.py, line 290:\n    def fn():';
		$m.__track_lines__[291] = 'NoInlineCodeTest.py, line 291:\n    def g():';
		$m.__track_lines__[292] = 'NoInlineCodeTest.py, line 292:\n    yield None';
		$m.__track_lines__[293] = 'NoInlineCodeTest.py, line 293:\n    StopIteration = bool';
		$m.__track_lines__[294] = 'NoInlineCodeTest.py, line 294:\n    try:';
		$m.__track_lines__[295] = 'NoInlineCodeTest.py, line 295:\n    a = g()';
		$m.__track_lines__[296] = 'NoInlineCodeTest.py, line 296:\n    a.next()';
		$m.__track_lines__[297] = 'NoInlineCodeTest.py, line 297:\n    a.next()';
		$m.__track_lines__[299] = 'NoInlineCodeTest.py, line 299:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[300] = 'NoInlineCodeTest.py, line 300:\n    self.assertFalse(isinstance(e, StopIteration))';
		$m.__track_lines__[302] = 'NoInlineCodeTest.py, line 302:\n    self.fail("Failed to raise StopIteration")';
		$m.__track_lines__[303] = 'NoInlineCodeTest.py, line 303:\n    fn()';
		$m.__track_lines__[305] = 'NoInlineCodeTest.py, line 305:\n    def test_TypeError(self):';
		$m.__track_lines__[306] = 'NoInlineCodeTest.py, line 306:\n    e1 = TypeError';
		$m.__track_lines__[307] = 'NoInlineCodeTest.py, line 307:\n    def fn():';
		$m.__track_lines__[308] = 'NoInlineCodeTest.py, line 308:\n    TypeError = bool';
		$m.__track_lines__[309] = 'NoInlineCodeTest.py, line 309:\n    try:';
		$m.__track_lines__[310] = "NoInlineCodeTest.py, line 310:\n    a = 1 + 'a'";
		$m.__track_lines__[312] = 'NoInlineCodeTest.py, line 312:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[313] = 'NoInlineCodeTest.py, line 313:\n    self.assertFalse(isinstance(e, TypeError))';
		$m.__track_lines__[315] = 'NoInlineCodeTest.py, line 315:\n    self.fail("Failed to raise TypeError")';
		$m.__track_lines__[316] = 'NoInlineCodeTest.py, line 316:\n    fn()';
		$m.__track_lines__[318] = 'NoInlineCodeTest.py, line 318:\n    def test_ValueError(self):';
		$m.__track_lines__[319] = 'NoInlineCodeTest.py, line 319:\n    e1 = ValueError';
		$m.__track_lines__[320] = 'NoInlineCodeTest.py, line 320:\n    def fn():';
		$m.__track_lines__[321] = 'NoInlineCodeTest.py, line 321:\n    ValueError = bool';
		$m.__track_lines__[322] = 'NoInlineCodeTest.py, line 322:\n    try:';
		$m.__track_lines__[323] = 'NoInlineCodeTest.py, line 323:\n    a = list([1]).index(2)';
		$m.__track_lines__[325] = 'NoInlineCodeTest.py, line 325:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[326] = 'NoInlineCodeTest.py, line 326:\n    self.assertFalse(isinstance(e, ValueError))';
		$m.__track_lines__[328] = 'NoInlineCodeTest.py, line 328:\n    self.fail("Failed to raise ValueError")';
		$m.__track_lines__[329] = 'NoInlineCodeTest.py, line 329:\n    fn()';
		$m.__track_lines__[331] = 'NoInlineCodeTest.py, line 331:\n    def test_ZeroDivisionError(self):';
		$m.__track_lines__[332] = 'NoInlineCodeTest.py, line 332:\n    e1 = ZeroDivisionError';
		$m.__track_lines__[333] = 'NoInlineCodeTest.py, line 333:\n    def fn():';
		$m.__track_lines__[334] = 'NoInlineCodeTest.py, line 334:\n    ZeroDivisionError = bool';
		$m.__track_lines__[335] = 'NoInlineCodeTest.py, line 335:\n    try:';
		$m.__track_lines__[336] = 'NoInlineCodeTest.py, line 336:\n    a = 1/0';
		$m.__track_lines__[338] = 'NoInlineCodeTest.py, line 338:\n    self.assertTrue(isinstance(e, e1))';
		$m.__track_lines__[339] = 'NoInlineCodeTest.py, line 339:\n    self.assertFalse(isinstance(e, ZeroDivisionError))';
		$m.__track_lines__[341] = 'NoInlineCodeTest.py, line 341:\n    self.fail("Failed to raise ZeroDivisionError")';
		$m.__track_lines__[342] = 'NoInlineCodeTest.py, line 342:\n    fn()';
		$m.__track_lines__[344] = 'NoInlineCodeTest.py, line 344:\n    def test_ArgsScoping(self):';
		$m.__track_lines__[345] = 'NoInlineCodeTest.py, line 345:\n    collection = []';
		$m.__track_lines__[346] = 'NoInlineCodeTest.py, line 346:\n    def fn(i, *args, **kwargs):';
		$m.__track_lines__[347] = 'NoInlineCodeTest.py, line 347:\n    if i < 2:';
		$m.__track_lines__[348] = 'NoInlineCodeTest.py, line 348:\n    fn(i+1)';
		$m.__track_lines__[349] = 'NoInlineCodeTest.py, line 349:\n    collection.append((i, args, kwargs))';
		$m.__track_lines__[350] = 'NoInlineCodeTest.py, line 350:\n    args = (2,3)';
		$m.__track_lines__[351] = "NoInlineCodeTest.py, line 351:\n    kwargs = dict(a='a', b='b')";
		$m.__track_lines__[352] = 'NoInlineCodeTest.py, line 352:\n    collection.append((0, args, kwargs))';
		$m.__track_lines__[353] = 'NoInlineCodeTest.py, line 353:\n    fn(1, *args, **kwargs)';
		$m.__track_lines__[355] = 'NoInlineCodeTest.py, line 354:\n    self.assertEqual( ... collection,';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_long_1 = new $p['long'](1);
		$pyjs.track.module='NoInlineCodeTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['urllib'] = $p['___import___']('urllib', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=7;
		$m['test'] = function(a) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'NoInlineCodeTest',lineno:7};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='NoInlineCodeTest';
			$pyjs.track.lineno=7;
			$pyjs.track.lineno=8;
			$pyjs.track.lineno=8;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['test'].__name__ = 'test';

		$m['test'].__bind_type__ = 0;
		$m['test'].__args__ = [null,null,['a']];
		$pyjs.track.lineno=10;
		$m['NoInlineCodeTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'NoInlineCodeTest';
			$cls_definition.__md5__ = '4ed9592d20555372275c24dedfaa6d23';
			$pyjs.track.lineno=12;
			$method = $pyjs__bind_method2('test_bool', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:12};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=12;
				$pyjs.track.lineno=13;
				i1 = $p['bool']($constant_int_1);
				$pyjs.track.lineno=14;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,i2,bool,i4;
					$pyjs.track={module:'NoInlineCodeTest',lineno:14};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=14;
					$pyjs.track.lineno=15;
					i2 = true;
					$pyjs.track.lineno=16;
					bool = $m['test'];
					$pyjs.track.lineno=17;
					i3 = bool($constant_int_1);
					$pyjs.track.lineno=18;
					i4 = true;
					$pyjs.track.lineno=19;
					self['assertEqual'](i1, true);
					$pyjs.track.lineno=20;
					self['assertEqual'](i1, i2);
					$pyjs.track.lineno=21;
					self['assertNotEqual'](i1, i3);
					$pyjs.track.lineno=22;
					self['assertEqual'](i1, i4);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=23;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_bool'] = $method;
			$pyjs.track.lineno=25;
			$method = $pyjs__bind_method2('test_int', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:25};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=25;
				$pyjs.track.lineno=26;
				i1 = $p['int']($constant_int_1);
				$pyjs.track.lineno=27;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var int,i3,i2,i4;
					$pyjs.track={module:'NoInlineCodeTest',lineno:27};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=27;
					$pyjs.track.lineno=28;
					i2 = $constant_int_1;
					$pyjs.track.lineno=29;
					int = $m['test'];
					$pyjs.track.lineno=30;
					i3 = int($constant_int_1);
					$pyjs.track.lineno=31;
					i4 = $constant_int_1;
					$pyjs.track.lineno=32;
					self['assertEqual'](i1, $constant_int_1);
					$pyjs.track.lineno=33;
					self['assertEqual'](i1, i2);
					$pyjs.track.lineno=34;
					self['assertNotEqual'](i1, i3);
					$pyjs.track.lineno=35;
					self['assertEqual'](i1, i4);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=36;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_int'] = $method;
			$pyjs.track.lineno=38;
			$method = $pyjs__bind_method2('test_hexint', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:38};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=38;
				$pyjs.track.lineno=39;
				i1 = $p['int']($constant_int_1);
				$pyjs.track.lineno=40;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var int,i3,i2,hex,i4,$assign1;
					$pyjs.track={module:'NoInlineCodeTest',lineno:40};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=40;
					$pyjs.track.lineno=41;
					i2 = $constant_int_1;
					$pyjs.track.lineno=42;
					$assign1 = $m['test'];
					int = $assign1;
					hex = $assign1;
					$pyjs.track.lineno=43;
					i3 = int($constant_int_1);
					$pyjs.track.lineno=44;
					i4 = $constant_int_1;
					$pyjs.track.lineno=45;
					self['assertEqual'](i1, $constant_int_1);
					$pyjs.track.lineno=46;
					self['assertEqual'](i1, i2);
					$pyjs.track.lineno=47;
					self['assertNotEqual'](i1, i3);
					$pyjs.track.lineno=48;
					self['assertEqual'](i1, i4);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=49;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_hexint'] = $method;
			$pyjs.track.lineno=51;
			$method = $pyjs__bind_method2('test_long', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:51};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=51;
				$pyjs.track.lineno=52;
				i1 = $p['long']($constant_int_1);
				$pyjs.track.lineno=53;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,i2,i4,long;
					$pyjs.track={module:'NoInlineCodeTest',lineno:53};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=53;
					$pyjs.track.lineno=54;
					i2 = $constant_long_1;
					$pyjs.track.lineno=55;
					long = $m['test'];
					$pyjs.track.lineno=56;
					i3 = long($constant_int_1);
					$pyjs.track.lineno=57;
					i4 = $constant_long_1;
					$pyjs.track.lineno=58;
					self['assertEqual'](i1, $constant_long_1);
					$pyjs.track.lineno=59;
					self['assertEqual'](i1, i2);
					$pyjs.track.lineno=60;
					self['assertNotEqual'](i1, i3);
					$pyjs.track.lineno=61;
					self['assertEqual'](i1, i4);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=62;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_long'] = $method;
			$pyjs.track.lineno=64;
			$method = $pyjs__bind_method2('test_float', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:64};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=64;
				$pyjs.track.lineno=65;
				i1 = $p['float'](1.0);
				$pyjs.track.lineno=66;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var float,i3,i2,i4;
					$pyjs.track={module:'NoInlineCodeTest',lineno:66};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=66;
					$pyjs.track.lineno=67;
					i2 = 1.0;
					$pyjs.track.lineno=68;
					float = $m['test'];
					$pyjs.track.lineno=69;
					i3 = float(1.0);
					$pyjs.track.lineno=70;
					i4 = 1.0;
					$pyjs.track.lineno=71;
					self['assertEqual'](i1, 1.0);
					$pyjs.track.lineno=72;
					self['assertEqual'](i1, i2);
					$pyjs.track.lineno=73;
					self['assertNotEqual'](i1, i3);
					$pyjs.track.lineno=74;
					self['assertEqual'](i1, i4);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=75;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_float'] = $method;
			$pyjs.track.lineno=77;
			$method = $pyjs__bind_method2('test_tuple', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:77};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=77;
				$pyjs.track.lineno=78;
				i1 = $p['tuple']($p['tuple']([$constant_int_1]));
				$pyjs.track.lineno=79;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,i2,i4,tuple;
					$pyjs.track={module:'NoInlineCodeTest',lineno:79};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=79;
					$pyjs.track.lineno=80;
					i2 = $p['tuple']([$constant_int_1]);
					$pyjs.track.lineno=81;
					tuple = $m['test'];
					$pyjs.track.lineno=82;
					i3 = tuple($p['tuple']([$constant_int_1]));
					$pyjs.track.lineno=83;
					i4 = $p['tuple']([$constant_int_1]);
					$pyjs.track.lineno=84;
					self['assertEqual'](i1, $p['tuple']([$constant_int_1]));
					$pyjs.track.lineno=85;
					self['assertEqual'](i1, i2);
					$pyjs.track.lineno=86;
					self['assertNotEqual'](i1, i3);
					$pyjs.track.lineno=87;
					self['assertEqual'](i1, i4);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=88;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_tuple'] = $method;
			$pyjs.track.lineno=90;
			$method = $pyjs__bind_method2('test_list', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:90};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=90;
				$pyjs.track.lineno=91;
				i1 = $p['list']($p['list']([$constant_int_1]));
				$pyjs.track.lineno=92;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,i2,list,i4;
					$pyjs.track={module:'NoInlineCodeTest',lineno:92};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=92;
					$pyjs.track.lineno=93;
					i2 = $p['list']([$constant_int_1]);
					$pyjs.track.lineno=94;
					list = $m['test'];
					$pyjs.track.lineno=95;
					i3 = list($p['list']([$constant_int_1]));
					$pyjs.track.lineno=96;
					i4 = $p['list']([$constant_int_1]);
					$pyjs.track.lineno=97;
					self['assertEqual'](i1, $p['list']([$constant_int_1]));
					$pyjs.track.lineno=98;
					self['assertEqual'](i1, i2);
					$pyjs.track.lineno=99;
					self['assertNotEqual'](i1, i3);
					$pyjs.track.lineno=100;
					self['assertEqual'](i1, i4);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=101;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_list'] = $method;
			$pyjs.track.lineno=103;
			$method = $pyjs__bind_method2('test_dict', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:103};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=103;
				$pyjs.track.lineno=104;
				i1 = $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:$constant_int_1}]);
				$pyjs.track.lineno=105;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,i2,dict,i4;
					$pyjs.track={module:'NoInlineCodeTest',lineno:105};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=105;
					$pyjs.track.lineno=106;
					i2 = $p['dict']([['a', $constant_int_1]]);
					$pyjs.track.lineno=107;
					dict = $m['test'];
					$pyjs.track.lineno=108;
					i3 = $pyjs_kwargs_call(null, dict, null, null, [{a:$constant_int_1}]);
					$pyjs.track.lineno=109;
					i4 = $p['dict']([['a', $constant_int_1]]);
					$pyjs.track.lineno=110;
					self['assertEqual'](i1, $p['dict']([['a', $constant_int_1]]));
					$pyjs.track.lineno=111;
					self['assertEqual'](i1, i2);
					$pyjs.track.lineno=112;
					self['assertNotEqual'](i1, i3);
					$pyjs.track.lineno=113;
					self['assertEqual'](i1, i4);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=114;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_dict'] = $method;
			$pyjs.track.lineno=116;
			$method = $pyjs__bind_method2('test_set', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i1,_set,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:116};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=116;
				$pyjs.track.lineno=117;
				i1 = $p['set']($p['list']([$constant_int_1]));
				$pyjs.track.lineno=118;
				_set = $p['set'];
				$pyjs.track.lineno=119;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i3,set,i4;
					$pyjs.track={module:'NoInlineCodeTest',lineno:119};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=119;
					$pyjs.track.lineno=120;
					set = $m['test'];
					$pyjs.track.lineno=121;
					i3 = set($p['list']([$constant_int_1]));
					$pyjs.track.lineno=122;
					i4 = _set($p['list']([$constant_int_1]));
					$pyjs.track.lineno=123;
					self['assertNotEqual'](i1, i3);
					$pyjs.track.lineno=124;
					self['assertEqual'](i1, i4);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=125;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_set'] = $method;
			$pyjs.track.lineno=127;
			$method = $pyjs__bind_method2('test_ArithmeticError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:127};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=127;
				$pyjs.track.lineno=128;
				e1 = $p['ArithmeticError'];
				$pyjs.track.lineno=129;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,ArithmeticError,$pyjs_try_err,$div2,$div1;
					$pyjs.track={module:'NoInlineCodeTest',lineno:129};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=129;
					$pyjs.track.lineno=130;
					ArithmeticError = $p['bool'];
					$pyjs.track.lineno=131;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=132;
						a = (typeof ($div1=$constant_int_1)==typeof ($div2=$constant_int_0) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=137;
							self['fail']('Failed to raise ArithmeticError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=134;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=135;
								self['assertFalse']($p['isinstance'](e, ArithmeticError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=138;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ArithmeticError'] = $method;
			$pyjs.track.lineno=140;
			$method = $pyjs__bind_method2('test_AttributeError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:140};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=140;
				$pyjs.track.lineno=141;
				e1 = $p['AttributeError'];
				$pyjs.track.lineno=142;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,$pyjs_try_err,AttributeError;
					$pyjs.track={module:'NoInlineCodeTest',lineno:142};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=142;
					$pyjs.track.lineno=143;
					AttributeError = $p['bool'];
					$pyjs.track.lineno=144;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=145;
						a = $p['getattr'](e1, 'noooo');
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=150;
							self['fail']('Failed to raise AttributeError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=147;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=148;
								self['assertFalse']($p['isinstance'](e, AttributeError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=151;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_AttributeError'] = $method;
			$pyjs.track.lineno=153;
			$method = $pyjs__bind_method2('test_BaseException', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:153};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=153;
				$pyjs.track.lineno=154;
				e1 = $p['BaseException'];
				$pyjs.track.lineno=155;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,$pyjs_try_err,$div3,$div4,BaseException;
					$pyjs.track={module:'NoInlineCodeTest',lineno:155};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=155;
					$pyjs.track.lineno=156;
					BaseException = $p['bool'];
					$pyjs.track.lineno=157;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=158;
						a = (typeof ($div3=$constant_int_1)==typeof ($div4=$constant_int_0) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=163;
							self['fail']('Failed to raise BaseException');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=160;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=161;
								self['assertFalse']($p['isinstance'](e, BaseException));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=164;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_BaseException'] = $method;
			$pyjs.track.lineno=166;
			$method = $pyjs__bind_method2('test_Exception', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:166};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=166;
				$pyjs.track.lineno=167;
				e1 = $p['Exception'];
				$pyjs.track.lineno=168;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,Exception,e,$pyjs_try_err,$div6,$div5;
					$pyjs.track={module:'NoInlineCodeTest',lineno:168};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=168;
					$pyjs.track.lineno=169;
					Exception = $p['bool'];
					$pyjs.track.lineno=170;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=171;
						a = (typeof ($div5=$constant_int_1)==typeof ($div6=$constant_int_0) && typeof $div5=='number' && $div6 !== 0?
							$div5/$div6:
							$p['op_div']($div5,$div6));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=176;
							self['fail']('Failed to raise Exception');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=173;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=174;
								self['assertFalse']($p['isinstance'](e, Exception));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=177;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_Exception'] = $method;
			$pyjs.track.lineno=179;
			$method = $pyjs__bind_method2('_test_GeneratorExit', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:179};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=179;
				$pyjs.track.lineno=180;
				e1 = $p['GeneratorExit'];
				$pyjs.track.lineno=181;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,GeneratorExit,e,$div8,$pyjs_try_err,$div7;
					$pyjs.track={module:'NoInlineCodeTest',lineno:181};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=181;
					$pyjs.track.lineno=182;
					GeneratorExit = $p['bool'];
					$pyjs.track.lineno=183;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=184;
						a = (typeof ($div7=$constant_int_1)==typeof ($div8=$constant_int_0) && typeof $div7=='number' && $div8 !== 0?
							$div7/$div8:
							$p['op_div']($div7,$div8));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=189;
							self['fail']('Failed to raise GeneratorExit');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=186;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=187;
								self['assertFalse']($p['isinstance'](e, GeneratorExit));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=190;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_test_GeneratorExit'] = $method;
			$pyjs.track.lineno=192;
			$method = $pyjs__bind_method2('test_ImportError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:192};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=192;
				$pyjs.track.lineno=193;
				e1 = $p['ImportError'];
				$pyjs.track.lineno=194;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var ImportError,e,$pyjs_try_err,nosuchmodule;
					$pyjs.track={module:'NoInlineCodeTest',lineno:194};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=194;
					$pyjs.track.lineno=195;
					ImportError = $p['bool'];
					$pyjs.track.lineno=196;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=197;
						$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
						nosuchmodule = $p['___import___']('nosuchmodule', null);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=202;
							self['fail']('Failed to raise ImportError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=199;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=200;
								self['assertFalse']($p['isinstance'](e, ImportError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=203;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ImportError'] = $method;
			$pyjs.track.lineno=205;
			$method = $pyjs__bind_method2('test_IndexError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:205};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=205;
				$pyjs.track.lineno=206;
				e1 = $p['IndexError'];
				$pyjs.track.lineno=207;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,IndexError,$pyjs_try_err,e,$2,$1;
					$pyjs.track={module:'NoInlineCodeTest',lineno:207};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=207;
					$pyjs.track.lineno=208;
					IndexError = $p['bool'];
					$pyjs.track.lineno=209;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=210;
						a = (typeof ($1=$p['list']([$constant_int_0])).__array != 'undefined'?
							((typeof $1.__array[$2=$constant_int_1]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__($constant_int_1));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=215;
							self['fail']('Failed to raise IndexError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=212;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=213;
								self['assertFalse']($p['isinstance'](e, IndexError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=216;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_IndexError'] = $method;
			$pyjs.track.lineno=218;
			$method = $pyjs__bind_method2('test_KeyError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:218};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=218;
				$pyjs.track.lineno=219;
				e1 = $p['KeyError'];
				$pyjs.track.lineno=220;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,KeyError,$pyjs_try_err,$4,$3;
					$pyjs.track={module:'NoInlineCodeTest',lineno:220};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=220;
					$pyjs.track.lineno=221;
					KeyError = $p['bool'];
					$pyjs.track.lineno=222;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=223;
						a = (typeof ($3=$pyjs_kwargs_call(null, $p['dict'], null, null, [{a:$constant_int_1}])).__array != 'undefined'?
							((typeof $3.__array[$4='b']) != 'undefined'?$3.__array[$4]:
								$3.__getitem__($4)):
								$3.__getitem__('b'));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=228;
							self['fail']('Failed to raise KeyError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=225;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=226;
								self['assertFalse']($p['isinstance'](e, KeyError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=229;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_KeyError'] = $method;
			$pyjs.track.lineno=231;
			$method = $pyjs__bind_method2('test_LookupError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:231};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=231;
				$pyjs.track.lineno=232;
				e1 = $p['LookupError'];
				$pyjs.track.lineno=233;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,LookupError,e,$pyjs_try_err;
					$pyjs.track={module:'NoInlineCodeTest',lineno:233};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=233;
					$pyjs.track.lineno=234;
					LookupError = $p['bool'];
					$pyjs.track.lineno=235;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=236;
						a = $p['set']($p['list']([$constant_int_1]))['remove']($constant_int_2);
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=241;
							self['fail']('Failed to raise LookupError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=238;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=239;
								self['assertFalse']($p['isinstance'](e, LookupError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=242;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_LookupError'] = $method;
			$pyjs.track.lineno=244;
			$method = $pyjs__bind_method2('_test_NameError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:244};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=244;
				$pyjs.track.lineno=246;
				e1 = $p['NameError'];
				$pyjs.track.lineno=247;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var NameError,a,$pyjs_try_err,e;
					$pyjs.track={module:'NoInlineCodeTest',lineno:247};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=247;
					$pyjs.track.lineno=248;
					NameError = $p['bool'];
					$pyjs.track.lineno=249;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=250;
						a = (typeof nosuchname == "undefined"?$m.nosuchname:nosuchname);
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=255;
							self['fail']('Failed to raise NameError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=252;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=253;
								self['assertFalse']($p['isinstance'](e, NameError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=256;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_test_NameError'] = $method;
			$pyjs.track.lineno=258;
			$method = $pyjs__bind_method2('_test_RuntimeError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:258};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=258;
				$pyjs.track.lineno=260;
				e1 = $p['RuntimeError'];
				$pyjs.track.lineno=261;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,$iter1_nextval,$iter1_type,RuntimeError,$iter1_iter,$pyjs_try_err,$pyjs__trackstack_size_2,$iter1_array,v,e,k,$iter1_idx;
					$pyjs.track={module:'NoInlineCodeTest',lineno:261};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=261;
					$pyjs.track.lineno=262;
					RuntimeError = $p['bool'];
					$pyjs.track.lineno=263;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=264;
						a = $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:$constant_int_1, b:$constant_int_2, c:$constant_int_3}]);
						$pyjs.track.lineno=265;
						$pyjs__trackstack_size_2=$pyjs.trackstack.length;
						$iter1_iter = a['iteritems']();
						if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
							$iter1_type = 0;
						} else {
							$iter1_iter = $iter1_iter.__iter__();
							$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter1_idx = 0;
						while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
							var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
							k = $tupleassign1[0];
							v = $tupleassign1[1];
							$pyjs.track.lineno=266;
							a.__setitem__($p['sprintf']('_%s', k), v);
						}
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='NoInlineCodeTest';
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=271;
							self['fail']('Failed to raise RuntimeError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=268;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=269;
								self['assertFalse']($p['isinstance'](e, RuntimeError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=272;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_test_RuntimeError'] = $method;
			$pyjs.track.lineno=274;
			$method = $pyjs__bind_method2('test_StandardError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:274};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=274;
				$pyjs.track.lineno=275;
				e1 = $p['StandardError'];
				$pyjs.track.lineno=276;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,StandardError,$div10,$pyjs_try_err,$div9;
					$pyjs.track={module:'NoInlineCodeTest',lineno:276};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=276;
					$pyjs.track.lineno=277;
					StandardError = $p['bool'];
					$pyjs.track.lineno=278;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=279;
						a = (typeof ($div9=$constant_int_1)==typeof ($div10=$constant_int_0) && typeof $div9=='number' && $div10 !== 0?
							$div9/$div10:
							$p['op_div']($div9,$div10));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=284;
							self['fail']('Failed to raise StandardError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=281;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=282;
								self['assertFalse']($p['isinstance'](e, StandardError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=285;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_StandardError'] = $method;
			$pyjs.track.lineno=287;
			$method = $pyjs__bind_method2('_test_StopIteration', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:287};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=287;
				$pyjs.track.lineno=289;
				e1 = $p['StopIteration'];
				$pyjs.track.lineno=290;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var StopIteration,a,$pyjs_try_err,e,g;
					$pyjs.track={module:'NoInlineCodeTest',lineno:290};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=290;
					$pyjs.track.lineno=291;
					g = function() {
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
						$pyjs.track.module='NoInlineCodeTest';
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
						$pyjs.track.module='NoInlineCodeTest';
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
						$pyjs.track.module='NoInlineCodeTest';
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
						$pyjs.track.module='NoInlineCodeTest';
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
						
							$pyjs.track={module:'NoInlineCodeTest',lineno:291};$pyjs.trackstack.push($pyjs.track);
							$pyjs.track.module='NoInlineCodeTest';
							$pyjs.track.lineno=291;
							if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
								for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[0] = -1;
									throw $exc;
								}
								$pyjs.track.lineno=292;
								$pyjs.track.lineno=292;
								$yield_value = null;
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
					g.__name__ = 'g';

					g.__bind_type__ = 0;
					g.__args__ = [null,null];
					$pyjs.track.lineno=293;
					StopIteration = $p['bool'];
					$pyjs.track.lineno=294;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=295;
						a = g();
						$pyjs.track.lineno=296;
						a['next']();
						$pyjs.track.lineno=297;
						a['next']();
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=302;
							self['fail']('Failed to raise StopIteration');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=299;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=300;
								self['assertFalse']($p['isinstance'](e, StopIteration));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=303;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_test_StopIteration'] = $method;
			$pyjs.track.lineno=305;
			$method = $pyjs__bind_method2('test_TypeError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:305};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=305;
				$pyjs.track.lineno=306;
				e1 = $p['TypeError'];
				$pyjs.track.lineno=307;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,TypeError,e,$add2,$pyjs_try_err,$add1;
					$pyjs.track={module:'NoInlineCodeTest',lineno:307};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=307;
					$pyjs.track.lineno=308;
					TypeError = $p['bool'];
					$pyjs.track.lineno=309;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=310;
						a = (typeof ($add1=$constant_int_1)==typeof ($add2='a') && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=315;
							self['fail']('Failed to raise TypeError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=312;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=313;
								self['assertFalse']($p['isinstance'](e, TypeError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=316;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_TypeError'] = $method;
			$pyjs.track.lineno=318;
			$method = $pyjs__bind_method2('test_ValueError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:318};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=318;
				$pyjs.track.lineno=319;
				e1 = $p['ValueError'];
				$pyjs.track.lineno=320;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,$pyjs_try_err,e,ValueError;
					$pyjs.track={module:'NoInlineCodeTest',lineno:320};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=320;
					$pyjs.track.lineno=321;
					ValueError = $p['bool'];
					$pyjs.track.lineno=322;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=323;
						a = $p['list']($p['list']([$constant_int_1]))['index']($constant_int_2);
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=328;
							self['fail']('Failed to raise ValueError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=325;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=326;
								self['assertFalse']($p['isinstance'](e, ValueError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=329;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ValueError'] = $method;
			$pyjs.track.lineno=331;
			$method = $pyjs__bind_method2('test_ZeroDivisionError', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e1,fn;
				$pyjs.track={module:'NoInlineCodeTest', lineno:331};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=331;
				$pyjs.track.lineno=332;
				e1 = $p['ZeroDivisionError'];
				$pyjs.track.lineno=333;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,e,$div11,$div12,ZeroDivisionError,$pyjs_try_err;
					$pyjs.track={module:'NoInlineCodeTest',lineno:333};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=333;
					$pyjs.track.lineno=334;
					ZeroDivisionError = $p['bool'];
					$pyjs.track.lineno=335;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=336;
						a = (typeof ($div11=$constant_int_1)==typeof ($div12=$constant_int_0) && typeof $div11=='number' && $div12 !== 0?
							$div11/$div12:
							$p['op_div']($div11,$div12));
						throw $p['TryElse'];
					} catch($pyjs_try_err) {
						$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
						$pyjs.__active_exception_stack__ = null;
						if ($pyjs_try_err.__name__ == 'TryElse') {
							$pyjs.track.lineno=341;
							self['fail']('Failed to raise ZeroDivisionError');
						} else {
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='NoInlineCodeTest';
							if (($pyjs_try_err_name == e1.__name__)||$p['_isinstance']($pyjs_try_err,e1)) {
								e = $pyjs_try_err;
								$pyjs.track.lineno=338;
								self['assertTrue']($p['isinstance'](e, e1));
								$pyjs.track.lineno=339;
								self['assertFalse']($p['isinstance'](e, ZeroDivisionError));
							} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
						}
					}
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=342;
				fn();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ZeroDivisionError'] = $method;
			$pyjs.track.lineno=344;
			$method = $pyjs__bind_method2('test_ArgsScoping', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '4ed9592d20555372275c24dedfaa6d23') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var args,fn,collection,kwargs;
				$pyjs.track={module:'NoInlineCodeTest', lineno:344};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NoInlineCodeTest';
				$pyjs.track.lineno=344;
				$pyjs.track.lineno=345;
				collection = $p['list']([]);
				$pyjs.track.lineno=346;
				fn = function(i) {
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
						if (typeof i != 'undefined') {
							if (i !== null && typeof i['$pyjs_is_kwarg'] != 'undefined') {
								kwargs = i;
								i = arguments[1];
							}
						} else {
						}
					}
					var $cmp1,$cmp2,$add3,$bool1,$add4;
					$pyjs.track={module:'NoInlineCodeTest',lineno:346};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='NoInlineCodeTest';
					$pyjs.track.lineno=346;
					$pyjs.track.lineno=347;
					if ((($bool1=((($cmp1=i)===($cmp2=$constant_int_2)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						$pyjs.track.lineno=348;
						fn((typeof ($add3=i)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4)));
					}
					$pyjs.track.lineno=349;
					collection['append']($p['tuple']([i, args, kwargs]));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return null;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = ['args',['kwargs'],['i']];
				$pyjs.track.lineno=350;
				args = $p['tuple']([$constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=351;
				kwargs = $pyjs_kwargs_call(null, $p['dict'], null, null, [{a:'a', b:'b'}]);
				$pyjs.track.lineno=352;
				collection['append']($p['tuple']([$constant_int_0, args, kwargs]));
				$pyjs.track.lineno=353;
				$pyjs_kwargs_call(null, fn, args, kwargs, [{}, $constant_int_1]);
				$pyjs.track.lineno=355;
				self['assertEqual'](collection, $p['list']([$p['tuple']([$constant_int_0, $p['tuple']([$constant_int_2, $constant_int_3]), $p['dict']([['a', 'a'], ['b', 'b']])]), $p['tuple']([$constant_int_2, $p['tuple']([]), $p['dict']([])]), $p['tuple']([$constant_int_1, $p['tuple']([$constant_int_2, $constant_int_3]), $p['dict']([['a', 'a'], ['b', 'b']])])]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_ArgsScoping'] = $method;
			$pyjs.track.lineno=10;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('NoInlineCodeTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end NoInlineCodeTest */


/* end module: NoInlineCodeTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'urllib', 'nosuchmodule']
*/
