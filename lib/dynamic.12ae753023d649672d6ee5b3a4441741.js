/* start module: dynamic */
$pyjs.loaded_modules['dynamic'] = function (__mod_name__) {
	if($pyjs.loaded_modules['dynamic'].__was_initialized__) return $pyjs.loaded_modules['dynamic'];
	var $m = $pyjs.loaded_modules["dynamic"];
	$m.__repr__ = function() { return "<module: dynamic>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'dynamic';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {

		var $constant_int_200 = new $p['int'](200);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='dynamic';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=5;
		$pyjs.track.lineno=6;
		$pyjs.track.lineno=7;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$pyjs.track.lineno=9;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=11;
		;
		$m['AjaxError'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'dynamic';
			$cls_definition.__md5__ = 'e470508acbf89106acbe59a43e68272f';
			var $bases = new Array($p['RuntimeError']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('AjaxError', $p['tuple']($bases), $data);
		})();
		$m['createHttpRequest'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var res,$pyjs_try_err;
			if ($p['bool'](typeof $wnd.XMLHttpRequest != 'undefined')) {
				return new XMLHttpRequest();
			}
			try {
				res = new ActiveXObject("Msxml2.XMLHTTP");
				return res;
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			return null;
		};
		$m['createHttpRequest'].__name__ = 'createHttpRequest';

		$m['createHttpRequest'].__bind_type__ = 0;
		$m['createHttpRequest'].__args__ = [null,null];
		$m['load'] = function(url, onreadystatechange, on_load_fn, async) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
			if (typeof onreadystatechange == 'undefined') onreadystatechange=arguments.callee.__args__[3][1];
			if (typeof on_load_fn == 'undefined') on_load_fn=arguments.callee.__args__[4][1];
			if (typeof async == 'undefined') async=arguments.callee.__args__[5][1];
			var $or5,$or4,$and3,$or3,req,$and4,$pyjs_try_err,$add2,$add1,$or6;
			;
			$wnd.__is_instance__ && typeof $wnd.__setattr__ == 'function' ? $wnd.__setattr__('status', $p['__op_add']($add1='Loading ',$add2=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add1='Loading ',$add2=url)); 
			req = $m['createHttpRequest']();
			if ($p['bool']($p['op_is'](onreadystatechange, null))) {
				onreadystatechange = function(evnt) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $or1,$add4,$or2,$and1,$and2,$add3,str;
					if ($p['bool'](($p['bool']($and1=$p['op_eq']($p['getattr'](req, 'readyState'), $constant_int_4))?($p['bool']($or1=$p['op_eq']($p['getattr'](req, 'status'), $constant_int_200))?$or1:$p['op_eq']($p['getattr'](req, 'status'), $constant_int_0)):$and1))) {
						str = $p['getattr'](req, 'responseText');
						$wnd.__is_instance__ && typeof $wnd.__setattr__ == 'function' ? $wnd.__setattr__('status', $p['__op_add']($add3='Loaded ',$add4=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add3='Loaded ',$add4=url)); 
						if ($p['bool'](!$p['bool']($p['op_is'](on_load_fn, null)))) {
							on_load_fn(evnt, req);
						}
					}
					return null;
				};
				onreadystatechange.__name__ = 'onreadystatechange';

				onreadystatechange.__bind_type__ = 0;
				onreadystatechange.__args__ = [null,null,['evnt']];
			}
req.onreadystatechange = onreadystatechange;
			req['open']('GET', url, async);
			try {
				req['send'](null);
				if ($p['bool'](async)) {
					return null;
				}
				while ($p['bool'](true)) {
					if ($p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr'](req, 'status'), $constant_int_200))?$or3:($p['bool']($and3=$p['op_eq']($p['getattr'](req, 'status'), $constant_int_0))?$p['getattr'](req, 'responseText'):$and3)))) {
						if ($p['bool'](!$p['bool']($p['op_is'](on_load_fn, null)))) {
							on_load_fn(null, req);
						}
						return req;
					}
					if ($p['bool'](($p['bool']($or5=!$p['op_eq']($p['getattr'](req, 'status'), $constant_int_0))?$or5:!$p['op_eq']($p['getattr'](req, 'responseText'), '')))) {
						break;
					}
				}
			} catch($pyjs_try_err) {
				$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			throw ($m['AjaxError']('Synchronous error', $p['getattr'](req, 'status')));
			return null;
		};
		$m['load'].__name__ = 'load';

		$m['load'].__bind_type__ = 0;
		$m['load'].__args__ = [null,null,['url'],['onreadystatechange', null],['on_load_fn', null],['async', false]];
		$m['inject'] = function(values, namespace, names) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
			if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
			if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,k,$iter1_iter,$iter2_idx,v,$iter2_type,$iter2_array,$iter1_array;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](namespace, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
				namespace = $pyjs.global_namespace;
			}
			values = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict'](values);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_is'](names, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return values;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					k = $iter1_nextval.$nextval;
					v = values.__getitem__(k);
namespace[k] = v;
				}
			}
			else {
				$iter2_iter = names;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					k = $iter2_nextval.$nextval;
					v = values.__getitem__(k);
namespace[k] = v;
				}
			}
			return null;
		};
		$m['inject'].__name__ = 'inject';

		$m['inject'].__bind_type__ = 0;
		$m['inject'].__args__ = [null,null,['values'],['namespace', null],['names', null]];
		$m['activate_css'] = function(targetnode) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter3_idx,LC,$iter3_type,$iter3_nextval,scriptnodes,$iter3_iter,$iter3_array,fileref,sn;
			scriptnodes = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']((function(){try{try{$pyjs.in_try_except += 1;
			return targetnode['getElementsByTagName']('link');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $p['range']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len'](scriptnodes);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				LC = $iter3_nextval.$nextval;
				sn = scriptnodes.__getitem__(LC);
				(function(){try{try{$pyjs.in_try_except += 1;
				return sn['parentNode']['removeChild'](sn);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				fileref = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['createElement']('link');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return (typeof hassattr == "undefined"?$m.hassattr:hassattr)(sn, 'href');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
					fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('href', $p['getattr'](sn, 'href')) : $p['setattr'](fileref, 'href', $p['getattr'](sn, 'href')); 
				}
				else {
					fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('text', $p['getattr'](sn, 'text')) : $p['setattr'](fileref, 'text', $p['getattr'](sn, 'text')); 
				}
				fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('rel', 'stylesheet') : $p['setattr'](fileref, 'rel', 'stylesheet'); 
				fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('type', 'text/css') : $p['setattr'](fileref, 'type', 'text/css'); 
				$doc['getElementsByTagName']('head')['item']($constant_int_0)['appendChild'](fileref);
			}
			return null;
		};
		$m['activate_css'].__name__ = 'activate_css';

		$m['activate_css'].__bind_type__ = 0;
		$m['activate_css'].__args__ = [null,null,['targetnode']];
		$m['activate_javascript'] = function(txt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var fileref;
			fileref = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['createElement']('script');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('text', txt) : $p['setattr'](fileref, 'text', txt); 
			fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('type', 'text/javascript') : $p['setattr'](fileref, 'type', 'text/javascript'); 
			fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('language', 'javascript') : $p['setattr'](fileref, 'language', 'javascript'); 
			fileref = (function(){try{try{$pyjs.in_try_except += 1;
			return fileref['cloneNode'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$doc['getElementsByTagName']('head')['item']($constant_int_0)['appendChild'](fileref);
			return null;
		};
		$m['activate_javascript'].__name__ = 'activate_javascript';

		$m['activate_javascript'].__bind_type__ = 0;
		$m['activate_javascript'].__args__ = [null,null,['txt']];
		$m['eval'] = function(str) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			return (function(){try{try{$pyjs.in_try_except += 1;
			return eval(str);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
		};
		$m['eval'].__name__ = 'eval';

		$m['eval'].__bind_type__ = 0;
		$m['eval'].__args__ = [null,null,['str']];
		$m['ajax_eval'] = function(url, on_load_fn, async) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var onready;
			;
			onready = function(evnt, req) {
				if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				var str;
				str = $p['getattr'](req, 'responseText');
				$m['activate_javascript'](str);
				if ($p['bool'](!$p['bool']($p['op_is'](on_load_fn, null)))) {
					on_load_fn();
				}
				return null;
			};
			onready.__name__ = 'onready';

			onready.__bind_type__ = 0;
			onready.__args__ = [null,null,['evnt'],['req']];
			$m['load'](url, null, onready, async);
			return null;
		};
		$m['ajax_eval'].__name__ = 'ajax_eval';

		$m['ajax_eval'].__bind_type__ = 0;
		$m['ajax_eval'].__args__ = [null,null,['url'],['on_load_fn'],['async']];
		$m['__imported__'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
		$m['ajax_import'] = function(url, namespace, names) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
			if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
			if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
			var e,name,script,$iter4_nextval,req,module,$iter4_idx,name_getter,$pyjs_try_err,$iter4_type,$iter4_array,$iter4_iter;
			;
			if ($p['bool']($m['__imported__']['has_key'](url))) {
				module = $m['__imported__'].__getitem__(url);
			}
			else {
				req = $m['load'](url, null, null, false);
				module = null;
				name_getter = $p['list']([]);
				if ($p['bool']($p['op_is'](names, null))) {
					names = $p['list']([]);
				}
				$iter4_iter = names;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
					name = $iter4_nextval.$nextval;
					name_getter['append']($p['sprintf']("$pyjs$moduleObject['%s'] = %s;", $p['tuple']([name, name])));
				}
				script = $p['sprintf']('(function ( ) {\n$pyjs$moduleObject={};\n%s;\n%s\nreturn $pyjs$moduleObject;\n})();', $p['tuple']([$p['getattr'](req, 'responseText'), '\n'['join'](name_getter)]));
				try {
					module = $m['eval'](script);
				} catch($pyjs_try_err) {
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						e = $m['sys']['exc_info']();
						throw ($m['AjaxError']($p['sprintf']('Error in %s: %s', $p['tuple']([url, $p['getattr'](e, 'message')]))));
					}
				}
				$m['__imported__'].__setitem__(url, module);
			}
			$m['inject'](module, namespace, names);
			return null;
		};
		$m['ajax_import'].__name__ = 'ajax_import';

		$m['ajax_import'].__bind_type__ = 0;
		$m['ajax_import'].__args__ = [null,null,['url'],['namespace', null],['names', null]];
		$m['load_script'] = function(url, onload, async) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var e,onload_fn,$add6,$add5;
			$wnd.__is_instance__ && typeof $wnd.__setattr__ == 'function' ? $wnd.__setattr__('status', $p['__op_add']($add5='Loading ',$add6=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add5='Loading ',$add6=url)); 
			onload_fn = function() {
				if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
				var $add8,$add7;
				$wnd.__is_instance__ && typeof $wnd.__setattr__ == 'function' ? $wnd.__setattr__('status', $p['__op_add']($add7='Loaded ',$add8=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add7='Loaded ',$add8=url)); 
				if ($p['bool'](!$p['bool']($p['op_is'](onload, null)))) {
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['eval'](onload);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				}
				return true;
			};
			onload_fn.__name__ = 'onload_fn';

			onload_fn.__bind_type__ = 0;
			onload_fn.__args__ = [null,null];
			e = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['DOM']['createElement']('script');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('src', url) : $p['setattr'](e, 'src', url); 
			e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('type', 'text/javascript') : $p['setattr'](e, 'type', 'text/javascript'); 
			e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('language', 'javascript') : $p['setattr'](e, 'language', 'javascript'); 
			e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('defer', async) : $p['setattr'](e, 'defer', async); 
			e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('onload', onload_fn) : $p['setattr'](e, 'onload', onload_fn); 
			$doc['getElementsByTagName']('head').__getitem__($constant_int_0)['appendChild'](e);
			return null;
		};
		$m['load_script'].__name__ = 'load_script';

		$m['load_script'].__bind_type__ = 0;
		$m['load_script'].__args__ = [null,null,['url'],['onload'],['async']];
		$m['running_timeout'] = $constant_int_0;
		$m['timeout_idname'] = null;
		$m['timeout_url'] = null;
		$m['timeout_on_load_fn'] = null;
		$m['redo_timeout'] = null;
		$m['timeout_id'] = null;
		$m['ajax_dlink_refresh'] = function(idname, url, on_load_fn, timeout) {
			if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);

			$m['timeout_idname'] = idname;
			$m['timeout_url'] = url;
			$m['timeout_on_load_fn'] = on_load_fn;
			$m['redo_timeout'] = timeout;
			if ($p['bool'](($p['cmp']($m['running_timeout'], $constant_int_0) == 1))) {
				return null;
			}
			$m['timeout_id'] = (function(){try{try{$pyjs.in_try_except += 1;
			return setTimeout((typeof do_ajax_dlink_refresh == "undefined"?$m.do_ajax_dlink_refresh:do_ajax_dlink_refresh), timeout);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$m['running_timeout'] = $constant_int_1;
			return null;
		};
		$m['ajax_dlink_refresh'].__name__ = 'ajax_dlink_refresh';

		$m['ajax_dlink_refresh'].__bind_type__ = 0;
		$m['ajax_dlink_refresh'].__args__ = [null,null,['idname'],['url'],['on_load_fn'],['timeout']];
		$m['do_ajax_dlink_refresh'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return (typeof ajax_dlink == "undefined"?$m.ajax_dlink:ajax_dlink)($m['timeout_idname'], $m['timeout_url'], $m['timeout_on_load_fn']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), $constant_int_0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
				$m['timeout_id'] = null;
				$m['running_timeout'] = $constant_int_0;
				return null;
			}
			$m['timeout_id'] = null;
			$m['running_timeout'] = $constant_int_0;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['ajax_dlink_refresh']($m['timeout_idname'], $m['timeout_url'], $m['timeout_on_load_fn'], $m['redo_timeout']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			return null;
		};
		$m['do_ajax_dlink_refresh'].__name__ = 'do_ajax_dlink_refresh';

		$m['do_ajax_dlink_refresh'].__bind_type__ = 0;
		$m['do_ajax_dlink_refresh'].__args__ = [null,null];
		$m['ajax_dlink'] = function(idname, url, on_load_fn) {
			if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
			var body,xhtoj,onreadystatechange;
			body = $p['getattr']($doc, 'body');
			if ($p['bool']($m['timeout_id'])) {
				(function(){try{try{$pyjs.in_try_except += 1;
				return clearTimeout($m['timeout_id']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			}
			onreadystatechange = function() {
				if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
				var txt,jsnode;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr']((typeof xhtoj == "undefined"?$m.xhtoj:xhtoj), 'readyState'), $constant_int_4));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
					jsnode = $constant_int_0;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']($p['getattr']((typeof xhtoj == "undefined"?$m.xhtoj:xhtoj), 'status'), $constant_int_200));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
						txt = $p['getattr']((typeof xhtoj == "undefined"?$m.xhtoj:xhtoj), 'responseText');
						jsnode = null;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](idname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
							jsnode = (function(){try{try{$pyjs.in_try_except += 1;
							return $m['DOM']['getElementById'](idname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
						}
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool']($p['op_is'](jsnode, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
							jsnode = (function(){try{try{$pyjs.in_try_except += 1;
							return $m['DOM']['createElement']('script');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
						}
						(function(){try{try{$pyjs.in_try_except += 1;
						return $m['activate_javascript'](txt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](!$p['bool']($p['op_is'](on_load_fn, null)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
							$wnd['alert'](on_load_fn);
							(function(){try{try{$pyjs.in_try_except += 1;
							return (typeof test_fn == "undefined"?$m.test_fn:test_fn)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
						}
						return $constant_int_1;
					}
					else {
						jsnode = (function(){try{try{$pyjs.in_try_except += 1;
						return $m['DOM']['getElementById'](idname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](!$p['bool']($p['op_is'](jsnode, null)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
							jsnode.__is_instance__ && typeof jsnode.__setattr__ == 'function' ? jsnode.__setattr__('innerHTML', $p['getattr']((typeof xhtoj == "undefined"?$m.xhtoj:xhtoj), 'status')) : $p['setattr'](jsnode, 'innerHTML', $p['getattr']((typeof xhtoj == "undefined"?$m.xhtoj:xhtoj), 'status')); 
						}
					}
				}
				return null;
			};
			onreadystatechange.__name__ = 'onreadystatechange';

			onreadystatechange.__bind_type__ = 0;
			onreadystatechange.__args__ = [null,null];
			xhtoj = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['createHttpRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			xhtoj.__is_instance__ && typeof xhtoj.__setattr__ == 'function' ? xhtoj.__setattr__('onreadystatechange', onreadystatechange) : $p['setattr'](xhtoj, 'onreadystatechange', onreadystatechange); 
			(function(){try{try{$pyjs.in_try_except += 1;
			return xhtoj['open']('GET', url, true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			(function(){try{try{$pyjs.in_try_except += 1;
			return xhtoj['send']('');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			return $constant_int_0;
		};
		$m['ajax_dlink'].__name__ = 'ajax_dlink';

		$m['ajax_dlink'].__bind_type__ = 0;
		$m['ajax_dlink'].__args__ = [null,null,['idname'],['url'],['on_load_fn']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end dynamic */


/* end module: dynamic */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'sys']
*/
