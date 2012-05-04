/* start module: imports */
$pyjs.loaded_modules['imports'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports'].__was_initialized__) return $pyjs.loaded_modules['imports'];
	var $m = $pyjs.loaded_modules["imports"];
	$m.__repr__ = function() { return "<module: imports>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[32] = 'imports.py, line 32:\n    all_override = False';
		$m.__track_lines__[1] = 'imports.py, line 1:\n    ';
		$m.__track_lines__[2] = 'imports.py, line 2:\n    exec_order = []';
		$m.__track_lines__[33] = 'imports.py, line 33:\n    from allwith__all__ import *';
		$m.__track_lines__[4] = 'imports.py, line 4:\n    class Imports(object):';
		$m.__track_lines__[5] = 'imports.py, line 5:\n    exec_order = exec_order';
		$m.__track_lines__[6] = 'imports.py, line 6:\n    def __init__(self):';
		$m.__track_lines__[7] = 'imports.py, line 7:\n    self.v = 1';
		$m.__track_lines__[9] = 'imports.py, line 9:\n    imports = Imports()';
		$m.__track_lines__[11] = 'imports.py, line 11:\n    overrideme = "not overridden"';
		$m.__track_lines__[13] = 'imports.py, line 13:\n    from . import cls as loccls';
		$m.__track_lines__[34] = 'imports.py, line 34:\n    from allsimple import *';
		$m.__track_lines__[21] = 'imports.py, line 21:\n    upcls = loccls';
		$m.__track_lines__[23] = 'imports.py, line 23:\n    def conditional_func():';
		$m.__track_lines__[24] = 'imports.py, line 24:\n    return "not overridden"';
		$m.__track_lines__[26] = 'imports.py, line 26:\n    if True:';
		$m.__track_lines__[27] = 'imports.py, line 27:\n    def conditional_func():';
		$m.__track_lines__[28] = 'imports.py, line 28:\n    return "overridden"';
		$m.__track_lines__[31] = 'imports.py, line 31:\n    all_masked = False';
		var $bool1;
		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='imports';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$m['exec_order'] = $p['list']([]);
		$pyjs.track.lineno=4;
		$m['Imports'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'imports';
			$cls_definition.__md5__ = 'a103ff10086299651c678af676a549fe';
			$pyjs.track.lineno=5;
			$cls_definition['exec_order'] = $m['exec_order'];
			$pyjs.track.lineno=6;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'a103ff10086299651c678af676a549fe') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'imports', lineno:6};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='imports';
				$pyjs.track.lineno=6;
				$pyjs.track.lineno=7;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('v', $constant_int_1) : $p['setattr'](self, 'v', $constant_int_1); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=4;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Imports', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=9;
		$m['imports'] = $m['Imports']();
		$pyjs.track.lineno=11;
		$m['overrideme'] = 'not overridden';
		$pyjs.track.lineno=13;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['loccls'] = $p['___import___']('imports.cls', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$m['upcls'] = $m['loccls'];
		$pyjs.track.lineno=23;
		$m['conditional_func'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'imports',lineno:23};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='imports';
			$pyjs.track.lineno=23;
			$pyjs.track.lineno=24;
			$pyjs.track.lineno=24;
			var $pyjs__ret = 'not overridden';
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['conditional_func'].__name__ = 'conditional_func';

		$m['conditional_func'].__bind_type__ = 0;
		$m['conditional_func'].__args__ = [null,null];
		$pyjs.track.lineno=26;
		if ((($bool1=true) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			$pyjs.track.lineno=27;
			$m['conditional_func'] = function() {
				if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

				$pyjs.track={module:'imports',lineno:27};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='imports';
				$pyjs.track.lineno=27;
				$pyjs.track.lineno=28;
				$pyjs.track.lineno=28;
				var $pyjs__ret = 'overridden';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			};
			$m['conditional_func'].__name__ = 'conditional_func';

			$m['conditional_func'].__bind_type__ = 0;
			$m['conditional_func'].__args__ = [null,null];
		}
		$pyjs.track.lineno=31;
		$m['all_masked'] = false;
		$pyjs.track.lineno=32;
		$m['all_override'] = false;
		$pyjs.track.lineno=33;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$p['__import_all__']('allwith__all__', 'imports', $m, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=34;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$p['__import_all__']('allsimple', 'imports', $m, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports */


/* end module: imports */


/*
PYJS_DEPS: ['imports.cls', 'imports', 'allwith__all__', 'allsimple']
*/
