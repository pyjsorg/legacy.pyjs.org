/* start module: TestGChart00 */
$pyjs.loaded_modules['TestGChart00'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TestGChart00'].__was_initialized__) return $pyjs.loaded_modules['TestGChart00'];
	var $m = $pyjs.loaded_modules["TestGChart00"];
	$m.__repr__ = function() { return "<module: TestGChart00>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TestGChart00';
	$m.__name__ = __mod_name__;


	$m['GChartTestAppUtil'] = $p['___import___']('GChartTestAppUtil', null);
	$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
	$m['TestGChart00'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TestGChart00';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs_kwargs_call($m['GChart'], '__init__', null, null, [{XChartSize:150, YChartSize:150}, self]);
			self['setChartTitle']($m['GChartTestAppUtil']['getTitle'](self));
			self['setChartFootnotes']("Check: Consistent with a 'no data' chart (and it doesn't crash).");
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['GChart']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TestGChart00', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end TestGChart00 */


/* end module: TestGChart00 */


/*
PYJS_DEPS: ['GChartTestAppUtil', 'pyjamas.chart.GChart.GChart', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart']
*/
