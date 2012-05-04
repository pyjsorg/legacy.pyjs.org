/* start module: pyjamas.ui.Event */
$pyjs.loaded_modules['pyjamas.ui.Event'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Event'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Event'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.Event"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.Event>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Event';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['Event'] = $pyjs.loaded_modules['pyjamas.ui.Event'];


	$m['BUTTON_LEFT'] = 1;
	$m['BUTTON_MIDDLE'] = 4;
	$m['BUTTON_RIGHT'] = 2;
	$m['ONBLUR'] = 4096;
	$m['ONCHANGE'] = 1024;
	$m['ONCLICK'] = 1;
	$m['ONCONTEXTMENU'] = 131072;
	$m['ONDBLCLICK'] = 2;
	$m['ONERROR'] = 65536;
	$m['ONFOCUS'] = 2048;
	$m['ONKEYDOWN'] = 128;
	$m['ONKEYPRESS'] = 256;
	$m['ONKEYUP'] = 512;
	$m['ONLOAD'] = 32768;
	$m['ONLOSECAPTURE'] = 8192;
	$m['ONMOUSEDOWN'] = 4;
	$m['ONMOUSEMOVE'] = 64;
	$m['ONMOUSEOUT'] = 32;
	$m['ONMOUSEOVER'] = 16;
	$m['ONMOUSEUP'] = 8;
	$m['ONMOUSEWHEEL'] = 262144;
	$m['ONSCROLL'] = 16384;
	$m['ONINPUT'] = 524288;
	$m['DRAGEVENTS'] = 1048576;
	$m['DROPEVENTS'] = 2097152;
	$m['FOCUSEVENTS'] = 6144;
	$m['KEYEVENTS'] = 896;
	$m['MOUSEEVENTS'] = 124;
	$m['eventbits'] = $p['dict']([[1, $p['tuple'](['click', $p['list'](['click'])])], [2, $p['tuple'](['dblclick', $p['list'](['dblclick'])])], [4, $p['tuple'](['mousedown', $p['list'](['mousedown'])])], [8, $p['tuple'](['mouseup', $p['list'](['mouseup'])])], [16, $p['tuple'](['mouseover', $p['list'](['mouseover'])])], [32, $p['tuple'](['mouseout', $p['list'](['mouseout'])])], [64, $p['tuple'](['mousemove', $p['list'](['mousemove'])])], [128, $p['tuple'](['keydown', $p['list'](['keydown'])])], [256, $p['tuple'](['keypress', $p['list'](['keypress'])])], [512, $p['tuple'](['keyup', $p['list'](['keyup'])])], [1024, $p['tuple'](['change', $p['list'](['change'])])], [2048, $p['tuple'](['focus', $p['list'](['focus'])])], [4096, $p['tuple'](['blur', $p['list'](['blur'])])], [8192, $p['tuple'](['losecapture', $p['list'](['losecapture'])])], [16384, $p['tuple'](['scroll', $p['list'](['scroll'])])], [32768, $p['tuple'](['load', $p['list'](['load'])])], [65536, $p['tuple'](['error', $p['list'](['error'])])], [131072, $p['tuple'](['contextmenu', $p['list'](['contextmenu'])])], [262144, $p['tuple'](['mousewheel', $p['list'](['mousewheel'])])], [524288, $p['tuple'](['input', $p['list'](['input'])])], [1048576, $p['tuple'](['dragevents', $p['list'](['drag', 'dragstart', 'dragend'])])], [2097152, $p['tuple'](['dropevents', $p['list'](['drop', 'dragenter', 'dragover', 'dragleave'])])]]);
	$m['eventmap'] = $p['dict']([['mousewheel', 262144], ['mousescroll', 262144], ['DOMMouseScroll', 262144], ['input', 524288], ['propertychange', 524288]]);
	$m['_create_eventmap'] = function() {
		var $1,$iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,bit,bitmap,$2,$iter1_idx;
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
			$m['eventmap'].__setitem__((typeof ($1=bitmap).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0)), bit);
		}
		return null;
	};
	$m['_create_eventmap'].__name__ = '_create_eventmap';

	$m['_create_eventmap'].__bind_type__ = 0;
	$m['_create_eventmap'].__args__ = [null,null];
	$m['init'] = function() {

		$m['eventbits'].__setitem__(262144, $p['tuple'](['DOMMouseScroll', $p['list']([])]));
		$m['eventbits'].__setitem__(524288, $p['tuple'](['input', $p['list']([])]));
		$m['_create_eventmap']();
		return null;
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$m['init']();
	return this;
}; /* end pyjamas.ui.Event */


/* end module: pyjamas.ui.Event */


