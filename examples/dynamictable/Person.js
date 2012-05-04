/* start module: Person */
$pyjs.loaded_modules['Person'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Person'].__was_initialized__) return $pyjs.loaded_modules['Person'];
	var $m = $pyjs.loaded_modules["Person"];
	$m.__repr__ = function() { return "<module: Person>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Person';
	$m.__name__ = __mod_name__;


	$m['Person'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Person';
		$method = $pyjs__bind_method2('__init__', function(description, name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				description = arguments[1];
				name = arguments[2];
			}
			if (typeof description == 'undefined') description=arguments.callee.__args__[3][1];
			if (typeof name == 'undefined') name=arguments.callee.__args__[4][1];

			self.description = description;
			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['description', 'DESC'],['name', '']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getDescription', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'description');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDescription'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '$$name');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method2('getSchedule', function(daysFilter) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				daysFilter = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['daysFilter']]);
		$cls_definition['getSchedule'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Person', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Person */


/* end module: Person */


