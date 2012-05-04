/* start module: TestGChart05 */
$pyjs.loaded_modules['TestGChart05'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TestGChart05'].__was_initialized__) return $pyjs.loaded_modules['TestGChart05'];
	var $m = $pyjs.loaded_modules["TestGChart05"];
	$m.__repr__ = function() { return "<module: TestGChart05>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TestGChart05';
	$m.__name__ = __mod_name__;


	$m['GChartTestAppUtil'] = $p['___import___']('GChartTestAppUtil', null);
	$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
	$m['GChartConsts'] = $p['___import___']('pyjamas.chart.GChartConsts', null, null, false);
	$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
	$m['TestGChart05'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TestGChart05';
		$method = $pyjs__bind_method2('__init__', function(testCanvas) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				testCanvas = arguments[1];
			}
			var $bool2,$bool3,$bool1,$bool6,$bool4,$bool5;
			$pyjs_kwargs_call($m['GChart'], '__init__', null, null, [{XChartSize:300, YChartSize:300}, self]);
			self['setChartTitle']($m['GChartTestAppUtil']['getTitle'](self));
			self['setClipToPlotArea'](true);
			self['setChartFootnotes']('Check: an unclipped point at each corner.<br> No x-ticks.<br>Line clipped at plot area limits<br>Three clipped-off pies visible<br>Every at-least-partly visible symbol labeled.');
			self['getXAxis']()['setHasGridlines'](true);
			self['getY2Axis']()['setHasGridlines'](true);
			self['addCurve']();
			if ((($bool1=testCanvas) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['getCurve']()['getSymbol']()['setFillSpacing'](0);
			}
			self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y_AXIS'));
			self['getCurve']()['addPoint'](0, (typeof ($usub1=95)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['getCurve']()['addPoint'](0, (typeof ($usub2=90)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['getCurve']()['addPoint'](0, 0);
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['getCurve']()['addPoint'](0, 5);
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['getCurve']()['setLegendLabel']('On Y');
			self['addCurve']();
			if ((($bool2=testCanvas) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['getCurve']()['getSymbol']()['setFillSpacing'](0);
			}
			self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y2_AXIS'));
			self['getCurve']()['addPoint'](90, (typeof ($usub3=50)=='number'?
				-$usub3:
				$p['op_usub']($usub3)));
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['getCurve']()['addPoint'](90, (typeof ($usub4=45)=='number'?
				-$usub4:
				$p['op_usub']($usub4)));
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['getCurve']()['addPoint'](90, 45);
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['getCurve']()['addPoint'](90, 50);
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['getCurve']()['setLegendLabel']('On Y2');
			self['addCurve']();
			self['getCurve']()['setLegendLabel']('clipped line');
			self['getCurve']()['getSymbol']()['setBackgroundColor']('blue');
			self['getCurve']()['getSymbol']()['setBorderColor']('blue');
			if ((($bool3=testCanvas) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['getCurve']()['getSymbol']()['setFillSpacing'](0);
			}
			else {
				self['getCurve']()['getSymbol']()['setFillSpacing'](10);
			}
			self['getCurve']()['getSymbol']()['setFillThickness'](3);
			self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y_AXIS'));
			self['getCurve']()['addPoint'](0, (typeof ($usub5=100)=='number'?
				-$usub5:
				$p['op_usub']($usub5)));
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['getCurve']()['addPoint'](100, 0);
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['addCurve']();
			if ((($bool4=testCanvas) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['getCurve']()['getSymbol']()['setFillSpacing'](0);
			}
			self['getCurve']()['setLegendLabel']('inside pie');
			self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'PIE_SLICE_HORIZONTAL_SHADING'));
			self['getCurve']()['getSymbol']()['setFillThickness'](1);
			self['getCurve']()['getSymbol']()['setWidth'](100);
			self['getCurve']()['getSymbol']()['setHeight'](0);
			self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y_AXIS'));
			self['getCurve']()['addPoint'](45, 0);
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['addCurve']();
			if ((($bool5=testCanvas) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['getCurve']()['getSymbol']()['setFillSpacing'](0);
			}
			self['getCurve']()['setLegendLabel']('outside right pie');
			self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'PIE_SLICE_HATCHED_SHADING'));
			self['getCurve']()['getSymbol']()['setFillThickness'](1);
			self['getCurve']()['getSymbol']()['setWidth'](100);
			self['getCurve']()['getSymbol']()['setHeight'](0);
			self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y2_AXIS'));
			self['getCurve']()['addPoint'](95, 0);
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['addCurve']();
			if ((($bool6=testCanvas) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['getCurve']()['getSymbol']()['setFillSpacing'](0);
			}
			self['getCurve']()['setLegendLabel']('outside bottom pie');
			self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'PIE_SLICE_VERTICAL_SHADING'));
			self['getCurve']()['getSymbol']()['setFillThickness'](1);
			self['getCurve']()['getSymbol']()['setWidth'](100);
			self['getCurve']()['getSymbol']()['setHeight'](0);
			self['getCurve']()['setYAxis']($p['getattr']($m['GChartConsts'], 'Y_AXIS'));
			self['getCurve']()['addPoint'](45, (typeof ($usub6=95)=='number'?
				-$usub6:
				$p['op_usub']($usub6)));
			self['getCurve']()['getPoint']()['setAnnotationText'](self['getCurve']()['getPoint']()['getHovertext']());
			self['getXAxis']()['setAxisLabel']('<small><small><small>X</small></small></small>');
			self['getXAxis']()['setTickCount'](0);
			self['getXAxis']()['setAxisMin'](0.0);
			self['getXAxis']()['setAxisMax'](90.0);
			self['getYAxis']()['setAxisMin']((typeof ($usub7=90.0)=='number'?
				-$usub7:
				$p['op_usub']($usub7)));
			self['getYAxis']()['setAxisMax'](0.0);
			self['getY2Axis']()['setAxisMin']((typeof ($usub8=45.0)=='number'?
				-$usub8:
				$p['op_usub']($usub8)));
			self['getY2Axis']()['setAxisMax'](45);
			return null;
		}
	, 1, [null,null,['self'],['testCanvas']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['GChart']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TestGChart05', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end TestGChart05 */


/* end module: TestGChart05 */


/*
PYJS_DEPS: ['GChartTestAppUtil', 'pyjamas.chart.GChart.GChart', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart', 'pyjamas.chart.GChartConsts', 'pyjamas.chart.SymbolType']
*/
