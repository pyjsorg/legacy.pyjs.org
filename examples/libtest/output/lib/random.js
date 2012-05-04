/* start module: random */
$pyjs.loaded_modules['random'] = function (__mod_name__) {
	if($pyjs.loaded_modules['random'].__was_initialized__) return $pyjs.loaded_modules['random'];
	var $m = $pyjs.loaded_modules["random"];
	$m.__repr__ = function() { return "<module: random>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'random';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'random.py, line 1:\n    from __pyjamas__ import JS';
		$m.__track_lines__[5] = 'random.py, line 5:\n    from math import log as _log, exp as _exp, pi as _pi, e as _e, ceil as _ceil';
		$m.__track_lines__[6] = 'random.py, line 6:\n    from math import sqrt as _sqrt, acos as _acos, cos as _cos, sin as _sin';
		$m.__track_lines__[7] = 'random.py, line 7:\n    from os import urandom as _urandom';
		$m.__track_lines__[8] = 'random.py, line 8:\n    from binascii import hexlify as _hexlify';
		$m.__track_lines__[18] = 'random.py, line 18:\n    NV_MAGICCONST = 4 * _exp(-0.5)/_sqrt(2.0)';
		$m.__track_lines__[19] = 'random.py, line 19:\n    TWOPI = 2.0*_pi';
		$m.__track_lines__[20] = 'random.py, line 20:\n    LOG4 = _log(4.0)';
		$m.__track_lines__[21] = 'random.py, line 21:\n    SG_MAGICCONST = 1.0 + _log(4.5)';
		$m.__track_lines__[22] = 'random.py, line 22:\n    BPF = 53        # Number of bits in a float';
		$m.__track_lines__[23] = 'random.py, line 23:\n    RECIP_BPF = 2**-BPF';
		$m.__track_lines__[30] = 'random.py, line 30:\n    import _random';
		$m.__track_lines__[32] = 'random.py, line 32:\n    class Random(_random.Random):';
		$m.__track_lines__[33] = 'random.py, line 33:\n    VERSION = 3     # used by getstate/setstate';
		$m.__track_lines__[35] = 'random.py, line 35:\n    def __init__(self, x=None):';
		$m.__track_lines__[36] = 'random.py, line 36:\n    self.seed(x)';
		$m.__track_lines__[37] = 'random.py, line 37:\n    self.gauss_next = None';
		$m.__track_lines__[39] = 'random.py, line 39:\n    def seed(self, a=None):';
		$m.__track_lines__[46] = 'random.py, line 46:\n    if a is None:';
		$m.__track_lines__[47] = 'random.py, line 47:\n    try:';
		$m.__track_lines__[48] = 'random.py, line 48:\n    a = long(_hexlify(_urandom(16)), 16)';
		$m.__track_lines__[50] = 'random.py, line 50:\n    import time';
		$m.__track_lines__[51] = 'random.py, line 51:\n    a = long(time.time() * 256) # use fractional seconds';
		$m.__track_lines__[53] = 'random.py, line 53:\n    super(Random, self).seed(a)';
		$m.__track_lines__[54] = 'random.py, line 54:\n    self.gauss_next = None';
		$m.__track_lines__[56] = 'random.py, line 56:\n    def getstate(self):';
		$m.__track_lines__[58] = 'random.py, line 58:\n    return self.VERSION, super(Random, self).getstate(), self.gauss_next';
		$m.__track_lines__[60] = 'random.py, line 60:\n    def setstate(self, state):';
		$m.__track_lines__[62] = 'random.py, line 62:\n    version = state[0]';
		$m.__track_lines__[63] = 'random.py, line 63:\n    if version == 3:';
		$m.__track_lines__[64] = 'random.py, line 64:\n    version, internalstate, self.gauss_next = state';
		$m.__track_lines__[65] = 'random.py, line 65:\n    super(Random, self).setstate(internalstate)';
		$m.__track_lines__[67] = 'random.py, line 67:\n    version, internalstate, self.gauss_next = state';
		$m.__track_lines__[72] = 'random.py, line 72:\n    try:';
		$m.__track_lines__[73] = 'random.py, line 73:\n    internalstate = tuple( long(x) % (2**32) for x in internalstate )';
		$m.__track_lines__[75] = 'random.py, line 75:\n    raise TypeError, e';
		$m.__track_lines__[76] = 'random.py, line 76:\n    super(Random, self).setstate(internalstate)';
		$m.__track_lines__[78] = 'random.py, line 78:\n    raise ValueError("state with version %s passed to "';
		$m.__track_lines__[87] = 'random.py, line 87:\n    def __getstate__(self): # for pickle';
		$m.__track_lines__[88] = 'random.py, line 88:\n    return self.getstate()';
		$m.__track_lines__[90] = 'random.py, line 90:\n    def __setstate__(self, state):  # for pickle';
		$m.__track_lines__[91] = 'random.py, line 91:\n    self.setstate(state)';
		$m.__track_lines__[93] = 'random.py, line 93:\n    def __reduce__(self):';
		$m.__track_lines__[94] = 'random.py, line 94:\n    return self.__class__, (), self.getstate()';
		$m.__track_lines__[98] = 'random.py, line 98:\n    def randrange(self, start, stop=None, step=1, fint=int, default=None,';
		$m.__track_lines__[108] = 'random.py, line 108:\n    istart = fint(start)';
		$m.__track_lines__[109] = 'random.py, line 109:\n    if istart != start:';
		$m.__track_lines__[110] = 'random.py, line 110:\n    raise ValueError, "non-integer arg 1 for randrange()"';
		$m.__track_lines__[111] = 'random.py, line 111:\n    if stop is default:';
		$m.__track_lines__[112] = 'random.py, line 112:\n    if istart > 0:';
		$m.__track_lines__[113] = 'random.py, line 113:\n    if istart >= maxwidth:';
		$m.__track_lines__[114] = 'random.py, line 114:\n    return self._randbelow(istart)';
		$m.__track_lines__[115] = 'random.py, line 115:\n    return fint(self.random() * istart)';
		$m.__track_lines__[116] = 'random.py, line 116:\n    raise ValueError, "empty range for randrange()"';
		$m.__track_lines__[119] = 'random.py, line 119:\n    istop = fint(stop)';
		$m.__track_lines__[120] = 'random.py, line 120:\n    if istop != stop:';
		$m.__track_lines__[121] = 'random.py, line 121:\n    raise ValueError, "non-integer stop for randrange()"';
		$m.__track_lines__[122] = 'random.py, line 122:\n    width = istop - istart';
		$m.__track_lines__[123] = 'random.py, line 123:\n    if step == 1 and width > 0:';
		$m.__track_lines__[137] = 'random.py, line 137:\n    if width >= maxwidth:';
		$m.__track_lines__[138] = 'random.py, line 138:\n    return fint(istart + self._randbelow(width))';
		$m.__track_lines__[139] = 'random.py, line 139:\n    return fint(istart + fint(self.random()*width))';
		$m.__track_lines__[140] = 'random.py, line 140:\n    if step == 1:';
		$m.__track_lines__[141] = 'random.py, line 141:\n    raise ValueError, "empty range for randrange() (%d,%d, %d)" % (istart, istop, width)';
		$m.__track_lines__[144] = 'random.py, line 144:\n    istep = fint(step)';
		$m.__track_lines__[145] = 'random.py, line 145:\n    if istep != step:';
		$m.__track_lines__[146] = 'random.py, line 146:\n    raise ValueError, "non-integer step for randrange()"';
		$m.__track_lines__[147] = 'random.py, line 147:\n    if istep > 0:';
		$m.__track_lines__[148] = 'random.py, line 148:\n    n = (width + istep - 1) // istep';
		$m.__track_lines__[150] = 'random.py, line 150:\n    n = (width + istep + 1) // istep';
		$m.__track_lines__[152] = 'random.py, line 152:\n    raise ValueError, "zero step for randrange()"';
		$m.__track_lines__[154] = 'random.py, line 154:\n    if n <= 0:';
		$m.__track_lines__[155] = 'random.py, line 155:\n    raise ValueError, "empty range for randrange()"';
		$m.__track_lines__[157] = 'random.py, line 157:\n    if n >= maxwidth:';
		$m.__track_lines__[158] = 'random.py, line 158:\n    return istart + istep*self._randbelow(n)';
		$m.__track_lines__[159] = 'random.py, line 159:\n    return istart + istep*fint(self.random() * n)';
		$m.__track_lines__[161] = 'random.py, line 161:\n    def randint(self, a, b):';
		$m.__track_lines__[165] = 'random.py, line 165:\n    return self.randrange(a, b+1)';
		$m.__track_lines__[167] = 'random.py, line 167:\n    def _randbelow(self, n, _log=_log, fint=int, _maxwidth=1L<<BPF):';
		$m.__track_lines__[175] = 'random.py, line 175:\n    try:';
		$m.__track_lines__[176] = 'random.py, line 176:\n    getrandbits = self.getrandbits';
		$m.__track_lines__[178] = 'random.py, line 178:\n    pass';
		$m.__track_lines__[184] = 'random.py, line 184:\n    if True:';
		$m.__track_lines__[185] = 'random.py, line 185:\n    k = fint(1.00001 + _log(n-1, 2.0))   # 2**k > n-1 > 2**(k-2)';
		$m.__track_lines__[186] = 'random.py, line 186:\n    r = getrandbits(k)';
		$m.__track_lines__[187] = 'random.py, line 187:\n    while r >= n:';
		$m.__track_lines__[188] = 'random.py, line 188:\n    r = getrandbits(k)';
		$m.__track_lines__[189] = 'random.py, line 189:\n    return long(r)';
		$m.__track_lines__[193] = 'random.py, line 193:\n    return fint(self.random() * n)';
		$m.__track_lines__[197] = 'random.py, line 197:\n    def choice(self, seq):';
		$m.__track_lines__[199] = 'random.py, line 199:\n    return seq[int(self.random() * len(seq))]  # raises IndexError if seq is empty';
		$m.__track_lines__[201] = 'random.py, line 201:\n    def shuffle(self, x, random=None, fint=int):';
		$m.__track_lines__[207] = 'random.py, line 207:\n    if random is None:';
		$m.__track_lines__[208] = 'random.py, line 208:\n    random = self.random';
		$m.__track_lines__[209] = 'random.py, line 209:\n    for i in reversed(xrange(1, len(x))):';
		$m.__track_lines__[211] = 'random.py, line 211:\n    j = fint(random() * (i+1))';
		$m.__track_lines__[212] = 'random.py, line 212:\n    x[i], x[j] = x[j], x[i]';
		$m.__track_lines__[214] = 'random.py, line 214:\n    def sample(self, population, k):';
		$m.__track_lines__[250] = 'random.py, line 250:\n    n = len(population)';
		$m.__track_lines__[251] = 'random.py, line 251:\n    if not 0 <= k <= n:';
		$m.__track_lines__[252] = 'random.py, line 252:\n    raise ValueError, "sample larger than population"';
		$m.__track_lines__[253] = 'random.py, line 253:\n    __random = self.random';
		$m.__track_lines__[254] = 'random.py, line 254:\n    _int = int';
		$m.__track_lines__[255] = 'random.py, line 255:\n    result = [None] * k';
		$m.__track_lines__[256] = 'random.py, line 256:\n    setsize = 21        # size of a small set minus size of an empty list';
		$m.__track_lines__[257] = 'random.py, line 257:\n    if k > 5:';
		$m.__track_lines__[258] = 'random.py, line 258:\n    setsize += 4 ** _ceil(_log(k * 3, 4)) # table size for big sets';
		$m.__track_lines__[259] = 'random.py, line 259:\n    if n <= setsize or hasattr(population, "keys"):';
		$m.__track_lines__[262] = 'random.py, line 262:\n    pool = list(population)';
		$m.__track_lines__[263] = 'random.py, line 263:\n    for i in xrange(k):         # invariant:  non-selected at [0,n-i)';
		$m.__track_lines__[264] = 'random.py, line 264:\n    j = _int(__random() * (n-i))';
		$m.__track_lines__[265] = 'random.py, line 265:\n    result[i] = pool[j]';
		$m.__track_lines__[266] = 'random.py, line 266:\n    pool[j] = pool[n-i-1]   # move non-selected item into vacancy';
		$m.__track_lines__[268] = 'random.py, line 268:\n    try:';
		$m.__track_lines__[269] = 'random.py, line 269:\n    selected = set()';
		$m.__track_lines__[270] = 'random.py, line 270:\n    selected_add = selected.add';
		$m.__track_lines__[271] = 'random.py, line 271:\n    for i in xrange(k):';
		$m.__track_lines__[272] = 'random.py, line 272:\n    j = _int(__random() * n)';
		$m.__track_lines__[273] = 'random.py, line 273:\n    while j in selected:';
		$m.__track_lines__[274] = 'random.py, line 274:\n    j = _int(__random() * n)';
		$m.__track_lines__[275] = 'random.py, line 275:\n    selected_add(j)';
		$m.__track_lines__[276] = 'random.py, line 276:\n    result[i] = population[j]';
		$m.__track_lines__[278] = 'random.py, line 278:\n    if isinstance(population, list):';
		$m.__track_lines__[279] = 'random.py, line 279:\n    raise';
		$m.__track_lines__[280] = 'random.py, line 280:\n    return self.sample(tuple(population), k)';
		$m.__track_lines__[281] = 'random.py, line 281:\n    return result';
		$m.__track_lines__[287] = 'random.py, line 287:\n    def uniform(self, a, b):';
		$m.__track_lines__[289] = 'random.py, line 289:\n    return a + (b-a) * self.random()';
		$m.__track_lines__[293] = 'random.py, line 293:\n    def triangular(self, low=0.0, high=1.0, mode=None):';
		$m.__track_lines__[301] = 'random.py, line 301:\n    u = self.random()';
		$m.__track_lines__[302] = 'random.py, line 302:\n    c = 0.5 if mode is None else (mode - low) / (high - low)';
		$m.__track_lines__[303] = 'random.py, line 303:\n    if u > c:';
		$m.__track_lines__[304] = 'random.py, line 304:\n    u = 1.0 - u';
		$m.__track_lines__[305] = 'random.py, line 305:\n    c = 1.0 - c';
		$m.__track_lines__[306] = 'random.py, line 306:\n    low, high = high, low';
		$m.__track_lines__[307] = 'random.py, line 307:\n    return low + (high - low) * (u * c) ** 0.5';
		$m.__track_lines__[311] = 'random.py, line 311:\n    def normalvariate(self, mu, sigma):';
		$m.__track_lines__[322] = 'random.py, line 322:\n    __random = self.random';
		$m.__track_lines__[323] = 'random.py, line 323:\n    while 1:';
		$m.__track_lines__[324] = 'random.py, line 324:\n    u1 = __random()';
		$m.__track_lines__[325] = 'random.py, line 325:\n    u2 = 1.0 - __random()';
		$m.__track_lines__[326] = 'random.py, line 326:\n    z = NV_MAGICCONST*(u1-0.5)/u2';
		$m.__track_lines__[327] = 'random.py, line 327:\n    zz = z*z/4.0';
		$m.__track_lines__[328] = 'random.py, line 328:\n    if zz <= -_log(u2):';
		$m.__track_lines__[329] = 'random.py, line 329:\n    break';
		$m.__track_lines__[330] = 'random.py, line 330:\n    return mu + z*sigma';
		$m.__track_lines__[334] = 'random.py, line 334:\n    def lognormvariate(self, mu, sigma):';
		$m.__track_lines__[340] = 'random.py, line 340:\n    return _exp(self.normalvariate(mu, sigma))';
		$m.__track_lines__[344] = 'random.py, line 344:\n    def expovariate(self, lambd):';
		$m.__track_lines__[355] = 'random.py, line 355:\n    __random = self.random';
		$m.__track_lines__[356] = 'random.py, line 356:\n    u = __random()';
		$m.__track_lines__[357] = 'random.py, line 357:\n    while u <= 1e-7:';
		$m.__track_lines__[358] = 'random.py, line 358:\n    u = __random()';
		$m.__track_lines__[359] = 'random.py, line 359:\n    return -_log(u)/lambd';
		$m.__track_lines__[363] = 'random.py, line 363:\n    def vonmisesvariate(self, mu, kappa):';
		$m.__track_lines__[381] = 'random.py, line 381:\n    __random = self.random';
		$m.__track_lines__[382] = 'random.py, line 382:\n    if kappa <= 1e-6:';
		$m.__track_lines__[383] = 'random.py, line 383:\n    return TWOPI * __random()';
		$m.__track_lines__[385] = 'random.py, line 385:\n    a = 1.0 + _sqrt(1.0 + 4.0 * kappa * kappa)';
		$m.__track_lines__[386] = 'random.py, line 386:\n    b = (a - _sqrt(2.0 * a))/(2.0 * kappa)';
		$m.__track_lines__[387] = 'random.py, line 387:\n    r = (1.0 + b * b)/(2.0 * b)';
		$m.__track_lines__[389] = 'random.py, line 389:\n    while 1:';
		$m.__track_lines__[390] = 'random.py, line 390:\n    u1 = __random()';
		$m.__track_lines__[392] = 'random.py, line 392:\n    z = _cos(_pi * u1)';
		$m.__track_lines__[393] = 'random.py, line 393:\n    f = (1.0 + r * z)/(r + z)';
		$m.__track_lines__[394] = 'random.py, line 394:\n    c = kappa * (r - f)';
		$m.__track_lines__[396] = 'random.py, line 396:\n    u2 = __random()';
		$m.__track_lines__[398] = 'random.py, line 398:\n    if u2 < c * (2.0 - c) or u2 <= c * _exp(1.0 - c):';
		$m.__track_lines__[399] = 'random.py, line 399:\n    break';
		$m.__track_lines__[401] = 'random.py, line 401:\n    u3 = __random()';
		$m.__track_lines__[402] = 'random.py, line 402:\n    if u3 > 0.5:';
		$m.__track_lines__[403] = 'random.py, line 403:\n    theta = (mu % TWOPI) + _acos(f)';
		$m.__track_lines__[405] = 'random.py, line 405:\n    theta = (mu % TWOPI) - _acos(f)';
		$m.__track_lines__[407] = 'random.py, line 407:\n    return theta';
		$m.__track_lines__[411] = 'random.py, line 411:\n    def gammavariate(self, alpha, beta):';
		$m.__track_lines__[420] = 'random.py, line 420:\n    if alpha <= 0.0 or beta <= 0.0:';
		$m.__track_lines__[421] = "random.py, line 421:\n    raise ValueError, 'gammavariate: alpha and beta must be > 0.0'";
		$m.__track_lines__[423] = 'random.py, line 423:\n    __random = self.random';
		$m.__track_lines__[424] = 'random.py, line 424:\n    if alpha > 1.0:';
		$m.__track_lines__[430] = 'random.py, line 430:\n    ainv = _sqrt(2.0 * alpha - 1.0)';
		$m.__track_lines__[431] = 'random.py, line 431:\n    bbb = alpha - LOG4';
		$m.__track_lines__[432] = 'random.py, line 432:\n    ccc = alpha + ainv';
		$m.__track_lines__[434] = 'random.py, line 434:\n    while 1:';
		$m.__track_lines__[435] = 'random.py, line 435:\n    u1 = __random()';
		$m.__track_lines__[436] = 'random.py, line 436:\n    if not 1e-7 < u1 < .9999999:';
		$m.__track_lines__[437] = 'random.py, line 437:\n    continue';
		$m.__track_lines__[438] = 'random.py, line 438:\n    u2 = 1.0 - __random()';
		$m.__track_lines__[439] = 'random.py, line 439:\n    v = _log(u1/(1.0-u1))/ainv';
		$m.__track_lines__[440] = 'random.py, line 440:\n    x = alpha*_exp(v)';
		$m.__track_lines__[441] = 'random.py, line 441:\n    z = u1*u1*u2';
		$m.__track_lines__[442] = 'random.py, line 442:\n    r = bbb+ccc*v-x';
		$m.__track_lines__[443] = 'random.py, line 443:\n    if r + SG_MAGICCONST - 4.5*z >= 0.0 or r >= _log(z):';
		$m.__track_lines__[444] = 'random.py, line 444:\n    return x * beta';
		$m.__track_lines__[448] = 'random.py, line 448:\n    u = __random()';
		$m.__track_lines__[449] = 'random.py, line 449:\n    while u <= 1e-7:';
		$m.__track_lines__[450] = 'random.py, line 450:\n    u = __random()';
		$m.__track_lines__[451] = 'random.py, line 451:\n    return -_log(u) * beta';
		$m.__track_lines__[457] = 'random.py, line 457:\n    while 1:';
		$m.__track_lines__[458] = 'random.py, line 458:\n    u = __random()';
		$m.__track_lines__[459] = 'random.py, line 459:\n    b = (_e + alpha)/_e';
		$m.__track_lines__[460] = 'random.py, line 460:\n    p = b*u';
		$m.__track_lines__[461] = 'random.py, line 461:\n    if p <= 1.0:';
		$m.__track_lines__[462] = 'random.py, line 462:\n    x = p ** (1.0/alpha)';
		$m.__track_lines__[464] = 'random.py, line 464:\n    x = -_log((b-p)/alpha)';
		$m.__track_lines__[465] = 'random.py, line 465:\n    u1 = __random()';
		$m.__track_lines__[466] = 'random.py, line 466:\n    if p > 1.0:';
		$m.__track_lines__[467] = 'random.py, line 467:\n    if u1 <= x ** (alpha - 1.0):';
		$m.__track_lines__[468] = 'random.py, line 468:\n    break';
		$m.__track_lines__[470] = 'random.py, line 470:\n    break';
		$m.__track_lines__[471] = 'random.py, line 471:\n    return x * beta';
		$m.__track_lines__[475] = 'random.py, line 475:\n    def gauss(self, mu, sigma):';
		$m.__track_lines__[500] = 'random.py, line 500:\n    __random = self.random';
		$m.__track_lines__[501] = 'random.py, line 501:\n    z = self.gauss_next';
		$m.__track_lines__[502] = 'random.py, line 502:\n    self.gauss_next = None';
		$m.__track_lines__[503] = 'random.py, line 503:\n    if z is None:';
		$m.__track_lines__[504] = 'random.py, line 504:\n    x2pi = __random() * TWOPI';
		$m.__track_lines__[505] = 'random.py, line 505:\n    g2rad = _sqrt(-2.0 * _log(1.0 - __random()))';
		$m.__track_lines__[506] = 'random.py, line 506:\n    z = _cos(x2pi) * g2rad';
		$m.__track_lines__[507] = 'random.py, line 507:\n    self.gauss_next = _sin(x2pi) * g2rad';
		$m.__track_lines__[509] = 'random.py, line 509:\n    return mu + z*sigma';
		$m.__track_lines__[525] = 'random.py, line 525:\n    def betavariate(self, alpha, beta):';
		$m.__track_lines__[533] = 'random.py, line 533:\n    y = self.gammavariate(alpha, 1.)';
		$m.__track_lines__[534] = 'random.py, line 534:\n    if y == 0:';
		$m.__track_lines__[535] = 'random.py, line 535:\n    return 0.0';
		$m.__track_lines__[537] = 'random.py, line 537:\n    return y / (y + self.gammavariate(beta, 1.))';
		$m.__track_lines__[541] = 'random.py, line 541:\n    def paretovariate(self, alpha):';
		$m.__track_lines__[545] = 'random.py, line 545:\n    u = 1.0 - self.random()';
		$m.__track_lines__[546] = 'random.py, line 546:\n    return 1.0 / pow(u, 1.0/alpha)';
		$m.__track_lines__[550] = 'random.py, line 550:\n    def weibullvariate(self, alpha, beta):';
		$m.__track_lines__[556] = 'random.py, line 556:\n    u = 1.0 - self.random()';
		$m.__track_lines__[557] = 'random.py, line 557:\n    return alpha * pow(-_log(u), 1.0/beta)';
		$m.__track_lines__[561] = 'random.py, line 561:\n    class WichmannHill(Random):';
		$m.__track_lines__[563] = 'random.py, line 563:\n    VERSION = 1     # used by getstate/setstate';
		$m.__track_lines__[565] = 'random.py, line 565:\n    def seed(self, a=None):';
		$m.__track_lines__[579] = 'random.py, line 579:\n    if a is None:';
		$m.__track_lines__[580] = 'random.py, line 580:\n    try:';
		$m.__track_lines__[581] = 'random.py, line 581:\n    a = long(_hexlify(_urandom(16)), 16)';
		$m.__track_lines__[583] = 'random.py, line 583:\n    import time';
		$m.__track_lines__[584] = 'random.py, line 584:\n    a = long(time.time() * 256) # use fractional seconds';
		$m.__track_lines__[586] = 'random.py, line 586:\n    if not isinstance(a, (int, long)):';
		$m.__track_lines__[587] = 'random.py, line 587:\n    a = hash(a)';
		$m.__track_lines__[589] = 'random.py, line 589:\n    a, x = divmod(a, 30268)';
		$m.__track_lines__[590] = 'random.py, line 590:\n    a, y = divmod(a, 30306)';
		$m.__track_lines__[591] = 'random.py, line 591:\n    a, z = divmod(a, 30322)';
		$m.__track_lines__[592] = 'random.py, line 592:\n    self._seed = int(x)+1, int(y)+1, int(z)+1';
		$m.__track_lines__[594] = 'random.py, line 594:\n    self.gauss_next = None';
		$m.__track_lines__[596] = 'random.py, line 596:\n    def random(self):';
		$m.__track_lines__[616] = 'random.py, line 616:\n    x, y, z = self._seed';
		$m.__track_lines__[617] = 'random.py, line 617:\n    x = (171 * x) % 30269';
		$m.__track_lines__[618] = 'random.py, line 618:\n    y = (172 * y) % 30307';
		$m.__track_lines__[619] = 'random.py, line 619:\n    z = (170 * z) % 30323';
		$m.__track_lines__[620] = 'random.py, line 620:\n    self._seed = x, y, z';
		$m.__track_lines__[625] = 'random.py, line 625:\n    return (x/30269.0 + y/30307.0 + z/30323.0) % 1.0';
		$m.__track_lines__[627] = 'random.py, line 627:\n    def getstate(self):';
		$m.__track_lines__[629] = 'random.py, line 629:\n    return self.VERSION, self._seed, self.gauss_next';
		$m.__track_lines__[631] = 'random.py, line 631:\n    def setstate(self, state):';
		$m.__track_lines__[633] = 'random.py, line 633:\n    version = state[0]';
		$m.__track_lines__[634] = 'random.py, line 634:\n    if version == 1:';
		$m.__track_lines__[635] = 'random.py, line 635:\n    version, self._seed, self.gauss_next = state';
		$m.__track_lines__[637] = 'random.py, line 637:\n    raise ValueError("state with version %s passed to "';
		$m.__track_lines__[641] = 'random.py, line 641:\n    def jumpahead(self, n):';
		$m.__track_lines__[655] = 'random.py, line 655:\n    if not n >= 0:';
		$m.__track_lines__[656] = 'random.py, line 656:\n    raise ValueError("n must be >= 0")';
		$m.__track_lines__[657] = 'random.py, line 657:\n    x, y, z = self._seed';
		$m.__track_lines__[658] = 'random.py, line 658:\n    x = int(x * pow(171, n, 30269)) % 30269';
		$m.__track_lines__[659] = 'random.py, line 659:\n    y = int(y * pow(172, n, 30307)) % 30307';
		$m.__track_lines__[660] = 'random.py, line 660:\n    z = int(z * pow(170, n, 30323)) % 30323';
		$m.__track_lines__[661] = 'random.py, line 661:\n    self._seed = x, y, z';
		$m.__track_lines__[663] = 'random.py, line 663:\n    def __whseed(self, x=0, y=0, z=0):';
		$m.__track_lines__[668] = 'random.py, line 668:\n    if not type(x) == type(y) == type(z) == int:';
		$m.__track_lines__[669] = "random.py, line 669:\n    raise TypeError('seeds must be integers')";
		$m.__track_lines__[670] = 'random.py, line 670:\n    if not (0 <= x < 256 and 0 <= y < 256 and 0 <= z < 256):';
		$m.__track_lines__[671] = "random.py, line 671:\n    raise ValueError('seeds must be in range(0, 256)')";
		$m.__track_lines__[672] = 'random.py, line 672:\n    if 0 == x == y == z:';
		$m.__track_lines__[674] = 'random.py, line 674:\n    import time';
		$m.__track_lines__[675] = 'random.py, line 675:\n    t = long(time.time() * 256)';
		$m.__track_lines__[676] = 'random.py, line 676:\n    t = int((t&0xffffff) ^ (t>>24))';
		$m.__track_lines__[677] = 'random.py, line 677:\n    t, x = divmod(t, 256)';
		$m.__track_lines__[678] = 'random.py, line 678:\n    t, y = divmod(t, 256)';
		$m.__track_lines__[679] = 'random.py, line 679:\n    t, z = divmod(t, 256)';
		$m.__track_lines__[681] = 'random.py, line 681:\n    self._seed = (x or 1, y or 1, z or 1)';
		$m.__track_lines__[683] = 'random.py, line 683:\n    self.gauss_next = None';
		$m.__track_lines__[685] = 'random.py, line 685:\n    def whseed(self, a=None):';
		$m.__track_lines__[696] = 'random.py, line 696:\n    if a is None:';
		$m.__track_lines__[697] = 'random.py, line 697:\n    self.__whseed()';
		$m.__track_lines__[698] = 'random.py, line 698:\n    return';
		$m.__track_lines__[699] = 'random.py, line 699:\n    a = hash(a)';
		$m.__track_lines__[700] = 'random.py, line 700:\n    a, x = divmod(a, 256)';
		$m.__track_lines__[701] = 'random.py, line 701:\n    a, y = divmod(a, 256)';
		$m.__track_lines__[702] = 'random.py, line 702:\n    a, z = divmod(a, 256)';
		$m.__track_lines__[703] = 'random.py, line 703:\n    x = (x + a) % 256 or 1';
		$m.__track_lines__[704] = 'random.py, line 704:\n    y = (y + a) % 256 or 1';
		$m.__track_lines__[705] = 'random.py, line 705:\n    z = (z + a) % 256 or 1';
		$m.__track_lines__[706] = 'random.py, line 706:\n    self.__whseed(x, y, z)';
		$m.__track_lines__[710] = 'random.py, line 710:\n    class SystemRandom(Random):';
		$m.__track_lines__[718] = 'random.py, line 718:\n    def random(self):';
		$m.__track_lines__[720] = 'random.py, line 720:\n    return (long(_hexlify(_urandom(7)), 16) >> 3) * RECIP_BPF';
		$m.__track_lines__[722] = 'random.py, line 722:\n    def getrandbits(self, k):';
		$m.__track_lines__[724] = 'random.py, line 724:\n    if k <= 0:';
		$m.__track_lines__[725] = "random.py, line 725:\n    raise ValueError('number of bits must be greater than zero')";
		$m.__track_lines__[726] = 'random.py, line 726:\n    if k != int(k):';
		$m.__track_lines__[727] = "random.py, line 727:\n    raise TypeError('number of bits should be an integer')";
		$m.__track_lines__[728] = 'random.py, line 728:\n    bytes = (k + 7) // 8                    # bits / 8 and rounded up';
		$m.__track_lines__[729] = 'random.py, line 729:\n    x = long(_hexlify(_urandom(bytes)), 16)';
		$m.__track_lines__[730] = 'random.py, line 730:\n    return x >> (bytes * 8 - k)             # trim excess bits';
		$m.__track_lines__[732] = 'random.py, line 732:\n    def _stub(self, *args, **kwds):';
		$m.__track_lines__[734] = 'random.py, line 734:\n    return None';
		$m.__track_lines__[735] = 'random.py, line 735:\n    seed = jumpahead = _stub';
		$m.__track_lines__[737] = 'random.py, line 737:\n    def _notimplemented(self, *args, **kwds):';
		$m.__track_lines__[739] = "random.py, line 739:\n    raise NotImplementedError('System entropy source does not have state.')";
		$m.__track_lines__[740] = 'random.py, line 740:\n    getstate = setstate = _notimplemented';
		$m.__track_lines__[744] = 'random.py, line 744:\n    def _test_generator(n, func, args):';
		$m.__track_lines__[745] = 'random.py, line 745:\n    import time';
		$m.__track_lines__[746] = "random.py, line 746:\n    print n, 'times', func.__name__";
		$m.__track_lines__[747] = 'random.py, line 747:\n    total = 0.0';
		$m.__track_lines__[748] = 'random.py, line 748:\n    sqsum = 0.0';
		$m.__track_lines__[749] = 'random.py, line 749:\n    smallest = 1e10';
		$m.__track_lines__[750] = 'random.py, line 750:\n    largest = -1e10';
		$m.__track_lines__[751] = 'random.py, line 751:\n    t0 = time.time()';
		$m.__track_lines__[752] = 'random.py, line 752:\n    for i in range(n):';
		$m.__track_lines__[753] = 'random.py, line 753:\n    x = func(*args)';
		$m.__track_lines__[754] = 'random.py, line 754:\n    total += x';
		$m.__track_lines__[755] = 'random.py, line 755:\n    sqsum = sqsum + x*x';
		$m.__track_lines__[756] = 'random.py, line 756:\n    smallest = min(x, smallest)';
		$m.__track_lines__[757] = 'random.py, line 757:\n    largest = max(x, largest)';
		$m.__track_lines__[758] = 'random.py, line 758:\n    t1 = time.time()';
		$m.__track_lines__[759] = "random.py, line 759:\n    print round(t1-t0, 3), 'sec,',";
		$m.__track_lines__[760] = 'random.py, line 760:\n    avg = total/n';
		$m.__track_lines__[761] = 'random.py, line 761:\n    stddev = _sqrt(sqsum/n - avg*avg)';
		$m.__track_lines__[762] = "random.py, line 762:\n    print 'avg %g, stddev %g, min %g, max %g' % \\";
		$m.__track_lines__[766] = 'random.py, line 766:\n    def _test(N=2000):';
		$m.__track_lines__[767] = 'random.py, line 767:\n    _test_generator(N, random, ())';
		$m.__track_lines__[768] = 'random.py, line 768:\n    _test_generator(N, normalvariate, (0.0, 1.0))';
		$m.__track_lines__[769] = 'random.py, line 769:\n    _test_generator(N, lognormvariate, (0.0, 1.0))';
		$m.__track_lines__[770] = 'random.py, line 770:\n    _test_generator(N, vonmisesvariate, (0.0, 1.0))';
		$m.__track_lines__[771] = 'random.py, line 771:\n    _test_generator(N, gammavariate, (0.01, 1.0))';
		$m.__track_lines__[772] = 'random.py, line 772:\n    _test_generator(N, gammavariate, (0.1, 1.0))';
		$m.__track_lines__[773] = 'random.py, line 773:\n    _test_generator(N, gammavariate, (0.1, 2.0))';
		$m.__track_lines__[774] = 'random.py, line 774:\n    _test_generator(N, gammavariate, (0.5, 1.0))';
		$m.__track_lines__[775] = 'random.py, line 775:\n    _test_generator(N, gammavariate, (0.9, 1.0))';
		$m.__track_lines__[776] = 'random.py, line 776:\n    _test_generator(N, gammavariate, (1.0, 1.0))';
		$m.__track_lines__[777] = 'random.py, line 777:\n    _test_generator(N, gammavariate, (2.0, 1.0))';
		$m.__track_lines__[778] = 'random.py, line 778:\n    _test_generator(N, gammavariate, (20.0, 1.0))';
		$m.__track_lines__[779] = 'random.py, line 779:\n    _test_generator(N, gammavariate, (200.0, 1.0))';
		$m.__track_lines__[780] = 'random.py, line 780:\n    _test_generator(N, gauss, (0.0, 1.0))';
		$m.__track_lines__[781] = 'random.py, line 781:\n    _test_generator(N, betavariate, (3.0, 3.0))';
		$m.__track_lines__[782] = 'random.py, line 782:\n    _test_generator(N, triangular, (0.0, 1.0, 1.0/3.0))';
		$m.__track_lines__[790] = 'random.py, line 790:\n    _inst = Random()';
		$m.__track_lines__[791] = "random.py, line 791:\n    seed = getattr(_inst, 'seed')";
		$m.__track_lines__[792] = "random.py, line 792:\n    random = getattr(_inst, 'random')";
		$m.__track_lines__[793] = "random.py, line 793:\n    uniform = getattr(_inst, 'uniform')";
		$m.__track_lines__[794] = "random.py, line 794:\n    triangular = getattr(_inst, 'triangular')";
		$m.__track_lines__[795] = "random.py, line 795:\n    randint = getattr(_inst, 'randint')";
		$m.__track_lines__[796] = "random.py, line 796:\n    choice = getattr(_inst, 'choice')";
		$m.__track_lines__[797] = "random.py, line 797:\n    randrange = getattr(_inst, 'randrange')";
		$m.__track_lines__[798] = "random.py, line 798:\n    sample = getattr(_inst, 'sample')";
		$m.__track_lines__[799] = "random.py, line 799:\n    shuffle = getattr(_inst, 'shuffle')";
		$m.__track_lines__[800] = "random.py, line 800:\n    normalvariate = getattr(_inst, 'normalvariate')";
		$m.__track_lines__[801] = "random.py, line 801:\n    lognormvariate = getattr(_inst, 'lognormvariate')";
		$m.__track_lines__[802] = "random.py, line 802:\n    expovariate = getattr(_inst, 'expovariate')";
		$m.__track_lines__[803] = "random.py, line 803:\n    vonmisesvariate = getattr(_inst, 'vonmisesvariate')";
		$m.__track_lines__[804] = "random.py, line 804:\n    gammavariate = getattr(_inst, 'gammavariate')";
		$m.__track_lines__[805] = "random.py, line 805:\n    gauss = getattr(_inst, 'gauss')";
		$m.__track_lines__[806] = "random.py, line 806:\n    betavariate = getattr(_inst, 'betavariate')";
		$m.__track_lines__[807] = "random.py, line 807:\n    paretovariate = getattr(_inst, 'paretovariate')";
		$m.__track_lines__[808] = "random.py, line 808:\n    weibullvariate = getattr(_inst, 'weibullvariate')";
		$m.__track_lines__[809] = "random.py, line 809:\n    getstate = getattr(_inst, 'getstate')";
		$m.__track_lines__[810] = "random.py, line 810:\n    setstate = getattr(_inst, 'setstate')";
		$m.__track_lines__[811] = "random.py, line 811:\n    jumpahead = getattr(_inst, 'jumpahead')";
		$m.__track_lines__[812] = "random.py, line 812:\n    getrandbits = getattr(_inst, 'getrandbits')";
		$m.__track_lines__[814] = "random.py, line 814:\n    if __name__ == '__main__':";
		$m.__track_lines__[815] = 'random.py, line 815:\n    _test()';
		var $pow2,$pow1,$mul3,$bool77,$add1,$mul4,$div2,$div1,$mul2,$mul1,$add2;
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_21 = new $p['int'](21);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_170 = new $p['int'](170);
		var $constant_int_171 = new $p['int'](171);
		var $constant_int_172 = new $p['int'](172);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_53 = new $p['int'](53);
		var $constant_int_30268 = new $p['int'](30268);
		var $constant_int_30269 = new $p['int'](30269);
		var $constant_int_2000 = new $p['int'](2000);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_30306 = new $p['int'](30306);
		var $constant_int_30307 = new $p['int'](30307);
		var $constant_int_30322 = new $p['int'](30322);
		var $constant_int_30323 = new $p['int'](30323);
		var $constant_int_16777215 = new $p['int'](16777215);
		var $constant_long_1 = new $p['long'](1);
		$pyjs.track.module='random';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_log'] = $p['___import___']('math.log', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_exp'] = $p['___import___']('math.exp', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_pi'] = $p['___import___']('math.pi', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_e'] = $p['___import___']('math.e', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_ceil'] = $p['___import___']('math.ceil', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_sqrt'] = $p['___import___']('math.sqrt', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_acos'] = $p['___import___']('math.acos', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_cos'] = $p['___import___']('math.cos', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_sin'] = $p['___import___']('math.sin', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=7;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_urandom'] = $p['___import___']('os.urandom', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_hexlify'] = $p['___import___']('binascii.hexlify', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=18;
		$m['NV_MAGICCONST'] = (typeof ($div1=(typeof ($mul1=$constant_int_4)==typeof ($mul2=$m['_exp']((typeof ($usub1=0.5)=='number'?
			-$usub1:
			$p['op_usub']($usub1)))) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)))==typeof ($div2=$m['_sqrt'](2.0)) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2));
		$pyjs.track.lineno=19;
		$m['TWOPI'] = (typeof ($mul3=2.0)==typeof ($mul4=$m['_pi']) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4));
		$pyjs.track.lineno=20;
		$m['LOG4'] = $m['_log'](4.0);
		$pyjs.track.lineno=21;
		$m['SG_MAGICCONST'] = (typeof ($add1=1.0)==typeof ($add2=$m['_log'](4.5)) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
		$pyjs.track.lineno=22;
		$m['BPF'] = $constant_int_53;
		$pyjs.track.lineno=23;
		$m['RECIP_BPF'] = (typeof ($pow1=$constant_int_2)==typeof ($pow2=(typeof ($usub2=$m['BPF'])=='number'?
			-$usub2:
			$p['op_usub']($usub2))) && typeof $pow1=='number'?
			Math.pow($pow1,$pow2):
			$p['op_pow']($pow1,$pow2));
		$pyjs.track.lineno=30;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['_random'] = $p['___import___']('_random', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=32;
		$m['Random'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'random';
			$cls_definition.__md5__ = 'cbedf2a898d887ac63f7887a8023045f';
			$pyjs.track.lineno=33;
			$cls_definition['VERSION'] = $constant_int_3;
			$pyjs.track.lineno=35;
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
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];

				$pyjs.track={module:'random', lineno:35};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=35;
				$pyjs.track.lineno=36;
				self['seed'](x);
				$pyjs.track.lineno=37;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=39;
			$method = $pyjs__bind_method2('seed', function(a) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				var $pyjs_try_err,$bool1,time,$mul6,$mul5;
				$pyjs.track={module:'random', lineno:39};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=39;
				$pyjs.track.lineno=46;
				if ((($bool1=$p['op_is'](a, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=47;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=48;
						a = $p['long']($m['_hexlify']($m['_urandom']($constant_int_16)), $constant_int_16);
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
						$pyjs.track.module='random';
						if (($pyjs_try_err_name == $p['NotImplementedError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
							$pyjs.track.lineno=50;
							$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
							time = $p['___import___']('time', null);
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							$pyjs.track.lineno=51;
							a = $p['long']((typeof ($mul5=time['time']())==typeof ($mul6=$constant_int_256) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6)));
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.track.lineno=53;
				$p['$$super']($m['Random'], self)['seed'](a);
				$pyjs.track.lineno=54;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a', null]]);
			$cls_definition['seed'] = $method;
			$pyjs.track.lineno=56;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'random', lineno:56};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=58;
				$pyjs.track.lineno=58;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'VERSION'), $p['$$super']($m['Random'], self)['getstate'](), $p['getattr'](self, 'gauss_next')]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$pyjs.track.lineno=60;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,$pow3,$iter1_nextval,$iter1_type,$iter1_idx,$pyjs_try_err,$iter1_iter,$bool2,$bool3,version,$mod1,$iter1_array,$mod2,x,internalstate,$2,$pow4,$1;
				$pyjs.track={module:'random', lineno:60};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=60;
				$pyjs.track.lineno=62;
				version = (typeof ($1=state).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0));
				$pyjs.track.lineno=63;
				if ((($bool2=$p['op_eq'](version, $constant_int_3)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$pyjs.track.lineno=64;
					var $tupleassign1 = $p['__ass_unpack'](state, 3, null);
					version = $tupleassign1[0];
					internalstate = $tupleassign1[1];
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gauss_next', $tupleassign1[2]) : $p['setattr'](self, 'gauss_next', $tupleassign1[2]); 
					$pyjs.track.lineno=65;
					$p['$$super']($m['Random'], self)['setstate'](internalstate);
				}
				else if ((($bool3=$p['op_eq'](version, $constant_int_2)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs.track.lineno=67;
					var $tupleassign2 = $p['__ass_unpack'](state, 3, null);
					version = $tupleassign2[0];
					internalstate = $tupleassign2[1];
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gauss_next', $tupleassign2[2]) : $p['setattr'](self, 'gauss_next', $tupleassign2[2]); 
					$pyjs.track.lineno=72;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=73;
						internalstate = $p['tuple'](function(){
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
								$iter1_iter = internalstate;
								if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
									$iter1_type = 0;
								} else {
									$iter1_iter = $iter1_iter.__iter__();
									$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
								}
								$iter1_idx = 0;
								$generator_state[0]=1;
							}
							if ($generator_state[0] == 1) {
								$generator_state[1] = 0;
								$generator_state[0]=2;
							}
							if ($generator_state[0] == 2) {
								for (;($generator_state[1] > 0 || typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined');$generator_state[1] = 0) {
									if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
										for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
										x = $iter1_nextval;
										$yield_value = (typeof ($mod1=$p['long'](x))==typeof ($mod2=(typeof ($pow3=$constant_int_2)==typeof ($pow4=$constant_int_32) && typeof $pow3=='number'?
											Math.pow($pow3,$pow4):
											$p['op_pow']($pow3,$pow4))) && typeof $mod1=='number'?
											(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
											$p['op_mod']($mod1,$mod2));
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
);
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
						$pyjs.track.module='random';
						if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							e = $pyjs_try_err;
							$pyjs.track.lineno=75;
							$pyjs.__active_exception_stack__ = null;

							var $pyjs__raise_expr1 = $p['TypeError'];
							var $pyjs__raise_expr2 = e;
							if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
								throw $p['TypeError']('instance exception may not have a separate value');
							}
							if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
								throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
							} else {
								throw ($pyjs__raise_expr1($pyjs__raise_expr2));
							}

						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.track.lineno=76;
					$p['$$super']($m['Random'], self)['setstate'](internalstate);
				}
				else {
					$pyjs.track.lineno=78;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['ValueError']($p['sprintf']('state with version %s passed to Random.setstate() of version %s', $p['tuple']([version, $p['getattr'](self, 'VERSION')]))));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			$pyjs.track.lineno=87;
			$method = $pyjs__bind_method2('__getstate__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'random', lineno:87};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=87;
				$pyjs.track.lineno=88;
				$pyjs.track.lineno=88;
				var $pyjs__ret = self['getstate']();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__getstate__'] = $method;
			$pyjs.track.lineno=90;
			$method = $pyjs__bind_method2('__setstate__', function(state) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'random', lineno:90};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=90;
				$pyjs.track.lineno=91;
				self['setstate'](state);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['__setstate__'] = $method;
			$pyjs.track.lineno=93;
			$method = $pyjs__bind_method2('__reduce__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'random', lineno:93};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=93;
				$pyjs.track.lineno=94;
				$pyjs.track.lineno=94;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, '__class__'), $p['tuple']([]), self['getstate']()]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__reduce__'] = $method;
			$pyjs.track.lineno=98;
			$method = $pyjs__bind_method2('randrange', function(start, stop, step, fint, $$default, maxwidth) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 6)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 7, arguments.length+1);
				} else {
					var self = arguments[0];
					start = arguments[1];
					stop = arguments[2];
					step = arguments[3];
					fint = arguments[4];
					$$default = arguments[5];
					maxwidth = arguments[6];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 7)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 7, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof stop == 'undefined') stop=arguments.callee.__args__[4][1];
				if (typeof step == 'undefined') step=arguments.callee.__args__[5][1];
				if (typeof fint == 'undefined') fint=arguments.callee.__args__[6][1];
				if (typeof $$default == 'undefined') $$default=arguments.callee.__args__[7][1];
				if (typeof maxwidth == 'undefined') maxwidth=arguments.callee.__args__[8][1];
				var istep,$mul9,$cmp12,$bool10,$bool11,$bool12,$bool5,$bool14,$bool16,$bool17,$add13,$mul14,$floordiv3,$add16,$add10,$add12,$add11,istart,width,$floordiv4,istop,$add14,$sub3,$sub2,$sub1,$sub4,$add15,$bool13,$floordiv1,$mul16,$and1,$and2,$mul15,$bool15,$cmp15,$cmp14,$cmp16,$bool6,$bool7,$bool4,$mul8,$mul7,$mul13,$bool8,$bool9,$mul12,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$mul11,$cmp3,$cmp2,$$default,$mul10,$cmp9,$cmp8,n,$cmp13,$add3,$floordiv2,$add6,$add7,$add4,$add5,$cmp11,$add8,$add9,$cmp10;
				$pyjs.track={module:'random', lineno:98};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=98;
				$pyjs.track.lineno=108;
				istart = fint(start);
				$pyjs.track.lineno=109;
				if ((($bool4=!$p['op_eq'](istart, start)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$pyjs.track.lineno=110;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'non-integer arg 1 for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=111;
				if ((($bool5=$p['op_is'](stop, $$default)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$pyjs.track.lineno=112;
					if ((($bool6=((($cmp1=istart)===($cmp2=$constant_int_0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						$pyjs.track.lineno=113;
						if ((($bool7=((((($cmp3=istart)===($cmp4=maxwidth)?0:
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
							$pyjs.track.lineno=114;
							$pyjs.track.lineno=114;
							var $pyjs__ret = self['_randbelow'](istart);
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						}
						$pyjs.track.lineno=115;
						$pyjs.track.lineno=115;
						var $pyjs__ret = fint((typeof ($mul7=self['random']())==typeof ($mul8=istart) && typeof $mul7=='number'?
							$mul7*$mul8:
							$p['op_mul']($mul7,$mul8)));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=116;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'empty range for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=119;
				istop = fint(stop);
				$pyjs.track.lineno=120;
				if ((($bool8=!$p['op_eq'](istop, stop)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					$pyjs.track.lineno=121;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'non-integer stop for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=122;
				width = (typeof ($sub1=istop)==typeof ($sub2=istart) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				$pyjs.track.lineno=123;
				if ((($bool10=((($bool9=$and1=$p['op_eq'](step, $constant_int_1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp5=width)===($cmp6=$constant_int_0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1):$and1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					$pyjs.track.lineno=137;
					if ((($bool11=((((($cmp7=width)===($cmp8=maxwidth)?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
						$pyjs.track.lineno=138;
						$pyjs.track.lineno=138;
						var $pyjs__ret = fint((typeof ($add3=istart)==typeof ($add4=self['_randbelow'](width)) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4)));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=139;
					$pyjs.track.lineno=139;
					var $pyjs__ret = fint((typeof ($add5=istart)==typeof ($add6=fint((typeof ($mul9=self['random']())==typeof ($mul10=width) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)))) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6)));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=140;
				if ((($bool12=$p['op_eq'](step, $constant_int_1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					$pyjs.track.lineno=141;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = $p['sprintf']('empty range for randrange() (%d,%d, %d)', $p['tuple']([istart, istop, width]));
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=144;
				istep = fint(step);
				$pyjs.track.lineno=145;
				if ((($bool13=!$p['op_eq'](istep, step)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					$pyjs.track.lineno=146;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'non-integer step for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=147;
				if ((($bool14=((($cmp9=istep)===($cmp10=$constant_int_0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					$pyjs.track.lineno=148;
					n = (typeof ($floordiv1=(typeof ($sub3=(typeof ($add7=width)==typeof ($add8=istep) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4)))==typeof ($floordiv2=istep) && typeof $floordiv1=='number' && $floordiv2 !== 0?
						Math.floor($floordiv1/$floordiv2):
						$p['op_floordiv']($floordiv1,$floordiv2));
				}
				else if ((($bool15=((($cmp11=istep)===($cmp12=$constant_int_0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					$pyjs.track.lineno=150;
					n = (typeof ($floordiv3=(typeof ($add11=(typeof ($add9=width)==typeof ($add10=istep) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)))==typeof ($add12=$constant_int_1) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)))==typeof ($floordiv4=istep) && typeof $floordiv3=='number' && $floordiv4 !== 0?
						Math.floor($floordiv3/$floordiv4):
						$p['op_floordiv']($floordiv3,$floordiv4));
				}
				else {
					$pyjs.track.lineno=152;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'zero step for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=154;
				if ((($bool16=((($cmp13=n)===($cmp14=$constant_int_0)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) < 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					$pyjs.track.lineno=155;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'empty range for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=157;
				if ((($bool17=((((($cmp15=n)===($cmp16=maxwidth)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					$pyjs.track.lineno=158;
					$pyjs.track.lineno=158;
					var $pyjs__ret = (typeof ($add13=istart)==typeof ($add14=(typeof ($mul11=istep)==typeof ($mul12=self['_randbelow'](n)) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12))) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=159;
				$pyjs.track.lineno=159;
				var $pyjs__ret = (typeof ($add15=istart)==typeof ($add16=(typeof ($mul15=istep)==typeof ($mul16=fint((typeof ($mul13=self['random']())==typeof ($mul14=n) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['start'],['stop', null],['step', $constant_int_1],['fint', $p['int']],['$$default', null],['maxwidth', $p['op_bitshiftleft']($constant_long_1,$m['BPF'])]]);
			$cls_definition['randrange'] = $method;
			$pyjs.track.lineno=161;
			$method = $pyjs__bind_method2('randint', function(a, b) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add18,$add17;
				$pyjs.track={module:'random', lineno:161};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=161;
				$pyjs.track.lineno=165;
				$pyjs.track.lineno=165;
				var $pyjs__ret = self['randrange'](a, (typeof ($add17=b)==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['a'],['b']]);
			$cls_definition['randint'] = $method;
			$pyjs.track.lineno=167;
			$method = $pyjs__bind_method2('_randbelow', function(n, _log, fint, _maxwidth) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					n = arguments[1];
					_log = arguments[2];
					fint = arguments[3];
					_maxwidth = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof _log == 'undefined') _log=arguments.callee.__args__[4][1];
				if (typeof fint == 'undefined') fint=arguments.callee.__args__[5][1];
				if (typeof _maxwidth == 'undefined') _maxwidth=arguments.callee.__args__[6][1];
				var $bool18,$bool19,$pyjs_try_err,$mul17,$add20,$cmp17,r,$add19,$sub5,k,$cmp18,$mul18,$sub6,getrandbits;
				$pyjs.track={module:'random', lineno:167};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=167;
				$pyjs.track.lineno=175;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=176;
					getrandbits = $p['getattr'](self, 'getrandbits');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=184;
						if ((($bool18=true) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
							$pyjs.track.lineno=185;
							k = fint((typeof ($add19=1.00001)==typeof ($add20=_log((typeof ($sub5=n)==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
								$sub5-$sub6:
								$p['op_sub']($sub5,$sub6)), 2.0)) && (typeof $add19=='number'||typeof $add19=='string')?
								$add19+$add20:
								$p['op_add']($add19,$add20)));
							$pyjs.track.lineno=186;
							r = getrandbits(k);
							$pyjs.track.lineno=187;
							while ((($bool19=((((($cmp17=r)===($cmp18=n)?0:
								(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
									($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
									$p['cmp']($cmp17, $cmp18))))|1) == 1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
								$pyjs.track.lineno=188;
								r = getrandbits(k);
							}
							$pyjs.track.lineno=189;
							$pyjs.track.lineno=189;
							var $pyjs__ret = $p['long'](r);
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						}
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='random';
						if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							$pyjs.track.lineno=178;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.track.lineno=193;
				$pyjs.track.lineno=193;
				var $pyjs__ret = fint((typeof ($mul17=self['random']())==typeof ($mul18=n) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['n'],['_log', $m['_log']],['fint', $p['int']],['_maxwidth', $p['op_bitshiftleft']($constant_long_1,$m['BPF'])]]);
			$cls_definition['_randbelow'] = $method;
			$pyjs.track.lineno=197;
			$method = $pyjs__bind_method2('choice', function(seq) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					seq = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul19,$len1,$4,$3,$mul20;
				$pyjs.track={module:'random', lineno:197};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=197;
				$pyjs.track.lineno=199;
				$pyjs.track.lineno=199;
				var $pyjs__ret = (typeof ($3=seq).__array != 'undefined'?
					((typeof $3.__array[$4=$p['int']((typeof ($mul19=self['random']())==typeof ($mul20=(($len1=seq) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1)))))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)))]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($p['int']((typeof ($mul19=self['random']())==typeof ($mul20=(($len1=seq) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1)))))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)))));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['seq']]);
			$cls_definition['choice'] = $method;
			$pyjs.track.lineno=201;
			$method = $pyjs__bind_method2('shuffle', function(x, random, fint) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					random = arguments[2];
					fint = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof random == 'undefined') random=arguments.callee.__args__[4][1];
				if (typeof fint == 'undefined') fint=arguments.callee.__args__[5][1];
				var $iter2_iter,$add21,$add22,$bool20,$mul22,$mul21,$iter2_type,$iter2_idx,$8,$6,$7,$5,$iter2_nextval,i,j,$len2,$pyjs__trackstack_size_1,$iter2_array;
				$pyjs.track={module:'random', lineno:201};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=201;
				$pyjs.track.lineno=207;
				if ((($bool20=$p['op_is'](random, null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					$pyjs.track.lineno=208;
					random = $p['getattr'](self, 'random');
				}
				$pyjs.track.lineno=209;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = $p['reversed']($p['xrange']($constant_int_1, (($len2=x) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2)))))));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					$pyjs.track.lineno=211;
					j = fint((typeof ($mul21=random())==typeof ($mul22=(typeof ($add21=i)==typeof ($add22=$constant_int_1) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22))) && typeof $mul21=='number'?
						$mul21*$mul22:
						$p['op_mul']($mul21,$mul22)));
					$pyjs.track.lineno=212;
					var $tupleassign3 = $p['__ass_unpack']($p['tuple']([(typeof ($5=x).__array != 'undefined'?
						((typeof $5.__array[$6=j]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(j)), (typeof ($7=x).__array != 'undefined'?
						((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(i))]), 2, null);
					x.__setitem__(i, $tupleassign3[0]);
					x.__setitem__(j, $tupleassign3[1]);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='random';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x'],['random', null],['fint', $p['int']]]);
			$cls_definition['shuffle'] = $method;
			$pyjs.track.lineno=214;
			$method = $pyjs__bind_method2('sample', function(population, k) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					population = arguments[1];
					k = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_type,$iter3_array,$mul30,$cmp20,$cmp21,$cmp22,$cmp23,$cmp24,result,$cmp26,setsize,$pow6,$pow5,$iter3_idx,_int,$iter4_iter,selected,$add24,selected_add,$bool25,$bool24,$sub9,$sub8,$bool21,$iter3_iter,$bool23,$bool22,$mul26,$mul27,$mul24,$mul25,$sub7,$mul23,__random,$or1,$mul28,$or2,$sub12,$sub11,$sub10,$mul29,$bool27,$9,$bool26,$iter3_type,$iter3_nextval,$cmp19,pool,$14,$10,$11,$12,$13,i,$iter4_nextval,j,$pyjs_try_err,n,$iter4_idx,$pyjs__trackstack_size_2,$len3,$pyjs__trackstack_size_1,$iter4_array,$mul32,$mul31,$add23,$cmp25;
				$pyjs.track={module:'random', lineno:214};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=214;
				$pyjs.track.lineno=250;
				n = (($len3=population) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3)))));
				$pyjs.track.lineno=251;
				if ((($bool22=!(($bool21=(((($cmp19=$constant_int_0)===($cmp20=($compare1 = k))?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) < 1)&&((($cmp21=$compare1)===($cmp22=($compare2 = n))?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$p['cmp']($cmp21, $cmp22))) < 1))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					$pyjs.track.lineno=252;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'sample larger than population';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=253;
				__random = $p['getattr'](self, 'random');
				$pyjs.track.lineno=254;
				_int = $p['int'];
				$pyjs.track.lineno=255;
				result = (typeof ($mul23=$p['list']([null]))==typeof ($mul24=k) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24));
				$pyjs.track.lineno=256;
				setsize = $constant_int_21;
				$pyjs.track.lineno=257;
				if ((($bool23=((($cmp23=k)===($cmp24=$constant_int_5)?0:
					(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
						($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
						$p['cmp']($cmp23, $cmp24))) == 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					$pyjs.track.lineno=258;
					setsize = (typeof ($add23=setsize)==typeof ($add24=(typeof ($pow5=$constant_int_4)==typeof ($pow6=$m['_ceil']($m['_log']((typeof ($mul25=k)==typeof ($mul26=$constant_int_3) && typeof $mul25=='number'?
						$mul25*$mul26:
						$p['op_mul']($mul25,$mul26)), $constant_int_4))) && typeof $pow5=='number'?
						Math.pow($pow5,$pow6):
						$p['op_pow']($pow5,$pow6))) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
				}
				$pyjs.track.lineno=259;
				if ((($bool25=((($bool24=$or1=((($cmp25=n)===($cmp26=setsize)?0:
					(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
						($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
						$p['cmp']($cmp25, $cmp26))) < 1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24.__nonzero__=='function'?
							$bool24.__nonzero__() :
							(typeof $bool24.__len__=='function'?
								($bool24.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:$p['hasattr'](population, 'keys'))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					$pyjs.track.lineno=262;
					pool = $p['list'](population);
					$pyjs.track.lineno=263;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter3_iter = $p['xrange'](k);
					if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
						$iter3_type = 0;
					} else {
						$iter3_iter = $iter3_iter.__iter__();
						$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter3_idx = 0;
					while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
						i = $iter3_nextval;
						$pyjs.track.lineno=264;
						j = _int((typeof ($mul27=__random())==typeof ($mul28=(typeof ($sub7=n)==typeof ($sub8=i) && (typeof $sub7=='number'||typeof $sub7=='string')?
							$sub7-$sub8:
							$p['op_sub']($sub7,$sub8))) && typeof $mul27=='number'?
							$mul27*$mul28:
							$p['op_mul']($mul27,$mul28)));
						$pyjs.track.lineno=265;
						result.__setitem__(i, (typeof ($9=pool).__array != 'undefined'?
							((typeof $9.__array[$10=j]) != 'undefined'?$9.__array[$10]:
								$9.__getitem__($10)):
								$9.__getitem__(j)));
						$pyjs.track.lineno=266;
						pool.__setitem__(j, (typeof ($11=pool).__array != 'undefined'?
							((typeof $11.__array[$12=(typeof ($sub11=(typeof ($sub9=n)==typeof ($sub10=i) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							$p['op_sub']($sub9,$sub10)))==typeof ($sub12=$constant_int_1) && (typeof $sub11=='number'||typeof $sub11=='string')?
							$sub11-$sub12:
							$p['op_sub']($sub11,$sub12))]) != 'undefined'?$11.__array[$12]:
								$11.__getitem__($12)):
								$11.__getitem__((typeof ($sub11=(typeof ($sub9=n)==typeof ($sub10=i) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							$p['op_sub']($sub9,$sub10)))==typeof ($sub12=$constant_int_1) && (typeof $sub11=='number'||typeof $sub11=='string')?
							$sub11-$sub12:
							$p['op_sub']($sub11,$sub12)))));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='random';
				}
				else {
					$pyjs.track.lineno=268;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=269;
						selected = $p['set']();
						$pyjs.track.lineno=270;
						selected_add = $p['getattr'](selected, 'add');
						$pyjs.track.lineno=271;
						$pyjs__trackstack_size_2=$pyjs.trackstack.length;
						$iter4_iter = $p['xrange'](k);
						if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
							$iter4_type = 0;
						} else {
							$iter4_iter = $iter4_iter.__iter__();
							$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter4_idx = 0;
						while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
							i = $iter4_nextval;
							$pyjs.track.lineno=272;
							j = _int((typeof ($mul29=__random())==typeof ($mul30=n) && typeof $mul29=='number'?
								$mul29*$mul30:
								$p['op_mul']($mul29,$mul30)));
							$pyjs.track.lineno=273;
							while ((($bool26=selected.__contains__(j)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
									false :
									(typeof $bool26=='object'?
										(typeof $bool26.__nonzero__=='function'?
											$bool26.__nonzero__() :
											(typeof $bool26.__len__=='function'?
												($bool26.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								$pyjs.track.lineno=274;
								j = _int((typeof ($mul31=__random())==typeof ($mul32=n) && typeof $mul31=='number'?
									$mul31*$mul32:
									$p['op_mul']($mul31,$mul32)));
							}
							$pyjs.track.lineno=275;
							selected_add(j);
							$pyjs.track.lineno=276;
							result.__setitem__(i, (typeof ($13=population).__array != 'undefined'?
								((typeof $13.__array[$14=j]) != 'undefined'?$13.__array[$14]:
									$13.__getitem__($14)):
									$13.__getitem__(j)));
						}
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='random';
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
						$pyjs.track.module='random';
						if ((($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError']))) {
							$pyjs.track.lineno=278;
							if ((($bool27=$p['isinstance'](population, $p['list'])) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
								$pyjs.track.lineno=279;
								$pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__;
								$pyjs.__last_exception_stack__ = null;
								throw ($pyjs.__last_exception__?
									$pyjs.__last_exception__.error:
									$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
							}
							$pyjs.track.lineno=280;
							$pyjs.track.lineno=280;
							var $pyjs__ret = self['sample']($p['tuple'](population), k);
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.track.lineno=281;
				$pyjs.track.lineno=281;
				var $pyjs__ret = result;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['population'],['k']]);
			$cls_definition['sample'] = $method;
			$pyjs.track.lineno=287;
			$method = $pyjs__bind_method2('uniform', function(a, b) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub13,$add25,$sub14,$mul34,$add26,$mul33;
				$pyjs.track={module:'random', lineno:287};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=287;
				$pyjs.track.lineno=289;
				$pyjs.track.lineno=289;
				var $pyjs__ret = (typeof ($add25=a)==typeof ($add26=(typeof ($mul33=(typeof ($sub13=b)==typeof ($sub14=a) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14)))==typeof ($mul34=self['random']()) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34))) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['a'],['b']]);
			$cls_definition['uniform'] = $method;
			$pyjs.track.lineno=293;
			$method = $pyjs__bind_method2('triangular', function(low, high, mode) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					low = arguments[1];
					high = arguments[2];
					mode = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof low == 'undefined') low=arguments.callee.__args__[3][1];
				if (typeof high == 'undefined') high=arguments.callee.__args__[4][1];
				if (typeof mode == 'undefined') mode=arguments.callee.__args__[5][1];
				var $sub22,$sub23,$sub20,$sub21,$sub24,$cmp27,$cmp28,$pow7,$add28,$add27,$pow8,$bool29,$bool28,$mul38,$sub19,$sub18,$sub17,$sub16,$sub15,$div3,$div4,c,u,$mul35,$mul37,$mul36;
				$pyjs.track={module:'random', lineno:293};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=293;
				$pyjs.track.lineno=301;
				u = self['random']();
				$pyjs.track.lineno=302;
				c = ((($bool28=$p['op_is'](mode, null)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
					false :
					(typeof $bool28=='object'?
						(typeof $bool28.__nonzero__=='function'?
							$bool28.__nonzero__() :
							(typeof $bool28.__len__=='function'?
								($bool28.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (0.5) : ((typeof ($div3=(typeof ($sub15=mode)==typeof ($sub16=low) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16)))==typeof ($div4=(typeof ($sub17=high)==typeof ($sub18=low) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18))) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))));
				$pyjs.track.lineno=303;
				if ((($bool29=((($cmp27=u)===($cmp28=c)?0:
					(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
						($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
						$p['cmp']($cmp27, $cmp28))) == 1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					$pyjs.track.lineno=304;
					u = (typeof ($sub19=1.0)==typeof ($sub20=u) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						$p['op_sub']($sub19,$sub20));
					$pyjs.track.lineno=305;
					c = (typeof ($sub21=1.0)==typeof ($sub22=c) && (typeof $sub21=='number'||typeof $sub21=='string')?
						$sub21-$sub22:
						$p['op_sub']($sub21,$sub22));
					$pyjs.track.lineno=306;
					var $tupleassign4 = $p['__ass_unpack']($p['tuple']([high, low]), 2, null);
					low = $tupleassign4[0];
					high = $tupleassign4[1];
				}
				$pyjs.track.lineno=307;
				$pyjs.track.lineno=307;
				var $pyjs__ret = (typeof ($add27=low)==typeof ($add28=(typeof ($mul37=(typeof ($sub23=high)==typeof ($sub24=low) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24)))==typeof ($mul38=(typeof ($pow7=(typeof ($mul35=u)==typeof ($mul36=c) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36)))==typeof ($pow8=0.5) && typeof $pow7=='number'?
					Math.pow($pow7,$pow8):
					$p['op_pow']($pow7,$pow8))) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38))) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['low', 0.0],['high', 1.0],['mode', null]]);
			$cls_definition['triangular'] = $method;
			$pyjs.track.lineno=311;
			$method = $pyjs__bind_method2('normalvariate', function(mu, sigma) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					sigma = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub26,$sub27,$sub25,u1,$sub28,zz,$cmp29,$mul43,$add29,$mul44,$mul40,$mul41,$mul42,u2,$cmp30,__random,$div8,$div6,$div7,$div5,$add30,$bool30,$bool31,$mul39,z;
				$pyjs.track={module:'random', lineno:311};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=311;
				$pyjs.track.lineno=322;
				__random = $p['getattr'](self, 'random');
				$pyjs.track.lineno=323;
				while ((($bool30=$constant_int_1) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					$pyjs.track.lineno=324;
					u1 = __random();
					$pyjs.track.lineno=325;
					u2 = (typeof ($sub25=1.0)==typeof ($sub26=__random()) && (typeof $sub25=='number'||typeof $sub25=='string')?
						$sub25-$sub26:
						$p['op_sub']($sub25,$sub26));
					$pyjs.track.lineno=326;
					z = (typeof ($div5=(typeof ($mul39=$m['NV_MAGICCONST'])==typeof ($mul40=(typeof ($sub27=u1)==typeof ($sub28=0.5) && (typeof $sub27=='number'||typeof $sub27=='string')?
						$sub27-$sub28:
						$p['op_sub']($sub27,$sub28))) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40)))==typeof ($div6=u2) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6));
					$pyjs.track.lineno=327;
					zz = (typeof ($div7=(typeof ($mul41=z)==typeof ($mul42=z) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42)))==typeof ($div8=4.0) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8));
					$pyjs.track.lineno=328;
					if ((($bool31=((($cmp29=zz)===($cmp30=(typeof ($usub3=$m['_log'](u2))=='number'?
						-$usub3:
						$p['op_usub']($usub3)))?0:
						(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
							($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
							$p['cmp']($cmp29, $cmp30))) < 1)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
						$pyjs.track.lineno=329;
						break;
					}
				}
				$pyjs.track.lineno=330;
				$pyjs.track.lineno=330;
				var $pyjs__ret = (typeof ($add29=mu)==typeof ($add30=(typeof ($mul43=z)==typeof ($mul44=sigma) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44))) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['mu'],['sigma']]);
			$cls_definition['normalvariate'] = $method;
			$pyjs.track.lineno=334;
			$method = $pyjs__bind_method2('lognormvariate', function(mu, sigma) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					sigma = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'random', lineno:334};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=334;
				$pyjs.track.lineno=340;
				$pyjs.track.lineno=340;
				var $pyjs__ret = $m['_exp'](self['normalvariate'](mu, sigma));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['mu'],['sigma']]);
			$cls_definition['lognormvariate'] = $method;
			$pyjs.track.lineno=344;
			$method = $pyjs__bind_method2('expovariate', function(lambd) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					lambd = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var __random,$div10,$bool32,$div9,u,$cmp32,$cmp31;
				$pyjs.track={module:'random', lineno:344};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=344;
				$pyjs.track.lineno=355;
				__random = $p['getattr'](self, 'random');
				$pyjs.track.lineno=356;
				u = __random();
				$pyjs.track.lineno=357;
				while ((($bool32=((($cmp31=u)===($cmp32=1e-07)?0:
					(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
						($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
						$p['cmp']($cmp31, $cmp32))) < 1)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					$pyjs.track.lineno=358;
					u = __random();
				}
				$pyjs.track.lineno=359;
				$pyjs.track.lineno=359;
				var $pyjs__ret = (typeof ($div9=(typeof ($usub4=$m['_log'](u))=='number'?
					-$usub4:
					$p['op_usub']($usub4)))==typeof ($div10=lambd) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['lambd']]);
			$cls_definition['expovariate'] = $method;
			$pyjs.track.lineno=363;
			$method = $pyjs__bind_method2('vonmisesvariate', function(mu, kappa) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					kappa = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var u2,$mul50,$mul53,$or4,$mul57,$mod6,$sub29,$add37,$mod5,$add40,$sub32,$mul55,$mod3,$cmp36,$cmp40,$add35,$cmp37,$mul62,$mul63,$mul60,$mul61,$mul48,$mul49,$mul64,$mul65,$div14,$mul45,$mul47,u1,$div11,$div12,$div13,$div15,$mod4,theta,$add39,u3,$bool37,$sub31,$sub30,$sub33,__random,$sub35,$sub34,$or3,$sub36,$sub38,c,$add38,$add41,$mul58,$sub37,$add42,$cmp39,$cmp38,$mul68,$mul66,$cmp35,$cmp34,$cmp33,$div16,$bool35,a,$mul59,b,f,$add32,$mul52,$mul51,$add31,$add36,$mul56,$add34,$mul54,$bool33,r,$bool36,$mul67,$bool34,$add33,z,$mul46;
				$pyjs.track={module:'random', lineno:363};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=363;
				$pyjs.track.lineno=381;
				__random = $p['getattr'](self, 'random');
				$pyjs.track.lineno=382;
				if ((($bool33=((($cmp33=kappa)===($cmp34=1e-06)?0:
					(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
						($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
						$p['cmp']($cmp33, $cmp34))) < 1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
					$pyjs.track.lineno=383;
					$pyjs.track.lineno=383;
					var $pyjs__ret = (typeof ($mul45=$m['TWOPI'])==typeof ($mul46=__random()) && typeof $mul45=='number'?
						$mul45*$mul46:
						$p['op_mul']($mul45,$mul46));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=385;
				a = (typeof ($add33=1.0)==typeof ($add34=$m['_sqrt']((typeof ($add31=1.0)==typeof ($add32=(typeof ($mul49=(typeof ($mul47=4.0)==typeof ($mul48=kappa) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48)))==typeof ($mul50=kappa) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50))) && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32)))) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34));
				$pyjs.track.lineno=386;
				b = (typeof ($div11=(typeof ($sub29=a)==typeof ($sub30=$m['_sqrt']((typeof ($mul51=2.0)==typeof ($mul52=a) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52)))) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30)))==typeof ($div12=(typeof ($mul53=2.0)==typeof ($mul54=kappa) && typeof $mul53=='number'?
					$mul53*$mul54:
					$p['op_mul']($mul53,$mul54))) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12));
				$pyjs.track.lineno=387;
				r = (typeof ($div13=(typeof ($add35=1.0)==typeof ($add36=(typeof ($mul55=b)==typeof ($mul56=b) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36)))==typeof ($div14=(typeof ($mul57=2.0)==typeof ($mul58=b) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58))) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14));
				$pyjs.track.lineno=389;
				while ((($bool34=$constant_int_1) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					$pyjs.track.lineno=390;
					u1 = __random();
					$pyjs.track.lineno=392;
					z = $m['_cos']((typeof ($mul59=$m['_pi'])==typeof ($mul60=u1) && typeof $mul59=='number'?
						$mul59*$mul60:
						$p['op_mul']($mul59,$mul60)));
					$pyjs.track.lineno=393;
					f = (typeof ($div15=(typeof ($add37=1.0)==typeof ($add38=(typeof ($mul61=r)==typeof ($mul62=z) && typeof $mul61=='number'?
						$mul61*$mul62:
						$p['op_mul']($mul61,$mul62))) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38)))==typeof ($div16=(typeof ($add39=r)==typeof ($add40=z) && (typeof $add39=='number'||typeof $add39=='string')?
						$add39+$add40:
						$p['op_add']($add39,$add40))) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16));
					$pyjs.track.lineno=394;
					c = (typeof ($mul63=kappa)==typeof ($mul64=(typeof ($sub31=r)==typeof ($sub32=f) && (typeof $sub31=='number'||typeof $sub31=='string')?
						$sub31-$sub32:
						$p['op_sub']($sub31,$sub32))) && typeof $mul63=='number'?
						$mul63*$mul64:
						$p['op_mul']($mul63,$mul64));
					$pyjs.track.lineno=396;
					u2 = __random();
					$pyjs.track.lineno=398;
					if ((($bool36=((($bool35=$or3=((($cmp35=u2)===($cmp36=(typeof ($mul65=c)==typeof ($mul66=(typeof ($sub33=2.0)==typeof ($sub34=c) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34))) && typeof $mul65=='number'?
						$mul65*$mul66:
						$p['op_mul']($mul65,$mul66)))?0:
						(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
							($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
							$p['cmp']($cmp35, $cmp36))) == -1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or3:((($cmp37=u2)===($cmp38=(typeof ($mul67=c)==typeof ($mul68=$m['_exp']((typeof ($sub35=1.0)==typeof ($sub36=c) && (typeof $sub35=='number'||typeof $sub35=='string')?
						$sub35-$sub36:
						$p['op_sub']($sub35,$sub36)))) && typeof $mul67=='number'?
						$mul67*$mul68:
						$p['op_mul']($mul67,$mul68)))?0:
						(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
							($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
							$p['cmp']($cmp37, $cmp38))) < 1))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
						$pyjs.track.lineno=399;
						break;
					}
				}
				$pyjs.track.lineno=401;
				u3 = __random();
				$pyjs.track.lineno=402;
				if ((($bool37=((($cmp39=u3)===($cmp40=0.5)?0:
					(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
						($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
						$p['cmp']($cmp39, $cmp40))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					$pyjs.track.lineno=403;
					theta = (typeof ($add41=(typeof ($mod3=mu)==typeof ($mod4=$m['TWOPI']) && typeof $mod3=='number'?
						(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
						$p['op_mod']($mod3,$mod4)))==typeof ($add42=$m['_acos'](f)) && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$p['op_add']($add41,$add42));
				}
				else {
					$pyjs.track.lineno=405;
					theta = (typeof ($sub37=(typeof ($mod5=mu)==typeof ($mod6=$m['TWOPI']) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6)))==typeof ($sub38=$m['_acos'](f)) && (typeof $sub37=='number'||typeof $sub37=='string')?
						$sub37-$sub38:
						$p['op_sub']($sub37,$sub38));
				}
				$pyjs.track.lineno=407;
				$pyjs.track.lineno=407;
				var $pyjs__ret = theta;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['mu'],['kappa']]);
			$cls_definition['vonmisesvariate'] = $method;
			$pyjs.track.lineno=411;
			$method = $pyjs__bind_method2('gammavariate', function(alpha, beta) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					beta = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool50,$bool51,ainv,$bool52,$mul80,$mul81,$mul82,$mul83,$mul84,$mul85,$mul86,$mul87,$sub39,b,p,x,$cmp48,$cmp49,$cmp42,$cmp43,$cmp41,$cmp46,$cmp47,$cmp44,$cmp45,$pow9,$bool47,$bool46,$bool45,$bool44,$bool43,$bool42,$bool41,$bool40,$bool49,$bool48,$cmp59,$cmp58,$cmp51,$cmp50,$cmp53,$cmp52,$cmp55,$cmp54,$cmp57,$cmp56,$div21,$div20,$div23,$div22,$div25,$div24,$div26,$bool38,$bool39,$cmp64,$mul69,$cmp60,$cmp61,$cmp62,$cmp63,$add43,$div18,$div19,$add49,$add48,$add47,$add46,$add45,$add44,u1,bbb,u2,$div17,$add50,__random,$sub54,$mul71,$mul70,$mul73,$mul72,$mul75,$mul74,$mul77,$mul76,$mul79,$mul78,r,v,z,$sub48,$sub49,$sub40,$sub41,$sub42,$sub43,$sub44,$sub45,$sub46,$sub47,$pow12,$mul88,$pow11,$pow10,$or5,$or7,$or6,$sub53,$sub52,$sub51,$sub50,$or8,u,ccc;
				$pyjs.track={module:'random', lineno:411};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=411;
				$pyjs.track.lineno=420;
				if ((($bool39=((($bool38=$or5=((($cmp41=alpha)===($cmp42=0.0)?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))) < 1)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38.__nonzero__=='function'?
							$bool38.__nonzero__() :
							(typeof $bool38.__len__=='function'?
								($bool38.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:((($cmp43=beta)===($cmp44=0.0)?0:
					(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
						($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
						$p['cmp']($cmp43, $cmp44))) < 1))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
					$pyjs.track.lineno=421;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'gammavariate: alpha and beta must be > 0.0';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs.track.lineno=423;
				__random = $p['getattr'](self, 'random');
				$pyjs.track.lineno=424;
				if ((($bool40=((($cmp45=alpha)===($cmp46=1.0)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == 1)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
					$pyjs.track.lineno=430;
					ainv = $m['_sqrt']((typeof ($sub39=(typeof ($mul69=2.0)==typeof ($mul70=alpha) && typeof $mul69=='number'?
						$mul69*$mul70:
						$p['op_mul']($mul69,$mul70)))==typeof ($sub40=1.0) && (typeof $sub39=='number'||typeof $sub39=='string')?
						$sub39-$sub40:
						$p['op_sub']($sub39,$sub40)));
					$pyjs.track.lineno=431;
					bbb = (typeof ($sub41=alpha)==typeof ($sub42=$m['LOG4']) && (typeof $sub41=='number'||typeof $sub41=='string')?
						$sub41-$sub42:
						$p['op_sub']($sub41,$sub42));
					$pyjs.track.lineno=432;
					ccc = (typeof ($add43=alpha)==typeof ($add44=ainv) && (typeof $add43=='number'||typeof $add43=='string')?
						$add43+$add44:
						$p['op_add']($add43,$add44));
					$pyjs.track.lineno=434;
					while ((($bool41=$constant_int_1) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
						$pyjs.track.lineno=435;
						u1 = __random();
						$pyjs.track.lineno=436;
						if ((($bool43=!(($bool42=(((($cmp47=1e-07)===($cmp48=($compare3 = u1))?0:
							(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
								($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
								$p['cmp']($cmp47, $cmp48))) == -1)&&((($cmp49=$compare3)===($cmp50=($compare4 = 0.9999999))?0:
							(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
								($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
								$p['cmp']($cmp49, $cmp50))) == -1))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
							false :
							(typeof $bool42=='object'?
								(typeof $bool42.__nonzero__=='function'?
									$bool42.__nonzero__() :
									(typeof $bool42.__len__=='function'?
										($bool42.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
							$pyjs.track.lineno=437;
							continue;
						}
						$pyjs.track.lineno=438;
						u2 = (typeof ($sub43=1.0)==typeof ($sub44=__random()) && (typeof $sub43=='number'||typeof $sub43=='string')?
							$sub43-$sub44:
							$p['op_sub']($sub43,$sub44));
						$pyjs.track.lineno=439;
						v = (typeof ($div19=$m['_log']((typeof ($div17=u1)==typeof ($div18=(typeof ($sub45=1.0)==typeof ($sub46=u1) && (typeof $sub45=='number'||typeof $sub45=='string')?
							$sub45-$sub46:
							$p['op_sub']($sub45,$sub46))) && typeof $div17=='number' && $div18 !== 0?
							$div17/$div18:
							$p['op_div']($div17,$div18))))==typeof ($div20=ainv) && typeof $div19=='number' && $div20 !== 0?
							$div19/$div20:
							$p['op_div']($div19,$div20));
						$pyjs.track.lineno=440;
						x = (typeof ($mul71=alpha)==typeof ($mul72=$m['_exp'](v)) && typeof $mul71=='number'?
							$mul71*$mul72:
							$p['op_mul']($mul71,$mul72));
						$pyjs.track.lineno=441;
						z = (typeof ($mul75=(typeof ($mul73=u1)==typeof ($mul74=u1) && typeof $mul73=='number'?
							$mul73*$mul74:
							$p['op_mul']($mul73,$mul74)))==typeof ($mul76=u2) && typeof $mul75=='number'?
							$mul75*$mul76:
							$p['op_mul']($mul75,$mul76));
						$pyjs.track.lineno=442;
						r = (typeof ($sub47=(typeof ($add45=bbb)==typeof ($add46=(typeof ($mul77=ccc)==typeof ($mul78=v) && typeof $mul77=='number'?
							$mul77*$mul78:
							$p['op_mul']($mul77,$mul78))) && (typeof $add45=='number'||typeof $add45=='string')?
							$add45+$add46:
							$p['op_add']($add45,$add46)))==typeof ($sub48=x) && (typeof $sub47=='number'||typeof $sub47=='string')?
							$sub47-$sub48:
							$p['op_sub']($sub47,$sub48));
						$pyjs.track.lineno=443;
						if ((($bool45=((($bool44=$or7=((((($cmp51=(typeof ($sub49=(typeof ($add47=r)==typeof ($add48=$m['SG_MAGICCONST']) && (typeof $add47=='number'||typeof $add47=='string')?
							$add47+$add48:
							$p['op_add']($add47,$add48)))==typeof ($sub50=(typeof ($mul79=4.5)==typeof ($mul80=z) && typeof $mul79=='number'?
							$mul79*$mul80:
							$p['op_mul']($mul79,$mul80))) && (typeof $sub49=='number'||typeof $sub49=='string')?
							$sub49-$sub50:
							$p['op_sub']($sub49,$sub50)))===($cmp52=0.0)?0:
							(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
								($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
								$p['cmp']($cmp51, $cmp52))))|1) == 1)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
							false :
							(typeof $bool44=='object'?
								(typeof $bool44.__nonzero__=='function'?
									$bool44.__nonzero__() :
									(typeof $bool44.__len__=='function'?
										($bool44.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or7:((((($cmp53=r)===($cmp54=$m['_log'](z))?0:
							(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
								($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
								$p['cmp']($cmp53, $cmp54))))|1) == 1))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
							$pyjs.track.lineno=444;
							$pyjs.track.lineno=444;
							var $pyjs__ret = (typeof ($mul81=x)==typeof ($mul82=beta) && typeof $mul81=='number'?
								$mul81*$mul82:
								$p['op_mul']($mul81,$mul82));
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						}
					}
				}
				else if ((($bool46=$p['op_eq'](alpha, 1.0)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46.__nonzero__=='function'?
								$bool46.__nonzero__() :
								(typeof $bool46.__len__=='function'?
									($bool46.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=448;
					u = __random();
					$pyjs.track.lineno=449;
					while ((($bool47=((($cmp55=u)===($cmp56=1e-07)?0:
						(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
							($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
							$p['cmp']($cmp55, $cmp56))) < 1)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
							false :
							(typeof $bool47=='object'?
								(typeof $bool47.__nonzero__=='function'?
									$bool47.__nonzero__() :
									(typeof $bool47.__len__=='function'?
										($bool47.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=450;
						u = __random();
					}
					$pyjs.track.lineno=451;
					$pyjs.track.lineno=451;
					var $pyjs__ret = (typeof ($mul83=(typeof ($usub5=$m['_log'](u))=='number'?
						-$usub5:
						$p['op_usub']($usub5)))==typeof ($mul84=beta) && typeof $mul83=='number'?
						$mul83*$mul84:
						$p['op_mul']($mul83,$mul84));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else {
					$pyjs.track.lineno=457;
					while ((($bool48=$constant_int_1) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
							false :
							(typeof $bool48=='object'?
								(typeof $bool48.__nonzero__=='function'?
									$bool48.__nonzero__() :
									(typeof $bool48.__len__=='function'?
										($bool48.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=458;
						u = __random();
						$pyjs.track.lineno=459;
						b = (typeof ($div21=(typeof ($add49=$m['_e'])==typeof ($add50=alpha) && (typeof $add49=='number'||typeof $add49=='string')?
							$add49+$add50:
							$p['op_add']($add49,$add50)))==typeof ($div22=$m['_e']) && typeof $div21=='number' && $div22 !== 0?
							$div21/$div22:
							$p['op_div']($div21,$div22));
						$pyjs.track.lineno=460;
						p = (typeof ($mul85=b)==typeof ($mul86=u) && typeof $mul85=='number'?
							$mul85*$mul86:
							$p['op_mul']($mul85,$mul86));
						$pyjs.track.lineno=461;
						if ((($bool49=((($cmp57=p)===($cmp58=1.0)?0:
							(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
								($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
								$p['cmp']($cmp57, $cmp58))) < 1)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
							$pyjs.track.lineno=462;
							x = (typeof ($pow9=p)==typeof ($pow10=(typeof ($div23=1.0)==typeof ($div24=alpha) && typeof $div23=='number' && $div24 !== 0?
								$div23/$div24:
								$p['op_div']($div23,$div24))) && typeof $pow9=='number'?
								Math.pow($pow9,$pow10):
								$p['op_pow']($pow9,$pow10));
						}
						else {
							$pyjs.track.lineno=464;
							x = (typeof ($usub6=$m['_log']((typeof ($div25=(typeof ($sub51=b)==typeof ($sub52=p) && (typeof $sub51=='number'||typeof $sub51=='string')?
								$sub51-$sub52:
								$p['op_sub']($sub51,$sub52)))==typeof ($div26=alpha) && typeof $div25=='number' && $div26 !== 0?
								$div25/$div26:
								$p['op_div']($div25,$div26))))=='number'?
								-$usub6:
								$p['op_usub']($usub6));
						}
						$pyjs.track.lineno=465;
						u1 = __random();
						$pyjs.track.lineno=466;
						if ((($bool50=((($cmp59=p)===($cmp60=1.0)?0:
							(typeof $cmp59==typeof $cmp60 && ((typeof $cmp59 == 'number')||(typeof $cmp59 == 'string')||(typeof $cmp59 == 'boolean'))?
								($cmp59 == $cmp60 ? 0 : ($cmp59 < $cmp60 ? -1 : 1)):
								$p['cmp']($cmp59, $cmp60))) == 1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
							$pyjs.track.lineno=467;
							if ((($bool51=((($cmp61=u1)===($cmp62=(typeof ($pow11=x)==typeof ($pow12=(typeof ($sub53=alpha)==typeof ($sub54=1.0) && (typeof $sub53=='number'||typeof $sub53=='string')?
								$sub53-$sub54:
								$p['op_sub']($sub53,$sub54))) && typeof $pow11=='number'?
								Math.pow($pow11,$pow12):
								$p['op_pow']($pow11,$pow12)))?0:
								(typeof $cmp61==typeof $cmp62 && ((typeof $cmp61 == 'number')||(typeof $cmp61 == 'string')||(typeof $cmp61 == 'boolean'))?
									($cmp61 == $cmp62 ? 0 : ($cmp61 < $cmp62 ? -1 : 1)):
									$p['cmp']($cmp61, $cmp62))) < 1)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
								$pyjs.track.lineno=468;
								break;
							}
						}
						else if ((($bool52=((($cmp63=u1)===($cmp64=$m['_exp']((typeof ($usub7=x)=='number'?
							-$usub7:
							$p['op_usub']($usub7))))?0:
							(typeof $cmp63==typeof $cmp64 && ((typeof $cmp63 == 'number')||(typeof $cmp63 == 'string')||(typeof $cmp63 == 'boolean'))?
								($cmp63 == $cmp64 ? 0 : ($cmp63 < $cmp64 ? -1 : 1)):
								$p['cmp']($cmp63, $cmp64))) < 1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
							$pyjs.track.lineno=470;
							break;
						}
					}
					$pyjs.track.lineno=471;
					$pyjs.track.lineno=471;
					var $pyjs__ret = (typeof ($mul87=x)==typeof ($mul88=beta) && typeof $mul87=='number'?
						$mul87*$mul88:
						$p['op_mul']($mul87,$mul88));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['alpha'],['beta']]);
			$cls_definition['gammavariate'] = $method;
			$pyjs.track.lineno=475;
			$method = $pyjs__bind_method2('gauss', function(mu, sigma) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					sigma = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool53,$mul97,$mul96,$mul95,$mul94,$mul93,$mul92,$mul91,$mul90,x2pi,$mul98,$sub56,$sub55,__random,$mul89,g2rad,$add51,$add52,z;
				$pyjs.track={module:'random', lineno:475};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=475;
				$pyjs.track.lineno=500;
				__random = $p['getattr'](self, 'random');
				$pyjs.track.lineno=501;
				z = $p['getattr'](self, 'gauss_next');
				$pyjs.track.lineno=502;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				$pyjs.track.lineno=503;
				if ((($bool53=$p['op_is'](z, null)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
					$pyjs.track.lineno=504;
					x2pi = (typeof ($mul89=__random())==typeof ($mul90=$m['TWOPI']) && typeof $mul89=='number'?
						$mul89*$mul90:
						$p['op_mul']($mul89,$mul90));
					$pyjs.track.lineno=505;
					g2rad = $m['_sqrt']((typeof ($mul91=(typeof ($usub8=2.0)=='number'?
						-$usub8:
						$p['op_usub']($usub8)))==typeof ($mul92=$m['_log']((typeof ($sub55=1.0)==typeof ($sub56=__random()) && (typeof $sub55=='number'||typeof $sub55=='string')?
						$sub55-$sub56:
						$p['op_sub']($sub55,$sub56)))) && typeof $mul91=='number'?
						$mul91*$mul92:
						$p['op_mul']($mul91,$mul92)));
					$pyjs.track.lineno=506;
					z = (typeof ($mul93=$m['_cos'](x2pi))==typeof ($mul94=g2rad) && typeof $mul93=='number'?
						$mul93*$mul94:
						$p['op_mul']($mul93,$mul94));
					$pyjs.track.lineno=507;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gauss_next', (typeof ($mul95=$m['_sin'](x2pi))==typeof ($mul96=g2rad) && typeof $mul95=='number'?
						$mul95*$mul96:
						$p['op_mul']($mul95,$mul96))) : $p['setattr'](self, 'gauss_next', (typeof ($mul95=$m['_sin'](x2pi))==typeof ($mul96=g2rad) && typeof $mul95=='number'?
						$mul95*$mul96:
						$p['op_mul']($mul95,$mul96))); 
				}
				$pyjs.track.lineno=509;
				$pyjs.track.lineno=509;
				var $pyjs__ret = (typeof ($add51=mu)==typeof ($add52=(typeof ($mul97=z)==typeof ($mul98=sigma) && typeof $mul97=='number'?
					$mul97*$mul98:
					$p['op_mul']($mul97,$mul98))) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['mu'],['sigma']]);
			$cls_definition['gauss'] = $method;
			$pyjs.track.lineno=525;
			$method = $pyjs__bind_method2('betavariate', function(alpha, beta) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					beta = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool54,$add53,$add54,$div27,$div28,y;
				$pyjs.track={module:'random', lineno:525};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=525;
				$pyjs.track.lineno=533;
				y = self['gammavariate'](alpha, 1.0);
				$pyjs.track.lineno=534;
				if ((($bool54=$p['op_eq'](y, $constant_int_0)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54.__nonzero__=='function'?
								$bool54.__nonzero__() :
								(typeof $bool54.__len__=='function'?
									($bool54.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=535;
					$pyjs.track.lineno=535;
					var $pyjs__ret = 0.0;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else {
					$pyjs.track.lineno=537;
					$pyjs.track.lineno=537;
					var $pyjs__ret = (typeof ($div27=y)==typeof ($div28=(typeof ($add53=y)==typeof ($add54=self['gammavariate'](beta, 1.0)) && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54))) && typeof $div27=='number' && $div28 !== 0?
						$div27/$div28:
						$p['op_div']($div27,$div28));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['alpha'],['beta']]);
			$cls_definition['betavariate'] = $method;
			$pyjs.track.lineno=541;
			$method = $pyjs__bind_method2('paretovariate', function(alpha) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub57,$div32,$div30,$div31,$div29,$sub58,u;
				$pyjs.track={module:'random', lineno:541};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=541;
				$pyjs.track.lineno=545;
				u = (typeof ($sub57=1.0)==typeof ($sub58=self['random']()) && (typeof $sub57=='number'||typeof $sub57=='string')?
					$sub57-$sub58:
					$p['op_sub']($sub57,$sub58));
				$pyjs.track.lineno=546;
				$pyjs.track.lineno=546;
				var $pyjs__ret = (typeof ($div31=1.0)==typeof ($div32=$p['pow'](u, (typeof ($div29=1.0)==typeof ($div30=alpha) && typeof $div29=='number' && $div30 !== 0?
					$div29/$div30:
					$p['op_div']($div29,$div30)))) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					$p['op_div']($div31,$div32));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['alpha']]);
			$cls_definition['paretovariate'] = $method;
			$pyjs.track.lineno=550;
			$method = $pyjs__bind_method2('weibullvariate', function(alpha, beta) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					beta = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div33,$mul100,$mul99,$div34,$sub59,u,$sub60;
				$pyjs.track={module:'random', lineno:550};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=550;
				$pyjs.track.lineno=556;
				u = (typeof ($sub59=1.0)==typeof ($sub60=self['random']()) && (typeof $sub59=='number'||typeof $sub59=='string')?
					$sub59-$sub60:
					$p['op_sub']($sub59,$sub60));
				$pyjs.track.lineno=557;
				$pyjs.track.lineno=557;
				var $pyjs__ret = (typeof ($mul99=alpha)==typeof ($mul100=$p['pow']((typeof ($usub9=$m['_log'](u))=='number'?
					-$usub9:
					$p['op_usub']($usub9)), (typeof ($div33=1.0)==typeof ($div34=beta) && typeof $div33=='number' && $div34 !== 0?
					$div33/$div34:
					$p['op_div']($div33,$div34)))) && typeof $mul99=='number'?
					$mul99*$mul100:
					$p['op_mul']($mul99,$mul100));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['alpha'],['beta']]);
			$cls_definition['weibullvariate'] = $method;
			$pyjs.track.lineno=32;
			var $bases = new Array($p['getattr']($m['_random'], 'Random'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Random', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=561;
		$m['WichmannHill'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'random';
			$cls_definition.__md5__ = '3c4457779e36a98e6957a304fc6e4b5f';
			$pyjs.track.lineno=563;
			$cls_definition['VERSION'] = $constant_int_1;
			$pyjs.track.lineno=565;
			$method = $pyjs__bind_method2('seed', function(a) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				var $bool55,$bool56,$bool57,$add55,$add56,$add57,$add58,$add59,$pyjs_try_err,$mul101,$mul102,time,y,x,z,$add60;
				$pyjs.track={module:'random', lineno:565};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=565;
				$pyjs.track.lineno=579;
				if ((($bool55=$p['op_is'](a, null)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
						false :
						(typeof $bool55=='object'?
							(typeof $bool55.__nonzero__=='function'?
								$bool55.__nonzero__() :
								(typeof $bool55.__len__=='function'?
									($bool55.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=580;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=581;
						a = $p['long']($m['_hexlify']($m['_urandom']($constant_int_16)), $constant_int_16);
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
						$pyjs.track.module='random';
						if (($pyjs_try_err_name == $p['NotImplementedError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
							$pyjs.track.lineno=583;
							$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
							time = $p['___import___']('time', null);
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							$pyjs.track.lineno=584;
							a = $p['long']((typeof ($mul101=time['time']())==typeof ($mul102=$constant_int_256) && typeof $mul101=='number'?
								$mul101*$mul102:
								$p['op_mul']($mul101,$mul102)));
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.track.lineno=586;
				if ((($bool57=!(($bool56=$p['isinstance'](a, $p['tuple']([$p['int'], $p['long']]))) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56.__nonzero__=='function'?
							$bool56.__nonzero__() :
							(typeof $bool56.__len__=='function'?
								($bool56.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
						false :
						(typeof $bool57=='object'?
							(typeof $bool57.__nonzero__=='function'?
								$bool57.__nonzero__() :
								(typeof $bool57.__len__=='function'?
									($bool57.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=587;
					a = $p['hash'](a);
				}
				$pyjs.track.lineno=589;
				var $tupleassign5 = $p['__ass_unpack']($p['divmod'](a, $constant_int_30268), 2, null);
				a = $tupleassign5[0];
				x = $tupleassign5[1];
				$pyjs.track.lineno=590;
				var $tupleassign6 = $p['__ass_unpack']($p['divmod'](a, $constant_int_30306), 2, null);
				a = $tupleassign6[0];
				y = $tupleassign6[1];
				$pyjs.track.lineno=591;
				var $tupleassign7 = $p['__ass_unpack']($p['divmod'](a, $constant_int_30322), 2, null);
				a = $tupleassign7[0];
				z = $tupleassign7[1];
				$pyjs.track.lineno=592;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_seed', $p['tuple']([(typeof ($add55=$p['int'](x))==typeof ($add56=$constant_int_1) && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					$p['op_add']($add55,$add56)), (typeof ($add57=$p['int'](y))==typeof ($add58=$constant_int_1) && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					$p['op_add']($add57,$add58)), (typeof ($add59=$p['int'](z))==typeof ($add60=$constant_int_1) && (typeof $add59=='number'||typeof $add59=='string')?
					$add59+$add60:
					$p['op_add']($add59,$add60))])) : $p['setattr'](self, '_seed', $p['tuple']([(typeof ($add55=$p['int'](x))==typeof ($add56=$constant_int_1) && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					$p['op_add']($add55,$add56)), (typeof ($add57=$p['int'](y))==typeof ($add58=$constant_int_1) && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					$p['op_add']($add57,$add58)), (typeof ($add59=$p['int'](z))==typeof ($add60=$constant_int_1) && (typeof $add59=='number'||typeof $add59=='string')?
					$add59+$add60:
					$p['op_add']($add59,$add60))])); 
				$pyjs.track.lineno=594;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a', null]]);
			$cls_definition['seed'] = $method;
			$pyjs.track.lineno=596;
			$method = $pyjs__bind_method2('random', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod7,$mod9,$mod8,$add64,$add61,$div37,$add63,$add62,$div39,$mod14,$mod11,$mod10,$mod13,$mod12,$mul104,$mul105,$mul106,$mul107,$mul103,$div36,$mul108,$div40,$div35,y,x,z,$div38;
				$pyjs.track={module:'random', lineno:596};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=596;
				$pyjs.track.lineno=616;
				var $tupleassign8 = $p['__ass_unpack']($p['getattr'](self, '_seed'), 3, null);
				x = $tupleassign8[0];
				y = $tupleassign8[1];
				z = $tupleassign8[2];
				$pyjs.track.lineno=617;
				x = (typeof ($mod7=(typeof ($mul103=$constant_int_171)==typeof ($mul104=x) && typeof $mul103=='number'?
					$mul103*$mul104:
					$p['op_mul']($mul103,$mul104)))==typeof ($mod8=$constant_int_30269) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8));
				$pyjs.track.lineno=618;
				y = (typeof ($mod9=(typeof ($mul105=$constant_int_172)==typeof ($mul106=y) && typeof $mul105=='number'?
					$mul105*$mul106:
					$p['op_mul']($mul105,$mul106)))==typeof ($mod10=$constant_int_30307) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10));
				$pyjs.track.lineno=619;
				z = (typeof ($mod11=(typeof ($mul107=$constant_int_170)==typeof ($mul108=z) && typeof $mul107=='number'?
					$mul107*$mul108:
					$p['op_mul']($mul107,$mul108)))==typeof ($mod12=$constant_int_30323) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12));
				$pyjs.track.lineno=620;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_seed', $p['tuple']([x, y, z])) : $p['setattr'](self, '_seed', $p['tuple']([x, y, z])); 
				$pyjs.track.lineno=625;
				$pyjs.track.lineno=625;
				var $pyjs__ret = (typeof ($mod13=(typeof ($add63=(typeof ($add61=(typeof ($div35=x)==typeof ($div36=30269.0) && typeof $div35=='number' && $div36 !== 0?
					$div35/$div36:
					$p['op_div']($div35,$div36)))==typeof ($add62=(typeof ($div37=y)==typeof ($div38=30307.0) && typeof $div37=='number' && $div38 !== 0?
					$div37/$div38:
					$p['op_div']($div37,$div38))) && (typeof $add61=='number'||typeof $add61=='string')?
					$add61+$add62:
					$p['op_add']($add61,$add62)))==typeof ($add64=(typeof ($div39=z)==typeof ($div40=30323.0) && typeof $div39=='number' && $div40 !== 0?
					$div39/$div40:
					$p['op_div']($div39,$div40))) && (typeof $add63=='number'||typeof $add63=='string')?
					$add63+$add64:
					$p['op_add']($add63,$add64)))==typeof ($mod14=1.0) && typeof $mod13=='number'?
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
					$p['op_mod']($mod13,$mod14));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['random'] = $method;
			$pyjs.track.lineno=627;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'random', lineno:627};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=627;
				$pyjs.track.lineno=629;
				$pyjs.track.lineno=629;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'VERSION'), $p['getattr'](self, '_seed'), $p['getattr'](self, 'gauss_next')]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$pyjs.track.lineno=631;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $15,$16,$bool58,version;
				$pyjs.track={module:'random', lineno:631};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=631;
				$pyjs.track.lineno=633;
				version = (typeof ($15=state).__array != 'undefined'?
					((typeof $15.__array[$16=$constant_int_0]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($constant_int_0));
				$pyjs.track.lineno=634;
				if ((($bool58=$p['op_eq'](version, $constant_int_1)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
						false :
						(typeof $bool58=='object'?
							(typeof $bool58.__nonzero__=='function'?
								$bool58.__nonzero__() :
								(typeof $bool58.__len__=='function'?
									($bool58.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=635;
					var $tupleassign9 = $p['__ass_unpack'](state, 3, null);
					version = $tupleassign9[0];
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_seed', $tupleassign9[1]) : $p['setattr'](self, '_seed', $tupleassign9[1]); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gauss_next', $tupleassign9[2]) : $p['setattr'](self, 'gauss_next', $tupleassign9[2]); 
				}
				else {
					$pyjs.track.lineno=637;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['ValueError']($p['sprintf']('state with version %s passed to Random.setstate() of version %s', $p['tuple']([version, $p['getattr'](self, 'VERSION')]))));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			$pyjs.track.lineno=641;
			$method = $pyjs__bind_method2('jumpahead', function(n) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					n = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod15,$cmp65,$cmp66,$mod16,$mod20,$bool60,$mod19,$bool59,$mod17,$mul114,$mul113,$mul112,$mul111,$mul110,y,x,$mod18,z,$mul109;
				$pyjs.track={module:'random', lineno:641};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=641;
				$pyjs.track.lineno=655;
				if ((($bool60=!(($bool59=((((($cmp65=n)===($cmp66=$constant_int_0)?0:
					(typeof $cmp65==typeof $cmp66 && ((typeof $cmp65 == 'number')||(typeof $cmp65 == 'string')||(typeof $cmp65 == 'boolean'))?
						($cmp65 == $cmp66 ? 0 : ($cmp65 < $cmp66 ? -1 : 1)):
						$p['cmp']($cmp65, $cmp66))))|1) == 1)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59.__nonzero__=='function'?
							$bool59.__nonzero__() :
							(typeof $bool59.__len__=='function'?
								($bool59.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
						false :
						(typeof $bool60=='object'?
							(typeof $bool60.__nonzero__=='function'?
								$bool60.__nonzero__() :
								(typeof $bool60.__len__=='function'?
									($bool60.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=656;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['ValueError']('n must be >= 0'));
				}
				$pyjs.track.lineno=657;
				var $tupleassign10 = $p['__ass_unpack']($p['getattr'](self, '_seed'), 3, null);
				x = $tupleassign10[0];
				y = $tupleassign10[1];
				z = $tupleassign10[2];
				$pyjs.track.lineno=658;
				x = (typeof ($mod15=$p['int']((typeof ($mul109=x)==typeof ($mul110=$p['pow']($constant_int_171, n, $constant_int_30269)) && typeof $mul109=='number'?
					$mul109*$mul110:
					$p['op_mul']($mul109,$mul110))))==typeof ($mod16=$constant_int_30269) && typeof $mod15=='number'?
					(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15):
					$p['op_mod']($mod15,$mod16));
				$pyjs.track.lineno=659;
				y = (typeof ($mod17=$p['int']((typeof ($mul111=y)==typeof ($mul112=$p['pow']($constant_int_172, n, $constant_int_30307)) && typeof $mul111=='number'?
					$mul111*$mul112:
					$p['op_mul']($mul111,$mul112))))==typeof ($mod18=$constant_int_30307) && typeof $mod17=='number'?
					(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17):
					$p['op_mod']($mod17,$mod18));
				$pyjs.track.lineno=660;
				z = (typeof ($mod19=$p['int']((typeof ($mul113=z)==typeof ($mul114=$p['pow']($constant_int_170, n, $constant_int_30323)) && typeof $mul113=='number'?
					$mul113*$mul114:
					$p['op_mul']($mul113,$mul114))))==typeof ($mod20=$constant_int_30323) && typeof $mod19=='number'?
					(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19):
					$p['op_mod']($mod19,$mod20));
				$pyjs.track.lineno=661;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_seed', $p['tuple']([x, y, z])) : $p['setattr'](self, '_seed', $p['tuple']([x, y, z])); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['n']]);
			$cls_definition['jumpahead'] = $method;
			$pyjs.track.lineno=663;
			$method = $pyjs__bind_method2('__whseed', function(x, y, z) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					z = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof x == 'undefined') x=arguments.callee.__args__[3][1];
				if (typeof y == 'undefined') y=arguments.callee.__args__[4][1];
				if (typeof z == 'undefined') z=arguments.callee.__args__[5][1];
				var $cmp73,$cmp67,$cmp68,$cmp69,$bool70,$mul116,$mul115,$cmp70,$bool65,$cmp76,$bool67,$or14,$bool66,$bool68,$or10,$bool61,$cmp72,$cmp71,$bool62,$cmp77,$bool64,$cmp75,$cmp74,$bool69,$or9,$and3,$and4,$and5,$or12,$bool63,$or11,t,$or13,time,$cmp78;
				$pyjs.track={module:'random', lineno:663};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=663;
				$pyjs.track.lineno=668;
				if ((($bool62=!(($bool61=($p['op_eq']($p['type'](x), ($compare5 = $p['type'](y)))&&$p['op_eq']($compare5, ($compare6 = $p['type'](z)))&&$p['op_eq']($compare6, ($compare7 = $p['int'])))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61.__nonzero__=='function'?
							$bool61.__nonzero__() :
							(typeof $bool61.__len__=='function'?
								($bool61.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62.__nonzero__=='function'?
								$bool62.__nonzero__() :
								(typeof $bool62.__len__=='function'?
									($bool62.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=669;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('seeds must be integers'));
				}
				$pyjs.track.lineno=670;
				if ((($bool66=!(($bool65=((($bool63=$and3=(((($cmp67=$constant_int_0)===($cmp68=($compare8 = x))?0:
					(typeof $cmp67==typeof $cmp68 && ((typeof $cmp67 == 'number')||(typeof $cmp67 == 'string')||(typeof $cmp67 == 'boolean'))?
						($cmp67 == $cmp68 ? 0 : ($cmp67 < $cmp68 ? -1 : 1)):
						$p['cmp']($cmp67, $cmp68))) < 1)&&((($cmp69=$compare8)===($cmp70=($compare9 = $constant_int_256))?0:
					(typeof $cmp69==typeof $cmp70 && ((typeof $cmp69 == 'number')||(typeof $cmp69 == 'string')||(typeof $cmp69 == 'boolean'))?
						($cmp69 == $cmp70 ? 0 : ($cmp69 < $cmp70 ? -1 : 1)):
						$p['cmp']($cmp69, $cmp70))) == -1))) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
					false :
					(typeof $bool63=='object'?
						(typeof $bool63.__nonzero__=='function'?
							$bool63.__nonzero__() :
							(typeof $bool63.__len__=='function'?
								($bool63.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool64=$and4=(((($cmp71=$constant_int_0)===($cmp72=($compare10 = y))?0:
					(typeof $cmp71==typeof $cmp72 && ((typeof $cmp71 == 'number')||(typeof $cmp71 == 'string')||(typeof $cmp71 == 'boolean'))?
						($cmp71 == $cmp72 ? 0 : ($cmp71 < $cmp72 ? -1 : 1)):
						$p['cmp']($cmp71, $cmp72))) < 1)&&((($cmp73=$compare10)===($cmp74=($compare11 = $constant_int_256))?0:
					(typeof $cmp73==typeof $cmp74 && ((typeof $cmp73 == 'number')||(typeof $cmp73 == 'string')||(typeof $cmp73 == 'boolean'))?
						($cmp73 == $cmp74 ? 0 : ($cmp73 < $cmp74 ? -1 : 1)):
						$p['cmp']($cmp73, $cmp74))) == -1))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
					false :
					(typeof $bool64=='object'?
						(typeof $bool64.__nonzero__=='function'?
							$bool64.__nonzero__() :
							(typeof $bool64.__len__=='function'?
								($bool64.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(((($cmp75=$constant_int_0)===($cmp76=($compare12 = z))?0:
					(typeof $cmp75==typeof $cmp76 && ((typeof $cmp75 == 'number')||(typeof $cmp75 == 'string')||(typeof $cmp75 == 'boolean'))?
						($cmp75 == $cmp76 ? 0 : ($cmp75 < $cmp76 ? -1 : 1)):
						$p['cmp']($cmp75, $cmp76))) < 1)&&((($cmp77=$compare12)===($cmp78=($compare13 = $constant_int_256))?0:
					(typeof $cmp77==typeof $cmp78 && ((typeof $cmp77 == 'number')||(typeof $cmp77 == 'string')||(typeof $cmp77 == 'boolean'))?
						($cmp77 == $cmp78 ? 0 : ($cmp77 < $cmp78 ? -1 : 1)):
						$p['cmp']($cmp77, $cmp78))) == -1)):$and4):$and3)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
					false :
					(typeof $bool65=='object'?
						(typeof $bool65.__nonzero__=='function'?
							$bool65.__nonzero__() :
							(typeof $bool65.__len__=='function'?
								($bool65.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
						false :
						(typeof $bool66=='object'?
							(typeof $bool66.__nonzero__=='function'?
								$bool66.__nonzero__() :
								(typeof $bool66.__len__=='function'?
									($bool66.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=671;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['ValueError']('seeds must be in range(0, 256)'));
				}
				$pyjs.track.lineno=672;
				if ((($bool67=($p['op_eq']($constant_int_0, ($compare14 = x))&&$p['op_eq']($compare14, ($compare15 = y))&&$p['op_eq']($compare15, ($compare16 = z)))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
						false :
						(typeof $bool67=='object'?
							(typeof $bool67.__nonzero__=='function'?
								$bool67.__nonzero__() :
								(typeof $bool67.__len__=='function'?
									($bool67.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=674;
					$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
					time = $p['___import___']('time', null);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.lineno=675;
					t = $p['long']((typeof ($mul115=time['time']())==typeof ($mul116=$constant_int_256) && typeof $mul115=='number'?
						$mul115*$mul116:
						$p['op_mul']($mul115,$mul116)));
					$pyjs.track.lineno=676;
					t = $p['int']($p['op_bitxor2']($p['op_bitand2'](t, $constant_int_16777215), $p['op_bitshiftright'](t,$constant_int_24)));
					$pyjs.track.lineno=677;
					var $tupleassign11 = $p['__ass_unpack']($p['divmod'](t, $constant_int_256), 2, null);
					t = $tupleassign11[0];
					x = $tupleassign11[1];
					$pyjs.track.lineno=678;
					var $tupleassign12 = $p['__ass_unpack']($p['divmod'](t, $constant_int_256), 2, null);
					t = $tupleassign12[0];
					y = $tupleassign12[1];
					$pyjs.track.lineno=679;
					var $tupleassign13 = $p['__ass_unpack']($p['divmod'](t, $constant_int_256), 2, null);
					t = $tupleassign13[0];
					z = $tupleassign13[1];
				}
				$pyjs.track.lineno=681;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_seed', $p['tuple']([((($bool68=$or9=x) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
					false :
					(typeof $bool68=='object'?
						(typeof $bool68.__nonzero__=='function'?
							$bool68.__nonzero__() :
							(typeof $bool68.__len__=='function'?
								($bool68.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or9:$constant_int_1), ((($bool69=$or11=y) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69.__nonzero__=='function'?
							$bool69.__nonzero__() :
							(typeof $bool69.__len__=='function'?
								($bool69.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or11:$constant_int_1), ((($bool70=$or13=z) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
					false :
					(typeof $bool70=='object'?
						(typeof $bool70.__nonzero__=='function'?
							$bool70.__nonzero__() :
							(typeof $bool70.__len__=='function'?
								($bool70.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or13:$constant_int_1)])) : $p['setattr'](self, '_seed', $p['tuple']([((($bool68=$or9=x) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
					false :
					(typeof $bool68=='object'?
						(typeof $bool68.__nonzero__=='function'?
							$bool68.__nonzero__() :
							(typeof $bool68.__len__=='function'?
								($bool68.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or9:$constant_int_1), ((($bool69=$or11=y) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69.__nonzero__=='function'?
							$bool69.__nonzero__() :
							(typeof $bool69.__len__=='function'?
								($bool69.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or11:$constant_int_1), ((($bool70=$or13=z) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
					false :
					(typeof $bool70=='object'?
						(typeof $bool70.__nonzero__=='function'?
							$bool70.__nonzero__() :
							(typeof $bool70.__len__=='function'?
								($bool70.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or13:$constant_int_1)])); 
				$pyjs.track.lineno=683;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x', $constant_int_0],['y', $constant_int_0],['z', $constant_int_0]]);
			$cls_definition['__whseed'] = $method;
			$pyjs.track.lineno=685;
			$method = $pyjs__bind_method2('whseed', function(a) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments.callee.__args__[3][1];
				var $mod21,$mod22,$mod23,$mod24,$mod25,$mod26,$bool74,$bool72,$bool73,$bool71,$add65,$add67,$add66,$add69,$add68,$or20,$add70,$or15,$or17,$or16,y,x,z,$or19,$or18;
				$pyjs.track={module:'random', lineno:685};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=685;
				$pyjs.track.lineno=696;
				if ((($bool71=$p['op_is'](a, null)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
						false :
						(typeof $bool71=='object'?
							(typeof $bool71.__nonzero__=='function'?
								$bool71.__nonzero__() :
								(typeof $bool71.__len__=='function'?
									($bool71.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=697;
					self['__whseed']();
					$pyjs.track.lineno=698;
					$pyjs.track.lineno=698;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=699;
				a = $p['hash'](a);
				$pyjs.track.lineno=700;
				var $tupleassign14 = $p['__ass_unpack']($p['divmod'](a, $constant_int_256), 2, null);
				a = $tupleassign14[0];
				x = $tupleassign14[1];
				$pyjs.track.lineno=701;
				var $tupleassign15 = $p['__ass_unpack']($p['divmod'](a, $constant_int_256), 2, null);
				a = $tupleassign15[0];
				y = $tupleassign15[1];
				$pyjs.track.lineno=702;
				var $tupleassign16 = $p['__ass_unpack']($p['divmod'](a, $constant_int_256), 2, null);
				a = $tupleassign16[0];
				z = $tupleassign16[1];
				$pyjs.track.lineno=703;
				x = ((($bool72=$or15=(typeof ($mod21=(typeof ($add65=x)==typeof ($add66=a) && (typeof $add65=='number'||typeof $add65=='string')?
					$add65+$add66:
					$p['op_add']($add65,$add66)))==typeof ($mod22=$constant_int_256) && typeof $mod21=='number'?
					(($mod21=$mod21%$mod22)<0&&$mod22>0?$mod21+$mod22:$mod21):
					$p['op_mod']($mod21,$mod22))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
					false :
					(typeof $bool72=='object'?
						(typeof $bool72.__nonzero__=='function'?
							$bool72.__nonzero__() :
							(typeof $bool72.__len__=='function'?
								($bool72.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or15:$constant_int_1);
				$pyjs.track.lineno=704;
				y = ((($bool73=$or17=(typeof ($mod23=(typeof ($add67=y)==typeof ($add68=a) && (typeof $add67=='number'||typeof $add67=='string')?
					$add67+$add68:
					$p['op_add']($add67,$add68)))==typeof ($mod24=$constant_int_256) && typeof $mod23=='number'?
					(($mod23=$mod23%$mod24)<0&&$mod24>0?$mod23+$mod24:$mod23):
					$p['op_mod']($mod23,$mod24))) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
					false :
					(typeof $bool73=='object'?
						(typeof $bool73.__nonzero__=='function'?
							$bool73.__nonzero__() :
							(typeof $bool73.__len__=='function'?
								($bool73.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or17:$constant_int_1);
				$pyjs.track.lineno=705;
				z = ((($bool74=$or19=(typeof ($mod25=(typeof ($add69=z)==typeof ($add70=a) && (typeof $add69=='number'||typeof $add69=='string')?
					$add69+$add70:
					$p['op_add']($add69,$add70)))==typeof ($mod26=$constant_int_256) && typeof $mod25=='number'?
					(($mod25=$mod25%$mod26)<0&&$mod26>0?$mod25+$mod26:$mod25):
					$p['op_mod']($mod25,$mod26))) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74.__nonzero__=='function'?
							$bool74.__nonzero__() :
							(typeof $bool74.__len__=='function'?
								($bool74.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or19:$constant_int_1);
				$pyjs.track.lineno=706;
				self['__whseed'](x, y, z);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['a', null]]);
			$cls_definition['whseed'] = $method;
			$pyjs.track.lineno=561;
			var $bases = new Array($m['Random']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('WichmannHill', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=710;
		$m['SystemRandom'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'random';
			$cls_definition.__md5__ = 'f19b5feec5915beed5b5881421edfea5';
			$pyjs.track.lineno=718;
			$method = $pyjs__bind_method2('random', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul117,$mul118;
				$pyjs.track={module:'random', lineno:718};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=718;
				$pyjs.track.lineno=720;
				$pyjs.track.lineno=720;
				var $pyjs__ret = (typeof ($mul117=$p['op_bitshiftright']($p['long']($m['_hexlify']($m['_urandom']($constant_int_7)), $constant_int_16),$constant_int_3))==typeof ($mul118=$m['RECIP_BPF']) && typeof $mul117=='number'?
					$mul117*$mul118:
					$p['op_mul']($mul117,$mul118));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['random'] = $method;
			$pyjs.track.lineno=722;
			$method = $pyjs__bind_method2('getrandbits', function(k) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					k = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add72,$add71,$bool76,$bool75,bytes,$cmp80,$floordiv6,$floordiv5,$mul120,x,$sub62,$cmp79,$mul119,$sub61;
				$pyjs.track={module:'random', lineno:722};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=722;
				$pyjs.track.lineno=724;
				if ((($bool75=((($cmp79=k)===($cmp80=$constant_int_0)?0:
					(typeof $cmp79==typeof $cmp80 && ((typeof $cmp79 == 'number')||(typeof $cmp79 == 'string')||(typeof $cmp79 == 'boolean'))?
						($cmp79 == $cmp80 ? 0 : ($cmp79 < $cmp80 ? -1 : 1)):
						$p['cmp']($cmp79, $cmp80))) < 1)) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
						false :
						(typeof $bool75=='object'?
							(typeof $bool75.__nonzero__=='function'?
								$bool75.__nonzero__() :
								(typeof $bool75.__len__=='function'?
									($bool75.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=725;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['ValueError']('number of bits must be greater than zero'));
				}
				$pyjs.track.lineno=726;
				if ((($bool76=!$p['op_eq'](k, $p['int'](k))) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
						false :
						(typeof $bool76=='object'?
							(typeof $bool76.__nonzero__=='function'?
								$bool76.__nonzero__() :
								(typeof $bool76.__len__=='function'?
									($bool76.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=727;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('number of bits should be an integer'));
				}
				$pyjs.track.lineno=728;
				bytes = (typeof ($floordiv5=(typeof ($add71=k)==typeof ($add72=$constant_int_7) && (typeof $add71=='number'||typeof $add71=='string')?
					$add71+$add72:
					$p['op_add']($add71,$add72)))==typeof ($floordiv6=$constant_int_8) && typeof $floordiv5=='number' && $floordiv6 !== 0?
					Math.floor($floordiv5/$floordiv6):
					$p['op_floordiv']($floordiv5,$floordiv6));
				$pyjs.track.lineno=729;
				x = $p['long']($m['_hexlify']($m['_urandom'](bytes)), $constant_int_16);
				$pyjs.track.lineno=730;
				$pyjs.track.lineno=730;
				var $pyjs__ret = $p['op_bitshiftright'](x,(typeof ($sub61=(typeof ($mul119=bytes)==typeof ($mul120=$constant_int_8) && typeof $mul119=='number'?
					$mul119*$mul120:
					$p['op_mul']($mul119,$mul120)))==typeof ($sub62=k) && (typeof $sub61=='number'||typeof $sub61=='string')?
					$sub61-$sub62:
					$p['op_sub']($sub61,$sub62)));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['k']]);
			$cls_definition['getrandbits'] = $method;
			$pyjs.track.lineno=732;
			$method = $pyjs__bind_method2('_stub', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

					var kwds = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwds != 'object' || kwds.__name__ != 'dict' || typeof kwds.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwds != 'undefined') args.__array.push(kwds);
						var kwds = arguments[arguments.length+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwds = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwds != 'object' || kwds.__name__ != 'dict' || typeof kwds.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwds != 'undefined') args.__array.push(kwds);
						kwds = arguments[arguments.length+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwds == 'undefined') {
					kwds = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwds = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs.track={module:'random', lineno:732};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=732;
				$pyjs.track.lineno=734;
				$pyjs.track.lineno=734;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, ['args',['kwds'],['self']]);
			$cls_definition['_stub'] = $method;
			$pyjs.track.lineno=735;
			$cls_definition['$assign1'] = $p['staticmethod']($cls_definition['_stub']);
			$cls_definition['seed'] = $cls_definition['$assign1'];
			$cls_definition['jumpahead'] = $cls_definition['$assign1'];
			$pyjs.track.lineno=737;
			$method = $pyjs__bind_method2('_notimplemented', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

					var kwds = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwds != 'object' || kwds.__name__ != 'dict' || typeof kwds.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwds != 'undefined') args.__array.push(kwds);
						var kwds = arguments[arguments.length+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwds = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwds != 'object' || kwds.__name__ != 'dict' || typeof kwds.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwds != 'undefined') args.__array.push(kwds);
						kwds = arguments[arguments.length+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwds == 'undefined') {
					kwds = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwds = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs.track={module:'random', lineno:737};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='random';
				$pyjs.track.lineno=737;
				$pyjs.track.lineno=739;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']('System entropy source does not have state.'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwds'],['self']]);
			$cls_definition['_notimplemented'] = $method;
			$pyjs.track.lineno=740;
			$cls_definition['$assign2'] = $p['staticmethod']($cls_definition['_notimplemented']);
			$cls_definition['getstate'] = $cls_definition['$assign2'];
			$cls_definition['setstate'] = $cls_definition['$assign2'];
			$pyjs.track.lineno=710;
			var $bases = new Array($m['Random']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SystemRandom', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=744;
		$m['_test_generator'] = function(n, func, args) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $iter5_nextval,$iter5_array,$iter5_idx,t1,$iter5_iter,sqsum,$iter5_type,$sub64,total,$sub63,avg,smallest,largest,$div42,$div44,$mul124,$mul122,$mul123,$mul121,$add76,$add74,$add75,$div43,$add73,$div41,i,t0,time,stddev,$pyjs__trackstack_size_1,x;
			$pyjs.track={module:'random',lineno:744};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='random';
			$pyjs.track.lineno=744;
			$pyjs.track.lineno=745;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			time = $p['___import___']('time', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=746;
			$pyjs.track.lineno=747;
			total = 0.0;
			$pyjs.track.lineno=748;
			sqsum = 0.0;
			$pyjs.track.lineno=749;
			smallest = 10000000000.0;
			$pyjs.track.lineno=750;
			largest = (typeof ($usub10=10000000000.0)=='number'?
				-$usub10:
				$p['op_usub']($usub10));
			$pyjs.track.lineno=751;
			t0 = time['time']();
			$pyjs.track.lineno=752;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter5_iter = $p['range'](n);
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				$pyjs.track.lineno=753;
				x = $pyjs_kwargs_call(null, func, args, null, [{}]);
				$pyjs.track.lineno=754;
				total = (typeof ($add73=total)==typeof ($add74=x) && (typeof $add73=='number'||typeof $add73=='string')?
					$add73+$add74:
					$p['op_add']($add73,$add74));
				$pyjs.track.lineno=755;
				sqsum = (typeof ($add75=sqsum)==typeof ($add76=(typeof ($mul121=x)==typeof ($mul122=x) && typeof $mul121=='number'?
					$mul121*$mul122:
					$p['op_mul']($mul121,$mul122))) && (typeof $add75=='number'||typeof $add75=='string')?
					$add75+$add76:
					$p['op_add']($add75,$add76));
				$pyjs.track.lineno=756;
				smallest = $p['min'](x, smallest);
				$pyjs.track.lineno=757;
				largest = $p['max'](x, largest);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='random';
			$pyjs.track.lineno=758;
			t1 = time['time']();
			$pyjs.track.lineno=759;
			$pyjs.track.lineno=760;
			avg = (typeof ($div41=total)==typeof ($div42=n) && typeof $div41=='number' && $div42 !== 0?
				$div41/$div42:
				$p['op_div']($div41,$div42));
			$pyjs.track.lineno=761;
			stddev = $m['_sqrt']((typeof ($sub63=(typeof ($div43=sqsum)==typeof ($div44=n) && typeof $div43=='number' && $div44 !== 0?
				$div43/$div44:
				$p['op_div']($div43,$div44)))==typeof ($sub64=(typeof ($mul123=avg)==typeof ($mul124=avg) && typeof $mul123=='number'?
				$mul123*$mul124:
				$p['op_mul']($mul123,$mul124))) && (typeof $sub63=='number'||typeof $sub63=='string')?
				$sub63-$sub64:
				$p['op_sub']($sub63,$sub64)));
			$pyjs.track.lineno=762;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_test_generator'].__name__ = '_test_generator';

		$m['_test_generator'].__bind_type__ = 0;
		$m['_test_generator'].__args__ = [null,null,['n'],['func'],['args']];
		$pyjs.track.lineno=766;
		$m['_test'] = function(N) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
			if (typeof N == 'undefined') N=arguments.callee.__args__[2][1];
			var $div46,$div45;
			$pyjs.track={module:'random',lineno:766};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='random';
			$pyjs.track.lineno=766;
			$pyjs.track.lineno=767;
			$m['_test_generator'](N, (typeof random == "undefined"?$m.random:random), $p['tuple']([]));
			$pyjs.track.lineno=768;
			$m['_test_generator'](N, (typeof normalvariate == "undefined"?$m.normalvariate:normalvariate), $p['tuple']([0.0, 1.0]));
			$pyjs.track.lineno=769;
			$m['_test_generator'](N, (typeof lognormvariate == "undefined"?$m.lognormvariate:lognormvariate), $p['tuple']([0.0, 1.0]));
			$pyjs.track.lineno=770;
			$m['_test_generator'](N, (typeof vonmisesvariate == "undefined"?$m.vonmisesvariate:vonmisesvariate), $p['tuple']([0.0, 1.0]));
			$pyjs.track.lineno=771;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m.gammavariate:gammavariate), $p['tuple']([0.01, 1.0]));
			$pyjs.track.lineno=772;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m.gammavariate:gammavariate), $p['tuple']([0.1, 1.0]));
			$pyjs.track.lineno=773;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m.gammavariate:gammavariate), $p['tuple']([0.1, 2.0]));
			$pyjs.track.lineno=774;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m.gammavariate:gammavariate), $p['tuple']([0.5, 1.0]));
			$pyjs.track.lineno=775;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m.gammavariate:gammavariate), $p['tuple']([0.9, 1.0]));
			$pyjs.track.lineno=776;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m.gammavariate:gammavariate), $p['tuple']([1.0, 1.0]));
			$pyjs.track.lineno=777;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m.gammavariate:gammavariate), $p['tuple']([2.0, 1.0]));
			$pyjs.track.lineno=778;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m.gammavariate:gammavariate), $p['tuple']([20.0, 1.0]));
			$pyjs.track.lineno=779;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m.gammavariate:gammavariate), $p['tuple']([200.0, 1.0]));
			$pyjs.track.lineno=780;
			$m['_test_generator'](N, (typeof gauss == "undefined"?$m.gauss:gauss), $p['tuple']([0.0, 1.0]));
			$pyjs.track.lineno=781;
			$m['_test_generator'](N, (typeof betavariate == "undefined"?$m.betavariate:betavariate), $p['tuple']([3.0, 3.0]));
			$pyjs.track.lineno=782;
			$m['_test_generator'](N, (typeof triangular == "undefined"?$m.triangular:triangular), $p['tuple']([0.0, 1.0, (typeof ($div45=1.0)==typeof ($div46=3.0) && typeof $div45=='number' && $div46 !== 0?
				$div45/$div46:
				$p['op_div']($div45,$div46))]));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_test'].__name__ = '_test';

		$m['_test'].__bind_type__ = 0;
		$m['_test'].__args__ = [null,null,['N', $constant_int_2000]];
		$pyjs.track.lineno=790;
		$m['_inst'] = $m['Random']();
		$pyjs.track.lineno=791;
		$m['seed'] = $p['getattr']($m['_inst'], 'seed');
		$pyjs.track.lineno=792;
		$m['random'] = $p['getattr']($m['_inst'], 'random');
		$pyjs.track.lineno=793;
		$m['uniform'] = $p['getattr']($m['_inst'], 'uniform');
		$pyjs.track.lineno=794;
		$m['triangular'] = $p['getattr']($m['_inst'], 'triangular');
		$pyjs.track.lineno=795;
		$m['randint'] = $p['getattr']($m['_inst'], 'randint');
		$pyjs.track.lineno=796;
		$m['choice'] = $p['getattr']($m['_inst'], 'choice');
		$pyjs.track.lineno=797;
		$m['randrange'] = $p['getattr']($m['_inst'], 'randrange');
		$pyjs.track.lineno=798;
		$m['sample'] = $p['getattr']($m['_inst'], 'sample');
		$pyjs.track.lineno=799;
		$m['shuffle'] = $p['getattr']($m['_inst'], 'shuffle');
		$pyjs.track.lineno=800;
		$m['normalvariate'] = $p['getattr']($m['_inst'], 'normalvariate');
		$pyjs.track.lineno=801;
		$m['lognormvariate'] = $p['getattr']($m['_inst'], 'lognormvariate');
		$pyjs.track.lineno=802;
		$m['expovariate'] = $p['getattr']($m['_inst'], 'expovariate');
		$pyjs.track.lineno=803;
		$m['vonmisesvariate'] = $p['getattr']($m['_inst'], 'vonmisesvariate');
		$pyjs.track.lineno=804;
		$m['gammavariate'] = $p['getattr']($m['_inst'], 'gammavariate');
		$pyjs.track.lineno=805;
		$m['gauss'] = $p['getattr']($m['_inst'], 'gauss');
		$pyjs.track.lineno=806;
		$m['betavariate'] = $p['getattr']($m['_inst'], 'betavariate');
		$pyjs.track.lineno=807;
		$m['paretovariate'] = $p['getattr']($m['_inst'], 'paretovariate');
		$pyjs.track.lineno=808;
		$m['weibullvariate'] = $p['getattr']($m['_inst'], 'weibullvariate');
		$pyjs.track.lineno=809;
		$m['getstate'] = $p['getattr']($m['_inst'], 'getstate');
		$pyjs.track.lineno=810;
		$m['setstate'] = $p['getattr']($m['_inst'], 'setstate');
		$pyjs.track.lineno=811;
		$m['jumpahead'] = $p['getattr']($m['_inst'], 'jumpahead');
		$pyjs.track.lineno=812;
		$m['getrandbits'] = $p['getattr']($m['_inst'], 'getrandbits');
		$pyjs.track.lineno=814;
		if ((($bool77=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
				false :
				(typeof $bool77=='object'?
					(typeof $bool77.__nonzero__=='function'?
						$bool77.__nonzero__() :
						(typeof $bool77.__len__=='function'?
							($bool77.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$pyjs.track.lineno=815;
			$m['_test']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end random */


/* end module: random */


/*
PYJS_DEPS: ['math.log', 'math', 'math.exp', 'math.pi', 'math.e', 'math.ceil', 'math.sqrt', 'math.acos', 'math.cos', 'math.sin', 'os.urandom', 'os', 'binascii.hexlify', 'binascii', '_random', 'time']
*/
