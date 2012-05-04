/* start module: SchoolCalendarWidget */
$pyjs.loaded_modules['SchoolCalendarWidget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SchoolCalendarWidget'].__was_initialized__) return $pyjs.loaded_modules['SchoolCalendarWidget'];
	var $m = $pyjs.loaded_modules["SchoolCalendarWidget"];
	$m.__repr__ = function() { return "<module: SchoolCalendarWidget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SchoolCalendarWidget';
	$m.__name__ = __mod_name__;


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['DeferredCommand'] = $p['___import___']('pyjamas.DeferredCommand', null, null, false);
	$m['SchoolCalendarService'] = $p['___import___']('SchoolCalendarService.SchoolCalendarService', null, null, false);
	$m['DynaTableWidget'] = $p['___import___']('DynaTableWidget.DynaTableWidget', null, null, false);
	$m['Person'] = $p['___import___']('Person.Person', null, null, false);
	$m['Student'] = $p['___import___']('Student.Student', null, null, false);
	$m['Professor'] = $p['___import___']('Professor.Professor', null, null, false);
	$m['CalendarProvider'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SchoolCalendarWidget';
		$method = $pyjs__bind_method2('__init__', function(owner) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				owner = arguments[1];
			}

			self.owner = owner;
			self.calService = $m['SchoolCalendarService']();
			self.lastStartRow = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			self.lastMaxRows = (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2));
			self.lastPeople = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['owner']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('updateRowData', function(startRow, maxRows, acceptor) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				startRow = arguments[1];
				maxRows = arguments[2];
				acceptor = arguments[3];
			}
			var $bool2,$eq2,$eq3,$eq1,$eq4,$bool1,handler;
			if ((($bool1=(($eq1=startRow)===($eq2=$p['getattr'](self, 'lastStartRow'))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				if ((($bool2=(($eq3=maxRows)===($eq4=$p['getattr'](self, 'lastMaxRows'))&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['pushResults'](acceptor, startRow, $p['getattr'](self, 'lastPeople'));
					return null;
				}
			}
			handler = (typeof CalendarProviderHandler == "undefined"?$m.CalendarProviderHandler:CalendarProviderHandler)(self, acceptor, startRow, maxRows);
			self['calService']['getPeople'](startRow, maxRows, handler);
			return null;
		}
	, 1, [null,null,['self'],['startRow'],['maxRows'],['acceptor']]);
		$cls_definition['updateRowData'] = $method;
		$method = $pyjs__bind_method2('pushResults', function(acceptor, startRow, people) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				acceptor = arguments[1];
				startRow = arguments[2];
				people = arguments[3];
			}
			var $iter1_idx,rows,$iter1_nextval,$iter1_type,$iter1_iter,person,$iter1_array;
			rows = $p['list']([]);
			$iter1_iter = people;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				person = $iter1_nextval;
				rows['append']($p['list']([person['getName'](), person['getDescription'](), person['getSchedule']($p['getattr']($p['getattr'](self, 'owner'), 'daysFilter'))]));
			}
			acceptor['accept'](startRow, rows);
			return null;
		}
	, 1, [null,null,['self'],['acceptor'],['startRow'],['people']]);
		$cls_definition['pushResults'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CalendarProvider', $p['tuple']($bases), $data);
	})();
	$m['CalendarProviderHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SchoolCalendarWidget';
		$method = $pyjs__bind_method2('__init__', function(owner, acceptor, startRow, maxRows) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				owner = arguments[1];
				acceptor = arguments[2];
				startRow = arguments[3];
				maxRows = arguments[4];
			}

			self.owner = owner;
			self.acceptor = acceptor;
			self.startRow = startRow;
			self.maxRows = maxRows;
			return null;
		}
	, 1, [null,null,['self'],['owner'],['acceptor'],['startRow'],['maxRows']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, requestInfo) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				requestInfo = arguments[2];
			}
			var people;
			people = response;
			$p['getattr'](self, 'owner').lastStartRow = $p['getattr'](self, 'startRow');
			$p['getattr'](self, 'owner').lastMaxRows = $p['getattr'](self, 'maxRows');
			$p['getattr'](self, 'owner').lastPeople = people;
			self['owner']['pushResults']($p['getattr'](self, 'acceptor'), $p['getattr'](self, 'startRow'), people);
			return null;
		}
	, 1, [null,null,['self'],['response'],['requestInfo']]);
		$cls_definition['onRemoteResponse'] = $method;
		$method = $pyjs__bind_method2('onRemoteError', function(code, message, request) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				message = arguments[2];
				request = arguments[3];
			}

			self['acceptor']['failed'](message);
			return null;
		}
	, 1, [null,null,['self'],['code'],['message'],['request']]);
		$cls_definition['onRemoteError'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CalendarProviderHandler', $p['tuple']($bases), $data);
	})();
	$m['SchoolCalendarWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SchoolCalendarWidget';
		$method = $pyjs__bind_method2('__init__', function(visibleRows) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visibleRows = arguments[1];
			}
			var styles,columns;
			$m['Composite']['__init__'](self);
			columns = $p['list'](['Name', 'Description', 'Schedule']);
			styles = $p['list'](['name', 'desc', 'sched']);
			self.calProvider = $m['CalendarProvider'](self);
			self.daysFilter = $p['list']([true, true, true, true, true, true, true]);
			self.pendingRefresh = false;
			self.dynaTable = $m['DynaTableWidget']($p['getattr'](self, 'calProvider'), columns, styles, visibleRows);
			self['initWidget']($p['getattr'](self, 'dynaTable'));
			return null;
		}
	, 1, [null,null,['self'],['visibleRows']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getDayIncluded', function(day) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				day = arguments[1];
			}
			var $2,$1;
			return (typeof ($1=$p['getattr'](self, 'daysFilter')).__array != 'undefined'?
				((typeof $1.__array[$2=day]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(day));
		}
	, 1, [null,null,['self'],['day']]);
		$cls_definition['getDayIncluded'] = $method;
		$method = $pyjs__bind_method2('onLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['dynaTable']['refresh']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method2('setDayIncluded', function(day, included) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				day = arguments[1];
				included = arguments[2];
			}
			var $3,$eq6,$eq5,$bool3,$bool4,$bool5,$4;
			if ((($bool3=(($eq5=(typeof ($3=$p['getattr'](self, 'daysFilter')).__array != 'undefined'?
				((typeof $3.__array[$4=day]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(day)))===($eq6=included)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return null;
			}
			$p['getattr'](self, 'daysFilter').__setitem__(day, included);
			if ((($bool5=!(($bool4=$p['getattr'](self, 'pendingRefresh')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self.pendingRefresh = true;
				$m['DeferredCommand']['add'](self);
			}
			return null;
		}
	, 1, [null,null,['self'],['day'],['included']]);
		$cls_definition['setDayIncluded'] = $method;
		$method = $pyjs__bind_method2('execute', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.pendingRefresh = false;
			self['dynaTable']['refresh']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['execute'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SchoolCalendarWidget', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end SchoolCalendarWidget */


/* end module: SchoolCalendarWidget */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.DeferredCommand', 'SchoolCalendarService.SchoolCalendarService', 'SchoolCalendarService', 'DynaTableWidget.DynaTableWidget', 'DynaTableWidget', 'Person.Person', 'Person', 'Student.Student', 'Student', 'Professor.Professor', 'Professor']
*/
