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
		var $constant_int_0 = new $p['int'](0);
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
			var $iter2_type,$iter2_iter,$iter2_nextval,bytes,number,$iter2_idx,$bool1,$pyjs__trackstack_size_1,b,$iter2_array;
			$pyjs.track={module:'struct',lineno:48};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=49;
			bytes = function(){
				var b,$iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$add2,$add1,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = $p['__getslice'](data, index, (typeof ($add1=index)==typeof ($add2=size) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				b = $iter1_nextval;
				$collcomp1['append']($p['ord'](b));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='struct';

	return $collcomp1;}();
			$pyjs.track.lineno=50;
			if ((($bool1=$p['op_eq'](le, 'little')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$pyjs.track.lineno=51;
				bytes['reverse']();
			}
			$pyjs.track.lineno=52;
			number = $constant_long_0;
			$pyjs.track.lineno=53;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = bytes;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				b = $iter2_nextval;
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
			var $pyjs__ret = $p['int'](number);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['unpack_int'].__name__ = 'unpack_int';

		$m['unpack_int'].__bind_type__ = 0;
		$m['unpack_int'].__args__ = [null,null,['data'],['index'],['size'],['le']];
		$pyjs.track.lineno=57;
		$m['unpack_signed_int'] = function(data, index, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
			var number,$pow3,$pow2,$pow1,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4,max,$bool2,$pow4,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$cmp1,$cmp2;
			$pyjs.track={module:'struct',lineno:57};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=57;
			$pyjs.track.lineno=58;
			number = $m['unpack_int'](data, index, size, le);
			$pyjs.track.lineno=59;
			max = (typeof ($pow1=$constant_int_2)==typeof ($pow2=(typeof ($mul1=size)==typeof ($mul2=$constant_int_8) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))) && typeof $pow1=='number'?
				Math.pow($pow1,$pow2):
				$p['op_pow']($pow1,$pow2));
			$pyjs.track.lineno=60;
			if ((($bool2=((($cmp1=number)===($cmp2=(typeof ($sub3=(typeof ($pow3=$constant_int_2)==typeof ($pow4=(typeof ($sub1=(typeof ($mul3=size)==typeof ($mul4=$constant_int_8) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2))) && typeof $pow3=='number'?
				Math.pow($pow3,$pow4):
				$p['op_pow']($pow3,$pow4)))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)))?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				$pyjs.track.lineno=61;
				number = $p['int']((typeof ($mul5=(typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)))==typeof ($mul6=(typeof ($sub5=max)==typeof ($sub6=number) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6))) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)));
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
			var $sub22,$sub23,$sub20,$sub21,$8,$sub24,$pyjs__trackstack_size_1,$sub19,sign,$div2,bias,$pow9,$iter4_type,$7,$iter4_iter,$pow7,$pow5,number,$5,revbytes,$mul9,prec,$pow8,$sub13,$sub9,$sub8,$pow10,$sub7,$mul8,$sub18,$pow6,mantissa,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$bool3,$bool6,$bool7,$bool4,$bool5,$mul7,$div3,$4,$div1,$2,$3,$div4,$1,b,e,$mul10,$iter4_nextval,bytes,$6,$iter4_idx,$add5,$add6,$add7,exp,$len1,$iter4_array,$add10,$add8,$add9;
			$pyjs.track={module:'struct',lineno:64};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=64;
			$pyjs.track.lineno=65;
			bytes = function(){
				var $iter3_idx,$iter3_nextval,$iter3_array,$collcomp2,$add3,b,$iter3_iter,$add4,$iter3_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter3_iter = $p['__getslice'](data, index, (typeof ($add3=index)==typeof ($add4=size) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				b = $iter3_nextval;
				$collcomp2['append']($p['ord'](b));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='struct';

	return $collcomp2;}();
			$pyjs.track.lineno=66;
			if ((($bool3=!$p['op_eq']((($len1=bytes) === null?$constant_int_0:
				(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
							$p['len']($len1))))), size)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			if ((($bool4=$p['op_eq']($p['max'](bytes), $constant_int_0)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$pyjs.track.lineno=69;
				$pyjs.track.lineno=69;
				var $pyjs__ret = 0.0;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=70;
			if ((($bool5=$p['op_eq'](le, 'big')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$pyjs.track.lineno=71;
				bytes['reverse']();
			}
			$pyjs.track.lineno=72;
			if ((($bool6=$p['op_eq'](size, $constant_int_4)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			mantissa = $p['long']($p['op_bitand2']((typeof ($1=bytes).__array != 'undefined'?
				((typeof $1.__array[$2=(typeof ($sub7=size)==typeof ($sub8=$constant_int_2) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8))]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__((typeof ($sub7=size)==typeof ($sub8=$constant_int_2) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8)))), (typeof ($sub11=(typeof ($pow5=$constant_int_2)==typeof ($pow6=(typeof ($sub9=$constant_int_15)==typeof ($sub10=exp) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				$p['op_sub']($sub9,$sub10))) && typeof $pow5=='number'?
				Math.pow($pow5,$pow6):
				$p['op_pow']($pow5,$pow6)))==typeof ($sub12=$constant_int_1) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				$p['op_sub']($sub11,$sub12))));
			$pyjs.track.lineno=83;
			revbytes = bytes;
			$pyjs.track.lineno=84;
			revbytes['reverse']();
			$pyjs.track.lineno=85;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter4_iter = $p['__getslice'](revbytes, $constant_int_3, null);
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				b = $iter4_nextval;
				$pyjs.track.lineno=86;
				mantissa = $p['op_bitor2']($p['op_bitshiftleft'](mantissa,$constant_int_8), b);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='struct';
			$pyjs.track.lineno=87;
			mantissa = (typeof ($add5=$constant_int_1)==typeof ($add6=(typeof ($div1=(typeof ($mul7=1.0)==typeof ($mul8=mantissa) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)))==typeof ($div2=(typeof ($pow7=$constant_int_2)==typeof ($pow8=prec) && typeof $pow7=='number'?
				Math.pow($pow7,$pow8):
				$p['op_pow']($pow7,$pow8))) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			$pyjs.track.lineno=88;
			mantissa = (typeof ($div3=mantissa)==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4));
			$pyjs.track.lineno=89;
			e = $p['op_bitshiftleft']($p['op_bitand2']((typeof ($3=bytes).__array != 'undefined'?
				((typeof $3.__array[$4=(typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__((typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)))), $constant_int_127),(typeof ($sub13=exp)==typeof ($sub14=$constant_int_7) && (typeof $sub13=='number'||typeof $sub13=='string')?
				$sub13-$sub14:
				$p['op_sub']($sub13,$sub14)));
			$pyjs.track.lineno=90;
			e = (typeof ($add7=e)==typeof ($add8=$p['op_bitand2']($p['op_bitshiftright']((typeof ($5=bytes).__array != 'undefined'?
				((typeof $5.__array[$6=(typeof ($sub15=size)==typeof ($sub16=$constant_int_2) && (typeof $sub15=='number'||typeof $sub15=='string')?
				$sub15-$sub16:
				$p['op_sub']($sub15,$sub16))]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__((typeof ($sub15=size)==typeof ($sub16=$constant_int_2) && (typeof $sub15=='number'||typeof $sub15=='string')?
				$sub15-$sub16:
				$p['op_sub']($sub15,$sub16)))),(typeof ($sub17=$constant_int_15)==typeof ($sub18=exp) && (typeof $sub17=='number'||typeof $sub17=='string')?
				$sub17-$sub18:
				$p['op_sub']($sub17,$sub18))), (typeof ($sub21=(typeof ($pow9=$constant_int_2)==typeof ($pow10=(typeof ($sub19=exp)==typeof ($sub20=$constant_int_7) && (typeof $sub19=='number'||typeof $sub19=='string')?
				$sub19-$sub20:
				$p['op_sub']($sub19,$sub20))) && typeof $pow9=='number'?
				Math.pow($pow9,$pow10):
				$p['op_pow']($pow9,$pow10)))==typeof ($sub22=$constant_int_1) && (typeof $sub21=='number'||typeof $sub21=='string')?
				$sub21-$sub22:
				$p['op_sub']($sub21,$sub22)))) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8));
			$pyjs.track.lineno=91;
			e = (typeof ($sub23=e)==typeof ($sub24=bias) && (typeof $sub23=='number'||typeof $sub23=='string')?
				$sub23-$sub24:
				$p['op_sub']($sub23,$sub24));
			$pyjs.track.lineno=92;
			e = (typeof ($add9=e)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10));
			$pyjs.track.lineno=93;
			sign = $p['op_bitand2']((typeof ($7=bytes).__array != 'undefined'?
				((typeof $7.__array[$8=(typeof ($usub3=$constant_int_1)=='number'?
				-$usub3:
				$p['op_usub']($usub3))]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__((typeof ($usub3=$constant_int_1)=='number'?
				-$usub3:
				$p['op_usub']($usub3)))), $constant_int_128);
			$pyjs.track.lineno=94;
			number = $m['math']['ldexp'](mantissa, e);
			$pyjs.track.lineno=95;
			if ((($bool7=sign) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
			var $pyjs__ret = $p['__getslice'](data, index, (typeof ($add11=index)==typeof ($add12=size) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12)));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['unpack_char'].__name__ = 'unpack_char';

		$m['unpack_char'].__bind_type__ = 0;
		$m['unpack_char'].__args__ = [null,null,['data'],['index'],['size'],['le']];
		$pyjs.track.lineno=101;
		$m['pack_int'] = function(number, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $iter5_nextval,$iter5_idx,$iter5_array,res,$pyjs__trackstack_size_1,i,$iter5_iter,$iter5_type,x,$bool8;
			$pyjs.track={module:'struct',lineno:101};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=101;
			$pyjs.track.lineno=102;
			x = number;
			$pyjs.track.lineno=103;
			res = $p['list']([]);
			$pyjs.track.lineno=104;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter5_iter = $p['range'](size);
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				$pyjs.track.lineno=105;
				res['append']($p['chr']($p['op_bitand2'](x, $constant_int_255)));
				$pyjs.track.lineno=106;
				x = $p['op_bitshiftright'](x,$constant_int_8);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='struct';
			$pyjs.track.lineno=107;
			if ((($bool8=$p['op_eq'](le, 'big')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				$pyjs.track.lineno=108;
				res['reverse']();
			}
			$pyjs.track.lineno=109;
			$pyjs.track.lineno=109;
			var $pyjs__ret = ''['join'](res);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['pack_int'].__name__ = 'pack_int';

		$m['pack_int'].__bind_type__ = 0;
		$m['pack_int'].__args__ = [null,null,['number'],['size'],['le']];
		$pyjs.track.lineno=111;
		$m['pack_signed_int'] = function(number, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $sub26,$sub27,$sub25,$bool10,$bool11,$sub28,$sub29,$pow14,$pow13,$pow12,$pow11,$bool12,$sub30,$or1,$or2,$cmp6,$cmp3,$bool9,$cmp5,$cmp4,$mul15,$mul14,$mul13,$mul12,$mul11,$mul16;
			$pyjs.track={module:'struct',lineno:111};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=111;
			$pyjs.track.lineno=112;
			if ((($bool10=!(($bool9=$p['isinstance'](number, $p['tuple']([$p['int'], $p['long']]))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
			if ((($bool12=((($bool11=$or1=((($cmp3=number)===($cmp4=(typeof ($sub27=(typeof ($pow11=$constant_int_2)==typeof ($pow12=(typeof ($sub25=(typeof ($mul11=$constant_int_8)==typeof ($mul12=size) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)))==typeof ($sub26=$constant_int_1) && (typeof $sub25=='number'||typeof $sub25=='string')?
				$sub25-$sub26:
				$p['op_sub']($sub25,$sub26))) && typeof $pow11=='number'?
				Math.pow($pow11,$pow12):
				$p['op_pow']($pow11,$pow12)))==typeof ($sub28=$constant_int_1) && (typeof $sub27=='number'||typeof $sub27=='string')?
				$sub27-$sub28:
				$p['op_sub']($sub27,$sub28)))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11.__nonzero__=='function'?
						$bool11.__nonzero__() :
						(typeof $bool11.__len__=='function'?
							($bool11.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($cmp5=number)===($cmp6=(typeof ($mul15=(typeof ($usub5=$constant_int_1)=='number'?
				-$usub5:
				$p['op_usub']($usub5)))==typeof ($mul16=(typeof ($pow13=$constant_int_2)==typeof ($pow14=(typeof ($sub29=(typeof ($mul13=$constant_int_8)==typeof ($mul14=size) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)))==typeof ($sub30=$constant_int_1) && (typeof $sub29=='number'||typeof $sub29=='string')?
				$sub29-$sub30:
				$p['op_sub']($sub29,$sub30))) && typeof $pow13=='number'?
				Math.pow($pow13,$pow14):
				$p['op_pow']($pow13,$pow14))) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)))?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				$pyjs.track.lineno=115;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = (typeof OverflowError == "undefined"?$m.OverflowError:OverflowError);
				var $pyjs__raise_expr2 = $p['sprintf']('Number:%i too large to convert', number);
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
			var $pyjs__ret = $m['pack_int'](number, size, le);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['pack_signed_int'].__name__ = 'pack_signed_int';

		$m['pack_signed_int'].__bind_type__ = 0;
		$m['pack_signed_int'].__args__ = [null,null,['number'],['size'],['le']];
		$pyjs.track.lineno=118;
		$m['pack_unsigned_int'] = function(number, size, le) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var $mul17,$sub31,$cmp7,$cmp9,$bool13,$bool14,$bool16,$cmp8,$bool15,$cmp10,$pow16,$pow15,$mul18,$sub32;
			$pyjs.track={module:'struct',lineno:118};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=118;
			$pyjs.track.lineno=119;
			if ((($bool14=!(($bool13=$p['isinstance'](number, $p['tuple']([$p['int'], $p['long']]))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
			if ((($bool15=((($cmp7=number)===($cmp8=$constant_int_0)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
			if ((($bool16=((($cmp9=number)===($cmp10=(typeof ($sub31=(typeof ($pow15=$constant_int_2)==typeof ($pow16=(typeof ($mul17=$constant_int_8)==typeof ($mul18=size) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18))) && typeof $pow15=='number'?
				Math.pow($pow15,$pow16):
				$p['op_pow']($pow15,$pow16)))==typeof ($sub32=$constant_int_1) && (typeof $sub31=='number'||typeof $sub31=='string')?
				$sub31-$sub32:
				$p['op_sub']($sub31,$sub32)))?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				$pyjs.track.lineno=124;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = (typeof OverflowError == "undefined"?$m.OverflowError:OverflowError);
				var $pyjs__raise_expr2 = $p['sprintf']('Number:%i too large to convert', number);
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
			var $pyjs__ret = $m['pack_int'](number, size, le);
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
			var $pyjs__ret = $p['str']($$char);
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
			var $bool18,$bool19,$pow20,$iter6_type,$add13,$bool17,$sub48,$sub40,bias,$sub47,$pow19,$pow18,$pow17,$sub41,$iter6_iter,$sub43,$sub44,$sub42,$sub46,$sub38,$sub37,$bool24,res,$sub50,prec,$sub45,$sub39,$bool21,$bool20,$bool23,$bool22,$mul24,$iter6_nextval,$mul22,$mul23,$mul20,$mul21,$sub33,$sub35,$sub34,$iter6_idx,$sub36,mantissa,$and1,$and2,$cmp15,$cmp14,$add16,$cmp16,$cmp11,$cmp13,$cmp12,sign,$add18,man,$add14,e,$pow21,$add15,i,$iter6_array,$mul19,$sub49,$add17,exp,$pyjs__trackstack_size_1,$pow22;
			$pyjs.track={module:'struct',lineno:134};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=134;
			$pyjs.track.lineno=136;
			if ((($bool17=((($cmp11=number)===($cmp12=$constant_int_0)?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				$pyjs.track.lineno=137;
				sign = $constant_int_1;
				$pyjs.track.lineno=138;
				number = (typeof ($mul19=number)==typeof ($mul20=(typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20));
			}
			else if ((($bool18=$p['op_eq'](number, 0.0)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				$pyjs.track.lineno=141;
				$pyjs.track.lineno=141;
				var $pyjs__ret = ''['ljust'](size, '\x00');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=143;
				sign = $constant_int_0;
			}
			$pyjs.track.lineno=144;
			if ((($bool19=$p['op_eq'](size, $constant_int_4)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
			var $tupleassign1 = $p['__ass_unpack']($m['math']['frexp'](number), 2, null);
			man = $tupleassign1[0];
			e = $tupleassign1[1];
			$pyjs.track.lineno=154;
			if ((($bool21=((($bool20=$and1=((($cmp13=0.5)===($cmp14=man)?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) < 1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
				false :
				(typeof $bool20=='object'?
					(typeof $bool20.__nonzero__=='function'?
						$bool20.__nonzero__() :
						(typeof $bool20.__len__=='function'?
							($bool20.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp15=man)===($cmp16=1.0)?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))) == -1):$and1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				$pyjs.track.lineno=155;
				man = (typeof ($mul21=man)==typeof ($mul22=$constant_int_2) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22));
				$pyjs.track.lineno=156;
				e = (typeof ($sub33=e)==typeof ($sub34=$constant_int_1) && (typeof $sub33=='number'||typeof $sub33=='string')?
					$sub33-$sub34:
					$p['op_sub']($sub33,$sub34));
			}
			$pyjs.track.lineno=157;
			if ((($bool22=$m['sane_float'](man, e)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				man = (typeof ($sub35=man)==typeof ($sub36=$constant_int_1) && (typeof $sub35=='number'||typeof $sub35=='string')?
					$sub35-$sub36:
					$p['op_sub']($sub35,$sub36));
				$pyjs.track.lineno=159;
				e = (typeof ($add13=e)==typeof ($add14=bias) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
				$pyjs.track.lineno=160;
				mantissa = $p['int']((typeof ($add15=(typeof ($mul23=(typeof ($pow17=$constant_int_2)==typeof ($pow18=prec) && typeof $pow17=='number'?
					Math.pow($pow17,$pow18):
					$p['op_pow']($pow17,$pow18)))==typeof ($mul24=man) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)))==typeof ($add16=0.5) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)));
				$pyjs.track.lineno=161;
				res = $p['list']([]);
				$pyjs.track.lineno=162;
				if ((($bool23=$p['op_bitshiftright'](mantissa,prec)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					$pyjs.track.lineno=163;
					mantissa = $constant_int_0;
					$pyjs.track.lineno=164;
					e = (typeof ($add17=e)==typeof ($add18=$constant_int_1) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18));
				}
				$pyjs.track.lineno=166;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = $p['range']((typeof ($sub37=size)==typeof ($sub38=$constant_int_2) && (typeof $sub37=='number'||typeof $sub37=='string')?
					$sub37-$sub38:
					$p['op_sub']($sub37,$sub38)));
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					i = $iter6_nextval;
					$pyjs.track.lineno=168;
					res['extend']($p['list']([$p['op_bitand2'](mantissa, $constant_int_255)]));
					$pyjs.track.lineno=169;
					mantissa = $p['op_bitshiftright'](mantissa,$constant_int_8);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='struct';
				$pyjs.track.lineno=171;
				res['extend']($p['list']([$p['op_bitor2']($p['op_bitand2'](mantissa, (typeof ($sub41=(typeof ($pow19=$constant_int_2)==typeof ($pow20=(typeof ($sub39=$constant_int_15)==typeof ($sub40=exp) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40))) && typeof $pow19=='number'?
					Math.pow($pow19,$pow20):
					$p['op_pow']($pow19,$pow20)))==typeof ($sub42=$constant_int_1) && (typeof $sub41=='number'||typeof $sub41=='string')?
					$sub41-$sub42:
					$p['op_sub']($sub41,$sub42))), $p['op_bitshiftleft']($p['op_bitand2'](e, (typeof ($sub45=(typeof ($pow21=$constant_int_2)==typeof ($pow22=(typeof ($sub43=exp)==typeof ($sub44=$constant_int_7) && (typeof $sub43=='number'||typeof $sub43=='string')?
					$sub43-$sub44:
					$p['op_sub']($sub43,$sub44))) && typeof $pow21=='number'?
					Math.pow($pow21,$pow22):
					$p['op_pow']($pow21,$pow22)))==typeof ($sub46=$constant_int_1) && (typeof $sub45=='number'||typeof $sub45=='string')?
					$sub45-$sub46:
					$p['op_sub']($sub45,$sub46))),(typeof ($sub47=$constant_int_15)==typeof ($sub48=exp) && (typeof $sub47=='number'||typeof $sub47=='string')?
					$sub47-$sub48:
					$p['op_sub']($sub47,$sub48))))]));
				$pyjs.track.lineno=173;
				res['extend']($p['list']([$p['op_bitor2']($p['op_bitshiftleft'](sign,$constant_int_7), $p['op_bitshiftright'](e,(typeof ($sub49=exp)==typeof ($sub50=$constant_int_7) && (typeof $sub49=='number'||typeof $sub49=='string')?
					$sub49-$sub50:
					$p['op_sub']($sub49,$sub50))))]));
				$pyjs.track.lineno=174;
				if ((($bool24=$p['op_eq'](le, 'big')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					$pyjs.track.lineno=175;
					res['reverse']();
				}
				$pyjs.track.lineno=176;
				$pyjs.track.lineno=176;
				var $pyjs__ret = ''['join'](function(){
					var $iter7_nextval,$iter7_iter,$iter7_array,$collcomp3,$iter7_idx,x,$iter7_type,$pyjs__trackstack_size_1;
	$collcomp3 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter7_iter = res;
				if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter.__iter__();
					$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					x = $iter7_nextval;
					$collcomp3['append']($p['chr'](x));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='struct';

	return $collcomp3;}());
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
		$m['big_endian_format'] = $p['dict']([['x', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', null], ['unpack', null]])], ['b', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['B', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['c', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', $m['pack_char']], ['unpack', $m['unpack_char']]])], ['s', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', null], ['unpack', null]])], ['p', $p['dict']([['size', $constant_int_1], ['alignment', $constant_int_0], ['pack', null], ['unpack', null]])], ['h', $p['dict']([['size', $constant_int_2], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['H', $p['dict']([['size', $constant_int_2], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['i', $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['I', $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['l', $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['L', $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['q', $p['dict']([['size', $constant_int_8], ['alignment', $constant_int_0], ['pack', $m['pack_signed_int']], ['unpack', $m['unpack_signed_int']]])], ['Q', $p['dict']([['size', $constant_int_8], ['alignment', $constant_int_0], ['pack', $m['pack_unsigned_int']], ['unpack', $m['unpack_int']]])], ['f', $p['dict']([['size', $constant_int_4], ['alignment', $constant_int_0], ['pack', $m['pack_float']], ['unpack', $m['unpack_float']]])], ['d', $p['dict']([['size', $constant_int_8], ['alignment', $constant_int_0], ['pack', $m['pack_float']], ['unpack', $m['unpack_float']]])]]);
		$pyjs.track.lineno=197;
		$m['$$default'] = $m['big_endian_format'];
		$pyjs.track.lineno=198;
		$m['formatmode'] = $p['dict']([['<', $p['tuple']([$m['$$default'], 'little'])], ['>', $p['tuple']([$m['$$default'], 'big'])], ['!', $p['tuple']([$m['$$default'], 'big'])], ['=', $p['tuple']([$m['$$default'], $p['getattr']($m['sys'], 'byteorder')])], ['@', $p['tuple']([$m['$$default'], $p['getattr']($m['sys'], 'byteorder')])]]);
		$pyjs.track.lineno=205;
		$m['getmode'] = function(fmt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $14,index,$10,$11,$12,$13,$pyjs_try_err,endianness,$9,formatdef;
			$pyjs.track={module:'struct',lineno:205};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=205;
			$pyjs.track.lineno=206;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=207;
				var $tupleassign2 = $p['__ass_unpack']((typeof ($11=$m['formatmode']).__array != 'undefined'?
					((typeof $11.__array[$12=(typeof ($9=fmt).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_0))]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__((typeof ($9=fmt).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_0]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_0)))), 2, null);
				formatdef = $tupleassign2[0];
				endianness = $tupleassign2[1];
				$pyjs.track.lineno=208;
				index = $constant_int_1;
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
					var $tupleassign3 = $p['__ass_unpack']((typeof ($13=$m['formatmode']).__array != 'undefined'?
						((typeof $13.__array[$14='@']) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__('@')), 2, null);
					formatdef = $tupleassign3[0];
					endianness = $tupleassign3[1];
					$pyjs.track.lineno=211;
					index = $constant_int_0;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.track.lineno=212;
			$pyjs.track.lineno=212;
			var $pyjs__ret = $p['tuple']([formatdef, endianness, index]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getmode'].__name__ = 'getmode';

		$m['getmode'].__bind_type__ = 0;
		$m['getmode'].__args__ = [null,null,['fmt']];
		$pyjs.track.lineno=213;
		$m['getNum'] = function(fmt, i) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $cmp20,num,cur,$add21,$add20,$add22,$cmp18,$bool25,$bool27,$bool26,$mul26,$mul25,$and3,$and4,$cmp17,$cmp19,$add19,$15,$16,$17,$18;
			$pyjs.track={module:'struct',lineno:213};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=213;
			$pyjs.track.lineno=214;
			num = null;
			$pyjs.track.lineno=215;
			cur = (typeof ($15=fmt).__array != 'undefined'?
				((typeof $15.__array[$16=i]) != 'undefined'?$15.__array[$16]:
					$15.__getitem__($16)):
					$15.__getitem__(i));
			$pyjs.track.lineno=216;
			while ((($bool26=((($bool25=$and3=((($cmp17='0')===($cmp18=cur)?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) < 1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25.__nonzero__=='function'?
						$bool25.__nonzero__() :
						(typeof $bool25.__len__=='function'?
							($bool25.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp19=cur)===($cmp20='9')?0:
				(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
					($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
					$p['cmp']($cmp19, $cmp20))) < 1):$and3)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				$pyjs.track.lineno=217;
				if ((($bool27=$p['op_eq'](num, null)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					$pyjs.track.lineno=218;
					num = $p['int'](cur);
				}
				else {
					$pyjs.track.lineno=220;
					num = (typeof ($add19=(typeof ($mul25=$constant_int_10)==typeof ($mul26=num) && typeof $mul25=='number'?
						$mul25*$mul26:
						$p['op_mul']($mul25,$mul26)))==typeof ($add20=$p['int'](cur)) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20));
				}
				$pyjs.track.lineno=221;
				i = (typeof ($add21=i)==typeof ($add22=$constant_int_1) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22));
				$pyjs.track.lineno=222;
				cur = (typeof ($17=fmt).__array != 'undefined'?
					((typeof $17.__array[$18=i]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__(i));
			}
			$pyjs.track.lineno=223;
			$pyjs.track.lineno=223;
			var $pyjs__ret = $p['tuple']([num, i]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getNum'].__name__ = 'getNum';

		$m['getNum'].__bind_type__ = 0;
		$m['getNum'].__args__ = [null,null,['fmt'],['i']];
		$pyjs.track.lineno=225;
		$m['calcsize'] = function(fmt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add25,$add24,$cmp21,$cmp22,num,result,$add26,$add23,$add28,cur,$21,$20,$22,$25,$24,$add27,$26,$pyjs_try_err,$mul28,$mul27,$bool29,$bool28,endianness,format,formatdef,i,$19,$len2,$23;
			$pyjs.track={module:'struct',lineno:225};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=225;
			$pyjs.track.lineno=230;
			var $tupleassign4 = $p['__ass_unpack']($m['getmode'](fmt), 3, null);
			formatdef = $tupleassign4[0];
			endianness = $tupleassign4[1];
			i = $tupleassign4[2];
			$pyjs.track.lineno=231;
			num = $constant_int_0;
			$pyjs.track.lineno=232;
			result = $constant_int_0;
			$pyjs.track.lineno=233;
			while ((($bool28=((($cmp21=i)===($cmp22=(($len2=fmt) === null?$constant_int_0:
				(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
							$p['len']($len2))))))?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				$pyjs.track.lineno=234;
				var $tupleassign5 = $p['__ass_unpack']($m['getNum'](fmt, i), 2, null);
				num = $tupleassign5[0];
				i = $tupleassign5[1];
				$pyjs.track.lineno=235;
				cur = (typeof ($19=fmt).__array != 'undefined'?
					((typeof $19.__array[$20=i]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__(i));
				$pyjs.track.lineno=236;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=237;
					format = (typeof ($21=formatdef).__array != 'undefined'?
						((typeof $21.__array[$22=cur]) != 'undefined'?$21.__array[$22]:
							$21.__getitem__($22)):
							$21.__getitem__(cur));
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
						var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
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
				if ((($bool29=!$p['op_eq'](num, null)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					$pyjs.track.lineno=241;
					result = (typeof ($add23=result)==typeof ($add24=(typeof ($mul27=num)==typeof ($mul28=(typeof ($23=format).__array != 'undefined'?
						((typeof $23.__array[$24='size']) != 'undefined'?$23.__array[$24]:
							$23.__getitem__($24)):
							$23.__getitem__('size'))) && typeof $mul27=='number'?
						$mul27*$mul28:
						$p['op_mul']($mul27,$mul28))) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24));
				}
				else {
					$pyjs.track.lineno=243;
					result = (typeof ($add25=result)==typeof ($add26=(typeof ($25=format).__array != 'undefined'?
						((typeof $25.__array[$26='size']) != 'undefined'?$25.__array[$26]:
							$25.__getitem__($26)):
							$25.__getitem__('size'))) && (typeof $add25=='number'||typeof $add25=='string')?
						$add25+$add26:
						$p['op_add']($add25,$add26));
				}
				$pyjs.track.lineno=244;
				num = $constant_int_0;
				$pyjs.track.lineno=245;
				i = (typeof ($add27=i)==typeof ($add28=$constant_int_1) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28));
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

			var $cmp23,$cmp24,$cmp25,$cmp26,$cmp27,$cmp28,$cmp29,cur,$49,$48,endianness,$43,$42,$41,$40,$47,$46,$45,$44,format,$cmp30,n_args,$pyjs__trackstack_size_1,$50,$51,$52,$iter8_iter,num,result,$bool40,$iter8_type,formatdef,$iter8_array,$bool32,$bool33,$bool30,$add29,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,$sub64,$sub62,$sub63,$sub60,$sub61,i,$add40,$$var,$iter8_idx,padding,$iter8_nextval,$add38,$add39,$bool31,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$len6,$len7,$len4,$len5,$len3,$len8,$len9,$29,$28,$27,$pyjs_try_err,$sub57,$sub56,$sub55,$sub54,$sub53,$sub52,$sub51,$sub59,$sub58,$38,$39,$36,$37,$34,$35,$32,$33,$30,$31,num_s;
			$pyjs.track={module:'struct',lineno:248};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=248;
			$pyjs.track.lineno=252;
			var $tupleassign6 = $p['__ass_unpack']($m['getmode'](fmt), 3, null);
			formatdef = $tupleassign6[0];
			endianness = $tupleassign6[1];
			i = $tupleassign6[2];
			$pyjs.track.lineno=253;
			args = $p['list'](args);
			$pyjs.track.lineno=254;
			n_args = (($len3=args) === null?$constant_int_0:
				(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
							$p['len']($len3)))));
			$pyjs.track.lineno=255;
			result = $p['list']([]);
			$pyjs.track.lineno=256;
			while ((($bool30=((($cmp23=i)===($cmp24=(($len4=fmt) === null?$constant_int_0:
				(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
							$p['len']($len4))))))?0:
				(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
					($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
					$p['cmp']($cmp23, $cmp24))) == -1)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				$pyjs.track.lineno=257;
				var $tupleassign7 = $p['__ass_unpack']($m['getNum'](fmt, i), 2, null);
				num = $tupleassign7[0];
				i = $tupleassign7[1];
				$pyjs.track.lineno=258;
				cur = (typeof ($27=fmt).__array != 'undefined'?
					((typeof $27.__array[$28=i]) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__(i));
				$pyjs.track.lineno=259;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=260;
					format = (typeof ($29=formatdef).__array != 'undefined'?
						((typeof $29.__array[$30=cur]) != 'undefined'?$29.__array[$30]:
							$29.__getitem__($30)):
							$29.__getitem__(cur));
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
						var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
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
				if ((($bool31=$p['op_eq'](num, null)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				if ((($bool32=$p['op_eq'](cur, 'x')) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					$pyjs.track.lineno=271;
					result['extend']($p['list']([''['ljust'](num, '\x00')]));
				}
				else if ((($bool33=$p['op_eq'](cur, 's')) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
					$pyjs.track.lineno=273;
					if ((($bool34=$p['isinstance']((typeof ($31=args).__array != 'undefined'?
						((typeof $31.__array[$32=$constant_int_0]) != 'undefined'?$31.__array[$32]:
							$31.__getitem__($32)):
							$31.__getitem__($constant_int_0)), $p['str'])) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
						padding = (typeof ($sub51=num)==typeof ($sub52=(($len5=(typeof ($33=args).__array != 'undefined'?
							((typeof $33.__array[$34=$constant_int_0]) != 'undefined'?$33.__array[$34]:
								$33.__getitem__($34)):
								$33.__getitem__($constant_int_0))) === null?$constant_int_0:
							(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
								(typeof $len5.__len__ == 'function'?$len5.__len__():
									(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
										$p['len']($len5)))))) && (typeof $sub51=='number'||typeof $sub51=='string')?
							$sub51-$sub52:
							$p['op_sub']($sub51,$sub52));
						$pyjs.track.lineno=276;
						result['extend']($p['list']([(typeof ($add29=$p['__getslice']((typeof ($35=args).__array != 'undefined'?
							((typeof $35.__array[$36=$constant_int_0]) != 'undefined'?$35.__array[$36]:
								$35.__getitem__($36)):
								$35.__getitem__($constant_int_0)), 0, num))==typeof ($add30=''['ljust'](padding, '\x00')) && (typeof $add29=='number'||typeof $add29=='string')?
							$add29+$add30:
							$p['op_add']($add29,$add30))]));
						$pyjs.track.lineno=277;
						args['pop']($constant_int_0);
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
				else if ((($bool35=$p['op_eq'](cur, 'p')) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
					$pyjs.track.lineno=281;
					if ((($bool36=$p['isinstance']((typeof ($37=args).__array != 'undefined'?
						((typeof $37.__array[$38=$constant_int_0]) != 'undefined'?$37.__array[$38]:
							$37.__getitem__($38)):
							$37.__getitem__($constant_int_0)), $p['str'])) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
						$pyjs.track.lineno=282;
						padding = (typeof ($sub55=(typeof ($sub53=num)==typeof ($sub54=(($len6=(typeof ($39=args).__array != 'undefined'?
							((typeof $39.__array[$40=$constant_int_0]) != 'undefined'?$39.__array[$40]:
								$39.__getitem__($40)):
								$39.__getitem__($constant_int_0))) === null?$constant_int_0:
							(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
								(typeof $len6.__len__ == 'function'?$len6.__len__():
									(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
										$p['len']($len6)))))) && (typeof $sub53=='number'||typeof $sub53=='string')?
							$sub53-$sub54:
							$p['op_sub']($sub53,$sub54)))==typeof ($sub56=$constant_int_1) && (typeof $sub55=='number'||typeof $sub55=='string')?
							$sub55-$sub56:
							$p['op_sub']($sub55,$sub56));
						$pyjs.track.lineno=284;
						if ((($bool37=((($cmp25=padding)===($cmp26=$constant_int_0)?0:
							(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
								($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
								$p['cmp']($cmp25, $cmp26))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
							$pyjs.track.lineno=286;
							result['extend']($p['list']([(typeof ($add33=(typeof ($add31=$p['chr']((($len7=(typeof ($41=args).__array != 'undefined'?
								((typeof $41.__array[$42=$constant_int_0]) != 'undefined'?$41.__array[$42]:
									$41.__getitem__($42)):
									$41.__getitem__($constant_int_0))) === null?$constant_int_0:
								(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
									(typeof $len7.__len__ == 'function'?$len7.__len__():
										(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
											$p['len']($len7)))))))==typeof ($add32=$p['__getslice']((typeof ($43=args).__array != 'undefined'?
								((typeof $43.__array[$44=$constant_int_0]) != 'undefined'?$43.__array[$44]:
									$43.__getitem__($44)):
									$43.__getitem__($constant_int_0)), 0, (typeof ($sub57=num)==typeof ($sub58=$constant_int_1) && (typeof $sub57=='number'||typeof $sub57=='string')?
								$sub57-$sub58:
								$p['op_sub']($sub57,$sub58)))) && (typeof $add31=='number'||typeof $add31=='string')?
								$add31+$add32:
								$p['op_add']($add31,$add32)))==typeof ($add34=''['ljust'](padding, '\x00')) && (typeof $add33=='number'||typeof $add33=='string')?
								$add33+$add34:
								$p['op_add']($add33,$add34))]));
						}
						else {
							$pyjs.track.lineno=288;
							if ((($bool38=((($cmp27=num)===($cmp28=$constant_int_255)?0:
								(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
									($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
									$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
								$pyjs.track.lineno=290;
								result['extend']($p['list']([(typeof ($add35=$p['chr']((typeof ($sub59=num)==typeof ($sub60=$constant_int_1) && (typeof $sub59=='number'||typeof $sub59=='string')?
									$sub59-$sub60:
									$p['op_sub']($sub59,$sub60))))==typeof ($add36=$p['__getslice']((typeof ($45=args).__array != 'undefined'?
									((typeof $45.__array[$46=$constant_int_0]) != 'undefined'?$45.__array[$46]:
										$45.__getitem__($46)):
										$45.__getitem__($constant_int_0)), 0, (typeof ($sub61=num)==typeof ($sub62=$constant_int_1) && (typeof $sub61=='number'||typeof $sub61=='string')?
									$sub61-$sub62:
									$p['op_sub']($sub61,$sub62)))) && (typeof $add35=='number'||typeof $add35=='string')?
									$add35+$add36:
									$p['op_add']($add35,$add36))]));
							}
							else {
								$pyjs.track.lineno=293;
								result['extend']($p['list']([(typeof ($add37=$p['chr']($constant_int_255))==typeof ($add38=$p['__getslice']((typeof ($47=args).__array != 'undefined'?
									((typeof $47.__array[$48=$constant_int_0]) != 'undefined'?$47.__array[$48]:
										$47.__getitem__($48)):
										$47.__getitem__($constant_int_0)), 0, (typeof ($sub63=num)==typeof ($sub64=$constant_int_1) && (typeof $sub63=='number'||typeof $sub63=='string')?
									$sub63-$sub64:
									$p['op_sub']($sub63,$sub64)))) && (typeof $add37=='number'||typeof $add37=='string')?
									$add37+$add38:
									$p['op_add']($add37,$add38))]));
							}
						}
						$pyjs.track.lineno=294;
						args['pop']($constant_int_0);
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
					if ((($bool39=((($cmp29=(($len8=args) === null?$constant_int_0:
						(typeof $len8.__array != 'undefined' ? new $p['int']($len8.__array.length):
							(typeof $len8.__len__ == 'function'?$len8.__len__():
								(typeof $len8.length != 'undefined'? new $p['int']($len8.length):
									$p['len']($len8))))))===($cmp30=num)?0:
						(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
							($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
							$p['cmp']($cmp29, $cmp30))) == -1)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
					$iter8_iter = $p['__getslice'](args, 0, num);
					if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter.__iter__();
						$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						$$var = $iter8_nextval;
						$pyjs.track.lineno=303;
						result['extend']($p['list']([(typeof ($49=format).__array != 'undefined'?
							((typeof $49.__array[$50='pack']) != 'undefined'?$49.__array[$50]:
								$49.__getitem__($50)):
								$49.__getitem__('pack'))($$var, (typeof ($51=format).__array != 'undefined'?
							((typeof $51.__array[$52='size']) != 'undefined'?$51.__array[$52]:
								$51.__getitem__($52)):
								$51.__getitem__('size')), endianness)]));
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
				i = (typeof ($add39=i)==typeof ($add40=$constant_int_1) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40));
			}
			$pyjs.track.lineno=307;
			if ((($bool40=!$p['op_eq']((($len9=args) === null?$constant_int_0:
				(typeof $len9.__array != 'undefined' ? new $p['int']($len9.__array.length):
					(typeof $len9.__len__ == 'function'?$len9.__len__():
						(typeof $len9.length != 'undefined'? new $p['int']($len9.length):
							$p['len']($len9))))), $constant_int_0)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
			var $pyjs__ret = ''['join'](result);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['pack'].__name__ = 'pack';

		$m['pack'].__bind_type__ = 0;
		$m['pack'].__args__ = ['args',null,['fmt']];
		$pyjs.track.lineno=311;
		$m['unpack'] = function(fmt, data) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $add51,$iter9_iter,$iter9_idx,num,result,$sub66,$sub65,$add58,$iter9_type,$iter9_array,cur,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$pyjs_try_err,endianness,$iter9_nextval,$64,$61,$add50,$63,$62,$bool47,$bool46,$bool45,$bool44,$bool43,$bool42,$bool41,format,$cmp33,$bool48,$60,$cmp34,$cmp32,$cmp31,formatdef,$len10,$len11,$add52,$add53,$add54,$add55,$add56,$add57,i,j,n,$58,$59,length,$pyjs__trackstack_size_1,$add45,$53,$54,$55,$56,$57;
			$pyjs.track={module:'struct',lineno:311};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='struct';
			$pyjs.track.lineno=311;
			$pyjs.track.lineno=316;
			var $tupleassign8 = $p['__ass_unpack']($m['getmode'](fmt), 3, null);
			formatdef = $tupleassign8[0];
			endianness = $tupleassign8[1];
			i = $tupleassign8[2];
			$pyjs.track.lineno=317;
			j = $constant_int_0;
			$pyjs.track.lineno=318;
			num = $constant_int_0;
			$pyjs.track.lineno=319;
			result = $p['list']([]);
			$pyjs.track.lineno=320;
			length = $m['calcsize'](fmt);
			$pyjs.track.lineno=321;
			if ((($bool41=!$p['op_eq'](length, (($len10=data) === null?$constant_int_0:
				(typeof $len10.__array != 'undefined' ? new $p['int']($len10.__array.length):
					(typeof $len10.__len__ == 'function'?$len10.__len__():
						(typeof $len10.length != 'undefined'? new $p['int']($len10.length):
							$p['len']($len10))))))) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
			while ((($bool42=((($cmp31=i)===($cmp32=(($len11=fmt) === null?$constant_int_0:
				(typeof $len11.__array != 'undefined' ? new $p['int']($len11.__array.length):
					(typeof $len11.__len__ == 'function'?$len11.__len__():
						(typeof $len11.length != 'undefined'? new $p['int']($len11.length):
							$p['len']($len11))))))?0:
				(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
					($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
					$p['cmp']($cmp31, $cmp32))) == -1)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
				$pyjs.track.lineno=324;
				var $tupleassign9 = $p['__ass_unpack']($m['getNum'](fmt, i), 2, null);
				num = $tupleassign9[0];
				i = $tupleassign9[1];
				$pyjs.track.lineno=325;
				cur = (typeof ($53=fmt).__array != 'undefined'?
					((typeof $53.__array[$54=i]) != 'undefined'?$53.__array[$54]:
						$53.__getitem__($54)):
						$53.__getitem__(i));
				$pyjs.track.lineno=326;
				i = (typeof ($add41=i)==typeof ($add42=$constant_int_1) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42));
				$pyjs.track.lineno=327;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=328;
					format = (typeof ($55=formatdef).__array != 'undefined'?
						((typeof $55.__array[$56=cur]) != 'undefined'?$55.__array[$56]:
							$55.__getitem__($56)):
							$55.__getitem__(cur));
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
						var $pyjs__raise_expr2 = $p['sprintf']('%s is not a valid format', cur);
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
				if ((($bool44=!(($bool43=num) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43.__nonzero__=='function'?
							$bool43.__nonzero__() :
							(typeof $bool43.__len__=='function'?
								($bool43.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
					$pyjs.track.lineno=333;
					num = $constant_int_1;
				}
				$pyjs.track.lineno=335;
				if ((($bool45=$p['op_eq'](cur, 'x')) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
					$pyjs.track.lineno=336;
					j = (typeof ($add43=j)==typeof ($add44=num) && (typeof $add43=='number'||typeof $add43=='string')?
						$add43+$add44:
						$p['op_add']($add43,$add44));
				}
				else if ((($bool46=$p['op_eq'](cur, 's')) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
					$pyjs.track.lineno=338;
					result['append']($p['__getslice'](data, j, (typeof ($add45=j)==typeof ($add46=num) && (typeof $add45=='number'||typeof $add45=='string')?
						$add45+$add46:
						$p['op_add']($add45,$add46))));
					$pyjs.track.lineno=339;
					j = (typeof ($add47=j)==typeof ($add48=num) && (typeof $add47=='number'||typeof $add47=='string')?
						$add47+$add48:
						$p['op_add']($add47,$add48));
				}
				else if ((($bool47=$p['op_eq'](cur, 'p')) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					$pyjs.track.lineno=341;
					n = $p['ord']((typeof ($57=data).__array != 'undefined'?
						((typeof $57.__array[$58=j]) != 'undefined'?$57.__array[$58]:
							$57.__getitem__($58)):
							$57.__getitem__(j)));
					$pyjs.track.lineno=342;
					if ((($bool48=((((($cmp33=n)===($cmp34=num)?0:
						(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
							($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
							$p['cmp']($cmp33, $cmp34))))|1) == 1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
						$pyjs.track.lineno=343;
						n = (typeof ($sub65=num)==typeof ($sub66=$constant_int_1) && (typeof $sub65=='number'||typeof $sub65=='string')?
							$sub65-$sub66:
							$p['op_sub']($sub65,$sub66));
					}
					$pyjs.track.lineno=344;
					result['append']($p['__getslice'](data, (typeof ($add49=j)==typeof ($add50=$constant_int_1) && (typeof $add49=='number'||typeof $add49=='string')?
						$add49+$add50:
						$p['op_add']($add49,$add50)), (typeof ($add53=(typeof ($add51=j)==typeof ($add52=n) && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$p['op_add']($add51,$add52)))==typeof ($add54=$constant_int_1) && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54))));
					$pyjs.track.lineno=345;
					j = (typeof ($add55=j)==typeof ($add56=num) && (typeof $add55=='number'||typeof $add55=='string')?
						$add55+$add56:
						$p['op_add']($add55,$add56));
				}
				else {
					$pyjs.track.lineno=347;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter9_iter = $p['range'](num);
					if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
						$iter9_type = 0;
					} else {
						$iter9_iter = $iter9_iter.__iter__();
						$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter9_idx = 0;
					while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
						n = $iter9_nextval;
						$pyjs.track.lineno=349;
						result['extend']($p['list']([(typeof ($59=format).__array != 'undefined'?
							((typeof $59.__array[$60='unpack']) != 'undefined'?$59.__array[$60]:
								$59.__getitem__($60)):
								$59.__getitem__('unpack'))(data, j, (typeof ($61=format).__array != 'undefined'?
							((typeof $61.__array[$62='size']) != 'undefined'?$61.__array[$62]:
								$61.__getitem__($62)):
								$61.__getitem__('size')), endianness)]));
						$pyjs.track.lineno=350;
						j = (typeof ($add57=j)==typeof ($add58=(typeof ($63=format).__array != 'undefined'?
							((typeof $63.__array[$64='size']) != 'undefined'?$63.__array[$64]:
								$63.__getitem__($64)):
								$63.__getitem__('size'))) && (typeof $add57=='number'||typeof $add57=='string')?
							$add57+$add58:
							$p['op_add']($add57,$add58));
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
			var $pyjs__ret = $p['tuple'](result);
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
			throw ($p['NotImplementedError']('pack_into'));
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
			throw ($p['NotImplementedError']('unpack_from'));
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
