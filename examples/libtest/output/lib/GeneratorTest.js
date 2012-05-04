/* start module: GeneratorTest */
$pyjs.loaded_modules['GeneratorTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GeneratorTest'].__was_initialized__) return $pyjs.loaded_modules['GeneratorTest'];
	var $m = $pyjs.loaded_modules["GeneratorTest"];
	$m.__repr__ = function() { return "<module: GeneratorTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GeneratorTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'GeneratorTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[2] = 'GeneratorTest.py, line 2:\n    from write import write, writebr';
		$m.__track_lines__[6] = 'GeneratorTest.py, line 6:\n    class GeneratorTest(UnitTest):';
		$m.__track_lines__[8] = 'GeneratorTest.py, line 8:\n    def testSimpleStatement(self):';
		$m.__track_lines__[9] = 'GeneratorTest.py, line 9:\n    def fn():';
		$m.__track_lines__[10] = 'GeneratorTest.py, line 10:\n    yield 1';
		$m.__track_lines__[11] = 'GeneratorTest.py, line 11:\n    yield 2';
		$m.__track_lines__[13] = 'GeneratorTest.py, line 13:\n    g = fn()';
		$m.__track_lines__[14] = 'GeneratorTest.py, line 14:\n    self.assertEqual(g.next(), 1)';
		$m.__track_lines__[15] = 'GeneratorTest.py, line 15:\n    self.assertEqual(g.next(), 2)';
		$m.__track_lines__[17] = 'GeneratorTest.py, line 17:\n    for i, g in enumerate(fn()):';
		$m.__track_lines__[18] = 'GeneratorTest.py, line 18:\n    self.assertEqual(i, g-1)';
		$m.__track_lines__[20] = 'GeneratorTest.py, line 20:\n    def fn(n):';
		$m.__track_lines__[21] = 'GeneratorTest.py, line 21:\n    i = 0';
		$m.__track_lines__[22] = 'GeneratorTest.py, line 22:\n    yield i';
		$m.__track_lines__[23] = 'GeneratorTest.py, line 23:\n    i += 1';
		$m.__track_lines__[24] = 'GeneratorTest.py, line 24:\n    j = i';
		$m.__track_lines__[25] = 'GeneratorTest.py, line 25:\n    yield i';
		$m.__track_lines__[26] = 'GeneratorTest.py, line 26:\n    yield j';
		$m.__track_lines__[27] = 'GeneratorTest.py, line 27:\n    j *= 100';
		$m.__track_lines__[28] = 'GeneratorTest.py, line 28:\n    i += j';
		$m.__track_lines__[29] = 'GeneratorTest.py, line 29:\n    yield j';
		$m.__track_lines__[30] = 'GeneratorTest.py, line 30:\n    yield i';
		$m.__track_lines__[31] = 'GeneratorTest.py, line 31:\n    yield n + i';
		$m.__track_lines__[33] = 'GeneratorTest.py, line 33:\n    r = []';
		$m.__track_lines__[34] = 'GeneratorTest.py, line 34:\n    for i in fn(8):';
		$m.__track_lines__[35] = 'GeneratorTest.py, line 35:\n    r.append(i)';
		$m.__track_lines__[36] = 'GeneratorTest.py, line 36:\n    self.assertEqual(r, [0, 1, 1, 100, 101, 109])';
		$m.__track_lines__[38] = 'GeneratorTest.py, line 38:\n    a = A()';
		$m.__track_lines__[39] = 'GeneratorTest.py, line 39:\n    r = []';
		$m.__track_lines__[40] = 'GeneratorTest.py, line 40:\n    for i in a.fn():';
		$m.__track_lines__[41] = 'GeneratorTest.py, line 41:\n    r.append(i)';
		$m.__track_lines__[42] = 'GeneratorTest.py, line 42:\n    self.assertEqual(r, [1,2])';
		$m.__track_lines__[44] = 'GeneratorTest.py, line 44:\n    def testSimpleFor(self):';
		$m.__track_lines__[45] = 'GeneratorTest.py, line 45:\n    def fn():';
		$m.__track_lines__[46] = 'GeneratorTest.py, line 46:\n    for i in [1,2]:';
		$m.__track_lines__[47] = 'GeneratorTest.py, line 47:\n    yield i';
		$m.__track_lines__[49] = 'GeneratorTest.py, line 49:\n    g = fn()';
		$m.__track_lines__[50] = 'GeneratorTest.py, line 50:\n    self.assertEqual(g.next(), 1)';
		$m.__track_lines__[51] = 'GeneratorTest.py, line 51:\n    self.assertEqual(g.next(), 2)';
		$m.__track_lines__[53] = 'GeneratorTest.py, line 53:\n    for i, g in enumerate(fn()):';
		$m.__track_lines__[54] = 'GeneratorTest.py, line 54:\n    self.assertEqual(i, g-1)';
		$m.__track_lines__[56] = 'GeneratorTest.py, line 56:\n    def testSimpleWhile(self):';
		$m.__track_lines__[57] = 'GeneratorTest.py, line 57:\n    def fn(n):';
		$m.__track_lines__[58] = 'GeneratorTest.py, line 58:\n    i = 0';
		$m.__track_lines__[59] = 'GeneratorTest.py, line 59:\n    while i < n:';
		$m.__track_lines__[60] = 'GeneratorTest.py, line 60:\n    yield i';
		$m.__track_lines__[61] = 'GeneratorTest.py, line 61:\n    yield i * 10';
		$m.__track_lines__[62] = 'GeneratorTest.py, line 62:\n    i += 1';
		$m.__track_lines__[64] = 'GeneratorTest.py, line 64:\n    r = []';
		$m.__track_lines__[65] = 'GeneratorTest.py, line 65:\n    for i in fn(4):';
		$m.__track_lines__[66] = 'GeneratorTest.py, line 66:\n    r.append(i)';
		$m.__track_lines__[67] = 'GeneratorTest.py, line 67:\n    self.assertEqual(r, [0, 0, 1, 10, 2, 20, 3, 30])';
		$m.__track_lines__[69] = 'GeneratorTest.py, line 69:\n    def fn(n):';
		$m.__track_lines__[70] = 'GeneratorTest.py, line 70:\n    i = 0';
		$m.__track_lines__[71] = 'GeneratorTest.py, line 71:\n    while i < n:';
		$m.__track_lines__[72] = 'GeneratorTest.py, line 72:\n    yield i';
		$m.__track_lines__[73] = 'GeneratorTest.py, line 73:\n    i = 100';
		$m.__track_lines__[74] = 'GeneratorTest.py, line 74:\n    yield i';
		$m.__track_lines__[75] = 'GeneratorTest.py, line 75:\n    i += 1';
		$m.__track_lines__[77] = 'GeneratorTest.py, line 77:\n    r = []';
		$m.__track_lines__[78] = 'GeneratorTest.py, line 78:\n    for i in fn(50):';
		$m.__track_lines__[79] = 'GeneratorTest.py, line 79:\n    r.append(i)';
		$m.__track_lines__[80] = 'GeneratorTest.py, line 80:\n    self.assertEqual(r, [0, 100])';
		$m.__track_lines__[82] = 'GeneratorTest.py, line 82:\n    def fn():';
		$m.__track_lines__[83] = 'GeneratorTest.py, line 83:\n    y = 0';
		$m.__track_lines__[84] = 'GeneratorTest.py, line 84:\n    while y == 0:';
		$m.__track_lines__[85] = 'GeneratorTest.py, line 85:\n    y += 1';
		$m.__track_lines__[86] = 'GeneratorTest.py, line 86:\n    yield y';
		$m.__track_lines__[87] = 'GeneratorTest.py, line 87:\n    y += 1';
		$m.__track_lines__[88] = 'GeneratorTest.py, line 88:\n    yield y';
		$m.__track_lines__[90] = 'GeneratorTest.py, line 90:\n    r = []';
		$m.__track_lines__[91] = 'GeneratorTest.py, line 91:\n    for y in fn():';
		$m.__track_lines__[92] = 'GeneratorTest.py, line 92:\n    r.append(y)';
		$m.__track_lines__[93] = 'GeneratorTest.py, line 93:\n    self.assertEqual(r, [1, 2])';
		$m.__track_lines__[95] = 'GeneratorTest.py, line 95:\n    def testSimpleIfThenElse(self):';
		$m.__track_lines__[96] = 'GeneratorTest.py, line 96:\n    def fn(n):';
		$m.__track_lines__[97] = 'GeneratorTest.py, line 97:\n    while n < 3:';
		$m.__track_lines__[98] = 'GeneratorTest.py, line 98:\n    if n < 0:';
		$m.__track_lines__[99] = 'GeneratorTest.py, line 99:\n    yield "less than zero"';
		$m.__track_lines__[101] = 'GeneratorTest.py, line 101:\n    yield "zero"';
		$m.__track_lines__[103] = 'GeneratorTest.py, line 103:\n    yield "one"';
		$m.__track_lines__[105] = 'GeneratorTest.py, line 105:\n    yield "more than one"';
		$m.__track_lines__[106] = 'GeneratorTest.py, line 106:\n    n += 1';
		$m.__track_lines__[108] = 'GeneratorTest.py, line 108:\n    r = []';
		$m.__track_lines__[109] = 'GeneratorTest.py, line 109:\n    for i in fn(-1):';
		$m.__track_lines__[110] = 'GeneratorTest.py, line 110:\n    r.append(i)';
		$m.__track_lines__[111] = "GeneratorTest.py, line 111:\n    self.assertEqual(r, ['less than zero', 'zero', 'one', 'more than one'])";
		$m.__track_lines__[113] = 'GeneratorTest.py, line 113:\n    def testSimpleTryBody(self):';
		$m.__track_lines__[114] = 'GeneratorTest.py, line 114:\n    def fn():';
		$m.__track_lines__[115] = 'GeneratorTest.py, line 115:\n    i = 1';
		$m.__track_lines__[116] = 'GeneratorTest.py, line 116:\n    try:';
		$m.__track_lines__[117] = 'GeneratorTest.py, line 117:\n    yield i+1';
		$m.__track_lines__[118] = 'GeneratorTest.py, line 118:\n    yield i+2';
		$m.__track_lines__[120] = 'GeneratorTest.py, line 120:\n    pass';
		$m.__track_lines__[122] = 'GeneratorTest.py, line 122:\n    r = []';
		$m.__track_lines__[123] = 'GeneratorTest.py, line 123:\n    for i in fn():';
		$m.__track_lines__[124] = 'GeneratorTest.py, line 124:\n    r.append(i)';
		$m.__track_lines__[125] = 'GeneratorTest.py, line 125:\n    self.assertEqual(r, [2,3])';
		$m.__track_lines__[127] = 'GeneratorTest.py, line 127:\n    def fn():';
		$m.__track_lines__[128] = 'GeneratorTest.py, line 128:\n    y = 0';
		$m.__track_lines__[129] = 'GeneratorTest.py, line 129:\n    while y == 0:';
		$m.__track_lines__[130] = 'GeneratorTest.py, line 130:\n    try:';
		$m.__track_lines__[131] = 'GeneratorTest.py, line 131:\n    y += 1';
		$m.__track_lines__[132] = 'GeneratorTest.py, line 132:\n    yield y';
		$m.__track_lines__[133] = 'GeneratorTest.py, line 133:\n    y += 1';
		$m.__track_lines__[134] = 'GeneratorTest.py, line 134:\n    yield y';
		$m.__track_lines__[136] = 'GeneratorTest.py, line 136:\n    y += 2';
		$m.__track_lines__[137] = 'GeneratorTest.py, line 137:\n    yield y';
		$m.__track_lines__[139] = 'GeneratorTest.py, line 139:\n    r = []';
		$m.__track_lines__[140] = 'GeneratorTest.py, line 140:\n    for i in fn():';
		$m.__track_lines__[141] = 'GeneratorTest.py, line 141:\n    r.append(i)';
		$m.__track_lines__[142] = 'GeneratorTest.py, line 142:\n    self.assertEqual(r, [1,2,4])';
		$m.__track_lines__[144] = 'GeneratorTest.py, line 144:\n    def testSimpleTryExceptElseFinally(self):';
		$m.__track_lines__[145] = 'GeneratorTest.py, line 145:\n    def f():';
		$m.__track_lines__[146] = 'GeneratorTest.py, line 146:\n    try:';
		$m.__track_lines__[147] = 'GeneratorTest.py, line 147:\n    yield 1';
		$m.__track_lines__[148] = "GeneratorTest.py, line 148:\n    raise ZeroDivisionError('')";
		$m.__track_lines__[150] = 'GeneratorTest.py, line 150:\n    yield 2';
		$m.__track_lines__[151] = 'GeneratorTest.py, line 151:\n    self.assertEqual(list(f()), [1, 2])';
		$m.__track_lines__[153] = 'GeneratorTest.py, line 153:\n    def f():';
		$m.__track_lines__[154] = 'GeneratorTest.py, line 154:\n    try:';
		$m.__track_lines__[155] = 'GeneratorTest.py, line 155:\n    yield 1';
		$m.__track_lines__[156] = 'GeneratorTest.py, line 156:\n    try:';
		$m.__track_lines__[157] = 'GeneratorTest.py, line 157:\n    yield 3';
		$m.__track_lines__[158] = "GeneratorTest.py, line 158:\n    raise ZeroDivisionError('')";
		$m.__track_lines__[160] = 'GeneratorTest.py, line 160:\n    yield 4';
		$m.__track_lines__[161] = "GeneratorTest.py, line 161:\n    raise ZeroDivisionError('')";
		$m.__track_lines__[163] = 'GeneratorTest.py, line 163:\n    yield 2';
		$m.__track_lines__[164] = 'GeneratorTest.py, line 164:\n    self.assertEqual(list(f()), [1, 3, 4, 2])';
		$m.__track_lines__[167] = 'GeneratorTest.py, line 167:\n    def fn(n):';
		$m.__track_lines__[168] = 'GeneratorTest.py, line 168:\n    for i in range(n):';
		$m.__track_lines__[169] = 'GeneratorTest.py, line 169:\n    try:';
		$m.__track_lines__[170] = 'GeneratorTest.py, line 170:\n    if i == 0:';
		$m.__track_lines__[171] = 'GeneratorTest.py, line 171:\n    yield "try %d" % i';
		$m.__track_lines__[173] = 'GeneratorTest.py, line 173:\n    raise TypeError(i)';
		$m.__track_lines__[175] = 'GeneratorTest.py, line 175:\n    raise KeyError(i)';
		$m.__track_lines__[177] = 'GeneratorTest.py, line 177:\n    yield "TypeError %d (1)" % i';
		$m.__track_lines__[178] = 'GeneratorTest.py, line 178:\n    yield "TypeError %d (2)" % i';
		$m.__track_lines__[180] = 'GeneratorTest.py, line 180:\n    yield "Exception %d (1)" % i';
		$m.__track_lines__[181] = 'GeneratorTest.py, line 181:\n    yield "Exception %d (2)" % i';
		$m.__track_lines__[183] = 'GeneratorTest.py, line 183:\n    yield "else %d (1)" % i';
		$m.__track_lines__[184] = 'GeneratorTest.py, line 184:\n    yield "else %d (2)" % i';
		$m.__track_lines__[186] = 'GeneratorTest.py, line 186:\n    yield "finally %d (1)" % i';
		$m.__track_lines__[187] = 'GeneratorTest.py, line 187:\n    yield "finally %d (2)" % i';
		$m.__track_lines__[189] = 'GeneratorTest.py, line 189:\n    r = []';
		$m.__track_lines__[190] = 'GeneratorTest.py, line 190:\n    for i in fn(5):';
		$m.__track_lines__[191] = 'GeneratorTest.py, line 191:\n    r.append(i)';
		$m.__track_lines__[192] = "GeneratorTest.py, line 192:\n    self.assertEqual(r, ['try 0',";
		$m.__track_lines__[214] = 'GeneratorTest.py, line 214:\n    def fn(n):';
		$m.__track_lines__[215] = 'GeneratorTest.py, line 215:\n    for i in range(n):';
		$m.__track_lines__[216] = 'GeneratorTest.py, line 216:\n    try:';
		$m.__track_lines__[217] = 'GeneratorTest.py, line 217:\n    if i == 0:';
		$m.__track_lines__[218] = 'GeneratorTest.py, line 218:\n    yield "try %d" % i';
		$m.__track_lines__[220] = 'GeneratorTest.py, line 220:\n    raise TypeError(i)';
		$m.__track_lines__[222] = 'GeneratorTest.py, line 222:\n    raise KeyError(i)';
		$m.__track_lines__[224] = 'GeneratorTest.py, line 224:\n    break';
		$m.__track_lines__[226] = 'GeneratorTest.py, line 226:\n    yield "TypeError %d (1)" % i';
		$m.__track_lines__[227] = 'GeneratorTest.py, line 227:\n    yield "TypeError %d (2)" % i';
		$m.__track_lines__[229] = 'GeneratorTest.py, line 229:\n    yield "Exception %d (1)" % i';
		$m.__track_lines__[230] = 'GeneratorTest.py, line 230:\n    yield "Exception %d (2)" % i';
		$m.__track_lines__[232] = 'GeneratorTest.py, line 232:\n    yield "else %d (1)" % i';
		$m.__track_lines__[233] = 'GeneratorTest.py, line 233:\n    yield "else %d (2)" % i';
		$m.__track_lines__[235] = 'GeneratorTest.py, line 235:\n    yield "finally %d (1)" % i';
		$m.__track_lines__[236] = 'GeneratorTest.py, line 236:\n    yield "finally %d (2)" % i';
		$m.__track_lines__[238] = 'GeneratorTest.py, line 238:\n    r = []';
		$m.__track_lines__[239] = 'GeneratorTest.py, line 239:\n    for i in fn(5):';
		$m.__track_lines__[240] = 'GeneratorTest.py, line 240:\n    r.append(i)';
		$m.__track_lines__[241] = "GeneratorTest.py, line 241:\n    self.assertEqual(r, ['try 0',";
		$m.__track_lines__[262] = 'GeneratorTest.py, line 262:\n    def testSend(self):';
		$m.__track_lines__[263] = 'GeneratorTest.py, line 263:\n    def fn(value=None):';
		$m.__track_lines__[264] = 'GeneratorTest.py, line 264:\n    while True:';
		$m.__track_lines__[265] = 'GeneratorTest.py, line 265:\n    value = (yield value)';
		$m.__track_lines__[267] = 'GeneratorTest.py, line 267:\n    g = fn(1)';
		$m.__track_lines__[268] = 'GeneratorTest.py, line 268:\n    self.assertEqual(g.next(), 1)';
		$m.__track_lines__[269] = 'GeneratorTest.py, line 269:\n    self.assertEqual(g.next(), None)';
		$m.__track_lines__[270] = 'GeneratorTest.py, line 270:\n    self.assertEqual(g.send(2), 2)';
		$m.__track_lines__[272] = 'GeneratorTest.py, line 272:\n    def testThrow(self):';
		$m.__track_lines__[273] = 'GeneratorTest.py, line 273:\n    def fn():';
		$m.__track_lines__[274] = 'GeneratorTest.py, line 274:\n    yield 1';
		$m.__track_lines__[275] = 'GeneratorTest.py, line 275:\n    yield 2';
		$m.__track_lines__[277] = 'GeneratorTest.py, line 277:\n    g = fn()';
		$m.__track_lines__[278] = 'GeneratorTest.py, line 278:\n    try:';
		$m.__track_lines__[279] = "GeneratorTest.py, line 279:\n    r = g.throw(TypeError, 'test1')";
		$m.__track_lines__[280] = 'GeneratorTest.py, line 280:\n    self.fail("Exception expected (1)")';
		$m.__track_lines__[282] = "GeneratorTest.py, line 282:\n    self.assertTrue(e, 'test1')";
		$m.__track_lines__[283] = 'GeneratorTest.py, line 283:\n    try:';
		$m.__track_lines__[284] = 'GeneratorTest.py, line 284:\n    r = g.next()';
		$m.__track_lines__[285] = 'GeneratorTest.py, line 285:\n    self.fail("StopIteration expected (1)")';
		$m.__track_lines__[287] = 'GeneratorTest.py, line 287:\n    self.assertTrue(True)';
		$m.__track_lines__[289] = 'GeneratorTest.py, line 289:\n    g = fn()';
		$m.__track_lines__[290] = 'GeneratorTest.py, line 290:\n    self.assertEqual(g.next(), 1)';
		$m.__track_lines__[291] = 'GeneratorTest.py, line 291:\n    try:';
		$m.__track_lines__[292] = "GeneratorTest.py, line 292:\n    r = g.throw(TypeError, 'test2')";
		$m.__track_lines__[293] = 'GeneratorTest.py, line 293:\n    self.fail("Exception expected (2)")';
		$m.__track_lines__[295] = "GeneratorTest.py, line 295:\n    self.assertTrue(e, 'test2')";
		$m.__track_lines__[296] = 'GeneratorTest.py, line 296:\n    try:';
		$m.__track_lines__[297] = 'GeneratorTest.py, line 297:\n    r = g.next()';
		$m.__track_lines__[298] = 'GeneratorTest.py, line 298:\n    self.fail("StopIteration expected (2)")';
		$m.__track_lines__[300] = 'GeneratorTest.py, line 300:\n    self.assertTrue(True)';
		$m.__track_lines__[303] = 'GeneratorTest.py, line 303:\n    def fn():';
		$m.__track_lines__[304] = 'GeneratorTest.py, line 304:\n    try:';
		$m.__track_lines__[305] = 'GeneratorTest.py, line 305:\n    yield 1';
		$m.__track_lines__[306] = 'GeneratorTest.py, line 306:\n    yield 2';
		$m.__track_lines__[308] = 'GeneratorTest.py, line 308:\n    yield 3';
		$m.__track_lines__[310] = 'GeneratorTest.py, line 310:\n    g = fn()';
		$m.__track_lines__[311] = 'GeneratorTest.py, line 311:\n    try:';
		$m.__track_lines__[312] = "GeneratorTest.py, line 312:\n    r = g.throw(TypeError, 'test3')";
		$m.__track_lines__[313] = 'GeneratorTest.py, line 313:\n    self.fail("Exception expected (3)")';
		$m.__track_lines__[315] = "GeneratorTest.py, line 315:\n    self.assertTrue(e, 'test3')";
		$m.__track_lines__[317] = 'GeneratorTest.py, line 317:\n    g = fn()';
		$m.__track_lines__[318] = 'GeneratorTest.py, line 318:\n    self.assertEqual(g.next(), 1)';
		$m.__track_lines__[319] = 'GeneratorTest.py, line 319:\n    try:';
		$m.__track_lines__[320] = "GeneratorTest.py, line 320:\n    r = g.throw(TypeError, 'test4')";
		$m.__track_lines__[321] = 'GeneratorTest.py, line 321:\n    self.assertEqual(r, 3)';
		$m.__track_lines__[323] = 'GeneratorTest.py, line 323:\n    self.fail("No exception expected (4)")';
		$m.__track_lines__[324] = 'GeneratorTest.py, line 324:\n    try:';
		$m.__track_lines__[325] = 'GeneratorTest.py, line 325:\n    r = g.next()';
		$m.__track_lines__[326] = 'GeneratorTest.py, line 326:\n    self.fail("StopIteration expected (4)")';
		$m.__track_lines__[328] = 'GeneratorTest.py, line 328:\n    self.assertTrue(True)';
		$m.__track_lines__[330] = 'GeneratorTest.py, line 330:\n    def fn():';
		$m.__track_lines__[331] = 'GeneratorTest.py, line 331:\n    yield 1';
		$m.__track_lines__[332] = 'GeneratorTest.py, line 332:\n    raise StopIteration';
		$m.__track_lines__[333] = 'GeneratorTest.py, line 333:\n    yield 2';
		$m.__track_lines__[334] = 'GeneratorTest.py, line 334:\n    try:';
		$m.__track_lines__[335] = 'GeneratorTest.py, line 335:\n    for i in fn():';
		$m.__track_lines__[336] = 'GeneratorTest.py, line 336:\n    pass';
		$m.__track_lines__[338] = 'GeneratorTest.py, line 338:\n    pass';
		$m.__track_lines__[339] = 'GeneratorTest.py, line 339:\n    self.assertEqual(i, 1)';
		$m.__track_lines__[342] = 'GeneratorTest.py, line 342:\n    def testClose(self):';
		$m.__track_lines__[343] = 'GeneratorTest.py, line 343:\n    def fn():';
		$m.__track_lines__[344] = 'GeneratorTest.py, line 344:\n    yield 1';
		$m.__track_lines__[345] = 'GeneratorTest.py, line 345:\n    yield 2';
		$m.__track_lines__[347] = 'GeneratorTest.py, line 347:\n    g = fn()';
		$m.__track_lines__[348] = 'GeneratorTest.py, line 348:\n    try:';
		$m.__track_lines__[349] = 'GeneratorTest.py, line 349:\n    r = g.close()';
		$m.__track_lines__[350] = 'GeneratorTest.py, line 350:\n    self.assertEqual(r, None)';
		$m.__track_lines__[352] = 'GeneratorTest.py, line 352:\n    self.fail("No exception expected (1a)")';
		$m.__track_lines__[353] = 'GeneratorTest.py, line 353:\n    try:';
		$m.__track_lines__[354] = 'GeneratorTest.py, line 354:\n    r = g.next()';
		$m.__track_lines__[355] = 'GeneratorTest.py, line 355:\n    self.fail("StopIteration expected (1)")';
		$m.__track_lines__[357] = 'GeneratorTest.py, line 357:\n    self.assertTrue(True)';
		$m.__track_lines__[358] = 'GeneratorTest.py, line 358:\n    try:';
		$m.__track_lines__[359] = 'GeneratorTest.py, line 359:\n    r = g.close()';
		$m.__track_lines__[360] = 'GeneratorTest.py, line 360:\n    self.assertEqual(r, None)';
		$m.__track_lines__[362] = 'GeneratorTest.py, line 362:\n    self.fail("No exception expected (1b)")';
		$m.__track_lines__[364] = 'GeneratorTest.py, line 364:\n    g = fn()';
		$m.__track_lines__[365] = 'GeneratorTest.py, line 365:\n    self.assertEqual(g.next(), 1)';
		$m.__track_lines__[366] = 'GeneratorTest.py, line 366:\n    try:';
		$m.__track_lines__[367] = 'GeneratorTest.py, line 367:\n    r = g.close()';
		$m.__track_lines__[368] = 'GeneratorTest.py, line 368:\n    self.assertEqual(r, None)';
		$m.__track_lines__[370] = 'GeneratorTest.py, line 370:\n    self.fail("No exception expected (2)")';
		$m.__track_lines__[371] = 'GeneratorTest.py, line 371:\n    try:';
		$m.__track_lines__[372] = 'GeneratorTest.py, line 372:\n    r = g.next()';
		$m.__track_lines__[373] = 'GeneratorTest.py, line 373:\n    self.fail("StopIteration expected (2)")';
		$m.__track_lines__[375] = 'GeneratorTest.py, line 375:\n    self.assertTrue(True)';
		$m.__track_lines__[377] = 'GeneratorTest.py, line 377:\n    def fn():';
		$m.__track_lines__[378] = 'GeneratorTest.py, line 378:\n    try:';
		$m.__track_lines__[379] = 'GeneratorTest.py, line 379:\n    yield 1';
		$m.__track_lines__[381] = 'GeneratorTest.py, line 381:\n    yield 2';
		$m.__track_lines__[383] = 'GeneratorTest.py, line 383:\n    g = fn()';
		$m.__track_lines__[384] = 'GeneratorTest.py, line 384:\n    try:';
		$m.__track_lines__[385] = 'GeneratorTest.py, line 385:\n    r = g.close()';
		$m.__track_lines__[386] = 'GeneratorTest.py, line 386:\n    self.assertEqual(r, None)';
		$m.__track_lines__[388] = 'GeneratorTest.py, line 388:\n    self.fail("No exception expected (3)")';
		$m.__track_lines__[390] = 'GeneratorTest.py, line 390:\n    g = fn()';
		$m.__track_lines__[391] = 'GeneratorTest.py, line 391:\n    self.assertEqual(g.next(), 1)';
		$m.__track_lines__[392] = 'GeneratorTest.py, line 392:\n    try:';
		$m.__track_lines__[393] = 'GeneratorTest.py, line 393:\n    r = g.close()';
		$m.__track_lines__[394] = 'GeneratorTest.py, line 394:\n    self.fail("RuntimeError expected (4)")';
		$m.__track_lines__[396] = "GeneratorTest.py, line 396:\n    self.assertEqual(e[0], 'generator ignored GeneratorExit')";
		$m.__track_lines__[399] = 'GeneratorTest.py, line 399:\n    def testPEP255_fib(self):';
		$m.__track_lines__[402] = 'GeneratorTest.py, line 402:\n    def fib():';
		$m.__track_lines__[403] = 'GeneratorTest.py, line 403:\n    a, b = 0, 1';
		$m.__track_lines__[404] = 'GeneratorTest.py, line 404:\n    while 1:';
		$m.__track_lines__[405] = 'GeneratorTest.py, line 405:\n    yield b';
		$m.__track_lines__[406] = 'GeneratorTest.py, line 406:\n    a, b = b, a+b';
		$m.__track_lines__[408] = 'GeneratorTest.py, line 408:\n    g = fib()';
		$m.__track_lines__[409] = 'GeneratorTest.py, line 409:\n    r = []';
		$m.__track_lines__[410] = 'GeneratorTest.py, line 410:\n    for i in range(6):';
		$m.__track_lines__[411] = 'GeneratorTest.py, line 411:\n    r.append(g.next())';
		$m.__track_lines__[412] = 'GeneratorTest.py, line 412:\n    self.assertEqual(r, [1, 1, 2, 3, 5, 8])';
		$m.__track_lines__[414] = 'GeneratorTest.py, line 414:\n    def testPEP255_recursion(self):';
		$m.__track_lines__[415] = 'GeneratorTest.py, line 415:\n    me = None';
		$m.__track_lines__[416] = 'GeneratorTest.py, line 416:\n    def g():';
		$m.__track_lines__[417] = 'GeneratorTest.py, line 417:\n    i = me.next()';
		$m.__track_lines__[418] = 'GeneratorTest.py, line 418:\n    yield i';
		$m.__track_lines__[419] = 'GeneratorTest.py, line 419:\n    me = g()';
		$m.__track_lines__[420] = 'GeneratorTest.py, line 420:\n    try:';
		$m.__track_lines__[421] = 'GeneratorTest.py, line 421:\n    me.next()';
		$m.__track_lines__[422] = 'GeneratorTest.py, line 422:\n    self.fail("ValueError expected")';
		$m.__track_lines__[424] = "GeneratorTest.py, line 424:\n    self.assertEqual(e[0], 'generator already executing')";
		$m.__track_lines__[426] = 'GeneratorTest.py, line 426:\n    def testPEP255_return(self):';
		$m.__track_lines__[427] = 'GeneratorTest.py, line 427:\n    def f1():';
		$m.__track_lines__[428] = 'GeneratorTest.py, line 428:\n    try:';
		$m.__track_lines__[429] = 'GeneratorTest.py, line 429:\n    return';
		$m.__track_lines__[431] = 'GeneratorTest.py, line 431:\n    yield 1';
		$m.__track_lines__[432] = 'GeneratorTest.py, line 432:\n    self.assertEqual(list(f1()), [])';
		$m.__track_lines__[434] = 'GeneratorTest.py, line 434:\n    def f2():';
		$m.__track_lines__[435] = 'GeneratorTest.py, line 435:\n    try:';
		$m.__track_lines__[436] = 'GeneratorTest.py, line 436:\n    raise StopIteration';
		$m.__track_lines__[438] = 'GeneratorTest.py, line 438:\n    yield 42';
		$m.__track_lines__[439] = 'GeneratorTest.py, line 439:\n    self.assertEqual(list(f2()), [42])';
		$m.__track_lines__[442] = 'GeneratorTest.py, line 442:\n    def testPEP255_exceptionPropagation(self):';
		$m.__track_lines__[443] = 'GeneratorTest.py, line 443:\n    def f():';
		$m.__track_lines__[444] = 'GeneratorTest.py, line 444:\n    v = 1/0 # See issue #265';
		$m.__track_lines__[445] = "GeneratorTest.py, line 445:\n    return {}['not-there']";
		$m.__track_lines__[446] = 'GeneratorTest.py, line 446:\n    def g():';
		$m.__track_lines__[447] = 'GeneratorTest.py, line 447:\n    yield f()  # the zero division exception propagates';
		$m.__track_lines__[448] = "GeneratorTest.py, line 448:\n    yield 42   # and we'll never get here";
		$m.__track_lines__[449] = 'GeneratorTest.py, line 449:\n    k = g()';
		$m.__track_lines__[450] = 'GeneratorTest.py, line 450:\n    try:';
		$m.__track_lines__[451] = 'GeneratorTest.py, line 451:\n    k.next()';
		$m.__track_lines__[452] = 'GeneratorTest.py, line 452:\n    self.fail("Exception expected")';
		$m.__track_lines__[454] = 'GeneratorTest.py, line 454:\n    self.assertTrue(True)';
		$m.__track_lines__[456] = 'GeneratorTest.py, line 456:\n    self.assertTrue(True, "ZeroDivisionError expected")';
		$m.__track_lines__[457] = 'GeneratorTest.py, line 457:\n    try:';
		$m.__track_lines__[458] = 'GeneratorTest.py, line 458:\n    k.next()';
		$m.__track_lines__[459] = 'GeneratorTest.py, line 459:\n    self.fail("StopIteration expected")';
		$m.__track_lines__[461] = 'GeneratorTest.py, line 461:\n    self.assertTrue(True)';
		$m.__track_lines__[463] = 'GeneratorTest.py, line 463:\n    def testPEP255_tryExceptFinally(self):';
		$m.__track_lines__[464] = 'GeneratorTest.py, line 464:\n    def f():';
		$m.__track_lines__[465] = 'GeneratorTest.py, line 465:\n    try:';
		$m.__track_lines__[466] = 'GeneratorTest.py, line 466:\n    yield 1';
		$m.__track_lines__[467] = 'GeneratorTest.py, line 467:\n    try:';
		$m.__track_lines__[468] = 'GeneratorTest.py, line 468:\n    yield 2';
		$m.__track_lines__[469] = 'GeneratorTest.py, line 469:\n    raise ZeroDivisionError()';
		$m.__track_lines__[471] = 'GeneratorTest.py, line 471:\n    yield 3  # never get here';
		$m.__track_lines__[473] = 'GeneratorTest.py, line 473:\n    yield 4';
		$m.__track_lines__[474] = 'GeneratorTest.py, line 474:\n    yield 5';
		$m.__track_lines__[475] = 'GeneratorTest.py, line 475:\n    raise';
		$m.__track_lines__[477] = 'GeneratorTest.py, line 477:\n    yield 6';
		$m.__track_lines__[478] = 'GeneratorTest.py, line 478:\n    yield 7     # the "raise" above stops this';
		$m.__track_lines__[480] = 'GeneratorTest.py, line 480:\n    yield 8';
		$m.__track_lines__[481] = 'GeneratorTest.py, line 481:\n    yield 9';
		$m.__track_lines__[482] = 'GeneratorTest.py, line 482:\n    try:';
		$m.__track_lines__[483] = 'GeneratorTest.py, line 483:\n    x = 12';
		$m.__track_lines__[485] = 'GeneratorTest.py, line 485:\n    yield 10';
		$m.__track_lines__[486] = 'GeneratorTest.py, line 486:\n    yield 11';
		$m.__track_lines__[487] = 'GeneratorTest.py, line 487:\n    self.assertEqual(list(f()), [1, 2, 4, 5, 8, 9, 10, 11])';
		$m.__track_lines__[489] = 'GeneratorTest.py, line 489:\n    def testPEP255_exampleRecursive(self):';
		$m.__track_lines__[490] = 'GeneratorTest.py, line 490:\n    global inorder';
		$m.__track_lines__[493] = 'GeneratorTest.py, line 493:\n    def _inorder(t):';
		$m.__track_lines__[494] = 'GeneratorTest.py, line 494:\n    if t:';
		$m.__track_lines__[495] = 'GeneratorTest.py, line 495:\n    for x in inorder(t.left):';
		$m.__track_lines__[496] = 'GeneratorTest.py, line 496:\n    yield x';
		$m.__track_lines__[497] = 'GeneratorTest.py, line 497:\n    yield t.label';
		$m.__track_lines__[498] = 'GeneratorTest.py, line 498:\n    for x in inorder(t.right):';
		$m.__track_lines__[499] = 'GeneratorTest.py, line 499:\n    yield x';
		$m.__track_lines__[500] = 'GeneratorTest.py, line 500:\n    inorder = _inorder';
		$m.__track_lines__[503] = 'GeneratorTest.py, line 503:\n    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"';
		$m.__track_lines__[504] = 'GeneratorTest.py, line 504:\n    t = tree(s)';
		$m.__track_lines__[506] = "GeneratorTest.py, line 506:\n    res = ''";
		$m.__track_lines__[507] = 'GeneratorTest.py, line 507:\n    for x in t:';
		$m.__track_lines__[508] = 'GeneratorTest.py, line 508:\n    res += x';
		$m.__track_lines__[509] = 'GeneratorTest.py, line 509:\n    self.assertEqual(s, res)';
		$m.__track_lines__[511] = 'GeneratorTest.py, line 511:\n    def testPEP255_exampleNonRecursive(self):';
		$m.__track_lines__[512] = 'GeneratorTest.py, line 512:\n    global inorder';
		$m.__track_lines__[515] = 'GeneratorTest.py, line 515:\n    def _inorder(node):';
		$m.__track_lines__[516] = 'GeneratorTest.py, line 516:\n    stack = []';
		$m.__track_lines__[517] = 'GeneratorTest.py, line 517:\n    while node:';
		$m.__track_lines__[518] = 'GeneratorTest.py, line 518:\n    while node.left:';
		$m.__track_lines__[519] = 'GeneratorTest.py, line 519:\n    stack.append(node)';
		$m.__track_lines__[520] = 'GeneratorTest.py, line 520:\n    node = node.left';
		$m.__track_lines__[521] = 'GeneratorTest.py, line 521:\n    yield node.label';
		$m.__track_lines__[522] = 'GeneratorTest.py, line 522:\n    while not node.right:';
		$m.__track_lines__[523] = 'GeneratorTest.py, line 523:\n    try:';
		$m.__track_lines__[524] = 'GeneratorTest.py, line 524:\n    node = stack.pop()';
		$m.__track_lines__[526] = 'GeneratorTest.py, line 526:\n    return';
		$m.__track_lines__[527] = 'GeneratorTest.py, line 527:\n    yield node.label';
		$m.__track_lines__[528] = 'GeneratorTest.py, line 528:\n    node = node.right';
		$m.__track_lines__[529] = 'GeneratorTest.py, line 529:\n    inorder = _inorder';
		$m.__track_lines__[532] = 'GeneratorTest.py, line 532:\n    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"';
		$m.__track_lines__[533] = 'GeneratorTest.py, line 533:\n    t = tree(s)';
		$m.__track_lines__[535] = "GeneratorTest.py, line 535:\n    res = ''";
		$m.__track_lines__[536] = 'GeneratorTest.py, line 536:\n    for x in t:';
		$m.__track_lines__[537] = 'GeneratorTest.py, line 537:\n    res += x';
		$m.__track_lines__[538] = 'GeneratorTest.py, line 538:\n    self.assertEqual(s, res)';
		$m.__track_lines__[541] = 'GeneratorTest.py, line 541:\n    def testMixed(self):';
		$m.__track_lines__[542] = 'GeneratorTest.py, line 542:\n    def fn(value = None):';
		$m.__track_lines__[543] = 'GeneratorTest.py, line 543:\n    for i in [-1,0,1,2,3,4]:';
		$m.__track_lines__[544] = 'GeneratorTest.py, line 544:\n    if i < 0:';
		$m.__track_lines__[545] = 'GeneratorTest.py, line 545:\n    continue';
		$m.__track_lines__[547] = 'GeneratorTest.py, line 547:\n    yield 0';
		$m.__track_lines__[549] = 'GeneratorTest.py, line 549:\n    yield 1';
		$m.__track_lines__[550] = 'GeneratorTest.py, line 550:\n    i = 0';
		$m.__track_lines__[551] = 'GeneratorTest.py, line 551:\n    yield value';
		$m.__track_lines__[552] = 'GeneratorTest.py, line 552:\n    yield 2';
		$m.__track_lines__[554] = 'GeneratorTest.py, line 554:\n    try:';
		$m.__track_lines__[555] = 'GeneratorTest.py, line 555:\n    v = i/value';
		$m.__track_lines__[557] = 'GeneratorTest.py, line 557:\n    v = i';
		$m.__track_lines__[558] = 'GeneratorTest.py, line 558:\n    yield v';
		$m.__track_lines__[560] = 'GeneratorTest.py, line 560:\n    r = []';
		$m.__track_lines__[561] = 'GeneratorTest.py, line 561:\n    for i in fn():';
		$m.__track_lines__[562] = 'GeneratorTest.py, line 562:\n    r.append(i)';
		$m.__track_lines__[563] = 'GeneratorTest.py, line 563:\n    self.assertEqual(r, [0, 1, None, 2, 2, 3, 4])';
		$m.__track_lines__[565] = 'GeneratorTest.py, line 565:\n    def testGenExp(self):';
		$m.__track_lines__[567] = 'GeneratorTest.py, line 567:\n    g = (child for child in [1,2,3])';
		$m.__track_lines__[568] = 'GeneratorTest.py, line 568:\n    self.assertEqual(g.next(), 1)';
		$m.__track_lines__[569] = 'GeneratorTest.py, line 569:\n    self.assertEqual(g.next(), 2)';
		$m.__track_lines__[571] = 'GeneratorTest.py, line 571:\n    try:';
		$m.__track_lines__[572] = "GeneratorTest.py, line 572:\n    g.throw(KeyError, 'test')";
		$m.__track_lines__[574] = "GeneratorTest.py, line 574:\n    self.assertEqual(e[0], 'test')";
		$m.__track_lines__[576] = 'GeneratorTest.py, line 576:\n    if any(isinstance(child, int) for child in [1,2,3]):';
		$m.__track_lines__[577] = 'GeneratorTest.py, line 577:\n    self.assertTrue(True)';
		$m.__track_lines__[579] = 'GeneratorTest.py, line 579:\n    self.fail("any(isinstance(child, int) for child in [1,2,3])")';
		$m.__track_lines__[580] = "GeneratorTest.py, line 580:\n    if any(isinstance(child, int) for child in ['1','2','3']):";
		$m.__track_lines__[581] = 'GeneratorTest.py, line 581:\n    self.fail("any(isinstance(child, int) for child in [\'1\',\'2\',\'3\'])")';
		$m.__track_lines__[583] = 'GeneratorTest.py, line 583:\n    self.assertTrue(True)';
		$m.__track_lines__[586] = 'GeneratorTest.py, line 586:\n    a = A()';
		$m.__track_lines__[587] = 'GeneratorTest.py, line 587:\n    g = (child for child in a.fn())';
		$m.__track_lines__[588] = 'GeneratorTest.py, line 588:\n    self.assertEqual(g.next(), 1)';
		$m.__track_lines__[589] = 'GeneratorTest.py, line 589:\n    self.assertEqual(g.next(), 2)';
		$m.__track_lines__[591] = 'GeneratorTest.py, line 591:\n    def testTupleReturn(self):';
		$m.__track_lines__[592] = 'GeneratorTest.py, line 592:\n    lst = []';
		$m.__track_lines__[593] = 'GeneratorTest.py, line 593:\n    for t in enumerate([0,1,2]):';
		$m.__track_lines__[594] = 'GeneratorTest.py, line 594:\n    lst.append(t)';
		$m.__track_lines__[595] = 'GeneratorTest.py, line 595:\n    self.assertEqual(lst, [(0,0), (1,1), (2,2)])';
		$m.__track_lines__[597] = 'GeneratorTest.py, line 597:\n    lst = [t for t in enumerate([0,1,2])]';
		$m.__track_lines__[598] = 'GeneratorTest.py, line 598:\n    self.assertEqual(lst, [(0,0), (1,1), (2,2)])';
		$m.__track_lines__[600] = 'GeneratorTest.py, line 600:\n    class A(object):';
		$m.__track_lines__[601] = 'GeneratorTest.py, line 601:\n    def fn(self):';
		$m.__track_lines__[602] = 'GeneratorTest.py, line 602:\n    yield 1';
		$m.__track_lines__[603] = 'GeneratorTest.py, line 603:\n    yield 2';
		$m.__track_lines__[605] = 'GeneratorTest.py, line 605:\n    inorder = None';
		$m.__track_lines__[607] = 'GeneratorTest.py, line 607:\n    class Tree:';
		$m.__track_lines__[609] = 'GeneratorTest.py, line 609:\n    def __init__(self, label, left=None, right=None):';
		$m.__track_lines__[610] = 'GeneratorTest.py, line 610:\n    self.label = label';
		$m.__track_lines__[611] = 'GeneratorTest.py, line 611:\n    self.left = left';
		$m.__track_lines__[612] = 'GeneratorTest.py, line 612:\n    self.right = right';
		$m.__track_lines__[614] = 'GeneratorTest.py, line 614:\n    def __repr__(self, level=0, indent="    "):';
		$m.__track_lines__[615] = 'GeneratorTest.py, line 615:\n    s = level*indent + repr(self.label)';
		$m.__track_lines__[616] = 'GeneratorTest.py, line 616:\n    if self.left:';
		$m.__track_lines__[617] = 'GeneratorTest.py, line 617:\n    s = s + "\\n" + self.left.__repr__(level+1, indent)';
		$m.__track_lines__[618] = 'GeneratorTest.py, line 618:\n    if self.right:';
		$m.__track_lines__[619] = 'GeneratorTest.py, line 619:\n    s = s + "\\n" + self.right.__repr__(level+1, indent)';
		$m.__track_lines__[620] = 'GeneratorTest.py, line 620:\n    return s';
		$m.__track_lines__[622] = 'GeneratorTest.py, line 622:\n    def __iter__(self):';
		$m.__track_lines__[623] = 'GeneratorTest.py, line 623:\n    return inorder(self)';
		$m.__track_lines__[626] = 'GeneratorTest.py, line 626:\n    def tree(list):';
		$m.__track_lines__[627] = 'GeneratorTest.py, line 627:\n    n = len(list)';
		$m.__track_lines__[628] = 'GeneratorTest.py, line 628:\n    if n == 0:';
		$m.__track_lines__[629] = 'GeneratorTest.py, line 629:\n    return []';
		$m.__track_lines__[630] = 'GeneratorTest.py, line 630:\n    i = n / 2';
		$m.__track_lines__[631] = 'GeneratorTest.py, line 631:\n    return Tree(list[i], tree(list[:i]), tree(list[i+1:]))';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_101 = new $p['int'](101);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_109 = new $p['int'](109);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_42 = new $p['int'](42);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_5 = new $p['int'](5);
		$pyjs.track.module='GeneratorTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['write'] = $p['___import___']('write.write', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['writebr'] = $p['___import___']('write.writebr', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$m['GeneratorTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GeneratorTest';
			$cls_definition.__md5__ = '67c0dba314e80f45e5bdc6d6045c36eb';
			$pyjs.track.lineno=8;
			$method = $pyjs__bind_method2('testSimpleStatement', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_array,$iter1_iter,$iter2_type,$iter3_idx,$iter2_iter,$iter3_iter,$sub2,$sub1,$iter1_array,$iter1_nextval,$iter2_idx,$iter3_type,fn,a,$iter2_nextval,$iter1_type,g,i,r,$iter1_idx,$pyjs__trackstack_size_1,$iter3_nextval,$iter2_array;
				$pyjs.track={module:'GeneratorTest', lineno:8};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=8;
				$pyjs.track.lineno=9;
				fn = function() {
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:9};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=9;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=10;
							$pyjs.track.lineno=10;
							$yield_value = $constant_int_1;
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
							$pyjs.track.lineno=11;
							$pyjs.track.lineno=11;
							$yield_value = $constant_int_2;
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
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=13;
				g = fn();
				$pyjs.track.lineno=14;
				self['assertEqual'](g['next'](), $constant_int_1);
				$pyjs.track.lineno=15;
				self['assertEqual'](g['next'](), $constant_int_2);
				$pyjs.track.lineno=17;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = $p['enumerate'](fn());
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
					i = $tupleassign1[0];
					g = $tupleassign1[1];
					$pyjs.track.lineno=18;
					self['assertEqual'](i, (typeof ($sub1=g)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=20;
				fn = function(n) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $add9,$add12,i,j,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$mul4,$mul3,$mul2,$mul1,$add11;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:20};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=20;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=21;
							i = $constant_int_0;
							$pyjs.track.lineno=22;
							$pyjs.track.lineno=22;
							$yield_value = i;
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
							$pyjs.track.lineno=23;
							i = (typeof ($add7=i)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
								$add7+$add8:
								$p['op_add']($add7,$add8));
							$pyjs.track.lineno=24;
							j = i;
							$pyjs.track.lineno=25;
							$pyjs.track.lineno=25;
							$yield_value = i;
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
							$pyjs.track.lineno=26;
							$pyjs.track.lineno=26;
							$yield_value = j;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							$yielding = true;
							$generator_state[0] = 3;
							return $yield_value;
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=27;
							j = (typeof ($mul3=j)==typeof ($mul4=$constant_int_100) && typeof $mul3=='number'?
								$mul3*$mul4:
								$p['op_mul']($mul3,$mul4));
							$pyjs.track.lineno=28;
							i = (typeof ($add9=i)==typeof ($add10=j) && (typeof $add9=='number'||typeof $add9=='string')?
								$add9+$add10:
								$p['op_add']($add9,$add10));
							$pyjs.track.lineno=29;
							$pyjs.track.lineno=29;
							$yield_value = j;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							$yielding = true;
							$generator_state[0] = 4;
							return $yield_value;
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=30;
							$pyjs.track.lineno=30;
							$yield_value = i;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							$yielding = true;
							$generator_state[0] = 5;
							return $yield_value;
							$generator_state[0]=5;
						}
						if ($generator_state[0] == 5) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=31;
							$pyjs.track.lineno=31;
							$yield_value = (typeof ($add11=n)==typeof ($add12=i) && (typeof $add11=='number'||typeof $add11=='string')?
								$add11+$add12:
								$p['op_add']($add11,$add12));
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							$yielding = true;
							$generator_state[0] = 6;
							return $yield_value;
							$generator_state[0]=6;
						}
						if ($generator_state[0] == 6) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$generator_state[0]=7;
						}
						if ($generator_state[0] == 7) {
						}

						return;
					};
					return $generator;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null,['n']];
				$pyjs.track.lineno=33;
				r = $p['list']([]);
				$pyjs.track.lineno=34;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = fn($constant_int_8);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					$pyjs.track.lineno=35;
					r['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=36;
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_1, $constant_int_1, $constant_int_100, $constant_int_101, $constant_int_109]));
				$pyjs.track.lineno=38;
				a = (typeof A == "undefined"?$m.A:A)();
				$pyjs.track.lineno=39;
				r = $p['list']([]);
				$pyjs.track.lineno=40;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = a['fn']();
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					$pyjs.track.lineno=41;
					r['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=42;
				self['assertEqual'](r, $p['list']([$constant_int_1, $constant_int_2]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleStatement'] = $method;
			$pyjs.track.lineno=44;
			$method = $pyjs__bind_method2('testSimpleFor', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,g,$iter6_type,i,$iter6_array,$pyjs__trackstack_size_1,$sub3,$iter6_iter,$sub4,fn,$iter6_nextval;
				$pyjs.track={module:'GeneratorTest', lineno:44};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=44;
				$pyjs.track.lineno=45;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $iter5_nextval,$iter5_idx,i,$iter4_nextval,$iter5_array,$iter4_idx,$iter5_iter,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter5_type,$iter4_iter;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:45};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=45;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=46;
							$pyjs__trackstack_size_1=$pyjs.trackstack.length;
							$iter5_iter = $p['list']([$constant_int_1, $constant_int_2]);
							if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
								$iter5_type = 0;
							} else {
								$iter5_iter = $iter5_iter.__iter__();
								$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
							}
							$iter5_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									i = $iter5_nextval;
									$pyjs.track.lineno=47;
									$pyjs.track.lineno=47;
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
							$pyjs.track.module='GeneratorTest';
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
				$pyjs.track.lineno=49;
				g = fn();
				$pyjs.track.lineno=50;
				self['assertEqual'](g['next'](), $constant_int_1);
				$pyjs.track.lineno=51;
				self['assertEqual'](g['next'](), $constant_int_2);
				$pyjs.track.lineno=53;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = $p['enumerate'](fn());
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter6_nextval, 2, null);
					i = $tupleassign2[0];
					g = $tupleassign2[1];
					$pyjs.track.lineno=54;
					self['assertEqual'](i, (typeof ($sub3=g)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleFor'] = $method;
			$pyjs.track.lineno=56;
			$method = $pyjs__bind_method2('testSimpleWhile', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter9_array,$iter8_idx,$iter7_nextval,$iter9_iter,i,$iter7_iter,$iter7_array,$iter8_array,$iter9_idx,$iter9_type,$iter8_iter,r,$iter8_nextval,$iter9_nextval,$iter7_idx,y,$iter7_type,$pyjs__trackstack_size_1,$iter8_type,fn;
				$pyjs.track={module:'GeneratorTest', lineno:56};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=57;
				fn = function(n) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $cmp4,$mul8,$cmp1,$cmp3,$cmp2,i,$bool2,$add14,$add15,$add16,$bool1,$add13,$mul7,$mul6,$mul5;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:57};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=57;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=58;
							i = $constant_int_0;
							$pyjs.track.lineno=59;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state.splice(1, $generator_state.length-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool2=((($cmp3=i)===($cmp4=n)?0:
								(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
									($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
									$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
									false :
									(typeof $bool2=='object'?
										(typeof $bool2.__nonzero__=='function'?
											$bool2.__nonzero__() :
											(typeof $bool2.__len__=='function'?
												($bool2.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=60;
									$pyjs.track.lineno=60;
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
									$pyjs.track.lineno=61;
									$pyjs.track.lineno=61;
									$yield_value = (typeof ($mul7=i)==typeof ($mul8=$constant_int_10) && typeof $mul7=='number'?
										$mul7*$mul8:
										$p['op_mul']($mul7,$mul8));
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$pyjs.track.lineno=62;
									i = (typeof ($add15=i)==typeof ($add16=$constant_int_1) && (typeof $add15=='number'||typeof $add15=='string')?
										$add15+$add16:
										$p['op_add']($add15,$add16));
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							}
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
				fn.__args__ = [null,null,['n']];
				$pyjs.track.lineno=64;
				r = $p['list']([]);
				$pyjs.track.lineno=65;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter7_iter = fn($constant_int_4);
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					i = $iter7_nextval;
					$pyjs.track.lineno=66;
					r['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=67;
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_0, $constant_int_1, $constant_int_10, $constant_int_2, $constant_int_20, $constant_int_3, $constant_int_30]));
				$pyjs.track.lineno=69;
				fn = function(n) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $cmp5,$cmp7,$cmp6,i,$add20,$cmp8,$bool3,$add17,$bool4,$add18,$add19;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:69};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=69;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=70;
							i = $constant_int_0;
							$pyjs.track.lineno=71;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state.splice(1, $generator_state.length-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool4=((($cmp7=i)===($cmp8=n)?0:
								(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
									($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
									$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
									false :
									(typeof $bool4=='object'?
										(typeof $bool4.__nonzero__=='function'?
											$bool4.__nonzero__() :
											(typeof $bool4.__len__=='function'?
												($bool4.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=72;
									$pyjs.track.lineno=72;
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
									$pyjs.track.lineno=73;
									i = $constant_int_100;
									$pyjs.track.lineno=74;
									$pyjs.track.lineno=74;
									$yield_value = i;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$pyjs.track.lineno=75;
									i = (typeof ($add19=i)==typeof ($add20=$constant_int_1) && (typeof $add19=='number'||typeof $add19=='string')?
										$add19+$add20:
										$p['op_add']($add19,$add20));
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							}
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
				fn.__args__ = [null,null,['n']];
				$pyjs.track.lineno=77;
				r = $p['list']([]);
				$pyjs.track.lineno=78;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter8_iter = fn($constant_int_50);
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					i = $iter8_nextval;
					$pyjs.track.lineno=79;
					r['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=80;
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_100]));
				$pyjs.track.lineno=82;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $add28,$add21,$add23,$add22,$add25,$add24,$add27,$add26,$bool6,$bool5,y;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:82};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=82;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=83;
							y = $constant_int_0;
							$pyjs.track.lineno=84;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state.splice(1, $generator_state.length-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool6=$p['op_eq'](y, $constant_int_0)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
									false :
									(typeof $bool6=='object'?
										(typeof $bool6.__nonzero__=='function'?
											$bool6.__nonzero__() :
											(typeof $bool6.__len__=='function'?
												($bool6.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=85;
									y = (typeof ($add25=y)==typeof ($add26=$constant_int_1) && (typeof $add25=='number'||typeof $add25=='string')?
										$add25+$add26:
										$p['op_add']($add25,$add26));
									$pyjs.track.lineno=86;
									$pyjs.track.lineno=86;
									$yield_value = y;
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
									$pyjs.track.lineno=87;
									y = (typeof ($add27=y)==typeof ($add28=$constant_int_1) && (typeof $add27=='number'||typeof $add27=='string')?
										$add27+$add28:
										$p['op_add']($add27,$add28));
									$pyjs.track.lineno=88;
									$pyjs.track.lineno=88;
									$yield_value = y;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							}
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
				$pyjs.track.lineno=90;
				r = $p['list']([]);
				$pyjs.track.lineno=91;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter9_iter = fn();
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					y = $iter9_nextval;
					$pyjs.track.lineno=92;
					r['append'](y);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=93;
				self['assertEqual'](r, $p['list']([$constant_int_1, $constant_int_2]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleWhile'] = $method;
			$pyjs.track.lineno=95;
			$method = $pyjs__bind_method2('testSimpleIfThenElse', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,i,$iter10_array,r,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter10_idx,fn;
				$pyjs.track={module:'GeneratorTest', lineno:95};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=95;
				$pyjs.track.lineno=96;
				fn = function(n) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $add29,$add31,$bool10,$bool11,$add30,$bool13,$cmp9,$bool14,$cmp15,$cmp14,$add32,$cmp16,$cmp11,$cmp10,$cmp13,$cmp12,$bool8,$bool9,$bool12,$bool7;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:96};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=96;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=97;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state.splice(1, $generator_state.length-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool11=((($cmp13=n)===($cmp14=$constant_int_3)?0:
								(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
									($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
									$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
									false :
									(typeof $bool11=='object'?
										(typeof $bool11.__nonzero__=='function'?
											$bool11.__nonzero__() :
											(typeof $bool11.__len__=='function'?
												($bool11.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=98;
									$generator_state[3] = 0;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool12=((($cmp15=n)===($cmp16=$constant_int_0)?0:
										(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
											($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
											$p['cmp']($cmp15, $cmp16))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
											false :
											(typeof $bool12=='object'?
												(typeof $bool12.__nonzero__=='function'?
													$bool12.__nonzero__() :
													(typeof $bool12.__len__=='function'?
														($bool12.__len__()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=1;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=99;
											$pyjs.track.lineno=99;
											$yield_value = 'less than zero';
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									else if(($generator_state[2]==2)||($generator_state[2]<2&&((($bool13=$p['op_eq'](n, $constant_int_0)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
											false :
											(typeof $bool13=='object'?
												(typeof $bool13.__nonzero__=='function'?
													$bool13.__nonzero__() :
													(typeof $bool13.__len__=='function'?
														($bool13.__len__()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=2;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=101;
											$pyjs.track.lineno=101;
											$yield_value = 'zero';
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									else if(($generator_state[2]==3)||($generator_state[2]<3&&((($bool14=$p['op_eq'](n, $constant_int_1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
											false :
											(typeof $bool14=='object'?
												(typeof $bool14.__nonzero__=='function'?
													$bool14.__nonzero__() :
													(typeof $bool14.__len__=='function'?
														($bool14.__len__()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=3;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=103;
											$pyjs.track.lineno=103;
											$yield_value = 'one';
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									else if ($generator_state[2]==0||$generator_state[2]==4) {
										$generator_state[2]=4;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=105;
											$pyjs.track.lineno=105;
											$yield_value = 'more than one';
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									$generator_state[2]=0;
									$pyjs.track.lineno=106;
									n = (typeof ($add31=n)==typeof ($add32=$constant_int_1) && (typeof $add31=='number'||typeof $add31=='string')?
										$add31+$add32:
										$p['op_add']($add31,$add32));
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
								}
							}
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
				fn.__args__ = [null,null,['n']];
				$pyjs.track.lineno=108;
				r = $p['list']([]);
				$pyjs.track.lineno=109;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter10_iter = fn((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					i = $iter10_nextval;
					$pyjs.track.lineno=110;
					r['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=111;
				self['assertEqual'](r, $p['list'](['less than zero', 'zero', 'one', 'more than one']));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleIfThenElse'] = $method;
			$pyjs.track.lineno=113;
			$method = $pyjs__bind_method2('testSimpleTryBody', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_type,$iter12_idx,i,$iter11_iter,$iter11_type,$iter12_array,$iter12_iter,r,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,$iter12_nextval,fn;
				$pyjs.track={module:'GeneratorTest', lineno:113};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=113;
				$pyjs.track.lineno=114;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $add38,$add39,i,$add33,$add36,$add37,$add34,$add35,$pyjs_try_err,$add40;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:114};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=114;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=115;
							i = $constant_int_1;
							$pyjs.track.lineno=116;
							var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$pyjs.track.lineno=117;
									$pyjs.track.lineno=117;
									$yield_value = (typeof ($add37=i)==typeof ($add38=$constant_int_1) && (typeof $add37=='number'||typeof $add37=='string')?
										$add37+$add38:
										$p['op_add']($add37,$add38));
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$pyjs.track.lineno=118;
									$pyjs.track.lineno=118;
									$yield_value = (typeof ($add39=i)==typeof ($add40=$constant_int_2) && (typeof $add39=='number'||typeof $add39=='string')?
										$add39+$add40:
										$p['op_add']($add39,$add40));
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 3;
									return $yield_value;
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
								}
							} catch($pyjs_try_err) {
								$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
								$pyjs.__active_exception_stack__ = null;
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
									$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
									$pyjs.track = $pyjs.trackstack.slice(-1)[0];
								}
								$pyjs.track.module='GeneratorTest';
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
										$pyjs.track.lineno=120;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=122;
				r = $p['list']([]);
				$pyjs.track.lineno=123;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter11_iter = fn();
				if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter.__iter__();
					$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					i = $iter11_nextval;
					$pyjs.track.lineno=124;
					r['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=125;
				self['assertEqual'](r, $p['list']([$constant_int_2, $constant_int_3]));
				$pyjs.track.lineno=127;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $add50,$add51,$add52,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$bool15,$add41,$add42,$pyjs_try_err,$bool16,y;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:127};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=127;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=128;
							y = $constant_int_0;
							$pyjs.track.lineno=129;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state.splice(1, $generator_state.length-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool16=$p['op_eq'](y, $constant_int_0)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
									false :
									(typeof $bool16=='object'?
										(typeof $bool16.__nonzero__=='function'?
											$bool16.__nonzero__() :
											(typeof $bool16.__len__=='function'?
												($bool16.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=130;
									var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									try {
										if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
											$generator_exc[0] = null;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											$pyjs.track.lineno=131;
											y = (typeof ($add47=y)==typeof ($add48=$constant_int_1) && (typeof $add47=='number'||typeof $add47=='string')?
												$add47+$add48:
												$p['op_add']($add47,$add48));
											$pyjs.track.lineno=132;
											$pyjs.track.lineno=132;
											$yield_value = y;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[2] = 2;
											return $yield_value;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$pyjs.track.lineno=133;
											y = (typeof ($add49=y)==typeof ($add50=$constant_int_1) && (typeof $add49=='number'||typeof $add49=='string')?
												$add49+$add50:
												$p['op_add']($add49,$add50));
											$pyjs.track.lineno=134;
											$pyjs.track.lineno=134;
											$yield_value = y;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[2] = 3;
											return $yield_value;
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
											$generator_state[2]=5;
										}
										if ($generator_state[2] == 5) {
										}
									} catch($pyjs_try_err) {
										$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
										$pyjs.__active_exception_stack__ = null;
										$generator_exc[0] = $pyjs_try_err;
										$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
										var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
										$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
										if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
											$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
											$pyjs.track = $pyjs.trackstack.slice(-1)[0];
										}
										$pyjs.track.module='GeneratorTest';
									} finally {
										if ($yielding === true) return $yield_value;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=136;
											y = (typeof ($add51=y)==typeof ($add52=$constant_int_2) && (typeof $add51=='number'||typeof $add51=='string')?
												$add51+$add52:
												$p['op_add']($add51,$add52));
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
										}
									}
									$generator_exc[0] = null;
									for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							}
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							$pyjs.track.lineno=137;
							$pyjs.track.lineno=137;
							$yield_value = y;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							$yielding = true;
							$generator_state[0] = 4;
							return $yield_value;
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$generator_state[0]=5;
						}
						if ($generator_state[0] == 5) {
						}

						return;
					};
					return $generator;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=139;
				r = $p['list']([]);
				$pyjs.track.lineno=140;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter12_iter = fn();
				if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter.__iter__();
					$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					i = $iter12_nextval;
					$pyjs.track.lineno=141;
					r['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=142;
				self['assertEqual'](r, $p['list']([$constant_int_1, $constant_int_2, $constant_int_4]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleTryBody'] = $method;
			$pyjs.track.lineno=144;
			$method = $pyjs__bind_method2('testSimpleTryExceptElseFinally', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,$iter18_iter,$iter15_iter,$iter18_array,f,i,$iter15_array,$iter15_idx,$iter18_idx,r,$iter15_nextval,$iter15_type,$iter18_nextval,$pyjs__trackstack_size_1,fn;
				$pyjs.track={module:'GeneratorTest', lineno:144};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=144;
				$pyjs.track.lineno=145;
				f = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $pyjs_try_err;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:145};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=145;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=146;
							var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$pyjs.track.lineno=147;
									$pyjs.track.lineno=147;
									$yield_value = $constant_int_1;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$pyjs.track.lineno=148;
									$generator_state[1]=3;
									$pyjs.__active_exception_stack__ = null;
									throw ($p['ZeroDivisionError'](''));
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
								}
							} catch($pyjs_try_err) {
								$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
								$pyjs.__active_exception_stack__ = null;
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
									$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
									$pyjs.track = $pyjs.trackstack.slice(-1)[0];
								}
								$pyjs.track.module='GeneratorTest';
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
										$pyjs.track.lineno=150;
										$pyjs.track.lineno=150;
										$yield_value = $constant_int_2;
										$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				f.__name__ = 'f';

				f.__bind_type__ = 0;
				f.__args__ = [null,null];
				$pyjs.track.lineno=151;
				self['assertEqual']($p['list'](f()), $p['list']([$constant_int_1, $constant_int_2]));
				$pyjs.track.lineno=153;
				f = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $pyjs_try_err;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:153};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=153;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=154;
							var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$pyjs.track.lineno=155;
									$pyjs.track.lineno=155;
									$yield_value = $constant_int_1;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$pyjs.track.lineno=156;
									var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									try {
										if (typeof $generator_exc[1] != 'undefined' && $generator_exc[1] !== null) throw $generator_exc[1];
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
											$generator_exc[1] = null;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											$pyjs.track.lineno=157;
											$pyjs.track.lineno=157;
											$yield_value = $constant_int_3;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[2] = 2;
											return $yield_value;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$pyjs.track.lineno=158;
											$generator_state[2]=3;
											$pyjs.__active_exception_stack__ = null;
											throw ($p['ZeroDivisionError'](''));
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
											$generator_state[2]=5;
										}
										if ($generator_state[2] == 5) {
										}
									} catch($pyjs_try_err) {
										$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_2 - 1);
										$pyjs.__active_exception_stack__ = null;
										$generator_exc[1] = $pyjs_try_err;
										$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
										var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
										$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
										if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
											$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
											$pyjs.track = $pyjs.trackstack.slice(-1)[0];
										}
										$pyjs.track.module='GeneratorTest';
										if (true) {
											if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
												for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
												$pyjs.track.lineno=160;
												$pyjs.track.lineno=160;
												$yield_value = $constant_int_4;
												$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
												$yielding = true;
												$generator_state[3] = 1;
												return $yield_value;
												$generator_state[3]=1;
											}
											if ($generator_state[3] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$generator_state[3]=2;
											}
											if ($generator_state[3] == 2) {
											}
										}
									}
									$generator_exc[1] = null;
									for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$pyjs.track.lineno=161;
									$generator_state[1]=5;
									$pyjs.__active_exception_stack__ = null;
									throw ($p['ZeroDivisionError'](''));
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
									$generator_state[1]=6;
								}
								if ($generator_state[1] == 6) {
									$generator_state[1]=7;
								}
								if ($generator_state[1] == 7) {
								}
							} catch($pyjs_try_err) {
								$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
								$pyjs.__active_exception_stack__ = null;
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
									$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
									$pyjs.track = $pyjs.trackstack.slice(-1)[0];
								}
								$pyjs.track.module='GeneratorTest';
								if (true) {
									if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
										for (var $i = 4 ; $i < ($generator_state.length<6?6:$generator_state.length); $i++) $generator_state[$i]=0;
										$pyjs.track.lineno=163;
										$pyjs.track.lineno=163;
										$yield_value = $constant_int_2;
										$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
										$yielding = true;
										$generator_state[4] = 1;
										return $yield_value;
										$generator_state[4]=1;
									}
									if ($generator_state[4] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[4] = -1;
											throw $exc;
										}
										$generator_state[4]=2;
									}
									if ($generator_state[4] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				f.__name__ = 'f';

				f.__bind_type__ = 0;
				f.__args__ = [null,null];
				$pyjs.track.lineno=164;
				self['assertEqual']($p['list'](f()), $p['list']([$constant_int_1, $constant_int_3, $constant_int_4, $constant_int_2]));
				$pyjs.track.lineno=167;
				fn = function(n) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $bool18,$bool19,$bool17,$cmp20,$iter13_idx,$iter13_array,$pyjs_try_err,$bool21,$bool20,$bool22,$iter13_type,$iter14_array,$iter14_type,$cmp17,$iter14_iter,e,$cmp19,$cmp18,$iter14_idx,$iter14_nextval,$iter13_nextval,$iter13_iter,i,$pyjs__trackstack_size_1;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:167};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=167;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=168;
							$pyjs__trackstack_size_1=$pyjs.trackstack.length;
							$iter14_iter = $p['range'](n);
							if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
								$iter14_type = 0;
							} else {
								$iter14_iter = $iter14_iter.__iter__();
								$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
							}
							$iter14_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									i = $iter14_nextval;
									$pyjs.track.lineno=169;
									var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									try {
										if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
											$generator_exc[0] = null;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											$pyjs.track.lineno=170;
											$generator_state[4] = 0;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											if(($generator_state[3]==1)||($generator_state[3]<1&&((($bool20=$p['op_eq'](i, $constant_int_0)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
													false :
													(typeof $bool20=='object'?
														(typeof $bool20.__nonzero__=='function'?
															$bool20.__nonzero__() :
															(typeof $bool20.__len__=='function'?
																($bool20.__len__()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=1;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state.length<6?6:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=171;
													$pyjs.track.lineno=171;
													$yield_value = $p['sprintf']('try %d', i);
													$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
													$yielding = true;
													$generator_state[4] = 1;
													return $yield_value;
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[4] = -1;
														throw $exc;
													}
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											else if(($generator_state[3]==2)||($generator_state[3]<2&&((($bool21=((($cmp19=i)===($cmp20=$constant_int_3)?0:
												(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
													($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
													$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
													false :
													(typeof $bool21=='object'?
														(typeof $bool21.__nonzero__=='function'?
															$bool21.__nonzero__() :
															(typeof $bool21.__len__=='function'?
																($bool21.__len__()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=2;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state.length<6?6:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=173;
													$generator_state[4]=1;
													$pyjs.__active_exception_stack__ = null;
													throw ($p['TypeError'](i));
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											else if(($generator_state[3]==3)||($generator_state[3]<3&&((($bool22=$p['op_eq'](i, $constant_int_3)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
													false :
													(typeof $bool22=='object'?
														(typeof $bool22.__nonzero__=='function'?
															$bool22.__nonzero__() :
															(typeof $bool22.__len__=='function'?
																($bool22.__len__()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=3;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state.length<6?6:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=175;
													$generator_state[4]=1;
													$pyjs.__active_exception_stack__ = null;
													throw ($p['KeyError'](i));
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											$generator_state[3]=0;
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											throw $p['TryElse'];
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
											$generator_state[2]=5;
										}
										if ($generator_state[2] == 5) {
										}
									} catch($pyjs_try_err) {
										$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_2 - 1);
										$pyjs.__active_exception_stack__ = null;
										$generator_exc[0] = $pyjs_try_err;
										if ($pyjs_try_err.__name__ == 'TryElse') {
											if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
												for (var $i = 5 ; $i < ($generator_state.length<7?7:$generator_state.length); $i++) $generator_state[$i]=0;
												$pyjs.track.lineno=183;
												$pyjs.track.lineno=183;
												$yield_value = $p['sprintf']('else %d (1)', i);
												$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
												$yielding = true;
												$generator_state[5] = 1;
												return $yield_value;
												$generator_state[5]=1;
											}
											if ($generator_state[5] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[5] = -1;
													throw $exc;
												}
												$pyjs.track.lineno=184;
												$pyjs.track.lineno=184;
												$yield_value = $p['sprintf']('else %d (2)', i);
												$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
												$yielding = true;
												$generator_state[5] = 2;
												return $yield_value;
												$generator_state[5]=2;
											}
											if ($generator_state[5] == 2) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[5] = -1;
													throw $exc;
												}
												$generator_state[5]=3;
											}
											if ($generator_state[5] == 3) {
											}
										} else {
											$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
											var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
											$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
											if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
												$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
												$pyjs.track = $pyjs.trackstack.slice(-1)[0];
											}
											$pyjs.track.module='GeneratorTest';
											if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
												e = $pyjs_try_err;
												if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
													for (var $i = 5 ; $i < ($generator_state.length<7?7:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=177;
													$pyjs.track.lineno=177;
													$yield_value = $p['sprintf']('TypeError %d (1)', i);
													$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
													$yielding = true;
													$generator_state[5] = 1;
													return $yield_value;
													$generator_state[5]=1;
												}
												if ($generator_state[5] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$pyjs.track.lineno=178;
													$pyjs.track.lineno=178;
													$yield_value = $p['sprintf']('TypeError %d (2)', i);
													$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
													$yielding = true;
													$generator_state[5] = 2;
													return $yield_value;
													$generator_state[5]=2;
												}
												if ($generator_state[5] == 2) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$generator_state[5]=3;
												}
												if ($generator_state[5] == 3) {
												}
											} else {
												if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
													for (var $i = 5 ; $i < ($generator_state.length<7?7:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=180;
													$pyjs.track.lineno=180;
													$yield_value = $p['sprintf']('Exception %d (1)', i);
													$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
													$yielding = true;
													$generator_state[5] = 1;
													return $yield_value;
													$generator_state[5]=1;
												}
												if ($generator_state[5] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$pyjs.track.lineno=181;
													$pyjs.track.lineno=181;
													$yield_value = $p['sprintf']('Exception %d (2)', i);
													$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
													$yielding = true;
													$generator_state[5] = 2;
													return $yield_value;
													$generator_state[5]=2;
												}
												if ($generator_state[5] == 2) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$generator_state[5]=3;
												}
												if ($generator_state[5] == 3) {
												}
											}
										}
									} finally {
										if ($yielding === true) return $yield_value;
										if (typeof $generator_state[6] == 'undefined' || $generator_state[6] === 0) {
											for (var $i = 6 ; $i < ($generator_state.length<8?8:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=186;
											$pyjs.track.lineno=186;
											$yield_value = $p['sprintf']('finally %d (1)', i);
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[6] = 1;
											return $yield_value;
											$generator_state[6]=1;
										}
										if ($generator_state[6] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[6] = -1;
												throw $exc;
											}
											$pyjs.track.lineno=187;
											$pyjs.track.lineno=187;
											$yield_value = $p['sprintf']('finally %d (2)', i);
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[6] = 2;
											return $yield_value;
											$generator_state[6]=2;
										}
										if ($generator_state[6] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[6] = -1;
												throw $exc;
											}
											$generator_state[6]=3;
										}
										if ($generator_state[6] == 3) {
										}
									}
									$generator_exc[0] = null;
									for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							}
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='GeneratorTest';
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
				fn.__args__ = [null,null,['n']];
				$pyjs.track.lineno=189;
				r = $p['list']([]);
				$pyjs.track.lineno=190;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter15_iter = fn($constant_int_5);
				if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter.__iter__();
					$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					i = $iter15_nextval;
					$pyjs.track.lineno=191;
					r['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=192;
				self['assertEqual'](r, $p['list'](['try 0', 'else 0 (1)', 'else 0 (2)', 'finally 0 (1)', 'finally 0 (2)', 'TypeError 1 (1)', 'TypeError 1 (2)', 'finally 1 (1)', 'finally 1 (2)', 'TypeError 2 (1)', 'TypeError 2 (2)', 'finally 2 (1)', 'finally 2 (2)', 'Exception 3 (1)', 'Exception 3 (2)', 'finally 3 (1)', 'finally 3 (2)', 'else 4 (1)', 'else 4 (2)', 'finally 4 (1)', 'finally 4 (2)']));
				$pyjs.track.lineno=214;
				fn = function(n) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $iter16_idx,$cmp21,$cmp22,$cmp23,$cmp24,$iter17_type,$iter16_iter,$iter17_iter,$iter16_type,$bool25,$bool24,$bool27,$pyjs_try_err,$bool23,$iter16_nextval,$bool28,$iter17_nextval,$iter17_array,$bool26,$iter16_array,e,i,$pyjs__trackstack_size_1,$iter17_idx;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:214};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=214;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=215;
							$pyjs__trackstack_size_1=$pyjs.trackstack.length;
							$iter17_iter = $p['range'](n);
							if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
								$iter17_type = 0;
							} else {
								$iter17_iter = $iter17_iter.__iter__();
								$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
							}
							$iter17_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									i = $iter17_nextval;
									$pyjs.track.lineno=216;
									var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									try {
										if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
											$generator_exc[0] = null;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											$pyjs.track.lineno=217;
											$generator_state[4] = 0;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											if(($generator_state[3]==1)||($generator_state[3]<1&&((($bool26=$p['op_eq'](i, $constant_int_0)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
													false :
													(typeof $bool26=='object'?
														(typeof $bool26.__nonzero__=='function'?
															$bool26.__nonzero__() :
															(typeof $bool26.__len__=='function'?
																($bool26.__len__()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=1;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state.length<6?6:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=218;
													$pyjs.track.lineno=218;
													$yield_value = $p['sprintf']('try %d', i);
													$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
													$yielding = true;
													$generator_state[4] = 1;
													return $yield_value;
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[4] = -1;
														throw $exc;
													}
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											else if(($generator_state[3]==2)||($generator_state[3]<2&&((($bool27=((($cmp23=i)===($cmp24=$constant_int_3)?0:
												(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
													($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
													$p['cmp']($cmp23, $cmp24))) == -1)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
													false :
													(typeof $bool27=='object'?
														(typeof $bool27.__nonzero__=='function'?
															$bool27.__nonzero__() :
															(typeof $bool27.__len__=='function'?
																($bool27.__len__()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=2;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state.length<6?6:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=220;
													$generator_state[4]=1;
													$pyjs.__active_exception_stack__ = null;
													throw ($p['TypeError'](i));
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											else if(($generator_state[3]==3)||($generator_state[3]<3&&((($bool28=$p['op_eq'](i, $constant_int_3)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
													false :
													(typeof $bool28=='object'?
														(typeof $bool28.__nonzero__=='function'?
															$bool28.__nonzero__() :
															(typeof $bool28.__len__=='function'?
																($bool28.__len__()>0 ?
																	true :
																	false) :
																true ) ) :
														 true ) )))) {
												$generator_state[3]=3;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state.length<6?6:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=222;
													$generator_state[4]=1;
													$pyjs.__active_exception_stack__ = null;
													throw ($p['KeyError'](i));
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											else if ($generator_state[3]==0||$generator_state[3]==4) {
												$generator_state[3]=4;
												if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
													for (var $i = 4 ; $i < ($generator_state.length<6?6:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=224;
													$generator_state[4]=1;
												}
												if ($generator_state[4] == 1) {
													break;
													$generator_state[4]=2;
												}
												if ($generator_state[4] == 2) {
												}
											}
											$generator_state[3]=0;
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											throw $p['TryElse'];
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
											$generator_state[2]=5;
										}
										if ($generator_state[2] == 5) {
										}
									} catch($pyjs_try_err) {
										$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_2 - 1);
										$pyjs.__active_exception_stack__ = null;
										$generator_exc[0] = $pyjs_try_err;
										if ($pyjs_try_err.__name__ == 'TryElse') {
											if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
												for (var $i = 5 ; $i < ($generator_state.length<7?7:$generator_state.length); $i++) $generator_state[$i]=0;
												$pyjs.track.lineno=232;
												$pyjs.track.lineno=232;
												$yield_value = $p['sprintf']('else %d (1)', i);
												$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
												$yielding = true;
												$generator_state[5] = 1;
												return $yield_value;
												$generator_state[5]=1;
											}
											if ($generator_state[5] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[5] = -1;
													throw $exc;
												}
												$pyjs.track.lineno=233;
												$pyjs.track.lineno=233;
												$yield_value = $p['sprintf']('else %d (2)', i);
												$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
												$yielding = true;
												$generator_state[5] = 2;
												return $yield_value;
												$generator_state[5]=2;
											}
											if ($generator_state[5] == 2) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[5] = -1;
													throw $exc;
												}
												$generator_state[5]=3;
											}
											if ($generator_state[5] == 3) {
											}
										} else {
											$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
											var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
											$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
											if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
												$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
												$pyjs.track = $pyjs.trackstack.slice(-1)[0];
											}
											$pyjs.track.module='GeneratorTest';
											if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
												e = $pyjs_try_err;
												if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
													for (var $i = 5 ; $i < ($generator_state.length<7?7:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=226;
													$pyjs.track.lineno=226;
													$yield_value = $p['sprintf']('TypeError %d (1)', i);
													$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
													$yielding = true;
													$generator_state[5] = 1;
													return $yield_value;
													$generator_state[5]=1;
												}
												if ($generator_state[5] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$pyjs.track.lineno=227;
													$pyjs.track.lineno=227;
													$yield_value = $p['sprintf']('TypeError %d (2)', i);
													$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
													$yielding = true;
													$generator_state[5] = 2;
													return $yield_value;
													$generator_state[5]=2;
												}
												if ($generator_state[5] == 2) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$generator_state[5]=3;
												}
												if ($generator_state[5] == 3) {
												}
											} else {
												if (typeof $generator_state[5] == 'undefined' || $generator_state[5] === 0) {
													for (var $i = 5 ; $i < ($generator_state.length<7?7:$generator_state.length); $i++) $generator_state[$i]=0;
													$pyjs.track.lineno=229;
													$pyjs.track.lineno=229;
													$yield_value = $p['sprintf']('Exception %d (1)', i);
													$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
													$yielding = true;
													$generator_state[5] = 1;
													return $yield_value;
													$generator_state[5]=1;
												}
												if ($generator_state[5] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$pyjs.track.lineno=230;
													$pyjs.track.lineno=230;
													$yield_value = $p['sprintf']('Exception %d (2)', i);
													$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
													$yielding = true;
													$generator_state[5] = 2;
													return $yield_value;
													$generator_state[5]=2;
												}
												if ($generator_state[5] == 2) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[5] = -1;
														throw $exc;
													}
													$generator_state[5]=3;
												}
												if ($generator_state[5] == 3) {
												}
											}
										}
									} finally {
										if ($yielding === true) return $yield_value;
										if (typeof $generator_state[6] == 'undefined' || $generator_state[6] === 0) {
											for (var $i = 6 ; $i < ($generator_state.length<8?8:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=235;
											$pyjs.track.lineno=235;
											$yield_value = $p['sprintf']('finally %d (1)', i);
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[6] = 1;
											return $yield_value;
											$generator_state[6]=1;
										}
										if ($generator_state[6] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[6] = -1;
												throw $exc;
											}
											$pyjs.track.lineno=236;
											$pyjs.track.lineno=236;
											$yield_value = $p['sprintf']('finally %d (2)', i);
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[6] = 2;
											return $yield_value;
											$generator_state[6]=2;
										}
										if ($generator_state[6] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[6] = -1;
												throw $exc;
											}
											$generator_state[6]=3;
										}
										if ($generator_state[6] == 3) {
										}
									}
									$generator_exc[0] = null;
									for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							}
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='GeneratorTest';
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
				fn.__args__ = [null,null,['n']];
				$pyjs.track.lineno=238;
				r = $p['list']([]);
				$pyjs.track.lineno=239;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter18_iter = fn($constant_int_5);
				if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
					$iter18_type = 0;
				} else {
					$iter18_iter = $iter18_iter.__iter__();
					$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter18_idx = 0;
				while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
					i = $iter18_nextval;
					$pyjs.track.lineno=240;
					r['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=241;
				self['assertEqual'](r, $p['list'](['try 0', 'else 0 (1)', 'else 0 (2)', 'finally 0 (1)', 'finally 0 (2)', 'TypeError 1 (1)', 'TypeError 1 (2)', 'finally 1 (1)', 'finally 1 (2)', 'TypeError 2 (1)', 'TypeError 2 (2)', 'finally 2 (1)', 'finally 2 (2)', 'Exception 3 (1)', 'Exception 3 (2)', 'finally 3 (1)', 'finally 3 (2)', 'finally 4 (1)', 'finally 4 (2)']));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSimpleTryExceptElseFinally'] = $method;
			$pyjs.track.lineno=262;
			$method = $pyjs__bind_method2('testSend', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var g,fn;
				$pyjs.track={module:'GeneratorTest', lineno:262};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=262;
				$pyjs.track.lineno=263;
				fn = function(value) {
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
					if (typeof value == 'undefined') value=arguments.callee.__args__[2][1];
					var $bool30,$bool29;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:263};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=263;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=264;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state.splice(1, $generator_state.length-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool30=true) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
									false :
									(typeof $bool30=='object'?
										(typeof $bool30.__nonzero__=='function'?
											$bool30.__nonzero__() :
											(typeof $bool30.__len__=='function'?
												($bool30.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=265;
									$pyjs.track.lineno=265;
									$yield_value = value;
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
									value = $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
								}
							}
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
				fn.__args__ = [null,null,['value', null]];
				$pyjs.track.lineno=267;
				g = fn($constant_int_1);
				$pyjs.track.lineno=268;
				self['assertEqual'](g['next'](), $constant_int_1);
				$pyjs.track.lineno=269;
				self['assertEqual'](g['next'](), null);
				$pyjs.track.lineno=270;
				self['assertEqual'](g['send']($constant_int_2), $constant_int_2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSend'] = $method;
			$pyjs.track.lineno=272;
			$method = $pyjs__bind_method2('testThrow', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter19_idx,e,g,$iter19_type,i,$iter19_array,$iter19_iter,$iter19_nextval,$pyjs_try_err,$pyjs__trackstack_size_2,r,fn;
				$pyjs.track={module:'GeneratorTest', lineno:272};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=272;
				$pyjs.track.lineno=273;
				fn = function() {
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:273};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=273;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=274;
							$pyjs.track.lineno=274;
							$yield_value = $constant_int_1;
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
							$pyjs.track.lineno=275;
							$pyjs.track.lineno=275;
							$yield_value = $constant_int_2;
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
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=277;
				g = fn();
				$pyjs.track.lineno=278;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=279;
					r = g['$$throw']($p['TypeError'], 'test1');
					$pyjs.track.lineno=280;
					self['fail']('Exception expected (1)');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=282;
						self['assertTrue'](e, 'test1');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=283;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=284;
					r = g['next']();
					$pyjs.track.lineno=285;
					self['fail']('StopIteration expected (1)');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs.track.lineno=287;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=289;
				g = fn();
				$pyjs.track.lineno=290;
				self['assertEqual'](g['next'](), $constant_int_1);
				$pyjs.track.lineno=291;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=292;
					r = g['$$throw']($p['TypeError'], 'test2');
					$pyjs.track.lineno=293;
					self['fail']('Exception expected (2)');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=295;
						self['assertTrue'](e, 'test2');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=296;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=297;
					r = g['next']();
					$pyjs.track.lineno=298;
					self['fail']('StopIteration expected (2)');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs.track.lineno=300;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=303;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $pyjs_try_err;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:303};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=303;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=304;
							var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$pyjs.track.lineno=305;
									$pyjs.track.lineno=305;
									$yield_value = $constant_int_1;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$pyjs.track.lineno=306;
									$pyjs.track.lineno=306;
									$yield_value = $constant_int_2;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 3;
									return $yield_value;
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
								}
							} catch($pyjs_try_err) {
								$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
								$pyjs.__active_exception_stack__ = null;
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
									$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
									$pyjs.track = $pyjs.trackstack.slice(-1)[0];
								}
								$pyjs.track.module='GeneratorTest';
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
										$pyjs.track.lineno=308;
										$pyjs.track.lineno=308;
										$yield_value = $constant_int_3;
										$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=310;
				g = fn();
				$pyjs.track.lineno=311;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=312;
					r = g['$$throw']($p['TypeError'], 'test3');
					$pyjs.track.lineno=313;
					self['fail']('Exception expected (3)');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=315;
						self['assertTrue'](e, 'test3');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=317;
				g = fn();
				$pyjs.track.lineno=318;
				self['assertEqual'](g['next'](), $constant_int_1);
				$pyjs.track.lineno=319;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=320;
					r = g['$$throw']($p['TypeError'], 'test4');
					$pyjs.track.lineno=321;
					self['assertEqual'](r, $constant_int_3);
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=323;
						self['fail']('No exception expected (4)');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=324;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=325;
					r = g['next']();
					$pyjs.track.lineno=326;
					self['fail']('StopIteration expected (4)');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs.track.lineno=328;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=330;
				fn = function() {
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:330};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=330;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=331;
							$pyjs.track.lineno=331;
							$yield_value = $constant_int_1;
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
							$pyjs.track.lineno=332;
							$generator_state[0]=2;
							$pyjs.__active_exception_stack__ = null;
							throw ($p['StopIteration']);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$pyjs.track.lineno=333;
							$pyjs.track.lineno=333;
							$yield_value = $constant_int_2;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							$yielding = true;
							$generator_state[0] = 3;
							return $yield_value;
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
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
				$pyjs.track.lineno=334;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=335;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter19_iter = fn();
					if (typeof ($iter19_array = $iter19_iter.__array) != 'undefined') {
						$iter19_type = 0;
					} else {
						$iter19_iter = $iter19_iter.__iter__();
						$iter19_type = typeof ($iter19_array = $iter19_iter.__array) != 'undefined'? 0 : (typeof $iter19_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter19_idx = 0;
					while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
						i = $iter19_nextval;
						$pyjs.track.lineno=336;
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs.track.lineno=338;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=339;
				self['assertEqual'](i, $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testThrow'] = $method;
			$pyjs.track.lineno=342;
			$method = $pyjs__bind_method2('testClose', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,g,$pyjs_try_err,r,$2,fn,$1;
				$pyjs.track={module:'GeneratorTest', lineno:342};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=342;
				$pyjs.track.lineno=343;
				fn = function() {
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:343};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=343;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=344;
							$pyjs.track.lineno=344;
							$yield_value = $constant_int_1;
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
							$pyjs.track.lineno=345;
							$pyjs.track.lineno=345;
							$yield_value = $constant_int_2;
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
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=347;
				g = fn();
				$pyjs.track.lineno=348;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=349;
					r = g['close']();
					$pyjs.track.lineno=350;
					self['assertEqual'](r, null);
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
					$pyjs.track.module='GeneratorTest';
					if (true) {
						$pyjs.track.lineno=352;
						self['fail']('No exception expected (1a)');
					}
				}
				$pyjs.track.lineno=353;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=354;
					r = g['next']();
					$pyjs.track.lineno=355;
					self['fail']('StopIteration expected (1)');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs.track.lineno=357;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=358;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=359;
					r = g['close']();
					$pyjs.track.lineno=360;
					self['assertEqual'](r, null);
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs.track.lineno=362;
						self['fail']('No exception expected (1b)');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=364;
				g = fn();
				$pyjs.track.lineno=365;
				self['assertEqual'](g['next'](), $constant_int_1);
				$pyjs.track.lineno=366;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=367;
					r = g['close']();
					$pyjs.track.lineno=368;
					self['assertEqual'](r, null);
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=370;
						self['fail']('No exception expected (2)');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=371;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=372;
					r = g['next']();
					$pyjs.track.lineno=373;
					self['fail']('StopIteration expected (2)');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs.track.lineno=375;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=377;
				fn = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $pyjs_try_err;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:377};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=377;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=378;
							var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$pyjs.track.lineno=379;
									$pyjs.track.lineno=379;
									$yield_value = $constant_int_1;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
								}
							} catch($pyjs_try_err) {
								$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
								$pyjs.__active_exception_stack__ = null;
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
									$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
									$pyjs.track = $pyjs.trackstack.slice(-1)[0];
								}
								$pyjs.track.module='GeneratorTest';
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
										$pyjs.track.lineno=381;
										$pyjs.track.lineno=381;
										$yield_value = $constant_int_2;
										$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null];
				$pyjs.track.lineno=383;
				g = fn();
				$pyjs.track.lineno=384;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=385;
					r = g['close']();
					$pyjs.track.lineno=386;
					self['assertEqual'](r, null);
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=388;
						self['fail']('No exception expected (3)');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=390;
				g = fn();
				$pyjs.track.lineno=391;
				self['assertEqual'](g['next'](), $constant_int_1);
				$pyjs.track.lineno=392;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=393;
					r = g['close']();
					$pyjs.track.lineno=394;
					self['fail']('RuntimeError expected (4)');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['RuntimeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['RuntimeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=396;
						self['assertEqual']((typeof ($1=e).__array != 'undefined'?
							((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
								$1.__getitem__($2)):
								$1.__getitem__($constant_int_0)), 'generator ignored GeneratorExit');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClose'] = $method;
			$pyjs.track.lineno=399;
			$method = $pyjs__bind_method2('testPEP255_fib', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_iter,$iter20_nextval,$iter20_type,$iter20_idx,g,i,fib,r,$pyjs__trackstack_size_1,$iter20_array;
				$pyjs.track={module:'GeneratorTest', lineno:399};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=399;
				$pyjs.track.lineno=402;
				fib = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var a,b,$add54,$add55,$add56,$bool31,$bool32,$add53;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:402};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=402;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=403;
							var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$constant_int_0, $constant_int_1]), 2, null);
							a = $tupleassign5[0];
							b = $tupleassign5[1];
							$pyjs.track.lineno=404;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state.splice(1, $generator_state.length-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool32=$constant_int_1) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
									false :
									(typeof $bool32=='object'?
										(typeof $bool32.__nonzero__=='function'?
											$bool32.__nonzero__() :
											(typeof $bool32.__len__=='function'?
												($bool32.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=405;
									$pyjs.track.lineno=405;
									$yield_value = b;
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
									$pyjs.track.lineno=406;
									var $tupleassign6 = $p['__ass_unpack']($p['tuple']([b, (typeof ($add55=a)==typeof ($add56=b) && (typeof $add55=='number'||typeof $add55=='string')?
										$add55+$add56:
										$p['op_add']($add55,$add56))]), 2, null);
									a = $tupleassign6[0];
									b = $tupleassign6[1];
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
								}
							}
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
				fib.__name__ = 'fib';

				fib.__bind_type__ = 0;
				fib.__args__ = [null,null];
				$pyjs.track.lineno=408;
				g = fib();
				$pyjs.track.lineno=409;
				r = $p['list']([]);
				$pyjs.track.lineno=410;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter20_iter = $p['range']($constant_int_6);
				if (typeof ($iter20_array = $iter20_iter.__array) != 'undefined') {
					$iter20_type = 0;
				} else {
					$iter20_iter = $iter20_iter.__iter__();
					$iter20_type = typeof ($iter20_array = $iter20_iter.__array) != 'undefined'? 0 : (typeof $iter20_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter20_idx = 0;
				while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
					i = $iter20_nextval;
					$pyjs.track.lineno=411;
					r['append'](g['next']());
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=412;
				self['assertEqual'](r, $p['list']([$constant_int_1, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_5, $constant_int_8]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_fib'] = $method;
			$pyjs.track.lineno=414;
			$method = $pyjs__bind_method2('testPEP255_recursion', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var me,e,g,$pyjs_try_err,$4,$3;
				$pyjs.track={module:'GeneratorTest', lineno:414};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=414;
				$pyjs.track.lineno=415;
				me = null;
				$pyjs.track.lineno=416;
				g = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var i;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:416};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=416;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=417;
							i = me['next']();
							$pyjs.track.lineno=418;
							$pyjs.track.lineno=418;
							$yield_value = i;
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
				$pyjs.track.lineno=419;
				me = g();
				$pyjs.track.lineno=420;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=421;
					me['next']();
					$pyjs.track.lineno=422;
					self['fail']('ValueError expected');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=424;
						self['assertEqual']((typeof ($3=e).__array != 'undefined'?
							((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
								$3.__getitem__($4)):
								$3.__getitem__($constant_int_0)), 'generator already executing');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_recursion'] = $method;
			$pyjs.track.lineno=426;
			$method = $pyjs__bind_method2('testPEP255_return', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f1,f2;
				$pyjs.track={module:'GeneratorTest', lineno:426};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=426;
				$pyjs.track.lineno=427;
				f1 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $pyjs_try_err;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:427};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=427;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=428;
							var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$pyjs.track.lineno=429;
									$pyjs.track.lineno=429;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									return;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							} catch($pyjs_try_err) {
								$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
								$pyjs.__active_exception_stack__ = null;
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
									$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
									$pyjs.track = $pyjs.trackstack.slice(-1)[0];
								}
								$pyjs.track.module='GeneratorTest';
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
										$pyjs.track.lineno=431;
										$pyjs.track.lineno=431;
										$yield_value = $constant_int_1;
										$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				f1.__name__ = 'f1';

				f1.__bind_type__ = 0;
				f1.__args__ = [null,null];
				$pyjs.track.lineno=432;
				self['assertEqual']($p['list'](f1()), $p['list']([]));
				$pyjs.track.lineno=434;
				f2 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $pyjs_try_err;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:434};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=434;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=435;
							var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$pyjs.track.lineno=436;
									$generator_state[1]=2;
									$pyjs.__active_exception_stack__ = null;
									throw ($p['StopIteration']);
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
								}
							} catch($pyjs_try_err) {
								$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
								$pyjs.__active_exception_stack__ = null;
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
									$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
									$pyjs.track = $pyjs.trackstack.slice(-1)[0];
								}
								$pyjs.track.module='GeneratorTest';
								if (true) {
									if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
										for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
										$pyjs.track.lineno=438;
										$pyjs.track.lineno=438;
										$yield_value = $constant_int_42;
										$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
										$yielding = true;
										$generator_state[2] = 1;
										return $yield_value;
										$generator_state[2]=1;
									}
									if ($generator_state[2] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[2] = -1;
											throw $exc;
										}
										$generator_state[2]=2;
									}
									if ($generator_state[2] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
						}

						return;
					};
					return $generator;
				};
				f2.__name__ = 'f2';

				f2.__bind_type__ = 0;
				f2.__args__ = [null,null];
				$pyjs.track.lineno=439;
				self['assertEqual']($p['list'](f2()), $p['list']([$constant_int_42]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_return'] = $method;
			$pyjs.track.lineno=442;
			$method = $pyjs__bind_method2('testPEP255_exceptionPropagation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,g,f,$pyjs_try_err,k;
				$pyjs.track={module:'GeneratorTest', lineno:442};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=442;
				$pyjs.track.lineno=443;
				f = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var $div2,$6,$5,$div1,v;
					$pyjs.track={module:'GeneratorTest',lineno:443};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='GeneratorTest';
					$pyjs.track.lineno=443;
					$pyjs.track.lineno=444;
					v = (typeof ($div1=$constant_int_1)==typeof ($div2=$constant_int_0) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
					$pyjs.track.lineno=445;
					$pyjs.track.lineno=445;
					var $pyjs__ret = (typeof ($5=$p['dict']([])).__array != 'undefined'?
						((typeof $5.__array[$6='not-there']) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__('not-there'));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				f.__name__ = 'f';

				f.__bind_type__ = 0;
				f.__args__ = [null,null];
				$pyjs.track.lineno=446;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:446};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=446;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=447;
							$pyjs.track.lineno=447;
							$yield_value = f();
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
							$pyjs.track.lineno=448;
							$pyjs.track.lineno=448;
							$yield_value = $constant_int_42;
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
				g.__name__ = 'g';

				g.__bind_type__ = 0;
				g.__args__ = [null,null];
				$pyjs.track.lineno=449;
				k = g();
				$pyjs.track.lineno=450;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=451;
					k['next']();
					$pyjs.track.lineno=452;
					self['fail']('Exception expected');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['ZeroDivisionError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ZeroDivisionError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=454;
						self['assertTrue'](true);
					} else {
						$pyjs.track.lineno=456;
						self['assertTrue'](true, 'ZeroDivisionError expected');
					}
				}
				$pyjs.track.lineno=457;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=458;
					k['next']();
					$pyjs.track.lineno=459;
					self['fail']('StopIteration expected');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs.track.lineno=461;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_exceptionPropagation'] = $method;
			$pyjs.track.lineno=463;
			$method = $pyjs__bind_method2('testPEP255_tryExceptFinally', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f;
				$pyjs.track={module:'GeneratorTest', lineno:463};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=463;
				$pyjs.track.lineno=464;
				f = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
					var x,$pyjs_try_err;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:464};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=464;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=465;
							var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$pyjs.track.lineno=466;
									$pyjs.track.lineno=466;
									$yield_value = $constant_int_1;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 2;
									return $yield_value;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$pyjs.track.lineno=467;
									var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									try {
										if (typeof $generator_exc[1] != 'undefined' && $generator_exc[1] !== null) throw $generator_exc[1];
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
											$generator_exc[1] = null;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											$pyjs.track.lineno=468;
											$pyjs.track.lineno=468;
											$yield_value = $constant_int_2;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[2] = 2;
											return $yield_value;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$pyjs.track.lineno=469;
											$generator_state[2]=3;
											$pyjs.__active_exception_stack__ = null;
											throw ($p['ZeroDivisionError']());
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											$pyjs.track.lineno=471;
											$pyjs.track.lineno=471;
											$yield_value = $constant_int_3;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[2] = 4;
											return $yield_value;
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$generator_state[2]=5;
										}
										if ($generator_state[2] == 5) {
											$generator_state[2]=6;
										}
										if ($generator_state[2] == 6) {
										}
									} catch($pyjs_try_err) {
										$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_2 - 1);
										$pyjs.__active_exception_stack__ = null;
										$generator_exc[1] = $pyjs_try_err;
										$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
										var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
										$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
										if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
											$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
											$pyjs.track = $pyjs.trackstack.slice(-1)[0];
										}
										$pyjs.track.module='GeneratorTest';
										if (($pyjs_try_err_name == $p['ZeroDivisionError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ZeroDivisionError'])) {
											if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
												for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
												$pyjs.track.lineno=473;
												$pyjs.track.lineno=473;
												$yield_value = $constant_int_4;
												$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
												$yielding = true;
												$generator_state[3] = 1;
												return $yield_value;
												$generator_state[3]=1;
											}
											if ($generator_state[3] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$pyjs.track.lineno=474;
												$pyjs.track.lineno=474;
												$yield_value = $constant_int_5;
												$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
												$yielding = true;
												$generator_state[3] = 2;
												return $yield_value;
												$generator_state[3]=2;
											}
											if ($generator_state[3] == 2) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$pyjs.track.lineno=475;
												$generator_state[3]=3;
												$pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__;
												$pyjs.__last_exception_stack__ = null;
												throw ($pyjs.__last_exception__?
													$pyjs.__last_exception__.error:
													$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
												$generator_state[3]=3;
											}
											if ($generator_state[3] == 3) {
												$generator_state[3]=4;
											}
											if ($generator_state[3] == 4) {
											}
										} else {
											if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
												for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
												$pyjs.track.lineno=477;
												$pyjs.track.lineno=477;
												$yield_value = $constant_int_6;
												$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
												$yielding = true;
												$generator_state[3] = 1;
												return $yield_value;
												$generator_state[3]=1;
											}
											if ($generator_state[3] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$generator_state[3]=2;
											}
											if ($generator_state[3] == 2) {
											}
										}
									}
									$generator_exc[1] = null;
									for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$pyjs.track.lineno=478;
									$pyjs.track.lineno=478;
									$yield_value = $constant_int_7;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[1] = 5;
									return $yield_value;
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[1] = -1;
										throw $exc;
									}
									$generator_state[1]=6;
								}
								if ($generator_state[1] == 6) {
									$generator_state[1]=7;
								}
								if ($generator_state[1] == 7) {
								}
							} catch($pyjs_try_err) {
								$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
								$pyjs.__active_exception_stack__ = null;
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
									$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
									$pyjs.track = $pyjs.trackstack.slice(-1)[0];
								}
								$pyjs.track.module='GeneratorTest';
								if (true) {
									if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
										for (var $i = 4 ; $i < ($generator_state.length<6?6:$generator_state.length); $i++) $generator_state[$i]=0;
										$pyjs.track.lineno=480;
										$pyjs.track.lineno=480;
										$yield_value = $constant_int_8;
										$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
										$yielding = true;
										$generator_state[4] = 1;
										return $yield_value;
										$generator_state[4]=1;
									}
									if ($generator_state[4] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[4] = -1;
											throw $exc;
										}
										$generator_state[4]=2;
									}
									if ($generator_state[4] == 2) {
									}
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							$pyjs.track.lineno=481;
							$pyjs.track.lineno=481;
							$yield_value = $constant_int_9;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							$yielding = true;
							$generator_state[0] = 3;
							return $yield_value;
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=482;
							var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
							try {
								if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$generator_exc[0] = null;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									$pyjs.track.lineno=483;
									x = $constant_int_12;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
								}
							} catch($pyjs_try_err) {
								$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
								$pyjs.__active_exception_stack__ = null;
								$generator_exc[0] = $pyjs_try_err;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
									$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
									$pyjs.track = $pyjs.trackstack.slice(-1)[0];
								}
								$pyjs.track.module='GeneratorTest';
							} finally {
								if ($yielding === true) return $yield_value;
								if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
									for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=485;
									$pyjs.track.lineno=485;
									$yield_value = $constant_int_10;
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[2] = 1;
									return $yield_value;
									$generator_state[2]=1;
								}
								if ($generator_state[2] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[2] = -1;
										throw $exc;
									}
									$generator_state[2]=2;
								}
								if ($generator_state[2] == 2) {
								}
							}
							$generator_exc[0] = null;
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[0]=5;
						}
						if ($generator_state[0] == 5) {
							$pyjs.track.lineno=486;
							$pyjs.track.lineno=486;
							$yield_value = $constant_int_11;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							$yielding = true;
							$generator_state[0] = 6;
							return $yield_value;
							$generator_state[0]=6;
						}
						if ($generator_state[0] == 6) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$generator_state[0]=7;
						}
						if ($generator_state[0] == 7) {
						}

						return;
					};
					return $generator;
				};
				f.__name__ = 'f';

				f.__bind_type__ = 0;
				f.__args__ = [null,null];
				$pyjs.track.lineno=487;
				self['assertEqual']($p['list'](f()), $p['list']([$constant_int_1, $constant_int_2, $constant_int_4, $constant_int_5, $constant_int_8, $constant_int_9, $constant_int_10, $constant_int_11]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_tryExceptFinally'] = $method;
			$pyjs.track.lineno=489;
			$method = $pyjs__bind_method2('testPEP255_exampleRecursive', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _inorder,$iter25_idx,$iter25_nextval,$add58,res,$add57,$iter25_iter,s,t,$iter25_type,$pyjs__trackstack_size_1,x,$iter25_array;
				$pyjs.track={module:'GeneratorTest', lineno:489};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=489;
				$pyjs.track.lineno=490;
				$pyjs.track.lineno=493;
				_inorder = function(t) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $iter23_type,$iter22_array,$iter23_idx,$iter22_type,$iter23_iter,$iter24_type,$iter24_iter,$iter24_nextval,$iter22_iter,$iter21_idx,$iter21_array,$iter21_nextval,$iter22_nextval,$iter21_iter,$iter23_array,$iter23_nextval,$iter24_idx,$iter22_idx,$iter21_type,$bool33,$iter24_array,$bool34,$pyjs__trackstack_size_1,x;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:493};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=493;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=494;
							$generator_state[2] = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							if(($generator_state[1]==1)||($generator_state[1]<1&&((($bool34=t) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
									false :
									(typeof $bool34=='object'?
										(typeof $bool34.__nonzero__=='function'?
											$bool34.__nonzero__() :
											(typeof $bool34.__len__=='function'?
												($bool34.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )))) {
								$generator_state[1]=1;
								if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
									for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=495;
									$pyjs__trackstack_size_1=$pyjs.trackstack.length;
									$iter23_iter = $m['inorder']($p['getattr'](t, 'left'));
									if (typeof ($iter23_array = $iter23_iter.__array) != 'undefined') {
										$iter23_type = 0;
									} else {
										$iter23_iter = $iter23_iter.__iter__();
										$iter23_type = typeof ($iter23_array = $iter23_iter.__array) != 'undefined'? 0 : (typeof $iter23_iter.$genfunc == 'function'? 1 : -1);
									}
									$iter23_idx = 0;
									$generator_state[2]=1;
								}
								if ($generator_state[2] == 1) {
									$generator_state[3] = 0;
									$generator_state[2]=2;
								}
								if ($generator_state[2] == 2) {
									for (;($generator_state[3] > 0 || typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined');$generator_state[3] = 0) {
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											x = $iter23_nextval;
											$pyjs.track.lineno=496;
											$pyjs.track.lineno=496;
											$yield_value = x;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
										$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
										$pyjs.track = $pyjs.trackstack.slice(-1)[0];
									}
									$pyjs.track.module='GeneratorTest';
									$generator_state[2]=3;
								}
								if ($generator_state[2] == 3) {
									$pyjs.track.lineno=497;
									$pyjs.track.lineno=497;
									$yield_value = $p['getattr'](t, '$$label');
									$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
									$yielding = true;
									$generator_state[2] = 4;
									return $yield_value;
									$generator_state[2]=4;
								}
								if ($generator_state[2] == 4) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[2] = -1;
										throw $exc;
									}
									$pyjs.track.lineno=498;
									$pyjs__trackstack_size_1=$pyjs.trackstack.length;
									$iter24_iter = $m['inorder']($p['getattr'](t, 'right'));
									if (typeof ($iter24_array = $iter24_iter.__array) != 'undefined') {
										$iter24_type = 0;
									} else {
										$iter24_iter = $iter24_iter.__iter__();
										$iter24_type = typeof ($iter24_array = $iter24_iter.__array) != 'undefined'? 0 : (typeof $iter24_iter.$genfunc == 'function'? 1 : -1);
									}
									$iter24_idx = 0;
									$generator_state[2]=5;
								}
								if ($generator_state[2] == 5) {
									$generator_state[3] = 0;
									$generator_state[2]=6;
								}
								if ($generator_state[2] == 6) {
									for (;($generator_state[3] > 0 || typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined');$generator_state[3] = 0) {
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											x = $iter24_nextval;
											$pyjs.track.lineno=499;
											$pyjs.track.lineno=499;
											$yield_value = x;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
										$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
										$pyjs.track = $pyjs.trackstack.slice(-1)[0];
									}
									$pyjs.track.module='GeneratorTest';
									$generator_state[2]=7;
								}
								if ($generator_state[2] == 7) {
									$generator_state[2]=8;
								}
								if ($generator_state[2] == 8) {
								}
							}
							$generator_state[1]=0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
						}

						return;
					};
					return $generator;
				};
				_inorder.__name__ = '_inorder';

				_inorder.__bind_type__ = 0;
				_inorder.__args__ = [null,null,['t']];
				$pyjs.track.lineno=500;
				$m['inorder'] = _inorder;
				$pyjs.track.lineno=503;
				s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
				$pyjs.track.lineno=504;
				t = (typeof tree == "undefined"?$m.tree:tree)(s);
				$pyjs.track.lineno=506;
				res = '';
				$pyjs.track.lineno=507;
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
					x = $iter25_nextval;
					$pyjs.track.lineno=508;
					res = (typeof ($add57=res)==typeof ($add58=x) && (typeof $add57=='number'||typeof $add57=='string')?
						$add57+$add58:
						$p['op_add']($add57,$add58));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=509;
				self['assertEqual'](s, res);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_exampleRecursive'] = $method;
			$pyjs.track.lineno=511;
			$method = $pyjs__bind_method2('testPEP255_exampleNonRecursive', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _inorder,$add60,$iter26_idx,$iter26_nextval,res,$pyjs__trackstack_size_1,$add59,$iter26_type,s,t,x,$iter26_array,$iter26_iter;
				$pyjs.track={module:'GeneratorTest', lineno:511};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=511;
				$pyjs.track.lineno=512;
				$pyjs.track.lineno=515;
				_inorder = function(node) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $bool42,$bool41,$bool40,$pyjs_try_err,$bool36,$bool37,$bool35,$bool38,$bool39,stack;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:515};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=515;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=516;
							stack = $p['list']([]);
							$pyjs.track.lineno=517;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state.splice(1, $generator_state.length-1);
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0)||((($bool39=node) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
									false :
									(typeof $bool39=='object'?
										(typeof $bool39.__nonzero__=='function'?
											$bool39.__nonzero__() :
											(typeof $bool39.__len__=='function'?
												($bool39.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=518;
									while ((($bool40=$p['getattr'](node, 'left')) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
											false :
											(typeof $bool40=='object'?
												(typeof $bool40.__nonzero__=='function'?
													$bool40.__nonzero__() :
													(typeof $bool40.__len__=='function'?
														($bool40.__len__()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )) {
										$pyjs.track.lineno=519;
										stack['append'](node);
										$pyjs.track.lineno=520;
										node = $p['getattr'](node, 'left');
									}
									$pyjs.track.lineno=521;
									$pyjs.track.lineno=521;
									$yield_value = $p['getattr'](node, '$$label');
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
									$pyjs.track.lineno=522;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
									$generator_state.splice(2, $generator_state.length-2);
									$generator_state[1]=3;
								}
								if ($generator_state[1] == 3) {
									for (;($generator_state[2] > 0)||((($bool42=!(($bool41=$p['getattr'](node, 'right')) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
										false :
										(typeof $bool41=='object'?
											(typeof $bool41.__nonzero__=='function'?
												$bool41.__nonzero__() :
												(typeof $bool41.__len__=='function'?
													($bool41.__len__()>0 ?
														true :
														false) :
													true ) ) :
											 true ) )) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
											false :
											(typeof $bool42=='object'?
												(typeof $bool42.__nonzero__=='function'?
													$bool42.__nonzero__() :
													(typeof $bool42.__len__=='function'?
														($bool42.__len__()>0 ?
															true :
															false) :
														true ) ) :
												 true ) ));$generator_state[2] = 0) {
										if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
											for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=523;
											var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
											$generator_state[2]=1;
										}
										if ($generator_state[2] == 1) {
											try {
												if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
												if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
													for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
													$generator_exc[0] = null;
													$generator_state[3]=1;
												}
												if ($generator_state[3] == 1) {
													$pyjs.track.lineno=524;
													node = stack['pop']();
													$generator_state[3]=2;
												}
												if ($generator_state[3] == 2) {
													$generator_state[3]=3;
												}
												if ($generator_state[3] == 3) {
												}
											} catch($pyjs_try_err) {
												$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
												$pyjs.__active_exception_stack__ = null;
												$generator_exc[0] = $pyjs_try_err;
												$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
												var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
												$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
												if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
													$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
													$pyjs.track = $pyjs.trackstack.slice(-1)[0];
												}
												$pyjs.track.module='GeneratorTest';
												if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
													if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
														for (var $i = 4 ; $i < ($generator_state.length<6?6:$generator_state.length); $i++) $generator_state[$i]=0;
														$pyjs.track.lineno=526;
														$pyjs.track.lineno=526;
														$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
														return;
														$generator_state[4]=1;
													}
													if ($generator_state[4] == 1) {
													}
												} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
											}
											$generator_exc[0] = null;
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											$generator_state[2]=2;
										}
										if ($generator_state[2] == 2) {
											$pyjs.track.lineno=527;
											$pyjs.track.lineno=527;
											$yield_value = $p['getattr'](node, '$$label');
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[2] = 3;
											return $yield_value;
											$generator_state[2]=3;
										}
										if ($generator_state[2] == 3) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[2] = -1;
												throw $exc;
											}
											$generator_state[2]=4;
										}
										if ($generator_state[2] == 4) {
										}
									}
									$generator_state[1]=4;
								}
								if ($generator_state[1] == 4) {
									$pyjs.track.lineno=528;
									node = $p['getattr'](node, 'right');
									$generator_state[1]=5;
								}
								if ($generator_state[1] == 5) {
								}
							}
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
				_inorder.__name__ = '_inorder';

				_inorder.__bind_type__ = 0;
				_inorder.__args__ = [null,null,['node']];
				$pyjs.track.lineno=529;
				$m['inorder'] = _inorder;
				$pyjs.track.lineno=532;
				s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
				$pyjs.track.lineno=533;
				t = (typeof tree == "undefined"?$m.tree:tree)(s);
				$pyjs.track.lineno=535;
				res = '';
				$pyjs.track.lineno=536;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter26_iter = t;
				if (typeof ($iter26_array = $iter26_iter.__array) != 'undefined') {
					$iter26_type = 0;
				} else {
					$iter26_iter = $iter26_iter.__iter__();
					$iter26_type = typeof ($iter26_array = $iter26_iter.__array) != 'undefined'? 0 : (typeof $iter26_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter26_idx = 0;
				while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
					x = $iter26_nextval;
					$pyjs.track.lineno=537;
					res = (typeof ($add59=res)==typeof ($add60=x) && (typeof $add59=='number'||typeof $add59=='string')?
						$add59+$add60:
						$p['op_add']($add59,$add60));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=538;
				self['assertEqual'](s, res);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testPEP255_exampleNonRecursive'] = $method;
			$pyjs.track.lineno=541;
			$method = $pyjs__bind_method2('testMixed', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter29_type,i,$iter29_nextval,$iter29_array,$pyjs__trackstack_size_1,$iter29_idx,r,$iter29_iter,fn;
				$pyjs.track={module:'GeneratorTest', lineno:541};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=541;
				$pyjs.track.lineno=542;
				fn = function(value) {
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
					if (typeof value == 'undefined') value=arguments.callee.__args__[2][1];
					var $iter28_idx,$cmp25,$cmp26,$div3,$cmp28,$iter27_nextval,$iter27_array,$pyjs_try_err,$iter27_iter,$cmp27,$iter27_type,$bool47,$bool46,$bool45,$bool44,$bool43,$pyjs__trackstack_size_1,$bool48,$iter28_iter,$iter28_type,$div6,$div4,$div5,$iter28_array,i,$iter28_nextval,$iter27_idx,v;
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					$pyjs.track.module='GeneratorTest';
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
					
						$pyjs.track={module:'GeneratorTest',lineno:542};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='GeneratorTest';
						$pyjs.track.lineno=542;
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$pyjs.track.lineno=543;
							$pyjs__trackstack_size_1=$pyjs.trackstack.length;
							$iter28_iter = $p['list']([(typeof ($usub3=$constant_int_1)=='number'?
								-$usub3:
								$p['op_usub']($usub3)), $constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
							if (typeof ($iter28_array = $iter28_iter.__array) != 'undefined') {
								$iter28_type = 0;
							} else {
								$iter28_iter = $iter28_iter.__iter__();
								$iter28_type = typeof ($iter28_array = $iter28_iter.__array) != 'undefined'? 0 : (typeof $iter28_iter.$genfunc == 'function'? 1 : -1);
							}
							$iter28_idx = 0;
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
									i = $iter28_nextval;
									$pyjs.track.lineno=544;
									$generator_state[3] = 0;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool46=((($cmp27=i)===($cmp28=$constant_int_0)?0:
										(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
											($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
											$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
											false :
											(typeof $bool46=='object'?
												(typeof $bool46.__nonzero__=='function'?
													$bool46.__nonzero__() :
													(typeof $bool46.__len__=='function'?
														($bool46.__len__()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=1;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=545;
											continue;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
										}
									}
									else if(($generator_state[2]==2)||($generator_state[2]<2&&((($bool47=$p['op_eq'](i, $constant_int_0)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
											false :
											(typeof $bool47=='object'?
												(typeof $bool47.__nonzero__=='function'?
													$bool47.__nonzero__() :
													(typeof $bool47.__len__=='function'?
														($bool47.__len__()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=2;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=547;
											$pyjs.track.lineno=547;
											$yield_value = $constant_int_0;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									else if(($generator_state[2]==3)||($generator_state[2]<3&&((($bool48=$p['op_eq'](i, $constant_int_1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
											false :
											(typeof $bool48=='object'?
												(typeof $bool48.__nonzero__=='function'?
													$bool48.__nonzero__() :
													(typeof $bool48.__len__=='function'?
														($bool48.__len__()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )))) {
										$generator_state[2]=3;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=549;
											$pyjs.track.lineno=549;
											$yield_value = $constant_int_1;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$pyjs.track.lineno=550;
											i = $constant_int_0;
											$pyjs.track.lineno=551;
											$pyjs.track.lineno=551;
											$yield_value = value;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 2;
											return $yield_value;
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$pyjs.track.lineno=552;
											$pyjs.track.lineno=552;
											$yield_value = $constant_int_2;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 3;
											return $yield_value;
											$generator_state[3]=3;
										}
										if ($generator_state[3] == 3) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=4;
										}
										if ($generator_state[3] == 4) {
										}
									}
									else if ($generator_state[2]==0||$generator_state[2]==4) {
										$generator_state[2]=4;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
											$pyjs.track.lineno=554;
											var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
											try {
												$pyjs.track.lineno=555;
												v = (typeof ($div5=i)==typeof ($div6=value) && typeof $div5=='number' && $div6 !== 0?
													$div5/$div6:
													$p['op_div']($div5,$div6));
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
												$pyjs.track.module='GeneratorTest';
												if (true) {
													$pyjs.track.lineno=557;
													v = i;
												}
											}
											$pyjs.track.lineno=558;
											$pyjs.track.lineno=558;
											$yield_value = v;
											$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									$generator_state[2]=0;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
								}
							}
							if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
								$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
								$pyjs.track = $pyjs.trackstack.slice(-1)[0];
							}
							$pyjs.track.module='GeneratorTest';
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
				fn.__args__ = [null,null,['value', null]];
				$pyjs.track.lineno=560;
				r = $p['list']([]);
				$pyjs.track.lineno=561;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter29_iter = fn();
				if (typeof ($iter29_array = $iter29_iter.__array) != 'undefined') {
					$iter29_type = 0;
				} else {
					$iter29_iter = $iter29_iter.__iter__();
					$iter29_type = typeof ($iter29_array = $iter29_iter.__array) != 'undefined'? 0 : (typeof $iter29_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter29_idx = 0;
				while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
					i = $iter29_nextval;
					$pyjs.track.lineno=562;
					r['append'](i);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=563;
				self['assertEqual'](r, $p['list']([$constant_int_0, $constant_int_1, null, $constant_int_2, $constant_int_2, $constant_int_3, $constant_int_4]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMixed'] = $method;
			$pyjs.track.lineno=565;
			$method = $pyjs__bind_method2('testGenExp', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter33_iter,$iter32_idx,$bool50,$iter32_nextval,$iter31_nextval,$iter33_nextval,$iter32_iter,$iter30_array,$iter33_type,$iter30_nextval,$iter31_idx,$iter32_type,$pyjs_try_err,$iter32_array,$iter30_type,$iter31_array,$bool49,$iter30_idx,$iter31_type,$8,child,$7,$iter33_idx,$iter33_array,a,e,g,$iter30_iter,$iter31_iter;
				$pyjs.track={module:'GeneratorTest', lineno:565};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=565;
				$pyjs.track.lineno=567;
				g = function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
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
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
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
					
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter30_iter = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
						if (typeof ($iter30_array = $iter30_iter.__array) != 'undefined') {
							$iter30_type = 0;
						} else {
							$iter30_iter = $iter30_iter.__iter__();
							$iter30_type = typeof ($iter30_array = $iter30_iter.__array) != 'undefined'? 0 : (typeof $iter30_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter30_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
								child = $iter30_nextval;
								$yield_value = child;
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
				}()
;
				$pyjs.track.lineno=568;
				self['assertEqual'](g['next'](), $constant_int_1);
				$pyjs.track.lineno=569;
				self['assertEqual'](g['next'](), $constant_int_2);
				$pyjs.track.lineno=571;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=572;
					g['$$throw']($p['KeyError'], 'test');
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
					$pyjs.track.module='GeneratorTest';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=574;
						self['assertEqual']((typeof ($7=e).__array != 'undefined'?
							((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
								$7.__getitem__($8)):
								$7.__getitem__($constant_int_0)), 'test');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=576;
				if ((($bool49=$p['any'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
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
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
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
					
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter31_iter = $p['list']([$constant_int_1, $constant_int_2, $constant_int_3]);
						if (typeof ($iter31_array = $iter31_iter.__array) != 'undefined') {
							$iter31_type = 0;
						} else {
							$iter31_iter = $iter31_iter.__iter__();
							$iter31_type = typeof ($iter31_array = $iter31_iter.__array) != 'undefined'? 0 : (typeof $iter31_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter31_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
								child = $iter31_nextval;
								$yield_value = $p['isinstance'](child, $p['int']);
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
				}()
)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
						false :
						(typeof $bool49=='object'?
							(typeof $bool49.__nonzero__=='function'?
								$bool49.__nonzero__() :
								(typeof $bool49.__len__=='function'?
									($bool49.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=577;
					self['assertTrue'](true);
				}
				else {
					$pyjs.track.lineno=579;
					self['fail']('any(isinstance(child, int) for child in [1,2,3])');
				}
				$pyjs.track.lineno=580;
				if ((($bool50=$p['any'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
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
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
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
					
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter32_iter = $p['list'](['1', '2', '3']);
						if (typeof ($iter32_array = $iter32_iter.__array) != 'undefined') {
							$iter32_type = 0;
						} else {
							$iter32_iter = $iter32_iter.__iter__();
							$iter32_type = typeof ($iter32_array = $iter32_iter.__array) != 'undefined'? 0 : (typeof $iter32_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter32_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter32_nextval=($iter32_type?($iter32_type > 0?$iter32_iter.next(true,false):$p['wrapped_next']($iter32_iter)):$iter32_array[$iter32_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
								child = $iter32_nextval;
								$yield_value = $p['isinstance'](child, $p['int']);
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
				}()
)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50.__nonzero__=='function'?
								$bool50.__nonzero__() :
								(typeof $bool50.__len__=='function'?
									($bool50.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=581;
					self['fail']("any(isinstance(child, int) for child in ['1','2','3'])");
				}
				else {
					$pyjs.track.lineno=583;
					self['assertTrue'](true);
				}
				$pyjs.track.lineno=586;
				a = (typeof A == "undefined"?$m.A:A)();
				$pyjs.track.lineno=587;
				g = function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
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
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
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
					
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter33_iter = a['fn']();
						if (typeof ($iter33_array = $iter33_iter.__array) != 'undefined') {
							$iter33_type = 0;
						} else {
							$iter33_iter = $iter33_iter.__iter__();
							$iter33_type = typeof ($iter33_array = $iter33_iter.__array) != 'undefined'? 0 : (typeof $iter33_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter33_idx = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof ($iter33_nextval=($iter33_type?($iter33_type > 0?$iter33_iter.next(true,false):$p['wrapped_next']($iter33_iter)):$iter33_array[$iter33_idx++])) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
								child = $iter33_nextval;
								$yield_value = child;
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
				}()
;
				$pyjs.track.lineno=588;
				self['assertEqual'](g['next'](), $constant_int_1);
				$pyjs.track.lineno=589;
				self['assertEqual'](g['next'](), $constant_int_2);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGenExp'] = $method;
			$pyjs.track.lineno=591;
			$method = $pyjs__bind_method2('testTupleReturn', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '67c0dba314e80f45e5bdc6d6045c36eb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter34_nextval,$iter34_array,$iter34_idx,lst,$iter34_iter,t,$pyjs__trackstack_size_1,$iter34_type;
				$pyjs.track={module:'GeneratorTest', lineno:591};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=591;
				$pyjs.track.lineno=592;
				lst = $p['list']([]);
				$pyjs.track.lineno=593;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter34_iter = $p['enumerate']($p['list']([$constant_int_0, $constant_int_1, $constant_int_2]));
				if (typeof ($iter34_array = $iter34_iter.__array) != 'undefined') {
					$iter34_type = 0;
				} else {
					$iter34_iter = $iter34_iter.__iter__();
					$iter34_type = typeof ($iter34_array = $iter34_iter.__array) != 'undefined'? 0 : (typeof $iter34_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter34_idx = 0;
				while (typeof ($iter34_nextval=($iter34_type?($iter34_type > 0?$iter34_iter.next(true,false):$p['wrapped_next']($iter34_iter)):$iter34_array[$iter34_idx++])) != 'undefined') {
					t = $iter34_nextval;
					$pyjs.track.lineno=594;
					lst['append'](t);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=595;
				self['assertEqual'](lst, $p['list']([$p['tuple']([$constant_int_0, $constant_int_0]), $p['tuple']([$constant_int_1, $constant_int_1]), $p['tuple']([$constant_int_2, $constant_int_2])]));
				$pyjs.track.lineno=597;
				lst = function(){
					var $iter35_idx,$iter35_nextval,$collcomp1,$iter35_type,t,$pyjs__trackstack_size_1,$iter35_array,$iter35_iter;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter35_iter = $p['enumerate']($p['list']([$constant_int_0, $constant_int_1, $constant_int_2]));
				if (typeof ($iter35_array = $iter35_iter.__array) != 'undefined') {
					$iter35_type = 0;
				} else {
					$iter35_iter = $iter35_iter.__iter__();
					$iter35_type = typeof ($iter35_array = $iter35_iter.__array) != 'undefined'? 0 : (typeof $iter35_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter35_idx = 0;
				while (typeof ($iter35_nextval=($iter35_type?($iter35_type > 0?$iter35_iter.next(true,false):$p['wrapped_next']($iter35_iter)):$iter35_array[$iter35_idx++])) != 'undefined') {
					t = $iter35_nextval;
					$collcomp1['append'](t);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='GeneratorTest';

	return $collcomp1;}();
				$pyjs.track.lineno=598;
				self['assertEqual'](lst, $p['list']([$p['tuple']([$constant_int_0, $constant_int_0]), $p['tuple']([$constant_int_1, $constant_int_1]), $p['tuple']([$constant_int_2, $constant_int_2])]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTupleReturn'] = $method;
			$pyjs.track.lineno=6;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('GeneratorTest', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=600;
		$m['A'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GeneratorTest';
			$cls_definition.__md5__ = '2d9f2a68b023a55bf94cf9f3eb666be7';
			$pyjs.track.lineno=601;
			$method = $pyjs__bind_method2('fn', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2d9f2a68b023a55bf94cf9f3eb666be7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

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
				$pyjs.track.module='GeneratorTest';
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
				$pyjs.track.module='GeneratorTest';
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
				$pyjs.track.module='GeneratorTest';
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
				$pyjs.track.module='GeneratorTest';
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
				
					$pyjs.track={module:'GeneratorTest',lineno:601};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='GeneratorTest';
					$pyjs.track.lineno=601;
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$pyjs.track.lineno=602;
						$pyjs.track.lineno=602;
						$yield_value = $constant_int_1;
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
						$pyjs.track.lineno=603;
						$pyjs.track.lineno=603;
						$yield_value = $constant_int_2;
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
			}
	, 1, [null,null,['self']]);
			$cls_definition['fn'] = $method;
			$pyjs.track.lineno=600;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('A', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=605;
		$m['inorder'] = null;
		$pyjs.track.lineno=607;
		$m['Tree'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'GeneratorTest';
			$cls_definition.__md5__ = '0723149834d6bb286a693c9146e7ba75';
			$pyjs.track.lineno=609;
			$method = $pyjs__bind_method2('__init__', function($$label, left, right) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					$$label = arguments[1];
					left = arguments[2];
					right = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0723149834d6bb286a693c9146e7ba75') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof left == 'undefined') left=arguments.callee.__args__[4][1];
				if (typeof right == 'undefined') right=arguments.callee.__args__[5][1];
				var $$label;
				$pyjs.track={module:'GeneratorTest', lineno:609};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=609;
				$pyjs.track.lineno=610;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$label', $$label) : $p['setattr'](self, '$$label', $$label); 
				$pyjs.track.lineno=611;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('left', left) : $p['setattr'](self, 'left', left); 
				$pyjs.track.lineno=612;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('right', right) : $p['setattr'](self, 'right', right); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['$$label'],['left', null],['right', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=614;
			$method = $pyjs__bind_method2('__repr__', function(level, indent) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					indent = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0723149834d6bb286a693c9146e7ba75') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof level == 'undefined') level=arguments.callee.__args__[3][1];
				if (typeof indent == 'undefined') indent=arguments.callee.__args__[4][1];
				var $bool51,$bool52,$add65,$add64,$add67,$add66,$add61,$add63,$add62,$add69,$add68,$add71,$mul9,$add74,$add72,$add73,$add70,$mul10,s;
				$pyjs.track={module:'GeneratorTest', lineno:614};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=614;
				$pyjs.track.lineno=615;
				s = (typeof ($add61=(typeof ($mul9=level)==typeof ($mul10=indent) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)))==typeof ($add62=$p['repr']($p['getattr'](self, '$$label'))) && (typeof $add61=='number'||typeof $add61=='string')?
					$add61+$add62:
					$p['op_add']($add61,$add62));
				$pyjs.track.lineno=616;
				if ((($bool51=$p['getattr'](self, 'left')) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
						false :
						(typeof $bool51=='object'?
							(typeof $bool51.__nonzero__=='function'?
								$bool51.__nonzero__() :
								(typeof $bool51.__len__=='function'?
									($bool51.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=617;
					s = (typeof ($add67=(typeof ($add63=s)==typeof ($add64='\n') && (typeof $add63=='number'||typeof $add63=='string')?
						$add63+$add64:
						$p['op_add']($add63,$add64)))==typeof ($add68=self['left']['__repr__']((typeof ($add65=level)==typeof ($add66=$constant_int_1) && (typeof $add65=='number'||typeof $add65=='string')?
						$add65+$add66:
						$p['op_add']($add65,$add66)), indent)) && (typeof $add67=='number'||typeof $add67=='string')?
						$add67+$add68:
						$p['op_add']($add67,$add68));
				}
				$pyjs.track.lineno=618;
				if ((($bool52=$p['getattr'](self, 'right')) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
						false :
						(typeof $bool52=='object'?
							(typeof $bool52.__nonzero__=='function'?
								$bool52.__nonzero__() :
								(typeof $bool52.__len__=='function'?
									($bool52.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=619;
					s = (typeof ($add73=(typeof ($add69=s)==typeof ($add70='\n') && (typeof $add69=='number'||typeof $add69=='string')?
						$add69+$add70:
						$p['op_add']($add69,$add70)))==typeof ($add74=self['right']['__repr__']((typeof ($add71=level)==typeof ($add72=$constant_int_1) && (typeof $add71=='number'||typeof $add71=='string')?
						$add71+$add72:
						$p['op_add']($add71,$add72)), indent)) && (typeof $add73=='number'||typeof $add73=='string')?
						$add73+$add74:
						$p['op_add']($add73,$add74));
				}
				$pyjs.track.lineno=620;
				$pyjs.track.lineno=620;
				var $pyjs__ret = s;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['level', $constant_int_0],['indent', '    ']]);
			$cls_definition['__repr__'] = $method;
			$pyjs.track.lineno=622;
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
					if (self.prototype.__md5__ !== '0723149834d6bb286a693c9146e7ba75') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'GeneratorTest', lineno:622};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='GeneratorTest';
				$pyjs.track.lineno=622;
				$pyjs.track.lineno=623;
				$pyjs.track.lineno=623;
				var $pyjs__ret = $m['inorder'](self);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=607;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Tree', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=626;
		$m['tree'] = function(list) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add76,$add75,$10,$bool53,i,$9,n,$div8,$len1,$div7;
			$pyjs.track={module:'GeneratorTest',lineno:626};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='GeneratorTest';
			$pyjs.track.lineno=626;
			$pyjs.track.lineno=627;
			n = (($len1=list) === null?$constant_int_0:
				(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
							$p['len']($len1)))));
			$pyjs.track.lineno=628;
			if ((($bool53=$p['op_eq'](n, $constant_int_0)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53.__nonzero__=='function'?
							$bool53.__nonzero__() :
							(typeof $bool53.__len__=='function'?
								($bool53.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=629;
				$pyjs.track.lineno=629;
				var $pyjs__ret = $p['list']([]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=630;
			i = (typeof ($div7=n)==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8));
			$pyjs.track.lineno=631;
			$pyjs.track.lineno=631;
			var $pyjs__ret = $m['Tree']((typeof ($9=list).__array != 'undefined'?
				((typeof $9.__array[$10=i]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(i)), $m['tree']($p['__getslice'](list, 0, i)), $m['tree']($p['__getslice'](list, (typeof ($add75=i)==typeof ($add76=$constant_int_1) && (typeof $add75=='number'||typeof $add75=='string')?
				$add75+$add76:
				$p['op_add']($add75,$add76)), null)));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['tree'].__name__ = 'tree';

		$m['tree'].__bind_type__ = 0;
		$m['tree'].__args__ = [null,null,['list']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end GeneratorTest */


/* end module: GeneratorTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'write.write', 'write', 'write.writebr']
*/
