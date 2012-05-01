/* start module: codecs */
$pyjs.loaded_modules['codecs'] = function (__mod_name__) {
	if($pyjs.loaded_modules['codecs'].__was_initialized__) return $pyjs.loaded_modules['codecs'];
	var $m = $pyjs.loaded_modules["codecs"];
	$m.__repr__ = function() { return "<module: codecs>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'codecs';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'codecs.py, line 1:\n    """ codecs -- Python Codec Registry, API and helpers.';
		$m.__track_lines__[10] = 'codecs.py, line 10:\n    import __builtin__, sys';
		$m.__track_lines__[14] = 'codecs.py, line 14:\n    __all__ = ["register", "lookup", "open", "EncodedFile", "BOM", "BOM_BE",';
		$m.__track_lines__[31] = "codecs.py, line 31:\n    BOM_UTF8 = '\\xef\\xbb\\xbf'";
		$m.__track_lines__[34] = "codecs.py, line 34:\n    BOM_LE = BOM_UTF16_LE = '\\xff\\xfe'";
		$m.__track_lines__[37] = "codecs.py, line 37:\n    BOM_BE = BOM_UTF16_BE = '\\xfe\\xff'";
		$m.__track_lines__[40] = "codecs.py, line 40:\n    BOM_UTF32_LE = '\\xff\\xfe\\x00\\x00'";
		$m.__track_lines__[43] = "codecs.py, line 43:\n    BOM_UTF32_BE = '\\x00\\x00\\xfe\\xff'";
		$m.__track_lines__[45] = "codecs.py, line 45:\n    if sys.byteorder == 'little':";
		$m.__track_lines__[48] = 'codecs.py, line 48:\n    BOM = BOM_UTF16 = BOM_UTF16_LE';
		$m.__track_lines__[51] = 'codecs.py, line 51:\n    BOM_UTF32 = BOM_UTF32_LE';
		$m.__track_lines__[56] = 'codecs.py, line 56:\n    BOM = BOM_UTF16 = BOM_UTF16_BE';
		$m.__track_lines__[59] = 'codecs.py, line 59:\n    BOM_UTF32 = BOM_UTF32_BE';
		$m.__track_lines__[62] = 'codecs.py, line 62:\n    BOM32_LE = BOM_UTF16_LE';
		$m.__track_lines__[63] = 'codecs.py, line 63:\n    BOM32_BE = BOM_UTF16_BE';
		$m.__track_lines__[64] = 'codecs.py, line 64:\n    BOM64_LE = BOM_UTF32_LE';
		$m.__track_lines__[65] = 'codecs.py, line 65:\n    BOM64_BE = BOM_UTF32_BE';
		$m.__track_lines__[70] = 'codecs.py, line 70:\n    class CodecInfo(tuple):';
		$m.__track_lines__[72] = 'codecs.py, line 72:\n    def __new__(cls, encode, decode, streamreader=None, streamwriter=None,';
		$m.__track_lines__[74] = 'codecs.py, line 74:\n    self = tuple.__new__(cls, (encode, decode, streamreader, streamwriter))';
		$m.__track_lines__[75] = 'codecs.py, line 75:\n    self.name = name';
		$m.__track_lines__[76] = 'codecs.py, line 76:\n    self.encode = encode';
		$m.__track_lines__[77] = 'codecs.py, line 77:\n    self.decode = decode';
		$m.__track_lines__[78] = 'codecs.py, line 78:\n    self.incrementalencoder = incrementalencoder';
		$m.__track_lines__[79] = 'codecs.py, line 79:\n    self.incrementaldecoder = incrementaldecoder';
		$m.__track_lines__[80] = 'codecs.py, line 80:\n    self.streamwriter = streamwriter';
		$m.__track_lines__[81] = 'codecs.py, line 81:\n    self.streamreader = streamreader';
		$m.__track_lines__[82] = 'codecs.py, line 82:\n    return self';
		$m.__track_lines__[84] = 'codecs.py, line 84:\n    def __repr__(self):';
		$m.__track_lines__[85] = 'codecs.py, line 85:\n    return "<%s.%s object for encoding %s at 0x%x>" % (self.__class__.__module__, self.__class__.__name__, self.name, id(self))';
		$m.__track_lines__[87] = 'codecs.py, line 87:\n    class Codec:';
		$m.__track_lines__[109] = "codecs.py, line 109:\n    def encode(self, input, errors='strict'):";
		$m.__track_lines__[126] = 'codecs.py, line 126:\n    raise NotImplementedError';
		$m.__track_lines__[128] = "codecs.py, line 128:\n    def decode(self, input, errors='strict'):";
		$m.__track_lines__[149] = 'codecs.py, line 149:\n    raise NotImplementedError';
		$m.__track_lines__[151] = 'codecs.py, line 151:\n    class IncrementalEncoder(object):';
		$m.__track_lines__[157] = "codecs.py, line 157:\n    def __init__(self, errors='strict'):";
		$m.__track_lines__[165] = 'codecs.py, line 165:\n    self.errors = errors';
		$m.__track_lines__[166] = 'codecs.py, line 166:\n    self.buffer = ""';
		$m.__track_lines__[168] = 'codecs.py, line 168:\n    def encode(self, input, final=False):';
		$m.__track_lines__[172] = 'codecs.py, line 172:\n    raise NotImplementedError';
		$m.__track_lines__[174] = 'codecs.py, line 174:\n    def reset(self):';
		$m.__track_lines__[179] = 'codecs.py, line 179:\n    def getstate(self):';
		$m.__track_lines__[183] = 'codecs.py, line 183:\n    return 0';
		$m.__track_lines__[185] = 'codecs.py, line 185:\n    def setstate(self, state):';
		$m.__track_lines__[191] = 'codecs.py, line 191:\n    class BufferedIncrementalEncoder(IncrementalEncoder):';
		$m.__track_lines__[197] = "codecs.py, line 197:\n    def __init__(self, errors='strict'):";
		$m.__track_lines__[198] = 'codecs.py, line 198:\n    IncrementalEncoder.__init__(self, errors)';
		$m.__track_lines__[199] = 'codecs.py, line 199:\n    self.buffer = "" # unencoded input that is kept between calls to encode()';
		$m.__track_lines__[201] = 'codecs.py, line 201:\n    def _buffer_encode(self, input, errors, final):';
		$m.__track_lines__[204] = 'codecs.py, line 204:\n    raise NotImplementedError';
		$m.__track_lines__[206] = 'codecs.py, line 206:\n    def encode(self, input, final=False):';
		$m.__track_lines__[208] = 'codecs.py, line 208:\n    data = self.buffer + input';
		$m.__track_lines__[209] = 'codecs.py, line 209:\n    (result, consumed) = self._buffer_encode(data, self.errors, final)';
		$m.__track_lines__[211] = 'codecs.py, line 211:\n    self.buffer = data[consumed:]';
		$m.__track_lines__[212] = 'codecs.py, line 212:\n    return result';
		$m.__track_lines__[214] = 'codecs.py, line 214:\n    def reset(self):';
		$m.__track_lines__[215] = 'codecs.py, line 215:\n    IncrementalEncoder.reset(self)';
		$m.__track_lines__[216] = 'codecs.py, line 216:\n    self.buffer = ""';
		$m.__track_lines__[218] = 'codecs.py, line 218:\n    def getstate(self):';
		$m.__track_lines__[219] = 'codecs.py, line 219:\n    return self.buffer or 0';
		$m.__track_lines__[221] = 'codecs.py, line 221:\n    def setstate(self, state):';
		$m.__track_lines__[222] = 'codecs.py, line 222:\n    self.buffer = state or ""';
		$m.__track_lines__[224] = 'codecs.py, line 224:\n    class IncrementalDecoder(object):';
		$m.__track_lines__[230] = "codecs.py, line 230:\n    def __init__(self, errors='strict'):";
		$m.__track_lines__[238] = 'codecs.py, line 238:\n    self.errors = errors';
		$m.__track_lines__[240] = 'codecs.py, line 240:\n    def decode(self, input, final=False):';
		$m.__track_lines__[244] = 'codecs.py, line 244:\n    raise NotImplementedError';
		$m.__track_lines__[246] = 'codecs.py, line 246:\n    def reset(self):';
		$m.__track_lines__[251] = 'codecs.py, line 251:\n    def getstate(self):';
		$m.__track_lines__[263] = 'codecs.py, line 263:\n    return (b"", 0)';
		$m.__track_lines__[265] = 'codecs.py, line 265:\n    def setstate(self, state):';
		$m.__track_lines__[273] = 'codecs.py, line 273:\n    class BufferedIncrementalDecoder(IncrementalDecoder):';
		$m.__track_lines__[279] = "codecs.py, line 279:\n    def __init__(self, errors='strict'):";
		$m.__track_lines__[280] = 'codecs.py, line 280:\n    IncrementalDecoder.__init__(self, errors)';
		$m.__track_lines__[281] = 'codecs.py, line 281:\n    self.buffer = "" # undecoded input that is kept between calls to decode()';
		$m.__track_lines__[283] = 'codecs.py, line 283:\n    def _buffer_decode(self, input, errors, final):';
		$m.__track_lines__[286] = 'codecs.py, line 286:\n    raise NotImplementedError';
		$m.__track_lines__[288] = 'codecs.py, line 288:\n    def decode(self, input, final=False):';
		$m.__track_lines__[290] = 'codecs.py, line 290:\n    data = self.buffer + input';
		$m.__track_lines__[291] = 'codecs.py, line 291:\n    (result, consumed) = self._buffer_decode(data, self.errors, final)';
		$m.__track_lines__[293] = 'codecs.py, line 293:\n    self.buffer = data[consumed:]';
		$m.__track_lines__[294] = 'codecs.py, line 294:\n    return result';
		$m.__track_lines__[296] = 'codecs.py, line 296:\n    def reset(self):';
		$m.__track_lines__[297] = 'codecs.py, line 297:\n    IncrementalDecoder.reset(self)';
		$m.__track_lines__[298] = 'codecs.py, line 298:\n    self.buffer = ""';
		$m.__track_lines__[300] = 'codecs.py, line 300:\n    def getstate(self):';
		$m.__track_lines__[302] = 'codecs.py, line 302:\n    return (self.buffer, 0)';
		$m.__track_lines__[304] = 'codecs.py, line 304:\n    def setstate(self, state):';
		$m.__track_lines__[306] = 'codecs.py, line 306:\n    self.buffer = state[0]';
		$m.__track_lines__[315] = 'codecs.py, line 315:\n    class StreamWriter(Codec):';
		$m.__track_lines__[317] = "codecs.py, line 317:\n    def __init__(self, stream, errors='strict'):";
		$m.__track_lines__[339] = 'codecs.py, line 339:\n    self.stream = stream';
		$m.__track_lines__[340] = 'codecs.py, line 340:\n    self.errors = errors';
		$m.__track_lines__[342] = 'codecs.py, line 342:\n    def write(self, object):';
		$m.__track_lines__[346] = 'codecs.py, line 346:\n    data, consumed = self.encode(object, self.errors)';
		$m.__track_lines__[347] = 'codecs.py, line 347:\n    self.stream.write(data)';
		$m.__track_lines__[349] = 'codecs.py, line 349:\n    def writelines(self, list):';
		$m.__track_lines__[354] = "codecs.py, line 354:\n    self.write(''.join(list))";
		$m.__track_lines__[356] = 'codecs.py, line 356:\n    def reset(self):';
		$m.__track_lines__[366] = 'codecs.py, line 366:\n    pass';
		$m.__track_lines__[368] = 'codecs.py, line 368:\n    def seek(self, offset, whence=0):';
		$m.__track_lines__[369] = 'codecs.py, line 369:\n    self.stream.seek(offset, whence)';
		$m.__track_lines__[370] = 'codecs.py, line 370:\n    if whence == 0 and offset == 0:';
		$m.__track_lines__[371] = 'codecs.py, line 371:\n    self.reset()';
		$m.__track_lines__[373] = 'codecs.py, line 373:\n    def __getattr__(self, name,';
		$m.__track_lines__[378] = 'codecs.py, line 378:\n    return getattr(self.stream, name)';
		$m.__track_lines__[380] = 'codecs.py, line 380:\n    def __enter__(self):';
		$m.__track_lines__[381] = 'codecs.py, line 381:\n    return self';
		$m.__track_lines__[383] = 'codecs.py, line 383:\n    def __exit__(self, type, value, tb):';
		$m.__track_lines__[384] = 'codecs.py, line 384:\n    self.stream.close()';
		$m.__track_lines__[388] = 'codecs.py, line 388:\n    class StreamReader(Codec):';
		$m.__track_lines__[390] = "codecs.py, line 390:\n    def __init__(self, stream, errors='strict'):";
		$m.__track_lines__[408] = 'codecs.py, line 408:\n    self.stream = stream';
		$m.__track_lines__[409] = 'codecs.py, line 409:\n    self.errors = errors';
		$m.__track_lines__[410] = 'codecs.py, line 410:\n    self.bytebuffer = ""';
		$m.__track_lines__[413] = 'codecs.py, line 413:\n    self.charbuffer = ""';
		$m.__track_lines__[414] = 'codecs.py, line 414:\n    self.linebuffer = None';
		$m.__track_lines__[416] = "codecs.py, line 416:\n    def decode(self, input, errors='strict'):";
		$m.__track_lines__[417] = 'codecs.py, line 417:\n    raise NotImplementedError';
		$m.__track_lines__[419] = 'codecs.py, line 419:\n    def read(self, size=-1, chars=-1, firstline=False):';
		$m.__track_lines__[448] = 'codecs.py, line 448:\n    if self.linebuffer:';
		$m.__track_lines__[449] = 'codecs.py, line 449:\n    self.charbuffer = "".join(self.linebuffer)';
		$m.__track_lines__[450] = 'codecs.py, line 450:\n    self.linebuffer = None';
		$m.__track_lines__[453] = 'codecs.py, line 453:\n    while True:';
		$m.__track_lines__[455] = 'codecs.py, line 455:\n    if chars < 0:';
		$m.__track_lines__[456] = 'codecs.py, line 456:\n    if size < 0:';
		$m.__track_lines__[457] = 'codecs.py, line 457:\n    if self.charbuffer:';
		$m.__track_lines__[458] = 'codecs.py, line 458:\n    break';
		$m.__track_lines__[460] = 'codecs.py, line 460:\n    break';
		$m.__track_lines__[462] = 'codecs.py, line 462:\n    if len(self.charbuffer) >= chars:';
		$m.__track_lines__[463] = 'codecs.py, line 463:\n    break';
		$m.__track_lines__[465] = 'codecs.py, line 465:\n    if size < 0:';
		$m.__track_lines__[466] = 'codecs.py, line 466:\n    newdata = self.stream.read()';
		$m.__track_lines__[468] = 'codecs.py, line 468:\n    newdata = self.stream.read(size)';
		$m.__track_lines__[470] = 'codecs.py, line 470:\n    data = self.bytebuffer + newdata';
		$m.__track_lines__[471] = 'codecs.py, line 471:\n    try:';
		$m.__track_lines__[472] = 'codecs.py, line 472:\n    newchars, decodedbytes = self.decode(data, self.errors)';
		$m.__track_lines__[474] = 'codecs.py, line 474:\n    if firstline:';
		$m.__track_lines__[475] = 'codecs.py, line 475:\n    newchars, decodedbytes = self.decode(data[:exc.start], self.errors)';
		$m.__track_lines__[476] = 'codecs.py, line 476:\n    lines = newchars.splitlines(True)';
		$m.__track_lines__[477] = 'codecs.py, line 477:\n    if len(lines)<=1:';
		$m.__track_lines__[478] = 'codecs.py, line 478:\n    raise';
		$m.__track_lines__[480] = 'codecs.py, line 480:\n    raise';
		$m.__track_lines__[482] = 'codecs.py, line 482:\n    self.bytebuffer = data[decodedbytes:]';
		$m.__track_lines__[484] = 'codecs.py, line 484:\n    self.charbuffer += newchars';
		$m.__track_lines__[486] = 'codecs.py, line 486:\n    if not newdata:';
		$m.__track_lines__[487] = 'codecs.py, line 487:\n    break';
		$m.__track_lines__[488] = 'codecs.py, line 488:\n    if chars < 0:';
		$m.__track_lines__[490] = 'codecs.py, line 490:\n    result = self.charbuffer';
		$m.__track_lines__[491] = 'codecs.py, line 491:\n    self.charbuffer = ""';
		$m.__track_lines__[494] = 'codecs.py, line 494:\n    result = self.charbuffer[:chars]';
		$m.__track_lines__[495] = 'codecs.py, line 495:\n    self.charbuffer = self.charbuffer[chars:]';
		$m.__track_lines__[496] = 'codecs.py, line 496:\n    return result';
		$m.__track_lines__[498] = 'codecs.py, line 498:\n    def readline(self, size=None, keepends=True):';
		$m.__track_lines__[509] = 'codecs.py, line 509:\n    if self.linebuffer:';
		$m.__track_lines__[510] = 'codecs.py, line 510:\n    line = self.linebuffer[0]';
		$m.__track_lines__[511] = 'codecs.py, line 511:\n    del self.linebuffer[0]';
		$m.__track_lines__[512] = 'codecs.py, line 512:\n    if len(self.linebuffer) == 1:';
		$m.__track_lines__[515] = 'codecs.py, line 515:\n    self.charbuffer = self.linebuffer[0]';
		$m.__track_lines__[516] = 'codecs.py, line 516:\n    self.linebuffer = None';
		$m.__track_lines__[517] = 'codecs.py, line 517:\n    if not keepends:';
		$m.__track_lines__[518] = 'codecs.py, line 518:\n    line = line.splitlines(False)[0]';
		$m.__track_lines__[519] = 'codecs.py, line 519:\n    return line';
		$m.__track_lines__[521] = 'codecs.py, line 521:\n    readsize = size or 72';
		$m.__track_lines__[522] = 'codecs.py, line 522:\n    line = ""';
		$m.__track_lines__[524] = 'codecs.py, line 524:\n    while True:';
		$m.__track_lines__[525] = 'codecs.py, line 525:\n    data = self.read(readsize, firstline=True)';
		$m.__track_lines__[526] = 'codecs.py, line 526:\n    if data:';
		$m.__track_lines__[530] = 'codecs.py, line 530:\n    if data.endswith("\\r"):';
		$m.__track_lines__[531] = 'codecs.py, line 531:\n    data += self.read(size=1, chars=1)';
		$m.__track_lines__[533] = 'codecs.py, line 533:\n    line += data';
		$m.__track_lines__[534] = 'codecs.py, line 534:\n    lines = line.splitlines(True)';
		$m.__track_lines__[535] = 'codecs.py, line 535:\n    if lines:';
		$m.__track_lines__[536] = 'codecs.py, line 536:\n    if len(lines) > 1:';
		$m.__track_lines__[539] = 'codecs.py, line 539:\n    line = lines[0]';
		$m.__track_lines__[540] = 'codecs.py, line 540:\n    del lines[0]';
		$m.__track_lines__[541] = 'codecs.py, line 541:\n    if len(lines) > 1:';
		$m.__track_lines__[543] = 'codecs.py, line 543:\n    lines[-1] += self.charbuffer';
		$m.__track_lines__[544] = 'codecs.py, line 544:\n    self.linebuffer = lines';
		$m.__track_lines__[545] = 'codecs.py, line 545:\n    self.charbuffer = None';
		$m.__track_lines__[548] = 'codecs.py, line 548:\n    self.charbuffer = lines[0] + self.charbuffer';
		$m.__track_lines__[549] = 'codecs.py, line 549:\n    if not keepends:';
		$m.__track_lines__[550] = 'codecs.py, line 550:\n    line = line.splitlines(False)[0]';
		$m.__track_lines__[551] = 'codecs.py, line 551:\n    break';
		$m.__track_lines__[552] = 'codecs.py, line 552:\n    line0withend = lines[0]';
		$m.__track_lines__[553] = 'codecs.py, line 553:\n    line0withoutend = lines[0].splitlines(False)[0]';
		$m.__track_lines__[554] = 'codecs.py, line 554:\n    if line0withend != line0withoutend: # We really have a line end';
		$m.__track_lines__[556] = 'codecs.py, line 556:\n    self.charbuffer = "".join(lines[1:]) + self.charbuffer';
		$m.__track_lines__[557] = 'codecs.py, line 557:\n    if keepends:';
		$m.__track_lines__[558] = 'codecs.py, line 558:\n    line = line0withend';
		$m.__track_lines__[560] = 'codecs.py, line 560:\n    line = line0withoutend';
		$m.__track_lines__[561] = 'codecs.py, line 561:\n    break';
		$m.__track_lines__[563] = 'codecs.py, line 563:\n    if not data or size is not None:';
		$m.__track_lines__[564] = 'codecs.py, line 564:\n    if line and not keepends:';
		$m.__track_lines__[565] = 'codecs.py, line 565:\n    line = line.splitlines(False)[0]';
		$m.__track_lines__[566] = 'codecs.py, line 566:\n    break';
		$m.__track_lines__[567] = 'codecs.py, line 567:\n    if readsize<8000:';
		$m.__track_lines__[568] = 'codecs.py, line 568:\n    readsize *= 2';
		$m.__track_lines__[569] = 'codecs.py, line 569:\n    return line';
		$m.__track_lines__[571] = 'codecs.py, line 571:\n    def readlines(self, sizehint=None, keepends=True):';
		$m.__track_lines__[583] = 'codecs.py, line 583:\n    data = self.read()';
		$m.__track_lines__[584] = 'codecs.py, line 584:\n    return data.splitlines(keepends)';
		$m.__track_lines__[586] = 'codecs.py, line 586:\n    def reset(self):';
		$m.__track_lines__[595] = 'codecs.py, line 595:\n    self.bytebuffer = ""';
		$m.__track_lines__[596] = 'codecs.py, line 596:\n    self.charbuffer = u""';
		$m.__track_lines__[597] = 'codecs.py, line 597:\n    self.linebuffer = None';
		$m.__track_lines__[599] = 'codecs.py, line 599:\n    def seek(self, offset, whence=0):';
		$m.__track_lines__[604] = 'codecs.py, line 604:\n    self.stream.seek(offset, whence)';
		$m.__track_lines__[605] = 'codecs.py, line 605:\n    self.reset()';
		$m.__track_lines__[607] = 'codecs.py, line 607:\n    def next(self):';
		$m.__track_lines__[610] = 'codecs.py, line 610:\n    line = self.readline()';
		$m.__track_lines__[611] = 'codecs.py, line 611:\n    if line:';
		$m.__track_lines__[612] = 'codecs.py, line 612:\n    return line';
		$m.__track_lines__[613] = 'codecs.py, line 613:\n    raise StopIteration';
		$m.__track_lines__[615] = 'codecs.py, line 615:\n    def __iter__(self):';
		$m.__track_lines__[616] = 'codecs.py, line 616:\n    return self';
		$m.__track_lines__[618] = 'codecs.py, line 618:\n    def __getattr__(self, name,';
		$m.__track_lines__[623] = 'codecs.py, line 623:\n    return getattr(self.stream, name)';
		$m.__track_lines__[625] = 'codecs.py, line 625:\n    def __enter__(self):';
		$m.__track_lines__[626] = 'codecs.py, line 626:\n    return self';
		$m.__track_lines__[628] = 'codecs.py, line 628:\n    def __exit__(self, type, value, tb):';
		$m.__track_lines__[629] = 'codecs.py, line 629:\n    self.stream.close()';
		$m.__track_lines__[633] = 'codecs.py, line 633:\n    class StreamReaderWriter:';
		$m.__track_lines__[644] = "codecs.py, line 644:\n    encoding = 'unknown'";
		$m.__track_lines__[646] = "codecs.py, line 646:\n    def __init__(self, stream, Reader, Writer, errors='strict'):";
		$m.__track_lines__[659] = 'codecs.py, line 659:\n    self.stream = stream';
		$m.__track_lines__[660] = 'codecs.py, line 660:\n    self.reader = Reader(stream, errors)';
		$m.__track_lines__[661] = 'codecs.py, line 661:\n    self.writer = Writer(stream, errors)';
		$m.__track_lines__[662] = 'codecs.py, line 662:\n    self.errors = errors';
		$m.__track_lines__[664] = 'codecs.py, line 664:\n    def read(self, size=-1):';
		$m.__track_lines__[666] = 'codecs.py, line 666:\n    return self.reader.read(size)';
		$m.__track_lines__[668] = 'codecs.py, line 668:\n    def readline(self, size=None):';
		$m.__track_lines__[670] = 'codecs.py, line 670:\n    return self.reader.readline(size)';
		$m.__track_lines__[672] = 'codecs.py, line 672:\n    def readlines(self, sizehint=None):';
		$m.__track_lines__[674] = 'codecs.py, line 674:\n    return self.reader.readlines(sizehint)';
		$m.__track_lines__[676] = 'codecs.py, line 676:\n    def next(self):';
		$m.__track_lines__[679] = 'codecs.py, line 679:\n    return self.reader.next()';
		$m.__track_lines__[681] = 'codecs.py, line 681:\n    def __iter__(self):';
		$m.__track_lines__[682] = 'codecs.py, line 682:\n    return self';
		$m.__track_lines__[684] = 'codecs.py, line 684:\n    def write(self, data):';
		$m.__track_lines__[686] = 'codecs.py, line 686:\n    return self.writer.write(data)';
		$m.__track_lines__[688] = 'codecs.py, line 688:\n    def writelines(self, list):';
		$m.__track_lines__[690] = 'codecs.py, line 690:\n    return self.writer.writelines(list)';
		$m.__track_lines__[692] = 'codecs.py, line 692:\n    def reset(self):';
		$m.__track_lines__[694] = 'codecs.py, line 694:\n    self.reader.reset()';
		$m.__track_lines__[695] = 'codecs.py, line 695:\n    self.writer.reset()';
		$m.__track_lines__[697] = 'codecs.py, line 697:\n    def seek(self, offset, whence=0):';
		$m.__track_lines__[698] = 'codecs.py, line 698:\n    self.stream.seek(offset, whence)';
		$m.__track_lines__[699] = 'codecs.py, line 699:\n    self.reader.reset()';
		$m.__track_lines__[700] = 'codecs.py, line 700:\n    if whence == 0 and offset == 0:';
		$m.__track_lines__[701] = 'codecs.py, line 701:\n    self.writer.reset()';
		$m.__track_lines__[703] = 'codecs.py, line 703:\n    def __getattr__(self, name,';
		$m.__track_lines__[708] = 'codecs.py, line 708:\n    return getattr(self.stream, name)';
		$m.__track_lines__[712] = 'codecs.py, line 712:\n    def __enter__(self):';
		$m.__track_lines__[713] = 'codecs.py, line 713:\n    return self';
		$m.__track_lines__[715] = 'codecs.py, line 715:\n    def __exit__(self, type, value, tb):';
		$m.__track_lines__[716] = 'codecs.py, line 716:\n    self.stream.close()';
		$m.__track_lines__[720] = 'codecs.py, line 720:\n    class StreamRecoder:';
		$m.__track_lines__[738] = "codecs.py, line 738:\n    data_encoding = 'unknown'";
		$m.__track_lines__[739] = "codecs.py, line 739:\n    file_encoding = 'unknown'";
		$m.__track_lines__[741] = 'codecs.py, line 741:\n    def __init__(self, stream, encode, decode, Reader, Writer,';
		$m.__track_lines__[767] = 'codecs.py, line 767:\n    self.stream = stream';
		$m.__track_lines__[768] = 'codecs.py, line 768:\n    self.encode = encode';
		$m.__track_lines__[769] = 'codecs.py, line 769:\n    self.decode = decode';
		$m.__track_lines__[770] = 'codecs.py, line 770:\n    self.reader = Reader(stream, errors)';
		$m.__track_lines__[771] = 'codecs.py, line 771:\n    self.writer = Writer(stream, errors)';
		$m.__track_lines__[772] = 'codecs.py, line 772:\n    self.errors = errors';
		$m.__track_lines__[774] = 'codecs.py, line 774:\n    def read(self, size=-1):';
		$m.__track_lines__[776] = 'codecs.py, line 776:\n    data = self.reader.read(size)';
		$m.__track_lines__[777] = 'codecs.py, line 777:\n    data, bytesencoded = self.encode(data, self.errors)';
		$m.__track_lines__[778] = 'codecs.py, line 778:\n    return data';
		$m.__track_lines__[780] = 'codecs.py, line 780:\n    def readline(self, size=None):';
		$m.__track_lines__[782] = 'codecs.py, line 782:\n    if size is None:';
		$m.__track_lines__[783] = 'codecs.py, line 783:\n    data = self.reader.readline()';
		$m.__track_lines__[785] = 'codecs.py, line 785:\n    data = self.reader.readline(size)';
		$m.__track_lines__[786] = 'codecs.py, line 786:\n    data, bytesencoded = self.encode(data, self.errors)';
		$m.__track_lines__[787] = 'codecs.py, line 787:\n    return data';
		$m.__track_lines__[789] = 'codecs.py, line 789:\n    def readlines(self, sizehint=None):';
		$m.__track_lines__[791] = 'codecs.py, line 791:\n    data = self.reader.read()';
		$m.__track_lines__[792] = 'codecs.py, line 792:\n    data, bytesencoded = self.encode(data, self.errors)';
		$m.__track_lines__[793] = 'codecs.py, line 793:\n    return data.splitlines(1)';
		$m.__track_lines__[795] = 'codecs.py, line 795:\n    def next(self):';
		$m.__track_lines__[798] = 'codecs.py, line 798:\n    data = self.reader.next()';
		$m.__track_lines__[799] = 'codecs.py, line 799:\n    data, bytesencoded = self.encode(data, self.errors)';
		$m.__track_lines__[800] = 'codecs.py, line 800:\n    return data';
		$m.__track_lines__[802] = 'codecs.py, line 802:\n    def __iter__(self):';
		$m.__track_lines__[803] = 'codecs.py, line 803:\n    return self';
		$m.__track_lines__[805] = 'codecs.py, line 805:\n    def write(self, data):';
		$m.__track_lines__[807] = 'codecs.py, line 807:\n    data, bytesdecoded = self.decode(data, self.errors)';
		$m.__track_lines__[808] = 'codecs.py, line 808:\n    return self.writer.write(data)';
		$m.__track_lines__[810] = 'codecs.py, line 810:\n    def writelines(self, list):';
		$m.__track_lines__[812] = "codecs.py, line 812:\n    data = ''.join(list)";
		$m.__track_lines__[813] = 'codecs.py, line 813:\n    data, bytesdecoded = self.decode(data, self.errors)';
		$m.__track_lines__[814] = 'codecs.py, line 814:\n    return self.writer.write(data)';
		$m.__track_lines__[816] = 'codecs.py, line 816:\n    def reset(self):';
		$m.__track_lines__[818] = 'codecs.py, line 818:\n    self.reader.reset()';
		$m.__track_lines__[819] = 'codecs.py, line 819:\n    self.writer.reset()';
		$m.__track_lines__[821] = 'codecs.py, line 821:\n    def __getattr__(self, name,';
		$m.__track_lines__[826] = 'codecs.py, line 826:\n    return getattr(self.stream, name)';
		$m.__track_lines__[828] = 'codecs.py, line 828:\n    def __enter__(self):';
		$m.__track_lines__[829] = 'codecs.py, line 829:\n    return self';
		$m.__track_lines__[831] = 'codecs.py, line 831:\n    def __exit__(self, type, value, tb):';
		$m.__track_lines__[832] = 'codecs.py, line 832:\n    self.stream.close()';
		$m.__track_lines__[836] = "codecs.py, line 836:\n    def open(filename, mode='rb', encoding=None, errors='strict', buffering=1):";
		$m.__track_lines__[867] = 'codecs.py, line 867:\n    if encoding is not None:';
		$m.__track_lines__[868] = "codecs.py, line 868:\n    if 'U' in mode:";
		$m.__track_lines__[870] = "codecs.py, line 870:\n    mode = mode.strip().replace('U', '')";
		$m.__track_lines__[871] = "codecs.py, line 871:\n    if mode[:1] not in set('rwa'):";
		$m.__track_lines__[872] = "codecs.py, line 872:\n    mode = 'r' + mode";
		$m.__track_lines__[873] = "codecs.py, line 873:\n    if 'b' not in mode:";
		$m.__track_lines__[875] = "codecs.py, line 875:\n    mode = mode + 'b'";
		$m.__track_lines__[876] = 'codecs.py, line 876:\n    file = __builtin__.open(filename, mode, buffering)';
		$m.__track_lines__[877] = 'codecs.py, line 877:\n    if encoding is None:';
		$m.__track_lines__[878] = 'codecs.py, line 878:\n    return file';
		$m.__track_lines__[879] = 'codecs.py, line 879:\n    info = lookup(encoding)';
		$m.__track_lines__[880] = 'codecs.py, line 880:\n    srw = StreamReaderWriter(file, info.streamreader, info.streamwriter, errors)';
		$m.__track_lines__[882] = 'codecs.py, line 882:\n    srw.encoding = encoding';
		$m.__track_lines__[883] = 'codecs.py, line 883:\n    return srw';
		$m.__track_lines__[885] = "codecs.py, line 885:\n    def EncodedFile(file, data_encoding, file_encoding=None, errors='strict'):";
		$m.__track_lines__[910] = 'codecs.py, line 910:\n    if file_encoding is None:';
		$m.__track_lines__[911] = 'codecs.py, line 911:\n    file_encoding = data_encoding';
		$m.__track_lines__[912] = 'codecs.py, line 912:\n    data_info = lookup(data_encoding)';
		$m.__track_lines__[913] = 'codecs.py, line 913:\n    file_info = lookup(file_encoding)';
		$m.__track_lines__[914] = 'codecs.py, line 914:\n    sr = StreamRecoder(file, data_info.encode, data_info.decode,';
		$m.__track_lines__[917] = 'codecs.py, line 917:\n    sr.data_encoding = data_encoding';
		$m.__track_lines__[918] = 'codecs.py, line 918:\n    sr.file_encoding = file_encoding';
		$m.__track_lines__[919] = 'codecs.py, line 919:\n    return sr';
		$m.__track_lines__[923] = 'codecs.py, line 923:\n    def getencoder(encoding):';
		$m.__track_lines__[931] = 'codecs.py, line 931:\n    return lookup(encoding).encode';
		$m.__track_lines__[933] = 'codecs.py, line 933:\n    def getdecoder(encoding):';
		$m.__track_lines__[941] = 'codecs.py, line 941:\n    return lookup(encoding).decode';
		$m.__track_lines__[943] = 'codecs.py, line 943:\n    def getincrementalencoder(encoding):';
		$m.__track_lines__[952] = 'codecs.py, line 952:\n    encoder = lookup(encoding).incrementalencoder';
		$m.__track_lines__[953] = 'codecs.py, line 953:\n    if encoder is None:';
		$m.__track_lines__[954] = 'codecs.py, line 954:\n    raise LookupError(encoding)';
		$m.__track_lines__[955] = 'codecs.py, line 955:\n    return encoder';
		$m.__track_lines__[957] = 'codecs.py, line 957:\n    def getincrementaldecoder(encoding):';
		$m.__track_lines__[966] = 'codecs.py, line 966:\n    decoder = lookup(encoding).incrementaldecoder';
		$m.__track_lines__[967] = 'codecs.py, line 967:\n    if decoder is None:';
		$m.__track_lines__[968] = 'codecs.py, line 968:\n    raise LookupError(encoding)';
		$m.__track_lines__[969] = 'codecs.py, line 969:\n    return decoder';
		$m.__track_lines__[971] = 'codecs.py, line 971:\n    def getreader(encoding):';
		$m.__track_lines__[979] = 'codecs.py, line 979:\n    return lookup(encoding).streamreader';
		$m.__track_lines__[981] = 'codecs.py, line 981:\n    def getwriter(encoding):';
		$m.__track_lines__[989] = 'codecs.py, line 989:\n    return lookup(encoding).streamwriter';
		$m.__track_lines__[991] = "codecs.py, line 991:\n    def iterencode(iterator, encoding, errors='strict', **kwargs):";
		$m.__track_lines__[1000] = 'codecs.py, line 1000:\n    encoder = getincrementalencoder(encoding)(errors, **kwargs)';
		$m.__track_lines__[1001] = 'codecs.py, line 1001:\n    for input in iterator:';
		$m.__track_lines__[1002] = 'codecs.py, line 1002:\n    output = encoder.encode(input)';
		$m.__track_lines__[1003] = 'codecs.py, line 1003:\n    if output:';
		$m.__track_lines__[1004] = 'codecs.py, line 1004:\n    yield output';
		$m.__track_lines__[1005] = 'codecs.py, line 1005:\n    output = encoder.encode("", True)';
		$m.__track_lines__[1006] = 'codecs.py, line 1006:\n    if output:';
		$m.__track_lines__[1007] = 'codecs.py, line 1007:\n    yield output';
		$m.__track_lines__[1009] = "codecs.py, line 1009:\n    def iterdecode(iterator, encoding, errors='strict', **kwargs):";
		$m.__track_lines__[1018] = 'codecs.py, line 1018:\n    decoder = getincrementaldecoder(encoding)(errors, **kwargs)';
		$m.__track_lines__[1019] = 'codecs.py, line 1019:\n    for input in iterator:';
		$m.__track_lines__[1020] = 'codecs.py, line 1020:\n    output = decoder.decode(input)';
		$m.__track_lines__[1021] = 'codecs.py, line 1021:\n    if output:';
		$m.__track_lines__[1022] = 'codecs.py, line 1022:\n    yield output';
		$m.__track_lines__[1023] = 'codecs.py, line 1023:\n    output = decoder.decode("", True)';
		$m.__track_lines__[1024] = 'codecs.py, line 1024:\n    if output:';
		$m.__track_lines__[1025] = 'codecs.py, line 1025:\n    yield output';
		$m.__track_lines__[1029] = 'codecs.py, line 1029:\n    def make_identity_dict(rng):';
		$m.__track_lines__[1037] = 'codecs.py, line 1037:\n    res = {}';
		$m.__track_lines__[1038] = 'codecs.py, line 1038:\n    for i in rng:';
		$m.__track_lines__[1039] = 'codecs.py, line 1039:\n    res[i]=i';
		$m.__track_lines__[1040] = 'codecs.py, line 1040:\n    return res';
		$m.__track_lines__[1042] = 'codecs.py, line 1042:\n    def make_encoding_map(decoding_map):';
		$m.__track_lines__[1055] = 'codecs.py, line 1055:\n    m = {}';
		$m.__track_lines__[1056] = 'codecs.py, line 1056:\n    for k,v in decoding_map.items():';
		$m.__track_lines__[1057] = 'codecs.py, line 1057:\n    if not v in m:';
		$m.__track_lines__[1058] = 'codecs.py, line 1058:\n    m[v] = k';
		$m.__track_lines__[1060] = 'codecs.py, line 1060:\n    m[v] = None';
		$m.__track_lines__[1061] = 'codecs.py, line 1061:\n    return m';
		$m.__track_lines__[1065] = 'codecs.py, line 1065:\n    strict_errors = None';
		$m.__track_lines__[1066] = 'codecs.py, line 1066:\n    ignore_errors = None';
		$m.__track_lines__[1067] = 'codecs.py, line 1067:\n    replace_errors = None';
		$m.__track_lines__[1068] = 'codecs.py, line 1068:\n    xmlcharrefreplace_errors = None';
		$m.__track_lines__[1069] = 'codecs.py, line 1069:\n    backslashreplace_errors = None';
		$m.__track_lines__[1073] = 'codecs.py, line 1073:\n    _false = 0';
		$m.__track_lines__[1074] = 'codecs.py, line 1074:\n    if _false:';
		$m.__track_lines__[1075] = 'codecs.py, line 1075:\n    import encodings';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_72 = new $p['int'](72);
		var $constant_int_8000 = new $p['int'](8000);
		$pyjs.track.module='codecs';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=10;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['__builtin__'] = $p['___import___']('__builtin__', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=14;
		$m['__all__'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list'](['register', 'lookup', 'open', 'EncodedFile', 'BOM', 'BOM_BE', 'BOM_LE', 'BOM32_BE', 'BOM32_LE', 'BOM64_BE', 'BOM64_LE', 'BOM_UTF8', 'BOM_UTF16', 'BOM_UTF16_LE', 'BOM_UTF16_BE', 'BOM_UTF32', 'BOM_UTF32_LE', 'BOM_UTF32_BE', 'strict_errors', 'ignore_errors', 'replace_errors', 'xmlcharrefreplace_errors', 'register_error', 'lookup_error']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$pyjs.track.lineno=31;
		$m['BOM_UTF8'] = '\xef\xbb\xbf';
		$pyjs.track.lineno=34;
		$m['$assign1'] = '\xff\xfe';
		$m['BOM_LE'] = $m['$assign1'];
		$m['BOM_UTF16_LE'] = $m['$assign1'];
		$pyjs.track.lineno=37;
		$m['$assign2'] = '\xfe\xff';
		$m['BOM_BE'] = $m['$assign2'];
		$m['BOM_UTF16_BE'] = $m['$assign2'];
		$pyjs.track.lineno=40;
		$m['BOM_UTF32_LE'] = '\xff\xfe\x00\x00';
		$pyjs.track.lineno=43;
		$m['BOM_UTF32_BE'] = '\x00\x00\xfe\xff';
		$pyjs.track.lineno=45;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($p['getattr']($m['sys'], 'byteorder'), 'little'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
			$pyjs.track.lineno=48;
			$m['$assign3'] = $m['BOM_UTF16_LE'];
			$m['BOM'] = $m['$assign3'];
			$m['BOM_UTF16'] = $m['$assign3'];
			$pyjs.track.lineno=51;
			$m['BOM_UTF32'] = $m['BOM_UTF32_LE'];
		}
		else {
			$pyjs.track.lineno=56;
			$m['$assign4'] = $m['BOM_UTF16_BE'];
			$m['BOM'] = $m['$assign4'];
			$m['BOM_UTF16'] = $m['$assign4'];
			$pyjs.track.lineno=59;
			$m['BOM_UTF32'] = $m['BOM_UTF32_BE'];
		}
		$pyjs.track.lineno=62;
		$m['BOM32_LE'] = $m['BOM_UTF16_LE'];
		$pyjs.track.lineno=63;
		$m['BOM32_BE'] = $m['BOM_UTF16_BE'];
		$pyjs.track.lineno=64;
		$m['BOM64_LE'] = $m['BOM_UTF32_LE'];
		$pyjs.track.lineno=65;
		$m['BOM64_BE'] = $m['BOM_UTF32_BE'];
		$pyjs.track.lineno=70;
		$m['CodecInfo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'codecs';
			$cls_definition.__md5__ = '04186e2a5428304d1466a546b4a832ea';
			$pyjs.track.lineno=72;
			$method = $pyjs__bind_method2('__new__', function(cls, encode, decode, streamreader, streamwriter, incrementalencoder, incrementaldecoder, name) {
				if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 8)) $pyjs__exception_func_param(arguments.callee.__name__, 3, 8, arguments.length);
				if (typeof streamreader == 'undefined') streamreader=arguments.callee.__args__[5][1];
				if (typeof streamwriter == 'undefined') streamwriter=arguments.callee.__args__[6][1];
				if (typeof incrementalencoder == 'undefined') incrementalencoder=arguments.callee.__args__[7][1];
				if (typeof incrementaldecoder == 'undefined') incrementaldecoder=arguments.callee.__args__[8][1];
				if (typeof name == 'undefined') name=arguments.callee.__args__[9][1];
				var self;
				$pyjs.track={module:'codecs', lineno:72};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=72;
				$pyjs.track.lineno=74;
				self = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']['__new__'](cls, (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([encode, decode, streamreader, streamwriter]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.track.lineno=75;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', name) : $p['setattr'](self, '$$name', name); 
				$pyjs.track.lineno=76;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('encode', encode) : $p['setattr'](self, 'encode', encode); 
				$pyjs.track.lineno=77;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('decode', decode) : $p['setattr'](self, 'decode', decode); 
				$pyjs.track.lineno=78;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('incrementalencoder', incrementalencoder) : $p['setattr'](self, 'incrementalencoder', incrementalencoder); 
				$pyjs.track.lineno=79;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('incrementaldecoder', incrementaldecoder) : $p['setattr'](self, 'incrementaldecoder', incrementaldecoder); 
				$pyjs.track.lineno=80;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('streamwriter', streamwriter) : $p['setattr'](self, 'streamwriter', streamwriter); 
				$pyjs.track.lineno=81;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('streamreader', streamreader) : $p['setattr'](self, 'streamreader', streamreader); 
				$pyjs.track.lineno=82;
				$pyjs.track.lineno=82;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null,['cls'],['encode'],['decode'],['streamreader', null],['streamwriter', null],['incrementalencoder', null],['incrementaldecoder', null],['name', null]]);
			$cls_definition['__new__'] = $method;
			$pyjs.track.lineno=84;
			$method = $pyjs__bind_method2('__repr__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '04186e2a5428304d1466a546b4a832ea') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:84};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=84;
				$pyjs.track.lineno=85;
				$pyjs.track.lineno=85;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('<%s.%s object for encoding %s at 0x%x>', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([$p['getattr']($p['getattr'](self, '__class__'), '__module__'), $p['getattr']($p['getattr'](self, '__class__'), '__name__'), $p['getattr'](self, '$$name'), (function(){try{try{$pyjs.in_try_except += 1;
				return (typeof id == "undefined"?$m.id:id)(self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs.track.lineno=70;
			var $bases = new Array($p['tuple']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('CodecInfo', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=87;
		$m['Codec'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'codecs';
			$cls_definition.__md5__ = '0668fba6c6eabaa9c54155e89d8f14d9';
			$pyjs.track.lineno=109;
			$method = $pyjs__bind_method2('encode', function(input, errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					errors = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0668fba6c6eabaa9c54155e89d8f14d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[4][1];

				$pyjs.track={module:'codecs', lineno:109};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=109;
				$pyjs.track.lineno=126;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['input'],['errors', 'strict']]);
			$cls_definition['encode'] = $method;
			$pyjs.track.lineno=128;
			$method = $pyjs__bind_method2('decode', function(input, errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					errors = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0668fba6c6eabaa9c54155e89d8f14d9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[4][1];

				$pyjs.track={module:'codecs', lineno:128};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=128;
				$pyjs.track.lineno=149;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['input'],['errors', 'strict']]);
			$cls_definition['decode'] = $method;
			$pyjs.track.lineno=87;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Codec', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=151;
		$m['IncrementalEncoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'codecs';
			$cls_definition.__md5__ = '33fe4dbcb36c81a9f8f08bf52b980062';
			$pyjs.track.lineno=157;
			$method = $pyjs__bind_method2('__init__', function(errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					errors = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '33fe4dbcb36c81a9f8f08bf52b980062') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[3][1];

				$pyjs.track={module:'codecs', lineno:157};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=157;
				$pyjs.track.lineno=165;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('errors', errors) : $p['setattr'](self, 'errors', errors); 
				$pyjs.track.lineno=166;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buffer', '') : $p['setattr'](self, 'buffer', ''); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=168;
			$method = $pyjs__bind_method2('encode', function(input, $$final) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					$$final = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '33fe4dbcb36c81a9f8f08bf52b980062') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$final == 'undefined') $$final=arguments.callee.__args__[4][1];
				var $$final;
				$pyjs.track={module:'codecs', lineno:168};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=168;
				$pyjs.track.lineno=172;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
			$cls_definition['encode'] = $method;
			$pyjs.track.lineno=174;
			$method = $pyjs__bind_method2('reset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '33fe4dbcb36c81a9f8f08bf52b980062') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:174};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=174;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$pyjs.track.lineno=179;
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
					if (self.prototype.__md5__ !== '33fe4dbcb36c81a9f8f08bf52b980062') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:179};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=179;
				$pyjs.track.lineno=183;
				$pyjs.track.lineno=183;
				var $pyjs__ret = $constant_int_0;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$pyjs.track.lineno=185;
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
					if (self.prototype.__md5__ !== '33fe4dbcb36c81a9f8f08bf52b980062') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:185};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=185;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			$pyjs.track.lineno=151;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('IncrementalEncoder', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=191;
		$m['BufferedIncrementalEncoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'codecs';
			$cls_definition.__md5__ = 'e5e66791e22432b86b922f348b3dd6f1';
			$pyjs.track.lineno=197;
			$method = $pyjs__bind_method2('__init__', function(errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					errors = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[3][1];

				$pyjs.track={module:'codecs', lineno:197};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=197;
				$pyjs.track.lineno=198;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['IncrementalEncoder']['__init__'](self, errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.track.lineno=199;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buffer', '') : $p['setattr'](self, 'buffer', ''); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=201;
			$method = $pyjs__bind_method2('_buffer_encode', function(input, errors, $$final) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					errors = arguments[2];
					$$final = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$final;
				$pyjs.track={module:'codecs', lineno:201};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=201;
				$pyjs.track.lineno=204;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['input'],['errors'],['$$final']]);
			$cls_definition['_buffer_encode'] = $method;
			$pyjs.track.lineno=206;
			$method = $pyjs__bind_method2('encode', function(input, $$final) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					$$final = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$final == 'undefined') $$final=arguments.callee.__args__[4][1];
				var $add2,consumed,$add1,result,data,$$final;
				$pyjs.track={module:'codecs', lineno:206};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=206;
				$pyjs.track.lineno=208;
				data = $p['__op_add']($add1=$p['getattr'](self, 'buffer'),$add2=input);
				$pyjs.track.lineno=209;
				var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return self['_buffer_encode'](data, $p['getattr'](self, 'errors'), $$final);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				result = $tupleassign1[0];
				consumed = $tupleassign1[1];
				$pyjs.track.lineno=211;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buffer', $p['__getslice'](data, consumed, null)) : $p['setattr'](self, 'buffer', $p['__getslice'](data, consumed, null)); 
				$pyjs.track.lineno=212;
				$pyjs.track.lineno=212;
				var $pyjs__ret = result;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
			$cls_definition['encode'] = $method;
			$pyjs.track.lineno=214;
			$method = $pyjs__bind_method2('reset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:214};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=214;
				$pyjs.track.lineno=215;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['IncrementalEncoder']['reset'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.track.lineno=216;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buffer', '') : $p['setattr'](self, 'buffer', ''); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$pyjs.track.lineno=218;
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
					if (self.prototype.__md5__ !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2;
				$pyjs.track={module:'codecs', lineno:218};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=218;
				$pyjs.track.lineno=219;
				$pyjs.track.lineno=219;
				var $pyjs__ret = ($p['bool']($or1=$p['getattr'](self, 'buffer'))?$or1:$constant_int_0);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$pyjs.track.lineno=221;
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
					if (self.prototype.__md5__ !== 'e5e66791e22432b86b922f348b3dd6f1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or4,$or3;
				$pyjs.track={module:'codecs', lineno:221};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=221;
				$pyjs.track.lineno=222;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buffer', ($p['bool']($or3=state)?$or3:'')) : $p['setattr'](self, 'buffer', ($p['bool']($or3=state)?$or3:'')); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			$pyjs.track.lineno=191;
			var $bases = new Array($m['IncrementalEncoder']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('BufferedIncrementalEncoder', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=224;
		$m['IncrementalDecoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'codecs';
			$cls_definition.__md5__ = 'b06a9419b9e935325b52a2a9ff2b8f61';
			$pyjs.track.lineno=230;
			$method = $pyjs__bind_method2('__init__', function(errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					errors = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b06a9419b9e935325b52a2a9ff2b8f61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[3][1];

				$pyjs.track={module:'codecs', lineno:230};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=230;
				$pyjs.track.lineno=238;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('errors', errors) : $p['setattr'](self, 'errors', errors); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=240;
			$method = $pyjs__bind_method2('decode', function(input, $$final) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					$$final = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b06a9419b9e935325b52a2a9ff2b8f61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$final == 'undefined') $$final=arguments.callee.__args__[4][1];
				var $$final;
				$pyjs.track={module:'codecs', lineno:240};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=240;
				$pyjs.track.lineno=244;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
			$cls_definition['decode'] = $method;
			$pyjs.track.lineno=246;
			$method = $pyjs__bind_method2('reset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'b06a9419b9e935325b52a2a9ff2b8f61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:246};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=246;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$pyjs.track.lineno=251;
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
					if (self.prototype.__md5__ !== 'b06a9419b9e935325b52a2a9ff2b8f61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:251};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=251;
				$pyjs.track.lineno=263;
				$pyjs.track.lineno=263;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple'](['', $constant_int_0]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$pyjs.track.lineno=265;
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
					if (self.prototype.__md5__ !== 'b06a9419b9e935325b52a2a9ff2b8f61') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:265};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=265;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			$pyjs.track.lineno=224;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('IncrementalDecoder', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=273;
		$m['BufferedIncrementalDecoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'codecs';
			$cls_definition.__md5__ = '24770d0d7d6d34c1ed275aceaccf3e16';
			$pyjs.track.lineno=279;
			$method = $pyjs__bind_method2('__init__', function(errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					errors = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[3][1];

				$pyjs.track={module:'codecs', lineno:279};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=279;
				$pyjs.track.lineno=280;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['IncrementalDecoder']['__init__'](self, errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.track.lineno=281;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buffer', '') : $p['setattr'](self, 'buffer', ''); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=283;
			$method = $pyjs__bind_method2('_buffer_decode', function(input, errors, $$final) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					errors = arguments[2];
					$$final = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$final;
				$pyjs.track={module:'codecs', lineno:283};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=283;
				$pyjs.track.lineno=286;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['input'],['errors'],['$$final']]);
			$cls_definition['_buffer_decode'] = $method;
			$pyjs.track.lineno=288;
			$method = $pyjs__bind_method2('decode', function(input, $$final) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					$$final = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$final == 'undefined') $$final=arguments.callee.__args__[4][1];
				var consumed,$add3,result,$add4,data,$$final;
				$pyjs.track={module:'codecs', lineno:288};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=288;
				$pyjs.track.lineno=290;
				data = $p['__op_add']($add3=$p['getattr'](self, 'buffer'),$add4=input);
				$pyjs.track.lineno=291;
				var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return self['_buffer_decode'](data, $p['getattr'](self, 'errors'), $$final);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				result = $tupleassign2[0];
				consumed = $tupleassign2[1];
				$pyjs.track.lineno=293;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buffer', $p['__getslice'](data, consumed, null)) : $p['setattr'](self, 'buffer', $p['__getslice'](data, consumed, null)); 
				$pyjs.track.lineno=294;
				$pyjs.track.lineno=294;
				var $pyjs__ret = result;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['input'],['$$final', false]]);
			$cls_definition['decode'] = $method;
			$pyjs.track.lineno=296;
			$method = $pyjs__bind_method2('reset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:296};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=296;
				$pyjs.track.lineno=297;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['IncrementalDecoder']['reset'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs.track.lineno=298;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buffer', '') : $p['setattr'](self, 'buffer', ''); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$pyjs.track.lineno=300;
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
					if (self.prototype.__md5__ !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:300};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=300;
				$pyjs.track.lineno=302;
				$pyjs.track.lineno=302;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([$p['getattr'](self, 'buffer'), $constant_int_0]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$pyjs.track.lineno=304;
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
					if (self.prototype.__md5__ !== '24770d0d7d6d34c1ed275aceaccf3e16') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:304};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=304;
				$pyjs.track.lineno=306;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buffer', state.__getitem__($constant_int_0)) : $p['setattr'](self, 'buffer', state.__getitem__($constant_int_0)); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			$pyjs.track.lineno=273;
			var $bases = new Array($m['IncrementalDecoder']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('BufferedIncrementalDecoder', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=315;
		$m['StreamWriter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'codecs';
			$cls_definition.__md5__ = '361db611cdeb5b0d170056a88981911f';
			$pyjs.track.lineno=317;
			$method = $pyjs__bind_method2('__init__', function(stream, errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					stream = arguments[1];
					errors = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[4][1];

				$pyjs.track={module:'codecs', lineno:317};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=317;
				$pyjs.track.lineno=339;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stream', stream) : $p['setattr'](self, 'stream', stream); 
				$pyjs.track.lineno=340;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('errors', errors) : $p['setattr'](self, 'errors', errors); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['stream'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=342;
			$method = $pyjs__bind_method2('write', function(object) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					object = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data,consumed;
				$pyjs.track={module:'codecs', lineno:342};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=342;
				$pyjs.track.lineno=346;
				var $tupleassign3 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return self['encode'](object, $p['getattr'](self, 'errors'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				data = $tupleassign3[0];
				consumed = $tupleassign3[1];
				$pyjs.track.lineno=347;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['stream']['write'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['object']]);
			$cls_definition['write'] = $method;
			$pyjs.track.lineno=349;
			$method = $pyjs__bind_method2('writelines', function(list) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					list = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:349};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=349;
				$pyjs.track.lineno=354;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['write']((function(){try{try{$pyjs.in_try_except += 1;
				return ''['join'](list);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['list']]);
			$cls_definition['writelines'] = $method;
			$pyjs.track.lineno=356;
			$method = $pyjs__bind_method2('reset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:356};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=356;
				$pyjs.track.lineno=366;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$pyjs.track.lineno=368;
			$method = $pyjs__bind_method2('seek', function(offset, whence) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					whence = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof whence == 'undefined') whence=arguments.callee.__args__[4][1];
				var $and1,$and2;
				$pyjs.track={module:'codecs', lineno:368};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=368;
				$pyjs.track.lineno=369;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['stream']['seek'](offset, whence);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs.track.lineno=370;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and1=$p['op_eq'](whence, $constant_int_0))?$p['op_eq'](offset, $constant_int_0):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
					$pyjs.track.lineno=371;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['reset']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['offset'],['whence', $constant_int_0]]);
			$cls_definition['seek'] = $method;
			$pyjs.track.lineno=373;
			$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					getattr = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof getattr == 'undefined') getattr=arguments.callee.__args__[4][1];

				$pyjs.track={module:'codecs', lineno:373};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=373;
				$pyjs.track.lineno=378;
				$pyjs.track.lineno=378;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return getattr(getattr(self, 'stream'), name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
			$cls_definition['__getattr__'] = $method;
			$pyjs.track.lineno=380;
			$method = $pyjs__bind_method2('__enter__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:380};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=380;
				$pyjs.track.lineno=381;
				$pyjs.track.lineno=381;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__enter__'] = $method;
			$pyjs.track.lineno=383;
			$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					value = arguments[2];
					tb = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '361db611cdeb5b0d170056a88981911f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:383};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=383;
				$pyjs.track.lineno=384;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['stream']['close']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
			$cls_definition['__exit__'] = $method;
			$pyjs.track.lineno=315;
			var $bases = new Array($m['Codec']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StreamWriter', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=388;
		$m['StreamReader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'codecs';
			$cls_definition.__md5__ = '007769940b50633f33b3e465f886b00e';
			$pyjs.track.lineno=390;
			$method = $pyjs__bind_method2('__init__', function(stream, errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					stream = arguments[1];
					errors = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[4][1];

				$pyjs.track={module:'codecs', lineno:390};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=390;
				$pyjs.track.lineno=408;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stream', stream) : $p['setattr'](self, 'stream', stream); 
				$pyjs.track.lineno=409;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('errors', errors) : $p['setattr'](self, 'errors', errors); 
				$pyjs.track.lineno=410;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('bytebuffer', '') : $p['setattr'](self, 'bytebuffer', ''); 
				$pyjs.track.lineno=413;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('charbuffer', '') : $p['setattr'](self, 'charbuffer', ''); 
				$pyjs.track.lineno=414;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('linebuffer', null) : $p['setattr'](self, 'linebuffer', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['stream'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=416;
			$method = $pyjs__bind_method2('decode', function(input, errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					input = arguments[1];
					errors = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[4][1];

				$pyjs.track={module:'codecs', lineno:416};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=416;
				$pyjs.track.lineno=417;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['NotImplementedError']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['input'],['errors', 'strict']]);
			$cls_definition['decode'] = $method;
			$pyjs.track.lineno=419;
			$method = $pyjs__bind_method2('read', function(size, chars, firstline) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					chars = arguments[2];
					firstline = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments.callee.__args__[3][1];
				if (typeof chars == 'undefined') chars=arguments.callee.__args__[4][1];
				if (typeof firstline == 'undefined') firstline=arguments.callee.__args__[5][1];
				var result,decodedbytes,lines,$pyjs_try_err,$add6,$add7,$add5,newchars,$add8,exc,data,newdata;
				$pyjs.track={module:'codecs', lineno:419};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=419;
				$pyjs.track.lineno=448;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](self, 'linebuffer'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
					$pyjs.track.lineno=449;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('charbuffer', (function(){try{try{$pyjs.in_try_except += 1;
					return ''['join']($p['getattr'](self, 'linebuffer'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) : $p['setattr'](self, 'charbuffer', (function(){try{try{$pyjs.in_try_except += 1;
					return ''['join']($p['getattr'](self, 'linebuffer'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()); 
					$pyjs.track.lineno=450;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('linebuffer', null) : $p['setattr'](self, 'linebuffer', null); 
				}
				$pyjs.track.lineno=453;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
					$pyjs.track.lineno=455;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp'](chars, $constant_int_0) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
						$pyjs.track.lineno=456;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](($p['cmp'](size, $constant_int_0) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
							$pyjs.track.lineno=457;
							if ((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool']($p['getattr'](self, 'charbuffer'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
								$pyjs.track.lineno=458;
								break;
							}
						}
						else if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](((($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['len']($p['getattr'](self, 'charbuffer'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})(), size))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
							$pyjs.track.lineno=460;
							break;
						}
					}
					else {
						$pyjs.track.lineno=462;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](((($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['len']($p['getattr'](self, 'charbuffer'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})(), chars))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
							$pyjs.track.lineno=463;
							break;
						}
					}
					$pyjs.track.lineno=465;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp'](size, $constant_int_0) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
						$pyjs.track.lineno=466;
						newdata = (function(){try{try{$pyjs.in_try_except += 1;
						return self['stream']['read']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
					}
					else {
						$pyjs.track.lineno=468;
						newdata = (function(){try{try{$pyjs.in_try_except += 1;
						return self['stream']['read'](size);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
					}
					$pyjs.track.lineno=470;
					data = $p['__op_add']($add5=$p['getattr'](self, 'bytebuffer'),$add6=newdata);
					$pyjs.track.lineno=471;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						try {
							$pyjs.in_try_except += 1;
							$pyjs.track.lineno=472;
							var $tupleassign4 = (function(){try{try{$pyjs.in_try_except += 1;
							return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
							return self['decode'](data, $p['getattr'](self, 'errors'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
							newchars = $tupleassign4[0];
							decodedbytes = $tupleassign4[1];
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
						$pyjs.track.module='codecs';
						if (($pyjs_try_err_name == (typeof UnicodeDecodeError == "undefined"?$m.UnicodeDecodeError:UnicodeDecodeError).__name__)||$p['_isinstance']($pyjs_try_err,(typeof UnicodeDecodeError == "undefined"?$m.UnicodeDecodeError:UnicodeDecodeError))) {
							exc = $pyjs_try_err;
							$pyjs.track.lineno=474;
							if ((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool'](firstline);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
								$pyjs.track.lineno=475;
								var $tupleassign5 = (function(){try{try{$pyjs.in_try_except += 1;
								return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
								return self['decode']($p['__getslice'](data, 0, $p['getattr'](exc, 'start')), $p['getattr'](self, 'errors'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
								newchars = $tupleassign5[0];
								decodedbytes = $tupleassign5[1];
								$pyjs.track.lineno=476;
								lines = (function(){try{try{$pyjs.in_try_except += 1;
								return newchars['splitlines'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
								$pyjs.track.lineno=477;
								if ((function(){try{try{$pyjs.in_try_except += 1;
									return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
								return $p['len'](lines);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})(), $constant_int_1) < 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
									$pyjs.track.lineno=478;
									$pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__;
									$pyjs.__last_exception_stack__ = null;
									throw ($pyjs.__last_exception__?
										$pyjs.__last_exception__.error:
										$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
								}
							}
							else {
								$pyjs.track.lineno=480;
								$pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__;
								$pyjs.__last_exception_stack__ = null;
								throw ($pyjs.__last_exception__?
									$pyjs.__last_exception__.error:
									$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
							}
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.track.lineno=482;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('bytebuffer', $p['__getslice'](data, decodedbytes, null)) : $p['setattr'](self, 'bytebuffer', $p['__getslice'](data, decodedbytes, null)); 
					$pyjs.track.lineno=484;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('charbuffer', $p['__op_add']($add7=$p['getattr'](self, 'charbuffer'),$add8=newchars)) : $p['setattr'](self, 'charbuffer', $p['__op_add']($add7=$p['getattr'](self, 'charbuffer'),$add8=newchars)); 
					$pyjs.track.lineno=486;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool'](newdata));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
						$pyjs.track.lineno=487;
						break;
					}
				}
				$pyjs.track.lineno=488;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp'](chars, $constant_int_0) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
					$pyjs.track.lineno=490;
					result = $p['getattr'](self, 'charbuffer');
					$pyjs.track.lineno=491;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('charbuffer', '') : $p['setattr'](self, 'charbuffer', ''); 
				}
				else {
					$pyjs.track.lineno=494;
					result = $p['__getslice']($p['getattr'](self, 'charbuffer'), 0, chars);
					$pyjs.track.lineno=495;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('charbuffer', $p['__getslice']($p['getattr'](self, 'charbuffer'), chars, null)) : $p['setattr'](self, 'charbuffer', $p['__getslice']($p['getattr'](self, 'charbuffer'), chars, null)); 
				}
				$pyjs.track.lineno=496;
				$pyjs.track.lineno=496;
				var $pyjs__ret = result;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['size', (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))],['chars', (typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))],['firstline', false]]);
			$cls_definition['read'] = $method;
			$pyjs.track.lineno=498;
			$method = $pyjs__bind_method2('readline', function(size, keepends) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					keepends = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments.callee.__args__[3][1];
				if (typeof keepends == 'undefined') keepends=arguments.callee.__args__[4][1];
				var $augexpr1,readsize,line0withend,$add18,$or5,$or7,$or6,$and3,$and4,$or8,$augsub1,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,line,data,$mul2,$mul1,line0withoutend,lines,$add9;
				$pyjs.track={module:'codecs', lineno:498};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=498;
				$pyjs.track.lineno=509;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](self, 'linebuffer'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
					$pyjs.track.lineno=510;
					line = $p['getattr'](self, 'linebuffer').__getitem__($constant_int_0);
					$pyjs.track.lineno=511;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, 'linebuffer').__delitem__($constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
					$pyjs.track.lineno=512;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['len']($p['getattr'](self, 'linebuffer'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})(), $constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
						$pyjs.track.lineno=515;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('charbuffer', $p['getattr'](self, 'linebuffer').__getitem__($constant_int_0)) : $p['setattr'](self, 'charbuffer', $p['getattr'](self, 'linebuffer').__getitem__($constant_int_0)); 
						$pyjs.track.lineno=516;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('linebuffer', null) : $p['setattr'](self, 'linebuffer', null); 
					}
					$pyjs.track.lineno=517;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool'](keepends));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
						$pyjs.track.lineno=518;
						line = (function(){try{try{$pyjs.in_try_except += 1;
						return line['splitlines'](false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})().__getitem__($constant_int_0);
					}
					$pyjs.track.lineno=519;
					$pyjs.track.lineno=519;
					var $pyjs__ret = line;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=521;
				readsize = ($p['bool']($or5=size)?$or5:$constant_int_72);
				$pyjs.track.lineno=522;
				line = '';
				$pyjs.track.lineno=524;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
					$pyjs.track.lineno=525;
					data = (function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(self, 'read', null, null, [{firstline:true}, readsize]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
					$pyjs.track.lineno=526;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
						$pyjs.track.lineno=530;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
						return data['endswith']('\r');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
							$pyjs.track.lineno=531;
							data = $p['__op_add']($add9=data,$add10=(function(){try{try{$pyjs.in_try_except += 1;
							return $pyjs_kwargs_call(self, 'read', null, null, [{size:$constant_int_1, chars:$constant_int_1}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})());
						}
					}
					$pyjs.track.lineno=533;
					line = $p['__op_add']($add11=line,$add12=data);
					$pyjs.track.lineno=534;
					lines = (function(){try{try{$pyjs.in_try_except += 1;
					return line['splitlines'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
					$pyjs.track.lineno=535;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](lines);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
						$pyjs.track.lineno=536;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['len'](lines);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})(), $constant_int_1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
							$pyjs.track.lineno=539;
							line = lines.__getitem__($constant_int_0);
							$pyjs.track.lineno=540;
							(function(){try{try{$pyjs.in_try_except += 1;
							return lines.__delitem__($constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
							$pyjs.track.lineno=541;
							if ((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['len'](lines);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})(), $constant_int_1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()) {
								$pyjs.track.lineno=543;
								var $augsub1 = (typeof ($usub3=$constant_int_1)=='number'?
									-$usub3:
									$p['op_usub']($usub3));
								var $augexpr1 = lines;
								(function(){try{try{$pyjs.in_try_except += 1;
								return $augexpr1.__setitem__($augsub1, $p['__op_add']($add13=$augexpr1.__getitem__($augsub1),$add14=$p['getattr'](self, 'charbuffer')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
								$pyjs.track.lineno=544;
								self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('linebuffer', lines) : $p['setattr'](self, 'linebuffer', lines); 
								$pyjs.track.lineno=545;
								self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('charbuffer', null) : $p['setattr'](self, 'charbuffer', null); 
							}
							else {
								$pyjs.track.lineno=548;
								self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('charbuffer', $p['__op_add']($add15=lines.__getitem__($constant_int_0),$add16=$p['getattr'](self, 'charbuffer'))) : $p['setattr'](self, 'charbuffer', $p['__op_add']($add15=lines.__getitem__($constant_int_0),$add16=$p['getattr'](self, 'charbuffer'))); 
							}
							$pyjs.track.lineno=549;
							if ((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool'](!$p['bool'](keepends));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) {
								$pyjs.track.lineno=550;
								line = (function(){try{try{$pyjs.in_try_except += 1;
								return line['splitlines'](false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})().__getitem__($constant_int_0);
							}
							$pyjs.track.lineno=551;
							break;
						}
						$pyjs.track.lineno=552;
						line0withend = lines.__getitem__($constant_int_0);
						$pyjs.track.lineno=553;
						line0withoutend = (function(){try{try{$pyjs.in_try_except += 1;
						return lines.__getitem__($constant_int_0)['splitlines'](false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})().__getitem__($constant_int_0);
						$pyjs.track.lineno=554;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](!$p['op_eq'](line0withend, line0withoutend));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
							$pyjs.track.lineno=556;
							self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('charbuffer', $p['__op_add']($add17=(function(){try{try{$pyjs.in_try_except += 1;
							return ''['join']($p['__getslice'](lines, $constant_int_1, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})(),$add18=$p['getattr'](self, 'charbuffer'))) : $p['setattr'](self, 'charbuffer', $p['__op_add']($add17=(function(){try{try{$pyjs.in_try_except += 1;
							return ''['join']($p['__getslice'](lines, $constant_int_1, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})(),$add18=$p['getattr'](self, 'charbuffer'))); 
							$pyjs.track.lineno=557;
							if ((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool'](keepends);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
								$pyjs.track.lineno=558;
								line = line0withend;
							}
							else {
								$pyjs.track.lineno=560;
								line = line0withoutend;
							}
							$pyjs.track.lineno=561;
							break;
						}
					}
					$pyjs.track.lineno=563;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['bool']($or7=!$p['bool'](data))?$or7:!$p['op_is'](size, null)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()) {
						$pyjs.track.lineno=564;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](($p['bool']($and3=line)?!$p['bool'](keepends):$and3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
							$pyjs.track.lineno=565;
							line = (function(){try{try{$pyjs.in_try_except += 1;
							return line['splitlines'](false);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})().__getitem__($constant_int_0);
						}
						$pyjs.track.lineno=566;
						break;
					}
					$pyjs.track.lineno=567;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp'](readsize, $constant_int_8000) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
						$pyjs.track.lineno=568;
						readsize = (typeof ($mul1=readsize)==typeof ($mul2=$constant_int_2) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2));
					}
				}
				$pyjs.track.lineno=569;
				$pyjs.track.lineno=569;
				var $pyjs__ret = line;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['size', null],['keepends', true]]);
			$cls_definition['readline'] = $method;
			$pyjs.track.lineno=571;
			$method = $pyjs__bind_method2('readlines', function(sizehint, keepends) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					sizehint = arguments[1];
					keepends = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sizehint == 'undefined') sizehint=arguments.callee.__args__[3][1];
				if (typeof keepends == 'undefined') keepends=arguments.callee.__args__[4][1];
				var data;
				$pyjs.track={module:'codecs', lineno:571};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=571;
				$pyjs.track.lineno=583;
				data = (function(){try{try{$pyjs.in_try_except += 1;
				return self['read']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
				$pyjs.track.lineno=584;
				$pyjs.track.lineno=584;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return data['splitlines'](keepends);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sizehint', null],['keepends', true]]);
			$cls_definition['readlines'] = $method;
			$pyjs.track.lineno=586;
			$method = $pyjs__bind_method2('reset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:586};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=586;
				$pyjs.track.lineno=595;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('bytebuffer', '') : $p['setattr'](self, 'bytebuffer', ''); 
				$pyjs.track.lineno=596;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('charbuffer', '') : $p['setattr'](self, 'charbuffer', ''); 
				$pyjs.track.lineno=597;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('linebuffer', null) : $p['setattr'](self, 'linebuffer', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$pyjs.track.lineno=599;
			$method = $pyjs__bind_method2('seek', function(offset, whence) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					whence = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof whence == 'undefined') whence=arguments.callee.__args__[4][1];

				$pyjs.track={module:'codecs', lineno:599};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=599;
				$pyjs.track.lineno=604;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['stream']['seek'](offset, whence);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
				$pyjs.track.lineno=605;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['reset']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['offset'],['whence', $constant_int_0]]);
			$cls_definition['seek'] = $method;
			$pyjs.track.lineno=607;
			$method = $pyjs__bind_method2('next', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var line;
				$pyjs.track={module:'codecs', lineno:607};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=607;
				$pyjs.track.lineno=610;
				line = (function(){try{try{$pyjs.in_try_except += 1;
				return self['readline']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
				$pyjs.track.lineno=611;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](line);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) {
					$pyjs.track.lineno=612;
					$pyjs.track.lineno=612;
					var $pyjs__ret = line;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=613;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['StopIteration']);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$pyjs.track.lineno=615;
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
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:615};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=615;
				$pyjs.track.lineno=616;
				$pyjs.track.lineno=616;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=618;
			$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					getattr = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof getattr == 'undefined') getattr=arguments.callee.__args__[4][1];

				$pyjs.track={module:'codecs', lineno:618};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=618;
				$pyjs.track.lineno=623;
				$pyjs.track.lineno=623;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return getattr(getattr(self, 'stream'), name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
			$cls_definition['__getattr__'] = $method;
			$pyjs.track.lineno=625;
			$method = $pyjs__bind_method2('__enter__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:625};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=625;
				$pyjs.track.lineno=626;
				$pyjs.track.lineno=626;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__enter__'] = $method;
			$pyjs.track.lineno=628;
			$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					value = arguments[2];
					tb = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '007769940b50633f33b3e465f886b00e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:628};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=628;
				$pyjs.track.lineno=629;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['stream']['close']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
			$cls_definition['__exit__'] = $method;
			$pyjs.track.lineno=388;
			var $bases = new Array($m['Codec']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StreamReader', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=633;
		$m['StreamReaderWriter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'codecs';
			$cls_definition.__md5__ = '7c9aa5918cae9beb9bbc88966148f8bf';
			$pyjs.track.lineno=644;
			$cls_definition['encoding'] = 'unknown';
			$pyjs.track.lineno=646;
			$method = $pyjs__bind_method2('__init__', function(stream, Reader, Writer, errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 5, arguments.length+1);
				} else {
					var self = arguments[0];
					stream = arguments[1];
					Reader = arguments[2];
					Writer = arguments[3];
					errors = arguments[4];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 4 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 5, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[6][1];

				$pyjs.track={module:'codecs', lineno:646};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=646;
				$pyjs.track.lineno=659;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stream', stream) : $p['setattr'](self, 'stream', stream); 
				$pyjs.track.lineno=660;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('reader', (function(){try{try{$pyjs.in_try_except += 1;
				return Reader(stream, errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) : $p['setattr'](self, 'reader', (function(){try{try{$pyjs.in_try_except += 1;
				return Reader(stream, errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()); 
				$pyjs.track.lineno=661;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('writer', (function(){try{try{$pyjs.in_try_except += 1;
				return Writer(stream, errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) : $p['setattr'](self, 'writer', (function(){try{try{$pyjs.in_try_except += 1;
				return Writer(stream, errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()); 
				$pyjs.track.lineno=662;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('errors', errors) : $p['setattr'](self, 'errors', errors); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['stream'],['Reader'],['Writer'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=664;
			$method = $pyjs__bind_method2('read', function(size) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments.callee.__args__[3][1];

				$pyjs.track={module:'codecs', lineno:664};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=664;
				$pyjs.track.lineno=666;
				$pyjs.track.lineno=666;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['reader']['read'](size);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['size', (typeof ($usub4=$constant_int_1)=='number'?
				-$usub4:
				$p['op_usub']($usub4))]]);
			$cls_definition['read'] = $method;
			$pyjs.track.lineno=668;
			$method = $pyjs__bind_method2('readline', function(size) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments.callee.__args__[3][1];

				$pyjs.track={module:'codecs', lineno:668};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=668;
				$pyjs.track.lineno=670;
				$pyjs.track.lineno=670;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['reader']['readline'](size);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['size', null]]);
			$cls_definition['readline'] = $method;
			$pyjs.track.lineno=672;
			$method = $pyjs__bind_method2('readlines', function(sizehint) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sizehint = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sizehint == 'undefined') sizehint=arguments.callee.__args__[3][1];

				$pyjs.track={module:'codecs', lineno:672};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=672;
				$pyjs.track.lineno=674;
				$pyjs.track.lineno=674;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['reader']['readlines'](sizehint);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sizehint', null]]);
			$cls_definition['readlines'] = $method;
			$pyjs.track.lineno=676;
			$method = $pyjs__bind_method2('next', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:676};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=676;
				$pyjs.track.lineno=679;
				$pyjs.track.lineno=679;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['reader']['next']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$pyjs.track.lineno=681;
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
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:681};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=681;
				$pyjs.track.lineno=682;
				$pyjs.track.lineno=682;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=684;
			$method = $pyjs__bind_method2('write', function(data) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:684};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=684;
				$pyjs.track.lineno=686;
				$pyjs.track.lineno=686;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['writer']['write'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['write'] = $method;
			$pyjs.track.lineno=688;
			$method = $pyjs__bind_method2('writelines', function(list) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					list = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:688};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=688;
				$pyjs.track.lineno=690;
				$pyjs.track.lineno=690;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['writer']['writelines'](list);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['list']]);
			$cls_definition['writelines'] = $method;
			$pyjs.track.lineno=692;
			$method = $pyjs__bind_method2('reset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:692};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=692;
				$pyjs.track.lineno=694;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['reader']['reset']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
				$pyjs.track.lineno=695;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['writer']['reset']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$pyjs.track.lineno=697;
			$method = $pyjs__bind_method2('seek', function(offset, whence) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					whence = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof whence == 'undefined') whence=arguments.callee.__args__[4][1];
				var $and6,$and5;
				$pyjs.track={module:'codecs', lineno:697};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=697;
				$pyjs.track.lineno=698;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['stream']['seek'](offset, whence);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
				$pyjs.track.lineno=699;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['reader']['reset']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				$pyjs.track.lineno=700;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and5=$p['op_eq'](whence, $constant_int_0))?$p['op_eq'](offset, $constant_int_0):$and5));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) {
					$pyjs.track.lineno=701;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['writer']['reset']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['offset'],['whence', $constant_int_0]]);
			$cls_definition['seek'] = $method;
			$pyjs.track.lineno=703;
			$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					getattr = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof getattr == 'undefined') getattr=arguments.callee.__args__[4][1];

				$pyjs.track={module:'codecs', lineno:703};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=703;
				$pyjs.track.lineno=708;
				$pyjs.track.lineno=708;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return getattr(getattr(self, 'stream'), name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
			$cls_definition['__getattr__'] = $method;
			$pyjs.track.lineno=712;
			$method = $pyjs__bind_method2('__enter__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:712};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=712;
				$pyjs.track.lineno=713;
				$pyjs.track.lineno=713;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__enter__'] = $method;
			$pyjs.track.lineno=715;
			$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					value = arguments[2];
					tb = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7c9aa5918cae9beb9bbc88966148f8bf') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:715};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=715;
				$pyjs.track.lineno=716;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['stream']['close']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
			$cls_definition['__exit__'] = $method;
			$pyjs.track.lineno=633;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StreamReaderWriter', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=720;
		$m['StreamRecoder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'codecs';
			$cls_definition.__md5__ = '641a6832a68e697d4532d93e8edc6c91';
			$pyjs.track.lineno=738;
			$cls_definition['data_encoding'] = 'unknown';
			$pyjs.track.lineno=739;
			$cls_definition['file_encoding'] = 'unknown';
			$pyjs.track.lineno=741;
			$method = $pyjs__bind_method2('__init__', function(stream, encode, decode, Reader, Writer, errors) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 5 || arguments.length > 6)) $pyjs__exception_func_param(arguments.callee.__name__, 6, 7, arguments.length+1);
				} else {
					var self = arguments[0];
					stream = arguments[1];
					encode = arguments[2];
					decode = arguments[3];
					Reader = arguments[4];
					Writer = arguments[5];
					errors = arguments[6];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 6 || arguments.length > 7)) $pyjs__exception_func_param(arguments.callee.__name__, 6, 7, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof errors == 'undefined') errors=arguments.callee.__args__[8][1];

				$pyjs.track={module:'codecs', lineno:741};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=741;
				$pyjs.track.lineno=767;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stream', stream) : $p['setattr'](self, 'stream', stream); 
				$pyjs.track.lineno=768;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('encode', encode) : $p['setattr'](self, 'encode', encode); 
				$pyjs.track.lineno=769;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('decode', decode) : $p['setattr'](self, 'decode', decode); 
				$pyjs.track.lineno=770;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('reader', (function(){try{try{$pyjs.in_try_except += 1;
				return Reader(stream, errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) : $p['setattr'](self, 'reader', (function(){try{try{$pyjs.in_try_except += 1;
				return Reader(stream, errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()); 
				$pyjs.track.lineno=771;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('writer', (function(){try{try{$pyjs.in_try_except += 1;
				return Writer(stream, errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()) : $p['setattr'](self, 'writer', (function(){try{try{$pyjs.in_try_except += 1;
				return Writer(stream, errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()); 
				$pyjs.track.lineno=772;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('errors', errors) : $p['setattr'](self, 'errors', errors); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['stream'],['encode'],['decode'],['Reader'],['Writer'],['errors', 'strict']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=774;
			$method = $pyjs__bind_method2('read', function(size) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments.callee.__args__[3][1];
				var bytesencoded,data;
				$pyjs.track={module:'codecs', lineno:774};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=774;
				$pyjs.track.lineno=776;
				data = (function(){try{try{$pyjs.in_try_except += 1;
				return self['reader']['read'](size);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
				$pyjs.track.lineno=777;
				var $tupleassign6 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return self['encode'](data, $p['getattr'](self, 'errors'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
				data = $tupleassign6[0];
				bytesencoded = $tupleassign6[1];
				$pyjs.track.lineno=778;
				$pyjs.track.lineno=778;
				var $pyjs__ret = data;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['size', (typeof ($usub5=$constant_int_1)=='number'?
				-$usub5:
				$p['op_usub']($usub5))]]);
			$cls_definition['read'] = $method;
			$pyjs.track.lineno=780;
			$method = $pyjs__bind_method2('readline', function(size) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments.callee.__args__[3][1];
				var bytesencoded,data;
				$pyjs.track={module:'codecs', lineno:780};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=780;
				$pyjs.track.lineno=782;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](size, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()) {
					$pyjs.track.lineno=783;
					data = (function(){try{try{$pyjs.in_try_except += 1;
					return self['reader']['readline']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
				}
				else {
					$pyjs.track.lineno=785;
					data = (function(){try{try{$pyjs.in_try_except += 1;
					return self['reader']['readline'](size);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
				}
				$pyjs.track.lineno=786;
				var $tupleassign7 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return self['encode'](data, $p['getattr'](self, 'errors'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
				data = $tupleassign7[0];
				bytesencoded = $tupleassign7[1];
				$pyjs.track.lineno=787;
				$pyjs.track.lineno=787;
				var $pyjs__ret = data;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['size', null]]);
			$cls_definition['readline'] = $method;
			$pyjs.track.lineno=789;
			$method = $pyjs__bind_method2('readlines', function(sizehint) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					sizehint = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sizehint == 'undefined') sizehint=arguments.callee.__args__[3][1];
				var data,bytesencoded;
				$pyjs.track={module:'codecs', lineno:789};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=789;
				$pyjs.track.lineno=791;
				data = (function(){try{try{$pyjs.in_try_except += 1;
				return self['reader']['read']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
				$pyjs.track.lineno=792;
				var $tupleassign8 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return self['encode'](data, $p['getattr'](self, 'errors'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
				data = $tupleassign8[0];
				bytesencoded = $tupleassign8[1];
				$pyjs.track.lineno=793;
				$pyjs.track.lineno=793;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return data['splitlines']($constant_int_1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sizehint', null]]);
			$cls_definition['readlines'] = $method;
			$pyjs.track.lineno=795;
			$method = $pyjs__bind_method2('next', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var bytesencoded,data;
				$pyjs.track={module:'codecs', lineno:795};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=795;
				$pyjs.track.lineno=798;
				data = (function(){try{try{$pyjs.in_try_except += 1;
				return self['reader']['next']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
				$pyjs.track.lineno=799;
				var $tupleassign9 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return self['encode'](data, $p['getattr'](self, 'errors'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
				data = $tupleassign9[0];
				bytesencoded = $tupleassign9[1];
				$pyjs.track.lineno=800;
				$pyjs.track.lineno=800;
				var $pyjs__ret = data;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$pyjs.track.lineno=802;
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
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:802};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=802;
				$pyjs.track.lineno=803;
				$pyjs.track.lineno=803;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=805;
			$method = $pyjs__bind_method2('write', function(data) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var bytesdecoded;
				$pyjs.track={module:'codecs', lineno:805};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=805;
				$pyjs.track.lineno=807;
				var $tupleassign10 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return self['decode'](data, $p['getattr'](self, 'errors'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
				data = $tupleassign10[0];
				bytesdecoded = $tupleassign10[1];
				$pyjs.track.lineno=808;
				$pyjs.track.lineno=808;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['writer']['write'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['write'] = $method;
			$pyjs.track.lineno=810;
			$method = $pyjs__bind_method2('writelines', function(list) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					list = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data,bytesdecoded;
				$pyjs.track={module:'codecs', lineno:810};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=810;
				$pyjs.track.lineno=812;
				data = (function(){try{try{$pyjs.in_try_except += 1;
				return ''['join'](list);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
				$pyjs.track.lineno=813;
				var $tupleassign11 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return self['decode'](data, $p['getattr'](self, 'errors'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
				data = $tupleassign11[0];
				bytesdecoded = $tupleassign11[1];
				$pyjs.track.lineno=814;
				$pyjs.track.lineno=814;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['writer']['write'](data);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['list']]);
			$cls_definition['writelines'] = $method;
			$pyjs.track.lineno=816;
			$method = $pyjs__bind_method2('reset', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:816};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=816;
				$pyjs.track.lineno=818;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['reader']['reset']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
				$pyjs.track.lineno=819;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['writer']['reset']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reset'] = $method;
			$pyjs.track.lineno=821;
			$method = $pyjs__bind_method2('__getattr__', function(name, getattr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					getattr = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof getattr == 'undefined') getattr=arguments.callee.__args__[4][1];

				$pyjs.track={module:'codecs', lineno:821};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=821;
				$pyjs.track.lineno=826;
				$pyjs.track.lineno=826;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return getattr(getattr(self, 'stream'), name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['name'],['getattr', $p['getattr']]]);
			$cls_definition['__getattr__'] = $method;
			$pyjs.track.lineno=828;
			$method = $pyjs__bind_method2('__enter__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:828};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=828;
				$pyjs.track.lineno=829;
				$pyjs.track.lineno=829;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__enter__'] = $method;
			$pyjs.track.lineno=831;
			$method = $pyjs__bind_method2('__exit__', function(type, value, tb) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					value = arguments[2];
					tb = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '641a6832a68e697d4532d93e8edc6c91') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'codecs', lineno:831};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=831;
				$pyjs.track.lineno=832;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['stream']['close']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['type'],['value'],['tb']]);
			$cls_definition['__exit__'] = $method;
			$pyjs.track.lineno=720;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StreamRecoder', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=836;
		$m['open'] = function(filename, mode, encoding, errors, buffering) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 5, arguments.length);
			if (typeof mode == 'undefined') mode=arguments.callee.__args__[3][1];
			if (typeof encoding == 'undefined') encoding=arguments.callee.__args__[4][1];
			if (typeof errors == 'undefined') errors=arguments.callee.__args__[5][1];
			if (typeof buffering == 'undefined') buffering=arguments.callee.__args__[6][1];
			var info,$add21,$add20,$add22,file,$add19,srw;
			$pyjs.track={module:'codecs',lineno:836};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=836;
			$pyjs.track.lineno=867;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_is'](encoding, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()) {
				$pyjs.track.lineno=868;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](mode.__contains__('U'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
					$pyjs.track.lineno=870;
					mode = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return mode['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})()['$$replace']('U', '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
					$pyjs.track.lineno=871;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!(function(){try{try{$pyjs.in_try_except += 1;
					return $p['set']('rwa');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})().__contains__($p['__getslice'](mode, 0, $constant_int_1)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()) {
						$pyjs.track.lineno=872;
						mode = $p['__op_add']($add19='r',$add20=mode);
					}
				}
				$pyjs.track.lineno=873;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!mode.__contains__('b'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})()) {
					$pyjs.track.lineno=875;
					mode = $p['__op_add']($add21=mode,$add22='b');
				}
			}
			$pyjs.track.lineno=876;
			file = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['__builtin__']['open'](filename, mode, buffering);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
			$pyjs.track.lineno=877;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](encoding, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()) {
				$pyjs.track.lineno=878;
				$pyjs.track.lineno=878;
				var $pyjs__ret = file;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=879;
			info = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof lookup == "undefined"?$m.lookup:lookup)(encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
			$pyjs.track.lineno=880;
			srw = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['StreamReaderWriter'](file, $p['getattr'](info, 'streamreader'), $p['getattr'](info, 'streamwriter'), errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
			$pyjs.track.lineno=882;
			srw.__is_instance__ && typeof srw.__setattr__ == 'function' ? srw.__setattr__('encoding', encoding) : $p['setattr'](srw, 'encoding', encoding); 
			$pyjs.track.lineno=883;
			$pyjs.track.lineno=883;
			var $pyjs__ret = srw;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['open'].__name__ = 'open';

		$m['open'].__bind_type__ = 0;
		$m['open'].__args__ = [null,null,['filename'],['mode', 'rb'],['encoding', null],['errors', 'strict'],['buffering', $constant_int_1]];
		$pyjs.track.lineno=885;
		$m['EncodedFile'] = function(file, data_encoding, file_encoding, errors) {
			if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 4, arguments.length);
			if (typeof file_encoding == 'undefined') file_encoding=arguments.callee.__args__[4][1];
			if (typeof errors == 'undefined') errors=arguments.callee.__args__[5][1];
			var sr,file_info,data_info;
			$pyjs.track={module:'codecs',lineno:885};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=885;
			$pyjs.track.lineno=910;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](file_encoding, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) {
				$pyjs.track.lineno=911;
				file_encoding = data_encoding;
			}
			$pyjs.track.lineno=912;
			data_info = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof lookup == "undefined"?$m.lookup:lookup)(data_encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
			$pyjs.track.lineno=913;
			file_info = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof lookup == "undefined"?$m.lookup:lookup)(file_encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
			$pyjs.track.lineno=914;
			sr = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['StreamRecoder'](file, $p['getattr'](data_info, 'encode'), $p['getattr'](data_info, 'decode'), $p['getattr'](file_info, 'streamreader'), $p['getattr'](file_info, 'streamwriter'), errors);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
			$pyjs.track.lineno=917;
			sr.__is_instance__ && typeof sr.__setattr__ == 'function' ? sr.__setattr__('data_encoding', data_encoding) : $p['setattr'](sr, 'data_encoding', data_encoding); 
			$pyjs.track.lineno=918;
			sr.__is_instance__ && typeof sr.__setattr__ == 'function' ? sr.__setattr__('file_encoding', file_encoding) : $p['setattr'](sr, 'file_encoding', file_encoding); 
			$pyjs.track.lineno=919;
			$pyjs.track.lineno=919;
			var $pyjs__ret = sr;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['EncodedFile'].__name__ = 'EncodedFile';

		$m['EncodedFile'].__bind_type__ = 0;
		$m['EncodedFile'].__args__ = [null,null,['file'],['data_encoding'],['file_encoding', null],['errors', 'strict']];
		$pyjs.track.lineno=923;
		$m['getencoder'] = function(encoding) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'codecs',lineno:923};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=923;
			$pyjs.track.lineno=931;
			$pyjs.track.lineno=931;
			var $pyjs__ret = $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof lookup == "undefined"?$m.lookup:lookup)(encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})(), 'encode');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getencoder'].__name__ = 'getencoder';

		$m['getencoder'].__bind_type__ = 0;
		$m['getencoder'].__args__ = [null,null,['encoding']];
		$pyjs.track.lineno=933;
		$m['getdecoder'] = function(encoding) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'codecs',lineno:933};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=933;
			$pyjs.track.lineno=941;
			$pyjs.track.lineno=941;
			var $pyjs__ret = $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof lookup == "undefined"?$m.lookup:lookup)(encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})(), 'decode');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getdecoder'].__name__ = 'getdecoder';

		$m['getdecoder'].__bind_type__ = 0;
		$m['getdecoder'].__args__ = [null,null,['encoding']];
		$pyjs.track.lineno=943;
		$m['getincrementalencoder'] = function(encoding) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var encoder;
			$pyjs.track={module:'codecs',lineno:943};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=943;
			$pyjs.track.lineno=952;
			encoder = $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof lookup == "undefined"?$m.lookup:lookup)(encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})(), 'incrementalencoder');
			$pyjs.track.lineno=953;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](encoder, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()) {
				$pyjs.track.lineno=954;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['LookupError'](encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})());
			}
			$pyjs.track.lineno=955;
			$pyjs.track.lineno=955;
			var $pyjs__ret = encoder;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getincrementalencoder'].__name__ = 'getincrementalencoder';

		$m['getincrementalencoder'].__bind_type__ = 0;
		$m['getincrementalencoder'].__args__ = [null,null,['encoding']];
		$pyjs.track.lineno=957;
		$m['getincrementaldecoder'] = function(encoding) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var decoder;
			$pyjs.track={module:'codecs',lineno:957};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=957;
			$pyjs.track.lineno=966;
			decoder = $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof lookup == "undefined"?$m.lookup:lookup)(encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})(), 'incrementaldecoder');
			$pyjs.track.lineno=967;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](decoder, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) {
				$pyjs.track.lineno=968;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['LookupError'](encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})());
			}
			$pyjs.track.lineno=969;
			$pyjs.track.lineno=969;
			var $pyjs__ret = decoder;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getincrementaldecoder'].__name__ = 'getincrementaldecoder';

		$m['getincrementaldecoder'].__bind_type__ = 0;
		$m['getincrementaldecoder'].__args__ = [null,null,['encoding']];
		$pyjs.track.lineno=971;
		$m['getreader'] = function(encoding) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'codecs',lineno:971};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=971;
			$pyjs.track.lineno=979;
			$pyjs.track.lineno=979;
			var $pyjs__ret = $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof lookup == "undefined"?$m.lookup:lookup)(encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})(), 'streamreader');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getreader'].__name__ = 'getreader';

		$m['getreader'].__bind_type__ = 0;
		$m['getreader'].__args__ = [null,null,['encoding']];
		$pyjs.track.lineno=981;
		$m['getwriter'] = function(encoding) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'codecs',lineno:981};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=981;
			$pyjs.track.lineno=989;
			$pyjs.track.lineno=989;
			var $pyjs__ret = $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof lookup == "undefined"?$m.lookup:lookup)(encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})(), 'streamwriter');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getwriter'].__name__ = 'getwriter';

		$m['getwriter'].__bind_type__ = 0;
		$m['getwriter'].__args__ = [null,null,['encoding']];
		$pyjs.track.lineno=991;
		$m['iterencode'] = function(iterator, encoding, errors) {
			if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
			var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof errors != 'undefined') {
					if (errors !== null && typeof errors['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = errors;
						errors = arguments[3];
					}
				} else 				if (typeof encoding != 'undefined') {
					if (encoding !== null && typeof encoding['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = encoding;
						encoding = arguments[3];
					}
				} else 				if (typeof iterator != 'undefined') {
					if (iterator !== null && typeof iterator['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = iterator;
						iterator = arguments[3];
					}
				} else {
				}
			}
			if (typeof errors == 'undefined') errors=arguments.callee.__args__[4][1];
			var $iter2_iter,$iter1_nextval,$iter1_type,$pyjs__trackstack_size_1,$iter2_idx,$iter1_iter,$iter2_type,output,$iter2_nextval,$iter1_array,input,encoder,$iter2_array,$iter1_idx;
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
			$pyjs.track.module='codecs';
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
			$pyjs.track.module='codecs';
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
			$pyjs.track.module='codecs';
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
			$pyjs.track.module='codecs';
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
			
				$pyjs.track={module:'codecs',lineno:991};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=991;
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$pyjs.track.lineno=1000;
					encoder = (function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(null, (function(){try{try{$pyjs.in_try_except += 1;
					return $m['getincrementalencoder'](encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})(), null, kwargs, [{}, errors]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
					$pyjs.track.lineno=1001;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return iterator;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							input = $iter2_nextval.$nextval;
							$pyjs.track.lineno=1002;
							output = (function(){try{try{$pyjs.in_try_except += 1;
							return encoder['encode'](input);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
							$pyjs.track.lineno=1003;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool'](output);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=1004;
									$pyjs.track.lineno=1004;
									$yield_value = output;
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
					$pyjs.track.module='codecs';
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$pyjs.track.lineno=1005;
					output = (function(){try{try{$pyjs.in_try_except += 1;
					return encoder['encode']('', true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
					$pyjs.track.lineno=1006;
					$generator_state[2] = 0;
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](output);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})()))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
							$pyjs.track.lineno=1007;
							$pyjs.track.lineno=1007;
							$yield_value = output;
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
					$generator_state[1]=0;
					$generator_state[0]=5;
				}
				if ($generator_state[0] == 5) {
				}

				return;
			};
			return $generator;
		};
		$m['iterencode'].__name__ = 'iterencode';

		$m['iterencode'].__bind_type__ = 0;
		$m['iterencode'].__args__ = [null,['kwargs'],['iterator'],['encoding'],['errors', 'strict']];
		$pyjs.track.lineno=1009;
		$m['iterdecode'] = function(iterator, encoding, errors) {
			if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
			var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof errors != 'undefined') {
					if (errors !== null && typeof errors['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = errors;
						errors = arguments[3];
					}
				} else 				if (typeof encoding != 'undefined') {
					if (encoding !== null && typeof encoding['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = encoding;
						encoding = arguments[3];
					}
				} else 				if (typeof iterator != 'undefined') {
					if (iterator !== null && typeof iterator['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = iterator;
						iterator = arguments[3];
					}
				} else {
				}
			}
			if (typeof errors == 'undefined') errors=arguments.callee.__args__[4][1];
			var $iter3_type,$iter4_iter,$iter3_nextval,decoder,output,$iter4_idx,$iter3_idx,$iter3_iter,$iter4_type,$iter4_array,input,$iter4_nextval,$pyjs__trackstack_size_1,$iter3_array;
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
			$pyjs.track.module='codecs';
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
			$pyjs.track.module='codecs';
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
			$pyjs.track.module='codecs';
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
			$pyjs.track.module='codecs';
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
			
				$pyjs.track={module:'codecs',lineno:1009};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='codecs';
				$pyjs.track.lineno=1009;
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$pyjs.track.lineno=1018;
					decoder = (function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(null, (function(){try{try{$pyjs.in_try_except += 1;
					return $m['getincrementaldecoder'](encoding);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})(), null, kwargs, [{}, errors]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
					$pyjs.track.lineno=1019;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return iterator;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							input = $iter4_nextval.$nextval;
							$pyjs.track.lineno=1020;
							output = (function(){try{try{$pyjs.in_try_except += 1;
							return decoder['decode'](input);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
							$pyjs.track.lineno=1021;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&((function(){try{try{$pyjs.in_try_except += 1;
								return $p['bool'](output);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})()))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
									$pyjs.track.lineno=1022;
									$pyjs.track.lineno=1022;
									$yield_value = output;
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
					$pyjs.track.module='codecs';
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$pyjs.track.lineno=1023;
					output = (function(){try{try{$pyjs.in_try_except += 1;
					return decoder['decode']('', true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
					$pyjs.track.lineno=1024;
					$generator_state[2] = 0;
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](output);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})()))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
							$pyjs.track.lineno=1025;
							$pyjs.track.lineno=1025;
							$yield_value = output;
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
					$generator_state[1]=0;
					$generator_state[0]=5;
				}
				if ($generator_state[0] == 5) {
				}

				return;
			};
			return $generator;
		};
		$m['iterdecode'].__name__ = 'iterdecode';

		$m['iterdecode'].__bind_type__ = 0;
		$m['iterdecode'].__args__ = [null,['kwargs'],['iterator'],['encoding'],['errors', 'strict']];
		$pyjs.track.lineno=1029;
		$m['make_identity_dict'] = function(rng) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter5_nextval,$iter5_idx,i,res,$pyjs__trackstack_size_1,$iter5_iter,$iter5_array,$iter5_type;
			$pyjs.track={module:'codecs',lineno:1029};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=1029;
			$pyjs.track.lineno=1037;
			res = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})();
			$pyjs.track.lineno=1038;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter5_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return rng;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				i = $iter5_nextval.$nextval;
				$pyjs.track.lineno=1039;
				(function(){try{try{$pyjs.in_try_except += 1;
				return res.__setitem__(i, i);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=1040;
			$pyjs.track.lineno=1040;
			var $pyjs__ret = res;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['make_identity_dict'].__name__ = 'make_identity_dict';

		$m['make_identity_dict'].__bind_type__ = 0;
		$m['make_identity_dict'].__args__ = [null,null,['rng']];
		$pyjs.track.lineno=1042;
		$m['make_encoding_map'] = function(decoding_map) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter6_idx,$iter6_type,k,$pyjs__trackstack_size_1,m,$iter6_array,v,$iter6_iter,$iter6_nextval;
			$pyjs.track={module:'codecs',lineno:1042};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=1042;
			$pyjs.track.lineno=1055;
			m = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
			$pyjs.track.lineno=1056;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter6_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return decoding_map['items']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				var $tupleassign12 = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__ass_unpack']($iter6_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
				k = $tupleassign12[0];
				v = $tupleassign12[1];
				$pyjs.track.lineno=1057;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool'](m.__contains__(v)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()) {
					$pyjs.track.lineno=1058;
					(function(){try{try{$pyjs.in_try_except += 1;
					return m.__setitem__(v, k);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
				}
				else {
					$pyjs.track.lineno=1060;
					(function(){try{try{$pyjs.in_try_except += 1;
					return m.__setitem__(v, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='codecs';
			$pyjs.track.lineno=1061;
			$pyjs.track.lineno=1061;
			var $pyjs__ret = m;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['make_encoding_map'].__name__ = 'make_encoding_map';

		$m['make_encoding_map'].__bind_type__ = 0;
		$m['make_encoding_map'].__args__ = [null,null,['decoding_map']];
		$pyjs.track.lineno=1065;
		$m['strict_errors'] = null;
		$pyjs.track.lineno=1066;
		$m['ignore_errors'] = null;
		$pyjs.track.lineno=1067;
		$m['replace_errors'] = null;
		$pyjs.track.lineno=1068;
		$m['xmlcharrefreplace_errors'] = null;
		$pyjs.track.lineno=1069;
		$m['backslashreplace_errors'] = null;
		$pyjs.track.lineno=1073;
		$m['_false'] = $constant_int_0;
		$pyjs.track.lineno=1074;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($m['_false']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})()) {
			$pyjs.track.lineno=1075;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['encodings'] = $p['___import___']('encodings', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end codecs */


/* end module: codecs */


/*
PYJS_DEPS: ['__builtin__', 'sys', 'encodings']
*/
