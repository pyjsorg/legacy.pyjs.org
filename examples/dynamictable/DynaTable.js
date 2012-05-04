/* start module: DynaTable */
$pyjs.loaded_modules['DynaTable'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DynaTable'].__was_initialized__) return $pyjs.loaded_modules['DynaTable'];
	var $m = $pyjs.loaded_modules["DynaTable"];
	$m.__repr__ = function() { return "<module: DynaTable>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DynaTable';
	$m.__name__ = __mod_name__;
	var $eq1,$eq2,$bool3;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['DayFilterWidget'] = $p['___import___']('DayFilterWidget.DayFilterWidget', null, null, false);
	$m['SchoolCalendarWidget'] = $p['___import___']('SchoolCalendarWidget.SchoolCalendarWidget', null, null, false);
	$m['DynaTable'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DynaTable';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var slot,$bool2,$bool1,filterWidget,calendar;
			slot = $m['RootPanel']('calendar');
			if ((($bool1=(slot !== null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				calendar = $m['SchoolCalendarWidget'](15);
				slot['add'](calendar);
				slot = $m['RootPanel']('days');
				if ((($bool2=(slot !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					filterWidget = $m['DayFilterWidget'](calendar);
					slot['add'](filterWidget);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DynaTable', $p['tuple']($bases), $data);
	})();
	if ((($bool3=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
		$m['pyjd']['setup']('http://127.0.0.1/examples/dynamictable/public/DynaTable.html');
		$m['app'] = $m['DynaTable']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end DynaTable */


/* end module: DynaTable */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'DayFilterWidget.DayFilterWidget', 'DayFilterWidget', 'SchoolCalendarWidget.SchoolCalendarWidget', 'SchoolCalendarWidget']
*/
