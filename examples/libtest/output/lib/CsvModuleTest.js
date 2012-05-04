/* start module: CsvModuleTest */
$pyjs.loaded_modules['CsvModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['CsvModuleTest'].__was_initialized__) return $pyjs.loaded_modules['CsvModuleTest'];
	var $m = $pyjs.loaded_modules["CsvModuleTest"];
	$m.__repr__ = function() { return "<module: CsvModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'CsvModuleTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'CsvModuleTest.py, line 1:\n    # Testing csv module';
		$m.__track_lines__[3] = 'CsvModuleTest.py, line 3:\n    import sys';
		$m.__track_lines__[4] = 'CsvModuleTest.py, line 4:\n    import UnitTest';
		$m.__track_lines__[6] = 'CsvModuleTest.py, line 6:\n    import csv';
		$m.__track_lines__[9] = 'CsvModuleTest.py, line 9:\n    class CsvModuleTest(UnitTest.UnitTest):';
		$m.__track_lines__[11] = 'CsvModuleTest.py, line 11:\n    def test_reader(self):';
		$m.__track_lines__[12] = 'CsvModuleTest.py, line 12:\n    lines = [';
		$m.__track_lines__[24] = 'CsvModuleTest.py, line 24:\n    expected = [';
		$m.__track_lines__[36] = 'CsvModuleTest.py, line 36:\n    reader = csv.reader(lines)';
		$m.__track_lines__[37] = 'CsvModuleTest.py, line 37:\n    rows = []';
		$m.__track_lines__[38] = 'CsvModuleTest.py, line 38:\n    idx = -1';
		$m.__track_lines__[39] = 'CsvModuleTest.py, line 39:\n    for row in reader:';
		$m.__track_lines__[40] = 'CsvModuleTest.py, line 40:\n    idx += 1';
		$m.__track_lines__[41] = 'CsvModuleTest.py, line 41:\n    self.assertEqual(row, expected[idx],';
		$m.__track_lines__[43] = 'CsvModuleTest.py, line 43:\n    rows.append(row)';
		$m.__track_lines__[45] = 'CsvModuleTest.py, line 45:\n    lines = [';
		$m.__track_lines__[48] = 'CsvModuleTest.py, line 48:\n    expected = [';
		$m.__track_lines__[51] = 'CsvModuleTest.py, line 51:\n    reader = csv.reader(lines)';
		$m.__track_lines__[52] = 'CsvModuleTest.py, line 52:\n    rows = []';
		$m.__track_lines__[53] = 'CsvModuleTest.py, line 53:\n    idx = -1';
		$m.__track_lines__[54] = 'CsvModuleTest.py, line 54:\n    for row in reader:';
		$m.__track_lines__[55] = 'CsvModuleTest.py, line 55:\n    idx += 1';
		$m.__track_lines__[56] = 'CsvModuleTest.py, line 56:\n    self.assertEqual(row, expected[idx],';
		$m.__track_lines__[58] = 'CsvModuleTest.py, line 58:\n    rows.append(row)';

		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='CsvModuleTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['csv'] = $p['___import___']('csv', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=9;
		$m['CsvModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'CsvModuleTest';
			$cls_definition.__md5__ = 'd901675746344380bd7cb7ce82ee34d8';
			$pyjs.track.lineno=11;
			$method = $pyjs__bind_method2('test_reader', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'd901675746344380bd7cb7ce82ee34d8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_iter,$iter2_type,row,rows,$iter2_iter,$iter1_array,reader,expected,$iter1_nextval,$iter2_idx,$8,$6,$7,$4,$5,$2,$3,$1,$iter2_nextval,$iter1_type,idx,lines,$add2,$add3,$add1,$iter1_idx,$add4,$pyjs__trackstack_size_1,$iter2_array;
				$pyjs.track={module:'CsvModuleTest', lineno:11};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='CsvModuleTest';
				$pyjs.track.lineno=11;
				$pyjs.track.lineno=12;
				lines = $p['list'](['1, 2,"3"\n', ' "s","a","as,2"\n', ' "s,"a" ,"as,2"\n', '""s, "a" ,"as,\n2"\n', ' ""s, "a" ,"as,2"\n', '\n', '\n\n', '1, 2,"3"', '""s, "a" ,"as,\n2"', '']);
				$pyjs.track.lineno=24;
				expected = $p['list']([$p['list'](['1', ' 2', '3']), $p['list']([' "s"', 'a', 'as,2']), $p['list']([' "s', 'a ', 'as,2']), $p['list'](['s', ' "a" ', 'as,\n2']), $p['list']([' ""s', ' "a" ', 'as,2']), $p['list']([]), $p['list']([]), $p['list'](['1', ' 2', '3']), $p['list'](['s', ' "a" ', 'as,\n2']), $p['list']([])]);
				$pyjs.track.lineno=36;
				reader = $m['csv']['reader'](lines);
				$pyjs.track.lineno=37;
				rows = $p['list']([]);
				$pyjs.track.lineno=38;
				idx = (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1));
				$pyjs.track.lineno=39;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter1_iter = reader;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					row = $iter1_nextval;
					$pyjs.track.lineno=40;
					idx = (typeof ($add1=idx)==typeof ($add2=$constant_int_1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
					$pyjs.track.lineno=41;
					self['assertEqual'](row, (typeof ($1=expected).__array != 'undefined'?
						((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(idx)), $p['sprintf']('%d : %r != %r', $p['tuple']([idx, row, (typeof ($3=expected).__array != 'undefined'?
						((typeof $3.__array[$4=idx]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(idx))])));
					$pyjs.track.lineno=43;
					rows['append'](row);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='CsvModuleTest';
				$pyjs.track.lineno=45;
				lines = $p['list'](['1,2,3\n']);
				$pyjs.track.lineno=48;
				expected = $p['list']([$p['list'](['1', '2', '3'])]);
				$pyjs.track.lineno=51;
				reader = $m['csv']['reader'](lines);
				$pyjs.track.lineno=52;
				rows = $p['list']([]);
				$pyjs.track.lineno=53;
				idx = (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2));
				$pyjs.track.lineno=54;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = reader;
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					row = $iter2_nextval;
					$pyjs.track.lineno=55;
					idx = (typeof ($add3=idx)==typeof ($add4=$constant_int_1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
					$pyjs.track.lineno=56;
					self['assertEqual'](row, (typeof ($5=expected).__array != 'undefined'?
						((typeof $5.__array[$6=idx]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(idx)), $p['sprintf']('%d : %r != %r', $p['tuple']([idx, row, (typeof ($7=expected).__array != 'undefined'?
						((typeof $7.__array[$8=idx]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(idx))])));
					$pyjs.track.lineno=58;
					rows['append'](row);
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='CsvModuleTest';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_reader'] = $method;
			$pyjs.track.lineno=9;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('CsvModuleTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end CsvModuleTest */


/* end module: CsvModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'csv']
*/
