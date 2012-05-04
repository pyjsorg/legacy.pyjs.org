/* start module: LongTypeTest */
$pyjs.loaded_modules['LongTypeTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LongTypeTest'].__was_initialized__) return $pyjs.loaded_modules['LongTypeTest'];
	var $m = $pyjs.loaded_modules["LongTypeTest"];
	$m.__repr__ = function() { return "<module: LongTypeTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LongTypeTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'LongTypeTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[2] = 'LongTypeTest.py, line 2:\n    import sys';
		$m.__track_lines__[3] = 'LongTypeTest.py, line 3:\n    import random';
		$m.__track_lines__[5] = 'LongTypeTest.py, line 5:\n    do_minimal_checks = True';
		$m.__track_lines__[6] = 'LongTypeTest.py, line 6:\n    do_all_checks = False';
		$m.__track_lines__[10] = 'LongTypeTest.py, line 10:\n    class test_support:';
		$m.__track_lines__[11] = 'LongTypeTest.py, line 11:\n    have_unicode = False';
		$m.__track_lines__[14] = 'LongTypeTest.py, line 14:\n    class Frm(object):';
		$m.__track_lines__[15] = 'LongTypeTest.py, line 15:\n    def __init__(self, format, *args):';
		$m.__track_lines__[16] = 'LongTypeTest.py, line 16:\n    self.format = format';
		$m.__track_lines__[17] = 'LongTypeTest.py, line 17:\n    if len(args) == 1 and isinstance(args[0], tuple):';
		$m.__track_lines__[18] = 'LongTypeTest.py, line 18:\n    self.args = args[0]';
		$m.__track_lines__[20] = 'LongTypeTest.py, line 20:\n    self.args = args';
		$m.__track_lines__[22] = 'LongTypeTest.py, line 22:\n    def __str__(self):';
		$m.__track_lines__[23] = 'LongTypeTest.py, line 23:\n    print self.format, self.args';
		$m.__track_lines__[24] = 'LongTypeTest.py, line 24:\n    return self.format % self.args';
		$m.__track_lines__[27] = 'LongTypeTest.py, line 27:\n    SHIFT = 15';
		$m.__track_lines__[28] = 'LongTypeTest.py, line 28:\n    BASE = 2 ** SHIFT';
		$m.__track_lines__[29] = 'LongTypeTest.py, line 29:\n    MASK = BASE - 1';
		$m.__track_lines__[30] = 'LongTypeTest.py, line 30:\n    KARATSUBA_CUTOFF = 70   # from longobject.c';
		$m.__track_lines__[34] = 'LongTypeTest.py, line 34:\n    MAXDIGITS = 15';
		$m.__track_lines__[37] = 'LongTypeTest.py, line 37:\n    special = map(long, [0, 1, 2, BASE, BASE >> 1])';
		$m.__track_lines__[38] = 'LongTypeTest.py, line 38:\n    special.append(0x5555555555555555L)';
		$m.__track_lines__[39] = 'LongTypeTest.py, line 39:\n    special.append(0xaaaaaaaaaaaaaaaaL)';
		$m.__track_lines__[41] = 'LongTypeTest.py, line 41:\n    p2 = 4L  # 0 and 1 already added';
		$m.__track_lines__[42] = 'LongTypeTest.py, line 42:\n    for i in range(2*SHIFT):';
		$m.__track_lines__[43] = 'LongTypeTest.py, line 43:\n    special.append(p2 - 1)';
		$m.__track_lines__[44] = 'LongTypeTest.py, line 44:\n    p2 = p2 << 1';
		$m.__track_lines__[45] = 'LongTypeTest.py, line 45:\n    del p2';
		$m.__track_lines__[47] = 'LongTypeTest.py, line 47:\n    special = special + map(lambda x: ~x, special) + \\';
		$m.__track_lines__[48] = 'LongTypeTest.py, line 48:\n    map(lambda x: -x, special)';
		$m.__track_lines__[50] = 'LongTypeTest.py, line 50:\n    L = [';
		$m.__track_lines__[70] = 'LongTypeTest.py, line 70:\n    class LongTypeTest(UnitTest):';
		$m.__track_lines__[74] = 'LongTypeTest.py, line 74:\n    def assert_(self, condition, msg=None):';
		$m.__track_lines__[75] = 'LongTypeTest.py, line 75:\n    if not condition:';
		$m.__track_lines__[76] = 'LongTypeTest.py, line 76:\n    if not msg:';
		$m.__track_lines__[77] = 'LongTypeTest.py, line 77:\n    msg = "assert condition is false"';
		$m.__track_lines__[78] = 'LongTypeTest.py, line 78:\n    raise Exception(msg)';
		$m.__track_lines__[80] = 'LongTypeTest.py, line 80:\n    def getran(self, ndigits):';
		$m.__track_lines__[81] = 'LongTypeTest.py, line 81:\n    self.assertTrue(ndigits > 0)';
		$m.__track_lines__[82] = 'LongTypeTest.py, line 82:\n    nbits_hi = ndigits * SHIFT';
		$m.__track_lines__[83] = 'LongTypeTest.py, line 83:\n    nbits_lo = nbits_hi - SHIFT + 1';
		$m.__track_lines__[84] = 'LongTypeTest.py, line 84:\n    answer = 0L';
		$m.__track_lines__[85] = 'LongTypeTest.py, line 85:\n    nbits = 0';
		$m.__track_lines__[86] = 'LongTypeTest.py, line 86:\n    r = int(random.random() * (SHIFT * 2)) | 1  # force 1 bits to start';
		$m.__track_lines__[87] = 'LongTypeTest.py, line 87:\n    while nbits < nbits_lo:';
		$m.__track_lines__[88] = 'LongTypeTest.py, line 88:\n    bits = (r >> 1) + 1';
		$m.__track_lines__[89] = 'LongTypeTest.py, line 89:\n    bits = min(bits, nbits_hi - nbits)';
		$m.__track_lines__[90] = 'LongTypeTest.py, line 90:\n    self.assertTrue(1 <= bits <= SHIFT)';
		$m.__track_lines__[91] = 'LongTypeTest.py, line 91:\n    nbits = nbits + bits';
		$m.__track_lines__[92] = 'LongTypeTest.py, line 92:\n    answer = answer << bits';
		$m.__track_lines__[93] = 'LongTypeTest.py, line 93:\n    if r & 1:';
		$m.__track_lines__[94] = 'LongTypeTest.py, line 94:\n    answer = answer | ((1 << bits) - 1)';
		$m.__track_lines__[95] = 'LongTypeTest.py, line 95:\n    r = int(random.random() * (SHIFT * 2))';
		$m.__track_lines__[96] = 'LongTypeTest.py, line 96:\n    self.assert_(nbits_lo <= nbits <= nbits_hi)';
		$m.__track_lines__[97] = 'LongTypeTest.py, line 97:\n    if random.random() < 0.5:';
		$m.__track_lines__[98] = 'LongTypeTest.py, line 98:\n    answer = -answer';
		$m.__track_lines__[99] = 'LongTypeTest.py, line 99:\n    return answer';
		$m.__track_lines__[104] = 'LongTypeTest.py, line 104:\n    def getran2(ndigits):';
		$m.__track_lines__[105] = 'LongTypeTest.py, line 105:\n    answer = 0L';
		$m.__track_lines__[106] = 'LongTypeTest.py, line 106:\n    for i in xrange(ndigits):';
		$m.__track_lines__[107] = 'LongTypeTest.py, line 107:\n    answer = (answer << SHIFT) | random.randint(0, MASK)';
		$m.__track_lines__[108] = 'LongTypeTest.py, line 108:\n    if random.random() < 0.5:';
		$m.__track_lines__[109] = 'LongTypeTest.py, line 109:\n    answer = -answer';
		$m.__track_lines__[110] = 'LongTypeTest.py, line 110:\n    return answer';
		$m.__track_lines__[112] = 'LongTypeTest.py, line 112:\n    def check_division(self, x, y):';
		$m.__track_lines__[113] = 'LongTypeTest.py, line 113:\n    eq = self.assertEqual';
		$m.__track_lines__[114] = 'LongTypeTest.py, line 114:\n    q, r = divmod(x, y)';
		$m.__track_lines__[115] = 'LongTypeTest.py, line 115:\n    q2, r2 = x//y, x%y';
		$m.__track_lines__[116] = 'LongTypeTest.py, line 116:\n    pab, pba = x*y, y*x';
		$m.__track_lines__[117] = 'LongTypeTest.py, line 117:\n    eq(pab, pba, Frm("multiplication does not commute for %r and %r", x, y))';
		$m.__track_lines__[118] = 'LongTypeTest.py, line 118:\n    eq(q, q2, Frm("divmod returns different quotient than / for %r and %r", x, y))';
		$m.__track_lines__[119] = 'LongTypeTest.py, line 119:\n    eq(r, r2, Frm("divmod returns different mod than %% for %r and %r", x, y))';
		$m.__track_lines__[120] = 'LongTypeTest.py, line 120:\n    eq(x, q*y + r, Frm("x != q*y + r after divmod on x=%r, y=%r", x, y))';
		$m.__track_lines__[121] = 'LongTypeTest.py, line 121:\n    if y > 0:';
		$m.__track_lines__[122] = 'LongTypeTest.py, line 122:\n    self.assert_(0 <= r < y, Frm("bad mod from divmod on %r and %r", x, y))';
		$m.__track_lines__[124] = 'LongTypeTest.py, line 124:\n    self.assert_(y < r <= 0, Frm("bad mod from divmod on %r and %r", x, y))';
		$m.__track_lines__[127] = 'LongTypeTest.py, line 127:\n    def test_division(self):';
		$m.__track_lines__[128] = 'LongTypeTest.py, line 128:\n    if do_minimal_checks: return';
		$m.__track_lines__[129] = 'LongTypeTest.py, line 129:\n    if do_all_checks:';
		$m.__track_lines__[130] = 'LongTypeTest.py, line 130:\n    digits = range(1, MAXDIGITS+1) + \\';
		$m.__track_lines__[133] = 'LongTypeTest.py, line 133:\n    digits = [1, 2, int(MAXDIGITS/3), 2 * int(MAXDIGITS/3),';
		$m.__track_lines__[136] = 'LongTypeTest.py, line 136:\n    digits.append(KARATSUBA_CUTOFF * 3)';
		$m.__track_lines__[137] = 'LongTypeTest.py, line 137:\n    for lenx in digits:';
		$m.__track_lines__[138] = 'LongTypeTest.py, line 138:\n    x = self.getran(lenx)';
		$m.__track_lines__[139] = 'LongTypeTest.py, line 139:\n    for leny in digits:';
		$m.__track_lines__[141] = 'LongTypeTest.py, line 141:\n    y = self.getran(leny)';
		$m.__track_lines__[142] = 'LongTypeTest.py, line 142:\n    if y == 0L: y = 1L';
		$m.__track_lines__[143] = 'LongTypeTest.py, line 143:\n    self.check_division(x, y)';
		$m.__track_lines__[145] = 'LongTypeTest.py, line 145:\n    def test_karatsuba(self):';
		$m.__track_lines__[146] = 'LongTypeTest.py, line 146:\n    if do_minimal_checks: return';
		$m.__track_lines__[147] = 'LongTypeTest.py, line 147:\n    if do_all_checks:';
		$m.__track_lines__[148] = 'LongTypeTest.py, line 148:\n    digits = range(1, 5) + range(KARATSUBA_CUTOFF, KARATSUBA_CUTOFF + 10)';
		$m.__track_lines__[150] = 'LongTypeTest.py, line 150:\n    digits = [1, 5, KARATSUBA_CUTOFF, KARATSUBA_CUTOFF + 10]';
		$m.__track_lines__[151] = 'LongTypeTest.py, line 151:\n    digits.extend([KARATSUBA_CUTOFF * 10, KARATSUBA_CUTOFF * 100])';
		$m.__track_lines__[153] = 'LongTypeTest.py, line 153:\n    bits = [digit * SHIFT for digit in digits]';
		$m.__track_lines__[157] = 'LongTypeTest.py, line 157:\n    try:';
		$m.__track_lines__[158] = 'LongTypeTest.py, line 158:\n    for abits in bits:';
		$m.__track_lines__[159] = 'LongTypeTest.py, line 159:\n    a = (1L << abits) - 1';
		$m.__track_lines__[160] = 'LongTypeTest.py, line 160:\n    for bbits in bits:';
		$m.__track_lines__[161] = 'LongTypeTest.py, line 161:\n    if bbits < abits:';
		$m.__track_lines__[162] = 'LongTypeTest.py, line 162:\n    continue';
		$m.__track_lines__[163] = 'LongTypeTest.py, line 163:\n    b = (1L << bbits) - 1';
		$m.__track_lines__[164] = 'LongTypeTest.py, line 164:\n    x = a * b';
		$m.__track_lines__[165] = 'LongTypeTest.py, line 165:\n    y = ((1L << (abits + bbits)) -';
		$m.__track_lines__[169] = 'LongTypeTest.py, line 169:\n    self.assertEqual(x, y,';
		$m.__track_lines__[172] = 'LongTypeTest.py, line 172:\n    print abits, bbits';
		$m.__track_lines__[173] = 'LongTypeTest.py, line 173:\n    print sys.tracebackstr()';
		$m.__track_lines__[174] = 'LongTypeTest.py, line 174:\n    raise';
		$m.__track_lines__[176] = 'LongTypeTest.py, line 176:\n    def check_bitop_identities_1(self, x):';
		$m.__track_lines__[177] = 'LongTypeTest.py, line 177:\n    eq = self.assertEqual';
		$m.__track_lines__[178] = 'LongTypeTest.py, line 178:\n    eq(x & 0, 0, Frm("x & 0 != 0 for x=%r", x))';
		$m.__track_lines__[179] = 'LongTypeTest.py, line 179:\n    eq(x | 0, x, Frm("x | 0 != x for x=%r", x))';
		$m.__track_lines__[180] = 'LongTypeTest.py, line 180:\n    eq(x ^ 0, x, Frm("x ^ 0 != x for x=%r", x))';
		$m.__track_lines__[181] = 'LongTypeTest.py, line 181:\n    eq(x & -1, x, Frm("x & -1 != x for x=%r", x))';
		$m.__track_lines__[182] = 'LongTypeTest.py, line 182:\n    eq(x | -1, -1, Frm("x | -1 != -1 for x=%r", x))';
		$m.__track_lines__[183] = 'LongTypeTest.py, line 183:\n    eq(x ^ -1, ~x, Frm("x ^ -1 != ~x for x=%r", x))';
		$m.__track_lines__[184] = 'LongTypeTest.py, line 184:\n    eq(x, ~~x, Frm("x != ~~x for x=%r", x))';
		$m.__track_lines__[185] = 'LongTypeTest.py, line 185:\n    eq(x & x, x, Frm("x & x != x for x=%r", x))';
		$m.__track_lines__[186] = 'LongTypeTest.py, line 186:\n    eq(x | x, x, Frm("x | x != x for x=%r", x))';
		$m.__track_lines__[187] = 'LongTypeTest.py, line 187:\n    eq(x ^ x, 0, Frm("x ^ x != 0 for x=%r", x))';
		$m.__track_lines__[188] = 'LongTypeTest.py, line 188:\n    eq(x & ~x, 0, Frm("x & ~x != 0 for x=%r", x))';
		$m.__track_lines__[189] = 'LongTypeTest.py, line 189:\n    eq(x | ~x, -1, Frm("x | ~x != -1 for x=%r", x))';
		$m.__track_lines__[190] = 'LongTypeTest.py, line 190:\n    eq(x ^ ~x, -1, Frm("x ^ ~x != -1 for x=%r", x))';
		$m.__track_lines__[191] = 'LongTypeTest.py, line 191:\n    eq(-x, 1 + ~x, Frm("not -x == 1 + ~x for x=%r", x))';
		$m.__track_lines__[192] = 'LongTypeTest.py, line 192:\n    eq(-x, ~(x-1), Frm("not -x == ~(x-1) for x=%r", x))';
		$m.__track_lines__[193] = 'LongTypeTest.py, line 193:\n    if not do_all_checks:';
		$m.__track_lines__[194] = 'LongTypeTest.py, line 194:\n    return';
		$m.__track_lines__[195] = 'LongTypeTest.py, line 195:\n    for n in xrange(2*SHIFT):';
		$m.__track_lines__[196] = 'LongTypeTest.py, line 196:\n    p2 = 2L ** n';
		$m.__track_lines__[197] = 'LongTypeTest.py, line 197:\n    eq(x << n >> n, x,';
		$m.__track_lines__[199] = 'LongTypeTest.py, line 199:\n    eq(x // p2, x >> n,';
		$m.__track_lines__[201] = 'LongTypeTest.py, line 201:\n    eq(x * p2, x << n,';
		$m.__track_lines__[203] = 'LongTypeTest.py, line 203:\n    eq(x & -p2, x >> n << n,';
		$m.__track_lines__[205] = 'LongTypeTest.py, line 205:\n    eq(x & -p2, x & ~(p2 - 1),';
		$m.__track_lines__[208] = 'LongTypeTest.py, line 208:\n    def check_bitop_identities_2(self, x, y):';
		$m.__track_lines__[209] = 'LongTypeTest.py, line 209:\n    eq = self.assertEqual';
		$m.__track_lines__[210] = 'LongTypeTest.py, line 210:\n    eq(x & y, y & x, Frm("x & y != y & x for x=%r, y=%r", (x, y)))';
		$m.__track_lines__[211] = 'LongTypeTest.py, line 211:\n    eq(x | y, y | x, Frm("x | y != y | x for x=%r, y=%r", (x, y)))';
		$m.__track_lines__[212] = 'LongTypeTest.py, line 212:\n    eq(x ^ y, y ^ x, Frm("x ^ y != y ^ x for x=%r, y=%r", (x, y)))';
		$m.__track_lines__[213] = 'LongTypeTest.py, line 213:\n    eq(x ^ y ^ x, y, Frm("x ^ y ^ x != y for x=%r, y=%r", (x, y)))';
		$m.__track_lines__[214] = 'LongTypeTest.py, line 214:\n    eq(x & y, ~(~x | ~y), Frm("x & y != ~(~x | ~y) for x=%r, y=%r", (x, y)))';
		$m.__track_lines__[215] = 'LongTypeTest.py, line 215:\n    eq(x | y, ~(~x & ~y), Frm("x | y != ~(~x & ~y) for x=%r, y=%r", (x, y)))';
		$m.__track_lines__[216] = 'LongTypeTest.py, line 216:\n    eq(x ^ y, (x | y) & ~(x & y),';
		$m.__track_lines__[218] = 'LongTypeTest.py, line 218:\n    eq(x ^ y, (x & ~y) | (~x & y),';
		$m.__track_lines__[220] = 'LongTypeTest.py, line 220:\n    eq(x ^ y, (x | y) & (~x | ~y),';
		$m.__track_lines__[223] = 'LongTypeTest.py, line 223:\n    def check_bitop_identities_3(self, x, y, z):';
		$m.__track_lines__[224] = 'LongTypeTest.py, line 224:\n    eq = self.assertEqual';
		$m.__track_lines__[225] = 'LongTypeTest.py, line 225:\n    eq((x & y) & z, x & (y & z),';
		$m.__track_lines__[227] = 'LongTypeTest.py, line 227:\n    eq((x | y) | z, x | (y | z),';
		$m.__track_lines__[229] = 'LongTypeTest.py, line 229:\n    eq((x ^ y) ^ z, x ^ (y ^ z),';
		$m.__track_lines__[231] = 'LongTypeTest.py, line 231:\n    eq(x & (y | z), (x & y) | (x & z),';
		$m.__track_lines__[233] = 'LongTypeTest.py, line 233:\n    eq(x | (y & z), (x | y) & (x | z),';
		$m.__track_lines__[236] = 'LongTypeTest.py, line 236:\n    def test_bitop_identities(self):';
		$m.__track_lines__[237] = 'LongTypeTest.py, line 237:\n    if do_minimal_checks: return';
		$m.__track_lines__[238] = 'LongTypeTest.py, line 238:\n    for x in special:';
		$m.__track_lines__[239] = 'LongTypeTest.py, line 239:\n    self.check_bitop_identities_1(x)';
		$m.__track_lines__[240] = 'LongTypeTest.py, line 240:\n    if not do_all_checks:';
		$m.__track_lines__[241] = 'LongTypeTest.py, line 241:\n    return';
		$m.__track_lines__[242] = 'LongTypeTest.py, line 242:\n    digits = xrange(1, MAXDIGITS+1)';
		$m.__track_lines__[243] = 'LongTypeTest.py, line 243:\n    for lenx in digits:';
		$m.__track_lines__[244] = 'LongTypeTest.py, line 244:\n    x = self.getran(lenx)';
		$m.__track_lines__[245] = 'LongTypeTest.py, line 245:\n    self.check_bitop_identities_1(x)';
		$m.__track_lines__[246] = 'LongTypeTest.py, line 246:\n    for leny in digits:';
		$m.__track_lines__[247] = 'LongTypeTest.py, line 247:\n    y = self.getran(leny)';
		$m.__track_lines__[248] = 'LongTypeTest.py, line 248:\n    self.check_bitop_identities_2(x, y)';
		$m.__track_lines__[249] = 'LongTypeTest.py, line 249:\n    self.check_bitop_identities_3(x, y, self.getran((lenx + leny)//2))';
		$m.__track_lines__[251] = 'LongTypeTest.py, line 251:\n    def slow_format(self, x, base):';
		$m.__track_lines__[252] = 'LongTypeTest.py, line 252:\n    if (x, base) == (0, 8):';
		$m.__track_lines__[254] = 'LongTypeTest.py, line 254:\n    return "0L"';
		$m.__track_lines__[255] = 'LongTypeTest.py, line 255:\n    digits = []';
		$m.__track_lines__[256] = 'LongTypeTest.py, line 256:\n    sign = 0';
		$m.__track_lines__[257] = 'LongTypeTest.py, line 257:\n    if x < 0:';
		$m.__track_lines__[258] = 'LongTypeTest.py, line 258:\n    sign, x = 1, -x';
		$m.__track_lines__[259] = 'LongTypeTest.py, line 259:\n    while x:';
		$m.__track_lines__[260] = 'LongTypeTest.py, line 260:\n    x, r = divmod(x, base)';
		$m.__track_lines__[261] = 'LongTypeTest.py, line 261:\n    digits.append(int(r))';
		$m.__track_lines__[262] = 'LongTypeTest.py, line 262:\n    digits.reverse()';
		$m.__track_lines__[264] = 'LongTypeTest.py, line 264:\n    if not digits: digits = [0]';
		$m.__track_lines__[265] = "LongTypeTest.py, line 265:\n    return '-'[:sign] + \\";
		$m.__track_lines__[267] = 'LongTypeTest.py, line 267:\n    "".join(map(lambda i: "0123456789abcdef"[i], digits)) + "L"';
		$m.__track_lines__[269] = 'LongTypeTest.py, line 269:\n    def check_format_1(self, x):';
		$m.__track_lines__[270] = 'LongTypeTest.py, line 270:\n    for base, mapper in (8, oct), (10, repr), (16, hex):';
		$m.__track_lines__[271] = 'LongTypeTest.py, line 271:\n    got = mapper(x)';
		$m.__track_lines__[272] = 'LongTypeTest.py, line 272:\n    expected = self.slow_format(x, base)';
		$m.__track_lines__[273] = 'LongTypeTest.py, line 273:\n    msg = Frm("%s returned %r but expected %r for %r",';
		$m.__track_lines__[275] = 'LongTypeTest.py, line 275:\n    self.assertEqual(got, expected, msg)';
		$m.__track_lines__[276] = 'LongTypeTest.py, line 276:\n    self.assertEqual(long(got, 0), x, Frm(\'long("%s", 0) != %r\', got, x))';
		$m.__track_lines__[279] = 'LongTypeTest.py, line 279:\n    got = str(x)';
		$m.__track_lines__[280] = 'LongTypeTest.py, line 280:\n    expected = self.slow_format(x, 10)[:-1]';
		$m.__track_lines__[281] = 'LongTypeTest.py, line 281:\n    msg = Frm("%s returned %r but expected %r for %r",';
		$m.__track_lines__[283] = 'LongTypeTest.py, line 283:\n    self.assertEqual(got, expected, msg)';
		$m.__track_lines__[285] = 'LongTypeTest.py, line 285:\n    def test_format(self):';
		$m.__track_lines__[286] = 'LongTypeTest.py, line 286:\n    for x in special:';
		$m.__track_lines__[287] = 'LongTypeTest.py, line 287:\n    self.check_format_1(x)';
		$m.__track_lines__[288] = 'LongTypeTest.py, line 288:\n    if not do_all_checks:';
		$m.__track_lines__[289] = 'LongTypeTest.py, line 289:\n    return';
		$m.__track_lines__[290] = 'LongTypeTest.py, line 290:\n    for i in xrange(10):';
		$m.__track_lines__[291] = 'LongTypeTest.py, line 291:\n    for lenx in xrange(1, MAXDIGITS+1):';
		$m.__track_lines__[292] = 'LongTypeTest.py, line 292:\n    x = self.getran(lenx)';
		$m.__track_lines__[293] = 'LongTypeTest.py, line 293:\n    self.check_format_1(x)';
		$m.__track_lines__[295] = 'LongTypeTest.py, line 295:\n    def test_long(self):';
		$m.__track_lines__[296] = 'LongTypeTest.py, line 296:\n    self.assertEqual(long(314), 314L)';
		$m.__track_lines__[297] = 'LongTypeTest.py, line 297:\n    self.assertEqual(long(3.14), 3L)';
		$m.__track_lines__[298] = 'LongTypeTest.py, line 298:\n    self.assertEqual(long(314L), 314L)';
		$m.__track_lines__[303] = 'LongTypeTest.py, line 303:\n    self.assertTrue(isinstance(long(314), long))';
		$m.__track_lines__[304] = 'LongTypeTest.py, line 304:\n    self.assertTrue(isinstance(long(3.14), long))';
		$m.__track_lines__[305] = 'LongTypeTest.py, line 305:\n    self.assertTrue(isinstance(long(314L), long))';
		$m.__track_lines__[307] = 'LongTypeTest.py, line 307:\n    self.assertEqual(long(-3.14), -3L)';
		$m.__track_lines__[308] = 'LongTypeTest.py, line 308:\n    self.assertEqual(long(3.9), 3L)';
		$m.__track_lines__[309] = 'LongTypeTest.py, line 309:\n    self.assertEqual(long(-3.9), -3L)';
		$m.__track_lines__[310] = 'LongTypeTest.py, line 310:\n    self.assertEqual(long(3.5), 3L)';
		$m.__track_lines__[311] = 'LongTypeTest.py, line 311:\n    self.assertEqual(long(-3.5), -3L)';
		$m.__track_lines__[312] = 'LongTypeTest.py, line 312:\n    self.assertEqual(long("-3"), -3L)';
		$m.__track_lines__[313] = 'LongTypeTest.py, line 313:\n    if test_support.have_unicode:';
		$m.__track_lines__[314] = 'LongTypeTest.py, line 314:\n    self.assertEqual(long(unicode("-3")), -3L)';
		$m.__track_lines__[316] = 'LongTypeTest.py, line 316:\n    self.assertEqual(long("10",16), 16L)';
		$m.__track_lines__[317] = 'LongTypeTest.py, line 317:\n    if test_support.have_unicode:';
		$m.__track_lines__[318] = 'LongTypeTest.py, line 318:\n    self.assertEqual(long(unicode("10"),16), 16L)';
		$m.__track_lines__[320] = 'LongTypeTest.py, line 320:\n    LL = [';
		$m.__track_lines__[324] = 'LongTypeTest.py, line 324:\n    L2 = L[:]';
		$m.__track_lines__[325] = 'LongTypeTest.py, line 325:\n    if test_support.have_unicode:';
		$m.__track_lines__[326] = 'LongTypeTest.py, line 326:\n    L2 += [';
		$m.__track_lines__[330] = 'LongTypeTest.py, line 330:\n    L2 += LL';
		$m.__track_lines__[331] = 'LongTypeTest.py, line 331:\n    for s, v in L2:';
		$m.__track_lines__[332] = 'LongTypeTest.py, line 332:\n    for sign in "", "+", "-":';
		$m.__track_lines__[333] = 'LongTypeTest.py, line 333:\n    for prefix in "", " ", "\\t", "  \\t\\t  ":';
		$m.__track_lines__[334] = 'LongTypeTest.py, line 334:\n    ss = prefix + sign + s';
		$m.__track_lines__[335] = 'LongTypeTest.py, line 335:\n    vv = v';
		$m.__track_lines__[336] = 'LongTypeTest.py, line 336:\n    if sign == "-" and v is not ValueError:';
		$m.__track_lines__[337] = 'LongTypeTest.py, line 337:\n    vv = -v';
		$m.__track_lines__[338] = 'LongTypeTest.py, line 338:\n    try:';
		$m.__track_lines__[339] = 'LongTypeTest.py, line 339:\n    self.assertEqual(long(ss), long(vv))';
		$m.__track_lines__[341] = 'LongTypeTest.py, line 341:\n    pass';
		$m.__track_lines__[343] = 'LongTypeTest.py, line 343:\n    pass';
		$m.__track_lines__[346] = 'LongTypeTest.py, line 346:\n    try:';
		$m.__track_lines__[347] = "LongTypeTest.py, line 347:\n    v = long('123\\0')";
		$m.__track_lines__[348] = 'LongTypeTest.py, line 348:\n    self.fail(r"long(\'123\\0\')")';
		$m.__track_lines__[350] = 'LongTypeTest.py, line 350:\n    self.assertTrue(True)';
		$m.__track_lines__[352] = 'LongTypeTest.py, line 352:\n    try:';
		$m.__track_lines__[353] = "LongTypeTest.py, line 353:\n    v = long('53', 40)";
		$m.__track_lines__[354] = 'LongTypeTest.py, line 354:\n    self.fail(r"long(\'53\', 40)")';
		$m.__track_lines__[356] = 'LongTypeTest.py, line 356:\n    self.assertTrue(True)';
		$m.__track_lines__[358] = 'LongTypeTest.py, line 358:\n    try:';
		$m.__track_lines__[359] = 'LongTypeTest.py, line 359:\n    v = long(1, 12)';
		$m.__track_lines__[360] = 'LongTypeTest.py, line 360:\n    self.fail("long(1, 12)")';
		$m.__track_lines__[362] = 'LongTypeTest.py, line 362:\n    self.assertTrue(True)';
		$m.__track_lines__[367] = 'LongTypeTest.py, line 367:\n    try:';
		$m.__track_lines__[368] = "LongTypeTest.py, line 368:\n    v = long('123\\0', 10)";
		$m.__track_lines__[369] = 'LongTypeTest.py, line 369:\n    self.fail(r"long(\'123\\0\', 10)")';
		$m.__track_lines__[371] = 'LongTypeTest.py, line 371:\n    self.assertTrue(True)';
		$m.__track_lines__[373] = 'LongTypeTest.py, line 373:\n    try:';
		$m.__track_lines__[374] = "LongTypeTest.py, line 374:\n    v = long('123\\x00 245', 20)";
		$m.__track_lines__[375] = 'LongTypeTest.py, line 375:\n    self.fail(r"(long(\'123\\x00 245\', 20)")';
		$m.__track_lines__[377] = 'LongTypeTest.py, line 377:\n    self.assertTrue(True)';
		$m.__track_lines__[379] = "LongTypeTest.py, line 379:\n    self.assertEqual(long('100000000000000000000000000000000', 2),";
		$m.__track_lines__[381] = "LongTypeTest.py, line 381:\n    self.assertEqual(long('102002022201221111211', 3), 4294967296)";
		$m.__track_lines__[382] = "LongTypeTest.py, line 382:\n    self.assertEqual(long('10000000000000000', 4), 4294967296)";
		$m.__track_lines__[383] = "LongTypeTest.py, line 383:\n    self.assertEqual(long('32244002423141', 5), 4294967296)";
		$m.__track_lines__[384] = "LongTypeTest.py, line 384:\n    self.assertEqual(long('1550104015504', 6), 4294967296)";
		$m.__track_lines__[385] = "LongTypeTest.py, line 385:\n    self.assertEqual(long('211301422354', 7), 4294967296)";
		$m.__track_lines__[386] = "LongTypeTest.py, line 386:\n    self.assertEqual(long('40000000000', 8), 4294967296)";
		$m.__track_lines__[387] = "LongTypeTest.py, line 387:\n    self.assertEqual(long('12068657454', 9), 4294967296)";
		$m.__track_lines__[388] = "LongTypeTest.py, line 388:\n    self.assertEqual(long('4294967296', 10), 4294967296)";
		$m.__track_lines__[389] = "LongTypeTest.py, line 389:\n    self.assertEqual(long('1904440554', 11), 4294967296)";
		$m.__track_lines__[390] = "LongTypeTest.py, line 390:\n    self.assertEqual(long('9ba461594', 12), 4294967296)";
		$m.__track_lines__[391] = "LongTypeTest.py, line 391:\n    self.assertEqual(long('535a79889', 13), 4294967296)";
		$m.__track_lines__[392] = "LongTypeTest.py, line 392:\n    self.assertEqual(long('2ca5b7464', 14), 4294967296)";
		$m.__track_lines__[393] = "LongTypeTest.py, line 393:\n    self.assertEqual(long('1a20dcd81', 15), 4294967296)";
		$m.__track_lines__[394] = "LongTypeTest.py, line 394:\n    self.assertEqual(long('100000000', 16), 4294967296)";
		$m.__track_lines__[395] = "LongTypeTest.py, line 395:\n    self.assertEqual(long('a7ffda91', 17), 4294967296)";
		$m.__track_lines__[396] = "LongTypeTest.py, line 396:\n    self.assertEqual(long('704he7g4', 18), 4294967296)";
		$m.__track_lines__[397] = "LongTypeTest.py, line 397:\n    self.assertEqual(long('4f5aff66', 19), 4294967296)";
		$m.__track_lines__[398] = "LongTypeTest.py, line 398:\n    self.assertEqual(long('3723ai4g', 20), 4294967296)";
		$m.__track_lines__[399] = "LongTypeTest.py, line 399:\n    self.assertEqual(long('281d55i4', 21), 4294967296)";
		$m.__track_lines__[400] = "LongTypeTest.py, line 400:\n    self.assertEqual(long('1fj8b184', 22), 4294967296)";
		$m.__track_lines__[401] = "LongTypeTest.py, line 401:\n    self.assertEqual(long('1606k7ic', 23), 4294967296)";
		$m.__track_lines__[402] = "LongTypeTest.py, line 402:\n    self.assertEqual(long('mb994ag', 24), 4294967296)";
		$m.__track_lines__[403] = "LongTypeTest.py, line 403:\n    self.assertEqual(long('hek2mgl', 25), 4294967296)";
		$m.__track_lines__[404] = "LongTypeTest.py, line 404:\n    self.assertEqual(long('dnchbnm', 26), 4294967296)";
		$m.__track_lines__[405] = "LongTypeTest.py, line 405:\n    self.assertEqual(long('b28jpdm', 27), 4294967296)";
		$m.__track_lines__[406] = "LongTypeTest.py, line 406:\n    self.assertEqual(long('8pfgih4', 28), 4294967296)";
		$m.__track_lines__[407] = "LongTypeTest.py, line 407:\n    self.assertEqual(long('76beigg', 29), 4294967296)";
		$m.__track_lines__[408] = "LongTypeTest.py, line 408:\n    self.assertEqual(long('5qmcpqg', 30), 4294967296)";
		$m.__track_lines__[409] = "LongTypeTest.py, line 409:\n    self.assertEqual(long('4q0jto4', 31), 4294967296)";
		$m.__track_lines__[410] = "LongTypeTest.py, line 410:\n    self.assertEqual(long('4000000', 32), 4294967296)";
		$m.__track_lines__[411] = "LongTypeTest.py, line 411:\n    self.assertEqual(long('3aokq94', 33), 4294967296)";
		$m.__track_lines__[412] = "LongTypeTest.py, line 412:\n    self.assertEqual(long('2qhxjli', 34), 4294967296)";
		$m.__track_lines__[413] = "LongTypeTest.py, line 413:\n    self.assertEqual(long('2br45qb', 35), 4294967296)";
		$m.__track_lines__[414] = "LongTypeTest.py, line 414:\n    self.assertEqual(long('1z141z4', 36), 4294967296)";
		$m.__track_lines__[416] = "LongTypeTest.py, line 416:\n    self.assertEqual(long('100000000000000000000000000000001', 2),";
		$m.__track_lines__[418] = "LongTypeTest.py, line 418:\n    self.assertEqual(long('102002022201221111212', 3), 4294967297)";
		$m.__track_lines__[419] = "LongTypeTest.py, line 419:\n    self.assertEqual(long('10000000000000001', 4), 4294967297)";
		$m.__track_lines__[420] = "LongTypeTest.py, line 420:\n    self.assertEqual(long('32244002423142', 5), 4294967297)";
		$m.__track_lines__[421] = "LongTypeTest.py, line 421:\n    self.assertEqual(long('1550104015505', 6), 4294967297)";
		$m.__track_lines__[422] = "LongTypeTest.py, line 422:\n    self.assertEqual(long('211301422355', 7), 4294967297)";
		$m.__track_lines__[423] = "LongTypeTest.py, line 423:\n    self.assertEqual(long('40000000001', 8), 4294967297)";
		$m.__track_lines__[424] = "LongTypeTest.py, line 424:\n    self.assertEqual(long('12068657455', 9), 4294967297)";
		$m.__track_lines__[425] = "LongTypeTest.py, line 425:\n    self.assertEqual(long('4294967297', 10), 4294967297)";
		$m.__track_lines__[426] = "LongTypeTest.py, line 426:\n    self.assertEqual(long('1904440555', 11), 4294967297)";
		$m.__track_lines__[427] = "LongTypeTest.py, line 427:\n    self.assertEqual(long('9ba461595', 12), 4294967297)";
		$m.__track_lines__[428] = "LongTypeTest.py, line 428:\n    self.assertEqual(long('535a7988a', 13), 4294967297)";
		$m.__track_lines__[429] = "LongTypeTest.py, line 429:\n    self.assertEqual(long('2ca5b7465', 14), 4294967297)";
		$m.__track_lines__[430] = "LongTypeTest.py, line 430:\n    self.assertEqual(long('1a20dcd82', 15), 4294967297)";
		$m.__track_lines__[431] = "LongTypeTest.py, line 431:\n    self.assertEqual(long('100000001', 16), 4294967297)";
		$m.__track_lines__[432] = "LongTypeTest.py, line 432:\n    self.assertEqual(long('a7ffda92', 17), 4294967297)";
		$m.__track_lines__[433] = "LongTypeTest.py, line 433:\n    self.assertEqual(long('704he7g5', 18), 4294967297)";
		$m.__track_lines__[434] = "LongTypeTest.py, line 434:\n    self.assertEqual(long('4f5aff67', 19), 4294967297)";
		$m.__track_lines__[435] = "LongTypeTest.py, line 435:\n    self.assertEqual(long('3723ai4h', 20), 4294967297)";
		$m.__track_lines__[436] = "LongTypeTest.py, line 436:\n    self.assertEqual(long('281d55i5', 21), 4294967297)";
		$m.__track_lines__[437] = "LongTypeTest.py, line 437:\n    self.assertEqual(long('1fj8b185', 22), 4294967297)";
		$m.__track_lines__[438] = "LongTypeTest.py, line 438:\n    self.assertEqual(long('1606k7id', 23), 4294967297)";
		$m.__track_lines__[439] = "LongTypeTest.py, line 439:\n    self.assertEqual(long('mb994ah', 24), 4294967297)";
		$m.__track_lines__[440] = "LongTypeTest.py, line 440:\n    self.assertEqual(long('hek2mgm', 25), 4294967297)";
		$m.__track_lines__[441] = "LongTypeTest.py, line 441:\n    self.assertEqual(long('dnchbnn', 26), 4294967297)";
		$m.__track_lines__[442] = "LongTypeTest.py, line 442:\n    self.assertEqual(long('b28jpdn', 27), 4294967297)";
		$m.__track_lines__[443] = "LongTypeTest.py, line 443:\n    self.assertEqual(long('8pfgih5', 28), 4294967297)";
		$m.__track_lines__[444] = "LongTypeTest.py, line 444:\n    self.assertEqual(long('76beigh', 29), 4294967297)";
		$m.__track_lines__[445] = "LongTypeTest.py, line 445:\n    self.assertEqual(long('5qmcpqh', 30), 4294967297)";
		$m.__track_lines__[446] = "LongTypeTest.py, line 446:\n    self.assertEqual(long('4q0jto5', 31), 4294967297)";
		$m.__track_lines__[447] = "LongTypeTest.py, line 447:\n    self.assertEqual(long('4000001', 32), 4294967297)";
		$m.__track_lines__[448] = "LongTypeTest.py, line 448:\n    self.assertEqual(long('3aokq95', 33), 4294967297)";
		$m.__track_lines__[449] = "LongTypeTest.py, line 449:\n    self.assertEqual(long('2qhxjlj', 34), 4294967297)";
		$m.__track_lines__[450] = "LongTypeTest.py, line 450:\n    self.assertEqual(long('2br45qc', 35), 4294967297)";
		$m.__track_lines__[451] = "LongTypeTest.py, line 451:\n    self.assertEqual(long('1z141z5', 36), 4294967297)";
		var $lambda2,$lambda1,$iter1_iter,$pow2,$pow1,$iter1_array,$sub3,$sub2,$sub1,$sub4,$iter1_nextval,$mul2,$mul1,$iter1_type,$add2,$add3,$add1,$iter1_idx,$add4,$pyjs__trackstack_size_1;
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
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_26 = new $p['int'](26);
		var $constant_int_27 = new $p['int'](27);
		var $constant_int_28 = new $p['int'](28);
		var $constant_int_29 = new $p['int'](29);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_4294967296 = new $p['int'](4294967296);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_34 = new $p['int'](34);
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_36 = new $p['int'](36);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_4294967297 = new $p['int'](4294967297);
		var $constant_int_314 = new $p['int'](314);
		var $constant_int_31 = new $p['int'](31);
		var $constant_int_70 = new $p['int'](70);
		var $constant_int_99 = new $p['int'](99);
		var $constant_int_100 = new $p['int'](100);
		var $constant_long_0 = new $p['long'](0);
		var $constant_long_1 = new $p['long'](1);
		var $constant_long_2 = new $p['long'](2);
		var $constant_long_3 = new $p['long'](3);
		var $constant_long_4 = new $p['long'](4);
		var $constant_long_12297829382473034410 = new $p['long'](12297829382473034410);
		var $constant_long_16 = new $p['long'](16);
		var $constant_long_6148914691236517205 = new $p['long'](6148914691236517205);
		var $constant_long_314 = new $p['long'](314);
		var $constant_long_10 = new $p['long'](10);
		$pyjs.track.module='LongTypeTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['random'] = $p['___import___']('random', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$m['do_minimal_checks'] = true;
		$pyjs.track.lineno=6;
		$m['do_all_checks'] = false;
		$pyjs.track.lineno=10;
		$m['test_support'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'LongTypeTest';
			$cls_definition.__md5__ = '60f4fceafd9cf5c483748917b1d3782d';
			$pyjs.track.lineno=11;
			$cls_definition['have_unicode'] = false;
			$pyjs.track.lineno=10;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('test_support', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=14;
		$m['Frm'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'LongTypeTest';
			$cls_definition.__md5__ = 'ea2fc54de77e1f0e6366e1a258ae4d19';
			$pyjs.track.lineno=15;
			$method = $pyjs__bind_method2('__init__', function(format) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					format = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ea2fc54de77e1f0e6366e1a258ae4d19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$3,$bool2,$bool1,$len1,$4,$2,$and2,$1;
				$pyjs.track={module:'LongTypeTest', lineno:15};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=15;
				$pyjs.track.lineno=16;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('format', format) : $p['setattr'](self, 'format', format); 
				$pyjs.track.lineno=17;
				if ((($bool2=((($bool1=$and1=$p['op_eq']((($len1=args) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), $constant_int_1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['isinstance']((typeof ($1=args).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)), $p['tuple']):$and1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$pyjs.track.lineno=18;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('args', (typeof ($3=args).__array != 'undefined'?
						((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__($constant_int_0))) : $p['setattr'](self, 'args', (typeof ($3=args).__array != 'undefined'?
						((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__($constant_int_0))); 
				}
				else {
					$pyjs.track.lineno=20;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('args', args) : $p['setattr'](self, 'args', args); 
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',null,['self'],['format']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=22;
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
					if (self.prototype.__md5__ !== 'ea2fc54de77e1f0e6366e1a258ae4d19') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod1,$mod2;
				$pyjs.track={module:'LongTypeTest', lineno:22};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=22;
				$pyjs.track.lineno=23;
				$pyjs.track.lineno=24;
				$pyjs.track.lineno=24;
				var $pyjs__ret = (typeof ($mod1=$p['getattr'](self, 'format'))==typeof ($mod2=$p['getattr'](self, 'args')) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs.track.lineno=14;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Frm', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=27;
		$m['SHIFT'] = $constant_int_15;
		$pyjs.track.lineno=28;
		$m['BASE'] = (typeof ($pow1=$constant_int_2)==typeof ($pow2=$m['SHIFT']) && typeof $pow1=='number'?
			Math.pow($pow1,$pow2):
			$p['op_pow']($pow1,$pow2));
		$pyjs.track.lineno=29;
		$m['MASK'] = (typeof ($sub1=$m['BASE'])==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			$p['op_sub']($sub1,$sub2));
		$pyjs.track.lineno=30;
		$m['KARATSUBA_CUTOFF'] = $constant_int_70;
		$pyjs.track.lineno=34;
		$m['MAXDIGITS'] = $constant_int_15;
		$pyjs.track.lineno=37;
		$m['special'] = $p['map']($p['long'], $p['list']([$constant_int_0, $constant_int_1, $constant_int_2, $m['BASE'], $p['op_bitshiftright']($m['BASE'],$constant_int_1)]));
		$pyjs.track.lineno=38;
		$m['special']['append']($constant_long_6148914691236517205);
		$pyjs.track.lineno=39;
		$m['special']['append']($constant_long_12297829382473034410);
		$pyjs.track.lineno=41;
		$m['p2'] = $constant_long_4;
		$pyjs.track.lineno=42;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = $p['range']((typeof ($mul1=$constant_int_2)==typeof ($mul2=$m['SHIFT']) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)));
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			$m['i'] = $iter1_nextval;
			$pyjs.track.lineno=43;
			$m['special']['append']((typeof ($sub3=$m['p2'])==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)));
			$pyjs.track.lineno=44;
			$m['p2'] = $p['op_bitshiftleft']($m['p2'],$constant_int_1);
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='LongTypeTest';
		$pyjs.track.lineno=45;
		delete $m['p2'];
		$pyjs.track.lineno=47;
		var 		$lambda1 = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'LongTypeTest',lineno:47};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='LongTypeTest';
			$pyjs.track.lineno=47;
			$pyjs.track.lineno=47;
			$pyjs.track.lineno=47;
			var $pyjs__ret = $p['op_invert'](x);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$lambda1.__name__ = '$lambda1';

		$lambda1.__bind_type__ = 0;
		$lambda1.__args__ = [null,null,['x']];
		var 		$lambda2 = function(x) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'LongTypeTest',lineno:48};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='LongTypeTest';
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=48;
			var $pyjs__ret = (typeof ($usub1=x)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$lambda2.__name__ = '$lambda2';

		$lambda2.__bind_type__ = 0;
		$lambda2.__args__ = [null,null,['x']];
		$m['special'] = (typeof ($add3=(typeof ($add1=$m['special'])==typeof ($add2=$p['map']($lambda1, $m['special'])) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2)))==typeof ($add4=$p['map']($lambda2, $m['special'])) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4));
		$pyjs.track.lineno=50;
		$m['L'] = $p['list']([$p['tuple'](['0', $constant_int_0]), $p['tuple'](['1', $constant_int_1]), $p['tuple'](['9', $constant_int_9]), $p['tuple'](['10', $constant_int_10]), $p['tuple'](['99', $constant_int_99]), $p['tuple'](['100', $constant_int_100]), $p['tuple'](['314', $constant_int_314]), $p['tuple']([' 314', $constant_int_314]), $p['tuple'](['314 ', $constant_int_314]), $p['tuple'](['  \t\t  314  \t\t  ', $constant_int_314]), $p['tuple']([$p['repr']($p['getattr']($m['sys'], 'maxint')), $p['getattr']($m['sys'], 'maxint')]), $p['tuple'](['  1x', $p['ValueError']]), $p['tuple'](['  1  ', $constant_int_1]), $p['tuple'](['  1\x02  ', $p['ValueError']]), $p['tuple'](['', $p['ValueError']]), $p['tuple']([' ', $p['ValueError']]), $p['tuple'](['  \t\t  ', $p['ValueError']])]);
		$pyjs.track.lineno=70;
		$m['LongTypeTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'LongTypeTest';
			$cls_definition.__md5__ = 'c19571354d5f8e4e9a1ba2b566f0319a';
			$pyjs.track.lineno=74;
			$method = $pyjs__bind_method2('assert_', function(condition, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					condition = arguments[1];
					msg = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof msg == 'undefined') msg=arguments.callee.__args__[4][1];
				var $bool3,$bool6,$bool4,$bool5;
				$pyjs.track={module:'LongTypeTest', lineno:74};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=74;
				$pyjs.track.lineno=75;
				if ((($bool4=!(($bool3=condition) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs.track.lineno=76;
					if ((($bool6=!(($bool5=msg) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						$pyjs.track.lineno=77;
						msg = 'assert condition is false';
					}
					$pyjs.track.lineno=78;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['Exception'](msg));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['condition'],['msg', null]]);
			$cls_definition['assert_'] = $method;
			$pyjs.track.lineno=80;
			$method = $pyjs__bind_method2('getran', function(ndigits) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					ndigits = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp13,$cmp12,$bool8,nbits,nbits_lo,nbits_hi,$sub9,$sub8,answer,bits,$sub6,$sub5,$sub10,$cmp14,$add10,$bool7,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul12,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$mul11,$cmp3,$cmp2,$sub7,$mul10,$cmp9,$cmp8,$bool9,r,$add6,$add7,$add5,$cmp11,$add8,$add9,$cmp10;
				$pyjs.track={module:'LongTypeTest', lineno:80};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=80;
				$pyjs.track.lineno=81;
				self['assertTrue'](((($cmp1=ndigits)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1));
				$pyjs.track.lineno=82;
				nbits_hi = (typeof ($mul3=ndigits)==typeof ($mul4=$m['SHIFT']) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4));
				$pyjs.track.lineno=83;
				nbits_lo = (typeof ($add5=(typeof ($sub5=nbits_hi)==typeof ($sub6=$m['SHIFT']) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)))==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				$pyjs.track.lineno=84;
				answer = $constant_long_0;
				$pyjs.track.lineno=85;
				nbits = $constant_int_0;
				$pyjs.track.lineno=86;
				r = $p['op_bitor2']($p['int']((typeof ($mul7=$m['random']['random']())==typeof ($mul8=(typeof ($mul5=$m['SHIFT'])==typeof ($mul6=$constant_int_2) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8))), $constant_int_1);
				$pyjs.track.lineno=87;
				while ((($bool7=((($cmp3=nbits)===($cmp4=nbits_lo)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$pyjs.track.lineno=88;
					bits = (typeof ($add7=$p['op_bitshiftright'](r,$constant_int_1))==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
					$pyjs.track.lineno=89;
					bits = $p['min'](bits, (typeof ($sub7=nbits_hi)==typeof ($sub8=nbits) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8)));
					$pyjs.track.lineno=90;
					self['assertTrue']((((($cmp5=$constant_int_1)===($cmp6=($compare1 = bits))?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) < 1)&&((($cmp7=$compare1)===($cmp8=($compare2 = $m['SHIFT']))?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))) < 1)));
					$pyjs.track.lineno=91;
					nbits = (typeof ($add9=nbits)==typeof ($add10=bits) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
					$pyjs.track.lineno=92;
					answer = $p['op_bitshiftleft'](answer,bits);
					$pyjs.track.lineno=93;
					if ((($bool8=$p['op_bitand2'](r, $constant_int_1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						$pyjs.track.lineno=94;
						answer = $p['op_bitor2'](answer, (typeof ($sub9=$p['op_bitshiftleft']($constant_int_1,bits))==typeof ($sub10=$constant_int_1) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							$p['op_sub']($sub9,$sub10)));
					}
					$pyjs.track.lineno=95;
					r = $p['int']((typeof ($mul11=$m['random']['random']())==typeof ($mul12=(typeof ($mul9=$m['SHIFT'])==typeof ($mul10=$constant_int_2) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12)));
				}
				$pyjs.track.lineno=96;
				self['assert_']((((($cmp9=nbits_lo)===($cmp10=($compare3 = nbits))?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) < 1)&&((($cmp11=$compare3)===($cmp12=($compare4 = nbits_hi))?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) < 1)));
				$pyjs.track.lineno=97;
				if ((($bool9=((($cmp13=$m['random']['random']())===($cmp14=0.5)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					$pyjs.track.lineno=98;
					answer = (typeof ($usub2=answer)=='number'?
						-$usub2:
						$p['op_usub']($usub2));
				}
				$pyjs.track.lineno=99;
				$pyjs.track.lineno=99;
				var $pyjs__ret = answer;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['ndigits']]);
			$cls_definition['getran'] = $method;
			$pyjs.track.lineno=104;
			$method = $pyjs__bind_method2('getran2', function() {
				if (this.__is_instance__ === true) {
					var ndigits = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var ndigits = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (ndigits.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](ndigits, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], ndigits);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,i,$cmp16,$cmp15,$bool10,$iter2_idx,$pyjs__trackstack_size_1,answer,$iter2_array;
				$pyjs.track={module:'LongTypeTest', lineno:104};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=104;
				$pyjs.track.lineno=105;
				answer = $constant_long_0;
				$pyjs.track.lineno=106;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = $p['xrange'](ndigits);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					$pyjs.track.lineno=107;
					answer = $p['op_bitor2']($p['op_bitshiftleft'](answer,$m['SHIFT']), $m['random']['randint']($constant_int_0, $m['MASK']));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=108;
				if ((($bool10=((($cmp15=$m['random']['random']())===($cmp16=0.5)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == -1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					$pyjs.track.lineno=109;
					answer = (typeof ($usub3=answer)=='number'?
						-$usub3:
						$p['op_usub']($usub3));
				}
				$pyjs.track.lineno=110;
				$pyjs.track.lineno=110;
				var $pyjs__ret = answer;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['ndigits']]);
			$cls_definition['getran2'] = $method;
			$pyjs.track.lineno=112;
			$method = $pyjs__bind_method2('check_division', function(x, y) {
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
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp26,$bool11,$cmp20,$mod4,$cmp22,$cmp23,$cmp24,$cmp25,$mod3,eq,q2,pab,$cmp17,$add11,$add12,$cmp19,$cmp18,$mul17,$mul16,$mul15,$mul14,$mul13,r2,$cmp21,$mul18,q,r,pba,$floordiv2,$floordiv1;
				$pyjs.track={module:'LongTypeTest', lineno:112};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=112;
				$pyjs.track.lineno=113;
				eq = $p['getattr'](self, 'assertEqual');
				$pyjs.track.lineno=114;
				var $tupleassign1 = $p['__ass_unpack']($p['divmod'](x, y), 2, null);
				q = $tupleassign1[0];
				r = $tupleassign1[1];
				$pyjs.track.lineno=115;
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([(typeof ($floordiv1=x)==typeof ($floordiv2=y) && typeof $floordiv1=='number' && $floordiv2 !== 0?
					Math.floor($floordiv1/$floordiv2):
					$p['op_floordiv']($floordiv1,$floordiv2)), (typeof ($mod3=x)==typeof ($mod4=y) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4))]), 2, null);
				q2 = $tupleassign2[0];
				r2 = $tupleassign2[1];
				$pyjs.track.lineno=116;
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([(typeof ($mul13=x)==typeof ($mul14=y) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)), (typeof ($mul15=y)==typeof ($mul16=x) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))]), 2, null);
				pab = $tupleassign3[0];
				pba = $tupleassign3[1];
				$pyjs.track.lineno=117;
				eq(pab, pba, $m['Frm']('multiplication does not commute for %r and %r', x, y));
				$pyjs.track.lineno=118;
				eq(q, q2, $m['Frm']('divmod returns different quotient than / for %r and %r', x, y));
				$pyjs.track.lineno=119;
				eq(r, r2, $m['Frm']('divmod returns different mod than %% for %r and %r', x, y));
				$pyjs.track.lineno=120;
				eq(x, (typeof ($add11=(typeof ($mul17=q)==typeof ($mul18=y) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))==typeof ($add12=r) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12)), $m['Frm']('x != q*y + r after divmod on x=%r, y=%r', x, y));
				$pyjs.track.lineno=121;
				if ((($bool11=((($cmp17=y)===($cmp18=$constant_int_0)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					$pyjs.track.lineno=122;
					self['assert_']((((($cmp19=$constant_int_0)===($cmp20=($compare5 = r))?0:
						(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
							($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
							$p['cmp']($cmp19, $cmp20))) < 1)&&((($cmp21=$compare5)===($cmp22=($compare6 = y))?0:
						(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
							($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
							$p['cmp']($cmp21, $cmp22))) == -1)), $m['Frm']('bad mod from divmod on %r and %r', x, y));
				}
				else {
					$pyjs.track.lineno=124;
					self['assert_']((((($cmp23=y)===($cmp24=($compare7 = r))?0:
						(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
							($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
							$p['cmp']($cmp23, $cmp24))) == -1)&&((($cmp25=$compare7)===($cmp26=($compare8 = $constant_int_0))?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))) < 1)), $m['Frm']('bad mod from divmod on %r and %r', x, y));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['check_division'] = $method;
			$pyjs.track.lineno=127;
			$method = $pyjs__bind_method2('test_division', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_type,$bool12,$bool13,$bool14,$iter4_type,lenx,$iter3_idx,$iter3_array,$add21,$add20,$add22,$iter3_iter,$mul22,$mul20,$mul21,y,$sub12,$sub11,$add14,$add15,$add16,$add17,$iter4_iter,$add13,$div2,$div3,leny,$div1,$add18,$add19,$div4,digits,$iter4_nextval,$mul19,$iter4_idx,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter4_array,x,$iter3_nextval;
				$pyjs.track={module:'LongTypeTest', lineno:127};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=127;
				$pyjs.track.lineno=128;
				if ((($bool12=$m['do_minimal_checks']) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					$pyjs.track.lineno=128;
					$pyjs.track.lineno=128;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=129;
				if ((($bool13=$m['do_all_checks']) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					$pyjs.track.lineno=130;
					digits = (typeof ($add17=$p['range']($constant_int_1, (typeof ($add13=$m['MAXDIGITS'])==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14))))==typeof ($add18=$p['range']($m['KARATSUBA_CUTOFF'], (typeof ($add15=$m['KARATSUBA_CUTOFF'])==typeof ($add16=$constant_int_14) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16)))) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18));
				}
				else {
					$pyjs.track.lineno=133;
					digits = $p['list']([$constant_int_1, $constant_int_2, $p['int']((typeof ($div1=$m['MAXDIGITS'])==typeof ($div2=$constant_int_3) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2))), (typeof ($mul19=$constant_int_2)==typeof ($mul20=$p['int']((typeof ($div3=$m['MAXDIGITS'])==typeof ($div4=$constant_int_3) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)))) && typeof $mul19=='number'?
						$mul19*$mul20:
						$p['op_mul']($mul19,$mul20)), (typeof ($sub11=$m['MAXDIGITS'])==typeof ($sub12=$constant_int_1) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12)), $m['MAXDIGITS'], (typeof ($add19=$m['MAXDIGITS'])==typeof ($add20=$constant_int_2) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20)), $m['KARATSUBA_CUTOFF'], (typeof ($add21=$m['KARATSUBA_CUTOFF'])==typeof ($add22=$constant_int_14) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22))]);
				}
				$pyjs.track.lineno=136;
				digits['append']((typeof ($mul21=$m['KARATSUBA_CUTOFF'])==typeof ($mul22=$constant_int_3) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)));
				$pyjs.track.lineno=137;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = digits;
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					lenx = $iter3_nextval;
					$pyjs.track.lineno=138;
					x = self['getran'](lenx);
					$pyjs.track.lineno=139;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter4_iter = digits;
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						leny = $iter4_nextval;
						$pyjs.track.lineno=141;
						y = self['getran'](leny);
						$pyjs.track.lineno=142;
						if ((($bool14=$p['op_eq'](y, $constant_long_0)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
								false :
								(typeof $bool14=='object'?
									(typeof $bool14.__nonzero__=='function'?
										$bool14.__nonzero__() :
										(typeof $bool14.__len__=='function'?
											($bool14.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=142;
							y = $constant_long_1;
						}
						$pyjs.track.lineno=143;
						self['check_division'](x, y);
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='LongTypeTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='LongTypeTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_division'] = $method;
			$pyjs.track.lineno=145;
			$method = $pyjs__bind_method2('test_karatsuba', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub20,$add31,$iter6_type,$bool15,$bool16,$bool17,$cmp27,$cmp28,$iter6_iter,$iter6_nextval,$add29,$add28,bbits,$add25,$add24,$add27,$add26,$pyjs_try_err,$mul29,$mul26,$mul24,$mul25,bits,$mul23,a,$sub19,$sub18,$iter6_idx,$sub13,$iter7_iter,$sub17,$sub16,$sub15,$sub14,$iter6_array,b,$iter7_idx,digits,$iter7_type,$iter7_nextval,abits,$add30,$iter7_array,$mul30,$add32,$pyjs__trackstack_size_2,$pyjs__trackstack_size_3,y,x,$add23;
				$pyjs.track={module:'LongTypeTest', lineno:145};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=145;
				$pyjs.track.lineno=146;
				if ((($bool15=$m['do_minimal_checks']) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					$pyjs.track.lineno=146;
					$pyjs.track.lineno=146;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=147;
				if ((($bool16=$m['do_all_checks']) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=148;
					digits = (typeof ($add25=$p['range']($constant_int_1, $constant_int_5))==typeof ($add26=$p['range']($m['KARATSUBA_CUTOFF'], (typeof ($add23=$m['KARATSUBA_CUTOFF'])==typeof ($add24=$constant_int_10) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24)))) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26));
				}
				else {
					$pyjs.track.lineno=150;
					digits = $p['list']([$constant_int_1, $constant_int_5, $m['KARATSUBA_CUTOFF'], (typeof ($add27=$m['KARATSUBA_CUTOFF'])==typeof ($add28=$constant_int_10) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28))]);
				}
				$pyjs.track.lineno=151;
				digits['extend']($p['list']([(typeof ($mul23=$m['KARATSUBA_CUTOFF'])==typeof ($mul24=$constant_int_10) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)), (typeof ($mul25=$m['KARATSUBA_CUTOFF'])==typeof ($mul26=$constant_int_100) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26))]));
				$pyjs.track.lineno=153;
				bits = function(){
					var $iter5_nextval,digit,$mul27,$iter5_idx,$pyjs__trackstack_size_1,$collcomp1,$iter5_iter,$mul28,$iter5_array,$iter5_type;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = digits;
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					digit = $iter5_nextval;
					$collcomp1['append']((typeof ($mul27=digit)==typeof ($mul28=$m['SHIFT']) && typeof $mul27=='number'?
						$mul27*$mul28:
						$p['op_mul']($mul27,$mul28)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='LongTypeTest';

	return $collcomp1;}();
				$pyjs.track.lineno=157;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=158;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter6_iter = bits;
					if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
						$iter6_type = 0;
					} else {
						$iter6_iter = $iter6_iter.__iter__();
						$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter6_idx = 0;
					while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
						abits = $iter6_nextval;
						$pyjs.track.lineno=159;
						a = (typeof ($sub13=$p['op_bitshiftleft']($constant_long_1,abits))==typeof ($sub14=$constant_int_1) && (typeof $sub13=='number'||typeof $sub13=='string')?
							$sub13-$sub14:
							$p['op_sub']($sub13,$sub14));
						$pyjs.track.lineno=160;
						$pyjs__trackstack_size_3=$pyjs.trackstack.length;
						$iter7_iter = bits;
						if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
							$iter7_type = 0;
						} else {
							$iter7_iter = $iter7_iter.__iter__();
							$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter7_idx = 0;
						while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
							bbits = $iter7_nextval;
							$pyjs.track.lineno=161;
							if ((($bool17=((($cmp27=bbits)===($cmp28=abits)?0:
								(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
									($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
									$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
								$pyjs.track.lineno=162;
								continue;
							}
							$pyjs.track.lineno=163;
							b = (typeof ($sub15=$p['op_bitshiftleft']($constant_long_1,bbits))==typeof ($sub16=$constant_int_1) && (typeof $sub15=='number'||typeof $sub15=='string')?
								$sub15-$sub16:
								$p['op_sub']($sub15,$sub16));
							$pyjs.track.lineno=164;
							x = (typeof ($mul29=a)==typeof ($mul30=b) && typeof $mul29=='number'?
								$mul29*$mul30:
								$p['op_mul']($mul29,$mul30));
							$pyjs.track.lineno=165;
							y = (typeof ($add31=(typeof ($sub19=(typeof ($sub17=$p['op_bitshiftleft']($constant_long_1,(typeof ($add29=abits)==typeof ($add30=bbits) && (typeof $add29=='number'||typeof $add29=='string')?
								$add29+$add30:
								$p['op_add']($add29,$add30))))==typeof ($sub18=$p['op_bitshiftleft']($constant_long_1,abits)) && (typeof $sub17=='number'||typeof $sub17=='string')?
								$sub17-$sub18:
								$p['op_sub']($sub17,$sub18)))==typeof ($sub20=$p['op_bitshiftleft']($constant_long_1,bbits)) && (typeof $sub19=='number'||typeof $sub19=='string')?
								$sub19-$sub20:
								$p['op_sub']($sub19,$sub20)))==typeof ($add32=$constant_int_1) && (typeof $add31=='number'||typeof $add31=='string')?
								$add31+$add32:
								$p['op_add']($add31,$add32));
							$pyjs.track.lineno=169;
							self['assertEqual'](x, y, $m['Frm']('bad result for a*b: a=%r, b=%r, x=%r, y=%r', a, b, x, y));
						}
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_3) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_3);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='LongTypeTest';
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='LongTypeTest';
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
					$pyjs.track.module='LongTypeTest';
					if (true) {
						$pyjs.track.lineno=172;
						$pyjs.track.lineno=173;
						$pyjs.track.lineno=174;
						$pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__;
						$pyjs.__last_exception_stack__ = null;
						throw ($pyjs.__last_exception__?
							$pyjs.__last_exception__.error:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_karatsuba'] = $method;
			$pyjs.track.lineno=176;
			$method = $pyjs__bind_method2('check_bitop_identities_1', function(x) {
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
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$bool18,$sub21,$sub24,$bool19,$iter8_iter,eq,$pow4,$pow3,$sub23,$iter8_idx,$iter8_type,$iter8_nextval,$mul34,p2,$add33,$iter8_array,$add34,n,$floordiv4,$floordiv3,$pyjs__trackstack_size_1,$mul31,$mul33,$mul32;
				$pyjs.track={module:'LongTypeTest', lineno:176};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=176;
				$pyjs.track.lineno=177;
				eq = $p['getattr'](self, 'assertEqual');
				$pyjs.track.lineno=178;
				eq($p['op_bitand2'](x, $constant_int_0), $constant_int_0, $m['Frm']('x & 0 != 0 for x=%r', x));
				$pyjs.track.lineno=179;
				eq($p['op_bitor2'](x, $constant_int_0), x, $m['Frm']('x | 0 != x for x=%r', x));
				$pyjs.track.lineno=180;
				eq($p['op_bitxor2'](x, $constant_int_0), x, $m['Frm']('x ^ 0 != x for x=%r', x));
				$pyjs.track.lineno=181;
				eq($p['op_bitand2'](x, (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4))), x, $m['Frm']('x & -1 != x for x=%r', x));
				$pyjs.track.lineno=182;
				eq($p['op_bitor2'](x, (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$p['op_usub']($usub5))), (typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)), $m['Frm']('x | -1 != -1 for x=%r', x));
				$pyjs.track.lineno=183;
				eq($p['op_bitxor2'](x, (typeof ($usub7=$constant_int_1)=='number'?
					-$usub7:
					$p['op_usub']($usub7))), $p['op_invert'](x), $m['Frm']('x ^ -1 != ~x for x=%r', x));
				$pyjs.track.lineno=184;
				eq(x, $p['op_invert']($p['op_invert'](x)), $m['Frm']('x != ~~x for x=%r', x));
				$pyjs.track.lineno=185;
				eq($p['op_bitand2'](x, x), x, $m['Frm']('x & x != x for x=%r', x));
				$pyjs.track.lineno=186;
				eq($p['op_bitor2'](x, x), x, $m['Frm']('x | x != x for x=%r', x));
				$pyjs.track.lineno=187;
				eq($p['op_bitxor2'](x, x), $constant_int_0, $m['Frm']('x ^ x != 0 for x=%r', x));
				$pyjs.track.lineno=188;
				eq($p['op_bitand2'](x, $p['op_invert'](x)), $constant_int_0, $m['Frm']('x & ~x != 0 for x=%r', x));
				$pyjs.track.lineno=189;
				eq($p['op_bitor2'](x, $p['op_invert'](x)), (typeof ($usub8=$constant_int_1)=='number'?
					-$usub8:
					$p['op_usub']($usub8)), $m['Frm']('x | ~x != -1 for x=%r', x));
				$pyjs.track.lineno=190;
				eq($p['op_bitxor2'](x, $p['op_invert'](x)), (typeof ($usub9=$constant_int_1)=='number'?
					-$usub9:
					$p['op_usub']($usub9)), $m['Frm']('x ^ ~x != -1 for x=%r', x));
				$pyjs.track.lineno=191;
				eq((typeof ($usub10=x)=='number'?
					-$usub10:
					$p['op_usub']($usub10)), (typeof ($add33=$constant_int_1)==typeof ($add34=$p['op_invert'](x)) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34)), $m['Frm']('not -x == 1 + ~x for x=%r', x));
				$pyjs.track.lineno=192;
				eq((typeof ($usub11=x)=='number'?
					-$usub11:
					$p['op_usub']($usub11)), $p['op_invert']((typeof ($sub21=x)==typeof ($sub22=$constant_int_1) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22))), $m['Frm']('not -x == ~(x-1) for x=%r', x));
				$pyjs.track.lineno=193;
				if ((($bool19=!(($bool18=$m['do_all_checks']) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18.__nonzero__=='function'?
							$bool18.__nonzero__() :
							(typeof $bool18.__len__=='function'?
								($bool18.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					$pyjs.track.lineno=194;
					$pyjs.track.lineno=194;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=195;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter8_iter = $p['xrange']((typeof ($mul31=$constant_int_2)==typeof ($mul32=$m['SHIFT']) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32)));
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					n = $iter8_nextval;
					$pyjs.track.lineno=196;
					p2 = (typeof ($pow3=$constant_long_2)==typeof ($pow4=n) && typeof $pow3=='number'?
						Math.pow($pow3,$pow4):
						$p['op_pow']($pow3,$pow4));
					$pyjs.track.lineno=197;
					eq($p['op_bitshiftright']($p['op_bitshiftleft'](x,n),n), x, $m['Frm']('x << n >> n != x for x=%r, n=%r', $p['tuple']([x, n])));
					$pyjs.track.lineno=199;
					eq((typeof ($floordiv3=x)==typeof ($floordiv4=p2) && typeof $floordiv3=='number' && $floordiv4 !== 0?
						Math.floor($floordiv3/$floordiv4):
						$p['op_floordiv']($floordiv3,$floordiv4)), $p['op_bitshiftright'](x,n), $m['Frm']('x // p2 != x >> n for x=%r n=%r p2=%r', $p['tuple']([x, n, p2])));
					$pyjs.track.lineno=201;
					eq((typeof ($mul33=x)==typeof ($mul34=p2) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34)), $p['op_bitshiftleft'](x,n), $m['Frm']('x * p2 != x << n for x=%r n=%r p2=%r', $p['tuple']([x, n, p2])));
					$pyjs.track.lineno=203;
					eq($p['op_bitand2'](x, (typeof ($usub12=p2)=='number'?
						-$usub12:
						$p['op_usub']($usub12))), $p['op_bitshiftleft']($p['op_bitshiftright'](x,n),n), $m['Frm']('not x & -p2 == x >> n << n for x=%r n=%r p2=%r', $p['tuple']([x, n, p2])));
					$pyjs.track.lineno=205;
					eq($p['op_bitand2'](x, (typeof ($usub13=p2)=='number'?
						-$usub13:
						$p['op_usub']($usub13))), $p['op_bitand2'](x, $p['op_invert']((typeof ($sub23=p2)==typeof ($sub24=$constant_int_1) && (typeof $sub23=='number'||typeof $sub23=='string')?
						$sub23-$sub24:
						$p['op_sub']($sub23,$sub24)))), $m['Frm']('not x & -p2 == x & ~(p2 - 1) for x=%r n=%r p2=%r', $p['tuple']([x, n, p2])));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='LongTypeTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['check_bitop_identities_1'] = $method;
			$pyjs.track.lineno=208;
			$method = $pyjs__bind_method2('check_bitop_identities_2', function(x, y) {
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
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var eq;
				$pyjs.track={module:'LongTypeTest', lineno:208};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=208;
				$pyjs.track.lineno=209;
				eq = $p['getattr'](self, 'assertEqual');
				$pyjs.track.lineno=210;
				eq($p['op_bitand2'](x, y), $p['op_bitand2'](y, x), $m['Frm']('x & y != y & x for x=%r, y=%r', $p['tuple']([x, y])));
				$pyjs.track.lineno=211;
				eq($p['op_bitor2'](x, y), $p['op_bitor2'](y, x), $m['Frm']('x | y != y | x for x=%r, y=%r', $p['tuple']([x, y])));
				$pyjs.track.lineno=212;
				eq($p['op_bitxor2'](x, y), $p['op_bitxor2'](y, x), $m['Frm']('x ^ y != y ^ x for x=%r, y=%r', $p['tuple']([x, y])));
				$pyjs.track.lineno=213;
				eq($p['op_bitxor']([x, y, x]), y, $m['Frm']('x ^ y ^ x != y for x=%r, y=%r', $p['tuple']([x, y])));
				$pyjs.track.lineno=214;
				eq($p['op_bitand2'](x, y), $p['op_invert']($p['op_bitor2']($p['op_invert'](x), $p['op_invert'](y))), $m['Frm']('x & y != ~(~x | ~y) for x=%r, y=%r', $p['tuple']([x, y])));
				$pyjs.track.lineno=215;
				eq($p['op_bitor2'](x, y), $p['op_invert']($p['op_bitand2']($p['op_invert'](x), $p['op_invert'](y))), $m['Frm']('x | y != ~(~x & ~y) for x=%r, y=%r', $p['tuple']([x, y])));
				$pyjs.track.lineno=216;
				eq($p['op_bitxor2'](x, y), $p['op_bitand2']($p['op_bitor2'](x, y), $p['op_invert']($p['op_bitand2'](x, y))), $m['Frm']('x ^ y != (x | y) & ~(x & y) for x=%r, y=%r', $p['tuple']([x, y])));
				$pyjs.track.lineno=218;
				eq($p['op_bitxor2'](x, y), $p['op_bitor2']($p['op_bitand2'](x, $p['op_invert'](y)), $p['op_bitand2']($p['op_invert'](x), y)), $m['Frm']('x ^ y == (x & ~y) | (~x & y) for x=%r, y=%r', $p['tuple']([x, y])));
				$pyjs.track.lineno=220;
				eq($p['op_bitxor2'](x, y), $p['op_bitand2']($p['op_bitor2'](x, y), $p['op_bitor2']($p['op_invert'](x), $p['op_invert'](y))), $m['Frm']('x ^ y == (x | y) & (~x | ~y) for x=%r, y=%r', $p['tuple']([x, y])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['check_bitop_identities_2'] = $method;
			$pyjs.track.lineno=223;
			$method = $pyjs__bind_method2('check_bitop_identities_3', function(x, y, z) {
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
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var eq;
				$pyjs.track={module:'LongTypeTest', lineno:223};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=223;
				$pyjs.track.lineno=224;
				eq = $p['getattr'](self, 'assertEqual');
				$pyjs.track.lineno=225;
				eq($p['op_bitand2']($p['op_bitand2'](x, y), z), $p['op_bitand2'](x, $p['op_bitand2'](y, z)), $m['Frm']('(x & y) & z != x & (y & z) for x=%r, y=%r, z=%r', $p['tuple']([x, y, z])));
				$pyjs.track.lineno=227;
				eq($p['op_bitor2']($p['op_bitor2'](x, y), z), $p['op_bitor2'](x, $p['op_bitor2'](y, z)), $m['Frm']('(x | y) | z != x | (y | z) for x=%r, y=%r, z=%r', $p['tuple']([x, y, z])));
				$pyjs.track.lineno=229;
				eq($p['op_bitxor2']($p['op_bitxor2'](x, y), z), $p['op_bitxor2'](x, $p['op_bitxor2'](y, z)), $m['Frm']('(x ^ y) ^ z != x ^ (y ^ z) for x=%r, y=%r, z=%r', $p['tuple']([x, y, z])));
				$pyjs.track.lineno=231;
				eq($p['op_bitand2'](x, $p['op_bitor2'](y, z)), $p['op_bitor2']($p['op_bitand2'](x, y), $p['op_bitand2'](x, z)), $m['Frm']('x & (y | z) != (x & y) | (x & z) for x=%r, y=%r, z=%r', $p['tuple']([x, y, z])));
				$pyjs.track.lineno=233;
				eq($p['op_bitor2'](x, $p['op_bitand2'](y, z)), $p['op_bitand2']($p['op_bitor2'](x, y), $p['op_bitor2'](x, z)), $m['Frm']('x | (y & z) != (x | y) & (x | z) for x=%r, y=%r, z=%r', $p['tuple']([x, y, z])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['z']]);
			$cls_definition['check_bitop_identities_3'] = $method;
			$pyjs.track.lineno=236;
			$method = $pyjs__bind_method2('test_bitop_identities', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,$iter10_iter,leny,$iter9_iter,$iter9_nextval,$iter9_idx,$bool21,$bool20,$bool22,$iter11_idx,$iter9_type,$iter11_iter,$iter10_idx,y,$iter11_array,$iter11_nextval,lenx,digits,$add38,$iter11_type,$add36,$add37,$iter10_array,$add35,$floordiv6,$floordiv5,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter10_type,x,$iter9_array;
				$pyjs.track={module:'LongTypeTest', lineno:236};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=236;
				$pyjs.track.lineno=237;
				if ((($bool20=$m['do_minimal_checks']) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					$pyjs.track.lineno=237;
					$pyjs.track.lineno=237;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=238;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter9_iter = $m['special'];
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					x = $iter9_nextval;
					$pyjs.track.lineno=239;
					self['check_bitop_identities_1'](x);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=240;
				if ((($bool22=!(($bool21=$m['do_all_checks']) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					$pyjs.track.lineno=241;
					$pyjs.track.lineno=241;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=242;
				digits = $p['xrange']($constant_int_1, (typeof ($add35=$m['MAXDIGITS'])==typeof ($add36=$constant_int_1) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36)));
				$pyjs.track.lineno=243;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter10_iter = digits;
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					lenx = $iter10_nextval;
					$pyjs.track.lineno=244;
					x = self['getran'](lenx);
					$pyjs.track.lineno=245;
					self['check_bitop_identities_1'](x);
					$pyjs.track.lineno=246;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter11_iter = digits;
					if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
						$iter11_type = 0;
					} else {
						$iter11_iter = $iter11_iter.__iter__();
						$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter11_idx = 0;
					while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
						leny = $iter11_nextval;
						$pyjs.track.lineno=247;
						y = self['getran'](leny);
						$pyjs.track.lineno=248;
						self['check_bitop_identities_2'](x, y);
						$pyjs.track.lineno=249;
						self['check_bitop_identities_3'](x, y, self['getran']((typeof ($floordiv5=(typeof ($add37=lenx)==typeof ($add38=leny) && (typeof $add37=='number'||typeof $add37=='string')?
							$add37+$add38:
							$p['op_add']($add37,$add38)))==typeof ($floordiv6=$constant_int_2) && typeof $floordiv5=='number' && $floordiv6 !== 0?
							Math.floor($floordiv5/$floordiv6):
							$p['op_floordiv']($floordiv5,$floordiv6))));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='LongTypeTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='LongTypeTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_bitop_identities'] = $method;
			$pyjs.track.lineno=251;
			$method = $pyjs__bind_method2('slow_format', function(x, base) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					base = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda3,sign,$cmp29,$add44,$add43,$add42,$add41,$add40,$bool25,$bool24,$bool27,$bool26,$bool23,$6,$5,$cmp30,digits,$add39,r;
				$pyjs.track={module:'LongTypeTest', lineno:251};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=251;
				$pyjs.track.lineno=252;
				if ((($bool23=$p['op_eq']($p['tuple']([x, base]), $p['tuple']([$constant_int_0, $constant_int_8]))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					$pyjs.track.lineno=254;
					$pyjs.track.lineno=254;
					var $pyjs__ret = '0L';
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=255;
				digits = $p['list']([]);
				$pyjs.track.lineno=256;
				sign = $constant_int_0;
				$pyjs.track.lineno=257;
				if ((($bool24=((($cmp29=x)===($cmp30=$constant_int_0)?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))) == -1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					$pyjs.track.lineno=258;
					var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$constant_int_1, (typeof ($usub14=x)=='number'?
						-$usub14:
						$p['op_usub']($usub14))]), 2, null);
					sign = $tupleassign4[0];
					x = $tupleassign4[1];
				}
				$pyjs.track.lineno=259;
				while ((($bool25=x) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					$pyjs.track.lineno=260;
					var $tupleassign5 = $p['__ass_unpack']($p['divmod'](x, base), 2, null);
					x = $tupleassign5[0];
					r = $tupleassign5[1];
					$pyjs.track.lineno=261;
					digits['append']($p['int'](r));
				}
				$pyjs.track.lineno=262;
				digits['reverse']();
				$pyjs.track.lineno=264;
				if ((($bool27=!(($bool26=digits) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					$pyjs.track.lineno=264;
					digits = $p['list']([$constant_int_0]);
				}
				$pyjs.track.lineno=265;
				var 				$lambda3 = function(i) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $7,$8;
					$pyjs.track={module:'LongTypeTest',lineno:267};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='LongTypeTest';
					$pyjs.track.lineno=267;
					$pyjs.track.lineno=267;
					$pyjs.track.lineno=267;
					var $pyjs__ret = (typeof ($7='0123456789abcdef').__array != 'undefined'?
						((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(i));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				$lambda3.__name__ = '$lambda3';

				$lambda3.__bind_type__ = 0;
				$lambda3.__args__ = [null,null,['i']];
				$pyjs.track.lineno=265;
				var $pyjs__ret = (typeof ($add43=(typeof ($add41=(typeof ($add39=$p['__getslice']('-', 0, sign))==typeof ($add40=(typeof ($5=$p['dict']([[$constant_int_8, '0'], [$constant_int_10, ''], [$constant_int_16, '0x']])).__array != 'undefined'?
					((typeof $5.__array[$6=base]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(base))) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40)))==typeof ($add42=''['join']($p['map']($lambda3, digits))) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42)))==typeof ($add44='L') && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x'],['base']]);
			$cls_definition['slow_format'] = $method;
			$pyjs.track.lineno=269;
			$method = $pyjs__bind_method2('check_format_1', function(x) {
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
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_type,mapper,got,$iter12_array,$iter12_iter,msg,base,$pyjs__trackstack_size_1,expected,$iter12_idx,$iter12_nextval;
				$pyjs.track={module:'LongTypeTest', lineno:269};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=269;
				$pyjs.track.lineno=270;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter12_iter = $p['tuple']([$p['tuple']([$constant_int_8, $p['oct']]), $p['tuple']([$constant_int_10, $p['repr']]), $p['tuple']([$constant_int_16, $p['hex']])]);
				if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter.__iter__();
					$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					var $tupleassign6 = $p['__ass_unpack']($iter12_nextval, 2, null);
					base = $tupleassign6[0];
					mapper = $tupleassign6[1];
					$pyjs.track.lineno=271;
					got = mapper(x);
					$pyjs.track.lineno=272;
					expected = self['slow_format'](x, base);
					$pyjs.track.lineno=273;
					msg = $m['Frm']('%s returned %r but expected %r for %r', $p['getattr'](mapper, '__name__'), got, expected, x);
					$pyjs.track.lineno=275;
					self['assertEqual'](got, expected, msg);
					$pyjs.track.lineno=276;
					self['assertEqual']($p['long'](got, $constant_int_0), x, $m['Frm']('long("%s", 0) != %r', got, x));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=279;
				got = $p['str'](x);
				$pyjs.track.lineno=280;
				expected = $p['__getslice'](self['slow_format'](x, $constant_int_10), 0, (typeof ($usub15=$constant_int_1)=='number'?
					-$usub15:
					$p['op_usub']($usub15)));
				$pyjs.track.lineno=281;
				msg = $m['Frm']('%s returned %r but expected %r for %r', $p['getattr'](mapper, '__name__'), got, expected, x);
				$pyjs.track.lineno=283;
				self['assertEqual'](got, expected, msg);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['check_format_1'] = $method;
			$pyjs.track.lineno=285;
			$method = $pyjs__bind_method2('test_format', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs__trackstack_size_1,$iter13_idx,$iter15_idx,$iter13_array,$iter15_iter,$add46,$bool29,$bool28,$iter14_array,$iter14_type,$iter15_array,$iter14_iter,lenx,$iter14_idx,$iter14_nextval,$iter13_nextval,$iter13_iter,i,$iter13_type,$pyjs__trackstack_size_2,$iter15_nextval,$iter15_type,x,$add45;
				$pyjs.track={module:'LongTypeTest', lineno:285};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=285;
				$pyjs.track.lineno=286;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter13_iter = $m['special'];
				if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter.__iter__();
					$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					x = $iter13_nextval;
					$pyjs.track.lineno=287;
					self['check_format_1'](x);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=288;
				if ((($bool29=!(($bool28=$m['do_all_checks']) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					$pyjs.track.lineno=289;
					$pyjs.track.lineno=289;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=290;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter14_iter = $p['xrange']($constant_int_10);
				if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter.__iter__();
					$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					i = $iter14_nextval;
					$pyjs.track.lineno=291;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter15_iter = $p['xrange']($constant_int_1, (typeof ($add45=$m['MAXDIGITS'])==typeof ($add46=$constant_int_1) && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46)));
					if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
						$iter15_type = 0;
					} else {
						$iter15_iter = $iter15_iter.__iter__();
						$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter15_idx = 0;
					while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
						lenx = $iter15_nextval;
						$pyjs.track.lineno=292;
						x = self['getran'](lenx);
						$pyjs.track.lineno=293;
						self['check_format_1'](x);
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='LongTypeTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='LongTypeTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_format'] = $method;
			$pyjs.track.lineno=295;
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
					if (self.prototype.__md5__ !== 'c19571354d5f8e4e9a1ba2b566f0319a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter18_type,sign,$iter16_idx,prefix,$mul42,vv,$iter17_type,$iter16_iter,$pow12,$pow11,$pow10,$pow7,$pow6,$pow5,$iter17_iter,$add61,$add60,$add49,$add48,$add47,$bool33,$mul40,$mul41,$pow9,$pow8,$pyjs__trackstack_size_2,$iter18_idx,$pyjs_try_err,$iter16_type,$iter16_nextval,$iter18_nextval,$pyjs__trackstack_size_3,$iter17_nextval,$iter16_array,$iter18_iter,$and3,$bool34,s,$pyjs__trackstack_size_1,$and4,$iter17_array,L2,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59,$add62,$bool32,ss,$bool30,$bool31,$mul39,$mul38,$iter18_array,v,$mul35,$iter17_idx,$mul37,$mul36,LL;
				$pyjs.track={module:'LongTypeTest', lineno:295};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=295;
				$pyjs.track.lineno=296;
				self['assertEqual']($p['long']($constant_int_314), $constant_long_314);
				$pyjs.track.lineno=297;
				self['assertEqual']($p['long'](3.14), $constant_long_3);
				$pyjs.track.lineno=298;
				self['assertEqual']($p['long']($constant_long_314), $constant_long_314);
				$pyjs.track.lineno=303;
				self['assertTrue']($p['isinstance']($p['long']($constant_int_314), $p['long']));
				$pyjs.track.lineno=304;
				self['assertTrue']($p['isinstance']($p['long'](3.14), $p['long']));
				$pyjs.track.lineno=305;
				self['assertTrue']($p['isinstance']($p['long']($constant_long_314), $p['long']));
				$pyjs.track.lineno=307;
				self['assertEqual']($p['long']((typeof ($usub16=3.14)=='number'?
					-$usub16:
					$p['op_usub']($usub16))), (typeof ($usub17=$constant_long_3)=='number'?
					-$usub17:
					$p['op_usub']($usub17)));
				$pyjs.track.lineno=308;
				self['assertEqual']($p['long'](3.9), $constant_long_3);
				$pyjs.track.lineno=309;
				self['assertEqual']($p['long']((typeof ($usub18=3.9)=='number'?
					-$usub18:
					$p['op_usub']($usub18))), (typeof ($usub19=$constant_long_3)=='number'?
					-$usub19:
					$p['op_usub']($usub19)));
				$pyjs.track.lineno=310;
				self['assertEqual']($p['long'](3.5), $constant_long_3);
				$pyjs.track.lineno=311;
				self['assertEqual']($p['long']((typeof ($usub20=3.5)=='number'?
					-$usub20:
					$p['op_usub']($usub20))), (typeof ($usub21=$constant_long_3)=='number'?
					-$usub21:
					$p['op_usub']($usub21)));
				$pyjs.track.lineno=312;
				self['assertEqual']($p['long']('-3'), (typeof ($usub22=$constant_long_3)=='number'?
					-$usub22:
					$p['op_usub']($usub22)));
				$pyjs.track.lineno=313;
				if ((($bool30=$p['getattr']($m['test_support'], 'have_unicode')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					$pyjs.track.lineno=314;
					self['assertEqual']($p['long']((typeof unicode == "undefined"?$m.unicode:unicode)('-3')), (typeof ($usub23=$constant_long_3)=='number'?
						-$usub23:
						$p['op_usub']($usub23)));
				}
				$pyjs.track.lineno=316;
				self['assertEqual']($p['long']('10', $constant_int_16), $constant_long_16);
				$pyjs.track.lineno=317;
				if ((($bool31=$p['getattr']($m['test_support'], 'have_unicode')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					$pyjs.track.lineno=318;
					self['assertEqual']($p['long']((typeof unicode == "undefined"?$m.unicode:unicode)('10'), $constant_int_16), $constant_long_16);
				}
				$pyjs.track.lineno=320;
				LL = $p['list']([$p['tuple']([(typeof ($add47='1')==typeof ($add48=(typeof ($mul35='0')==typeof ($mul36=$constant_int_20) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36))) && (typeof $add47=='number'||typeof $add47=='string')?
					$add47+$add48:
					$p['op_add']($add47,$add48)), (typeof ($pow5=$constant_long_10)==typeof ($pow6=$constant_int_20) && typeof $pow5=='number'?
					Math.pow($pow5,$pow6):
					$p['op_pow']($pow5,$pow6))]), $p['tuple']([(typeof ($add49='1')==typeof ($add50=(typeof ($mul37='0')==typeof ($mul38=$constant_int_100) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38))) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					$p['op_add']($add49,$add50)), (typeof ($pow7=$constant_long_10)==typeof ($pow8=$constant_int_100) && typeof $pow7=='number'?
					Math.pow($pow7,$pow8):
					$p['op_pow']($pow7,$pow8))])]);
				$pyjs.track.lineno=324;
				L2 = $p['__getslice']($m['L'], 0, null);
				$pyjs.track.lineno=325;
				if ((($bool32=$p['getattr']($m['test_support'], 'have_unicode')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					$pyjs.track.lineno=326;
					L2 = (typeof ($add55=L2)==typeof ($add56=$p['list']([$p['tuple']([(typeof ($add51=(typeof unicode == "undefined"?$m.unicode:unicode)('1'))==typeof ($add52=(typeof ($mul39=(typeof unicode == "undefined"?$m.unicode:unicode)('0'))==typeof ($mul40=$constant_int_20) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40))) && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52)), (typeof ($pow9=$constant_long_10)==typeof ($pow10=$constant_int_20) && typeof $pow9=='number'?
						Math.pow($pow9,$pow10):
						$p['op_pow']($pow9,$pow10))]), $p['tuple']([(typeof ($add53=(typeof unicode == "undefined"?$m.unicode:unicode)('1'))==typeof ($add54=(typeof ($mul41=(typeof unicode == "undefined"?$m.unicode:unicode)('0'))==typeof ($mul42=$constant_int_100) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42))) && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54)), (typeof ($pow11=$constant_long_10)==typeof ($pow12=$constant_int_100) && typeof $pow11=='number'?
						Math.pow($pow11,$pow12):
						$p['op_pow']($pow11,$pow12))])])) && (typeof $add55=='number'||typeof $add55=='string')?
						$add55+$add56:
						$p['op_add']($add55,$add56));
				}
				$pyjs.track.lineno=330;
				L2 = (typeof ($add57=L2)==typeof ($add58=LL) && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					$p['op_add']($add57,$add58));
				$pyjs.track.lineno=331;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter16_iter = L2;
				if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
					$iter16_type = 0;
				} else {
					$iter16_iter = $iter16_iter.__iter__();
					$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter16_idx = 0;
				while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
					var $tupleassign7 = $p['__ass_unpack']($iter16_nextval, 2, null);
					s = $tupleassign7[0];
					v = $tupleassign7[1];
					$pyjs.track.lineno=332;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter17_iter = $p['tuple'](['', '+', '-']);
					if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
						$iter17_type = 0;
					} else {
						$iter17_iter = $iter17_iter.__iter__();
						$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter17_idx = 0;
					while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
						sign = $iter17_nextval;
						$pyjs.track.lineno=333;
						$pyjs__trackstack_size_3=$pyjs.trackstack.length;
						$iter18_iter = $p['tuple'](['', ' ', '\t', '  \t\t  ']);
						if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
							$iter18_type = 0;
						} else {
							$iter18_iter = $iter18_iter.__iter__();
							$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter18_idx = 0;
						while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
							prefix = $iter18_nextval;
							$pyjs.track.lineno=334;
							ss = (typeof ($add61=(typeof ($add59=prefix)==typeof ($add60=sign) && (typeof $add59=='number'||typeof $add59=='string')?
								$add59+$add60:
								$p['op_add']($add59,$add60)))==typeof ($add62=s) && (typeof $add61=='number'||typeof $add61=='string')?
								$add61+$add62:
								$p['op_add']($add61,$add62));
							$pyjs.track.lineno=335;
							vv = v;
							$pyjs.track.lineno=336;
							if ((($bool34=((($bool33=$and3=$p['op_eq'](sign, '-')) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
								false :
								(typeof $bool33=='object'?
									(typeof $bool33.__nonzero__=='function'?
										$bool33.__nonzero__() :
										(typeof $bool33.__len__=='function'?
											($bool33.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?!$p['op_is'](v, $p['ValueError']):$and3)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
								$pyjs.track.lineno=337;
								vv = (typeof ($usub24=v)=='number'?
									-$usub24:
									$p['op_usub']($usub24));
							}
							$pyjs.track.lineno=338;
							var $pyjs__trackstack_size_4 = $pyjs.trackstack.length;
							try {
								$pyjs.track.lineno=339;
								self['assertEqual']($p['long'](ss), $p['long'](vv));
							} catch($pyjs_try_err) {
								$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_4 - 1);
								$pyjs.__active_exception_stack__ = null;
								$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
								var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
								$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
								if ($pyjs.trackstack.length > $pyjs__trackstack_size_4) {
									$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_4);
									$pyjs.track = $pyjs.trackstack.slice(-1)[0];
								}
								$pyjs.track.module='LongTypeTest';
								if (($pyjs_try_err_name == v.__name__)||$p['_isinstance']($pyjs_try_err,v)) {
									$pyjs.track.lineno=341;
								} else if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
									$pyjs.track.lineno=343;
								} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
							}
						}
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_3) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_3);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='LongTypeTest';
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='LongTypeTest';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='LongTypeTest';
				$pyjs.track.lineno=346;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=347;
					v = $p['long']('123\x00');
					$pyjs.track.lineno=348;
					self['fail']("long('123\\0')");
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
					$pyjs.track.module='LongTypeTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						$pyjs.track.lineno=350;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=352;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=353;
					v = $p['long']('53', $constant_int_40);
					$pyjs.track.lineno=354;
					self['fail']("long('53', 40)");
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
					$pyjs.track.module='LongTypeTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						$pyjs.track.lineno=356;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=358;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=359;
					v = $p['long']($constant_int_1, $constant_int_12);
					$pyjs.track.lineno=360;
					self['fail']('long(1, 12)');
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
					$pyjs.track.module='LongTypeTest';
					if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs.track.lineno=362;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=367;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=368;
					v = $p['long']('123\x00', $constant_int_10);
					$pyjs.track.lineno=369;
					self['fail']("long('123\\0', 10)");
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
					$pyjs.track.module='LongTypeTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						$pyjs.track.lineno=371;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=373;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=374;
					v = $p['long']('123\x00 245', $constant_int_20);
					$pyjs.track.lineno=375;
					self['fail']("(long('123\\x00 245', 20)");
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
					$pyjs.track.module='LongTypeTest';
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						$pyjs.track.lineno=377;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=379;
				self['assertEqual']($p['long']('100000000000000000000000000000000', $constant_int_2), $constant_int_4294967296);
				$pyjs.track.lineno=381;
				self['assertEqual']($p['long']('102002022201221111211', $constant_int_3), $constant_int_4294967296);
				$pyjs.track.lineno=382;
				self['assertEqual']($p['long']('10000000000000000', $constant_int_4), $constant_int_4294967296);
				$pyjs.track.lineno=383;
				self['assertEqual']($p['long']('32244002423141', $constant_int_5), $constant_int_4294967296);
				$pyjs.track.lineno=384;
				self['assertEqual']($p['long']('1550104015504', $constant_int_6), $constant_int_4294967296);
				$pyjs.track.lineno=385;
				self['assertEqual']($p['long']('211301422354', $constant_int_7), $constant_int_4294967296);
				$pyjs.track.lineno=386;
				self['assertEqual']($p['long']('40000000000', $constant_int_8), $constant_int_4294967296);
				$pyjs.track.lineno=387;
				self['assertEqual']($p['long']('12068657454', $constant_int_9), $constant_int_4294967296);
				$pyjs.track.lineno=388;
				self['assertEqual']($p['long']('4294967296', $constant_int_10), $constant_int_4294967296);
				$pyjs.track.lineno=389;
				self['assertEqual']($p['long']('1904440554', $constant_int_11), $constant_int_4294967296);
				$pyjs.track.lineno=390;
				self['assertEqual']($p['long']('9ba461594', $constant_int_12), $constant_int_4294967296);
				$pyjs.track.lineno=391;
				self['assertEqual']($p['long']('535a79889', $constant_int_13), $constant_int_4294967296);
				$pyjs.track.lineno=392;
				self['assertEqual']($p['long']('2ca5b7464', $constant_int_14), $constant_int_4294967296);
				$pyjs.track.lineno=393;
				self['assertEqual']($p['long']('1a20dcd81', $constant_int_15), $constant_int_4294967296);
				$pyjs.track.lineno=394;
				self['assertEqual']($p['long']('100000000', $constant_int_16), $constant_int_4294967296);
				$pyjs.track.lineno=395;
				self['assertEqual']($p['long']('a7ffda91', $constant_int_17), $constant_int_4294967296);
				$pyjs.track.lineno=396;
				self['assertEqual']($p['long']('704he7g4', $constant_int_18), $constant_int_4294967296);
				$pyjs.track.lineno=397;
				self['assertEqual']($p['long']('4f5aff66', $constant_int_19), $constant_int_4294967296);
				$pyjs.track.lineno=398;
				self['assertEqual']($p['long']('3723ai4g', $constant_int_20), $constant_int_4294967296);
				$pyjs.track.lineno=399;
				self['assertEqual']($p['long']('281d55i4', $constant_int_21), $constant_int_4294967296);
				$pyjs.track.lineno=400;
				self['assertEqual']($p['long']('1fj8b184', $constant_int_22), $constant_int_4294967296);
				$pyjs.track.lineno=401;
				self['assertEqual']($p['long']('1606k7ic', $constant_int_23), $constant_int_4294967296);
				$pyjs.track.lineno=402;
				self['assertEqual']($p['long']('mb994ag', $constant_int_24), $constant_int_4294967296);
				$pyjs.track.lineno=403;
				self['assertEqual']($p['long']('hek2mgl', $constant_int_25), $constant_int_4294967296);
				$pyjs.track.lineno=404;
				self['assertEqual']($p['long']('dnchbnm', $constant_int_26), $constant_int_4294967296);
				$pyjs.track.lineno=405;
				self['assertEqual']($p['long']('b28jpdm', $constant_int_27), $constant_int_4294967296);
				$pyjs.track.lineno=406;
				self['assertEqual']($p['long']('8pfgih4', $constant_int_28), $constant_int_4294967296);
				$pyjs.track.lineno=407;
				self['assertEqual']($p['long']('76beigg', $constant_int_29), $constant_int_4294967296);
				$pyjs.track.lineno=408;
				self['assertEqual']($p['long']('5qmcpqg', $constant_int_30), $constant_int_4294967296);
				$pyjs.track.lineno=409;
				self['assertEqual']($p['long']('4q0jto4', $constant_int_31), $constant_int_4294967296);
				$pyjs.track.lineno=410;
				self['assertEqual']($p['long']('4000000', $constant_int_32), $constant_int_4294967296);
				$pyjs.track.lineno=411;
				self['assertEqual']($p['long']('3aokq94', $constant_int_33), $constant_int_4294967296);
				$pyjs.track.lineno=412;
				self['assertEqual']($p['long']('2qhxjli', $constant_int_34), $constant_int_4294967296);
				$pyjs.track.lineno=413;
				self['assertEqual']($p['long']('2br45qb', $constant_int_35), $constant_int_4294967296);
				$pyjs.track.lineno=414;
				self['assertEqual']($p['long']('1z141z4', $constant_int_36), $constant_int_4294967296);
				$pyjs.track.lineno=416;
				self['assertEqual']($p['long']('100000000000000000000000000000001', $constant_int_2), $constant_int_4294967297);
				$pyjs.track.lineno=418;
				self['assertEqual']($p['long']('102002022201221111212', $constant_int_3), $constant_int_4294967297);
				$pyjs.track.lineno=419;
				self['assertEqual']($p['long']('10000000000000001', $constant_int_4), $constant_int_4294967297);
				$pyjs.track.lineno=420;
				self['assertEqual']($p['long']('32244002423142', $constant_int_5), $constant_int_4294967297);
				$pyjs.track.lineno=421;
				self['assertEqual']($p['long']('1550104015505', $constant_int_6), $constant_int_4294967297);
				$pyjs.track.lineno=422;
				self['assertEqual']($p['long']('211301422355', $constant_int_7), $constant_int_4294967297);
				$pyjs.track.lineno=423;
				self['assertEqual']($p['long']('40000000001', $constant_int_8), $constant_int_4294967297);
				$pyjs.track.lineno=424;
				self['assertEqual']($p['long']('12068657455', $constant_int_9), $constant_int_4294967297);
				$pyjs.track.lineno=425;
				self['assertEqual']($p['long']('4294967297', $constant_int_10), $constant_int_4294967297);
				$pyjs.track.lineno=426;
				self['assertEqual']($p['long']('1904440555', $constant_int_11), $constant_int_4294967297);
				$pyjs.track.lineno=427;
				self['assertEqual']($p['long']('9ba461595', $constant_int_12), $constant_int_4294967297);
				$pyjs.track.lineno=428;
				self['assertEqual']($p['long']('535a7988a', $constant_int_13), $constant_int_4294967297);
				$pyjs.track.lineno=429;
				self['assertEqual']($p['long']('2ca5b7465', $constant_int_14), $constant_int_4294967297);
				$pyjs.track.lineno=430;
				self['assertEqual']($p['long']('1a20dcd82', $constant_int_15), $constant_int_4294967297);
				$pyjs.track.lineno=431;
				self['assertEqual']($p['long']('100000001', $constant_int_16), $constant_int_4294967297);
				$pyjs.track.lineno=432;
				self['assertEqual']($p['long']('a7ffda92', $constant_int_17), $constant_int_4294967297);
				$pyjs.track.lineno=433;
				self['assertEqual']($p['long']('704he7g5', $constant_int_18), $constant_int_4294967297);
				$pyjs.track.lineno=434;
				self['assertEqual']($p['long']('4f5aff67', $constant_int_19), $constant_int_4294967297);
				$pyjs.track.lineno=435;
				self['assertEqual']($p['long']('3723ai4h', $constant_int_20), $constant_int_4294967297);
				$pyjs.track.lineno=436;
				self['assertEqual']($p['long']('281d55i5', $constant_int_21), $constant_int_4294967297);
				$pyjs.track.lineno=437;
				self['assertEqual']($p['long']('1fj8b185', $constant_int_22), $constant_int_4294967297);
				$pyjs.track.lineno=438;
				self['assertEqual']($p['long']('1606k7id', $constant_int_23), $constant_int_4294967297);
				$pyjs.track.lineno=439;
				self['assertEqual']($p['long']('mb994ah', $constant_int_24), $constant_int_4294967297);
				$pyjs.track.lineno=440;
				self['assertEqual']($p['long']('hek2mgm', $constant_int_25), $constant_int_4294967297);
				$pyjs.track.lineno=441;
				self['assertEqual']($p['long']('dnchbnn', $constant_int_26), $constant_int_4294967297);
				$pyjs.track.lineno=442;
				self['assertEqual']($p['long']('b28jpdn', $constant_int_27), $constant_int_4294967297);
				$pyjs.track.lineno=443;
				self['assertEqual']($p['long']('8pfgih5', $constant_int_28), $constant_int_4294967297);
				$pyjs.track.lineno=444;
				self['assertEqual']($p['long']('76beigh', $constant_int_29), $constant_int_4294967297);
				$pyjs.track.lineno=445;
				self['assertEqual']($p['long']('5qmcpqh', $constant_int_30), $constant_int_4294967297);
				$pyjs.track.lineno=446;
				self['assertEqual']($p['long']('4q0jto5', $constant_int_31), $constant_int_4294967297);
				$pyjs.track.lineno=447;
				self['assertEqual']($p['long']('4000001', $constant_int_32), $constant_int_4294967297);
				$pyjs.track.lineno=448;
				self['assertEqual']($p['long']('3aokq95', $constant_int_33), $constant_int_4294967297);
				$pyjs.track.lineno=449;
				self['assertEqual']($p['long']('2qhxjlj', $constant_int_34), $constant_int_4294967297);
				$pyjs.track.lineno=450;
				self['assertEqual']($p['long']('2br45qc', $constant_int_35), $constant_int_4294967297);
				$pyjs.track.lineno=451;
				self['assertEqual']($p['long']('1z141z5', $constant_int_36), $constant_int_4294967297);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_long'] = $method;
			$pyjs.track.lineno=70;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LongTypeTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end LongTypeTest */


/* end module: LongTypeTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'sys', 'random']
*/
