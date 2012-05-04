/* start module: pyjamas.Location */
$pyjs.loaded_modules['pyjamas.Location'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Location'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Location'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Location"];
	$m.__repr__ = function() { return "<module: pyjamas.Location>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Location';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['Location'] = $pyjs.loaded_modules['pyjamas.Location'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Location.py, line 1:\n    from __pyjamas__ import JS, unescape';
		$m.__track_lines__[3] = 'pyjamas.Location.py, line 3:\n    def makeUrlDict(urlstring):';
		$m.__track_lines__[4] = 'pyjamas.Location.py, line 4:\n    dict = {}';
		$m.__track_lines__[5] = 'pyjamas.Location.py, line 5:\n    pairs = urlstring.split("&")';
		$m.__track_lines__[6] = 'pyjamas.Location.py, line 6:\n    for pair in pairs:';
		$m.__track_lines__[7] = 'pyjamas.Location.py, line 7:\n    if len(pair) < 3: continue';
		$m.__track_lines__[8] = 'pyjamas.Location.py, line 8:\n    kv = pair.split("=",1)';
		$m.__track_lines__[9] = 'pyjamas.Location.py, line 9:\n    dict[kv[0]] = kv[1]';
		$m.__track_lines__[10] = 'pyjamas.Location.py, line 10:\n    return dict';
		$m.__track_lines__[12] = 'pyjamas.Location.py, line 12:\n    def makeUrlStringFromDict(d):';
		$m.__track_lines__[13] = 'pyjamas.Location.py, line 13:\n    pairs = []';
		$m.__track_lines__[14] = 'pyjamas.Location.py, line 14:\n    for k,v in d.iteritems():';
		$m.__track_lines__[15] = 'pyjamas.Location.py, line 15:\n    pairs.append(k+"="+v)';
		$m.__track_lines__[16] = 'pyjamas.Location.py, line 16:\n    return "&".join(pairs)';
		$m.__track_lines__[18] = 'pyjamas.Location.py, line 4:\n    dict = {} ... class Location:';
		$m.__track_lines__[26] = 'pyjamas.Location.py, line 26:\n    def __init__(self, location):';
		$m.__track_lines__[27] = 'pyjamas.Location.py, line 27:\n    self.location = location';
		$m.__track_lines__[28] = 'pyjamas.Location.py, line 28:\n    self.searchDict = None';
		$m.__track_lines__[30] = 'pyjamas.Location.py, line 4:\n    dict = {} ... def getHash(self):';
		$m.__track_lines__[33] = 'pyjamas.Location.py, line 33:\n    def getHashDict(self):';
		$m.__track_lines__[34] = 'pyjamas.Location.py, line 34:\n    if not self.hashDict or self.hashDictHash != self.getHash():';
		$m.__track_lines__[35] = 'pyjamas.Location.py, line 35:\n    self.hashDictHash = self.getHash()';
		$m.__track_lines__[36] = 'pyjamas.Location.py, line 36:\n    self.hashDict = makeUrlDict(self.getHash()[1:])';
		$m.__track_lines__[37] = 'pyjamas.Location.py, line 37:\n    return self.hashDict';
		$m.__track_lines__[39] = 'pyjamas.Location.py, line 39:\n    def getHost(self):';
		$m.__track_lines__[40] = 'pyjamas.Location.py, line 40:\n    return self.location.host';
		$m.__track_lines__[42] = 'pyjamas.Location.py, line 42:\n    def getHostname(self):';
		$m.__track_lines__[43] = 'pyjamas.Location.py, line 43:\n    return self.location.hostname';
		$m.__track_lines__[45] = 'pyjamas.Location.py, line 45:\n    def getHref(self):';
		$m.__track_lines__[46] = 'pyjamas.Location.py, line 46:\n    return self.location.href';
		$m.__track_lines__[48] = 'pyjamas.Location.py, line 48:\n    def getPageHref(self):';
		$m.__track_lines__[52] = 'pyjamas.Location.py, line 52:\n    href = self.location.href';
		$m.__track_lines__[53] = 'pyjamas.Location.py, line 53:\n    if href.find("?"): href = href.split("?")[0]';
		$m.__track_lines__[54] = 'pyjamas.Location.py, line 54:\n    if href.find("#"): href = href.split("#")[0]';
		$m.__track_lines__[55] = 'pyjamas.Location.py, line 55:\n    return href';
		$m.__track_lines__[57] = 'pyjamas.Location.py, line 57:\n    def getPathname(self):';
		$m.__track_lines__[58] = 'pyjamas.Location.py, line 58:\n    return self.location.pathname';
		$m.__track_lines__[60] = 'pyjamas.Location.py, line 60:\n    def getPort(self):';
		$m.__track_lines__[61] = 'pyjamas.Location.py, line 61:\n    return self.location.port';
		$m.__track_lines__[63] = 'pyjamas.Location.py, line 63:\n    def getProtocol(self):';
		$m.__track_lines__[64] = 'pyjamas.Location.py, line 64:\n    return self.location.protocol';
		$m.__track_lines__[66] = 'pyjamas.Location.py, line 7:\n    if len(pair) < 3: continue ... def getSearch(self):';
		$m.__track_lines__[69] = 'pyjamas.Location.py, line 69:\n    def getSearchDict(self):';
		$m.__track_lines__[70] = 'pyjamas.Location.py, line 70:\n    if self.searchDict is None:';
		$m.__track_lines__[71] = 'pyjamas.Location.py, line 71:\n    search = self.getSearch()[1:]';
		$m.__track_lines__[72] = 'pyjamas.Location.py, line 72:\n    self.searchDict = makeUrlDict(search)';
		$m.__track_lines__[73] = 'pyjamas.Location.py, line 73:\n    return self.searchDict';
		$m.__track_lines__[75] = 'pyjamas.Location.py, line 75:\n    def getSearchVar(self, key, default=None):';
		$m.__track_lines__[76] = 'pyjamas.Location.py, line 76:\n    return self.getSearchDict().get(key, default)';
		$m.__track_lines__[78] = 'pyjamas.Location.py, line 78:\n    def reload(self):';
		$m.__track_lines__[79] = 'pyjamas.Location.py, line 79:\n    self.location.reload()';
		$m.__track_lines__[81] = 'pyjamas.Location.py, line 81:\n    def setHref(self, href):';
		$m.__track_lines__[82] = 'pyjamas.Location.py, line 82:\n    self.location.href = href';
		$m.__track_lines__[84] = 'pyjamas.Location.py, line 84:\n    def setSearch(self, search):';
		$m.__track_lines__[85] = 'pyjamas.Location.py, line 85:\n    self.location.search = search';
		$m.__track_lines__[87] = 'pyjamas.Location.py, line 87:\n    def setSearchDict(self, searchDict):';
		$m.__track_lines__[88] = 'pyjamas.Location.py, line 88:\n    self.setSearch(makeUrlStringFromDict(searchDict))';
		$m.__track_lines__[90] = 'pyjamas.Location.py, line 90:\n    def setHash(self, hash):';
		$m.__track_lines__[91] = 'pyjamas.Location.py, line 91:\n    self.location.hash = hash';
		$m.__track_lines__[93] = 'pyjamas.Location.py, line 93:\n    def setHashDict(self, hashDict):';
		$m.__track_lines__[94] = 'pyjamas.Location.py, line 94:\n    self.setHash(makeUrlStringFromDict(hashDict))';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='pyjamas.Location';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$m['makeUrlDict'] = function(urlstring) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $1,pairs,$iter1_nextval,$iter1_type,$3,$cmp2,$len1,$iter1_iter,$bool1,dict,$iter1_array,$pyjs__trackstack_size_1,pair,$cmp1,$4,kv,$2,$iter1_idx;
			$pyjs.track={module:'pyjamas.Location',lineno:3};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=3;
			$pyjs.track.lineno=4;
			dict = $p['dict']([]);
			$pyjs.track.lineno=5;
			pairs = urlstring['$$split']('&');
			$pyjs.track.lineno=6;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = pairs;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				pair = $iter1_nextval;
				$pyjs.track.lineno=7;
				if ((($bool1=((($cmp1=(($len1=pair) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))))===($cmp2=$constant_int_3)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=7;
					continue;
				}
				$pyjs.track.lineno=8;
				kv = pair['$$split']('=', $constant_int_1);
				$pyjs.track.lineno=9;
				dict.__setitem__((typeof ($3=kv).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_0)), (typeof ($1=kv).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_1]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_1)));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=10;
			$pyjs.track.lineno=10;
			var $pyjs__ret = dict;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['makeUrlDict'].__name__ = 'makeUrlDict';

		$m['makeUrlDict'].__bind_type__ = 0;
		$m['makeUrlDict'].__args__ = [null,null,['urlstring']];
		$pyjs.track.lineno=12;
		$m['makeUrlStringFromDict'] = function(d) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var pairs,$iter2_nextval,$iter2_type,$iter2_iter,k,$pyjs__trackstack_size_1,$add2,$add3,$iter2_idx,$add1,$add4,v,$iter2_array;
			$pyjs.track={module:'pyjamas.Location',lineno:12};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=12;
			$pyjs.track.lineno=13;
			pairs = $p['list']([]);
			$pyjs.track.lineno=14;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = d['iteritems']();
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
				$pyjs.track.lineno=15;
				pairs['append']((typeof ($add3=(typeof ($add1=k)==typeof ($add2='=') && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4=v) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.Location';
			$pyjs.track.lineno=16;
			$pyjs.track.lineno=16;
			var $pyjs__ret = '&'['join'](pairs);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['makeUrlStringFromDict'].__name__ = 'makeUrlStringFromDict';

		$m['makeUrlStringFromDict'].__bind_type__ = 0;
		$m['makeUrlStringFromDict'].__args__ = [null,null,['d']];
		$pyjs.track.lineno=18;
		$m['Location'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.Location';
			$cls_definition.__md5__ = '7f2863a8deec73569d4312317786ca1a';
			$pyjs.track.lineno=26;
			$method = $pyjs__bind_method2('__init__', function(location) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					location = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:26};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=26;
				$pyjs.track.lineno=27;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('location', location) : $p['setattr'](self, 'location', location); 
				$pyjs.track.lineno=28;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('searchDict', null) : $p['setattr'](self, 'searchDict', null); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['location']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=30;
			$method = $pyjs__bind_method2('getHash', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:30};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=30;
				$pyjs.track.lineno=4;
				$pyjs.track.lineno=4;
				var $pyjs__ret = unescape(self.location.hash);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHash'] = $method;
			$pyjs.track.lineno=33;
			$method = $pyjs__bind_method2('getHashDict', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2,$bool2,$bool3,$bool4;
				$pyjs.track={module:'pyjamas.Location', lineno:33};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=33;
				$pyjs.track.lineno=34;
				if ((($bool4=((($bool3=$or1=!(($bool2=$p['getattr'](self, 'hashDict')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						 true ) )?$or1:!$p['op_eq']($p['getattr'](self, 'hashDictHash'), self['getHash']()))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$pyjs.track.lineno=35;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hashDictHash', self['getHash']()) : $p['setattr'](self, 'hashDictHash', self['getHash']()); 
					$pyjs.track.lineno=36;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hashDict', $m['makeUrlDict']($p['__getslice'](self['getHash'](), $constant_int_1, null))) : $p['setattr'](self, 'hashDict', $m['makeUrlDict']($p['__getslice'](self['getHash'](), $constant_int_1, null))); 
				}
				$pyjs.track.lineno=37;
				$pyjs.track.lineno=37;
				var $pyjs__ret = $p['getattr'](self, 'hashDict');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHashDict'] = $method;
			$pyjs.track.lineno=39;
			$method = $pyjs__bind_method2('getHost', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:39};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=39;
				$pyjs.track.lineno=40;
				$pyjs.track.lineno=40;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'location'), 'host');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHost'] = $method;
			$pyjs.track.lineno=42;
			$method = $pyjs__bind_method2('getHostname', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:42};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=43;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'location'), 'hostname');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHostname'] = $method;
			$pyjs.track.lineno=45;
			$method = $pyjs__bind_method2('getHref', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:45};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=45;
				$pyjs.track.lineno=46;
				$pyjs.track.lineno=46;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'location'), 'href');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHref'] = $method;
			$pyjs.track.lineno=48;
			$method = $pyjs__bind_method2('getPageHref', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var href,$bool6,$8,$bool5,$6,$7,$5;
				$pyjs.track={module:'pyjamas.Location', lineno:48};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=48;
				$pyjs.track.lineno=52;
				href = $p['getattr']($p['getattr'](self, 'location'), 'href');
				$pyjs.track.lineno=53;
				if ((($bool5=href['find']('?')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					$pyjs.track.lineno=53;
					href = (typeof ($5=href['$$split']('?')).__array != 'undefined'?
						((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__($constant_int_0));
				}
				$pyjs.track.lineno=54;
				if ((($bool6=href['find']('#')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$pyjs.track.lineno=54;
					href = (typeof ($7=href['$$split']('#')).__array != 'undefined'?
						((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__($constant_int_0));
				}
				$pyjs.track.lineno=55;
				$pyjs.track.lineno=55;
				var $pyjs__ret = href;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPageHref'] = $method;
			$pyjs.track.lineno=57;
			$method = $pyjs__bind_method2('getPathname', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:57};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=57;
				$pyjs.track.lineno=58;
				$pyjs.track.lineno=58;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'location'), 'pathname');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPathname'] = $method;
			$pyjs.track.lineno=60;
			$method = $pyjs__bind_method2('getPort', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:60};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=60;
				$pyjs.track.lineno=61;
				$pyjs.track.lineno=61;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'location'), 'port');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPort'] = $method;
			$pyjs.track.lineno=63;
			$method = $pyjs__bind_method2('getProtocol', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:63};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=63;
				$pyjs.track.lineno=64;
				$pyjs.track.lineno=64;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'location'), 'protocol');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getProtocol'] = $method;
			$pyjs.track.lineno=66;
			$method = $pyjs__bind_method2('getSearch', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:66};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=66;
				$pyjs.track.lineno=7;
				$pyjs.track.lineno=7;
				var $pyjs__ret = unescape(self.location.search);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSearch'] = $method;
			$pyjs.track.lineno=69;
			$method = $pyjs__bind_method2('getSearchDict', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var search,$bool7;
				$pyjs.track={module:'pyjamas.Location', lineno:69};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=69;
				$pyjs.track.lineno=70;
				if ((($bool7=$p['op_is']($p['getattr'](self, 'searchDict'), null)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					$pyjs.track.lineno=71;
					search = $p['__getslice'](self['getSearch'](), $constant_int_1, null);
					$pyjs.track.lineno=72;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('searchDict', $m['makeUrlDict'](search)) : $p['setattr'](self, 'searchDict', $m['makeUrlDict'](search)); 
				}
				$pyjs.track.lineno=73;
				$pyjs.track.lineno=73;
				var $pyjs__ret = $p['getattr'](self, 'searchDict');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSearchDict'] = $method;
			$pyjs.track.lineno=75;
			$method = $pyjs__bind_method2('getSearchVar', function(key, $$default) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					$$default = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof $$default == 'undefined') $$default=arguments.callee.__args__[4][1];
				var $$default;
				$pyjs.track={module:'pyjamas.Location', lineno:75};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=75;
				$pyjs.track.lineno=76;
				$pyjs.track.lineno=76;
				var $pyjs__ret = self['getSearchDict']()['get'](key, $$default);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['key'],['$$default', null]]);
			$cls_definition['getSearchVar'] = $method;
			$pyjs.track.lineno=78;
			$method = $pyjs__bind_method2('reload', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:78};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=78;
				$pyjs.track.lineno=79;
				self['location']['reload']();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['reload'] = $method;
			$pyjs.track.lineno=81;
			$method = $pyjs__bind_method2('setHref', function(href) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					href = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:81};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=81;
				$pyjs.track.lineno=82;
				$p['getattr'](self, 'location').__is_instance__ && typeof $p['getattr'](self, 'location').__setattr__ == 'function' ? $p['getattr'](self, 'location').__setattr__('href', href) : $p['setattr']($p['getattr'](self, 'location'), 'href', href); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['href']]);
			$cls_definition['setHref'] = $method;
			$pyjs.track.lineno=84;
			$method = $pyjs__bind_method2('setSearch', function(search) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					search = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:84};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=84;
				$pyjs.track.lineno=85;
				$p['getattr'](self, 'location').__is_instance__ && typeof $p['getattr'](self, 'location').__setattr__ == 'function' ? $p['getattr'](self, 'location').__setattr__('search', search) : $p['setattr']($p['getattr'](self, 'location'), 'search', search); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['search']]);
			$cls_definition['setSearch'] = $method;
			$pyjs.track.lineno=87;
			$method = $pyjs__bind_method2('setSearchDict', function(searchDict) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					searchDict = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:87};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=87;
				$pyjs.track.lineno=88;
				self['setSearch']($m['makeUrlStringFromDict'](searchDict));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['searchDict']]);
			$cls_definition['setSearchDict'] = $method;
			$pyjs.track.lineno=90;
			$method = $pyjs__bind_method2('setHash', function(hash) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hash = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:90};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=90;
				$pyjs.track.lineno=91;
				$p['getattr'](self, 'location').__is_instance__ && typeof $p['getattr'](self, 'location').__setattr__ == 'function' ? $p['getattr'](self, 'location').__setattr__('hash', hash) : $p['setattr']($p['getattr'](self, 'location'), 'hash', hash); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['hash']]);
			$cls_definition['setHash'] = $method;
			$pyjs.track.lineno=93;
			$method = $pyjs__bind_method2('setHashDict', function(hashDict) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					hashDict = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '7f2863a8deec73569d4312317786ca1a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.Location', lineno:93};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.Location';
				$pyjs.track.lineno=93;
				$pyjs.track.lineno=94;
				self['setHash']($m['makeUrlStringFromDict'](hashDict));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['hashDict']]);
			$cls_definition['setHashDict'] = $method;
			$pyjs.track.lineno=18;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Location', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Location */


/* end module: pyjamas.Location */


