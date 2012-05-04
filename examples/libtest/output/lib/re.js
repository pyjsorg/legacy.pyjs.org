/* start module: re */
$pyjs.loaded_modules['re'] = function (__mod_name__) {
	if($pyjs.loaded_modules['re'].__was_initialized__) return $pyjs.loaded_modules['re'];
	var $m = $pyjs.loaded_modules["re"];
	$m.__repr__ = function() { return "<module: re>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 're';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 're.py, line 1:\n    ';
		$m.__track_lines__[9] = 're.py, line 9:\n    I = IGNORECASE = 1  # ignore case';
		$m.__track_lines__[10] = 're.py, line 10:\n    L = LOCALE     = 2  # assume current 8-bit locale';
		$m.__track_lines__[11] = 're.py, line 11:\n    U = UNICODE    = 4  # assume unicode locale';
		$m.__track_lines__[12] = 're.py, line 12:\n    M = MULTILINE  = 8  # make anchors look for newline';
		$m.__track_lines__[13] = 're.py, line 13:\n    S = DOTALL     = 16 # make dot match newline';
		$m.__track_lines__[14] = 're.py, line 14:\n    X = VERBOSE    = 32 # ignore whitespace and comments';
		$m.__track_lines__[16] = 're.py, line 16:\n    def match(pattern, string, flags=0):';
		$m.__track_lines__[19] = 're.py, line 19:\n    return compile(pattern, flags).match(string)';
		$m.__track_lines__[21] = 're.py, line 21:\n    def search(pattern, string, flags=0):';
		$m.__track_lines__[24] = 're.py, line 24:\n    return compile(pattern, flags).search(string)';
		$m.__track_lines__[26] = 're.py, line 26:\n    def sub(pattern, repl, string, count=0):';
		$m.__track_lines__[32] = 're.py, line 32:\n    return compile(pattern, 0).sub(repl, string, count)';
		$m.__track_lines__[34] = 're.py, line 34:\n    def subn(pattern, repl, string, count=0):';
		$m.__track_lines__[42] = 're.py, line 42:\n    return compile(pattern, 0).subn(repl, string, count)';
		$m.__track_lines__[44] = 're.py, line 44:\n    def split(pattern, string, maxsplit=0):';
		$m.__track_lines__[47] = 're.py, line 47:\n    return compile(pattern, 0).split(string, maxsplit)';
		$m.__track_lines__[49] = 're.py, line 49:\n    def findall(pattern, string, flags=0):';
		$m.__track_lines__[57] = 're.py, line 57:\n    return compile(pattern, flags).findall(string)';
		$m.__track_lines__[59] = 're.py, line 59:\n    def finditer(pattern, string, flags=0):';
		$m.__track_lines__[64] = 're.py, line 64:\n    return compile(pattern, flags).finditer(string)';
		$m.__track_lines__[66] = 're.py, line 66:\n    def compile(pattern, flags=0):';
		$m.__track_lines__[67] = 're.py, line 67:\n    return SRE_Pattern(pattern, flags, _compile(pattern, flags))';
		$m.__track_lines__[69] = 're.py, line 69:\n    def purge():';
		$m.__track_lines__[71] = 're.py, line 71:\n    _cache.clear()';
		$m.__track_lines__[72] = 're.py, line 72:\n    _cache_repl.clear()';
		$m.__track_lines__[74] = 're.py, line 74:\n    def template(pattern, flags=0):';
		$m.__track_lines__[76] = 're.py, line 76:\n    raise NotImplementedError("re.template")';
		$m.__track_lines__[79] = 're.py, line 79:\n    _alphanum = {}';
		$m.__track_lines__[80] = "re.py, line 80:\n    for c in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890':";
		$m.__track_lines__[81] = 're.py, line 81:\n    _alphanum[c] = 1';
		$m.__track_lines__[82] = 're.py, line 82:\n    del c';
		$m.__track_lines__[84] = 're.py, line 84:\n    def escape(pattern):';
		$m.__track_lines__[86] = 're.py, line 86:\n    s = list(pattern)';
		$m.__track_lines__[87] = 're.py, line 87:\n    alphanum = _alphanum';
		$m.__track_lines__[88] = 're.py, line 88:\n    for i in range(len(pattern)):';
		$m.__track_lines__[89] = 're.py, line 89:\n    c = pattern[i]';
		$m.__track_lines__[90] = 're.py, line 90:\n    if c not in alphanum:';
		$m.__track_lines__[91] = 're.py, line 91:\n    if c == "\\000":';
		$m.__track_lines__[92] = 're.py, line 92:\n    s[i] = "\\\\000"';
		$m.__track_lines__[94] = 're.py, line 94:\n    s[i] = "\\\\" + c';
		$m.__track_lines__[95] = 're.py, line 95:\n    return pattern[:0].join(s)';
		$m.__track_lines__[100] = 're.py, line 100:\n    from __pyjamas__ import JS, debugger';
		$m.__track_lines__[102] = 're.py, line 102:\n    __inline_flags_re__ = JS(r"""new RegExp("[(][?][iLmsux]+[)]")""")';
		$m.__track_lines__[104] = 're.py, line 104:\n    _cache = {}';
		$m.__track_lines__[105] = 're.py, line 105:\n    _cache_repl = {}';
		$m.__track_lines__[106] = 're.py, line 106:\n    _MAXCACHE = 100';
		$m.__track_lines__[108] = 're.py, line 108:\n    def _compile(pat, flags=0):';
		$m.__track_lines__[109] = 're.py, line 109:\n    cachekey = (pat, flags)';
		$m.__track_lines__[110] = 're.py, line 110:\n    p = _cache.get(cachekey)';
		$m.__track_lines__[111] = 're.py, line 111:\n    if p is not None:';
		$m.__track_lines__[112] = 're.py, line 112:\n    return p';
		$m.__track_lines__[114] = 're.py, line 114:\n    flgs = ""';
		$m.__track_lines__[115] = 're.py, line 115:\n    while True:';
		$m.__track_lines__[116] = 're.py, line 116:\n    m = __inline_flags_re__.Exec(pat)';
		$m.__track_lines__[117] = 're.py, line 117:\n    if JS("@{{m}} === null"):';
		$m.__track_lines__[118] = 're.py, line 118:\n    m = None';
		$m.__track_lines__[119] = 're.py, line 119:\n    break';
		$m.__track_lines__[120] = 're.py, line 120:\n    pat = pat.replace(__inline_flags_re__, "")';
		$m.__track_lines__[121] = 're.py, line 121:\n    for m in list(m):';
		$m.__track_lines__[122] = 're.py, line 122:\n    if JS("@{{m}} === null"):';
		$m.__track_lines__[123] = 're.py, line 123:\n    continue';
		$m.__track_lines__[124] = 're.py, line 124:\n    for c in str(m):';
		$m.__track_lines__[125] = "re.py, line 125:\n    if c in ['(','?',')']:";
		$m.__track_lines__[126] = 're.py, line 126:\n    pass';
		$m.__track_lines__[128] = 're.py, line 128:\n    flags |= IGNORECASE';
		$m.__track_lines__[130] = 're.py, line 130:\n    flags |= LOCALE';
		$m.__track_lines__[132] = 're.py, line 132:\n    flags |= MULTILINE';
		$m.__track_lines__[134] = 're.py, line 134:\n    flags |= DOTALL';
		$m.__track_lines__[136] = 're.py, line 136:\n    flags |= UNICODE';
		$m.__track_lines__[138] = 're.py, line 138:\n    flags |= VERBOSE';
		$m.__track_lines__[140] = 're.py, line 140:\n    if flags:';
		$m.__track_lines__[141] = 're.py, line 141:\n    if flags & LOCALE:';
		$m.__track_lines__[142] = 're.py, line 142:\n    raise NotImplementedError("L/LOCALE flag is not implemented")';
		$m.__track_lines__[143] = 're.py, line 143:\n    if flags & UNICODE:';
		$m.__track_lines__[144] = 're.py, line 144:\n    raise NotImplementedError("U/UNICODE flag is not implemented")';
		$m.__track_lines__[145] = 're.py, line 145:\n    if flags & VERBOSE:';
		$m.__track_lines__[146] = 're.py, line 146:\n    raise NotImplementedError("X/VERBOSE flag is not implemented")';
		$m.__track_lines__[147] = 're.py, line 147:\n    if flags & DOTALL:';
		$m.__track_lines__[149] = "re.py, line 149:\n    p = ''";
		$m.__track_lines__[150] = 're.py, line 150:\n    brack = -1';
		$m.__track_lines__[151] = 're.py, line 151:\n    backslash = -2';
		$m.__track_lines__[152] = 're.py, line 152:\n    for i, c in enumerate(pat):';
		$m.__track_lines__[153] = 're.py, line 153:\n    if backslash != i - 1:';
		$m.__track_lines__[154] = 're.py, line 154:\n    if brack < 0:';
		$m.__track_lines__[155] = "re.py, line 155:\n    if c == '[':";
		$m.__track_lines__[156] = 're.py, line 156:\n    brack = i';
		$m.__track_lines__[158] = "re.py, line 158:\n    c = r'[\\s\\S]'";
		$m.__track_lines__[160] = 're.py, line 160:\n    backslash = i';
		$m.__track_lines__[162] = "re.py, line 162:\n    if c == ']' and brack != i-1:";
		$m.__track_lines__[163] = 're.py, line 163:\n    brack = -1';
		$m.__track_lines__[164] = 're.py, line 164:\n    p += c';
		$m.__track_lines__[165] = 're.py, line 165:\n    pat = p';
		$m.__track_lines__[166] = 're.py, line 166:\n    if flags & IGNORECASE:';
		$m.__track_lines__[167] = "re.py, line 167:\n    flgs += 'i'";
		$m.__track_lines__[168] = 're.py, line 168:\n    if flags & MULTILINE:';
		$m.__track_lines__[169] = "re.py, line 169:\n    flgs += 'm'";
		$m.__track_lines__[170] = 're.py, line 170:\n    spat = r"([\\s\\S]*?)(" + pat + r")[\\s\\S]*"';
		$m.__track_lines__[171] = 're.py, line 171:\n    p = JS(r"""new RegExp(@{{pat}}, @{{flgs}})"""), JS(r"""new RegExp(@{{spat}}, @{{flgs}})"""), JS(r"""new RegExp(@{{pat}}, "g"+@{{flgs}})""")';
		$m.__track_lines__[172] = 're.py, line 172:\n    if len(_cache) >= _MAXCACHE:';
		$m.__track_lines__[173] = 're.py, line 173:\n    _cache.clear()';
		$m.__track_lines__[174] = 're.py, line 174:\n    _cache[cachekey] = p';
		$m.__track_lines__[175] = 're.py, line 175:\n    return p';
		$m.__track_lines__[177] = 're.py, line 177:\n    class SRE_Match:';
		$m.__track_lines__[178] = 're.py, line 178:\n    def __init__(self, re, string, pos, endpos, groups, start, lastindex, lastgroup):';
		$m.__track_lines__[179] = 're.py, line 179:\n    self._groups = groups';
		$m.__track_lines__[180] = 're.py, line 180:\n    self._start = start';
		$m.__track_lines__[181] = 're.py, line 181:\n    self._end   = start + len(groups[0])';
		$m.__track_lines__[182] = 're.py, line 182:\n    self.re = re';
		$m.__track_lines__[183] = 're.py, line 183:\n    self.string = string';
		$m.__track_lines__[184] = 're.py, line 184:\n    self.pos = pos';
		$m.__track_lines__[185] = 're.py, line 185:\n    self.endpos = endpos';
		$m.__track_lines__[186] = 're.py, line 186:\n    self.lastindex = lastindex';
		$m.__track_lines__[187] = 're.py, line 187:\n    self.lastgroup = lastgroup';
		$m.__track_lines__[189] = 're.py, line 189:\n    def start(self, group=0):';
		$m.__track_lines__[193] = 're.py, line 193:\n    if group != 0:';
		$m.__track_lines__[194] = 're.py, line 194:\n    substr = self.group(group)';
		$m.__track_lines__[195] = 're.py, line 195:\n    if substr:';
		$m.__track_lines__[196] = 're.py, line 196:\n    idx = self.string.index(substr, self._start)';
		$m.__track_lines__[197] = 're.py, line 197:\n    return idx';
		$m.__track_lines__[198] = 're.py, line 198:\n    raise NotImplementedError("group argument not supported")';
		$m.__track_lines__[199] = 're.py, line 199:\n    return self._start';
		$m.__track_lines__[201] = 're.py, line 201:\n    def end(self, group=0):';
		$m.__track_lines__[205] = 're.py, line 205:\n    if group != 0:';
		$m.__track_lines__[206] = 're.py, line 206:\n    substr = self.group(group)';
		$m.__track_lines__[207] = 're.py, line 207:\n    if substr:';
		$m.__track_lines__[208] = 're.py, line 208:\n    idx = self.string.index(substr, self._start)';
		$m.__track_lines__[209] = 're.py, line 209:\n    return idx + len(substr)';
		$m.__track_lines__[210] = 're.py, line 210:\n    raise NotImplementedError("group argument not supported")';
		$m.__track_lines__[211] = 're.py, line 211:\n    return self._end';
		$m.__track_lines__[213] = 're.py, line 213:\n    def span(self, group=0):';
		$m.__track_lines__[215] = 're.py, line 215:\n    return self.start(group), self.end(group)';
		$m.__track_lines__[217] = 're.py, line 217:\n    def expand(self, template):';
		$m.__track_lines__[220] = "re.py, line 220:\n    raise NotImplementedError('expand')";
		$m.__track_lines__[222] = 're.py, line 222:\n    def groups(self, default=None):';
		$m.__track_lines__[226] = 're.py, line 226:\n    return tuple([x if x is not None else default for x in self._groups[1:]])';
		$m.__track_lines__[228] = 're.py, line 228:\n    def groupdict(self, default=None):';
		$m.__track_lines__[232] = "re.py, line 232:\n    raise NotImplementedError('groupdict')";
		$m.__track_lines__[234] = 're.py, line 234:\n    def group(self, *args):';
		$m.__track_lines__[237] = 're.py, line 237:\n    if len(args) == 0:';
		$m.__track_lines__[238] = 're.py, line 238:\n    args = (0,)';
		$m.__track_lines__[239] = 're.py, line 239:\n    grouplist = []';
		$m.__track_lines__[240] = 're.py, line 240:\n    for group in args:';
		$m.__track_lines__[241] = 're.py, line 241:\n    grouplist.append(self._groups[group])';
		$m.__track_lines__[242] = 're.py, line 242:\n    if len(grouplist) == 1:';
		$m.__track_lines__[243] = 're.py, line 243:\n    return grouplist[0]';
		$m.__track_lines__[245] = 're.py, line 245:\n    return tuple(grouplist)';
		$m.__track_lines__[247] = 're.py, line 247:\n    def __copy__():';
		$m.__track_lines__[248] = 're.py, line 248:\n    raise TypeError, "cannot copy this pattern object"';
		$m.__track_lines__[250] = 're.py, line 250:\n    def __deepcopy__():';
		$m.__track_lines__[251] = 're.py, line 251:\n    raise TypeError, "cannot copy this pattern object"';
		$m.__track_lines__[254] = 're.py, line 254:\n    class SRE_Pattern:';
		$m.__track_lines__[255] = 're.py, line 255:\n    def __init__(self, pat, flags, code):';
		$m.__track_lines__[256] = 're.py, line 256:\n    self.pat = pat';
		$m.__track_lines__[257] = 're.py, line 257:\n    self.flags = flags';
		$m.__track_lines__[258] = 're.py, line 258:\n    self.match_code = code[0]';
		$m.__track_lines__[259] = 're.py, line 259:\n    self.search_code = code[1]';
		$m.__track_lines__[260] = 're.py, line 260:\n    self.findall_code = code[2]';
		$m.__track_lines__[262] = 're.py, line 262:\n    def match(self, string, pos=0, endpos=None):';
		$m.__track_lines__[266] = 're.py, line 266:\n    if not endpos is None:';
		$m.__track_lines__[267] = 're.py, line 267:\n    string = string[:endpos]';
		$m.__track_lines__[269] = 're.py, line 269:\n    endpos = len(string)';
		$m.__track_lines__[270] = 're.py, line 270:\n    if pos == 0:';
		$m.__track_lines__[271] = 're.py, line 271:\n    groups = self.match_code.Exec(string)';
		$m.__track_lines__[272] = 're.py, line 272:\n    if JS("@{{groups}} === null"):';
		$m.__track_lines__[273] = 're.py, line 273:\n    return None';
		$m.__track_lines__[274] = 're.py, line 274:\n    _groups = []';
		$m.__track_lines__[275] = 're.py, line 275:\n    for i in list(groups):';
		$m.__track_lines__[276] = 're.py, line 276:\n    if JS("@{{i}} === null"):';
		$m.__track_lines__[277] = 're.py, line 277:\n    _groups.append(None)';
		$m.__track_lines__[279] = 're.py, line 279:\n    _groups.append(str(i))';
		$m.__track_lines__[280] = 're.py, line 280:\n    groups = _groups';
		$m.__track_lines__[282] = 're.py, line 282:\n    return None';
		$m.__track_lines__[289] = 're.py, line 289:\n    groups = self.match_code.Exec(string[pos:])';
		$m.__track_lines__[290] = 're.py, line 290:\n    if JS("@{{groups}} === null"):';
		$m.__track_lines__[291] = 're.py, line 291:\n    return None';
		$m.__track_lines__[292] = 're.py, line 292:\n    if groups.index != 0:';
		$m.__track_lines__[293] = 're.py, line 293:\n    return None';
		$m.__track_lines__[294] = 're.py, line 294:\n    _groups = []';
		$m.__track_lines__[295] = 're.py, line 295:\n    for i in list(groups):';
		$m.__track_lines__[296] = 're.py, line 296:\n    if JS("@{{i}} === null"):';
		$m.__track_lines__[297] = 're.py, line 297:\n    _groups.append(None)';
		$m.__track_lines__[299] = 're.py, line 299:\n    _groups.append(str(i))';
		$m.__track_lines__[300] = 're.py, line 300:\n    groups = _groups';
		$m.__track_lines__[301] = 're.py, line 301:\n    return SRE_Match(self, string, pos, endpos, groups, pos, None, None)';
		$m.__track_lines__[303] = 're.py, line 303:\n    def search(self, string, pos=0, endpos=None):';
		$m.__track_lines__[308] = 're.py, line 308:\n    if not endpos is None:';
		$m.__track_lines__[309] = 're.py, line 309:\n    string = string[:endpos]';
		$m.__track_lines__[310] = 're.py, line 310:\n    if pos == 0:';
		$m.__track_lines__[311] = 're.py, line 311:\n    groups = self.search_code.Exec(string)';
		$m.__track_lines__[312] = 're.py, line 312:\n    if JS("@{{groups}} === null"):';
		$m.__track_lines__[313] = 're.py, line 313:\n    return None';
		$m.__track_lines__[314] = 're.py, line 314:\n    _groups = []';
		$m.__track_lines__[315] = 're.py, line 315:\n    for i in list(groups):';
		$m.__track_lines__[316] = 're.py, line 316:\n    if JS("@{{i}} === null"):';
		$m.__track_lines__[317] = 're.py, line 317:\n    _groups.append(None)';
		$m.__track_lines__[319] = 're.py, line 319:\n    _groups.append(str(i))';
		$m.__track_lines__[320] = 're.py, line 320:\n    groups = _groups';
		$m.__track_lines__[322] = 're.py, line 322:\n    return None';
		$m.__track_lines__[325] = 're.py, line 325:\n    groups = self.search_code.Exec(string[pos:])';
		$m.__track_lines__[326] = 're.py, line 326:\n    if JS("@{{groups}} === null"):';
		$m.__track_lines__[327] = 're.py, line 327:\n    return None';
		$m.__track_lines__[328] = 're.py, line 328:\n    _groups = []';
		$m.__track_lines__[329] = 're.py, line 329:\n    for i in list(groups):';
		$m.__track_lines__[330] = 're.py, line 330:\n    if JS("@{{i}} === null"):';
		$m.__track_lines__[331] = 're.py, line 331:\n    _groups.append(None)';
		$m.__track_lines__[333] = 're.py, line 333:\n    _groups.append(str(i))';
		$m.__track_lines__[334] = 're.py, line 334:\n    groups = _groups';
		$m.__track_lines__[335] = 're.py, line 335:\n    return SRE_Match(self, string, pos, endpos, groups[2:], pos + len(groups[1]),None, None)';
		$m.__track_lines__[337] = 're.py, line 337:\n    def findall(self, string, pos=0, endpos=None):';
		$m.__track_lines__[339] = 're.py, line 339:\n    if not endpos is None:';
		$m.__track_lines__[340] = 're.py, line 340:\n    string = string[:endpos]';
		$m.__track_lines__[341] = 're.py, line 341:\n    all = []';
		$m.__track_lines__[342] = 're.py, line 342:\n    while True:';
		$m.__track_lines__[343] = 're.py, line 343:\n    m = self.search(string, pos)';
		$m.__track_lines__[344] = 're.py, line 344:\n    if m is None:';
		$m.__track_lines__[345] = 're.py, line 345:\n    break';
		$m.__track_lines__[346] = 're.py, line 346:\n    span = m.span()';
		$m.__track_lines__[347] = 're.py, line 347:\n    if not m.groups():';
		$m.__track_lines__[348] = 're.py, line 348:\n    all.append(string[span[0]:span[1]])';
		$m.__track_lines__[350] = "re.py, line 350:\n    all.append(tuple([group or '' for group in m.groups()]))";
		$m.__track_lines__[351] = 're.py, line 351:\n    pos = span[1]';
		$m.__track_lines__[352] = 're.py, line 352:\n    return all';
		$m.__track_lines__[354] = 're.py, line 354:\n    return list(string[pos:].match(self.findall_code))';
		$m.__track_lines__[356] = 're.py, line 356:\n    def sub(self, repl, string, count=0):';
		$m.__track_lines__[359] = 're.py, line 359:\n    return self.subn(repl, string, count)[0]';
		$m.__track_lines__[361] = 're.py, line 361:\n    def subn(self, repl, string, count=0):';
		$m.__track_lines__[365] = "re.py, line 365:\n    res = ''";
		$m.__track_lines__[366] = 're.py, line 366:\n    n = 0';
		$m.__track_lines__[367] = 're.py, line 367:\n    subst = repl';
		$m.__track_lines__[368] = 're.py, line 368:\n    pos = 0';
		$m.__track_lines__[369] = 're.py, line 369:\n    while count >= 0:';
		$m.__track_lines__[370] = 're.py, line 370:\n    m = self.search(string, pos)';
		$m.__track_lines__[371] = 're.py, line 371:\n    if m is None:';
		$m.__track_lines__[372] = 're.py, line 372:\n    break';
		$m.__track_lines__[373] = 're.py, line 373:\n    span = m.span()';
		$m.__track_lines__[374] = 're.py, line 374:\n    if callable(repl):';
		$m.__track_lines__[375] = 're.py, line 375:\n    subst = repl(m)';
		$m.__track_lines__[376] = 're.py, line 376:\n    res += string[pos:span[0]]';
		$m.__track_lines__[377] = 're.py, line 377:\n    res += subst';
		$m.__track_lines__[378] = 're.py, line 378:\n    pos = span[1]';
		$m.__track_lines__[379] = 're.py, line 379:\n    n += 1';
		$m.__track_lines__[380] = 're.py, line 380:\n    if count:';
		$m.__track_lines__[381] = 're.py, line 381:\n    if count == 1:';
		$m.__track_lines__[382] = 're.py, line 382:\n    break';
		$m.__track_lines__[383] = 're.py, line 383:\n    count -= 1';
		$m.__track_lines__[384] = 're.py, line 384:\n    return res + string[pos:], n';
		$m.__track_lines__[386] = 're.py, line 386:\n    def split(self, string, maxsplit=0):';
		$m.__track_lines__[388] = 're.py, line 388:\n    splitted = []';
		$m.__track_lines__[389] = 're.py, line 389:\n    pos = 0';
		$m.__track_lines__[390] = 're.py, line 390:\n    while maxsplit >= 0:';
		$m.__track_lines__[391] = 're.py, line 391:\n    m = self.search(string, pos)';
		$m.__track_lines__[392] = 're.py, line 392:\n    if m is None:';
		$m.__track_lines__[393] = 're.py, line 393:\n    break';
		$m.__track_lines__[394] = 're.py, line 394:\n    span = m.span()';
		$m.__track_lines__[395] = 're.py, line 395:\n    splitted.append(string[pos:span[0]])';
		$m.__track_lines__[396] = 're.py, line 396:\n    pos = span[1]';
		$m.__track_lines__[397] = 're.py, line 397:\n    if pos < len(string):';
		$m.__track_lines__[398] = 're.py, line 398:\n    splitted.append(string[pos:])';
		$m.__track_lines__[399] = 're.py, line 399:\n    return splitted';
		$m.__track_lines__[401] = 're.py, line 401:\n    def finditer(self, string, pos=0, endpos=None):';
		$m.__track_lines__[403] = 're.py, line 403:\n    return self.findall(string, pos, endpos).__iter__()';
		$m.__track_lines__[405] = 're.py, line 405:\n    def scanner(self, string, start=0, end=None):';
		$m.__track_lines__[406] = "re.py, line 406:\n    raise NotImplementedError('scanner')";
		$m.__track_lines__[408] = 're.py, line 408:\n    def __copy__(self):';
		$m.__track_lines__[409] = 're.py, line 409:\n    raise TypeError, "cannot copy this pattern object"';
		$m.__track_lines__[411] = 're.py, line 411:\n    def __deepcopy__(self):';
		$m.__track_lines__[412] = 're.py, line 412:\n    raise TypeError, "cannot copy this pattern object"';
		var $iter1_iter,$iter1_array,$iter1_nextval,$pyjs__trackstack_size_1,$iter1_type,$iter1_idx;
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_100 = new $p['int'](100);
		$pyjs.track.module='re';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=9;
		$m['$assign1'] = $constant_int_1;
		$m['I'] = $m['$assign1'];
		$m['IGNORECASE'] = $m['$assign1'];
		$pyjs.track.lineno=10;
		$m['$assign2'] = $constant_int_2;
		$m['L'] = $m['$assign2'];
		$m['LOCALE'] = $m['$assign2'];
		$pyjs.track.lineno=11;
		$m['$assign3'] = $constant_int_4;
		$m['U'] = $m['$assign3'];
		$m['UNICODE'] = $m['$assign3'];
		$pyjs.track.lineno=12;
		$m['$assign4'] = $constant_int_8;
		$m['M'] = $m['$assign4'];
		$m['MULTILINE'] = $m['$assign4'];
		$pyjs.track.lineno=13;
		$m['$assign5'] = $constant_int_16;
		$m['S'] = $m['$assign5'];
		$m['DOTALL'] = $m['$assign5'];
		$pyjs.track.lineno=14;
		$m['$assign6'] = $constant_int_32;
		$m['X'] = $m['$assign6'];
		$m['VERBOSE'] = $m['$assign6'];
		$pyjs.track.lineno=16;
		$m['match'] = function(pattern, string, flags) {
			if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
			if (typeof flags == 'undefined') flags=arguments.callee.__args__[4][1];

			$pyjs.track={module:'re',lineno:16};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=16;
			$pyjs.track.lineno=19;
			$pyjs.track.lineno=19;
			var $pyjs__ret = $m.compile(pattern, flags)['match'](string);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['match'].__name__ = 'match';

		$m['match'].__bind_type__ = 0;
		$m['match'].__args__ = [null,null,['pattern'],['string'],['flags', $constant_int_0]];
		$pyjs.track.lineno=21;
		$m['search'] = function(pattern, string, flags) {
			if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
			if (typeof flags == 'undefined') flags=arguments.callee.__args__[4][1];

			$pyjs.track={module:'re',lineno:21};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=21;
			$pyjs.track.lineno=24;
			$pyjs.track.lineno=24;
			var $pyjs__ret = $m.compile(pattern, flags)['search'](string);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['search'].__name__ = 'search';

		$m['search'].__bind_type__ = 0;
		$m['search'].__args__ = [null,null,['pattern'],['string'],['flags', $constant_int_0]];
		$pyjs.track.lineno=26;
		$m['sub'] = function(pattern, repl, string, count) {
			if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
			if (typeof count == 'undefined') count=arguments.callee.__args__[5][1];

			$pyjs.track={module:'re',lineno:26};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=26;
			$pyjs.track.lineno=32;
			$pyjs.track.lineno=32;
			var $pyjs__ret = $m.compile(pattern, $constant_int_0)['sub'](repl, string, count);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['sub'].__name__ = 'sub';

		$m['sub'].__bind_type__ = 0;
		$m['sub'].__args__ = [null,null,['pattern'],['repl'],['string'],['count', $constant_int_0]];
		$pyjs.track.lineno=34;
		$m['subn'] = function(pattern, repl, string, count) {
			if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
			if (typeof count == 'undefined') count=arguments.callee.__args__[5][1];

			$pyjs.track={module:'re',lineno:34};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=34;
			$pyjs.track.lineno=42;
			$pyjs.track.lineno=42;
			var $pyjs__ret = $m.compile(pattern, $constant_int_0)['subn'](repl, string, count);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['subn'].__name__ = 'subn';

		$m['subn'].__bind_type__ = 0;
		$m['subn'].__args__ = [null,null,['pattern'],['repl'],['string'],['count', $constant_int_0]];
		$pyjs.track.lineno=44;
		$m['$$split'] = function(pattern, string, maxsplit) {
			if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
			if (typeof maxsplit == 'undefined') maxsplit=arguments.callee.__args__[4][1];

			$pyjs.track={module:'re',lineno:44};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=44;
			$pyjs.track.lineno=47;
			$pyjs.track.lineno=47;
			var $pyjs__ret = $m.compile(pattern, $constant_int_0)['$$split'](string, maxsplit);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['$$split'].__name__ = 'split';

		$m['$$split'].__bind_type__ = 0;
		$m['$$split'].__args__ = [null,null,['pattern'],['string'],['maxsplit', $constant_int_0]];
		$pyjs.track.lineno=49;
		$m['findall'] = function(pattern, string, flags) {
			if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
			if (typeof flags == 'undefined') flags=arguments.callee.__args__[4][1];

			$pyjs.track={module:'re',lineno:49};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=49;
			$pyjs.track.lineno=57;
			$pyjs.track.lineno=57;
			var $pyjs__ret = $m.compile(pattern, flags)['findall'](string);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['findall'].__name__ = 'findall';

		$m['findall'].__bind_type__ = 0;
		$m['findall'].__args__ = [null,null,['pattern'],['string'],['flags', $constant_int_0]];
		$pyjs.track.lineno=59;
		$m['finditer'] = function(pattern, string, flags) {
			if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
			if (typeof flags == 'undefined') flags=arguments.callee.__args__[4][1];

			$pyjs.track={module:'re',lineno:59};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=59;
			$pyjs.track.lineno=64;
			$pyjs.track.lineno=64;
			var $pyjs__ret = $m.compile(pattern, flags)['finditer'](string);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['finditer'].__name__ = 'finditer';

		$m['finditer'].__bind_type__ = 0;
		$m['finditer'].__args__ = [null,null,['pattern'],['string'],['flags', $constant_int_0]];
		$pyjs.track.lineno=66;
		$m['compile'] = function(pattern, flags) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof flags == 'undefined') flags=arguments.callee.__args__[3][1];

			$pyjs.track={module:'re',lineno:66};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=66;
			$pyjs.track.lineno=67;
			$pyjs.track.lineno=67;
			var $pyjs__ret = (typeof SRE_Pattern == "undefined"?$m.SRE_Pattern:SRE_Pattern)(pattern, flags, (typeof _compile == "undefined"?$m._compile:_compile)(pattern, flags));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['compile'].__name__ = 'compile';

		$m['compile'].__bind_type__ = 0;
		$m['compile'].__args__ = [null,null,['pattern'],['flags', $constant_int_0]];
		$pyjs.track.lineno=69;
		$m['purge'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'re',lineno:69};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=69;
			$pyjs.track.lineno=71;
			$m._cache['clear']();
			$pyjs.track.lineno=72;
			$m._cache_repl['clear']();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['purge'].__name__ = 'purge';

		$m['purge'].__bind_type__ = 0;
		$m['purge'].__args__ = [null,null];
		$pyjs.track.lineno=74;
		$m['template'] = function(pattern, flags) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof flags == 'undefined') flags=arguments.callee.__args__[3][1];

			$pyjs.track={module:'re',lineno:74};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=74;
			$pyjs.track.lineno=76;
			$pyjs.__active_exception_stack__ = null;
			throw ($p['NotImplementedError']('re.template'));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['template'].__name__ = 'template';

		$m['template'].__bind_type__ = 0;
		$m['template'].__args__ = [null,null,['pattern'],['flags', $constant_int_0]];
		$pyjs.track.lineno=79;
		$m['_alphanum'] = $p['dict']([]);
		$pyjs.track.lineno=80;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890';
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			$m['c'] = $iter1_nextval;
			$pyjs.track.lineno=81;
			$m['_alphanum'].__setitem__($m['c'], $constant_int_1);
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='re';
		$pyjs.track.lineno=82;
		delete $m['c'];
		$pyjs.track.lineno=84;
		$m['escape'] = function(pattern) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add2,c,$iter2_nextval,$iter2_type,$iter2_iter,i,$pyjs__trackstack_size_1,$iter2_idx,$bool2,s,$bool1,alphanum,$len1,$add1,$2,$iter2_array,$1;
			$pyjs.track={module:'re',lineno:84};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=84;
			$pyjs.track.lineno=86;
			s = $p['list'](pattern);
			$pyjs.track.lineno=87;
			alphanum = $m['_alphanum'];
			$pyjs.track.lineno=88;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = $p['range']((($len1=pattern) === null?$constant_int_0:
				(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
							$p['len']($len1))))));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				$pyjs.track.lineno=89;
				c = (typeof ($1=pattern).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i));
				$pyjs.track.lineno=90;
				if ((($bool1=!alphanum.__contains__(c)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=91;
					if ((($bool2=$p['op_eq'](c, '\x00')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						$pyjs.track.lineno=92;
						s.__setitem__(i, '\\000');
					}
					else {
						$pyjs.track.lineno=94;
						s.__setitem__(i, (typeof ($add1='\\')==typeof ($add2=c) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2)));
					}
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='re';
			$pyjs.track.lineno=95;
			$pyjs.track.lineno=95;
			var $pyjs__ret = $p['__getslice'](pattern, 0, $constant_int_0)['join'](s);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['escape'].__name__ = 'escape';

		$m['escape'].__bind_type__ = 0;
		$m['escape'].__args__ = [null,null,['pattern']];
		$pyjs.track.lineno=100;
		$pyjs.track.lineno=102;
		$m['__inline_flags_re__'] = new RegExp("[(][?][iLmsux]+[)]");
		$pyjs.track.lineno=104;
		$m['_cache'] = $p['dict']([]);
		$pyjs.track.lineno=105;
		$m['_cache_repl'] = $p['dict']([]);
		$pyjs.track.lineno=106;
		$m['_MAXCACHE'] = $constant_int_100;
		$pyjs.track.lineno=108;
		$m['_compile'] = function(pat, flags) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof flags == 'undefined') flags=arguments.callee.__args__[3][1];
			var $bool18,$iter5_nextval,$add12,$bool19,$bool10,$bool11,$bool12,$iter3_type,$bool14,$bool15,$bool16,$bool17,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,$add3,$iter3_nextval,$bool27,$bool25,$bool24,brack,$bool26,$bool21,$iter3_iter,$bool23,$iter5_array,$sub3,$pyjs__trackstack_size_2,$sub1,$bool28,spat,$bool20,flgs,$bool13,$iter5_idx,$cmp4,$and1,$and2,$bool22,$add6,$sub2,backslash,$bool3,$bool6,$bool7,$bool4,$iter3_array,$bool8,$bool9,$add8,$len2,c,cachekey,$cmp1,$cmp3,$cmp2,i,$iter4_nextval,$add9,m,$iter4_idx,p,$add5,$add7,$add4,$pyjs__trackstack_size_1,$iter4_array,$add10,$bool5,$sub4,$add11;
			$pyjs.track={module:'re',lineno:108};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='re';
			$pyjs.track.lineno=108;
			$pyjs.track.lineno=109;
			cachekey = $p['tuple']([pat, flags]);
			$pyjs.track.lineno=110;
			p = $m['_cache']['get'](cachekey);
			$pyjs.track.lineno=111;
			if ((($bool3=!$p['op_is'](p, null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$pyjs.track.lineno=112;
				$pyjs.track.lineno=112;
				var $pyjs__ret = p;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=114;
			flgs = '';
			$pyjs.track.lineno=115;
			while ((($bool4=true) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$pyjs.track.lineno=116;
				m = $m['__inline_flags_re__']['Exec'](pat);
				$pyjs.track.lineno=117;
				if ((($bool5=m === null) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$pyjs.track.lineno=118;
					m = null;
					$pyjs.track.lineno=119;
					break;
				}
				$pyjs.track.lineno=120;
				pat = pat['$$replace']($m['__inline_flags_re__'], '');
				$pyjs.track.lineno=121;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = $p['list'](m);
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					m = $iter3_nextval;
					$pyjs.track.lineno=122;
					if ((($bool6=m === null) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						$pyjs.track.lineno=123;
						continue;
					}
					$pyjs.track.lineno=124;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter4_iter = $p['str'](m);
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						c = $iter4_nextval;
						$pyjs.track.lineno=125;
						if ((($bool7=$p['list'](['(', '?', ')']).__contains__(c)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
							$pyjs.track.lineno=126;
						}
						else if ((($bool8=$p['op_eq'](c, 'i')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
							$pyjs.track.lineno=128;
							flags = $p['op_bitor2'](flags, $m['IGNORECASE']);
						}
						else if ((($bool9=$p['op_eq'](c, 'L')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
							$pyjs.track.lineno=130;
							flags = $p['op_bitor2'](flags, $m['LOCALE']);
						}
						else if ((($bool10=$p['op_eq'](c, 'm')) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
							$pyjs.track.lineno=132;
							flags = $p['op_bitor2'](flags, $m['MULTILINE']);
						}
						else if ((($bool11=$p['op_eq'](c, 's')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
							$pyjs.track.lineno=134;
							flags = $p['op_bitor2'](flags, $m['DOTALL']);
						}
						else if ((($bool12=$p['op_eq'](c, 'u')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
							$pyjs.track.lineno=136;
							flags = $p['op_bitor2'](flags, $m['UNICODE']);
						}
						else if ((($bool13=$p['op_eq'](c, 'x')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
							$pyjs.track.lineno=138;
							flags = $p['op_bitor2'](flags, $m['VERBOSE']);
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='re';
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='re';
			}
			$pyjs.track.lineno=140;
			if ((($bool14=flags) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				$pyjs.track.lineno=141;
				if ((($bool15=$p['op_bitand2'](flags, $m['LOCALE'])) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					$pyjs.track.lineno=142;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['NotImplementedError']('L/LOCALE flag is not implemented'));
				}
				$pyjs.track.lineno=143;
				if ((($bool16=$p['op_bitand2'](flags, $m['UNICODE'])) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					$pyjs.track.lineno=144;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['NotImplementedError']('U/UNICODE flag is not implemented'));
				}
				$pyjs.track.lineno=145;
				if ((($bool17=$p['op_bitand2'](flags, $m['VERBOSE'])) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					$pyjs.track.lineno=146;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['NotImplementedError']('X/VERBOSE flag is not implemented'));
				}
				$pyjs.track.lineno=147;
				if ((($bool18=$p['op_bitand2'](flags, $m['DOTALL'])) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					$pyjs.track.lineno=149;
					p = '';
					$pyjs.track.lineno=150;
					brack = (typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1));
					$pyjs.track.lineno=151;
					backslash = (typeof ($usub2=$constant_int_2)=='number'?
						-$usub2:
						$p['op_usub']($usub2));
					$pyjs.track.lineno=152;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter5_iter = $p['enumerate'](pat);
					if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
						$iter5_type = 0;
					} else {
						$iter5_iter = $iter5_iter.__iter__();
						$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter5_idx = 0;
					while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter5_nextval, 2, null);
						i = $tupleassign1[0];
						c = $tupleassign1[1];
						$pyjs.track.lineno=153;
						if ((($bool19=!$p['op_eq'](backslash, (typeof ($sub1=i)==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2)))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
							$pyjs.track.lineno=154;
							if ((($bool20=((($cmp1=brack)===($cmp2=$constant_int_0)?0:
								(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
									($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
									$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
								$pyjs.track.lineno=155;
								if ((($bool21=$p['op_eq'](c, '[')) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
									$pyjs.track.lineno=156;
									brack = i;
								}
								else if ((($bool22=$p['op_eq'](c, '.')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
									$pyjs.track.lineno=158;
									c = '[\\s\\S]';
								}
								else if ((($bool23=$p['op_eq'](c, '\\')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
									$pyjs.track.lineno=160;
									backslash = i;
								}
							}
							else {
								$pyjs.track.lineno=162;
								if ((($bool25=((($bool24=$and1=$p['op_eq'](c, ']')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
									false :
									(typeof $bool24=='object'?
										(typeof $bool24.__nonzero__=='function'?
											$bool24.__nonzero__() :
											(typeof $bool24.__len__=='function'?
												($bool24.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )?!$p['op_eq'](brack, (typeof ($sub3=i)==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
									$sub3-$sub4:
									$p['op_sub']($sub3,$sub4))):$and1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
									$pyjs.track.lineno=163;
									brack = (typeof ($usub3=$constant_int_1)=='number'?
										-$usub3:
										$p['op_usub']($usub3));
								}
							}
						}
						$pyjs.track.lineno=164;
						p = (typeof ($add3=p)==typeof ($add4=c) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='re';
					$pyjs.track.lineno=165;
					pat = p;
				}
				$pyjs.track.lineno=166;
				if ((($bool26=$p['op_bitand2'](flags, $m['IGNORECASE'])) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					$pyjs.track.lineno=167;
					flgs = (typeof ($add5=flgs)==typeof ($add6='i') && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				$pyjs.track.lineno=168;
				if ((($bool27=$p['op_bitand2'](flags, $m['MULTILINE'])) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					$pyjs.track.lineno=169;
					flgs = (typeof ($add7=flgs)==typeof ($add8='m') && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
			}
			$pyjs.track.lineno=170;
			spat = (typeof ($add11=(typeof ($add9='([\\s\\S]*?)(')==typeof ($add10=pat) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)))==typeof ($add12=')[\\s\\S]*') && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			$pyjs.track.lineno=171;
			p = $p['tuple']([new RegExp(pat, flgs), new RegExp(spat, flgs), new RegExp(pat, "g"+flgs)]);
			$pyjs.track.lineno=172;
			if ((($bool28=((((($cmp3=(($len2=$m['_cache']) === null?$constant_int_0:
				(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
							$p['len']($len2))))))===($cmp4=$m['_MAXCACHE'])?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				$pyjs.track.lineno=173;
				$m['_cache']['clear']();
			}
			$pyjs.track.lineno=174;
			$m['_cache'].__setitem__(cachekey, p);
			$pyjs.track.lineno=175;
			$pyjs.track.lineno=175;
			var $pyjs__ret = p;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['_compile'].__name__ = '_compile';

		$m['_compile'].__bind_type__ = 0;
		$m['_compile'].__args__ = [null,null,['pat'],['flags', $constant_int_0]];
		$pyjs.track.lineno=177;
		$m['SRE_Match'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 're';
			$cls_definition.__md5__ = 'c0cf25878c85327f552e7a9e7ea1ba26';
			$pyjs.track.lineno=178;
			$method = $pyjs__bind_method2('__init__', function(re, string, pos, endpos, groups, start, lastindex, lastgroup) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 8) $pyjs__exception_func_param(arguments.callee.__name__, 9, 9, arguments.length+1);
				} else {
					var self = arguments[0];
					re = arguments[1];
					string = arguments[2];
					pos = arguments[3];
					endpos = arguments[4];
					groups = arguments[5];
					start = arguments[6];
					lastindex = arguments[7];
					lastgroup = arguments[8];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 9) $pyjs__exception_func_param(arguments.callee.__name__, 9, 9, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add14,$add13,$4,$3,$len3;
				$pyjs.track={module:'re', lineno:178};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=178;
				$pyjs.track.lineno=179;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_groups', groups) : $p['setattr'](self, '_groups', groups); 
				$pyjs.track.lineno=180;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_start', start) : $p['setattr'](self, '_start', start); 
				$pyjs.track.lineno=181;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_end', (typeof ($add13=start)==typeof ($add14=(($len3=(typeof ($3=groups).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_0))) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3)))))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))) : $p['setattr'](self, '_end', (typeof ($add13=start)==typeof ($add14=(($len3=(typeof ($3=groups).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_0))) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3)))))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))); 
				$pyjs.track.lineno=182;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('re', re) : $p['setattr'](self, 're', re); 
				$pyjs.track.lineno=183;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('string', string) : $p['setattr'](self, 'string', string); 
				$pyjs.track.lineno=184;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', pos) : $p['setattr'](self, 'pos', pos); 
				$pyjs.track.lineno=185;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('endpos', endpos) : $p['setattr'](self, 'endpos', endpos); 
				$pyjs.track.lineno=186;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastindex', lastindex) : $p['setattr'](self, 'lastindex', lastindex); 
				$pyjs.track.lineno=187;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastgroup', lastgroup) : $p['setattr'](self, 'lastgroup', lastgroup); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['re'],['string'],['pos'],['endpos'],['groups'],['start'],['lastindex'],['lastgroup']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=189;
			$method = $pyjs__bind_method2('start', function(group) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					group = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof group == 'undefined') group=arguments.callee.__args__[3][1];
				var idx,substr,$bool30,$bool29;
				$pyjs.track={module:'re', lineno:189};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=189;
				$pyjs.track.lineno=193;
				if ((($bool29=!$p['op_eq'](group, $constant_int_0)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					$pyjs.track.lineno=194;
					substr = self['group'](group);
					$pyjs.track.lineno=195;
					if ((($bool30=substr) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
						$pyjs.track.lineno=196;
						idx = self['string']['index'](substr, $p['getattr'](self, '_start'));
						$pyjs.track.lineno=197;
						$pyjs.track.lineno=197;
						var $pyjs__ret = idx;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=198;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['NotImplementedError']('group argument not supported'));
				}
				$pyjs.track.lineno=199;
				$pyjs.track.lineno=199;
				var $pyjs__ret = $p['getattr'](self, '_start');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['group', $constant_int_0]]);
			$cls_definition['start'] = $method;
			$pyjs.track.lineno=201;
			$method = $pyjs__bind_method2('end', function(group) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					group = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof group == 'undefined') group=arguments.callee.__args__[3][1];
				var idx,$add15,$add16,$bool32,substr,$len4,$bool31;
				$pyjs.track={module:'re', lineno:201};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=201;
				$pyjs.track.lineno=205;
				if ((($bool31=!$p['op_eq'](group, $constant_int_0)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					$pyjs.track.lineno=206;
					substr = self['group'](group);
					$pyjs.track.lineno=207;
					if ((($bool32=substr) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
						$pyjs.track.lineno=208;
						idx = self['string']['index'](substr, $p['getattr'](self, '_start'));
						$pyjs.track.lineno=209;
						$pyjs.track.lineno=209;
						var $pyjs__ret = (typeof ($add15=idx)==typeof ($add16=(($len4=substr) === null?$constant_int_0:
							(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
								(typeof $len4.__len__ == 'function'?$len4.__len__():
									(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
										$p['len']($len4)))))) && (typeof $add15=='number'||typeof $add15=='string')?
							$add15+$add16:
							$p['op_add']($add15,$add16));
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=210;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['NotImplementedError']('group argument not supported'));
				}
				$pyjs.track.lineno=211;
				$pyjs.track.lineno=211;
				var $pyjs__ret = $p['getattr'](self, '_end');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['group', $constant_int_0]]);
			$cls_definition['end'] = $method;
			$pyjs.track.lineno=213;
			$method = $pyjs__bind_method2('span', function(group) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					group = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof group == 'undefined') group=arguments.callee.__args__[3][1];

				$pyjs.track={module:'re', lineno:213};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=213;
				$pyjs.track.lineno=215;
				$pyjs.track.lineno=215;
				var $pyjs__ret = $p['tuple']([self['start'](group), self['end'](group)]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['group', $constant_int_0]]);
			$cls_definition['span'] = $method;
			$pyjs.track.lineno=217;
			$method = $pyjs__bind_method2('expand', function(template) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					template = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'re', lineno:217};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=217;
				$pyjs.track.lineno=220;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']('expand'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['template']]);
			$cls_definition['expand'] = $method;
			$pyjs.track.lineno=222;
			$method = $pyjs__bind_method2('groups', function($$default) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					$$default = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$default == 'undefined') $$default=arguments.callee.__args__[3][1];
				var $$default;
				$pyjs.track={module:'re', lineno:222};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=222;
				$pyjs.track.lineno=226;
				$pyjs.track.lineno=226;
				var $pyjs__ret = $p['tuple'](function(){
					var $iter6_idx,$iter6_type,$collcomp1,$bool33,$iter6_array,$pyjs__trackstack_size_1,x,$iter6_iter,$iter6_nextval;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = $p['__getslice']($p['getattr'](self, '_groups'), $constant_int_1, null);
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					x = $iter6_nextval;
					$collcomp1['append'](((($bool33=!$p['op_is'](x, null)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33.__nonzero__=='function'?
								$bool33.__nonzero__() :
								(typeof $bool33.__len__=='function'?
									($bool33.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )? (x) : ($$default)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='re';

	return $collcomp1;}());
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['$$default', null]]);
			$cls_definition['groups'] = $method;
			$pyjs.track.lineno=228;
			$method = $pyjs__bind_method2('groupdict', function($$default) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					$$default = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$default == 'undefined') $$default=arguments.callee.__args__[3][1];
				var $$default;
				$pyjs.track={module:'re', lineno:228};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=228;
				$pyjs.track.lineno=232;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']('groupdict'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['$$default', null]]);
			$cls_definition['groupdict'] = $method;
			$pyjs.track.lineno=234;
			$method = $pyjs__bind_method2('group', function() {
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
					if (self.prototype.__md5__ !== 'c0cf25878c85327f552e7a9e7ea1ba26') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var grouplist,$iter7_array,group,$8,$iter7_nextval,$iter7_iter,$5,$len6,$len5,$bool34,$iter7_idx,$6,$7,$iter7_type,$pyjs__trackstack_size_1,$bool35;
				$pyjs.track={module:'re', lineno:234};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=234;
				$pyjs.track.lineno=237;
				if ((($bool34=$p['op_eq']((($len5=args) === null?$constant_int_0:
					(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
								$p['len']($len5))))), $constant_int_0)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					$pyjs.track.lineno=238;
					args = $p['tuple']([$constant_int_0]);
				}
				$pyjs.track.lineno=239;
				grouplist = $p['list']([]);
				$pyjs.track.lineno=240;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter7_iter = args;
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					group = $iter7_nextval;
					$pyjs.track.lineno=241;
					grouplist['append']((typeof ($5=$p['getattr'](self, '_groups')).__array != 'undefined'?
						((typeof $5.__array[$6=group]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(group)));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='re';
				$pyjs.track.lineno=242;
				if ((($bool35=$p['op_eq']((($len6=grouplist) === null?$constant_int_0:
					(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
								$p['len']($len6))))), $constant_int_1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=243;
					$pyjs.track.lineno=243;
					var $pyjs__ret = (typeof ($7=grouplist).__array != 'undefined'?
						((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__($constant_int_0));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else {
					$pyjs.track.lineno=245;
					$pyjs.track.lineno=245;
					var $pyjs__ret = $p['tuple'](grouplist);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['group'] = $method;
			$pyjs.track.lineno=247;
			$method = $pyjs__bind_method2('__copy__', function() {
				if (this.__is_instance__ === true) {
					if ($pyjs.options.arg_count && arguments.length != -1) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length+1);
				} else {
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
				}

				$pyjs.track={module:'re', lineno:247};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=247;
				$pyjs.track.lineno=248;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = 'cannot copy this pattern object';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null]);
			$cls_definition['__copy__'] = $method;
			$pyjs.track.lineno=250;
			$method = $pyjs__bind_method2('__deepcopy__', function() {
				if (this.__is_instance__ === true) {
					if ($pyjs.options.arg_count && arguments.length != -1) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length+1);
				} else {
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
				}

				$pyjs.track={module:'re', lineno:250};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=250;
				$pyjs.track.lineno=251;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = 'cannot copy this pattern object';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null]);
			$cls_definition['__deepcopy__'] = $method;
			$pyjs.track.lineno=177;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SRE_Match', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=254;
		$m['SRE_Pattern'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 're';
			$cls_definition.__md5__ = 'b7bc2e6ce6b290c91e9d2ab47d772042';
			$pyjs.track.lineno=255;
			$method = $pyjs__bind_method2('__init__', function(pat, flags, code) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					pat = arguments[1];
					flags = arguments[2];
					code = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $14,$10,$11,$12,$13,$9;
				$pyjs.track={module:'re', lineno:255};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=255;
				$pyjs.track.lineno=256;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pat', pat) : $p['setattr'](self, 'pat', pat); 
				$pyjs.track.lineno=257;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('flags', flags) : $p['setattr'](self, 'flags', flags); 
				$pyjs.track.lineno=258;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('match_code', (typeof ($9=code).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_0))) : $p['setattr'](self, 'match_code', (typeof ($9=code).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_0))); 
				$pyjs.track.lineno=259;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('search_code', (typeof ($11=code).__array != 'undefined'?
					((typeof $11.__array[$12=$constant_int_1]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($constant_int_1))) : $p['setattr'](self, 'search_code', (typeof ($11=code).__array != 'undefined'?
					((typeof $11.__array[$12=$constant_int_1]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($constant_int_1))); 
				$pyjs.track.lineno=260;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('findall_code', (typeof ($13=code).__array != 'undefined'?
					((typeof $13.__array[$14=$constant_int_2]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($constant_int_2))) : $p['setattr'](self, 'findall_code', (typeof ($13=code).__array != 'undefined'?
					((typeof $13.__array[$14=$constant_int_2]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($constant_int_2))); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['pat'],['flags'],['code']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=262;
			$method = $pyjs__bind_method2('match', function(string, pos, endpos) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					pos = arguments[2];
					endpos = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pos == 'undefined') pos=arguments.callee.__args__[4][1];
				if (typeof endpos == 'undefined') endpos=arguments.callee.__args__[5][1];
				var $iter8_iter,$bool43,$bool42,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,_groups,$bool44,$iter8_idx,$bool41,$bool40,$iter8_type,$iter8_nextval,groups,$cmp5,$cmp6,i,$iter8_array,$len7,$bool36,$bool37,$pyjs__trackstack_size_1,$bool38,$bool39,$iter9_array,$len8;
				$pyjs.track={module:'re', lineno:262};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=262;
				$pyjs.track.lineno=266;
				if ((($bool37=!(($bool36=$p['op_is'](endpos, null)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
					false :
					(typeof $bool36=='object'?
						(typeof $bool36.__nonzero__=='function'?
							$bool36.__nonzero__() :
							(typeof $bool36.__len__=='function'?
								($bool36.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					$pyjs.track.lineno=267;
					string = $p['__getslice'](string, 0, endpos);
				}
				else {
					$pyjs.track.lineno=269;
					endpos = (($len7=string) === null?$constant_int_0:
						(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
							(typeof $len7.__len__ == 'function'?$len7.__len__():
								(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
									$p['len']($len7)))));
				}
				$pyjs.track.lineno=270;
				if ((($bool38=$p['op_eq'](pos, $constant_int_0)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38.__nonzero__=='function'?
								$bool38.__nonzero__() :
								(typeof $bool38.__len__=='function'?
									($bool38.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=271;
					groups = self['match_code']['Exec'](string);
					$pyjs.track.lineno=272;
					if ((($bool39=groups === null) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
						$pyjs.track.lineno=273;
						$pyjs.track.lineno=273;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=274;
					_groups = $p['list']([]);
					$pyjs.track.lineno=275;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter8_iter = $p['list'](groups);
					if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter.__iter__();
						$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						i = $iter8_nextval;
						$pyjs.track.lineno=276;
						if ((($bool40=i === null) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
							$pyjs.track.lineno=277;
							_groups['append'](null);
						}
						else {
							$pyjs.track.lineno=279;
							_groups['append']($p['str'](i));
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='re';
					$pyjs.track.lineno=280;
					groups = _groups;
				}
				else if ((($bool41=((((($cmp5=pos)===($cmp6=(($len8=string) === null?$constant_int_0:
					(typeof $len8.__array != 'undefined' ? new $p['int']($len8.__array.length):
						(typeof $len8.__len__ == 'function'?$len8.__len__():
							(typeof $len8.length != 'undefined'? new $p['int']($len8.length):
								$p['len']($len8))))))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					$pyjs.track.lineno=282;
					$pyjs.track.lineno=282;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else {
					$pyjs.track.lineno=289;
					groups = self['match_code']['Exec']($p['__getslice'](string, pos, null));
					$pyjs.track.lineno=290;
					if ((($bool42=groups === null) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
						$pyjs.track.lineno=291;
						$pyjs.track.lineno=291;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=292;
					if ((($bool43=!$p['op_eq']($p['getattr'](groups, 'index'), $constant_int_0)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
						$pyjs.track.lineno=293;
						$pyjs.track.lineno=293;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=294;
					_groups = $p['list']([]);
					$pyjs.track.lineno=295;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter9_iter = $p['list'](groups);
					if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
						$iter9_type = 0;
					} else {
						$iter9_iter = $iter9_iter.__iter__();
						$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter9_idx = 0;
					while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
						i = $iter9_nextval;
						$pyjs.track.lineno=296;
						if ((($bool44=i === null) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
							$pyjs.track.lineno=297;
							_groups['append'](null);
						}
						else {
							$pyjs.track.lineno=299;
							_groups['append']($p['str'](i));
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='re';
					$pyjs.track.lineno=300;
					groups = _groups;
				}
				$pyjs.track.lineno=301;
				$pyjs.track.lineno=301;
				var $pyjs__ret = $m['SRE_Match'](self, string, pos, endpos, groups, pos, null, null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['string'],['pos', $constant_int_0],['endpos', null]]);
			$cls_definition['match'] = $method;
			$pyjs.track.lineno=303;
			$method = $pyjs__bind_method2('search', function(string, pos, endpos) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					pos = arguments[2];
					endpos = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pos == 'undefined') pos=arguments.callee.__args__[4][1];
				if (typeof endpos == 'undefined') endpos=arguments.callee.__args__[5][1];
				var _groups,$iter10_nextval,$bool50,$bool51,$bool52,$iter10_iter,$iter11_idx,$bool47,$bool46,$bool45,$iter11_iter,$16,$bool49,$bool48,$add17,groups,$iter11_array,$iter11_nextval,$add18,$len10,$15,$cmp7,i,$iter11_type,$cmp8,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$iter10_idx,$len9;
				$pyjs.track={module:'re', lineno:303};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=303;
				$pyjs.track.lineno=308;
				if ((($bool46=!(($bool45=$p['op_is'](endpos, null)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
					$pyjs.track.lineno=309;
					string = $p['__getslice'](string, 0, endpos);
				}
				$pyjs.track.lineno=310;
				if ((($bool47=$p['op_eq'](pos, $constant_int_0)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					$pyjs.track.lineno=311;
					groups = self['search_code']['Exec'](string);
					$pyjs.track.lineno=312;
					if ((($bool48=groups === null) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
						$pyjs.track.lineno=313;
						$pyjs.track.lineno=313;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=314;
					_groups = $p['list']([]);
					$pyjs.track.lineno=315;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter10_iter = $p['list'](groups);
					if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
						$iter10_type = 0;
					} else {
						$iter10_iter = $iter10_iter.__iter__();
						$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter10_idx = 0;
					while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
						i = $iter10_nextval;
						$pyjs.track.lineno=316;
						if ((($bool49=i === null) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
							$pyjs.track.lineno=317;
							_groups['append'](null);
						}
						else {
							$pyjs.track.lineno=319;
							_groups['append']($p['str'](i));
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='re';
					$pyjs.track.lineno=320;
					groups = _groups;
				}
				else if ((($bool50=((((($cmp7=pos)===($cmp8=(($len9=string) === null?$constant_int_0:
					(typeof $len9.__array != 'undefined' ? new $p['int']($len9.__array.length):
						(typeof $len9.__len__ == 'function'?$len9.__len__():
							(typeof $len9.length != 'undefined'? new $p['int']($len9.length):
								$p['len']($len9))))))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
					$pyjs.track.lineno=322;
					$pyjs.track.lineno=322;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else {
					$pyjs.track.lineno=325;
					groups = self['search_code']['Exec']($p['__getslice'](string, pos, null));
					$pyjs.track.lineno=326;
					if ((($bool51=groups === null) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
						$pyjs.track.lineno=327;
						$pyjs.track.lineno=327;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=328;
					_groups = $p['list']([]);
					$pyjs.track.lineno=329;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter11_iter = $p['list'](groups);
					if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
						$iter11_type = 0;
					} else {
						$iter11_iter = $iter11_iter.__iter__();
						$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter11_idx = 0;
					while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
						i = $iter11_nextval;
						$pyjs.track.lineno=330;
						if ((($bool52=i === null) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
							$pyjs.track.lineno=331;
							_groups['append'](null);
						}
						else {
							$pyjs.track.lineno=333;
							_groups['append']($p['str'](i));
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='re';
					$pyjs.track.lineno=334;
					groups = _groups;
				}
				$pyjs.track.lineno=335;
				$pyjs.track.lineno=335;
				var $pyjs__ret = $m['SRE_Match'](self, string, pos, endpos, $p['__getslice'](groups, $constant_int_2, null), (typeof ($add17=pos)==typeof ($add18=(($len10=(typeof ($15=groups).__array != 'undefined'?
					((typeof $15.__array[$16=$constant_int_1]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($constant_int_1))) === null?$constant_int_0:
					(typeof $len10.__array != 'undefined' ? new $p['int']($len10.__array.length):
						(typeof $len10.__len__ == 'function'?$len10.__len__():
							(typeof $len10.length != 'undefined'? new $p['int']($len10.length):
								$p['len']($len10)))))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18)), null, null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['string'],['pos', $constant_int_0],['endpos', null]]);
			$cls_definition['search'] = $method;
			$pyjs.track.lineno=337;
			$method = $pyjs__bind_method2('findall', function(string, pos, endpos) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					pos = arguments[2];
					endpos = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pos == 'undefined') pos=arguments.callee.__args__[4][1];
				if (typeof endpos == 'undefined') endpos=arguments.callee.__args__[5][1];
				var $bool54,$bool55,all,$bool57,span,$bool53,$21,$bool58,$22,m,$19,$17,$20,$18,$bool56;
				$pyjs.track={module:'re', lineno:337};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=337;
				$pyjs.track.lineno=339;
				if ((($bool54=!(($bool53=$p['op_is'](endpos, null)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53.__nonzero__=='function'?
							$bool53.__nonzero__() :
							(typeof $bool53.__len__=='function'?
								($bool53.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
					$pyjs.track.lineno=340;
					string = $p['__getslice'](string, 0, endpos);
				}
				$pyjs.track.lineno=341;
				all = $p['list']([]);
				$pyjs.track.lineno=342;
				while ((($bool55=true) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
					$pyjs.track.lineno=343;
					m = self['search'](string, pos);
					$pyjs.track.lineno=344;
					if ((($bool56=$p['op_is'](m, null)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
							false :
							(typeof $bool56=='object'?
								(typeof $bool56.__nonzero__=='function'?
									$bool56.__nonzero__() :
									(typeof $bool56.__len__=='function'?
										($bool56.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=345;
						break;
					}
					$pyjs.track.lineno=346;
					span = m['span']();
					$pyjs.track.lineno=347;
					if ((($bool58=!(($bool57=m['groups']()) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
						false :
						(typeof $bool57=='object'?
							(typeof $bool57.__nonzero__=='function'?
								$bool57.__nonzero__() :
								(typeof $bool57.__len__=='function'?
									($bool57.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
						$pyjs.track.lineno=348;
						all['append']($p['__getslice'](string, (typeof ($17=span).__array != 'undefined'?
							((typeof $17.__array[$18=$constant_int_0]) != 'undefined'?$17.__array[$18]:
								$17.__getitem__($18)):
								$17.__getitem__($constant_int_0)), (typeof ($19=span).__array != 'undefined'?
							((typeof $19.__array[$20=$constant_int_1]) != 'undefined'?$19.__array[$20]:
								$19.__getitem__($20)):
								$19.__getitem__($constant_int_1))));
					}
					else {
						$pyjs.track.lineno=350;
						all['append']($p['tuple'](function(){
							var group,$or2,$iter12_type,$iter12_array,$collcomp2,$bool59,$iter12_iter,$pyjs__trackstack_size_1,$or1,$iter12_idx,$iter12_nextval;
	$collcomp2 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs.trackstack.length;
						$iter12_iter = m['groups']();
						if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
							$iter12_type = 0;
						} else {
							$iter12_iter = $iter12_iter.__iter__();
							$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
						}
						$iter12_idx = 0;
						while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
							group = $iter12_nextval;
							$collcomp2['append'](((($bool59=$or1=group) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
								false :
								(typeof $bool59=='object'?
									(typeof $bool59.__nonzero__=='function'?
										$bool59.__nonzero__() :
										(typeof $bool59.__len__=='function'?
											($bool59.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?$or1:''));
						}
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='re';

	return $collcomp2;}()));
					}
					$pyjs.track.lineno=351;
					pos = (typeof ($21=span).__array != 'undefined'?
						((typeof $21.__array[$22=$constant_int_1]) != 'undefined'?$21.__array[$22]:
							$21.__getitem__($22)):
							$21.__getitem__($constant_int_1));
				}
				$pyjs.track.lineno=352;
				$pyjs.track.lineno=352;
				var $pyjs__ret = all;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
				$pyjs.track.lineno=354;
				$pyjs.track.lineno=354;
				var $pyjs__ret = $p['list']($p['__getslice'](string, pos, null)['match']($p['getattr'](self, 'findall_code')));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['string'],['pos', $constant_int_0],['endpos', null]]);
			$cls_definition['findall'] = $method;
			$pyjs.track.lineno=356;
			$method = $pyjs__bind_method2('sub', function(repl, string, count) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					repl = arguments[1];
					string = arguments[2];
					count = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof count == 'undefined') count=arguments.callee.__args__[5][1];
				var $24,$23;
				$pyjs.track={module:'re', lineno:356};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=356;
				$pyjs.track.lineno=359;
				$pyjs.track.lineno=359;
				var $pyjs__ret = (typeof ($23=self['subn'](repl, string, count)).__array != 'undefined'?
					((typeof $23.__array[$24=$constant_int_0]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($constant_int_0));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['repl'],['string'],['count', $constant_int_0]]);
			$cls_definition['sub'] = $method;
			$pyjs.track.lineno=361;
			$method = $pyjs__bind_method2('subn', function(repl, string, count) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					repl = arguments[1];
					string = arguments[2];
					count = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof count == 'undefined') count=arguments.callee.__args__[5][1];
				var m,pos,$add26,$bool64,$28,span,$add21,res,$add22,$25,$add24,$27,$26,subst,$sub6,$sub5,$bool61,$bool60,$bool63,$bool62,$cmp10,$add25,$add19,$cmp9,n,$add20,$add23;
				$pyjs.track={module:'re', lineno:361};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=361;
				$pyjs.track.lineno=365;
				res = '';
				$pyjs.track.lineno=366;
				n = $constant_int_0;
				$pyjs.track.lineno=367;
				subst = repl;
				$pyjs.track.lineno=368;
				pos = $constant_int_0;
				$pyjs.track.lineno=369;
				while ((($bool60=((((($cmp9=count)===($cmp10=$constant_int_0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))))|1) == 1)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
					$pyjs.track.lineno=370;
					m = self['search'](string, pos);
					$pyjs.track.lineno=371;
					if ((($bool61=$p['op_is'](m, null)) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
							false :
							(typeof $bool61=='object'?
								(typeof $bool61.__nonzero__=='function'?
									$bool61.__nonzero__() :
									(typeof $bool61.__len__=='function'?
										($bool61.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=372;
						break;
					}
					$pyjs.track.lineno=373;
					span = m['span']();
					$pyjs.track.lineno=374;
					if ((($bool62=$p['callable'](repl)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
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
						$pyjs.track.lineno=375;
						subst = repl(m);
					}
					$pyjs.track.lineno=376;
					res = (typeof ($add19=res)==typeof ($add20=$p['__getslice'](string, pos, (typeof ($25=span).__array != 'undefined'?
						((typeof $25.__array[$26=$constant_int_0]) != 'undefined'?$25.__array[$26]:
							$25.__getitem__($26)):
							$25.__getitem__($constant_int_0)))) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20));
					$pyjs.track.lineno=377;
					res = (typeof ($add21=res)==typeof ($add22=subst) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22));
					$pyjs.track.lineno=378;
					pos = (typeof ($27=span).__array != 'undefined'?
						((typeof $27.__array[$28=$constant_int_1]) != 'undefined'?$27.__array[$28]:
							$27.__getitem__($28)):
							$27.__getitem__($constant_int_1));
					$pyjs.track.lineno=379;
					n = (typeof ($add23=n)==typeof ($add24=$constant_int_1) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
					$pyjs.track.lineno=380;
					if ((($bool63=count) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
							false :
							(typeof $bool63=='object'?
								(typeof $bool63.__nonzero__=='function'?
									$bool63.__nonzero__() :
									(typeof $bool63.__len__=='function'?
										($bool63.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=381;
						if ((($bool64=$p['op_eq'](count, $constant_int_1)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
								false :
								(typeof $bool64=='object'?
									(typeof $bool64.__nonzero__=='function'?
										$bool64.__nonzero__() :
										(typeof $bool64.__len__=='function'?
											($bool64.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=382;
							break;
						}
						$pyjs.track.lineno=383;
						count = (typeof ($sub5=count)==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
							$sub5-$sub6:
							$p['op_sub']($sub5,$sub6));
					}
				}
				$pyjs.track.lineno=384;
				$pyjs.track.lineno=384;
				var $pyjs__ret = $p['tuple']([(typeof ($add25=res)==typeof ($add26=$p['__getslice'](string, pos, null)) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)), n]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['repl'],['string'],['count', $constant_int_0]]);
			$cls_definition['subn'] = $method;
			$pyjs.track.lineno=386;
			$method = $pyjs__bind_method2('$$split', function(string, maxsplit) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					maxsplit = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof maxsplit == 'undefined') maxsplit=arguments.callee.__args__[4][1];
				var $29,$len11,$bool65,$bool67,$bool66,$32,$cmp12,m,pos,$30,$31,$cmp14,$cmp11,$cmp13,splitted,span;
				$pyjs.track={module:'re', lineno:386};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=386;
				$pyjs.track.lineno=388;
				splitted = $p['list']([]);
				$pyjs.track.lineno=389;
				pos = $constant_int_0;
				$pyjs.track.lineno=390;
				while ((($bool65=((((($cmp11=maxsplit)===($cmp12=$constant_int_0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
						false :
						(typeof $bool65=='object'?
							(typeof $bool65.__nonzero__=='function'?
								$bool65.__nonzero__() :
								(typeof $bool65.__len__=='function'?
									($bool65.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=391;
					m = self['search'](string, pos);
					$pyjs.track.lineno=392;
					if ((($bool66=$p['op_is'](m, null)) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
						$pyjs.track.lineno=393;
						break;
					}
					$pyjs.track.lineno=394;
					span = m['span']();
					$pyjs.track.lineno=395;
					splitted['append']($p['__getslice'](string, pos, (typeof ($29=span).__array != 'undefined'?
						((typeof $29.__array[$30=$constant_int_0]) != 'undefined'?$29.__array[$30]:
							$29.__getitem__($30)):
							$29.__getitem__($constant_int_0))));
					$pyjs.track.lineno=396;
					pos = (typeof ($31=span).__array != 'undefined'?
						((typeof $31.__array[$32=$constant_int_1]) != 'undefined'?$31.__array[$32]:
							$31.__getitem__($32)):
							$31.__getitem__($constant_int_1));
				}
				$pyjs.track.lineno=397;
				if ((($bool67=((($cmp13=pos)===($cmp14=(($len11=string) === null?$constant_int_0:
					(typeof $len11.__array != 'undefined' ? new $p['int']($len11.__array.length):
						(typeof $len11.__len__ == 'function'?$len11.__len__():
							(typeof $len11.length != 'undefined'? new $p['int']($len11.length):
								$p['len']($len11))))))?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
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
					$pyjs.track.lineno=398;
					splitted['append']($p['__getslice'](string, pos, null));
				}
				$pyjs.track.lineno=399;
				$pyjs.track.lineno=399;
				var $pyjs__ret = splitted;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['string'],['maxsplit', $constant_int_0]]);
			$cls_definition['$$split'] = $method;
			$pyjs.track.lineno=401;
			$method = $pyjs__bind_method2('finditer', function(string, pos, endpos) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					pos = arguments[2];
					endpos = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof pos == 'undefined') pos=arguments.callee.__args__[4][1];
				if (typeof endpos == 'undefined') endpos=arguments.callee.__args__[5][1];

				$pyjs.track={module:'re', lineno:401};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=401;
				$pyjs.track.lineno=403;
				$pyjs.track.lineno=403;
				var $pyjs__ret = self['findall'](string, pos, endpos)['__iter__']();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['string'],['pos', $constant_int_0],['endpos', null]]);
			$cls_definition['finditer'] = $method;
			$pyjs.track.lineno=405;
			$method = $pyjs__bind_method2('scanner', function(string, start, end) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					string = arguments[1];
					start = arguments[2];
					end = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof start == 'undefined') start=arguments.callee.__args__[4][1];
				if (typeof end == 'undefined') end=arguments.callee.__args__[5][1];

				$pyjs.track={module:'re', lineno:405};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=405;
				$pyjs.track.lineno=406;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']('scanner'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['string'],['start', $constant_int_0],['end', null]]);
			$cls_definition['scanner'] = $method;
			$pyjs.track.lineno=408;
			$method = $pyjs__bind_method2('__copy__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'re', lineno:408};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=408;
				$pyjs.track.lineno=409;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = 'cannot copy this pattern object';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__copy__'] = $method;
			$pyjs.track.lineno=411;
			$method = $pyjs__bind_method2('__deepcopy__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b7bc2e6ce6b290c91e9d2ab47d772042') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'re', lineno:411};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='re';
				$pyjs.track.lineno=411;
				$pyjs.track.lineno=412;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = 'cannot copy this pattern object';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__deepcopy__'] = $method;
			$pyjs.track.lineno=254;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('SRE_Pattern', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end re */


/* end module: re */


