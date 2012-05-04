/* start module: GChartExample06 */
$pyjs.loaded_modules['GChartExample06'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample06'].__was_initialized__) return $pyjs.loaded_modules['GChartExample06'];
	var $m = $pyjs.loaded_modules["GChartExample06"];
	$m.__repr__ = function() { return "<module: GChartExample06>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample06';
	$m.__name__ = __mod_name__;


	$m['formatAsHovertext'] = $p['___import___']('pyjamas.chart.HovertextChunk.formatAsHovertext', null, null, false);
	$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
	$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', null, null, false);
	$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
	$m['GChartExample06'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample06';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_iter,colors,sum,percent,$iter1_array,$11,$sub3,$sub2,$sub1,SIZE,$sub4,$iter1_nextval,ht,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$10,$iter1_type,$12,$13,i,region,$add2,$add1,$iter1_idx,$len1;
			$m['GChart']['__init__'](self);
			self['setChartTitle']('<b><i>Market Share by Region</i></b>');
			SIZE = 200;
			self['setChartSize'](SIZE, SIZE);
			region = $p['list'](['USA', 'Canada', 'Mexico', 'India', 'France', 'Iceland']);
			percent = $p['list']([35, 25, 15, 10, 10, 5]);
			colors = $p['list'](['red', 'green', 'yellow', 'fuchsia', 'silver', 'aqua']);
			sum = 0;
			$iter1_iter = $p['range']((typeof ($sub1=(($len1=percent) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)), (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				self['addCurve']();
				self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'BOX_SOUTHEAST'));
				self['getCurve']()['getSymbol']()['setModelHeight']((typeof ($1=percent).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i)));
				self['getCurve']()['getSymbol']()['setBackgroundColor']((typeof ($3=colors).__array != 'undefined'?
					((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(i)));
				self['getCurve']()['getSymbol']()['setBorderColor']((typeof ($5=colors).__array != 'undefined'?
					((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(i)));
				self['getCurve']()['getSymbol']()['setWidth'](SIZE);
				self['getCurve']()['getSymbol']()['setHoverAnnotationSymbolType']($p['getattr']($m['SymbolType'], 'ANCHOR_MOUSE_SNAP_TO_Y'));
				self['getCurve']()['getSymbol']()['setHoverLocation']($p['getattr']($m['AnnotationLocation'], 'SOUTHEAST'));
				ht = $p['sprintf']('%s, %d%%', $p['tuple']([(typeof ($7=region).__array != 'undefined'?
					((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(i)), (typeof ($9=percent).__array != 'undefined'?
					((typeof $9.__array[$10=i]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(i))]));
				ht = $m['formatAsHovertext'](ht);
				self['getCurve']()['getSymbol']()['setHovertextTemplate'](ht);
				self['getCurve']()['setLegendLabel']((typeof ($11=region).__array != 'undefined'?
					((typeof $11.__array[$12=i]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(i)));
				self['getCurve']()['addPoint'](0, (typeof ($sub3=100)==typeof ($sub4=sum) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)));
				self['getCurve']()['getPoint']()['setAnnotationText']((typeof ($13=region).__array != 'undefined'?
					((typeof $13.__array[$14=i]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__(i)));
				self['getCurve']()['getPoint']()['setAnnotationFontWeight']('bold');
				self['getCurve']()['getPoint']()['setAnnotationLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
				sum = (typeof ($add1=sum)==typeof ($add2=(typeof ($15=percent).__array != 'undefined'?
					((typeof $15.__array[$16=i]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(i))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
			self['getXAxis']()['setTickCount'](0);
			self['getXAxis']()['setTickThickness'](0);
			self['getXAxis']()['setAxisMin'](0);
			self['getXAxis']()['setAxisMax'](SIZE);
			self['getYAxis']()['setTickCount'](0);
			self['getYAxis']()['setTickThickness'](0);
			self['getYAxis']()['setAxisMin'](0);
			self['getYAxis']()['setAxisMax'](100);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['GChart']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GChartExample06', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end GChartExample06 */


/* end module: GChartExample06 */


/*
PYJS_DEPS: ['pyjamas.chart.HovertextChunk.formatAsHovertext', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.HovertextChunk', 'pyjamas.chart.GChart.GChart', 'pyjamas.chart.GChart', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.SymbolType']
*/
