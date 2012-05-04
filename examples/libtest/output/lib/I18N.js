/* start module: I18N */
$pyjs.loaded_modules['I18N'] = function (__mod_name__) {
	if($pyjs.loaded_modules['I18N'].__was_initialized__) return $pyjs.loaded_modules['I18N'];
	var $m = $pyjs.loaded_modules["I18N"];
	$m.__repr__ = function() { return "<module: I18N>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'I18N';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'I18N.py, line 1:\n    ';
		$m.__track_lines__[3] = 'I18N.py, line 3:\n    class I18N(object):';
		$m.__track_lines__[4] = 'I18N.py, line 4:\n    def example(self):';
		$m.__track_lines__[5] = 'I18N.py, line 5:\n    return "This is an example"';
		$m.__track_lines__[6] = 'I18N.py, line 6:\n    def another_example(self):';
		$m.__track_lines__[7] = 'I18N.py, line 7:\n    return "This is another example"';
		$m.__track_lines__[9] = 'I18N.py, line 9:\n    i18n = I18N()';
		$m.__track_lines__[10] = "I18N.py, line 10:\n    locale = 'en'";
		$m.__track_lines__[11] = 'I18N.py, line 11:\n    domains = []';
		$m.__track_lines__[13] = 'I18N.py, line 13:\n    import sys';
		$m.__track_lines__[14] = 'I18N.py, line 14:\n    import domain';
		$m.__track_lines__[15] = "I18N.py, line 15:\n    domains.append('domain')";
		$m.__track_lines__[16] = 'I18N.py, line 16:\n    import domain.subdomain';
		$m.__track_lines__[17] = "I18N.py, line 17:\n    domains.append('domain.subdomain')";
		$m.__track_lines__[19] = 'I18N.py, line 19:\n    def set_locale(loc):';
		$m.__track_lines__[20] = 'I18N.py, line 20:\n    global i18n';
		$m.__track_lines__[21] = 'I18N.py, line 21:\n    try:';
		$m.__track_lines__[22] = 'I18N.py, line 22:\n    path = "I18N.%s" % loc';
		$m.__track_lines__[23] = 'I18N.py, line 23:\n    c = __import__(path)';
		$m.__track_lines__[25] = 'I18N.py, line 25:\n    print "Failed to import %s" % e';
		$m.__track_lines__[26] = 'I18N.py, line 26:\n    domains.sort()';
		$m.__track_lines__[27] = 'I18N.py, line 27:\n    for domain in domains:';
		$m.__track_lines__[28] = 'I18N.py, line 28:\n    try:';
		$m.__track_lines__[29] = 'I18N.py, line 29:\n    path = "I18N.%s.%s" % (domain, loc)';
		$m.__track_lines__[30] = 'I18N.py, line 30:\n    __import__(path)';
		$m.__track_lines__[32] = 'I18N.py, line 32:\n    print "Failed to import %s" % e';


		$pyjs.track.module='I18N';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$m['I18N'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'I18N';
			$cls_definition.__md5__ = '390aa335d894f40992af80e49ea6605c';
			$pyjs.track.lineno=4;
			$method = $pyjs__bind_method2('example', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '390aa335d894f40992af80e49ea6605c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'I18N', lineno:4};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='I18N';
				$pyjs.track.lineno=4;
				$pyjs.track.lineno=5;
				$pyjs.track.lineno=5;
				var $pyjs__ret = 'This is an example';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['example'] = $method;
			$pyjs.track.lineno=6;
			$method = $pyjs__bind_method2('another_example', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '390aa335d894f40992af80e49ea6605c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'I18N', lineno:6};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='I18N';
				$pyjs.track.lineno=6;
				$pyjs.track.lineno=7;
				$pyjs.track.lineno=7;
				var $pyjs__ret = 'This is another example';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['another_example'] = $method;
			$pyjs.track.lineno=3;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('I18N', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=9;
		$m['i18n'] = $m['I18N']();
		$pyjs.track.lineno=10;
		$m['locale'] = 'en';
		$pyjs.track.lineno=11;
		$m['domains'] = $p['list']([]);
		$pyjs.track.lineno=13;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', 'I18N');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=14;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['domain'] = $p['___import___']('domain', 'I18N');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=15;
		$m['domains']['append']('domain');
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['domain'] = $p['___import___']('domain.subdomain', 'I18N');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=17;
		$m['domains']['append']('domain.subdomain');
		$pyjs.track.lineno=19;
		$m['set_locale'] = function(loc) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var c,e,$iter1_type,$iter1_nextval,domain,$iter1_iter,$pyjs_try_err,$iter1_array,$pyjs__trackstack_size_1,path,$iter1_idx;
			$pyjs.track={module:'I18N',lineno:19};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='I18N';
			$pyjs.track.lineno=19;
			$pyjs.track.lineno=20;
			$pyjs.track.lineno=21;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=22;
				path = $p['sprintf']('I18N.%s', loc);
				$pyjs.track.lineno=23;
				c = $p['__import__'](path);
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
				$pyjs.track.module='I18N';
				if (($pyjs_try_err_name == $p['ImportError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
					e = $pyjs_try_err;
					$pyjs.track.lineno=25;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			$pyjs.track.lineno=26;
			$m['domains']['sort']();
			$pyjs.track.lineno=27;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = $m['domains'];
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				domain = $iter1_nextval;
				$pyjs.track.lineno=28;
				var $pyjs__trackstack_size_2 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=29;
					path = $p['sprintf']('I18N.%s.%s', $p['tuple']([domain, loc]));
					$pyjs.track.lineno=30;
					$p['__import__'](path);
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_2 - 1);
					$pyjs.__active_exception_stack__ = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='I18N';
					if (($pyjs_try_err_name == $p['ImportError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=32;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='I18N';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['set_locale'].__name__ = 'set_locale';

		$m['set_locale'].__bind_type__ = 0;
		$m['set_locale'].__args__ = [null,null,['loc']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end I18N */


/* end module: I18N */


/*
PYJS_DEPS: ['sys', 'domain', 'domain.subdomain']
*/
