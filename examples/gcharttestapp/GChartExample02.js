/* start module: GChartExample02 */
$pyjs.loaded_modules['GChartExample02'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample02'].__was_initialized__) return $pyjs.loaded_modules['GChartExample02'];
	var $m = $pyjs.loaded_modules["GChartExample02"];
	$m.__repr__ = function() { return "<module: GChartExample02>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample02';
	$m.__name__ = __mod_name__;


	$m['rnd'] = $p['___import___']('GChartTestAppUtil.rnd', null, null, false);
	$m['formatAsHovertext'] = $p['___import___']('pyjamas.chart.HovertextChunk.formatAsHovertext', null, null, false);
	$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
	$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', null, null, false);
	$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['groupLabels'] = $p['list'](['<html>2004<br><small><small>O Floor', '<html>2005<br><small><small>O Survive!', '<html>2006<br><small><small>O Sucks!', '<html>2007<br><small><small>O Seven', '<html>2008<br><small><small>Owe Ate', '<html>2009<br><i><small><small>Oh Nein!']);
	$m['barLabels'] = $p['list'](['Q1', 'Q2', 'Q3', 'Q4']);
	$m['barColors'] = $p['list'](['red', 'blue', 'green', 'silver']);
	$m['MAX_REVENUE'] = 1000;
	$m['WIDTH'] = 500.0;
	$m['HEIGHT'] = 400.0;
	$m['GChartExample02'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample02';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $8,$iter3_array,$iter1_iter,$div2,$mul6,$iter2_type,$mul5,$len6,$mul4,$9,$iter2_iter,iCurve,$mul3,$iter3_nextval,$iter3_iter,$mul2,$len5,$iter1_array,$len3,$len2,$add7,$iter1_nextval,$len1,$div1,$add13,$add15,$iter2_idx,$iter3_idx,$add10,$add11,$add12,$iter3_type,$6,$7,$4,$5,$2,$3,$mul1,$1,$add14,$iter2_nextval,$10,$iter1_type,i,$add16,$add2,$add3,$len4,$add1,$add6,$iter1_idx,$add4,$add5,y,$add8,$add9,jGroup,$iter2_array;
			$m['GChart']['__init__'](self);
			self.updateButton = $m['Button']('<b><big>Generate New Simulated Revenues</big></b>');
			self['setChartSize']($m['WIDTH'], $m['HEIGHT']);
			self['setChartTitle']((typeof ($add3=(typeof ($add1='<b><big><big>')==typeof ($add2='Simulated Quarterly Revenues') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($add4='</big></big><br>&nbsp;</b>') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
			self['updateButton']['addClickListener'](self);
			self['setChartFootnotes']($p['getattr'](self, 'updateButton'));
			$iter1_iter = $p['range']((($len1=$m['barLabels']) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				iCurve = $iter1_nextval;
				self['addCurve']();
				self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'VBAR_SOUTHWEST'));
				self['getCurve']()['getSymbol']()['setBackgroundColor']((typeof ($1=$m['barColors']).__array != 'undefined'?
					((typeof $1.__array[$2=iCurve]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(iCurve)));
				self['getCurve']()['setLegendLabel']((typeof ($3=$m['barLabels']).__array != 'undefined'?
					((typeof $3.__array[$4=iCurve]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(iCurve)));
				self['getCurve']()['getSymbol']()['setHovertextTemplate']($m['formatAsHovertext']((typeof ($add5=(typeof ($5=$m['barLabels']).__array != 'undefined'?
					((typeof $5.__array[$6=iCurve]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(iCurve)))==typeof ($add6=' revenue=${y}') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))));
				self['getCurve']()['getSymbol']()['setModelWidth'](1.0);
				self['getCurve']()['getSymbol']()['setBorderColor']('black');
				self['getCurve']()['getSymbol']()['setBorderWidth'](1);
				$iter2_iter = $p['range']((($len2=$m['groupLabels']) === null?0:
					(typeof $len2.__array != 'undefined' ? $len2.__array.length:
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'?$len2.length:
								$p['len']($len2))))));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					jGroup = $iter2_nextval;
					y = (typeof ($mul1=$m['rnd']())==typeof ($mul2=$m['MAX_REVENUE']) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2));
					self['getCurve']()['addPoint']((typeof ($add11=(typeof ($add7=1)==typeof ($add8=iCurve) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)))==typeof ($add12=(typeof ($mul3=jGroup)==typeof ($mul4=(typeof ($add9=(($len3=$m['barLabels']) === null?0:
						(typeof $len3.__array != 'undefined' ? $len3.__array.length:
							(typeof $len3.__len__ == 'function'?$len3.__len__():
								(typeof $len3.length != 'undefined'?$len3.length:
									$p['len']($len3))))))==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10))) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4))) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)), y);
					self['getCurve']()['getPoint']()['setAnnotationText']((typeof ($7=$m['barLabels']).__array != 'undefined'?
						((typeof $7.__array[$8=iCurve]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(iCurve)));
					self['getCurve']()['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'NORTH'));
				}
			}
			$iter3_iter = $p['range']((($len4=$m['groupLabels']) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4))))));
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				self['getXAxis']()['addTick']((typeof ($add15=(typeof ($div1=(($len5=$m['barLabels']) === null?0:
					(typeof $len5.__array != 'undefined' ? $len5.__array.length:
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'?$len5.length:
								$p['len']($len5))))))==typeof ($div2=2.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))==typeof ($add16=(typeof ($mul5=i)==typeof ($mul6=(typeof ($add13=(($len6=$m['barLabels']) === null?0:
					(typeof $len6.__array != 'undefined' ? $len6.__array.length:
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'?$len6.length:
								$p['len']($len6))))))==typeof ($add14=1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)), (typeof ($9=$m['groupLabels']).__array != 'undefined'?
					((typeof $9.__array[$10=i]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(i)));
			}
			self['getXAxis']()['setTickLabelFontSize'](20.0);
			self['getXAxis']()['setTickLabelThickness'](40.0);
			self['getXAxis']()['setTickLength'](6.0);
			self['getXAxis']()['setTickThickness'](0);
			self['getXAxis']()['setAxisMin'](0);
			self['getYAxis']()['setAxisMin'](0);
			self['getYAxis']()['setAxisMax']($m['MAX_REVENUE']);
			self['getYAxis']()['setTickCount'](11);
			self['getYAxis']()['setHasGridlines'](true);
			self['getYAxis']()['setTickLabelFormat']('$#,###');
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
			var $iter5_nextval,$iter5_idx,iPoint,iCurve,$iter4_nextval,$mul8,$iter4_idx,$mul7,$iter5_iter,$iter4_type,$iter5_array,$iter4_array,$iter5_type,$iter4_iter;
			$iter4_iter = $p['range'](self['getNCurves']());
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				iCurve = $iter4_nextval;
				$iter5_iter = $p['range'](self['getCurve'](iCurve)['getNPoints']());
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					iPoint = $iter5_nextval;
					self['getCurve'](iCurve)['getPoint'](iPoint)['setY']((typeof ($mul7=$m['rnd']())==typeof ($mul8=$m['MAX_REVENUE']) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)));
				}
			}
			self['update']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['GChart']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GChartExample02', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end GChartExample02 */


/* end module: GChartExample02 */


/*
PYJS_DEPS: ['GChartTestAppUtil.rnd', 'GChartTestAppUtil', 'pyjamas.chart.HovertextChunk.formatAsHovertext', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.HovertextChunk', 'pyjamas.chart.GChart.GChart', 'pyjamas.chart.GChart', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.SymbolType', 'pyjamas.ui.Button.Button', 'pyjamas.ui', 'pyjamas.ui.Button']
*/
