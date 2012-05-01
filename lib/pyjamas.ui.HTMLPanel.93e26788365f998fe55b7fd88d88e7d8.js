/* start module: pyjamas.ui.HTMLPanel */
$pyjs.loaded_modules['pyjamas.ui.HTMLPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HTMLPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HTMLPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.HTMLPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.HTMLPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTMLPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['HTMLPanel'] = $pyjs.loaded_modules['pyjamas.ui.HTMLPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.HTMLPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.HTMLPanel.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.HTMLPanel.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[17] = 'pyjamas.ui.HTMLPanel.py, line 17:\n    from pyjamas.ui.InnerHTML import InnerHTML';
		$m.__track_lines__[19] = 'pyjamas.ui.HTMLPanel.py, line 19:\n    from pyjamas.ui.ComplexPanel import ComplexPanel';
		$m.__track_lines__[21] = 'pyjamas.ui.HTMLPanel.py, line 21:\n    HTMLPanel_sUid = 0';
		$m.__track_lines__[23] = 'pyjamas.ui.HTMLPanel.py, line 23:\n    def _check_tagname(element, tagname):';
		$m.__track_lines__[24] = 'pyjamas.ui.HTMLPanel.py, line 24:\n    try:';
		$m.__track_lines__[25] = 'pyjamas.ui.HTMLPanel.py, line 25:\n    element_tagname = element.nodeName';
		$m.__track_lines__[26] = 'pyjamas.ui.HTMLPanel.py, line 26:\n    element_tagname = str(element_tagname).lower()';
		$m.__track_lines__[28] = 'pyjamas.ui.HTMLPanel.py, line 28:\n    element_tagname = None';
		$m.__track_lines__[29] = 'pyjamas.ui.HTMLPanel.py, line 29:\n    if element_tagname is not None and element_tagname == tagname:';
		$m.__track_lines__[30] = 'pyjamas.ui.HTMLPanel.py, line 30:\n    return element';
		$m.__track_lines__[31] = 'pyjamas.ui.HTMLPanel.py, line 31:\n    return None';
		$m.__track_lines__[33] = 'pyjamas.ui.HTMLPanel.py, line 33:\n    def getElementsByTagName(element, tagname):';
		$m.__track_lines__[34] = 'pyjamas.ui.HTMLPanel.py, line 34:\n    res = []';
		$m.__track_lines__[35] = 'pyjamas.ui.HTMLPanel.py, line 35:\n    el = _check_tagname(element, tagname)';
		$m.__track_lines__[36] = 'pyjamas.ui.HTMLPanel.py, line 36:\n    if el:';
		$m.__track_lines__[37] = 'pyjamas.ui.HTMLPanel.py, line 37:\n    res.append(el)';
		$m.__track_lines__[39] = 'pyjamas.ui.HTMLPanel.py, line 39:\n    it = DOM.walkChildren(element)';
		$m.__track_lines__[40] = 'pyjamas.ui.HTMLPanel.py, line 40:\n    while True:';
		$m.__track_lines__[41] = 'pyjamas.ui.HTMLPanel.py, line 41:\n    try:';
		$m.__track_lines__[42] = 'pyjamas.ui.HTMLPanel.py, line 42:\n    child = it.next()';
		$m.__track_lines__[44] = 'pyjamas.ui.HTMLPanel.py, line 44:\n    break';
		$m.__track_lines__[45] = 'pyjamas.ui.HTMLPanel.py, line 45:\n    el = _check_tagname(child, tagname)';
		$m.__track_lines__[46] = 'pyjamas.ui.HTMLPanel.py, line 46:\n    if el:';
		$m.__track_lines__[47] = 'pyjamas.ui.HTMLPanel.py, line 47:\n    res.append(el)';
		$m.__track_lines__[48] = 'pyjamas.ui.HTMLPanel.py, line 48:\n    return res';
		$m.__track_lines__[50] = 'pyjamas.ui.HTMLPanel.py, line 50:\n    def getElementById(element, id):';
		$m.__track_lines__[51] = 'pyjamas.ui.HTMLPanel.py, line 51:\n    try:';
		$m.__track_lines__[52] = 'pyjamas.ui.HTMLPanel.py, line 52:\n    element_id = DOM.getAttribute(element, "id")';
		$m.__track_lines__[54] = 'pyjamas.ui.HTMLPanel.py, line 54:\n    element_id = None';
		$m.__track_lines__[55] = 'pyjamas.ui.HTMLPanel.py, line 55:\n    if element_id is not None and element_id == id:';
		$m.__track_lines__[56] = 'pyjamas.ui.HTMLPanel.py, line 56:\n    return element';
		$m.__track_lines__[58] = 'pyjamas.ui.HTMLPanel.py, line 58:\n    child = DOM.getFirstChild(element)';
		$m.__track_lines__[59] = 'pyjamas.ui.HTMLPanel.py, line 59:\n    while child is not None:';
		$m.__track_lines__[60] = 'pyjamas.ui.HTMLPanel.py, line 60:\n    ret = getElementById(child, id)';
		$m.__track_lines__[61] = 'pyjamas.ui.HTMLPanel.py, line 61:\n    if ret is not None:';
		$m.__track_lines__[62] = 'pyjamas.ui.HTMLPanel.py, line 62:\n    return ret';
		$m.__track_lines__[63] = 'pyjamas.ui.HTMLPanel.py, line 63:\n    child = DOM.getNextSibling(child)';
		$m.__track_lines__[65] = 'pyjamas.ui.HTMLPanel.py, line 65:\n    return None';
		$m.__track_lines__[68] = 'pyjamas.ui.HTMLPanel.py, line 68:\n    class HTMLPanel(ComplexPanel, InnerHTML):';
		$m.__track_lines__[69] = 'pyjamas.ui.HTMLPanel.py, line 69:\n    def __init__(self, html, **ka):';
		$m.__track_lines__[74] = "pyjamas.ui.HTMLPanel.py, line 74:\n    if html: ka['HTML'] = html";
		$m.__track_lines__[75] = "pyjamas.ui.HTMLPanel.py, line 75:\n    element = ka.pop('Element', None) or DOM.createDiv()";
		$m.__track_lines__[76] = 'pyjamas.ui.HTMLPanel.py, line 76:\n    self.setElement(element)';
		$m.__track_lines__[77] = 'pyjamas.ui.HTMLPanel.py, line 77:\n    ComplexPanel.__init__(self, **ka)';
		$m.__track_lines__[79] = 'pyjamas.ui.HTMLPanel.py, line 79:\n    def add(self, widget, id):';
		$m.__track_lines__[80] = 'pyjamas.ui.HTMLPanel.py, line 80:\n    element = getElementById(self.getElement(), id)';
		$m.__track_lines__[81] = 'pyjamas.ui.HTMLPanel.py, line 81:\n    if element is None:';
		$m.__track_lines__[82] = 'pyjamas.ui.HTMLPanel.py, line 82:\n    raise Exception("HTMLPanel.add: no element with id \'%s\'" % str(id))';
		$m.__track_lines__[83] = 'pyjamas.ui.HTMLPanel.py, line 83:\n    ComplexPanel.add(self, widget, element)';
		$m.__track_lines__[85] = 'pyjamas.ui.HTMLPanel.py, line 85:\n    def findTags(self, tagname):';
		$m.__track_lines__[86] = 'pyjamas.ui.HTMLPanel.py, line 86:\n    return getElementsByTagName(self.getElement(), tagname)';
		$m.__track_lines__[89] = 'pyjamas.ui.HTMLPanel.py, line 88:\n    @staticmethod ... def createUniqueId():';
		$m.__track_lines__[90] = 'pyjamas.ui.HTMLPanel.py, line 90:\n    global HTMLPanel_sUid';
		$m.__track_lines__[92] = 'pyjamas.ui.HTMLPanel.py, line 92:\n    HTMLPanel_sUid += 1';
		$m.__track_lines__[93] = 'pyjamas.ui.HTMLPanel.py, line 93:\n    return "HTMLPanel_%d" % HTMLPanel_sUid';
		$m.__track_lines__[95] = "pyjamas.ui.HTMLPanel.py, line 95:\n    Factory.registerClass('pyjamas.ui.HTMLPanel', 'HTMLPanel', HTMLPanel)";

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='pyjamas.ui.HTMLPanel';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=17;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['InnerHTML'] = $p['___import___']('pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$m['HTMLPanel_sUid'] = $constant_int_0;
		$pyjs.track.lineno=23;
		$m['_check_tagname'] = function(element, tagname) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $and1,$and2,$pyjs_try_err,element_tagname;
			$pyjs.track={module:'pyjamas.ui.HTMLPanel',lineno:23};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.HTMLPanel';
			$pyjs.track.lineno=23;
			$pyjs.track.lineno=24;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=25;
					element_tagname = $p['getattr'](element, 'nodeName');
					$pyjs.track.lineno=26;
					element_tagname = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $p['str'](element_tagname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['lower']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
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
				$pyjs.track.module='pyjamas.ui.HTMLPanel';
				if (true) {
					$pyjs.track.lineno=28;
					element_tagname = null;
				}
			}
			$pyjs.track.lineno=29;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and1=!$p['op_is'](element_tagname, null))?$p['op_eq'](element_tagname, tagname):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
				$pyjs.track.lineno=30;
				$pyjs.track.lineno=30;
				var $pyjs__ret = element;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=31;
			$pyjs.track.lineno=31;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['_check_tagname'].__name__ = '_check_tagname';

		$m['_check_tagname'].__bind_type__ = 0;
		$m['_check_tagname'].__args__ = [null,null,['element'],['tagname']];
		$pyjs.track.lineno=33;
		$m['getElementsByTagName'] = function(element, tagname) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var el,res,it,$pyjs_try_err,child;
			$pyjs.track={module:'pyjamas.ui.HTMLPanel',lineno:33};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.HTMLPanel';
			$pyjs.track.lineno=33;
			$pyjs.track.lineno=34;
			res = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.track.lineno=35;
			el = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['_check_tagname'](element, tagname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs.track.lineno=36;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](el);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs.track.lineno=37;
				(function(){try{try{$pyjs.in_try_except += 1;
				return res['append'](el);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			$pyjs.track.lineno=39;
			it = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['walkChildren'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs.track.lineno=40;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs.track.lineno=41;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					try {
						$pyjs.in_try_except += 1;
						$pyjs.track.lineno=42;
						child = (function(){try{try{$pyjs.in_try_except += 1;
						return it['next']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
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
					$pyjs.track.module='pyjamas.ui.HTMLPanel';
					if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs.track.lineno=44;
						break;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=45;
				el = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['_check_tagname'](child, tagname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.track.lineno=46;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](el);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
					$pyjs.track.lineno=47;
					(function(){try{try{$pyjs.in_try_except += 1;
					return res['append'](el);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				}
			}
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=48;
			var $pyjs__ret = res;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getElementsByTagName'].__name__ = 'getElementsByTagName';

		$m['getElementsByTagName'].__bind_type__ = 0;
		$m['getElementsByTagName'].__args__ = [null,null,['element'],['tagname']];
		$pyjs.track.lineno=50;
		$m['getElementById'] = function(element, id) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $and3,$and4,ret,$pyjs_try_err,child,element_id;
			$pyjs.track={module:'pyjamas.ui.HTMLPanel',lineno:50};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.ui.HTMLPanel';
			$pyjs.track.lineno=50;
			$pyjs.track.lineno=51;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=52;
					element_id = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getAttribute'](element, 'id');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
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
				$pyjs.track.module='pyjamas.ui.HTMLPanel';
				if (true) {
					$pyjs.track.lineno=54;
					element_id = null;
				}
			}
			$pyjs.track.lineno=55;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and3=!$p['op_is'](element_id, null))?$p['op_eq'](element_id, id):$and3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=56;
				var $pyjs__ret = element;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=58;
			child = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['getFirstChild'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs.track.lineno=59;
			while ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_is'](child, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs.track.lineno=60;
				ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getElementById'](child, id);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.track.lineno=61;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_is'](ret, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs.track.lineno=62;
					$pyjs.track.lineno=62;
					var $pyjs__ret = ret;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=63;
				child = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['getNextSibling'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			}
			$pyjs.track.lineno=65;
			$pyjs.track.lineno=65;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getElementById'].__name__ = 'getElementById';

		$m['getElementById'].__bind_type__ = 0;
		$m['getElementById'].__args__ = [null,null,['element'],['id']];
		$pyjs.track.lineno=68;
		$m['HTMLPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.HTMLPanel';
			$cls_definition.__md5__ = '3c1cbaf462cce3652fc73a2126a0bf70';
			$pyjs.track.lineno=69;
			$method = $pyjs__bind_method2('__init__', function(html) {
				if (this.__is_instance__ === true) {
					var self = this;
					var ka = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
						var ka = arguments[arguments.length+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					html = arguments[1];
					var ka = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
						ka = arguments[arguments.length+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 2 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 2, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c1cbaf462cce3652fc73a2126a0bf70') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ka == 'undefined') {
					ka = $p['__empty_dict']();
					if (typeof html != 'undefined') {
						if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
							ka = html;
							html = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							ka = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $or1,$or2,element;
				$pyjs.track={module:'pyjamas.ui.HTMLPanel', lineno:69};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTMLPanel';
				$pyjs.track.lineno=69;
				$pyjs.track.lineno=74;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
					$pyjs.track.lineno=74;
					(function(){try{try{$pyjs.in_try_except += 1;
					return ka.__setitem__('HTML', html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				}
				$pyjs.track.lineno=75;
				element = ($p['bool']($or1=(function(){try{try{$pyjs.in_try_except += 1;
				return ka['pop']('Element', null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})())?$or1:(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
				$pyjs.track.lineno=76;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['setElement'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs.track.lineno=77;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, ka, [{}, self]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['ka'],['self'],['html']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=79;
			$method = $pyjs__bind_method2('add', function(widget, id) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					id = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c1cbaf462cce3652fc73a2126a0bf70') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var element;
				$pyjs.track={module:'pyjamas.ui.HTMLPanel', lineno:79};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTMLPanel';
				$pyjs.track.lineno=79;
				$pyjs.track.lineno=80;
				element = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getElementById']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})(), id);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs.track.lineno=81;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_is'](element, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
					$pyjs.track.lineno=82;
					$pyjs.__active_exception_stack__ = null;
					throw ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['Exception']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']("HTMLPanel.add: no element with id '%s'", (function(){try{try{$pyjs.in_try_except += 1;
					return $p['str'](id);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})());
				}
				$pyjs.track.lineno=83;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['ComplexPanel']['add'](self, widget, element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['id']]);
			$cls_definition['add'] = $method;
			$pyjs.track.lineno=85;
			$method = $pyjs__bind_method2('findTags', function(tagname) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					tagname = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3c1cbaf462cce3652fc73a2126a0bf70') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.HTMLPanel', lineno:85};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTMLPanel';
				$pyjs.track.lineno=85;
				$pyjs.track.lineno=86;
				$pyjs.track.lineno=86;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['getElementsByTagName']((function(){try{try{$pyjs.in_try_except += 1;
				return self['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})(), tagname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['tagname']]);
			$cls_definition['findTags'] = $method;
			$pyjs.track.lineno=89;
			$method = $pyjs__bind_method2('createUniqueId', function() {
				if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
				var $add2,$add1;
				$pyjs.track={module:'pyjamas.ui.HTMLPanel', lineno:89};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTMLPanel';
				$pyjs.track.lineno=89;
				$pyjs.track.lineno=90;
				$pyjs.track.lineno=92;
				$m['HTMLPanel_sUid'] = $p['__op_add']($add1=$m['HTMLPanel_sUid'],$add2=$constant_int_1);
				$pyjs.track.lineno=93;
				$pyjs.track.lineno=93;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('HTMLPanel_%d', $m['HTMLPanel_sUid']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 3, [null,null]);
			$cls_definition['createUniqueId'] = $method;
			$pyjs.track.lineno=68;
			var $bases = new Array($m['ComplexPanel'],$m['InnerHTML']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HTMLPanel', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=95;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.HTMLPanel', 'HTMLPanel', $m['HTMLPanel']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.HTMLPanel */


/* end module: pyjamas.ui.HTMLPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', 'pyjamas.ui.InnerHTML', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui.ComplexPanel']
*/
