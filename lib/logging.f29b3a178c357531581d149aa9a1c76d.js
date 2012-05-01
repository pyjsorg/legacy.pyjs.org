/* start module: logging */
$pyjs.loaded_modules['logging'] = function (__mod_name__) {
	if($pyjs.loaded_modules['logging'].__was_initialized__) return $pyjs.loaded_modules['logging'];
	var $m = $pyjs.loaded_modules["logging"];
	$m.__repr__ = function() { return "<module: logging>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'logging';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'logging.py, line 1:\n    # Copyright 2001-2007 by Vinay Sajip. All Rights Reserved.';
		$m.__track_lines__[29] = 'logging.py, line 29:\n    from __pyjamas__ import JS, debugger';
		$m.__track_lines__[30] = 'logging.py, line 30:\n    import sys, os, time';
		$m.__track_lines__[32] = 'logging.py, line 32:\n    try:';
		$m.__track_lines__[33] = 'logging.py, line 33:\n    import codecs';
		$m.__track_lines__[35] = 'logging.py, line 35:\n    codecs = None';
		$m.__track_lines__[37] = 'logging.py, line 37:\n    __author__  = "Vinay Sajip <vinay_sajip@red-dove.com>"';
		$m.__track_lines__[38] = 'logging.py, line 38:\n    __status__  = "production"';
		$m.__track_lines__[39] = 'logging.py, line 39:\n    __version__ = "0.5.0.2"';
		$m.__track_lines__[40] = 'logging.py, line 40:\n    __date__    = "16 February 2007"';
		$m.__track_lines__[50] = 'logging.py, line 50:\n    _srcfile = __file__';
		$m.__track_lines__[54] = 'logging.py, line 54:\n    def currentframe():';
		$m.__track_lines__[56] = 'logging.py, line 56:\n    try:';
		$m.__track_lines__[57] = 'logging.py, line 57:\n    raise Exception';
		$m.__track_lines__[59] = 'logging.py, line 59:\n    return sys.exc_traceback.tb_frame.f_back';
		$m.__track_lines__[61] = "logging.py, line 61:\n    if hasattr(sys, '_getframe'): currentframe = lambda: sys._getframe(3)";
		$m.__track_lines__[74] = 'logging.py, line 74:\n    _startTime = time.time()';
		$m.__track_lines__[80] = 'logging.py, line 80:\n    raiseExceptions = 1';
		$m.__track_lines__[85] = 'logging.py, line 85:\n    logThreads = 1';
		$m.__track_lines__[90] = 'logging.py, line 90:\n    logProcesses = 1';
		$m.__track_lines__[103] = 'logging.py, line 103:\n    CRITICAL = 50';
		$m.__track_lines__[104] = 'logging.py, line 104:\n    FATAL = CRITICAL';
		$m.__track_lines__[105] = 'logging.py, line 105:\n    ERROR = 40';
		$m.__track_lines__[106] = 'logging.py, line 106:\n    WARNING = 30';
		$m.__track_lines__[107] = 'logging.py, line 107:\n    WARN = WARNING';
		$m.__track_lines__[108] = 'logging.py, line 108:\n    INFO = 20';
		$m.__track_lines__[109] = 'logging.py, line 109:\n    DEBUG = 10';
		$m.__track_lines__[110] = 'logging.py, line 110:\n    NOTSET = 0';
		$m.__track_lines__[112] = 'logging.py, line 112:\n    _levelNames = {';
		$m.__track_lines__[128] = 'logging.py, line 128:\n    def getLevelName(level):';
		$m.__track_lines__[142] = 'logging.py, line 142:\n    return _levelNames.get(level, ("Level %s" % level))';
		$m.__track_lines__[144] = 'logging.py, line 144:\n    def addLevelName(level, levelName):';
		$m.__track_lines__[150] = 'logging.py, line 150:\n    _levelNames[level] = levelName';
		$m.__track_lines__[151] = 'logging.py, line 151:\n    _levelNames[levelName] = level';
		$m.__track_lines__[157] = 'logging.py, line 157:\n    class LogRecord(object):';
		$m.__track_lines__[169] = 'logging.py, line 169:\n    def __init__(self, name, level, pathname, lineno,';
		$m.__track_lines__[174] = 'logging.py, line 174:\n    ct = time.time()';
		$m.__track_lines__[175] = 'logging.py, line 175:\n    self.name = name';
		$m.__track_lines__[176] = 'logging.py, line 176:\n    self.msg = msg';
		$m.__track_lines__[190] = 'logging.py, line 190:\n    if args and (len(args) == 1) and args[0] and isinstance(args[0], dict):';
		$m.__track_lines__[191] = 'logging.py, line 191:\n    args = args[0]';
		$m.__track_lines__[192] = 'logging.py, line 192:\n    self.args = args';
		$m.__track_lines__[193] = 'logging.py, line 193:\n    self.levelname = getLevelName(level)';
		$m.__track_lines__[194] = 'logging.py, line 194:\n    self.levelno = level';
		$m.__track_lines__[195] = 'logging.py, line 195:\n    self.pathname = pathname';
		$m.__track_lines__[196] = 'logging.py, line 196:\n    self.filename = "%s.py" % pathname';
		$m.__track_lines__[197] = 'logging.py, line 197:\n    self.module = pathname';
		$m.__track_lines__[198] = 'logging.py, line 198:\n    self.exc_info = exc_info';
		$m.__track_lines__[199] = 'logging.py, line 199:\n    self.exc_text = None      # used to cache the traceback text';
		$m.__track_lines__[200] = 'logging.py, line 200:\n    self.lineno = lineno';
		$m.__track_lines__[201] = 'logging.py, line 201:\n    self.funcName = func';
		$m.__track_lines__[202] = 'logging.py, line 202:\n    self.created = ct';
		$m.__track_lines__[203] = 'logging.py, line 203:\n    self.msecs = (ct - long(ct)) * 1000';
		$m.__track_lines__[204] = 'logging.py, line 204:\n    self.relativeCreated = (self.created - _startTime) * 1000';
		$m.__track_lines__[205] = 'logging.py, line 205:\n    self.thread = None';
		$m.__track_lines__[206] = 'logging.py, line 206:\n    self.threadName = None';
		$m.__track_lines__[207] = 'logging.py, line 207:\n    self.process = None';
		$m.__track_lines__[209] = 'logging.py, line 209:\n    def __str__(self):';
		$m.__track_lines__[210] = 'logging.py, line 210:\n    return \'<LogRecord: %s, %s, %s, %s, "%s">\'%(self.name, self.levelno,';
		$m.__track_lines__[213] = 'logging.py, line 213:\n    def getMessage(self):';
		$m.__track_lines__[220] = 'logging.py, line 220:\n    msg = str(self.msg)';
		$m.__track_lines__[221] = 'logging.py, line 221:\n    if self.args:';
		$m.__track_lines__[222] = 'logging.py, line 222:\n    msg = msg % self.args';
		$m.__track_lines__[223] = 'logging.py, line 223:\n    return msg';
		$m.__track_lines__[225] = 'logging.py, line 225:\n    def update(self, **kwargs):';
		$m.__track_lines__[226] = 'logging.py, line 226:\n    for k in kwargs:';
		$m.__track_lines__[227] = 'logging.py, line 227:\n    setattr(self, k, kwargs[k])';
		$m.__track_lines__[229] = 'logging.py, line 229:\n    def toDict(self):';
		$m.__track_lines__[230] = 'logging.py, line 230:\n    _toDict = {}';
		$m.__track_lines__[231] = 'logging.py, line 231:\n    for k in dir(self):';
		$m.__track_lines__[232] = "logging.py, line 232:\n    if k[:2] == '__':";
		$m.__track_lines__[233] = 'logging.py, line 233:\n    continue';
		$m.__track_lines__[234] = 'logging.py, line 234:\n    v = getattr(self, k)';
		$m.__track_lines__[235] = 'logging.py, line 235:\n    if not callable(v):';
		$m.__track_lines__[236] = "logging.py, line 236:\n    if k[:2] == '$$':";
		$m.__track_lines__[237] = 'logging.py, line 237:\n    _toDict[k[2:]] = v';
		$m.__track_lines__[239] = 'logging.py, line 239:\n    _toDict[k] = v';
		$m.__track_lines__[240] = 'logging.py, line 240:\n    return _toDict';
		$m.__track_lines__[243] = 'logging.py, line 243:\n    def makeLogRecord(dict):';
		$m.__track_lines__[250] = 'logging.py, line 250:\n    rv = LogRecord(None, None, "", 0, "", (), None, None)';
		$m.__track_lines__[251] = 'logging.py, line 251:\n    rv.update(dict)';
		$m.__track_lines__[252] = 'logging.py, line 252:\n    return rv';
		$m.__track_lines__[258] = 'logging.py, line 258:\n    class Formatter(object):';
		$m.__track_lines__[300] = 'logging.py, line 300:\n    converter = time.localtime';
		$m.__track_lines__[302] = 'logging.py, line 302:\n    def __init__(self, fmt=None, datefmt=None):';
		$m.__track_lines__[310] = 'logging.py, line 310:\n    if fmt:';
		$m.__track_lines__[311] = 'logging.py, line 311:\n    self._fmt = fmt';
		$m.__track_lines__[313] = 'logging.py, line 313:\n    self._fmt = "%(message)s"';
		$m.__track_lines__[314] = 'logging.py, line 314:\n    self.datefmt = datefmt';
		$m.__track_lines__[316] = 'logging.py, line 316:\n    def formatTime(self, record, datefmt=None):';
		$m.__track_lines__[334] = 'logging.py, line 334:\n    ct = self.converter(record.created)';
		$m.__track_lines__[335] = 'logging.py, line 335:\n    if datefmt:';
		$m.__track_lines__[336] = 'logging.py, line 336:\n    s = time.strftime(datefmt, ct)';
		$m.__track_lines__[338] = 'logging.py, line 338:\n    t = time.strftime("%Y-%m-%d %H:%M:%S", ct)';
		$m.__track_lines__[339] = 'logging.py, line 339:\n    s = "%s,%03d" % (t, record.msecs)';
		$m.__track_lines__[340] = 'logging.py, line 340:\n    return s';
		$m.__track_lines__[342] = 'logging.py, line 342:\n    def formatException(self, ei):';
		$m.__track_lines__[349] = "logging.py, line 349:\n    if hasattr(sys, 'trackstackstr'):";
		$m.__track_lines__[350] = 'logging.py, line 350:\n    s = str(ei)';
		$m.__track_lines__[351] = 'logging.py, line 351:\n    s += sys.trackstackstr()';
		$m.__track_lines__[353] = 'logging.py, line 353:\n    import cStringIO';
		$m.__track_lines__[354] = 'logging.py, line 354:\n    import traceback';
		$m.__track_lines__[355] = 'logging.py, line 355:\n    sio = cStringIO.StringIO()';
		$m.__track_lines__[356] = 'logging.py, line 356:\n    traceback.print_exception(ei[0], ei[1], ei[2], None, sio)';
		$m.__track_lines__[357] = 'logging.py, line 357:\n    s = sio.getvalue()';
		$m.__track_lines__[358] = 'logging.py, line 358:\n    sio.close()';
		$m.__track_lines__[359] = 'logging.py, line 359:\n    if s[-1:] == "\\n":';
		$m.__track_lines__[360] = 'logging.py, line 360:\n    s = s[:-1]';
		$m.__track_lines__[361] = 'logging.py, line 361:\n    return s';
		$m.__track_lines__[363] = 'logging.py, line 363:\n    def format(self, record):';
		$m.__track_lines__[376] = 'logging.py, line 376:\n    record.message = record.getMessage()';
		$m.__track_lines__[377] = 'logging.py, line 377:\n    if self._fmt.find("%(asctime)") >= 0:';
		$m.__track_lines__[378] = 'logging.py, line 378:\n    record.asctime = self.formatTime(record, self.datefmt)';
		$m.__track_lines__[379] = 'logging.py, line 379:\n    s = self._fmt % record.toDict()';
		$m.__track_lines__[380] = 'logging.py, line 380:\n    if record.exc_info:';
		$m.__track_lines__[383] = 'logging.py, line 383:\n    if not record.exc_text:';
		$m.__track_lines__[384] = 'logging.py, line 384:\n    record.exc_text = self.formatException(record.exc_info)';
		$m.__track_lines__[385] = 'logging.py, line 385:\n    if record.exc_text:';
		$m.__track_lines__[386] = 'logging.py, line 386:\n    if s[-1:] != "\\n":';
		$m.__track_lines__[387] = 'logging.py, line 387:\n    s = s + "\\n"';
		$m.__track_lines__[388] = 'logging.py, line 388:\n    s = s + record.exc_text';
		$m.__track_lines__[389] = 'logging.py, line 389:\n    return s';
		$m.__track_lines__[394] = 'logging.py, line 394:\n    _defaultFormatter = Formatter()';
		$m.__track_lines__[396] = 'logging.py, line 396:\n    class BufferingFormatter(object):';
		$m.__track_lines__[400] = 'logging.py, line 400:\n    def __init__(self, linefmt=None):';
		$m.__track_lines__[405] = 'logging.py, line 405:\n    if linefmt:';
		$m.__track_lines__[406] = 'logging.py, line 406:\n    self.linefmt = linefmt';
		$m.__track_lines__[408] = 'logging.py, line 408:\n    self.linefmt = _defaultFormatter';
		$m.__track_lines__[410] = 'logging.py, line 410:\n    def formatHeader(self, records):';
		$m.__track_lines__[414] = 'logging.py, line 414:\n    return ""';
		$m.__track_lines__[416] = 'logging.py, line 416:\n    def formatFooter(self, records):';
		$m.__track_lines__[420] = 'logging.py, line 420:\n    return ""';
		$m.__track_lines__[422] = 'logging.py, line 422:\n    def format(self, records):';
		$m.__track_lines__[426] = 'logging.py, line 426:\n    rv = ""';
		$m.__track_lines__[427] = 'logging.py, line 427:\n    if len(records) > 0:';
		$m.__track_lines__[428] = 'logging.py, line 428:\n    rv = rv + self.formatHeader(records)';
		$m.__track_lines__[429] = 'logging.py, line 429:\n    for record in records:';
		$m.__track_lines__[430] = 'logging.py, line 430:\n    rv = rv + self.linefmt.format(record)';
		$m.__track_lines__[431] = 'logging.py, line 431:\n    rv = rv + self.formatFooter(records)';
		$m.__track_lines__[432] = 'logging.py, line 432:\n    return rv';
		$m.__track_lines__[438] = 'logging.py, line 438:\n    class Filter(object):';
		$m.__track_lines__[449] = "logging.py, line 449:\n    def __init__(self, name=''):";
		$m.__track_lines__[457] = 'logging.py, line 457:\n    self.name = name';
		$m.__track_lines__[458] = 'logging.py, line 458:\n    self.nlen = len(name)';
		$m.__track_lines__[460] = 'logging.py, line 460:\n    def filter(self, record):';
		$m.__track_lines__[467] = 'logging.py, line 467:\n    if self.nlen == 0:';
		$m.__track_lines__[468] = 'logging.py, line 468:\n    return 1';
		$m.__track_lines__[470] = 'logging.py, line 470:\n    return 1';
		$m.__track_lines__[472] = 'logging.py, line 472:\n    return 0';
		$m.__track_lines__[473] = 'logging.py, line 473:\n    return (record.name[self.nlen] == ".")';
		$m.__track_lines__[475] = 'logging.py, line 475:\n    class Filterer(object):';
		$m.__track_lines__[480] = 'logging.py, line 480:\n    def __init__(self):';
		$m.__track_lines__[484] = 'logging.py, line 484:\n    self.filters = []';
		$m.__track_lines__[486] = 'logging.py, line 486:\n    def addFilter(self, filter):';
		$m.__track_lines__[490] = 'logging.py, line 490:\n    if not (filter in self.filters):';
		$m.__track_lines__[491] = 'logging.py, line 491:\n    self.filters.append(filter)';
		$m.__track_lines__[493] = 'logging.py, line 493:\n    def removeFilter(self, filter):';
		$m.__track_lines__[497] = 'logging.py, line 497:\n    if filter in self.filters:';
		$m.__track_lines__[498] = 'logging.py, line 498:\n    self.filters.remove(filter)';
		$m.__track_lines__[500] = 'logging.py, line 500:\n    def filter(self, record):';
		$m.__track_lines__[508] = 'logging.py, line 508:\n    rv = 1';
		$m.__track_lines__[509] = 'logging.py, line 509:\n    for f in self.filters:';
		$m.__track_lines__[510] = 'logging.py, line 510:\n    if not f.filter(record):';
		$m.__track_lines__[511] = 'logging.py, line 511:\n    rv = 0';
		$m.__track_lines__[512] = 'logging.py, line 512:\n    break';
		$m.__track_lines__[513] = 'logging.py, line 513:\n    return rv';
		$m.__track_lines__[519] = 'logging.py, line 519:\n    _handlers = {}  #repository of handlers (for flushing when shutdown called)';
		$m.__track_lines__[520] = 'logging.py, line 520:\n    _handlerList = [] # added to allow handlers to be removed in reverse of order initialized';
		$m.__track_lines__[522] = 'logging.py, line 522:\n    class Handler(Filterer):';
		$m.__track_lines__[531] = 'logging.py, line 531:\n    def __init__(self, level=NOTSET):';
		$m.__track_lines__[536] = 'logging.py, line 536:\n    Filterer.__init__(self)';
		$m.__track_lines__[537] = 'logging.py, line 537:\n    self.level = level';
		$m.__track_lines__[538] = 'logging.py, line 538:\n    self.formatter = None';
		$m.__track_lines__[539] = 'logging.py, line 539:\n    _handlers[self] = 1';
		$m.__track_lines__[540] = 'logging.py, line 540:\n    _handlerList.insert(0, self)';
		$m.__track_lines__[542] = 'logging.py, line 542:\n    def setLevel(self, level):';
		$m.__track_lines__[546] = 'logging.py, line 546:\n    self.level = level';
		$m.__track_lines__[548] = 'logging.py, line 548:\n    def format(self, record):';
		$m.__track_lines__[555] = 'logging.py, line 555:\n    if self.formatter:';
		$m.__track_lines__[556] = 'logging.py, line 556:\n    fmt = self.formatter';
		$m.__track_lines__[558] = 'logging.py, line 558:\n    fmt = _defaultFormatter';
		$m.__track_lines__[559] = 'logging.py, line 559:\n    return fmt.format(record)';
		$m.__track_lines__[561] = 'logging.py, line 561:\n    def emit(self, record):';
		$m.__track_lines__[568] = "logging.py, line 568:\n    raise NotImplementedError, 'emit must be implemented '\\";
		$m.__track_lines__[571] = 'logging.py, line 571:\n    def handle(self, record):';
		$m.__track_lines__[580] = 'logging.py, line 580:\n    rv = self.filter(record)';
		$m.__track_lines__[581] = 'logging.py, line 581:\n    if rv:';
		$m.__track_lines__[582] = 'logging.py, line 582:\n    self.emit(record)';
		$m.__track_lines__[583] = 'logging.py, line 583:\n    return rv';
		$m.__track_lines__[585] = 'logging.py, line 585:\n    def setFormatter(self, fmt):';
		$m.__track_lines__[589] = 'logging.py, line 589:\n    self.formatter = fmt';
		$m.__track_lines__[591] = 'logging.py, line 591:\n    def flush(self):';
		$m.__track_lines__[598] = 'logging.py, line 598:\n    pass';
		$m.__track_lines__[600] = 'logging.py, line 600:\n    def close(self):';
		$m.__track_lines__[609] = 'logging.py, line 609:\n    del _handlers[self]';
		$m.__track_lines__[610] = 'logging.py, line 610:\n    _handlerList.remove(self)';
		$m.__track_lines__[612] = 'logging.py, line 612:\n    def handleError(self, record):';
		$m.__track_lines__[624] = 'logging.py, line 624:\n    if raiseExceptions:';
		$m.__track_lines__[625] = 'logging.py, line 625:\n    raise';
		$m.__track_lines__[630] = 'logging.py, line 630:\n    class DefaultStream(object):';
		$m.__track_lines__[631] = 'logging.py, line 631:\n    def write(self, msg):';
		$m.__track_lines__[632] = 'logging.py, line 632:\n    print msg';
		$m.__track_lines__[633] = 'logging.py, line 633:\n    defaultStream = DefaultStream()';
		$m.__track_lines__[635] = 'logging.py, line 635:\n    class StreamHandler(Handler):';
		$m.__track_lines__[641] = 'logging.py, line 641:\n    def __init__(self, strm=None):';
		$m.__track_lines__[647] = 'logging.py, line 647:\n    Handler.__init__(self)';
		$m.__track_lines__[648] = 'logging.py, line 648:\n    if strm is None:';
		$m.__track_lines__[649] = 'logging.py, line 649:\n    strm = defaultStream';
		$m.__track_lines__[650] = 'logging.py, line 650:\n    self.stream = strm';
		$m.__track_lines__[651] = 'logging.py, line 651:\n    self.formatter = None';
		$m.__track_lines__[653] = 'logging.py, line 653:\n    def flush(self):';
		$m.__track_lines__[657] = "logging.py, line 657:\n    if hasattr(self.stream, 'flush'):";
		$m.__track_lines__[658] = 'logging.py, line 658:\n    self.stream.flush()';
		$m.__track_lines__[660] = 'logging.py, line 660:\n    def emit(self, record):';
		$m.__track_lines__[670] = 'logging.py, line 670:\n    try:';
		$m.__track_lines__[671] = 'logging.py, line 671:\n    msg = self.format(record)';
		$m.__track_lines__[672] = 'logging.py, line 672:\n    fs = "%s\\n"';
		$m.__track_lines__[673] = 'logging.py, line 673:\n    self.stream.write(fs % msg)';
		$m.__track_lines__[674] = 'logging.py, line 674:\n    self.flush()';
		$m.__track_lines__[676] = 'logging.py, line 676:\n    self.handleError(record)';
		$m.__track_lines__[682] = 'logging.py, line 682:\n    class PlaceHolder(object):';
		$m.__track_lines__[688] = 'logging.py, line 688:\n    def __init__(self, alogger):';
		$m.__track_lines__[693] = 'logging.py, line 693:\n    self.loggerMap = { alogger : None }';
		$m.__track_lines__[695] = 'logging.py, line 695:\n    def append(self, alogger):';
		$m.__track_lines__[700] = 'logging.py, line 700:\n    if not self.loggerMap.has_key(alogger):';
		$m.__track_lines__[702] = 'logging.py, line 702:\n    self.loggerMap[alogger] = None';
		$m.__track_lines__[707] = 'logging.py, line 707:\n    _loggerClass = None';
		$m.__track_lines__[709] = 'logging.py, line 709:\n    def setLoggerClass(klass):';
		$m.__track_lines__[715] = 'logging.py, line 715:\n    if klass != Logger:';
		$m.__track_lines__[716] = 'logging.py, line 716:\n    if not issubclass(klass, Logger):';
		$m.__track_lines__[717] = 'logging.py, line 717:\n    raise TypeError, "logger not derived from logging.Logger: " + \\';
		$m.__track_lines__[719] = 'logging.py, line 719:\n    global _loggerClass';
		$m.__track_lines__[720] = 'logging.py, line 720:\n    _loggerClass = klass';
		$m.__track_lines__[722] = 'logging.py, line 722:\n    def getLoggerClass():';
		$m.__track_lines__[727] = 'logging.py, line 727:\n    return _loggerClass';
		$m.__track_lines__[729] = 'logging.py, line 729:\n    class Manager(object):';
		$m.__track_lines__[734] = 'logging.py, line 734:\n    def __init__(self, rootnode):';
		$m.__track_lines__[738] = 'logging.py, line 738:\n    self.root = rootnode';
		$m.__track_lines__[739] = 'logging.py, line 739:\n    self.disable = 0';
		$m.__track_lines__[740] = 'logging.py, line 740:\n    self.emittedNoHandlerWarning = 0';
		$m.__track_lines__[741] = 'logging.py, line 741:\n    self.loggerDict = {}';
		$m.__track_lines__[743] = 'logging.py, line 743:\n    def getLogger(self, name):';
		$m.__track_lines__[754] = 'logging.py, line 754:\n    rv = None';
		$m.__track_lines__[755] = 'logging.py, line 755:\n    if self.loggerDict.has_key(name):';
		$m.__track_lines__[756] = 'logging.py, line 756:\n    rv = self.loggerDict[name]';
		$m.__track_lines__[757] = 'logging.py, line 757:\n    if isinstance(rv, PlaceHolder):';
		$m.__track_lines__[758] = 'logging.py, line 758:\n    ph = rv';
		$m.__track_lines__[759] = 'logging.py, line 759:\n    rv = _loggerClass(name)';
		$m.__track_lines__[760] = 'logging.py, line 760:\n    rv.manager = self';
		$m.__track_lines__[761] = 'logging.py, line 761:\n    self.loggerDict[name] = rv';
		$m.__track_lines__[762] = 'logging.py, line 762:\n    self._fixupChildren(ph, rv)';
		$m.__track_lines__[763] = 'logging.py, line 763:\n    self._fixupParents(rv)';
		$m.__track_lines__[765] = 'logging.py, line 765:\n    rv = _loggerClass(name)';
		$m.__track_lines__[766] = 'logging.py, line 766:\n    rv.manager = self';
		$m.__track_lines__[767] = 'logging.py, line 767:\n    self.loggerDict[name] = rv';
		$m.__track_lines__[768] = 'logging.py, line 768:\n    self._fixupParents(rv)';
		$m.__track_lines__[769] = 'logging.py, line 769:\n    return rv';
		$m.__track_lines__[771] = 'logging.py, line 771:\n    def _fixupParents(self, alogger):';
		$m.__track_lines__[776] = 'logging.py, line 776:\n    name = alogger.name';
		$m.__track_lines__[777] = 'logging.py, line 777:\n    i = name.find(".")';
		$m.__track_lines__[778] = 'logging.py, line 778:\n    rv = None';
		$m.__track_lines__[779] = 'logging.py, line 779:\n    while (i > 0) and not rv:';
		$m.__track_lines__[780] = 'logging.py, line 780:\n    substr = name[:i]';
		$m.__track_lines__[781] = 'logging.py, line 781:\n    if not self.loggerDict.has_key(substr):';
		$m.__track_lines__[782] = 'logging.py, line 782:\n    self.loggerDict[substr] = PlaceHolder(alogger)';
		$m.__track_lines__[784] = 'logging.py, line 784:\n    obj = self.loggerDict[substr]';
		$m.__track_lines__[785] = 'logging.py, line 785:\n    if isinstance(obj, Logger):';
		$m.__track_lines__[786] = 'logging.py, line 786:\n    rv = obj';
		$m.__track_lines__[788] = 'logging.py, line 788:\n    assert isinstance(obj, PlaceHolder)';
		$m.__track_lines__[789] = 'logging.py, line 789:\n    obj.append(alogger)';
		$m.__track_lines__[790] = 'logging.py, line 790:\n    i = name.rfind(".", 0, i - 1)';
		$m.__track_lines__[791] = 'logging.py, line 791:\n    if not rv:';
		$m.__track_lines__[792] = 'logging.py, line 792:\n    rv = self.root';
		$m.__track_lines__[793] = 'logging.py, line 793:\n    alogger.parent = rv';
		$m.__track_lines__[795] = 'logging.py, line 795:\n    def _fixupChildren(self, ph, alogger):';
		$m.__track_lines__[800] = 'logging.py, line 800:\n    name = alogger.name';
		$m.__track_lines__[801] = 'logging.py, line 801:\n    namelen = len(name)';
		$m.__track_lines__[802] = 'logging.py, line 802:\n    for c in ph.loggerMap.keys():';
		$m.__track_lines__[805] = 'logging.py, line 805:\n    if c.parent.name[:namelen] != name:';
		$m.__track_lines__[806] = 'logging.py, line 806:\n    alogger.parent = c.parent';
		$m.__track_lines__[807] = 'logging.py, line 807:\n    c.parent = alogger';
		$m.__track_lines__[813] = 'logging.py, line 813:\n    class Logger(Filterer):';
		$m.__track_lines__[828] = 'logging.py, line 828:\n    def __init__(self, name, level=NOTSET):';
		$m.__track_lines__[832] = 'logging.py, line 832:\n    Filterer.__init__(self)';
		$m.__track_lines__[833] = 'logging.py, line 833:\n    self.name = name';
		$m.__track_lines__[834] = 'logging.py, line 834:\n    self.level = level';
		$m.__track_lines__[835] = 'logging.py, line 835:\n    self.parent = None';
		$m.__track_lines__[836] = 'logging.py, line 836:\n    self.propagate = 1';
		$m.__track_lines__[837] = 'logging.py, line 837:\n    self.handlers = []';
		$m.__track_lines__[838] = 'logging.py, line 838:\n    self.disabled = 0';
		$m.__track_lines__[840] = 'logging.py, line 840:\n    def setLevel(self, level):';
		$m.__track_lines__[844] = 'logging.py, line 844:\n    self.level = level';
		$m.__track_lines__[846] = 'logging.py, line 846:\n    def debug(self, msg, *args, **kwargs):';
		$m.__track_lines__[855] = 'logging.py, line 855:\n    if self.manager.disable >= DEBUG:';
		$m.__track_lines__[856] = 'logging.py, line 856:\n    return';
		$m.__track_lines__[857] = 'logging.py, line 857:\n    if DEBUG >= self.getEffectiveLevel():';
		$m.__track_lines__[858] = 'logging.py, line 858:\n    self._log(DEBUG, msg, args, **kwargs)';
		$m.__track_lines__[860] = 'logging.py, line 860:\n    def info(self, msg, *args, **kwargs):';
		$m.__track_lines__[869] = 'logging.py, line 869:\n    if self.manager.disable >= INFO:';
		$m.__track_lines__[870] = 'logging.py, line 870:\n    return';
		$m.__track_lines__[871] = 'logging.py, line 871:\n    if INFO >= self.getEffectiveLevel():';
		$m.__track_lines__[872] = 'logging.py, line 872:\n    self._log(INFO, msg, args, **kwargs)';
		$m.__track_lines__[874] = 'logging.py, line 874:\n    def warning(self, msg, *args, **kwargs):';
		$m.__track_lines__[883] = 'logging.py, line 883:\n    if self.manager.disable >= WARNING:';
		$m.__track_lines__[884] = 'logging.py, line 884:\n    return';
		$m.__track_lines__[885] = 'logging.py, line 885:\n    if self.isEnabledFor(WARNING):';
		$m.__track_lines__[886] = 'logging.py, line 886:\n    self._log(WARNING, msg, args, **kwargs)';
		$m.__track_lines__[888] = 'logging.py, line 888:\n    warn = warning';
		$m.__track_lines__[890] = 'logging.py, line 890:\n    def error(self, msg, *args, **kwargs):';
		$m.__track_lines__[899] = 'logging.py, line 899:\n    if self.manager.disable >= ERROR:';
		$m.__track_lines__[900] = 'logging.py, line 900:\n    return';
		$m.__track_lines__[901] = 'logging.py, line 901:\n    if self.isEnabledFor(ERROR):';
		$m.__track_lines__[902] = 'logging.py, line 902:\n    self._log(ERROR, msg, args, **kwargs)';
		$m.__track_lines__[904] = 'logging.py, line 904:\n    def exception(self, msg, *args):';
		$m.__track_lines__[908] = "logging.py, line 908:\n    self.error((msg,) + args, {'exc_info': 1})";
		$m.__track_lines__[910] = 'logging.py, line 910:\n    def critical(self, msg, *args, **kwargs):';
		$m.__track_lines__[919] = 'logging.py, line 919:\n    if self.manager.disable >= CRITICAL:';
		$m.__track_lines__[920] = 'logging.py, line 920:\n    return';
		$m.__track_lines__[921] = 'logging.py, line 921:\n    if CRITICAL >= self.getEffectiveLevel():';
		$m.__track_lines__[922] = 'logging.py, line 922:\n    self._log(CRITICAL, msg, args, **kwargs)';
		$m.__track_lines__[924] = 'logging.py, line 924:\n    fatal = critical';
		$m.__track_lines__[926] = 'logging.py, line 926:\n    def log(self, level, msg, *args, **kwargs):';
		$m.__track_lines__[935] = 'logging.py, line 935:\n    if not isinstance(level, int):';
		$m.__track_lines__[936] = 'logging.py, line 936:\n    if raiseExceptions:';
		$m.__track_lines__[937] = 'logging.py, line 937:\n    raise TypeError, "level must be an integer"';
		$m.__track_lines__[939] = 'logging.py, line 939:\n    return';
		$m.__track_lines__[940] = 'logging.py, line 940:\n    if self.manager.disable >= level:';
		$m.__track_lines__[941] = 'logging.py, line 941:\n    return';
		$m.__track_lines__[942] = 'logging.py, line 942:\n    if self.isEnabledFor(level):';
		$m.__track_lines__[943] = 'logging.py, line 943:\n    self._log(level, msg, args, **kwargs)';
		$m.__track_lines__[945] = 'logging.py, line 945:\n    def findCaller(self):';
		$m.__track_lines__[950] = 'logging.py, line 950:\n    stack = list(JS("""$pyjs.trackstack"""))';
		$m.__track_lines__[952] = 'logging.py, line 952:\n    fname = "(unknown file)"';
		$m.__track_lines__[953] = 'logging.py, line 953:\n    lineno = 0';
		$m.__track_lines__[954] = 'logging.py, line 954:\n    for obj in stack:';
		$m.__track_lines__[955] = 'logging.py, line 955:\n    ts = dict(obj)';
		$m.__track_lines__[956] = 'logging.py, line 956:\n    if ts["module"] != __name__:';
		$m.__track_lines__[957] = 'logging.py, line 957:\n    fname = ts.get("module", "(unknown file)")';
		$m.__track_lines__[958] = 'logging.py, line 958:\n    lineno = ts.get("lineno", 0)';
		$m.__track_lines__[959] = 'logging.py, line 959:\n    return fname, lineno, "(unknown function)"';
		$m.__track_lines__[961] = 'logging.py, line 961:\n    def makeRecord(self, name, level, fn, lno, msg, args, exc_info, func=None, extra=None):';
		$m.__track_lines__[966] = 'logging.py, line 966:\n    rv = LogRecord(name, level, fn, lno, msg, args, exc_info, func)';
		$m.__track_lines__[967] = 'logging.py, line 967:\n    if extra:';
		$m.__track_lines__[968] = 'logging.py, line 968:\n    for key in extra:';
		$m.__track_lines__[969] = 'logging.py, line 969:\n    if (key in ["message", "asctime"]) or (key in rv.toDict()):';
		$m.__track_lines__[970] = 'logging.py, line 970:\n    raise KeyError("Attempt to overwrite %r in LogRecord" % key)';
		$m.__track_lines__[971] = 'logging.py, line 971:\n    rv.update(key = extra[key])';
		$m.__track_lines__[972] = 'logging.py, line 972:\n    return rv';
		$m.__track_lines__[974] = 'logging.py, line 974:\n    def _log(self, level, msg, args, exc_info=None, extra=None):';
		$m.__track_lines__[979] = 'logging.py, line 979:\n    if _srcfile:';
		$m.__track_lines__[980] = 'logging.py, line 980:\n    fn, lno, func = self.findCaller()';
		$m.__track_lines__[982] = 'logging.py, line 982:\n    fn, lno, func = "(unknown file)", 0, "(unknown function)"';
		$m.__track_lines__[983] = 'logging.py, line 983:\n    if exc_info:';
		$m.__track_lines__[984] = 'logging.py, line 984:\n    if not isinstance(exc_info, tuple):';
		$m.__track_lines__[985] = 'logging.py, line 985:\n    exc_info = sys.exc_info()';
		$m.__track_lines__[986] = 'logging.py, line 986:\n    record = self.makeRecord(self.name, level, fn, lno, msg, args, exc_info, func, extra)';
		$m.__track_lines__[987] = 'logging.py, line 987:\n    self.handle(record)';
		$m.__track_lines__[989] = 'logging.py, line 989:\n    def handle(self, record):';
		$m.__track_lines__[996] = 'logging.py, line 996:\n    if (not self.disabled) and self.filter(record):';
		$m.__track_lines__[997] = 'logging.py, line 997:\n    self.callHandlers(record)';
		$m.__track_lines__[999] = 'logging.py, line 999:\n    def addHandler(self, hdlr):';
		$m.__track_lines__[1003] = 'logging.py, line 1003:\n    if not (hdlr in self.handlers):';
		$m.__track_lines__[1004] = 'logging.py, line 1004:\n    self.handlers.append(hdlr)';
		$m.__track_lines__[1006] = 'logging.py, line 1006:\n    def removeHandler(self, hdlr):';
		$m.__track_lines__[1010] = 'logging.py, line 1010:\n    if hdlr in self.handlers:';
		$m.__track_lines__[1012] = 'logging.py, line 1012:\n    hdlr.acquire()';
		$m.__track_lines__[1013] = 'logging.py, line 1013:\n    try:';
		$m.__track_lines__[1014] = 'logging.py, line 1014:\n    self.handlers.remove(hdlr)';
		$m.__track_lines__[1016] = 'logging.py, line 1016:\n    hdlr.release()';
		$m.__track_lines__[1018] = 'logging.py, line 1018:\n    def callHandlers(self, record):';
		$m.__track_lines__[1028] = 'logging.py, line 1028:\n    c = self';
		$m.__track_lines__[1029] = 'logging.py, line 1029:\n    found = 0';
		$m.__track_lines__[1030] = 'logging.py, line 1030:\n    while c:';
		$m.__track_lines__[1031] = 'logging.py, line 1031:\n    for hdlr in c.handlers:';
		$m.__track_lines__[1032] = 'logging.py, line 1032:\n    found = found + 1';
		$m.__track_lines__[1033] = 'logging.py, line 1033:\n    if record.levelno >= hdlr.level:';
		$m.__track_lines__[1034] = 'logging.py, line 1034:\n    hdlr.handle(record)';
		$m.__track_lines__[1035] = 'logging.py, line 1035:\n    if not c.propagate:';
		$m.__track_lines__[1036] = 'logging.py, line 1036:\n    c = None    #break out';
		$m.__track_lines__[1038] = 'logging.py, line 1038:\n    c = c.parent';
		$m.__track_lines__[1039] = 'logging.py, line 1039:\n    if (found == 0) and raiseExceptions and not self.manager.emittedNoHandlerWarning:';
		$m.__track_lines__[1040] = 'logging.py, line 1040:\n    sys.stderr.write("No handlers could be found for logger"';
		$m.__track_lines__[1042] = 'logging.py, line 1042:\n    self.manager.emittedNoHandlerWarning = 1';
		$m.__track_lines__[1044] = 'logging.py, line 1044:\n    def getEffectiveLevel(self):';
		$m.__track_lines__[1051] = 'logging.py, line 1051:\n    logger = self';
		$m.__track_lines__[1052] = 'logging.py, line 1052:\n    while logger:';
		$m.__track_lines__[1053] = 'logging.py, line 1053:\n    if logger.level:';
		$m.__track_lines__[1054] = 'logging.py, line 1054:\n    return logger.level';
		$m.__track_lines__[1055] = 'logging.py, line 1055:\n    logger = logger.parent';
		$m.__track_lines__[1056] = 'logging.py, line 1056:\n    return NOTSET';
		$m.__track_lines__[1058] = 'logging.py, line 1058:\n    def isEnabledFor(self, level):';
		$m.__track_lines__[1062] = 'logging.py, line 1062:\n    if self.manager.disable >= level:';
		$m.__track_lines__[1063] = 'logging.py, line 1063:\n    return 0';
		$m.__track_lines__[1064] = 'logging.py, line 1064:\n    return level >= self.getEffectiveLevel()';
		$m.__track_lines__[1066] = 'logging.py, line 1066:\n    class RootLogger(Logger):';
		$m.__track_lines__[1072] = 'logging.py, line 1072:\n    def __init__(self, level):';
		$m.__track_lines__[1076] = 'logging.py, line 1076:\n    Logger.__init__(self, "root", level)';
		$m.__track_lines__[1078] = 'logging.py, line 1078:\n    _loggerClass = Logger';
		$m.__track_lines__[1080] = 'logging.py, line 1080:\n    root = RootLogger(WARNING)';
		$m.__track_lines__[1081] = 'logging.py, line 1081:\n    Logger.root = root';
		$m.__track_lines__[1082] = 'logging.py, line 1082:\n    root.manager = Logger.manager = Manager(Logger.root)';
		$m.__track_lines__[1088] = 'logging.py, line 1088:\n    BASIC_FORMAT = "%(levelname)s:%(name)s:%(message)s"';
		$m.__track_lines__[1090] = 'logging.py, line 1090:\n    def basicConfig(**kwargs):';
		$m.__track_lines__[1122] = 'logging.py, line 1122:\n    if len(root.handlers) == 0:';
		$m.__track_lines__[1123] = 'logging.py, line 1123:\n    filename = kwargs.get("filename")';
		$m.__track_lines__[1124] = 'logging.py, line 1124:\n    if filename:';
		$m.__track_lines__[1125] = 'logging.py, line 1125:\n    raise NotImplementedError("Files not supported in javascript")';
		$m.__track_lines__[1127] = 'logging.py, line 1127:\n    stream = kwargs.get("stream")';
		$m.__track_lines__[1128] = 'logging.py, line 1128:\n    hdlr = StreamHandler(stream)';
		$m.__track_lines__[1129] = 'logging.py, line 1129:\n    fs = kwargs.get("format", BASIC_FORMAT)';
		$m.__track_lines__[1130] = 'logging.py, line 1130:\n    dfs = kwargs.get("datefmt", None)';
		$m.__track_lines__[1131] = 'logging.py, line 1131:\n    fmt = Formatter(fs, dfs)';
		$m.__track_lines__[1132] = 'logging.py, line 1132:\n    hdlr.setFormatter(fmt)';
		$m.__track_lines__[1133] = 'logging.py, line 1133:\n    root.addHandler(hdlr)';
		$m.__track_lines__[1134] = 'logging.py, line 1134:\n    level = kwargs.get("level")';
		$m.__track_lines__[1135] = 'logging.py, line 1135:\n    if level:';
		$m.__track_lines__[1136] = 'logging.py, line 1136:\n    root.setLevel(level)';
		$m.__track_lines__[1143] = 'logging.py, line 1143:\n    def getLogger(name=None):';
		$m.__track_lines__[1149] = 'logging.py, line 1149:\n    if name:';
		$m.__track_lines__[1150] = 'logging.py, line 1150:\n    return Logger.manager.getLogger(name)';
		$m.__track_lines__[1152] = 'logging.py, line 1152:\n    return root';
		$m.__track_lines__[1163] = 'logging.py, line 1163:\n    def critical(msg, *args, **kwargs):';
		$m.__track_lines__[1167] = 'logging.py, line 1167:\n    if len(root.handlers) == 0:';
		$m.__track_lines__[1168] = 'logging.py, line 1168:\n    basicConfig()';
		$m.__track_lines__[1169] = 'logging.py, line 1169:\n    root.critical((msg,)+args, kwargs)';
		$m.__track_lines__[1171] = 'logging.py, line 1171:\n    fatal = critical';
		$m.__track_lines__[1173] = 'logging.py, line 1173:\n    def error(msg, *args, **kwargs):';
		$m.__track_lines__[1177] = 'logging.py, line 1177:\n    if len(root.handlers) == 0:';
		$m.__track_lines__[1178] = 'logging.py, line 1178:\n    basicConfig()';
		$m.__track_lines__[1179] = 'logging.py, line 1179:\n    root.error((msg,)+args, kwargs)';
		$m.__track_lines__[1181] = 'logging.py, line 1181:\n    def exception(msg, *args):';
		$m.__track_lines__[1186] = "logging.py, line 1186:\n    error((msg,)+args, {'exc_info': 1})";
		$m.__track_lines__[1188] = 'logging.py, line 1188:\n    def warning(msg, *args, **kwargs):';
		$m.__track_lines__[1192] = 'logging.py, line 1192:\n    if len(root.handlers) == 0:';
		$m.__track_lines__[1193] = 'logging.py, line 1193:\n    basicConfig()';
		$m.__track_lines__[1194] = 'logging.py, line 1194:\n    root.warning((msg,)+args, kwargs)';
		$m.__track_lines__[1196] = 'logging.py, line 1196:\n    warn = warning';
		$m.__track_lines__[1198] = 'logging.py, line 1198:\n    def info(msg, *args, **kwargs):';
		$m.__track_lines__[1202] = 'logging.py, line 1202:\n    if len(root.handlers) == 0:';
		$m.__track_lines__[1203] = 'logging.py, line 1203:\n    basicConfig()';
		$m.__track_lines__[1204] = 'logging.py, line 1204:\n    root.info((msg,)+args, kwargs)';
		$m.__track_lines__[1206] = 'logging.py, line 1206:\n    def debug(msg, *args, **kwargs):';
		$m.__track_lines__[1210] = 'logging.py, line 1210:\n    if len(root.handlers) == 0:';
		$m.__track_lines__[1211] = 'logging.py, line 1211:\n    basicConfig()';
		$m.__track_lines__[1212] = 'logging.py, line 1212:\n    root.debug((msg,)+args, kwargs)';
		$m.__track_lines__[1214] = 'logging.py, line 1214:\n    def log(level, msg, *args, **kwargs):';
		$m.__track_lines__[1218] = 'logging.py, line 1218:\n    if len(root.handlers) == 0:';
		$m.__track_lines__[1219] = 'logging.py, line 1219:\n    basicConfig()';
		$m.__track_lines__[1220] = 'logging.py, line 1220:\n    root.log((level, msg)+args, kwargs)';
		$m.__track_lines__[1222] = 'logging.py, line 1222:\n    def disable(level):';
		$m.__track_lines__[1226] = 'logging.py, line 1226:\n    root.manager.disable = level';
		$m.__track_lines__[1228] = 'logging.py, line 1228:\n    def shutdown(handlerList=_handlerList):';
		$m.__track_lines__[1235] = 'logging.py, line 1235:\n    for h in handlerList[:]:';
		$m.__track_lines__[1238] = 'logging.py, line 1238:\n    try:';
		$m.__track_lines__[1239] = 'logging.py, line 1239:\n    h.flush()';
		$m.__track_lines__[1240] = 'logging.py, line 1240:\n    h.close()';
		$m.__track_lines__[1242] = 'logging.py, line 1242:\n    if raiseExceptions:';
		$m.__track_lines__[1243] = 'logging.py, line 1243:\n    raise';
		var $lambda1,$pyjs_try_err;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_30 = new $p['int'](30);
		$pyjs.track.module='logging';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=29;
		$pyjs.track.lineno=30;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', 'logging');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['os'] = $p['___import___']('os', 'logging');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['time'] = $p['___import___']('time', 'logging');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=32;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			try {
				$pyjs.in_try_except += 1;
				$pyjs.track.lineno=33;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				$m['codecs'] = $p['___import___']('codecs', 'logging');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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
			$pyjs.track.module='logging';
			if (($pyjs_try_err_name == $p['ImportError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
				$pyjs.track.lineno=35;
				$m['codecs'] = null;
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		$pyjs.track.lineno=37;
		$m['__author__'] = 'Vinay Sajip <vinay_sajip@red-dove.com>';
		$pyjs.track.lineno=38;
		$m['__status__'] = 'production';
		$pyjs.track.lineno=39;
		$m['__version__'] = '0.5.0.2';
		$pyjs.track.lineno=40;
		$m['__date__'] = '16 February 2007';
		$pyjs.track.lineno=50;
		$m['_srcfile'] = '/assets/pyjs.org/states/stable/auto@artifacts.pyjs.org/new_pyjs.org/__pyjs/pyjs/src/pyjs/lib/logging/__init__.py';
		$pyjs.track.lineno=54;
		$m['currentframe'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $pyjs_try_err;
			$pyjs.track={module:'logging',lineno:54};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=54;
			$pyjs.track.lineno=56;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=57;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['Exception']);
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
				$pyjs.track.module='logging';
				if (true) {
					$pyjs.track.lineno=59;
					$pyjs.track.lineno=59;
					var $pyjs__ret = $p['getattr']($p['getattr']($p['getattr']($m['sys'], 'exc_traceback'), 'tb_frame'), 'f_back');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['currentframe'].__name__ = 'currentframe';

		$m['currentframe'].__bind_type__ = 0;
		$m['currentframe'].__args__ = [null,null];
		$pyjs.track.lineno=61;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['hasattr']($m['sys'], '_getframe');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
			$pyjs.track.lineno=61;
			var 			$lambda1 = function() {
				if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

				$pyjs.track={module:'logging',lineno:61};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=61;
				$pyjs.track.lineno=61;
				$pyjs.track.lineno=61;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['sys']['_getframe']($constant_int_3);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			$lambda1.__name__ = '$lambda1';

			$lambda1.__bind_type__ = 0;
			$lambda1.__args__ = [null,null];
			$m['currentframe'] = $lambda1;
		}
		$pyjs.track.lineno=74;
		$m['_startTime'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['time']['time']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
		$pyjs.track.lineno=80;
		$m['raiseExceptions'] = $constant_int_1;
		$pyjs.track.lineno=85;
		$m['logThreads'] = $constant_int_1;
		$pyjs.track.lineno=90;
		$m['logProcesses'] = $constant_int_1;
		$pyjs.track.lineno=103;
		$m['CRITICAL'] = $constant_int_50;
		$pyjs.track.lineno=104;
		$m['FATAL'] = $m['CRITICAL'];
		$pyjs.track.lineno=105;
		$m['ERROR'] = $constant_int_40;
		$pyjs.track.lineno=106;
		$m['WARNING'] = $constant_int_30;
		$pyjs.track.lineno=107;
		$m['WARN'] = $m['WARNING'];
		$pyjs.track.lineno=108;
		$m['INFO'] = $constant_int_20;
		$pyjs.track.lineno=109;
		$m['DEBUG'] = $constant_int_10;
		$pyjs.track.lineno=110;
		$m['NOTSET'] = $constant_int_0;
		$pyjs.track.lineno=112;
		$m['_levelNames'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([[$m['CRITICAL'], 'CRITICAL'], [$m['ERROR'], 'ERROR'], [$m['WARNING'], 'WARNING'], [$m['INFO'], 'INFO'], [$m['DEBUG'], 'DEBUG'], [$m['NOTSET'], 'NOTSET'], ['CRITICAL', $m['CRITICAL']], ['ERROR', $m['ERROR']], ['WARN', $m['WARNING']], ['WARNING', $m['WARNING']], ['INFO', $m['INFO']], ['DEBUG', $m['DEBUG']], ['NOTSET', $m['NOTSET']]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
		$pyjs.track.lineno=128;
		$m['getLevelName'] = function(level) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'logging',lineno:128};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=128;
			$pyjs.track.lineno=142;
			$pyjs.track.lineno=142;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['_levelNames']['get'](level, (function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('Level %s', level);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getLevelName'].__name__ = 'getLevelName';

		$m['getLevelName'].__bind_type__ = 0;
		$m['getLevelName'].__args__ = [null,null,['level']];
		$pyjs.track.lineno=144;
		$m['addLevelName'] = function(level, levelName) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'logging',lineno:144};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=144;
			$pyjs.track.lineno=150;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['_levelNames'].__setitem__(level, levelName);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs.track.lineno=151;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['_levelNames'].__setitem__(levelName, level);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['addLevelName'].__name__ = 'addLevelName';

		$m['addLevelName'].__bind_type__ = 0;
		$m['addLevelName'].__args__ = [null,null,['level'],['levelName']];
		$pyjs.track.lineno=157;
		$m['LogRecord'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'f4bcfa4bb9e6d520145ba981f5aa9b6e';
			$pyjs.track.lineno=169;
			$method = $pyjs__bind_method2('__init__', function(name, level, pathname, lineno, msg, args, exc_info, func) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 7 || arguments.length > 8)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 9, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					level = arguments[2];
					pathname = arguments[3];
					lineno = arguments[4];
					msg = arguments[5];
					args = arguments[6];
					exc_info = arguments[7];
					func = arguments[8];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 8 || arguments.length > 9)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 9, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f4bcfa4bb9e6d520145ba981f5aa9b6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof func == 'undefined') func=arguments.callee.__args__[10][1];
				var ct,$sub3,$sub2,$sub1,$sub4,$and1,$and2,$and3,$and4,$mul4,$mul3,$mul2,$mul1;
				$pyjs.track={module:'logging', lineno:169};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=169;
				$pyjs.track.lineno=174;
				ct = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['time']['time']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs.track.lineno=175;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', name) : $p['setattr'](self, '$$name', name); 
				$pyjs.track.lineno=176;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('msg', msg) : $p['setattr'](self, 'msg', msg); 
				$pyjs.track.lineno=190;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and1=args)?($p['bool']($and2=$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](args);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), $constant_int_1))?($p['bool']($and3=args.__getitem__($constant_int_0))?(function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](args.__getitem__($constant_int_0), $p['dict']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})():$and3):$and2):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
					$pyjs.track.lineno=191;
					args = args.__getitem__($constant_int_0);
				}
				$pyjs.track.lineno=192;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('args', args) : $p['setattr'](self, 'args', args); 
				$pyjs.track.lineno=193;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('levelname', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getLevelName'](level);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) : $p['setattr'](self, 'levelname', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getLevelName'](level);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()); 
				$pyjs.track.lineno=194;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('levelno', level) : $p['setattr'](self, 'levelno', level); 
				$pyjs.track.lineno=195;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pathname', pathname) : $p['setattr'](self, 'pathname', pathname); 
				$pyjs.track.lineno=196;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('filename', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('%s.py', pathname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) : $p['setattr'](self, 'filename', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('%s.py', pathname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()); 
				$pyjs.track.lineno=197;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('module', pathname) : $p['setattr'](self, 'module', pathname); 
				$pyjs.track.lineno=198;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('exc_info', exc_info) : $p['setattr'](self, 'exc_info', exc_info); 
				$pyjs.track.lineno=199;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('exc_text', null) : $p['setattr'](self, 'exc_text', null); 
				$pyjs.track.lineno=200;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lineno', lineno) : $p['setattr'](self, 'lineno', lineno); 
				$pyjs.track.lineno=201;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('funcName', func) : $p['setattr'](self, 'funcName', func); 
				$pyjs.track.lineno=202;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('created', ct) : $p['setattr'](self, 'created', ct); 
				$pyjs.track.lineno=203;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('msecs', (typeof ($mul1=$p['__op_sub']($sub1=ct,$sub2=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['long'](ct);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()))==typeof ($mul2=$constant_int_1000) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) : $p['setattr'](self, 'msecs', (typeof ($mul1=$p['__op_sub']($sub1=ct,$sub2=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['long'](ct);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()))==typeof ($mul2=$constant_int_1000) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))); 
				$pyjs.track.lineno=204;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('relativeCreated', (typeof ($mul3=$p['__op_sub']($sub3=$p['getattr'](self, 'created'),$sub4=$m['_startTime']))==typeof ($mul4=$constant_int_1000) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) : $p['setattr'](self, 'relativeCreated', (typeof ($mul3=$p['__op_sub']($sub3=$p['getattr'](self, 'created'),$sub4=$m['_startTime']))==typeof ($mul4=$constant_int_1000) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))); 
				$pyjs.track.lineno=205;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('thread', null) : $p['setattr'](self, 'thread', null); 
				$pyjs.track.lineno=206;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('threadName', null) : $p['setattr'](self, 'threadName', null); 
				$pyjs.track.lineno=207;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('process', null) : $p['setattr'](self, 'process', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['name'],['level'],['pathname'],['lineno'],['msg'],['args'],['exc_info'],['func', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=209;
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
					if (self.prototype.__md5__ !== 'f4bcfa4bb9e6d520145ba981f5aa9b6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:209};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=209;
				$pyjs.track.lineno=210;
				$pyjs.track.lineno=210;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('<LogRecord: %s, %s, %s, %s, "%s">', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([$p['getattr'](self, '$$name'), $p['getattr'](self, 'levelno'), $p['getattr'](self, 'pathname'), $p['getattr'](self, 'lineno'), $p['getattr'](self, 'msg')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs.track.lineno=213;
			$method = $pyjs__bind_method2('getMessage', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f4bcfa4bb9e6d520145ba981f5aa9b6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var msg,$mod1,$mod2;
				$pyjs.track={module:'logging', lineno:213};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=213;
				$pyjs.track.lineno=220;
				msg = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['str']($p['getattr'](self, 'msg'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs.track.lineno=221;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](self, 'args'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
					$pyjs.track.lineno=222;
					msg = (typeof ($mod1=msg)==typeof ($mod2=$p['getattr'](self, 'args')) && typeof $mod1=='number'?
						(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
						$p['op_mod']($mod1,$mod2));
				}
				$pyjs.track.lineno=223;
				$pyjs.track.lineno=223;
				var $pyjs__ret = msg;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMessage'] = $method;
			$pyjs.track.lineno=225;
			$method = $pyjs__bind_method2('update', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f4bcfa4bb9e6d520145ba981f5aa9b6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $iter1_nextval,$iter1_type,$pyjs__trackstack_size_1,$iter1_iter,$iter1_array,k,$iter1_idx;
				$pyjs.track={module:'logging', lineno:225};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=225;
				$pyjs.track.lineno=226;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					k = $iter1_nextval.$nextval;
					$pyjs.track.lineno=227;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['setattr'](self, k, kwargs.__getitem__(k));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='logging';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['update'] = $method;
			$pyjs.track.lineno=229;
			$method = $pyjs__bind_method2('toDict', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'f4bcfa4bb9e6d520145ba981f5aa9b6e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,v,$iter2_idx,_toDict,$pyjs__trackstack_size_1,k,$iter2_array;
				$pyjs.track={module:'logging', lineno:229};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=229;
				$pyjs.track.lineno=230;
				_toDict = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs.track.lineno=231;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dir'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					k = $iter2_nextval.$nextval;
					$pyjs.track.lineno=232;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']($p['__getslice'](k, 0, $constant_int_2), '__'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
						$pyjs.track.lineno=233;
						continue;
					}
					$pyjs.track.lineno=234;
					v = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, k);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
					$pyjs.track.lineno=235;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['callable'](v);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
						$pyjs.track.lineno=236;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']($p['op_eq']($p['__getslice'](k, 0, $constant_int_2), '$$'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
							$pyjs.track.lineno=237;
							(function(){try{try{$pyjs.in_try_except += 1;
							return _toDict.__setitem__($p['__getslice'](k, $constant_int_2, null), v);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
						}
						else {
							$pyjs.track.lineno=239;
							(function(){try{try{$pyjs.in_try_except += 1;
							return _toDict.__setitem__(k, v);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
						}
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='logging';
				$pyjs.track.lineno=240;
				$pyjs.track.lineno=240;
				var $pyjs__ret = _toDict;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['toDict'] = $method;
			$pyjs.track.lineno=157;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('LogRecord', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=243;
		$m['makeLogRecord'] = function(dict) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var rv;
			$pyjs.track={module:'logging',lineno:243};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=243;
			$pyjs.track.lineno=250;
			rv = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['LogRecord'](null, null, '', $constant_int_0, '', (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})(), null, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs.track.lineno=251;
			(function(){try{try{$pyjs.in_try_except += 1;
			return rv['update'](dict);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs.track.lineno=252;
			$pyjs.track.lineno=252;
			var $pyjs__ret = rv;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['makeLogRecord'].__name__ = 'makeLogRecord';

		$m['makeLogRecord'].__bind_type__ = 0;
		$m['makeLogRecord'].__args__ = [null,null,['dict']];
		$pyjs.track.lineno=258;
		$m['Formatter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'd52cdab3312bf8b6df02c870bab50d5d';
			$pyjs.track.lineno=300;
			$cls_definition['converter'] = $p['getattr']($m['time'], 'localtime');
			$pyjs.track.lineno=302;
			$method = $pyjs__bind_method2('__init__', function(fmt, datefmt) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					fmt = arguments[1];
					datefmt = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd52cdab3312bf8b6df02c870bab50d5d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof fmt == 'undefined') fmt=arguments.callee.__args__[3][1];
				if (typeof datefmt == 'undefined') datefmt=arguments.callee.__args__[4][1];

				$pyjs.track={module:'logging', lineno:302};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=302;
				$pyjs.track.lineno=310;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
					$pyjs.track.lineno=311;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_fmt', fmt) : $p['setattr'](self, '_fmt', fmt); 
				}
				else {
					$pyjs.track.lineno=313;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_fmt', '%(message)s') : $p['setattr'](self, '_fmt', '%(message)s'); 
				}
				$pyjs.track.lineno=314;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('datefmt', datefmt) : $p['setattr'](self, 'datefmt', datefmt); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['fmt', null],['datefmt', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=316;
			$method = $pyjs__bind_method2('formatTime', function(record, datefmt) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					datefmt = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd52cdab3312bf8b6df02c870bab50d5d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof datefmt == 'undefined') datefmt=arguments.callee.__args__[4][1];
				var s,t,ct;
				$pyjs.track={module:'logging', lineno:316};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=316;
				$pyjs.track.lineno=334;
				ct = (function(){try{try{$pyjs.in_try_except += 1;
				return self['converter']($p['getattr'](record, 'created'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				$pyjs.track.lineno=335;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](datefmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
					$pyjs.track.lineno=336;
					s = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['time']['strftime'](datefmt, ct);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				}
				else {
					$pyjs.track.lineno=338;
					t = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['time']['strftime']('%Y-%m-%d %H:%M:%S', ct);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
					$pyjs.track.lineno=339;
					s = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('%s,%03d', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['tuple']([t, $p['getattr'](record, 'msecs')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				}
				$pyjs.track.lineno=340;
				$pyjs.track.lineno=340;
				var $pyjs__ret = s;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['record'],['datefmt', null]]);
			$cls_definition['formatTime'] = $method;
			$pyjs.track.lineno=342;
			$method = $pyjs__bind_method2('formatException', function(ei) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					ei = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd52cdab3312bf8b6df02c870bab50d5d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var cStringIO,traceback,$add2,s,$add1,sio;
				$pyjs.track={module:'logging', lineno:342};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=342;
				$pyjs.track.lineno=349;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr']($m['sys'], 'trackstackstr');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
					$pyjs.track.lineno=350;
					s = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['str'](ei);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
					$pyjs.track.lineno=351;
					s = $p['__op_add']($add1=s,$add2=(function(){try{try{$pyjs.in_try_except += 1;
					return $m['sys']['trackstackstr']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})());
				}
				else {
					$pyjs.track.lineno=353;
					$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
					cStringIO = $p['___import___']('cStringIO', 'logging');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.lineno=354;
					$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
					traceback = $p['___import___']('traceback', 'logging');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.lineno=355;
					sio = (function(){try{try{$pyjs.in_try_except += 1;
					return cStringIO['StringIO']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
					$pyjs.track.lineno=356;
					(function(){try{try{$pyjs.in_try_except += 1;
					return traceback['print_exception'](ei.__getitem__($constant_int_0), ei.__getitem__($constant_int_1), ei.__getitem__($constant_int_2), null, sio);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
					$pyjs.track.lineno=357;
					s = (function(){try{try{$pyjs.in_try_except += 1;
					return sio['getvalue']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
					$pyjs.track.lineno=358;
					(function(){try{try{$pyjs.in_try_except += 1;
					return sio['close']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				}
				$pyjs.track.lineno=359;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['__getslice'](s, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), null), '\n'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
					$pyjs.track.lineno=360;
					s = $p['__getslice'](s, 0, (typeof ($usub2=$constant_int_1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)));
				}
				$pyjs.track.lineno=361;
				$pyjs.track.lineno=361;
				var $pyjs__ret = s;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['ei']]);
			$cls_definition['formatException'] = $method;
			$pyjs.track.lineno=363;
			$method = $pyjs__bind_method2('format', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd52cdab3312bf8b6df02c870bab50d5d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add4,$add3,s,$add6,$mod3,$add5,$mod4;
				$pyjs.track={module:'logging', lineno:363};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=363;
				$pyjs.track.lineno=376;
				record.__is_instance__ && typeof record.__setattr__ == 'function' ? record.__setattr__('message', (function(){try{try{$pyjs.in_try_except += 1;
				return record['getMessage']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) : $p['setattr'](record, 'message', (function(){try{try{$pyjs.in_try_except += 1;
				return record['getMessage']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()); 
				$pyjs.track.lineno=377;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
				return self['_fmt']['find']('%(asctime)');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})(), $constant_int_0))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
					$pyjs.track.lineno=378;
					record.__is_instance__ && typeof record.__setattr__ == 'function' ? record.__setattr__('asctime', (function(){try{try{$pyjs.in_try_except += 1;
					return self['formatTime'](record, $p['getattr'](self, 'datefmt'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) : $p['setattr'](record, 'asctime', (function(){try{try{$pyjs.in_try_except += 1;
					return self['formatTime'](record, $p['getattr'](self, 'datefmt'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()); 
				}
				$pyjs.track.lineno=379;
				s = (typeof ($mod3=$p['getattr'](self, '_fmt'))==typeof ($mod4=(function(){try{try{$pyjs.in_try_except += 1;
				return record['toDict']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4));
				$pyjs.track.lineno=380;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](record, 'exc_info'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
					$pyjs.track.lineno=383;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool']($p['getattr'](record, 'exc_text')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
						$pyjs.track.lineno=384;
						record.__is_instance__ && typeof record.__setattr__ == 'function' ? record.__setattr__('exc_text', (function(){try{try{$pyjs.in_try_except += 1;
						return self['formatException']($p['getattr'](record, 'exc_info'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) : $p['setattr'](record, 'exc_text', (function(){try{try{$pyjs.in_try_except += 1;
						return self['formatException']($p['getattr'](record, 'exc_info'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()); 
					}
				}
				$pyjs.track.lineno=385;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](record, 'exc_text'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
					$pyjs.track.lineno=386;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['op_eq']($p['__getslice'](s, (typeof ($usub3=$constant_int_1)=='number'?
						-$usub3:
						$p['op_usub']($usub3)), null), '\n'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
						$pyjs.track.lineno=387;
						s = $p['__op_add']($add3=s,$add4='\n');
					}
					$pyjs.track.lineno=388;
					s = $p['__op_add']($add5=s,$add6=$p['getattr'](record, 'exc_text'));
				}
				$pyjs.track.lineno=389;
				$pyjs.track.lineno=389;
				var $pyjs__ret = s;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['format'] = $method;
			$pyjs.track.lineno=258;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Formatter', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=394;
		$m['_defaultFormatter'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['Formatter']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
		$pyjs.track.lineno=396;
		$m['BufferingFormatter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '2a7cec7e085c41771c448de3aa5b7a17';
			$pyjs.track.lineno=400;
			$method = $pyjs__bind_method2('__init__', function(linefmt) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					linefmt = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a7cec7e085c41771c448de3aa5b7a17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof linefmt == 'undefined') linefmt=arguments.callee.__args__[3][1];

				$pyjs.track={module:'logging', lineno:400};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=400;
				$pyjs.track.lineno=405;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](linefmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
					$pyjs.track.lineno=406;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('linefmt', linefmt) : $p['setattr'](self, 'linefmt', linefmt); 
				}
				else {
					$pyjs.track.lineno=408;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('linefmt', $m['_defaultFormatter']) : $p['setattr'](self, 'linefmt', $m['_defaultFormatter']); 
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['linefmt', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=410;
			$method = $pyjs__bind_method2('formatHeader', function(records) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					records = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a7cec7e085c41771c448de3aa5b7a17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:410};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=410;
				$pyjs.track.lineno=414;
				$pyjs.track.lineno=414;
				var $pyjs__ret = '';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['records']]);
			$cls_definition['formatHeader'] = $method;
			$pyjs.track.lineno=416;
			$method = $pyjs__bind_method2('formatFooter', function(records) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					records = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a7cec7e085c41771c448de3aa5b7a17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:416};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=416;
				$pyjs.track.lineno=420;
				$pyjs.track.lineno=420;
				var $pyjs__ret = '';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['records']]);
			$cls_definition['formatFooter'] = $method;
			$pyjs.track.lineno=422;
			$method = $pyjs__bind_method2('format', function(records) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					records = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2a7cec7e085c41771c448de3aa5b7a17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var rv,$iter3_idx,$add11,record,$iter3_array,$add10,$iter3_iter,$add12,$iter3_type,$add8,$add9,$pyjs__trackstack_size_1,$iter3_nextval,$add7;
				$pyjs.track={module:'logging', lineno:422};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=422;
				$pyjs.track.lineno=426;
				rv = '';
				$pyjs.track.lineno=427;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](records);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})(), $constant_int_0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
					$pyjs.track.lineno=428;
					rv = $p['__op_add']($add7=rv,$add8=(function(){try{try{$pyjs.in_try_except += 1;
					return self['formatHeader'](records);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
					$pyjs.track.lineno=429;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return records;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
						record = $iter3_nextval.$nextval;
						$pyjs.track.lineno=430;
						rv = $p['__op_add']($add9=rv,$add10=(function(){try{try{$pyjs.in_try_except += 1;
						return self['linefmt']['format'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='logging';
					$pyjs.track.lineno=431;
					rv = $p['__op_add']($add11=rv,$add12=(function(){try{try{$pyjs.in_try_except += 1;
					return self['formatFooter'](records);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})());
				}
				$pyjs.track.lineno=432;
				$pyjs.track.lineno=432;
				var $pyjs__ret = rv;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['records']]);
			$cls_definition['format'] = $method;
			$pyjs.track.lineno=396;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('BufferingFormatter', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=438;
		$m['Filter'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'ecee5676f8c6849cc27e7e5c8b5e7257';
			$pyjs.track.lineno=449;
			$method = $pyjs__bind_method2('__init__', function(name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ecee5676f8c6849cc27e7e5c8b5e7257') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof name == 'undefined') name=arguments.callee.__args__[3][1];

				$pyjs.track={module:'logging', lineno:449};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=449;
				$pyjs.track.lineno=457;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', name) : $p['setattr'](self, '$$name', name); 
				$pyjs.track.lineno=458;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('nlen', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) : $p['setattr'](self, 'nlen', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['name', '']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=460;
			$method = $pyjs__bind_method2('filter', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'ecee5676f8c6849cc27e7e5c8b5e7257') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:460};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=460;
				$pyjs.track.lineno=467;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr'](self, 'nlen'), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) {
					$pyjs.track.lineno=468;
					$pyjs.track.lineno=468;
					var $pyjs__ret = $constant_int_1;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr'](self, '$$name'), $p['getattr'](record, '$$name')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
					$pyjs.track.lineno=470;
					$pyjs.track.lineno=470;
					var $pyjs__ret = $constant_int_1;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return record['$$name']['find']($p['getattr'](self, '$$name'), $constant_int_0, $p['getattr'](self, 'nlen'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
					$pyjs.track.lineno=472;
					$pyjs.track.lineno=472;
					var $pyjs__ret = $constant_int_0;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=473;
				$pyjs.track.lineno=473;
				var $pyjs__ret = $p['op_eq']($p['getattr'](record, '$$name').__getitem__($p['getattr'](self, 'nlen')), '.');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['filter'] = $method;
			$pyjs.track.lineno=438;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Filter', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=475;
		$m['Filterer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '0149b72b00c03b05c1d29b0a9c037d67';
			$pyjs.track.lineno=480;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0149b72b00c03b05c1d29b0a9c037d67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:480};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=480;
				$pyjs.track.lineno=484;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('filters', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()) : $p['setattr'](self, 'filters', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=486;
			$method = $pyjs__bind_method2('addFilter', function(filter) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					filter = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0149b72b00c03b05c1d29b0a9c037d67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:486};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=486;
				$pyjs.track.lineno=490;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'filters').__contains__(filter)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
					$pyjs.track.lineno=491;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['filters']['append'](filter);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['filter']]);
			$cls_definition['addFilter'] = $method;
			$pyjs.track.lineno=493;
			$method = $pyjs__bind_method2('removeFilter', function(filter) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					filter = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0149b72b00c03b05c1d29b0a9c037d67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:493};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=493;
				$pyjs.track.lineno=497;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](self, 'filters').__contains__(filter));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
					$pyjs.track.lineno=498;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['filters']['remove'](filter);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['filter']]);
			$cls_definition['removeFilter'] = $method;
			$pyjs.track.lineno=500;
			$method = $pyjs__bind_method2('filter', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0149b72b00c03b05c1d29b0a9c037d67') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var rv,f,$iter4_nextval,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
				$pyjs.track={module:'logging', lineno:500};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=500;
				$pyjs.track.lineno=508;
				rv = $constant_int_1;
				$pyjs.track.lineno=509;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter4_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, 'filters');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
					f = $iter4_nextval.$nextval;
					$pyjs.track.lineno=510;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return f['filter'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()) {
						$pyjs.track.lineno=511;
						rv = $constant_int_0;
						$pyjs.track.lineno=512;
						break;
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='logging';
				$pyjs.track.lineno=513;
				$pyjs.track.lineno=513;
				var $pyjs__ret = rv;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['filter'] = $method;
			$pyjs.track.lineno=475;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Filterer', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=519;
		$m['_handlers'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
		$pyjs.track.lineno=520;
		$m['_handlerList'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
		$pyjs.track.lineno=522;
		$m['Handler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '1467e3bea5ebaf8b36eac3e6c1747a81';
			$pyjs.track.lineno=531;
			$method = $pyjs__bind_method2('__init__', function(level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof level == 'undefined') level=arguments.callee.__args__[3][1];

				$pyjs.track={module:'logging', lineno:531};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=531;
				$pyjs.track.lineno=536;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Filterer']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
				$pyjs.track.lineno=537;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', level) : $p['setattr'](self, 'level', level); 
				$pyjs.track.lineno=538;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('formatter', null) : $p['setattr'](self, 'formatter', null); 
				$pyjs.track.lineno=539;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['_handlers'].__setitem__(self, $constant_int_1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
				$pyjs.track.lineno=540;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['_handlerList']['insert']($constant_int_0, self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['level', $m['NOTSET']]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=542;
			$method = $pyjs__bind_method2('setLevel', function(level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:542};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=542;
				$pyjs.track.lineno=546;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', level) : $p['setattr'](self, 'level', level); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['level']]);
			$cls_definition['setLevel'] = $method;
			$pyjs.track.lineno=548;
			$method = $pyjs__bind_method2('format', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fmt;
				$pyjs.track={module:'logging', lineno:548};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=548;
				$pyjs.track.lineno=555;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](self, 'formatter'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
					$pyjs.track.lineno=556;
					fmt = $p['getattr'](self, 'formatter');
				}
				else {
					$pyjs.track.lineno=558;
					fmt = $m['_defaultFormatter'];
				}
				$pyjs.track.lineno=559;
				$pyjs.track.lineno=559;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return fmt['format'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['format'] = $method;
			$pyjs.track.lineno=561;
			$method = $pyjs__bind_method2('emit', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:561};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=561;
				$pyjs.track.lineno=568;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $p['NotImplementedError'];
				var $pyjs__raise_expr2 = 'emit must be implemented by Handler subclasses';
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
	, 1, [null,null,['self'],['record']]);
			$cls_definition['emit'] = $method;
			$pyjs.track.lineno=571;
			$method = $pyjs__bind_method2('handle', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var rv;
				$pyjs.track={module:'logging', lineno:571};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=571;
				$pyjs.track.lineno=580;
				rv = (function(){try{try{$pyjs.in_try_except += 1;
				return self['filter'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				$pyjs.track.lineno=581;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](rv);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()) {
					$pyjs.track.lineno=582;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['emit'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				}
				$pyjs.track.lineno=583;
				$pyjs.track.lineno=583;
				var $pyjs__ret = rv;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['handle'] = $method;
			$pyjs.track.lineno=585;
			$method = $pyjs__bind_method2('setFormatter', function(fmt) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					fmt = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:585};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=585;
				$pyjs.track.lineno=589;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('formatter', fmt) : $p['setattr'](self, 'formatter', fmt); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['fmt']]);
			$cls_definition['setFormatter'] = $method;
			$pyjs.track.lineno=591;
			$method = $pyjs__bind_method2('flush', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:591};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=591;
				$pyjs.track.lineno=598;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['flush'] = $method;
			$pyjs.track.lineno=600;
			$method = $pyjs__bind_method2('close', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:600};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=600;
				$pyjs.track.lineno=609;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['_handlers'].__delitem__(self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs.track.lineno=610;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['_handlerList']['remove'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['close'] = $method;
			$pyjs.track.lineno=612;
			$method = $pyjs__bind_method2('handleError', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '1467e3bea5ebaf8b36eac3e6c1747a81') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:612};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=612;
				$pyjs.track.lineno=624;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($m['raiseExceptions']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
					$pyjs.track.lineno=625;
					$pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__;
					$pyjs.__last_exception_stack__ = null;
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['handleError'] = $method;
			$pyjs.track.lineno=522;
			var $bases = new Array($m['Filterer']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Handler', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=630;
		$m['DefaultStream'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'a008c94d1c510723b76abe67e3d8d428';
			$pyjs.track.lineno=631;
			$method = $pyjs__bind_method2('write', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a008c94d1c510723b76abe67e3d8d428') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:631};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=631;
				$pyjs.track.lineno=632;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc']([msg], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['msg']]);
			$cls_definition['write'] = $method;
			$pyjs.track.lineno=630;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('DefaultStream', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=633;
		$m['defaultStream'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['DefaultStream']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
		$pyjs.track.lineno=635;
		$m['StreamHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '31137a7dcedb769e5da171a742f1611b';
			$pyjs.track.lineno=641;
			$method = $pyjs__bind_method2('__init__', function(strm) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					strm = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '31137a7dcedb769e5da171a742f1611b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof strm == 'undefined') strm=arguments.callee.__args__[3][1];

				$pyjs.track={module:'logging', lineno:641};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=641;
				$pyjs.track.lineno=647;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Handler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
				$pyjs.track.lineno=648;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](strm, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
					$pyjs.track.lineno=649;
					strm = $m['defaultStream'];
				}
				$pyjs.track.lineno=650;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stream', strm) : $p['setattr'](self, 'stream', strm); 
				$pyjs.track.lineno=651;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('formatter', null) : $p['setattr'](self, 'formatter', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['strm', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=653;
			$method = $pyjs__bind_method2('flush', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '31137a7dcedb769e5da171a742f1611b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:653};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=653;
				$pyjs.track.lineno=657;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr']($p['getattr'](self, 'stream'), 'flush');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) {
					$pyjs.track.lineno=658;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['stream']['flush']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['flush'] = $method;
			$pyjs.track.lineno=660;
			$method = $pyjs__bind_method2('emit', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '31137a7dcedb769e5da171a742f1611b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fs,$pyjs_try_err,$mod5,$mod6,msg;
				$pyjs.track={module:'logging', lineno:660};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=660;
				$pyjs.track.lineno=670;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					try {
						$pyjs.in_try_except += 1;
						$pyjs.track.lineno=671;
						msg = (function(){try{try{$pyjs.in_try_except += 1;
						return self['format'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
						$pyjs.track.lineno=672;
						fs = '%s\n';
						$pyjs.track.lineno=673;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['stream']['write']((typeof ($mod5=fs)==typeof ($mod6=msg) && typeof $mod5=='number'?
							(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
							$p['op_mod']($mod5,$mod6)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
						$pyjs.track.lineno=674;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['flush']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
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
					$pyjs.track.module='logging';
					if (true) {
						$pyjs.track.lineno=676;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['handleError'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['emit'] = $method;
			$pyjs.track.lineno=635;
			var $bases = new Array($m['Handler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StreamHandler', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=682;
		$m['PlaceHolder'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '10ba6209c5b0505b252bc047c8256e85';
			$pyjs.track.lineno=688;
			$method = $pyjs__bind_method2('__init__', function(alogger) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					alogger = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '10ba6209c5b0505b252bc047c8256e85') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:688};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=688;
				$pyjs.track.lineno=693;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('loggerMap', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([[alogger, null]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()) : $p['setattr'](self, 'loggerMap', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([[alogger, null]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['alogger']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=695;
			$method = $pyjs__bind_method2('append', function(alogger) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					alogger = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '10ba6209c5b0505b252bc047c8256e85') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:695};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=695;
				$pyjs.track.lineno=700;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return self['loggerMap']['has_key'](alogger);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()) {
					$pyjs.track.lineno=702;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, 'loggerMap').__setitem__(alogger, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['alogger']]);
			$cls_definition['append'] = $method;
			$pyjs.track.lineno=682;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('PlaceHolder', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=707;
		$m['_loggerClass'] = null;
		$pyjs.track.lineno=709;
		$m['setLoggerClass'] = function(klass) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add14,$add13;
			$pyjs.track={module:'logging',lineno:709};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=709;
			$pyjs.track.lineno=715;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq'](klass, (typeof Logger == "undefined"?$m.Logger:Logger)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()) {
				$pyjs.track.lineno=716;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['issubclass'](klass, (typeof Logger == "undefined"?$m.Logger:Logger));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()) {
					$pyjs.track.lineno=717;
					$pyjs.__active_exception_stack__ = null;

					var $pyjs__raise_expr1 = $p['TypeError'];
					var $pyjs__raise_expr2 = $p['__op_add']($add13='logger not derived from logging.Logger: ',$add14=$p['getattr'](klass, '__name__'));
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
			$pyjs.track.lineno=719;
			$pyjs.track.lineno=720;
			$m['_loggerClass'] = klass;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setLoggerClass'].__name__ = 'setLoggerClass';

		$m['setLoggerClass'].__bind_type__ = 0;
		$m['setLoggerClass'].__args__ = [null,null,['klass']];
		$pyjs.track.lineno=722;
		$m['getLoggerClass'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'logging',lineno:722};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=722;
			$pyjs.track.lineno=727;
			$pyjs.track.lineno=727;
			var $pyjs__ret = $m['_loggerClass'];
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getLoggerClass'].__name__ = 'getLoggerClass';

		$m['getLoggerClass'].__bind_type__ = 0;
		$m['getLoggerClass'].__args__ = [null,null];
		$pyjs.track.lineno=729;
		$m['Manager'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'bcb0ad1a607d98f4b2774e0db88ef7e4';
			$pyjs.track.lineno=734;
			$method = $pyjs__bind_method2('__init__', function(rootnode) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					rootnode = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bcb0ad1a607d98f4b2774e0db88ef7e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:734};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=734;
				$pyjs.track.lineno=738;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('root', rootnode) : $p['setattr'](self, 'root', rootnode); 
				$pyjs.track.lineno=739;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('disable', $constant_int_0) : $p['setattr'](self, 'disable', $constant_int_0); 
				$pyjs.track.lineno=740;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('emittedNoHandlerWarning', $constant_int_0) : $p['setattr'](self, 'emittedNoHandlerWarning', $constant_int_0); 
				$pyjs.track.lineno=741;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('loggerDict', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()) : $p['setattr'](self, 'loggerDict', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['rootnode']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=743;
			$method = $pyjs__bind_method2('getLogger', function(name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bcb0ad1a607d98f4b2774e0db88ef7e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ph,rv;
				$pyjs.track={module:'logging', lineno:743};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=743;
				$pyjs.track.lineno=754;
				rv = null;
				$pyjs.track.lineno=755;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return self['loggerDict']['has_key'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()) {
					$pyjs.track.lineno=756;
					rv = $p['getattr'](self, 'loggerDict').__getitem__(name);
					$pyjs.track.lineno=757;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['isinstance'](rv, $m['PlaceHolder']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()) {
						$pyjs.track.lineno=758;
						ph = rv;
						$pyjs.track.lineno=759;
						rv = (function(){try{try{$pyjs.in_try_except += 1;
						return $m['_loggerClass'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
						$pyjs.track.lineno=760;
						rv.__is_instance__ && typeof rv.__setattr__ == 'function' ? rv.__setattr__('manager', self) : $p['setattr'](rv, 'manager', self); 
						$pyjs.track.lineno=761;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $p['getattr'](self, 'loggerDict').__setitem__(name, rv);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
						$pyjs.track.lineno=762;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['_fixupChildren'](ph, rv);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
						$pyjs.track.lineno=763;
						(function(){try{try{$pyjs.in_try_except += 1;
						return self['_fixupParents'](rv);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
					}
				}
				else {
					$pyjs.track.lineno=765;
					rv = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['_loggerClass'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
					$pyjs.track.lineno=766;
					rv.__is_instance__ && typeof rv.__setattr__ == 'function' ? rv.__setattr__('manager', self) : $p['setattr'](rv, 'manager', self); 
					$pyjs.track.lineno=767;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, 'loggerDict').__setitem__(name, rv);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
					$pyjs.track.lineno=768;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['_fixupParents'](rv);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
				}
				$pyjs.track.lineno=769;
				$pyjs.track.lineno=769;
				var $pyjs__ret = rv;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['getLogger'] = $method;
			$pyjs.track.lineno=771;
			$method = $pyjs__bind_method2('_fixupParents', function(alogger) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					alogger = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bcb0ad1a607d98f4b2774e0db88ef7e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var rv,obj,name,i,$and5,substr,$and6,$sub6,$sub5;
				$pyjs.track={module:'logging', lineno:771};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=771;
				$pyjs.track.lineno=776;
				name = $p['getattr'](alogger, '$$name');
				$pyjs.track.lineno=777;
				i = (function(){try{try{$pyjs.in_try_except += 1;
				return name['find']('.');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
				$pyjs.track.lineno=778;
				rv = null;
				$pyjs.track.lineno=779;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and5=($p['cmp'](i, $constant_int_0) == 1))?!$p['bool'](rv):$and5));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()) {
					$pyjs.track.lineno=780;
					substr = $p['__getslice'](name, 0, i);
					$pyjs.track.lineno=781;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return self['loggerDict']['has_key'](substr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()) {
						$pyjs.track.lineno=782;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $p['getattr'](self, 'loggerDict').__setitem__(substr, (function(){try{try{$pyjs.in_try_except += 1;
						return $m['PlaceHolder'](alogger);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
					}
					else {
						$pyjs.track.lineno=784;
						obj = $p['getattr'](self, 'loggerDict').__getitem__(substr);
						$pyjs.track.lineno=785;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['isinstance'](obj, (typeof Logger == "undefined"?$m.Logger:Logger));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()) {
							$pyjs.track.lineno=786;
							rv = obj;
						}
						else {
							$pyjs.track.lineno=788;
							if (!( (function(){try{try{$pyjs.in_try_except += 1;
							return $p['isinstance'](obj, $m['PlaceHolder']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})() )) {
							   throw $p['AssertionError']();
							 }
							$pyjs.track.lineno=789;
							(function(){try{try{$pyjs.in_try_except += 1;
							return obj['append'](alogger);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
						}
					}
					$pyjs.track.lineno=790;
					i = (function(){try{try{$pyjs.in_try_except += 1;
					return name['rfind']('.', $constant_int_0, $p['__op_sub']($sub5=i,$sub6=$constant_int_1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
				}
				$pyjs.track.lineno=791;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool'](rv));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})()) {
					$pyjs.track.lineno=792;
					rv = $p['getattr'](self, 'root');
				}
				$pyjs.track.lineno=793;
				alogger.__is_instance__ && typeof alogger.__setattr__ == 'function' ? alogger.__setattr__('parent', rv) : $p['setattr'](alogger, 'parent', rv); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['alogger']]);
			$cls_definition['_fixupParents'] = $method;
			$pyjs.track.lineno=795;
			$method = $pyjs__bind_method2('_fixupChildren', function(ph, alogger) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					ph = arguments[1];
					alogger = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'bcb0ad1a607d98f4b2774e0db88ef7e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,c,name,$iter5_array,$pyjs__trackstack_size_1,namelen,$iter5_iter,$iter5_idx,$iter5_type;
				$pyjs.track={module:'logging', lineno:795};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=795;
				$pyjs.track.lineno=800;
				name = $p['getattr'](alogger, '$$name');
				$pyjs.track.lineno=801;
				namelen = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
				$pyjs.track.lineno=802;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter5_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return ph['loggerMap']['keys']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
					c = $iter5_nextval.$nextval;
					$pyjs.track.lineno=805;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['op_eq']($p['__getslice']($p['getattr']($p['getattr'](c, 'parent'), '$$name'), 0, namelen), name));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()) {
						$pyjs.track.lineno=806;
						alogger.__is_instance__ && typeof alogger.__setattr__ == 'function' ? alogger.__setattr__('parent', $p['getattr'](c, 'parent')) : $p['setattr'](alogger, 'parent', $p['getattr'](c, 'parent')); 
						$pyjs.track.lineno=807;
						c.__is_instance__ && typeof c.__setattr__ == 'function' ? c.__setattr__('parent', alogger) : $p['setattr'](c, 'parent', alogger); 
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='logging';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['ph'],['alogger']]);
			$cls_definition['_fixupChildren'] = $method;
			$pyjs.track.lineno=729;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Manager', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=813;
		$m['Logger'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = '656bb420830917343c1767926f930921';
			$pyjs.track.lineno=828;
			$method = $pyjs__bind_method2('__init__', function(name, level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					level = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof level == 'undefined') level=arguments.callee.__args__[4][1];

				$pyjs.track={module:'logging', lineno:828};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=828;
				$pyjs.track.lineno=832;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Filterer']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
				$pyjs.track.lineno=833;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', name) : $p['setattr'](self, '$$name', name); 
				$pyjs.track.lineno=834;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', level) : $p['setattr'](self, 'level', level); 
				$pyjs.track.lineno=835;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', null) : $p['setattr'](self, 'parent', null); 
				$pyjs.track.lineno=836;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('propagate', $constant_int_1) : $p['setattr'](self, 'propagate', $constant_int_1); 
				$pyjs.track.lineno=837;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('handlers', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()) : $p['setattr'](self, 'handlers', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()); 
				$pyjs.track.lineno=838;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('disabled', $constant_int_0) : $p['setattr'](self, 'disabled', $constant_int_0); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['name'],['level', $m['NOTSET']]]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=840;
			$method = $pyjs__bind_method2('setLevel', function(level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:840};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=840;
				$pyjs.track.lineno=844;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('level', level) : $p['setattr'](self, 'level', level); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['level']]);
			$cls_definition['setLevel'] = $method;
			$pyjs.track.lineno=846;
			$method = $pyjs__bind_method2('debug', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs.track={module:'logging', lineno:846};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=846;
				$pyjs.track.lineno=855;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), $m['DEBUG']))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) {
					$pyjs.track.lineno=856;
					$pyjs.track.lineno=856;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=857;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']($m['DEBUG'], (function(){try{try{$pyjs.in_try_except += 1;
				return self['getEffectiveLevel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})()))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()) {
					$pyjs.track.lineno=858;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['DEBUG'], msg, args]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg']]);
			$cls_definition['debug'] = $method;
			$pyjs.track.lineno=860;
			$method = $pyjs__bind_method2('info', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs.track={module:'logging', lineno:860};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=860;
				$pyjs.track.lineno=869;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), $m['INFO']))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()) {
					$pyjs.track.lineno=870;
					$pyjs.track.lineno=870;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=871;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']($m['INFO'], (function(){try{try{$pyjs.in_try_except += 1;
				return self['getEffectiveLevel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})()))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})()) {
					$pyjs.track.lineno=872;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['INFO'], msg, args]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg']]);
			$cls_definition['info'] = $method;
			$pyjs.track.lineno=874;
			$method = $pyjs__bind_method2('warning', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs.track={module:'logging', lineno:874};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=874;
				$pyjs.track.lineno=883;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), $m['WARNING']))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})()) {
					$pyjs.track.lineno=884;
					$pyjs.track.lineno=884;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=885;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return self['isEnabledFor']($m['WARNING']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) {
					$pyjs.track.lineno=886;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['WARNING'], msg, args]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg']]);
			$cls_definition['warning'] = $method;
			$pyjs.track.lineno=888;
			$cls_definition['warn'] = $p['staticmethod']($cls_definition['warning']);
			$pyjs.track.lineno=890;
			$method = $pyjs__bind_method2('error', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs.track={module:'logging', lineno:890};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=890;
				$pyjs.track.lineno=899;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), $m['ERROR']))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})()) {
					$pyjs.track.lineno=900;
					$pyjs.track.lineno=900;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=901;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return self['isEnabledFor']($m['ERROR']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
					$pyjs.track.lineno=902;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['ERROR'], msg, args]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg']]);
			$cls_definition['error'] = $method;
			$pyjs.track.lineno=904;
			$method = $pyjs__bind_method2('exception', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add15,$add16;
				$pyjs.track={module:'logging', lineno:904};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=904;
				$pyjs.track.lineno=908;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['error']($p['__op_add']($add15=(function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([msg]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})(),$add16=args), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([['exc_info', $constant_int_1]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',null,['self'],['msg']]);
			$cls_definition['exception'] = $method;
			$pyjs.track.lineno=910;
			$method = $pyjs__bind_method2('critical', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs.track={module:'logging', lineno:910};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=910;
				$pyjs.track.lineno=919;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), $m['CRITICAL']))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()) {
					$pyjs.track.lineno=920;
					$pyjs.track.lineno=920;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=921;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']($m['CRITICAL'], (function(){try{try{$pyjs.in_try_except += 1;
				return self['getEffectiveLevel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})()))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()) {
					$pyjs.track.lineno=922;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(self, '_log', null, kwargs, [{}, $m['CRITICAL'], msg, args]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['msg']]);
			$cls_definition['critical'] = $method;
			$pyjs.track.lineno=924;
			$cls_definition['fatal'] = $p['staticmethod']($cls_definition['critical']);
			$pyjs.track.lineno=926;
			$method = $pyjs__bind_method2('log', function(level, msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, null, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					msg = arguments[2];
					var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length-1));

					var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						if (typeof kwargs != 'undefined') args.__array.push(kwargs);
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length < 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, null, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof msg != 'undefined') {
						if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = msg;
							msg = arguments[3];
						}
					} else 					if (typeof level != 'undefined') {
						if (level !== null && typeof level['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = level;
							level = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}

				$pyjs.track={module:'logging', lineno:926};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=926;
				$pyjs.track.lineno=935;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](level, $p['int']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()) {
					$pyjs.track.lineno=936;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($m['raiseExceptions']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()) {
						$pyjs.track.lineno=937;
						$pyjs.__active_exception_stack__ = null;

						var $pyjs__raise_expr1 = $p['TypeError'];
						var $pyjs__raise_expr2 = 'level must be an integer';
						if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
							throw $p['TypeError']('instance exception may not have a separate value');
						}
						if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
							throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
						} else {
							throw ($pyjs__raise_expr1($pyjs__raise_expr2));
						}

					}
					else {
						$pyjs.track.lineno=939;
						$pyjs.track.lineno=939;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
				}
				$pyjs.track.lineno=940;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), level))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()) {
					$pyjs.track.lineno=941;
					$pyjs.track.lineno=941;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=942;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return self['isEnabledFor'](level);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()) {
					$pyjs.track.lineno=943;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(self, '_log', null, kwargs, [{}, level, msg, args]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['level'],['msg']]);
			$cls_definition['log'] = $method;
			$pyjs.track.lineno=945;
			$method = $pyjs__bind_method2('findCaller', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var obj,$iter6_idx,$iter6_type,ts,$iter6_array,lineno,fname,$pyjs__trackstack_size_1,$iter6_iter,stack,$iter6_nextval;
				$pyjs.track={module:'logging', lineno:945};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=945;
				$pyjs.track.lineno=950;
				stack = $p['list']($pyjs.trackstack);
				$pyjs.track.lineno=952;
				fname = '(unknown file)';
				$pyjs.track.lineno=953;
				lineno = $constant_int_0;
				$pyjs.track.lineno=954;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter6_iter = stack;
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
					obj = $iter6_nextval.$nextval;
					$pyjs.track.lineno=955;
					ts = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['dict'](obj);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
					$pyjs.track.lineno=956;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['op_eq'](ts.__getitem__('module'), (typeof __name__ == "undefined"?$m.__name__:__name__)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
						$pyjs.track.lineno=957;
						fname = (function(){try{try{$pyjs.in_try_except += 1;
						return ts['get']('module', '(unknown file)');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
						$pyjs.track.lineno=958;
						lineno = (function(){try{try{$pyjs.in_try_except += 1;
						return ts['get']('lineno', $constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='logging';
				$pyjs.track.lineno=959;
				$pyjs.track.lineno=959;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([fname, lineno, '(unknown function)']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['findCaller'] = $method;
			$pyjs.track.lineno=961;
			$method = $pyjs__bind_method2('makeRecord', function(name, level, fn, lno, msg, args, exc_info, func, extra) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 7 || arguments.length > 9)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 10, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					level = arguments[2];
					fn = arguments[3];
					lno = arguments[4];
					msg = arguments[5];
					args = arguments[6];
					exc_info = arguments[7];
					func = arguments[8];
					extra = arguments[9];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 8 || arguments.length > 10)) $pyjs__exception_func_param(arguments.callee.__name__, 8, 10, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof func == 'undefined') func=arguments.callee.__args__[10][1];
				if (typeof extra == 'undefined') extra=arguments.callee.__args__[11][1];
				var rv,$iter7_array,$or1,$iter7_nextval,$iter7_iter,key,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1,$or2;
				$pyjs.track={module:'logging', lineno:961};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=961;
				$pyjs.track.lineno=966;
				rv = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['LogRecord'](name, level, fn, lno, msg, args, exc_info, func);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
				$pyjs.track.lineno=967;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](extra);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()) {
					$pyjs.track.lineno=968;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter7_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return extra;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
						key = $iter7_nextval.$nextval;
						$pyjs.track.lineno=969;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](($p['bool']($or1=(function(){try{try{$pyjs.in_try_except += 1;
						return $p['list'](['message', 'asctime']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})().__contains__(key))?$or1:(function(){try{try{$pyjs.in_try_except += 1;
						return rv['toDict']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})().__contains__(key)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})()) {
							$pyjs.track.lineno=970;
							$pyjs.__active_exception_stack__ = null;
							throw ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['KeyError']((function(){try{try{$pyjs.in_try_except += 1;
							return $p['sprintf']('Attempt to overwrite %r in LogRecord', key);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})());
						}
						$pyjs.track.lineno=971;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $pyjs_kwargs_call(rv, 'update', null, null, [{key:extra.__getitem__(key)}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='logging';
				}
				$pyjs.track.lineno=972;
				$pyjs.track.lineno=972;
				var $pyjs__ret = rv;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['name'],['level'],['fn'],['lno'],['msg'],['args'],['exc_info'],['func', null],['extra', null]]);
			$cls_definition['makeRecord'] = $method;
			$pyjs.track.lineno=974;
			$method = $pyjs__bind_method2('_log', function(level, msg, args, exc_info, extra) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 3 || arguments.length > 5)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 6, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					msg = arguments[2];
					args = arguments[3];
					exc_info = arguments[4];
					extra = arguments[5];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 4 || arguments.length > 6)) $pyjs__exception_func_param(arguments.callee.__name__, 4, 6, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof exc_info == 'undefined') exc_info=arguments.callee.__args__[6][1];
				if (typeof extra == 'undefined') extra=arguments.callee.__args__[7][1];
				var record,lno,func,fn;
				$pyjs.track={module:'logging', lineno:974};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=974;
				$pyjs.track.lineno=979;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($m['_srcfile']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()) {
					$pyjs.track.lineno=980;
					var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
					return self['findCaller']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})(), 3, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
					fn = $tupleassign1[0];
					lno = $tupleassign1[1];
					func = $tupleassign1[2];
				}
				else {
					$pyjs.track.lineno=982;
					var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['tuple'](['(unknown file)', $constant_int_0, '(unknown function)']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})(), 3, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
					fn = $tupleassign2[0];
					lno = $tupleassign2[1];
					func = $tupleassign2[2];
				}
				$pyjs.track.lineno=983;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](exc_info);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()) {
					$pyjs.track.lineno=984;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['isinstance'](exc_info, $p['tuple']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})()) {
						$pyjs.track.lineno=985;
						exc_info = (function(){try{try{$pyjs.in_try_except += 1;
						return $m['sys']['exc_info']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
					}
				}
				$pyjs.track.lineno=986;
				record = (function(){try{try{$pyjs.in_try_except += 1;
				return self['makeRecord']($p['getattr'](self, '$$name'), level, fn, lno, msg, args, exc_info, func, extra);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
				$pyjs.track.lineno=987;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['handle'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['level'],['msg'],['args'],['exc_info', null],['extra', null]]);
			$cls_definition['_log'] = $method;
			$pyjs.track.lineno=989;
			$method = $pyjs__bind_method2('handle', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,$and7;
				$pyjs.track={module:'logging', lineno:989};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=989;
				$pyjs.track.lineno=996;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and7=!$p['bool']($p['getattr'](self, 'disabled')))?(function(){try{try{$pyjs.in_try_except += 1;
				return self['filter'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})():$and7));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})()) {
					$pyjs.track.lineno=997;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['callHandlers'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['handle'] = $method;
			$pyjs.track.lineno=999;
			$method = $pyjs__bind_method2('addHandler', function(hdlr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hdlr = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:999};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=999;
				$pyjs.track.lineno=1003;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'handlers').__contains__(hdlr)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()) {
					$pyjs.track.lineno=1004;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['handlers']['append'](hdlr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['hdlr']]);
			$cls_definition['addHandler'] = $method;
			$pyjs.track.lineno=1006;
			$method = $pyjs__bind_method2('removeHandler', function(hdlr) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hdlr = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'logging', lineno:1006};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=1006;
				$pyjs.track.lineno=1010;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](self, 'handlers').__contains__(hdlr));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()) {
					$pyjs.track.lineno=1012;
					(function(){try{try{$pyjs.in_try_except += 1;
					return hdlr['acquire']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
					$pyjs.track.lineno=1013;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						try {
							$pyjs.in_try_except += 1;
							$pyjs.track.lineno=1014;
							(function(){try{try{$pyjs.in_try_except += 1;
							return self['handlers']['remove'](hdlr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
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
						$pyjs.track.module='logging';
					} finally {
						$pyjs.track.lineno=1016;
						(function(){try{try{$pyjs.in_try_except += 1;
						return hdlr['release']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['hdlr']]);
			$cls_definition['removeHandler'] = $method;
			$pyjs.track.lineno=1018;
			$method = $pyjs__bind_method2('callHandlers', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and9,c,$iter8_idx,$iter8_array,$iter8_iter,$and10,$add17,$iter8_nextval,$pyjs__trackstack_size_1,found,$and11,$add18,$iter8_type,hdlr;
				$pyjs.track={module:'logging', lineno:1018};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=1018;
				$pyjs.track.lineno=1028;
				c = self;
				$pyjs.track.lineno=1029;
				found = $constant_int_0;
				$pyjs.track.lineno=1030;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](c);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()) {
					$pyjs.track.lineno=1031;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter8_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](c, 'handlers');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
						hdlr = $iter8_nextval.$nextval;
						$pyjs.track.lineno=1032;
						found = $p['__op_add']($add17=found,$add18=$constant_int_1);
						$pyjs.track.lineno=1033;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](((($p['cmp']($p['getattr'](record, 'levelno'), $p['getattr'](hdlr, 'level')))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})()) {
							$pyjs.track.lineno=1034;
							(function(){try{try{$pyjs.in_try_except += 1;
							return hdlr['handle'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
						}
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='logging';
					$pyjs.track.lineno=1035;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool']($p['getattr'](c, 'propagate')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) {
						$pyjs.track.lineno=1036;
						c = null;
					}
					else {
						$pyjs.track.lineno=1038;
						c = $p['getattr'](c, 'parent');
					}
				}
				$pyjs.track.lineno=1039;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and9=$p['op_eq'](found, $constant_int_0))?($p['bool']($and10=$m['raiseExceptions'])?!$p['bool']($p['getattr']($p['getattr'](self, 'manager'), 'emittedNoHandlerWarning')):$and10):$and9));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()) {
					$pyjs.track.lineno=1040;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['sys']['stderr']['write']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']('No handlers could be found for logger "%s"\n', $p['getattr'](self, '$$name'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
					$pyjs.track.lineno=1042;
					$p['getattr'](self, 'manager').__is_instance__ && typeof $p['getattr'](self, 'manager').__setattr__ == 'function' ? $p['getattr'](self, 'manager').__setattr__('emittedNoHandlerWarning', $constant_int_1) : $p['setattr']($p['getattr'](self, 'manager'), 'emittedNoHandlerWarning', $constant_int_1); 
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['callHandlers'] = $method;
			$pyjs.track.lineno=1044;
			$method = $pyjs__bind_method2('getEffectiveLevel', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var logger;
				$pyjs.track={module:'logging', lineno:1044};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=1044;
				$pyjs.track.lineno=1051;
				logger = self;
				$pyjs.track.lineno=1052;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](logger);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})()) {
					$pyjs.track.lineno=1053;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['getattr'](logger, 'level'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})()) {
						$pyjs.track.lineno=1054;
						$pyjs.track.lineno=1054;
						var $pyjs__ret = $p['getattr'](logger, 'level');
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=1055;
					logger = $p['getattr'](logger, 'parent');
				}
				$pyjs.track.lineno=1056;
				$pyjs.track.lineno=1056;
				var $pyjs__ret = $m['NOTSET'];
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getEffectiveLevel'] = $method;
			$pyjs.track.lineno=1058;
			$method = $pyjs__bind_method2('isEnabledFor', function(level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '656bb420830917343c1767926f930921') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:1058};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=1058;
				$pyjs.track.lineno=1062;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](((($p['cmp']($p['getattr']($p['getattr'](self, 'manager'), 'disable'), level))|1) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})()) {
					$pyjs.track.lineno=1063;
					$pyjs.track.lineno=1063;
					var $pyjs__ret = $constant_int_0;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=1064;
				$pyjs.track.lineno=1064;
				var $pyjs__ret = ((($p['cmp'](level, (function(){try{try{$pyjs.in_try_except += 1;
				return self['getEffectiveLevel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()))|1) == 1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['level']]);
			$cls_definition['isEnabledFor'] = $method;
			$pyjs.track.lineno=813;
			var $bases = new Array($m['Filterer']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Logger', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1066;
		$m['RootLogger'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'logging';
			$cls_definition.__md5__ = 'a62bb2013649d36f06fc87d1441c3f9c';
			$pyjs.track.lineno=1072;
			$method = $pyjs__bind_method2('__init__', function(level) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					level = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a62bb2013649d36f06fc87d1441c3f9c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'logging', lineno:1072};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='logging';
				$pyjs.track.lineno=1072;
				$pyjs.track.lineno=1076;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Logger']['__init__'](self, 'root', level);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['level']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=1066;
			var $bases = new Array($m['Logger']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('RootLogger', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=1078;
		$m['_loggerClass'] = $m['Logger'];
		$pyjs.track.lineno=1080;
		$m['root'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['RootLogger']($m['WARNING']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
		$pyjs.track.lineno=1081;
		$m['Logger'].__is_instance__ && typeof $m['Logger'].__setattr__ == 'function' ? $m['Logger'].__setattr__('root', $m['root']) : $p['setattr']($m['Logger'], 'root', $m['root']); 
		$pyjs.track.lineno=1082;
		$m['$assign1'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['Manager']($p['getattr']($m['Logger'], 'root'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
		$m['root'].__is_instance__ && typeof $m['root'].__setattr__ == 'function' ? $m['root'].__setattr__('manager', $m['$assign1']) : $p['setattr']($m['root'], 'manager', $m['$assign1']); 
		$m['Logger'].__is_instance__ && typeof $m['Logger'].__setattr__ == 'function' ? $m['Logger'].__setattr__('manager', $m['$assign1']) : $p['setattr']($m['Logger'], 'manager', $m['$assign1']); 
		$pyjs.track.lineno=1088;
		$m['BASIC_FORMAT'] = '%(levelname)s:%(name)s:%(message)s';
		$pyjs.track.lineno=1090;
		$m['basicConfig'] = function() {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
{
				}
			}
			var fs,stream,level,fmt,dfs,filename,hdlr;
			$pyjs.track={module:'logging',lineno:1090};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1090;
			$pyjs.track.lineno=1122;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr']($m['root'], 'handlers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})()) {
				$pyjs.track.lineno=1123;
				filename = (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['get']('filename');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})();
				$pyjs.track.lineno=1124;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](filename);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()) {
					$pyjs.track.lineno=1125;
					$pyjs.__active_exception_stack__ = null;
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['NotImplementedError']('Files not supported in javascript');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})());
				}
				else {
					$pyjs.track.lineno=1127;
					stream = (function(){try{try{$pyjs.in_try_except += 1;
					return kwargs['get']('stream');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})();
					$pyjs.track.lineno=1128;
					hdlr = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['StreamHandler'](stream);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
				}
				$pyjs.track.lineno=1129;
				fs = (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['get']('format', $m['BASIC_FORMAT']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
				$pyjs.track.lineno=1130;
				dfs = (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['get']('datefmt', null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
				$pyjs.track.lineno=1131;
				fmt = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['Formatter'](fs, dfs);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
				$pyjs.track.lineno=1132;
				(function(){try{try{$pyjs.in_try_except += 1;
				return hdlr['setFormatter'](fmt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})();
				$pyjs.track.lineno=1133;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['root']['addHandler'](hdlr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})();
				$pyjs.track.lineno=1134;
				level = (function(){try{try{$pyjs.in_try_except += 1;
				return kwargs['get']('level');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})();
				$pyjs.track.lineno=1135;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](level);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})()) {
					$pyjs.track.lineno=1136;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['root']['setLevel'](level);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
				}
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['basicConfig'].__name__ = 'basicConfig';

		$m['basicConfig'].__bind_type__ = 0;
		$m['basicConfig'].__args__ = [null,['kwargs']];
		$pyjs.track.lineno=1143;
		$m['getLogger'] = function(name) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
			if (typeof name == 'undefined') name=arguments.callee.__args__[2][1];

			$pyjs.track={module:'logging',lineno:1143};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1143;
			$pyjs.track.lineno=1149;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})()) {
				$pyjs.track.lineno=1150;
				$pyjs.track.lineno=1150;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['Logger']['manager']['getLogger'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=1152;
				$pyjs.track.lineno=1152;
				var $pyjs__ret = $m['root'];
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['getLogger'].__name__ = 'getLogger';

		$m['getLogger'].__bind_type__ = 0;
		$m['getLogger'].__args__ = [null,null,['name', null]];
		$pyjs.track.lineno=1163;
		$m['critical'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[1];
					}
				} else {
				}
			}
			var $add20,$add19;
			$pyjs.track={module:'logging',lineno:1163};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1163;
			$pyjs.track.lineno=1167;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr']($m['root'], 'handlers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})()) {
				$pyjs.track.lineno=1168;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['basicConfig']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
			}
			$pyjs.track.lineno=1169;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['root']['critical']($p['__op_add']($add19=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([msg]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})(),$add20=args), kwargs);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['critical'].__name__ = 'critical';

		$m['critical'].__bind_type__ = 0;
		$m['critical'].__args__ = ['args',['kwargs'],['msg']];
		$pyjs.track.lineno=1171;
		$m['fatal'] = $m['critical'];
		$pyjs.track.lineno=1173;
		$m['error'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[1];
					}
				} else {
				}
			}
			var $add21,$add22;
			$pyjs.track={module:'logging',lineno:1173};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1173;
			$pyjs.track.lineno=1177;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr']($m['root'], 'handlers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})()) {
				$pyjs.track.lineno=1178;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['basicConfig']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
			}
			$pyjs.track.lineno=1179;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['root']['error']($p['__op_add']($add21=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([msg]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})(),$add22=args), kwargs);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['error'].__name__ = 'error';

		$m['error'].__bind_type__ = 0;
		$m['error'].__args__ = ['args',['kwargs'],['msg']];
		$pyjs.track.lineno=1181;
		$m['exception'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			var $add23,$add24;
			$pyjs.track={module:'logging',lineno:1181};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1181;
			$pyjs.track.lineno=1186;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['error']($p['__op_add']($add23=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([msg]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})(),$add24=args), (function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([['exc_info', $constant_int_1]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['exception'].__name__ = 'exception';

		$m['exception'].__bind_type__ = 0;
		$m['exception'].__args__ = ['args',null,['msg']];
		$pyjs.track.lineno=1188;
		$m['warning'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[1];
					}
				} else {
				}
			}
			var $add25,$add26;
			$pyjs.track={module:'logging',lineno:1188};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1188;
			$pyjs.track.lineno=1192;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr']($m['root'], 'handlers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})()) {
				$pyjs.track.lineno=1193;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['basicConfig']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
			}
			$pyjs.track.lineno=1194;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['root']['warning']($p['__op_add']($add25=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([msg]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})(),$add26=args), kwargs);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['warning'].__name__ = 'warning';

		$m['warning'].__bind_type__ = 0;
		$m['warning'].__args__ = ['args',['kwargs'],['msg']];
		$pyjs.track.lineno=1196;
		$m['warn'] = $m['warning'];
		$pyjs.track.lineno=1198;
		$m['info'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[1];
					}
				} else {
				}
			}
			var $add28,$add27;
			$pyjs.track={module:'logging',lineno:1198};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1198;
			$pyjs.track.lineno=1202;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr']($m['root'], 'handlers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})()) {
				$pyjs.track.lineno=1203;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['basicConfig']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
			}
			$pyjs.track.lineno=1204;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['root']['info']($p['__op_add']($add27=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([msg]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})(),$add28=args), kwargs);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['info'].__name__ = 'info';

		$m['info'].__bind_type__ = 0;
		$m['info'].__args__ = ['args',['kwargs'],['msg']];
		$pyjs.track.lineno=1206;
		$m['debug'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[1];
					}
				} else {
				}
			}
			var $add29,$add30;
			$pyjs.track={module:'logging',lineno:1206};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1206;
			$pyjs.track.lineno=1210;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr']($m['root'], 'handlers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})()) {
				$pyjs.track.lineno=1211;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['basicConfig']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})();
			}
			$pyjs.track.lineno=1212;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['root']['debug']($p['__op_add']($add29=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([msg]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})(),$add30=args), kwargs);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['debug'].__name__ = 'debug';

		$m['debug'].__bind_type__ = 0;
		$m['debug'].__args__ = ['args',['kwargs'],['msg']];
		$pyjs.track.lineno=1214;
		$m['log'] = function(level, msg) {
			if ($pyjs.options.arg_count && arguments.length < 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

			var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kwargs != 'undefined') args.__array.push(kwargs);
				kwargs = arguments[arguments.length+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof msg != 'undefined') {
					if (msg !== null && typeof msg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = msg;
						msg = arguments[2];
					}
				} else 				if (typeof level != 'undefined') {
					if (level !== null && typeof level['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = level;
						level = arguments[2];
					}
				} else {
				}
			}
			var $add31,$add32;
			$pyjs.track={module:'logging',lineno:1214};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1214;
			$pyjs.track.lineno=1218;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr']($m['root'], 'handlers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})()) {
				$pyjs.track.lineno=1219;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['basicConfig']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})();
			}
			$pyjs.track.lineno=1220;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['root']['log']($p['__op_add']($add31=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([level, msg]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})(),$add32=args), kwargs);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['log'].__name__ = 'log';

		$m['log'].__bind_type__ = 0;
		$m['log'].__args__ = ['args',['kwargs'],['level'],['msg']];
		$pyjs.track.lineno=1222;
		$m['disable'] = function(level) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'logging',lineno:1222};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1222;
			$pyjs.track.lineno=1226;
			$p['getattr']($m['root'], 'manager').__is_instance__ && typeof $p['getattr']($m['root'], 'manager').__setattr__ == 'function' ? $p['getattr']($m['root'], 'manager').__setattr__('disable', level) : $p['setattr']($p['getattr']($m['root'], 'manager'), 'disable', level); 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['disable'].__name__ = 'disable';

		$m['disable'].__bind_type__ = 0;
		$m['disable'].__args__ = [null,null,['level']];
		$pyjs.track.lineno=1228;
		$m['shutdown'] = function(handlerList) {
			if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 0, 1, arguments.length);
			if (typeof handlerList == 'undefined') handlerList=arguments.callee.__args__[2][1];
			var $iter9_iter,h,$pyjs__trackstack_size_1,$iter9_nextval,$iter9_idx,$iter9_type,$pyjs_try_err,$iter9_array;
			$pyjs.track={module:'logging',lineno:1228};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='logging';
			$pyjs.track.lineno=1228;
			$pyjs.track.lineno=1235;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter9_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['__getslice'](handlerList, 0, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
				h = $iter9_nextval.$nextval;
				$pyjs.track.lineno=1238;
				var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
				try {
					try {
						$pyjs.in_try_except += 1;
						$pyjs.track.lineno=1239;
						(function(){try{try{$pyjs.in_try_except += 1;
						return h['flush']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})();
						$pyjs.track.lineno=1240;
						(function(){try{try{$pyjs.in_try_except += 1;
						return h['close']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
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
					$pyjs.track.module='logging';
					if (true) {
						$pyjs.track.lineno=1242;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']($m['raiseExceptions']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})()) {
							$pyjs.track.lineno=1243;
							$pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__;
							$pyjs.__last_exception_stack__ = null;
							throw ($pyjs.__last_exception__?
								$pyjs.__last_exception__.error:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					}
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='logging';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['shutdown'].__name__ = 'shutdown';

		$m['shutdown'].__bind_type__ = 0;
		$m['shutdown'].__args__ = [null,null,['handlerList', $m['_handlerList']]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end logging */


/* end module: logging */


/*
PYJS_DEPS: ['sys', 'os', 'time', 'codecs', 'cStringIO', 'traceback']
*/
