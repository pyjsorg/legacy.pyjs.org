/* start module: GChartExample00a */
$pyjs.loaded_modules['GChartExample00a'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample00a'].__was_initialized__) return $pyjs.loaded_modules['GChartExample00a'];
	var $m = $pyjs.loaded_modules["GChartExample00a"];
	$m.__repr__ = function() { return "<module: GChartExample00a>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample00a';
	$m.__name__ = __mod_name__;


	$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
	$m['GChartExample00a'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample00a';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,i,$iter1_iter,$iter1_array,$mul2,$mul1,$iter1_idx;
			$m['GChart']['__init__'](self);
			self['setChartTitle']('<b>x<sup>2</sup> vs x</b>');
			self['setChartSize'](150, 150);
			self['addCurve']();
			self['getCurve']()['getSymbol']()['setFillThickness'](2);
			self['getCurve']()['getSymbol']()['setFillSpacing'](5);
			$iter1_iter = $p['range'](10);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				self['getCurve']()['addPoint'](i, (typeof ($mul1=i)==typeof ($mul2=i) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
			}
			self['getCurve']()['setLegendLabel']('x<sup>2</sup>');
			self['getXAxis']()['setAxisLabel']('x');
			self['getYAxis']()['setAxisLabel']('x<sup>2</sup>');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['GChart']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GChartExample00a', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end GChartExample00a */


/* end module: GChartExample00a */


/*
PYJS_DEPS: ['pyjamas.chart.GChart.GChart', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart']
*/
