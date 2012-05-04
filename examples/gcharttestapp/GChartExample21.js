/* start module: GChartExample21 */
$pyjs.loaded_modules['GChartExample21'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample21'].__was_initialized__) return $pyjs.loaded_modules['GChartExample21'];
	var $m = $pyjs.loaded_modules["GChartExample21"];
	$m.__repr__ = function() { return "<module: GChartExample21>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample21';
	$m.__name__ = __mod_name__;


	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
	$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', null, null, false);
	$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
	$m['YChanger'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample21';
		$method = $pyjs__bind_method2('__init__', function(chart) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				chart = arguments[1];
			}

			self.chart = chart;
			$m['HorizontalPanel']['__init__'](self);
			self.incrementY = $m['Button']('Increment Y');
			self.coordinates = $m['HTML']('');
			self.decrementY = $m['Button']('Decrement Y');
			self['incrementY']['addClickListener'](self);
			self['decrementY']['addClickListener'](self);
			self['add']($p['getattr'](self, 'incrementY'));
			self['add']($p['getattr'](self, 'coordinates'));
			self['add']($p['getattr'](self, 'decrementY'));
			return null;
		}
	, 1, [null,null,['self'],['chart']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $eq2,$eq1,$add2,$bool1,$sub2,$sub1,$add1;
			if ((($bool1=(($eq1=sender)===($eq2=$p['getattr'](self, 'incrementY'))&&$eq1===null?true:
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
				self['chart']['getTouchedPoint']()['setY']((typeof ($add1=self['chart']['getTouchedPoint']()['getY']())==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)));
			}
			else {
				self['chart']['getTouchedPoint']()['setY']((typeof ($sub1=self['chart']['getTouchedPoint']()['getY']())==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)));
			}
			self['chart']['update']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('hoverCleanup', function(hoveredAwayFrom) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hoveredAwayFrom = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['hoveredAwayFrom']]);
		$cls_definition['hoverCleanup'] = $method;
		$method = $pyjs__bind_method2('hoverUpdate', function(hoveredOver) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hoveredOver = arguments[1];
			}

			self['coordinates']['setHTML'](hoveredOver['getHovertext']());
			return null;
		}
	, 1, [null,null,['self'],['hoveredOver']]);
		$cls_definition['hoverUpdate'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('YChanger', $p['tuple']($bases), $data);
	})();
	$m['GChartExample21'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample21';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,iPoint,$iter1_iter,$iter1_array,$mul2,$mul1,$iter1_idx;
			$m['GChart']['__init__'](self);
			self['setChartSize'](300, 300);
			self['setBorderStyle']('none');
			self['setHoverTouchingEnabled'](false);
			self['addCurve']();
			self['getCurve']()['getSymbol']()['setHoverWidget']($m['YChanger'](self));
			self['getCurve']()['getSymbol']()['setHoverAnnotationSymbolType']($p['getattr']($m['SymbolType'], 'ANCHOR_SOUTH'));
			self['getCurve']()['getSymbol']()['setHoverLocation']($p['getattr']($m['AnnotationLocation'], 'SOUTH'));
			self['getCurve']()['getSymbol']()['setHoverYShift']((typeof ($usub1=30)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			self['getCurve']()['getSymbol']()['setHoverSelectionBorderWidth']((typeof ($usub2=3)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'VBAR_BASELINE_EAST'));
			self['getCurve']()['getSymbol']()['setModelWidth'](1);
			self['getCurve']()['getSymbol']()['setBorderWidth'](1);
			self['getCurve']()['getSymbol']()['setBorderColor']('black');
			self['getCurve']()['getSymbol']()['setBackgroundColor']('blue');
			$iter1_iter = $p['range'](10);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				iPoint = $iter1_nextval;
				self['getCurve']()['addPoint'](iPoint, (typeof ($mul1=2)==typeof ($mul2=iPoint) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['GChart']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GChartExample21', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end GChartExample21 */


/* end module: GChartExample21 */


/*
PYJS_DEPS: ['pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.chart.GChart.GChart', 'pyjamas.chart', 'pyjamas.chart.GChart', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.SymbolType']
*/
