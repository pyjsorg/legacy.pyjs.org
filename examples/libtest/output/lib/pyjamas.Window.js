/* start module: pyjamas.Window */
$pyjs.loaded_modules['pyjamas.Window'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Window'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Window'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.Window"];
	$m.__repr__ = function() { return "<module: pyjamas.Window>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Window';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['Window'] = $pyjs.loaded_modules['pyjamas.Window'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Window.py, line 1:\n    # This is the pyjd Window module.';
		$m.__track_lines__[8] = 'pyjamas.Window.py, line 8:\n    closingListeners = []';
		$m.__track_lines__[9] = 'pyjamas.Window.py, line 9:\n    resizeListeners = []';
		$m.__track_lines__[11] = 'pyjamas.Window.py, line 11:\n    from __pyjamas__ import JS, doc, wnd, get_main_frame';
		$m.__track_lines__[12] = 'pyjamas.Window.py, line 12:\n    from pyjamas import Location';
		$m.__track_lines__[14] = 'pyjamas.Window.py, line 14:\n    def init_listeners():';
		$m.__track_lines__[15] = 'pyjamas.Window.py, line 15:\n    pass';
		$m.__track_lines__[17] = 'pyjamas.Window.py, line 17:\n    def addWindowCloseListener(listener):';
		$m.__track_lines__[18] = 'pyjamas.Window.py, line 18:\n    closingListeners.append(listener)';
		$m.__track_lines__[20] = 'pyjamas.Window.py, line 20:\n    def addWindowResizeListener(listener):';
		$m.__track_lines__[21] = 'pyjamas.Window.py, line 21:\n    resizeListeners.append(listener)';
		$m.__track_lines__[23] = 'pyjamas.Window.py, line 23:\n    def removeWindowCloseListener(listener):';
		$m.__track_lines__[24] = 'pyjamas.Window.py, line 24:\n    closingListeners.remove(listener)';
		$m.__track_lines__[26] = 'pyjamas.Window.py, line 26:\n    def removeWindowResizeListener(listener):';
		$m.__track_lines__[27] = 'pyjamas.Window.py, line 27:\n    resizeListeners.remove(listener)';
		$m.__track_lines__[29] = 'pyjamas.Window.py, line 29:\n    def alert(txt):';
		$m.__track_lines__[30] = 'pyjamas.Window.py, line 30:\n    get_main_frame()._alert(txt)';
		$m.__track_lines__[32] = 'pyjamas.Window.py, line 32:\n    def confirm(msg):';
		$m.__track_lines__[33] = 'pyjamas.Window.py, line 33:\n    return wnd().confirm(msg)';
		$m.__track_lines__[35] = 'pyjamas.Window.py, line 35:\n    def prompt(msg, defaultReply=""):';
		$m.__track_lines__[36] = 'pyjamas.Window.py, line 36:\n    return wnd().prompt(msg, defaultReply, "", 0)';
		$m.__track_lines__[38] = 'pyjamas.Window.py, line 38:\n    def enableScrolling(enable):';
		$m.__track_lines__[39] = "pyjamas.Window.py, line 39:\n    doc().body.style.overflow = enable and 'auto' or 'hidden'";
		$m.__track_lines__[41] = 'pyjamas.Window.py, line 41:\n    def scrollBy(x, y):';
		$m.__track_lines__[42] = 'pyjamas.Window.py, line 42:\n    wnd().scrollBy(x, y)';
		$m.__track_lines__[44] = 'pyjamas.Window.py, line 44:\n    def scroll(x, y):';
		$m.__track_lines__[45] = 'pyjamas.Window.py, line 45:\n    wnd().scroll(x, y)';
		$m.__track_lines__[47] = 'pyjamas.Window.py, line 47:\n    def getClientHeight():';
		$m.__track_lines__[48] = 'pyjamas.Window.py, line 48:\n    try:';
		$m.__track_lines__[49] = 'pyjamas.Window.py, line 49:\n    return wnd().innerHeight';
		$m.__track_lines__[51] = 'pyjamas.Window.py, line 51:\n    return doc().body.clientHeight;';
		$m.__track_lines__[53] = 'pyjamas.Window.py, line 53:\n    def getClientWidth():';
		$m.__track_lines__[54] = 'pyjamas.Window.py, line 54:\n    try:';
		$m.__track_lines__[55] = 'pyjamas.Window.py, line 55:\n    return wnd().innerWidth';
		$m.__track_lines__[57] = 'pyjamas.Window.py, line 57:\n    return doc().body.clientWidth;';
		$m.__track_lines__[59] = 'pyjamas.Window.py, line 59:\n    def getScrollLeft():';
		$m.__track_lines__[60] = 'pyjamas.Window.py, line 60:\n    return getDocumentRoot().scrollLeft;';
		$m.__track_lines__[62] = 'pyjamas.Window.py, line 62:\n    def getScrollTop():';
		$m.__track_lines__[63] = 'pyjamas.Window.py, line 63:\n    return getDocumentRoot().scrollTop;';
		$m.__track_lines__[65] = 'pyjamas.Window.py, line 65:\n    def getDocumentRoot():';
		$m.__track_lines__[66] = "pyjamas.Window.py, line 66:\n    if doc().compatMode == 'CSS1Compat':";
		$m.__track_lines__[67] = 'pyjamas.Window.py, line 67:\n    return doc().documentElement';
		$m.__track_lines__[68] = 'pyjamas.Window.py, line 68:\n    return doc().body';
		$m.__track_lines__[70] = 'pyjamas.Window.py, line 70:\n    def setLocation(url):';
		$m.__track_lines__[71] = 'pyjamas.Window.py, line 71:\n    w = wnd()';
		$m.__track_lines__[72] = 'pyjamas.Window.py, line 72:\n    w.location = url';
		$m.__track_lines__[74] = 'pyjamas.Window.py, line 74:\n    location = None';
		$m.__track_lines__[76] = 'pyjamas.Window.py, line 76:\n    def getLocation():';
		$m.__track_lines__[77] = 'pyjamas.Window.py, line 77:\n    global location';
		$m.__track_lines__[78] = 'pyjamas.Window.py, line 78:\n    if not location:';
		$m.__track_lines__[79] = 'pyjamas.Window.py, line 79:\n    location = Location.Location(wnd().location)';
		$m.__track_lines__[80] = 'pyjamas.Window.py, line 80:\n    return location';
		$m.__track_lines__[82] = 'pyjamas.Window.py, line 82:\n    def getTitle():';
		$m.__track_lines__[83] = 'pyjamas.Window.py, line 83:\n    return doc().title';
		$m.__track_lines__[85] = 'pyjamas.Window.py, line 85:\n    def open(url, name, features):';
		$m.__track_lines__[86] = 'pyjamas.Window.py, line 86:\n    return wnd().open(url, name, features)';
		$m.__track_lines__[88] = 'pyjamas.Window.py, line 88:\n    def setMargin(size):';
		$m.__track_lines__[89] = 'pyjamas.Window.py, line 89:\n    doc().body.style.margin = size';
		$m.__track_lines__[91] = 'pyjamas.Window.py, line 91:\n    def setTitle(title):';
		$m.__track_lines__[92] = 'pyjamas.Window.py, line 92:\n    d = doc()';
		$m.__track_lines__[93] = 'pyjamas.Window.py, line 93:\n    d.title = title';
		$m.__track_lines__[95] = 'pyjamas.Window.py, line 95:\n    def setOnError(onError):';
		$m.__track_lines__[96] = 'pyjamas.Window.py, line 96:\n    pass';
		$m.__track_lines__[98] = 'pyjamas.Window.py, line 98:\n    def onError(msg, url, linenumber):';
		$m.__track_lines__[99] = 'pyjamas.Window.py, line 99:\n    pass';
		$m.__track_lines__[102] = 'pyjamas.Window.py, line 102:\n    def onClosed():';
		$m.__track_lines__[103] = 'pyjamas.Window.py, line 103:\n    fireClosedImpl()';
		$m.__track_lines__[106] = 'pyjamas.Window.py, line 106:\n    def onClosing():';
		$m.__track_lines__[107] = 'pyjamas.Window.py, line 107:\n    fireClosingImpl()';
		$m.__track_lines__[110] = 'pyjamas.Window.py, line 110:\n    def onResize():';
		$m.__track_lines__[111] = 'pyjamas.Window.py, line 111:\n    fireResizedImpl()';
		$m.__track_lines__[113] = 'pyjamas.Window.py, line 113:\n    def fireClosedAndCatch(handler):';
		$m.__track_lines__[115] = 'pyjamas.Window.py, line 115:\n    pass';
		$m.__track_lines__[117] = 'pyjamas.Window.py, line 117:\n    def fireClosedImpl():';
		$m.__track_lines__[118] = 'pyjamas.Window.py, line 118:\n    for listener in closingListeners:';
		$m.__track_lines__[119] = 'pyjamas.Window.py, line 119:\n    listener.onWindowClosed()';
		$m.__track_lines__[121] = 'pyjamas.Window.py, line 121:\n    def fireClosingAndCatch(handler):';
		$m.__track_lines__[123] = 'pyjamas.Window.py, line 123:\n    pass';
		$m.__track_lines__[125] = 'pyjamas.Window.py, line 125:\n    def resize(width, height):';
		$m.__track_lines__[128] = 'pyjamas.Window.py, line 128:\n    wnd().resizeTo(width, height)';
		$m.__track_lines__[130] = 'pyjamas.Window.py, line 130:\n    def resizeBy(width, height):';
		$m.__track_lines__[133] = 'pyjamas.Window.py, line 133:\n    wnd().resizeBy(width, height)';
		$m.__track_lines__[135] = 'pyjamas.Window.py, line 135:\n    def fireClosingImpl():';
		$m.__track_lines__[136] = 'pyjamas.Window.py, line 136:\n    ret = None';
		$m.__track_lines__[137] = 'pyjamas.Window.py, line 137:\n    for listener in closingListeners:';
		$m.__track_lines__[138] = 'pyjamas.Window.py, line 138:\n    msg = listener.onWindowClosing()';
		$m.__track_lines__[139] = 'pyjamas.Window.py, line 139:\n    if ret is None:';
		$m.__track_lines__[140] = 'pyjamas.Window.py, line 140:\n    ret = msg';
		$m.__track_lines__[141] = 'pyjamas.Window.py, line 141:\n    return ret';
		$m.__track_lines__[143] = 'pyjamas.Window.py, line 143:\n    def fireResizedAndCatch(handler):';
		$m.__track_lines__[145] = 'pyjamas.Window.py, line 145:\n    pass';
		$m.__track_lines__[147] = 'pyjamas.Window.py, line 147:\n    def fireResizedImpl():';
		$m.__track_lines__[148] = 'pyjamas.Window.py, line 148:\n    for listener in resizeListeners:';
		$m.__track_lines__[149] = 'pyjamas.Window.py, line 149:\n    listener.onWindowResized(getClientWidth(), getClientHeight())';
		$m.__track_lines__[151] = 'pyjamas.Window.py, line 151:\n    def init():';
		$m.__track_lines__[152] = 'pyjamas.Window.py, line 152:\n    pass';
		$m.__track_lines__[154] = 'pyjamas.Window.py, line 154:\n    init()';

		var $constant_int_0 = new $p['int'](0);
		$pyjs.track.module='pyjamas.Window';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=8;
		$m['closingListeners'] = $p['list']([]);
		$pyjs.track.lineno=9;
		$m['resizeListeners'] = $p['list']([]);
		$pyjs.track.lineno=11;
		$pyjs.track.lineno=12;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Location'] = $p['___import___']('pyjamas.Location', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=14;
		$m['init_listeners'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:14};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=14;
			$pyjs.track.lineno=15;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['init_listeners'].__name__ = 'init_listeners';

		$m['init_listeners'].__bind_type__ = 0;
		$m['init_listeners'].__args__ = [null,null];
		$pyjs.track.lineno=17;
		$m['addWindowCloseListener'] = function(listener) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:17};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=17;
			$pyjs.track.lineno=18;
			$m['closingListeners']['append'](listener);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['addWindowCloseListener'].__name__ = 'addWindowCloseListener';

		$m['addWindowCloseListener'].__bind_type__ = 0;
		$m['addWindowCloseListener'].__args__ = [null,null,['listener']];
		$pyjs.track.lineno=20;
		$m['addWindowResizeListener'] = function(listener) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:20};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=20;
			$pyjs.track.lineno=21;
			$m['resizeListeners']['append'](listener);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['addWindowResizeListener'].__name__ = 'addWindowResizeListener';

		$m['addWindowResizeListener'].__bind_type__ = 0;
		$m['addWindowResizeListener'].__args__ = [null,null,['listener']];
		$pyjs.track.lineno=23;
		$m['removeWindowCloseListener'] = function(listener) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:23};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=23;
			$pyjs.track.lineno=24;
			$m['closingListeners']['remove'](listener);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['removeWindowCloseListener'].__name__ = 'removeWindowCloseListener';

		$m['removeWindowCloseListener'].__bind_type__ = 0;
		$m['removeWindowCloseListener'].__args__ = [null,null,['listener']];
		$pyjs.track.lineno=26;
		$m['removeWindowResizeListener'] = function(listener) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:26};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=26;
			$pyjs.track.lineno=27;
			$m['resizeListeners']['remove'](listener);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['removeWindowResizeListener'].__name__ = 'removeWindowResizeListener';

		$m['removeWindowResizeListener'].__bind_type__ = 0;
		$m['removeWindowResizeListener'].__args__ = [null,null,['listener']];
		$pyjs.track.lineno=29;
		$m['alert'] = function(txt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:29};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=29;
			$pyjs.track.lineno=30;
			$m.get_main_frame()['_alert'](txt);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['alert'].__name__ = 'alert';

		$m['alert'].__bind_type__ = 0;
		$m['alert'].__args__ = [null,null,['txt']];
		$pyjs.track.lineno=32;
		$m['confirm'] = function(msg) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:32};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=32;
			$pyjs.track.lineno=33;
			$pyjs.track.lineno=33;
			var $pyjs__ret = $wnd['confirm'](msg);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['confirm'].__name__ = 'confirm';

		$m['confirm'].__bind_type__ = 0;
		$m['confirm'].__args__ = [null,null,['msg']];
		$pyjs.track.lineno=35;
		$m['prompt'] = function(msg, defaultReply) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 2, arguments.length);
			if (typeof defaultReply == 'undefined') defaultReply=arguments.callee.__args__[3][1];

			$pyjs.track={module:'pyjamas.Window',lineno:35};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=35;
			$pyjs.track.lineno=36;
			$pyjs.track.lineno=36;
			var $pyjs__ret = $wnd['prompt'](msg, defaultReply, '', $constant_int_0);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['prompt'].__name__ = 'prompt';

		$m['prompt'].__bind_type__ = 0;
		$m['prompt'].__args__ = [null,null,['msg'],['defaultReply', '']];
		$pyjs.track.lineno=38;
		$m['enableScrolling'] = function(enable) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $or1,$or2,$and1,$and2,$bool2,$bool1;
			$pyjs.track={module:'pyjamas.Window',lineno:38};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=38;
			$pyjs.track.lineno=39;
			$p['getattr']($p['getattr']($doc, 'body'), 'style').__is_instance__ && typeof $p['getattr']($p['getattr']($doc, 'body'), 'style').__setattr__ == 'function' ? $p['getattr']($p['getattr']($doc, 'body'), 'style').__setattr__('overflow', ((($bool2=$or1=((($bool1=$and1=enable) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?'auto':$and1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:'hidden')) : $p['setattr']($p['getattr']($p['getattr']($doc, 'body'), 'style'), 'overflow', ((($bool2=$or1=((($bool1=$and1=enable) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?'auto':$and1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:'hidden')); 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['enableScrolling'].__name__ = 'enableScrolling';

		$m['enableScrolling'].__bind_type__ = 0;
		$m['enableScrolling'].__args__ = [null,null,['enable']];
		$pyjs.track.lineno=41;
		$m['scrollBy'] = function(x, y) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:41};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=41;
			$pyjs.track.lineno=42;
			$wnd['scrollBy'](x, y);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['scrollBy'].__name__ = 'scrollBy';

		$m['scrollBy'].__bind_type__ = 0;
		$m['scrollBy'].__args__ = [null,null,['x'],['y']];
		$pyjs.track.lineno=44;
		$m['scroll'] = function(x, y) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:44};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=44;
			$pyjs.track.lineno=45;
			$wnd['scroll'](x, y);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['scroll'].__name__ = 'scroll';

		$m['scroll'].__bind_type__ = 0;
		$m['scroll'].__args__ = [null,null,['x'],['y']];
		$pyjs.track.lineno=47;
		$m['getClientHeight'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $pyjs_try_err;
			$pyjs.track={module:'pyjamas.Window',lineno:47};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=47;
			$pyjs.track.lineno=48;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=49;
				$pyjs.track.lineno=49;
				var $pyjs__ret = $p['getattr']($wnd, 'innerHeight');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
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
				$pyjs.track.module='pyjamas.Window';
				if (true) {
					$pyjs.track.lineno=51;
					$pyjs.track.lineno=51;
					var $pyjs__ret = $p['getattr']($p['getattr']($doc, 'body'), 'clientHeight');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['getClientHeight'].__name__ = 'getClientHeight';

		$m['getClientHeight'].__bind_type__ = 0;
		$m['getClientHeight'].__args__ = [null,null];
		$pyjs.track.lineno=53;
		$m['getClientWidth'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $pyjs_try_err;
			$pyjs.track={module:'pyjamas.Window',lineno:53};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=53;
			$pyjs.track.lineno=54;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=55;
				$pyjs.track.lineno=55;
				var $pyjs__ret = $p['getattr']($wnd, 'innerWidth');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
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
				$pyjs.track.module='pyjamas.Window';
				if (true) {
					$pyjs.track.lineno=57;
					$pyjs.track.lineno=57;
					var $pyjs__ret = $p['getattr']($p['getattr']($doc, 'body'), 'clientWidth');
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['getClientWidth'].__name__ = 'getClientWidth';

		$m['getClientWidth'].__bind_type__ = 0;
		$m['getClientWidth'].__args__ = [null,null];
		$pyjs.track.lineno=59;
		$m['getScrollLeft'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:59};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=59;
			$pyjs.track.lineno=60;
			$pyjs.track.lineno=60;
			var $pyjs__ret = $p['getattr']((typeof getDocumentRoot == "undefined"?$m.getDocumentRoot:getDocumentRoot)(), 'scrollLeft');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['getScrollLeft'].__name__ = 'getScrollLeft';

		$m['getScrollLeft'].__bind_type__ = 0;
		$m['getScrollLeft'].__args__ = [null,null];
		$pyjs.track.lineno=62;
		$m['getScrollTop'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:62};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=62;
			$pyjs.track.lineno=63;
			$pyjs.track.lineno=63;
			var $pyjs__ret = $p['getattr']((typeof getDocumentRoot == "undefined"?$m.getDocumentRoot:getDocumentRoot)(), 'scrollTop');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['getScrollTop'].__name__ = 'getScrollTop';

		$m['getScrollTop'].__bind_type__ = 0;
		$m['getScrollTop'].__args__ = [null,null];
		$pyjs.track.lineno=65;
		$m['getDocumentRoot'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $bool3;
			$pyjs.track={module:'pyjamas.Window',lineno:65};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=65;
			$pyjs.track.lineno=66;
			if ((($bool3=$p['op_eq']($p['getattr']($doc, 'compatMode'), 'CSS1Compat')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				$pyjs.track.lineno=67;
				$pyjs.track.lineno=67;
				var $pyjs__ret = $p['getattr']($doc, 'documentElement');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=68;
			$pyjs.track.lineno=68;
			var $pyjs__ret = $p['getattr']($doc, 'body');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getDocumentRoot'].__name__ = 'getDocumentRoot';

		$m['getDocumentRoot'].__bind_type__ = 0;
		$m['getDocumentRoot'].__args__ = [null,null];
		$pyjs.track.lineno=70;
		$m['setLocation'] = function(url) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var w;
			$pyjs.track={module:'pyjamas.Window',lineno:70};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=70;
			$pyjs.track.lineno=71;
			w = $wnd;
			$pyjs.track.lineno=72;
			w.__is_instance__ && typeof w.__setattr__ == 'function' ? w.__setattr__('location', url) : $p['setattr'](w, 'location', url); 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setLocation'].__name__ = 'setLocation';

		$m['setLocation'].__bind_type__ = 0;
		$m['setLocation'].__args__ = [null,null,['url']];
		$pyjs.track.lineno=74;
		$m['location'] = null;
		$pyjs.track.lineno=76;
		$m['getLocation'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $bool4,$bool5;
			$pyjs.track={module:'pyjamas.Window',lineno:76};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=76;
			$pyjs.track.lineno=77;
			$pyjs.track.lineno=78;
			if ((($bool5=!(($bool4=$m['location']) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$pyjs.track.lineno=79;
				$m['location'] = $m['Location']['Location']($p['getattr']($wnd, 'location'));
			}
			$pyjs.track.lineno=80;
			$pyjs.track.lineno=80;
			var $pyjs__ret = $m['location'];
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getLocation'].__name__ = 'getLocation';

		$m['getLocation'].__bind_type__ = 0;
		$m['getLocation'].__args__ = [null,null];
		$pyjs.track.lineno=82;
		$m['getTitle'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:82};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=82;
			$pyjs.track.lineno=83;
			$pyjs.track.lineno=83;
			var $pyjs__ret = $p['getattr']($doc, 'title');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['getTitle'].__name__ = 'getTitle';

		$m['getTitle'].__bind_type__ = 0;
		$m['getTitle'].__args__ = [null,null];
		$pyjs.track.lineno=85;
		$m['open'] = function(url, name, features) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:85};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=85;
			$pyjs.track.lineno=86;
			$pyjs.track.lineno=86;
			var $pyjs__ret = $wnd['open'](url, name, features);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['open'].__name__ = 'open';

		$m['open'].__bind_type__ = 0;
		$m['open'].__args__ = [null,null,['url'],['name'],['features']];
		$pyjs.track.lineno=88;
		$m['setMargin'] = function(size) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:88};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=88;
			$pyjs.track.lineno=89;
			$p['getattr']($p['getattr']($doc, 'body'), 'style').__is_instance__ && typeof $p['getattr']($p['getattr']($doc, 'body'), 'style').__setattr__ == 'function' ? $p['getattr']($p['getattr']($doc, 'body'), 'style').__setattr__('margin', size) : $p['setattr']($p['getattr']($p['getattr']($doc, 'body'), 'style'), 'margin', size); 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setMargin'].__name__ = 'setMargin';

		$m['setMargin'].__bind_type__ = 0;
		$m['setMargin'].__args__ = [null,null,['size']];
		$pyjs.track.lineno=91;
		$m['setTitle'] = function(title) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var d;
			$pyjs.track={module:'pyjamas.Window',lineno:91};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=91;
			$pyjs.track.lineno=92;
			d = $doc;
			$pyjs.track.lineno=93;
			d.__is_instance__ && typeof d.__setattr__ == 'function' ? d.__setattr__('title', title) : $p['setattr'](d, 'title', title); 
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setTitle'].__name__ = 'setTitle';

		$m['setTitle'].__bind_type__ = 0;
		$m['setTitle'].__args__ = [null,null,['title']];
		$pyjs.track.lineno=95;
		$m['setOnError'] = function(onError) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:95};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=95;
			$pyjs.track.lineno=96;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setOnError'].__name__ = 'setOnError';

		$m['setOnError'].__bind_type__ = 0;
		$m['setOnError'].__args__ = [null,null,['onError']];
		$pyjs.track.lineno=98;
		$m['onError'] = function(msg, url, linenumber) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:98};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=98;
			$pyjs.track.lineno=99;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['onError'].__name__ = 'onError';

		$m['onError'].__bind_type__ = 0;
		$m['onError'].__args__ = [null,null,['msg'],['url'],['linenumber']];
		$pyjs.track.lineno=102;
		$m['onClosed'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:102};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=102;
			$pyjs.track.lineno=103;
			(typeof fireClosedImpl == "undefined"?$m.fireClosedImpl:fireClosedImpl)();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['onClosed'].__name__ = 'onClosed';

		$m['onClosed'].__bind_type__ = 0;
		$m['onClosed'].__args__ = [null,null];
		$pyjs.track.lineno=106;
		$m['onClosing'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:106};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=106;
			$pyjs.track.lineno=107;
			(typeof fireClosingImpl == "undefined"?$m.fireClosingImpl:fireClosingImpl)();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['onClosing'].__name__ = 'onClosing';

		$m['onClosing'].__bind_type__ = 0;
		$m['onClosing'].__args__ = [null,null];
		$pyjs.track.lineno=110;
		$m['onResize'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:110};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=110;
			$pyjs.track.lineno=111;
			(typeof fireResizedImpl == "undefined"?$m.fireResizedImpl:fireResizedImpl)();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['onResize'].__name__ = 'onResize';

		$m['onResize'].__bind_type__ = 0;
		$m['onResize'].__args__ = [null,null];
		$pyjs.track.lineno=113;
		$m['fireClosedAndCatch'] = function(handler) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:113};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=113;
			$pyjs.track.lineno=115;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['fireClosedAndCatch'].__name__ = 'fireClosedAndCatch';

		$m['fireClosedAndCatch'].__bind_type__ = 0;
		$m['fireClosedAndCatch'].__args__ = [null,null,['handler']];
		$pyjs.track.lineno=117;
		$m['fireClosedImpl'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
			$pyjs.track={module:'pyjamas.Window',lineno:117};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=117;
			$pyjs.track.lineno=118;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = $m['closingListeners'];
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				listener = $iter1_nextval;
				$pyjs.track.lineno=119;
				listener['onWindowClosed']();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.Window';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['fireClosedImpl'].__name__ = 'fireClosedImpl';

		$m['fireClosedImpl'].__bind_type__ = 0;
		$m['fireClosedImpl'].__args__ = [null,null];
		$pyjs.track.lineno=121;
		$m['fireClosingAndCatch'] = function(handler) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:121};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=121;
			$pyjs.track.lineno=123;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['fireClosingAndCatch'].__name__ = 'fireClosingAndCatch';

		$m['fireClosingAndCatch'].__bind_type__ = 0;
		$m['fireClosingAndCatch'].__args__ = [null,null,['handler']];
		$pyjs.track.lineno=125;
		$m['resize'] = function(width, height) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:125};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=125;
			$pyjs.track.lineno=128;
			$wnd['resizeTo'](width, height);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['resize'].__name__ = 'resize';

		$m['resize'].__bind_type__ = 0;
		$m['resize'].__args__ = [null,null,['width'],['height']];
		$pyjs.track.lineno=130;
		$m['resizeBy'] = function(width, height) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:130};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=130;
			$pyjs.track.lineno=133;
			$wnd['resizeBy'](width, height);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['resizeBy'].__name__ = 'resizeBy';

		$m['resizeBy'].__bind_type__ = 0;
		$m['resizeBy'].__args__ = [null,null,['width'],['height']];
		$pyjs.track.lineno=135;
		$m['fireClosingImpl'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $iter2_nextval,$iter2_type,$iter2_iter,ret,listener,$iter2_idx,$bool6,$pyjs__trackstack_size_1,msg,$iter2_array;
			$pyjs.track={module:'pyjamas.Window',lineno:135};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=135;
			$pyjs.track.lineno=136;
			ret = null;
			$pyjs.track.lineno=137;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter2_iter = $m['closingListeners'];
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				listener = $iter2_nextval;
				$pyjs.track.lineno=138;
				msg = listener['onWindowClosing']();
				$pyjs.track.lineno=139;
				if ((($bool6=$p['op_is'](ret, null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					$pyjs.track.lineno=140;
					ret = msg;
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=141;
			$pyjs.track.lineno=141;
			var $pyjs__ret = ret;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['fireClosingImpl'].__name__ = 'fireClosingImpl';

		$m['fireClosingImpl'].__bind_type__ = 0;
		$m['fireClosingImpl'].__args__ = [null,null];
		$pyjs.track.lineno=143;
		$m['fireResizedAndCatch'] = function(handler) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:143};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=143;
			$pyjs.track.lineno=145;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['fireResizedAndCatch'].__name__ = 'fireResizedAndCatch';

		$m['fireResizedAndCatch'].__bind_type__ = 0;
		$m['fireResizedAndCatch'].__args__ = [null,null,['handler']];
		$pyjs.track.lineno=147;
		$m['fireResizedImpl'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $iter3_idx,$iter3_nextval,$iter3_type,listener,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1;
			$pyjs.track={module:'pyjamas.Window',lineno:147};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=147;
			$pyjs.track.lineno=148;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter3_iter = $m['resizeListeners'];
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				listener = $iter3_nextval;
				$pyjs.track.lineno=149;
				listener['onWindowResized']($m['getClientWidth'](), $m['getClientHeight']());
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.Window';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['fireResizedImpl'].__name__ = 'fireResizedImpl';

		$m['fireResizedImpl'].__bind_type__ = 0;
		$m['fireResizedImpl'].__args__ = [null,null];
		$pyjs.track.lineno=151;
		$m['init'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.Window',lineno:151};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.Window';
			$pyjs.track.lineno=151;
			$pyjs.track.lineno=152;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['init'].__name__ = 'init';

		$m['init'].__bind_type__ = 0;
		$m['init'].__args__ = [null,null];
		$pyjs.track.lineno=154;
		$m['init']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Window */


/* end module: pyjamas.Window */


/*
PYJS_DEPS: ['pyjamas.Location', 'pyjamas']
*/
