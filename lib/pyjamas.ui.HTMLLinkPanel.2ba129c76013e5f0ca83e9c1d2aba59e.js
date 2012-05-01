/* start module: pyjamas.ui.HTMLLinkPanel */
$pyjs.loaded_modules['pyjamas.ui.HTMLLinkPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HTMLLinkPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HTMLLinkPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.HTMLLinkPanel"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.HTMLLinkPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTMLLinkPanel';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.ui']['HTMLLinkPanel'] = $pyjs.loaded_modules['pyjamas.ui.HTMLLinkPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.HTMLLinkPanel.py, line 1:\n    from pyjamas.ui.HTMLPanel import HTMLPanel';
		$m.__track_lines__[2] = 'pyjamas.ui.HTMLLinkPanel.py, line 2:\n    from pyjamas.ui.Hyperlink import Hyperlink';
		$m.__track_lines__[4] = 'pyjamas.ui.HTMLLinkPanel.py, line 4:\n    from pyjamas import Window';
		$m.__track_lines__[5] = 'pyjamas.ui.HTMLLinkPanel.py, line 5:\n    from pyjamas import DOM';
		$m.__track_lines__[7] = 'pyjamas.ui.HTMLLinkPanel.py, line 7:\n    class HTMLLinkPanel(HTMLPanel):';
		$m.__track_lines__[8] = 'pyjamas.ui.HTMLLinkPanel.py, line 8:\n    def __init__(self, html="", **kwargs):';
		$m.__track_lines__[9] = 'pyjamas.ui.HTMLLinkPanel.py, line 9:\n    self.hyperlinks = []';
		$m.__track_lines__[10] = 'pyjamas.ui.HTMLLinkPanel.py, line 10:\n    HTMLPanel.__init__(self, html, **kwargs)';
		$m.__track_lines__[12] = 'pyjamas.ui.HTMLLinkPanel.py, line 12:\n    def setHTML(self, html):';
		$m.__track_lines__[13] = 'pyjamas.ui.HTMLLinkPanel.py, line 13:\n    self._clear_hyperlinks()';
		$m.__track_lines__[14] = 'pyjamas.ui.HTMLLinkPanel.py, line 14:\n    HTMLPanel.setHTML(self, html)';
		$m.__track_lines__[16] = 'pyjamas.ui.HTMLLinkPanel.py, line 16:\n    def _clear_hyperlinks(self):';
		$m.__track_lines__[17] = 'pyjamas.ui.HTMLLinkPanel.py, line 17:\n    while self.hyperlinks:';
		$m.__track_lines__[18] = 'pyjamas.ui.HTMLLinkPanel.py, line 18:\n    hl = self.hyperlinks.pop()';
		$m.__track_lines__[19] = 'pyjamas.ui.HTMLLinkPanel.py, line 19:\n    el = hl.getElement()';
		$m.__track_lines__[20] = 'pyjamas.ui.HTMLLinkPanel.py, line 20:\n    parent = DOM.getParent(el)';
		$m.__track_lines__[21] = 'pyjamas.ui.HTMLLinkPanel.py, line 21:\n    if parent is not None:';
		$m.__track_lines__[22] = 'pyjamas.ui.HTMLLinkPanel.py, line 22:\n    parent.removeChild(el)';
		$m.__track_lines__[23] = 'pyjamas.ui.HTMLLinkPanel.py, line 23:\n    hl.setParent(None)';
		$m.__track_lines__[25] = 'pyjamas.ui.HTMLLinkPanel.py, line 25:\n    def replaceLinks(self, tagname="a", use_page_href=True):';
		$m.__track_lines__[31] = 'pyjamas.ui.HTMLLinkPanel.py, line 31:\n    self._clear_hyperlinks()';
		$m.__track_lines__[32] = 'pyjamas.ui.HTMLLinkPanel.py, line 32:\n    tags = self.findTags(tagname)';
		$m.__track_lines__[33] = 'pyjamas.ui.HTMLLinkPanel.py, line 33:\n    pageloc = Window.getLocation()';
		$m.__track_lines__[34] = 'pyjamas.ui.HTMLLinkPanel.py, line 34:\n    pagehref = pageloc.getPageHref()';
		$m.__track_lines__[35] = 'pyjamas.ui.HTMLLinkPanel.py, line 35:\n    for el in tags:';
		$m.__track_lines__[36] = 'pyjamas.ui.HTMLLinkPanel.py, line 36:\n    href = el.href';
		$m.__track_lines__[37] = 'pyjamas.ui.HTMLLinkPanel.py, line 37:\n    l = href.split("#")';
		$m.__track_lines__[38] = 'pyjamas.ui.HTMLLinkPanel.py, line 38:\n    if len(l) != 2:';
		$m.__track_lines__[39] = 'pyjamas.ui.HTMLLinkPanel.py, line 39:\n    continue';
		$m.__track_lines__[40] = 'pyjamas.ui.HTMLLinkPanel.py, line 40:\n    if use_page_href and not l[0].startswith(pagehref):';
		$m.__track_lines__[41] = 'pyjamas.ui.HTMLLinkPanel.py, line 41:\n    continue';
		$m.__track_lines__[42] = 'pyjamas.ui.HTMLLinkPanel.py, line 42:\n    token = l[1]';
		$m.__track_lines__[43] = 'pyjamas.ui.HTMLLinkPanel.py, line 43:\n    if not token:';
		$m.__track_lines__[44] = 'pyjamas.ui.HTMLLinkPanel.py, line 44:\n    continue';
		$m.__track_lines__[45] = 'pyjamas.ui.HTMLLinkPanel.py, line 45:\n    html = DOM.getInnerHTML(el)';
		$m.__track_lines__[46] = 'pyjamas.ui.HTMLLinkPanel.py, line 46:\n    parent = DOM.getParent(el)';
		$m.__track_lines__[47] = 'pyjamas.ui.HTMLLinkPanel.py, line 47:\n    index = DOM.getChildIndex(parent, el)';
		$m.__track_lines__[48] = 'pyjamas.ui.HTMLLinkPanel.py, line 48:\n    hl = Hyperlink(TargetHistoryToken=token,';
		$m.__track_lines__[51] = 'pyjamas.ui.HTMLLinkPanel.py, line 51:\n    DOM.insertChild(parent, hl.getElement(), index)';
		$m.__track_lines__[52] = 'pyjamas.ui.HTMLLinkPanel.py, line 52:\n    parent.removeChild(el)';
		$m.__track_lines__[54] = 'pyjamas.ui.HTMLLinkPanel.py, line 54:\n    self.children.insert(index, hl)';
		$m.__track_lines__[55] = 'pyjamas.ui.HTMLLinkPanel.py, line 55:\n    hl.setParent(self)';
		$m.__track_lines__[56] = 'pyjamas.ui.HTMLLinkPanel.py, line 56:\n    self.hyperlinks.append(hl)';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs.track.module='pyjamas.ui.HTMLLinkPanel';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=7;
		$m['HTMLLinkPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.ui.HTMLLinkPanel';
			$cls_definition.__md5__ = 'c28f7c47d41d2b125b7fb2cfd3bbb49a';
			$pyjs.track.lineno=8;
			$method = $pyjs__bind_method2('__init__', function(html) {
				if (this.__is_instance__ === true) {
					var self = this;
					var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						var kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					html = arguments[1];
					var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
					if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
						kwargs = arguments[arguments.length+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c28f7c47d41d2b125b7fb2cfd3bbb49a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof html != 'undefined') {
						if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = html;
							html = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof html == 'undefined') html=arguments.callee.__args__[3][1];

				$pyjs.track={module:'pyjamas.ui.HTMLLinkPanel', lineno:8};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTMLLinkPanel';
				$pyjs.track.lineno=8;
				$pyjs.track.lineno=9;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hyperlinks', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) : $p['setattr'](self, 'hyperlinks', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()); 
				$pyjs.track.lineno=10;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call($m['HTMLPanel'], '__init__', null, kwargs, [{}, self, html]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['html', '']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=12;
			$method = $pyjs__bind_method2('setHTML', function(html) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					html = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c28f7c47d41d2b125b7fb2cfd3bbb49a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.ui.HTMLLinkPanel', lineno:12};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTMLLinkPanel';
				$pyjs.track.lineno=12;
				$pyjs.track.lineno=13;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['_clear_hyperlinks']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.track.lineno=14;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['HTMLPanel']['setHTML'](self, html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['html']]);
			$cls_definition['setHTML'] = $method;
			$pyjs.track.lineno=16;
			$method = $pyjs__bind_method2('_clear_hyperlinks', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c28f7c47d41d2b125b7fb2cfd3bbb49a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var el,parent,hl;
				$pyjs.track={module:'pyjamas.ui.HTMLLinkPanel', lineno:16};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTMLLinkPanel';
				$pyjs.track.lineno=16;
				$pyjs.track.lineno=17;
				while ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['getattr'](self, 'hyperlinks'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
					$pyjs.track.lineno=18;
					hl = (function(){try{try{$pyjs.in_try_except += 1;
					return self['hyperlinks']['pop']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
					$pyjs.track.lineno=19;
					el = (function(){try{try{$pyjs.in_try_except += 1;
					return hl['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
					$pyjs.track.lineno=20;
					parent = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getParent'](el);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
					$pyjs.track.lineno=21;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['op_is'](parent, null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
						$pyjs.track.lineno=22;
						(function(){try{try{$pyjs.in_try_except += 1;
						return parent['removeChild'](el);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
					}
					$pyjs.track.lineno=23;
					(function(){try{try{$pyjs.in_try_except += 1;
					return hl['setParent'](null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_clear_hyperlinks'] = $method;
			$pyjs.track.lineno=25;
			$method = $pyjs__bind_method2('replaceLinks', function(tagname, use_page_href) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && (arguments.length < 0 || arguments.length > 2)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					tagname = arguments[1];
					use_page_href = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 3)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'c28f7c47d41d2b125b7fb2cfd3bbb49a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof tagname == 'undefined') tagname=arguments.callee.__args__[3][1];
				if (typeof use_page_href == 'undefined') use_page_href=arguments.callee.__args__[4][1];
				var el,pageloc,$iter1_iter,pagehref,href,index,html,$iter1_array,$and2,$iter1_nextval,parent,tags,$and1,hl,$iter1_type,l,token,$iter1_idx,$pyjs__trackstack_size_1;
				$pyjs.track={module:'pyjamas.ui.HTMLLinkPanel', lineno:25};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.ui.HTMLLinkPanel';
				$pyjs.track.lineno=25;
				$pyjs.track.lineno=31;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['_clear_hyperlinks']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs.track.lineno=32;
				tags = (function(){try{try{$pyjs.in_try_except += 1;
				return self['findTags'](tagname);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.track.lineno=33;
				pageloc = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['Window']['getLocation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.track.lineno=34;
				pagehref = (function(){try{try{$pyjs.in_try_except += 1;
				return pageloc['getPageHref']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.track.lineno=35;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return tags;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					el = $iter1_nextval.$nextval;
					$pyjs.track.lineno=36;
					href = $p['getattr'](el, 'href');
					$pyjs.track.lineno=37;
					l = (function(){try{try{$pyjs.in_try_except += 1;
					return href['$$split']('#');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
					$pyjs.track.lineno=38;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['len'](l);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})(), $constant_int_2));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
						$pyjs.track.lineno=39;
						continue;
					}
					$pyjs.track.lineno=40;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['bool']($and1=use_page_href)?!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return l.__getitem__($constant_int_0)['startswith'](pagehref);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
						$pyjs.track.lineno=41;
						continue;
					}
					$pyjs.track.lineno=42;
					token = l.__getitem__($constant_int_1);
					$pyjs.track.lineno=43;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool'](token));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
						$pyjs.track.lineno=44;
						continue;
					}
					$pyjs.track.lineno=45;
					html = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getInnerHTML'](el);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					$pyjs.track.lineno=46;
					parent = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getParent'](el);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
					$pyjs.track.lineno=47;
					index = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['getChildIndex'](parent, el);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
					$pyjs.track.lineno=48;
					hl = (function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{TargetHistoryToken:token, HTML:html, Element:(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createSpan']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
					$pyjs.track.lineno=51;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['insertChild'](parent, (function(){try{try{$pyjs.in_try_except += 1;
					return hl['getElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})(), index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
					$pyjs.track.lineno=52;
					(function(){try{try{$pyjs.in_try_except += 1;
					return parent['removeChild'](el);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
					$pyjs.track.lineno=54;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['children']['insert'](index, hl);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
					$pyjs.track.lineno=55;
					(function(){try{try{$pyjs.in_try_except += 1;
					return hl['setParent'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
					$pyjs.track.lineno=56;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['hyperlinks']['append'](hl);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.ui.HTMLLinkPanel';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['tagname', 'a'],['use_page_href', true]]);
			$cls_definition['replaceLinks'] = $method;
			$pyjs.track.lineno=7;
			var $bases = new Array($m['HTMLPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HTMLLinkPanel', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.HTMLLinkPanel */


/* end module: pyjamas.ui.HTMLLinkPanel */


/*
PYJS_DEPS: ['pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.Window', 'pyjamas.DOM']
*/
