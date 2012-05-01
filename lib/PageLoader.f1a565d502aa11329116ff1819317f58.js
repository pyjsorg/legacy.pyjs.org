/* start module: PageLoader */
$pyjs.loaded_modules['PageLoader'] = function (__mod_name__) {
	if($pyjs.loaded_modules['PageLoader'].__was_initialized__) return $pyjs.loaded_modules['PageLoader'];
	var $m = $pyjs.loaded_modules["PageLoader"];
	$m.__repr__ = function() { return "<module: PageLoader>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'PageLoader';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'PageLoader.py, line 1:\n    def process_question(qtxt):';
		$m.__track_lines__[2] = "PageLoader.py, line 2:\n    question = ''";
		$m.__track_lines__[3] = 'PageLoader.py, line 3:\n    skip = False';
		$m.__track_lines__[4] = 'PageLoader.py, line 4:\n    for letter in qtxt:';
		$m.__track_lines__[5] = "PageLoader.py, line 5:\n    if letter == '<':";
		$m.__track_lines__[6] = 'PageLoader.py, line 6:\n    skip = True';
		$m.__track_lines__[7] = "PageLoader.py, line 7:\n    if letter == '>':";
		$m.__track_lines__[8] = 'PageLoader.py, line 8:\n    skip = False';
		$m.__track_lines__[9] = 'PageLoader.py, line 9:\n    if skip:';
		$m.__track_lines__[10] = 'PageLoader.py, line 10:\n    continue';
		$m.__track_lines__[11] = "PageLoader.py, line 11:\n    if letter.isalnum() or letter == ' ':";
		$m.__track_lines__[12] = "PageLoader.py, line 12:\n    if letter == ' ':";
		$m.__track_lines__[13] = "PageLoader.py, line 13:\n    letter = '_'";
		$m.__track_lines__[14] = 'PageLoader.py, line 14:\n    question += letter.lower()';
		$m.__track_lines__[15] = 'PageLoader.py, line 15:\n    return question';
		$m.__track_lines__[17] = 'PageLoader.py, line 17:\n    class PageListLoader:';
		$m.__track_lines__[18] = 'PageLoader.py, line 18:\n    def __init__(self, panel, purpose):';
		$m.__track_lines__[19] = 'PageLoader.py, line 19:\n    self.panel = panel';
		$m.__track_lines__[20] = 'PageLoader.py, line 20:\n    self.purpose = purpose';
		$m.__track_lines__[22] = 'PageLoader.py, line 22:\n    def onCompletion(self, text):';
		$m.__track_lines__[27] = 'PageLoader.py, line 27:\n    res = []';
		$m.__track_lines__[28] = "PageLoader.py, line 28:\n    for l in text.split('\\n'):";
		$m.__track_lines__[29] = 'PageLoader.py, line 29:\n    if not l:';
		$m.__track_lines__[30] = 'PageLoader.py, line 30:\n    continue';
		$m.__track_lines__[31] = "PageLoader.py, line 31:\n    if self.purpose == 'contents':";
		$m.__track_lines__[32] = "PageLoader.py, line 32:\n    l = l.split(':')";
		$m.__track_lines__[33] = 'PageLoader.py, line 33:\n    if len(l) != 2:';
		$m.__track_lines__[34] = 'PageLoader.py, line 34:\n    continue';
		$m.__track_lines__[35] = 'PageLoader.py, line 35:\n    res.append([l[0].strip(), l[1].strip()])';
		$m.__track_lines__[37] = 'PageLoader.py, line 37:\n    fname = process_question(l)';
		$m.__track_lines__[39] = 'PageLoader.py, line 39:\n    res.append([l, "faq/answers/%s.html" % fname])';
		$m.__track_lines__[40] = 'PageLoader.py, line 40:\n    self.panel.loadPages(res, self.purpose)';
		$m.__track_lines__[42] = 'PageLoader.py, line 42:\n    def onError(self, text, code):';
		$m.__track_lines__[43] = 'PageLoader.py, line 43:\n    self.panel.onError(text, code)';
		$m.__track_lines__[45] = 'PageLoader.py, line 45:\n    def onTimeout(self, text):';
		$m.__track_lines__[46] = 'PageLoader.py, line 46:\n    self.panel.onTimeout(text)';
		$m.__track_lines__[49] = 'PageLoader.py, line 49:\n    class PageLoader:';
		$m.__track_lines__[50] = 'PageLoader.py, line 50:\n    def __init__(self, panel, title, purpose):';
		$m.__track_lines__[51] = 'PageLoader.py, line 51:\n    self.panel = panel';
		$m.__track_lines__[52] = 'PageLoader.py, line 52:\n    self.title = title';
		$m.__track_lines__[53] = 'PageLoader.py, line 53:\n    self.purpose = purpose';
		$m.__track_lines__[55] = 'PageLoader.py, line 55:\n    def onCompletion(self, text):';
		$m.__track_lines__[56] = 'PageLoader.py, line 56:\n    self.panel.createPage(self.title, self.purpose, text)';
		$m.__track_lines__[58] = 'PageLoader.py, line 58:\n    def onError(self, text, code):';
		$m.__track_lines__[59] = 'PageLoader.py, line 59:\n    self.panel.onError(text, code)';
		$m.__track_lines__[61] = 'PageLoader.py, line 61:\n    def onTimeout(self, text):';
		$m.__track_lines__[62] = 'PageLoader.py, line 62:\n    self.panel.onTimeout(text)';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs.track.module='PageLoader';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$m['process_question'] = function(qtxt) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var $iter1_nextval,$iter1_type,$or2,skip,$pyjs__trackstack_size_1,question,$iter1_iter,$add2,$add1,$iter1_array,letter,$or1,$iter1_idx;
			$pyjs.track={module:'PageLoader',lineno:1};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='PageLoader';
			$pyjs.track.lineno=1;
			$pyjs.track.lineno=2;
			question = '';
			$pyjs.track.lineno=3;
			skip = false;
			$pyjs.track.lineno=4;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return qtxt;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				letter = $iter1_nextval.$nextval;
				$pyjs.track.lineno=5;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](letter, '<'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
					$pyjs.track.lineno=6;
					skip = true;
				}
				$pyjs.track.lineno=7;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](letter, '>'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
					$pyjs.track.lineno=8;
					skip = false;
				}
				$pyjs.track.lineno=9;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](skip);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
					$pyjs.track.lineno=10;
					continue;
				}
				$pyjs.track.lineno=11;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($or1=(function(){try{try{$pyjs.in_try_except += 1;
				return letter['isalnum']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})())?$or1:$p['op_eq'](letter, ' ')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
					$pyjs.track.lineno=12;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](letter, ' '));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
						$pyjs.track.lineno=13;
						letter = '_';
					}
					$pyjs.track.lineno=14;
					question = $p['__op_add']($add1=question,$add2=(function(){try{try{$pyjs.in_try_except += 1;
					return letter['lower']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='PageLoader';
			$pyjs.track.lineno=15;
			$pyjs.track.lineno=15;
			var $pyjs__ret = question;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['process_question'].__name__ = 'process_question';

		$m['process_question'].__bind_type__ = 0;
		$m['process_question'].__args__ = [null,null,['qtxt']];
		$pyjs.track.lineno=17;
		$m['PageListLoader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'PageLoader';
			$cls_definition.__md5__ = '5efddd9fcdba98f7667b3cece5e337fc';
			$pyjs.track.lineno=18;
			$method = $pyjs__bind_method2('__init__', function(panel, purpose) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					panel = arguments[1];
					purpose = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5efddd9fcdba98f7667b3cece5e337fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'PageLoader', lineno:18};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='PageLoader';
				$pyjs.track.lineno=18;
				$pyjs.track.lineno=19;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('panel', panel) : $p['setattr'](self, 'panel', panel); 
				$pyjs.track.lineno=20;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('purpose', purpose) : $p['setattr'](self, 'purpose', purpose); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['panel'],['purpose']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=22;
			$method = $pyjs__bind_method2('onCompletion', function(text) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5efddd9fcdba98f7667b3cece5e337fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$pyjs__trackstack_size_1,l,$iter2_idx,fname,res,$iter2_array;
				$pyjs.track={module:'PageLoader', lineno:22};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='PageLoader';
				$pyjs.track.lineno=22;
				$pyjs.track.lineno=27;
				res = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs.track.lineno=28;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return text['$$split']('\n');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					l = $iter2_nextval.$nextval;
					$pyjs.track.lineno=29;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool'](l));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
						$pyjs.track.lineno=30;
						continue;
					}
					$pyjs.track.lineno=31;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, 'purpose'), 'contents'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
						$pyjs.track.lineno=32;
						l = (function(){try{try{$pyjs.in_try_except += 1;
						return l['$$split'](':');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
						$pyjs.track.lineno=33;
						if ((function(){try{try{$pyjs.in_try_except += 1;
							return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['len'](l);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})(), $constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
							$pyjs.track.lineno=34;
							continue;
						}
						$pyjs.track.lineno=35;
						(function(){try{try{$pyjs.in_try_except += 1;
						return res['append']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['list']([(function(){try{try{$pyjs.in_try_except += 1;
						return l.__getitem__($constant_int_0)['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
						return l.__getitem__($constant_int_1)['strip']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
					}
					else if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, 'purpose'), 'faq'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
						$pyjs.track.lineno=37;
						fname = (function(){try{try{$pyjs.in_try_except += 1;
						return $m['process_question'](l);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
						$pyjs.track.lineno=39;
						(function(){try{try{$pyjs.in_try_except += 1;
						return res['append']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['list']([l, (function(){try{try{$pyjs.in_try_except += 1;
						return $p['sprintf']('faq/answers/%s.html', fname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='PageLoader';
				$pyjs.track.lineno=40;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['loadPages'](res, $p['getattr'](self, 'purpose'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['onCompletion'] = $method;
			$pyjs.track.lineno=42;
			$method = $pyjs__bind_method2('onError', function(text, code) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					code = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5efddd9fcdba98f7667b3cece5e337fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'PageLoader', lineno:42};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='PageLoader';
				$pyjs.track.lineno=42;
				$pyjs.track.lineno=43;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['onError'](text, code);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text'],['code']]);
			$cls_definition['onError'] = $method;
			$pyjs.track.lineno=45;
			$method = $pyjs__bind_method2('onTimeout', function(text) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5efddd9fcdba98f7667b3cece5e337fc') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'PageLoader', lineno:45};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='PageLoader';
				$pyjs.track.lineno=45;
				$pyjs.track.lineno=46;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['onTimeout'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['onTimeout'] = $method;
			$pyjs.track.lineno=17;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('PageListLoader', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=49;
		$m['PageLoader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'PageLoader';
			$cls_definition.__md5__ = '0cf1685b94e4310d7ce4ba9aae29144a';
			$pyjs.track.lineno=50;
			$method = $pyjs__bind_method2('__init__', function(panel, title, purpose) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					panel = arguments[1];
					title = arguments[2];
					purpose = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0cf1685b94e4310d7ce4ba9aae29144a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'PageLoader', lineno:50};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='PageLoader';
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=51;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('panel', panel) : $p['setattr'](self, 'panel', panel); 
				$pyjs.track.lineno=52;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('title', title) : $p['setattr'](self, 'title', title); 
				$pyjs.track.lineno=53;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('purpose', purpose) : $p['setattr'](self, 'purpose', purpose); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['panel'],['title'],['purpose']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=55;
			$method = $pyjs__bind_method2('onCompletion', function(text) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0cf1685b94e4310d7ce4ba9aae29144a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'PageLoader', lineno:55};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='PageLoader';
				$pyjs.track.lineno=55;
				$pyjs.track.lineno=56;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['createPage']($p['getattr'](self, 'title'), $p['getattr'](self, 'purpose'), text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['onCompletion'] = $method;
			$pyjs.track.lineno=58;
			$method = $pyjs__bind_method2('onError', function(text, code) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					code = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0cf1685b94e4310d7ce4ba9aae29144a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'PageLoader', lineno:58};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='PageLoader';
				$pyjs.track.lineno=58;
				$pyjs.track.lineno=59;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['onError'](text, code);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text'],['code']]);
			$cls_definition['onError'] = $method;
			$pyjs.track.lineno=61;
			$method = $pyjs__bind_method2('onTimeout', function(text) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '0cf1685b94e4310d7ce4ba9aae29144a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'PageLoader', lineno:61};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='PageLoader';
				$pyjs.track.lineno=61;
				$pyjs.track.lineno=62;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['panel']['onTimeout'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['onTimeout'] = $method;
			$pyjs.track.lineno=49;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('PageLoader', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end PageLoader */


/* end module: PageLoader */


