/* start module: SchoolCalendarService */
$pyjs.loaded_modules['SchoolCalendarService'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SchoolCalendarService'].__was_initialized__) return $pyjs.loaded_modules['SchoolCalendarService'];
	var $m = $pyjs.loaded_modules["SchoolCalendarService"];
	$m.__repr__ = function() { return "<module: SchoolCalendarService>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SchoolCalendarService';
	$m.__name__ = __mod_name__;


	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['SchoolCalendarService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SchoolCalendarService';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['JSONProxy']['__init__'](self, 'SchoolCalendarService.php', $p['list'](['getPeople']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SchoolCalendarService', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end SchoolCalendarService */


/* end module: SchoolCalendarService */


/*
PYJS_DEPS: ['pyjamas.JSONService.JSONProxy', 'pyjamas', 'pyjamas.JSONService']
*/
