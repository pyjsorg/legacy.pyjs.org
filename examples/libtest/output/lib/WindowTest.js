/* start module: WindowTest */
$pyjs.loaded_modules['WindowTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['WindowTest'].__was_initialized__) return $pyjs.loaded_modules['WindowTest'];
	var $m = $pyjs.loaded_modules["WindowTest"];
	$m.__repr__ = function() { return "<module: WindowTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'WindowTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'WindowTest.py, line 1:\n    from UnitTest import UnitTest, IN_BROWSER';
		$m.__track_lines__[2] = 'WindowTest.py, line 2:\n    from pyjamas import Window';
		$m.__track_lines__[4] = 'WindowTest.py, line 4:\n    class WindowTest(UnitTest):';
		$m.__track_lines__[8] = 'WindowTest.py, line 8:\n    def onWindowResized(self, width, height):';
		$m.__track_lines__[10] = 'WindowTest.py, line 10:\n    if not self.resize_test:';
		$m.__track_lines__[11] = 'WindowTest.py, line 11:\n    self.fail("onWindowResized called after WindowListener removed")';
		$m.__track_lines__[12] = 'WindowTest.py, line 12:\n    return';
		$m.__track_lines__[14] = 'WindowTest.py, line 14:\n    nh = Window.getClientHeight()';
		$m.__track_lines__[15] = 'WindowTest.py, line 15:\n    nw = Window.getClientWidth()';
		$m.__track_lines__[17] = 'WindowTest.py, line 17:\n    self.assertTrue(nw!=self.w)';
		$m.__track_lines__[18] = 'WindowTest.py, line 18:\n    self.assertTrue(nh!=self.h)';
		$m.__track_lines__[19] = 'WindowTest.py, line 19:\n    self.assertTrue(isinstance(nw, int))';
		$m.__track_lines__[20] = 'WindowTest.py, line 20:\n    self.assertTrue(isinstance(nh, int))';
		$m.__track_lines__[24] = 'WindowTest.py, line 24:\n    self.resize_test = False';
		$m.__track_lines__[25] = 'WindowTest.py, line 25:\n    Window.removeWindowResizeListener(self)';
		$m.__track_lines__[26] = 'WindowTest.py, line 26:\n    Window.resize(self.w, self.h)';
		$m.__track_lines__[28] = 'WindowTest.py, line 28:\n    def testResize(self):';
		$m.__track_lines__[32] = 'WindowTest.py, line 32:\n    if IN_BROWSER:';
		$m.__track_lines__[33] = 'WindowTest.py, line 33:\n    return';
		$m.__track_lines__[34] = 'WindowTest.py, line 34:\n    self.resize_test = True';
		$m.__track_lines__[35] = 'WindowTest.py, line 35:\n    Window.addWindowResizeListener(self)';
		$m.__track_lines__[36] = 'WindowTest.py, line 36:\n    self.h = Window.getClientHeight()';
		$m.__track_lines__[37] = 'WindowTest.py, line 37:\n    self.w = Window.getClientWidth()';
		$m.__track_lines__[38] = 'WindowTest.py, line 38:\n    Window.resize(800, 600)';
		$m.__track_lines__[40] = 'WindowTest.py, line 40:\n    def testClientDimensions(self):';
		$m.__track_lines__[41] = 'WindowTest.py, line 41:\n    h = Window.getClientHeight()';
		$m.__track_lines__[42] = 'WindowTest.py, line 42:\n    w = Window.getClientWidth()';
		$m.__track_lines__[43] = 'WindowTest.py, line 43:\n    self.assertTrue(isinstance(w, int))';
		$m.__track_lines__[44] = 'WindowTest.py, line 44:\n    self.assertTrue(isinstance(h, int))';
		$m.__track_lines__[46] = 'WindowTest.py, line 46:\n    def testLocation(self):';
		$m.__track_lines__[47] = 'WindowTest.py, line 47:\n    self.assertTrue(Window.getLocation().getHref().endswith(';
		$m.__track_lines__[50] = 'WindowTest.py, line 50:\n    def testTitle(self):';
		$m.__track_lines__[51] = 'WindowTest.py, line 51:\n    self.assertEquals(Window.getTitle(),';

		var $constant_int_800 = new $p['int'](800);
		var $constant_int_600 = new $p['int'](600);
		$pyjs.track.module='WindowTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['IN_BROWSER'] = $p['___import___']('UnitTest.IN_BROWSER', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$m['WindowTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'WindowTest';
			$cls_definition.__md5__ = '63161147de1649423d2ea127604dba21';
			$pyjs.track.lineno=8;
			$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '63161147de1649423d2ea127604dba21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var nh,$bool2,$bool1,nw;
				$pyjs.track={module:'WindowTest', lineno:8};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='WindowTest';
				$pyjs.track.lineno=8;
				$pyjs.track.lineno=10;
				if ((($bool2=!(($bool1=$p['getattr'](self, 'resize_test')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2.__nonzero__=='function'?
								$bool2.__nonzero__() :
								(typeof $bool2.__len__=='function'?
									($bool2.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=11;
					self['fail']('onWindowResized called after WindowListener removed');
					$pyjs.track.lineno=12;
					$pyjs.track.lineno=12;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=14;
				nh = $m['Window']['getClientHeight']();
				$pyjs.track.lineno=15;
				nw = $m['Window']['getClientWidth']();
				$pyjs.track.lineno=17;
				self['assertTrue'](!$p['op_eq'](nw, $p['getattr'](self, 'w')));
				$pyjs.track.lineno=18;
				self['assertTrue'](!$p['op_eq'](nh, $p['getattr'](self, 'h')));
				$pyjs.track.lineno=19;
				self['assertTrue']($p['isinstance'](nw, $p['int']));
				$pyjs.track.lineno=20;
				self['assertTrue']($p['isinstance'](nh, $p['int']));
				$pyjs.track.lineno=24;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('resize_test', false) : $p['setattr'](self, 'resize_test', false); 
				$pyjs.track.lineno=25;
				$m['Window']['removeWindowResizeListener'](self);
				$pyjs.track.lineno=26;
				$m['Window']['resize']($p['getattr'](self, 'w'), $p['getattr'](self, 'h'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['onWindowResized'] = $method;
			$pyjs.track.lineno=28;
			$method = $pyjs__bind_method2('testResize', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '63161147de1649423d2ea127604dba21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $bool3;
				$pyjs.track={module:'WindowTest', lineno:28};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='WindowTest';
				$pyjs.track.lineno=28;
				$pyjs.track.lineno=32;
				if ((($bool3=$m['IN_BROWSER']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$pyjs.track.lineno=33;
					$pyjs.track.lineno=33;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=34;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('resize_test', true) : $p['setattr'](self, 'resize_test', true); 
				$pyjs.track.lineno=35;
				$m['Window']['addWindowResizeListener'](self);
				$pyjs.track.lineno=36;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('h', $m['Window']['getClientHeight']()) : $p['setattr'](self, 'h', $m['Window']['getClientHeight']()); 
				$pyjs.track.lineno=37;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('w', $m['Window']['getClientWidth']()) : $p['setattr'](self, 'w', $m['Window']['getClientWidth']()); 
				$pyjs.track.lineno=38;
				$m['Window']['resize']($constant_int_800, $constant_int_600);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testResize'] = $method;
			$pyjs.track.lineno=40;
			$method = $pyjs__bind_method2('testClientDimensions', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '63161147de1649423d2ea127604dba21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var h,w;
				$pyjs.track={module:'WindowTest', lineno:40};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='WindowTest';
				$pyjs.track.lineno=40;
				$pyjs.track.lineno=41;
				h = $m['Window']['getClientHeight']();
				$pyjs.track.lineno=42;
				w = $m['Window']['getClientWidth']();
				$pyjs.track.lineno=43;
				self['assertTrue']($p['isinstance'](w, $p['int']));
				$pyjs.track.lineno=44;
				self['assertTrue']($p['isinstance'](h, $p['int']));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClientDimensions'] = $method;
			$pyjs.track.lineno=46;
			$method = $pyjs__bind_method2('testLocation', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '63161147de1649423d2ea127604dba21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'WindowTest', lineno:46};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='WindowTest';
				$pyjs.track.lineno=46;
				$pyjs.track.lineno=47;
				self['assertTrue']($m['Window']['getLocation']()['getHref']()['endswith']('LibTest.html'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testLocation'] = $method;
			$pyjs.track.lineno=50;
			$method = $pyjs__bind_method2('testTitle', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '63161147de1649423d2ea127604dba21') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'WindowTest', lineno:50};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='WindowTest';
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=51;
				self['assertEquals']($m['Window']['getTitle'](), 'LibTest');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTitle'] = $method;
			$pyjs.track.lineno=4;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('WindowTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end WindowTest */


/* end module: WindowTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'UnitTest.IN_BROWSER', 'pyjamas.Window', 'pyjamas']
*/
