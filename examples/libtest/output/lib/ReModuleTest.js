/* start module: ReModuleTest */
$pyjs.loaded_modules['ReModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ReModuleTest'].__was_initialized__) return $pyjs.loaded_modules['ReModuleTest'];
	var $m = $pyjs.loaded_modules["ReModuleTest"];
	$m.__repr__ = function() { return "<module: ReModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ReModuleTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'ReModuleTest.py, line 1:\n    # Testing time module';
		$m.__track_lines__[3] = 'ReModuleTest.py, line 3:\n    import sys';
		$m.__track_lines__[4] = 'ReModuleTest.py, line 4:\n    import UnitTest';
		$m.__track_lines__[5] = 'ReModuleTest.py, line 5:\n    import re';
		$m.__track_lines__[9] = 'ReModuleTest.py, line 9:\n    class ReModuleTest(UnitTest.UnitTest):';
		$m.__track_lines__[11] = 'ReModuleTest.py, line 11:\n    def matchTest(self, msg, pat, flags, string, groups, span):';
		$m.__track_lines__[12] = 'ReModuleTest.py, line 12:\n    r = re.compile(pat, flags)';
		$m.__track_lines__[13] = 'ReModuleTest.py, line 13:\n    m = r.match(string)';
		$m.__track_lines__[14] = 'ReModuleTest.py, line 14:\n    if groups is None:';
		$m.__track_lines__[15] = 'ReModuleTest.py, line 15:\n    self.assertTrue(m is None, "%s: None expected" % msg)';
		$m.__track_lines__[16] = 'ReModuleTest.py, line 16:\n    return';
		$m.__track_lines__[17] = 'ReModuleTest.py, line 17:\n    self.assertTrue(m is not None, "%s: Unexpected None" % msg)';
		$m.__track_lines__[18] = 'ReModuleTest.py, line 18:\n    self.assertTrue(len(m.groups()) == len(groups)-1, "%s: len(m.groups()) = %s != %s" % (msg, len(m.groups()), len(groups)-1))';
		$m.__track_lines__[19] = 'ReModuleTest.py, line 19:\n    for i in range(len(groups)):';
		$m.__track_lines__[20] = 'ReModuleTest.py, line 20:\n    self.assertEqual(m.group(i), groups[i], "%s: m.group(%d) = \'%s\' != groups[%d] = \'%s\'" % (msg, i, m.group(i), i, groups[i]))';
		$m.__track_lines__[21] = 'ReModuleTest.py, line 21:\n    self.assertEqual(m.start(), span[0], "%s: start = %d != %d" % (msg, m.start(), span[0]))';
		$m.__track_lines__[22] = 'ReModuleTest.py, line 22:\n    self.assertEqual(m.end(), span[1], "%s: end = %d != %d" % (msg, m.end(), span[1]))';
		$m.__track_lines__[23] = 'ReModuleTest.py, line 23:\n    self.assertTrue(m.span() == span, "%s: span = %r != %r" % (msg, m.span(), span[1]))';
		$m.__track_lines__[25] = 'ReModuleTest.py, line 25:\n    def searchTest(self, msg, pat, flags, string, groups, span):';
		$m.__track_lines__[26] = 'ReModuleTest.py, line 26:\n    r = re.compile(pat, flags)';
		$m.__track_lines__[27] = 'ReModuleTest.py, line 27:\n    m = r.search(string)';
		$m.__track_lines__[28] = 'ReModuleTest.py, line 28:\n    if groups is None:';
		$m.__track_lines__[29] = 'ReModuleTest.py, line 29:\n    self.assertTrue(m is None, "%s: None expected" % msg)';
		$m.__track_lines__[30] = 'ReModuleTest.py, line 30:\n    return';
		$m.__track_lines__[31] = 'ReModuleTest.py, line 31:\n    self.assertTrue(m is not None, "%s: Unexpected None" % msg)';
		$m.__track_lines__[32] = 'ReModuleTest.py, line 32:\n    self.assertTrue(len(m.groups()) == len(groups)-1, "%s: len(m.groups()) = %s != %s" % (msg, len(m.groups()), len(groups)-1))';
		$m.__track_lines__[33] = 'ReModuleTest.py, line 33:\n    for i in range(len(groups)):';
		$m.__track_lines__[34] = 'ReModuleTest.py, line 34:\n    self.assertEqual(m.group(i), groups[i], "%s: m.group(%d) = \'%s\' != groups[%d] = \'%s\'" % (msg, i, m.group(i), i, groups[i]))';
		$m.__track_lines__[35] = 'ReModuleTest.py, line 35:\n    self.assertEqual(m.start(), span[0], "%s: start = %d != %d" % (msg, m.start(), span[0]))';
		$m.__track_lines__[36] = 'ReModuleTest.py, line 36:\n    self.assertEqual(m.end(), span[1], "%s: end = %d != %d" % (msg, m.end(), span[1]))';
		$m.__track_lines__[37] = 'ReModuleTest.py, line 37:\n    self.assertTrue(m.span() == span, "%s: span = %r != %r" % (msg, m.span(), span[1]))';
		$m.__track_lines__[40] = 'ReModuleTest.py, line 40:\n    def testMatchBasics(self):';
		$m.__track_lines__[41] = "ReModuleTest.py, line 41:\n    self.matchTest('test 1', 'Ab.cd', 0, 'AbXcd', ['AbXcd'], (0,5))";
		$m.__track_lines__[42] = "ReModuleTest.py, line 42:\n    self.matchTest('test 2', 'Ab.cd', 0, 'abXcd', None, (0,5))";
		$m.__track_lines__[43] = "ReModuleTest.py, line 43:\n    self.matchTest('test 3a', 'Ab.cd', re.I, 'abXcd', ['abXcd'], (0,5))";
		$m.__track_lines__[44] = "ReModuleTest.py, line 44:\n    self.matchTest('test 3b', '(?i)Ab.cd', 0, 'abXcd', ['abXcd'], (0,5))";
		$m.__track_lines__[45] = "ReModuleTest.py, line 45:\n    self.matchTest('test 4', 'Ab.cd', 0, 'ab\\ncd', None, (0,5))";
		$m.__track_lines__[46] = "ReModuleTest.py, line 46:\n    self.matchTest('test 5a', 'Ab.cd', re.S, 'Ab\\ncd', ['Ab\\ncd'], (0,5))";
		$m.__track_lines__[47] = "ReModuleTest.py, line 47:\n    self.matchTest('test 5b', '(?s)Ab.cd', 0, 'Ab\\ncd', ['Ab\\ncd'], (0,5))";
		$m.__track_lines__[50] = "ReModuleTest.py, line 50:\n    self.matchTest('test 6a', 'A(b).(c)d', re.I | re.S, 'ab\\ncd', ['ab\\ncd', 'b', 'c'], (0,5))";
		$m.__track_lines__[51] = "ReModuleTest.py, line 51:\n    self.matchTest('test 6b', '(?is)A(b).(c)d', 0, 'ab\\ncd', ['ab\\ncd', 'b', 'c'], (0,5))";
		$m.__track_lines__[53] = 'ReModuleTest.py, line 53:\n    m = re.match("1..4", "1234")';
		$m.__track_lines__[54] = 'ReModuleTest.py, line 54:\n    self.assertFalse(m is None, """re.match("1..4", "1234")""")';
		$m.__track_lines__[56] = 'ReModuleTest.py, line 56:\n    def testSearchBasics(self):';
		$m.__track_lines__[57] = "ReModuleTest.py, line 57:\n    self.searchTest('test 1', 'Ab.cd', 0, 'AbXcd', ['AbXcd'], (0,5))";
		$m.__track_lines__[58] = "ReModuleTest.py, line 58:\n    self.searchTest('test 2', 'Ab.cd', 0, 'abXcd', None, (0,5))";
		$m.__track_lines__[59] = "ReModuleTest.py, line 59:\n    self.searchTest('test 3a', 'Ab.cd', re.I, 'abXcd', ['abXcd'], (0,5))";
		$m.__track_lines__[60] = "ReModuleTest.py, line 60:\n    self.searchTest('test 3b', '(?i)Ab.cd', 0, 'abXcd', ['abXcd'], (0,5))";
		$m.__track_lines__[61] = "ReModuleTest.py, line 61:\n    self.searchTest('test 4', 'Ab.cd', 0, 'ab\\ncd', None, (0,5))";
		$m.__track_lines__[62] = "ReModuleTest.py, line 62:\n    self.searchTest('test 5a', 'Ab.cd', re.S, 'Ab\\ncd', ['Ab\\ncd'], (0,5))";
		$m.__track_lines__[63] = "ReModuleTest.py, line 63:\n    self.searchTest('test 5b', 'Ab.cd(?s)', 0, 'Ab\\ncd', ['Ab\\ncd'], (0,5))";
		$m.__track_lines__[64] = "ReModuleTest.py, line 64:\n    self.searchTest('test 6a', 'A(b).(c)d', re.I | re.S, 'ab\\ncd', ['ab\\ncd', 'b', 'c'], (0,5))";
		$m.__track_lines__[65] = "ReModuleTest.py, line 65:\n    self.searchTest('test 6b', 'A(b)(?is).(c)d', 0, 'ab\\ncd', ['ab\\ncd', 'b', 'c'], (0,5))";
		$m.__track_lines__[66] = "ReModuleTest.py, line 66:\n    self.searchTest('test 7', 'Ab.cd', 0, 'AAAbXcd', ['AbXcd'], (2,7))";
		$m.__track_lines__[67] = "ReModuleTest.py, line 67:\n    self.searchTest('test 8', ' ', 0, 'Spaces in a sentence', [' '], (6,7))";
		$m.__track_lines__[69] = 'ReModuleTest.py, line 69:\n    m = re.search("ab", "dab abba a b")';
		$m.__track_lines__[70] = 'ReModuleTest.py, line 70:\n    self.assertFalse(m is None, """re.search("ab", "dab abba a b")""")';
		$m.__track_lines__[73] = 'ReModuleTest.py, line 73:\n    def testFindallBasics(self):';
		$m.__track_lines__[74] = 'ReModuleTest.py, line 74:\n    e = re.compile("e").findall("Where are all these eees")';
		$m.__track_lines__[75] = 'ReModuleTest.py, line 75:\n    self.assertEqual(len(e), 8)';
		$m.__track_lines__[77] = 'ReModuleTest.py, line 77:\n    def testFindallExtra(self):';
		$m.__track_lines__[80] = "ReModuleTest.py, line 80:\n    r = re.compile(r'\\w+ly')";
		$m.__track_lines__[81] = "ReModuleTest.py, line 81:\n    s = 'He was carefully disguised but captured quickly by police.'";
		$m.__track_lines__[82] = "ReModuleTest.py, line 82:\n    out = ['carefully', 'quickly']";
		$m.__track_lines__[83] = 'ReModuleTest.py, line 83:\n    self.assertEqual(r.findall(s), out)';
		$m.__track_lines__[87] = "ReModuleTest.py, line 87:\n    r = re.compile(r'\\$(?:(\\$)|([_a-z][_a-z0-9]*)|{([_a-z][_a-z0-9]*)}|())')";
		$m.__track_lines__[88] = "ReModuleTest.py, line 88:\n    s = 'Here is $$some $text which contains ${some} $2 placeholders'";
		$m.__track_lines__[89] = "ReModuleTest.py, line 89:\n    out = [('$', '', '', ''), ('', 'text', '', ''), ('', '', 'some', ''), ('', '', '', '')]";
		$m.__track_lines__[90] = 'ReModuleTest.py, line 90:\n    self.assertEqual(r.findall(s), out)';
		$m.__track_lines__[92] = 'ReModuleTest.py, line 92:\n    def testSubBasics(self):';
		$m.__track_lines__[93] = 'ReModuleTest.py, line 93:\n    matches = []';
		$m.__track_lines__[94] = 'ReModuleTest.py, line 94:\n    def fn(m):';
		$m.__track_lines__[95] = 'ReModuleTest.py, line 95:\n    matches.append(m)';
		$m.__track_lines__[96] = 'ReModuleTest.py, line 96:\n    return "%s" % len(matches)';
		$m.__track_lines__[97] = "ReModuleTest.py, line 97:\n    r = re.compile('e')";
		$m.__track_lines__[98] = 'ReModuleTest.py, line 98:\n    s = "Where are all these eees"';
		$m.__track_lines__[99] = 'ReModuleTest.py, line 99:\n    self.assertEqual(r.sub("Q", s), "WhQrQ arQ all thQsQ QQQs")';
		$m.__track_lines__[100] = 'ReModuleTest.py, line 100:\n    self.assertEqual(r.sub(fn, s), "Wh1r2 ar3 all th4s5 678s")';
		$m.__track_lines__[101] = 'ReModuleTest.py, line 101:\n    self.assertEqual(r.sub("Q", s, 4), "WhQrQ arQ all thQse eees")';
		$m.__track_lines__[102] = 'ReModuleTest.py, line 102:\n    matches = []';
		$m.__track_lines__[103] = 'ReModuleTest.py, line 103:\n    self.assertEqual(r.sub(fn, s, 5), "Wh1r2 ar3 all th4s5 eees")';
		$m.__track_lines__[105] = 'ReModuleTest.py, line 105:\n    self.assertEqual(r.subn("Q", s), ("WhQrQ arQ all thQsQ QQQs", 8))';
		$m.__track_lines__[108] = 'ReModuleTest.py, line 108:\n    def testSplitBasics(self):';
		$m.__track_lines__[109] = "ReModuleTest.py, line 109:\n    r = re.compile('e')";
		$m.__track_lines__[110] = 'ReModuleTest.py, line 110:\n    s = "Where are all these eees"';
		$m.__track_lines__[112] = "ReModuleTest.py, line 112:\n    self.assertEqual(r.split(s), ['Wh', 'r', ' ar', ' all th', 's', ' ', '', '', 's'])";
		$m.__track_lines__[115] = 'ReModuleTest.py, line 115:\n    def testMatchExtended(self):';
		$m.__track_lines__[116] = 'ReModuleTest.py, line 116:\n    r = re.compile("ed")';
		$m.__track_lines__[117] = 'ReModuleTest.py, line 117:\n    m = r.match("ed ed", 0)';
		$m.__track_lines__[118] = 'ReModuleTest.py, line 118:\n    self.assertEqual(m.group(0), "ed")';
		$m.__track_lines__[120] = 'ReModuleTest.py, line 120:\n    m = r.match("ed ed", 1)';
		$m.__track_lines__[121] = 'ReModuleTest.py, line 121:\n    self.assertTrue(m is None, """match("ed ed", 1)""")';
		$m.__track_lines__[123] = 'ReModuleTest.py, line 123:\n    m = r.match("ed ed", 3)';
		$m.__track_lines__[124] = 'ReModuleTest.py, line 124:\n    self.assertEqual(m.group(0), "ed")';
		$m.__track_lines__[126] = 'ReModuleTest.py, line 126:\n    r = re.compile("^a.*$", re.M)';
		$m.__track_lines__[127] = 'ReModuleTest.py, line 127:\n    m = r.match("a  ")';
		$m.__track_lines__[128] = 'ReModuleTest.py, line 128:\n    self.assertEqual(m.group(0), "a  ")';
		$m.__track_lines__[130] = 'ReModuleTest.py, line 130:\n    m = r.match("a1\\na2")';
		$m.__track_lines__[131] = 'ReModuleTest.py, line 131:\n    self.assertEqual(m.group(0), "a1")';
		$m.__track_lines__[133] = 'ReModuleTest.py, line 133:\n    m = r.match("a1\\na2", 2)';
		$m.__track_lines__[134] = 'ReModuleTest.py, line 134:\n    self.assertTrue(m is None, """match("a1\\na2", 2)""")';
		$m.__track_lines__[136] = 'ReModuleTest.py, line 136:\n    m = r.match("a1\\na2", 3)';
		$m.__track_lines__[137] = 'ReModuleTest.py, line 137:\n    self.assertEqual(m.group(0), "a2")';
		$m.__track_lines__[139] = 'ReModuleTest.py, line 139:\n    m = r.match("a1\\na2", 3, 4)';
		$m.__track_lines__[140] = 'ReModuleTest.py, line 140:\n    self.assertEqual(m.group(0), "a")';
		$m.__track_lines__[142] = 'ReModuleTest.py, line 142:\n    r = re.compile("([+])?(\\d{1,})?")';
		$m.__track_lines__[143] = 'ReModuleTest.py, line 143:\n    m = r.match("1")';
		$m.__track_lines__[144] = 'ReModuleTest.py, line 144:\n    g = m.groups("")';
		$m.__track_lines__[145] = 'ReModuleTest.py, line 145:\n    self.assertEqual(g, ("", "1"))';
		$m.__track_lines__[147] = 'ReModuleTest.py, line 147:\n    def testBackReferences(self):';
		$m.__track_lines__[148] = "ReModuleTest.py, line 148:\n    B_re = re.compile(r'\\*\\*(.*?)\\*\\*', re.DOTALL)";
		$m.__track_lines__[149] = "ReModuleTest.py, line 149:\n    EM_re = re.compile(r'\\*(.*?)\\*', re.DOTALL)";
		$m.__track_lines__[150] = "ReModuleTest.py, line 150:\n    s = '''Text between *single asterisks* is emphasized.<br>Text between **double asterisks** is bolded.<br>You **can *even* embed** them!'''";
		$m.__track_lines__[151] = "ReModuleTest.py, line 151:\n    expected = '''Text between <EM>single asterisks</EM> is emphasized.<br>Text between <STRONG>double asterisks</STRONG> is bolded.<br>You <STRONG>can <EM>even</EM> embed</STRONG> them!'''";
		$m.__track_lines__[153] = "ReModuleTest.py, line 153:\n    s = B_re.sub(r'<STRONG>\\1</STRONG>', s)";
		$m.__track_lines__[154] = "ReModuleTest.py, line 154:\n    s = EM_re.sub(r'<EM>\\1</EM>', s)";
		$m.__track_lines__[155] = "ReModuleTest.py, line 155:\n    self.assertEqual(s, expected, 'Bug #495')";

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_0 = new $p['int'](0);
		$pyjs.track.module='ReModuleTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['re'] = $p['___import___']('re', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=9;
		$m['ReModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'ReModuleTest';
			$cls_definition.__md5__ = '199ab4ea4bb030f29b32a3c2ef6fb0d6';
			$pyjs.track.lineno=11;
			$method = $pyjs__bind_method2('matchTest', function(msg, pat, flags, string, groups, span) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 6) $pyjs__exception_func_param(arguments.callee.__name__, 7, 7, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					pat = arguments[2];
					flags = arguments[3];
					string = arguments[4];
					groups = arguments[5];
					span = arguments[6];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 7) $pyjs__exception_func_param(arguments.callee.__name__, 7, 7, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $8,$iter1_iter,$7,$len5,$iter1_array,$11,$sub3,$sub2,$sub1,$sub4,$iter1_nextval,$pyjs__trackstack_size_1,$bool1,$9,$6,$4,$5,$2,$3,$1,$14,$10,$iter1_type,$12,$iter1_idx,i,$13,m,$len4,r,$len2,$len3,$len1;
				$pyjs.track={module:'ReModuleTest', lineno:11};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=11;
				$pyjs.track.lineno=12;
				r = $m['re']['compile'](pat, flags);
				$pyjs.track.lineno=13;
				m = r['match'](string);
				$pyjs.track.lineno=14;
				if ((($bool1=$p['op_is'](groups, null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					$pyjs.track.lineno=15;
					self['assertTrue']($p['op_is'](m, null), $p['sprintf']('%s: None expected', msg));
					$pyjs.track.lineno=16;
					$pyjs.track.lineno=16;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=17;
				self['assertTrue'](!$p['op_is'](m, null), $p['sprintf']('%s: Unexpected None', msg));
				$pyjs.track.lineno=18;
				self['assertTrue']($p['op_eq']((($len1=m['groups']()) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), (typeof ($sub1=(($len2=groups) === null?$constant_int_0:
					(typeof $len2.__array != 'undefined' ? new $p['int']($len2.__array.length):
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'? new $p['int']($len2.length):
								$p['len']($len2))))))==typeof ($sub2=$constant_int_1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2))), $p['sprintf']('%s: len(m.groups()) = %s != %s', $p['tuple']([msg, (($len3=m['groups']()) === null?$constant_int_0:
					(typeof $len3.__array != 'undefined' ? new $p['int']($len3.__array.length):
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'? new $p['int']($len3.length):
								$p['len']($len3))))), (typeof ($sub3=(($len4=groups) === null?$constant_int_0:
					(typeof $len4.__array != 'undefined' ? new $p['int']($len4.__array.length):
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'? new $p['int']($len4.length):
								$p['len']($len4))))))==typeof ($sub4=$constant_int_1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4))])));
				$pyjs.track.lineno=19;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = $p['range']((($len5=groups) === null?$constant_int_0:
					(typeof $len5.__array != 'undefined' ? new $p['int']($len5.__array.length):
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'? new $p['int']($len5.length):
								$p['len']($len5))))));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					i = $iter1_nextval;
					$pyjs.track.lineno=20;
					self['assertEqual'](m['group'](i), (typeof ($1=groups).__array != 'undefined'?
						((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(i)), $p['sprintf']("%s: m.group(%d) = '%s' != groups[%d] = '%s'", $p['tuple']([msg, i, m['group'](i), i, (typeof ($3=groups).__array != 'undefined'?
						((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(i))])));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=21;
				self['assertEqual'](m['start'](), (typeof ($5=span).__array != 'undefined'?
					((typeof $5.__array[$6=$constant_int_0]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__($constant_int_0)), $p['sprintf']('%s: start = %d != %d', $p['tuple']([msg, m['start'](), (typeof ($7=span).__array != 'undefined'?
					((typeof $7.__array[$8=$constant_int_0]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__($constant_int_0))])));
				$pyjs.track.lineno=22;
				self['assertEqual'](m['end'](), (typeof ($9=span).__array != 'undefined'?
					((typeof $9.__array[$10=$constant_int_1]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($constant_int_1)), $p['sprintf']('%s: end = %d != %d', $p['tuple']([msg, m['end'](), (typeof ($11=span).__array != 'undefined'?
					((typeof $11.__array[$12=$constant_int_1]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__($constant_int_1))])));
				$pyjs.track.lineno=23;
				self['assertTrue']($p['op_eq'](m['span'](), span), $p['sprintf']('%s: span = %r != %r', $p['tuple']([msg, m['span'](), (typeof ($13=span).__array != 'undefined'?
					((typeof $13.__array[$14=$constant_int_1]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__($constant_int_1))])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['msg'],['pat'],['flags'],['string'],['groups'],['span']]);
			$cls_definition['matchTest'] = $method;
			$pyjs.track.lineno=25;
			$method = $pyjs__bind_method2('searchTest', function(msg, pat, flags, string, groups, span) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 6) $pyjs__exception_func_param(arguments.callee.__name__, 7, 7, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					pat = arguments[2];
					flags = arguments[3];
					string = arguments[4];
					groups = arguments[5];
					span = arguments[6];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 7) $pyjs__exception_func_param(arguments.callee.__name__, 7, 7, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $18,$28,$iter2_iter,$21,$20,$22,$25,$24,$27,$26,$sub8,$sub7,$sub6,$sub5,$iter2_type,$bool2,$iter2_idx,$17,$len10,$15,$16,$iter2_nextval,i,m,$19,$len6,$len7,r,$len8,$pyjs__trackstack_size_1,$23,$iter2_array,$len9;
				$pyjs.track={module:'ReModuleTest', lineno:25};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=25;
				$pyjs.track.lineno=26;
				r = $m['re']['compile'](pat, flags);
				$pyjs.track.lineno=27;
				m = r['search'](string);
				$pyjs.track.lineno=28;
				if ((($bool2=$p['op_is'](groups, null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$pyjs.track.lineno=29;
					self['assertTrue']($p['op_is'](m, null), $p['sprintf']('%s: None expected', msg));
					$pyjs.track.lineno=30;
					$pyjs.track.lineno=30;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=31;
				self['assertTrue'](!$p['op_is'](m, null), $p['sprintf']('%s: Unexpected None', msg));
				$pyjs.track.lineno=32;
				self['assertTrue']($p['op_eq']((($len6=m['groups']()) === null?$constant_int_0:
					(typeof $len6.__array != 'undefined' ? new $p['int']($len6.__array.length):
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'? new $p['int']($len6.length):
								$p['len']($len6))))), (typeof ($sub5=(($len7=groups) === null?$constant_int_0:
					(typeof $len7.__array != 'undefined' ? new $p['int']($len7.__array.length):
						(typeof $len7.__len__ == 'function'?$len7.__len__():
							(typeof $len7.length != 'undefined'? new $p['int']($len7.length):
								$p['len']($len7))))))==typeof ($sub6=$constant_int_1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6))), $p['sprintf']('%s: len(m.groups()) = %s != %s', $p['tuple']([msg, (($len8=m['groups']()) === null?$constant_int_0:
					(typeof $len8.__array != 'undefined' ? new $p['int']($len8.__array.length):
						(typeof $len8.__len__ == 'function'?$len8.__len__():
							(typeof $len8.length != 'undefined'? new $p['int']($len8.length):
								$p['len']($len8))))), (typeof ($sub7=(($len9=groups) === null?$constant_int_0:
					(typeof $len9.__array != 'undefined' ? new $p['int']($len9.__array.length):
						(typeof $len9.__len__ == 'function'?$len9.__len__():
							(typeof $len9.length != 'undefined'? new $p['int']($len9.length):
								$p['len']($len9))))))==typeof ($sub8=$constant_int_1) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8))])));
				$pyjs.track.lineno=33;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = $p['range']((($len10=groups) === null?$constant_int_0:
					(typeof $len10.__array != 'undefined' ? new $p['int']($len10.__array.length):
						(typeof $len10.__len__ == 'function'?$len10.__len__():
							(typeof $len10.length != 'undefined'? new $p['int']($len10.length):
								$p['len']($len10))))));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					$pyjs.track.lineno=34;
					self['assertEqual'](m['group'](i), (typeof ($15=groups).__array != 'undefined'?
						((typeof $15.__array[$16=i]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__(i)), $p['sprintf']("%s: m.group(%d) = '%s' != groups[%d] = '%s'", $p['tuple']([msg, i, m['group'](i), i, (typeof ($17=groups).__array != 'undefined'?
						((typeof $17.__array[$18=i]) != 'undefined'?$17.__array[$18]:
							$17.__getitem__($18)):
							$17.__getitem__(i))])));
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=35;
				self['assertEqual'](m['start'](), (typeof ($19=span).__array != 'undefined'?
					((typeof $19.__array[$20=$constant_int_0]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__($constant_int_0)), $p['sprintf']('%s: start = %d != %d', $p['tuple']([msg, m['start'](), (typeof ($21=span).__array != 'undefined'?
					((typeof $21.__array[$22=$constant_int_0]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__($constant_int_0))])));
				$pyjs.track.lineno=36;
				self['assertEqual'](m['end'](), (typeof ($23=span).__array != 'undefined'?
					((typeof $23.__array[$24=$constant_int_1]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__($constant_int_1)), $p['sprintf']('%s: end = %d != %d', $p['tuple']([msg, m['end'](), (typeof ($25=span).__array != 'undefined'?
					((typeof $25.__array[$26=$constant_int_1]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__($constant_int_1))])));
				$pyjs.track.lineno=37;
				self['assertTrue']($p['op_eq'](m['span'](), span), $p['sprintf']('%s: span = %r != %r', $p['tuple']([msg, m['span'](), (typeof ($27=span).__array != 'undefined'?
					((typeof $27.__array[$28=$constant_int_1]) != 'undefined'?$27.__array[$28]:
						$27.__getitem__($28)):
						$27.__getitem__($constant_int_1))])));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['msg'],['pat'],['flags'],['string'],['groups'],['span']]);
			$cls_definition['searchTest'] = $method;
			$pyjs.track.lineno=40;
			$method = $pyjs__bind_method2('testMatchBasics', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var m;
				$pyjs.track={module:'ReModuleTest', lineno:40};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=40;
				$pyjs.track.lineno=41;
				self['matchTest']('test 1', 'Ab.cd', $constant_int_0, 'AbXcd', $p['list'](['AbXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=42;
				self['matchTest']('test 2', 'Ab.cd', $constant_int_0, 'abXcd', null, $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=43;
				self['matchTest']('test 3a', 'Ab.cd', $p['getattr']($m['re'], 'I'), 'abXcd', $p['list'](['abXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=44;
				self['matchTest']('test 3b', '(?i)Ab.cd', $constant_int_0, 'abXcd', $p['list'](['abXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=45;
				self['matchTest']('test 4', 'Ab.cd', $constant_int_0, 'ab\ncd', null, $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=46;
				self['matchTest']('test 5a', 'Ab.cd', $p['getattr']($m['re'], 'S'), 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=47;
				self['matchTest']('test 5b', '(?s)Ab.cd', $constant_int_0, 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=50;
				self['matchTest']('test 6a', 'A(b).(c)d', $p['op_bitor2']($p['getattr']($m['re'], 'I'), $p['getattr']($m['re'], 'S')), 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=51;
				self['matchTest']('test 6b', '(?is)A(b).(c)d', $constant_int_0, 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=53;
				m = $m['re']['match']('1..4', '1234');
				$pyjs.track.lineno=54;
				self['assertFalse']($p['op_is'](m, null), 're.match("1..4", "1234")');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMatchBasics'] = $method;
			$pyjs.track.lineno=56;
			$method = $pyjs__bind_method2('testSearchBasics', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var m;
				$pyjs.track={module:'ReModuleTest', lineno:56};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=56;
				$pyjs.track.lineno=57;
				self['searchTest']('test 1', 'Ab.cd', $constant_int_0, 'AbXcd', $p['list'](['AbXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=58;
				self['searchTest']('test 2', 'Ab.cd', $constant_int_0, 'abXcd', null, $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=59;
				self['searchTest']('test 3a', 'Ab.cd', $p['getattr']($m['re'], 'I'), 'abXcd', $p['list'](['abXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=60;
				self['searchTest']('test 3b', '(?i)Ab.cd', $constant_int_0, 'abXcd', $p['list'](['abXcd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=61;
				self['searchTest']('test 4', 'Ab.cd', $constant_int_0, 'ab\ncd', null, $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=62;
				self['searchTest']('test 5a', 'Ab.cd', $p['getattr']($m['re'], 'S'), 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=63;
				self['searchTest']('test 5b', 'Ab.cd(?s)', $constant_int_0, 'Ab\ncd', $p['list'](['Ab\ncd']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=64;
				self['searchTest']('test 6a', 'A(b).(c)d', $p['op_bitor2']($p['getattr']($m['re'], 'I'), $p['getattr']($m['re'], 'S')), 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=65;
				self['searchTest']('test 6b', 'A(b)(?is).(c)d', $constant_int_0, 'ab\ncd', $p['list'](['ab\ncd', 'b', 'c']), $p['tuple']([$constant_int_0, $constant_int_5]));
				$pyjs.track.lineno=66;
				self['searchTest']('test 7', 'Ab.cd', $constant_int_0, 'AAAbXcd', $p['list'](['AbXcd']), $p['tuple']([$constant_int_2, $constant_int_7]));
				$pyjs.track.lineno=67;
				self['searchTest']('test 8', ' ', $constant_int_0, 'Spaces in a sentence', $p['list']([' ']), $p['tuple']([$constant_int_6, $constant_int_7]));
				$pyjs.track.lineno=69;
				m = $m['re']['search']('ab', 'dab abba a b');
				$pyjs.track.lineno=70;
				self['assertFalse']($p['op_is'](m, null), 're.search("ab", "dab abba a b")');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSearchBasics'] = $method;
			$pyjs.track.lineno=73;
			$method = $pyjs__bind_method2('testFindallBasics', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len11,e;
				$pyjs.track={module:'ReModuleTest', lineno:73};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=73;
				$pyjs.track.lineno=74;
				e = $m['re']['compile']('e')['findall']('Where are all these eees');
				$pyjs.track.lineno=75;
				self['assertEqual']((($len11=e) === null?$constant_int_0:
					(typeof $len11.__array != 'undefined' ? new $p['int']($len11.__array.length):
						(typeof $len11.__len__ == 'function'?$len11.__len__():
							(typeof $len11.length != 'undefined'? new $p['int']($len11.length):
								$p['len']($len11))))), $constant_int_8);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFindallBasics'] = $method;
			$pyjs.track.lineno=77;
			$method = $pyjs__bind_method2('testFindallExtra', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r,s,out;
				$pyjs.track={module:'ReModuleTest', lineno:77};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=77;
				$pyjs.track.lineno=80;
				r = $m['re']['compile']('\\w+ly');
				$pyjs.track.lineno=81;
				s = 'He was carefully disguised but captured quickly by police.';
				$pyjs.track.lineno=82;
				out = $p['list'](['carefully', 'quickly']);
				$pyjs.track.lineno=83;
				self['assertEqual'](r['findall'](s), out);
				$pyjs.track.lineno=87;
				r = $m['re']['compile']('\\$(?:(\\$)|([_a-z][_a-z0-9]*)|{([_a-z][_a-z0-9]*)}|())');
				$pyjs.track.lineno=88;
				s = 'Here is $$some $text which contains ${some} $2 placeholders';
				$pyjs.track.lineno=89;
				out = $p['list']([$p['tuple'](['$', '', '', '']), $p['tuple'](['', 'text', '', '']), $p['tuple'](['', '', 'some', '']), $p['tuple'](['', '', '', ''])]);
				$pyjs.track.lineno=90;
				self['assertEqual'](r['findall'](s), out);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testFindallExtra'] = $method;
			$pyjs.track.lineno=92;
			$method = $pyjs__bind_method2('testSubBasics', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var matches,r,s,fn;
				$pyjs.track={module:'ReModuleTest', lineno:92};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=92;
				$pyjs.track.lineno=93;
				matches = $p['list']([]);
				$pyjs.track.lineno=94;
				fn = function(m) {
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
					var $len12;
					$pyjs.track={module:'ReModuleTest',lineno:94};$pyjs.trackstack.push($pyjs.track);
					$pyjs.track.module='ReModuleTest';
					$pyjs.track.lineno=94;
					$pyjs.track.lineno=95;
					matches['append'](m);
					$pyjs.track.lineno=96;
					$pyjs.track.lineno=96;
					var $pyjs__ret = $p['sprintf']('%s', (($len12=matches) === null?$constant_int_0:
						(typeof $len12.__array != 'undefined' ? new $p['int']($len12.__array.length):
							(typeof $len12.__len__ == 'function'?$len12.__len__():
								(typeof $len12.length != 'undefined'? new $p['int']($len12.length):
									$p['len']($len12))))));
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				};
				fn.__name__ = 'fn';

				fn.__bind_type__ = 0;
				fn.__args__ = [null,null,['m']];
				$pyjs.track.lineno=97;
				r = $m['re']['compile']('e');
				$pyjs.track.lineno=98;
				s = 'Where are all these eees';
				$pyjs.track.lineno=99;
				self['assertEqual'](r['sub']('Q', s), 'WhQrQ arQ all thQsQ QQQs');
				$pyjs.track.lineno=100;
				self['assertEqual'](r['sub'](fn, s), 'Wh1r2 ar3 all th4s5 678s');
				$pyjs.track.lineno=101;
				self['assertEqual'](r['sub']('Q', s, $constant_int_4), 'WhQrQ arQ all thQse eees');
				$pyjs.track.lineno=102;
				matches = $p['list']([]);
				$pyjs.track.lineno=103;
				self['assertEqual'](r['sub'](fn, s, $constant_int_5), 'Wh1r2 ar3 all th4s5 eees');
				$pyjs.track.lineno=105;
				self['assertEqual'](r['subn']('Q', s), $p['tuple'](['WhQrQ arQ all thQsQ QQQs', $constant_int_8]));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSubBasics'] = $method;
			$pyjs.track.lineno=108;
			$method = $pyjs__bind_method2('testSplitBasics', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r,s;
				$pyjs.track={module:'ReModuleTest', lineno:108};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=108;
				$pyjs.track.lineno=109;
				r = $m['re']['compile']('e');
				$pyjs.track.lineno=110;
				s = 'Where are all these eees';
				$pyjs.track.lineno=112;
				self['assertEqual'](r['$$split'](s), $p['list'](['Wh', 'r', ' ar', ' all th', 's', ' ', '', '', 's']));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testSplitBasics'] = $method;
			$pyjs.track.lineno=115;
			$method = $pyjs__bind_method2('testMatchExtended', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var r,m,g;
				$pyjs.track={module:'ReModuleTest', lineno:115};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=115;
				$pyjs.track.lineno=116;
				r = $m['re']['compile']('ed');
				$pyjs.track.lineno=117;
				m = r['match']('ed ed', $constant_int_0);
				$pyjs.track.lineno=118;
				self['assertEqual'](m['group']($constant_int_0), 'ed');
				$pyjs.track.lineno=120;
				m = r['match']('ed ed', $constant_int_1);
				$pyjs.track.lineno=121;
				self['assertTrue']($p['op_is'](m, null), 'match("ed ed", 1)');
				$pyjs.track.lineno=123;
				m = r['match']('ed ed', $constant_int_3);
				$pyjs.track.lineno=124;
				self['assertEqual'](m['group']($constant_int_0), 'ed');
				$pyjs.track.lineno=126;
				r = $m['re']['compile']('^a.*$', $p['getattr']($m['re'], 'M'));
				$pyjs.track.lineno=127;
				m = r['match']('a  ');
				$pyjs.track.lineno=128;
				self['assertEqual'](m['group']($constant_int_0), 'a  ');
				$pyjs.track.lineno=130;
				m = r['match']('a1\na2');
				$pyjs.track.lineno=131;
				self['assertEqual'](m['group']($constant_int_0), 'a1');
				$pyjs.track.lineno=133;
				m = r['match']('a1\na2', $constant_int_2);
				$pyjs.track.lineno=134;
				self['assertTrue']($p['op_is'](m, null), 'match("a1\na2", 2)');
				$pyjs.track.lineno=136;
				m = r['match']('a1\na2', $constant_int_3);
				$pyjs.track.lineno=137;
				self['assertEqual'](m['group']($constant_int_0), 'a2');
				$pyjs.track.lineno=139;
				m = r['match']('a1\na2', $constant_int_3, $constant_int_4);
				$pyjs.track.lineno=140;
				self['assertEqual'](m['group']($constant_int_0), 'a');
				$pyjs.track.lineno=142;
				r = $m['re']['compile']('([+])?(\\d{1,})?');
				$pyjs.track.lineno=143;
				m = r['match']('1');
				$pyjs.track.lineno=144;
				g = m['groups']('');
				$pyjs.track.lineno=145;
				self['assertEqual'](g, $p['tuple'](['', '1']));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMatchExtended'] = $method;
			$pyjs.track.lineno=147;
			$method = $pyjs__bind_method2('testBackReferences', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '199ab4ea4bb030f29b32a3c2ef6fb0d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var expected,s,EM_re,B_re;
				$pyjs.track={module:'ReModuleTest', lineno:147};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='ReModuleTest';
				$pyjs.track.lineno=147;
				$pyjs.track.lineno=148;
				B_re = $m['re']['compile']('\\*\\*(.*?)\\*\\*', $p['getattr']($m['re'], 'DOTALL'));
				$pyjs.track.lineno=149;
				EM_re = $m['re']['compile']('\\*(.*?)\\*', $p['getattr']($m['re'], 'DOTALL'));
				$pyjs.track.lineno=150;
				s = 'Text between *single asterisks* is emphasized.<br>Text between **double asterisks** is bolded.<br>You **can *even* embed** them!';
				$pyjs.track.lineno=151;
				expected = 'Text between <EM>single asterisks</EM> is emphasized.<br>Text between <STRONG>double asterisks</STRONG> is bolded.<br>You <STRONG>can <EM>even</EM> embed</STRONG> them!';
				$pyjs.track.lineno=153;
				s = B_re['sub']('<STRONG>\\1</STRONG>', s);
				$pyjs.track.lineno=154;
				s = EM_re['sub']('<EM>\\1</EM>', s);
				$pyjs.track.lineno=155;
				self['assertEqual'](s, expected, 'Bug #495');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testBackReferences'] = $method;
			$pyjs.track.lineno=9;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ReModuleTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end ReModuleTest */


/* end module: ReModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 're']
*/
