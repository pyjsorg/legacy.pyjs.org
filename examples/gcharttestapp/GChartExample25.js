/* start module: GChartExample25 */
$pyjs.loaded_modules['GChartExample25'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample25'].__was_initialized__) return $pyjs.loaded_modules['GChartExample25'];
	var $m = $pyjs.loaded_modules["GChartExample25"];
	$m.__repr__ = function() { return "<module: GChartExample25>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample25';
	$m.__name__ = __mod_name__;


	$m['math'] = $p['___import___']('math', null);
	$m['GChartUtil'] = $p['___import___']('pyjamas.chart.GChartUtil', null, null, false);
	$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
	$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', null, null, false);
	$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['N_POINTS'] = 100;
	$m['BLUE'] = '#318ce0';
	$m['SKY_BLUE'] = '#c6defa';
	$m['ChildGChart'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample25';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div1,$iter1_nextval,$iter1_type,i,$iter1_iter,$add2,$add1,$iter1_array,$div2,$mul4,$mul3,$mul2,$mul1,$iter1_idx;
			$m['GChart']['__init__'](self);
			self['setChartTitle']('Click on chart, then use left/right arrows to switch selected point');
			self['setHoverTouchingEnabled'](true);
			self['setChartSize'](500, 150);
			self['setPadding']('10px');
			self['getXAxis']()['setTickCount'](11);
			self['getYAxis']()['setTickCount'](11);
			self['addCurve']();
			$iter1_iter = $p['range']((typeof ($add1=$m['N_POINTS'])==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
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
				i = $iter1_nextval;
				self['getCurve']()['addPoint'](i, $m['math']['sin']((typeof ($div1=(typeof ($mul3=(typeof ($mul1=2)==typeof ($mul2=$p['getattr']($m['math'], 'pi')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($mul4=i) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)))==typeof ($div2=$m['N_POINTS']) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))));
			}
			self['getCurve']()['getSymbol']()['setWidth'](5);
			self['getCurve']()['getSymbol']()['setBorderColor']($m['BLUE']);
			self['getCurve']()['getSymbol']()['setBackgroundColor']($m['SKY_BLUE']);
			self['getCurve']()['getSymbol']()['setHoverSelectionBackgroundColor']($m['BLUE']);
			self['getCurve']()['getSymbol']()['setHoverSelectionBorderColor']($m['SKY_BLUE']);
			self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'VBAR_BASELINE_CENTER'));
			self['getCurve']()['getSymbol']()['setHoverLocation']($p['getattr']($m['AnnotationLocation'], 'NORTH'));
			self['getCurve']()['getSymbol']()['setHoverYShift'](5);
			self['setPixelSize'](self['getXChartSizeDecorated'](), self['getYChartSizeDecorated']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['GChart']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ChildGChart', $p['tuple']($bases), $data);
	})();
	$m['GChartExample25'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample25';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['FocusPanel']['__init__'](self);
			self.theChild = $m['ChildGChart']();
			self['theChild']['update']();
			self['setWidget']($p['getattr'](self, 'theChild'));
			self['addKeyboardListener'](self);
			self['addMouseListener'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var $mod4,$mod1,$mod3,$mod2,event,iPoint,$add3,$eq2,$eq3,$eq1,$eq4,$bool2,$bool3,$bool1,$add10,$bool4,c,p,$add6,$add7,$add4,$add5,$add8,$add9;
			event = $m['DOM']['eventGetCurrentEvent']();
			$m['DOM']['eventPreventDefault'](event);
			if ((($bool1=self['theChild']['getHoverTouchingEnabled']()) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['theChild']['setHoverTouchingEnabled'](false);
			}
			p = self['theChild']['getTouchedPoint']();
			c = self['theChild']['getCurve']();
			iPoint = 0;
			if ((($bool2=(p !== null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				iPoint = c['getPointIndex'](p);
			}
			if ((($bool3=(($eq1=keycode)===($eq2=$p['getattr']($m['KeyboardListener'], 'KEY_LEFT'))&&$eq1===null?true:
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
				iPoint = (typeof ($mod1=(typeof ($add3=iPoint)==typeof ($add4=$m['N_POINTS']) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))==typeof ($mod2=(typeof ($add5=$m['N_POINTS'])==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2));
			}
			else if ((($bool4=(($eq3=keycode)===($eq4=$p['getattr']($m['KeyboardListener'], 'KEY_RIGHT'))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				iPoint = (typeof ($mod3=(typeof ($add7=iPoint)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)))==typeof ($mod4=(typeof ($add9=$m['N_POINTS'])==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10))) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4));
			}
			self['theChild']['touch'](c['getPoint'](iPoint));
			self['theChild']['update']();
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $bool6,$bool5,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			$m['DOM']['eventPreventDefault'](event);
			if ((($bool6=!(($bool5=self['theChild']['getHoverTouchingEnabled']()) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5.__nonzero__=='function'?
						$bool5.__nonzero__() :
						(typeof $bool5.__len__=='function'?
							($bool5.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self['theChild']['setHoverTouchingEnabled'](true);
				self['theChild']['update']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('setOptimizeForMemory', function(optimize) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				optimize = arguments[1];
			}

			self['theChild']['setOptimizeForMemory'](optimize);
			return null;
		}
	, 1, [null,null,['self'],['optimize']]);
		$cls_definition['setOptimizeForMemory'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['theChild']['update']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['FocusPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GChartExample25', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end GChartExample25 */


/* end module: GChartExample25 */


/*
PYJS_DEPS: ['math', 'pyjamas.chart.GChartUtil', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart.GChart', 'pyjamas.chart.GChart', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.SymbolType', 'pyjamas.ui.Button.Button', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.KeyboardListener', 'pyjamas.DOM']
*/
