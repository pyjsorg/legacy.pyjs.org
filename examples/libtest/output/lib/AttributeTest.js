/* start module: AttributeTest */
$pyjs.loaded_modules['AttributeTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['AttributeTest'].__was_initialized__) return $pyjs.loaded_modules['AttributeTest'];
	var $m = $pyjs.loaded_modules["AttributeTest"];
	$m.__repr__ = function() { return "<module: AttributeTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'AttributeTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'AttributeTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[2] = 'AttributeTest.py, line 2:\n    import sys';
		$m.__track_lines__[4] = "AttributeTest.py, line 4:\n    name = 'Name'";
		$m.__track_lines__[5] = "AttributeTest.py, line 5:\n    prototype = 'Prototype'";
		$m.__track_lines__[6] = "AttributeTest.py, line 6:\n    call = 'Call'";
		$m.__track_lines__[7] = "AttributeTest.py, line 7:\n    apply = 'Apply'";
		$m.__track_lines__[8] = "AttributeTest.py, line 8:\n    constructor = 'Constructor'";
		$m.__track_lines__[10] = 'AttributeTest.py, line 10:\n    class Foo:';
		$m.__track_lines__[11] = 'AttributeTest.py, line 11:\n    a = 1';
		$m.__track_lines__[12] = 'AttributeTest.py, line 12:\n    b = [1,2]';
		$m.__track_lines__[13] = 'AttributeTest.py, line 13:\n    name = "Foo"';
		$m.__track_lines__[14] = 'AttributeTest.py, line 14:\n    label = "label"';
		$m.__track_lines__[16] = 'AttributeTest.py, line 16:\n    def __init__(self, v):';
		$m.__track_lines__[17] = 'AttributeTest.py, line 17:\n    self.v = v';
		$m.__track_lines__[19] = 'AttributeTest.py, line 19:\n    def getV(self):';
		$m.__track_lines__[20] = 'AttributeTest.py, line 20:\n    return self.v';
		$m.__track_lines__[22] = 'AttributeTest.py, line 22:\n    def call(self, name):';
		$m.__track_lines__[23] = 'AttributeTest.py, line 23:\n    name = name.upper()';
		$m.__track_lines__[24] = 'AttributeTest.py, line 24:\n    prototype = self.name';
		$m.__track_lines__[25] = 'AttributeTest.py, line 25:\n    apply = self.name.lower()';
		$m.__track_lines__[26] = 'AttributeTest.py, line 26:\n    return (name, prototype, apply, self.name)';
		$m.__track_lines__[28] = 'AttributeTest.py, line 28:\n    def do(self):';
		$m.__track_lines__[29] = "AttributeTest.py, line 29:\n    return 'do'";
		$m.__track_lines__[31] = 'AttributeTest.py, line 31:\n    def delete_me(self):';
		$m.__track_lines__[32] = 'AttributeTest.py, line 32:\n    pass';
		$m.__track_lines__[35] = 'AttributeTest.py, line 35:\n    class AttributeTest(UnitTest):';
		$m.__track_lines__[37] = 'AttributeTest.py, line 37:\n    def testHasattr(self):';
		$m.__track_lines__[38] = 'AttributeTest.py, line 38:\n    self.assertEqual(hasattr(self, "getName"), True,';
		$m.__track_lines__[40] = 'AttributeTest.py, line 40:\n    self.assertEqual(hasattr(self, "blah"), False,';
		$m.__track_lines__[42] = 'AttributeTest.py, line 42:\n    self.assertEqual(hasattr("", "find"), True,';
		$m.__track_lines__[44] = 'AttributeTest.py, line 44:\n    self.assertEqual(hasattr(1.0, "real"), True,';
		$m.__track_lines__[46] = 'AttributeTest.py, line 46:\n    self.assertEqual(hasattr(1, "real"), True,';
		$m.__track_lines__[50] = 'AttributeTest.py, line 50:\n    def testGetattr(self):';
		$m.__track_lines__[51] = 'AttributeTest.py, line 51:\n    func = getattr(self, "getName")';
		$m.__track_lines__[52] = 'AttributeTest.py, line 52:\n    self.assertEqual(func(), "AttributeTest",';
		$m.__track_lines__[55] = "AttributeTest.py, line 55:\n    self.assertEqual(getattr(Foo, 'name'),";
		$m.__track_lines__[57] = 'AttributeTest.py, line 57:\n    self.assertEqual(1, getattr(Foo, "notthere", 1))';
		$m.__track_lines__[58] = 'AttributeTest.py, line 58:\n    foo = Foo(1)';
		$m.__track_lines__[59] = 'AttributeTest.py, line 59:\n    self.assertEqual(foo.v, getattr(foo, "v"))';
		$m.__track_lines__[60] = 'AttributeTest.py, line 60:\n    self.assertEqual(getattr(foo, "v"), getattr(foo, "v"))';
		$m.__track_lines__[63] = "AttributeTest.py, line 63:\n    self.assertEqual(getattr(1, 'x', 2), 2)";
		$m.__track_lines__[64] = "AttributeTest.py, line 64:\n    self.assertEqual(getattr(None, 'x', 2), 2)";
		$m.__track_lines__[66] = 'AttributeTest.py, line 66:\n    try:';
		$m.__track_lines__[67] = 'AttributeTest.py, line 67:\n    self.assertEqual(1, getattr(foo, "vv"))';
		$m.__track_lines__[69] = "AttributeTest.py, line 69:\n    self.assertEqual(e.__class__.__name__, 'AttributeError')";
		$m.__track_lines__[70] = 'AttributeTest.py, line 70:\n    return';
		$m.__track_lines__[71] = 'AttributeTest.py, line 71:\n    self.fail("No AttributeError raised")';
		$m.__track_lines__[73] = 'AttributeTest.py, line 73:\n    def testSetAttr(self):';
		$m.__track_lines__[75] = 'AttributeTest.py, line 75:\n    f1 = Foo(1)';
		$m.__track_lines__[76] = 'AttributeTest.py, line 76:\n    self.assertEqual(f1.getV(), 1)';
		$m.__track_lines__[78] = 'AttributeTest.py, line 78:\n    f2 = Foo(2)';
		$m.__track_lines__[79] = 'AttributeTest.py, line 79:\n    self.assertEqual(f2.getV(), 2)';
		$m.__track_lines__[81] = 'AttributeTest.py, line 81:\n    f3 = Foo(3)';
		$m.__track_lines__[82] = 'AttributeTest.py, line 82:\n    self.assertEqual(f3.getV(), 3)';
		$m.__track_lines__[85] = 'AttributeTest.py, line 85:\n    setattr(f1, "getV", getattr(f2, "getV"))';
		$m.__track_lines__[86] = 'AttributeTest.py, line 86:\n    self.assertEqual(f1.getV(), 2)';
		$m.__track_lines__[89] = 'AttributeTest.py, line 89:\n    setattr(f1, "getV", f3.getV) # reeallly need to have __getattr__';
		$m.__track_lines__[90] = 'AttributeTest.py, line 90:\n    self.assertEqual(f1.getV(), 3)';
		$m.__track_lines__[92] = 'AttributeTest.py, line 92:\n    def testDelAttr(self):';
		$m.__track_lines__[94] = 'AttributeTest.py, line 94:\n    foo = Foo(1)';
		$m.__track_lines__[95] = 'AttributeTest.py, line 95:\n    self.assertEqual(hasattr(foo, "v"), True)';
		$m.__track_lines__[96] = 'AttributeTest.py, line 96:\n    delattr(foo, "v")';
		$m.__track_lines__[97] = 'AttributeTest.py, line 97:\n    self.assertEqual(hasattr(foo, "v"), False)';
		$m.__track_lines__[99] = 'AttributeTest.py, line 99:\n    self.assertEqual(hasattr(foo, "getV"), True)';
		$m.__track_lines__[100] = 'AttributeTest.py, line 100:\n    try:';
		$m.__track_lines__[101] = 'AttributeTest.py, line 101:\n    delattr(foo, "getV")';
		$m.__track_lines__[103] = 'AttributeTest.py, line 103:\n    self.assertEqual(str(e), "Foo instance has no attribute \'getV\'")';
		$m.__track_lines__[106] = 'AttributeTest.py, line 106:\n    class Foo1(Foo):';
		$m.__track_lines__[107] = 'AttributeTest.py, line 107:\n    pass';
		$m.__track_lines__[109] = 'AttributeTest.py, line 109:\n    foo1 = Foo1(1)';
		$m.__track_lines__[111] = 'AttributeTest.py, line 111:\n    try:';
		$m.__track_lines__[112] = 'AttributeTest.py, line 112:\n    delattr(foo, "delete_me")';
		$m.__track_lines__[113] = 'AttributeTest.py, line 113:\n    self.fail("Bug #697: No AttributeError raised")';
		$m.__track_lines__[115] = 'AttributeTest.py, line 115:\n    self.assertTrue(True)';
		$m.__track_lines__[116] = 'AttributeTest.py, line 116:\n    self.assertEqual(hasattr(foo, "delete_me"), True)';
		$m.__track_lines__[118] = 'AttributeTest.py, line 118:\n    try:';
		$m.__track_lines__[119] = 'AttributeTest.py, line 119:\n    delattr(Foo1, "delete_me")';
		$m.__track_lines__[120] = 'AttributeTest.py, line 120:\n    self.fail("Bug #697: No AttributeError raised")';
		$m.__track_lines__[122] = 'AttributeTest.py, line 122:\n    self.assertTrue(True)';
		$m.__track_lines__[123] = 'AttributeTest.py, line 123:\n    self.assertEqual(hasattr(Foo1, "delete_me"), True, "Bug #697: Foo1 should still have method \'delete_me\'")';
		$m.__track_lines__[125] = 'AttributeTest.py, line 125:\n    delattr(Foo, "delete_me")';
		$m.__track_lines__[126] = 'AttributeTest.py, line 126:\n    self.assertEqual(hasattr(Foo, "delete_me"), False, "Foo shouldn\'t have method \'delete_me\'")';
		$m.__track_lines__[127] = 'AttributeTest.py, line 127:\n    self.assertEqual(hasattr(Foo1, "delete_me"), False, "Foo1 shouldn\'t have method \'delete_me\'")';
		$m.__track_lines__[128] = 'AttributeTest.py, line 128:\n    self.assertEqual(hasattr(foo, "delete_me"), False, "foo shouldn\'t have method \'delete_me\'")';
		$m.__track_lines__[130] = 'AttributeTest.py, line 130:\n    def testAttrErr(self):';
		$m.__track_lines__[131] = 'AttributeTest.py, line 131:\n    foo = Foo(1)';
		$m.__track_lines__[132] = 'AttributeTest.py, line 132:\n    try:';
		$m.__track_lines__[133] = 'AttributeTest.py, line 133:\n    v = foo.bar';
		$m.__track_lines__[134] = 'AttributeTest.py, line 134:\n    self.fail("No Error raised on foo.bar")';
		$m.__track_lines__[136] = 'AttributeTest.py, line 136:\n    self.assertTrue(True, "Exception raised")';
		$m.__track_lines__[138] = 'AttributeTest.py, line 138:\n    def testInstanceAttr(self):';
		$m.__track_lines__[139] = 'AttributeTest.py, line 139:\n    foo = Foo(1)';
		$m.__track_lines__[140] = 'AttributeTest.py, line 140:\n    foo_fn = foo.getV';
		$m.__track_lines__[141] = 'AttributeTest.py, line 141:\n    try:';
		$m.__track_lines__[142] = 'AttributeTest.py, line 142:\n    t = foo_fn()';
		$m.__track_lines__[144] = 'AttributeTest.py, line 144:\n    t = None';
		$m.__track_lines__[145] = 'AttributeTest.py, line 145:\n    self.assertEqual(t, 1)';
		$m.__track_lines__[146] = 'AttributeTest.py, line 146:\n    foo.getV = 2';
		$m.__track_lines__[147] = 'AttributeTest.py, line 147:\n    try:';
		$m.__track_lines__[148] = 'AttributeTest.py, line 148:\n    t = foo_fn()';
		$m.__track_lines__[150] = 'AttributeTest.py, line 150:\n    t = None';
		$m.__track_lines__[151] = 'AttributeTest.py, line 151:\n    self.assertEqual(t, 1)';
		$m.__track_lines__[152] = 'AttributeTest.py, line 152:\n    t = foo.a';
		$m.__track_lines__[153] = 'AttributeTest.py, line 153:\n    foo.a = 2';
		$m.__track_lines__[154] = 'AttributeTest.py, line 154:\n    self.assertEqual(t, 1)';
		$m.__track_lines__[155] = 'AttributeTest.py, line 155:\n    t = foo.b';
		$m.__track_lines__[156] = 'AttributeTest.py, line 156:\n    foo.b.append(3)';
		$m.__track_lines__[157] = 'AttributeTest.py, line 157:\n    self.assertEqual(t[2], 3)';
		$m.__track_lines__[159] = 'AttributeTest.py, line 159:\n    def testAttributMapping(self):';
		$m.__track_lines__[160] = 'AttributeTest.py, line 160:\n    f = Foo(1)';
		$m.__track_lines__[161] = "AttributeTest.py, line 161:\n    self.assertEqual(Foo.name, 'Foo')";
		$m.__track_lines__[162] = "AttributeTest.py, line 162:\n    self.assertEqual(f.name, 'Foo')";
		$m.__track_lines__[163] = "AttributeTest.py, line 163:\n    name, prototype, apply, constructor = f.call('bAr')";
		$m.__track_lines__[164] = "AttributeTest.py, line 164:\n    self.assertEqual(name, 'BAR')";
		$m.__track_lines__[165] = "AttributeTest.py, line 165:\n    self.assertEqual(prototype, 'Foo')";
		$m.__track_lines__[166] = "AttributeTest.py, line 166:\n    self.assertEqual(apply, 'foo')";
		$m.__track_lines__[167] = "AttributeTest.py, line 167:\n    self.assertEqual(constructor, 'Foo')";
		$m.__track_lines__[168] = "AttributeTest.py, line 168:\n    self.assertEqual(Foo.label, 'label')";
		$m.__track_lines__[169] = "AttributeTest.py, line 169:\n    self.assertEqual(f.label, 'label')";
		$m.__track_lines__[170] = "AttributeTest.py, line 170:\n    self.assertEqual(f.do(), 'do')";
		$m.__track_lines__[171] = "AttributeTest.py, line 171:\n    self.assertEqual(getattr(f, 'do')(), 'do')";
		$m.__track_lines__[172] = "AttributeTest.py, line 172:\n    setattr(Foo, 'typeof', 1)";
		$m.__track_lines__[173] = "AttributeTest.py, line 173:\n    self.assertEqual(getattr(f, 'typeof'), 1)";
		$m.__track_lines__[174] = 'AttributeTest.py, line 174:\n    try:';
		$m.__track_lines__[175] = 'AttributeTest.py, line 175:\n    self.assertEqual(f.typeof, 1)';
		$m.__track_lines__[177] = 'AttributeTest.py, line 177:\n    self.fail("Bug #402 setattr error for keywords")';
		$m.__track_lines__[178] = "AttributeTest.py, line 178:\n    self.assertTrue(hasattr(Foo, 'typeof'))";
		$m.__track_lines__[179] = "AttributeTest.py, line 179:\n    delattr(Foo, 'typeof')";
		$m.__track_lines__[180] = "AttributeTest.py, line 180:\n    self.assertFalse(hasattr(Foo, 'typeof'))";
		$m.__track_lines__[181] = "AttributeTest.py, line 181:\n    setattr(Foo, 'typeof', 2)";
		$m.__track_lines__[182] = "AttributeTest.py, line 182:\n    self.assertTrue(hasattr(Foo, 'typeof'))";
		$m.__track_lines__[183] = 'AttributeTest.py, line 183:\n    del Foo.typeof';
		$m.__track_lines__[184] = "AttributeTest.py, line 184:\n    self.assertFalse(hasattr(Foo, 'typeof'))";
		$m.__track_lines__[186] = 'AttributeTest.py, line 186:\n    def testTypeAttributes(self):';
		$m.__track_lines__[187] = 'AttributeTest.py, line 187:\n    try:';
		$m.__track_lines__[188] = 'AttributeTest.py, line 188:\n    x = [].append';
		$m.__track_lines__[189] = 'AttributeTest.py, line 189:\n    x = {}.get';
		$m.__track_lines__[190] = 'AttributeTest.py, line 190:\n    if sys.version_info >= (2, 6):';
		$m.__track_lines__[191] = 'AttributeTest.py, line 191:\n    x = (1,2,3).count';
		$m.__track_lines__[192] = 'AttributeTest.py, line 192:\n    x = (lambda x:z).__name__';
		$m.__track_lines__[193] = 'AttributeTest.py, line 193:\n    x = [1,2,3,4][1:2].append';
		$m.__track_lines__[195] = 'AttributeTest.py, line 195:\n    self.fail("Base type attribute, #594, \'%s\'" % e)';
		$m.__track_lines__[196] = 'AttributeTest.py, line 196:\n    try:';
		$m.__track_lines__[197] = 'AttributeTest.py, line 197:\n    x = "asdfgd".rjust';
		$m.__track_lines__[199] = 'AttributeTest.py, line 199:\n    self.fail("String attribute, #595, \'%s\'" % e)';
		$m.__track_lines__[201] = 'AttributeTest.py, line 201:\n    def testExpressionAttributeCall(self):';
		$m.__track_lines__[202] = 'AttributeTest.py, line 202:\n    s1 = "    1234"';
		$m.__track_lines__[203] = 'AttributeTest.py, line 203:\n    s2 = "5678    "';
		$m.__track_lines__[205] = 'AttributeTest.py, line 205:\n    def s3():';
		$m.__track_lines__[206] = 'AttributeTest.py, line 206:\n    return " 6 "';
		$m.__track_lines__[208] = 'AttributeTest.py, line 208:\n    l = [" 1 ", " 2", "3 "]';
		$m.__track_lines__[210] = 'AttributeTest.py, line 210:\n    self.assertEqual((s1 + s2).strip(), "12345678")';
		$m.__track_lines__[211] = 'AttributeTest.py, line 211:\n    self.assertEqual((s1 + "").strip(), "1234")';
		$m.__track_lines__[212] = 'AttributeTest.py, line 212:\n    self.assertEqual(l[0].strip(), "1")';
		$m.__track_lines__[213] = 'AttributeTest.py, line 213:\n    self.assertEqual((\'\'.join(l)).strip(), "1  23")';
		$m.__track_lines__[214] = 'AttributeTest.py, line 214:\n    self.assertEqual((s3() + s2).strip(), "6 5678")';
		$m.__track_lines__[215] = 'AttributeTest.py, line 215:\n    self.assertEqual(s3().strip(), "6")';
		$m.__track_lines__[216] = 'AttributeTest.py, line 216:\n    self.assertEqual(" 6 ".strip(), "6")';
		$m.__track_lines__[217] = 'AttributeTest.py, line 217:\n    self.assertEqual([1,2,3].pop(), 3)';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_6 = new $p['int'](6);
		$pyjs.track.module='AttributeTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$m['$$name'] = 'Name';
		$pyjs.track.lineno=5;
		$m['$$prototype'] = 'Prototype';
		$pyjs.track.lineno=6;
		$m['$$call'] = 'Call';
		$pyjs.track.lineno=7;
		$m['$$apply'] = 'Apply';
		$pyjs.track.lineno=8;
		$m['$$constructor'] = 'Constructor';
		$pyjs.track.lineno=10;
		$m['Foo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'AttributeTest';
			$cls_definition.__md5__ = 'a6ad13e363b631ba2c59d0d854ddb3d8';
			$pyjs.track.lineno=11;
			$cls_definition['a'] = $constant_int_1;
			$pyjs.track.lineno=12;
			$cls_definition['b'] = $p['list']([$constant_int_1, $constant_int_2]);
			$pyjs.track.lineno=13;
			$cls_definition['$$name'] = 'Foo';
			$pyjs.track.lineno=14;
			$cls_definition['$$label'] = 'label';
			$pyjs.track.lineno=16;
			$method = $pyjs__bind_method2('__init__', function(v) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					v = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a6ad13e363b631ba2c59d0d854ddb3d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'AttributeTest', lineno:16};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=16;
				$pyjs.track.lineno=17;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('v', v) : $p['setattr'](self, 'v', v); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['v']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=19;
			$method = $pyjs__bind_method2('getV', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a6ad13e363b631ba2c59d0d854ddb3d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'AttributeTest', lineno:19};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=19;
				$pyjs.track.lineno=20;
				$pyjs.track.lineno=20;
				var $pyjs__ret = $p['getattr'](self, 'v');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getV'] = $method;
			$pyjs.track.lineno=22;
			$method = $pyjs__bind_method2('$$call', function(name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a6ad13e363b631ba2c59d0d854ddb3d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var apply,prototype;
				$pyjs.track={module:'AttributeTest', lineno:22};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=22;
				$pyjs.track.lineno=23;
				name = name['upper']();
				$pyjs.track.lineno=24;
				prototype = $p['getattr'](self, '$$name');
				$pyjs.track.lineno=25;
				apply = self['$$name']['lower']();
				$pyjs.track.lineno=26;
				$pyjs.track.lineno=26;
				var $pyjs__ret = $p['tuple']([name, prototype, apply, $p['getattr'](self, '$$name')]);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['$$call'] = $method;
			$pyjs.track.lineno=28;
			$method = $pyjs__bind_method2('$$do', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a6ad13e363b631ba2c59d0d854ddb3d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'AttributeTest', lineno:28};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=28;
				$pyjs.track.lineno=29;
				$pyjs.track.lineno=29;
				var $pyjs__ret = 'do';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['$$do'] = $method;
			$pyjs.track.lineno=31;
			$method = $pyjs__bind_method2('delete_me', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a6ad13e363b631ba2c59d0d854ddb3d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'AttributeTest', lineno:31};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=31;
				$pyjs.track.lineno=32;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['delete_me'] = $method;
			$pyjs.track.lineno=10;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Foo', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=35;
		$m['AttributeTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'AttributeTest';
			$cls_definition.__md5__ = '39c43ecd4ae9f3f1c373361eaa91670c';
			$pyjs.track.lineno=37;
			$method = $pyjs__bind_method2('testHasattr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '39c43ecd4ae9f3f1c373361eaa91670c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'AttributeTest', lineno:37};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=37;
				$pyjs.track.lineno=38;
				self['assertEqual']($p['hasattr'](self, 'getName'), true, "AttrTest should have method 'getName'");
				$pyjs.track.lineno=40;
				self['assertEqual']($p['hasattr'](self, 'blah'), false, "AttrTest has no method 'getName'");
				$pyjs.track.lineno=42;
				self['assertEqual']($p['hasattr']('', 'find'), true, "str should have method 'find', bug #483");
				$pyjs.track.lineno=44;
				self['assertEqual']($p['hasattr'](1.0, 'real'), true, "float should have attribute 'real', bug #483");
				$pyjs.track.lineno=46;
				self['assertEqual']($p['hasattr']($constant_int_1, 'real'), true, "int should have attribute 'real', bug #483");
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testHasattr'] = $method;
			$pyjs.track.lineno=50;
			$method = $pyjs__bind_method2('testGetattr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '39c43ecd4ae9f3f1c373361eaa91670c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var foo,e,$pyjs_try_err,func;
				$pyjs.track={module:'AttributeTest', lineno:50};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=50;
				$pyjs.track.lineno=51;
				func = $p['getattr'](self, 'getName');
				$pyjs.track.lineno=52;
				self['assertEqual'](func(), 'AttributeTest', "getattr does not return correct value'");
				$pyjs.track.lineno=55;
				self['assertEqual']($p['getattr']($m['Foo'], 'name'), 'Foo', 'attribute mapping, bug #521');
				$pyjs.track.lineno=57;
				self['assertEqual']($constant_int_1, $p['getattr']($m['Foo'], 'notthere', $constant_int_1));
				$pyjs.track.lineno=58;
				foo = $m['Foo']($constant_int_1);
				$pyjs.track.lineno=59;
				self['assertEqual']($p['getattr'](foo, 'v'), $p['getattr'](foo, 'v'));
				$pyjs.track.lineno=60;
				self['assertEqual']($p['getattr'](foo, 'v'), $p['getattr'](foo, 'v'));
				$pyjs.track.lineno=63;
				self['assertEqual']($p['getattr']($constant_int_1, 'x', $constant_int_2), $constant_int_2);
				$pyjs.track.lineno=64;
				self['assertEqual']($p['getattr'](null, 'x', $constant_int_2), $constant_int_2);
				$pyjs.track.lineno=66;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=67;
					self['assertEqual']($constant_int_1, $p['getattr'](foo, 'vv'));
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
					$pyjs.track.module='AttributeTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=69;
						self['assertEqual']($p['getattr']($p['getattr'](e, '__class__'), '__name__'), 'AttributeError');
						$pyjs.track.lineno=70;
						$pyjs.track.lineno=70;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=71;
				self['fail']('No AttributeError raised');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testGetattr'] = $method;
			$pyjs.track.lineno=73;
			$method = $pyjs__bind_method2('testSetAttr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '39c43ecd4ae9f3f1c373361eaa91670c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f1,f3,f2;
				$pyjs.track={module:'AttributeTest', lineno:73};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=73;
				$pyjs.track.lineno=75;
				f1 = $m['Foo']($constant_int_1);
				$pyjs.track.lineno=76;
				self['assertEqual'](f1['getV'](), $constant_int_1);
				$pyjs.track.lineno=78;
				f2 = $m['Foo']($constant_int_2);
				$pyjs.track.lineno=79;
				self['assertEqual'](f2['getV'](), $constant_int_2);
				$pyjs.track.lineno=81;
				f3 = $m['Foo']($constant_int_3);
				$pyjs.track.lineno=82;
				self['assertEqual'](f3['getV'](), $constant_int_3);
				$pyjs.track.lineno=85;
				$p['setattr'](f1, 'getV', $p['getattr'](f2, 'getV'));
				$pyjs.track.lineno=86;
				self['assertEqual'](f1['getV'](), $constant_int_2);
				$pyjs.track.lineno=89;
				$p['setattr'](f1, 'getV', $p['getattr'](f3, 'getV'));
				$pyjs.track.lineno=90;
				self['assertEqual'](f1['getV'](), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSetAttr'] = $method;
			$pyjs.track.lineno=92;
			$method = $pyjs__bind_method2('testDelAttr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '39c43ecd4ae9f3f1c373361eaa91670c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,Foo1,$pyjs_try_err,foo,foo1;
				$pyjs.track={module:'AttributeTest', lineno:92};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=92;
				$pyjs.track.lineno=94;
				foo = $m['Foo']($constant_int_1);
				$pyjs.track.lineno=95;
				self['assertEqual']($p['hasattr'](foo, 'v'), true);
				$pyjs.track.lineno=96;
				$p['delattr'](foo, 'v');
				$pyjs.track.lineno=97;
				self['assertEqual']($p['hasattr'](foo, 'v'), false);
				$pyjs.track.lineno=99;
				self['assertEqual']($p['hasattr'](foo, 'getV'), true);
				$pyjs.track.lineno=100;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=101;
					$p['delattr'](foo, 'getV');
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
					$pyjs.track.module='AttributeTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=103;
						self['assertEqual']($p['str'](e), "Foo instance has no attribute 'getV'");
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=106;
				Foo1 = (function(){
					var $cls_definition = new Object();
					var $method;
					$cls_definition.__module__ = 'AttributeTest';
					$cls_definition.__md5__ = 'fcacd2edb7fc087f49676bb38fe8df58';
					$pyjs.track.lineno=107;
					$pyjs.track.lineno=106;
					var $bases = new Array($m['Foo']);
					var $data = $p['dict']();
					for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
					return $p['_create_class']('Foo1', $p['tuple']($bases), $data);
				})();
				$pyjs.track.lineno=109;
				foo1 = Foo1($constant_int_1);
				$pyjs.track.lineno=111;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=112;
					$p['delattr'](foo, 'delete_me');
					$pyjs.track.lineno=113;
					self['fail']('Bug #697: No AttributeError raised');
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
					$pyjs.track.module='AttributeTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						$pyjs.track.lineno=115;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=116;
				self['assertEqual']($p['hasattr'](foo, 'delete_me'), true);
				$pyjs.track.lineno=118;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=119;
					$p['delattr'](Foo1, 'delete_me');
					$pyjs.track.lineno=120;
					self['fail']('Bug #697: No AttributeError raised');
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
					$pyjs.track.module='AttributeTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						$pyjs.track.lineno=122;
						self['assertTrue'](true);
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=123;
				self['assertEqual']($p['hasattr'](Foo1, 'delete_me'), true, "Bug #697: Foo1 should still have method 'delete_me'");
				$pyjs.track.lineno=125;
				$p['delattr']($m['Foo'], 'delete_me');
				$pyjs.track.lineno=126;
				self['assertEqual']($p['hasattr']($m['Foo'], 'delete_me'), false, "Foo shouldn't have method 'delete_me'");
				$pyjs.track.lineno=127;
				self['assertEqual']($p['hasattr'](Foo1, 'delete_me'), false, "Foo1 shouldn't have method 'delete_me'");
				$pyjs.track.lineno=128;
				self['assertEqual']($p['hasattr'](foo, 'delete_me'), false, "foo shouldn't have method 'delete_me'");
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testDelAttr'] = $method;
			$pyjs.track.lineno=130;
			$method = $pyjs__bind_method2('testAttrErr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '39c43ecd4ae9f3f1c373361eaa91670c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var foo,$pyjs_try_err,v;
				$pyjs.track={module:'AttributeTest', lineno:130};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=130;
				$pyjs.track.lineno=131;
				foo = $m['Foo']($constant_int_1);
				$pyjs.track.lineno=132;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=133;
					v = $p['getattr'](foo, 'bar');
					$pyjs.track.lineno=134;
					self['fail']('No Error raised on foo.bar');
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
					$pyjs.track.module='AttributeTest';
					if (true) {
						$pyjs.track.lineno=136;
						self['assertTrue'](true, 'Exception raised');
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAttrErr'] = $method;
			$pyjs.track.lineno=138;
			$method = $pyjs__bind_method2('testInstanceAttr', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '39c43ecd4ae9f3f1c373361eaa91670c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var foo_fn,$pyjs_try_err,t,foo,$2,$1;
				$pyjs.track={module:'AttributeTest', lineno:138};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=138;
				$pyjs.track.lineno=139;
				foo = $m['Foo']($constant_int_1);
				$pyjs.track.lineno=140;
				foo_fn = $p['getattr'](foo, 'getV');
				$pyjs.track.lineno=141;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=142;
					t = foo_fn();
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
					$pyjs.track.module='AttributeTest';
					if (true) {
						$pyjs.track.lineno=144;
						t = null;
					}
				}
				$pyjs.track.lineno=145;
				self['assertEqual'](t, $constant_int_1);
				$pyjs.track.lineno=146;
				foo.__is_instance__ && typeof foo.__setattr__ == 'function' ? foo.__setattr__('getV', $constant_int_2) : $p['setattr'](foo, 'getV', $constant_int_2); 
				$pyjs.track.lineno=147;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=148;
					t = foo_fn();
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
					$pyjs.track.module='AttributeTest';
					if (true) {
						$pyjs.track.lineno=150;
						t = null;
					}
				}
				$pyjs.track.lineno=151;
				self['assertEqual'](t, $constant_int_1);
				$pyjs.track.lineno=152;
				t = $p['getattr'](foo, 'a');
				$pyjs.track.lineno=153;
				foo.__is_instance__ && typeof foo.__setattr__ == 'function' ? foo.__setattr__('a', $constant_int_2) : $p['setattr'](foo, 'a', $constant_int_2); 
				$pyjs.track.lineno=154;
				self['assertEqual'](t, $constant_int_1);
				$pyjs.track.lineno=155;
				t = $p['getattr'](foo, 'b');
				$pyjs.track.lineno=156;
				foo['b']['append']($constant_int_3);
				$pyjs.track.lineno=157;
				self['assertEqual']((typeof ($1=t).__array != 'undefined'?
					((typeof $1.__array[$2=$constant_int_2]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($constant_int_2)), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testInstanceAttr'] = $method;
			$pyjs.track.lineno=159;
			$method = $pyjs__bind_method2('testAttributMapping', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '39c43ecd4ae9f3f1c373361eaa91670c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e,name,f,$pyjs_try_err,constructor,apply,prototype;
				$pyjs.track={module:'AttributeTest', lineno:159};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=159;
				$pyjs.track.lineno=160;
				f = $m['Foo']($constant_int_1);
				$pyjs.track.lineno=161;
				self['assertEqual']($p['getattr']($m['Foo'], '$$name'), 'Foo');
				$pyjs.track.lineno=162;
				self['assertEqual']($p['getattr'](f, '$$name'), 'Foo');
				$pyjs.track.lineno=163;
				var $tupleassign1 = $p['__ass_unpack'](f['$$call']('bAr'), 4, null);
				name = $tupleassign1[0];
				prototype = $tupleassign1[1];
				apply = $tupleassign1[2];
				constructor = $tupleassign1[3];
				$pyjs.track.lineno=164;
				self['assertEqual'](name, 'BAR');
				$pyjs.track.lineno=165;
				self['assertEqual'](prototype, 'Foo');
				$pyjs.track.lineno=166;
				self['assertEqual'](apply, 'foo');
				$pyjs.track.lineno=167;
				self['assertEqual'](constructor, 'Foo');
				$pyjs.track.lineno=168;
				self['assertEqual']($p['getattr']($m['Foo'], '$$label'), 'label');
				$pyjs.track.lineno=169;
				self['assertEqual']($p['getattr'](f, '$$label'), 'label');
				$pyjs.track.lineno=170;
				self['assertEqual'](f['$$do'](), 'do');
				$pyjs.track.lineno=171;
				self['assertEqual']($p['getattr'](f, 'do')(), 'do');
				$pyjs.track.lineno=172;
				$p['setattr']($m['Foo'], 'typeof', $constant_int_1);
				$pyjs.track.lineno=173;
				self['assertEqual']($p['getattr'](f, 'typeof'), $constant_int_1);
				$pyjs.track.lineno=174;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=175;
					self['assertEqual']($p['getattr'](f, '$$typeof'), $constant_int_1);
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
					$pyjs.track.module='AttributeTest';
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=177;
						self['fail']('Bug #402 setattr error for keywords');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=178;
				self['assertTrue']($p['hasattr']($m['Foo'], 'typeof'));
				$pyjs.track.lineno=179;
				$p['delattr']($m['Foo'], 'typeof');
				$pyjs.track.lineno=180;
				self['assertFalse']($p['hasattr']($m['Foo'], 'typeof'));
				$pyjs.track.lineno=181;
				$p['setattr']($m['Foo'], 'typeof', $constant_int_2);
				$pyjs.track.lineno=182;
				self['assertTrue']($p['hasattr']($m['Foo'], 'typeof'));
				$pyjs.track.lineno=183;
				$p['delattr']($m['Foo'], '$$typeof');
				$pyjs.track.lineno=184;
				self['assertFalse']($p['hasattr']($m['Foo'], 'typeof'));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testAttributMapping'] = $method;
			$pyjs.track.lineno=186;
			$method = $pyjs__bind_method2('testTypeAttributes', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '39c43ecd4ae9f3f1c373361eaa91670c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $cmp1,$lambda1,$cmp2,$pyjs_try_err,$bool1,x,e;
				$pyjs.track={module:'AttributeTest', lineno:186};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=186;
				$pyjs.track.lineno=187;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=188;
					x = $p['getattr']($p['list']([]), 'append');
					$pyjs.track.lineno=189;
					x = $p['getattr']($p['dict']([]), 'get');
					$pyjs.track.lineno=190;
					if ((($bool1=((((($cmp1=$p['getattr']($m['sys'], 'version_info'))===($cmp2=$p['tuple']([$constant_int_2, $constant_int_6]))?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
						$pyjs.track.lineno=191;
						x = $p['getattr']($p['tuple']([$constant_int_1, $constant_int_2, $constant_int_3]), 'count');
					}
					$pyjs.track.lineno=192;
					var 					$lambda1 = function(x) {
						if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

						$pyjs.track={module:'AttributeTest',lineno:192};$pyjs.trackstack.push($pyjs.track);
						$pyjs.track.module='AttributeTest';
						$pyjs.track.lineno=192;
						$pyjs.track.lineno=192;
						$pyjs.track.lineno=192;
						var $pyjs__ret = (typeof z == "undefined"?$m.z:z);
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					};
					$lambda1.__name__ = '$lambda1';

					$lambda1.__bind_type__ = 0;
					$lambda1.__args__ = [null,null,['x']];
					x = $p['getattr']($lambda1, '__name__');
					$pyjs.track.lineno=193;
					x = $p['getattr']($p['__getslice']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3, $constant_int_4]), $constant_int_1, $constant_int_2), 'append');
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
					$pyjs.track.module='AttributeTest';
					if (($pyjs_try_err_name == $p['Exception'].__name__)||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=195;
						self['fail']($p['sprintf']("Base type attribute, #594, '%s'", e));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.track.lineno=196;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=197;
					x = $p['getattr']('asdfgd', 'rjust');
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
					$pyjs.track.module='AttributeTest';
					if (($pyjs_try_err_name == $p['Exception'].__name__)||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
						e = $pyjs_try_err;
						$pyjs.track.lineno=199;
						self['fail']($p['sprintf']("String attribute, #595, '%s'", e));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testTypeAttributes'] = $method;
			$pyjs.track.lineno=201;
			$method = $pyjs__bind_method2('testExpressionAttributeCall', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '39c43ecd4ae9f3f1c373361eaa91670c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s3,s2,l,$3,$add2,$add3,$add1,$add6,$add4,$add5,$4,s1;
				$pyjs.track={module:'AttributeTest', lineno:201};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='AttributeTest';
				$pyjs.track.lineno=201;
				$pyjs.track.lineno=202;
				s1 = '    1234';
				$pyjs.track.lineno=203;
				s2 = '5678    ';
				$pyjs.track.lineno=205;
				s3 = function() {
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

					$pyjs.track={module:'AttributeTest',lineno:205};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='AttributeTest';
					$pyjs.track.lineno=205;
					$pyjs.track.lineno=206;
					$pyjs.track.lineno=206;
					var $pyjs__ret = ' 6 ';
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				s3.__name__ = 's3';

				s3.__bind_type__ = 0;
				s3.__args__ = [null,null];
				$pyjs.track.lineno=208;
				l = $p['list']([' 1 ', ' 2', '3 ']);
				$pyjs.track.lineno=210;
				self['assertEqual']((typeof ($add1=s1)==typeof ($add2=s2) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))['strip'](), '12345678');
				$pyjs.track.lineno=211;
				self['assertEqual']((typeof ($add3=s1)==typeof ($add4='') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4))['strip'](), '1234');
				$pyjs.track.lineno=212;
				self['assertEqual']((typeof ($3=l).__array != 'undefined'?
					((typeof $3.__array[$4=$constant_int_0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__($constant_int_0))['strip'](), '1');
				$pyjs.track.lineno=213;
				self['assertEqual'](''['join'](l)['strip'](), '1  23');
				$pyjs.track.lineno=214;
				self['assertEqual']((typeof ($add5=s3())==typeof ($add6=s2) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))['strip'](), '6 5678');
				$pyjs.track.lineno=215;
				self['assertEqual'](s3()['strip'](), '6');
				$pyjs.track.lineno=216;
				self['assertEqual'](' 6 '['strip'](), '6');
				$pyjs.track.lineno=217;
				self['assertEqual']($p['list']([$constant_int_1, $constant_int_2, $constant_int_3])['pop'](), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testExpressionAttributeCall'] = $method;
			$pyjs.track.lineno=35;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('AttributeTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end AttributeTest */


/* end module: AttributeTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'sys']
*/
