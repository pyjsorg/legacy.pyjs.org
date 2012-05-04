/* start module: Professor */
$pyjs.loaded_modules['Professor'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Professor'].__was_initialized__) return $pyjs.loaded_modules['Professor'];
	var $m = $pyjs.loaded_modules["Professor"];
	$m.__repr__ = function() { return "<module: Professor>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Professor';
	$m.__name__ = __mod_name__;


	$m['Person'] = $p['___import___']('Person.Person', null, null, false);
	$m['Schedule'] = $p['___import___']('Schedule.Schedule', null, null, false);
	$m['Professor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Professor';
		$method = $pyjs__bind_method2('__init__', function(teachingSchedule) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				teachingSchedule = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof teachingSchedule != 'undefined') {
					if (teachingSchedule !== null && typeof teachingSchedule['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = teachingSchedule;
						teachingSchedule = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof teachingSchedule == 'undefined') teachingSchedule=arguments.callee.__args__[3][1];
			var $bool1;
			$pyjs_kwargs_call($m['Person'], '__init__', null, kwargs, [{}, self]);
			if ((($bool1=(teachingSchedule === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self.teachingSchedule = $m['Schedule']();
			}
			else {
				self.teachingSchedule = teachingSchedule;
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['teachingSchedule', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getSchedule', function(daysFilter) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				daysFilter = arguments[1];
			}

			return self['teachingSchedule']['getDescription'](daysFilter);
		}
	, 1, [null,null,['self'],['daysFilter']]);
		$cls_definition['getSchedule'] = $method;
		$method = $pyjs__bind_method2('getTeachingSchedule', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'teachingSchedule');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTeachingSchedule'] = $method;
		var $bases = new Array($m['Person']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Professor', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Professor */


/* end module: Professor */


/*
PYJS_DEPS: ['Person.Person', 'Person', 'Schedule.Schedule', 'Schedule']
*/
