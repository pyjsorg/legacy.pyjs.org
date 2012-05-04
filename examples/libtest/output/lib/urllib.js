/* start module: urllib */
$pyjs.loaded_modules['urllib'] = function (__mod_name__) {
	if($pyjs.loaded_modules['urllib'].__was_initialized__) return $pyjs.loaded_modules['urllib'];
	var $m = $pyjs.loaded_modules["urllib"];
	$m.__repr__ = function() { return "<module: urllib>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'urllib';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[64] = 'urllib.py, line 64:\n    for i, v in d.iteritems():';
		$m.__track_lines__[1] = 'urllib.py, line 1:\n    from __pyjamas__ import JS';
		$m.__track_lines__[66] = 'urllib.py, line 66:\n    if s != "":';
		$m.__track_lines__[3] = "urllib.py, line 3:\n    def quote(s, safe=''):";
		$m.__track_lines__[48] = 'urllib.py, line 48:\n    def urlencode(d):';
		$m.__track_lines__[65] = 'urllib.py, line 65:\n    s += "%s=%s&" % (i, quote(str(v)))';
		$m.__track_lines__[33] = 'urllib.py, line 33:\n    def unquote(st):';
		$m.__track_lines__[45] = 'urllib.py, line 45:\n    from __javascript__ import decodeURIComponent';
		$m.__track_lines__[46] = 'urllib.py, line 46:\n    return decodeURIComponent(st)';
		$m.__track_lines__[15] = 'urllib.py, line 15:\n    from __javascript__ import encodeURIComponent';
		$m.__track_lines__[16] = 'urllib.py, line 16:\n    return encodeURIComponent(s)';
		$m.__track_lines__[18] = 'urllib.py, line 18:\n    def unquote_plus(st):';
		$m.__track_lines__[67] = 'urllib.py, line 67:\n    s = s[:-1]';
		$m.__track_lines__[68] = 'urllib.py, line 68:\n    return s';
		$m.__track_lines__[63] = 'urllib.py, line 63:\n    s = ""';
		$m.__track_lines__[30] = 'urllib.py, line 30:\n    from __javascript__ import decodeURIComponent';
		$m.__track_lines__[31] = "urllib.py, line 31:\n    return decodeURIComponent((st.replace('+', ' ')))";

		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='urllib';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$m['quote'] = function(s, safe) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof safe == 'undefined') safe=arguments.callee.__args__[3][1];

			$pyjs.track={module:'urllib',lineno:3};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='urllib';
			$pyjs.track.lineno=3;
			$pyjs.track.lineno=15;
			$pyjs.track.lineno=16;
			$pyjs.track.lineno=16;
			var $pyjs__ret = encodeURIComponent(s);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['quote'].__name__ = 'quote';

		$m['quote'].__bind_type__ = 0;
		$m['quote'].__args__ = [null,null,['s'],['safe', '']];
		$pyjs.track.lineno=18;
		$m['unquote_plus'] = function(st) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'urllib',lineno:18};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='urllib';
			$pyjs.track.lineno=18;
			$pyjs.track.lineno=30;
			$pyjs.track.lineno=31;
			$pyjs.track.lineno=31;
			var $pyjs__ret = decodeURIComponent(st['$$replace']('+', ' '));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['unquote_plus'].__name__ = 'unquote_plus';

		$m['unquote_plus'].__bind_type__ = 0;
		$m['unquote_plus'].__args__ = [null,null,['st']];
		$pyjs.track.lineno=33;
		$m['unquote'] = function(st) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'urllib',lineno:33};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='urllib';
			$pyjs.track.lineno=33;
			$pyjs.track.lineno=45;
			$pyjs.track.lineno=46;
			$pyjs.track.lineno=46;
			var $pyjs__ret = decodeURIComponent(st);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['unquote'].__name__ = 'unquote';

		$m['unquote'].__bind_type__ = 0;
		$m['unquote'].__args__ = [null,null,['st']];
		$pyjs.track.lineno=48;
		$m['urlencode'] = function(d) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $bool1,$iter1_nextval,$iter1_type,$iter1_idx,i,$pyjs__trackstack_size_1,$iter1_iter,$add2,s,$add1,$iter1_array,v;
			$pyjs.track={module:'urllib',lineno:48};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='urllib';
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=63;
			s = '';
			$pyjs.track.lineno=64;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = d['iteritems']();
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
				i = $tupleassign1[0];
				v = $tupleassign1[1];
				$pyjs.track.lineno=65;
				s = (typeof ($add1=s)==typeof ($add2=$p['sprintf']('%s=%s&', $p['tuple']([i, $m['quote']($p['str'](v))]))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='urllib';
			$pyjs.track.lineno=66;
			if ((($bool1=!$p['op_eq'](s, '')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$pyjs.track.lineno=67;
				s = $p['__getslice'](s, 0, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
			}
			$pyjs.track.lineno=68;
			$pyjs.track.lineno=68;
			var $pyjs__ret = s;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['urlencode'].__name__ = 'urlencode';

		$m['urlencode'].__bind_type__ = 0;
		$m['urlencode'].__args__ = [null,null,['d']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end urllib */


/* end module: urllib */


