/* start module: StringIO */
$pyjs.loaded_modules['StringIO'] = function (__mod_name__) {
	if($pyjs.loaded_modules['StringIO'].__was_initialized__) return $pyjs.loaded_modules['StringIO'];
	var $m = $pyjs.loaded_modules["StringIO"];
	$m.__repr__ = function() { return "<module: StringIO>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'StringIO';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'StringIO.py, line 1:\n    r"""File-like objects that read from or write to a string buffer.';
		$m.__track_lines__[31] = 'StringIO.py, line 31:\n    EINVAL = 22';
		$m.__track_lines__[33] = 'StringIO.py, line 33:\n    __all__ = ["StringIO"]';
		$m.__track_lines__[35] = 'StringIO.py, line 35:\n    def _complain_ifclosed(closed):';
		$m.__track_lines__[36] = 'StringIO.py, line 36:\n    if closed:';
		$m.__track_lines__[37] = 'StringIO.py, line 37:\n    raise ValueError, "I/O operation on closed file"';
		$m.__track_lines__[39] = 'StringIO.py, line 39:\n    class StringIO:';
		$m.__track_lines__[51] = "StringIO.py, line 51:\n    def __init__(self, buf = ''):";
		$m.__track_lines__[53] = 'StringIO.py, line 53:\n    if not isinstance(buf, basestring):';
		$m.__track_lines__[54] = 'StringIO.py, line 54:\n    buf = str(buf)';
		$m.__track_lines__[55] = 'StringIO.py, line 55:\n    self.buf = buf';
		$m.__track_lines__[56] = 'StringIO.py, line 56:\n    self.len = len(buf)';
		$m.__track_lines__[57] = 'StringIO.py, line 57:\n    self.buflist = []';
		$m.__track_lines__[58] = 'StringIO.py, line 58:\n    self.pos = 0';
		$m.__track_lines__[59] = 'StringIO.py, line 59:\n    self.closed = False';
		$m.__track_lines__[60] = 'StringIO.py, line 60:\n    self.softspace = 0';
		$m.__track_lines__[62] = 'StringIO.py, line 62:\n    def __iter__(self):';
		$m.__track_lines__[63] = 'StringIO.py, line 63:\n    return self';
		$m.__track_lines__[65] = 'StringIO.py, line 65:\n    def next(self):';
		$m.__track_lines__[72] = 'StringIO.py, line 72:\n    _complain_ifclosed(self.closed)';
		$m.__track_lines__[73] = 'StringIO.py, line 73:\n    r = self.readline()';
		$m.__track_lines__[74] = 'StringIO.py, line 74:\n    if not r:';
		$m.__track_lines__[75] = 'StringIO.py, line 75:\n    raise StopIteration';
		$m.__track_lines__[76] = 'StringIO.py, line 76:\n    return r';
		$m.__track_lines__[78] = 'StringIO.py, line 78:\n    def close(self):';
		$m.__track_lines__[81] = 'StringIO.py, line 81:\n    if not self.closed:';
		$m.__track_lines__[82] = 'StringIO.py, line 82:\n    self.closed = True';
		$m.__track_lines__[83] = 'StringIO.py, line 83:\n    del self.buf, self.pos';
		$m.__track_lines__[85] = 'StringIO.py, line 85:\n    def isatty(self):';
		$m.__track_lines__[89] = 'StringIO.py, line 89:\n    _complain_ifclosed(self.closed)';
		$m.__track_lines__[90] = 'StringIO.py, line 90:\n    return False';
		$m.__track_lines__[92] = 'StringIO.py, line 92:\n    def seek(self, pos, mode = 0):';
		$m.__track_lines__[101] = 'StringIO.py, line 101:\n    _complain_ifclosed(self.closed)';
		$m.__track_lines__[102] = 'StringIO.py, line 102:\n    if self.buflist:';
		$m.__track_lines__[103] = "StringIO.py, line 103:\n    self.buf += ''.join(self.buflist)";
		$m.__track_lines__[104] = 'StringIO.py, line 104:\n    self.buflist = []';
		$m.__track_lines__[105] = 'StringIO.py, line 105:\n    if mode == 1:';
		$m.__track_lines__[106] = 'StringIO.py, line 106:\n    pos += self.pos';
		$m.__track_lines__[108] = 'StringIO.py, line 108:\n    pos += self.len';
		$m.__track_lines__[109] = 'StringIO.py, line 109:\n    self.pos = max(0, pos)';
		$m.__track_lines__[111] = 'StringIO.py, line 111:\n    def tell(self):';
		$m.__track_lines__[113] = 'StringIO.py, line 113:\n    _complain_ifclosed(self.closed)';
		$m.__track_lines__[114] = 'StringIO.py, line 114:\n    return self.pos';
		$m.__track_lines__[116] = 'StringIO.py, line 116:\n    def read(self, n = -1):';
		$m.__track_lines__[124] = 'StringIO.py, line 124:\n    _complain_ifclosed(self.closed)';
		$m.__track_lines__[125] = 'StringIO.py, line 125:\n    if self.buflist:';
		$m.__track_lines__[126] = "StringIO.py, line 126:\n    self.buf += ''.join(self.buflist)";
		$m.__track_lines__[127] = 'StringIO.py, line 127:\n    self.buflist = []';
		$m.__track_lines__[128] = 'StringIO.py, line 128:\n    if n < 0:';
		$m.__track_lines__[129] = 'StringIO.py, line 129:\n    newpos = self.len';
		$m.__track_lines__[131] = 'StringIO.py, line 131:\n    newpos = min(self.pos+n, self.len)';
		$m.__track_lines__[132] = 'StringIO.py, line 132:\n    r = self.buf[self.pos:newpos]';
		$m.__track_lines__[133] = 'StringIO.py, line 133:\n    self.pos = newpos';
		$m.__track_lines__[134] = 'StringIO.py, line 134:\n    return r';
		$m.__track_lines__[136] = 'StringIO.py, line 136:\n    def readline(self, length=None):';
		$m.__track_lines__[149] = 'StringIO.py, line 149:\n    _complain_ifclosed(self.closed)';
		$m.__track_lines__[150] = 'StringIO.py, line 150:\n    if self.buflist:';
		$m.__track_lines__[151] = "StringIO.py, line 151:\n    self.buf += ''.join(self.buflist)";
		$m.__track_lines__[152] = 'StringIO.py, line 152:\n    self.buflist = []';
		$m.__track_lines__[153] = "StringIO.py, line 153:\n    i = self.buf.find('\\n', self.pos)";
		$m.__track_lines__[154] = 'StringIO.py, line 154:\n    if i < 0:';
		$m.__track_lines__[155] = 'StringIO.py, line 155:\n    newpos = self.len';
		$m.__track_lines__[157] = 'StringIO.py, line 157:\n    newpos = i+1';
		$m.__track_lines__[158] = 'StringIO.py, line 158:\n    if length is not None:';
		$m.__track_lines__[159] = 'StringIO.py, line 159:\n    if self.pos + length < newpos:';
		$m.__track_lines__[160] = 'StringIO.py, line 160:\n    newpos = self.pos + length';
		$m.__track_lines__[161] = 'StringIO.py, line 161:\n    r = self.buf[self.pos:newpos]';
		$m.__track_lines__[162] = 'StringIO.py, line 162:\n    self.pos = newpos';
		$m.__track_lines__[163] = 'StringIO.py, line 163:\n    return r';
		$m.__track_lines__[165] = 'StringIO.py, line 165:\n    def readlines(self, sizehint = 0):';
		$m.__track_lines__[173] = 'StringIO.py, line 173:\n    total = 0';
		$m.__track_lines__[174] = 'StringIO.py, line 174:\n    lines = []';
		$m.__track_lines__[175] = 'StringIO.py, line 175:\n    line = self.readline()';
		$m.__track_lines__[176] = 'StringIO.py, line 176:\n    while line:';
		$m.__track_lines__[177] = 'StringIO.py, line 177:\n    lines.append(line)';
		$m.__track_lines__[178] = 'StringIO.py, line 178:\n    total += len(line)';
		$m.__track_lines__[179] = 'StringIO.py, line 179:\n    if 0 < sizehint <= total:';
		$m.__track_lines__[180] = 'StringIO.py, line 180:\n    break';
		$m.__track_lines__[181] = 'StringIO.py, line 181:\n    line = self.readline()';
		$m.__track_lines__[182] = 'StringIO.py, line 182:\n    return lines';
		$m.__track_lines__[184] = 'StringIO.py, line 184:\n    def truncate(self, size=None):';
		$m.__track_lines__[195] = 'StringIO.py, line 195:\n    _complain_ifclosed(self.closed)';
		$m.__track_lines__[196] = 'StringIO.py, line 196:\n    if size is None:';
		$m.__track_lines__[197] = 'StringIO.py, line 197:\n    size = self.pos';
		$m.__track_lines__[199] = 'StringIO.py, line 199:\n    raise IOError(EINVAL, "Negative size not allowed")';
		$m.__track_lines__[201] = 'StringIO.py, line 201:\n    self.pos = size';
		$m.__track_lines__[202] = 'StringIO.py, line 202:\n    self.buf = self.getvalue()[:size]';
		$m.__track_lines__[203] = 'StringIO.py, line 203:\n    self.len = size';
		$m.__track_lines__[205] = 'StringIO.py, line 205:\n    def write(self, s):';
		$m.__track_lines__[210] = 'StringIO.py, line 210:\n    _complain_ifclosed(self.closed)';
		$m.__track_lines__[211] = 'StringIO.py, line 211:\n    if not s: return';
		$m.__track_lines__[213] = 'StringIO.py, line 213:\n    if not isinstance(s, basestring):';
		$m.__track_lines__[214] = 'StringIO.py, line 214:\n    s = str(s)';
		$m.__track_lines__[215] = 'StringIO.py, line 215:\n    spos = self.pos';
		$m.__track_lines__[216] = 'StringIO.py, line 216:\n    slen = self.len';
		$m.__track_lines__[217] = 'StringIO.py, line 217:\n    if spos == slen:';
		$m.__track_lines__[218] = 'StringIO.py, line 218:\n    self.buflist.append(s)';
		$m.__track_lines__[219] = 'StringIO.py, line 219:\n    self.len = self.pos = spos + len(s)';
		$m.__track_lines__[220] = 'StringIO.py, line 220:\n    return';
		$m.__track_lines__[221] = 'StringIO.py, line 221:\n    if spos > slen:';
		$m.__track_lines__[222] = "StringIO.py, line 222:\n    self.buflist.append('\\0'*(spos - slen))";
		$m.__track_lines__[223] = 'StringIO.py, line 223:\n    slen = spos';
		$m.__track_lines__[224] = 'StringIO.py, line 224:\n    newpos = spos + len(s)';
		$m.__track_lines__[225] = 'StringIO.py, line 225:\n    if spos < slen:';
		$m.__track_lines__[226] = 'StringIO.py, line 226:\n    if self.buflist:';
		$m.__track_lines__[227] = "StringIO.py, line 227:\n    self.buf += ''.join(self.buflist)";
		$m.__track_lines__[228] = 'StringIO.py, line 228:\n    self.buflist = [self.buf[:spos], s, self.buf[newpos:]]';
		$m.__track_lines__[229] = "StringIO.py, line 229:\n    self.buf = ''";
		$m.__track_lines__[230] = 'StringIO.py, line 230:\n    if newpos > slen:';
		$m.__track_lines__[231] = 'StringIO.py, line 231:\n    slen = newpos';
		$m.__track_lines__[233] = 'StringIO.py, line 233:\n    self.buflist.append(s)';
		$m.__track_lines__[234] = 'StringIO.py, line 234:\n    slen = newpos';
		$m.__track_lines__[235] = 'StringIO.py, line 235:\n    self.len = slen';
		$m.__track_lines__[236] = 'StringIO.py, line 236:\n    self.pos = newpos';
		$m.__track_lines__[238] = 'StringIO.py, line 238:\n    def writelines(self, iterable):';
		$m.__track_lines__[246] = 'StringIO.py, line 246:\n    write = self.write';
		$m.__track_lines__[247] = 'StringIO.py, line 247:\n    for line in iterable:';
		$m.__track_lines__[248] = 'StringIO.py, line 248:\n    write(line)';
		$m.__track_lines__[250] = 'StringIO.py, line 250:\n    def flush(self):';
		$m.__track_lines__[253] = 'StringIO.py, line 253:\n    _complain_ifclosed(self.closed)';
		$m.__track_lines__[255] = 'StringIO.py, line 255:\n    def getvalue(self):';
		$m.__track_lines__[266] = 'StringIO.py, line 266:\n    if self.buflist:';
		$m.__track_lines__[267] = "StringIO.py, line 267:\n    self.buf += ''.join(self.buflist)";
		$m.__track_lines__[268] = 'StringIO.py, line 268:\n    self.buflist = []';
		$m.__track_lines__[269] = 'StringIO.py, line 269:\n    return self.buf';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_22 = new $p['int'](22);
		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='StringIO';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=31;
		$m['EINVAL'] = $constant_int_22;
		$pyjs.track.lineno=33;
		$m['__all__'] = $p['list'](['StringIO']);
		$pyjs.track.lineno=35;
		$m['_complain_ifclosed'] = function(closed) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool1;
			$pyjs.track={module:'StringIO',lineno:35};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='StringIO';
			$pyjs.track.lineno=35;
			$pyjs.track.lineno=36;
			if ((($bool1=closed) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$pyjs.track.lineno=37;
				$pyjs.__active_exception_stack__ = null;

				var $pyjs__raise_expr1 = $p['ValueError'];
				var $pyjs__raise_expr2 = 'I/O operation on closed file';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $p['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_complain_ifclosed'].__name__ = '_complain_ifclosed';

		$m['_complain_ifclosed'].__bind_type__ = 0;
		$m['_complain_ifclosed'].__args__ = [null,null,['closed']];
		$pyjs.track.lineno=39;
		$m['StringIO'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'StringIO';
			$cls_definition.__md5__ = '7867fcfd276154164660d274780ef8e6';
			$pyjs.track.lineno=51;
			$method = $pyjs__bind_method2('__init__', function(buf) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					buf = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof buf == 'undefined') buf=arguments.callee.__args__[3][1];
				var $bool2,$bool3,$len1;
				$pyjs.track={module:'StringIO', lineno:51};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=51;
				$pyjs.track.lineno=53;
				if ((($bool3=!(($bool2=$p['isinstance'](buf, $p['basestring'])) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs.track.lineno=54;
					buf = $p['str'](buf);
				}
				$pyjs.track.lineno=55;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buf', buf) : $p['setattr'](self, 'buf', buf); 
				$pyjs.track.lineno=56;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('len', (($len1=buf) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1)))))) : $p['setattr'](self, 'len', (($len1=buf) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1)))))); 
				$pyjs.track.lineno=57;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buflist', $p['list']([])) : $p['setattr'](self, 'buflist', $p['list']([])); 
				$pyjs.track.lineno=58;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', $constant_int_0) : $p['setattr'](self, 'pos', $constant_int_0); 
				$pyjs.track.lineno=59;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('closed', false) : $p['setattr'](self, 'closed', false); 
				$pyjs.track.lineno=60;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('softspace', $constant_int_0) : $p['setattr'](self, 'softspace', $constant_int_0); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['buf', '']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=62;
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
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringIO', lineno:62};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=62;
				$pyjs.track.lineno=63;
				$pyjs.track.lineno=63;
				var $pyjs__ret = self;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs.track.lineno=65;
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
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r,$bool4,$bool5;
				$pyjs.track={module:'StringIO', lineno:65};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=65;
				$pyjs.track.lineno=72;
				$m['_complain_ifclosed']($p['getattr'](self, 'closed'));
				$pyjs.track.lineno=73;
				r = self['readline']();
				$pyjs.track.lineno=74;
				if ((($bool5=!(($bool4=r) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$pyjs.track.lineno=75;
					$pyjs.__active_exception_stack__ = null;
					throw ($p['StopIteration']);
				}
				$pyjs.track.lineno=76;
				$pyjs.track.lineno=76;
				var $pyjs__ret = r;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['next'] = $method;
			$pyjs.track.lineno=78;
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
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool6,$bool7;
				$pyjs.track={module:'StringIO', lineno:78};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=78;
				$pyjs.track.lineno=81;
				if ((($bool7=!(($bool6=$p['getattr'](self, 'closed')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$pyjs.track.lineno=82;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('closed', true) : $p['setattr'](self, 'closed', true); 
					$pyjs.track.lineno=83;
					$pyjs.track.lineno=83;
					$p['delattr'](self, 'buf');
					$pyjs.track.lineno=83;
					$p['delattr'](self, 'pos');
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['close'] = $method;
			$pyjs.track.lineno=85;
			$method = $pyjs__bind_method2('isatty', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringIO', lineno:85};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=85;
				$pyjs.track.lineno=89;
				$m['_complain_ifclosed']($p['getattr'](self, 'closed'));
				$pyjs.track.lineno=90;
				$pyjs.track.lineno=90;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isatty'] = $method;
			$pyjs.track.lineno=92;
			$method = $pyjs__bind_method2('seek', function(pos, mode) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					mode = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof mode == 'undefined') mode=arguments.callee.__args__[4][1];
				var $bool10,$add2,$add3,$add1,$add6,$add4,$add5,$bool8,$bool9;
				$pyjs.track={module:'StringIO', lineno:92};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=92;
				$pyjs.track.lineno=101;
				$m['_complain_ifclosed']($p['getattr'](self, 'closed'));
				$pyjs.track.lineno=102;
				if ((($bool8=$p['getattr'](self, 'buflist')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					$pyjs.track.lineno=103;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buf', (typeof ($add1=$p['getattr'](self, 'buf'))==typeof ($add2=''['join']($p['getattr'](self, 'buflist'))) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))) : $p['setattr'](self, 'buf', (typeof ($add1=$p['getattr'](self, 'buf'))==typeof ($add2=''['join']($p['getattr'](self, 'buflist'))) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))); 
					$pyjs.track.lineno=104;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buflist', $p['list']([])) : $p['setattr'](self, 'buflist', $p['list']([])); 
				}
				$pyjs.track.lineno=105;
				if ((($bool9=$p['op_eq'](mode, $constant_int_1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					$pyjs.track.lineno=106;
					pos = (typeof ($add3=pos)==typeof ($add4=$p['getattr'](self, 'pos')) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
				}
				else if ((($bool10=$p['op_eq'](mode, $constant_int_2)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					$pyjs.track.lineno=108;
					pos = (typeof ($add5=pos)==typeof ($add6=$p['getattr'](self, 'len')) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				$pyjs.track.lineno=109;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', $p['max']($constant_int_0, pos)) : $p['setattr'](self, 'pos', $p['max']($constant_int_0, pos)); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['pos'],['mode', $constant_int_0]]);
			$cls_definition['seek'] = $method;
			$pyjs.track.lineno=111;
			$method = $pyjs__bind_method2('tell', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringIO', lineno:111};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=111;
				$pyjs.track.lineno=113;
				$m['_complain_ifclosed']($p['getattr'](self, 'closed'));
				$pyjs.track.lineno=114;
				$pyjs.track.lineno=114;
				var $pyjs__ret = $p['getattr'](self, 'pos');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['tell'] = $method;
			$pyjs.track.lineno=116;
			$method = $pyjs__bind_method2('read', function(n) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					n = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof n == 'undefined') n=arguments.callee.__args__[3][1];
				var $cmp1,$cmp2,$bool11,r,$add10,$add7,newpos,$add8,$add9,$bool12;
				$pyjs.track={module:'StringIO', lineno:116};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=116;
				$pyjs.track.lineno=124;
				$m['_complain_ifclosed']($p['getattr'](self, 'closed'));
				$pyjs.track.lineno=125;
				if ((($bool11=$p['getattr'](self, 'buflist')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					$pyjs.track.lineno=126;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buf', (typeof ($add7=$p['getattr'](self, 'buf'))==typeof ($add8=''['join']($p['getattr'](self, 'buflist'))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8))) : $p['setattr'](self, 'buf', (typeof ($add7=$p['getattr'](self, 'buf'))==typeof ($add8=''['join']($p['getattr'](self, 'buflist'))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8))); 
					$pyjs.track.lineno=127;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buflist', $p['list']([])) : $p['setattr'](self, 'buflist', $p['list']([])); 
				}
				$pyjs.track.lineno=128;
				if ((($bool12=((($cmp1=n)===($cmp2=$constant_int_0)?0:
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
					$pyjs.track.lineno=129;
					newpos = $p['getattr'](self, 'len');
				}
				else {
					$pyjs.track.lineno=131;
					newpos = $p['min']((typeof ($add9=$p['getattr'](self, 'pos'))==typeof ($add10=n) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)), $p['getattr'](self, 'len'));
				}
				$pyjs.track.lineno=132;
				r = $p['__getslice']($p['getattr'](self, 'buf'), $p['getattr'](self, 'pos'), newpos);
				$pyjs.track.lineno=133;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', newpos) : $p['setattr'](self, 'pos', newpos); 
				$pyjs.track.lineno=134;
				$pyjs.track.lineno=134;
				var $pyjs__ret = r;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['n', (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))]]);
			$cls_definition['read'] = $method;
			$pyjs.track.lineno=136;
			$method = $pyjs__bind_method2('readline', function(length) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					length = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof length == 'undefined') length=arguments.callee.__args__[3][1];
				var $add16,$cmp4,$cmp6,$cmp5,$cmp3,i,$bool13,$bool14,$bool15,$bool16,$add14,$add15,$add17,$add11,$add12,$add13,r,$add18,newpos;
				$pyjs.track={module:'StringIO', lineno:136};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=136;
				$pyjs.track.lineno=149;
				$m['_complain_ifclosed']($p['getattr'](self, 'closed'));
				$pyjs.track.lineno=150;
				if ((($bool13=$p['getattr'](self, 'buflist')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					$pyjs.track.lineno=151;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buf', (typeof ($add11=$p['getattr'](self, 'buf'))==typeof ($add12=''['join']($p['getattr'](self, 'buflist'))) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12))) : $p['setattr'](self, 'buf', (typeof ($add11=$p['getattr'](self, 'buf'))==typeof ($add12=''['join']($p['getattr'](self, 'buflist'))) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12))); 
					$pyjs.track.lineno=152;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buflist', $p['list']([])) : $p['setattr'](self, 'buflist', $p['list']([])); 
				}
				$pyjs.track.lineno=153;
				i = self['buf']['find']('\n', $p['getattr'](self, 'pos'));
				$pyjs.track.lineno=154;
				if ((($bool14=((($cmp3=i)===($cmp4=$constant_int_0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					$pyjs.track.lineno=155;
					newpos = $p['getattr'](self, 'len');
				}
				else {
					$pyjs.track.lineno=157;
					newpos = (typeof ($add13=i)==typeof ($add14=$constant_int_1) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
				}
				$pyjs.track.lineno=158;
				if ((($bool15=!$p['op_is'](length, null)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					$pyjs.track.lineno=159;
					if ((($bool16=((($cmp5=(typeof ($add15=$p['getattr'](self, 'pos'))==typeof ($add16=length) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16)))===($cmp6=newpos)?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
						$pyjs.track.lineno=160;
						newpos = (typeof ($add17=$p['getattr'](self, 'pos'))==typeof ($add18=length) && (typeof $add17=='number'||typeof $add17=='string')?
							$add17+$add18:
							$p['op_add']($add17,$add18));
					}
				}
				$pyjs.track.lineno=161;
				r = $p['__getslice']($p['getattr'](self, 'buf'), $p['getattr'](self, 'pos'), newpos);
				$pyjs.track.lineno=162;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', newpos) : $p['setattr'](self, 'pos', newpos); 
				$pyjs.track.lineno=163;
				$pyjs.track.lineno=163;
				var $pyjs__ret = r;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['length', null]]);
			$cls_definition['readline'] = $method;
			$pyjs.track.lineno=165;
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
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sizehint == 'undefined') sizehint=arguments.callee.__args__[3][1];
				var $bool18,$cmp7,$add20,lines,$cmp8,$bool17,$len2,$cmp10,$cmp9,line,total,$add19;
				$pyjs.track={module:'StringIO', lineno:165};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=165;
				$pyjs.track.lineno=173;
				total = $constant_int_0;
				$pyjs.track.lineno=174;
				lines = $p['list']([]);
				$pyjs.track.lineno=175;
				line = self['readline']();
				$pyjs.track.lineno=176;
				while ((($bool17=line) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					$pyjs.track.lineno=177;
					lines['append'](line);
					$pyjs.track.lineno=178;
					total = (typeof ($add19=total)==typeof ($add20=(($len2=line) === null?$constant_int_0:
						(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
							(typeof $len2.__len__ == 'function'?$len2.__len__():
								(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
									$p['len']($len2)))))) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20));
					$pyjs.track.lineno=179;
					if ((($bool18=(((($cmp7=$constant_int_0)===($cmp8=($compare1 = sizehint))?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))) == -1)&&((($cmp9=$compare1)===($cmp10=($compare2 = total))?0:
						(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
							($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
							$p['cmp']($cmp9, $cmp10))) < 1))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
						$pyjs.track.lineno=180;
						break;
					}
					$pyjs.track.lineno=181;
					line = self['readline']();
				}
				$pyjs.track.lineno=182;
				$pyjs.track.lineno=182;
				var $pyjs__ret = lines;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sizehint', $constant_int_0]]);
			$cls_definition['readlines'] = $method;
			$pyjs.track.lineno=184;
			$method = $pyjs__bind_method2('truncate', function(size) {
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
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments.callee.__args__[3][1];
				var $bool19,$cmp14,$cmp11,$bool20,$cmp13,$cmp12,$bool21;
				$pyjs.track={module:'StringIO', lineno:184};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=184;
				$pyjs.track.lineno=195;
				$m['_complain_ifclosed']($p['getattr'](self, 'closed'));
				$pyjs.track.lineno=196;
				if ((($bool19=$p['op_is'](size, null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					$pyjs.track.lineno=197;
					size = $p['getattr'](self, 'pos');
				}
				else if ((($bool20=((($cmp11=size)===($cmp12=$constant_int_0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					$pyjs.track.lineno=199;
					$pyjs.__active_exception_stack__ = null;
					throw ((typeof IOError == "undefined"?$m.IOError:IOError)($m['EINVAL'], 'Negative size not allowed'));
				}
				else if ((($bool21=((($cmp13=size)===($cmp14=$p['getattr'](self, 'pos'))?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					$pyjs.track.lineno=201;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', size) : $p['setattr'](self, 'pos', size); 
				}
				$pyjs.track.lineno=202;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buf', $p['__getslice'](self['getvalue'](), 0, size)) : $p['setattr'](self, 'buf', $p['__getslice'](self['getvalue'](), 0, size)); 
				$pyjs.track.lineno=203;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('len', size) : $p['setattr'](self, 'len', size); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['size', null]]);
			$cls_definition['truncate'] = $method;
			$pyjs.track.lineno=205;
			$method = $pyjs__bind_method2('write', function(s) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					s = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var slen,$add24,$cmp20,$add26,$add21,$add22,$add25,$cmp18,$bool25,$bool24,$bool27,$bool26,$bool23,$bool22,$sub2,$sub1,$bool29,$bool28,$bool30,spos,$cmp15,$cmp17,$cmp16,$cmp19,$mul2,$mul1,newpos,$len4,$assign1,$len3,$add23;
				$pyjs.track={module:'StringIO', lineno:205};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=205;
				$pyjs.track.lineno=210;
				$m['_complain_ifclosed']($p['getattr'](self, 'closed'));
				$pyjs.track.lineno=211;
				if ((($bool23=!(($bool22=s) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					$pyjs.track.lineno=211;
					$pyjs.track.lineno=211;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=213;
				if ((($bool25=!(($bool24=$p['isinstance'](s, $p['basestring'])) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24.__nonzero__=='function'?
							$bool24.__nonzero__() :
							(typeof $bool24.__len__=='function'?
								($bool24.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					$pyjs.track.lineno=214;
					s = $p['str'](s);
				}
				$pyjs.track.lineno=215;
				spos = $p['getattr'](self, 'pos');
				$pyjs.track.lineno=216;
				slen = $p['getattr'](self, 'len');
				$pyjs.track.lineno=217;
				if ((($bool26=$p['op_eq'](spos, slen)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					$pyjs.track.lineno=218;
					self['buflist']['append'](s);
					$pyjs.track.lineno=219;
					$assign1 = (typeof ($add21=spos)==typeof ($add22=(($len3=s) === null?$constant_int_0:
						(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
							(typeof $len3.__len__ == 'function'?$len3.__len__():
								(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
									$p['len']($len3)))))) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22));
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('len', $assign1) : $p['setattr'](self, 'len', $assign1); 
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', $assign1) : $p['setattr'](self, 'pos', $assign1); 
					$pyjs.track.lineno=220;
					$pyjs.track.lineno=220;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=221;
				if ((($bool27=((($cmp15=spos)===($cmp16=slen)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					$pyjs.track.lineno=222;
					self['buflist']['append']((typeof ($mul1='\x00')==typeof ($mul2=(typeof ($sub1=spos)==typeof ($sub2=slen) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2))) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
					$pyjs.track.lineno=223;
					slen = spos;
				}
				$pyjs.track.lineno=224;
				newpos = (typeof ($add23=spos)==typeof ($add24=(($len4=s) === null?$constant_int_0:
					(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
								$p['len']($len4)))))) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24));
				$pyjs.track.lineno=225;
				if ((($bool28=((($cmp17=spos)===($cmp18=slen)?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					$pyjs.track.lineno=226;
					if ((($bool29=$p['getattr'](self, 'buflist')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
						$pyjs.track.lineno=227;
						self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buf', (typeof ($add25=$p['getattr'](self, 'buf'))==typeof ($add26=''['join']($p['getattr'](self, 'buflist'))) && (typeof $add25=='number'||typeof $add25=='string')?
							$add25+$add26:
							$p['op_add']($add25,$add26))) : $p['setattr'](self, 'buf', (typeof ($add25=$p['getattr'](self, 'buf'))==typeof ($add26=''['join']($p['getattr'](self, 'buflist'))) && (typeof $add25=='number'||typeof $add25=='string')?
							$add25+$add26:
							$p['op_add']($add25,$add26))); 
					}
					$pyjs.track.lineno=228;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buflist', $p['list']([$p['__getslice']($p['getattr'](self, 'buf'), 0, spos), s, $p['__getslice']($p['getattr'](self, 'buf'), newpos, null)])) : $p['setattr'](self, 'buflist', $p['list']([$p['__getslice']($p['getattr'](self, 'buf'), 0, spos), s, $p['__getslice']($p['getattr'](self, 'buf'), newpos, null)])); 
					$pyjs.track.lineno=229;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buf', '') : $p['setattr'](self, 'buf', ''); 
					$pyjs.track.lineno=230;
					if ((($bool30=((($cmp19=newpos)===($cmp20=slen)?0:
						(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
							($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
							$p['cmp']($cmp19, $cmp20))) == 1)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
						$pyjs.track.lineno=231;
						slen = newpos;
					}
				}
				else {
					$pyjs.track.lineno=233;
					self['buflist']['append'](s);
					$pyjs.track.lineno=234;
					slen = newpos;
				}
				$pyjs.track.lineno=235;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('len', slen) : $p['setattr'](self, 'len', slen); 
				$pyjs.track.lineno=236;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pos', newpos) : $p['setattr'](self, 'pos', newpos); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['s']]);
			$cls_definition['write'] = $method;
			$pyjs.track.lineno=238;
			$method = $pyjs__bind_method2('writelines', function(iterable) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					iterable = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,write,$iter1_array,$pyjs__trackstack_size_1,line,$iter1_idx;
				$pyjs.track={module:'StringIO', lineno:238};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=238;
				$pyjs.track.lineno=246;
				write = $p['getattr'](self, 'write');
				$pyjs.track.lineno=247;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = iterable;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					line = $iter1_nextval;
					$pyjs.track.lineno=248;
					write(line);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='StringIO';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['iterable']]);
			$cls_definition['writelines'] = $method;
			$pyjs.track.lineno=250;
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
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'StringIO', lineno:250};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=250;
				$pyjs.track.lineno=253;
				$m['_complain_ifclosed']($p['getattr'](self, 'closed'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['flush'] = $method;
			$pyjs.track.lineno=255;
			$method = $pyjs__bind_method2('getvalue', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7867fcfd276154164660d274780ef8e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add28,$bool31,$add27;
				$pyjs.track={module:'StringIO', lineno:255};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='StringIO';
				$pyjs.track.lineno=255;
				$pyjs.track.lineno=266;
				if ((($bool31=$p['getattr'](self, 'buflist')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					$pyjs.track.lineno=267;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buf', (typeof ($add27=$p['getattr'](self, 'buf'))==typeof ($add28=''['join']($p['getattr'](self, 'buflist'))) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28))) : $p['setattr'](self, 'buf', (typeof ($add27=$p['getattr'](self, 'buf'))==typeof ($add28=''['join']($p['getattr'](self, 'buflist'))) && (typeof $add27=='number'||typeof $add27=='string')?
						$add27+$add28:
						$p['op_add']($add27,$add28))); 
					$pyjs.track.lineno=268;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('buflist', $p['list']([])) : $p['setattr'](self, 'buflist', $p['list']([])); 
				}
				$pyjs.track.lineno=269;
				$pyjs.track.lineno=269;
				var $pyjs__ret = $p['getattr'](self, 'buf');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getvalue'] = $method;
			$pyjs.track.lineno=39;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('StringIO', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end StringIO */


/* end module: StringIO */


