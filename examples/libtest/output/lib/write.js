/* start module: write */
$pyjs.loaded_modules['write'] = function (__mod_name__) {
	if($pyjs.loaded_modules['write'].__was_initialized__) return $pyjs.loaded_modules['write'];
	var $m = $pyjs.loaded_modules["write"];
	$m.__repr__ = function() { return "<module: write>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'write';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'write.py, line 1:\n    import sys';
		$m.__track_lines__[2] = 'write.py, line 2:\n    import re';
		$m.__track_lines__[4] = 'write.py, line 4:\n    tag_re = re.compile("<.*?>")';
		$m.__track_lines__[6] = 'write.py, line 6:\n    def write(text):';
		$m.__track_lines__[7] = 'write.py, line 7:\n    pass';
		$m.__track_lines__[9] = 'write.py, line 9:\n    def writebr(text):';
		$m.__track_lines__[10] = 'write.py, line 10:\n    pass';
		$m.__track_lines__[13] = 'write.py, line 13:\n    data = ""';
		$m.__track_lines__[14] = 'write.py, line 14:\n    element = None';
		$m.__track_lines__[16] = 'write.py, line 16:\n    def write_web(text):';
		$m.__track_lines__[17] = 'write.py, line 17:\n    global data, element';
		$m.__track_lines__[18] = 'write.py, line 18:\n    from __pyjamas__ import JS';
		$m.__track_lines__[19] = 'write.py, line 19:\n    data += text';
		$m.__track_lines__[20] = 'write.py, line 20:\n    JS("@{{element}}.innerHTML = @{{data}}; ")';
		$m.__track_lines__[22] = 'write.py, line 22:\n    def writebr_web(text):';
		$m.__track_lines__[23] = 'write.py, line 23:\n    write(text + "<br />\\n")';
		$m.__track_lines__[25] = 'write.py, line 25:\n    def init_web():';
		$m.__track_lines__[26] = 'write.py, line 26:\n    from __pyjamas__ import JS';
		$m.__track_lines__[27] = 'write.py, line 27:\n    global element';
		$m.__track_lines__[28] = 'write.py, line 28:\n    JS("""@{{element}} = $doc.createElement("div");';
		$m.__track_lines__[31] = 'write.py, line 31:\n    def write_std(text):';
		$m.__track_lines__[32] = 'write.py, line 32:\n    text = tag_re.sub("",text)';
		$m.__track_lines__[33] = 'write.py, line 33:\n    print text,';
		$m.__track_lines__[35] = 'write.py, line 35:\n    def writebr_std(text):';
		$m.__track_lines__[36] = 'write.py, line 36:\n    text = tag_re.sub("",text)';
		$m.__track_lines__[37] = 'write.py, line 37:\n    print text';
		$m.__track_lines__[39] = "write.py, line 39:\n    if sys.platform in ['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']:";
		$m.__track_lines__[40] = 'write.py, line 40:\n    init_web()';
		$m.__track_lines__[41] = 'write.py, line 41:\n    write = write_web';
		$m.__track_lines__[42] = 'write.py, line 42:\n    writebr = writebr_web';
		$m.__track_lines__[44] = 'write.py, line 44:\n    write = write_std';
		$m.__track_lines__[45] = 'write.py, line 45:\n    writebr = writebr_std';
		var $bool1;

		$pyjs.track.module='write';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['re'] = $p['___import___']('re', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$m['tag_re'] = $m['re']['compile']('<.*?>');
		$pyjs.track.lineno=6;
		$m['write'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'write',lineno:6};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='write';
			$pyjs.track.lineno=6;
			$pyjs.track.lineno=7;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['write'].__name__ = 'write';

		$m['write'].__bind_type__ = 0;
		$m['write'].__args__ = [null,null,['text']];
		$pyjs.track.lineno=9;
		$m['writebr'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'write',lineno:9};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='write';
			$pyjs.track.lineno=9;
			$pyjs.track.lineno=10;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['writebr'].__name__ = 'writebr';

		$m['writebr'].__bind_type__ = 0;
		$m['writebr'].__args__ = [null,null,['text']];
		$pyjs.track.lineno=13;
		$m['data'] = '';
		$pyjs.track.lineno=14;
		$m['element'] = null;
		$pyjs.track.lineno=16;
		$m['write_web'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add2,$add1;
			$pyjs.track={module:'write',lineno:16};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='write';
			$pyjs.track.lineno=16;
			$pyjs.track.lineno=17;
			$pyjs.track.lineno=18;
			$pyjs.track.lineno=19;
			$m['data'] = (typeof ($add1=$m['data'])==typeof ($add2=text) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			$pyjs.track.lineno=20;
$m['element'].innerHTML = $m['data']; 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		};
		$m['write_web'].__name__ = 'write_web';

		$m['write_web'].__bind_type__ = 0;
		$m['write_web'].__args__ = [null,null,['text']];
		$pyjs.track.lineno=22;
		$m['writebr_web'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $add4,$add3;
			$pyjs.track={module:'write',lineno:22};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='write';
			$pyjs.track.lineno=22;
			$pyjs.track.lineno=23;
			$m['write']((typeof ($add3=text)==typeof ($add4='<br />\n') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['writebr_web'].__name__ = 'writebr_web';

		$m['writebr_web'].__bind_type__ = 0;
		$m['writebr_web'].__args__ = [null,null,['text']];
		$pyjs.track.lineno=25;
		$m['init_web'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'write',lineno:25};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='write';
			$pyjs.track.lineno=25;
			$pyjs.track.lineno=26;
			$pyjs.track.lineno=27;
			$pyjs.track.lineno=28;
$m['element'] = $doc.createElement("div");
           $doc.body.appendChild($m['element']); 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		};
		$m['init_web'].__name__ = 'init_web';

		$m['init_web'].__bind_type__ = 0;
		$m['init_web'].__args__ = [null,null];
		$pyjs.track.lineno=31;
		$m['write_std'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'write',lineno:31};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='write';
			$pyjs.track.lineno=31;
			$pyjs.track.lineno=32;
			text = $m['tag_re']['sub']('', text);
			$pyjs.track.lineno=33;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['write_std'].__name__ = 'write_std';

		$m['write_std'].__bind_type__ = 0;
		$m['write_std'].__args__ = [null,null,['text']];
		$pyjs.track.lineno=35;
		$m['writebr_std'] = function(text) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'write',lineno:35};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='write';
			$pyjs.track.lineno=35;
			$pyjs.track.lineno=36;
			text = $m['tag_re']['sub']('', text);
			$pyjs.track.lineno=37;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['writebr_std'].__name__ = 'writebr_std';

		$m['writebr_std'].__bind_type__ = 0;
		$m['writebr_std'].__args__ = [null,null,['text']];
		$pyjs.track.lineno=39;
		if ((($bool1=$p['list'](['mozilla', 'ie6', 'opera', 'oldmoz', 'safari']).__contains__($p['getattr']($m['sys'], 'platform'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$pyjs.track.lineno=40;
			$m['init_web']();
			$pyjs.track.lineno=41;
			$m['write'] = $m['write_web'];
			$pyjs.track.lineno=42;
			$m['writebr'] = $m['writebr_web'];
		}
		else {
			$pyjs.track.lineno=44;
			$m['write'] = $m['write_std'];
			$pyjs.track.lineno=45;
			$m['writebr'] = $m['writebr_std'];
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end write */


/* end module: write */


/*
PYJS_DEPS: ['sys', 're']
*/
