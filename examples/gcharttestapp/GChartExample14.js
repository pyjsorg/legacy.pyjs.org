/* start module: GChartExample14 */
$pyjs.loaded_modules['GChartExample14'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample14'].__was_initialized__) return $pyjs.loaded_modules['GChartExample14'];
	var $m = $pyjs.loaded_modules["GChartExample14"];
	$m.__repr__ = function() { return "<module: GChartExample14>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample14';
	$m.__name__ = __mod_name__;


	$m['math'] = $p['___import___']('math', null);
	$m['GChartUtil'] = $p['___import___']('pyjamas.chart.GChartUtil', null, null, false);
	$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
	$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', null, null, false);
	$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
	$m['Double'] = $p['___import___']('pyjamas.chart.Double', null, null, false);
	$m['DeferredCommand'] = $p['___import___']('pyjamas.DeferredCommand', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['PERIOD'] = 100;
	$m['N_PERIODS'] = 5;
	$m['DELTA_TIME'] = 1;
	$m['DELTA_PHASE'] = 8;
	$m['firstTime'] = true;
	$m['IncrementalUpdate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample14';
		$method = $pyjs__bind_method2('__init__', function(gchart, iCurve, phaseShift, n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gchart = arguments[1];
				iCurve = arguments[2];
				phaseShift = arguments[3];
				n = arguments[4];
			}

			self.gchart = gchart;
			self.iCurve = iCurve;
			self.phaseShift = phaseShift;
			self.n = n;
			return null;
		}
	, 1, [null,null,['self'],['gchart'],['iCurve'],['phaseShift'],['n']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('execute', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_iter,$mul7,$div3,$iter2_type,$div1,$iter2_iter,$iter1_array,$div4,iC,$add7,$iter1_nextval,$bool2,$iter2_idx,$bool1,$add10,$mul9,$mul8,$div2,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$cmp4,$iter2_nextval,$cmp1,$iter1_type,$cmp3,$cmp2,i,$mul10,$add2,$add3,$add1,$add6,$iter1_idx,$add4,$add5,y,$add8,$add9,$iter2_array;
			$iter1_iter = $p['range']($p['getattr'](self, 'iCurve'), (typeof ($add1=$p['getattr'](self, 'iCurve'))==typeof ($add2=$p['getattr'](self, 'n')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				iC = $iter1_nextval;
				if ((($bool1=((($cmp1=self['gchart']['getNCurves']())===($cmp2=$p['getattr'](self, 'iCurve'))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) < 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['gchart']['addCurve']();
					self['gchart']['getCurve']()['getSymbol']()['setSymbolType'](self['gchart']['getCurve'](0)['getSymbol']()['getSymbolType']());
					self['gchart']['getCurve']()['getSymbol']()['setBorderWidth'](self['gchart']['getCurve'](0)['getSymbol']()['getBorderWidth']());
					self['gchart']['getCurve']()['getSymbol']()['setBackgroundColor'](self['gchart']['getCurve'](0)['getSymbol']()['getBackgroundColor']());
					self['gchart']['getCurve']()['getSymbol']()['setFillSpacing'](self['gchart']['getCurve'](0)['getSymbol']()['getFillSpacing']());
					self['gchart']['getCurve']()['getSymbol']()['setFillThickness'](self['gchart']['getCurve'](0)['getSymbol']()['getFillThickness']());
					self['gchart']['getCurve']()['getSymbol']()['setHeight'](self['gchart']['getCurve'](0)['getSymbol']()['getHeight']());
					self['gchart']['getCurve']()['getSymbol']()['setWidth'](self['gchart']['getCurve'](0)['getSymbol']()['getWidth']());
				}
				$iter2_iter = $p['range'](0, $m['PERIOD'], $m['DELTA_TIME']);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					i = $iter2_nextval;
					y = $m['math']['sin']((typeof ($div1=(typeof ($mul5=(typeof ($mul1=2)==typeof ($mul2=$p['getattr']($m['math'], 'pi')) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)))==typeof ($mul6=(typeof ($add5=(typeof ($add3=(typeof ($mul3=iC)==typeof ($mul4=$m['PERIOD']) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)))==typeof ($add4=i) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)))==typeof ($add6=$p['getattr'](self, 'phaseShift')) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6))) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)))==typeof ($div2=$m['PERIOD']) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2)));
					if ((($bool2=((($cmp3=(typeof ($mul7=self['gchart']['getCurve'](iC)['getNPoints']())==typeof ($mul8=$m['DELTA_TIME']) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)))===($cmp4=i)?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) < 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
						self['gchart']['getCurve'](iC)['addPoint']((typeof ($add9=(typeof ($add7=(typeof ($mul9=iC)==typeof ($mul10=$m['PERIOD']) && typeof $mul9=='number'?
							$mul9*$mul10:
							$p['op_mul']($mul9,$mul10)))==typeof ($add8=i) && (typeof $add7=='number'||typeof $add7=='string')?
							$add7+$add8:
							$p['op_add']($add7,$add8)))==typeof ($add10=$p['getattr'](self, 'phaseShift')) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10)), y);
					}
					else {
						self['gchart']['getCurve'](iC)['getPoint']((typeof ($div3=i)==typeof ($div4=$m['DELTA_TIME']) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4)))['setY'](y);
					}
				}
			}
			self['gchart']['update']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['execute'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('IncrementalUpdate', $p['tuple']($bases), $data);
	})();
	$m['GChartExample14'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample14';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,$mul12,$mul11,i,$iter3_array,$iter3_iter,$iter3_type,$iter3_nextval;
			$m['GChart']['__init__'](self);
			self.phase = 0;
			self.btn = $m['Button']('Update', self);
			self['setChartFootnotes']($p['getattr'](self, 'btn'));
			self['setChartSize'](1000, 100);
			self['setChartTitle']('<big><i>Sine vs Time</i></big>');
			self['setPadding']('2px');
			self['getXAxis']()['setAxisLabel']('<small><i>Time (seconds)</i></small>');
			self['getXAxis']()['setHasGridlines'](true);
			self['getXAxis']()['setTickCount'](6);
			self['getXAxis']()['setTickLabelFormat']('#.##');
			self['getXAxis']()['setAxisMin'](0);
			self['getXAxis']()['setAxisMax']((typeof ($mul11=$m['PERIOD'])==typeof ($mul12=$m['N_PERIODS']) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)));
			self['getYAxis']()['setHasGridlines'](true);
			self['getYAxis']()['setTickCount'](5);
			self['getYAxis']()['setAxisMin']((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			self['getYAxis']()['setAxisMax'](1);
			self['getYAxis']()['setTickLabelThickness'](10);
			self['addCurve']();
			self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'VBAR_BASELINE_CENTER'));
			self['getCurve']()['getSymbol']()['setBorderWidth'](0);
			self['getCurve']()['getSymbol']()['setBackgroundColor']('blue');
			self['getCurve']()['getSymbol']()['setFillSpacing']($p['getattr']($m['Double'], 'NaN'));
			self['getCurve']()['getSymbol']()['setFillThickness'](0);
			self['getCurve']()['getSymbol']()['setHeight'](1);
			self['getCurve']()['getSymbol']()['setWidth'](1);
			$iter3_iter = $p['range']($m['N_PERIODS']);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				$m['DeferredCommand']['add']($m['IncrementalUpdate'](self, i, 0, 1));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter4_type,i,$iter4_nextval,$iter4_idx,$add11,$add12,$iter4_array,$iter4_iter;
			self.phase = (typeof ($add11=$p['getattr'](self, 'phase'))==typeof ($add12=$m['DELTA_PHASE']) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			$iter4_iter = $p['range']($m['N_PERIODS']);
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				$m['DeferredCommand']['add']($m['IncrementalUpdate'](self, i, $p['getattr'](self, 'phase'), 1));
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['GChart']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GChartExample14', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end GChartExample14 */


/* end module: GChartExample14 */


/*
PYJS_DEPS: ['math', 'pyjamas.chart.GChartUtil', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart.GChart', 'pyjamas.chart.GChart', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.SymbolType', 'pyjamas.chart.Double', 'pyjamas.DeferredCommand', 'pyjamas.ui.Button.Button', 'pyjamas.ui', 'pyjamas.ui.Button']
*/
