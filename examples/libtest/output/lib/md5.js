/* start module: md5 */
$pyjs.loaded_modules['md5'] = function (__mod_name__) {
	if($pyjs.loaded_modules['md5'].__was_initialized__) return $pyjs.loaded_modules['md5'];
	var $m = $pyjs.loaded_modules["md5"];
	$m.__repr__ = function() { return "<module: md5>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'md5';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[384] = "md5.py, line 384:\n    r = ''";
		$m.__track_lines__[1] = 'md5.py, line 1:\n    from __pyjamas__ import JS, INT';
		$m.__track_lines__[2] = 'md5.py, line 2:\n    JS("""';
		$m.__track_lines__[387] = 'md5.py, line 387:\n    i = int(JS("@{{s}}[@{{x}}]"))';
		$m.__track_lines__[388] = 'md5.py, line 388:\n    r = r + h[(i >> 4) & 0xF] + h[i & 0xF]';
		$m.__track_lines__[389] = 'md5.py, line 389:\n    return r';
		$m.__track_lines__[385] = 'md5.py, line 385:\n    i = None';
		$m.__track_lines__[392] = "md5.py, line 392:\n    def __init__(self, s=''):";
		$m.__track_lines__[393] = 'md5.py, line 393:\n    self.finished = False';
		$m.__track_lines__[394] = 'md5.py, line 394:\n    self.md5 = JS("new @{{!_md5}}()")';
		$m.__track_lines__[395] = 'md5.py, line 395:\n    self.md5.init()';
		$m.__track_lines__[396] = 'md5.py, line 396:\n    self.update(s)';
		$m.__track_lines__[386] = 'md5.py, line 386:\n    for x in range(16):';
		$m.__track_lines__[398] = 'md5.py, line 398:\n    def update(self, s):';
		$m.__track_lines__[399] = 'md5.py, line 399:\n    for c in str(s):';
		$m.__track_lines__[400] = 'md5.py, line 400:\n    b = ord(c)';
		$m.__track_lines__[401] = 'md5.py, line 401:\n    self.md5.update(b)';
		$m.__track_lines__[403] = 'md5.py, line 403:\n    def hexdigest(self):';
		$m.__track_lines__[404] = 'md5.py, line 404:\n    if not self.finished:';
		$m.__track_lines__[405] = 'md5.py, line 405:\n    self.finished = True';
		$m.__track_lines__[406] = 'md5.py, line 406:\n    self.md5.finish()';
		$m.__track_lines__[407] = 'md5.py, line 407:\n    res = self.md5.getdigestBits()';
		$m.__track_lines__[408] = 'md5.py, line 408:\n    return hexstr(res)';
		$m.__track_lines__[410] = 'md5.py, line 410:\n    def digest(self):';
		$m.__track_lines__[411] = 'md5.py, line 411:\n    if not self.finished:';
		$m.__track_lines__[412] = 'md5.py, line 412:\n    self.finished = True';
		$m.__track_lines__[413] = 'md5.py, line 413:\n    self.md5.finish()';
		$m.__track_lines__[414] = 'md5.py, line 414:\n    return self.md5.getdigestBits()';
		$m.__track_lines__[416] = 'md5.py, line 416:\n    new = md5';
		$m.__track_lines__[391] = 'md5.py, line 391:\n    class md5:';
		$m.__track_lines__[382] = 'md5.py, line 382:\n    def hexstr(s):';
		$m.__track_lines__[383] = "md5.py, line 383:\n    h = '0123456789abcdef'";

		var $constant_int_16 = new $p['int'](16);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_15 = new $p['int'](15);
		$pyjs.track.module='md5';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;

/*
 *  md5.jvs 1.0b 27/06/96
 *
 * Javascript implementation of the RSA Data Security, Inc. MD5
 * Message-Digest Algorithm.
 *
 * Copyright (c) 1996 Henri Torgemane. All Rights Reserved.
 *
 * Permission to use, copy, modify, and distribute this software
 * and its documentation for any purposes and without
 * fee is hereby granted provided that this copyright notice
 * appears in all copies. 
 *
 * Of course, this soft is provided "as is" without express or implied
 * warranty of any kind.

    This version contains some trivial reformatting modifications
    by John Walker.

 Code found at:
  http://strongwiki.wisegeek.com/trac/browser/trunk/javascript/crypto

 */

var _md5 = function () {

function array(n) {
    for (i = 0; i < n; i++) {
        this[i] = 0;
    }
    this.length = n;
}

/* Some basic logical functions had to be rewritten because of a bug in
 * Javascript.. Just try to compute 0xffffffff >> 4 with it..
 * Of course, these functions are slower than the original would be, but
 * at least, they work!
 */

function integer(n) {
    return n % (0xffffffff + 1);
}

function shr(a, b) {
    a = integer(a);
    b = integer(b);
    if (a - 0x80000000 >= 0) {
        a = a % 0x80000000;
        a >>= b;
        a += 0x40000000 >> (b - 1);
    } else {
        a >>= b;
    }
    return a;
}

function shl1(a) {
    a = a % 0x80000000;
    if (a & 0x40000000 == 0x40000000) {
        a -= 0x40000000;  
        a *= 2;
        a += 0x80000000;
    } else {
        a *= 2;
    }
    return a;
}

function shl(a, b) {
    a = integer(a);
    b = integer(b);
    for (var i = 0; i < b; i++) {
        a = shl1(a);
    }
    return a;
}

function and(a, b) {
    a = integer(a);
    b = integer(b);
    var t1 = a - 0x80000000;
    var t2 = b - 0x80000000;
    if (t1 >= 0) {
        if (t2 >= 0) {
            return ((t1 & t2) + 0x80000000);
        } else {
            return (t1 & b);
        }
    } else {
        if (t2 >= 0) {
            return (a & t2);
        } else {
            return (a & b);  
        }
    }
}

function or(a, b) {
    a = integer(a);
    b = integer(b);
    var t1 = a - 0x80000000;
    var t2 = b - 0x80000000;
    if (t1 >= 0) {
        if (t2 >= 0) {
            return ((t1 | t2) + 0x80000000);
        } else {
            return ((t1 | b) + 0x80000000);
        }
    } else {
        if (t2 >= 0) {
            return ((a | t2) + 0x80000000);
        } else {
            return (a | b);  
        }
    }
}

function xor(a, b) {
    a = integer(a);
    b = integer(b);
    var t1 = a - 0x80000000;
    var t2 = b - 0x80000000;
    if (t1 >= 0) {
        if (t2 >= 0) {
            return (t1 ^ t2);
        } else {
            return ((t1 ^ b) + 0x80000000);
        }
    } else {
        if (t2 >= 0) {
            return ((a ^ t2) + 0x80000000);
        } else {
            return (a ^ b);  
        }
    }
}

function not(a) {
    a = integer(a);
    return 0xffffffff - a;
}

/* Here begin the real algorithm */

var state = new array(4); 
var count = new array(2);
    count[0] = 0;
    count[1] = 0;                     
var buffer = new array(64); 
var transformBuffer = new array(16); 
var digestBits = new array(16);

var S11 = 7;
var S12 = 12;
var S13 = 17;
var S14 = 22;
var S21 = 5;
var S22 = 9;
var S23 = 14;
var S24 = 20;
var S31 = 4;
var S32 = 11;
var S33 = 16;
var S34 = 23;
var S41 = 6;
var S42 = 10;
var S43 = 15;
var S44 = 21;

function F(x, y, z) {
    return or(and(x, y), and(not(x), z));
}

function G(x, y, z) {
    return or(and(x, z), and(y, not(z)));
}

function H(x, y, z) {
    return xor(xor(x, y), z);
}

function I(x, y, z) {
    return xor(y ,or(x , not(z)));
}

function rotateLeft(a, n) {
    return or(shl(a, n), (shr(a, (32 - n))));
}

function FF(a, b, c, d, x, s, ac) {
    a = a + F(b, c, d) + x + ac;
    a = rotateLeft(a, s);
    a = a + b;
    return a;
}

function GG(a, b, c, d, x, s, ac) {
    a = a + G(b, c, d) + x + ac;
    a = rotateLeft(a, s);
    a = a + b;
    return a;
}

function HH(a, b, c, d, x, s, ac) {
    a = a + H(b, c, d) + x + ac;
    a = rotateLeft(a, s);
    a = a + b;
    return a;
}

function II(a, b, c, d, x, s, ac) {
    a = a + I(b, c, d) + x + ac;
    a = rotateLeft(a, s);
    a = a + b;
    return a;
}

function transform(buf, offset) { 
    var a = 0, b = 0, c = 0, d = 0; 
    var x = transformBuffer;
    
    a = state[0];
    b = state[1];
    c = state[2];
    d = state[3];
    
    for (i = 0; i < 16; i++) {
        x[i] = and(buf[i * 4 + offset], 0xFF);
        for (j = 1; j < 4; j++) {
            x[i] += shl(and(buf[i * 4 + j + offset] ,0xFF), j * 8);
        }
    }

    /* Round 1 */
    a = FF( a, b, c, d, x[ 0], S11, 0xd76aa478); /* 1 */
    d = FF( d, a, b, c, x[ 1], S12, 0xe8c7b756); /* 2 */
    c = FF( c, d, a, b, x[ 2], S13, 0x242070db); /* 3 */
    b = FF( b, c, d, a, x[ 3], S14, 0xc1bdceee); /* 4 */
    a = FF( a, b, c, d, x[ 4], S11, 0xf57c0faf); /* 5 */
    d = FF( d, a, b, c, x[ 5], S12, 0x4787c62a); /* 6 */
    c = FF( c, d, a, b, x[ 6], S13, 0xa8304613); /* 7 */
    b = FF( b, c, d, a, x[ 7], S14, 0xfd469501); /* 8 */
    a = FF( a, b, c, d, x[ 8], S11, 0x698098d8); /* 9 */
    d = FF( d, a, b, c, x[ 9], S12, 0x8b44f7af); /* 10 */
    c = FF( c, d, a, b, x[10], S13, 0xffff5bb1); /* 11 */
    b = FF( b, c, d, a, x[11], S14, 0x895cd7be); /* 12 */
    a = FF( a, b, c, d, x[12], S11, 0x6b901122); /* 13 */
    d = FF( d, a, b, c, x[13], S12, 0xfd987193); /* 14 */
    c = FF( c, d, a, b, x[14], S13, 0xa679438e); /* 15 */
    b = FF( b, c, d, a, x[15], S14, 0x49b40821); /* 16 */

    /* Round 2 */
    a = GG( a, b, c, d, x[ 1], S21, 0xf61e2562); /* 17 */
    d = GG( d, a, b, c, x[ 6], S22, 0xc040b340); /* 18 */
    c = GG( c, d, a, b, x[11], S23, 0x265e5a51); /* 19 */
    b = GG( b, c, d, a, x[ 0], S24, 0xe9b6c7aa); /* 20 */
    a = GG( a, b, c, d, x[ 5], S21, 0xd62f105d); /* 21 */
    d = GG( d, a, b, c, x[10], S22,  0x2441453); /* 22 */
    c = GG( c, d, a, b, x[15], S23, 0xd8a1e681); /* 23 */
    b = GG( b, c, d, a, x[ 4], S24, 0xe7d3fbc8); /* 24 */
    a = GG( a, b, c, d, x[ 9], S21, 0x21e1cde6); /* 25 */
    d = GG( d, a, b, c, x[14], S22, 0xc33707d6); /* 26 */
    c = GG( c, d, a, b, x[ 3], S23, 0xf4d50d87); /* 27 */
    b = GG( b, c, d, a, x[ 8], S24, 0x455a14ed); /* 28 */
    a = GG( a, b, c, d, x[13], S21, 0xa9e3e905); /* 29 */
    d = GG( d, a, b, c, x[ 2], S22, 0xfcefa3f8); /* 30 */
    c = GG( c, d, a, b, x[ 7], S23, 0x676f02d9); /* 31 */
    b = GG( b, c, d, a, x[12], S24, 0x8d2a4c8a); /* 32 */

    /* Round 3 */
    a = HH( a, b, c, d, x[ 5], S31, 0xfffa3942); /* 33 */
    d = HH( d, a, b, c, x[ 8], S32, 0x8771f681); /* 34 */
    c = HH( c, d, a, b, x[11], S33, 0x6d9d6122); /* 35 */
    b = HH( b, c, d, a, x[14], S34, 0xfde5380c); /* 36 */
    a = HH( a, b, c, d, x[ 1], S31, 0xa4beea44); /* 37 */
    d = HH( d, a, b, c, x[ 4], S32, 0x4bdecfa9); /* 38 */
    c = HH( c, d, a, b, x[ 7], S33, 0xf6bb4b60); /* 39 */
    b = HH( b, c, d, a, x[10], S34, 0xbebfbc70); /* 40 */
    a = HH( a, b, c, d, x[13], S31, 0x289b7ec6); /* 41 */
    d = HH( d, a, b, c, x[ 0], S32, 0xeaa127fa); /* 42 */
    c = HH( c, d, a, b, x[ 3], S33, 0xd4ef3085); /* 43 */
    b = HH( b, c, d, a, x[ 6], S34,  0x4881d05); /* 44 */
    a = HH( a, b, c, d, x[ 9], S31, 0xd9d4d039); /* 45 */
    d = HH( d, a, b, c, x[12], S32, 0xe6db99e5); /* 46 */
    c = HH( c, d, a, b, x[15], S33, 0x1fa27cf8); /* 47 */
    b = HH( b, c, d, a, x[ 2], S34, 0xc4ac5665); /* 48 */

    /* Round 4 */
    a = II( a, b, c, d, x[ 0], S41, 0xf4292244); /* 49 */
    d = II( d, a, b, c, x[ 7], S42, 0x432aff97); /* 50 */
    c = II( c, d, a, b, x[14], S43, 0xab9423a7); /* 51 */
    b = II( b, c, d, a, x[ 5], S44, 0xfc93a039); /* 52 */
    a = II( a, b, c, d, x[12], S41, 0x655b59c3); /* 53 */
    d = II( d, a, b, c, x[ 3], S42, 0x8f0ccc92); /* 54 */
    c = II( c, d, a, b, x[10], S43, 0xffeff47d); /* 55 */
    b = II( b, c, d, a, x[ 1], S44, 0x85845dd1); /* 56 */
    a = II( a, b, c, d, x[ 8], S41, 0x6fa87e4f); /* 57 */
    d = II( d, a, b, c, x[15], S42, 0xfe2ce6e0); /* 58 */
    c = II( c, d, a, b, x[ 6], S43, 0xa3014314); /* 59 */
    b = II( b, c, d, a, x[13], S44, 0x4e0811a1); /* 60 */
    a = II( a, b, c, d, x[ 4], S41, 0xf7537e82); /* 61 */
    d = II( d, a, b, c, x[11], S42, 0xbd3af235); /* 62 */
    c = II( c, d, a, b, x[ 2], S43, 0x2ad7d2bb); /* 63 */
    b = II( b, c, d, a, x[ 9], S44, 0xeb86d391); /* 64 */

    state[0] += a;
    state[1] += b;
    state[2] += c;
    state[3] += d;

}

this.init = function() {
    count[0] = count[1] = 0;
    state[0] = 0x67452301;
    state[1] = 0xefcdab89;
    state[2] = 0x98badcfe;
    state[3] = 0x10325476;
    for (i = 0; i < digestBits.length; i++) {
        digestBits[i] = 0;
    }
};

this.update = function(b) { 
    var index, i;
    
    index = and(shr(count[0],3) , 0x3F);
    if (count[0] < 0xFFFFFFFF - 7) {
      count[0] += 8;
    } else {
      count[1]++;
      count[0] -= 0xFFFFFFFF + 1;
      count[0] += 8;
    }
    buffer[index] = and(b, 0xff);
    if (index  >= 63) {
        transform(buffer, 0);
    }
};

this.finish = function() {
    var bits = new array(8);
    var padding; 
    var i = 0, index = 0, padLen = 0;

    for (i = 0; i < 4; i++) {
        bits[i] = and(shr(count[0], (i * 8)), 0xFF);
    }
    for (i = 0; i < 4; i++) {
        bits[i + 4] = and(shr(count[1], (i * 8)), 0xFF);
    }
    index = and(shr(count[0], 3), 0x3F);
    padLen = (index < 56) ? (56 - index) : (120 - index);
    padding = new array(64); 
    padding[0] = 0x80;
    for (i = 0; i < padLen; i++) {
      this.update(padding[i]);
    }
    for (i = 0; i < 8; i++) {
      this.update(bits[i]);
    }

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            digestBits[i * 4 + j] = and(shr(state[i], (j * 8)) , 0xFF);
        }
    } 
    return digestBits;
};

this.getdigestBits = function() {
    return digestBits;
};

};

/* End of the MD5 algorithm */

		$pyjs.track.lineno=382;
		$m['hexstr'] = function(s) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter1_nextval,$iter1_type,i,h,$4,$iter1_iter,$add2,$add3,r,$iter1_array,$add4,$pyjs__trackstack_size_1,x,$add1,$1,$2,$3,$iter1_idx;
			$pyjs.track={module:'md5',lineno:382};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='md5';
			$pyjs.track.lineno=382;
			$pyjs.track.lineno=383;
			h = '0123456789abcdef';
			$pyjs.track.lineno=384;
			r = '';
			$pyjs.track.lineno=385;
			i = null;
			$pyjs.track.lineno=386;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = $p['range']($constant_int_16);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				x = $iter1_nextval;
				$pyjs.track.lineno=387;
				i = $p['int'](s[x]);
				$pyjs.track.lineno=388;
				r = (typeof ($add3=(typeof ($add1=r)==typeof ($add2=(typeof ($1=h).__array != 'undefined'?
					((typeof $1.__array[$2=$p['op_bitand2']($p['op_bitshiftright'](i,$constant_int_4), $constant_int_15)]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($p['op_bitand2']($p['op_bitshiftright'](i,$constant_int_4), $constant_int_15)))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4=(typeof ($3=h).__array != 'undefined'?
					((typeof $3.__array[$4=$p['op_bitand2'](i, $constant_int_15)]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($p['op_bitand2'](i, $constant_int_15)))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='md5';
			$pyjs.track.lineno=389;
			$pyjs.track.lineno=389;
			var $pyjs__ret = r;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['hexstr'].__name__ = 'hexstr';

		$m['hexstr'].__bind_type__ = 0;
		$m['hexstr'].__args__ = [null,null,['s']];
		$pyjs.track.lineno=391;
		$m['md5'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'md5';
			$cls_definition.__md5__ = '707d0e2f2dafa2488a4e7fd1cf0669b8';
			$pyjs.track.lineno=392;
			$method = $pyjs__bind_method2('__init__', function(s) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 1)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					s = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '707d0e2f2dafa2488a4e7fd1cf0669b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof s == 'undefined') s=arguments.callee.__args__[3][1];

				$pyjs.track={module:'md5', lineno:392};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='md5';
				$pyjs.track.lineno=392;
				$pyjs.track.lineno=393;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('finished', false) : $p['setattr'](self, 'finished', false); 
				$pyjs.track.lineno=394;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('md5', new _md5()) : $p['setattr'](self, 'md5', new _md5()); 
				$pyjs.track.lineno=395;
				self['md5']['init']();
				$pyjs.track.lineno=396;
				self['update'](s);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['s', '']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=398;
			$method = $pyjs__bind_method2('update', function(s) {
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
					if (self.prototype.__md5__ !== '707d0e2f2dafa2488a4e7fd1cf0669b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var c,$iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,b,$pyjs__trackstack_size_1,$iter2_array;
				$pyjs.track={module:'md5', lineno:398};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='md5';
				$pyjs.track.lineno=398;
				$pyjs.track.lineno=399;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = $p['str'](s);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					c = $iter2_nextval;
					$pyjs.track.lineno=400;
					b = $p['ord'](c);
					$pyjs.track.lineno=401;
					self['md5']['update'](b);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='md5';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['s']]);
			$cls_definition['update'] = $method;
			$pyjs.track.lineno=403;
			$method = $pyjs__bind_method2('hexdigest', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '707d0e2f2dafa2488a4e7fd1cf0669b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool2,res,$bool1;
				$pyjs.track={module:'md5', lineno:403};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='md5';
				$pyjs.track.lineno=403;
				$pyjs.track.lineno=404;
				if ((($bool2=!(($bool1=$p['getattr'](self, 'finished')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=405;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('finished', true) : $p['setattr'](self, 'finished', true); 
					$pyjs.track.lineno=406;
					self['md5']['finish']();
				}
				$pyjs.track.lineno=407;
				res = self['md5']['getdigestBits']();
				$pyjs.track.lineno=408;
				$pyjs.track.lineno=408;
				var $pyjs__ret = $m['hexstr'](res);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['hexdigest'] = $method;
			$pyjs.track.lineno=410;
			$method = $pyjs__bind_method2('digest', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '707d0e2f2dafa2488a4e7fd1cf0669b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3,$bool4;
				$pyjs.track={module:'md5', lineno:410};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='md5';
				$pyjs.track.lineno=410;
				$pyjs.track.lineno=411;
				if ((($bool4=!(($bool3=$p['getattr'](self, 'finished')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$pyjs.track.lineno=412;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('finished', true) : $p['setattr'](self, 'finished', true); 
					$pyjs.track.lineno=413;
					self['md5']['finish']();
				}
				$pyjs.track.lineno=414;
				$pyjs.track.lineno=414;
				var $pyjs__ret = self['md5']['getdigestBits']();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['digest'] = $method;
			$pyjs.track.lineno=391;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('md5', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=416;
		$m['$$new'] = $m['md5'];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end md5 */


/* end module: md5 */


