/* start module: pyjamas.History */
$pyjs.loaded_modules['pyjamas.History'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.History'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.History'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.History"];
	$m.__repr__ = function() { return "<module: pyjamas.History>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.History';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['History'] = $pyjs.loaded_modules['pyjamas.History'];
	try {
		$m.__track_lines__[1] = 'pyjamas.History.py, line 1:\n    # This is the gtk-dependent History module.';
		$m.__track_lines__[2] = 'pyjamas.History.py, line 2:\n    # For the pyjamas/javascript version, see platform/HistoryPyJS.py';
		$m.__track_lines__[4] = 'pyjamas.History.py, line 4:\n    from __pyjamas__ import JS, doc, wnd';
		$m.__track_lines__[5] = 'pyjamas.History.py, line 5:\n    import pyjd';
		$m.__track_lines__[6] = 'pyjamas.History.py, line 6:\n    if pyjd.is_desktop:';
		$m.__track_lines__[7] = 'pyjamas.History.py, line 7:\n    from __pyjamas__ import get_main_frame';
		$m.__track_lines__[9] = 'pyjamas.History.py, line 9:\n    global historyToken';
		$m.__track_lines__[10] = "pyjamas.History.py, line 10:\n    historyToken = ''";
		$m.__track_lines__[12] = 'pyjamas.History.py, line 12:\n    historyListeners = []';
		$m.__track_lines__[15] = 'pyjamas.History.py, line 15:\n    """';
		$m.__track_lines__[40] = 'pyjamas.History.py, line 40:\n    def addHistoryListener(listener):';
		$m.__track_lines__[45] = 'pyjamas.History.py, line 45:\n    def back():';
		$m.__track_lines__[49] = 'pyjamas.History.py, line 49:\n    def forward():';
		$m.__track_lines__[53] = 'pyjamas.History.py, line 53:\n    def getToken():';
		$m.__track_lines__[58] = 'pyjamas.History.py, line 58:\n    def newItem(ht):';
		$m.__track_lines__[61] = 'pyjamas.History.py, line 61:\n    return';
		$m.__track_lines__[65] = 'pyjamas.History.py, line 65:\n    JS("""';
		$m.__track_lines__[66] = 'pyjamas.History.py, line 66:\n    if(@{{historyToken}} == "" || @{{historyToken}} == null){';
		$m.__track_lines__[71] = 'pyjamas.History.py, line 71:\n    ';
		$m.__track_lines__[74] = 'pyjamas.History.py, line 74:\n    def onHistoryChanged(ht):';
		$m.__track_lines__[79] = 'pyjamas.History.py, line 79:\n    def fireHistoryChangedAndCatch():';
		$m.__track_lines__[83] = 'pyjamas.History.py, line 83:\n    def fireHistoryChangedImpl(ht):';
		$m.__track_lines__[90] = 'pyjamas.History.py, line 90:\n    ';
		$m.__track_lines__[92] = 'pyjamas.History.py, line 92:\n    def removeHistoryListener(listener):';
		$m.__track_lines__[94] = 'pyjamas.History.py, line 94:\n    ';
		$m.__track_lines__[95] = 'pyjamas.History.py, line 95:\n    def _first_notify():';
		$m.__track_lines__[96] = 'pyjamas.History.py, line 96:\n    print "first notify", historyToken';
		$m.__track_lines__[97] = 'pyjamas.History.py, line 97:\n    onHistoryChanged(historyToken)';
		$m.__track_lines__[98] = 'pyjamas.History.py, line 98:\n    ';
		$m.__track_lines__[99] = 'pyjamas.History.py, line 2:\n    # For the pyjamas/javascript version, see platform/HistoryPyJS.py ... def init():';
		$m.__track_lines__[101] = 'pyjamas.History.py, line 101:\n    if get_main_frame() is None:';
		$m.__track_lines__[114] = 'pyjamas.History.py, line 114:\n    init()';


		$pyjs.track.module='pyjamas.History';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=4;
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['getattr']($m['pyjd'], 'is_desktop'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
			$pyjs.track.lineno=7;
		}
		$pyjs.track.lineno=9;
		$pyjs.track.lineno=10;
		$m['historyToken'] = '';
		$pyjs.track.lineno=12;
		$m['historyListeners'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
		$pyjs.track.lineno=15;
		$pyjs.track.lineno=40;
		$m['addHistoryListener'] = function(listener) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.History',lineno:40};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.History';
			$pyjs.track.lineno=40;
			$pyjs.track.lineno=58;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['historyListeners']['append'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['addHistoryListener'].__name__ = 'addHistoryListener';

		$m['addHistoryListener'].__bind_type__ = 0;
		$m['addHistoryListener'].__args__ = [null,null,['listener']];
		$pyjs.track.lineno=45;
		$m['back'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.History',lineno:45};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.History';
			$pyjs.track.lineno=45;
			$pyjs.track.lineno=61;

    $wnd.history.back();
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		};
		$m['back'].__name__ = 'back';

		$m['back'].__bind_type__ = 0;
		$m['back'].__args__ = [null,null];
		$pyjs.track.lineno=49;
		$m['forward'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.History',lineno:49};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.History';
			$pyjs.track.lineno=49;
			$pyjs.track.lineno=66;

    $wnd.history.forward();
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		};
		$m['forward'].__name__ = 'forward';

		$m['forward'].__bind_type__ = 0;
		$m['forward'].__args__ = [null,null];
		$pyjs.track.lineno=53;
		$m['getToken'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);


    return $wnd.__historyToken;
    
		};
		$m['getToken'].__name__ = 'getToken';

		$m['getToken'].__bind_type__ = 0;
		$m['getToken'].__args__ = [null,null];
		$pyjs.track.lineno=58;
		$m['newItem'] = function(historyToken) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.History',lineno:58};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.History';
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=65;

    var iframe = $doc.getElementById('__pygwt_historyFrame');
    iframe.contentWindow.location.href = 'history.html?' + historyToken;
    
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		};
		$m['newItem'].__name__ = 'newItem';

		$m['newItem'].__bind_type__ = 0;
		$m['newItem'].__args__ = [null,null,['historyToken']];
		$pyjs.track.lineno=74;
		$m['onHistoryChanged'] = function(historyToken) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.History',lineno:74};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.History';
			$pyjs.track.lineno=74;
			$pyjs.track.lineno=90;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof fireHistoryChangedImpl == "undefined"?$m.fireHistoryChangedImpl:fireHistoryChangedImpl)(historyToken);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['onHistoryChanged'].__name__ = 'onHistoryChanged';

		$m['onHistoryChanged'].__bind_type__ = 0;
		$m['onHistoryChanged'].__args__ = [null,null,['historyToken']];
		$pyjs.track.lineno=79;
		$m['fireHistoryChangedAndCatch'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.History',lineno:79};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.History';
			$pyjs.track.lineno=79;
			$pyjs.track.lineno=94;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['fireHistoryChangedAndCatch'].__name__ = 'fireHistoryChangedAndCatch';

		$m['fireHistoryChangedAndCatch'].__bind_type__ = 0;
		$m['fireHistoryChangedAndCatch'].__args__ = [null,null];
		$pyjs.track.lineno=83;
		$m['fireHistoryChangedImpl'] = function(historyToken) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
			$pyjs.track={module:'pyjamas.History',lineno:83};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.History';
			$pyjs.track.lineno=83;
			$pyjs.track.lineno=97;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['historyListeners'];
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				listener = $iter1_nextval.$nextval;
				$pyjs.track.lineno=98;
				(function(){try{try{$pyjs.in_try_except += 1;
				return listener['onHistoryChanged'](historyToken);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.History';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['fireHistoryChangedImpl'].__name__ = 'fireHistoryChangedImpl';

		$m['fireHistoryChangedImpl'].__bind_type__ = 0;
		$m['fireHistoryChangedImpl'].__args__ = [null,null,['historyToken']];
		$pyjs.track.lineno=92;
		$m['removeHistoryListener'] = function(listener) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'pyjamas.History',lineno:92};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.History';
			$pyjs.track.lineno=92;
			$pyjs.track.lineno=101;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['historyListeners']['remove'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['removeHistoryListener'].__name__ = 'removeHistoryListener';

		$m['removeHistoryListener'].__bind_type__ = 0;
		$m['removeHistoryListener'].__args__ = [null,null,['listener']];
		$pyjs.track.lineno=95;
		$m['_first_notify'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjamas.History',lineno:95};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.History';
			$pyjs.track.lineno=95;
			$pyjs.track.lineno=96;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $p['printFunc'](['first notify', $m['historyToken']], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs.track.lineno=97;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['onHistoryChanged']($m['historyToken']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['_first_notify'].__name__ = '_first_notify';

		$m['_first_notify'].__bind_type__ = 0;
		$m['_first_notify'].__args__ = [null,null];
		$pyjs.track.lineno=99;
		$m['init'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);


    // Check for existence of the history frame.
    var historyFrame = $doc.getElementById('__pygwt_historyFrame');
    if (!historyFrame)
        return false;

    // Get the initial token from the url's hash component.
    var hash = $wnd.location.hash;
    if (hash.length > 0)
        $wnd.__historyToken = decodeURI(hash.substring(1)).replace('%23','#');
    else
        $wnd.__historyToken = '';

    // Initialize the history iframe.  If '__historyToken' already exists, then
    // we're probably backing into the app, so _don't_ set the iframe's location.
    var tokenElement = null;
    if (historyFrame.contentWindow) {
        var doc = historyFrame.contentWindow.document;
        tokenElement = doc ? doc.getElementById('__historyToken') : null;
    }

    if (tokenElement)
        $wnd.__historyToken = tokenElement.value;
    else
        historyFrame.src = 'history.html?' + $wnd.__historyToken;

    // Expose the '__onHistoryChanged' function, which will be called by
    // the history frame when it loads.
    $wnd.__onHistoryChanged = function(token) {
        // Change the URL and notify the application that its history frame
        // is changing.  Note that setting location.hash does _not_ add a history
        // frame on IE, so we don't have to do a 'location.replace()'.
        if (token != $wnd.__historyToken) {
            $wnd.__historyToken = token;
            $wnd.location.hash = encodeURI(token).replace('#','%23');
            // TODO - move init back into History
            // this.onHistoryChanged(token);
            $m['onHistoryChanged'](token);
        }
    };

    // This is the URL check timer.  It detects when an unexpected change
    // occurs in the document's URL (e.g. when the user enters one manually
    // or selects a 'favorite', but only the #hash part changes).  When this
    // occurs, we _must_ reload the page.  This is because IE has a really
    // nasty bug that totally mangles its history stack and causes the location
    // bar in the UI to stop working under these circumstances.
    var urlChecker = function() {
        var hash = $wnd.location.hash;
        if (hash.length > 0) {
            var token = decodeURI(hash.substring(1)).replace('%23','#');
            if ($wnd.__historyToken && (token != $wnd.__historyToken))
                $wnd.location.reload();
        }
        $wnd.setTimeout(urlChecker, 250);
    };
    urlChecker();

    return true;
    
		};
		$m['init'].__name__ = 'init';

		$m['init'].__bind_type__ = 0;
		$m['init'].__args__ = [null,null];
		$pyjs.track.lineno=114;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['init']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.History */


/* end module: pyjamas.History */


/*
PYJS_DEPS: ['pyjd']
*/
