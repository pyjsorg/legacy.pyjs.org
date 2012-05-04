/* start module: Factory2 */
$pyjs.loaded_modules['Factory2'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Factory2'].__was_initialized__) return $pyjs.loaded_modules['Factory2'];
	var $m = $pyjs.loaded_modules["Factory2"];
	$m.__repr__ = function() { return "<module: Factory2>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Factory2';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'Factory2.py, line 1:\n    global gclasses';
		$m.__track_lines__[2] = 'Factory2.py, line 2:\n    gclasses = {}';
		$m.__track_lines__[4] = 'Factory2.py, line 4:\n    def gregister(className, classe):';
		$m.__track_lines__[5] = 'Factory2.py, line 5:\n    gclasses[className] = classe';
		$m.__track_lines__[6] = 'Factory2.py, line 6:\n    def ggetObject(className, *args, **kargs):';
		$m.__track_lines__[7] = 'Factory2.py, line 7:\n    classe = gclasses[className]';
		$m.__track_lines__[8] = 'Factory2.py, line 8:\n    return classe(*args, **kargs)';


		$pyjs.track.module='Factory2';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$m['gclasses'] = $p['dict']([]);
		$pyjs.track.lineno=4;
		$m['gregister'] = function(className, classe) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);

			$pyjs.track={module:'Factory2',lineno:4};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='Factory2';
			$pyjs.track.lineno=4;
			$pyjs.track.lineno=5;
			$m['gclasses'].__setitem__(className, classe);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['gregister'].__name__ = 'gregister';

		$m['gregister'].__bind_type__ = 0;
		$m['gregister'].__args__ = [null,null,['className'],['classe']];
		$pyjs.track.lineno=6;
		$m['ggetObject'] = function(className) {
			if ($pyjs.options.arg_count && arguments.length < 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, null, arguments.length);
			var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

			var kargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
			if (typeof kargs != 'object' || kargs.__name__ != 'dict' || typeof kargs.$pyjs_is_kwarg == 'undefined') {
				if (typeof kargs != 'undefined') args.__array.push(kargs);
				kargs = arguments[arguments.length+1];
			} else {
				delete kargs['$pyjs_is_kwarg'];
			}
			if (typeof kargs == 'undefined') {
				kargs = $p['__empty_dict']();
				if (typeof className != 'undefined') {
					if (className !== null && typeof className['$pyjs_is_kwarg'] != 'undefined') {
						kargs = className;
						className = arguments[1];
					}
				} else {
				}
			}
			var classe,$2,$1;
			$pyjs.track={module:'Factory2',lineno:6};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='Factory2';
			$pyjs.track.lineno=6;
			$pyjs.track.lineno=7;
			classe = (typeof ($1=$m['gclasses']).__array != 'undefined'?
				((typeof $1.__array[$2=className]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(className));
			$pyjs.track.lineno=8;
			$pyjs.track.lineno=8;
			var $pyjs__ret = $pyjs_kwargs_call(null, classe, args, kargs, [{}]);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['ggetObject'].__name__ = 'ggetObject';

		$m['ggetObject'].__bind_type__ = 0;
		$m['ggetObject'].__args__ = ['args',['kargs'],['className']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end Factory2 */


/* end module: Factory2 */


