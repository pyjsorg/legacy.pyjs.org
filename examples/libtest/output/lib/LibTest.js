/* start module: LibTest */
$pyjs.loaded_modules['LibTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LibTest'].__was_initialized__) return $pyjs.loaded_modules['LibTest'];
	var $m = $pyjs.loaded_modules["LibTest"];
	$m.__repr__ = function() { return "<module: LibTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LibTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'LibTest.py, line 1:\n    from UnitTest import IN_BROWSER, IN_JS';
		$m.__track_lines__[2] = 'LibTest.py, line 2:\n    from LoopTest import LoopTest';
		$m.__track_lines__[3] = 'LibTest.py, line 3:\n    from NoInlineCodeTest import NoInlineCodeTest';
		$m.__track_lines__[4] = 'LibTest.py, line 4:\n    from StringTest import StringTest';
		$m.__track_lines__[5] = 'LibTest.py, line 5:\n    from ListTest import ListTest';
		$m.__track_lines__[6] = 'LibTest.py, line 6:\n    from TupleTest import TupleTest';
		$m.__track_lines__[7] = 'LibTest.py, line 7:\n    from ClassTest import ClassTest';
		$m.__track_lines__[8] = 'LibTest.py, line 8:\n    from SetTest import SetTest, FrozenSetTest';
		$m.__track_lines__[9] = 'LibTest.py, line 9:\n    from ArgsTest import ArgsTest';
		$m.__track_lines__[10] = 'LibTest.py, line 10:\n    from VarsTest import VarsTest';
		$m.__track_lines__[11] = 'LibTest.py, line 11:\n    from AttributeTest import AttributeTest';
		$m.__track_lines__[12] = 'LibTest.py, line 12:\n    from ExceptionTest import ExceptionTest';
		$m.__track_lines__[13] = 'LibTest.py, line 13:\n    from BoolTest import BoolTest';
		$m.__track_lines__[14] = 'LibTest.py, line 14:\n    from FunctionTest import FunctionTest';
		$m.__track_lines__[15] = 'LibTest.py, line 15:\n    from NameTest import NameTest';
		$m.__track_lines__[16] = 'LibTest.py, line 16:\n    from DictTest import DictTest';
		$m.__track_lines__[17] = 'LibTest.py, line 17:\n    from BuiltinTest import BuiltinTest';
		$m.__track_lines__[18] = 'LibTest.py, line 18:\n    from GeneratorTest import GeneratorTest';
		$m.__track_lines__[19] = 'LibTest.py, line 19:\n    from LongTest import LongTest';
		$m.__track_lines__[20] = 'LibTest.py, line 20:\n    from CompileTest import CompileTest';
		$m.__track_lines__[21] = 'LibTest.py, line 21:\n    from TemplateStringTest import TemplateStringTest';
		$m.__track_lines__[23] = 'LibTest.py, line 23:\n    if 1L << 31 > 0:';
		$m.__track_lines__[24] = 'LibTest.py, line 24:\n    has_long_type = True';
		$m.__track_lines__[25] = 'LibTest.py, line 25:\n    from LongTypeTest import LongTypeTest';
		$m.__track_lines__[27] = 'LibTest.py, line 27:\n    has_long_type = False';
		$m.__track_lines__[29] = 'LibTest.py, line 29:\n    if IN_JS:';
		$m.__track_lines__[30] = 'LibTest.py, line 30:\n    from JSOTest import JSOTest';
		$m.__track_lines__[32] = 'LibTest.py, line 32:\n    import os, sys';
		$m.__track_lines__[33] = 'LibTest.py, line 33:\n    here = os.path.abspath(os.path.dirname(__file__))';
		$m.__track_lines__[34] = 'LibTest.py, line 34:\n    library = os.path.join(os.path.dirname(os.path.dirname(';
		$m.__track_lines__[36] = 'LibTest.py, line 36:\n    sys.path.append(library)';
		$m.__track_lines__[40] = 'LibTest.py, line 40:\n    import sys';
		$m.__track_lines__[41] = "LibTest.py, line 41:\n    if sys.platform != 'spidermonkey' and sys.platform != 'pyv8':";
		$m.__track_lines__[42] = 'LibTest.py, line 42:\n    from WindowTest import WindowTest';
		$m.__track_lines__[43] = 'LibTest.py, line 43:\n    from MD5Test import MD5Test';
		$m.__track_lines__[44] = 'LibTest.py, line 44:\n    from TimeModuleTest import TimeModuleTest';
		$m.__track_lines__[45] = 'LibTest.py, line 45:\n    from DatetimeModuleTest import DatetimeModuleTest';
		$m.__track_lines__[46] = 'LibTest.py, line 46:\n    from TypeCompatibilityTest import TypeCompatibilityTest';
		$m.__track_lines__[47] = 'LibTest.py, line 47:\n    from UrllibModuleTest import UrllibModuleTest';
		$m.__track_lines__[48] = 'LibTest.py, line 48:\n    from Base64ModuleTest import Base64ModuleTest';
		$m.__track_lines__[49] = 'LibTest.py, line 49:\n    from MathModuleTest import MathModuleTest';
		$m.__track_lines__[50] = 'LibTest.py, line 50:\n    from RandomModuleTest import RandomModuleTest';
		$m.__track_lines__[51] = 'LibTest.py, line 51:\n    from ReModuleTest import ReModuleTest';
		$m.__track_lines__[52] = 'LibTest.py, line 52:\n    from CsvModuleTest import CsvModuleTest';
		$m.__track_lines__[53] = 'LibTest.py, line 53:\n    from StringIOModuleTest import StringIOModuleTest';
		$m.__track_lines__[54] = 'LibTest.py, line 54:\n    from HashableTest import HashableTest';
		$m.__track_lines__[56] = 'LibTest.py, line 56:\n    from RunTests import RunTests';
		$m.__track_lines__[58] = 'LibTest.py, line 58:\n    def main():';
		$m.__track_lines__[60] = 'LibTest.py, line 60:\n    t = RunTests()';
		$m.__track_lines__[61] = 'LibTest.py, line 61:\n    t.add(CompileTest)';
		$m.__track_lines__[62] = 'LibTest.py, line 62:\n    t.add(LoopTest)';
		$m.__track_lines__[63] = 'LibTest.py, line 63:\n    t.add(NoInlineCodeTest)';
		$m.__track_lines__[64] = 'LibTest.py, line 64:\n    t.add(BoolTest)';
		$m.__track_lines__[65] = 'LibTest.py, line 65:\n    t.add(ListTest)';
		$m.__track_lines__[66] = 'LibTest.py, line 66:\n    t.add(TupleTest)';
		$m.__track_lines__[67] = 'LibTest.py, line 67:\n    t.add(FunctionTest)';
		$m.__track_lines__[68] = 'LibTest.py, line 68:\n    t.add(ExceptionTest)';
		$m.__track_lines__[69] = 'LibTest.py, line 69:\n    t.add(ClassTest)';
		$m.__track_lines__[70] = 'LibTest.py, line 70:\n    t.add(StringTest)';
		$m.__track_lines__[71] = 'LibTest.py, line 71:\n    t.add(TemplateStringTest)';
		$m.__track_lines__[72] = 'LibTest.py, line 72:\n    t.add(SetTest)';
		$m.__track_lines__[73] = 'LibTest.py, line 73:\n    t.add(FrozenSetTest)';
		$m.__track_lines__[74] = 'LibTest.py, line 74:\n    t.add(ArgsTest)';
		$m.__track_lines__[75] = 'LibTest.py, line 75:\n    t.add(VarsTest)';
		$m.__track_lines__[76] = 'LibTest.py, line 76:\n    t.add(AttributeTest)';
		$m.__track_lines__[77] = 'LibTest.py, line 77:\n    t.add(NameTest)';
		$m.__track_lines__[78] = 'LibTest.py, line 78:\n    t.add(DictTest)';
		$m.__track_lines__[79] = 'LibTest.py, line 79:\n    t.add(BuiltinTest)';
		$m.__track_lines__[80] = 'LibTest.py, line 80:\n    t.add(GeneratorTest)';
		$m.__track_lines__[81] = 'LibTest.py, line 81:\n    t.add(LongTest)';
		$m.__track_lines__[82] = 'LibTest.py, line 82:\n    if has_long_type:';
		$m.__track_lines__[83] = 'LibTest.py, line 83:\n    t.add(LongTypeTest)';
		$m.__track_lines__[84] = 'LibTest.py, line 84:\n    t.add(TypeCompatibilityTest)';
		$m.__track_lines__[85] = 'LibTest.py, line 85:\n    t.add(MD5Test)';
		$m.__track_lines__[86] = 'LibTest.py, line 86:\n    t.add(TimeModuleTest)';
		$m.__track_lines__[87] = 'LibTest.py, line 87:\n    t.add(DatetimeModuleTest)';
		$m.__track_lines__[88] = 'LibTest.py, line 88:\n    t.add(StringIOModuleTest)';
		$m.__track_lines__[89] = 'LibTest.py, line 89:\n    t.add(UrllibModuleTest)';
		$m.__track_lines__[90] = 'LibTest.py, line 90:\n    t.add(Base64ModuleTest)';
		$m.__track_lines__[91] = 'LibTest.py, line 91:\n    t.add(MathModuleTest)';
		$m.__track_lines__[92] = 'LibTest.py, line 92:\n    t.add(ReModuleTest)';
		$m.__track_lines__[93] = 'LibTest.py, line 93:\n    t.add(RandomModuleTest)';
		$m.__track_lines__[94] = 'LibTest.py, line 94:\n    t.add(CsvModuleTest)';
		$m.__track_lines__[95] = 'LibTest.py, line 95:\n    t.add(HashableTest)';
		$m.__track_lines__[97] = 'LibTest.py, line 97:\n    if IN_BROWSER:';
		$m.__track_lines__[98] = 'LibTest.py, line 98:\n    t.add(JSOTest)';
		$m.__track_lines__[99] = 'LibTest.py, line 99:\n    t.add(WindowTest)';
		$m.__track_lines__[101] = 'LibTest.py, line 101:\n    if sys.version_info >= (2, 7):';
		$m.__track_lines__[102] = 'LibTest.py, line 102:\n    from Syntax27Test import Syntax27Test';
		$m.__track_lines__[103] = 'LibTest.py, line 103:\n    t.add(Syntax27Test)';
		$m.__track_lines__[105] = 'LibTest.py, line 105:\n    from WithTest import WithTest';
		$m.__track_lines__[106] = 'LibTest.py, line 106:\n    t.add(WithTest)';
		$m.__track_lines__[108] = 'LibTest.py, line 108:\n    t.start_test()';
		$m.__track_lines__[110] = "LibTest.py, line 110:\n    if __name__ == '__main__':";
		$m.__track_lines__[111] = 'LibTest.py, line 111:\n    main()';
		var $and1,$and2,$bool2,$bool3,$bool1,$bool4,$bool8,$cmp2,$cmp1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_31 = new $p['int'](31);
		var $constant_long_1 = new $p['long'](1);
		$pyjs.track.module='LibTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['IN_BROWSER'] = $p['___import___']('UnitTest.IN_BROWSER', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['IN_JS'] = $p['___import___']('UnitTest.IN_JS', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['LoopTest'] = $p['___import___']('LoopTest.LoopTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['NoInlineCodeTest'] = $p['___import___']('NoInlineCodeTest.NoInlineCodeTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['StringTest'] = $p['___import___']('StringTest.StringTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ListTest'] = $p['___import___']('ListTest.ListTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['TupleTest'] = $p['___import___']('TupleTest.TupleTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=7;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ClassTest'] = $p['___import___']('ClassTest.ClassTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['SetTest'] = $p['___import___']('SetTest.SetTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['FrozenSetTest'] = $p['___import___']('SetTest.FrozenSetTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=9;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ArgsTest'] = $p['___import___']('ArgsTest.ArgsTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=10;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['VarsTest'] = $p['___import___']('VarsTest.VarsTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=11;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['AttributeTest'] = $p['___import___']('AttributeTest.AttributeTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=12;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ExceptionTest'] = $p['___import___']('ExceptionTest.ExceptionTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=13;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['BoolTest'] = $p['___import___']('BoolTest.BoolTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=14;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['FunctionTest'] = $p['___import___']('FunctionTest.FunctionTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['NameTest'] = $p['___import___']('NameTest.NameTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DictTest'] = $p['___import___']('DictTest.DictTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=17;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['BuiltinTest'] = $p['___import___']('BuiltinTest.BuiltinTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=18;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['GeneratorTest'] = $p['___import___']('GeneratorTest.GeneratorTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['LongTest'] = $p['___import___']('LongTest.LongTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['CompileTest'] = $p['___import___']('CompileTest.CompileTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['TemplateStringTest'] = $p['___import___']('TemplateStringTest.TemplateStringTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=23;
		if ((($bool1=((($cmp1=$p['op_bitshiftleft']($constant_long_1,$constant_int_31))===($cmp2=$constant_int_0)?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$pyjs.track.lineno=24;
			$m['has_long_type'] = true;
			$pyjs.track.lineno=25;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['LongTypeTest'] = $p['___import___']('LongTypeTest.LongTypeTest', null, null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		}
		else {
			$pyjs.track.lineno=27;
			$m['has_long_type'] = false;
		}
		$pyjs.track.lineno=29;
		if ((($bool2=$m['IN_JS']) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			$pyjs.track.lineno=30;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['JSOTest'] = $p['___import___']('JSOTest.JSOTest', null, null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		}
		else {
			$pyjs.track.lineno=32;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['os'] = $p['___import___']('os', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['sys'] = $p['___import___']('sys', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.lineno=33;
			$m['here'] = $m['os']['path']['abspath']($m['os']['path']['dirname']('/home/pbittner/Development/30-percent/pyjs/examples/libtest/LibTest.py'));
			$pyjs.track.lineno=34;
			$m['library'] = $m['os']['path']['join']($m['os']['path']['dirname']($m['os']['path']['dirname']($m['here'])), 'library');
			$pyjs.track.lineno=36;
			$m['sys']['path']['append']($m['library']);
		}
		$pyjs.track.lineno=40;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=41;
		if ((($bool4=((($bool3=$and1=!$p['op_eq']($p['getattr']($m['sys'], 'platform'), 'spidermonkey')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
			false :
			(typeof $bool3=='object'?
				(typeof $bool3.__nonzero__=='function'?
					$bool3.__nonzero__() :
					(typeof $bool3.__len__=='function'?
						($bool3.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!$p['op_eq']($p['getattr']($m['sys'], 'platform'), 'pyv8'):$and1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$pyjs.track.lineno=42;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['WindowTest'] = $p['___import___']('WindowTest.WindowTest', null, null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		}
		$pyjs.track.lineno=43;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['MD5Test'] = $p['___import___']('MD5Test.MD5Test', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=44;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['TimeModuleTest'] = $p['___import___']('TimeModuleTest.TimeModuleTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=45;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DatetimeModuleTest'] = $p['___import___']('DatetimeModuleTest.DatetimeModuleTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=46;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['TypeCompatibilityTest'] = $p['___import___']('TypeCompatibilityTest.TypeCompatibilityTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=47;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UrllibModuleTest'] = $p['___import___']('UrllibModuleTest.UrllibModuleTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=48;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Base64ModuleTest'] = $p['___import___']('Base64ModuleTest.Base64ModuleTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=49;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['MathModuleTest'] = $p['___import___']('MathModuleTest.MathModuleTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=50;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['RandomModuleTest'] = $p['___import___']('RandomModuleTest.RandomModuleTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=51;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['ReModuleTest'] = $p['___import___']('ReModuleTest.ReModuleTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=52;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['CsvModuleTest'] = $p['___import___']('CsvModuleTest.CsvModuleTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=53;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['StringIOModuleTest'] = $p['___import___']('StringIOModuleTest.StringIOModuleTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=54;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HashableTest'] = $p['___import___']('HashableTest.HashableTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=56;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['RunTests'] = $p['___import___']('RunTests.RunTests', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=58;
		$m['main'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $cmp4,$cmp3,WithTest,$bool6,$bool7,$bool5,Syntax27Test,t;
			$pyjs.track={module:'LibTest',lineno:58};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='LibTest';
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=60;
			t = $m['RunTests']();
			$pyjs.track.lineno=61;
			t['add']($m['CompileTest']);
			$pyjs.track.lineno=62;
			t['add']($m['LoopTest']);
			$pyjs.track.lineno=63;
			t['add']($m['NoInlineCodeTest']);
			$pyjs.track.lineno=64;
			t['add']($m['BoolTest']);
			$pyjs.track.lineno=65;
			t['add']($m['ListTest']);
			$pyjs.track.lineno=66;
			t['add']($m['TupleTest']);
			$pyjs.track.lineno=67;
			t['add']($m['FunctionTest']);
			$pyjs.track.lineno=68;
			t['add']($m['ExceptionTest']);
			$pyjs.track.lineno=69;
			t['add']($m['ClassTest']);
			$pyjs.track.lineno=70;
			t['add']($m['StringTest']);
			$pyjs.track.lineno=71;
			t['add']($m['TemplateStringTest']);
			$pyjs.track.lineno=72;
			t['add']($m['SetTest']);
			$pyjs.track.lineno=73;
			t['add']($m['FrozenSetTest']);
			$pyjs.track.lineno=74;
			t['add']($m['ArgsTest']);
			$pyjs.track.lineno=75;
			t['add']($m['VarsTest']);
			$pyjs.track.lineno=76;
			t['add']($m['AttributeTest']);
			$pyjs.track.lineno=77;
			t['add']($m['NameTest']);
			$pyjs.track.lineno=78;
			t['add']($m['DictTest']);
			$pyjs.track.lineno=79;
			t['add']($m['BuiltinTest']);
			$pyjs.track.lineno=80;
			t['add']($m['GeneratorTest']);
			$pyjs.track.lineno=81;
			t['add']($m['LongTest']);
			$pyjs.track.lineno=82;
			if ((($bool5=$m['has_long_type']) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$pyjs.track.lineno=83;
				t['add']($m['LongTypeTest']);
			}
			$pyjs.track.lineno=84;
			t['add']($m['TypeCompatibilityTest']);
			$pyjs.track.lineno=85;
			t['add']($m['MD5Test']);
			$pyjs.track.lineno=86;
			t['add']($m['TimeModuleTest']);
			$pyjs.track.lineno=87;
			t['add']($m['DatetimeModuleTest']);
			$pyjs.track.lineno=88;
			t['add']($m['StringIOModuleTest']);
			$pyjs.track.lineno=89;
			t['add']($m['UrllibModuleTest']);
			$pyjs.track.lineno=90;
			t['add']($m['Base64ModuleTest']);
			$pyjs.track.lineno=91;
			t['add']($m['MathModuleTest']);
			$pyjs.track.lineno=92;
			t['add']($m['ReModuleTest']);
			$pyjs.track.lineno=93;
			t['add']($m['RandomModuleTest']);
			$pyjs.track.lineno=94;
			t['add']($m['CsvModuleTest']);
			$pyjs.track.lineno=95;
			t['add']($m['HashableTest']);
			$pyjs.track.lineno=97;
			if ((($bool6=$m['IN_BROWSER']) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$pyjs.track.lineno=98;
				t['add']($m['JSOTest']);
				$pyjs.track.lineno=99;
				t['add']($m['WindowTest']);
			}
			$pyjs.track.lineno=101;
			if ((($bool7=((((($cmp3=$p['getattr']($m['sys'], 'version_info'))===($cmp4=$p['tuple']([$constant_int_2, $constant_int_7]))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$pyjs.track.lineno=102;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				Syntax27Test = $p['___import___']('Syntax27Test.Syntax27Test', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=103;
				t['add'](Syntax27Test);
				$pyjs.track.lineno=105;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				WithTest = $p['___import___']('WithTest.WithTest', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=106;
				t['add'](WithTest);
			}
			$pyjs.track.lineno=108;
			t['start_test']();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['main'].__name__ = 'main';

		$m['main'].__bind_type__ = 0;
		$m['main'].__args__ = [null,null];
		$pyjs.track.lineno=110;
		if ((($bool8=$p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$pyjs.track.lineno=111;
			$m['main']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end LibTest */


/* end module: LibTest */


/*
PYJS_DEPS: ['UnitTest.IN_BROWSER', 'UnitTest', 'UnitTest.IN_JS', 'LoopTest.LoopTest', 'LoopTest', 'NoInlineCodeTest.NoInlineCodeTest', 'NoInlineCodeTest', 'StringTest.StringTest', 'StringTest', 'ListTest.ListTest', 'ListTest', 'TupleTest.TupleTest', 'TupleTest', 'ClassTest.ClassTest', 'ClassTest', 'SetTest.SetTest', 'SetTest', 'SetTest.FrozenSetTest', 'ArgsTest.ArgsTest', 'ArgsTest', 'VarsTest.VarsTest', 'VarsTest', 'AttributeTest.AttributeTest', 'AttributeTest', 'ExceptionTest.ExceptionTest', 'ExceptionTest', 'BoolTest.BoolTest', 'BoolTest', 'FunctionTest.FunctionTest', 'FunctionTest', 'NameTest.NameTest', 'NameTest', 'DictTest.DictTest', 'DictTest', 'BuiltinTest.BuiltinTest', 'BuiltinTest', 'GeneratorTest.GeneratorTest', 'GeneratorTest', 'LongTest.LongTest', 'LongTest', 'CompileTest.CompileTest', 'CompileTest', 'TemplateStringTest.TemplateStringTest', 'TemplateStringTest', 'LongTypeTest.LongTypeTest', 'LongTypeTest', 'JSOTest.JSOTest', 'JSOTest', 'os', 'sys', 'WindowTest.WindowTest', 'WindowTest', 'MD5Test.MD5Test', 'MD5Test', 'TimeModuleTest.TimeModuleTest', 'TimeModuleTest', 'DatetimeModuleTest.DatetimeModuleTest', 'DatetimeModuleTest', 'TypeCompatibilityTest.TypeCompatibilityTest', 'TypeCompatibilityTest', 'UrllibModuleTest.UrllibModuleTest', 'UrllibModuleTest', 'Base64ModuleTest.Base64ModuleTest', 'Base64ModuleTest', 'MathModuleTest.MathModuleTest', 'MathModuleTest', 'RandomModuleTest.RandomModuleTest', 'RandomModuleTest', 'ReModuleTest.ReModuleTest', 'ReModuleTest', 'CsvModuleTest.CsvModuleTest', 'CsvModuleTest', 'StringIOModuleTest.StringIOModuleTest', 'StringIOModuleTest', 'HashableTest.HashableTest', 'HashableTest', 'RunTests.RunTests', 'RunTests', 'Syntax27Test.Syntax27Test', 'Syntax27Test', 'WithTest.WithTest', 'WithTest']
*/
