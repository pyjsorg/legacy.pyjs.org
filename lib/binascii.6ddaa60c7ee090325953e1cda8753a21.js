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
		var $constant_int_49 = new $p['int'](49);
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
		var $constant_int_20053 = new $p['int'](20053);
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
		var $constant_int_4657 = new $p['int'](4657);
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
			var trailingdata,$sub15,$sub16,quadruplets_gen,$add3,length,$pyjs_try_err,$mod1,result,$add4,$mod2,$sub2,$sub1,$mul2,$mul1;
			$pyjs.track={module:'binascii',lineno:14};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=14;
			$pyjs.track.lineno=15;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool'](s));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
				$pyjs.track.lineno=16;
				$pyjs.track.lineno=16;
				var $pyjs__ret = '';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=18;
			length = (typeof ($mod1=$p['__op_sub']($sub1=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})(),$sub2=$constant_int_32))==typeof ($mod2=$constant_int_64) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2));
			$pyjs.track.lineno=20;
			quadruplets_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $add2,$pyjs_try_err,iterlist,$add1;
				$pyjs.track={module:'binascii',lineno:20};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=20;
				$pyjs.track.lineno=29;
				iterlist = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.track.lineno=30;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
					$pyjs.track.lineno=31;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						try {
							$pyjs.in_try_except += 1;
							$pyjs.track.lineno=32;
							(function(){try{try{$pyjs.in_try_except += 1;
							return iterlist['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
						} finally { $pyjs.in_try_except -= 1; }
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
							s = $p['__op_add']($add1=s,$add2='   ');
							$pyjs.track.lineno=35;
							(function(){try{try{$pyjs.in_try_except += 1;
							return iterlist['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
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
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=41;
					result = function(){
						var $collcomp1,$iter1_iter,$sub9,$sub8,$iter1_array,$sub3,$sub7,$sub6,$sub5,$sub4,A,C,B,$iter1_nextval,D,$sub13,$sub12,$sub11,$sub10,$sub14,$iter1_type,$pyjs__trackstack_size_2,$iter1_idx;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return quadruplets_gen((function(){try{try{$pyjs.in_try_except += 1;
					return $p['__getslice'](s, $constant_int_1, null)['rstrip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
						var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['__ass_unpack']($iter1_nextval.$nextval, 4, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
						A = $tupleassign1[0];
						B = $tupleassign1[1];
						C = $tupleassign1[2];
						D = $tupleassign1[3];
						(function(){try{try{$pyjs.in_try_except += 1;
						return $collcomp1['append']((function(){try{try{$pyjs.in_try_except += 1;
						return ''['join']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
						return $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['__op_sub']($sub3=A,$sub4=$constant_int_32),$constant_int_2), $p['op_bitand2']($p['op_bitshiftright']($p['__op_sub']($sub5=B,$sub6=$constant_int_32),$constant_int_4), $constant_int_3)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
						return $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']($p['__op_sub']($sub7=B,$sub8=$constant_int_32), $constant_int_15),$constant_int_4), $p['op_bitand2']($p['op_bitshiftright']($p['__op_sub']($sub9=C,$sub10=$constant_int_32),$constant_int_2), $constant_int_15)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
						return $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2']($p['__op_sub']($sub11=C,$sub12=$constant_int_32), $constant_int_3),$constant_int_6), $p['op_bitand2']($p['__op_sub']($sub13=D,$sub14=$constant_int_32), $constant_int_63)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='binascii';

	return $collcomp1;}();
				} finally { $pyjs.in_try_except -= 1; }
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
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $m['Error']('Illegal char');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.track.lineno=48;
			result = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs.track.lineno=49;
			trailingdata = $p['__getslice'](result, length, null);
			$pyjs.track.lineno=50;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return trailingdata['strip']('\x00');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
				$pyjs.track.lineno=51;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $m['Error']('Trailing garbage');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
			}
			$pyjs.track.lineno=52;
			result = $p['__getslice'](result, 0, length);
			$pyjs.track.lineno=53;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})(), length) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
				$pyjs.track.lineno=54;
				result = $p['__op_add']($add3=result,$add4=(typeof ($mul1=$p['__op_sub']($sub15=length,$sub16=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()))==typeof ($mul2='\x00') && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
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
			var $add20,$add15,$add16,$add17,result,length,triples_gen,$add18,$add19;
			$pyjs.track={module:'binascii',lineno:58};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=59;
			length = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs.track.lineno=60;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](length, $constant_int_45) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
				$pyjs.track.lineno=61;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $m['Error']('At most 45 bytes at once');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
			}
			$pyjs.track.lineno=63;
			triples_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $pyjs_try_err,$add6,iterlist,$add5;
				$pyjs.track={module:'binascii',lineno:63};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=63;
				$pyjs.track.lineno=72;
				iterlist = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs.track.lineno=73;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
					$pyjs.track.lineno=74;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						try {
							$pyjs.in_try_except += 1;
							$pyjs.track.lineno=75;
							(function(){try{try{$pyjs.in_try_except += 1;
							return iterlist['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
						} finally { $pyjs.in_try_except -= 1; }
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
							s = $p['__op_add']($add5=s,$add6='\x00\x00');
							$pyjs.track.lineno=78;
							(function(){try{try{$pyjs.in_try_except += 1;
							return iterlist['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
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
			$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return triples_gen(s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__ass_unpack']($iter2_nextval.$nextval, 3, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				A = $tupleassign2[0];
				B = $tupleassign2[1];
				C = $tupleassign2[2];
				(function(){try{try{$pyjs.in_try_except += 1;
				return $collcomp2['append']((function(){try{try{$pyjs.in_try_except += 1;
				return ''['join']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
				return $p['chr']($p['__op_add']($add7=$constant_int_32,$add8=$p['op_bitand2']($p['op_bitshiftright'](A,$constant_int_2), $constant_int_63)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['chr']($p['__op_add']($add9=$constant_int_32,$add10=$p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](A,$constant_int_4), $p['op_bitand2']($p['op_bitshiftright'](B,$constant_int_4), $constant_int_15)), $constant_int_63)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['chr']($p['__op_add']($add11=$constant_int_32,$add12=$p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](B,$constant_int_2), $p['op_bitand2']($p['op_bitshiftright'](C,$constant_int_6), $constant_int_3)), $constant_int_63)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['chr']($p['__op_add']($add13=$constant_int_32,$add14=$p['op_bitand2'](C, $constant_int_63)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';

	return $collcomp2;}();
			$pyjs.track.lineno=89;
			$pyjs.track.lineno=89;
			var $pyjs__ret = $p['__op_add']($add19=$p['__op_add']($add17=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['chr']($p['__op_add']($add15=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['ord'](' ');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})(),$add16=$p['op_bitand2'](length, $constant_int_63)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})(),$add18=(function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()),$add20='\n');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b2a_uu'].__name__ = 'b2a_uu';

		$m['b2a_uu'].__bind_type__ = 0;
		$m['b2a_uu'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=92;
		$m['table_a2b_base64'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['A', $constant_int_0], ['B', $constant_int_1], ['C', $constant_int_2], ['D', $constant_int_3], ['E', $constant_int_4], ['F', $constant_int_5], ['G', $constant_int_6], ['H', $constant_int_7], ['I', $constant_int_8], ['J', $constant_int_9], ['K', $constant_int_10], ['L', $constant_int_11], ['M', $constant_int_12], ['N', $constant_int_13], ['O', $constant_int_14], ['P', $constant_int_15], ['Q', $constant_int_16], ['R', $constant_int_17], ['S', $constant_int_18], ['T', $constant_int_19], ['U', $constant_int_20], ['V', $constant_int_21], ['W', $constant_int_22], ['X', $constant_int_23], ['Y', $constant_int_24], ['Z', $constant_int_25], ['a', $constant_int_26], ['b', $constant_int_27], ['c', $constant_int_28], ['d', $constant_int_29], ['e', $constant_int_30], ['f', $constant_int_31], ['g', $constant_int_32], ['h', $constant_int_33], ['i', $constant_int_34], ['j', $constant_int_35], ['k', $constant_int_36], ['l', $constant_int_37], ['m', $constant_int_38], ['n', $constant_int_39], ['o', $constant_int_40], ['p', $constant_int_41], ['q', $constant_int_42], ['r', $constant_int_43], ['s', $constant_int_44], ['t', $constant_int_45], ['u', $constant_int_46], ['v', $constant_int_47], ['w', $constant_int_48], ['x', $constant_int_49], ['y', $constant_int_50], ['z', $constant_int_51], ['0', $constant_int_52], ['1', $constant_int_53], ['2', $constant_int_54], ['3', $constant_int_55], ['4', $constant_int_56], ['5', $constant_int_57], ['6', $constant_int_58], ['7', $constant_int_59], ['8', $constant_int_60], ['9', $constant_int_61], ['+', $constant_int_62], ['/', $constant_int_63], ['=', $constant_int_0]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
		$pyjs.track.lineno=161;
		$m['a2b_base64'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $sub20,leftchar,$sub18,$iter4_type,$or1,$iter4_iter,res,$add23,$add25,$add24,$add26,quad_pos,next_c,$or5,$or4,$sub19,$or6,next_valid_char,$or3,$or2,$and1,$and2,leftbits,$sub17,c,i,$iter4_nextval,$iter4_idx,$pyjs__trackstack_size_1,$iter4_array;
			$pyjs.track={module:'binascii',lineno:161};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=161;
			$pyjs.track.lineno=162;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['isinstance'](s, $p['str']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
				$pyjs.track.lineno=165;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['TypeError']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('expected string or unicode, got %r', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([s]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
			}
			$pyjs.track.lineno=166;
			s = (function(){try{try{$pyjs.in_try_except += 1;
			return s['rstrip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			$pyjs.track.lineno=170;
			next_valid_char = function(s, pos) {
				if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				var c,$iter3_idx,i,$iter3_nextval,$iter3_type,$add21,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$add22;
				$pyjs.track={module:'binascii',lineno:170};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=170;
				$pyjs.track.lineno=171;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['range']($p['__op_add']($add21=pos,$add22=$constant_int_1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					i = $iter3_nextval.$nextval;
					$pyjs.track.lineno=172;
					c = s.__getitem__(i);
					$pyjs.track.lineno=173;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp'](c, '\x7f') == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
						$pyjs.track.lineno=179;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
						return $m['table_a2b_base64']['has_key'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()) {
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
			res = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			$pyjs.track.lineno=187;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $p['enumerate'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				var $tupleassign3 = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__ass_unpack']($iter4_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				i = $tupleassign3[0];
				c = $tupleassign3[1];
				$pyjs.track.lineno=188;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($or1=($p['cmp'](c, '\x7f') == 1))?$or1:($p['bool']($or2=$p['op_eq'](c, '\n'))?$or2:($p['bool']($or3=$p['op_eq'](c, '\r'))?$or3:$p['op_eq'](c, ' ')))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
					$pyjs.track.lineno=189;
					continue;
				}
				$pyjs.track.lineno=190;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](c, '='));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
					$pyjs.track.lineno=191;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['bool']($or5=($p['cmp'](quad_pos, $constant_int_2) == -1))?$or5:($p['bool']($and1=$p['op_eq'](quad_pos, $constant_int_2))?!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
					return next_valid_char(s, i);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})(), '='):$and1)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
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
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['table_a2b_base64']['has_key'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
					$pyjs.track.lineno=197;
					continue;
				}
				$pyjs.track.lineno=198;
				next_c = $m['table_a2b_base64'].__getitem__(c);
				$pyjs.track.lineno=199;
				quad_pos = $p['op_bitand2']($p['__op_add']($add23=quad_pos,$add24=$constant_int_1), $constant_int_3);
				$pyjs.track.lineno=200;
				leftchar = $p['op_bitor2']($p['op_bitshiftleft'](leftchar,$constant_int_6), next_c);
				$pyjs.track.lineno=201;
				leftbits = $p['__op_add']($add25=leftbits,$add26=$constant_int_6);
				$pyjs.track.lineno=202;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp'](leftbits, $constant_int_8))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) {
					$pyjs.track.lineno=203;
					leftbits = $p['__op_sub']($sub17=leftbits,$sub18=$constant_int_8);
					$pyjs.track.lineno=204;
					(function(){try{try{$pyjs.in_try_except += 1;
					return res['append']($p['op_bitand2']($p['op_bitshiftright'](leftchar,leftbits), $constant_int_255));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
					$pyjs.track.lineno=205;
					leftchar = $p['op_bitand2'](leftchar, $p['__op_sub']($sub19=$p['op_bitshiftleft']($constant_int_1,leftbits),$sub20=$constant_int_1));
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=206;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq'](leftbits, $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
				$pyjs.track.lineno=207;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $m['Error']('Incorrect padding');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
			}
			$pyjs.track.lineno=209;
			$pyjs.track.lineno=209;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](function(){
				var $iter5_nextval,i,$iter5_idx,$pyjs__trackstack_size_1,$collcomp3,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp3 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter5_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return res;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				i = $iter5_nextval.$nextval;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $collcomp3['append']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['chr'](i);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';

	return $collcomp3;}());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
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
			var $sub22,$sub23,$sub21,$sub24,$add42,$mod4,result,$mod3,$add29,$add41,$add40,snippet,$$final,final_length,$add39,a,$add38,b,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,length,triples_gen;
			$pyjs.track={module:'binascii',lineno:214};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=214;
			$pyjs.track.lineno=215;
			length = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			$pyjs.track.lineno=216;
			final_length = (typeof ($mod3=length)==typeof ($mod4=$constant_int_3) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4));
			$pyjs.track.lineno=218;
			triples_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $add28,$pyjs_try_err,$add27,iterlist;
				$pyjs.track={module:'binascii',lineno:218};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=218;
				$pyjs.track.lineno=227;
				iterlist = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				$pyjs.track.lineno=228;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
					$pyjs.track.lineno=229;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						try {
							$pyjs.in_try_except += 1;
							$pyjs.track.lineno=230;
							(function(){try{try{$pyjs.in_try_except += 1;
							return iterlist['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
						} finally { $pyjs.in_try_except -= 1; }
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
							s = $p['__op_add']($add27=s,$add28='\x00\x00');
							$pyjs.track.lineno=233;
							(function(){try{try{$pyjs.in_try_except += 1;
							return iterlist['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
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
			a = (function(){try{try{$pyjs.in_try_except += 1;
			return triples_gen($p['__getslice'](s, 0, $p['__op_sub']($sub21=length,$sub22=final_length)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
			$pyjs.track.lineno=240;
			result = function(){
				var A,C,B,$iter6_idx,$iter6_type,$collcomp4,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
	$collcomp4 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter6_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return a;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				var $tupleassign4 = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__ass_unpack']($iter6_nextval.$nextval, 3, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
				A = $tupleassign4[0];
				B = $tupleassign4[1];
				C = $tupleassign4[2];
				(function(){try{try{$pyjs.in_try_except += 1;
				return $collcomp4['append']((function(){try{try{$pyjs.in_try_except += 1;
				return ''['join']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([$m['table_b2a_base64'].__getitem__($p['op_bitand2']($p['op_bitshiftright'](A,$constant_int_2), $constant_int_63)), $m['table_b2a_base64'].__getitem__($p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](A,$constant_int_4), $p['op_bitand2']($p['op_bitshiftright'](B,$constant_int_4), $constant_int_15)), $constant_int_63)), $m['table_b2a_base64'].__getitem__($p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](B,$constant_int_2), $p['op_bitand2']($p['op_bitshiftright'](C,$constant_int_6), $constant_int_3)), $constant_int_63)), $m['table_b2a_base64'].__getitem__($p['op_bitand2'](C, $constant_int_63))]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';

	return $collcomp4;}();
			$pyjs.track.lineno=247;
			$$final = $p['__getslice'](s, $p['__op_sub']($sub23=length,$sub24=final_length), null);
			$pyjs.track.lineno=248;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](final_length, $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()) {
				$pyjs.track.lineno=249;
				snippet = '';
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](final_length, $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()) {
				$pyjs.track.lineno=251;
				a = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['ord']($$final.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
				$pyjs.track.lineno=252;
				snippet = $p['__op_add']($add31=$p['__op_add']($add29=$m['table_b2a_base64'].__getitem__($p['op_bitand2']($p['op_bitshiftright'](a,$constant_int_2), $constant_int_63)),$add30=$m['table_b2a_base64'].__getitem__($p['op_bitand2']($p['op_bitshiftleft'](a,$constant_int_4), $constant_int_63))),$add32='==');
			}
			else {
				$pyjs.track.lineno=255;
				a = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['ord']($$final.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
				$pyjs.track.lineno=256;
				b = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['ord']($$final.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
				$pyjs.track.lineno=257;
				snippet = $p['__op_add']($add37=$p['__op_add']($add35=$p['__op_add']($add33=$m['table_b2a_base64'].__getitem__($p['op_bitand2']($p['op_bitshiftright'](a,$constant_int_2), $constant_int_63)),$add34=$m['table_b2a_base64'].__getitem__($p['op_bitand2']($p['op_bitor2']($p['op_bitshiftleft'](a,$constant_int_4), $p['op_bitand2']($p['op_bitshiftright'](b,$constant_int_4), $constant_int_15)), $constant_int_63))),$add36=$m['table_b2a_base64'].__getitem__($p['op_bitand2']($p['op_bitshiftleft'](b,$constant_int_2), $constant_int_63))),$add38='=');
			}
			$pyjs.track.lineno=260;
			$pyjs.track.lineno=260;
			var $pyjs__ret = $p['__op_add']($add41=$p['__op_add']($add39=(function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})(),$add40=snippet),$add42='\n');
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
			var ch,inp,$add60,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$and8,$or7,odata,$and3,$and4,$or8,$and6,$and5,$and7,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59;
			$pyjs.track={module:'binascii',lineno:262};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=262;
			$pyjs.track.lineno=263;
			inp = $constant_int_0;
			$pyjs.track.lineno=264;
			odata = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
			$pyjs.track.lineno=265;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](inp, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()) {
				$pyjs.track.lineno=266;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](s.__getitem__(inp), '='));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})()) {
					$pyjs.track.lineno=267;
					inp = $p['__op_add']($add43=inp,$add44=$constant_int_1);
					$pyjs.track.lineno=268;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](((($p['cmp'](inp, (function(){try{try{$pyjs.in_try_except += 1;
					return $p['len'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()) {
						$pyjs.track.lineno=269;
						break;
					}
					$pyjs.track.lineno=271;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['bool']($or7=$p['op_eq'](s.__getitem__(inp), '\n'))?$or7:$p['op_eq'](s.__getitem__(inp), '\r')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()) {
						$pyjs.track.lineno=272;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](!$p['op_eq'](s.__getitem__(inp), '\n'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()) {
							$pyjs.track.lineno=273;
							while ((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool'](($p['bool']($and3=($p['cmp'](inp, (function(){try{try{$pyjs.in_try_except += 1;
							return $p['len'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()) == -1))?!$p['op_eq'](s.__getitem__(inp), '\n'):$and3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
								$pyjs.track.lineno=274;
								inp = $p['__op_add']($add45=inp,$add46=$constant_int_1);
							}
						}
						$pyjs.track.lineno=275;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](($p['cmp'](inp, (function(){try{try{$pyjs.in_try_except += 1;
						return $p['len'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
							$pyjs.track.lineno=276;
							inp = $p['__op_add']($add47=inp,$add48=$constant_int_1);
						}
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](s.__getitem__(inp), '='));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()) {
						$pyjs.track.lineno=279;
						(function(){try{try{$pyjs.in_try_except += 1;
						return odata['append']('=');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
						$pyjs.track.lineno=280;
						inp = $p['__op_add']($add49=inp,$add50=$constant_int_1);
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['bool']($and5=(typeof hex_numbers == "undefined"?$m.hex_numbers:hex_numbers).__contains__(s.__getitem__(inp)))?(typeof hex_numbers == "undefined"?$m.hex_numbers:hex_numbers).__contains__(s.__getitem__($p['__op_add']($add51=inp,$add52=$constant_int_1))):$and5));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()) {
						$pyjs.track.lineno=282;
						ch = (function(){try{try{$pyjs.in_try_except += 1;
						return $p['chr']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['int']($p['__getslice'](s, inp, $p['__op_add']($add53=inp,$add54=$constant_int_2)), $constant_int_16);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
						$pyjs.track.lineno=283;
						inp = $p['__op_add']($add55=inp,$add56=$constant_int_2);
						$pyjs.track.lineno=284;
						(function(){try{try{$pyjs.in_try_except += 1;
						return odata['append'](ch);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
					}
					else {
						$pyjs.track.lineno=286;
						(function(){try{try{$pyjs.in_try_except += 1;
						return odata['append']('=');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
					}
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and7=header)?$p['op_eq'](s.__getitem__(inp), '_'):$and7));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()) {
					$pyjs.track.lineno=288;
					(function(){try{try{$pyjs.in_try_except += 1;
					return odata['append'](' ');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
					$pyjs.track.lineno=289;
					inp = $p['__op_add']($add57=inp,$add58=$constant_int_1);
				}
				else {
					$pyjs.track.lineno=291;
					(function(){try{try{$pyjs.in_try_except += 1;
					return odata['append'](s.__getitem__(inp));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
					$pyjs.track.lineno=292;
					inp = $p['__op_add']($add59=inp,$add60=$constant_int_1);
				}
			}
			$pyjs.track.lineno=293;
			$pyjs.track.lineno=293;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](odata);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
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
			var $add89,$add88,$sub26,$sub25,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,lf,$or28,$or24,$or25,$or26,$or27,$or20,$or21,$or22,$or23,$and9,$and38,$and39,$and34,$and35,$and36,$and37,$and30,$and31,$and32,$and33,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,$and29,$and28,$and23,$and22,$and21,$and20,$and27,$and26,$and25,$and24,$add65,$add64,$add67,$add66,$add61,$add63,$add62,$add69,$add68,linelen,$add90,crlf,c,$and11,ch,odata,$or15,$or14,$or17,$or16,$or11,$or10,$or13,$or12,$or19,$or18,inp,MAXLINESIZE,$or9,$and12,$and13,$and10,$and16,$and17,$and14,$and15,$and18,$and19;
			$pyjs.track={module:'binascii',lineno:295};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=295;
			$pyjs.track.lineno=302;
			MAXLINESIZE = $constant_int_76;
			$pyjs.track.lineno=305;
			lf = (function(){try{try{$pyjs.in_try_except += 1;
			return data['find']('\n');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
			$pyjs.track.lineno=306;
			crlf = ($p['bool']($and9=($p['cmp'](lf, $constant_int_0) == 1))?$p['op_eq'](data.__getitem__($p['__op_sub']($sub25=lf,$sub26=$constant_int_1)), '\r'):$and9);
			$pyjs.track.lineno=308;
			inp = $constant_int_0;
			$pyjs.track.lineno=309;
			linelen = $constant_int_0;
			$pyjs.track.lineno=310;
			odata = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
			$pyjs.track.lineno=311;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](inp, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})()) {
				$pyjs.track.lineno=312;
				c = data.__getitem__(inp);
				$pyjs.track.lineno=313;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($or16=($p['cmp'](c, '~') == 1))?$or16:($p['bool']($or17=$p['op_eq'](c, '='))?$or17:($p['bool']($or18=($p['bool']($and11=header)?$p['op_eq'](c, '_'):$and11))?$or18:($p['bool']($or19=($p['bool']($and13=$p['op_eq'](c, '.'))?($p['bool']($and14=$p['op_eq'](linelen, $constant_int_0))?($p['bool']($or9=$p['op_eq'](inp, (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()))?$or9:($p['bool']($or10=$p['op_eq'](data.__getitem__($p['__op_add']($add61=inp,$add62=$constant_int_1)), '\n'))?$or10:$p['op_eq'](data.__getitem__($p['__op_add']($add63=inp,$add64=$constant_int_1)), '\r'))):$and14):$and13))?$or19:($p['bool']($or20=($p['bool']($and16=!$p['bool'](istext))?($p['bool']($or12=$p['op_eq'](c, '\r'))?$or12:$p['op_eq'](c, '\n')):$and16))?$or20:($p['bool']($or21=($p['bool']($and18=($p['bool']($or14=$p['op_eq'](c, '\t'))?$or14:$p['op_eq'](c, ' ')))?$p['op_eq']($p['__op_add']($add65=inp,$add66=$constant_int_1), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()):$and18))?$or21:($p['bool']($and20=($p['cmp'](c, ' ') < 1))?($p['bool']($and21=!$p['op_eq'](c, '\r'))?($p['bool']($and22=!$p['op_eq'](c, '\n'))?($p['bool']($or23=quotetabs)?$or23:($p['bool']($and24=!$p['bool'](quotetabs))?($p['bool']($and26=!$p['op_eq'](c, '\t'))?!$p['op_eq'](c, ' '):$and26):$and24)):$and22):$and21):$and20))))))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()) {
					$pyjs.track.lineno=323;
					linelen = $p['__op_add']($add67=linelen,$add68=$constant_int_3);
					$pyjs.track.lineno=324;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](((($p['cmp'](linelen, MAXLINESIZE))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})()) {
						$pyjs.track.lineno=325;
						(function(){try{try{$pyjs.in_try_except += 1;
						return odata['append']('=');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
						$pyjs.track.lineno=326;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](crlf);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()) {
							$pyjs.track.lineno=326;
							(function(){try{try{$pyjs.in_try_except += 1;
							return odata['append']('\r');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
						}
						$pyjs.track.lineno=327;
						(function(){try{try{$pyjs.in_try_except += 1;
						return odata['append']('\n');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
						$pyjs.track.lineno=328;
						linelen = $constant_int_3;
					}
					$pyjs.track.lineno=329;
					(function(){try{try{$pyjs.in_try_except += 1;
					return odata['append']($p['__op_add']($add69='=',$add70=(function(){try{try{$pyjs.in_try_except += 1;
					return (typeof two_hex_digits == "undefined"?$m.two_hex_digits:two_hex_digits)((function(){try{try{$pyjs.in_try_except += 1;
					return $p['ord'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
					$pyjs.track.lineno=330;
					inp = $p['__op_add']($add71=inp,$add72=$constant_int_1);
				}
				else {
					$pyjs.track.lineno=332;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['bool']($and28=istext)?($p['bool']($or25=$p['op_eq'](c, '\n'))?$or25:($p['bool']($and30=($p['cmp']($p['__op_add']($add73=inp,$add74=$constant_int_1), (function(){try{try{$pyjs.in_try_except += 1;
					return $p['len'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})()) == -1))?($p['bool']($and31=$p['op_eq'](c, '\r'))?$p['op_eq'](data.__getitem__($p['__op_add']($add75=inp,$add76=$constant_int_1)), '\n'):$and31):$and30)):$and28));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
						$pyjs.track.lineno=335;
						linelen = $constant_int_0;
						$pyjs.track.lineno=337;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](($p['bool']($and33=($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['len'](odata);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})(), $constant_int_0) == 1))?($p['bool']($or27=$p['op_eq'](odata.__getitem__((typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1))), ' '))?$or27:$p['op_eq'](odata.__getitem__((typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))), '\t')):$and33));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()) {
							$pyjs.track.lineno=339;
							ch = (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](odata.__getitem__((typeof ($usub3=$constant_int_1)=='number'?
								-$usub3:
								$p['op_usub']($usub3))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
							$pyjs.track.lineno=340;
							(function(){try{try{$pyjs.in_try_except += 1;
							return odata.__setitem__((typeof ($usub4=$constant_int_1)=='number'?
								-$usub4:
								$p['op_usub']($usub4)), '=');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
							$pyjs.track.lineno=341;
							(function(){try{try{$pyjs.in_try_except += 1;
							return odata['append']((function(){try{try{$pyjs.in_try_except += 1;
							return (typeof two_hex_digits == "undefined"?$m.two_hex_digits:two_hex_digits)(ch);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
						}
						$pyjs.track.lineno=343;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](crlf);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()) {
							$pyjs.track.lineno=343;
							(function(){try{try{$pyjs.in_try_except += 1;
							return odata['append']('\r');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
						}
						$pyjs.track.lineno=344;
						(function(){try{try{$pyjs.in_try_except += 1;
						return odata['append']('\n');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
						$pyjs.track.lineno=345;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']($p['op_eq'](c, '\r'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()) {
							$pyjs.track.lineno=346;
							inp = $p['__op_add']($add77=inp,$add78=$constant_int_2);
						}
						else {
							$pyjs.track.lineno=348;
							inp = $p['__op_add']($add79=inp,$add80=$constant_int_1);
						}
					}
					else {
						$pyjs.track.lineno=350;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](($p['bool']($and35=($p['cmp']($p['__op_add']($add81=inp,$add82=$constant_int_1), (function(){try{try{$pyjs.in_try_except += 1;
						return $p['len'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()) == -1))?($p['bool']($and36=!$p['op_eq'](data.__getitem__($p['__op_add']($add83=inp,$add84=$constant_int_1)), '\n'))?((($p['cmp']($p['__op_add']($add85=linelen,$add86=$constant_int_1), MAXLINESIZE))|1) == 1):$and36):$and35));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()) {
							$pyjs.track.lineno=353;
							(function(){try{try{$pyjs.in_try_except += 1;
							return odata['append']('=');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
							$pyjs.track.lineno=354;
							if ((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool'](crlf);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()) {
								$pyjs.track.lineno=354;
								(function(){try{try{$pyjs.in_try_except += 1;
								return odata['append']('\r');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
							}
							$pyjs.track.lineno=355;
							(function(){try{try{$pyjs.in_try_except += 1;
							return odata['append']('\n');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
							$pyjs.track.lineno=356;
							linelen = $constant_int_0;
						}
						$pyjs.track.lineno=358;
						linelen = $p['__op_add']($add87=linelen,$add88=$constant_int_1);
						$pyjs.track.lineno=359;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](($p['bool']($and38=header)?$p['op_eq'](c, ' '):$and38));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
							$pyjs.track.lineno=360;
							c = '_';
						}
						$pyjs.track.lineno=361;
						(function(){try{try{$pyjs.in_try_except += 1;
						return odata['append'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
						$pyjs.track.lineno=362;
						inp = $p['__op_add']($add89=inp,$add90=$constant_int_1);
					}
				}
			}
			$pyjs.track.lineno=363;
			$pyjs.track.lineno=363;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](odata);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
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
			var arr,$iter7_type,$iter7_nextval,$add94,$iter7_iter,hex_gen,nibble,$add91,$add92,sign,$add93,$iter7_idx,$pyjs__trackstack_size_1,$iter7_array;
			$pyjs.track={module:'binascii',lineno:366};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=366;
			$pyjs.track.lineno=367;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](n, $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()) {
				$pyjs.track.lineno=368;
				$pyjs.track.lineno=368;
				var $pyjs__ret = '0';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=370;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](n, $constant_int_0) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})()) {
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
			arr = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
			$pyjs.track.lineno=377;
			hex_gen = function(n) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $mod5,$mod6,iterlist,$div2,$div1;
				$pyjs.track={module:'binascii',lineno:377};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=377;
				$pyjs.track.lineno=382;
				iterlist = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
				$pyjs.track.lineno=383;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](n);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})()) {
					$pyjs.track.lineno=384;
					(function(){try{try{$pyjs.in_try_except += 1;
					return iterlist['append']((typeof ($mod5=n)==typeof ($mod6=$constant_int_16) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
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
			$iter7_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return hex_gen(n);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
				nibble = $iter7_nextval.$nextval;
				$pyjs.track.lineno=389;
				arr = $p['__op_add']($add91=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([$m['hex_numbers'].__getitem__(nibble)]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})(),$add92=arr);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=390;
			$pyjs.track.lineno=390;
			var $pyjs__ret = $p['__op_add']($add93=sign,$add94=(function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](arr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})());
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['hex'].__name__ = 'hex';

		$m['hex'].__bind_type__ = 0;
		$m['hex'].__args__ = [null,null,['n']];
		$pyjs.track.lineno=392;
		$m['two_hex_digits'] = function(n) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add95,$add96,$mod7,$div3,$mod8,$div4;
			$pyjs.track={module:'binascii',lineno:392};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=392;
			$pyjs.track.lineno=393;
			$pyjs.track.lineno=393;
			var $pyjs__ret = $p['__op_add']($add95=$m['hex_numbers'].__getitem__((typeof ($div3=n)==typeof ($div4=$constant_int_16) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))),$add96=$m['hex_numbers'].__getitem__((typeof ($mod7=n)==typeof ($mod8=$constant_int_16) && typeof $mod7=='number'?
				(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
				$p['op_mod']($mod7,$mod8))));
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
			$iter8_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return s;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
				c = $iter8_nextval.$nextval;
				$pyjs.track.lineno=399;
				i = $p['__op_add']($add97=(typeof ($mul3=i)==typeof ($mul4=$constant_int_16) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)),$add98=(function(){try{try{$pyjs.in_try_except += 1;
				return $m['hex_numbers']['index'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})());
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
		$m['table_a2b_hqx'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([$m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['SKIP'], $m['FAIL'], $m['FAIL'], $m['SKIP'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4, $constant_int_5, $constant_int_6, $constant_int_7, $constant_int_8, $constant_int_9, $constant_int_10, $constant_int_11, $constant_int_12, $m['FAIL'], $m['FAIL'], $constant_int_13, $constant_int_14, $constant_int_15, $constant_int_16, $constant_int_17, $constant_int_18, $constant_int_19, $m['FAIL'], $constant_int_20, $constant_int_21, $m['DONE'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $constant_int_22, $constant_int_23, $constant_int_24, $constant_int_25, $constant_int_26, $constant_int_27, $constant_int_28, $constant_int_29, $constant_int_30, $constant_int_31, $constant_int_32, $constant_int_33, $constant_int_34, $constant_int_35, $constant_int_36, $m['FAIL'], $constant_int_37, $constant_int_38, $constant_int_39, $constant_int_40, $constant_int_41, $constant_int_42, $constant_int_43, $m['FAIL'], $constant_int_44, $constant_int_45, $constant_int_46, $constant_int_47, $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $constant_int_48, $constant_int_49, $constant_int_50, $constant_int_51, $constant_int_52, $constant_int_53, $constant_int_54, $m['FAIL'], $constant_int_55, $constant_int_56, $constant_int_57, $constant_int_58, $constant_int_59, $constant_int_60, $m['FAIL'], $m['FAIL'], $constant_int_61, $constant_int_62, $constant_int_63, $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
		$pyjs.track.lineno=459;
		$m['a2b_hqx'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter10_nextval,$iter10_idx,length,$iter10_array,quadruples_gen,snippet,$pyjs_try_err,done,result,iterlist,$iter10_type,$pyjs__trackstack_size_2,$iter10_iter;
			$pyjs.track={module:'binascii',lineno:459};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=459;
			$pyjs.track.lineno=460;
			result = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
			$pyjs.track.lineno=462;
			quadruples_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var c,$iter9_iter,res,$iter9_nextval,$iter9_idx,$iter9_array,t,iterlist,$pyjs__trackstack_size_1,$iter9_type;
				$pyjs.track={module:'binascii',lineno:462};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=462;
				$pyjs.track.lineno=463;
				t = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
				$pyjs.track.lineno=479;
				iterlist = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
				$pyjs.track.lineno=480;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter9_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return s;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
					c = $iter9_nextval.$nextval;
					$pyjs.track.lineno=481;
					res = $m['table_a2b_hqx'].__getitem__((function(){try{try{$pyjs.in_try_except += 1;
					return $p['ord'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})());
					$pyjs.track.lineno=482;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](res, $m['SKIP']));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})()) {
						$pyjs.track.lineno=483;
						continue;
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](res, $m['FAIL']));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})()) {
						$pyjs.track.lineno=485;
						$pyjs.__active_exception_stack__ = null;
						throw ((function(){try{try{$pyjs.in_try_except += 1;
						return $m['Error']('Illegal character');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})());
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](res, $m['DONE']));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})()) {
						$pyjs.track.lineno=487;
						(function(){try{try{$pyjs.in_try_except += 1;
						return iterlist['append'](t);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
						$pyjs.track.lineno=488;
						$pyjs.track.lineno=488;
						var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
						return $p['tuple']([iterlist, true]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					else {
						$pyjs.track.lineno=490;
						(function(){try{try{$pyjs.in_try_except += 1;
						return t['append'](res);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
					}
					$pyjs.track.lineno=491;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['len'](t);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})(), $constant_int_4));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()) {
						$pyjs.track.lineno=492;
						(function(){try{try{$pyjs.in_try_except += 1;
						return iterlist['append'](t);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
						$pyjs.track.lineno=493;
						t = (function(){try{try{$pyjs.in_try_except += 1;
						return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=494;
				(function(){try{try{$pyjs.in_try_except += 1;
				return iterlist['append'](t);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
				$pyjs.track.lineno=495;
				$pyjs.track.lineno=495;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([iterlist, false]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
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
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=500;
					var $tupleassign5 = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
					return quadruples_gen(s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
					iterlist = $tupleassign5[0];
					done = $tupleassign5[1];
					$pyjs.track.lineno=501;
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter10_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return iterlist;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval).$nextval) != 'undefined') {
						snippet = $iter10_nextval.$nextval;
						$pyjs.track.lineno=502;
						length = (function(){try{try{$pyjs.in_try_except += 1;
						return $p['len'](snippet);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})();
						$pyjs.track.lineno=503;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']($p['op_eq'](length, $constant_int_4));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()) {
							$pyjs.track.lineno=504;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_0), $constant_int_63),$constant_int_2), $p['op_bitshiftright'](snippet.__getitem__($constant_int_1),$constant_int_4)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
							$pyjs.track.lineno=505;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_1), $constant_int_15),$constant_int_4), $p['op_bitshiftright'](snippet.__getitem__($constant_int_2),$constant_int_2)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
							$pyjs.track.lineno=506;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_2), $constant_int_3),$constant_int_6), snippet.__getitem__($constant_int_3)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})();
						}
						else if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']($p['op_eq'](length, $constant_int_3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})()) {
							$pyjs.track.lineno=508;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_0), $constant_int_63),$constant_int_2), $p['op_bitshiftright'](snippet.__getitem__($constant_int_1),$constant_int_4)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
							$pyjs.track.lineno=509;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_1), $constant_int_15),$constant_int_4), $p['op_bitshiftright'](snippet.__getitem__($constant_int_2),$constant_int_2)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
						}
						else if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']($p['op_eq'](length, $constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})()) {
							$pyjs.track.lineno=511;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['chr']($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_0), $constant_int_63),$constant_int_2), $p['op_bitshiftright'](snippet.__getitem__($constant_int_1),$constant_int_4)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='binascii';
				} finally { $pyjs.in_try_except -= 1; }
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})(), done]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['a2b_hqx'].__name__ = 'a2b_hqx';

		$m['a2b_hqx'].__bind_type__ = 0;
		$m['a2b_hqx'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=518;
		$m['b2a_hqx'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter11_idx,$iter11_iter,$iter11_type,length,snippet,result,$iter11_array,$iter11_nextval,triples_gen,$pyjs__trackstack_size_1;
			$pyjs.track={module:'binascii',lineno:518};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=518;
			$pyjs.track.lineno=519;
			result = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
			$pyjs.track.lineno=521;
			triples_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $pyjs_try_err,iterlist;
				$pyjs.track={module:'binascii',lineno:521};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=521;
				$pyjs.track.lineno=528;
				iterlist = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
				$pyjs.track.lineno=529;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})()) {
					$pyjs.track.lineno=530;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						try {
							$pyjs.in_try_except += 1;
							$pyjs.track.lineno=531;
							(function(){try{try{$pyjs.in_try_except += 1;
							return iterlist['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
						} finally { $pyjs.in_try_except -= 1; }
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
								try {
									$pyjs.in_try_except += 1;
									$pyjs.track.lineno=534;
									(function(){try{try{$pyjs.in_try_except += 1;
									return iterlist['append']((function(){try{try{$pyjs.in_try_except += 1;
									return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
									return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
									return $p['ord'](s.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
								} finally { $pyjs.in_try_except -= 1; }
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
									(function(){try{try{$pyjs.in_try_except += 1;
									return iterlist['append']((function(){try{try{$pyjs.in_try_except += 1;
									return $p['tuple']([(function(){try{try{$pyjs.in_try_except += 1;
									return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
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
			$iter11_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return triples_gen(s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval).$nextval) != 'undefined') {
				snippet = $iter11_nextval.$nextval;
				$pyjs.track.lineno=541;
				length = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](snippet);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
				$pyjs.track.lineno=542;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](length, $constant_int_3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})()) {
					$pyjs.track.lineno=544;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($m['hqx_encoding'].__getitem__($p['op_bitshiftright']($p['op_bitand2'](snippet.__getitem__($constant_int_0), $constant_int_252),$constant_int_2)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
					$pyjs.track.lineno=545;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($m['hqx_encoding'].__getitem__($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_0), $constant_int_3),$constant_int_4), $p['op_bitshiftright']($p['op_bitand2'](snippet.__getitem__($constant_int_1), $constant_int_240),$constant_int_4))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
					$pyjs.track.lineno=547;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($m['hqx_encoding'].__getitem__($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_1), $constant_int_15),$constant_int_2), $p['op_bitshiftright']($p['op_bitand2'](snippet.__getitem__($constant_int_2), $constant_int_192),$constant_int_6))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
					$pyjs.track.lineno=549;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($m['hqx_encoding'].__getitem__($p['op_bitand2'](snippet.__getitem__($constant_int_2), $constant_int_63)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})();
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](length, $constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})()) {
					$pyjs.track.lineno=552;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($m['hqx_encoding'].__getitem__($p['op_bitshiftright']($p['op_bitand2'](snippet.__getitem__($constant_int_0), $constant_int_252),$constant_int_2)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})();
					$pyjs.track.lineno=553;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($m['hqx_encoding'].__getitem__($p['op_bitor2']($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_0), $constant_int_3),$constant_int_4), $p['op_bitshiftright']($p['op_bitand2'](snippet.__getitem__($constant_int_1), $constant_int_240),$constant_int_4))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
					$pyjs.track.lineno=555;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($m['hqx_encoding'].__getitem__($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_1), $constant_int_15),$constant_int_2)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})();
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](length, $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})()) {
					$pyjs.track.lineno=559;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($m['hqx_encoding'].__getitem__($p['op_bitshiftright']($p['op_bitand2'](snippet.__getitem__($constant_int_0), $constant_int_252),$constant_int_2)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
					$pyjs.track.lineno=560;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($m['hqx_encoding'].__getitem__($p['op_bitshiftleft']($p['op_bitand2'](snippet.__getitem__($constant_int_0), $constant_int_3),$constant_int_4)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})();
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=562;
			$pyjs.track.lineno=562;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b2a_hqx'].__name__ = 'b2a_hqx';

		$m['b2a_hqx'].__bind_type__ = 0;
		$m['b2a_hqx'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=564;
		$m['crctab_hqx'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([$constant_int_0, $constant_int_4129, $constant_int_8258, $constant_int_12387, $constant_int_16516, $constant_int_20645, $constant_int_24774, $constant_int_28903, $constant_int_33032, $constant_int_37161, $constant_int_41290, $constant_int_45419, $constant_int_49548, $constant_int_53677, $constant_int_57806, $constant_int_61935, $constant_int_4657, $constant_int_528, $constant_int_12915, $constant_int_8786, $constant_int_21173, $constant_int_17044, $constant_int_29431, $constant_int_25302, $constant_int_37689, $constant_int_33560, $constant_int_45947, $constant_int_41818, $constant_int_54205, $constant_int_50076, $constant_int_62463, $constant_int_58334, $constant_int_9314, $constant_int_13379, $constant_int_1056, $constant_int_5121, $constant_int_25830, $constant_int_29895, $constant_int_17572, $constant_int_21637, $constant_int_42346, $constant_int_46411, $constant_int_34088, $constant_int_38153, $constant_int_58862, $constant_int_62927, $constant_int_50604, $constant_int_54669, $constant_int_13907, $constant_int_9842, $constant_int_5649, $constant_int_1584, $constant_int_30423, $constant_int_26358, $constant_int_22165, $constant_int_18100, $constant_int_46939, $constant_int_42874, $constant_int_38681, $constant_int_34616, $constant_int_63455, $constant_int_59390, $constant_int_55197, $constant_int_51132, $constant_int_18628, $constant_int_22757, $constant_int_26758, $constant_int_30887, $constant_int_2112, $constant_int_6241, $constant_int_10242, $constant_int_14371, $constant_int_51660, $constant_int_55789, $constant_int_59790, $constant_int_63919, $constant_int_35144, $constant_int_39273, $constant_int_43274, $constant_int_47403, $constant_int_23285, $constant_int_19156, $constant_int_31415, $constant_int_27286, $constant_int_6769, $constant_int_2640, $constant_int_14899, $constant_int_10770, $constant_int_56317, $constant_int_52188, $constant_int_64447, $constant_int_60318, $constant_int_39801, $constant_int_35672, $constant_int_47931, $constant_int_43802, $constant_int_27814, $constant_int_31879, $constant_int_19684, $constant_int_23749, $constant_int_11298, $constant_int_15363, $constant_int_3168, $constant_int_7233, $constant_int_60846, $constant_int_64911, $constant_int_52716, $constant_int_56781, $constant_int_44330, $constant_int_48395, $constant_int_36200, $constant_int_40265, $constant_int_32407, $constant_int_28342, $constant_int_24277, $constant_int_20212, $constant_int_15891, $constant_int_11826, $constant_int_7761, $constant_int_3696, $constant_int_65439, $constant_int_61374, $constant_int_57309, $constant_int_53244, $constant_int_48923, $constant_int_44858, $constant_int_40793, $constant_int_36728, $constant_int_37256, $constant_int_33193, $constant_int_45514, $constant_int_41451, $constant_int_53516, $constant_int_49453, $constant_int_61774, $constant_int_57711, $constant_int_4224, $constant_int_161, $constant_int_12482, $constant_int_8419, $constant_int_20484, $constant_int_16421, $constant_int_28742, $constant_int_24679, $constant_int_33721, $constant_int_37784, $constant_int_41979, $constant_int_46042, $constant_int_49981, $constant_int_54044, $constant_int_58239, $constant_int_62302, $constant_int_689, $constant_int_4752, $constant_int_8947, $constant_int_13010, $constant_int_16949, $constant_int_21012, $constant_int_25207, $constant_int_29270, $constant_int_46570, $constant_int_42443, $constant_int_38312, $constant_int_34185, $constant_int_62830, $constant_int_58703, $constant_int_54572, $constant_int_50445, $constant_int_13538, $constant_int_9411, $constant_int_5280, $constant_int_1153, $constant_int_29798, $constant_int_25671, $constant_int_21540, $constant_int_17413, $constant_int_42971, $constant_int_47098, $constant_int_34713, $constant_int_38840, $constant_int_59231, $constant_int_63358, $constant_int_50973, $constant_int_55100, $constant_int_9939, $constant_int_14066, $constant_int_1681, $constant_int_5808, $constant_int_26199, $constant_int_30326, $constant_int_17941, $constant_int_22068, $constant_int_55628, $constant_int_51565, $constant_int_63758, $constant_int_59695, $constant_int_39368, $constant_int_35305, $constant_int_47498, $constant_int_43435, $constant_int_22596, $constant_int_18533, $constant_int_30726, $constant_int_26663, $constant_int_6336, $constant_int_2273, $constant_int_14466, $constant_int_10403, $constant_int_52093, $constant_int_56156, $constant_int_60223, $constant_int_64286, $constant_int_35833, $constant_int_39896, $constant_int_43963, $constant_int_48026, $constant_int_19061, $constant_int_23124, $constant_int_27191, $constant_int_31254, $constant_int_2801, $constant_int_6864, $constant_int_10931, $constant_int_14994, $constant_int_64814, $constant_int_60687, $constant_int_56684, $constant_int_52557, $constant_int_48554, $constant_int_44427, $constant_int_40424, $constant_int_36297, $constant_int_31782, $constant_int_27655, $constant_int_23652, $constant_int_19525, $constant_int_15522, $constant_int_11395, $constant_int_7392, $constant_int_3265, $constant_int_61215, $constant_int_65342, $constant_int_53085, $constant_int_57212, $constant_int_44955, $constant_int_49082, $constant_int_36825, $constant_int_40952, $constant_int_28183, $constant_int_32310, $constant_int_20053, $constant_int_24180, $constant_int_11923, $constant_int_16050, $constant_int_3793, $constant_int_7920]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
		$pyjs.track.lineno=599;
		$m['crc_hqx'] = function(s, crc) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var c,$iter12_type,$iter12_array,$iter12_iter,$pyjs__trackstack_size_1,$iter12_idx,$iter12_nextval;
			$pyjs.track={module:'binascii',lineno:599};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=599;
			$pyjs.track.lineno=600;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter12_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return s;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})();
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval).$nextval) != 'undefined') {
				c = $iter12_nextval.$nextval;
				$pyjs.track.lineno=601;
				crc = $p['op_bitxor2']($p['op_bitand2']($p['op_bitshiftleft'](crc,$constant_int_8), $constant_int_65280), $m['crctab_hqx'].__getitem__($p['op_bitxor2']($p['op_bitand2']($p['op_bitshiftright'](crc,$constant_int_8), $constant_int_255), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['ord'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})())));
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
			var result,$add104,$and41,$and40,prev,$iter13_array,$add101,$add100,$add103,$add102,$add99,$mul8,$mul7,$mul6,$mul5,count,c,$iter13_nextval,$iter13_iter,$iter13_type,$pyjs__trackstack_size_1,$iter13_idx;
			$pyjs.track={module:'binascii',lineno:605};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=605;
			$pyjs.track.lineno=611;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool'](s));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})()) {
				$pyjs.track.lineno=612;
				$pyjs.track.lineno=612;
				var $pyjs__ret = '';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=613;
			result = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})();
			$pyjs.track.lineno=614;
			prev = s.__getitem__($constant_int_0);
			$pyjs.track.lineno=615;
			count = $constant_int_1;
			$pyjs.track.lineno=620;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](s.__getitem__((typeof ($usub6=$constant_int_1)=='number'?
				-$usub6:
				$p['op_usub']($usub6))), '!'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})()) {
				$pyjs.track.lineno=621;
				s = $p['__op_add']($add99=$p['__getslice'](s, $constant_int_1, null),$add100='?');
			}
			else {
				$pyjs.track.lineno=623;
				s = $p['__op_add']($add101=$p['__getslice'](s, $constant_int_1, null),$add102='!');
			}
			$pyjs.track.lineno=625;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter13_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return s;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval).$nextval) != 'undefined') {
				c = $iter13_nextval.$nextval;
				$pyjs.track.lineno=626;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and40=$p['op_eq'](c, prev))?($p['cmp'](count, $constant_int_255) == -1):$and40));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})()) {
					$pyjs.track.lineno=627;
					count = $p['__op_add']($add103=count,$add104=$constant_int_1);
				}
				else {
					$pyjs.track.lineno=629;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](count, $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})()) {
						$pyjs.track.lineno=630;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](!$p['op_eq'](prev, '\x90'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})()) {
							$pyjs.track.lineno=631;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['append'](prev);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})();
						}
						else {
							$pyjs.track.lineno=633;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['extend']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['list'](['\x90', '\x00']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})();
						}
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp'](count, $constant_int_4) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})()) {
						$pyjs.track.lineno=635;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](!$p['op_eq'](prev, '\x90'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})()) {
							$pyjs.track.lineno=636;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['extend']((typeof ($mul5=(function(){try{try{$pyjs.in_try_except += 1;
							return $p['list']([prev]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})())==typeof ($mul6=count) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})();
						}
						else {
							$pyjs.track.lineno=638;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['extend']((typeof ($mul7=(function(){try{try{$pyjs.in_try_except += 1;
							return $p['list'](['\x90', '\x00']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})())==typeof ($mul8=count) && typeof $mul7=='number'?
								$mul7*$mul8:
								$p['op_mul']($mul7,$mul8)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})();
						}
					}
					else {
						$pyjs.track.lineno=640;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](!$p['op_eq'](prev, '\x90'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})()) {
							$pyjs.track.lineno=641;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['extend']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['list']([prev, '\x90', (function(){try{try{$pyjs.in_try_except += 1;
							return $p['chr'](count);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})();
						}
						else {
							$pyjs.track.lineno=643;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['extend']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['list'](['\x90', '\x00', '\x90', (function(){try{try{$pyjs.in_try_except += 1;
							return $p['chr'](count);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})();
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
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['rlecode_hqx'].__name__ = 'rlecode_hqx';

		$m['rlecode_hqx'].__bind_type__ = 0;
		$m['rlecode_hqx'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=649;
		$m['rledecode_hqx'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var count,$iter14_array,$iter14_type,$sub27,$mul10,$mul9,$sub28,snippet,result,$iter14_iter,$pyjs__trackstack_size_1,prev,$iter14_idx,$iter14_nextval;
			$pyjs.track={module:'binascii',lineno:649};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=649;
			$pyjs.track.lineno=650;
			s = (function(){try{try{$pyjs.in_try_except += 1;
			return s['$$split']('\x90');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})();
			$pyjs.track.lineno=651;
			result = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([s.__getitem__($constant_int_0)]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})();
			$pyjs.track.lineno=652;
			prev = s.__getitem__($constant_int_0);
			$pyjs.track.lineno=653;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter14_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__getslice'](s, $constant_int_1, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})();
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval).$nextval) != 'undefined') {
				snippet = $iter14_nextval.$nextval;
				$pyjs.track.lineno=654;
				count = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['ord'](snippet.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
				$pyjs.track.lineno=655;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp'](count, $constant_int_0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})()) {
					$pyjs.track.lineno=656;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']((typeof ($mul9=prev.__getitem__((typeof ($usub7=$constant_int_1)=='number'?
						-$usub7:
						$p['op_usub']($usub7))))==typeof ($mul10=$p['__op_sub']($sub27=count,$sub28=$constant_int_1)) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})();
					$pyjs.track.lineno=657;
					prev = snippet;
				}
				else {
					$pyjs.track.lineno=659;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']('\x90');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})();
					$pyjs.track.lineno=660;
					prev = '\x90';
				}
				$pyjs.track.lineno=661;
				(function(){try{try{$pyjs.in_try_except += 1;
				return result['append']($p['__getslice'](snippet, $constant_int_1, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=663;
			$pyjs.track.lineno=663;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['rledecode_hqx'].__name__ = 'rledecode_hqx';

		$m['rledecode_hqx'].__bind_type__ = 0;
		$m['rledecode_hqx'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=665;
		$m['crc_32_tab'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([$constant_long_0, $constant_long_1996959894, $constant_long_3993919788, $constant_long_2567524794, $constant_long_124634137, $constant_long_1886057615, $constant_long_3915621685, $constant_long_2657392035, $constant_long_249268274, $constant_long_2044508324, $constant_long_3772115230, $constant_long_2547177864, $constant_long_162941995, $constant_long_2125561021, $constant_long_3887607047, $constant_long_2428444049, $constant_long_498536548, $constant_long_1789927666, $constant_long_4089016648, $constant_long_2227061214, $constant_long_450548861, $constant_long_1843258603, $constant_long_4107580753, $constant_long_2211677639, $constant_long_325883990, $constant_long_1684777152, $constant_long_4251122042, $constant_long_2321926636, $constant_long_335633487, $constant_long_1661365465, $constant_long_4195302755, $constant_long_2366115317, $constant_long_997073096, $constant_long_1281953886, $constant_long_3579855332, $constant_long_2724688242, $constant_long_1006888145, $constant_long_1258607687, $constant_long_3524101629, $constant_long_2768942443, $constant_long_901097722, $constant_long_1119000684, $constant_long_3686517206, $constant_long_2898065728, $constant_long_853044451, $constant_long_1172266101, $constant_long_3705015759, $constant_long_2882616665, $constant_long_651767980, $constant_long_1373503546, $constant_long_3369554304, $constant_long_3218104598, $constant_long_565507253, $constant_long_1454621731, $constant_long_3485111705, $constant_long_3099436303, $constant_long_671266974, $constant_long_1594198024, $constant_long_3322730930, $constant_long_2970347812, $constant_long_795835527, $constant_long_1483230225, $constant_long_3244367275, $constant_long_3060149565, $constant_long_1994146192, $constant_long_31158534, $constant_long_2563907772, $constant_long_4023717930, $constant_long_1907459465, $constant_long_112637215, $constant_long_2680153253, $constant_long_3904427059, $constant_long_2013776290, $constant_long_251722036, $constant_long_2517215374, $constant_long_3775830040, $constant_long_2137656763, $constant_long_141376813, $constant_long_2439277719, $constant_long_3865271297, $constant_long_1802195444, $constant_long_476864866, $constant_long_2238001368, $constant_long_4066508878, $constant_long_1812370925, $constant_long_453092731, $constant_long_2181625025, $constant_long_4111451223, $constant_long_1706088902, $constant_long_314042704, $constant_long_2344532202, $constant_long_4240017532, $constant_long_1658658271, $constant_long_366619977, $constant_long_2362670323, $constant_long_4224994405, $constant_long_1303535960, $constant_long_984961486, $constant_long_2747007092, $constant_long_3569037538, $constant_long_1256170817, $constant_long_1037604311, $constant_long_2765210733, $constant_long_3554079995, $constant_long_1131014506, $constant_long_879679996, $constant_long_2909243462, $constant_long_3663771856, $constant_long_1141124467, $constant_long_855842277, $constant_long_2852801631, $constant_long_3708648649, $constant_long_1342533948, $constant_long_654459306, $constant_long_3188396048, $constant_long_3373015174, $constant_long_1466479909, $constant_long_544179635, $constant_long_3110523913, $constant_long_3462522015, $constant_long_1591671054, $constant_long_702138776, $constant_long_2966460450, $constant_long_3352799412, $constant_long_1504918807, $constant_long_783551873, $constant_long_3082640443, $constant_long_3233442989, $constant_long_3988292384, $constant_long_2596254646, $constant_long_62317068, $constant_long_1957810842, $constant_long_3939845945, $constant_long_2647816111, $constant_long_81470997, $constant_long_1943803523, $constant_long_3814918930, $constant_long_2489596804, $constant_long_225274430, $constant_long_2053790376, $constant_long_3826175755, $constant_long_2466906013, $constant_long_167816743, $constant_long_2097651377, $constant_long_4027552580, $constant_long_2265490386, $constant_long_503444072, $constant_long_1762050814, $constant_long_4150417245, $constant_long_2154129355, $constant_long_426522225, $constant_long_1852507879, $constant_long_4275313526, $constant_long_2312317920, $constant_long_282753626, $constant_long_1742555852, $constant_long_4189708143, $constant_long_2394877945, $constant_long_397917763, $constant_long_1622183637, $constant_long_3604390888, $constant_long_2714866558, $constant_long_953729732, $constant_long_1340076626, $constant_long_3518719985, $constant_long_2797360999, $constant_long_1068828381, $constant_long_1219638859, $constant_long_3624741850, $constant_long_2936675148, $constant_long_906185462, $constant_long_1090812512, $constant_long_3747672003, $constant_long_2825379669, $constant_long_829329135, $constant_long_1181335161, $constant_long_3412177804, $constant_long_3160834842, $constant_long_628085408, $constant_long_1382605366, $constant_long_3423369109, $constant_long_3138078467, $constant_long_570562233, $constant_long_1426400815, $constant_long_3317316542, $constant_long_2998733608, $constant_long_733239954, $constant_long_1555261956, $constant_long_3268935591, $constant_long_3050360625, $constant_long_752459403, $constant_long_1541320221, $constant_long_2607071920, $constant_long_3965973030, $constant_long_1969922972, $constant_long_40735498, $constant_long_2617837225, $constant_long_3943577151, $constant_long_1913087877, $constant_long_83908371, $constant_long_2512341634, $constant_long_3803740692, $constant_long_2075208622, $constant_long_213261112, $constant_long_2463272603, $constant_long_3855990285, $constant_long_2094854071, $constant_long_198958881, $constant_long_2262029012, $constant_long_4057260610, $constant_long_1759359992, $constant_long_534414190, $constant_long_2176718541, $constant_long_4139329115, $constant_long_1873836001, $constant_long_414664567, $constant_long_2282248934, $constant_long_4279200368, $constant_long_1711684554, $constant_long_285281116, $constant_long_2405801727, $constant_long_4167216745, $constant_long_1634467795, $constant_long_376229701, $constant_long_2685067896, $constant_long_3608007406, $constant_long_1308918612, $constant_long_956543938, $constant_long_2808555105, $constant_long_3495958263, $constant_long_1231636301, $constant_long_1047427035, $constant_long_2932959818, $constant_long_3654703836, $constant_long_1088359270, $constant_long_936918000, $constant_long_2847714899, $constant_long_3736837829, $constant_long_1202900863, $constant_long_817233897, $constant_long_3183342108, $constant_long_3401237130, $constant_long_1404277552, $constant_long_615818150, $constant_long_3134207493, $constant_long_3453421203, $constant_long_1423857449, $constant_long_601450431, $constant_long_3009837614, $constant_long_3294710456, $constant_long_1567103746, $constant_long_711928724, $constant_long_3020668471, $constant_long_3272380065, $constant_long_1510334235, $constant_long_755167117]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
		$pyjs.track.lineno=720;
		$m['crc32'] = function(s, crc) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof crc == 'undefined') crc=arguments.callee.__args__[3][1];
			var $pyjs__trackstack_size_1,result,$mod9,$pow7,$pow6,$pow5,$pow4,$pow3,$iter15_iter,$pow1,$pow8,$sub30,$sub29,$add105,$mod10,$add106,$iter15_array,$pow2,c,$iter15_idx,$iter15_nextval,$iter15_type;
			$pyjs.track={module:'binascii',lineno:720};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=720;
			$pyjs.track.lineno=721;
			result = $constant_int_0;
			$pyjs.track.lineno=722;
			crc = $p['op_bitand2']($p['op_invert']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['long'](crc);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})()), $constant_long_4294967295);
			$pyjs.track.lineno=723;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter15_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return s;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})();
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval).$nextval) != 'undefined') {
				c = $iter15_nextval.$nextval;
				$pyjs.track.lineno=724;
				crc = $p['op_bitxor2']($m['crc_32_tab'].__getitem__($p['op_bitand2']($p['op_bitxor2'](crc, (function(){try{try{$pyjs.in_try_except += 1;
				return $p['long']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['ord'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})()), $constant_long_255)), $p['op_bitshiftright'](crc,$constant_int_8));
				$pyjs.track.lineno=727;
				result = $p['op_bitxor2'](crc, $constant_long_4294967295);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=729;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](result, (typeof ($pow1=$constant_int_2)==typeof ($pow2=$constant_int_31) && typeof $pow1=='number'?
				Math.pow($pow1,$pow2):
				$p['op_pow']($pow1,$pow2))) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})()) {
				$pyjs.track.lineno=730;
				result = $p['__op_sub']($sub29=(typeof ($mod9=$p['__op_add']($add105=result,$add106=(typeof ($pow3=$constant_int_2)==typeof ($pow4=$constant_int_31) && typeof $pow3=='number'?
					Math.pow($pow3,$pow4):
					$p['op_pow']($pow3,$pow4))))==typeof ($mod10=(typeof ($pow5=$constant_int_2)==typeof ($pow6=$constant_int_32) && typeof $pow5=='number'?
					Math.pow($pow5,$pow6):
					$p['op_pow']($pow5,$pow6))) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)),$sub30=(typeof ($pow7=$constant_int_2)==typeof ($pow8=$constant_int_31) && typeof $pow7=='number'?
					Math.pow($pow7,$pow8):
					$p['op_pow']($pow7,$pow8)));
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
			var $add114,$add112,$add113,$add110,$add111,$$char,result,$iter16_iter,$iter16_type,$iter16_nextval,$sub31,$sub33,$sub32,$sub34,$add107,$add109,$add108,$iter16_array,$iter16_idx,c,$pyjs__trackstack_size_1;
			$pyjs.track={module:'binascii',lineno:734};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=734;
			$pyjs.track.lineno=735;
			result = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})();
			$pyjs.track.lineno=736;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter16_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return s;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})();
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval).$nextval) != 'undefined') {
				$$char = $iter16_nextval.$nextval;
				$pyjs.track.lineno=737;
				c = $p['op_bitand2']($p['op_bitshiftright']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['ord']($$char);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})(),$constant_int_4), $constant_int_15);
				$pyjs.track.lineno=738;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp'](c, $constant_int_9) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})()) {
					$pyjs.track.lineno=739;
					c = $p['__op_sub']($sub31=$p['__op_add']($add107=c,$add108=(function(){try{try{$pyjs.in_try_except += 1;
					return $p['ord']('a');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})()),$sub32=$constant_int_10);
				}
				else {
					$pyjs.track.lineno=741;
					c = $p['__op_add']($add109=c,$add110=(function(){try{try{$pyjs.in_try_except += 1;
					return $p['ord']('0');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})());
				}
				$pyjs.track.lineno=742;
				(function(){try{try{$pyjs.in_try_except += 1;
				return result['append']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['chr'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})();
				$pyjs.track.lineno=743;
				c = $p['op_bitand2']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['ord']($$char);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})(), $constant_int_15);
				$pyjs.track.lineno=744;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp'](c, $constant_int_9) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})()) {
					$pyjs.track.lineno=745;
					c = $p['__op_sub']($sub33=$p['__op_add']($add111=c,$add112=(function(){try{try{$pyjs.in_try_except += 1;
					return $p['ord']('a');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})()),$sub34=$constant_int_10);
				}
				else {
					$pyjs.track.lineno=747;
					c = $p['__op_add']($add113=c,$add114=(function(){try{try{$pyjs.in_try_except += 1;
					return $p['ord']('0');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})());
				}
				$pyjs.track.lineno=748;
				(function(){try{try{$pyjs.in_try_except += 1;
				return result['append']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['chr'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=749;
			$pyjs.track.lineno=749;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b2a_hex'].__name__ = 'b2a_hex';

		$m['b2a_hex'].__bind_type__ = 0;
		$m['b2a_hex'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=751;
		$m['hexlify'] = $m['b2a_hex'];
		$pyjs.track.lineno=753;
		$m['table_hex'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([(typeof ($usub8=$constant_int_1)=='number'?
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
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})();
		$pyjs.track.lineno=765;
		$m['a2b_hex'] = function(t) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter17_nextval,a,$or29,$iter17_iter,$add116,$pyjs__trackstack_size_1,pairs_gen,$iter17_array,b,$iter17_idx,$iter17_type,$or30,$add115,result;
			$pyjs.track={module:'binascii',lineno:765};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=765;
			$pyjs.track.lineno=766;
			result = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})();
			$pyjs.track.lineno=768;
			pairs_gen = function(s) {
				if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				var $pyjs_try_err,iterlist;
				$pyjs.track={module:'binascii',lineno:768};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='binascii';
				$pyjs.track.lineno=768;
				$pyjs.track.lineno=777;
				iterlist = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})();
				$pyjs.track.lineno=778;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})()) {
					$pyjs.track.lineno=779;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						try {
							$pyjs.in_try_except += 1;
							$pyjs.track.lineno=780;
							(function(){try{try{$pyjs.in_try_except += 1;
							return iterlist['append']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['tuple']([$m['table_hex'].__getitem__((function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})()), $m['table_hex'].__getitem__((function(){try{try{$pyjs.in_try_except += 1;
							return $p['ord'](s.__getitem__($constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})())]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})();
						} finally { $pyjs.in_try_except -= 1; }
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
							if ((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['len'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})()) {
								$pyjs.track.lineno=783;
								$pyjs.__active_exception_stack__ = null;
								throw ((function(){try{try{$pyjs.in_try_except += 1;
								return $p['TypeError']('Odd-length string');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_328_err){if (!$p['isinstance']($pyjs_dbg_328_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_328_err);}throw $pyjs_dbg_328_err;
}})());
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
			$iter17_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return pairs_gen(t);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_330_err){if (!$p['isinstance']($pyjs_dbg_330_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_330_err);}throw $pyjs_dbg_330_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_331_err){if (!$p['isinstance']($pyjs_dbg_331_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_331_err);}throw $pyjs_dbg_331_err;
}})();
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval).$nextval) != 'undefined') {
				var $tupleassign6 = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__ass_unpack']($iter17_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_329_err){if (!$p['isinstance']($pyjs_dbg_329_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_329_err);}throw $pyjs_dbg_329_err;
}})();
				a = $tupleassign6[0];
				b = $tupleassign6[1];
				$pyjs.track.lineno=789;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($or29=($p['cmp'](a, $constant_int_0) == -1))?$or29:($p['cmp'](b, $constant_int_0) == -1)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_332_err){if (!$p['isinstance']($pyjs_dbg_332_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_332_err);}throw $pyjs_dbg_332_err;
}})()) {
					$pyjs.track.lineno=790;
					$pyjs.__active_exception_stack__ = null;
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['TypeError']('Non-hexadecimal digit found');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_333_err){if (!$p['isinstance']($pyjs_dbg_333_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_333_err);}throw $pyjs_dbg_333_err;
}})());
				}
				$pyjs.track.lineno=791;
				(function(){try{try{$pyjs.in_try_except += 1;
				return result['append']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['chr']($p['__op_add']($add115=$p['op_bitshiftleft'](a,$constant_int_4),$add116=b));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_334_err){if (!$p['isinstance']($pyjs_dbg_334_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_334_err);}throw $pyjs_dbg_334_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_335_err){if (!$p['isinstance']($pyjs_dbg_335_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_335_err);}throw $pyjs_dbg_335_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='binascii';
			$pyjs.track.lineno=792;
			$pyjs.track.lineno=792;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_336_err){if (!$p['isinstance']($pyjs_dbg_336_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_336_err);}throw $pyjs_dbg_336_err;
}})();
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


