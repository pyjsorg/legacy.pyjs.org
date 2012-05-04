/* start module: TupleTest */
$pyjs.loaded_modules['TupleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TupleTest'].__was_initialized__) return $pyjs.loaded_modules['TupleTest'];
	var $m = $pyjs.loaded_modules["TupleTest"];
	$m.__repr__ = function() { return "<module: TupleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TupleTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'TupleTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[3] = 'TupleTest.py, line 3:\n    class TupleTest(UnitTest):';
		$m.__track_lines__[4] = 'TupleTest.py, line 4:\n    def testGetItem(self):';
		$m.__track_lines__[5] = 'TupleTest.py, line 5:\n    t = (1, 2)';
		$m.__track_lines__[6] = 'TupleTest.py, line 6:\n    self.assertEqual(t[True], 2)';
		$m.__track_lines__[7] = 'TupleTest.py, line 7:\n    self.assertEqual(t[False], 1)';
		$m.__track_lines__[9] = 'TupleTest.py, line 9:\n    def testContains(self):';
		$m.__track_lines__[10] = 'TupleTest.py, line 10:\n    value = (0, 1, 2, 3, 4)';
		$m.__track_lines__[11] = 'TupleTest.py, line 11:\n    self.assertTrue(1 in value)';
		$m.__track_lines__[12] = 'TupleTest.py, line 12:\n    self.assertFalse(10 in value)';
		$m.__track_lines__[14] = 'TupleTest.py, line 14:\n    def testTupleAdd(self):';
		$m.__track_lines__[15] = 'TupleTest.py, line 15:\n    t1 = (1,2)';
		$m.__track_lines__[16] = 'TupleTest.py, line 16:\n    t2 = (3,4)';
		$m.__track_lines__[17] = 'TupleTest.py, line 17:\n    added = t1 + t2';
		$m.__track_lines__[18] = 'TupleTest.py, line 18:\n    self.assertTrue(added == (1,2,3,4), "t1 + t2")';
		$m.__track_lines__[19] = 'TupleTest.py, line 19:\n    t1 += t2';
		$m.__track_lines__[20] = 'TupleTest.py, line 20:\n    self.assertTrue(t1 == (1,2,3,4), "t1 += t2")';
		$m.__track_lines__[22] = 'TupleTest.py, line 22:\n    def testIter2(self):';
		$m.__track_lines__[23] = 'TupleTest.py, line 23:\n    i = 0';
		$m.__track_lines__[25] = 'TupleTest.py, line 25:\n    for item in (0,1,2,3):';
		$m.__track_lines__[26] = 'TupleTest.py, line 26:\n    self.assertEqual(item, i)';
		$m.__track_lines__[27] = 'TupleTest.py, line 27:\n    i += 1';
		$m.__track_lines__[29] = 'TupleTest.py, line 29:\n    i = 0';
		$m.__track_lines__[30] = 'TupleTest.py, line 30:\n    for item in (0,1,2,3)[1:-1]:';
		$m.__track_lines__[31] = 'TupleTest.py, line 31:\n    i += item';
		$m.__track_lines__[32] = 'TupleTest.py, line 32:\n    self.assertEqual(i, 3)';
		$m.__track_lines__[34] = 'TupleTest.py, line 34:\n    def testIter(self):';
		$m.__track_lines__[35] = 'TupleTest.py, line 35:\n    t = (0,1,2,3)';
		$m.__track_lines__[36] = 'TupleTest.py, line 36:\n    i = 0';
		$m.__track_lines__[38] = 'TupleTest.py, line 38:\n    it = t.__iter__()';
		$m.__track_lines__[39] = 'TupleTest.py, line 39:\n    while True:';
		$m.__track_lines__[40] = 'TupleTest.py, line 40:\n    try:';
		$m.__track_lines__[41] = 'TupleTest.py, line 41:\n    item = it.next()';
		$m.__track_lines__[43] = 'TupleTest.py, line 43:\n    break';
		$m.__track_lines__[44] = 'TupleTest.py, line 44:\n    self.assertEqual(item, t[i])';
		$m.__track_lines__[45] = 'TupleTest.py, line 45:\n    i += 1';
		$m.__track_lines__[47] = 'TupleTest.py, line 47:\n    def testStr(self):';
		$m.__track_lines__[48] = 'TupleTest.py, line 48:\n    self.assertEqual(str((0,1)), "(0, 1)")';
		$m.__track_lines__[50] = 'TupleTest.py, line 50:\n    def testRepr(self):';
		$m.__track_lines__[51] = 'TupleTest.py, line 51:\n    self.assertEqual(repr((0,1)), "(0, 1)")';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_10 = new $p['int'](10);
		$pyjs.track.module='TupleTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$m['TupleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'TupleTest';
			$cls_definition.__md5__ = 'fcc43aa9767eb5fb0ab558e134364748';
			$pyjs.track.lineno=4;
			$method = $pyjs__bind_method2('testGetItem', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fcc43aa9767eb5fb0ab558e134364748') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var t,$4,$2,$3,$1;
				$pyjs.track={module:'TupleTest', lineno:4};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TupleTest';
				$pyjs.track.lineno=4;
				$pyjs.track.lineno=5;
				t = $p['tuple']([$constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=6;
				self['assertEqual']((typeof ($1=t).__array != 'undefined'?
					((typeof $1.__array[$2=true]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(true)), $constant_int_2);
				$pyjs.track.lineno=7;
				self['assertEqual']((typeof ($3=t).__array != 'undefined'?
					((typeof $3.__array[$4=false]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(false)), $constant_int_1);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGetItem'] = $method;
			$pyjs.track.lineno=9;
			$method = $pyjs__bind_method2('testContains', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fcc43aa9767eb5fb0ab558e134364748') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var value;
				$pyjs.track={module:'TupleTest', lineno:9};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TupleTest';
				$pyjs.track.lineno=9;
				$pyjs.track.lineno=10;
				value = $p['tuple']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=11;
				self['assertTrue'](value.__contains__($constant_int_1));
				$pyjs.track.lineno=12;
				self['assertFalse'](value.__contains__($constant_int_10));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testContains'] = $method;
			$pyjs.track.lineno=14;
			$method = $pyjs__bind_method2('testTupleAdd', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fcc43aa9767eb5fb0ab558e134364748') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var added,t2,t1,$add2,$add3,$add1,$add4;
				$pyjs.track={module:'TupleTest', lineno:14};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TupleTest';
				$pyjs.track.lineno=14;
				$pyjs.track.lineno=15;
				t1 = $p['tuple']([$constant_int_1, $constant_int_2]);
				$pyjs.track.lineno=16;
				t2 = $p['tuple']([$constant_int_3, $constant_int_4]);
				$pyjs.track.lineno=17;
				added = (typeof ($add1=t1)==typeof ($add2=t2) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				$pyjs.track.lineno=18;
				self['assertTrue']($p['op_eq'](added, $p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4])), 't1 + t2');
				$pyjs.track.lineno=19;
				t1 = (typeof ($add3=t1)==typeof ($add4=t2) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				$pyjs.track.lineno=20;
				self['assertTrue']($p['op_eq'](t1, $p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4])), 't1 += t2');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTupleAdd'] = $method;
			$pyjs.track.lineno=22;
			$method = $pyjs__bind_method2('testIter2', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fcc43aa9767eb5fb0ab558e134364748') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,i,$add5,$iter1_iter,item,$iter2_idx,$add6,$iter1_array,$add7,$pyjs__trackstack_size_1,$iter2_type,$add8,$iter2_array,$iter1_idx;
				$pyjs.track={module:'TupleTest', lineno:22};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TupleTest';
				$pyjs.track.lineno=22;
				$pyjs.track.lineno=23;
				i = $constant_int_0;
				$pyjs.track.lineno=25;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = $p['tuple']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					item = $iter1_nextval;
					$pyjs.track.lineno=26;
					self['assertEqual'](item, i);
					$pyjs.track.lineno=27;
					i = (typeof ($add5=i)==typeof ($add6=$constant_int_1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='TupleTest';
				$pyjs.track.lineno=29;
				i = $constant_int_0;
				$pyjs.track.lineno=30;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = $p['__getslice']($p['tuple']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]), $constant_int_1, (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					item = $iter2_nextval;
					$pyjs.track.lineno=31;
					i = (typeof ($add7=i)==typeof ($add8=item) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='TupleTest';
				$pyjs.track.lineno=32;
				self['assertEqual'](i, $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter2'] = $method;
			$pyjs.track.lineno=34;
			$method = $pyjs__bind_method2('testIter', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fcc43aa9767eb5fb0ab558e134364748') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add9,i,$pyjs_try_err,it,item,$bool1,$add10,t,$6,$5;
				$pyjs.track={module:'TupleTest', lineno:34};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TupleTest';
				$pyjs.track.lineno=34;
				$pyjs.track.lineno=35;
				t = $p['tuple']([$constant_int_0, $constant_int_1, $constant_int_2, $constant_int_3]);
				$pyjs.track.lineno=36;
				i = $constant_int_0;
				$pyjs.track.lineno=38;
				it = t['__iter__']();
				$pyjs.track.lineno=39;
				while ((($bool1=true) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
						false :
						(typeof $bool1=='object'?
							(typeof $bool1.__nonzero__=='function'?
								$bool1.__nonzero__() :
								(typeof $bool1.__len__=='function'?
									($bool1.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$pyjs.track.lineno=40;
					var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
					try {
						$pyjs.track.lineno=41;
						item = it['next']();
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
						$pyjs.track.module='TupleTest';
						if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
							$pyjs.track.lineno=43;
							break;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
					$pyjs.track.lineno=44;
					self['assertEqual'](item, (typeof ($5=t).__array != 'undefined'?
						((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(i)));
					$pyjs.track.lineno=45;
					i = (typeof ($add9=i)==typeof ($add10=$constant_int_1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testIter'] = $method;
			$pyjs.track.lineno=47;
			$method = $pyjs__bind_method2('testStr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fcc43aa9767eb5fb0ab558e134364748') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'TupleTest', lineno:47};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TupleTest';
				$pyjs.track.lineno=47;
				$pyjs.track.lineno=48;
				self['assertEqual']($p['str']($p['tuple']([$constant_int_0, $constant_int_1])), '(0, 1)');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testStr'] = $method;
			$pyjs.track.lineno=50;
			$method = $pyjs__bind_method2('testRepr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fcc43aa9767eb5fb0ab558e134364748') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'TupleTest', lineno:50};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TupleTest';
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=51;
				self['assertEqual']($p['repr']($p['tuple']([$constant_int_0, $constant_int_1])), '(0, 1)');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testRepr'] = $method;
			$pyjs.track.lineno=3;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TupleTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end TupleTest */


/* end module: TupleTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/
