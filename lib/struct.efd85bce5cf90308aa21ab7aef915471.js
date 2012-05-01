/* start module: struct */
$pyjs.loaded_modules['struct'] = function (__mod_name__) {
	if($pyjs.loaded_modules['struct'].__was_initialized__) return $pyjs.loaded_modules['struct'];
	var $m = $pyjs.loaded_modules["struct"];
	$m.__repr__ = function() { return "<module: struct>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'struct';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'struct.py, line 1:\n    # struct.py from the pypy project';
		$m.__track_lines__[42] = 'struct.py, line 42:\n    import math, sys';
		$m.__track_lines__[45] = 'struct.py, line 45:\n    class StructError(Exception):';
		$m.__track_lines__[46] = 'struct.py, line 46:\n    pass';
		$m.__track_lines__[47] = 'struct.py, line 47:\n    error = StructError';
		$m.__track_lines__[48] = 'struct.py, line 48:\n    def unpack_int(data,index,size,le):';
		$m.__track_lines__[49] = 'struct.py, line 49:\n    bytes = [ord(b) for b in data[index:index+size]]';
		$m.__track_lines__[50] = "struct.py, line 50:\n    if le == 'little':";
		$m.__track_lines__[51] = 'struct.py, line 51:\n    bytes.reverse()';
		$m.__track_lines__[52] = 'struct.py, line 52:\n    number = 0L';
		$m.__track_lines__[53] = 'struct.py, line 53:\n    for b in bytes:';
		$m.__track_lines__[54] = 'struct.py, line 54:\n    number = number << 8 | b';
		$m.__track_lines__[55] = 'struct.py, line 55:\n    return int(number)';
		$m.__track_lines__[57] = 'struct.py, line 57:\n    def unpack_signed_int(data,index,size,le):';
		$m.__track_lines__[58] = 'struct.py, line 58:\n    number = unpack_int(data,index,size,le)';
		$m.__track_lines__[59] = 'struct.py, line 59:\n    max = 2**(size*8)';
		$m.__track_lines__[60] = 'struct.py, line 60:\n    if number > 2**(size*8 - 1) - 1:';
		$m.__track_lines__[61] = 'struct.py, line 61:\n    number = int(-1*(max - number))';
		$m.__track_lines__[62] = 'struct.py, line 62:\n    return number';
		$m.__track_lines__[64] = 'struct.py, line 64:\n    def unpack_float(data,index,size,le):';
		$m.__track_lines__[65] = 'struct.py, line 65:\n    bytes = [ord(b) for b in data[index:index+size]]';
		$m.__track_lines__[66] = 'struct.py, line 66:\n    if len(bytes) != size:';
		$m.__track_lines__[67] = 'struct.py, line 67:\n    raise StructError,"Not enough data to unpack"';
		$m.__track_lines__[68] = 'struct.py, line 68:\n    if max(bytes) == 0:';
		$m.__track_lines__[69] = 'struct.py, line 69:\n    return 0.0';
		$m.__track_lines__[70] = "struct.py, line 70:\n    if le == 'big':";
		$m.__track_lines__[71] = 'struct.py, line 71:\n    bytes.reverse()';
		$m.__track_lines__[72] = 'struct.py, line 72:\n    if size == 4:';
		$m.__track_lines__[73] = 'struct.py, line 73:\n    bias = 127';
		$m.__track_lines__[74] = 'struct.py, line 74:\n    exp = 8';
		$m.__track_lines__[75] = 'struct.py, line 75:\n    prec = 23';
		$m.__track_lines__[77] = 'struct.py, line 77:\n    bias = 1023';
		$m.__track_lines__[78] = 'struct.py, line 78:\n    exp = 11';
		$m.__track_lines__[79] = 'struct.py, line 79:\n    prec = 52';
		$m.__track_lines__[80] = 'struct.py, line 80:\n    mantissa = long(bytes[size-2] & (2**(15-exp)-1))';
		$m.__track_lines__[83] = 'struct.py, line 83:\n    revbytes = bytes';
		$m.__track_lines__[84] = 'struct.py, line 84:\n    revbytes.reverse()';
		$m.__track_lines__[85] = 'struct.py, line 85:\n    for b in revbytes[3:]:';
		$m.__track_lines__[86] = 'struct.py, line 86:\n    mantissa = mantissa << 8 | b';
		$m.__track_lines__[87] = 'struct.py, line 87:\n    mantissa = 1 + (1.0*mantissa)/(2**(prec))';
		$m.__track_lines__[88] = 'struct.py, line 88:\n    mantissa /= 2';
		$m.__track_lines__[89] = 'struct.py, line 89:\n    e = (bytes[-1] & 0x7f) << (exp - 7)';
		$m.__track_lines__[90] = 'struct.py, line 90:\n    e += (bytes[size-2] >> (15 - exp)) & (2**(exp - 7) -1)';
		$m.__track_lines__[91] = 'struct.py, line 91:\n    e -= bias';
		$m.__track_lines__[92] = 'struct.py, line 92:\n    e += 1';
		$m.__track_lines__[93] = 'struct.py, line 93:\n    sign = bytes[-1] & 0x80';
		$m.__track_lines__[94] = 'struct.py, line 94:\n    number = math.ldexp(mantissa,e)';
		$m.__track_lines__[95] = 'struct.py, line 95:\n    if sign : number *= -1';
		$m.__track_lines__[96] = 'struct.py, line 96:\n    return number';
		$m.__track_lines__[98] = 'struct.py, line 98:\n    def unpack_char(data,index,size,le):';
		$m.__track_lines__[99] = 'struct.py, line 99:\n    return data[index:index+size]';
		$m.__track_lines__[101] = 'struct.py, line 101:\n    def pack_int(number,size,le):';
		$m.__track_lines__[102] = 'struct.py, line 102:\n    x=number';
		$m.__track_lines__[103] = 'struct.py, line 103:\n    res=[]';
		$m.__track_lines__[104] = 'struct.py, line 104:\n    for i in range(size):';
		$m.__track_lines__[105] = 'struct.py, line 105:\n    res.append(chr(x&0xff))';
		$m.__track_lines__[106] = 'struct.py, line 106:\n    x >>= 8';
		$m.__track_lines__[107] = "struct.py, line 107:\n    if le == 'big':";
		$m.__track_lines__[108] = 'struct.py, line 108:\n    res.reverse()';
		$m.__track_lines__[109] = "struct.py, line 109:\n    return ''.join(res)";
		$m.__track_lines__[111] = 'struct.py, line 111:\n    def pack_signed_int(number,size,le):';
		$m.__track_lines__[112] = 'struct.py, line 112:\n    if not isinstance(number, (int,long)):';
		$m.__track_lines__[113] = 'struct.py, line 113:\n    raise StructError,"argument for i,I,l,L,q,Q,h,H must be integer"';
		$m.__track_lines__[114] = 'struct.py, line 114:\n    if  number > 2**(8*size-1)-1 or number < -1*2**(8*size-1):';
		$m.__track_lines__[115] = 'struct.py, line 115:\n    raise OverflowError,"Number:%i too large to convert" % number';
		$m.__track_lines__[116] = 'struct.py, line 116:\n    return pack_int(number,size,le)';
		$m.__track_lines__[118] = 'struct.py, line 118:\n    def pack_unsigned_int(number,size,le):';
		$m.__track_lines__[119] = 'struct.py, line 119:\n    if not isinstance(number, (int,long)):';
		$m.__track_lines__[120] = 'struct.py, line 120:\n    raise StructError,"argument for i,I,l,L,q,Q,h,H must be integer"';
		$m.__track_lines__[121] = 'struct.py, line 121:\n    if number < 0:';
		$m.__track_lines__[122] = 'struct.py, line 122:\n    raise TypeError,"can\'t convert negative long to unsigned"';
		$m.__track_lines__[123] = 'struct.py, line 123:\n    if number > 2**(8*size)-1:';
		$m.__track_lines__[124] = 'struct.py, line 124:\n    raise OverflowError,"Number:%i too large to convert" % number';
		$m.__track_lines__[125] = 'struct.py, line 125:\n    return pack_int(number,size,le)';
		$m.__track_lines__[127] = 'struct.py, line 127:\n    def pack_char(char,size,le):';
		$m.__track_lines__[128] = 'struct.py, line 128:\n    return str(char)';
		$m.__track_lines__[130] = 'struct.py, line 130:\n    def sane_float(man,e):';
		$m.__track_lines__[132] = 'struct.py, line 132:\n    return True';
		$m.__track_lines__[134] = 'struct.py, line 134:\n    def pack_float(number, size, le):';
		$m.__track_lines__[136] = 'struct.py, line 136:\n    if number < 0:';
		$m.__track_lines__[137] = 'struct.py, line 137:\n    sign = 1';
		$m.__track_lines__[138] = 'struct.py, line 138:\n    number *= -1';
		$m.__track_lines__[141] = 'struct.py, line 141:\n    return "".ljust(size, "\\x00")';
		$m.__track_lines__[143] = 'struct.py, line 143:\n    sign = 0';
		$m.__track_lines__[144] = 'struct.py, line 144:\n    if size == 4:';
		$m.__track_lines__[145] = 'struct.py, line 145:\n    bias = 127';
		$m.__track_lines__[146] = 'struct.py, line 146:\n    exp = 8';
		$m.__track_lines__[147] = 'struct.py, line 147:\n    prec = 23';
		$m.__track_lines__[149] = 'struct.py, line 149:\n    bias = 1023';
		$m.__track_lines__[150] = 'struct.py, line 150:\n    exp = 11';
		$m.__track_lines__[151] = 'struct.py, line 151:\n    prec = 52';
		$m.__track_lines__[153] = 'struct.py, line 153:\n    man, e = math.frexp(number)';
		$m.__track_lines__[154] = 'struct.py, line 154:\n    if 0.5 <= man and man < 1.0:';
		$m.__track_lines__[155] = 'struct.py, line 155:\n    man *= 2';
		$m.__track_lines__[156] = 'struct.py, line 156:\n    e -= 1';
		$m.__track_lines__[157] = 'struct.py, line 157:\n    if sane_float(man,e):';
		$m.__track_lines__[158] = 'struct.py, line 158:\n    man -= 1';
		$m.__track_lines__[159] = 'struct.py, line 159:\n    e += bias';
		$m.__track_lines__[160] = 'struct.py, line 160:\n    mantissa = int(2**prec *(man) +0.5)';
		$m.__track_lines__[161] = 'struct.py, line 161:\n    res=[]';
		$m.__track_lines__[162] = 'struct.py, line 162:\n    if mantissa >> prec :';
		$m.__track_lines__[163] = 'struct.py, line 163:\n    mantissa = 0';
		$m.__track_lines__[164] = 'struct.py, line 164:\n    e += 1';
		$m.__track_lines__[166] = 'struct.py, line 166:\n    for i in range(size-2):';
		$m.__track_lines__[168] = 'struct.py, line 168:\n    res.extend([ mantissa & 0xff])';
		$m.__track_lines__[169] = 'struct.py, line 169:\n    mantissa >>= 8';
		$m.__track_lines__[171] = 'struct.py, line 171:\n    res.extend([ (mantissa & (2**(15-exp)-1)) | ((e & (2**(exp-7)-1))<<(15-exp))])';
		$m.__track_lines__[173] = 'struct.py, line 173:\n    res.extend([sign << 7 | e >> (exp - 7)])';
		$m.__track_lines__[174] = "struct.py, line 174:\n    if le == 'big':";
		$m.__track_lines__[175] = 'struct.py, line 175:\n    res.reverse()';
		$m.__track_lines__[176] = "struct.py, line 176:\n    return ''.join([chr(x) for x in res])";
		$m.__track_lines__[179] = 'struct.py, line 179:\n    big_endian_format = {';
		$m.__track_lines__[197] = 'struct.py, line 197:\n    default = big_endian_format';
		$m.__track_lines__[198] = "struct.py, line 198:\n    formatmode={ '<' : (default, 'little'),";
		$m.__track_lines__[205] = 'struct.py, line 205:\n    def getmode(fmt):';
		$m.__track_lines__[206] = 'struct.py, line 206:\n    try:';
		$m.__track_lines__[207] = 'struct.py, line 207:\n    formatdef,endianness = formatmode[fmt[0]]';
		$m.__track_lines__[208] = 'struct.py, line 208:\n    index = 1';
		$m.__track_lines__[210] = "struct.py, line 210:\n    formatdef,endianness = formatmode['@']";
		$m.__track_lines__[211] = 'struct.py, line 211:\n    index = 0';
		$m.__track_lines__[212] = 'struct.py, line 212:\n    return formatdef,endianness,index';
		$m.__track_lines__[213] = 'struct.py, line 213:\n    def getNum(fmt,i):';
		$m.__track_lines__[214] = 'struct.py, line 214:\n    num=None';
		$m.__track_lines__[215] = 'struct.py, line 215:\n    cur = fmt[i]';
		$m.__track_lines__[216] = "struct.py, line 216:\n    while ('0'<= cur ) and ( cur <= '9'):";
		$m.__track_lines__[217] = 'struct.py, line 217:\n    if num == None:';
		$m.__track_lines__[218] = 'struct.py, line 218:\n    num = int(cur)';
		$m.__track_lines__[220] = 'struct.py, line 220:\n    num = 10*num + int(cur)';
		$m.__track_lines__[221] = 'struct.py, line 221:\n    i += 1';
		$m.__track_lines__[222] = 'struct.py, line 222:\n    cur = fmt[i]';
		$m.__track_lines__[223] = 'struct.py, line 223:\n    return num,i';
		$m.__track_lines__[225] = 'struct.py, line 225:\n    def calcsize(fmt):';
		$m.__track_lines__[230] = 'struct.py, line 230:\n    formatdef,endianness,i = getmode(fmt)';
		$m.__track_lines__[231] = 'struct.py, line 231:\n    num = 0';
		$m.__track_lines__[232] = 'struct.py, line 232:\n    result = 0';
		$m.__track_lines__[233] = 'struct.py, line 233:\n    while i<len(fmt):';
		$m.__track_lines__[234] = 'struct.py, line 234:\n    num,i = getNum(fmt,i)';
		$m.__track_lines__[235] = 'struct.py, line 235:\n    cur = fmt[i]';
		$m.__track_lines__[236] = 'struct.py, line 236:\n    try:';
		$m.__track_lines__[237] = 'struct.py, line 237:\n    format = formatdef[cur]';
		$m.__track_lines__[239] = 'struct.py, line 239:\n    raise StructError,"%s is not a valid format"%cur';
		$m.__track_lines__[240] = 'struct.py, line 240:\n    if num != None :';
		$m.__track_lines__[241] = "struct.py, line 241:\n    result += num*format['size']";
		$m.__track_lines__[243] = "struct.py, line 243:\n    result += format['size']";
		$m.__track_lines__[244] = 'struct.py, line 244:\n    num = 0';
		$m.__track_lines__[245] = 'struct.py, line 245:\n    i += 1';
		$m.__track_lines__[246] = 'struct.py, line 246:\n    return result';
		$m.__track_lines__[248] = 'struct.py, line 248:\n    def pack(fmt,*args):';
		$m.__track_lines__[252] = 'struct.py, line 252:\n    formatdef,endianness,i = getmode(fmt)';
		$m.__track_lines__[253] = 'struct.py, line 253:\n    args = list(args)';
		$m.__track_lines__[254] = 'struct.py, line 254:\n    n_args = len(args)';
		$m.__track_lines__[255] = 'struct.py, line 255:\n    result = []';
		$m.__track_lines__[256] = 'struct.py, line 256:\n    while i<len(fmt):';
		$m.__track_lines__[257] = 'struct.py, line 257:\n    num,i = getNum(fmt,i)';
		$m.__track_lines__[258] = 'struct.py, line 258:\n    cur = fmt[i]';
		$m.__track_lines__[259] = 'struct.py, line 259:\n    try:';
		$m.__track_lines__[260] = 'struct.py, line 260:\n    format = formatdef[cur]';
		$m.__track_lines__[262] = 'struct.py, line 262:\n    raise StructError,"%s is not a valid format"%cur';
		$m.__track_lines__[263] = 'struct.py, line 263:\n    if num == None :';
		$m.__track_lines__[264] = 'struct.py, line 264:\n    num_s = 0';
		$m.__track_lines__[265] = 'struct.py, line 265:\n    num = 1';
		$m.__track_lines__[267] = 'struct.py, line 267:\n    num_s = num';
		$m.__track_lines__[269] = "struct.py, line 269:\n    if cur == 'x':";
		$m.__track_lines__[271] = 'struct.py, line 271:\n    result.extend(["".ljust(num, \'\\0\')])';
		$m.__track_lines__[273] = 'struct.py, line 273:\n    if isinstance(args[0], str):';
		$m.__track_lines__[274] = 'struct.py, line 274:\n    padding = num - len(args[0])';
		$m.__track_lines__[276] = 'struct.py, line 276:\n    result.extend([args[0][:num] + "".ljust(padding, \'\\0\')])';
		$m.__track_lines__[277] = 'struct.py, line 277:\n    args.pop(0)';
		$m.__track_lines__[279] = 'struct.py, line 279:\n    raise StructError,"arg for string format not a string"';
		$m.__track_lines__[281] = 'struct.py, line 281:\n    if isinstance(args[0], str):';
		$m.__track_lines__[282] = 'struct.py, line 282:\n    padding = num - len(args[0]) - 1';
		$m.__track_lines__[284] = 'struct.py, line 284:\n    if padding > 0:';
		$m.__track_lines__[286] = 'struct.py, line 286:\n    result.extend([chr(len(args[0])) + args[0][:num-1] + "".ljust(padding, \'\\0\')])';
		$m.__track_lines__[288] = 'struct.py, line 288:\n    if num<255:';
		$m.__track_lines__[290] = 'struct.py, line 290:\n    result.extend([chr(num-1) + args[0][:num-1]])';
		$m.__track_lines__[293] = 'struct.py, line 293:\n    result.extend([chr(255) + args[0][:num-1]])';
		$m.__track_lines__[294] = 'struct.py, line 294:\n    args.pop(0)';
		$m.__track_lines__[296] = 'struct.py, line 296:\n    raise StructError,"arg for string format not a string"';
		$m.__track_lines__[299] = 'struct.py, line 299:\n    if len(args) < num:';
		$m.__track_lines__[300] = 'struct.py, line 300:\n    raise StructError,"insufficient arguments to pack"';
		$m.__track_lines__[301] = 'struct.py, line 301:\n    for var in args[:num]:';
		$m.__track_lines__[303] = "struct.py, line 303:\n    result.extend([format['pack'](var,format['size'],endianness)])";
		$m.__track_lines__[304] = 'struct.py, line 304:\n    args=args[num:]';
		$m.__track_lines__[305] = 'struct.py, line 305:\n    num = None';
		$m.__track_lines__[306] = 'struct.py, line 306:\n    i += 1';
		$m.__track_lines__[307] = 'struct.py, line 307:\n    if len(args) != 0:';
		$m.__track_lines__[308] = 'struct.py, line 308:\n    raise StructError,"too many arguments for pack format"';
		$m.__track_lines__[309] = "struct.py, line 309:\n    return ''.join(result)";
		$m.__track_lines__[311] = 'struct.py, line 311:\n    def unpack(fmt,data):';
		$m.__track_lines__[316] = 'struct.py, line 316:\n    formatdef,endianness,i = getmode(fmt)';
		$m.__track_lines__[317] = 'struct.py, line 317:\n    j = 0';
		$m.__track_lines__[318] = 'struct.py, line 318:\n    num = 0';
		$m.__track_lines__[319] = 'struct.py, line 319:\n    result = []';
		$m.__track_lines__[320] = 'struct.py, line 320:\n    length= calcsize(fmt)';
		$m.__track_lines__[321] = 'struct.py, line 321:\n    if length != len (data):';
		$m.__track_lines__[322] = 'struct.py, line 322:\n    raise StructError,"unpack str size does not match format"';
		$m.__track_lines__[323] = 'struct.py, line 323:\n    while i<len(fmt):';
		$m.__track_lines__[324] = 'struct.py, line 324:\n    num,i=getNum(fmt,i)';
		$m.__track_lines__[325] = 'struct.py, line 325:\n    cur = fmt[i]';
		$m.__track_lines__[326] = 'struct.py, line 326:\n    i += 1';
		$m.__track_lines__[327] = 'struct.py, line 327:\n    try:';
		$m.__track_lines__[328] = 'struct.py, line 328:\n    format = formatdef[cur]';
		$m.__track_lines__[330] = 'struct.py, line 330:\n    raise StructError,"%s is not a valid format"%cur';
		$m.__track_lines__[332] = 'struct.py, line 332:\n    if not num :';
		$m.__track_lines__[333] = 'struct.py, line 333:\n    num = 1';
		$m.__track_lines__[335] = "struct.py, line 335:\n    if cur == 'x':";
		$m.__track_lines__[336] = 'struct.py, line 336:\n    j += num';
		$m.__track_lines__[338] = 'struct.py, line 338:\n    result.append(data[j:j+num])';
		$m.__track_lines__[339] = 'struct.py, line 339:\n    j += num';
		$m.__track_lines__[341] = 'struct.py, line 341:\n    n=ord(data[j])';
		$m.__track_lines__[342] = 'struct.py, line 342:\n    if n >= num:';
		$m.__track_lines__[343] = 'struct.py, line 343:\n    n = num-1';
		$m.__track_lines__[344] = 'struct.py, line 344:\n    result.append(data[j+1:j+n+1])';
		$m.__track_lines__[345] = 'struct.py, line 345:\n    j += num';
		$m.__track_lines__[347] = 'struct.py, line 347:\n    for n in range(num):';
		$m.__track_lines__[349] = "struct.py, line 349:\n    result.extend([format['unpack'](data,j,format['size'],endianness)])";
		$m.__track_lines__[350] = "struct.py, line 350:\n    j += format['size']";
		$m.__track_lines__[352] = 'struct.py, line 352:\n    return tuple(result)';
		$m.__track_lines__[354] = 'struct.py, line 354:\n    def pack_into(fmt, buf, offset, *args):';
		$m.__track_lines__[355] = 'struct.py, line 355:\n    raise NotImplementedError("pack_into")';
		$m.__track_lines__[359] = 'struct.py, line 359:\n    def unpack_from(fmt, buf, offset=0):';
		$m.__track_lines__[360] = 'struct.py, line 360:\n    raise NotImplementedError("unpack_from")';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_128 = new $p['int'](128);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_255 = new $p['int'](255);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_52 = new $p['int'](52);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_1023 = new $p['int'](1023);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_127 = new $p['int'](127);
		var $constant_long_0 = new $p['long'](0);
		$pyjs.track.module='struct';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=42;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['math'] = $p['___import___']('math', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=45;
		$m['StructError'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'struct';
			$cls_definition.__md5__ = 'b13a27c51077f5df2a7123a1545fd885';
			$pyjs.track.lineno=46;
			$pyjs.track.lineno=45;
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StructError', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=47;
		$m['error'] = $m['StructError'];
		$pyjs.track.lineno=48;
		$m['unpack_int'] = function(data, index, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
			var $iter2_type,$iter2_iter,bytes,number,$iter2_idx,$iter2_nextval,$pyjs__trackstack_size_1,b,$iter2_array;
			$pyjs.track={module:'struct',lineno:48};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=49;
			bytes = function(){
				var b,$iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$add2,$add1,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__getslice'](data, index, $p['__op_add']($add1=index,$add2=size));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				b = $iter1_nextval.$nextval;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $collcomp1['append']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['ord'](b);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='struct';

	return $collcomp1;}();
			$pyjs.track.lineno=50;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](le, 'little'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs.track.lineno=51;
				(function(){try{try{$pyjs.in_try_except += 1;
				return bytes['reverse']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			$pyjs.track.lineno=52;
			number = $constant_long_0;
			$pyjs.track.lineno=53;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return bytes;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				b = $iter2_nextval.$nextval;
				$pyjs.track.lineno=54;
				number = $p['op_bitor2']($p['op_bitshiftleft'](number,$constant_int_8), b);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='struct';
			$pyjs.track.lineno=55;
			$pyjs.track.lineno=55;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['int'](number);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['unpack_int'].__name__ = 'unpack_int';

		$m['unpack_int'].__bind_type__ = 0;
		$m['unpack_int'].__args__ = [null,null,['data'],['index'],['size'],['le']];
		$pyjs.track.lineno=57;
		$m['unpack_signed_int'] = function(data, index, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
			var number,$pow3,$pow2,$pow1,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4,max,$pow4,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1;
			$pyjs.track={module:'struct',lineno:57};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=57;
			$pyjs.track.lineno=58;
			number = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['unpack_int'](data, index, size, le);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs.track.lineno=59;
			max = (typeof ($pow1=$constant_int_2)==typeof ($pow2=(typeof ($mul1=size)==typeof ($mul2=$constant_int_8) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))) && typeof $pow1=='number'?
				Math.pow($pow1,$pow2):
				$p['op_pow']($pow1,$pow2));
			$pyjs.track.lineno=60;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](number, $p['__op_sub']($sub3=(typeof ($pow3=$constant_int_2)==typeof ($pow4=$p['__op_sub']($sub1=(typeof ($mul3=size)==typeof ($mul4=$constant_int_8) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)),$sub2=$constant_int_1)) && typeof $pow3=='number'?
				Math.pow($pow3,$pow4):
				$p['op_pow']($pow3,$pow4)),$sub4=$constant_int_1)) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs.track.lineno=61;
				number = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['int']((typeof ($mul5=(typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))==typeof ($mul6=$p['__op_sub']($sub5=max,$sub6=number)) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			}
			$pyjs.track.lineno=62;
			$pyjs.track.lineno=62;
			var $pyjs__ret = number;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['unpack_signed_int'].__name__ = 'unpack_signed_int';

		$m['unpack_signed_int'].__bind_type__ = 0;
		$m['unpack_signed_int'].__args__ = [null,null,['data'],['index'],['size'],['le']];
		$pyjs.track.lineno=64;
		$m['unpack_float'] = function(data, index, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
			var $sub22,$sub23,$sub20,$sub21,$sub24,number,sign,$div2,bias,$pow9,$iter4_type,$iter4_iter,$pow7,$pow5,revbytes,prec,$pow8,$sub13,$sub9,$sub8,$pow10,$sub7,$sub19,$sub18,$pow6,mantissa,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$add10,$mul9,$mul8,$mul7,$div3,$div1,$div4,b,e,$mul10,$iter4_nextval,bytes,$iter4_idx,$add5,$add6,$add7,exp,$pyjs__trackstack_size_1,$iter4_array,$add8,$add9;
			$pyjs.track={module:'struct',lineno:64};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=64;
			$pyjs.track.lineno=65;
			bytes = function(){
				var $iter3_idx,$iter3_nextval,$iter3_array,$collcomp2,$add3,b,$iter3_iter,$add4,$iter3_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__getslice'](data, index, $p['__op_add']($add3=index,$add4=size));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				b = $iter3_nextval.$nextval;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $collcomp2['append']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['ord'](b);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='struct';

	return $collcomp2;}();
			$pyjs.track.lineno=66;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](bytes);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})(), size));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
				$pyjs.track.lineno=67;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $m['StructError'];
				var $pyjs__raise_expr2 = 'Not enough data to unpack';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			$pyjs.track.lineno=68;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['max'](bytes);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs.track.lineno=69;
				$pyjs.track.lineno=69;
				var $pyjs__ret = 0.0;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=70;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](le, 'big'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs.track.lineno=71;
				(function(){try{try{$pyjs.in_try_except += 1;
				return bytes['reverse']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			}
			$pyjs.track.lineno=72;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](size, $constant_int_4));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
				$pyjs.track.lineno=73;
				bias = $constant_int_127;
				$pyjs.track.lineno=74;
				exp = $constant_int_8;
				$pyjs.track.lineno=75;
				prec = $constant_int_23;
			}
			else {
				$pyjs.track.lineno=77;
				bias = $constant_int_1023;
				$pyjs.track.lineno=78;
				exp = $constant_int_11;
				$pyjs.track.lineno=79;
				prec = $constant_int_52;
			}
			$pyjs.track.lineno=80;
			mantissa = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['long']($p['op_bitand2'](bytes.__getitem__($p['__op_sub']($sub7=size,$sub8=$constant_int_2)), $p['__op_sub']($sub11=(typeof ($pow5=$constant_int_2)==typeof ($pow6=$p['__op_sub']($sub9=$constant_int_15,$sub10=exp)) && typeof $pow5=='number'?
				Math.pow($pow5,$pow6):
				$p['op_pow']($pow5,$pow6)),$sub12=$constant_int_1)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs.track.lineno=83;
			revbytes = bytes;
			$pyjs.track.lineno=84;
			(function(){try{try{$pyjs.in_try_except += 1;
			return revbytes['reverse']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs.track.lineno=85;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__getslice'](revbytes, $constant_int_3, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				b = $iter4_nextval.$nextval;
				$pyjs.track.lineno=86;
				mantissa = $p['op_bitor2']($p['op_bitshiftleft'](mantissa,$constant_int_8), b);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='struct';
			$pyjs.track.lineno=87;
			mantissa = $p['__op_add']($add5=$constant_int_1,$add6=(typeof ($div1=(typeof ($mul7=1.0)==typeof ($mul8=mantissa) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)))==typeof ($div2=(typeof ($pow7=$constant_int_2)==typeof ($pow8=prec) && typeof $pow7=='number'?
				Math.pow($pow7,$pow8):
				$p['op_pow']($pow7,$pow8))) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)));
			$pyjs.track.lineno=88;
			mantissa = (typeof ($div3=mantissa)==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4));
			$pyjs.track.lineno=89;
			e = $p['op_bitshiftleft']($p['op_bitand2'](bytes.__getitem__((typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))), $constant_int_127),$p['__op_sub']($sub13=exp,$sub14=$constant_int_7));
			$pyjs.track.lineno=90;
			e = $p['__op_add']($add7=e,$add8=$p['op_bitand2']($p['op_bitshiftright'](bytes.__getitem__($p['__op_sub']($sub15=size,$sub16=$constant_int_2)),$p['__op_sub']($sub17=$constant_int_15,$sub18=exp)), $p['__op_sub']($sub21=(typeof ($pow9=$constant_int_2)==typeof ($pow10=$p['__op_sub']($sub19=exp,$sub20=$constant_int_7)) && typeof $pow9=='number'?
				Math.pow($pow9,$pow10):
				$p['op_pow']($pow9,$pow10)),$sub22=$constant_int_1)));
			$pyjs.track.lineno=91;
			e = $p['__op_sub']($sub23=e,$sub24=bias);
			$pyjs.track.lineno=92;
			e = $p['__op_add']($add9=e,$add10=$constant_int_1);
			$pyjs.track.lineno=93;
			sign = $p['op_bitand2'](bytes.__getitem__((typeof ($usub3=$constant_int_1)=='number'?
				-$usub3:
				$p['op_usub']($usub3))), $constant_int_128);
			$pyjs.track.lineno=94;
			number = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['math']['ldexp'](mantissa, e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs.track.lineno=95;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](sign);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
				$pyjs.track.lineno=95;
				number = (typeof ($mul9=number)==typeof ($mul10=(typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4))) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10));
			}
			$pyjs.track.lineno=96;
			$pyjs.track.lineno=96;
			var $pyjs__ret = number;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['unpack_float'].__name__ = 'unpack_float';

		$m['unpack_float'].__bind_type__ = 0;
		$m['unpack_float'].__args__ = [null,null,['data'],['index'],['size'],['le']];
		$pyjs.track.lineno=98;
		$m['unpack_char'] = function(data, index, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
			var $add11,$add12;
			$pyjs.track={module:'struct',lineno:98};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=98;
			$pyjs.track.lineno=99;
			$pyjs.track.lineno=99;
			var $pyjs__ret = $p['__getslice'](data, index, $p['__op_add']($add11=index,$add12=size));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['unpack_char'].__name__ = 'unpack_char';

		$m['unpack_char'].__bind_type__ = 0;
		$m['unpack_char'].__args__ = [null,null,['data'],['index'],['size'],['le']];
		$pyjs.track.lineno=101;
		$m['pack_int'] = function(number, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $iter5_nextval,$iter5_idx,$iter5_array,res,$pyjs__trackstack_size_1,i,$iter5_iter,$iter5_type,x;
			$pyjs.track={module:'struct',lineno:101};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=101;
			$pyjs.track.lineno=102;
			x = number;
			$pyjs.track.lineno=103;
			res = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs.track.lineno=104;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter5_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $p['range'](size);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				i = $iter5_nextval.$nextval;
				$pyjs.track.lineno=105;
				(function(){try{try{$pyjs.in_try_except += 1;
				return res['append']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['chr']($p['op_bitand2'](x, $constant_int_255));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs.track.lineno=106;
				x = $p['op_bitshiftright'](x,$constant_int_8);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='struct';
			$pyjs.track.lineno=107;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](le, 'big'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
				$pyjs.track.lineno=108;
				(function(){try{try{$pyjs.in_try_except += 1;
				return res['reverse']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			}
			$pyjs.track.lineno=109;
			$pyjs.track.lineno=109;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](res);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['pack_int'].__name__ = 'pack_int';

		$m['pack_int'].__bind_type__ = 0;
		$m['pack_int'].__args__ = [null,null,['number'],['size'],['le']];
		$pyjs.track.lineno=111;
		$m['pack_signed_int'] = function(number, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $sub29,$sub30,$mul15,$sub26,$mul12,$mul11,$sub25,$mul16,$sub28,$or2,$sub27,$mul14,$or1,$mul13,$pow14,$pow13,$pow12,$pow11;
			$pyjs.track={module:'struct',lineno:111};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=111;
			$pyjs.track.lineno=112;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['isinstance'](number, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([$p['int'], $p['long']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
				$pyjs.track.lineno=113;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $m['StructError'];
				var $pyjs__raise_expr2 = 'argument for i,I,l,L,q,Q,h,H must be integer';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			$pyjs.track.lineno=114;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or1=($p['cmp'](number, $p['__op_sub']($sub27=(typeof ($pow11=$constant_int_2)==typeof ($pow12=$p['__op_sub']($sub25=(typeof ($mul11=$constant_int_8)==typeof ($mul12=size) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)),$sub26=$constant_int_1)) && typeof $pow11=='number'?
				Math.pow($pow11,$pow12):
				$p['op_pow']($pow11,$pow12)),$sub28=$constant_int_1)) == 1))?$or1:($p['cmp'](number, (typeof ($mul15=(typeof ($usub5=$constant_int_1)=='number'?
				-$usub5:
				$p['op_usub']($usub5)))==typeof ($mul16=(typeof ($pow13=$constant_int_2)==typeof ($pow14=$p['__op_sub']($sub29=(typeof ($mul13=$constant_int_8)==typeof ($mul14=size) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)),$sub30=$constant_int_1)) && typeof $pow13=='number'?
				Math.pow($pow13,$pow14):
				$p['op_pow']($pow13,$pow14))) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16))) == -1)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
				$pyjs.track.lineno=115;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = (typeof OverflowError == "undefined"?$m.OverflowError:OverflowError);
				var $pyjs__raise_expr2 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('Number:%i too large to convert', number);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			$pyjs.track.lineno=116;
			$pyjs.track.lineno=116;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['pack_int'](number, size, le);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['pack_signed_int'].__name__ = 'pack_signed_int';

		$m['pack_signed_int'].__bind_type__ = 0;
		$m['pack_signed_int'].__args__ = [null,null,['number'],['size'],['le']];
		$pyjs.track.lineno=118;
		$m['pack_unsigned_int'] = function(number, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $mul17,$sub31,$mul18,$sub32,$pow16,$pow15;
			$pyjs.track={module:'struct',lineno:118};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=118;
			$pyjs.track.lineno=119;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['isinstance'](number, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([$p['int'], $p['long']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
				$pyjs.track.lineno=120;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $m['StructError'];
				var $pyjs__raise_expr2 = 'argument for i,I,l,L,q,Q,h,H must be integer';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			$pyjs.track.lineno=121;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](number, $constant_int_0) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
				$pyjs.track.lineno=122;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $p['TypeError'];
				var $pyjs__raise_expr2 = "can't convert negative long to unsigned";
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			$pyjs.track.lineno=123;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](number, $p['__op_sub']($sub31=(typeof ($pow15=$constant_int_2)==typeof ($pow16=(typeof ($mul17=$constant_int_8)==typeof ($mul18=size) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18))) && typeof $pow15=='number'?
				Math.pow($pow15,$pow16):
				$p['op_pow']($pow15,$pow16)),$sub32=$constant_int_1)) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
				$pyjs.track.lineno=124;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = (typeof OverflowError == "undefined"?$m.OverflowError:OverflowError);
				var $pyjs__raise_expr2 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('Number:%i too large to convert', number);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			$pyjs.track.lineno=125;
			$pyjs.track.lineno=125;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['pack_int'](number, size, le);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['pack_unsigned_int'].__name__ = 'pack_unsigned_int';

		$m['pack_unsigned_int'].__bind_type__ = 0;
		$m['pack_unsigned_int'].__args__ = [null,null,['number'],['size'],['le']];
		$pyjs.track.lineno=127;
		$m['pack_char'] = function($$char, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $$char;
			$pyjs.track={module:'struct',lineno:127};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=127;
			$pyjs.track.lineno=128;
			$pyjs.track.lineno=128;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']($$char);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['pack_char'].__name__ = 'pack_char';

		$m['pack_char'].__bind_type__ = 0;
		$m['pack_char'].__args__ = [null,null,['$$char'],['size'],['le']];
		$pyjs.track.lineno=130;
		$m['sane_float'] = function(man, e) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'struct',lineno:130};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=130;
			$pyjs.track.lineno=132;
			$pyjs.track.lineno=132;
			var $pyjs__ret = true;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['sane_float'].__name__ = 'sane_float';

		$m['sane_float'].__bind_type__ = 0;
		$m['sane_float'].__args__ = [null,null,['man'],['e']];
		$pyjs.track.lineno=134;
		$m['pack_float'] = function(number, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $iter6_type,$pow21,sign,$sub48,$sub40,bias,$sub47,$pow19,$pow18,$pow17,$sub41,$iter6_iter,$sub43,$sub44,$sub42,$sub46,$sub37,res,$sub50,prec,$sub45,$sub39,$sub38,$mul24,$iter6_nextval,$mul22,$mul23,$mul20,$mul21,$sub33,$sub35,$sub34,$iter6_idx,$sub36,mantissa,$and1,$and2,$add14,$add15,$add16,$add17,$pow22,$pow20,$add13,$add18,man,e,$sub49,i,$iter6_array,$mul19,exp,$pyjs__trackstack_size_1;
			$pyjs.track={module:'struct',lineno:134};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=134;
			$pyjs.track.lineno=136;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](number, $constant_int_0) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
				$pyjs.track.lineno=137;
				sign = $constant_int_1;
				$pyjs.track.lineno=138;
				number = (typeof ($mul19=number)==typeof ($mul20=(typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20));
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](number, 0.0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
				$pyjs.track.lineno=141;
				$pyjs.track.lineno=141;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return ''['ljust'](size, '\x00');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=143;
				sign = $constant_int_0;
			}
			$pyjs.track.lineno=144;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](size, $constant_int_4));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
				$pyjs.track.lineno=145;
				bias = $constant_int_127;
				$pyjs.track.lineno=146;
				exp = $constant_int_8;
				$pyjs.track.lineno=147;
				prec = $constant_int_23;
			}
			else {
				$pyjs.track.lineno=149;
				bias = $constant_int_1023;
				$pyjs.track.lineno=150;
				exp = $constant_int_11;
				$pyjs.track.lineno=151;
				prec = $constant_int_52;
			}
			$pyjs.track.lineno=153;
			var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['math']['frexp'](number);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			man = $tupleassign1[0];
			e = $tupleassign1[1];
			$pyjs.track.lineno=154;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and1=($p['cmp'](0.5, man) < 1))?($p['cmp'](man, 1.0) == -1):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
				$pyjs.track.lineno=155;
				man = (typeof ($mul21=man)==typeof ($mul22=$constant_int_2) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22));
				$pyjs.track.lineno=156;
				e = $p['__op_sub']($sub33=e,$sub34=$constant_int_1);
			}
			$pyjs.track.lineno=157;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['sane_float'](man, e);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
				$pyjs.track.lineno=158;
				man = $p['__op_sub']($sub35=man,$sub36=$constant_int_1);
				$pyjs.track.lineno=159;
				e = $p['__op_add']($add13=e,$add14=bias);
				$pyjs.track.lineno=160;
				mantissa = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['int']($p['__op_add']($add15=(typeof ($mul23=(typeof ($pow17=$constant_int_2)==typeof ($pow18=prec) && typeof $pow17=='number'?
					Math.pow($pow17,$pow18):
					$p['op_pow']($pow17,$pow18)))==typeof ($mul24=man) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)),$add16=0.5));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				$pyjs.track.lineno=161;
				res = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				$pyjs.track.lineno=162;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_bitshiftright'](mantissa,prec));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
					$pyjs.track.lineno=163;
					mantissa = $constant_int_0;
					$pyjs.track.lineno=164;
					e = $p['__op_add']($add17=e,$add18=$constant_int_1);
				}
				$pyjs.track.lineno=166;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['range']($p['__op_sub']($sub37=size,$sub38=$constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
					i = $iter6_nextval.$nextval;
					$pyjs.track.lineno=168;
					(function(){try{try{$pyjs.in_try_except += 1;
					return res['extend']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['list']([$p['op_bitand2'](mantissa, $constant_int_255)]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
					$pyjs.track.lineno=169;
					mantissa = $p['op_bitshiftright'](mantissa,$constant_int_8);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='struct';
				$pyjs.track.lineno=171;
				(function(){try{try{$pyjs.in_try_except += 1;
				return res['extend']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([$p['op_bitor2']($p['op_bitand2'](mantissa, $p['__op_sub']($sub41=(typeof ($pow19=$constant_int_2)==typeof ($pow20=$p['__op_sub']($sub39=$constant_int_15,$sub40=exp)) && typeof $pow19=='number'?
					Math.pow($pow19,$pow20):
					$p['op_pow']($pow19,$pow20)),$sub42=$constant_int_1)), $p['op_bitshiftleft']($p['op_bitand2'](e, $p['__op_sub']($sub45=(typeof ($pow21=$constant_int_2)==typeof ($pow22=$p['__op_sub']($sub43=exp,$sub44=$constant_int_7)) && typeof $pow21=='number'?
					Math.pow($pow21,$pow22):
					$p['op_pow']($pow21,$pow22)),$sub46=$constant_int_1)),$p['__op_sub']($sub47=$constant_int_15,$sub48=exp)))]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				$pyjs.track.lineno=173;
				(function(){try{try{$pyjs.in_try_except += 1;
				return res['extend']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([$p['op_bitor2']($p['op_bitshiftleft'](sign,$constant_int_7), $p['op_bitshiftright'](e,$p['__op_sub']($sub49=exp,$sub50=$constant_int_7)))]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
				$pyjs.track.lineno=174;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](le, 'big'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
					$pyjs.track.lineno=175;
					(function(){try{try{$pyjs.in_try_except += 1;
					return res['reverse']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				}
				$pyjs.track.lineno=176;
				$pyjs.track.lineno=176;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return ''['join'](function(){
					var $iter7_nextval,$iter7_iter,$iter7_array,$collcomp3,$iter7_idx,x,$iter7_type,$pyjs__trackstack_size_1;
	$collcomp3 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter7_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return res;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
					x = $iter7_nextval.$nextval;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $collcomp3['append']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['chr'](x);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='struct';

	return $collcomp3;}());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['pack_float'].__name__ = 'pack_float';

		$m['pack_float'].__bind_type__ = 0;
		$m['pack_float'].__args__ = [null,null,['number'],['size'],['le']];
		$pyjs.track.lineno=179;
		$m['big_endian_format'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['x', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', null], ['unpack', null]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()], ['b', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()], ['B', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()], ['c', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', $m['pack_char']], ['unpack', $m['unpack_char']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()], ['s', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', null], ['unpack', null]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()], ['p', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', null], ['unpack', null]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()], ['h', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_2], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()], ['H', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_2], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()], ['i', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()], ['I', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()], ['l', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()], ['L', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()], ['q', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_8], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()], ['Q', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_8], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()], ['f', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_float']], ['unpack', $m['unpack_float']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()], ['d', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['size', $constant_int_8], ['alignment', $constant_int_0], ['pack', $m['pack_float']], ['unpack', $m['unpack_float']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
		$pyjs.track.lineno=197;
		$m['$$default'] = $m['big_endian_format'];
		$pyjs.track.lineno=198;
		$m['formatmode'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([['<', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$m['$$default'], 'little']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()], ['>', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$m['$$default'], 'big']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()], ['!', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$m['$$default'], 'big']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()], ['=', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$m['$$default'], $p['getattr']($m['sys'], 'byteorder')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()], ['@', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$m['$$default'], $p['getattr']($m['sys'], 'byteorder')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
		$pyjs.track.lineno=205;
		$m['getmode'] = function(fmt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var index,$pyjs_try_err,endianness,formatdef;
			$pyjs.track={module:'struct',lineno:205};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=205;
			$pyjs.track.lineno=206;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=207;
					var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['__ass_unpack']($m['formatmode'].__getitem__(fmt.__getitem__($constant_int_0)), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
					formatdef = $tupleassign2[0];
					endianness = $tupleassign2[1];
					$pyjs.track.lineno=208;
					index = $constant_int_1;
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
				$pyjs.track.module='struct';
				if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					$pyjs.track.lineno=210;
					var $tupleassign3 = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['__ass_unpack']($m['formatmode'].__getitem__('@'), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
					formatdef = $tupleassign3[0];
					endianness = $tupleassign3[1];
					$pyjs.track.lineno=211;
					index = $constant_int_0;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.track.lineno=212;
			$pyjs.track.lineno=212;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([formatdef, endianness, index]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getmode'].__name__ = 'getmode';

		$m['getmode'].__bind_type__ = 0;
		$m['getmode'].__args__ = [null,null,['fmt']];
		$pyjs.track.lineno=213;
		$m['getNum'] = function(fmt, i) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $add22,cur,$add20,$and3,$and4,$add21,num,$mul26,$mul25,$add19;
			$pyjs.track={module:'struct',lineno:213};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=213;
			$pyjs.track.lineno=214;
			num = null;
			$pyjs.track.lineno=215;
			cur = fmt.__getitem__(i);
			$pyjs.track.lineno=216;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and3=($p['cmp']('0', cur) < 1))?($p['cmp'](cur, '9') < 1):$and3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()) {
				$pyjs.track.lineno=217;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](num, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) {
					$pyjs.track.lineno=218;
					num = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['int'](cur);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				}
				else {
					$pyjs.track.lineno=220;
					num = $p['__op_add']($add19=(typeof ($mul25=$constant_int_10)==typeof ($mul26=num) && typeof $mul25=='number'?
						$mul25*$mul26:
						$p['op_mul']($mul25,$mul26)),$add20=(function(){try{try{$pyjs.in_try_except += 1;
					return $p['int'](cur);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})());
				}
				$pyjs.track.lineno=221;
				i = $p['__op_add']($add21=i,$add22=$constant_int_1);
				$pyjs.track.lineno=222;
				cur = fmt.__getitem__(i);
			}
			$pyjs.track.lineno=223;
			$pyjs.track.lineno=223;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([num, i]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getNum'].__name__ = 'getNum';

		$m['getNum'].__bind_type__ = 0;
		$m['getNum'].__args__ = [null,null,['fmt'],['i']];
		$pyjs.track.lineno=225;
		$m['calcsize'] = function(fmt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add28,cur,format,i,$mul28,$add25,$pyjs_try_err,$add27,$add24,num,result,endianness,$mul27,$add26,$add23,formatdef;
			$pyjs.track={module:'struct',lineno:225};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=225;
			$pyjs.track.lineno=230;
			var $tupleassign4 = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['getmode'](fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})(), 3, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
			formatdef = $tupleassign4[0];
			endianness = $tupleassign4[1];
			i = $tupleassign4[2];
			$pyjs.track.lineno=231;
			num = $constant_int_0;
			$pyjs.track.lineno=232;
			result = $constant_int_0;
			$pyjs.track.lineno=233;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](i, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
				$pyjs.track.lineno=234;
				var $tupleassign5 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['getNum'](fmt, i);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
				num = $tupleassign5[0];
				i = $tupleassign5[1];
				$pyjs.track.lineno=235;
				cur = fmt.__getitem__(i);
				$pyjs.track.lineno=236;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					try {
						$pyjs.in_try_except += 1;
						$pyjs.track.lineno=237;
						format = formatdef.__getitem__(cur);
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
					$pyjs.track.module='struct';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						$pyjs.track.lineno=239;
						$pyjs.__active_exception_stack__ = null;

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = (function(){try{try{$pyjs.in_try_except += 1;
						return $p['sprintf']('%s is not a valid format', cur);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
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
				$pyjs.track.lineno=240;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq'](num, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()) {
					$pyjs.track.lineno=241;
					result = $p['__op_add']($add23=result,$add24=(typeof ($mul27=num)==typeof ($mul28=format.__getitem__('size')) && typeof $mul27=='number'?
						$mul27*$mul28:
						$p['op_mul']($mul27,$mul28)));
				}
				else {
					$pyjs.track.lineno=243;
					result = $p['__op_add']($add25=result,$add26=format.__getitem__('size'));
				}
				$pyjs.track.lineno=244;
				num = $constant_int_0;
				$pyjs.track.lineno=245;
				i = $p['__op_add']($add27=i,$add28=$constant_int_1);
			}
			$pyjs.track.lineno=246;
			$pyjs.track.lineno=246;
			var $pyjs__ret = result;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['calcsize'].__name__ = 'calcsize';

		$m['calcsize'].__bind_type__ = 0;
		$m['calcsize'].__args__ = [null,null,['fmt']];
		$pyjs.track.lineno=248;
		$m['pack'] = function(fmt) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			var $iter8_array,$iter8_iter,num,result,$iter8_idx,$sub64,$sub62,$sub63,$sub60,$sub61,$add29,cur,$add40,$pyjs_try_err,endianness,$$var,$sub57,$sub56,$sub55,$sub54,$sub53,$sub52,$sub51,format,$iter8_type,$sub59,$sub58,padding,$add32,$iter8_nextval,formatdef,$add38,$add39,i,$add33,$add30,$add31,$add36,$add37,$add34,$add35,n_args,$pyjs__trackstack_size_1,num_s;
			$pyjs.track={module:'struct',lineno:248};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=248;
			$pyjs.track.lineno=252;
			var $tupleassign6 = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['getmode'](fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})(), 3, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			formatdef = $tupleassign6[0];
			endianness = $tupleassign6[1];
			i = $tupleassign6[2];
			$pyjs.track.lineno=253;
			args = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list'](args);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
			$pyjs.track.lineno=254;
			n_args = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](args);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
			$pyjs.track.lineno=255;
			result = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs.track.lineno=256;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](i, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()) {
				$pyjs.track.lineno=257;
				var $tupleassign7 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['getNum'](fmt, i);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
				num = $tupleassign7[0];
				i = $tupleassign7[1];
				$pyjs.track.lineno=258;
				cur = fmt.__getitem__(i);
				$pyjs.track.lineno=259;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					try {
						$pyjs.in_try_except += 1;
						$pyjs.track.lineno=260;
						format = formatdef.__getitem__(cur);
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
					$pyjs.track.module='struct';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						$pyjs.track.lineno=262;
						$pyjs.__active_exception_stack__ = null;

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = (function(){try{try{$pyjs.in_try_except += 1;
						return $p['sprintf']('%s is not a valid format', cur);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
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
				$pyjs.track.lineno=263;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](num, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()) {
					$pyjs.track.lineno=264;
					num_s = $constant_int_0;
					$pyjs.track.lineno=265;
					num = $constant_int_1;
				}
				else {
					$pyjs.track.lineno=267;
					num_s = num;
				}
				$pyjs.track.lineno=269;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](cur, 'x'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()) {
					$pyjs.track.lineno=271;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['extend']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
					return ''['ljust'](num, '\x00');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](cur, 's'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
					$pyjs.track.lineno=273;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['isinstance'](args.__getitem__($constant_int_0), $p['str']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
						$pyjs.track.lineno=274;
						padding = $p['__op_sub']($sub51=num,$sub52=(function(){try{try{$pyjs.in_try_except += 1;
						return $p['len'](args.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})());
						$pyjs.track.lineno=276;
						(function(){try{try{$pyjs.in_try_except += 1;
						return result['extend']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['list']([$p['__op_add']($add29=$p['__getslice'](args.__getitem__($constant_int_0), 0, num),$add30=(function(){try{try{$pyjs.in_try_except += 1;
						return ''['ljust'](padding, '\x00');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})())]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
						$pyjs.track.lineno=277;
						(function(){try{try{$pyjs.in_try_except += 1;
						return args['pop']($constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
					}
					else {
						$pyjs.track.lineno=279;
						$pyjs.__active_exception_stack__ = null;

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = 'arg for string format not a string';
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					}
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](cur, 'p'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})()) {
					$pyjs.track.lineno=281;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['isinstance'](args.__getitem__($constant_int_0), $p['str']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()) {
						$pyjs.track.lineno=282;
						padding = $p['__op_sub']($sub55=$p['__op_sub']($sub53=num,$sub54=(function(){try{try{$pyjs.in_try_except += 1;
						return $p['len'](args.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})()),$sub56=$constant_int_1);
						$pyjs.track.lineno=284;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](($p['cmp'](padding, $constant_int_0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})()) {
							$pyjs.track.lineno=286;
							(function(){try{try{$pyjs.in_try_except += 1;
							return result['extend']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['list']([$p['__op_add']($add33=$p['__op_add']($add31=(function(){try{try{$pyjs.in_try_except += 1;
							return $p['chr']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['len'](args.__getitem__($constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})(),$add32=$p['__getslice'](args.__getitem__($constant_int_0), 0, $p['__op_sub']($sub57=num,$sub58=$constant_int_1))),$add34=(function(){try{try{$pyjs.in_try_except += 1;
							return ''['ljust'](padding, '\x00');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})())]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
						}
						else {
							$pyjs.track.lineno=288;
							if ((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool'](($p['cmp'](num, $constant_int_255) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()) {
								$pyjs.track.lineno=290;
								(function(){try{try{$pyjs.in_try_except += 1;
								return result['extend']((function(){try{try{$pyjs.in_try_except += 1;
								return $p['list']([$p['__op_add']($add35=(function(){try{try{$pyjs.in_try_except += 1;
								return $p['chr']($p['__op_sub']($sub59=num,$sub60=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})(),$add36=$p['__getslice'](args.__getitem__($constant_int_0), 0, $p['__op_sub']($sub61=num,$sub62=$constant_int_1)))]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
							}
							else {
								$pyjs.track.lineno=293;
								(function(){try{try{$pyjs.in_try_except += 1;
								return result['extend']((function(){try{try{$pyjs.in_try_except += 1;
								return $p['list']([$p['__op_add']($add37=(function(){try{try{$pyjs.in_try_except += 1;
								return $p['chr']($constant_int_255);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})(),$add38=$p['__getslice'](args.__getitem__($constant_int_0), 0, $p['__op_sub']($sub63=num,$sub64=$constant_int_1)))]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
							}
						}
						$pyjs.track.lineno=294;
						(function(){try{try{$pyjs.in_try_except += 1;
						return args['pop']($constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
					}
					else {
						$pyjs.track.lineno=296;
						$pyjs.__active_exception_stack__ = null;

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = 'arg for string format not a string';
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					}
				}
				else {
					$pyjs.track.lineno=299;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['len'](args);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})(), num) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()) {
						$pyjs.track.lineno=300;
						$pyjs.__active_exception_stack__ = null;

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = 'insufficient arguments to pack';
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					}
					$pyjs.track.lineno=301;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter8_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['__getslice'](args, 0, num);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
						$$var = $iter8_nextval.$nextval;
						$pyjs.track.lineno=303;
						(function(){try{try{$pyjs.in_try_except += 1;
						return result['extend']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
						return format.__getitem__('pack')($$var, format.__getitem__('size'), endianness);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='struct';
					$pyjs.track.lineno=304;
					args = $p['__getslice'](args, num, null);
				}
				$pyjs.track.lineno=305;
				num = null;
				$pyjs.track.lineno=306;
				i = $p['__op_add']($add39=i,$add40=$constant_int_1);
			}
			$pyjs.track.lineno=307;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](args);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})()) {
				$pyjs.track.lineno=308;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $m['StructError'];
				var $pyjs__raise_expr2 = 'too many arguments for pack format';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			$pyjs.track.lineno=309;
			$pyjs.track.lineno=309;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return ''['join'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['pack'].__name__ = 'pack';

		$m['pack'].__bind_type__ = 0;
		$m['pack'].__args__ = ['args',null,['fmt']];
		$pyjs.track.lineno=311;
		$m['unpack'] = function(fmt, data) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $iter9_iter,$iter9_idx,num,result,$sub66,$sub65,$iter9_array,cur,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$pyjs_try_err,endianness,$iter9_nextval,$iter9_type,format,formatdef,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,i,j,n,$add58,length,$pyjs__trackstack_size_1,$add45;
			$pyjs.track={module:'struct',lineno:311};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=311;
			$pyjs.track.lineno=316;
			var $tupleassign8 = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['getmode'](fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})(), 3, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
			formatdef = $tupleassign8[0];
			endianness = $tupleassign8[1];
			i = $tupleassign8[2];
			$pyjs.track.lineno=317;
			j = $constant_int_0;
			$pyjs.track.lineno=318;
			num = $constant_int_0;
			$pyjs.track.lineno=319;
			result = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
			$pyjs.track.lineno=320;
			length = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['calcsize'](fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			$pyjs.track.lineno=321;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq'](length, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()) {
				$pyjs.track.lineno=322;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $m['StructError'];
				var $pyjs__raise_expr2 = 'unpack str size does not match format';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			$pyjs.track.lineno=323;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](i, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()) {
				$pyjs.track.lineno=324;
				var $tupleassign9 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['getNum'](fmt, i);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
				num = $tupleassign9[0];
				i = $tupleassign9[1];
				$pyjs.track.lineno=325;
				cur = fmt.__getitem__(i);
				$pyjs.track.lineno=326;
				i = $p['__op_add']($add41=i,$add42=$constant_int_1);
				$pyjs.track.lineno=327;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					try {
						$pyjs.in_try_except += 1;
						$pyjs.track.lineno=328;
						format = formatdef.__getitem__(cur);
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
					$pyjs.track.module='struct';
					if (($pyjs_try_err_name == $p['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						$pyjs.track.lineno=330;
						$pyjs.__active_exception_stack__ = null;

						var $pyjs__raise_expr1 = $m['StructError'];
						var $pyjs__raise_expr2 = (function(){try{try{$pyjs.in_try_except += 1;
						return $p['sprintf']('%s is not a valid format', cur);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
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
				$pyjs.track.lineno=332;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool'](num));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()) {
					$pyjs.track.lineno=333;
					num = $constant_int_1;
				}
				$pyjs.track.lineno=335;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](cur, 'x'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
					$pyjs.track.lineno=336;
					j = $p['__op_add']($add43=j,$add44=num);
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](cur, 's'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})()) {
					$pyjs.track.lineno=338;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($p['__getslice'](data, j, $p['__op_add']($add45=j,$add46=num)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
					$pyjs.track.lineno=339;
					j = $p['__op_add']($add47=j,$add48=num);
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](cur, 'p'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()) {
					$pyjs.track.lineno=341;
					n = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['ord'](data.__getitem__(j));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
					$pyjs.track.lineno=342;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](((($p['cmp'](n, num))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()) {
						$pyjs.track.lineno=343;
						n = $p['__op_sub']($sub65=num,$sub66=$constant_int_1);
					}
					$pyjs.track.lineno=344;
					(function(){try{try{$pyjs.in_try_except += 1;
					return result['append']($p['__getslice'](data, $p['__op_add']($add49=j,$add50=$constant_int_1), $p['__op_add']($add53=$p['__op_add']($add51=j,$add52=n),$add54=$constant_int_1)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
					$pyjs.track.lineno=345;
					j = $p['__op_add']($add55=j,$add56=num);
				}
				else {
					$pyjs.track.lineno=347;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter9_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $p['range'](num);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
						n = $iter9_nextval.$nextval;
						$pyjs.track.lineno=349;
						(function(){try{try{$pyjs.in_try_except += 1;
						return result['extend']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
						return format.__getitem__('unpack')(data, j, format.__getitem__('size'), endianness);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})();
						$pyjs.track.lineno=350;
						j = $p['__op_add']($add57=j,$add58=format.__getitem__('size'));
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='struct';
				}
			}
			$pyjs.track.lineno=352;
			$pyjs.track.lineno=352;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple'](result);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['unpack'].__name__ = 'unpack';

		$m['unpack'].__bind_type__ = 0;
		$m['unpack'].__args__ = [null,null,['fmt'],['data']];
		$pyjs.track.lineno=354;
		$m['pack_into'] = function(fmt, buf, offset) {
			if ($pyjs.options.arg_count && arguments.length < 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length));


			$pyjs.track={module:'struct',lineno:354};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=354;
			$pyjs.track.lineno=355;
			$pyjs.__active_exception_stack__ = null;
			throw ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['NotImplementedError']('pack_into');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})());
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['pack_into'].__name__ = 'pack_into';

		$m['pack_into'].__bind_type__ = 0;
		$m['pack_into'].__args__ = ['args',null,['fmt'],['buf'],['offset']];
		$pyjs.track.lineno=359;
		$m['unpack_from'] = function(fmt, buf, offset) {
			if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
			if (typeof offset == 'undefined') offset=arguments.callee.__args__[4][1];

			$pyjs.track={module:'struct',lineno:359};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=359;
			$pyjs.track.lineno=360;
			$pyjs.__active_exception_stack__ = null;
			throw ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['NotImplementedError']('unpack_from');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})());
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['unpack_from'].__name__ = 'unpack_from';

		$m['unpack_from'].__bind_type__ = 0;
		$m['unpack_from'].__args__ = [null,null,['fmt'],['buf'],['offset', $constant_int_0]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end struct */


/* end module: struct */


/*
PYJS_DEPS: ['math', 'sys']
*/
