/* start module: pyjamas.ui.Event */
$pyjs.loaded_modules['pyjamas.ui.Event'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Event'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Event'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Event"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Event>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Event';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['Event'] = $pyjs.loaded_modules['pyjamas.ui.Event'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.Event.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[2] = 'pyjamas.ui.Event.py, line 2:\n    # Copyright (C) 2009 Luke Kenneth Casson Leighton <lkcl@lkcl.net>';
		$m.__track_lines__[3] = 'pyjamas.ui.Event.py, line 3:\n    #';
		$m.__track_lines__[20] = 'pyjamas.ui.Event.py, line 20:\n    BUTTON_LEFT   = 1';
		$m.__track_lines__[21] = 'pyjamas.ui.Event.py, line 21:\n    BUTTON_MIDDLE = 4';
		$m.__track_lines__[22] = 'pyjamas.ui.Event.py, line 22:\n    BUTTON_RIGHT  = 2';
		$m.__track_lines__[24] = 'pyjamas.ui.Event.py, line 24:\n    ONBLUR        = 0x01000';
		$m.__track_lines__[25] = 'pyjamas.ui.Event.py, line 25:\n    ONCHANGE      = 0x00400';
		$m.__track_lines__[26] = 'pyjamas.ui.Event.py, line 26:\n    ONCLICK       = 0x00001';
		$m.__track_lines__[27] = 'pyjamas.ui.Event.py, line 27:\n    ONCONTEXTMENU = 0x20000';
		$m.__track_lines__[28] = 'pyjamas.ui.Event.py, line 28:\n    ONDBLCLICK    = 0x00002';
		$m.__track_lines__[29] = 'pyjamas.ui.Event.py, line 29:\n    ONERROR       = 0x10000';
		$m.__track_lines__[30] = 'pyjamas.ui.Event.py, line 30:\n    ONFOCUS       = 0x00800';
		$m.__track_lines__[31] = 'pyjamas.ui.Event.py, line 31:\n    ONKEYDOWN     = 0x00080';
		$m.__track_lines__[32] = 'pyjamas.ui.Event.py, line 32:\n    ONKEYPRESS    = 0x00100';
		$m.__track_lines__[33] = 'pyjamas.ui.Event.py, line 33:\n    ONKEYUP       = 0x00200';
		$m.__track_lines__[34] = 'pyjamas.ui.Event.py, line 34:\n    ONLOAD        = 0x08000';
		$m.__track_lines__[35] = 'pyjamas.ui.Event.py, line 35:\n    ONLOSECAPTURE = 0x02000';
		$m.__track_lines__[36] = 'pyjamas.ui.Event.py, line 36:\n    ONMOUSEDOWN   = 0x00004';
		$m.__track_lines__[37] = 'pyjamas.ui.Event.py, line 37:\n    ONMOUSEMOVE   = 0x00040';
		$m.__track_lines__[38] = 'pyjamas.ui.Event.py, line 38:\n    ONMOUSEOUT    = 0x00020';
		$m.__track_lines__[39] = 'pyjamas.ui.Event.py, line 39:\n    ONMOUSEOVER   = 0x00010';
		$m.__track_lines__[40] = 'pyjamas.ui.Event.py, line 40:\n    ONMOUSEUP     = 0x00008';
		$m.__track_lines__[41] = 'pyjamas.ui.Event.py, line 41:\n    ONMOUSEWHEEL  = 0x40000';
		$m.__track_lines__[42] = 'pyjamas.ui.Event.py, line 42:\n    ONSCROLL      = 0x04000';
		$m.__track_lines__[43] = 'pyjamas.ui.Event.py, line 43:\n    ONINPUT       = 0x80000';
		$m.__track_lines__[44] = 'pyjamas.ui.Event.py, line 44:\n    DRAGEVENTS    = 0x100000';
		$m.__track_lines__[45] = 'pyjamas.ui.Event.py, line 45:\n    DROPEVENTS    = 0x200000';
		$m.__track_lines__[47] = 'pyjamas.ui.Event.py, line 47:\n    FOCUSEVENTS   = 0x01800 # ONFOCUS | ONBLUR';
		$m.__track_lines__[48] = 'pyjamas.ui.Event.py, line 48:\n    KEYEVENTS     = 0x00380 # ONKEYDOWN | ONKEYPRESS | ONKEYUP';
		$m.__track_lines__[49] = 'pyjamas.ui.Event.py, line 49:\n    MOUSEEVENTS   = 0x0007C # ONMOUSEDOWN | ONMOUSEUP | ONMOUSEMOVE | ONMOUSEOVER | ONMOUSEOUT';
		$m.__track_lines__[51] = 'pyjamas.ui.Event.py, line 51:\n    eventbits = {';
		$m.__track_lines__[79] = 'pyjamas.ui.Event.py, line 79:\n    eventmap = {';
		$m.__track_lines__[87] = 'pyjamas.ui.Event.py, line 87:\n    def _create_eventmap():';
		$m.__track_lines__[88] = 'pyjamas.ui.Event.py, line 88:\n    for bit, bitmap in eventbits.iteritems():';
		$m.__track_lines__[89] = 'pyjamas.ui.Event.py, line 89:\n    eventmap[bitmap[0]] = bit';
		$m.__track_lines__[91] = 'pyjamas.ui.Event.py, line 2:\n    # Copyright (C) 2009 Luke Kenneth Casson Leighton <lkcl@lkcl.net> ... def init():';
		$m.__track_lines__[94] = 'pyjamas.ui.Event.py, line 94:\n    init()';

		var $constant_int_4096 = new $p['int'](4096);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_8192 = new $p['int'](8192);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_128 = new $p['int'](128);
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_512 = new $p['int'](512);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_524288 = new $p['int'](524288);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_131072 = new $p['int'](131072);
		var $constant_int_896 = new $p['int'](896);
		var $constant_int_262144 = new $p['int'](262144);
		var $constant_int_1024 = new $p['int'](1024);
		var $constant_int_16384 = new $p['int'](16384);
		var $constant_int_1048576 = new $p['int'](1048576);
		var $constant_int_32768 = new $p['int'](32768);
		var $constant_int_64 = new $p['int'](64);
		var $constant_int_2048 = new $p['int'](2048);
		var $constant_int_2097152 = new $p['int'](2097152);
		var $constant_int_65536 = new $p['int'](65536);
		var $constant_int_6144 = new $p['int'](6144);
		var $constant_int_124 = new $p['int'](124);
		$pyjs.track.module='pyjamas.ui.Event';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=20;
		$m['BUTTON_LEFT'] = $constant_int_1;
		$pyjs.track.lineno=21;
		$m['BUTTON_MIDDLE'] = $constant_int_4;
		$pyjs.track.lineno=22;
		$m['BUTTON_RIGHT'] = $constant_int_2;
		$pyjs.track.lineno=24;
		$m['ONBLUR'] = $constant_int_4096;
		$pyjs.track.lineno=25;
		$m['ONCHANGE'] = $constant_int_1024;
		$pyjs.track.lineno=26;
		$m['ONCLICK'] = $constant_int_1;
		$pyjs.track.lineno=27;
		$m['ONCONTEXTMENU'] = $constant_int_131072;
		$pyjs.track.lineno=28;
		$m['ONDBLCLICK'] = $constant_int_2;
		$pyjs.track.lineno=29;
		$m['ONERROR'] = $constant_int_65536;
		$pyjs.track.lineno=30;
		$m['ONFOCUS'] = $constant_int_2048;
		$pyjs.track.lineno=31;
		$m['ONKEYDOWN'] = $constant_int_128;
		$pyjs.track.lineno=32;
		$m['ONKEYPRESS'] = $constant_int_256;
		$pyjs.track.lineno=33;
		$m['ONKEYUP'] = $constant_int_512;
		$pyjs.track.lineno=34;
		$m['ONLOAD'] = $constant_int_32768;
		$pyjs.track.lineno=35;
		$m['ONLOSECAPTURE'] = $constant_int_8192;
		$pyjs.track.lineno=36;
		$m['ONMOUSEDOWN'] = $constant_int_4;
		$pyjs.track.lineno=37;
		$m['ONMOUSEMOVE'] = $constant_int_64;
		$pyjs.track.lineno=38;
		$m['ONMOUSEOUT'] = $constant_int_32;
		$pyjs.track.lineno=39;
		$m['ONMOUSEOVER'] = $constant_int_16;
		$pyjs.track.lineno=40;
		$m['ONMOUSEUP'] = $constant_int_8;
		$pyjs.track.lineno=41;
		$m['ONMOUSEWHEEL'] = $constant_int_262144;
		$pyjs.track.lineno=42;
		$m['ONSCROLL'] = $constant_int_16384;
		$pyjs.track.lineno=43;
		$m['ONINPUT'] = $constant_int_524288;
		$pyjs.track.lineno=44;
		$m['DRAGEVENTS'] = $constant_int_1048576;
		$pyjs.track.lineno=45;
		$m['DROPEVENTS'] = $constant_int_2097152;
		$pyjs.track.lineno=47;
		$m['FOCUSEVENTS'] = $constant_int_6144;
		$pyjs.track.lineno=48;
		$m['KEYEVENTS'] = $constant_int_896;
		$pyjs.track.lineno=49;
		$m['MOUSEEVENTS'] = $constant_int_124;
		$pyjs.track.lineno=51;
		$m['eventbits'] = $p['dict']([[$constant_int_1, $p['tuple'](['click', $p['list'](['click'])])], [$constant_int_2, $p['tuple'](['dblclick', $p['list'](['dblclick'])])], [$constant_int_4, $p['tuple'](['mousedown', $p['list'](['mousedown'])])], [$constant_int_8, $p['tuple'](['mouseup', $p['list'](['mouseup'])])], [$constant_int_16, $p['tuple'](['mouseover', $p['list'](['mouseover'])])], [$constant_int_32, $p['tuple'](['mouseout', $p['list'](['mouseout'])])], [$constant_int_64, $p['tuple'](['mousemove', $p['list'](['mousemove'])])], [$constant_int_128, $p['tuple'](['keydown', $p['list'](['keydown'])])], [$constant_int_256, $p['tuple'](['keypress', $p['list'](['keypress'])])], [$constant_int_512, $p['tuple'](['keyup', $p['list'](['keyup'])])], [$constant_int_1024, $p['tuple'](['change', $p['list'](['change'])])], [$constant_int_2048, $p['tuple'](['focus', $p['list'](['focus'])])], [$constant_int_4096, $p['tuple'](['blur', $p['list'](['blur'])])], [$constant_int_8192, $p['tuple'](['losecapture', $p['list'](['losecapture'])])], [$constant_int_16384, $p['tuple'](['scroll', $p['list'](['scroll'])])], [$constant_int_32768, $p['tuple'](['load', $p['list'](['load'])])], [$constant_int_65536, $p['tuple'](['error', $p['list'](['error'])])], [$constant_int_131072, $p['tuple'](['contextmenu', $p['list'](['contextmenu'])])], [$constant_int_262144, $p['tuple'](['mousewheel', $p['list'](['mousewheel'])])], [$constant_int_524288, $p['tuple'](['input', $p['list'](['input'])])], [$constant_int_1048576, $p['tuple'](['dragevents', $p['list'](['drag', 'dragstart', 'dragend'])])], [$constant_int_2097152, $p['tuple'](['dropevents', $p['list'](['drop', 'dragenter', 'dragover', 'dragleave'])])]]);
		$pyjs.track.lineno=79;
		$m['eventmap'] = $p['dict']([['mousewheel', $constant_int_262144], ['mousescroll', $constant_int_262144], ['DOMMouseScroll', $constant_int_262144], ['input', $constant_int_524288], ['propertychange', $constant_int_524288]]);
		$pyjs.track.lineno=87;
		$m['_create_eventmap'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $1,$iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,bit,bitmap,$2,$iter1_idx;
			$pyjs.track={module:'pyjamas.ui.Event',lineno:87};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Event';
			$pyjs.track.lineno=87;
			$pyjs.track.lineno=88;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = $m['eventbits']['iteritems']();
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval, 2, null);
				bit = $tupleassign1[0];
				bitmap = $tupleassign1[1];
				$pyjs.track.lineno=89;
				$m['eventmap'].__setitem__((typeof ($1=bitmap).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_0)), bit);
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.ui.Event';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_create_eventmap'].__name__ = '_create_eventmap';

		$m['_create_eventmap'].__bind_type__ = 0;
		$m['_create_eventmap'].__args__ = [null,null];
		$pyjs.track.lineno=91;
		$m['init'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.ui.Event',lineno:91};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.Event';
			$pyjs.track.lineno=91;
			$pyjs.track.lineno=2;
			$m['eventbits'].__setitem__($constant_int_524288, $p['tuple'](['propertychange', $p['list'](['propertychange'])]));
			$pyjs.track.lineno=3;
			$m['_create_eventmap']();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['init'].__name__ = 'init';

		$m['init'].__bind_type__ = 0;
		$m['init'].__args__ = [null,null];
		$pyjs.track.lineno=94;
		$m['init']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Event */


/* end module: pyjamas.ui.Event */


