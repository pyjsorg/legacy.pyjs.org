/* start module: base64 */
$pyjs.loaded_modules['base64'] = function (__mod_name__) {
	if($pyjs.loaded_modules['base64'].__was_initialized__) return $pyjs.loaded_modules['base64'];
	var $m = $pyjs.loaded_modules["base64"];
	$m.__repr__ = function() { return "<module: base64>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'base64';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'base64.py, line 1:\n    #! /usr/bin/env python';
		$m.__track_lines__[15] = 'base64.py, line 15:\n    import struct';
		$m.__track_lines__[16] = 'base64.py, line 16:\n    import binascii';
		$m.__track_lines__[19] = 'base64.py, line 19:\n    __all__ = [';
		$m.__track_lines__[34] = 'base64.py, line 34:\n    _translation = [chr(_x) for _x in range(256)]';
		$m.__track_lines__[35] = "base64.py, line 35:\n    EMPTYSTRING = ''";
		$m.__track_lines__[38] = 'base64.py, line 38:\n    def _translate(s, altchars):';
		$m.__track_lines__[39] = 'base64.py, line 39:\n    translation = _translation[:]';
		$m.__track_lines__[40] = 'base64.py, line 40:\n    for k, v in altchars.items():';
		$m.__track_lines__[41] = 'base64.py, line 41:\n    translation[ord(k)] = v';
		$m.__track_lines__[43] = "base64.py, line 43:\n    t = ''";
		$m.__track_lines__[44] = 'base64.py, line 44:\n    for c in s:';
		$m.__track_lines__[45] = 'base64.py, line 45:\n    t += translation[ord(c)]';
		$m.__track_lines__[46] = 'base64.py, line 46:\n    return t';
		$m.__track_lines__[52] = 'base64.py, line 52:\n    def b64encode(s, altchars=None):';
		$m.__track_lines__[63] = 'base64.py, line 63:\n    encoded = binascii.b2a_base64(s)[:-1]';
		$m.__track_lines__[64] = 'base64.py, line 64:\n    if altchars is not None:';
		$m.__track_lines__[65] = "base64.py, line 65:\n    return _translate(encoded, {'+': altchars[0], '/': altchars[1]})";
		$m.__track_lines__[66] = 'base64.py, line 66:\n    return encoded';
		$m.__track_lines__[69] = 'base64.py, line 69:\n    def b64decode(s, altchars=None):';
		$m.__track_lines__[80] = 'base64.py, line 80:\n    if altchars is not None:';
		$m.__track_lines__[81] = "base64.py, line 81:\n    s = _translate(s, {altchars[0]: '+', altchars[1]: '/'})";
		$m.__track_lines__[82] = 'base64.py, line 82:\n    try:';
		$m.__track_lines__[83] = 'base64.py, line 83:\n    return binascii.a2b_base64(s)';
		$m.__track_lines__[86] = 'base64.py, line 86:\n    raise TypeError(msg)';
		$m.__track_lines__[89] = 'base64.py, line 89:\n    def standard_b64encode(s):';
		$m.__track_lines__[94] = 'base64.py, line 94:\n    return b64encode(s)';
		$m.__track_lines__[96] = 'base64.py, line 96:\n    def standard_b64decode(s):';
		$m.__track_lines__[103] = 'base64.py, line 103:\n    return b64decode(s)';
		$m.__track_lines__[105] = 'base64.py, line 105:\n    def urlsafe_b64encode(s):';
		$m.__track_lines__[111] = "base64.py, line 111:\n    return b64encode(s, '-_')";
		$m.__track_lines__[113] = 'base64.py, line 113:\n    def urlsafe_b64decode(s):';
		$m.__track_lines__[122] = "base64.py, line 122:\n    return b64decode(s, '-_')";
		$m.__track_lines__[127] = 'base64.py, line 127:\n    _b32alphabet = {';
		$m.__track_lines__[139] = 'base64.py, line 139:\n    _b32tab = _b32alphabet.items()';
		$m.__track_lines__[140] = 'base64.py, line 140:\n    _b32tab.sort()';
		$m.__track_lines__[141] = 'base64.py, line 141:\n    _b32tab = [v for k, v in _b32tab]';
		$m.__track_lines__[142] = 'base64.py, line 142:\n    _b32rev = dict([(v, k) for k, v in _b32alphabet.items()])';
		$m.__track_lines__[144] = 'base64.py, line 144:\n    def b32encode(s):';
		$m.__track_lines__[149] = 'base64.py, line 149:\n    parts = []';
		$m.__track_lines__[150] = 'base64.py, line 150:\n    quanta, leftover = divmod(len(s), 5)';
		$m.__track_lines__[152] = 'base64.py, line 152:\n    if leftover:';
		$m.__track_lines__[154] = 'base64.py, line 154:\n    s += ("".ljust(5 - leftover, \'\\0\'))';
		$m.__track_lines__[155] = 'base64.py, line 155:\n    quanta += 1';
		$m.__track_lines__[156] = 'base64.py, line 156:\n    for i in range(quanta):';
		$m.__track_lines__[162] = "base64.py, line 162:\n    c1, c2, c3 = struct.unpack('!HHB', s[i*5:(i+1)*5])";
		$m.__track_lines__[163] = 'base64.py, line 163:\n    c2 += (c1 & 1) << 16 # 17 bits wide';
		$m.__track_lines__[164] = 'base64.py, line 164:\n    c3 += (c2 & 3) << 8  # 10 bits wide';
		$m.__track_lines__[165] = 'base64.py, line 165:\n    parts.extend([_b32tab[c1 >> 11],         # bits 1 - 5';
		$m.__track_lines__[174] = 'base64.py, line 174:\n    encoded = EMPTYSTRING.join(parts)';
		$m.__track_lines__[176] = 'base64.py, line 176:\n    if leftover == 1:';
		$m.__track_lines__[177] = "base64.py, line 177:\n    return encoded[:-6] + '======'";
		$m.__track_lines__[179] = "base64.py, line 179:\n    return encoded[:-4] + '===='";
		$m.__track_lines__[181] = "base64.py, line 181:\n    return encoded[:-3] + '==='";
		$m.__track_lines__[183] = "base64.py, line 183:\n    return encoded[:-1] + '='";
		$m.__track_lines__[184] = 'base64.py, line 184:\n    return encoded';
		$m.__track_lines__[187] = 'base64.py, line 187:\n    def b32decode(s, casefold=False, map01=None):';
		$m.__track_lines__[206] = 'base64.py, line 206:\n    quanta, leftover = divmod(len(s), 8)';
		$m.__track_lines__[207] = 'base64.py, line 207:\n    if leftover:';
		$m.__track_lines__[208] = "base64.py, line 208:\n    raise TypeError('Incorrect padding')";
		$m.__track_lines__[212] = 'base64.py, line 212:\n    if map01:';
		$m.__track_lines__[213] = "base64.py, line 213:\n    s = _translate(s, {'0': 'O', '1': map01})";
		$m.__track_lines__[214] = 'base64.py, line 214:\n    if casefold:';
		$m.__track_lines__[215] = 'base64.py, line 215:\n    s = s.upper()';
		$m.__track_lines__[219] = 'base64.py, line 219:\n    padchars = 0';
		$m.__track_lines__[228] = 'base64.py, line 228:\n    padchars = len(s)';
		$m.__track_lines__[229] = "base64.py, line 229:\n    s = s.rstrip('=')";
		$m.__track_lines__[230] = 'base64.py, line 230:\n    padchars -= len(s)';
		$m.__track_lines__[233] = 'base64.py, line 233:\n    parts = []';
		$m.__track_lines__[234] = 'base64.py, line 234:\n    acc = 0';
		$m.__track_lines__[235] = 'base64.py, line 235:\n    shift = 35';
		$m.__track_lines__[236] = 'base64.py, line 236:\n    for c in s:';
		$m.__track_lines__[237] = 'base64.py, line 237:\n    val = _b32rev.get(c)';
		$m.__track_lines__[238] = 'base64.py, line 238:\n    if val is None:';
		$m.__track_lines__[239] = "base64.py, line 239:\n    raise TypeError('Non-base32 digit found')";
		$m.__track_lines__[241] = 'base64.py, line 241:\n    acc += _b32rev[c] * (2**shift)';
		$m.__track_lines__[242] = 'base64.py, line 242:\n    shift -= 5';
		$m.__track_lines__[243] = 'base64.py, line 243:\n    if shift < 0:';
		$m.__track_lines__[244] = "base64.py, line 244:\n    parts.append(binascii.unhexlify('%010x' % acc))";
		$m.__track_lines__[245] = 'base64.py, line 245:\n    acc = 0';
		$m.__track_lines__[246] = 'base64.py, line 246:\n    shift = 35';
		$m.__track_lines__[248] = "base64.py, line 248:\n    last = binascii.unhexlify('%010x' % acc)";
		$m.__track_lines__[249] = 'base64.py, line 249:\n    if padchars == 0:';
		$m.__track_lines__[250] = "base64.py, line 250:\n    last = ''                       # No characters";
		$m.__track_lines__[252] = 'base64.py, line 252:\n    last = last[:-1]';
		$m.__track_lines__[254] = 'base64.py, line 254:\n    last = last[:-2]';
		$m.__track_lines__[256] = 'base64.py, line 256:\n    last = last[:-3]';
		$m.__track_lines__[258] = 'base64.py, line 258:\n    last = last[:-4]';
		$m.__track_lines__[260] = "base64.py, line 260:\n    raise TypeError('Incorrect padding')";
		$m.__track_lines__[261] = 'base64.py, line 261:\n    parts.append(last)';
		$m.__track_lines__[262] = 'base64.py, line 262:\n    return EMPTYSTRING.join(parts)';
		$m.__track_lines__[269] = 'base64.py, line 269:\n    def b16encode(s):';
		$m.__track_lines__[274] = 'base64.py, line 274:\n    return binascii.hexlify(s).upper()';
		$m.__track_lines__[277] = 'base64.py, line 277:\n    def b16decode(s, casefold=False):';
		$m.__track_lines__[288] = 'base64.py, line 288:\n    if casefold:';
		$m.__track_lines__[289] = 'base64.py, line 289:\n    s = s.upper()';
		$m.__track_lines__[295] = 'base64.py, line 295:\n    from __javascript__ import RegExp';
		$m.__track_lines__[296] = "base64.py, line 296:\n    r = RegExp('[^0-9A-F]')";
		$m.__track_lines__[297] = 'base64.py, line 297:\n    if r.test(s):';
		$m.__track_lines__[298] = "base64.py, line 298:\n    raise TypeError('Non-base16 digit found')";
		$m.__track_lines__[300] = 'base64.py, line 300:\n    return binascii.unhexlify(s)';
		$m.__track_lines__[308] = 'base64.py, line 308:\n    MAXLINESIZE = 76 # Excluding the CRLF';
		$m.__track_lines__[309] = 'base64.py, line 309:\n    MAXBINSIZE = (MAXLINESIZE//4)*3';
		$m.__track_lines__[311] = 'base64.py, line 311:\n    def encode(input, output):';
		$m.__track_lines__[313] = 'base64.py, line 313:\n    raise NotImplementedError("encode: no file operations possible")';
		$m.__track_lines__[327] = 'base64.py, line 327:\n    def decode(input, output):';
		$m.__track_lines__[329] = 'base64.py, line 329:\n    raise NotImplementedError("decode: no file operations possible")';
		$m.__track_lines__[338] = 'base64.py, line 338:\n    def encodestring(s):';
		$m.__track_lines__[340] = 'base64.py, line 340:\n    pieces = []';
		$m.__track_lines__[341] = 'base64.py, line 341:\n    for i in range(0, len(s), MAXBINSIZE):';
		$m.__track_lines__[342] = 'base64.py, line 342:\n    chunk = s[i : i + MAXBINSIZE]';
		$m.__track_lines__[343] = 'base64.py, line 343:\n    pieces.append(binascii.b2a_base64(chunk))';
		$m.__track_lines__[344] = 'base64.py, line 344:\n    return "".join(pieces)';
		$m.__track_lines__[347] = 'base64.py, line 347:\n    def decodestring(s):';
		$m.__track_lines__[349] = 'base64.py, line 349:\n    return binascii.a2b_base64(s)';
		$m.__track_lines__[354] = 'base64.py, line 354:\n    def test():';
		$m.__track_lines__[356] = 'base64.py, line 356:\n    import sys, getopt';
		$m.__track_lines__[357] = 'base64.py, line 357:\n    try:';
		$m.__track_lines__[358] = "base64.py, line 358:\n    opts, args = getopt.getopt(sys.argv[1:], 'deut')";
		$m.__track_lines__[360] = 'base64.py, line 360:\n    sys.stdout = sys.stderr';
		$m.__track_lines__[361] = 'base64.py, line 361:\n    print msg';
		$m.__track_lines__[362] = 'base64.py, line 362:\n    print """usage: %s [-d|-e|-u|-t] [file|-]';
		$m.__track_lines__[366] = 'base64.py, line 366:\n    sys.exit(2)';
		$m.__track_lines__[367] = 'base64.py, line 367:\n    func = encode';
		$m.__track_lines__[368] = 'base64.py, line 368:\n    for o, a in opts:';
		$m.__track_lines__[369] = "base64.py, line 369:\n    if o == '-e': func = encode";
		$m.__track_lines__[370] = "base64.py, line 370:\n    if o == '-d': func = decode";
		$m.__track_lines__[371] = "base64.py, line 371:\n    if o == '-u': func = decode";
		$m.__track_lines__[372] = "base64.py, line 372:\n    if o == '-t': test1(); return";
		$m.__track_lines__[373] = "base64.py, line 373:\n    if args and args[0] != '-':";
		$m.__track_lines__[374] = "base64.py, line 374:\n    func(open(args[0], 'rb'), sys.stdout)";
		$m.__track_lines__[376] = 'base64.py, line 376:\n    func(sys.stdin, sys.stdout)';
		$m.__track_lines__[379] = 'base64.py, line 379:\n    def test1():';
		$m.__track_lines__[380] = 'base64.py, line 380:\n    s0 = "Aladdin:open sesame"';
		$m.__track_lines__[381] = 'base64.py, line 381:\n    s1 = encodestring(s0)';
		$m.__track_lines__[382] = 'base64.py, line 382:\n    s2 = decodestring(s1)';
		$m.__track_lines__[383] = 'base64.py, line 383:\n    print s0, repr(s1), s2';
		$m.__track_lines__[386] = "base64.py, line 386:\n    if __name__ == '__main__':";
		$m.__track_lines__[387] = 'base64.py, line 387:\n    test()';
		var $bool26,$mul8,$mul7,$floordiv2,$floordiv1;
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_0 = new $p['int'](0);
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
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_76 = new $p['int'](76);
		$pyjs.track.module='base64';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['struct'] = $p['___import___']('struct', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['binascii'] = $p['___import___']('binascii', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$m['__all__'] = $p['list'](['encode', 'decode', 'encodestring', 'decodestring', 'b64encode', 'b64decode', 'b32encode', 'b32decode', 'b16encode', 'b16decode', 'standard_b64encode', 'standard_b64decode', 'urlsafe_b64encode', 'urlsafe_b64decode']);
		$pyjs.track.lineno=34;
		$m['_translation'] = function(){
			var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = $p['range']($constant_int_256);
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			$m['_x'] = $iter1_nextval;
			$collcomp1['append']($p['chr']($m['_x']));
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='base64';

	return $collcomp1;}();
		$pyjs.track.lineno=35;
		$m['EMPTYSTRING'] = '';
		$pyjs.track.lineno=38;
		$m['_translate'] = function(s, altchars) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $iter3_type,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,$iter2_type,v,$iter2_idx,$iter3_array,translation,$2,$1,c,$iter2_nextval,k,$add2,$add1,t,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs.track={module:'base64',lineno:38};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=38;
			$pyjs.track.lineno=39;
			translation = $p['__getslice']($m['_translation'], 0, null);
			$pyjs.track.lineno=40;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = altchars['items']();
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter2_nextval, 2, null);
				k = $tupleassign1[0];
				v = $tupleassign1[1];
				$pyjs.track.lineno=41;
				translation.__setitem__($p['ord'](k), v);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='base64';
			$pyjs.track.lineno=43;
			t = '';
			$pyjs.track.lineno=44;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter3_iter = s;
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				c = $iter3_nextval;
				$pyjs.track.lineno=45;
				t = (typeof ($add1=t)==typeof ($add2=(typeof ($1=translation).__array != 'undefined'?
					((typeof $1.__array[$2=$p['ord'](c)]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($p['ord'](c)))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='base64';
			$pyjs.track.lineno=46;
			$pyjs.track.lineno=46;
			var $pyjs__ret = t;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['_translate'].__name__ = '_translate';

		$m['_translate'].__bind_type__ = 0;
		$m['_translate'].__args__ = [null,null,['s'],['altchars']];
		$pyjs.track.lineno=52;
		$m['b64encode'] = function(s, altchars) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof altchars == 'undefined') altchars=arguments.callee.__args__[3][1];
			var $6,$bool1,encoded,$4,$5,$3;
			$pyjs.track={module:'base64',lineno:52};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=52;
			$pyjs.track.lineno=63;
			encoded = $p['__getslice']($m['binascii']['b2a_base64'](s), 0, (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			$pyjs.track.lineno=64;
			if ((($bool1=!$p['op_is'](altchars, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$pyjs.track.lineno=65;
				$pyjs.track.lineno=65;
				var $pyjs__ret = $m['_translate'](encoded, $p['dict']([['+', (typeof ($3=altchars).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_0))], ['/', (typeof ($5=altchars).__array != 'undefined'?
					((typeof $5.__array[$6=$constant_int_1]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($constant_int_1))]]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=66;
			$pyjs.track.lineno=66;
			var $pyjs__ret = encoded;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b64encode'].__name__ = 'b64encode';

		$m['b64encode'].__bind_type__ = 0;
		$m['b64encode'].__args__ = [null,null,['s'],['altchars', null]];
		$pyjs.track.lineno=69;
		$m['b64decode'] = function(s, altchars) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof altchars == 'undefined') altchars=arguments.callee.__args__[3][1];
			var $10,$bool2,msg,$pyjs_try_err,$8,$9,$7;
			$pyjs.track={module:'base64',lineno:69};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=69;
			$pyjs.track.lineno=80;
			if ((($bool2=!$p['op_is'](altchars, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				$pyjs.track.lineno=81;
				s = $m['_translate'](s, $p['dict']([[(typeof ($7=altchars).__array != 'undefined'?
					((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($constant_int_0)), '+'], [(typeof ($9=altchars).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_1]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_1)), '/']]));
			}
			$pyjs.track.lineno=82;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=83;
				$pyjs.track.lineno=83;
				var $pyjs__ret = $m['binascii']['a2b_base64'](s);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
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
				$pyjs.track.module='base64';
				if (($pyjs_try_err_name == $p['getattr']($m['binascii'], 'Error').__name__)||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['binascii'], 'Error'))) {
					msg = $pyjs_try_err;
					$pyjs.track.lineno=86;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError'](msg));
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['b64decode'].__name__ = 'b64decode';

		$m['b64decode'].__bind_type__ = 0;
		$m['b64decode'].__args__ = [null,null,['s'],['altchars', null]];
		$pyjs.track.lineno=89;
		$m['standard_b64encode'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'base64',lineno:89};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=89;
			$pyjs.track.lineno=94;
			$pyjs.track.lineno=94;
			var $pyjs__ret = $m['b64encode'](s);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['standard_b64encode'].__name__ = 'standard_b64encode';

		$m['standard_b64encode'].__bind_type__ = 0;
		$m['standard_b64encode'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=96;
		$m['standard_b64decode'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'base64',lineno:96};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=96;
			$pyjs.track.lineno=103;
			$pyjs.track.lineno=103;
			var $pyjs__ret = $m['b64decode'](s);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['standard_b64decode'].__name__ = 'standard_b64decode';

		$m['standard_b64decode'].__bind_type__ = 0;
		$m['standard_b64decode'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=105;
		$m['urlsafe_b64encode'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'base64',lineno:105};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=105;
			$pyjs.track.lineno=111;
			$pyjs.track.lineno=111;
			var $pyjs__ret = $m['b64encode'](s, '-_');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['urlsafe_b64encode'].__name__ = 'urlsafe_b64encode';

		$m['urlsafe_b64encode'].__bind_type__ = 0;
		$m['urlsafe_b64encode'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=113;
		$m['urlsafe_b64decode'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'base64',lineno:113};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=113;
			$pyjs.track.lineno=122;
			$pyjs.track.lineno=122;
			var $pyjs__ret = $m['b64decode'](s, '-_');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['urlsafe_b64decode'].__name__ = 'urlsafe_b64decode';

		$m['urlsafe_b64decode'].__bind_type__ = 0;
		$m['urlsafe_b64decode'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=127;
		$m['_b32alphabet'] = $p['dict']([[$constant_int_0, 'A'], [$constant_int_9, 'J'], [$constant_int_18, 'S'], [$constant_int_27, '3'], [$constant_int_1, 'B'], [$constant_int_10, 'K'], [$constant_int_19, 'T'], [$constant_int_28, '4'], [$constant_int_2, 'C'], [$constant_int_11, 'L'], [$constant_int_20, 'U'], [$constant_int_29, '5'], [$constant_int_3, 'D'], [$constant_int_12, 'M'], [$constant_int_21, 'V'], [$constant_int_30, '6'], [$constant_int_4, 'E'], [$constant_int_13, 'N'], [$constant_int_22, 'W'], [$constant_int_31, '7'], [$constant_int_5, 'F'], [$constant_int_14, 'O'], [$constant_int_23, 'X'], [$constant_int_6, 'G'], [$constant_int_15, 'P'], [$constant_int_24, 'Y'], [$constant_int_7, 'H'], [$constant_int_16, 'Q'], [$constant_int_25, 'Z'], [$constant_int_8, 'I'], [$constant_int_17, 'R'], [$constant_int_26, '2']]);
		$pyjs.track.lineno=139;
		$m['_b32tab'] = $m['_b32alphabet']['items']();
		$pyjs.track.lineno=140;
		$m['_b32tab']['sort']();
		$pyjs.track.lineno=141;
		$m['_b32tab'] = function(){
			var $iter4_nextval,$pyjs__trackstack_size_1,$collcomp2,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp2 = $p['list']();
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter4_iter = $m['_b32tab'];
		if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
			$iter4_type = 0;
		} else {
			$iter4_iter = $iter4_iter.__iter__();
			$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter4_idx = 0;
		while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
			var $tupleassign2 = $p['__ass_unpack']($iter4_nextval, 2, null);
			$m['k'] = $tupleassign2[0];
			$m['v'] = $tupleassign2[1];
			$collcomp2['append']($m['v']);
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='base64';

	return $collcomp2;}();
		$pyjs.track.lineno=142;
		$m['_b32rev'] = $p['dict'](function(){
			var $iter5_nextval,$iter5_idx,$collcomp3,$iter5_iter,$iter5_array,$iter5_type,$pyjs__trackstack_size_1;
	$collcomp3 = $p['list']();
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter5_iter = $m['_b32alphabet']['items']();
		if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
			$iter5_type = 0;
		} else {
			$iter5_iter = $iter5_iter.__iter__();
			$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter5_idx = 0;
		while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
			var $tupleassign3 = $p['__ass_unpack']($iter5_nextval, 2, null);
			$m['k'] = $tupleassign3[0];
			$m['v'] = $tupleassign3[1];
			$collcomp3['append']($p['tuple']([$m['v'], $m['k']]));
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='base64';

	return $collcomp3;}());
		$pyjs.track.lineno=144;
		$m['b32encode'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add20,$bool4,$iter6_type,$pyjs__trackstack_size_1,$add18,c2,$iter6_iter,$iter6_nextval,$add19,$21,$20,$23,$22,$25,$24,encoded,$26,parts,quanta,$sub2,$sub1,$add15,$bool5,$iter6_idx,$len1,$add14,$bool3,$iter6_array,$add17,$add10,$add11,$add12,$add13,c3,leftover,c1,$mul4,$mul3,$mul2,$mul1,$14,$15,$16,$17,$11,$12,$13,i,$add16,$18,$19,$add3,$add6,$add7,$add4,$add5,$bool6,$add8,$add9,$bool7;
			$pyjs.track={module:'base64',lineno:144};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=144;
			$pyjs.track.lineno=149;
			parts = $p['list']([]);
			$pyjs.track.lineno=150;
			var $tupleassign4 = $p['__ass_unpack']($p['divmod']((($len1=s) === null?$constant_int_0:
				(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
							$p['len']($len1))))), $constant_int_5), 2, null);
			quanta = $tupleassign4[0];
			leftover = $tupleassign4[1];
			$pyjs.track.lineno=152;
			if ((($bool3=leftover) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$pyjs.track.lineno=154;
				s = (typeof ($add3=s)==typeof ($add4=''['ljust']((typeof ($sub1=$constant_int_5)==typeof ($sub2=leftover) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)), '\x00')) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				$pyjs.track.lineno=155;
				quanta = (typeof ($add5=quanta)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
			}
			$pyjs.track.lineno=156;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter6_iter = $p['range'](quanta);
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				$pyjs.track.lineno=162;
				var $tupleassign5 = $p['__ass_unpack']($m['struct']['unpack']('!HHB', $p['__getslice'](s, (typeof ($mul1=i)==typeof ($mul2=$constant_int_5) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), (typeof ($mul3=(typeof ($add7=i)==typeof ($add8=$constant_int_1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))==typeof ($mul4=$constant_int_5) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))), 3, null);
				c1 = $tupleassign5[0];
				c2 = $tupleassign5[1];
				c3 = $tupleassign5[2];
				$pyjs.track.lineno=163;
				c2 = (typeof ($add9=c2)==typeof ($add10=$p['op_bitshiftleft']($p['op_bitand2'](c1, $constant_int_1),$constant_int_16)) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				$pyjs.track.lineno=164;
				c3 = (typeof ($add11=c3)==typeof ($add12=$p['op_bitshiftleft']($p['op_bitand2'](c2, $constant_int_3),$constant_int_8)) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
				$pyjs.track.lineno=165;
				parts['extend']($p['list']([(typeof ($11=$m['_b32tab']).__array != 'undefined'?
					((typeof $11.__array[$12=$p['op_bitshiftright'](c1,$constant_int_11)]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($p['op_bitshiftright'](c1,$constant_int_11))), (typeof ($13=$m['_b32tab']).__array != 'undefined'?
					((typeof $13.__array[$14=$p['op_bitand2']($p['op_bitshiftright'](c1,$constant_int_6), $constant_int_31)]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($p['op_bitand2']($p['op_bitshiftright'](c1,$constant_int_6), $constant_int_31))), (typeof ($15=$m['_b32tab']).__array != 'undefined'?
					((typeof $15.__array[$16=$p['op_bitand2']($p['op_bitshiftright'](c1,$constant_int_1), $constant_int_31)]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__($p['op_bitand2']($p['op_bitshiftright'](c1,$constant_int_1), $constant_int_31))), (typeof ($17=$m['_b32tab']).__array != 'undefined'?
					((typeof $17.__array[$18=$p['op_bitshiftright'](c2,$constant_int_12)]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__($p['op_bitshiftright'](c2,$constant_int_12))), (typeof ($19=$m['_b32tab']).__array != 'undefined'?
					((typeof $19.__array[$20=$p['op_bitand2']($p['op_bitshiftright'](c2,$constant_int_7), $constant_int_31)]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__($p['op_bitand2']($p['op_bitshiftright'](c2,$constant_int_7), $constant_int_31))), (typeof ($21=$m['_b32tab']).__array != 'undefined'?
					((typeof $21.__array[$22=$p['op_bitand2']($p['op_bitshiftright'](c2,$constant_int_2), $constant_int_31)]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__($p['op_bitand2']($p['op_bitshiftright'](c2,$constant_int_2), $constant_int_31))), (typeof ($23=$m['_b32tab']).__array != 'undefined'?
					((typeof $23.__array[$24=$p['op_bitshiftright'](c3,$constant_int_5)]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($p['op_bitshiftright'](c3,$constant_int_5))), (typeof ($25=$m['_b32tab']).__array != 'undefined'?
					((typeof $25.__array[$26=$p['op_bitand2'](c3, $constant_int_31)]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__($p['op_bitand2'](c3, $constant_int_31)))]));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='base64';
			$pyjs.track.lineno=174;
			encoded = $m['EMPTYSTRING']['join'](parts);
			$pyjs.track.lineno=176;
			if ((($bool4=$p['op_eq'](leftover, $constant_int_1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$pyjs.track.lineno=177;
				$pyjs.track.lineno=177;
				var $pyjs__ret = (typeof ($add13=$p['__getslice'](encoded, 0, (typeof ($usub2=$constant_int_6)=='number'?
					-$usub2:
					$p['op_usub']($usub2))))==typeof ($add14='======') && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((($bool5=$p['op_eq'](leftover, $constant_int_2)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$pyjs.track.lineno=179;
				$pyjs.track.lineno=179;
				var $pyjs__ret = (typeof ($add15=$p['__getslice'](encoded, 0, (typeof ($usub3=$constant_int_4)=='number'?
					-$usub3:
					$p['op_usub']($usub3))))==typeof ($add16='====') && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((($bool6=$p['op_eq'](leftover, $constant_int_3)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$pyjs.track.lineno=181;
				$pyjs.track.lineno=181;
				var $pyjs__ret = (typeof ($add17=$p['__getslice'](encoded, 0, (typeof ($usub4=$constant_int_3)=='number'?
					-$usub4:
					$p['op_usub']($usub4))))==typeof ($add18='===') && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else if ((($bool7=$p['op_eq'](leftover, $constant_int_4)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				$pyjs.track.lineno=183;
				$pyjs.track.lineno=183;
				var $pyjs__ret = (typeof ($add19=$p['__getslice'](encoded, 0, (typeof ($usub5=$constant_int_1)=='number'?
					-$usub5:
					$p['op_usub']($usub5))))==typeof ($add20='=') && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$p['op_add']($add19,$add20));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=184;
			$pyjs.track.lineno=184;
			var $pyjs__ret = encoded;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b32encode'].__name__ = 'b32encode';

		$m['b32encode'].__bind_type__ = 0;
		$m['b32encode'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=187;
		$m['b32decode'] = function(s, casefold, map01) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
			if (typeof casefold == 'undefined') casefold=arguments.callee.__args__[3][1];
			if (typeof map01 == 'undefined') map01=arguments.callee.__args__[4][1];
			var $bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$mul6,$mul5,$pow1,$28,$pow2,val,$add21,$add22,$27,parts,quanta,$sub3,$iter7_type,$sub6,$sub5,$sub4,$iter7_iter,$iter7_idx,leftover,$bool8,$bool9,acc,c,$cmp1,padchars,$iter7_nextval,$cmp2,shift,$iter7_array,$len4,$len2,$len3,$pyjs__trackstack_size_1,last;
			$pyjs.track={module:'base64',lineno:187};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=187;
			$pyjs.track.lineno=206;
			var $tupleassign6 = $p['__ass_unpack']($p['divmod']((($len2=s) === null?$constant_int_0:
				(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
							$p['len']($len2))))), $constant_int_8), 2, null);
			quanta = $tupleassign6[0];
			leftover = $tupleassign6[1];
			$pyjs.track.lineno=207;
			if ((($bool8=leftover) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				$pyjs.track.lineno=208;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['TypeError']('Incorrect padding'));
			}
			$pyjs.track.lineno=212;
			if ((($bool9=map01) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				$pyjs.track.lineno=213;
				s = $m['_translate'](s, $p['dict']([['0', 'O'], ['1', map01]]));
			}
			$pyjs.track.lineno=214;
			if ((($bool10=casefold) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				$pyjs.track.lineno=215;
				s = s['upper']();
			}
			$pyjs.track.lineno=219;
			padchars = $constant_int_0;
			$pyjs.track.lineno=228;
			padchars = (($len3=s) === null?$constant_int_0:
				(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
							$p['len']($len3)))));
			$pyjs.track.lineno=229;
			s = s['rstrip']('=');
			$pyjs.track.lineno=230;
			padchars = (typeof ($sub3=padchars)==typeof ($sub4=(($len4=s) === null?$constant_int_0:
				(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
							$p['len']($len4)))))) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			$pyjs.track.lineno=233;
			parts = $p['list']([]);
			$pyjs.track.lineno=234;
			acc = $constant_int_0;
			$pyjs.track.lineno=235;
			shift = $constant_int_35;
			$pyjs.track.lineno=236;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter7_iter = s;
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				c = $iter7_nextval;
				$pyjs.track.lineno=237;
				val = $m['_b32rev']['get'](c);
				$pyjs.track.lineno=238;
				if ((($bool11=$p['op_is'](val, null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					$pyjs.track.lineno=239;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['TypeError']('Non-base32 digit found'));
				}
				$pyjs.track.lineno=241;
				acc = (typeof ($add21=acc)==typeof ($add22=(typeof ($mul5=(typeof ($27=$m['_b32rev']).__array != 'undefined'?
					((typeof $27.__array[$28=c]) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__(c)))==typeof ($mul6=(typeof ($pow1=$constant_int_2)==typeof ($pow2=shift) && typeof $pow1=='number'?
					Math.pow($pow1,$pow2):
					$p['op_pow']($pow1,$pow2))) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
				$pyjs.track.lineno=242;
				shift = (typeof ($sub5=shift)==typeof ($sub6=$constant_int_5) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6));
				$pyjs.track.lineno=243;
				if ((($bool12=((($cmp1=shift)===($cmp2=$constant_int_0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					$pyjs.track.lineno=244;
					parts['append']($m['binascii']['unhexlify']($p['sprintf']('%010x', acc)));
					$pyjs.track.lineno=245;
					acc = $constant_int_0;
					$pyjs.track.lineno=246;
					shift = $constant_int_35;
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='base64';
			$pyjs.track.lineno=248;
			last = $m['binascii']['unhexlify']($p['sprintf']('%010x', acc));
			$pyjs.track.lineno=249;
			if ((($bool13=$p['op_eq'](padchars, $constant_int_0)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				$pyjs.track.lineno=250;
				last = '';
			}
			else if ((($bool14=$p['op_eq'](padchars, $constant_int_1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				$pyjs.track.lineno=252;
				last = $p['__getslice'](last, 0, (typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)));
			}
			else if ((($bool15=$p['op_eq'](padchars, $constant_int_3)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				$pyjs.track.lineno=254;
				last = $p['__getslice'](last, 0, (typeof ($usub7=$constant_int_2)=='number'?
					-$usub7:
					$p['op_usub']($usub7)));
			}
			else if ((($bool16=$p['op_eq'](padchars, $constant_int_4)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				$pyjs.track.lineno=256;
				last = $p['__getslice'](last, 0, (typeof ($usub8=$constant_int_3)=='number'?
					-$usub8:
					$p['op_usub']($usub8)));
			}
			else if ((($bool17=$p['op_eq'](padchars, $constant_int_6)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				$pyjs.track.lineno=258;
				last = $p['__getslice'](last, 0, (typeof ($usub9=$constant_int_4)=='number'?
					-$usub9:
					$p['op_usub']($usub9)));
			}
			else {
				$pyjs.track.lineno=260;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['TypeError']('Incorrect padding'));
			}
			$pyjs.track.lineno=261;
			parts['append'](last);
			$pyjs.track.lineno=262;
			$pyjs.track.lineno=262;
			var $pyjs__ret = $m['EMPTYSTRING']['join'](parts);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b32decode'].__name__ = 'b32decode';

		$m['b32decode'].__bind_type__ = 0;
		$m['b32decode'].__args__ = [null,null,['s'],['casefold', false],['map01', null]];
		$pyjs.track.lineno=269;
		$m['b16encode'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'base64',lineno:269};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=269;
			$pyjs.track.lineno=274;
			$pyjs.track.lineno=274;
			var $pyjs__ret = $m['binascii']['hexlify'](s)['upper']();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b16encode'].__name__ = 'b16encode';

		$m['b16encode'].__bind_type__ = 0;
		$m['b16encode'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=277;
		$m['b16decode'] = function(s, casefold) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof casefold == 'undefined') casefold=arguments.callee.__args__[3][1];
			var $bool18,$bool19,r;
			$pyjs.track={module:'base64',lineno:277};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=277;
			$pyjs.track.lineno=288;
			if ((($bool18=casefold) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				$pyjs.track.lineno=289;
				s = s['upper']();
			}
			$pyjs.track.lineno=295;
			$pyjs.track.lineno=296;
			r = RegExp('[^0-9A-F]');
			$pyjs.track.lineno=297;
			if ((($bool19=r['test'](s)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				$pyjs.track.lineno=298;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['TypeError']('Non-base16 digit found'));
			}
			$pyjs.track.lineno=300;
			$pyjs.track.lineno=300;
			var $pyjs__ret = $m['binascii']['unhexlify'](s);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['b16decode'].__name__ = 'b16decode';

		$m['b16decode'].__bind_type__ = 0;
		$m['b16decode'].__args__ = [null,null,['s'],['casefold', false]];
		$pyjs.track.lineno=308;
		$m['MAXLINESIZE'] = $constant_int_76;
		$pyjs.track.lineno=309;
		$m['MAXBINSIZE'] = (typeof ($mul7=(typeof ($floordiv1=$m['MAXLINESIZE'])==typeof ($floordiv2=$constant_int_4) && typeof $floordiv1=='number' && $floordiv2 !== 0?
			Math.floor($floordiv1/$floordiv2):
			$p['op_floordiv']($floordiv1,$floordiv2)))==typeof ($mul8=$constant_int_3) && typeof $mul7=='number'?
			$mul7*$mul8:
			$p['op_mul']($mul7,$mul8));
		$pyjs.track.lineno=311;
		$m['encode'] = function(input, output) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'base64',lineno:311};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=311;
			$pyjs.track.lineno=313;
			$pyjs.__active_exception_stack__ = null;
			throw ($p['NotImplementedError']('encode: no file operations possible'));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['encode'].__name__ = 'encode';

		$m['encode'].__bind_type__ = 0;
		$m['encode'].__args__ = [null,null,['input'],['output']];
		$pyjs.track.lineno=327;
		$m['decode'] = function(input, output) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'base64',lineno:327};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=327;
			$pyjs.track.lineno=329;
			$pyjs.__active_exception_stack__ = null;
			throw ($p['NotImplementedError']('decode: no file operations possible'));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['decode'].__name__ = 'decode';

		$m['decode'].__bind_type__ = 0;
		$m['decode'].__args__ = [null,null,['input'],['output']];
		$pyjs.track.lineno=338;
		$m['encodestring'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter8_idx,chunk,i,$iter8_type,$iter8_array,$add24,pieces,$iter8_iter,$len5,$iter8_nextval,$pyjs__trackstack_size_1,$add23;
			$pyjs.track={module:'base64',lineno:338};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=338;
			$pyjs.track.lineno=340;
			pieces = $p['list']([]);
			$pyjs.track.lineno=341;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter8_iter = $p['range']($constant_int_0, (($len5=s) === null?$constant_int_0:
				(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
					(typeof $len5.__len__ == 'function'?$len5.__len__():
						(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
							$p['len']($len5))))), $m['MAXBINSIZE']);
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				i = $iter8_nextval;
				$pyjs.track.lineno=342;
				chunk = $p['__getslice'](s, i, (typeof ($add23=i)==typeof ($add24=$m['MAXBINSIZE']) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24)));
				$pyjs.track.lineno=343;
				pieces['append']($m['binascii']['b2a_base64'](chunk));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='base64';
			$pyjs.track.lineno=344;
			$pyjs.track.lineno=344;
			var $pyjs__ret = ''['join'](pieces);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['encodestring'].__name__ = 'encodestring';

		$m['encodestring'].__bind_type__ = 0;
		$m['encodestring'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=347;
		$m['decodestring'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'base64',lineno:347};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=347;
			$pyjs.track.lineno=349;
			$pyjs.track.lineno=349;
			var $pyjs__ret = $m['binascii']['a2b_base64'](s);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['decodestring'].__name__ = 'decodestring';

		$m['decodestring'].__bind_type__ = 0;
		$m['decodestring'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=354;
		$m['test'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $30,$29,$iter9_iter,$iter9_nextval,$iter9_idx,$bool25,$bool24,$pyjs_try_err,$bool21,$bool20,$bool23,$bool22,msg,getopt,$iter9_type,$and1,$and2,args,sys,func,a,$32,o,$31,$pyjs__trackstack_size_1,$iter9_array,opts;
			$pyjs.track={module:'base64',lineno:354};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=354;
			$pyjs.track.lineno=356;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			sys = $p['___import___']('sys', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			getopt = $p['___import___']('getopt', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=357;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=358;
				var $tupleassign7 = $p['__ass_unpack'](getopt['getopt']($p['__getslice']($p['getattr'](sys, 'argv'), $constant_int_1, null), 'deut'), 2, null);
				opts = $tupleassign7[0];
				args = $tupleassign7[1];
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
				$pyjs.track.module='base64';
				if (($pyjs_try_err_name == $p['getattr'](getopt, 'error').__name__)||$p['_isinstance']($pyjs_try_err,$p['getattr'](getopt, 'error'))) {
					msg = $pyjs_try_err;
					$pyjs.track.lineno=360;
					sys.__is_instance__ && typeof sys.__setattr__ == 'function' ? sys.__setattr__('stdout', $p['getattr'](sys, 'stderr')) : $p['setattr'](sys, 'stdout', $p['getattr'](sys, 'stderr')); 
					$pyjs.track.lineno=361;
					$pyjs.track.lineno=362;
					$pyjs.track.lineno=366;
					sys['exit']($constant_int_2);
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.track.lineno=367;
			func = $m['encode'];
			$pyjs.track.lineno=368;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter9_iter = opts;
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				var $tupleassign8 = $p['__ass_unpack']($iter9_nextval, 2, null);
				o = $tupleassign8[0];
				a = $tupleassign8[1];
				$pyjs.track.lineno=369;
				if ((($bool20=$p['op_eq'](o, '-e')) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					$pyjs.track.lineno=369;
					func = $m['encode'];
				}
				$pyjs.track.lineno=370;
				if ((($bool21=$p['op_eq'](o, '-d')) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					$pyjs.track.lineno=370;
					func = $m['decode'];
				}
				$pyjs.track.lineno=371;
				if ((($bool22=$p['op_eq'](o, '-u')) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					$pyjs.track.lineno=371;
					func = $m['decode'];
				}
				$pyjs.track.lineno=372;
				if ((($bool23=$p['op_eq'](o, '-t')) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					$pyjs.track.lineno=372;
					(typeof test1 == "undefined"?$m.test1:test1)();
					$pyjs.track.lineno=372;
					$pyjs.track.lineno=372;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='base64';
			$pyjs.track.lineno=373;
			if ((($bool25=((($bool24=$and1=args) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24.__nonzero__=='function'?
						$bool24.__nonzero__() :
						(typeof $bool24.__len__=='function'?
							($bool24.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!$p['op_eq']((typeof ($29=args).__array != 'undefined'?
				((typeof $29.__array[$30=$constant_int_0]) != 'undefined'?$29.__array[$30]:
					$29.__getitem__($30)):
					$29.__getitem__($constant_int_0)), '-'):$and1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				$pyjs.track.lineno=374;
				func($p['open']((typeof ($31=args).__array != 'undefined'?
					((typeof $31.__array[$32=$constant_int_0]) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__($constant_int_0)), 'rb'), $p['getattr'](sys, 'stdout'));
			}
			else {
				$pyjs.track.lineno=376;
				func($p['getattr'](sys, 'stdin'), $p['getattr'](sys, 'stdout'));
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['test'].__name__ = 'test';

		$m['test'].__bind_type__ = 0;
		$m['test'].__args__ = [null,null];
		$pyjs.track.lineno=379;
		$m['test1'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var s2,s1,s0;
			$pyjs.track={module:'base64',lineno:379};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='base64';
			$pyjs.track.lineno=379;
			$pyjs.track.lineno=380;
			s0 = 'Aladdin:open sesame';
			$pyjs.track.lineno=381;
			s1 = $m['encodestring'](s0);
			$pyjs.track.lineno=382;
			s2 = $m['decodestring'](s1);
			$pyjs.track.lineno=383;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['test1'].__name__ = 'test1';

		$m['test1'].__bind_type__ = 0;
		$m['test1'].__args__ = [null,null];
		$pyjs.track.lineno=386;
		if ((($bool26=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
			$pyjs.track.lineno=387;
			$m['test']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end base64 */


/* end module: base64 */


/*
PYJS_DEPS: ['struct', 'binascii', 'sys', 'getopt']
*/
