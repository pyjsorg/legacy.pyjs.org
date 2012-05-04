/* start module: Schedule */
$pyjs.loaded_modules['Schedule'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Schedule'].__was_initialized__) return $pyjs.loaded_modules['Schedule'];
	var $m = $pyjs.loaded_modules["Schedule"];
	$m.__repr__ = function() { return "<module: Schedule>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Schedule';
	$m.__name__ = __mod_name__;


	$m['TimeSlot'] = $p['___import___']('TimeSlot.TimeSlot', null, null, false);
	$m['Schedule'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Schedule';
		$method = $pyjs__bind_method2('__init__', function(timeSlots) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timeSlots = arguments[1];
			}
			if (typeof timeSlots == 'undefined') timeSlots=arguments.callee.__args__[3][1];
			var $bool1;
			self.timeSlots = $p['list']([]);
			if ((($bool1=(timeSlots !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self.timeSlots = timeSlots;
			}
			return null;
		}
	, 1, [null,null,['self'],['timeSlots', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addTimeSlot', function(timeSlot) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timeSlot = arguments[1];
			}

			self['timeSlots']['append'](timeSlot);
			return null;
		}
	, 1, [null,null,['self'],['timeSlot']]);
		$cls_definition['addTimeSlot'] = $method;
		$method = $pyjs__bind_method2('getDescription', function(daysFilter) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				daysFilter = arguments[1];
			}
			var $add2,$iter1_nextval,$iter1_type,$add3,$bool4,$iter1_iter,$bool2,$bool3,s,$add1,$iter1_array,$add4,timeSlot,$1,$2,$iter1_idx;
			s = null;
			$iter1_iter = $p['getattr'](self, 'timeSlots');
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				timeSlot = $iter1_nextval;
				if ((($bool2=(typeof ($1=daysFilter).__array != 'undefined'?
					((typeof $1.__array[$2=$p['getattr'](timeSlot, 'dayOfWeek')]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__($p['getattr'](timeSlot, 'dayOfWeek')))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					if ((($bool3=(s === null)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
							false :
							(typeof $bool3=='object'?
								(typeof $bool3.__nonzero__=='function'?
									$bool3.__nonzero__() :
									(typeof $bool3.__len__=='function'?
										($bool3.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						s = timeSlot['getDescription']();
					}
					else {
						s = (typeof ($add3=s)==typeof ($add4=(typeof ($add1=', ')==typeof ($add2=timeSlot['getDescription']()) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2))) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
					}
				}
			}
			if ((($bool4=(s === null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				return '';
			}
			else {
				return s;
			}
			return null;
		}
	, 1, [null,null,['self'],['daysFilter']]);
		$cls_definition['getDescription'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Schedule', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Schedule */


/* end module: Schedule */


/*
PYJS_DEPS: ['TimeSlot.TimeSlot', 'TimeSlot']
*/
