/* start module: imports.decors */
$pyjs.loaded_modules['imports.decors'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.decors'].__was_initialized__) return $pyjs.loaded_modules['imports.decors'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.decors"];
	$m.__repr__ = function() { return "<module: imports.decors>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.decors';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports']['decors'] = $pyjs.loaded_modules['imports.decors'];
	try {
		$m.__track_lines__[1] = 'imports.decors.py, line 1:\n    def othermoduledeco1(f):';
		$m.__track_lines__[2] = 'imports.decors.py, line 2:\n    def fn(*args, **kwargs):';
		$m.__track_lines__[3] = 'imports.decors.py, line 3:\n    return "a" + f(*args, **kwargs) + "c"';
		$m.__track_lines__[4] = 'imports.decors.py, line 4:\n    return fn';


		$pyjs.track.module='imports.decors';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$m['othermoduledeco1'] = function(f) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
			var fn;
			$pyjs.track={module:'imports.decors',lineno:1};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='imports.decors';
			$pyjs.track.lineno=1;
			$pyjs.track.lineno=2;
			fn = function() {
				if ($pyjs.options.arg_count && arguments.length < 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, null, arguments.length);
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
{
					}
				}
				var $add2,$add3,$add1,$add4;
				$pyjs.track={module:'imports.decors',lineno:2};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='imports.decors';
				$pyjs.track.lineno=2;
				$pyjs.track.lineno=3;
				$pyjs.track.lineno=3;
				var $pyjs__ret = (typeof ($add3=(typeof ($add1='a')==typeof ($add2=$pyjs_kwargs_call(null, f, args, kwargs, [{}])) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4='c') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			fn.__name__ = 'fn';

			fn.__bind_type__ = 0;
			fn.__args__ = ['args',['kwargs']];
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=4;
			var $pyjs__ret = fn;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['othermoduledeco1'].__name__ = 'othermoduledeco1';

		$m['othermoduledeco1'].__bind_type__ = 0;
		$m['othermoduledeco1'].__args__ = [null,null,['f']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.decors */


/* end module: imports.decors */


