/* start module: binascii */
$pyjs.loaded_modules['binascii'] = function (__mod_name__) {
	if($pyjs.loaded_modules['binascii'].__was_initialized__) return $pyjs.loaded_modules['binascii'];
	var $m = $pyjs.loaded_modules["binascii"];
	$m.__repr__ = function() { return "<module: binascii>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'binascii';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'binascii.py, line 1:\n    # binascii.py from the pypy project';
		$m.__track_lines__[5] = 'binascii.py, line 5:\n    class Error(Exception):';
		$m.__track_lines__[6] = 'binascii.py, line 6:\n    pass';
		$m.__track_lines__[8] = 'binascii.py, line 8:\n    class Done(Exception):';
		$m.__track_lines__[9] = 'binascii.py, line 9:\n    pass';
		$m.__track_lines__[11] = 'binascii.py, line 11:\n    class Incomplete(Exception):';
		$m.__track_lines__[12] = 'binascii.py, line 12:\n    pass';
		$m.__track_lines__[14] = 'binascii.py, line 14:\n    def a2b_uu(s):';
		$m.__track_lines__[15] = 'binascii.py, line 15:\n    if not s:';
		$m.__track_lines__[16] = "binascii.py, line 16:\n    return ''";
		$m.__track_lines__[18] = 'binascii.py, line 18:\n    length = (ord(s[0]) - 0x20) % 64';
		$m.__track_lines__[20] = 'binascii.py, line 20:\n    def quadruplets_gen(s):';
		$m.__track_lines__[29] = 'binascii.py, line 29:\n    iterlist = []';
		$m.__track_lines__[30] = 'binascii.py, line 30:\n    while s:';
		$m.__track_lines__[31] = 'binascii.py, line 31:\n    try:';
		$m.__track_lines__[32] = 'binascii.py, line 32:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2]), ord(s[3])))';
		$m.__track_lines__[34] = "binascii.py, line 34:\n    s += '   '";
		$m.__track_lines__[35] = 'binascii.py, line 35:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2]), ord(s[3])))';
		$m.__track_lines__[36] = 'binascii.py, line 36:\n    return iterlist';
		$m.__track_lines__[37] = 'binascii.py, line 37:\n    s = s[4:]';
		$m.__track_lines__[38] = 'binascii.py, line 38:\n    return iterlist';
		$m.__track_lines__[40] = 'binascii.py, line 40:\n    try:';
		$m.__track_lines__[41] = "binascii.py, line 41:\n    result = [''.join(";
		$m.__track_lines__[47] = "binascii.py, line 47:\n    raise Error('Illegal char')";
		$m.__track_lines__[48] = "binascii.py, line 48:\n    result = ''.join(result)";
		$m.__track_lines__[49] = 'binascii.py, line 49:\n    trailingdata = result[length:]';
		$m.__track_lines__[50] = "binascii.py, line 50:\n    if trailingdata.strip('\\x00'):";
		$m.__track_lines__[51] = "binascii.py, line 51:\n    raise Error('Trailing garbage')";
		$m.__track_lines__[52] = 'binascii.py, line 52:\n    result = result[:length]';
		$m.__track_lines__[53] = 'binascii.py, line 53:\n    if len(result) < length:';
		$m.__track_lines__[54] = "binascii.py, line 54:\n    result += ((length - len(result)) * '\\x00')";
		$m.__track_lines__[55] = 'binascii.py, line 55:\n    return result';
		$m.__track_lines__[58] = 'binascii.py, line 58:\n    def b2a_uu(s):';
		$m.__track_lines__[59] = 'binascii.py, line 59:\n    length = len(s)';
		$m.__track_lines__[60] = 'binascii.py, line 60:\n    if length > 45:';
		$m.__track_lines__[61] = "binascii.py, line 61:\n    raise Error('At most 45 bytes at once')";
		$m.__track_lines__[63] = 'binascii.py, line 63:\n    def triples_gen(s):';
		$m.__track_lines__[72] = 'binascii.py, line 72:\n    iterlist = []';
		$m.__track_lines__[73] = 'binascii.py, line 73:\n    while s:';
		$m.__track_lines__[74] = 'binascii.py, line 74:\n    try:';
		$m.__track_lines__[75] = 'binascii.py, line 75:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2])))';
		$m.__track_lines__[77] = "binascii.py, line 77:\n    s += '\\0\\0'";
		$m.__track_lines__[78] = 'binascii.py, line 78:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2])))';
		$m.__track_lines__[79] = 'binascii.py, line 79:\n    return iterlist';
		$m.__track_lines__[80] = 'binascii.py, line 80:\n    s = s[3:]';
		$m.__track_lines__[81] = 'binascii.py, line 81:\n    return iterlist';
		$m.__track_lines__[83] = "binascii.py, line 83:\n    result = [''.join(";
		$m.__track_lines__[89] = "binascii.py, line 89:\n    return chr(ord(' ') + (length & 077)) + ''.join(result) + '\\n'";
		$m.__track_lines__[92] = 'binascii.py, line 92:\n    table_a2b_base64 = {';
		$m.__track_lines__[161] = 'binascii.py, line 161:\n    def a2b_base64(s):';
		$m.__track_lines__[162] = 'binascii.py, line 162:\n    if (    not isinstance(s, str)';
		$m.__track_lines__[165] = 'binascii.py, line 165:\n    raise TypeError("expected string or unicode, got %r" % (s,))';
		$m.__track_lines__[166] = 'binascii.py, line 166:\n    s = s.rstrip()';
		$m.__track_lines__[170] = 'binascii.py, line 170:\n    def next_valid_char(s, pos):';
		$m.__track_lines__[171] = 'binascii.py, line 171:\n    for i in range(pos + 1, len(s)):';
		$m.__track_lines__[172] = 'binascii.py, line 172:\n    c = s[i]';
		$m.__track_lines__[173] = "binascii.py, line 173:\n    if c < '\\x7f':";
		$m.__track_lines__[179] = 'binascii.py, line 179:\n    if table_a2b_base64.has_key(c):';
		$m.__track_lines__[180] = 'binascii.py, line 180:\n    return c';
		$m.__track_lines__[181] = 'binascii.py, line 181:\n    return None';
		$m.__track_lines__[183] = 'binascii.py, line 183:\n    quad_pos = 0';
		$m.__track_lines__[184] = 'binascii.py, line 184:\n    leftbits = 0';
		$m.__track_lines__[185] = 'binascii.py, line 185:\n    leftchar = 0';
		$m.__track_lines__[186] = 'binascii.py, line 186:\n    res = []';
		$m.__track_lines__[187] = 'binascii.py, line 187:\n    for i, c in enumerate(s):';
		$m.__track_lines__[188] = "binascii.py, line 188:\n    if c > '\\x7f' or c == '\\n' or c == '\\r' or c == ' ':";
		$m.__track_lines__[189] = 'binascii.py, line 189:\n    continue';
		$m.__track_lines__[190] = "binascii.py, line 190:\n    if c == '=':";
		$m.__track_lines__[191] = "binascii.py, line 191:\n    if quad_pos < 2 or (quad_pos == 2 and next_valid_char(s, i) != '='):";
		$m.__track_lines__[192] = 'binascii.py, line 192:\n    continue';
		$m.__track_lines__[194] = 'binascii.py, line 194:\n    leftbits = 0';
		$m.__track_lines__[195] = 'binascii.py, line 195:\n    break';
		$m.__track_lines__[196] = 'binascii.py, line 196:\n    if not table_a2b_base64.has_key(c):';
		$m.__track_lines__[197] = 'binascii.py, line 197:\n    continue';
		$m.__track_lines__[198] = 'binascii.py, line 198:\n    next_c = table_a2b_base64[c]';
		$m.__track_lines__[199] = 'binascii.py, line 199:\n    quad_pos = (quad_pos + 1) & 0x03';
		$m.__track_lines__[200] = 'binascii.py, line 200:\n    leftchar = (leftchar << 6) | next_c';
		$m.__track_lines__[201] = 'binascii.py, line 201:\n    leftbits += 6';
		$m.__track_lines__[202] = 'binascii.py, line 202:\n    if leftbits >= 8:';
		$m.__track_lines__[203] = 'binascii.py, line 203:\n    leftbits -= 8';
		$m.__track_lines__[204] = 'binascii.py, line 204:\n    res.append((leftchar >> leftbits & 0xff))';
		$m.__track_lines__[205] = 'binascii.py, line 205:\n    leftchar &= ((1 << leftbits) - 1)';
		$m.__track_lines__[206] = 'binascii.py, line 206:\n    if leftbits != 0:';
		$m.__track_lines__[207] = "binascii.py, line 207:\n    raise Error('Incorrect padding')";
		$m.__track_lines__[209] = "binascii.py, line 209:\n    return ''.join([chr(i) for i in res])";
		$m.__track_lines__[211] = 'binascii.py, line 211:\n    table_b2a_base64 = \\';
		$m.__track_lines__[214] = 'binascii.py, line 214:\n    def b2a_base64(s):';
		$m.__track_lines__[215] = 'binascii.py, line 215:\n    length = len(s)';
		$m.__track_lines__[216] = 'binascii.py, line 216:\n    final_length = length % 3';
		$m.__track_lines__[218] = 'binascii.py, line 218:\n    def triples_gen(s):';
		$m.__track_lines__[227] = 'binascii.py, line 227:\n    iterlist = []';
		$m.__track_lines__[228] = 'binascii.py, line 228:\n    while s:';
		$m.__track_lines__[229] = 'binascii.py, line 229:\n    try:';
		$m.__track_lines__[230] = 'binascii.py, line 230:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2])))';
		$m.__track_lines__[232] = "binascii.py, line 232:\n    s += '\\0\\0'";
		$m.__track_lines__[233] = 'binascii.py, line 233:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2])))';
		$m.__track_lines__[234] = 'binascii.py, line 234:\n    return iterlist';
		$m.__track_lines__[235] = 'binascii.py, line 235:\n    s = s[3:]';
		$m.__track_lines__[236] = 'binascii.py, line 236:\n    return iterlist';
		$m.__track_lines__[238] = 'binascii.py, line 238:\n    a = triples_gen(s[ :length - final_length])';
		$m.__track_lines__[240] = "binascii.py, line 240:\n    result = [''.join(";
		$m.__track_lines__[247] = 'binascii.py, line 247:\n    final = s[length - final_length:]';
		$m.__track_lines__[248] = 'binascii.py, line 248:\n    if final_length == 0:';
		$m.__track_lines__[249] = "binascii.py, line 249:\n    snippet = ''";
		$m.__track_lines__[251] = 'binascii.py, line 251:\n    a = ord(final[0])';
		$m.__track_lines__[252] = 'binascii.py, line 252:\n    snippet = table_b2a_base64[(a >> 2 ) & 0x3F] + \\';
		$m.__track_lines__[255] = 'binascii.py, line 255:\n    a = ord(final[0])';
		$m.__track_lines__[256] = 'binascii.py, line 256:\n    b = ord(final[1])';
		$m.__track_lines__[257] = 'binascii.py, line 257:\n    snippet = table_b2a_base64[(a >> 2) & 0x3F] + \\';
		$m.__track_lines__[260] = "binascii.py, line 260:\n    return ''.join(result) + snippet + '\\n'";
		$m.__track_lines__[262] = 'binascii.py, line 262:\n    def a2b_qp(s, header=False):';
		$m.__track_lines__[263] = 'binascii.py, line 263:\n    inp = 0';
		$m.__track_lines__[264] = 'binascii.py, line 264:\n    odata = []';
		$m.__track_lines__[265] = 'binascii.py, line 265:\n    while inp < len(s):';
		$m.__track_lines__[266] = "binascii.py, line 266:\n    if s[inp] == '=':";
		$m.__track_lines__[267] = 'binascii.py, line 267:\n    inp += 1';
		$m.__track_lines__[268] = 'binascii.py, line 268:\n    if inp >= len(s):';
		$m.__track_lines__[269] = 'binascii.py, line 269:\n    break';
		$m.__track_lines__[271] = "binascii.py, line 271:\n    if (s[inp] == '\\n') or (s[inp] == '\\r'):";
		$m.__track_lines__[272] = "binascii.py, line 272:\n    if s[inp] != '\\n':";
		$m.__track_lines__[273] = "binascii.py, line 273:\n    while inp < len(s) and s[inp] != '\\n':";
		$m.__track_lines__[274] = 'binascii.py, line 274:\n    inp += 1';
		$m.__track_lines__[275] = 'binascii.py, line 275:\n    if inp < len(s):';
		$m.__track_lines__[276] = 'binascii.py, line 276:\n    inp += 1';
		$m.__track_lines__[279] = "binascii.py, line 279:\n    odata.append('=')";
		$m.__track_lines__[280] = 'binascii.py, line 280:\n    inp += 1';
		$m.__track_lines__[282] = 'binascii.py, line 282:\n    ch = chr(int(s[inp:inp+2], 16))';
		$m.__track_lines__[283] = 'binascii.py, line 283:\n    inp += 2';
		$m.__track_lines__[284] = 'binascii.py, line 284:\n    odata.append(ch)';
		$m.__track_lines__[286] = "binascii.py, line 286:\n    odata.append('=')";
		$m.__track_lines__[288] = "binascii.py, line 288:\n    odata.append(' ')";
		$m.__track_lines__[289] = 'binascii.py, line 289:\n    inp += 1';
		$m.__track_lines__[291] = 'binascii.py, line 291:\n    odata.append(s[inp])';
		$m.__track_lines__[292] = 'binascii.py, line 292:\n    inp += 1';
		$m.__track_lines__[293] = "binascii.py, line 293:\n    return ''.join(odata)";
		$m.__track_lines__[295] = 'binascii.py, line 295:\n    def b2a_qp(data, quotetabs=False, istext=True, header=False):';
		$m.__track_lines__[302] = 'binascii.py, line 302:\n    MAXLINESIZE = 76';
		$m.__track_lines__[305] = "binascii.py, line 305:\n    lf = data.find('\\n')";
		$m.__track_lines__[306] = "binascii.py, line 306:\n    crlf = lf > 0 and data[lf-1] == '\\r'";
		$m.__track_lines__[308] = 'binascii.py, line 308:\n    inp = 0';
		$m.__track_lines__[309] = 'binascii.py, line 309:\n    linelen = 0';
		$m.__track_lines__[310] = 'binascii.py, line 310:\n    odata = []';
		$m.__track_lines__[311] = 'binascii.py, line 311:\n    while inp < len(data):';
		$m.__track_lines__[312] = 'binascii.py, line 312:\n    c = data[inp]';
		$m.__track_lines__[313] = "binascii.py, line 313:\n    if (c > '~' or";
		$m.__track_lines__[323] = 'binascii.py, line 323:\n    linelen += 3';
		$m.__track_lines__[324] = 'binascii.py, line 324:\n    if linelen >= MAXLINESIZE:';
		$m.__track_lines__[325] = "binascii.py, line 325:\n    odata.append('=')";
		$m.__track_lines__[326] = "binascii.py, line 326:\n    if crlf: odata.append('\\r')";
		$m.__track_lines__[327] = "binascii.py, line 327:\n    odata.append('\\n')";
		$m.__track_lines__[328] = 'binascii.py, line 328:\n    linelen = 3';
		$m.__track_lines__[329] = "binascii.py, line 329:\n    odata.append('=' + two_hex_digits(ord(c)))";
		$m.__track_lines__[330] = 'binascii.py, line 330:\n    inp += 1';
		$m.__track_lines__[332] = 'binascii.py, line 332:\n    if (istext and';
		$m.__track_lines__[335] = 'binascii.py, line 335:\n    linelen = 0';
		$m.__track_lines__[337] = 'binascii.py, line 337:\n    if (len(odata) > 0 and';
		$m.__track_lines__[339] = 'binascii.py, line 339:\n    ch = ord(odata[-1])';
		$m.__track_lines__[340] = "binascii.py, line 340:\n    odata[-1] = '='";
		$m.__track_lines__[341] = 'binascii.py, line 341:\n    odata.append(two_hex_digits(ch))';
		$m.__track_lines__[343] = "binascii.py, line 343:\n    if crlf: odata.append('\\r')";
		$m.__track_lines__[344] = "binascii.py, line 344:\n    odata.append('\\n')";
		$m.__track_lines__[345] = "binascii.py, line 345:\n    if c == '\\r':";
		$m.__track_lines__[346] = 'binascii.py, line 346:\n    inp += 2';
		$m.__track_lines__[348] = 'binascii.py, line 348:\n    inp += 1';
		$m.__track_lines__[350] = 'binascii.py, line 350:\n    if (inp + 1 < len(data) and';
		$m.__track_lines__[353] = "binascii.py, line 353:\n    odata.append('=')";
		$m.__track_lines__[354] = "binascii.py, line 354:\n    if crlf: odata.append('\\r')";
		$m.__track_lines__[355] = "binascii.py, line 355:\n    odata.append('\\n')";
		$m.__track_lines__[356] = 'binascii.py, line 356:\n    linelen = 0';
		$m.__track_lines__[358] = 'binascii.py, line 358:\n    linelen += 1';
		$m.__track_lines__[359] = "binascii.py, line 359:\n    if header and c == ' ':";
		$m.__track_lines__[360] = "binascii.py, line 360:\n    c = '_'";
		$m.__track_lines__[361] = 'binascii.py, line 361:\n    odata.append(c)';
		$m.__track_lines__[362] = 'binascii.py, line 362:\n    inp += 1';
		$m.__track_lines__[363] = "binascii.py, line 363:\n    return ''.join(odata)";
		$m.__track_lines__[365] = "binascii.py, line 365:\n    hex_numbers = '0123456789ABCDEF'";
		$m.__track_lines__[366] = 'binascii.py, line 366:\n    def hex(n):';
		$m.__track_lines__[367] = 'binascii.py, line 367:\n    if n == 0:';
		$m.__track_lines__[368] = "binascii.py, line 368:\n    return '0'";
		$m.__track_lines__[370] = 'binascii.py, line 370:\n    if n < 0:';
		$m.__track_lines__[371] = 'binascii.py, line 371:\n    n = -n';
		$m.__track_lines__[372] = "binascii.py, line 372:\n    sign = '-'";
		$m.__track_lines__[374] = "binascii.py, line 374:\n    sign = ''";
		$m.__track_lines__[375] = 'binascii.py, line 375:\n    arr = []';
		$m.__track_lines__[377] = 'binascii.py, line 377:\n    def hex_gen(n):';
		$m.__track_lines__[382] = 'binascii.py, line 382:\n    iterlist = []';
		$m.__track_lines__[383] = 'binascii.py, line 383:\n    while n:';
		$m.__track_lines__[384] = 'binascii.py, line 384:\n    iterlist.append(n % 0x10)';
		$m.__track_lines__[385] = 'binascii.py, line 385:\n    n = n / 0x10';
		$m.__track_lines__[386] = 'binascii.py, line 386:\n    return iterlist';
		$m.__track_lines__[388] = 'binascii.py, line 388:\n    for nibble in hex_gen(n):';
		$m.__track_lines__[389] = 'binascii.py, line 389:\n    arr = [hex_numbers[nibble]] + arr';
		$m.__track_lines__[390] = "binascii.py, line 390:\n    return sign + ''.join(arr)";
		$m.__track_lines__[392] = 'binascii.py, line 392:\n    def two_hex_digits(n):';
		$m.__track_lines__[393] = 'binascii.py, line 393:\n    return hex_numbers[n / 0x10] + hex_numbers[n % 0x10]';
		$m.__track_lines__[396] = 'binascii.py, line 396:\n    def strhex_to_int(s):';
		$m.__track_lines__[397] = 'binascii.py, line 397:\n    i = 0';
		$m.__track_lines__[398] = 'binascii.py, line 398:\n    for c in s:';
		$m.__track_lines__[399] = 'binascii.py, line 399:\n    i = i * 0x10 + hex_numbers.index(c)';
		$m.__track_lines__[400] = 'binascii.py, line 400:\n    return i';
		$m.__track_lines__[402] = 'binascii.py, line 402:\n    hqx_encoding = \'!"#$%&\\\'()*+,-012345689@ABCDEFGHIJKLMNPQRSTUVXYZ[`abcdefhijklmpqr\'';
		$m.__track_lines__[404] = 'binascii.py, line 404:\n    DONE = 0x7f';
		$m.__track_lines__[405] = 'binascii.py, line 405:\n    SKIP = 0x7e';
		$m.__track_lines__[406] = 'binascii.py, line 406:\n    FAIL = 0x7d';
		$m.__track_lines__[408] = 'binascii.py, line 408:\n    table_a2b_hqx = [';
		$m.__track_lines__[459] = 'binascii.py, line 459:\n    def a2b_hqx(s):';
		$m.__track_lines__[460] = 'binascii.py, line 460:\n    result = []';
		$m.__track_lines__[462] = 'binascii.py, line 462:\n    def quadruples_gen(s):';
		$m.__track_lines__[463] = 'binascii.py, line 463:\n    t = []';
		$m.__track_lines__[479] = 'binascii.py, line 479:\n    iterlist = []';
		$m.__track_lines__[480] = 'binascii.py, line 480:\n    for c in s:';
		$m.__track_lines__[481] = 'binascii.py, line 481:\n    res = table_a2b_hqx[ord(c)]';
		$m.__track_lines__[482] = 'binascii.py, line 482:\n    if res == SKIP:';
		$m.__track_lines__[483] = 'binascii.py, line 483:\n    continue';
		$m.__track_lines__[485] = "binascii.py, line 485:\n    raise Error('Illegal character')";
		$m.__track_lines__[487] = 'binascii.py, line 487:\n    iterlist.append(t)';
		$m.__track_lines__[488] = 'binascii.py, line 488:\n    return iterlist, True';
		$m.__track_lines__[490] = 'binascii.py, line 490:\n    t.append(res)';
		$m.__track_lines__[491] = 'binascii.py, line 491:\n    if len(t) == 4:';
		$m.__track_lines__[492] = 'binascii.py, line 492:\n    iterlist.append(t)';
		$m.__track_lines__[493] = 'binascii.py, line 493:\n    t = []';
		$m.__track_lines__[494] = 'binascii.py, line 494:\n    iterlist.append(t)';
		$m.__track_lines__[495] = 'binascii.py, line 495:\n    return iterlist, False';
		$m.__track_lines__[497] = 'binascii.py, line 497:\n    done = 0';
		$m.__track_lines__[498] = 'binascii.py, line 498:\n    try:';
		$m.__track_lines__[500] = 'binascii.py, line 500:\n    iterlist, done = quadruples_gen(s)';
		$m.__track_lines__[501] = 'binascii.py, line 501:\n    for snippet in iterlist:';
		$m.__track_lines__[502] = 'binascii.py, line 502:\n    length = len(snippet)';
		$m.__track_lines__[503] = 'binascii.py, line 503:\n    if length == 4:';
		$m.__track_lines__[504] = 'binascii.py, line 504:\n    result.append(chr(((snippet[0] & 0x3f) << 2) | (snippet[1] >> 4)))';
		$m.__track_lines__[505] = 'binascii.py, line 505:\n    result.append(chr(((snippet[1] & 0x0f) << 4) | (snippet[2] >> 2)))';
		$m.__track_lines__[506] = 'binascii.py, line 506:\n    result.append(chr(((snippet[2] & 0x03) << 6) | (snippet[3])))';
		$m.__track_lines__[508] = 'binascii.py, line 508:\n    result.append(chr(((snippet[0] & 0x3f) << 2) | (snippet[1] >> 4)))';
		$m.__track_lines__[509] = 'binascii.py, line 509:\n    result.append(chr(((snippet[1] & 0x0f) << 4) | (snippet[2] >> 2)))';
		$m.__track_lines__[511] = 'binascii.py, line 511:\n    result.append(chr(((snippet[0] & 0x3f) << 2) | (snippet[1] >> 4)))';
		$m.__track_lines__[513] = 'binascii.py, line 513:\n    done = 1';
		$m.__track_lines__[515] = 'binascii.py, line 515:\n    raise';
		$m.__track_lines__[516] = "binascii.py, line 516:\n    return (''.join(result), done)";
		$m.__track_lines__[518] = 'binascii.py, line 518:\n    def b2a_hqx(s):';
		$m.__track_lines__[519] = 'binascii.py, line 519:\n    result =[]';
		$m.__track_lines__[521] = 'binascii.py, line 521:\n    def triples_gen(s):';
		$m.__track_lines__[528] = 'binascii.py, line 528:\n    iterlist = []';
		$m.__track_lines__[529] = 'binascii.py, line 529:\n    while s:';
		$m.__track_lines__[530] = 'binascii.py, line 530:\n    try:';
		$m.__track_lines__[531] = 'binascii.py, line 531:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2])))';
		$m.__track_lines__[533] = 'binascii.py, line 533:\n    try:';
		$m.__track_lines__[534] = 'binascii.py, line 534:\n    iterlist.append((ord(s[0]), ord(s[1])))';
		$m.__track_lines__[536] = 'binascii.py, line 536:\n    iterlist.append((ord(s[0]), ))';
		$m.__track_lines__[537] = 'binascii.py, line 537:\n    s = s[3:]';
		$m.__track_lines__[538] = 'binascii.py, line 538:\n    return iterlist';
		$m.__track_lines__[540] = 'binascii.py, line 540:\n    for snippet in triples_gen(s):';
		$m.__track_lines__[541] = 'binascii.py, line 541:\n    length = len(snippet)';
		$m.__track_lines__[542] = 'binascii.py, line 542:\n    if length == 3:';
		$m.__track_lines__[544] = 'binascii.py, line 543:\n    result.append( ... hqx_encoding[(snippet[0] & 0xfc) >> 2])';
		$m.__track_lines__[545] = 'binascii.py, line 545:\n    result.append(hqx_encoding[';
		$m.__track_lines__[547] = 'binascii.py, line 547:\n    result.append(hqx_encoding[';
		$m.__track_lines__[549] = 'binascii.py, line 549:\n    result.append(hqx_encoding[snippet[2] & 0x3f])';
		$m.__track_lines__[552] = 'binascii.py, line 551:\n    result.append( ... hqx_encoding[(snippet[0] & 0xfc) >> 2])';
		$m.__track_lines__[553] = 'binascii.py, line 553:\n    result.append(hqx_encoding[';
		$m.__track_lines__[555] = 'binascii.py, line 555:\n    result.append(hqx_encoding[';
		$m.__track_lines__[559] = 'binascii.py, line 558:\n    result.append( ... hqx_encoding[(snippet[0] & 0xfc) >> 2])';
		$m.__track_lines__[560] = 'binascii.py, line 560:\n    result.append(hqx_encoding[';
		$m.__track_lines__[562] = "binascii.py, line 562:\n    return ''.join(result)";
		$m.__track_lines__[564] = 'binascii.py, line 564:\n    crctab_hqx = [';
		$m.__track_lines__[599] = 'binascii.py, line 599:\n    def crc_hqx(s, crc):';
		$m.__track_lines__[600] = 'binascii.py, line 600:\n    for c in s:';
		$m.__track_lines__[601] = 'binascii.py, line 601:\n    crc = ((crc << 8) & 0xff00) ^ crctab_hqx[((crc >> 8) & 0xff) ^ ord(c)]';
		$m.__track_lines__[603] = 'binascii.py, line 603:\n    return crc';
		$m.__track_lines__[605] = 'binascii.py, line 605:\n    def rlecode_hqx(s):';
		$m.__track_lines__[611] = 'binascii.py, line 611:\n    if not s:';
		$m.__track_lines__[612] = "binascii.py, line 612:\n    return ''";
		$m.__track_lines__[613] = 'binascii.py, line 613:\n    result = []';
		$m.__track_lines__[614] = 'binascii.py, line 614:\n    prev = s[0]';
		$m.__track_lines__[615] = 'binascii.py, line 615:\n    count = 1';
		$m.__track_lines__[620] = "binascii.py, line 620:\n    if s[-1] == '!':";
		$m.__track_lines__[621] = "binascii.py, line 621:\n    s = s[1:] + '?'";
		$m.__track_lines__[623] = "binascii.py, line 623:\n    s = s[1:] + '!'";
		$m.__track_lines__[625] = 'binascii.py, line 625:\n    for c in s:';
		$m.__track_lines__[626] = 'binascii.py, line 626:\n    if c == prev and count < 255:';
		$m.__track_lines__[627] = 'binascii.py, line 627:\n    count += 1';
		$m.__track_lines__[629] = 'binascii.py, line 629:\n    if count == 1:';
		$m.__track_lines__[630] = "binascii.py, line 630:\n    if prev != '\\x90':";
		$m.__track_lines__[631] = 'binascii.py, line 631:\n    result.append(prev)';
		$m.__track_lines__[633] = "binascii.py, line 633:\n    result.extend(['\\x90', '\\x00'])";
		$m.__track_lines__[635] = "binascii.py, line 635:\n    if prev != '\\x90':";
		$m.__track_lines__[636] = 'binascii.py, line 636:\n    result.extend([prev] * count)';
		$m.__track_lines__[638] = "binascii.py, line 638:\n    result.extend(['\\x90', '\\x00'] * count)";
		$m.__track_lines__[640] = "binascii.py, line 640:\n    if prev != '\\x90':";
		$m.__track_lines__[641] = "binascii.py, line 641:\n    result.extend([prev, '\\x90', chr(count)])";
		$m.__track_lines__[643] = "binascii.py, line 643:\n    result.extend(['\\x90', '\\x00', '\\x90', chr(count)])";
		$m.__track_lines__[644] = 'binascii.py, line 644:\n    count = 1';
		$m.__track_lines__[645] = 'binascii.py, line 645:\n    prev = c';
		$m.__track_lines__[647] = "binascii.py, line 647:\n    return ''.join(result)";
		$m.__track_lines__[649] = 'binascii.py, line 649:\n    def rledecode_hqx(s):';
		$m.__track_lines__[650] = "binascii.py, line 650:\n    s = s.split('\\x90')";
		$m.__track_lines__[651] = 'binascii.py, line 651:\n    result = [s[0]]';
		$m.__track_lines__[652] = 'binascii.py, line 652:\n    prev = s[0]';
		$m.__track_lines__[653] = 'binascii.py, line 653:\n    for snippet in s[1:]:';
		$m.__track_lines__[654] = 'binascii.py, line 654:\n    count = ord(snippet[0])';
		$m.__track_lines__[655] = 'binascii.py, line 655:\n    if count > 0:';
		$m.__track_lines__[656] = 'binascii.py, line 656:\n    result.append(prev[-1] * (count-1))';
		$m.__track_lines__[657] = 'binascii.py, line 657:\n    prev = snippet';
		$m.__track_lines__[659] = "binascii.py, line 659:\n    result. append('\\x90')";
		$m.__track_lines__[660] = "binascii.py, line 660:\n    prev = '\\x90'";
		$m.__track_lines__[661] = 'binascii.py, line 661:\n    result.append(snippet[1:])';
		$m.__track_lines__[663] = "binascii.py, line 663:\n    return ''.join(result)";
		$m.__track_lines__[665] = 'binascii.py, line 665:\n    crc_32_tab = [';
		$m.__track_lines__[720] = 'binascii.py, line 720:\n    def crc32(s, crc=0):';
		$m.__track_lines__[721] = 'binascii.py, line 721:\n    result = 0';
		$m.__track_lines__[722] = 'binascii.py, line 722:\n    crc = ~long(crc) & 0xffffffffL';
		$m.__track_lines__[723] = 'binascii.py, line 723:\n    for c in s:';
		$m.__track_lines__[724] = 'binascii.py, line 724:\n    crc = crc_32_tab[(crc ^ long(ord(c))) & 0xffL] ^ (crc >> 8)';
		$m.__track_lines__[727] = 'binascii.py, line 727:\n    result = crc ^ 0xffffffffL';
		$m.__track_lines__[729] = 'binascii.py, line 729:\n    if result > 2**31:';
		$m.__track_lines__[730] = 'binascii.py, line 730:\n    result = ((result + 2**31) % 2**32) - 2**31';
		$m.__track_lines__[732] = 'binascii.py, line 732:\n    return result';
		$m.__track_lines__[734] = 'binascii.py, line 734:\n    def b2a_hex(s):';
		$m.__track_lines__[735] = 'binascii.py, line 735:\n    result = []';
		$m.__track_lines__[736] = 'binascii.py, line 736:\n    for char in s:';
		$m.__track_lines__[737] = 'binascii.py, line 737:\n    c = (ord(char) >> 4) & 0xf';
		$m.__track_lines__[738] = 'binascii.py, line 738:\n    if c > 9:';
		$m.__track_lines__[739] = "binascii.py, line 739:\n    c = c + ord('a') - 10";
		$m.__track_lines__[741] = "binascii.py, line 741:\n    c = c + ord('0')";
		$m.__track_lines__[742] = 'binascii.py, line 742:\n    result.append(chr(c))';
		$m.__track_lines__[743] = 'binascii.py, line 743:\n    c = ord(char) & 0xf';
		$m.__track_lines__[744] = 'binascii.py, line 744:\n    if c > 9:';
		$m.__track_lines__[745] = "binascii.py, line 745:\n    c = c + ord('a') - 10";
		$m.__track_lines__[747] = "binascii.py, line 747:\n    c = c + ord('0')";
		$m.__track_lines__[748] = 'binascii.py, line 748:\n    result.append(chr(c))';
		$m.__track_lines__[749] = "binascii.py, line 749:\n    return ''.join(result)";
		$m.__track_lines__[751] = 'binascii.py, line 751:\n    hexlify = b2a_hex';
		$m.__track_lines__[753] = 'binascii.py, line 753:\n    table_hex = [';
		$m.__track_lines__[765] = 'binascii.py, line 765:\n    def a2b_hex(t):';
		$m.__track_lines__[766] = 'binascii.py, line 766:\n    result = []';
		$m.__track_lines__[768] = 'binascii.py, line 768:\n    def pairs_gen(s):';
		$m.__track_lines__[777] = 'binascii.py, line 777:\n    iterlist = []';
		$m.__track_lines__[778] = 'binascii.py, line 778:\n    while s:';
		$m.__track_lines__[779] = 'binascii.py, line 779:\n    try:';
		$m.__track_lines__[780] = 'binascii.py, line 780:\n    iterlist.append((table_hex[ord(s[0])], table_hex[ord(s[1])]))';
		$m.__track_lines__[782] = 'binascii.py, line 782:\n    if len(s):';
		$m.__track_lines__[783] = "binascii.py, line 783:\n    raise TypeError('Odd-length string')";
		$m.__track_lines__[784] = 'binascii.py, line 784:\n    return iterlist';
		$m.__track_lines__[785] = 'binascii.py, line 785:\n    s = s[2:]';
		$m.__track_lines__[786] = 'binascii.py, line 786:\n    return iterlist';
		$m.__track_lines__[788] = 'binascii.py, line 788:\n    for a, b in pairs_gen(t):';
		$m.__track_lines__[789] = 'binascii.py, line 789:\n    if a < 0 or b < 0:';
		$m.__track_lines__[790] = "binascii.py, line 790:\n    raise TypeError('Non-hexadecimal digit found')";
		$m.__track_lines__[791] = 'binascii.py, line 791:\n    result.append(chr((a << 4) + b))';
		$m.__track_lines__[792] = "binascii.py, line 792:\n    return ''.join(result)";
		$m.__track_lines__[795] = 'binascii.py, line 795:\n    unhexlify = a2b_hex';

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
		var $constant_int_31 = new $p['int'](31);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_34 = new $p['int'](34);
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_36 = new $p['int'](36);
		var $constant_int_37 = new $p['int'](37);
		var $constant_int_38 = new $p['int'](38);
		var $constant_int_39 = new $p['int'](39);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_41 = new $p['int'](41);
		var $constant_int_42 = new $p['int'](42);
		var $constant_int_43 = new $p['int'](43);
		var $constant_int_44 = new $p['int'](44);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_46 = new $p['int'](46);
		var $constant_int_47 = new $p['int'](47);
		var $constant_int_48 = new $p['int'](48);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_51 = new $p['int'](51);
		var $constant_int_52 = new $p['int'](52);
		var $constant_int_53 = new $p['int'](53);
		var $constant_int_54 = new $p['int'](54);
		var $constant_int_55 = new $p['int'](55);
		var $constant_int_56 = new $p['int'](56);
		var $constant_int_57 = new $p['int'](57);
		var $constant_int_58 = new $p['int'](58);
		var $constant_int_59 = new $p['int'](59);
		var $constant_int_60 = new $p['int'](60);
		var $constant_int_61 = new $p['int'](61);
		var $constant_int_62 = new $p['int'](62);
		var $constant_int_63 = new $p['int'](63);
		var $constant_int_64 = new $p['int'](64);
		var $constant_int_7233 = new $p['int'](7233);
		var $constant_int_8258 = new $p['int'](8258);
		var $constant_int_13379 = new $p['int'](13379);
		var $constant_int_22596 = new $p['int'](22596);
		var $constant_int_19525 = new $p['int'](19525);
		var $constant_int_28742 = new $p['int'](28742);
		var $constant_int_6241 = new $p['int'](6241);
		var $constant_int_76 = new $p['int'](76);
		var $constant_int_2640 = new $p['int'](2640);
		var $constant_int_7761 = new $p['int'](7761);
		var $constant_int_8786 = new $p['int'](8786);
		var $constant_int_13907 = new $p['int'](13907);
		var $constant_int_23124 = new $p['int'](23124);
		var $constant_int_4657 = new $p['int'](4657);
		var $constant_int_29270 = new $p['int'](29270);
		var $constant_int_26199 = new $p['int'](26199);
		var $constant_int_60687 = new $p['int'](60687);
		var $constant_int_3168 = new $p['int'](3168);
		var $constant_int_528 = new $p['int'](528);
		var $constant_int_9314 = new $p['int'](9314);
		var $constant_int_12387 = new $p['int'](12387);
		var $constant_int_23652 = new $p['int'](23652);
		var $constant_int_18533 = new $p['int'](18533);
		var $constant_int_29798 = new $p['int'](29798);
		var $constant_int_5649 = new $p['int'](5649);
		var $constant_int_31254 = new $p['int'](31254);
		var $constant_int_24679 = new $p['int'](24679);
		var $constant_int_10770 = new $p['int'](10770);
		var $constant_int_20053 = new $p['int'](20053);
		var $constant_int_3696 = new $p['int'](3696);
		var $constant_int_6769 = new $p['int'](6769);
		var $constant_int_9842 = new $p['int'](9842);
		var $constant_int_12915 = new $p['int'](12915);
		var $constant_int_24180 = new $p['int'](24180);
		var $constant_int_19061 = new $p['int'](19061);
		var $constant_int_30326 = new $p['int'](30326);
		var $constant_int_25207 = new $p['int'](25207);
		var $constant_int_21012 = new $p['int'](21012);
		var $constant_int_30726 = new $p['int'](30726);
		var $constant_int_125 = new $p['int'](125);
		var $constant_int_126 = new $p['int'](126);
		var $constant_int_127 = new $p['int'](127);
		var $constant_int_4224 = new $p['int'](4224);
		var $constant_int_1153 = new $p['int'](1153);
		var $constant_int_14466 = new $p['int'](14466);
		var $constant_int_6336 = new $p['int'](6336);
		var $constant_int_16516 = new $p['int'](16516);
		var $constant_int_21637 = new $p['int'](21637);
		var $constant_int_26758 = new $p['int'](26758);
		var $constant_int_31879 = new $p['int'](31879);
		var $constant_int_28183 = new $p['int'](28183);
		var $constant_int_4752 = new $p['int'](4752);
		var $constant_int_1681 = new $p['int'](1681);
		var $constant_int_14994 = new $p['int'](14994);
		var $constant_int_11923 = new $p['int'](11923);
		var $constant_int_17044 = new $p['int'](17044);
		var $constant_int_22165 = new $p['int'](22165);
		var $constant_int_27286 = new $p['int'](27286);
		var $constant_int_32407 = new $p['int'](32407);
		var $constant_int_18628 = new $p['int'](18628);
		var $constant_int_5280 = new $p['int'](5280);
		var $constant_int_161 = new $p['int'](161);
		var $constant_int_15522 = new $p['int'](15522);
		var $constant_int_10403 = new $p['int'](10403);
		var $constant_int_17572 = new $p['int'](17572);
		var $constant_int_20645 = new $p['int'](20645);
		var $constant_int_27814 = new $p['int'](27814);
		var $constant_int_30887 = new $p['int'](30887);
		var $constant_int_29895 = new $p['int'](29895);
		var $constant_int_17941 = new $p['int'](17941);
		var $constant_int_5808 = new $p['int'](5808);
		var $constant_int_689 = new $p['int'](689);
		var $constant_int_16050 = new $p['int'](16050);
		var $constant_int_10931 = new $p['int'](10931);
		var $constant_int_18100 = new $p['int'](18100);
		var $constant_int_21173 = new $p['int'](21173);
		var $constant_int_28342 = new $p['int'](28342);
		var $constant_int_31415 = new $p['int'](31415);
		var $constant_int_17413 = new $p['int'](17413);
		var $constant_int_192 = new $p['int'](192);
		var $constant_int_1056 = new $p['int'](1056);
		var $constant_int_12482 = new $p['int'](12482);
		var $constant_int_9411 = new $p['int'](9411);
		var $constant_int_5121 = new $p['int'](5121);
		var $constant_int_23749 = new $p['int'](23749);
		var $constant_int_24774 = new $p['int'](24774);
		var $constant_int_4129 = new $p['int'](4129);
		var $constant_int_11298 = new $p['int'](11298);
		var $constant_int_22068 = new $p['int'](22068);
		var $constant_int_6864 = new $p['int'](6864);
		var $constant_int_3793 = new $p['int'](3793);
		var $constant_int_13010 = new $p['int'](13010);
		var $constant_int_14371 = new $p['int'](14371);
		var $constant_int_19156 = new $p['int'](19156);
		var $constant_int_24277 = new $p['int'](24277);
		var $constant_int_25302 = new $p['int'](25302);
		var $constant_int_30423 = new $p['int'](30423);
		var $constant_int_21540 = new $p['int'](21540);
		var $constant_int_16421 = new $p['int'](16421);
		var $constant_int_7392 = new $p['int'](7392);
		var $constant_int_2273 = new $p['int'](2273);
		var $constant_int_13538 = new $p['int'](13538);
		var $constant_int_8419 = new $p['int'](8419);
		var $constant_int_19684 = new $p['int'](19684);
		var $constant_int_22757 = new $p['int'](22757);
		var $constant_int_25830 = new $p['int'](25830);
		var $constant_int_28903 = new $p['int'](28903);
		var $constant_int_36297 = new $p['int'](36297);
		var $constant_int_26663 = new $p['int'](26663);
		var $constant_int_240 = new $p['int'](240);
		var $constant_int_2801 = new $p['int'](2801);
		var $constant_int_14066 = new $p['int'](14066);
		var $constant_int_8947 = new $p['int'](8947);
		var $constant_int_20212 = new $p['int'](20212);
		var $constant_int_23285 = new $p['int'](23285);
		var $constant_int_26358 = new $p['int'](26358);
		var $constant_int_29431 = new $p['int'](29431);
		var $constant_int_252 = new $p['int'](252);
		var $constant_int_20484 = new $p['int'](20484);
		var $constant_int_255 = new $p['int'](255);
		var $constant_int_15891 = new $p['int'](15891);
		var $constant_int_33032 = new $p['int'](33032);
		var $constant_int_38153 = new $p['int'](38153);
		var $constant_int_43274 = new $p['int'](43274);
		var $constant_int_48395 = new $p['int'](48395);
		var $constant_int_53516 = new $p['int'](53516);
		var $constant_int_50445 = new $p['int'](50445);
		var $constant_int_63758 = new $p['int'](63758);
		var $constant_int_49453 = new $p['int'](49453);
		var $constant_int_65280 = new $p['int'](65280);
		var $constant_int_11395 = new $p['int'](11395);
		var $constant_int_33560 = new $p['int'](33560);
		var $constant_int_38681 = new $p['int'](38681);
		var $constant_int_43802 = new $p['int'](43802);
		var $constant_int_48923 = new $p['int'](48923);
		var $constant_int_54044 = new $p['int'](54044);
		var $constant_int_50973 = new $p['int'](50973);
		var $constant_int_64286 = new $p['int'](64286);
		var $constant_int_61215 = new $p['int'](61215);
		var $constant_int_1584 = new $p['int'](1584);
		var $constant_int_49 = new $p['int'](49);
		var $constant_int_34088 = new $p['int'](34088);
		var $constant_int_37161 = new $p['int'](37161);
		var $constant_int_44330 = new $p['int'](44330);
		var $constant_int_47403 = new $p['int'](47403);
		var $constant_int_54572 = new $p['int'](54572);
		var $constant_int_11826 = new $p['int'](11826);
		var $constant_int_64814 = new $p['int'](64814);
		var $constant_int_59695 = new $p['int'](59695);
		var $constant_int_14899 = new $p['int'](14899);
		var $constant_int_27655 = new $p['int'](27655);
		var $constant_int_3265 = new $p['int'](3265);
		var $constant_int_34616 = new $p['int'](34616);
		var $constant_int_37689 = new $p['int'](37689);
		var $constant_int_44858 = new $p['int'](44858);
		var $constant_int_47931 = new $p['int'](47931);
		var $constant_int_55100 = new $p['int'](55100);
		var $constant_int_49981 = new $p['int'](49981);
		var $constant_int_65342 = new $p['int'](65342);
		var $constant_int_16949 = new $p['int'](16949);
		var $constant_int_32310 = new $p['int'](32310);
		var $constant_int_35144 = new $p['int'](35144);
		var $constant_int_40265 = new $p['int'](40265);
		var $constant_int_41290 = new $p['int'](41290);
		var $constant_int_46411 = new $p['int'](46411);
		var $constant_int_55628 = new $p['int'](55628);
		var $constant_int_52557 = new $p['int'](52557);
		var $constant_int_61774 = new $p['int'](61774);
		var $constant_int_58703 = new $p['int'](58703);
		var $constant_int_15363 = new $p['int'](15363);
		var $constant_int_35672 = new $p['int'](35672);
		var $constant_int_40793 = new $p['int'](40793);
		var $constant_int_41818 = new $p['int'](41818);
		var $constant_int_46939 = new $p['int'](46939);
		var $constant_int_56156 = new $p['int'](56156);
		var $constant_int_43435 = new $p['int'](43435);
		var $constant_int_62302 = new $p['int'](62302);
		var $constant_int_59231 = new $p['int'](59231);
		var $constant_int_53085 = new $p['int'](53085);
		var $constant_int_36200 = new $p['int'](36200);
		var $constant_int_39273 = new $p['int'](39273);
		var $constant_int_42346 = new $p['int'](42346);
		var $constant_int_45419 = new $p['int'](45419);
		var $constant_int_56684 = new $p['int'](56684);
		var $constant_int_51565 = new $p['int'](51565);
		var $constant_int_62830 = new $p['int'](62830);
		var $constant_int_57711 = new $p['int'](57711);
		var $constant_int_60223 = new $p['int'](60223);
		var $constant_int_36728 = new $p['int'](36728);
		var $constant_int_39801 = new $p['int'](39801);
		var $constant_int_42874 = new $p['int'](42874);
		var $constant_int_45947 = new $p['int'](45947);
		var $constant_int_57212 = new $p['int'](57212);
		var $constant_int_52093 = new $p['int'](52093);
		var $constant_int_63358 = new $p['int'](63358);
		var $constant_int_58239 = new $p['int'](58239);
		var $constant_int_2112 = new $p['int'](2112);
		var $constant_int_10242 = new $p['int'](10242);
		var $constant_int_37256 = new $p['int'](37256);
		var $constant_int_34185 = new $p['int'](34185);
		var $constant_int_47498 = new $p['int'](47498);
		var $constant_int_44427 = new $p['int'](44427);
		var $constant_int_49548 = new $p['int'](49548);
		var $constant_int_54669 = new $p['int'](54669);
		var $constant_int_59790 = new $p['int'](59790);
		var $constant_int_64911 = new $p['int'](64911);
		var $constant_int_37784 = new $p['int'](37784);
		var $constant_int_34713 = new $p['int'](34713);
		var $constant_int_48026 = new $p['int'](48026);
		var $constant_int_44955 = new $p['int'](44955);
		var $constant_int_50076 = new $p['int'](50076);
		var $constant_int_55197 = new $p['int'](55197);
		var $constant_int_60318 = new $p['int'](60318);
		var $constant_int_65439 = new $p['int'](65439);
		var $constant_int_7920 = new $p['int'](7920);
		var $constant_int_38312 = new $p['int'](38312);
		var $constant_int_33193 = new $p['int'](33193);
		var $constant_int_48554 = new $p['int'](48554);
		var $constant_int_25671 = new $p['int'](25671);
		var $constant_int_50604 = new $p['int'](50604);
		var $constant_int_53677 = new $p['int'](53677);
		var $constant_int_60846 = new $p['int'](60846);
		var $constant_int_63919 = new $p['int'](63919);
		var $constant_int_38840 = new $p['int'](38840);
		var $constant_int_33721 = new $p['int'](33721);
		var $constant_int_49082 = new $p['int'](49082);
		var $constant_int_43963 = new $p['int'](43963);
		var $constant_int_51132 = new $p['int'](51132);
		var $constant_int_54205 = new $p['int'](54205);
		var $constant_int_61374 = new $p['int'](61374);
		var $constant_int_64447 = new $p['int'](64447);
		var $constant_int_39368 = new $p['int'](39368);
		var $constant_int_27191 = new $p['int'](27191);
		var $constant_int_45514 = new $p['int'](45514);
		var $constant_int_42443 = new $p['int'](42443);
		var $constant_int_51660 = new $p['int'](51660);
		var $constant_int_56781 = new $p['int'](56781);
		var $constant_int_57806 = new $p['int'](57806);
		var $constant_int_62927 = new $p['int'](62927);
		var $constant_int_39896 = new $p['int'](39896);
		var $constant_int_36825 = new $p['int'](36825);
		var $constant_int_46042 = new $p['int'](46042);
		var $constant_int_42971 = new $p['int'](42971);
		var $constant_int_52188 = new $p['int'](52188);
		var $constant_int_57309 = new $p['int'](57309);
		var $constant_int_58334 = new $p['int'](58334);
		var $constant_int_63455 = new $p['int'](63455);
		var $constant_int_31782 = new $p['int'](31782);
		var $constant_int_40424 = new $p['int'](40424);
		var $constant_int_35305 = new $p['int'](35305);
		var $constant_int_46570 = new $p['int'](46570);
		var $constant_int_41451 = new $p['int'](41451);
		var $constant_int_52716 = new $p['int'](52716);
		var $constant_int_55789 = new $p['int'](55789);
		var $constant_int_58862 = new $p['int'](58862);
		var $constant_int_61935 = new $p['int'](61935);
		var $constant_int_9939 = new $p['int'](9939);
		var $constant_int_40952 = new $p['int'](40952);
		var $constant_int_35833 = new $p['int'](35833);
		var $constant_int_47098 = new $p['int'](47098);
		var $constant_int_41979 = new $p['int'](41979);
		var $constant_int_53244 = new $p['int'](53244);
		var $constant_int_56317 = new $p['int'](56317);
		var $constant_int_59390 = new $p['int'](59390);
		var $constant_int_62463 = new $p['int'](62463);
		var $constant_long_0 = new $p['long'](0);
		var $constant_long_3865271297 = new $p['long'](3865271297);
		var $constant_long_1555261956 = new $p['long'](1555261956);
		var $constant_long_3134207493 = new $p['long'](3134207493);
		var $constant_long_1594198024 = new $p['long'](1594198024);
		var $constant_long_3110523913 = new $p['long'](3110523913);
		var $constant_long_62317068 = new $p['long'](62317068);
		var $constant_long_3855990285 = new $p['long'](3855990285);
		var $constant_long_3188396048 = new $p['long'](3188396048);
		var $constant_long_1483230225 = new $p['long'](1483230225);
		var $constant_long_3803740692 = new $p['long'](3803740692);
		var $constant_long_81470997 = new $p['long'](81470997);
		var $constant_long_3775830040 = new $p['long'](3775830040);
		var $constant_long_124634137 = new $p['long'](124634137);
		var $constant_long_3183342108 = new $p['long'](3183342108);
		var $constant_long_1541320221 = new $p['long'](1541320221);
		var $constant_long_2966460450 = new $p['long'](2966460450);
		var $constant_long_1454621731 = new $p['long'](1454621731);
		var $constant_long_3965973030 = new $p['long'](3965973030);
		var $constant_long_167816743 = new $p['long'](167816743);
		var $constant_long_4023717930 = new $p['long'](4023717930);
		var $constant_long_162941995 = new $p['long'](162941995);
		var $constant_long_3009837614 = new $p['long'](3009837614);
		var $constant_long_1426400815 = new $p['long'](1426400815);
		var $constant_long_249268274 = new $p['long'](249268274);
		var $constant_long_3904427059 = new $p['long'](3904427059);
		var $constant_long_1382605366 = new $p['long'](1382605366);
		var $constant_long_3020668471 = new $p['long'](3020668471);
		var $constant_long_1373503546 = new $p['long'](1373503546);
		var $constant_long_3082640443 = new $p['long'](3082640443);
		var $constant_long_225274430 = new $p['long'](225274430);
		var $constant_long_3943577151 = new $p['long'](3943577151);
		var $constant_long_4057260610 = new $p['long'](4057260610);
		var $constant_long_397917763 = new $p['long'](397917763);
		var $constant_long_2909243462 = new $p['long'](2909243462);
		var $constant_long_1258607687 = new $p['long'](1258607687);
		var $constant_long_2932959818 = new $p['long'](2932959818);
		var $constant_long_1219638859 = new $p['long'](1219638859);
		var $constant_long_4066508878 = new $p['long'](4066508878);
		var $constant_long_335633487 = new $p['long'](335633487);
		var $constant_long_1340076626 = new $p['long'](1340076626);
		var $constant_long_2847714899 = new $p['long'](2847714899);
		var $constant_long_325883990 = new $p['long'](325883990);
		var $constant_long_4111451223 = new $p['long'](4111451223);
		var $constant_long_282753626 = new $p['long'](282753626);
		var $constant_long_4139329115 = new $p['long'](4139329115);
		var $constant_long_1281953886 = new $p['long'](1281953886);
		var $constant_long_2852801631 = new $p['long'](2852801631);
		var $constant_long_1090812512 = new $p['long'](1090812512);
		var $constant_long_2808555105 = new $p['long'](2808555105);
		var $constant_long_498536548 = new $p['long'](498536548);
		var $constant_long_4224994405 = new $p['long'](4224994405);
		var $constant_long_503444072 = new $p['long'](503444072);
		var $constant_long_4167216745 = new $p['long'](4167216745);
		var $constant_long_1119000684 = new $p['long'](1119000684);
		var $constant_long_2765210733 = new $p['long'](2765210733);
		var $constant_long_4279200368 = new $p['long'](4279200368);
		var $constant_long_426522225 = new $p['long'](426522225);
		var $constant_long_2747007092 = new $p['long'](2747007092);
		var $constant_long_1172266101 = new $p['long'](1172266101);
		var $constant_long_2685067896 = new $p['long'](2685067896);
		var $constant_long_1181335161 = new $p['long'](1181335161);
		var $constant_long_4240017532 = new $p['long'](4240017532);
		var $constant_long_450548861 = new $p['long'](450548861);
		var $constant_long_2512341634 = new $p['long'](2512341634);
		var $constant_long_1943803523 = new $p['long'](1943803523);
		var $constant_long_3373015174 = new $p['long'](3373015174);
		var $constant_long_795835527 = new $p['long'](795835527);
		var $constant_long_3401237130 = new $p['long'](3401237130);
		var $constant_long_752459403 = new $p['long'](752459403);
		var $constant_long_2517215374 = new $p['long'](2517215374);
		var $constant_long_1886057615 = new $p['long'](1886057615);
		var $constant_long_733239954 = new $p['long'](733239954);
		var $constant_long_3453421203 = new $p['long'](3453421203);
		var $constant_long_1996959894 = new $p['long'](1996959894);
		var $constant_long_2439277719 = new $p['long'](2439277719);
		var $constant_long_1957810842 = new $p['long'](1957810842);
		var $constant_long_2463272603 = new $p['long'](2463272603);
		var $constant_long_671266974 = new $p['long'](671266974);
		var $constant_long_3462522015 = new $p['long'](3462522015);
		var $constant_long_628085408 = new $p['long'](628085408);
		var $constant_long_3272380065 = new $p['long'](3272380065);
		var $constant_long_2044508324 = new $p['long'](2044508324);
		var $constant_long_2680153253 = new $p['long'](2680153253);
		var $constant_long_2053790376 = new $p['long'](2053790376);
		var $constant_long_2617837225 = new $p['long'](2617837225);
		var $constant_long_651767980 = new $p['long'](651767980);
		var $constant_long_3233442989 = new $p['long'](3233442989);
		var $constant_long_2607071920 = new $p['long'](2607071920);
		var $constant_long_2097651377 = new $p['long'](2097651377);
		var $constant_long_3352799412 = new $p['long'](3352799412);
		var $constant_long_565507253 = new $p['long'](565507253);
		var $constant_long_3294710456 = new $p['long'](3294710456);
		var $constant_long_570562233 = new $p['long'](570562233);
		var $constant_long_2563907772 = new $p['long'](2563907772);
		var $constant_long_2125561021 = new $p['long'](2125561021);
		var $constant_long_1684777152 = new $p['long'](1684777152);
		var $constant_long_2181625025 = new $p['long'](2181625025);
		var $constant_long_953729732 = new $p['long'](953729732);
		var $constant_long_3736837829 = new $p['long'](3736837829);
		var $constant_long_997073096 = new $p['long'](997073096);
		var $constant_long_3708648649 = new $p['long'](3708648649);
		var $constant_long_1742555852 = new $p['long'](1742555852);
		var $constant_long_2176718541 = new $p['long'](2176718541);
		var $constant_long_3663771856 = new $p['long'](3663771856);
		var $constant_long_1006888145 = new $p['long'](1006888145);
		var $constant_long_2262029012 = new $p['long'](2262029012);
		var $constant_long_1622183637 = new $p['long'](1622183637);
		var $constant_long_2238001368 = new $p['long'](2238001368);
		var $constant_long_1661365465 = new $p['long'](1661365465);
		var $constant_long_3654703836 = new $p['long'](3654703836);
		var $constant_long_1068828381 = new $p['long'](1068828381);
		var $constant_long_3569037538 = new $p['long'](3569037538);
		var $constant_long_853044451 = new $p['long'](853044451);
		var $constant_long_2282248934 = new $p['long'](2282248934);
		var $constant_long_1852507879 = new $p['long'](1852507879);
		var $constant_long_2344532202 = new $p['long'](2344532202);
		var $constant_long_1843258603 = new $p['long'](1843258603);
		var $constant_long_3608007406 = new $p['long'](3608007406);
		var $constant_long_829329135 = new $p['long'](829329135);
		var $constant_long_1789927666 = new $p['long'](1789927666);
		var $constant_long_2362670323 = new $p['long'](2362670323);
		var $constant_long_906185462 = new $p['long'](906185462);
		var $constant_long_3495958263 = new $p['long'](3495958263);
		var $constant_long_901097722 = new $p['long'](901097722);
		var $constant_long_3554079995 = new $p['long'](3554079995);
		var $constant_long_1762050814 = new $p['long'](1762050814);
		var $constant_long_2405801727 = new $p['long'](2405801727);
		var $constant_long_1567103746 = new $p['long'](1567103746);
		var $constant_long_3138078467 = new $p['long'](3138078467);
		var $constant_long_31158534 = new $p['long'](31158534);
		var $constant_long_3887607047 = new $p['long'](3887607047);
		var $constant_long_40735498 = new $p['long'](40735498);
		var $constant_long_3826175755 = new $p['long'](3826175755);
		var $constant_long_1591671054 = new $p['long'](1591671054);
		var $constant_long_3099436303 = new $p['long'](3099436303);
		var $constant_long_3814918930 = new $p['long'](3814918930);
		var $constant_long_83908371 = new $p['long'](83908371);
		var $constant_long_3218104598 = new $p['long'](3218104598);
		var $constant_long_1504918807 = new $p['long'](1504918807);
		var $constant_long_3160834842 = new $p['long'](3160834842);
		var $constant_long_1510334235 = new $p['long'](1510334235);
		var $constant_long_3772115230 = new $p['long'](3772115230);
		var $constant_long_112637215 = new $p['long'](112637215);
		var $constant_long_3988292384 = new $p['long'](3988292384);
		var $constant_long_198958881 = new $p['long'](198958881);
		var $constant_long_2970347812 = new $p['long'](2970347812);
		var $constant_long_1466479909 = new $p['long'](1466479909);
		var $constant_long_2998733608 = new $p['long'](2998733608);
		var $constant_long_1423857449 = new $p['long'](1423857449);
		var $constant_long_3993919788 = new $p['long'](3993919788);
		var $constant_long_141376813 = new $p['long'](141376813);
		var $constant_long_1404277552 = new $p['long'](1404277552);
		var $constant_long_3050360625 = new $p['long'](3050360625);
		var $constant_long_251722036 = new $p['long'](251722036);
		var $constant_long_3915621685 = new $p['long'](3915621685);
		var $constant_long_213261112 = new $p['long'](213261112);
		var $constant_long_3939845945 = new $p['long'](3939845945);
		var $constant_long_1342533948 = new $p['long'](1342533948);
		var $constant_long_3060149565 = new $p['long'](3060149565);
		var $constant_long_2898065728 = new $p['long'](2898065728);
		var $constant_long_1256170817 = new $p['long'](1256170817);
		var $constant_long_4027552580 = new $p['long'](4027552580);
		var $constant_long_376229701 = new $p['long'](376229701);
		var $constant_long_4089016648 = new $p['long'](4089016648);
		var $constant_long_366619977 = new $p['long'](366619977);
		var $constant_long_2936675148 = new $p['long'](2936675148);
		var $constant_long_1231636301 = new $p['long'](1231636301);
		var $constant_long_314042704 = new $p['long'](314042704);
		var $constant_long_4107580753 = new $p['long'](4107580753);
		var $constant_long_1308918612 = new $p['long'](1308918612);
		var $constant_long_2825379669 = new $p['long'](2825379669);
		var $constant_long_1303535960 = new $p['long'](1303535960);
		var $constant_long_2882616665 = new $p['long'](2882616665);
		var $constant_long_285281116 = new $p['long'](285281116);
		var $constant_long_4150417245 = new $p['long'](4150417245);
		var $constant_long_476864866 = new $p['long'](476864866);
		var $constant_long_4195302755 = new $p['long'](4195302755);
		var $constant_long_1088359270 = new $p['long'](1088359270);
		var $constant_long_2797360999 = new $p['long'](2797360999);
		var $constant_long_1131014506 = new $p['long'](1131014506);
		var $constant_long_2768942443 = new $p['long'](2768942443);
		var $constant_long_534414190 = new $p['long'](534414190);
		var $constant_long_4189708143 = new $p['long'](4189708143);
		var $constant_long_2724688242 = new $p['long'](2724688242);
		var $constant_long_1141124467 = new $p['long'](1141124467);
		var $constant_long_4275313526 = new $p['long'](4275313526);
		var $constant_long_414664567 = new $p['long'](414664567);
		var $constant_long_4251122042 = new $p['long'](4251122042);
		var $constant_long_453092731 = new $p['long'](453092731);
		var $constant_long_2714866558 = new $p['long'](2714866558);
		var $constant_long_1202900863 = new $p['long'](1202900863);
		var $constant_long_3369554304 = new $p['long'](3369554304);
		var $constant_long_783551873 = new $p['long'](783551873);
		var $constant_long_2489596804 = new $p['long'](2489596804);
		var $constant_long_1913087877 = new $p['long'](1913087877);
		var $constant_long_2547177864 = new $p['long'](2547177864);
		var $constant_long_1907459465 = new $p['long'](1907459465);
		var $constant_long_3412177804 = new $p['long'](3412177804);
		var $constant_long_755167117 = new $p['long'](755167117);
		var $constant_long_1994146192 = new $p['long'](1994146192);
		var $constant_long_2428444049 = new $p['long'](2428444049);
		var $constant_long_711928724 = new $p['long'](711928724);
		var $constant_long_3423369109 = new $p['long'](3423369109);
		var $constant_long_702138776 = new $p['long'](702138776);
		var $constant_long_3485111705 = new $p['long'](3485111705);
		var $constant_long_1969922972 = new $p['long'](1969922972);
		var $constant_long_2466906013 = new $p['long'](2466906013);
		var $constant_long_2013776290 = new $p['long'](2013776290);
		var $constant_long_2657392035 = new $p['long'](2657392035);
		var $constant_long_615818150 = new $p['long'](615818150);
		var $constant_long_3268935591 = new $p['long'](3268935591);
		var $constant_long_654459306 = new $p['long'](654459306);
		var $constant_long_3244367275 = new $p['long'](3244367275);
		var $constant_long_2075208622 = new $p['long'](2075208622);
		var $constant_long_2647816111 = new $p['long'](2647816111);
		var $constant_long_3322730930 = new $p['long'](3322730930);
		var $constant_long_544179635 = new $p['long'](544179635);
		var $constant_long_2596254646 = new $p['long'](2596254646);
		var $constant_long_2094854071 = new $p['long'](2094854071);
		var $constant_long_2567524794 = new $p['long'](2567524794);
		var $constant_long_2137656763 = new $p['long'](2137656763);
		var $constant_long_3317316542 = new $p['long'](3317316542);
		var $constant_long_601450431 = new $p['long'](601450431);
		var $constant_long_956543938 = new $p['long'](956543938);
		var $constant_long_3747672003 = new $p['long'](3747672003);
		var $constant_long_1706088902 = new $p['long'](1706088902);
		var $constant_long_2211677639 = new $p['long'](2211677639);
		var $constant_long_1711684554 = new $p['long'](1711684554);
		var $constant_long_2154129355 = new $p['long'](2154129355);
		var $constant_long_984961486 = new $p['long'](984961486);
		var $constant_long_3705015759 = new $p['long'](3705015759);
		var $constant_long_2265490386 = new $p['long'](2265490386);
		var $constant_long_1634467795 = new $p['long'](1634467795);
		var $constant_long_3686517206 = new $p['long'](3686517206);
		var $constant_long_1037604311 = new $p['long'](1037604311);
		var $constant_long_3624741850 = new $p['long'](3624741850);
		var $constant_long_1047427035 = new $p['long'](1047427035);
		var $constant_long_2227061214 = new $p['long'](2227061214);
		var $constant_long_1658658271 = new $p['long'](1658658271);
		var $constant_long_2312317920 = new $p['long'](2312317920);
		var $constant_long_1873836001 = new $p['long'](1873836001);
		var $constant_long_3579855332 = new $p['long'](3579855332);
		var $constant_long_855842277 = new $p['long'](855842277);
		var $constant_long_3604390888 = new $p['long'](3604390888);
		var $constant_long_817233897 = new $p['long'](817233897);
		var $constant_long_2321926636 = new $p['long'](2321926636);
		var $constant_long_1812370925 = new $p['long'](1812370925);
		var $constant_long_936918000 = new $p['long'](936918000);
		var $constant_long_3518719985 = new $p['long'](3518719985);
		var $constant_long_1802195444 = new $p['long'](1802195444);
		var $constant_long_2366115317 = new $p['long'](2366115317);
		var $constant_long_1759359992 = new $p['long'](1759359992);
		var $constant_long_2394877945 = new $p['long'](2394877945);
		var $constant_long_255 = new $p['long'](255);
		var $constant_long_879679996 = new $p['long'](879679996);
		var $constant_long_3524101629 = new $p['long'](3524101629);
		var $constant_long_4294967295 = new $p['long'](4294967295);
		$pyjs.track.module='binascii';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=5;
		$m['Error'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'binascii';
			$cls_definition.__md5__ = '77827d72b0d04e97fb923fc2d26684c0';
			$pyjs.track.lineno=6;
			$pyjs.track.lineno=5;
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Error', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=8;
		$m['Done'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'binascii';
			$cls_definition.__md5__ = '348359ce1bd92fc817a27c63c160b201';
			$pyjs.track.lineno=9;
			$pyjs.track.lineno=8;
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Done', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=11;
		$m['Incomplete'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'binascii';
			$cls_definition.__md5__ = '2fdf0598d2c4d52a0bf02c7de676e463';
			$pyjs.track.lineno=12;
			$pyjs.track.lineno=11;
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Incomplete', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=14;
		$m['a2b_uu'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var trailingdata,$mod1,result,$mod2,$pyjs_try_err,$sub2,$sub1,$sub16,$sub15,quadruplets_gen,$bool1,$bool4,$bool5,$2,$mul2,$mul1,$1,$bool2,$cmp1,$cmp2,$add3,length,$len2,$add4,$len1;
			$pyjs.track={module:'binascii',lineno:14};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=14;
			$pyjs.track.lineno=15;
			if ((($bool2=!(($bool1=s) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						 true ) )) {
				$pyjs.track.lineno=16;
				$pyjs.track.lineno=16;
				var $pyjs__ret = '';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=18;
			length = (typeof ($mod1=(typeof ($sub1=$p['ord']((typeof ($1=s).__array != 'undefined'?
				((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__($constant_int_0))))==typeof ($sub2=$constant_int_32) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)))==typeof ($mod2=$constant_int_64) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2));
			$pyjs.track.lineno=20;
			quadruplets_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $pyjs_try_err,iterlist,$bool3,$8,$9,$6,$7,$4,$5,$3,$14,$15,$16,$17,$10,$11,$12,$13,$18,$add2,$add1;
				$pyjs.track={module:'binascii',lineno:20};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=20;
				$pyjs.track.lineno=29;
				iterlist = $p['list']([]);
				$pyjs.track.lineno=30;
				while ((($bool3=s) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs.track.lineno=31;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=32;
						iterlist['append']($p['tuple']([$p['ord']((typeof ($3=s).__array != 'undefined'?
							((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
								$3.__getitem__($4)):
								$3.__getitem__($constant_int_0))), $p['ord']((typeof ($5=s).__array != 'undefined'?
							((typeof $5.__array[$6=$constant_int_1]) != 'undefined'?$5.__array[$6]:
								$5.__getitem__($6)):
								$5.__getitem__($constant_int_1))), $p['ord']((typeof ($7=s).__array != 'undefined'?
							((typeof $7.__array[$8=$constant_int_2]) != 'undefined'?$7.__array[$8]:
								$7.__getitem__($8)):
								$7.__getitem__($constant_int_2))), $p['ord']((typeof ($9=s).__array != 'undefined'?
							((typeof $9.__array[$10=$constant_int_3]) != 'undefined'?$9.__array[$10]:
								$9.__getitem__($10)):
								$9.__getitem__($constant_int_3)))]));
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
						$pyjs.track.module='binascii';
						if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
							$pyjs.track.lineno=34;
							s = (typeof ($add1=s)==typeof ($add2='   ') && (typeof $add1=='number'||typeof $add1=='string')?
								$add1+$add2:
								$p['op_add']($add1,$add2));
							$pyjs.track.lineno=35;
							iterlist['append']($p['tuple']([$p['ord']((typeof ($11=s).__array != 'undefined'?
								((typeof $11.__array[$12=$constant_int_0]) != 'undefined'?$11.__array[$12]:
									$11.__getitem__($12)):
									$11.__getitem__($constant_int_0))), $p['ord']((typeof ($13=s).__array != 'undefined'?
								((typeof $13.__array[$14=$constant_int_1]) != 'undefined'?$13.__array[$14]:
									$13.__getitem__($14)):
									$13.__getitem__($constant_int_1))), $p['ord']((typeof ($15=s).__array != 'undefined'?
								((typeof $15.__array[$16=$constant_int_2]) != 'undefined'?$15.__array[$16]:
									$15.__getitem__($16)):
									$15.__getitem__($constant_int_2))), $p['ord']((typeof ($17=s).__array != 'undefined'?
								((typeof $17.__array[$18=$constant_int_3]) != 'undefined'?$17.__array[$18]:
									$17.__getitem__($18)):
									$17.__getitem__($constant_int_3)))]));
							$pyjs.track.lineno=36;
							$pyjs.track.lineno=36;
							var $pyjs__ret = iterlist;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.track.lineno=37;
					s = $p['__getslice'](s, $constant_int_4, null);
				}
				$pyjs.track.lineno=38;
				$pyjs.track.lineno=38;
				var $pyjs__ret = iterlist;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			quadruplets_gen.__name__ = 'quadruplets_gen';

			quadruplets_gen.__bind_type__ = 0;
			quadruplets_gen.__args__ = [null,null,['s']];
			$pyjs.track.lineno=40;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=41;
				result = function(){
					var $collcomp1,$iter1_iter,$sub9,$sub8,$iter1_array,$sub3,$sub7,$sub6,$sub5,$sub4,A,C,B,$iter1_nextval,D,$sub13,$sub12,$sub11,$sub10,$sub14,$iter1_type,$pyjs__trackstack_size_2,$iter1_idx;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_2=$pyjs.trackstack.length;
				$iter1_iter = quadruplets_gen($p['__getslice'](s, $constant_int_1, null)['rstrip']());
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 4, null);
					A = $tupleassign1[0];
					B = $tupleassign1[1];
					C = $tupleassign1[2];
					D = $tupleassign1[3];
					$collcomp1['append'](''['join']($p['list']([$p['chr']($p['op_bitor2']($p['op_bitshiftleft']((typeof ($sub3=A)==typeof ($sub4=$constant_int_32) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4)),$constant_int_2), $p['op_bitand2']($p['op_bitshiftright']((typeof ($sub5=B)==typeof ($sub6=$constant_int_32) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6)),$constant_int_4), $constant_int_3))), $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($sub7=B)==typeof ($sub8=$constant_int_32) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8)), $constant_int_15),$constant_int_4), $p['op_bitand2']($p['op_bitshiftright']((typeof ($sub9=C)==typeof ($sub10=$constant_int_32) && (typeof $sub9=='number'||typeof $sub9=='string')?
						$sub9-$sub10:
						$p['op_sub']($sub9,$sub10)),$constant_int_2), $constant_int_15))), $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($sub11=C)==typeof ($sub12=$constant_int_32) && (typeof $sub11=='number'||typeof $sub11=='string')?
						$sub11-$sub12:
						$p['op_sub']($sub11,$sub12)), $constant_int_3),$constant_int_6), $p['op_bitand2']((typeof ($sub13=D)==typeof ($sub14=$constant_int_32) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14)), $constant_int_63)))])));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='binascii';

	return $collcomp1;}();
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
				$pyjs.track.module='binascii';
				if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					$pyjs.track.lineno=47;
					$pyjs.__active_exception_stack__ = null;
					throw ($m['Error']('Illegal char'));
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.track.lineno=48;
			result = ''['join'](result);
			$pyjs.track.lineno=49;
			trailingdata = $p['__getslice'](result, length, null);
			$pyjs.track.lineno=50;
			if ((($bool4=trailingdata['strip']('\x00')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$pyjs.track.lineno=51;
				$pyjs.__active_exception_stack__ = null;
				throw ($m['Error']('Trailing garbage'));
			}
			$pyjs.track.lineno=52;
			result = $p['__getslice'](result, 0, length);
			$pyjs.track.lineno=53;
			if ((($bool5=((($cmp1=(($len1=result) === null?$constant_int_0:
				(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
							$p['len']($len1))))))===($cmp2=length)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$pyjs.track.lineno=54;
				result = (typeof ($add3=result)==typeof ($add4=(typeof ($mul1=(typeof ($sub15=length)==typeof ($sub16=(($len2=result) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2)))))) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16)))==typeof ($mul2='\x00') && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
			}
			$pyjs.track.lineno=55;
			$pyjs.track.lineno=55;
			var $pyjs__ret = result;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['a2b_uu'].__name__ = 'a2b_uu';

		$m['a2b_uu'].__bind_type__ = 0;
		$m['a2b_uu'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=58;
		$m['b2a_uu'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add16,$cmp4,$cmp3,$add20,$add15,length,$add17,$bool6,$len3,triples_gen,$add18,$add19,result;
			$pyjs.track={module:'binascii',lineno:58};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=59;
			length = (($len3=s) === null?$constant_int_0:
				(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
							$p['len']($len3)))));
			$pyjs.track.lineno=60;
			if ((($bool6=((($cmp3=length)===($cmp4=$constant_int_45)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$pyjs.track.lineno=61;
				$pyjs.__active_exception_stack__ = null;
				throw ($m['Error']('At most 45 bytes at once'));
			}
			$pyjs.track.lineno=63;
			triples_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $29,$28,$21,$20,$23,$22,$25,$19,$27,$24,$pyjs_try_err,$add6,$bool7,iterlist,$add5,$30,$26;
				$pyjs.track={module:'binascii',lineno:63};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=63;
				$pyjs.track.lineno=72;
				iterlist = $p['list']([]);
				$pyjs.track.lineno=73;
				while ((($bool7=s) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$pyjs.track.lineno=74;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=75;
						iterlist['append']($p['tuple']([$p['ord']((typeof ($19=s).__array != 'undefined'?
							((typeof $19.__array[$20=$constant_int_0]) != 'undefined'?$19.__array[$20]:
								$19.__getitem__($20)):
								$19.__getitem__($constant_int_0))), $p['ord']((typeof ($21=s).__array != 'undefined'?
							((typeof $21.__array[$22=$constant_int_1]) != 'undefined'?$21.__array[$22]:
								$21.__getitem__($22)):
								$21.__getitem__($constant_int_1))), $p['ord']((typeof ($23=s).__array != 'undefined'?
							((typeof $23.__array[$24=$constant_int_2]) != 'undefined'?$23.__array[$24]:
								$23.__getitem__($24)):
								$23.__getitem__($constant_int_2)))]));
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
						$pyjs.track.module='binascii';
						if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
							$pyjs.track.lineno=77;
							s = (typeof ($add5=s)==typeof ($add6='\x00\x00') && (typeof $add5=='number'||typeof $add5=='string')?
								$add5+$add6:
								$p['op_add']($add5,$add6));
							$pyjs.track.lineno=78;
							iterlist['append']($p['tuple']([$p['ord']((typeof ($25=s).__array != 'undefined'?
								((typeof $25.__array[$26=$constant_int_0]) != 'undefined'?$25.__array[$26]:
									$25.__getitem__($26)):
									$25.__getitem__($constant_int_0))), $p['ord']((typeof ($27=s).__array != 'undefined'?
								((typeof $27.__array[$28=$constant_int_1]) != 'undefined'?$27.__array[$28]:
									$27.__getitem__($28)):
									$27.__getitem__($constant_int_1))), $p['ord']((typeof ($29=s).__array != 'undefined'?
								((typeof $29.__array[$30=$constant_int_2]) != 'undefined'?$29.__array[$30]:
									$29.__getitem__($30)):
									$29.__getitem__($constant_int_2)))]));
							$pyjs.track.lineno=79;
							$pyjs.track.lineno=79;
							var $pyjs__ret = iterlist;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.track.lineno=80;
					s = $p['__getslice'](s, $constant_int_3, null);
				}
				$pyjs.track.lineno=81;
				$pyjs.track.lineno=81;
				var $pyjs__ret = iterlist;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			triples_gen.__name__ = 'triples_gen';

			triples_gen.__bind_type__ = 0;
			triples_gen.__args__ = [null,null,['s']];
			$pyjs.track.lineno=83;
			result = function(){
				var A,C,$iter2_nextval,$iter2_type,$iter2_iter,$add13,$collcomp2,$add14,$iter2_idx,B,$add10,$add7,$add12,$pyjs__trackstack_size_1,$add8,$add9,$iter2_array,$add11;
	$collcomp2 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = triples_gen(s);
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter2_nextval, 3, null);
				A = $tupleassign2[0];
				B = $tupleassign2[1];
				C = $tupleassign2[2];
				$collcomp2['append'](''['join']($p['list']([$p['chr']((typeof ($add7=$constant_int_32)==typeof ($add8=$p['op_bitand2']($p['op_bitshiftright'](A,$constant_int_2), $constant_int_63)) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8))), $p['chr']((typeof ($add9=$constant_int_32)==typeof ($add10=$p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](A,$constant_int_4), $p['op_bitand2']($p['op_bitshiftright'](B,$constant_int_4), $constant_int_15)), $constant_int_63)) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10))), $p['chr']((typeof ($add11=$constant_int_32)==typeof ($add12=$p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](B,$constant_int_2), $p['op_bitand2']($p['op_bitshiftright'](C,$constant_int_6), $constant_int_3)), $constant_int_63)) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12))), $p['chr']((typeof ($add13=$constant_int_32)==typeof ($add14=$p['op_bitand2'](C, $constant_int_63)) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14)))])));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';

	return $collcomp2;}();
			$pyjs.track.lineno=89;
			$pyjs.track.lineno=89;
			var $pyjs__ret = (typeof ($add19=(typeof ($add17=$p['chr']((typeof ($add15=$p['ord'](' '))==typeof ($add16=$p['op_bitand2'](length, $constant_int_63)) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16))))==typeof ($add18=''['join'](result)) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18)))==typeof ($add20='\n') && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b2a_uu'].__name__ = 'b2a_uu';

		$m['b2a_uu'].__bind_type__ = 0;
		$m['b2a_uu'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=92;
		$m['table_a2b_base64'] = $p['dict']([['A', $constant_int_0], ['B', $constant_int_1], ['C', $constant_int_2], ['D', $constant_int_3], ['E', $constant_int_4], ['F', $constant_int_5], ['G', $constant_int_6], ['H', $constant_int_7], ['I', $constant_int_8], ['J', $constant_int_9], ['K', $constant_int_10], ['L', $constant_int_11], ['M', $constant_int_12], ['N', $constant_int_13], ['O', $constant_int_14], ['P', $constant_int_15], ['Q', $constant_int_16], ['R', $constant_int_17], ['S', $constant_int_18], ['T', $constant_int_19], ['U', $constant_int_20], ['V', $constant_int_21], ['W', $constant_int_22], ['X', $constant_int_23], ['Y', $constant_int_24], ['Z', $constant_int_25], ['a', $constant_int_26], ['b', $constant_int_27], ['c', $constant_int_28], ['d', $constant_int_29], ['e', $constant_int_30], ['f', $constant_int_31], ['g', $constant_int_32], ['h', $constant_int_33], ['i', $constant_int_34], ['j', $constant_int_35], ['k', $constant_int_36], ['l', $constant_int_37], ['m', $constant_int_38], ['n', $constant_int_39], ['o', $constant_int_40], ['p', $constant_int_41], ['q', $constant_int_42], ['r', $constant_int_43], ['s', $constant_int_44], ['t', $constant_int_45], ['u', $constant_int_46], ['v', $constant_int_47], ['w', $constant_int_48], ['x', $constant_int_49], ['y', $constant_int_50], ['z', $constant_int_51], ['0', $constant_int_52], ['1', $constant_int_53], ['2', $constant_int_54], ['3', $constant_int_55], ['4', $constant_int_56], ['5', $constant_int_57], ['6', $constant_int_58], ['7', $constant_int_59], ['8', $constant_int_60], ['9', $constant_int_61], ['+', $constant_int_62], ['/', $constant_int_63], ['=', $constant_int_0]]);
		$pyjs.track.lineno=161;
		$m['a2b_base64'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool18,$bool19,$sub20,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$or6,$iter4_type,$or1,$iter4_iter,$sub18,res,$33,$add25,$add24,$add26,$bool21,$bool20,$bool23,$bool22,quad_pos,next_c,$or5,$or4,$sub19,leftchar,next_valid_char,$or3,$or2,$and1,$and2,leftbits,$sub17,c,$cmp11,$cmp10,$cmp12,$bool8,$bool9,$cmp7,i,$iter4_nextval,$34,$cmp9,$cmp8,$iter4_idx,$pyjs__trackstack_size_1,$iter4_array,$add23;
			$pyjs.track={module:'binascii',lineno:161};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=161;
			$pyjs.track.lineno=162;
			if ((($bool9=!(($bool8=$p['isinstance'](s, $p['str'])) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				$pyjs.track.lineno=165;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['TypeError']($p['sprintf']('expected string or unicode, got %r', $p['tuple']([s]))));
			}
			$pyjs.track.lineno=166;
			s = s['rstrip']();
			$pyjs.track.lineno=170;
			next_valid_char = function(s, pos) {
				if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				var $cmp5,$len4,c,$iter3_idx,i,$bool11,$iter3_nextval,$iter3_type,$32,$31,$add21,$cmp6,$iter3_iter,$bool10,$iter3_array,$pyjs__trackstack_size_1,$add22;
				$pyjs.track={module:'binascii',lineno:170};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=170;
				$pyjs.track.lineno=171;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = $p['range']((typeof ($add21=pos)==typeof ($add22=$constant_int_1) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22)), (($len4=s) === null?$constant_int_0:
					(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
								$p['len']($len4))))));
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					$pyjs.track.lineno=172;
					c = (typeof ($31=s).__array != 'undefined'?
						((typeof $31.__array[$32=i]) != 'undefined'?$31.__array[$32]:
							$31.__getitem__($32)):
							$31.__getitem__(i));
					$pyjs.track.lineno=173;
					if ((($bool10=((($cmp5=c)===($cmp6='\x7f')?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						$pyjs.track.lineno=179;
						if ((($bool11=$m['table_a2b_base64']['has_key'](c)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
							$pyjs.track.lineno=180;
							$pyjs.track.lineno=180;
							var $pyjs__ret = c;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						}
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=181;
				$pyjs.track.lineno=181;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			next_valid_char.__name__ = 'next_valid_char';

			next_valid_char.__bind_type__ = 0;
			next_valid_char.__args__ = [null,null,['s'],['pos']];
			$pyjs.track.lineno=183;
			quad_pos = $constant_int_0;
			$pyjs.track.lineno=184;
			leftbits = $constant_int_0;
			$pyjs.track.lineno=185;
			leftchar = $constant_int_0;
			$pyjs.track.lineno=186;
			res = $p['list']([]);
			$pyjs.track.lineno=187;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter4_iter = $p['enumerate'](s);
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				var $tupleassign3 = $p['__ass_unpack']($iter4_nextval, 2, null);
				i = $tupleassign3[0];
				c = $tupleassign3[1];
				$pyjs.track.lineno=188;
				if ((($bool15=((($bool12=$or1=((($cmp7=c)===($cmp8='\x7f')?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12.__nonzero__=='function'?
							$bool12.__nonzero__() :
							(typeof $bool12.__len__=='function'?
								($bool12.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((($bool13=$or2=$p['op_eq'](c, '\n')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or2:((($bool14=$or3=$p['op_eq'](c, '\r')) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14.__nonzero__=='function'?
							$bool14.__nonzero__() :
							(typeof $bool14.__len__=='function'?
								($bool14.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:$p['op_eq'](c, ' '))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					$pyjs.track.lineno=189;
					continue;
				}
				$pyjs.track.lineno=190;
				if ((($bool16=$p['op_eq'](c, '=')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					$pyjs.track.lineno=191;
					if ((($bool19=((($bool17=$or5=((($cmp9=quad_pos)===($cmp10=$constant_int_2)?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
						false :
						(typeof $bool17=='object'?
							(typeof $bool17.__nonzero__=='function'?
								$bool17.__nonzero__() :
								(typeof $bool17.__len__=='function'?
									($bool17.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or5:((($bool18=$and1=$p['op_eq'](quad_pos, $constant_int_2)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
						false :
						(typeof $bool18=='object'?
							(typeof $bool18.__nonzero__=='function'?
								$bool18.__nonzero__() :
								(typeof $bool18.__len__=='function'?
									($bool18.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?!$p['op_eq'](next_valid_char(s, i), '='):$and1))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
						$pyjs.track.lineno=192;
						continue;
					}
					else {
						$pyjs.track.lineno=194;
						leftbits = $constant_int_0;
						$pyjs.track.lineno=195;
						break;
					}
				}
				$pyjs.track.lineno=196;
				if ((($bool21=!(($bool20=$m['table_a2b_base64']['has_key'](c)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					$pyjs.track.lineno=197;
					continue;
				}
				$pyjs.track.lineno=198;
				next_c = (typeof ($33=$m['table_a2b_base64']).__array != 'undefined'?
					((typeof $33.__array[$34=c]) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__(c));
				$pyjs.track.lineno=199;
				quad_pos = $p['op_bitand2']((typeof ($add23=quad_pos)==typeof ($add24=$constant_int_1) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24)), $constant_int_3);
				$pyjs.track.lineno=200;
				leftchar = $p['op_bitor2']($p['op_bitshiftleft'](leftchar,$constant_int_6), next_c);
				$pyjs.track.lineno=201;
				leftbits = (typeof ($add25=leftbits)==typeof ($add26=$constant_int_6) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
				$pyjs.track.lineno=202;
				if ((($bool22=((((($cmp11=leftbits)===($cmp12=$constant_int_8)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					$pyjs.track.lineno=203;
					leftbits = (typeof ($sub17=leftbits)==typeof ($sub18=$constant_int_8) && (typeof $sub17=='number'||typeof $sub17=='string')?
						$sub17-$sub18:
						$p['op_sub']($sub17,$sub18));
					$pyjs.track.lineno=204;
					res['append']($p['op_bitand2']($p['op_bitshiftright'](leftchar,leftbits), $constant_int_255));
					$pyjs.track.lineno=205;
					leftchar = $p['op_bitand2'](leftchar, (typeof ($sub19=$p['op_bitshiftleft']($constant_int_1,leftbits))==typeof ($sub20=$constant_int_1) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						$p['op_sub']($sub19,$sub20)));
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=206;
			if ((($bool23=!$p['op_eq'](leftbits, $constant_int_0)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				$pyjs.track.lineno=207;
				$pyjs.__active_exception_stack__ = null;
				throw ($m['Error']('Incorrect padding'));
			}
			$pyjs.track.lineno=209;
			$pyjs.track.lineno=209;
			var $pyjs__ret = ''['join'](function(){
				var $iter5_nextval,i,$iter5_idx,$pyjs__trackstack_size_1,$collcomp3,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp3 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter5_iter = res;
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				$collcomp3['append']($p['chr'](i));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';

	return $collcomp3;}());
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['a2b_base64'].__name__ = 'a2b_base64';

		$m['a2b_base64'].__bind_type__ = 0;
		$m['a2b_base64'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=211;
		$m['table_b2a_base64'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		$pyjs.track.lineno=214;
		$m['b2a_base64'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $sub22,$sub23,$sub21,$sub24,$add42,$mod4,result,$mod3,$add35,$add29,$bool25,$add41,$add40,snippet,$bool26,$69,$68,$65,$64,$67,$66,$61,$$final,$63,$62,final_length,$add38,$add39,a,$70,b,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$60,$58,$59,length,$len5,triples_gen,$55,$56,$57;
			$pyjs.track={module:'binascii',lineno:214};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=214;
			$pyjs.track.lineno=215;
			length = (($len5=s) === null?$constant_int_0:
				(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
					(typeof $len5.__len__ == 'function'?$len5.__len__():
						(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
							$p['len']($len5)))));
			$pyjs.track.lineno=216;
			final_length = (typeof ($mod3=length)==typeof ($mod4=$constant_int_3) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4));
			$pyjs.track.lineno=218;
			triples_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $add28,$38,$39,$36,$37,$35,$add27,$bool24,$pyjs_try_err,iterlist,$43,$42,$41,$40,$46,$45,$44;
				$pyjs.track={module:'binascii',lineno:218};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=218;
				$pyjs.track.lineno=227;
				iterlist = $p['list']([]);
				$pyjs.track.lineno=228;
				while ((($bool24=s) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					$pyjs.track.lineno=229;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=230;
						iterlist['append']($p['tuple']([$p['ord']((typeof ($35=s).__array != 'undefined'?
							((typeof $35.__array[$36=$constant_int_0]) != 'undefined'?$35.__array[$36]:
								$35.__getitem__($36)):
								$35.__getitem__($constant_int_0))), $p['ord']((typeof ($37=s).__array != 'undefined'?
							((typeof $37.__array[$38=$constant_int_1]) != 'undefined'?$37.__array[$38]:
								$37.__getitem__($38)):
								$37.__getitem__($constant_int_1))), $p['ord']((typeof ($39=s).__array != 'undefined'?
							((typeof $39.__array[$40=$constant_int_2]) != 'undefined'?$39.__array[$40]:
								$39.__getitem__($40)):
								$39.__getitem__($constant_int_2)))]));
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
						$pyjs.track.module='binascii';
						if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
							$pyjs.track.lineno=232;
							s = (typeof ($add27=s)==typeof ($add28='\x00\x00') && (typeof $add27=='number'||typeof $add27=='string')?
								$add27+$add28:
								$p['op_add']($add27,$add28));
							$pyjs.track.lineno=233;
							iterlist['append']($p['tuple']([$p['ord']((typeof ($41=s).__array != 'undefined'?
								((typeof $41.__array[$42=$constant_int_0]) != 'undefined'?$41.__array[$42]:
									$41.__getitem__($42)):
									$41.__getitem__($constant_int_0))), $p['ord']((typeof ($43=s).__array != 'undefined'?
								((typeof $43.__array[$44=$constant_int_1]) != 'undefined'?$43.__array[$44]:
									$43.__getitem__($44)):
									$43.__getitem__($constant_int_1))), $p['ord']((typeof ($45=s).__array != 'undefined'?
								((typeof $45.__array[$46=$constant_int_2]) != 'undefined'?$45.__array[$46]:
									$45.__getitem__($46)):
									$45.__getitem__($constant_int_2)))]));
							$pyjs.track.lineno=234;
							$pyjs.track.lineno=234;
							var $pyjs__ret = iterlist;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.track.lineno=235;
					s = $p['__getslice'](s, $constant_int_3, null);
				}
				$pyjs.track.lineno=236;
				$pyjs.track.lineno=236;
				var $pyjs__ret = iterlist;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			triples_gen.__name__ = 'triples_gen';

			triples_gen.__bind_type__ = 0;
			triples_gen.__args__ = [null,null,['s']];
			$pyjs.track.lineno=238;
			a = triples_gen($p['__getslice'](s, 0, (typeof ($sub21=length)==typeof ($sub22=final_length) && (typeof $sub21=='number'||typeof $sub21=='string')?
				$sub21-$sub22:
				$p['op_sub']($sub21,$sub22))));
			$pyjs.track.lineno=240;
			result = function(){
				var A,C,B,$iter6_idx,$iter6_type,$54,$collcomp4,$49,$iter6_array,$48,$pyjs__trackstack_size_1,$50,$51,$iter6_iter,$53,$47,$52,$iter6_nextval;
	$collcomp4 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter6_iter = a;
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				var $tupleassign4 = $p['__ass_unpack']($iter6_nextval, 3, null);
				A = $tupleassign4[0];
				B = $tupleassign4[1];
				C = $tupleassign4[2];
				$collcomp4['append'](''['join']($p['list']([(typeof ($47=$m['table_b2a_base64']).__array != 'undefined'?
					((typeof $47.__array[$48=$p['op_bitand2']($p['op_bitshiftright'](A,$constant_int_2), $constant_int_63)]) != 'undefined'?$47.__array[$48]:
						$47.__getitem__($48)):
						$47.__getitem__($p['op_bitand2']($p['op_bitshiftright'](A,$constant_int_2), $constant_int_63))), (typeof ($49=$m['table_b2a_base64']).__array != 'undefined'?
					((typeof $49.__array[$50=$p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](A,$constant_int_4), $p['op_bitand2']($p['op_bitshiftright'](B,$constant_int_4), $constant_int_15)), $constant_int_63)]) != 'undefined'?$49.__array[$50]:
						$49.__getitem__($50)):
						$49.__getitem__($p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](A,$constant_int_4), $p['op_bitand2']($p['op_bitshiftright'](B,$constant_int_4), $constant_int_15)), $constant_int_63))), (typeof ($51=$m['table_b2a_base64']).__array != 'undefined'?
					((typeof $51.__array[$52=$p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](B,$constant_int_2), $p['op_bitand2']($p['op_bitshiftright'](C,$constant_int_6), $constant_int_3)), $constant_int_63)]) != 'undefined'?$51.__array[$52]:
						$51.__getitem__($52)):
						$51.__getitem__($p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](B,$constant_int_2), $p['op_bitand2']($p['op_bitshiftright'](C,$constant_int_6), $constant_int_3)), $constant_int_63))), (typeof ($53=$m['table_b2a_base64']).__array != 'undefined'?
					((typeof $53.__array[$54=$p['op_bitand2'](C, $constant_int_63)]) != 'undefined'?$53.__array[$54]:
						$53.__getitem__($54)):
						$53.__getitem__($p['op_bitand2'](C, $constant_int_63)))])));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';

	return $collcomp4;}();
			$pyjs.track.lineno=247;
			$$final = $p['__getslice'](s, (typeof ($sub23=length)==typeof ($sub24=final_length) && (typeof $sub23=='number'||typeof $sub23=='string')?
				$sub23-$sub24:
				$p['op_sub']($sub23,$sub24)), null);
			$pyjs.track.lineno=248;
			if ((($bool25=$p['op_eq'](final_length, $constant_int_0)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				$pyjs.track.lineno=249;
				snippet = '';
			}
			else if ((($bool26=$p['op_eq'](final_length, $constant_int_1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				$pyjs.track.lineno=251;
				a = $p['ord']((typeof ($55=$$final).__array != 'undefined'?
					((typeof $55.__array[$56=$constant_int_0]) != 'undefined'?$55.__array[$56]:
						$55.__getitem__($56)):
						$55.__getitem__($constant_int_0)));
				$pyjs.track.lineno=252;
				snippet = (typeof ($add31=(typeof ($add29=(typeof ($57=$m['table_b2a_base64']).__array != 'undefined'?
					((typeof $57.__array[$58=$p['op_bitand2']($p['op_bitshiftright'](a,$constant_int_2), $constant_int_63)]) != 'undefined'?$57.__array[$58]:
						$57.__getitem__($58)):
						$57.__getitem__($p['op_bitand2']($p['op_bitshiftright'](a,$constant_int_2), $constant_int_63))))==typeof ($add30=(typeof ($59=$m['table_b2a_base64']).__array != 'undefined'?
					((typeof $59.__array[$60=$p['op_bitand2']($p['op_bitshiftleft'](a,$constant_int_4), $constant_int_63)]) != 'undefined'?$59.__array[$60]:
						$59.__getitem__($60)):
						$59.__getitem__($p['op_bitand2']($p['op_bitshiftleft'](a,$constant_int_4), $constant_int_63)))) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$p['op_add']($add29,$add30)))==typeof ($add32='==') && (typeof $add31=='number'||typeof $add31=='string')?
					$add31+$add32:
					$p['op_add']($add31,$add32));
			}
			else {
				$pyjs.track.lineno=255;
				a = $p['ord']((typeof ($61=$$final).__array != 'undefined'?
					((typeof $61.__array[$62=$constant_int_0]) != 'undefined'?$61.__array[$62]:
						$61.__getitem__($62)):
						$61.__getitem__($constant_int_0)));
				$pyjs.track.lineno=256;
				b = $p['ord']((typeof ($63=$$final).__array != 'undefined'?
					((typeof $63.__array[$64=$constant_int_1]) != 'undefined'?$63.__array[$64]:
						$63.__getitem__($64)):
						$63.__getitem__($constant_int_1)));
				$pyjs.track.lineno=257;
				snippet = (typeof ($add37=(typeof ($add35=(typeof ($add33=(typeof ($65=$m['table_b2a_base64']).__array != 'undefined'?
					((typeof $65.__array[$66=$p['op_bitand2']($p['op_bitshiftright'](a,$constant_int_2), $constant_int_63)]) != 'undefined'?$65.__array[$66]:
						$65.__getitem__($66)):
						$65.__getitem__($p['op_bitand2']($p['op_bitshiftright'](a,$constant_int_2), $constant_int_63))))==typeof ($add34=(typeof ($67=$m['table_b2a_base64']).__array != 'undefined'?
					((typeof $67.__array[$68=$p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](a,$constant_int_4), $p['op_bitand2']($p['op_bitshiftright'](b,$constant_int_4), $constant_int_15)), $constant_int_63)]) != 'undefined'?$67.__array[$68]:
						$67.__getitem__($68)):
						$67.__getitem__($p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](a,$constant_int_4), $p['op_bitand2']($p['op_bitshiftright'](b,$constant_int_4), $constant_int_15)), $constant_int_63)))) && (typeof $add33=='number'||typeof $add33=='string')?
					$add33+$add34:
					$p['op_add']($add33,$add34)))==typeof ($add36=(typeof ($69=$m['table_b2a_base64']).__array != 'undefined'?
					((typeof $69.__array[$70=$p['op_bitand2']($p['op_bitshiftleft'](b,$constant_int_2), $constant_int_63)]) != 'undefined'?$69.__array[$70]:
						$69.__getitem__($70)):
						$69.__getitem__($p['op_bitand2']($p['op_bitshiftleft'](b,$constant_int_2), $constant_int_63)))) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					$p['op_add']($add35,$add36)))==typeof ($add38='=') && (typeof $add37=='number'||typeof $add37=='string')?
					$add37+$add38:
					$p['op_add']($add37,$add38));
			}
			$pyjs.track.lineno=260;
			$pyjs.track.lineno=260;
			var $pyjs__ret = (typeof ($add41=(typeof ($add39=''['join'](result))==typeof ($add40=snippet) && (typeof $add39=='number'||typeof $add39=='string')?
				$add39+$add40:
				$p['op_add']($add39,$add40)))==typeof ($add42='\n') && (typeof $add41=='number'||typeof $add41=='string')?
				$add41+$add42:
				$p['op_add']($add41,$add42));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b2a_base64'].__name__ = 'b2a_base64';

		$m['b2a_base64'].__bind_type__ = 0;
		$m['b2a_base64'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=262;
		$m['a2b_qp'] = function(s, header) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof header == 'undefined') header=arguments.callee.__args__[3][1];
			var ch,inp,$and5,$add57,$cmp20,$add53,$88,$82,$bool32,$add60,$add49,$bool33,$add47,$add46,$add45,$add44,$add43,$bool30,$bool27,$90,$add48,$86,$bool29,$bool28,$bool40,$and8,$add50,$or7,$84,$89,$add51,$87,$83,odata,$and3,$and4,$or8,$81,$80,$cmp15,$cmp14,$cmp17,$cmp16,$and6,$cmp13,$add54,$and7,$cmp19,$cmp18,$add55,$72,$73,$add52,$71,$76,$77,$74,$75,$85,$add59,$78,$79,$add58,$len6,$len7,$bool31,$bool36,$bool37,$bool34,$bool35,$add56,$bool38,$bool39,$len8,$len9;
			$pyjs.track={module:'binascii',lineno:262};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=262;
			$pyjs.track.lineno=263;
			inp = $constant_int_0;
			$pyjs.track.lineno=264;
			odata = $p['list']([]);
			$pyjs.track.lineno=265;
			while ((($bool27=((($cmp13=inp)===($cmp14=(($len6=s) === null?$constant_int_0:
				(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
					(typeof $len6.__len__ == 'function'?$len6.__len__():
						(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
							$p['len']($len6))))))?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				$pyjs.track.lineno=266;
				if ((($bool28=$p['op_eq']((typeof ($71=s).__array != 'undefined'?
					((typeof $71.__array[$72=inp]) != 'undefined'?$71.__array[$72]:
						$71.__getitem__($72)):
						$71.__getitem__(inp)), '=')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					$pyjs.track.lineno=267;
					inp = (typeof ($add43=inp)==typeof ($add44=$constant_int_1) && (typeof $add43=='number'||typeof $add43=='string')?
						$add43+$add44:
						$p['op_add']($add43,$add44));
					$pyjs.track.lineno=268;
					if ((($bool29=((((($cmp15=inp)===($cmp16=(($len7=s) === null?$constant_int_0:
						(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
							(typeof $len7.__len__ == 'function'?$len7.__len__():
								(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
									$p['len']($len7))))))?0:
						(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
							($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
							$p['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
						$pyjs.track.lineno=269;
						break;
					}
					$pyjs.track.lineno=271;
					if ((($bool31=((($bool30=$or7=$p['op_eq']((typeof ($73=s).__array != 'undefined'?
						((typeof $73.__array[$74=inp]) != 'undefined'?$73.__array[$74]:
							$73.__getitem__($74)):
							$73.__getitem__(inp)), '\n')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30.__nonzero__=='function'?
								$bool30.__nonzero__() :
								(typeof $bool30.__len__=='function'?
									($bool30.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or7:$p['op_eq']((typeof ($75=s).__array != 'undefined'?
						((typeof $75.__array[$76=inp]) != 'undefined'?$75.__array[$76]:
							$75.__getitem__($76)):
							$75.__getitem__(inp)), '\r'))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
						$pyjs.track.lineno=272;
						if ((($bool32=!$p['op_eq']((typeof ($77=s).__array != 'undefined'?
							((typeof $77.__array[$78=inp]) != 'undefined'?$77.__array[$78]:
								$77.__getitem__($78)):
								$77.__getitem__(inp)), '\n')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
							$pyjs.track.lineno=273;
							while ((($bool34=((($bool33=$and3=((($cmp17=inp)===($cmp18=(($len8=s) === null?$constant_int_0:
								(typeof $len8.__array != 'undefined' ? new $p['int']($len8.__array.length):
									(typeof $len8.__len__ == 'function'?$len8.__len__():
										(typeof $len8.length != 'undefined'? new $p['int']($len8.length):
											$p['len']($len8))))))?0:
								(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
									($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
									$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
								false :
								(typeof $bool33=='object'?
									(typeof $bool33.__nonzero__=='function'?
										$bool33.__nonzero__() :
										(typeof $bool33.__len__=='function'?
											($bool33.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )?!$p['op_eq']((typeof ($79=s).__array != 'undefined'?
								((typeof $79.__array[$80=inp]) != 'undefined'?$79.__array[$80]:
									$79.__getitem__($80)):
									$79.__getitem__(inp)), '\n'):$and3)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
								$pyjs.track.lineno=274;
								inp = (typeof ($add45=inp)==typeof ($add46=$constant_int_1) && (typeof $add45=='number'||typeof $add45=='string')?
									$add45+$add46:
									$p['op_add']($add45,$add46));
							}
						}
						$pyjs.track.lineno=275;
						if ((($bool35=((($cmp19=inp)===($cmp20=(($len9=s) === null?$constant_int_0:
							(typeof $len9.__array != 'undefined' ? new $p['int']($len9.__array.length):
								(typeof $len9.__len__ == 'function'?$len9.__len__():
									(typeof $len9.length != 'undefined'? new $p['int']($len9.length):
										$p['len']($len9))))))?0:
							(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
								($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
								$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
							$pyjs.track.lineno=276;
							inp = (typeof ($add47=inp)==typeof ($add48=$constant_int_1) && (typeof $add47=='number'||typeof $add47=='string')?
								$add47+$add48:
								$p['op_add']($add47,$add48));
						}
					}
					else if ((($bool36=$p['op_eq']((typeof ($81=s).__array != 'undefined'?
						((typeof $81.__array[$82=inp]) != 'undefined'?$81.__array[$82]:
							$81.__getitem__($82)):
							$81.__getitem__(inp)), '=')) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
						$pyjs.track.lineno=279;
						odata['append']('=');
						$pyjs.track.lineno=280;
						inp = (typeof ($add49=inp)==typeof ($add50=$constant_int_1) && (typeof $add49=='number'||typeof $add49=='string')?
							$add49+$add50:
							$p['op_add']($add49,$add50));
					}
					else if ((($bool38=((($bool37=$and5=(typeof hex_numbers == "undefined"?$m.hex_numbers:hex_numbers).__contains__((typeof ($83=s).__array != 'undefined'?
						((typeof $83.__array[$84=inp]) != 'undefined'?$83.__array[$84]:
							$83.__getitem__($84)):
							$83.__getitem__(inp)))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37.__nonzero__=='function'?
								$bool37.__nonzero__() :
								(typeof $bool37.__len__=='function'?
									($bool37.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(typeof hex_numbers == "undefined"?$m.hex_numbers:hex_numbers).__contains__((typeof ($85=s).__array != 'undefined'?
						((typeof $85.__array[$86=(typeof ($add51=inp)==typeof ($add52=$constant_int_1) && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52))]) != 'undefined'?$85.__array[$86]:
							$85.__getitem__($86)):
							$85.__getitem__((typeof ($add51=inp)==typeof ($add52=$constant_int_1) && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52))))):$and5)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
						$pyjs.track.lineno=282;
						ch = $p['chr']($p['int']($p['__getslice'](s, inp, (typeof ($add53=inp)==typeof ($add54=$constant_int_2) && (typeof $add53=='number'||typeof $add53=='string')?
							$add53+$add54:
							$p['op_add']($add53,$add54))), $constant_int_16));
						$pyjs.track.lineno=283;
						inp = (typeof ($add55=inp)==typeof ($add56=$constant_int_2) && (typeof $add55=='number'||typeof $add55=='string')?
							$add55+$add56:
							$p['op_add']($add55,$add56));
						$pyjs.track.lineno=284;
						odata['append'](ch);
					}
					else {
						$pyjs.track.lineno=286;
						odata['append']('=');
					}
				}
				else if ((($bool40=((($bool39=$and7=header) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
					false :
					(typeof $bool39=='object'?
						(typeof $bool39.__nonzero__=='function'?
							$bool39.__nonzero__() :
							(typeof $bool39.__len__=='function'?
								($bool39.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq']((typeof ($87=s).__array != 'undefined'?
					((typeof $87.__array[$88=inp]) != 'undefined'?$87.__array[$88]:
						$87.__getitem__($88)):
						$87.__getitem__(inp)), '_'):$and7)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
					$pyjs.track.lineno=288;
					odata['append'](' ');
					$pyjs.track.lineno=289;
					inp = (typeof ($add57=inp)==typeof ($add58=$constant_int_1) && (typeof $add57=='number'||typeof $add57=='string')?
						$add57+$add58:
						$p['op_add']($add57,$add58));
				}
				else {
					$pyjs.track.lineno=291;
					odata['append']((typeof ($89=s).__array != 'undefined'?
						((typeof $89.__array[$90=inp]) != 'undefined'?$89.__array[$90]:
							$89.__getitem__($90)):
							$89.__getitem__(inp)));
					$pyjs.track.lineno=292;
					inp = (typeof ($add59=inp)==typeof ($add60=$constant_int_1) && (typeof $add59=='number'||typeof $add59=='string')?
						$add59+$add60:
						$p['op_add']($add59,$add60));
				}
			}
			$pyjs.track.lineno=293;
			$pyjs.track.lineno=293;
			var $pyjs__ret = ''['join'](odata);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['a2b_qp'].__name__ = 'a2b_qp';

		$m['a2b_qp'].__bind_type__ = 0;
		$m['a2b_qp'].__args__ = [null,null,['s'],['header', false]];
		$pyjs.track.lineno=295;
		$m['b2a_qp'] = function(data, quotetabs, istext, header) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
			if (typeof quotetabs == 'undefined') quotetabs=arguments.callee.__args__[3][1];
			if (typeof istext == 'undefined') istext=arguments.callee.__args__[4][1];
			if (typeof header == 'undefined') header=arguments.callee.__args__[5][1];
			var $add89,$add88,$sub26,$sub25,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,$cmp21,$cmp22,$cmp23,$cmp24,$cmp25,$cmp26,$cmp27,$cmp28,$bool50,$and36,$99,lf,$bool82,$bool81,$bool80,$bool84,$cmp33,$and31,$or28,$and32,$or24,$or25,$or26,$and33,$or20,$or21,$or22,$or23,$and9,$105,$bool59,$and38,$and39,$cmp38,$and34,$cmp36,$cmp35,$cmp34,$and30,$cmp32,$cmp31,$cmp30,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,$and35,$and29,$and28,$cmp29,$and23,$and22,$and21,$and20,$and27,$and26,$and25,$and24,$add65,$add64,$add67,$add61,$add63,$add62,$add69,$add68,$and37,linelen,$bool47,$bool46,$bool45,$bool44,$bool43,$bool42,$bool41,$add90,$bool49,$bool48,crlf,$len10,$len11,$len12,$len13,$len14,$len15,$and11,$bool54,$bool55,$bool56,$bool57,$98,$bool51,$bool52,$bool53,$94,$95,$96,$97,$bool58,$91,$92,$93,$bool83,$bool61,$bool60,$bool63,$bool62,$bool65,$bool64,$bool67,$bool66,$bool69,$bool68,odata,c,$or27,$cmp37,$or15,$or14,$or17,$or16,$or11,$or10,$or13,$or12,$or19,$or18,$bool78,$bool79,$bool76,$bool77,$bool74,$bool75,inp,$bool73,$bool70,$bool71,ch,$101,$100,$103,$102,MAXLINESIZE,$104,$107,$106,$108,$or9,$and12,$and13,$and10,$add66,$and16,$and17,$and14,$and15,$and18,$and19,$bool72;
			$pyjs.track={module:'binascii',lineno:295};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=295;
			$pyjs.track.lineno=302;
			MAXLINESIZE = $constant_int_76;
			$pyjs.track.lineno=305;
			lf = data['find']('\n');
			$pyjs.track.lineno=306;
			crlf = ((($bool41=$and9=((($cmp21=lf)===($cmp22=$constant_int_0)?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))) == 1)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
				false :
				(typeof $bool41=='object'?
					(typeof $bool41.__nonzero__=='function'?
						$bool41.__nonzero__() :
						(typeof $bool41.__len__=='function'?
							($bool41.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['op_eq']((typeof ($91=data).__array != 'undefined'?
				((typeof $91.__array[$92=(typeof ($sub25=lf)==typeof ($sub26=$constant_int_1) && (typeof $sub25=='number'||typeof $sub25=='string')?
				$sub25-$sub26:
				$p['op_sub']($sub25,$sub26))]) != 'undefined'?$91.__array[$92]:
					$91.__getitem__($92)):
					$91.__getitem__((typeof ($sub25=lf)==typeof ($sub26=$constant_int_1) && (typeof $sub25=='number'||typeof $sub25=='string')?
				$sub25-$sub26:
				$p['op_sub']($sub25,$sub26)))), '\r'):$and9);
			$pyjs.track.lineno=308;
			inp = $constant_int_0;
			$pyjs.track.lineno=309;
			linelen = $constant_int_0;
			$pyjs.track.lineno=310;
			odata = $p['list']([]);
			$pyjs.track.lineno=311;
			while ((($bool42=((($cmp23=inp)===($cmp24=(($len10=data) === null?$constant_int_0:
				(typeof $len10.__array != 'undefined' ? new $p['int']($len10.__array.length):
					(typeof $len10.__len__ == 'function'?$len10.__len__():
						(typeof $len10.length != 'undefined'? new $p['int']($len10.length):
							$p['len']($len10))))))?0:
				(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
					($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
					$p['cmp']($cmp23, $cmp24))) == -1)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
				$pyjs.track.lineno=312;
				c = (typeof ($93=data).__array != 'undefined'?
					((typeof $93.__array[$94=inp]) != 'undefined'?$93.__array[$94]:
						$93.__getitem__($94)):
						$93.__getitem__(inp));
				$pyjs.track.lineno=313;
				if ((($bool66=((($bool53=$or16=((($cmp25=c)===($cmp26='~')?0:
					(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
						($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
						$p['cmp']($cmp25, $cmp26))) == 1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53.__nonzero__=='function'?
							$bool53.__nonzero__() :
							(typeof $bool53.__len__=='function'?
								($bool53.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or16:((($bool54=$or17=$p['op_eq'](c, '=')) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
					false :
					(typeof $bool54=='object'?
						(typeof $bool54.__nonzero__=='function'?
							$bool54.__nonzero__() :
							(typeof $bool54.__len__=='function'?
								($bool54.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or17:((($bool55=$or18=((($bool43=$and11=header) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43.__nonzero__=='function'?
							$bool43.__nonzero__() :
							(typeof $bool43.__len__=='function'?
								($bool43.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq'](c, '_'):$and11)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55.__nonzero__=='function'?
							$bool55.__nonzero__() :
							(typeof $bool55.__len__=='function'?
								($bool55.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or18:((($bool56=$or19=((($bool44=$and13=$p['op_eq'](c, '.')) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44.__nonzero__=='function'?
							$bool44.__nonzero__() :
							(typeof $bool44.__len__=='function'?
								($bool44.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool45=$and14=$p['op_eq'](linelen, $constant_int_0)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool46=$or9=$p['op_eq'](inp, (($len11=data) === null?$constant_int_0:
					(typeof $len11.__array != 'undefined' ? new $p['int']($len11.__array.length):
						(typeof $len11.__len__ == 'function'?$len11.__len__():
							(typeof $len11.length != 'undefined'? new $p['int']($len11.length):
								$p['len']($len11))))))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46.__nonzero__=='function'?
							$bool46.__nonzero__() :
							(typeof $bool46.__len__=='function'?
								($bool46.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or9:((($bool47=$or10=$p['op_eq']((typeof ($95=data).__array != 'undefined'?
					((typeof $95.__array[$96=(typeof ($add61=inp)==typeof ($add62=$constant_int_1) && (typeof $add61=='number'||typeof $add61=='string')?
					$add61+$add62:
					$p['op_add']($add61,$add62))]) != 'undefined'?$95.__array[$96]:
						$95.__getitem__($96)):
						$95.__getitem__((typeof ($add61=inp)==typeof ($add62=$constant_int_1) && (typeof $add61=='number'||typeof $add61=='string')?
					$add61+$add62:
					$p['op_add']($add61,$add62)))), '\n')) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
					false :
					(typeof $bool47=='object'?
						(typeof $bool47.__nonzero__=='function'?
							$bool47.__nonzero__() :
							(typeof $bool47.__len__=='function'?
								($bool47.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or10:$p['op_eq']((typeof ($97=data).__array != 'undefined'?
					((typeof $97.__array[$98=(typeof ($add63=inp)==typeof ($add64=$constant_int_1) && (typeof $add63=='number'||typeof $add63=='string')?
					$add63+$add64:
					$p['op_add']($add63,$add64))]) != 'undefined'?$97.__array[$98]:
						$97.__getitem__($98)):
						$97.__getitem__((typeof ($add63=inp)==typeof ($add64=$constant_int_1) && (typeof $add63=='number'||typeof $add63=='string')?
					$add63+$add64:
					$p['op_add']($add63,$add64)))), '\r'))):$and14):$and13)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56.__nonzero__=='function'?
							$bool56.__nonzero__() :
							(typeof $bool56.__len__=='function'?
								($bool56.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or19:((($bool57=$or20=((($bool49=$and16=!(($bool48=istext) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48.__nonzero__=='function'?
							$bool48.__nonzero__() :
							(typeof $bool48.__len__=='function'?
								($bool48.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49.__nonzero__=='function'?
							$bool49.__nonzero__() :
							(typeof $bool49.__len__=='function'?
								($bool49.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool50=$or12=$p['op_eq'](c, '\r')) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50.__nonzero__=='function'?
							$bool50.__nonzero__() :
							(typeof $bool50.__len__=='function'?
								($bool50.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or12:$p['op_eq'](c, '\n')):$and16)) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57.__nonzero__=='function'?
							$bool57.__nonzero__() :
							(typeof $bool57.__len__=='function'?
								($bool57.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or20:((($bool58=$or21=((($bool52=$and18=((($bool51=$or14=$p['op_eq'](c, '\t')) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
					false :
					(typeof $bool51=='object'?
						(typeof $bool51.__nonzero__=='function'?
							$bool51.__nonzero__() :
							(typeof $bool51.__len__=='function'?
								($bool51.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or14:$p['op_eq'](c, ' '))) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52.__nonzero__=='function'?
							$bool52.__nonzero__() :
							(typeof $bool52.__len__=='function'?
								($bool52.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['op_eq']((typeof ($add65=inp)==typeof ($add66=$constant_int_1) && (typeof $add65=='number'||typeof $add65=='string')?
					$add65+$add66:
					$p['op_add']($add65,$add66)), (($len12=data) === null?$constant_int_0:
					(typeof $len12.__array != 'undefined' ? new $p['int']($len12.__array.length):
						(typeof $len12.__len__ == 'function'?$len12.__len__():
							(typeof $len12.length != 'undefined'? new $p['int']($len12.length):
								$p['len']($len12)))))):$and18)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58.__nonzero__=='function'?
							$bool58.__nonzero__() :
							(typeof $bool58.__len__=='function'?
								($bool58.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or21:((($bool59=$and20=((($cmp27=c)===($cmp28=' ')?0:
					(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
						($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
						$p['cmp']($cmp27, $cmp28))) < 1)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59.__nonzero__=='function'?
							$bool59.__nonzero__() :
							(typeof $bool59.__len__=='function'?
								($bool59.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool60=$and21=!$p['op_eq'](c, '\r')) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
					false :
					(typeof $bool60=='object'?
						(typeof $bool60.__nonzero__=='function'?
							$bool60.__nonzero__() :
							(typeof $bool60.__len__=='function'?
								($bool60.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool61=$and22=!$p['op_eq'](c, '\n')) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61.__nonzero__=='function'?
							$bool61.__nonzero__() :
							(typeof $bool61.__len__=='function'?
								($bool61.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool62=$or23=quotetabs) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
					false :
					(typeof $bool62=='object'?
						(typeof $bool62.__nonzero__=='function'?
							$bool62.__nonzero__() :
							(typeof $bool62.__len__=='function'?
								($bool62.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or23:((($bool64=$and24=!(($bool63=quotetabs) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
					false :
					(typeof $bool63=='object'?
						(typeof $bool63.__nonzero__=='function'?
							$bool63.__nonzero__() :
							(typeof $bool63.__len__=='function'?
								($bool63.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
					false :
					(typeof $bool64=='object'?
						(typeof $bool64.__nonzero__=='function'?
							$bool64.__nonzero__() :
							(typeof $bool64.__len__=='function'?
								($bool64.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool65=$and26=!$p['op_eq'](c, '\t')) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
					false :
					(typeof $bool65=='object'?
						(typeof $bool65.__nonzero__=='function'?
							$bool65.__nonzero__() :
							(typeof $bool65.__len__=='function'?
								($bool65.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!$p['op_eq'](c, ' '):$and26):$and24)):$and22):$and21):$and20)))))))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
					$pyjs.track.lineno=323;
					linelen = (typeof ($add67=linelen)==typeof ($add68=$constant_int_3) && (typeof $add67=='number'||typeof $add67=='string')?
						$add67+$add68:
						$p['op_add']($add67,$add68));
					$pyjs.track.lineno=324;
					if ((($bool67=((((($cmp29=linelen)===($cmp30=MAXLINESIZE)?0:
						(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
							($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
							$p['cmp']($cmp29, $cmp30))))|1) == 1)) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
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
						$pyjs.track.lineno=325;
						odata['append']('=');
						$pyjs.track.lineno=326;
						if ((($bool68=crlf) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
								false :
								(typeof $bool68=='object'?
									(typeof $bool68.__nonzero__=='function'?
										$bool68.__nonzero__() :
										(typeof $bool68.__len__=='function'?
											($bool68.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=326;
							odata['append']('\r');
						}
						$pyjs.track.lineno=327;
						odata['append']('\n');
						$pyjs.track.lineno=328;
						linelen = $constant_int_3;
					}
					$pyjs.track.lineno=329;
					odata['append']((typeof ($add69='=')==typeof ($add70=(typeof two_hex_digits == "undefined"?$m.two_hex_digits:two_hex_digits)($p['ord'](c))) && (typeof $add69=='number'||typeof $add69=='string')?
						$add69+$add70:
						$p['op_add']($add69,$add70)));
					$pyjs.track.lineno=330;
					inp = (typeof ($add71=inp)==typeof ($add72=$constant_int_1) && (typeof $add71=='number'||typeof $add71=='string')?
						$add71+$add72:
						$p['op_add']($add71,$add72));
				}
				else {
					$pyjs.track.lineno=332;
					if ((($bool73=((($bool69=$and28=istext) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
						false :
						(typeof $bool69=='object'?
							(typeof $bool69.__nonzero__=='function'?
								$bool69.__nonzero__() :
								(typeof $bool69.__len__=='function'?
									($bool69.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool70=$or25=$p['op_eq'](c, '\n')) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
						false :
						(typeof $bool70=='object'?
							(typeof $bool70.__nonzero__=='function'?
								$bool70.__nonzero__() :
								(typeof $bool70.__len__=='function'?
									($bool70.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or25:((($bool71=$and30=((($cmp31=(typeof ($add73=inp)==typeof ($add74=$constant_int_1) && (typeof $add73=='number'||typeof $add73=='string')?
						$add73+$add74:
						$p['op_add']($add73,$add74)))===($cmp32=(($len13=data) === null?$constant_int_0:
						(typeof $len13.__array != 'undefined' ? new $p['int']($len13.__array.length):
							(typeof $len13.__len__ == 'function'?$len13.__len__():
								(typeof $len13.length != 'undefined'? new $p['int']($len13.length):
									$p['len']($len13))))))?0:
						(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
							($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
							$p['cmp']($cmp31, $cmp32))) == -1)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
						false :
						(typeof $bool71=='object'?
							(typeof $bool71.__nonzero__=='function'?
								$bool71.__nonzero__() :
								(typeof $bool71.__len__=='function'?
									($bool71.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool72=$and31=$p['op_eq'](c, '\r')) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
						false :
						(typeof $bool72=='object'?
							(typeof $bool72.__nonzero__=='function'?
								$bool72.__nonzero__() :
								(typeof $bool72.__len__=='function'?
									($bool72.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['op_eq']((typeof ($99=data).__array != 'undefined'?
						((typeof $99.__array[$100=(typeof ($add75=inp)==typeof ($add76=$constant_int_1) && (typeof $add75=='number'||typeof $add75=='string')?
						$add75+$add76:
						$p['op_add']($add75,$add76))]) != 'undefined'?$99.__array[$100]:
							$99.__getitem__($100)):
							$99.__getitem__((typeof ($add75=inp)==typeof ($add76=$constant_int_1) && (typeof $add75=='number'||typeof $add75=='string')?
						$add75+$add76:
						$p['op_add']($add75,$add76)))), '\n'):$and31):$and30)):$and28)) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
							false :
							(typeof $bool73=='object'?
								(typeof $bool73.__nonzero__=='function'?
									$bool73.__nonzero__() :
									(typeof $bool73.__len__=='function'?
										($bool73.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=335;
						linelen = $constant_int_0;
						$pyjs.track.lineno=337;
						if ((($bool76=((($bool74=$and33=((($cmp33=(($len14=odata) === null?$constant_int_0:
							(typeof $len14.__array != 'undefined' ? new $p['int']($len14.__array.length):
								(typeof $len14.__len__ == 'function'?$len14.__len__():
									(typeof $len14.length != 'undefined'? new $p['int']($len14.length):
										$p['len']($len14))))))===($cmp34=$constant_int_0)?0:
							(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
								($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
								$p['cmp']($cmp33, $cmp34))) == 1)) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
							false :
							(typeof $bool74=='object'?
								(typeof $bool74.__nonzero__=='function'?
									$bool74.__nonzero__() :
									(typeof $bool74.__len__=='function'?
										($bool74.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool75=$or27=$p['op_eq']((typeof ($101=odata).__array != 'undefined'?
							((typeof $101.__array[$102=(typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1))]) != 'undefined'?$101.__array[$102]:
								$101.__getitem__($102)):
								$101.__getitem__((typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1)))), ' ')) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
							false :
							(typeof $bool75=='object'?
								(typeof $bool75.__nonzero__=='function'?
									$bool75.__nonzero__() :
									(typeof $bool75.__len__=='function'?
										($bool75.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or27:$p['op_eq']((typeof ($103=odata).__array != 'undefined'?
							((typeof $103.__array[$104=(typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))]) != 'undefined'?$103.__array[$104]:
								$103.__getitem__($104)):
								$103.__getitem__((typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2)))), '\t')):$and33)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
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
							$pyjs.track.lineno=339;
							ch = $p['ord']((typeof ($105=odata).__array != 'undefined'?
								((typeof $105.__array[$106=(typeof ($usub3=$constant_int_1)=='number'?
								-$usub3:
								$p['op_usub']($usub3))]) != 'undefined'?$105.__array[$106]:
									$105.__getitem__($106)):
									$105.__getitem__((typeof ($usub3=$constant_int_1)=='number'?
								-$usub3:
								$p['op_usub']($usub3)))));
							$pyjs.track.lineno=340;
							odata.__setitem__((typeof ($usub4=$constant_int_1)=='number'?
								-$usub4:
								$p['op_usub']($usub4)), '=');
							$pyjs.track.lineno=341;
							odata['append']((typeof two_hex_digits == "undefined"?$m.two_hex_digits:two_hex_digits)(ch));
						}
						$pyjs.track.lineno=343;
						if ((($bool77=crlf) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
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
							$pyjs.track.lineno=343;
							odata['append']('\r');
						}
						$pyjs.track.lineno=344;
						odata['append']('\n');
						$pyjs.track.lineno=345;
						if ((($bool78=$p['op_eq'](c, '\r')) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
								false :
								(typeof $bool78=='object'?
									(typeof $bool78.__nonzero__=='function'?
										$bool78.__nonzero__() :
										(typeof $bool78.__len__=='function'?
											($bool78.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=346;
							inp = (typeof ($add77=inp)==typeof ($add78=$constant_int_2) && (typeof $add77=='number'||typeof $add77=='string')?
								$add77+$add78:
								$p['op_add']($add77,$add78));
						}
						else {
							$pyjs.track.lineno=348;
							inp = (typeof ($add79=inp)==typeof ($add80=$constant_int_1) && (typeof $add79=='number'||typeof $add79=='string')?
								$add79+$add80:
								$p['op_add']($add79,$add80));
						}
					}
					else {
						$pyjs.track.lineno=350;
						if ((($bool81=((($bool79=$and35=((($cmp35=(typeof ($add81=inp)==typeof ($add82=$constant_int_1) && (typeof $add81=='number'||typeof $add81=='string')?
							$add81+$add82:
							$p['op_add']($add81,$add82)))===($cmp36=(($len15=data) === null?$constant_int_0:
							(typeof $len15.__array != 'undefined' ? new $p['int']($len15.__array.length):
								(typeof $len15.__len__ == 'function'?$len15.__len__():
									(typeof $len15.length != 'undefined'? new $p['int']($len15.length):
										$p['len']($len15))))))?0:
							(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
								($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
								$p['cmp']($cmp35, $cmp36))) == -1)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
							false :
							(typeof $bool79=='object'?
								(typeof $bool79.__nonzero__=='function'?
									$bool79.__nonzero__() :
									(typeof $bool79.__len__=='function'?
										($bool79.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((($bool80=$and36=!$p['op_eq']((typeof ($107=data).__array != 'undefined'?
							((typeof $107.__array[$108=(typeof ($add83=inp)==typeof ($add84=$constant_int_1) && (typeof $add83=='number'||typeof $add83=='string')?
							$add83+$add84:
							$p['op_add']($add83,$add84))]) != 'undefined'?$107.__array[$108]:
								$107.__getitem__($108)):
								$107.__getitem__((typeof ($add83=inp)==typeof ($add84=$constant_int_1) && (typeof $add83=='number'||typeof $add83=='string')?
							$add83+$add84:
							$p['op_add']($add83,$add84)))), '\n')) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
							false :
							(typeof $bool80=='object'?
								(typeof $bool80.__nonzero__=='function'?
									$bool80.__nonzero__() :
									(typeof $bool80.__len__=='function'?
										($bool80.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?((((($cmp37=(typeof ($add85=linelen)==typeof ($add86=$constant_int_1) && (typeof $add85=='number'||typeof $add85=='string')?
							$add85+$add86:
							$p['op_add']($add85,$add86)))===($cmp38=MAXLINESIZE)?0:
							(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
								($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
								$p['cmp']($cmp37, $cmp38))))|1) == 1):$and36):$and35)) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
								false :
								(typeof $bool81=='object'?
									(typeof $bool81.__nonzero__=='function'?
										$bool81.__nonzero__() :
										(typeof $bool81.__len__=='function'?
											($bool81.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=353;
							odata['append']('=');
							$pyjs.track.lineno=354;
							if ((($bool82=crlf) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
									false :
									(typeof $bool82=='object'?
										(typeof $bool82.__nonzero__=='function'?
											$bool82.__nonzero__() :
											(typeof $bool82.__len__=='function'?
												($bool82.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								$pyjs.track.lineno=354;
								odata['append']('\r');
							}
							$pyjs.track.lineno=355;
							odata['append']('\n');
							$pyjs.track.lineno=356;
							linelen = $constant_int_0;
						}
						$pyjs.track.lineno=358;
						linelen = (typeof ($add87=linelen)==typeof ($add88=$constant_int_1) && (typeof $add87=='number'||typeof $add87=='string')?
							$add87+$add88:
							$p['op_add']($add87,$add88));
						$pyjs.track.lineno=359;
						if ((($bool84=((($bool83=$and38=header) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
							false :
							(typeof $bool83=='object'?
								(typeof $bool83.__nonzero__=='function'?
									$bool83.__nonzero__() :
									(typeof $bool83.__len__=='function'?
										($bool83.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$p['op_eq'](c, ' '):$and38)) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
								false :
								(typeof $bool84=='object'?
									(typeof $bool84.__nonzero__=='function'?
										$bool84.__nonzero__() :
										(typeof $bool84.__len__=='function'?
											($bool84.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=360;
							c = '_';
						}
						$pyjs.track.lineno=361;
						odata['append'](c);
						$pyjs.track.lineno=362;
						inp = (typeof ($add89=inp)==typeof ($add90=$constant_int_1) && (typeof $add89=='number'||typeof $add89=='string')?
							$add89+$add90:
							$p['op_add']($add89,$add90));
					}
				}
			}
			$pyjs.track.lineno=363;
			$pyjs.track.lineno=363;
			var $pyjs__ret = ''['join'](odata);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b2a_qp'].__name__ = 'b2a_qp';

		$m['b2a_qp'].__bind_type__ = 0;
		$m['b2a_qp'].__args__ = [null,null,['data'],['quotetabs', false],['istext', true],['header', false]];
		$pyjs.track.lineno=365;
		$m['hex_numbers'] = '0123456789ABCDEF';
		$pyjs.track.lineno=366;
		$m['hex'] = function(n) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var arr,$iter7_type,$bool86,$bool85,$109,$iter7_iter,hex_gen,nibble,$add91,$add92,sign,$add94,$add93,$cmp39,$iter7_idx,$110,$cmp40,$pyjs__trackstack_size_1,$iter7_nextval,$iter7_array;
			$pyjs.track={module:'binascii',lineno:366};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=366;
			$pyjs.track.lineno=367;
			if ((($bool85=$p['op_eq'](n, $constant_int_0)) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
					false :
					(typeof $bool85=='object'?
						(typeof $bool85.__nonzero__=='function'?
							$bool85.__nonzero__() :
							(typeof $bool85.__len__=='function'?
								($bool85.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=368;
				$pyjs.track.lineno=368;
				var $pyjs__ret = '0';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=370;
			if ((($bool86=((($cmp39=n)===($cmp40=$constant_int_0)?0:
				(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
					($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
					$p['cmp']($cmp39, $cmp40))) == -1)) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
					false :
					(typeof $bool86=='object'?
						(typeof $bool86.__nonzero__=='function'?
							$bool86.__nonzero__() :
							(typeof $bool86.__len__=='function'?
								($bool86.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=371;
				n = (typeof ($usub5=n)=='number'?
					-$usub5:
					$p['op_usub']($usub5));
				$pyjs.track.lineno=372;
				sign = '-';
			}
			else {
				$pyjs.track.lineno=374;
				sign = '';
			}
			$pyjs.track.lineno=375;
			arr = $p['list']([]);
			$pyjs.track.lineno=377;
			hex_gen = function(n) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $bool87,$mod5,$mod6,iterlist,$div2,$div1;
				$pyjs.track={module:'binascii',lineno:377};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=377;
				$pyjs.track.lineno=382;
				iterlist = $p['list']([]);
				$pyjs.track.lineno=383;
				while ((($bool87=n) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
						false :
						(typeof $bool87=='object'?
							(typeof $bool87.__nonzero__=='function'?
								$bool87.__nonzero__() :
								(typeof $bool87.__len__=='function'?
									($bool87.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=384;
					iterlist['append']((typeof ($mod5=n)==typeof ($mod6=$constant_int_16) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6)));
					$pyjs.track.lineno=385;
					n = (typeof ($div1=n)==typeof ($div2=$constant_int_16) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
				}
				$pyjs.track.lineno=386;
				$pyjs.track.lineno=386;
				var $pyjs__ret = iterlist;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			hex_gen.__name__ = 'hex_gen';

			hex_gen.__bind_type__ = 0;
			hex_gen.__args__ = [null,null,['n']];
			$pyjs.track.lineno=388;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter7_iter = hex_gen(n);
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				nibble = $iter7_nextval;
				$pyjs.track.lineno=389;
				arr = (typeof ($add91=$p['list']([(typeof ($109=$m['hex_numbers']).__array != 'undefined'?
					((typeof $109.__array[$110=nibble]) != 'undefined'?$109.__array[$110]:
						$109.__getitem__($110)):
						$109.__getitem__(nibble))]))==typeof ($add92=arr) && (typeof $add91=='number'||typeof $add91=='string')?
					$add91+$add92:
					$p['op_add']($add91,$add92));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=390;
			$pyjs.track.lineno=390;
			var $pyjs__ret = (typeof ($add93=sign)==typeof ($add94=''['join'](arr)) && (typeof $add93=='number'||typeof $add93=='string')?
				$add93+$add94:
				$p['op_add']($add93,$add94));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['hex'].__name__ = 'hex';

		$m['hex'].__bind_type__ = 0;
		$m['hex'].__args__ = [null,null,['n']];
		$pyjs.track.lineno=392;
		$m['two_hex_digits'] = function(n) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $114,$112,$113,$111,$add95,$add96,$mod7,$div3,$mod8,$div4;
			$pyjs.track={module:'binascii',lineno:392};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=392;
			$pyjs.track.lineno=393;
			$pyjs.track.lineno=393;
			var $pyjs__ret = (typeof ($add95=(typeof ($111=$m['hex_numbers']).__array != 'undefined'?
				((typeof $111.__array[$112=(typeof ($div3=n)==typeof ($div4=$constant_int_16) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))]) != 'undefined'?$111.__array[$112]:
					$111.__getitem__($112)):
					$111.__getitem__((typeof ($div3=n)==typeof ($div4=$constant_int_16) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)))))==typeof ($add96=(typeof ($113=$m['hex_numbers']).__array != 'undefined'?
				((typeof $113.__array[$114=(typeof ($mod7=n)==typeof ($mod8=$constant_int_16) && typeof $mod7=='number'?
				(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
				$p['op_mod']($mod7,$mod8))]) != 'undefined'?$113.__array[$114]:
					$113.__getitem__($114)):
					$113.__getitem__((typeof ($mod7=n)==typeof ($mod8=$constant_int_16) && typeof $mod7=='number'?
				(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
				$p['op_mod']($mod7,$mod8))))) && (typeof $add95=='number'||typeof $add95=='string')?
				$add95+$add96:
				$p['op_add']($add95,$add96));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['two_hex_digits'].__name__ = 'two_hex_digits';

		$m['two_hex_digits'].__bind_type__ = 0;
		$m['two_hex_digits'].__args__ = [null,null,['n']];
		$pyjs.track.lineno=396;
		$m['strhex_to_int'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var c,$iter8_idx,i,$iter8_type,$add97,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$add98,$mul4,$mul3;
			$pyjs.track={module:'binascii',lineno:396};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=396;
			$pyjs.track.lineno=397;
			i = $constant_int_0;
			$pyjs.track.lineno=398;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter8_iter = s;
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				c = $iter8_nextval;
				$pyjs.track.lineno=399;
				i = (typeof ($add97=(typeof ($mul3=i)==typeof ($mul4=$constant_int_16) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($add98=$m['hex_numbers']['index'](c)) && (typeof $add97=='number'||typeof $add97=='string')?
					$add97+$add98:
					$p['op_add']($add97,$add98));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=400;
			$pyjs.track.lineno=400;
			var $pyjs__ret = i;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['strhex_to_int'].__name__ = 'strhex_to_int';

		$m['strhex_to_int'].__bind_type__ = 0;
		$m['strhex_to_int'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=402;
		$m['hqx_encoding'] = '!"#$%&\'()*+,-012345689@ABCDEFGHIJKLMNPQRSTUVXYZ[`abcdefhijklmpqr';
		$pyjs.track.lineno=404;
		$m['DONE'] = $constant_int_127;
		$pyjs.track.lineno=405;
		$m['SKIP'] = $constant_int_126;
		$pyjs.track.lineno=406;
		$m['FAIL'] = $constant_int_125;
		$pyjs.track.lineno=408;
		$m['table_a2b_hqx'] = $p['list']([$m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['SKIP'], $m['FAIL'], $m['FAIL'], $m['SKIP'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7, $constant_int_8, $constant_int_9, $constant_int_10, $constant_int_11, $constant_int_12, $m['FAIL'], $m['FAIL'], $constant_int_13, $constant_int_14, $constant_int_15, $constant_int_16, $constant_int_17, $constant_int_18, $constant_int_19, $m['FAIL'], $constant_int_20, $constant_int_21, $m['DONE'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $constant_int_22, $constant_int_23, $constant_int_24, $constant_int_25, $constant_int_26, $constant_int_27, $constant_int_28, $constant_int_29, $constant_int_30, $constant_int_31, $constant_int_32, $constant_int_33, $constant_int_34, $constant_int_35, $constant_int_36, $m['FAIL'], $constant_int_37, $constant_int_38, $constant_int_39, $constant_int_40, $constant_int_41, $constant_int_42, $constant_int_43, $m['FAIL'], $constant_int_44, $constant_int_45, $constant_int_46, $constant_int_47, $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $constant_int_48, $constant_int_49, $constant_int_50, $constant_int_51, $constant_int_52, $constant_int_53, $constant_int_54, $m['FAIL'], $constant_int_55, $constant_int_56, $constant_int_57, $constant_int_58, $constant_int_59, $constant_int_60, $m['FAIL'], $m['FAIL'], $constant_int_61, $constant_int_62, $constant_int_63, $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL']]);
		$pyjs.track.lineno=459;
		$m['a2b_hqx'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $117,$iter10_nextval,$118,quadruples_gen,$138,$139,$140,done,result,$130,$131,$iter10_iter,$133,$134,$132,$136,$137,$120,$iter10_idx,$135,snippet,$pyjs_try_err,iterlist,$129,$128,$123,$122,$121,$119,$127,$126,$125,$124,$bool92,$bool93,$bool94,$len17,$iter10_array,length,$pyjs__trackstack_size_2,$iter10_type;
			$pyjs.track={module:'binascii',lineno:459};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=459;
			$pyjs.track.lineno=460;
			result = $p['list']([]);
			$pyjs.track.lineno=462;
			quadruples_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $116,$bool90,c,$115,$len16,$iter9_iter,res,$bool89,$bool88,$iter9_nextval,$iter9_idx,$iter9_array,t,iterlist,$pyjs__trackstack_size_1,$iter9_type,$bool91;
				$pyjs.track={module:'binascii',lineno:462};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=462;
				$pyjs.track.lineno=463;
				t = $p['list']([]);
				$pyjs.track.lineno=479;
				iterlist = $p['list']([]);
				$pyjs.track.lineno=480;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter9_iter = s;
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					c = $iter9_nextval;
					$pyjs.track.lineno=481;
					res = (typeof ($115=$m['table_a2b_hqx']).__array != 'undefined'?
						((typeof $115.__array[$116=$p['ord'](c)]) != 'undefined'?$115.__array[$116]:
							$115.__getitem__($116)):
							$115.__getitem__($p['ord'](c)));
					$pyjs.track.lineno=482;
					if ((($bool88=$p['op_eq'](res, $m['SKIP'])) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
							false :
							(typeof $bool88=='object'?
								(typeof $bool88.__nonzero__=='function'?
									$bool88.__nonzero__() :
									(typeof $bool88.__len__=='function'?
										($bool88.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=483;
						continue;
					}
					else if ((($bool89=$p['op_eq'](res, $m['FAIL'])) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
							false :
							(typeof $bool89=='object'?
								(typeof $bool89.__nonzero__=='function'?
									$bool89.__nonzero__() :
									(typeof $bool89.__len__=='function'?
										($bool89.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=485;
						$pyjs.__active_exception_stack__ = null;
						throw ($m['Error']('Illegal character'));
					}
					else if ((($bool90=$p['op_eq'](res, $m['DONE'])) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
							false :
							(typeof $bool90=='object'?
								(typeof $bool90.__nonzero__=='function'?
									$bool90.__nonzero__() :
									(typeof $bool90.__len__=='function'?
										($bool90.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=487;
						iterlist['append'](t);
						$pyjs.track.lineno=488;
						$pyjs.track.lineno=488;
						var $pyjs__ret = $p['tuple']([iterlist, true]);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					else {
						$pyjs.track.lineno=490;
						t['append'](res);
					}
					$pyjs.track.lineno=491;
					if ((($bool91=$p['op_eq']((($len16=t) === null?$constant_int_0:
						(typeof $len16.__array != 'undefined' ? new $p['int']($len16.__array.length):
							(typeof $len16.__len__ == 'function'?$len16.__len__():
								(typeof $len16.length != 'undefined'? new $p['int']($len16.length):
									$p['len']($len16))))), $constant_int_4)) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
							false :
							(typeof $bool91=='object'?
								(typeof $bool91.__nonzero__=='function'?
									$bool91.__nonzero__() :
									(typeof $bool91.__len__=='function'?
										($bool91.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=492;
						iterlist['append'](t);
						$pyjs.track.lineno=493;
						t = $p['list']([]);
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=494;
				iterlist['append'](t);
				$pyjs.track.lineno=495;
				$pyjs.track.lineno=495;
				var $pyjs__ret = $p['tuple']([iterlist, false]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			quadruples_gen.__name__ = 'quadruples_gen';

			quadruples_gen.__bind_type__ = 0;
			quadruples_gen.__args__ = [null,null,['s']];
			$pyjs.track.lineno=497;
			done = $constant_int_0;
			$pyjs.track.lineno=498;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=500;
				var $tupleassign5 = $p['__ass_unpack'](quadruples_gen(s), 2, null);
				iterlist = $tupleassign5[0];
				done = $tupleassign5[1];
				$pyjs.track.lineno=501;
				$pyjs__trackstack_size_2=$pyjs.trackstack.length;
				$iter10_iter = iterlist;
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					snippet = $iter10_nextval;
					$pyjs.track.lineno=502;
					length = (($len17=snippet) === null?$constant_int_0:
						(typeof $len17.__array != 'undefined' ? new $p['int']($len17.__array.length):
							(typeof $len17.__len__ == 'function'?$len17.__len__():
								(typeof $len17.length != 'undefined'? new $p['int']($len17.length):
									$p['len']($len17)))));
					$pyjs.track.lineno=503;
					if ((($bool92=$p['op_eq'](length, $constant_int_4)) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
							false :
							(typeof $bool92=='object'?
								(typeof $bool92.__nonzero__=='function'?
									$bool92.__nonzero__() :
									(typeof $bool92.__len__=='function'?
										($bool92.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=504;
						result['append']($p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($117=snippet).__array != 'undefined'?
							((typeof $117.__array[$118=$constant_int_0]) != 'undefined'?$117.__array[$118]:
								$117.__getitem__($118)):
								$117.__getitem__($constant_int_0)), $constant_int_63),$constant_int_2), $p['op_bitshiftright']((typeof ($119=snippet).__array != 'undefined'?
							((typeof $119.__array[$120=$constant_int_1]) != 'undefined'?$119.__array[$120]:
								$119.__getitem__($120)):
								$119.__getitem__($constant_int_1)),$constant_int_4))));
						$pyjs.track.lineno=505;
						result['append']($p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($121=snippet).__array != 'undefined'?
							((typeof $121.__array[$122=$constant_int_1]) != 'undefined'?$121.__array[$122]:
								$121.__getitem__($122)):
								$121.__getitem__($constant_int_1)), $constant_int_15),$constant_int_4), $p['op_bitshiftright']((typeof ($123=snippet).__array != 'undefined'?
							((typeof $123.__array[$124=$constant_int_2]) != 'undefined'?$123.__array[$124]:
								$123.__getitem__($124)):
								$123.__getitem__($constant_int_2)),$constant_int_2))));
						$pyjs.track.lineno=506;
						result['append']($p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($125=snippet).__array != 'undefined'?
							((typeof $125.__array[$126=$constant_int_2]) != 'undefined'?$125.__array[$126]:
								$125.__getitem__($126)):
								$125.__getitem__($constant_int_2)), $constant_int_3),$constant_int_6), (typeof ($127=snippet).__array != 'undefined'?
							((typeof $127.__array[$128=$constant_int_3]) != 'undefined'?$127.__array[$128]:
								$127.__getitem__($128)):
								$127.__getitem__($constant_int_3)))));
					}
					else if ((($bool93=$p['op_eq'](length, $constant_int_3)) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
							false :
							(typeof $bool93=='object'?
								(typeof $bool93.__nonzero__=='function'?
									$bool93.__nonzero__() :
									(typeof $bool93.__len__=='function'?
										($bool93.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=508;
						result['append']($p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($129=snippet).__array != 'undefined'?
							((typeof $129.__array[$130=$constant_int_0]) != 'undefined'?$129.__array[$130]:
								$129.__getitem__($130)):
								$129.__getitem__($constant_int_0)), $constant_int_63),$constant_int_2), $p['op_bitshiftright']((typeof ($131=snippet).__array != 'undefined'?
							((typeof $131.__array[$132=$constant_int_1]) != 'undefined'?$131.__array[$132]:
								$131.__getitem__($132)):
								$131.__getitem__($constant_int_1)),$constant_int_4))));
						$pyjs.track.lineno=509;
						result['append']($p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($133=snippet).__array != 'undefined'?
							((typeof $133.__array[$134=$constant_int_1]) != 'undefined'?$133.__array[$134]:
								$133.__getitem__($134)):
								$133.__getitem__($constant_int_1)), $constant_int_15),$constant_int_4), $p['op_bitshiftright']((typeof ($135=snippet).__array != 'undefined'?
							((typeof $135.__array[$136=$constant_int_2]) != 'undefined'?$135.__array[$136]:
								$135.__getitem__($136)):
								$135.__getitem__($constant_int_2)),$constant_int_2))));
					}
					else if ((($bool94=$p['op_eq'](length, $constant_int_2)) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
							false :
							(typeof $bool94=='object'?
								(typeof $bool94.__nonzero__=='function'?
									$bool94.__nonzero__() :
									(typeof $bool94.__len__=='function'?
										($bool94.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=511;
						result['append']($p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($137=snippet).__array != 'undefined'?
							((typeof $137.__array[$138=$constant_int_0]) != 'undefined'?$137.__array[$138]:
								$137.__getitem__($138)):
								$137.__getitem__($constant_int_0)), $constant_int_63),$constant_int_2), $p['op_bitshiftright']((typeof ($139=snippet).__array != 'undefined'?
							((typeof $139.__array[$140=$constant_int_1]) != 'undefined'?$139.__array[$140]:
								$139.__getitem__($140)):
								$139.__getitem__($constant_int_1)),$constant_int_4))));
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='binascii';
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
				$pyjs.track.module='binascii';
				if (($pyjs_try_err_name == $m['Done'].__name__)||$p['_isinstance']($pyjs_try_err,$m['Done'])) {
					$pyjs.track.lineno=513;
					done = $constant_int_1;
				} else if (($pyjs_try_err_name == $m['Error'].__name__)||$p['_isinstance']($pyjs_try_err,$m['Error'])) {
					$pyjs.track.lineno=515;
					$pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__;
					$pyjs.__last_exception_stack__ = null;
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.track.lineno=516;
			$pyjs.track.lineno=516;
			var $pyjs__ret = $p['tuple']([''['join'](result), done]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['a2b_hqx'].__name__ = 'a2b_hqx';

		$m['a2b_hqx'].__bind_type__ = 0;
		$m['a2b_hqx'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=518;
		$m['b2a_hqx'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $172,$173,$iter11_array,$186,$174,$153,$176,$177,$156,result,$154,$155,$158,$159,$178,$179,$189,snippet,$188,$191,$181,$180,$183,$iter11_idx,$185,$184,$187,$175,$iter11_iter,$171,$167,$166,$165,$164,$163,$162,$161,$160,$iter11_nextval,$169,$168,$182,$bool96,$bool97,$len18,$iter11_type,$bool98,length,$pyjs__trackstack_size_1,$170,$194,triples_gen,$192,$193,$190,$157;
			$pyjs.track={module:'binascii',lineno:518};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=518;
			$pyjs.track.lineno=519;
			result = $p['list']([]);
			$pyjs.track.lineno=521;
			triples_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $bool95,$151,$150,$152,$pyjs_try_err,$149,$148,iterlist,$145,$144,$147,$146,$141,$143,$142;
				$pyjs.track={module:'binascii',lineno:521};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=521;
				$pyjs.track.lineno=528;
				iterlist = $p['list']([]);
				$pyjs.track.lineno=529;
				while ((($bool95=s) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
						false :
						(typeof $bool95=='object'?
							(typeof $bool95.__nonzero__=='function'?
								$bool95.__nonzero__() :
								(typeof $bool95.__len__=='function'?
									($bool95.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=530;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=531;
						iterlist['append']($p['tuple']([$p['ord']((typeof ($141=s).__array != 'undefined'?
							((typeof $141.__array[$142=$constant_int_0]) != 'undefined'?$141.__array[$142]:
								$141.__getitem__($142)):
								$141.__getitem__($constant_int_0))), $p['ord']((typeof ($143=s).__array != 'undefined'?
							((typeof $143.__array[$144=$constant_int_1]) != 'undefined'?$143.__array[$144]:
								$143.__getitem__($144)):
								$143.__getitem__($constant_int_1))), $p['ord']((typeof ($145=s).__array != 'undefined'?
							((typeof $145.__array[$146=$constant_int_2]) != 'undefined'?$145.__array[$146]:
								$145.__getitem__($146)):
								$145.__getitem__($constant_int_2)))]));
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
						$pyjs.track.module='binascii';
						if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
							$pyjs.track.lineno=533;
							var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
							try {
								$pyjs.track.lineno=534;
								iterlist['append']($p['tuple']([$p['ord']((typeof ($147=s).__array != 'undefined'?
									((typeof $147.__array[$148=$constant_int_0]) != 'undefined'?$147.__array[$148]:
										$147.__getitem__($148)):
										$147.__getitem__($constant_int_0))), $p['ord']((typeof ($149=s).__array != 'undefined'?
									((typeof $149.__array[$150=$constant_int_1]) != 'undefined'?$149.__array[$150]:
										$149.__getitem__($150)):
										$149.__getitem__($constant_int_1)))]));
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
								$pyjs.track.module='binascii';
								if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
									$pyjs.track.lineno=536;
									iterlist['append']($p['tuple']([$p['ord']((typeof ($151=s).__array != 'undefined'?
										((typeof $151.__array[$152=$constant_int_0]) != 'undefined'?$151.__array[$152]:
											$151.__getitem__($152)):
											$151.__getitem__($constant_int_0)))]));
								} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
							}
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.track.lineno=537;
					s = $p['__getslice'](s, $constant_int_3, null);
				}
				$pyjs.track.lineno=538;
				$pyjs.track.lineno=538;
				var $pyjs__ret = iterlist;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			triples_gen.__name__ = 'triples_gen';

			triples_gen.__bind_type__ = 0;
			triples_gen.__args__ = [null,null,['s']];
			$pyjs.track.lineno=540;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter11_iter = triples_gen(s);
			if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter.__iter__();
				$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				snippet = $iter11_nextval;
				$pyjs.track.lineno=541;
				length = (($len18=snippet) === null?$constant_int_0:
					(typeof $len18.__array != 'undefined' ? new $p['int']($len18.__array.length):
						(typeof $len18.__len__ == 'function'?$len18.__len__():
							(typeof $len18.length != 'undefined'? new $p['int']($len18.length):
								$p['len']($len18)))));
				$pyjs.track.lineno=542;
				if ((($bool96=$p['op_eq'](length, $constant_int_3)) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
						false :
						(typeof $bool96=='object'?
							(typeof $bool96.__nonzero__=='function'?
								$bool96.__nonzero__() :
								(typeof $bool96.__len__=='function'?
									($bool96.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=544;
					result['append']((typeof ($155=$m['hqx_encoding']).__array != 'undefined'?
						((typeof $155.__array[$156=$p['op_bitshiftright']($p['op_bitand2']((typeof ($153=snippet).__array != 'undefined'?
						((typeof $153.__array[$154=$constant_int_0]) != 'undefined'?$153.__array[$154]:
							$153.__getitem__($154)):
							$153.__getitem__($constant_int_0)), $constant_int_252),$constant_int_2)]) != 'undefined'?$155.__array[$156]:
							$155.__getitem__($156)):
							$155.__getitem__($p['op_bitshiftright']($p['op_bitand2']((typeof ($153=snippet).__array != 'undefined'?
						((typeof $153.__array[$154=$constant_int_0]) != 'undefined'?$153.__array[$154]:
							$153.__getitem__($154)):
							$153.__getitem__($constant_int_0)), $constant_int_252),$constant_int_2))));
					$pyjs.track.lineno=545;
					result['append']((typeof ($161=$m['hqx_encoding']).__array != 'undefined'?
						((typeof $161.__array[$162=$p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($157=snippet).__array != 'undefined'?
						((typeof $157.__array[$158=$constant_int_0]) != 'undefined'?$157.__array[$158]:
							$157.__getitem__($158)):
							$157.__getitem__($constant_int_0)), $constant_int_3),$constant_int_4), $p['op_bitshiftright']($p['op_bitand2']((typeof ($159=snippet).__array != 'undefined'?
						((typeof $159.__array[$160=$constant_int_1]) != 'undefined'?$159.__array[$160]:
							$159.__getitem__($160)):
							$159.__getitem__($constant_int_1)), $constant_int_240),$constant_int_4))]) != 'undefined'?$161.__array[$162]:
							$161.__getitem__($162)):
							$161.__getitem__($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($157=snippet).__array != 'undefined'?
						((typeof $157.__array[$158=$constant_int_0]) != 'undefined'?$157.__array[$158]:
							$157.__getitem__($158)):
							$157.__getitem__($constant_int_0)), $constant_int_3),$constant_int_4), $p['op_bitshiftright']($p['op_bitand2']((typeof ($159=snippet).__array != 'undefined'?
						((typeof $159.__array[$160=$constant_int_1]) != 'undefined'?$159.__array[$160]:
							$159.__getitem__($160)):
							$159.__getitem__($constant_int_1)), $constant_int_240),$constant_int_4)))));
					$pyjs.track.lineno=547;
					result['append']((typeof ($167=$m['hqx_encoding']).__array != 'undefined'?
						((typeof $167.__array[$168=$p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($163=snippet).__array != 'undefined'?
						((typeof $163.__array[$164=$constant_int_1]) != 'undefined'?$163.__array[$164]:
							$163.__getitem__($164)):
							$163.__getitem__($constant_int_1)), $constant_int_15),$constant_int_2), $p['op_bitshiftright']($p['op_bitand2']((typeof ($165=snippet).__array != 'undefined'?
						((typeof $165.__array[$166=$constant_int_2]) != 'undefined'?$165.__array[$166]:
							$165.__getitem__($166)):
							$165.__getitem__($constant_int_2)), $constant_int_192),$constant_int_6))]) != 'undefined'?$167.__array[$168]:
							$167.__getitem__($168)):
							$167.__getitem__($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($163=snippet).__array != 'undefined'?
						((typeof $163.__array[$164=$constant_int_1]) != 'undefined'?$163.__array[$164]:
							$163.__getitem__($164)):
							$163.__getitem__($constant_int_1)), $constant_int_15),$constant_int_2), $p['op_bitshiftright']($p['op_bitand2']((typeof ($165=snippet).__array != 'undefined'?
						((typeof $165.__array[$166=$constant_int_2]) != 'undefined'?$165.__array[$166]:
							$165.__getitem__($166)):
							$165.__getitem__($constant_int_2)), $constant_int_192),$constant_int_6)))));
					$pyjs.track.lineno=549;
					result['append']((typeof ($171=$m['hqx_encoding']).__array != 'undefined'?
						((typeof $171.__array[$172=$p['op_bitand2']((typeof ($169=snippet).__array != 'undefined'?
						((typeof $169.__array[$170=$constant_int_2]) != 'undefined'?$169.__array[$170]:
							$169.__getitem__($170)):
							$169.__getitem__($constant_int_2)), $constant_int_63)]) != 'undefined'?$171.__array[$172]:
							$171.__getitem__($172)):
							$171.__getitem__($p['op_bitand2']((typeof ($169=snippet).__array != 'undefined'?
						((typeof $169.__array[$170=$constant_int_2]) != 'undefined'?$169.__array[$170]:
							$169.__getitem__($170)):
							$169.__getitem__($constant_int_2)), $constant_int_63))));
				}
				else if ((($bool97=$p['op_eq'](length, $constant_int_2)) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
						false :
						(typeof $bool97=='object'?
							(typeof $bool97.__nonzero__=='function'?
								$bool97.__nonzero__() :
								(typeof $bool97.__len__=='function'?
									($bool97.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=552;
					result['append']((typeof ($175=$m['hqx_encoding']).__array != 'undefined'?
						((typeof $175.__array[$176=$p['op_bitshiftright']($p['op_bitand2']((typeof ($173=snippet).__array != 'undefined'?
						((typeof $173.__array[$174=$constant_int_0]) != 'undefined'?$173.__array[$174]:
							$173.__getitem__($174)):
							$173.__getitem__($constant_int_0)), $constant_int_252),$constant_int_2)]) != 'undefined'?$175.__array[$176]:
							$175.__getitem__($176)):
							$175.__getitem__($p['op_bitshiftright']($p['op_bitand2']((typeof ($173=snippet).__array != 'undefined'?
						((typeof $173.__array[$174=$constant_int_0]) != 'undefined'?$173.__array[$174]:
							$173.__getitem__($174)):
							$173.__getitem__($constant_int_0)), $constant_int_252),$constant_int_2))));
					$pyjs.track.lineno=553;
					result['append']((typeof ($181=$m['hqx_encoding']).__array != 'undefined'?
						((typeof $181.__array[$182=$p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($177=snippet).__array != 'undefined'?
						((typeof $177.__array[$178=$constant_int_0]) != 'undefined'?$177.__array[$178]:
							$177.__getitem__($178)):
							$177.__getitem__($constant_int_0)), $constant_int_3),$constant_int_4), $p['op_bitshiftright']($p['op_bitand2']((typeof ($179=snippet).__array != 'undefined'?
						((typeof $179.__array[$180=$constant_int_1]) != 'undefined'?$179.__array[$180]:
							$179.__getitem__($180)):
							$179.__getitem__($constant_int_1)), $constant_int_240),$constant_int_4))]) != 'undefined'?$181.__array[$182]:
							$181.__getitem__($182)):
							$181.__getitem__($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']((typeof ($177=snippet).__array != 'undefined'?
						((typeof $177.__array[$178=$constant_int_0]) != 'undefined'?$177.__array[$178]:
							$177.__getitem__($178)):
							$177.__getitem__($constant_int_0)), $constant_int_3),$constant_int_4), $p['op_bitshiftright']($p['op_bitand2']((typeof ($179=snippet).__array != 'undefined'?
						((typeof $179.__array[$180=$constant_int_1]) != 'undefined'?$179.__array[$180]:
							$179.__getitem__($180)):
							$179.__getitem__($constant_int_1)), $constant_int_240),$constant_int_4)))));
					$pyjs.track.lineno=555;
					result['append']((typeof ($185=$m['hqx_encoding']).__array != 'undefined'?
						((typeof $185.__array[$186=$p['op_bitshiftleft']($p['op_bitand2']((typeof ($183=snippet).__array != 'undefined'?
						((typeof $183.__array[$184=$constant_int_1]) != 'undefined'?$183.__array[$184]:
							$183.__getitem__($184)):
							$183.__getitem__($constant_int_1)), $constant_int_15),$constant_int_2)]) != 'undefined'?$185.__array[$186]:
							$185.__getitem__($186)):
							$185.__getitem__($p['op_bitshiftleft']($p['op_bitand2']((typeof ($183=snippet).__array != 'undefined'?
						((typeof $183.__array[$184=$constant_int_1]) != 'undefined'?$183.__array[$184]:
							$183.__getitem__($184)):
							$183.__getitem__($constant_int_1)), $constant_int_15),$constant_int_2))));
				}
				else if ((($bool98=$p['op_eq'](length, $constant_int_1)) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
						false :
						(typeof $bool98=='object'?
							(typeof $bool98.__nonzero__=='function'?
								$bool98.__nonzero__() :
								(typeof $bool98.__len__=='function'?
									($bool98.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=559;
					result['append']((typeof ($189=$m['hqx_encoding']).__array != 'undefined'?
						((typeof $189.__array[$190=$p['op_bitshiftright']($p['op_bitand2']((typeof ($187=snippet).__array != 'undefined'?
						((typeof $187.__array[$188=$constant_int_0]) != 'undefined'?$187.__array[$188]:
							$187.__getitem__($188)):
							$187.__getitem__($constant_int_0)), $constant_int_252),$constant_int_2)]) != 'undefined'?$189.__array[$190]:
							$189.__getitem__($190)):
							$189.__getitem__($p['op_bitshiftright']($p['op_bitand2']((typeof ($187=snippet).__array != 'undefined'?
						((typeof $187.__array[$188=$constant_int_0]) != 'undefined'?$187.__array[$188]:
							$187.__getitem__($188)):
							$187.__getitem__($constant_int_0)), $constant_int_252),$constant_int_2))));
					$pyjs.track.lineno=560;
					result['append']((typeof ($193=$m['hqx_encoding']).__array != 'undefined'?
						((typeof $193.__array[$194=$p['op_bitshiftleft']($p['op_bitand2']((typeof ($191=snippet).__array != 'undefined'?
						((typeof $191.__array[$192=$constant_int_0]) != 'undefined'?$191.__array[$192]:
							$191.__getitem__($192)):
							$191.__getitem__($constant_int_0)), $constant_int_3),$constant_int_4)]) != 'undefined'?$193.__array[$194]:
							$193.__getitem__($194)):
							$193.__getitem__($p['op_bitshiftleft']($p['op_bitand2']((typeof ($191=snippet).__array != 'undefined'?
						((typeof $191.__array[$192=$constant_int_0]) != 'undefined'?$191.__array[$192]:
							$191.__getitem__($192)):
							$191.__getitem__($constant_int_0)), $constant_int_3),$constant_int_4))));
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=562;
			$pyjs.track.lineno=562;
			var $pyjs__ret = ''['join'](result);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b2a_hqx'].__name__ = 'b2a_hqx';

		$m['b2a_hqx'].__bind_type__ = 0;
		$m['b2a_hqx'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=564;
		$m['crctab_hqx'] = $p['list']([$constant_int_0, $constant_int_4129, $constant_int_8258, $constant_int_12387, $constant_int_16516, $constant_int_20645, $constant_int_24774, $constant_int_28903, $constant_int_33032, $constant_int_37161, $constant_int_41290, $constant_int_45419, $constant_int_49548, $constant_int_53677, $constant_int_57806, $constant_int_61935, $constant_int_4657, $constant_int_528, $constant_int_12915, $constant_int_8786, $constant_int_21173, $constant_int_17044, $constant_int_29431, $constant_int_25302, $constant_int_37689, $constant_int_33560, $constant_int_45947, $constant_int_41818, $constant_int_54205, $constant_int_50076, $constant_int_62463, $constant_int_58334, $constant_int_9314, $constant_int_13379, $constant_int_1056, $constant_int_5121, $constant_int_25830, $constant_int_29895, $constant_int_17572, $constant_int_21637, $constant_int_42346, $constant_int_46411, $constant_int_34088, $constant_int_38153, $constant_int_58862, $constant_int_62927, $constant_int_50604, $constant_int_54669, $constant_int_13907, $constant_int_9842, $constant_int_5649, $constant_int_1584, $constant_int_30423, $constant_int_26358, $constant_int_22165, $constant_int_18100, $constant_int_46939, $constant_int_42874, $constant_int_38681, $constant_int_34616, $constant_int_63455, $constant_int_59390, $constant_int_55197, $constant_int_51132, $constant_int_18628, $constant_int_22757, $constant_int_26758, $constant_int_30887, $constant_int_2112, $constant_int_6241, $constant_int_10242, $constant_int_14371, $constant_int_51660, $constant_int_55789, $constant_int_59790, $constant_int_63919, $constant_int_35144, $constant_int_39273, $constant_int_43274, $constant_int_47403, $constant_int_23285, $constant_int_19156, $constant_int_31415, $constant_int_27286, $constant_int_6769, $constant_int_2640, $constant_int_14899, $constant_int_10770, $constant_int_56317, $constant_int_52188, $constant_int_64447, $constant_int_60318, $constant_int_39801, $constant_int_35672, $constant_int_47931, $constant_int_43802, $constant_int_27814, $constant_int_31879, $constant_int_19684, $constant_int_23749, $constant_int_11298, $constant_int_15363, $constant_int_3168, $constant_int_7233, $constant_int_60846, $constant_int_64911, $constant_int_52716, $constant_int_56781, $constant_int_44330, $constant_int_48395, $constant_int_36200, $constant_int_40265, $constant_int_32407, $constant_int_28342, $constant_int_24277, $constant_int_20212, $constant_int_15891, $constant_int_11826, $constant_int_7761, $constant_int_3696, $constant_int_65439, $constant_int_61374, $constant_int_57309, $constant_int_53244, $constant_int_48923, $constant_int_44858, $constant_int_40793, $constant_int_36728, $constant_int_37256, $constant_int_33193, $constant_int_45514, $constant_int_41451, $constant_int_53516, $constant_int_49453, $constant_int_61774, $constant_int_57711, $constant_int_4224, $constant_int_161, $constant_int_12482, $constant_int_8419, $constant_int_20484, $constant_int_16421, $constant_int_28742, $constant_int_24679, $constant_int_33721, $constant_int_37784, $constant_int_41979, $constant_int_46042, $constant_int_49981, $constant_int_54044, $constant_int_58239, $constant_int_62302, $constant_int_689, $constant_int_4752, $constant_int_8947, $constant_int_13010, $constant_int_16949, $constant_int_21012, $constant_int_25207, $constant_int_29270, $constant_int_46570, $constant_int_42443, $constant_int_38312, $constant_int_34185, $constant_int_62830, $constant_int_58703, $constant_int_54572, $constant_int_50445, $constant_int_13538, $constant_int_9411, $constant_int_5280, $constant_int_1153, $constant_int_29798, $constant_int_25671, $constant_int_21540, $constant_int_17413, $constant_int_42971, $constant_int_47098, $constant_int_34713, $constant_int_38840, $constant_int_59231, $constant_int_63358, $constant_int_50973, $constant_int_55100, $constant_int_9939, $constant_int_14066, $constant_int_1681, $constant_int_5808, $constant_int_26199, $constant_int_30326, $constant_int_17941, $constant_int_22068, $constant_int_55628, $constant_int_51565, $constant_int_63758, $constant_int_59695, $constant_int_39368, $constant_int_35305, $constant_int_47498, $constant_int_43435, $constant_int_22596, $constant_int_18533, $constant_int_30726, $constant_int_26663, $constant_int_6336, $constant_int_2273, $constant_int_14466, $constant_int_10403, $constant_int_52093, $constant_int_56156, $constant_int_60223, $constant_int_64286, $constant_int_35833, $constant_int_39896, $constant_int_43963, $constant_int_48026, $constant_int_19061, $constant_int_23124, $constant_int_27191, $constant_int_31254, $constant_int_2801, $constant_int_6864, $constant_int_10931, $constant_int_14994, $constant_int_64814, $constant_int_60687, $constant_int_56684, $constant_int_52557, $constant_int_48554, $constant_int_44427, $constant_int_40424, $constant_int_36297, $constant_int_31782, $constant_int_27655, $constant_int_23652, $constant_int_19525, $constant_int_15522, $constant_int_11395, $constant_int_7392, $constant_int_3265, $constant_int_61215, $constant_int_65342, $constant_int_53085, $constant_int_57212, $constant_int_44955, $constant_int_49082, $constant_int_36825, $constant_int_40952, $constant_int_28183, $constant_int_32310, $constant_int_20053, $constant_int_24180, $constant_int_11923, $constant_int_16050, $constant_int_3793, $constant_int_7920]);
		$pyjs.track.lineno=599;
		$m['crc_hqx'] = function(s, crc) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var c,$iter12_type,$iter12_array,$iter12_iter,$pyjs__trackstack_size_1,$196,$195,$iter12_idx,$iter12_nextval;
			$pyjs.track={module:'binascii',lineno:599};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=599;
			$pyjs.track.lineno=600;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter12_iter = s;
			if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter.__iter__();
				$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				c = $iter12_nextval;
				$pyjs.track.lineno=601;
				crc = $p['op_bitxor2']($p['op_bitand2']($p['op_bitshiftleft'](crc,$constant_int_8), $constant_int_65280), (typeof ($195=$m['crctab_hqx']).__array != 'undefined'?
					((typeof $195.__array[$196=$p['op_bitxor2']($p['op_bitand2']($p['op_bitshiftright'](crc,$constant_int_8), $constant_int_255), $p['ord'](c))]) != 'undefined'?$195.__array[$196]:
						$195.__getitem__($196)):
						$195.__getitem__($p['op_bitxor2']($p['op_bitand2']($p['op_bitshiftright'](crc,$constant_int_8), $constant_int_255), $p['ord'](c)))));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=603;
			$pyjs.track.lineno=603;
			var $pyjs__ret = crc;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['crc_hqx'].__name__ = 'crc_hqx';

		$m['crc_hqx'].__bind_type__ = 0;
		$m['crc_hqx'].__args__ = [null,null,['s'],['crc']];
		$pyjs.track.lineno=605;
		$m['rlecode_hqx'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $mul8,$iter13_idx,$cmp42,$cmp43,$cmp41,$cmp44,$add104,$and41,$and40,prev,$iter13_array,$add101,$add100,$add103,$add102,$add99,$200,$pyjs__trackstack_size_1,$bool105,$bool104,$bool107,$bool106,$bool101,$bool100,$bool103,$bool102,$mul7,$mul6,$mul5,$bool108,count,c,$iter13_nextval,$iter13_iter,$bool99,$iter13_type,$198,$199,$197,result;
			$pyjs.track={module:'binascii',lineno:605};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=605;
			$pyjs.track.lineno=611;
			if ((($bool100=!(($bool99=s) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
				false :
				(typeof $bool99=='object'?
					(typeof $bool99.__nonzero__=='function'?
						$bool99.__nonzero__() :
						(typeof $bool99.__len__=='function'?
							($bool99.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100.__nonzero__=='function'?
							$bool100.__nonzero__() :
							(typeof $bool100.__len__=='function'?
								($bool100.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=612;
				$pyjs.track.lineno=612;
				var $pyjs__ret = '';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=613;
			result = $p['list']([]);
			$pyjs.track.lineno=614;
			prev = (typeof ($197=s).__array != 'undefined'?
				((typeof $197.__array[$198=$constant_int_0]) != 'undefined'?$197.__array[$198]:
					$197.__getitem__($198)):
					$197.__getitem__($constant_int_0));
			$pyjs.track.lineno=615;
			count = $constant_int_1;
			$pyjs.track.lineno=620;
			if ((($bool101=$p['op_eq']((typeof ($199=s).__array != 'undefined'?
				((typeof $199.__array[$200=(typeof ($usub6=$constant_int_1)=='number'?
				-$usub6:
				$p['op_usub']($usub6))]) != 'undefined'?$199.__array[$200]:
					$199.__getitem__($200)):
					$199.__getitem__((typeof ($usub6=$constant_int_1)=='number'?
				-$usub6:
				$p['op_usub']($usub6)))), '!')) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
					false :
					(typeof $bool101=='object'?
						(typeof $bool101.__nonzero__=='function'?
							$bool101.__nonzero__() :
							(typeof $bool101.__len__=='function'?
								($bool101.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=621;
				s = (typeof ($add99=$p['__getslice'](s, $constant_int_1, null))==typeof ($add100='?') && (typeof $add99=='number'||typeof $add99=='string')?
					$add99+$add100:
					$p['op_add']($add99,$add100));
			}
			else {
				$pyjs.track.lineno=623;
				s = (typeof ($add101=$p['__getslice'](s, $constant_int_1, null))==typeof ($add102='!') && (typeof $add101=='number'||typeof $add101=='string')?
					$add101+$add102:
					$p['op_add']($add101,$add102));
			}
			$pyjs.track.lineno=625;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter13_iter = s;
			if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
				$iter13_type = 0;
			} else {
				$iter13_iter = $iter13_iter.__iter__();
				$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter13_idx = 0;
			while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
				c = $iter13_nextval;
				$pyjs.track.lineno=626;
				if ((($bool103=((($bool102=$and40=$p['op_eq'](c, prev)) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
					false :
					(typeof $bool102=='object'?
						(typeof $bool102.__nonzero__=='function'?
							$bool102.__nonzero__() :
							(typeof $bool102.__len__=='function'?
								($bool102.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp41=count)===($cmp42=$constant_int_255)?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))) == -1):$and40)) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
						false :
						(typeof $bool103=='object'?
							(typeof $bool103.__nonzero__=='function'?
								$bool103.__nonzero__() :
								(typeof $bool103.__len__=='function'?
									($bool103.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=627;
					count = (typeof ($add103=count)==typeof ($add104=$constant_int_1) && (typeof $add103=='number'||typeof $add103=='string')?
						$add103+$add104:
						$p['op_add']($add103,$add104));
				}
				else {
					$pyjs.track.lineno=629;
					if ((($bool104=$p['op_eq'](count, $constant_int_1)) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
							false :
							(typeof $bool104=='object'?
								(typeof $bool104.__nonzero__=='function'?
									$bool104.__nonzero__() :
									(typeof $bool104.__len__=='function'?
										($bool104.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=630;
						if ((($bool105=!$p['op_eq'](prev, '\x90')) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
								false :
								(typeof $bool105=='object'?
									(typeof $bool105.__nonzero__=='function'?
										$bool105.__nonzero__() :
										(typeof $bool105.__len__=='function'?
											($bool105.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=631;
							result['append'](prev);
						}
						else {
							$pyjs.track.lineno=633;
							result['extend']($p['list'](['\x90', '\x00']));
						}
					}
					else if ((($bool106=((($cmp43=count)===($cmp44=$constant_int_4)?0:
						(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
							($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
							$p['cmp']($cmp43, $cmp44))) == -1)) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
							false :
							(typeof $bool106=='object'?
								(typeof $bool106.__nonzero__=='function'?
									$bool106.__nonzero__() :
									(typeof $bool106.__len__=='function'?
										($bool106.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$pyjs.track.lineno=635;
						if ((($bool107=!$p['op_eq'](prev, '\x90')) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
								false :
								(typeof $bool107=='object'?
									(typeof $bool107.__nonzero__=='function'?
										$bool107.__nonzero__() :
										(typeof $bool107.__len__=='function'?
											($bool107.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=636;
							result['extend']((typeof ($mul5=$p['list']([prev]))==typeof ($mul6=count) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6)));
						}
						else {
							$pyjs.track.lineno=638;
							result['extend']((typeof ($mul7=$p['list'](['\x90', '\x00']))==typeof ($mul8=count) && typeof $mul7=='number'?
								$mul7*$mul8:
								$p['op_mul']($mul7,$mul8)));
						}
					}
					else {
						$pyjs.track.lineno=640;
						if ((($bool108=!$p['op_eq'](prev, '\x90')) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
								false :
								(typeof $bool108=='object'?
									(typeof $bool108.__nonzero__=='function'?
										$bool108.__nonzero__() :
										(typeof $bool108.__len__=='function'?
											($bool108.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							$pyjs.track.lineno=641;
							result['extend']($p['list']([prev, '\x90', $p['chr'](count)]));
						}
						else {
							$pyjs.track.lineno=643;
							result['extend']($p['list'](['\x90', '\x00', '\x90', $p['chr'](count)]));
						}
					}
					$pyjs.track.lineno=644;
					count = $constant_int_1;
					$pyjs.track.lineno=645;
					prev = c;
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=647;
			$pyjs.track.lineno=647;
			var $pyjs__ret = ''['join'](result);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['rlecode_hqx'].__name__ = 'rlecode_hqx';

		$m['rlecode_hqx'].__bind_type__ = 0;
		$m['rlecode_hqx'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=649;
		$m['rledecode_hqx'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $sub27,$sub28,$208,result,$cmp46,$cmp45,$mul9,snippet,prev,$iter14_array,$iter14_type,$202,$203,$201,$206,$207,$204,$205,$iter14_iter,$bool109,$iter14_idx,$iter14_nextval,count,$mul10,$pyjs__trackstack_size_1;
			$pyjs.track={module:'binascii',lineno:649};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=649;
			$pyjs.track.lineno=650;
			s = s['$$split']('\x90');
			$pyjs.track.lineno=651;
			result = $p['list']([(typeof ($201=s).__array != 'undefined'?
				((typeof $201.__array[$202=$constant_int_0]) != 'undefined'?$201.__array[$202]:
					$201.__getitem__($202)):
					$201.__getitem__($constant_int_0))]);
			$pyjs.track.lineno=652;
			prev = (typeof ($203=s).__array != 'undefined'?
				((typeof $203.__array[$204=$constant_int_0]) != 'undefined'?$203.__array[$204]:
					$203.__getitem__($204)):
					$203.__getitem__($constant_int_0));
			$pyjs.track.lineno=653;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter14_iter = $p['__getslice'](s, $constant_int_1, null);
			if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
				$iter14_type = 0;
			} else {
				$iter14_iter = $iter14_iter.__iter__();
				$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter14_idx = 0;
			while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
				snippet = $iter14_nextval;
				$pyjs.track.lineno=654;
				count = $p['ord']((typeof ($205=snippet).__array != 'undefined'?
					((typeof $205.__array[$206=$constant_int_0]) != 'undefined'?$205.__array[$206]:
						$205.__getitem__($206)):
						$205.__getitem__($constant_int_0)));
				$pyjs.track.lineno=655;
				if ((($bool109=((($cmp45=count)===($cmp46=$constant_int_0)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == 1)) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
						false :
						(typeof $bool109=='object'?
							(typeof $bool109.__nonzero__=='function'?
								$bool109.__nonzero__() :
								(typeof $bool109.__len__=='function'?
									($bool109.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=656;
					result['append']((typeof ($mul9=(typeof ($207=prev).__array != 'undefined'?
						((typeof $207.__array[$208=(typeof ($usub7=$constant_int_1)=='number'?
						-$usub7:
						$p['op_usub']($usub7))]) != 'undefined'?$207.__array[$208]:
							$207.__getitem__($208)):
							$207.__getitem__((typeof ($usub7=$constant_int_1)=='number'?
						-$usub7:
						$p['op_usub']($usub7)))))==typeof ($mul10=(typeof ($sub27=count)==typeof ($sub28=$constant_int_1) && (typeof $sub27=='number'||typeof $sub27=='string')?
						$sub27-$sub28:
						$p['op_sub']($sub27,$sub28))) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)));
					$pyjs.track.lineno=657;
					prev = snippet;
				}
				else {
					$pyjs.track.lineno=659;
					result['append']('\x90');
					$pyjs.track.lineno=660;
					prev = '\x90';
				}
				$pyjs.track.lineno=661;
				result['append']($p['__getslice'](snippet, $constant_int_1, null));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=663;
			$pyjs.track.lineno=663;
			var $pyjs__ret = ''['join'](result);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['rledecode_hqx'].__name__ = 'rledecode_hqx';

		$m['rledecode_hqx'].__bind_type__ = 0;
		$m['rledecode_hqx'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=665;
		$m['crc_32_tab'] = $p['list']([$constant_long_0, $constant_long_1996959894, $constant_long_3993919788, $constant_long_2567524794, $constant_long_124634137, $constant_long_1886057615, $constant_long_3915621685, $constant_long_2657392035, $constant_long_249268274, $constant_long_2044508324, $constant_long_3772115230, $constant_long_2547177864, $constant_long_162941995, $constant_long_2125561021, $constant_long_3887607047, $constant_long_2428444049, $constant_long_498536548, $constant_long_1789927666, $constant_long_4089016648, $constant_long_2227061214, $constant_long_450548861, $constant_long_1843258603, $constant_long_4107580753, $constant_long_2211677639, $constant_long_325883990, $constant_long_1684777152, $constant_long_4251122042, $constant_long_2321926636, $constant_long_335633487, $constant_long_1661365465, $constant_long_4195302755, $constant_long_2366115317, $constant_long_997073096, $constant_long_1281953886, $constant_long_3579855332, $constant_long_2724688242, $constant_long_1006888145, $constant_long_1258607687, $constant_long_3524101629, $constant_long_2768942443, $constant_long_901097722, $constant_long_1119000684, $constant_long_3686517206, $constant_long_2898065728, $constant_long_853044451, $constant_long_1172266101, $constant_long_3705015759, $constant_long_2882616665, $constant_long_651767980, $constant_long_1373503546, $constant_long_3369554304, $constant_long_3218104598, $constant_long_565507253, $constant_long_1454621731, $constant_long_3485111705, $constant_long_3099436303, $constant_long_671266974, $constant_long_1594198024, $constant_long_3322730930, $constant_long_2970347812, $constant_long_795835527, $constant_long_1483230225, $constant_long_3244367275, $constant_long_3060149565, $constant_long_1994146192, $constant_long_31158534, $constant_long_2563907772, $constant_long_4023717930, $constant_long_1907459465, $constant_long_112637215, $constant_long_2680153253, $constant_long_3904427059, $constant_long_2013776290, $constant_long_251722036, $constant_long_2517215374, $constant_long_3775830040, $constant_long_2137656763, $constant_long_141376813, $constant_long_2439277719, $constant_long_3865271297, $constant_long_1802195444, $constant_long_476864866, $constant_long_2238001368, $constant_long_4066508878, $constant_long_1812370925, $constant_long_453092731, $constant_long_2181625025, $constant_long_4111451223, $constant_long_1706088902, $constant_long_314042704, $constant_long_2344532202, $constant_long_4240017532, $constant_long_1658658271, $constant_long_366619977, $constant_long_2362670323, $constant_long_4224994405, $constant_long_1303535960, $constant_long_984961486, $constant_long_2747007092, $constant_long_3569037538, $constant_long_1256170817, $constant_long_1037604311, $constant_long_2765210733, $constant_long_3554079995, $constant_long_1131014506, $constant_long_879679996, $constant_long_2909243462, $constant_long_3663771856, $constant_long_1141124467, $constant_long_855842277, $constant_long_2852801631, $constant_long_3708648649, $constant_long_1342533948, $constant_long_654459306, $constant_long_3188396048, $constant_long_3373015174, $constant_long_1466479909, $constant_long_544179635, $constant_long_3110523913, $constant_long_3462522015, $constant_long_1591671054, $constant_long_702138776, $constant_long_2966460450, $constant_long_3352799412, $constant_long_1504918807, $constant_long_783551873, $constant_long_3082640443, $constant_long_3233442989, $constant_long_3988292384, $constant_long_2596254646, $constant_long_62317068, $constant_long_1957810842, $constant_long_3939845945, $constant_long_2647816111, $constant_long_81470997, $constant_long_1943803523, $constant_long_3814918930, $constant_long_2489596804, $constant_long_225274430, $constant_long_2053790376, $constant_long_3826175755, $constant_long_2466906013, $constant_long_167816743, $constant_long_2097651377, $constant_long_4027552580, $constant_long_2265490386, $constant_long_503444072, $constant_long_1762050814, $constant_long_4150417245, $constant_long_2154129355, $constant_long_426522225, $constant_long_1852507879, $constant_long_4275313526, $constant_long_2312317920, $constant_long_282753626, $constant_long_1742555852, $constant_long_4189708143, $constant_long_2394877945, $constant_long_397917763, $constant_long_1622183637, $constant_long_3604390888, $constant_long_2714866558, $constant_long_953729732, $constant_long_1340076626, $constant_long_3518719985, $constant_long_2797360999, $constant_long_1068828381, $constant_long_1219638859, $constant_long_3624741850, $constant_long_2936675148, $constant_long_906185462, $constant_long_1090812512, $constant_long_3747672003, $constant_long_2825379669, $constant_long_829329135, $constant_long_1181335161, $constant_long_3412177804, $constant_long_3160834842, $constant_long_628085408, $constant_long_1382605366, $constant_long_3423369109, $constant_long_3138078467, $constant_long_570562233, $constant_long_1426400815, $constant_long_3317316542, $constant_long_2998733608, $constant_long_733239954, $constant_long_1555261956, $constant_long_3268935591, $constant_long_3050360625, $constant_long_752459403, $constant_long_1541320221, $constant_long_2607071920, $constant_long_3965973030, $constant_long_1969922972, $constant_long_40735498, $constant_long_2617837225, $constant_long_3943577151, $constant_long_1913087877, $constant_long_83908371, $constant_long_2512341634, $constant_long_3803740692, $constant_long_2075208622, $constant_long_213261112, $constant_long_2463272603, $constant_long_3855990285, $constant_long_2094854071, $constant_long_198958881, $constant_long_2262029012, $constant_long_4057260610, $constant_long_1759359992, $constant_long_534414190, $constant_long_2176718541, $constant_long_4139329115, $constant_long_1873836001, $constant_long_414664567, $constant_long_2282248934, $constant_long_4279200368, $constant_long_1711684554, $constant_long_285281116, $constant_long_2405801727, $constant_long_4167216745, $constant_long_1634467795, $constant_long_376229701, $constant_long_2685067896, $constant_long_3608007406, $constant_long_1308918612, $constant_long_956543938, $constant_long_2808555105, $constant_long_3495958263, $constant_long_1231636301, $constant_long_1047427035, $constant_long_2932959818, $constant_long_3654703836, $constant_long_1088359270, $constant_long_936918000, $constant_long_2847714899, $constant_long_3736837829, $constant_long_1202900863, $constant_long_817233897, $constant_long_3183342108, $constant_long_3401237130, $constant_long_1404277552, $constant_long_615818150, $constant_long_3134207493, $constant_long_3453421203, $constant_long_1423857449, $constant_long_601450431, $constant_long_3009837614, $constant_long_3294710456, $constant_long_1567103746, $constant_long_711928724, $constant_long_3020668471, $constant_long_3272380065, $constant_long_1510334235, $constant_long_755167117]);
		$pyjs.track.lineno=720;
		$m['crc32'] = function(s, crc) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof crc == 'undefined') crc=arguments.callee.__args__[3][1];
			var $pyjs__trackstack_size_1,$cmp48,result,$mod9,$cmp47,$pow7,$pow6,$pow5,$pow4,$pow3,$pow2,$pow1,$pow8,$sub30,$209,$add105,$mod10,$add106,$iter15_array,$iter15_iter,$sub29,c,$bool110,$iter15_idx,$210,$iter15_nextval,$iter15_type;
			$pyjs.track={module:'binascii',lineno:720};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=720;
			$pyjs.track.lineno=721;
			result = $constant_int_0;
			$pyjs.track.lineno=722;
			crc = $p['op_bitand2']($p['op_invert']($p['long'](crc)), $constant_long_4294967295);
			$pyjs.track.lineno=723;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter15_iter = s;
			if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
				$iter15_type = 0;
			} else {
				$iter15_iter = $iter15_iter.__iter__();
				$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter15_idx = 0;
			while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
				c = $iter15_nextval;
				$pyjs.track.lineno=724;
				crc = $p['op_bitxor2']((typeof ($209=$m['crc_32_tab']).__array != 'undefined'?
					((typeof $209.__array[$210=$p['op_bitand2']($p['op_bitxor2'](crc, $p['long']($p['ord'](c))), $constant_long_255)]) != 'undefined'?$209.__array[$210]:
						$209.__getitem__($210)):
						$209.__getitem__($p['op_bitand2']($p['op_bitxor2'](crc, $p['long']($p['ord'](c))), $constant_long_255))), $p['op_bitshiftright'](crc,$constant_int_8));
				$pyjs.track.lineno=727;
				result = $p['op_bitxor2'](crc, $constant_long_4294967295);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=729;
			if ((($bool110=((($cmp47=result)===($cmp48=(typeof ($pow1=$constant_int_2)==typeof ($pow2=$constant_int_31) && typeof $pow1=='number'?
				Math.pow($pow1,$pow2):
				$p['op_pow']($pow1,$pow2)))?0:
				(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
					($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
					$p['cmp']($cmp47, $cmp48))) == 1)) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
					false :
					(typeof $bool110=='object'?
						(typeof $bool110.__nonzero__=='function'?
							$bool110.__nonzero__() :
							(typeof $bool110.__len__=='function'?
								($bool110.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=730;
				result = (typeof ($sub29=(typeof ($mod9=(typeof ($add105=result)==typeof ($add106=(typeof ($pow3=$constant_int_2)==typeof ($pow4=$constant_int_31) && typeof $pow3=='number'?
					Math.pow($pow3,$pow4):
					$p['op_pow']($pow3,$pow4))) && (typeof $add105=='number'||typeof $add105=='string')?
					$add105+$add106:
					$p['op_add']($add105,$add106)))==typeof ($mod10=(typeof ($pow5=$constant_int_2)==typeof ($pow6=$constant_int_32) && typeof $pow5=='number'?
					Math.pow($pow5,$pow6):
					$p['op_pow']($pow5,$pow6))) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)))==typeof ($sub30=(typeof ($pow7=$constant_int_2)==typeof ($pow8=$constant_int_31) && typeof $pow7=='number'?
					Math.pow($pow7,$pow8):
					$p['op_pow']($pow7,$pow8))) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30));
			}
			$pyjs.track.lineno=732;
			$pyjs.track.lineno=732;
			var $pyjs__ret = result;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['crc32'].__name__ = 'crc32';

		$m['crc32'].__bind_type__ = 0;
		$m['crc32'].__args__ = [null,null,['s'],['crc', $constant_int_0]];
		$pyjs.track.lineno=734;
		$m['b2a_hex'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter16_idx,$add112,$add113,$add110,$add111,$$char,$cmp49,result,$iter16_iter,$iter16_type,$iter16_nextval,$add114,$sub31,$sub33,$sub32,$sub34,$add107,$add109,$add108,$cmp51,$cmp50,$cmp52,$iter16_array,$bool112,c,$bool111,$pyjs__trackstack_size_1;
			$pyjs.track={module:'binascii',lineno:734};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=734;
			$pyjs.track.lineno=735;
			result = $p['list']([]);
			$pyjs.track.lineno=736;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter16_iter = s;
			if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter.__iter__();
				$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				$$char = $iter16_nextval;
				$pyjs.track.lineno=737;
				c = $p['op_bitand2']($p['op_bitshiftright']($p['ord']($$char),$constant_int_4), $constant_int_15);
				$pyjs.track.lineno=738;
				if ((($bool111=((($cmp49=c)===($cmp50=$constant_int_9)?0:
					(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
						($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
						$p['cmp']($cmp49, $cmp50))) == 1)) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
						false :
						(typeof $bool111=='object'?
							(typeof $bool111.__nonzero__=='function'?
								$bool111.__nonzero__() :
								(typeof $bool111.__len__=='function'?
									($bool111.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=739;
					c = (typeof ($sub31=(typeof ($add107=c)==typeof ($add108=$p['ord']('a')) && (typeof $add107=='number'||typeof $add107=='string')?
						$add107+$add108:
						$p['op_add']($add107,$add108)))==typeof ($sub32=$constant_int_10) && (typeof $sub31=='number'||typeof $sub31=='string')?
						$sub31-$sub32:
						$p['op_sub']($sub31,$sub32));
				}
				else {
					$pyjs.track.lineno=741;
					c = (typeof ($add109=c)==typeof ($add110=$p['ord']('0')) && (typeof $add109=='number'||typeof $add109=='string')?
						$add109+$add110:
						$p['op_add']($add109,$add110));
				}
				$pyjs.track.lineno=742;
				result['append']($p['chr'](c));
				$pyjs.track.lineno=743;
				c = $p['op_bitand2']($p['ord']($$char), $constant_int_15);
				$pyjs.track.lineno=744;
				if ((($bool112=((($cmp51=c)===($cmp52=$constant_int_9)?0:
					(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
						($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
						$p['cmp']($cmp51, $cmp52))) == 1)) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
						false :
						(typeof $bool112=='object'?
							(typeof $bool112.__nonzero__=='function'?
								$bool112.__nonzero__() :
								(typeof $bool112.__len__=='function'?
									($bool112.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=745;
					c = (typeof ($sub33=(typeof ($add111=c)==typeof ($add112=$p['ord']('a')) && (typeof $add111=='number'||typeof $add111=='string')?
						$add111+$add112:
						$p['op_add']($add111,$add112)))==typeof ($sub34=$constant_int_10) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34));
				}
				else {
					$pyjs.track.lineno=747;
					c = (typeof ($add113=c)==typeof ($add114=$p['ord']('0')) && (typeof $add113=='number'||typeof $add113=='string')?
						$add113+$add114:
						$p['op_add']($add113,$add114));
				}
				$pyjs.track.lineno=748;
				result['append']($p['chr'](c));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=749;
			$pyjs.track.lineno=749;
			var $pyjs__ret = ''['join'](result);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b2a_hex'].__name__ = 'b2a_hex';

		$m['b2a_hex'].__bind_type__ = 0;
		$m['b2a_hex'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=751;
		$m['hexlify'] = $m['b2a_hex'];
		$pyjs.track.lineno=753;
		$m['table_hex'] = $p['list']([(typeof ($usub8=$constant_int_1)=='number'?
			-$usub8:
			$p['op_usub']($usub8)), (typeof ($usub9=$constant_int_1)=='number'?
			-$usub9:
			$p['op_usub']($usub9)), (typeof ($usub10=$constant_int_1)=='number'?
			-$usub10:
			$p['op_usub']($usub10)), (typeof ($usub11=$constant_int_1)=='number'?
			-$usub11:
			$p['op_usub']($usub11)), (typeof ($usub12=$constant_int_1)=='number'?
			-$usub12:
			$p['op_usub']($usub12)), (typeof ($usub13=$constant_int_1)=='number'?
			-$usub13:
			$p['op_usub']($usub13)), (typeof ($usub14=$constant_int_1)=='number'?
			-$usub14:
			$p['op_usub']($usub14)), (typeof ($usub15=$constant_int_1)=='number'?
			-$usub15:
			$p['op_usub']($usub15)), (typeof ($usub16=$constant_int_1)=='number'?
			-$usub16:
			$p['op_usub']($usub16)), (typeof ($usub17=$constant_int_1)=='number'?
			-$usub17:
			$p['op_usub']($usub17)), (typeof ($usub18=$constant_int_1)=='number'?
			-$usub18:
			$p['op_usub']($usub18)), (typeof ($usub19=$constant_int_1)=='number'?
			-$usub19:
			$p['op_usub']($usub19)), (typeof ($usub20=$constant_int_1)=='number'?
			-$usub20:
			$p['op_usub']($usub20)), (typeof ($usub21=$constant_int_1)=='number'?
			-$usub21:
			$p['op_usub']($usub21)), (typeof ($usub22=$constant_int_1)=='number'?
			-$usub22:
			$p['op_usub']($usub22)), (typeof ($usub23=$constant_int_1)=='number'?
			-$usub23:
			$p['op_usub']($usub23)), (typeof ($usub24=$constant_int_1)=='number'?
			-$usub24:
			$p['op_usub']($usub24)), (typeof ($usub25=$constant_int_1)=='number'?
			-$usub25:
			$p['op_usub']($usub25)), (typeof ($usub26=$constant_int_1)=='number'?
			-$usub26:
			$p['op_usub']($usub26)), (typeof ($usub27=$constant_int_1)=='number'?
			-$usub27:
			$p['op_usub']($usub27)), (typeof ($usub28=$constant_int_1)=='number'?
			-$usub28:
			$p['op_usub']($usub28)), (typeof ($usub29=$constant_int_1)=='number'?
			-$usub29:
			$p['op_usub']($usub29)), (typeof ($usub30=$constant_int_1)=='number'?
			-$usub30:
			$p['op_usub']($usub30)), (typeof ($usub31=$constant_int_1)=='number'?
			-$usub31:
			$p['op_usub']($usub31)), (typeof ($usub32=$constant_int_1)=='number'?
			-$usub32:
			$p['op_usub']($usub32)), (typeof ($usub33=$constant_int_1)=='number'?
			-$usub33:
			$p['op_usub']($usub33)), (typeof ($usub34=$constant_int_1)=='number'?
			-$usub34:
			$p['op_usub']($usub34)), (typeof ($usub35=$constant_int_1)=='number'?
			-$usub35:
			$p['op_usub']($usub35)), (typeof ($usub36=$constant_int_1)=='number'?
			-$usub36:
			$p['op_usub']($usub36)), (typeof ($usub37=$constant_int_1)=='number'?
			-$usub37:
			$p['op_usub']($usub37)), (typeof ($usub38=$constant_int_1)=='number'?
			-$usub38:
			$p['op_usub']($usub38)), (typeof ($usub39=$constant_int_1)=='number'?
			-$usub39:
			$p['op_usub']($usub39)), (typeof ($usub40=$constant_int_1)=='number'?
			-$usub40:
			$p['op_usub']($usub40)), (typeof ($usub41=$constant_int_1)=='number'?
			-$usub41:
			$p['op_usub']($usub41)), (typeof ($usub42=$constant_int_1)=='number'?
			-$usub42:
			$p['op_usub']($usub42)), (typeof ($usub43=$constant_int_1)=='number'?
			-$usub43:
			$p['op_usub']($usub43)), (typeof ($usub44=$constant_int_1)=='number'?
			-$usub44:
			$p['op_usub']($usub44)), (typeof ($usub45=$constant_int_1)=='number'?
			-$usub45:
			$p['op_usub']($usub45)), (typeof ($usub46=$constant_int_1)=='number'?
			-$usub46:
			$p['op_usub']($usub46)), (typeof ($usub47=$constant_int_1)=='number'?
			-$usub47:
			$p['op_usub']($usub47)), (typeof ($usub48=$constant_int_1)=='number'?
			-$usub48:
			$p['op_usub']($usub48)), (typeof ($usub49=$constant_int_1)=='number'?
			-$usub49:
			$p['op_usub']($usub49)), (typeof ($usub50=$constant_int_1)=='number'?
			-$usub50:
			$p['op_usub']($usub50)), (typeof ($usub51=$constant_int_1)=='number'?
			-$usub51:
			$p['op_usub']($usub51)), (typeof ($usub52=$constant_int_1)=='number'?
			-$usub52:
			$p['op_usub']($usub52)), (typeof ($usub53=$constant_int_1)=='number'?
			-$usub53:
			$p['op_usub']($usub53)), (typeof ($usub54=$constant_int_1)=='number'?
			-$usub54:
			$p['op_usub']($usub54)), (typeof ($usub55=$constant_int_1)=='number'?
			-$usub55:
			$p['op_usub']($usub55)), $constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7, $constant_int_8, $constant_int_9, (typeof ($usub56=$constant_int_1)=='number'?
			-$usub56:
			$p['op_usub']($usub56)), (typeof ($usub57=$constant_int_1)=='number'?
			-$usub57:
			$p['op_usub']($usub57)), (typeof ($usub58=$constant_int_1)=='number'?
			-$usub58:
			$p['op_usub']($usub58)), (typeof ($usub59=$constant_int_1)=='number'?
			-$usub59:
			$p['op_usub']($usub59)), (typeof ($usub60=$constant_int_1)=='number'?
			-$usub60:
			$p['op_usub']($usub60)), (typeof ($usub61=$constant_int_1)=='number'?
			-$usub61:
			$p['op_usub']($usub61)), (typeof ($usub62=$constant_int_1)=='number'?
			-$usub62:
			$p['op_usub']($usub62)), $constant_int_10, $constant_int_11, $constant_int_12, $constant_int_13, $constant_int_14, $constant_int_15, (typeof ($usub63=$constant_int_1)=='number'?
			-$usub63:
			$p['op_usub']($usub63)), (typeof ($usub64=$constant_int_1)=='number'?
			-$usub64:
			$p['op_usub']($usub64)), (typeof ($usub65=$constant_int_1)=='number'?
			-$usub65:
			$p['op_usub']($usub65)), (typeof ($usub66=$constant_int_1)=='number'?
			-$usub66:
			$p['op_usub']($usub66)), (typeof ($usub67=$constant_int_1)=='number'?
			-$usub67:
			$p['op_usub']($usub67)), (typeof ($usub68=$constant_int_1)=='number'?
			-$usub68:
			$p['op_usub']($usub68)), (typeof ($usub69=$constant_int_1)=='number'?
			-$usub69:
			$p['op_usub']($usub69)), (typeof ($usub70=$constant_int_1)=='number'?
			-$usub70:
			$p['op_usub']($usub70)), (typeof ($usub71=$constant_int_1)=='number'?
			-$usub71:
			$p['op_usub']($usub71)), (typeof ($usub72=$constant_int_1)=='number'?
			-$usub72:
			$p['op_usub']($usub72)), (typeof ($usub73=$constant_int_1)=='number'?
			-$usub73:
			$p['op_usub']($usub73)), (typeof ($usub74=$constant_int_1)=='number'?
			-$usub74:
			$p['op_usub']($usub74)), (typeof ($usub75=$constant_int_1)=='number'?
			-$usub75:
			$p['op_usub']($usub75)), (typeof ($usub76=$constant_int_1)=='number'?
			-$usub76:
			$p['op_usub']($usub76)), (typeof ($usub77=$constant_int_1)=='number'?
			-$usub77:
			$p['op_usub']($usub77)), (typeof ($usub78=$constant_int_1)=='number'?
			-$usub78:
			$p['op_usub']($usub78)), (typeof ($usub79=$constant_int_1)=='number'?
			-$usub79:
			$p['op_usub']($usub79)), (typeof ($usub80=$constant_int_1)=='number'?
			-$usub80:
			$p['op_usub']($usub80)), (typeof ($usub81=$constant_int_1)=='number'?
			-$usub81:
			$p['op_usub']($usub81)), (typeof ($usub82=$constant_int_1)=='number'?
			-$usub82:
			$p['op_usub']($usub82)), (typeof ($usub83=$constant_int_1)=='number'?
			-$usub83:
			$p['op_usub']($usub83)), (typeof ($usub84=$constant_int_1)=='number'?
			-$usub84:
			$p['op_usub']($usub84)), (typeof ($usub85=$constant_int_1)=='number'?
			-$usub85:
			$p['op_usub']($usub85)), (typeof ($usub86=$constant_int_1)=='number'?
			-$usub86:
			$p['op_usub']($usub86)), (typeof ($usub87=$constant_int_1)=='number'?
			-$usub87:
			$p['op_usub']($usub87)), (typeof ($usub88=$constant_int_1)=='number'?
			-$usub88:
			$p['op_usub']($usub88)), $constant_int_10, $constant_int_11, $constant_int_12, $constant_int_13, $constant_int_14, $constant_int_15, (typeof ($usub89=$constant_int_1)=='number'?
			-$usub89:
			$p['op_usub']($usub89)), (typeof ($usub90=$constant_int_1)=='number'?
			-$usub90:
			$p['op_usub']($usub90)), (typeof ($usub91=$constant_int_1)=='number'?
			-$usub91:
			$p['op_usub']($usub91)), (typeof ($usub92=$constant_int_1)=='number'?
			-$usub92:
			$p['op_usub']($usub92)), (typeof ($usub93=$constant_int_1)=='number'?
			-$usub93:
			$p['op_usub']($usub93)), (typeof ($usub94=$constant_int_1)=='number'?
			-$usub94:
			$p['op_usub']($usub94)), (typeof ($usub95=$constant_int_1)=='number'?
			-$usub95:
			$p['op_usub']($usub95)), (typeof ($usub96=$constant_int_1)=='number'?
			-$usub96:
			$p['op_usub']($usub96)), (typeof ($usub97=$constant_int_1)=='number'?
			-$usub97:
			$p['op_usub']($usub97)), (typeof ($usub98=$constant_int_1)=='number'?
			-$usub98:
			$p['op_usub']($usub98)), (typeof ($usub99=$constant_int_1)=='number'?
			-$usub99:
			$p['op_usub']($usub99)), (typeof ($usub100=$constant_int_1)=='number'?
			-$usub100:
			$p['op_usub']($usub100)), (typeof ($usub101=$constant_int_1)=='number'?
			-$usub101:
			$p['op_usub']($usub101)), (typeof ($usub102=$constant_int_1)=='number'?
			-$usub102:
			$p['op_usub']($usub102)), (typeof ($usub103=$constant_int_1)=='number'?
			-$usub103:
			$p['op_usub']($usub103)), (typeof ($usub104=$constant_int_1)=='number'?
			-$usub104:
			$p['op_usub']($usub104)), (typeof ($usub105=$constant_int_1)=='number'?
			-$usub105:
			$p['op_usub']($usub105)), (typeof ($usub106=$constant_int_1)=='number'?
			-$usub106:
			$p['op_usub']($usub106)), (typeof ($usub107=$constant_int_1)=='number'?
			-$usub107:
			$p['op_usub']($usub107)), (typeof ($usub108=$constant_int_1)=='number'?
			-$usub108:
			$p['op_usub']($usub108)), (typeof ($usub109=$constant_int_1)=='number'?
			-$usub109:
			$p['op_usub']($usub109)), (typeof ($usub110=$constant_int_1)=='number'?
			-$usub110:
			$p['op_usub']($usub110)), (typeof ($usub111=$constant_int_1)=='number'?
			-$usub111:
			$p['op_usub']($usub111)), (typeof ($usub112=$constant_int_1)=='number'?
			-$usub112:
			$p['op_usub']($usub112)), (typeof ($usub113=$constant_int_1)=='number'?
			-$usub113:
			$p['op_usub']($usub113))]);
		$pyjs.track.lineno=765;
		$m['a2b_hex'] = function(t) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter17_nextval,a,$or29,$iter17_iter,$add116,$cmp55,$pyjs__trackstack_size_1,$bool116,pairs_gen,$iter17_array,b,$bool115,$iter17_idx,$add115,$iter17_type,$cmp53,$cmp56,$or30,$cmp54,result;
			$pyjs.track={module:'binascii',lineno:765};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=765;
			$pyjs.track.lineno=766;
			result = $p['list']([]);
			$pyjs.track.lineno=768;
			pairs_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var iterlist,$214,$bool114,$len19,$217,$215,$bool113,$216,$211,$pyjs_try_err,$213,$212,$218;
				$pyjs.track={module:'binascii',lineno:768};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=768;
				$pyjs.track.lineno=777;
				iterlist = $p['list']([]);
				$pyjs.track.lineno=778;
				while ((($bool113=s) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
						false :
						(typeof $bool113=='object'?
							(typeof $bool113.__nonzero__=='function'?
								$bool113.__nonzero__() :
								(typeof $bool113.__len__=='function'?
									($bool113.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=779;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=780;
						iterlist['append']($p['tuple']([(typeof ($213=$m['table_hex']).__array != 'undefined'?
							((typeof $213.__array[$214=$p['ord']((typeof ($211=s).__array != 'undefined'?
							((typeof $211.__array[$212=$constant_int_0]) != 'undefined'?$211.__array[$212]:
								$211.__getitem__($212)):
								$211.__getitem__($constant_int_0)))]) != 'undefined'?$213.__array[$214]:
								$213.__getitem__($214)):
								$213.__getitem__($p['ord']((typeof ($211=s).__array != 'undefined'?
							((typeof $211.__array[$212=$constant_int_0]) != 'undefined'?$211.__array[$212]:
								$211.__getitem__($212)):
								$211.__getitem__($constant_int_0))))), (typeof ($217=$m['table_hex']).__array != 'undefined'?
							((typeof $217.__array[$218=$p['ord']((typeof ($215=s).__array != 'undefined'?
							((typeof $215.__array[$216=$constant_int_1]) != 'undefined'?$215.__array[$216]:
								$215.__getitem__($216)):
								$215.__getitem__($constant_int_1)))]) != 'undefined'?$217.__array[$218]:
								$217.__getitem__($218)):
								$217.__getitem__($p['ord']((typeof ($215=s).__array != 'undefined'?
							((typeof $215.__array[$216=$constant_int_1]) != 'undefined'?$215.__array[$216]:
								$215.__getitem__($216)):
								$215.__getitem__($constant_int_1)))))]));
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
						$pyjs.track.module='binascii';
						if (($pyjs_try_err_name == $p['IndexError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
							$pyjs.track.lineno=782;
							if ((($bool114=(($len19=s) === null?$constant_int_0:
								(typeof $len19.__array != 'undefined' ? new $p['int']($len19.__array.length):
									(typeof $len19.__len__ == 'function'?$len19.__len__():
										(typeof $len19.length != 'undefined'? new $p['int']($len19.length):
											$p['len']($len19)))))) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
									false :
									(typeof $bool114=='object'?
										(typeof $bool114.__nonzero__=='function'?
											$bool114.__nonzero__() :
											(typeof $bool114.__len__=='function'?
												($bool114.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								$pyjs.track.lineno=783;
								$pyjs.__active_exception_stack__ = null;
								throw ($p['TypeError']('Odd-length string'));
							}
							$pyjs.track.lineno=784;
							$pyjs.track.lineno=784;
							var $pyjs__ret = iterlist;
							$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
							return $pyjs__ret;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.track.lineno=785;
					s = $p['__getslice'](s, $constant_int_2, null);
				}
				$pyjs.track.lineno=786;
				$pyjs.track.lineno=786;
				var $pyjs__ret = iterlist;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			pairs_gen.__name__ = 'pairs_gen';

			pairs_gen.__bind_type__ = 0;
			pairs_gen.__args__ = [null,null,['s']];
			$pyjs.track.lineno=788;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter17_iter = pairs_gen(t);
			if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
				$iter17_type = 0;
			} else {
				$iter17_iter = $iter17_iter.__iter__();
				$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter17_idx = 0;
			while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
				var $tupleassign6 = $p['__ass_unpack']($iter17_nextval, 2, null);
				a = $tupleassign6[0];
				b = $tupleassign6[1];
				$pyjs.track.lineno=789;
				if ((($bool116=((($bool115=$or29=((($cmp53=a)===($cmp54=$constant_int_0)?0:
					(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
						($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
						$p['cmp']($cmp53, $cmp54))) == -1)) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
					false :
					(typeof $bool115=='object'?
						(typeof $bool115.__nonzero__=='function'?
							$bool115.__nonzero__() :
							(typeof $bool115.__len__=='function'?
								($bool115.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or29:((($cmp55=b)===($cmp56=$constant_int_0)?0:
					(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
						($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
						$p['cmp']($cmp55, $cmp56))) == -1))) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
						false :
						(typeof $bool116=='object'?
							(typeof $bool116.__nonzero__=='function'?
								$bool116.__nonzero__() :
								(typeof $bool116.__len__=='function'?
									($bool116.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=790;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('Non-hexadecimal digit found'));
				}
				$pyjs.track.lineno=791;
				result['append']($p['chr']((typeof ($add115=$p['op_bitshiftleft'](a,$constant_int_4))==typeof ($add116=b) && (typeof $add115=='number'||typeof $add115=='string')?
					$add115+$add116:
					$p['op_add']($add115,$add116))));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=792;
			$pyjs.track.lineno=792;
			var $pyjs__ret = ''['join'](result);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['a2b_hex'].__name__ = 'a2b_hex';

		$m['a2b_hex'].__bind_type__ = 0;
		$m['a2b_hex'].__args__ = [null,null,['t']];
		$pyjs.track.lineno=795;
		$m['unhexlify'] = $m['a2b_hex'];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end binascii */


/* end module: binascii */


