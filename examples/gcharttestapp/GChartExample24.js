/* start module: GChartExample24 */
$pyjs.loaded_modules['GChartExample24'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartExample24'].__was_initialized__) return $pyjs.loaded_modules['GChartExample24'];
	var $m = $pyjs.loaded_modules["GChartExample24"];
	$m.__repr__ = function() { return "<module: GChartExample24>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartExample24';
	$m.__name__ = __mod_name__;


	$m['GChartUtil'] = $p['___import___']('pyjamas.chart.GChartUtil', null, null, false);
	$m['GChart'] = $p['___import___']('pyjamas.chart.GChart.GChart', null, null, false);
	$m['AnnotationLocation'] = $p['___import___']('pyjamas.chart.AnnotationLocation', null, null, false);
	$m['SymbolType'] = $p['___import___']('pyjamas.chart.SymbolType', null, null, false);
	$m['Double'] = $p['___import___']('pyjamas.chart.Double', null, null, false);
	$m['math'] = $p['___import___']('math', null);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['MouseListener'] = $p['___import___']('pyjamas.ui.MouseListener', null, null, false);
	$m['Point'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample24';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.x = 0;
			self.y = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Point', $p['tuple']($bases), $data);
	})();
	$m['Region'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample24';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.xMin = 0;
			self.xMax = 0;
			self.yMin = 0;
			self.yMax = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Region', $p['tuple']($bases), $data);
	})();
	$m['ZoomController'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample24';
		$method = $pyjs__bind_method2('__init__', function(chart) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				chart = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof chart != 'undefined') {
					if (chart !== null && typeof chart['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = chart;
						chart = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self.chart = chart;
			$pyjs_kwargs_call($m['HorizontalPanel'], '__init__', null, kwargs, [{}, self]);
			self.bzoomIn = $m['Button']('<big>+</big>', self);
			self.bzoomOut = $m['Button']('<big>-</big>', self);
			self['bzoomIn']['setTitle']('Zoom in (expands selected region so it fills plot area)');
			self['bzoomOut']['setTitle']('Zoom out (shrinks plot area so it fits in selected region)');
			self['add']($p['getattr'](self, 'bzoomIn'));
			self['add']($p['getattr'](self, 'bzoomOut'));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['chart']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $eq2,$bool1,$eq1;
			if ((($bool1=(($eq1=sender)===($eq2=$p['getattr'](self, 'bzoomIn'))&&$eq1===null?true:
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
				self['chart']['zoomIn']();
			}
			else {
				self['chart']['zoomOut']();
			}
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

 			return null;
		}
	, 1, [null,null,['self'],['hoveredOver']]);
		$cls_definition['hoverUpdate'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ZoomController', $p['tuple']($bases), $data);
	})();
	$m['MIN_SELECTION_FRACTION_X'] = 0.1;
	$m['MIN_SELECTION_FRACTION_Y'] = 0.1;
	$m['N_POINTS'] = 100;
	$m['GChartExample24'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartExample24';
		$method = $pyjs__bind_method2('updateCursor', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var dx,$bool5,xMax,$div1,$sub9,$sub8,$div4,$sub12,$sub3,$sub2,$sub1,yMin,$sub7,$sub6,$sub5,$sub4,$sub10,yMax,$sub13,$and1,$and2,$and3,$sub16,$sub15,$sub14,$bool2,$bool3,$bool6,$bool7,$bool4,dy,$div2,$div3,$mul4,$mul3,$mul2,$mul1,$cmp4,$cmp1,$cmp3,$cmp2,xMin,$add2,$add3,$add1,$add4,$sub11;
			dx = (typeof ($sub1=$p['getattr']($p['getattr'](self, 'p2'), 'x'))==typeof ($sub2=$p['getattr']($p['getattr'](self, 'p1'), 'x')) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			dy = (typeof ($sub3=$p['getattr']($p['getattr'](self, 'p2'), 'y'))==typeof ($sub4=$p['getattr']($p['getattr'](self, 'p1'), 'y')) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			if ((($bool5=((($bool3=$and1=!(($bool2=$p['getattr'](self, 'moving')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool4=$and2=((((($cmp1=$p['abs'](dx))===($cmp2=(typeof ($mul1=$m['MIN_SELECTION_FRACTION_X'])==typeof ($mul2=(typeof ($sub5=self['getXAxis']()['getAxisMax']())==typeof ($sub6=self['getXAxis']()['getAxisMin']()) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6))) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((((($cmp3=$p['abs'](dy))===($cmp4=(typeof ($mul3=$m['MIN_SELECTION_FRACTION_Y'])==typeof ($mul4=(typeof ($sub7=self['getYAxis']()['getAxisMax']())==typeof ($sub8=self['getYAxis']()['getAxisMin']()) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8))) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1):$and2):$and1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['setVisible'](true);
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'BOX_CENTER'));
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['getSymbol']()['setBorderColor']('gray');
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['getSymbol']()['setBorderWidth'](2);
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['getSymbol']()['setModelWidth']($p['abs'](dx));
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['getSymbol']()['setModelHeight']($p['abs'](dy));
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['getPoint'](0)['setX']((typeof ($div1=(typeof ($add1=$p['getattr']($p['getattr'](self, 'p1'), 'x'))==typeof ($add2=$p['getattr']($p['getattr'](self, 'p2'), 'x')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)));
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['getPoint'](0)['setY']((typeof ($div3=(typeof ($add3=$p['getattr']($p['getattr'](self, 'p1'), 'y'))==typeof ($add4=$p['getattr']($p['getattr'](self, 'p2'), 'y')) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)));
			}
			else if ((($bool6=$p['getattr'](self, 'moving')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				if ((($bool7=self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['isVisible']()) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
						false :
						(typeof $bool7=='object'?
							(typeof $bool7.__nonzero__=='function'?
								$bool7.__nonzero__() :
								(typeof $bool7.__len__=='function'?
									($bool7.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['setVisible'](false);
				}
				xMin = (typeof ($sub9=self['getXAxis']()['getAxisMin']())==typeof ($sub10=dx) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10));
				xMax = (typeof ($sub11=self['getXAxis']()['getAxisMax']())==typeof ($sub12=dx) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					$p['op_sub']($sub11,$sub12));
				yMin = (typeof ($sub13=self['getYAxis']()['getAxisMin']())==typeof ($sub14=dy) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$p['op_sub']($sub13,$sub14));
				yMax = (typeof ($sub15=self['getYAxis']()['getAxisMax']())==typeof ($sub16=dy) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16));
				self['getXAxis']()['setAxisMin'](xMin);
				self['getXAxis']()['setAxisMax'](xMax);
				self['getYAxis']()['setAxisMin'](yMin);
				self['getYAxis']()['setAxisMax'](yMax);
			}
			self['update']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateCursor'] = $method;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_iter,$iter1_array,$div5,$mul20,$mul17,$sub18,$iter1_nextval,$sub17,$div8,$mul9,$mul8,$mul7,$mul6,$mul5,$div6,$div7,$iter1_type,a,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,i,$mul19,$mul18,$iter1_idx;
			$m['GChart']['__init__'](self);
			self.SELECTION_CURVE = 0;
			self.p1 = $m['Point']();
			self.p2 = $m['Point']();
			self.selecting = false;
			self.moving = false;
			self.ctrlPressed = false;
			self.altPressed = false;
			self.zoomIndex = 0;
			self.zoomController = $m['ZoomController'](self);
			self.initialPlotRegion = $m['Region']();
			self.initialSelectionRegion = $m['Region']();
			self['setChartTitle']('Drag to pan; Press Ctrl while drag-selecting a rectangle to zoom');
			self['setChartSize'](500, 150);
			a = $m['Hyperlink']('huh?');
			a['setPixelSize'](10, 500);
			self['getYAxis']()['setAxisLabel'](a);
			self['setClipToPlotArea'](true);
			self['addCurve']();
			$iter1_iter = $p['range']($m['N_POINTS']);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				self['getCurve']()['addPoint'](i, (typeof ($mul15=$m['math']['sin']((typeof ($div5=(typeof ($mul7=(typeof ($mul5=2)==typeof ($mul6=$p['getattr']($m['math'], 'pi')) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)))==typeof ($mul8=i) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))==typeof ($div6=$m['N_POINTS']) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6))))==typeof ($mul16=$m['math']['sin']((typeof ($div7=(typeof ($mul13=10)==typeof ($mul14=(typeof ($mul11=(typeof ($mul9=2)==typeof ($mul10=$p['getattr']($m['math'], 'pi')) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)))==typeof ($mul12=i) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12))) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))==typeof ($div8=$m['N_POINTS']) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)))) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)));
			}
			self['getCurve']()['getSymbol']()['setSymbolType']($p['getattr']($m['SymbolType'], 'LINE'));
			self['addCurve']();
			self['getCurve']()['addPoint']((typeof ($usub1=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub1:
				$p['op_usub']($usub1)), (typeof ($usub2=$p['getattr']($m['Double'], 'MAX_VALUE'))=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			self['getCurve']()['setVisible'](false);
			self['getCurve']()['getSymbol']()['setDistanceMetric'](0, 0);
			self['getCurve']()['getSymbol']()['setHoverWidget']($p['getattr'](self, 'zoomController'));
			self['getCurve']()['getSymbol']()['setHoverLocation']($p['getattr']($m['AnnotationLocation'], 'CENTER'));
			self['getCurve']()['getSymbol']()['setBrushSize'](0, 0);
			self.SELECTION_CURVE = (typeof ($sub17=self['getNCurves']())==typeof ($sub18=1) && (typeof $sub17=='number'||typeof $sub17=='string')?
				$sub17-$sub18:
				$p['op_sub']($sub17,$sub18));
			self['getXAxis']()['setAxisMin']((typeof ($mul17=0.25)==typeof ($mul18=$m['N_POINTS']) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)));
			self['getXAxis']()['setAxisMax']((typeof ($mul19=0.75)==typeof ($mul20=$m['N_POINTS']) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20)));
			self['getYAxis']()['setTickLabelThickness'](50);
			self['getYAxis']()['setAxisMin']((typeof ($usub3=0.5)=='number'?
				-$usub3:
				$p['op_usub']($usub3)));
			self['getYAxis']()['setAxisMax'](0.5);
			self['addMouseListener'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $or1,$or2,$bool8,$bool9,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			$m['DOM']['eventPreventDefault'](event);
			if ((($bool9=((($bool8=$or1=$p['getattr'](self, 'selecting')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8.__nonzero__=='function'?
						$bool8.__nonzero__() :
						(typeof $bool8.__len__=='function'?
							($bool8.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:$p['getattr'](self, 'moving'))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$p['getattr'](self, 'p2').x = self['getXAxis']()['getMouseCoordinate']();
				$p['getattr'](self, 'p2').y = self['getYAxis']()['getMouseCoordinate']();
				self['updateCursor']();
				self.selecting = false;
				self.moving = false;
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseWheel', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $bool10,$bool11,$bool12,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			$m['DOM']['eventPreventDefault'](event);
			if ((($bool10=self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['isVisible']()) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool11=event['isNorth']()) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11.__nonzero__=='function'?
								$bool11.__nonzero__() :
								(typeof $bool11.__len__=='function'?
									($bool11.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['zoomIn']();
				}
				else if ((($bool12=event['isSouth']()) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12.__nonzero__=='function'?
								$bool12.__nonzero__() :
								(typeof $bool12.__len__=='function'?
									($bool12.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['zoomOut']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseWheel'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $bool13,$bool14,$bool15,$bool16,$bool17,xMax,event,xMin,yMin,yMax,$and4,$and5,$and6,$and7,$cmp11,$cmp10,$cmp12,$cmp5,$cmp7,$cmp6,$cmp9,$cmp8,$assign1,$assign2;
			event = $m['DOM']['eventGetCurrentEvent']();
			$m['DOM']['eventPreventDefault'](event);
			self.ctrlPressed = $m['DOM']['eventGetCtrlKey'](event);
			self.altPressed = $m['DOM']['eventGetAltKey'](event);
			x = self['getXAxis']()['getMouseCoordinate']();
			y = self['getYAxis']()['getMouseCoordinate']();
			if ((($bool16=((($bool13=$and4=((($cmp5=$p['min']($p['getattr']($p['getattr'](self, 'p1'), 'x'), $p['getattr']($p['getattr'](self, 'p2'), 'x')))===($cmp6=x)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) < 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
				false :
				(typeof $bool13=='object'?
					(typeof $bool13.__nonzero__=='function'?
						$bool13.__nonzero__() :
						(typeof $bool13.__len__=='function'?
							($bool13.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool14=$and5=((($cmp7=x)===($cmp8=$p['max']($p['getattr']($p['getattr'](self, 'p1'), 'x'), $p['getattr']($p['getattr'](self, 'p2'), 'x')))?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) < 1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
				false :
				(typeof $bool14=='object'?
					(typeof $bool14.__nonzero__=='function'?
						$bool14.__nonzero__() :
						(typeof $bool14.__len__=='function'?
							($bool14.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool15=$and6=((($cmp9=$p['min']($p['getattr']($p['getattr'](self, 'p1'), 'y'), $p['getattr']($p['getattr'](self, 'p2'), 'y')))===($cmp10=y)?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) < 1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp11=y)===($cmp12=$p['max']($p['getattr']($p['getattr'](self, 'p1'), 'y'), $p['getattr']($p['getattr'](self, 'p2'), 'y')))?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) < 1):$and6):$and5):$and4)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16.__nonzero__=='function'?
							$bool16.__nonzero__() :
							(typeof $bool16.__len__=='function'?
								($bool16.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return null;
			}
			$assign1 = x;
			$p['getattr'](self, 'p1').x = $assign1;
			$p['getattr'](self, 'p2').x = $assign1;
			$assign2 = y;
			$p['getattr'](self, 'p1').y = $assign2;
			$p['getattr'](self, 'p2').y = $assign2;
			xMin = self['getXAxis']()['getAxisMin']();
			xMax = self['getXAxis']()['getAxisMax']();
			yMin = self['getYAxis']()['getAxisMin']();
			yMax = self['getYAxis']()['getAxisMax']();
			$p['getattr'](self, 'initialPlotRegion').xMin = xMin;
			$p['getattr'](self, 'initialPlotRegion').xMax = xMax;
			$p['getattr'](self, 'initialPlotRegion').yMin = yMin;
			$p['getattr'](self, 'initialPlotRegion').yMax = yMax;
			if ((($bool17=$p['getattr'](self, 'ctrlPressed')) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17.__nonzero__=='function'?
							$bool17.__nonzero__() :
							(typeof $bool17.__len__=='function'?
								($bool17.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.selecting = true;
				self.moving = false;
			}
			else {
				self.selecting = false;
				self.moving = true;
			}
			self['updateCursor']();
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $bool18,$or4,$or3,$bool19,$assign4,$bool20,$assign3,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			$m['DOM']['eventPreventDefault'](event);
			if ((($bool19=((($bool18=$or3=$p['getattr'](self, 'selecting')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18.__nonzero__=='function'?
						$bool18.__nonzero__() :
						(typeof $bool18.__len__=='function'?
							($bool18.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:$p['getattr'](self, 'moving'))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19.__nonzero__=='function'?
							$bool19.__nonzero__() :
							(typeof $bool19.__len__=='function'?
								($bool19.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$p['getattr'](self, 'p2').x = self['getXAxis']()['getMouseCoordinate']();
				$p['getattr'](self, 'p2').y = self['getYAxis']()['getMouseCoordinate']();
				self['updateCursor']();
				if ((($bool20=$p['getattr'](self, 'moving')) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
						false :
						(typeof $bool20=='object'?
							(typeof $bool20.__nonzero__=='function'?
								$bool20.__nonzero__() :
								(typeof $bool20.__len__=='function'?
									($bool20.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$assign3 = self['getXAxis']()['getMouseCoordinate']();
					$p['getattr'](self, 'p1').x = $assign3;
					$p['getattr'](self, 'p2').x = $assign3;
					$assign4 = self['getYAxis']()['getMouseCoordinate']();
					$p['getattr'](self, 'p1').y = $assign4;
					$p['getattr'](self, 'p2').y = $assign4;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $sub22,$sub23,$sub20,$sub21,$sub26,$sub27,$sub24,$sub25,$sub28,$sub29,xMax,$div14,$div15,$div10,$div11,$div12,$div13,$bool21,$bool22,xMin,$mul24,yMin,$mul22,$mul23,$mul21,$sub30,$sub19,yMax,selecting,$div9,moving,$assign8,$assign5,$assign7,$assign6,$add6,$add7,$add5,y,x,$add8,$div16;
			x = self['getXAxis']()['getMouseCoordinate']();
			y = self['getYAxis']()['getMouseCoordinate']();
			if ((($bool21=$p['getattr'](self, 'altPressed')) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['getXAxis']()['setAxisMin']((typeof ($mul21=0.25)==typeof ($mul22=$m['N_POINTS']) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)));
				self['getXAxis']()['setAxisMax']((typeof ($mul23=0.75)==typeof ($mul24=$m['N_POINTS']) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)));
				self['getYAxis']()['setAxisMin']((typeof ($usub4=0.5)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				self['getYAxis']()['setAxisMax'](0.5);
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['setVisible'](false);
				self['update']();
			}
			else if ((($bool22=self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['isVisible']()) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$assign5 = x;
				$p['getattr'](self, 'p1').x = $assign5;
				$p['getattr'](self, 'p2').x = $assign5;
				$assign6 = y;
				$p['getattr'](self, 'p1').y = $assign6;
				$p['getattr'](self, 'p2').y = $assign6;
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['setVisible'](false);
				self['update']();
			}
			else {
				xMin = self['getXAxis']()['getAxisMin']();
				xMax = self['getXAxis']()['getAxisMax']();
				yMin = self['getYAxis']()['getAxisMin']();
				yMax = self['getYAxis']()['getAxisMax']();
				$p['getattr'](self, 'p1').x = (typeof ($sub21=x)==typeof ($sub22=(typeof ($div9=(typeof ($sub19=xMax)==typeof ($sub20=xMin) && (typeof $sub19=='number'||typeof $sub19=='string')?
					$sub19-$sub20:
					$p['op_sub']($sub19,$sub20)))==typeof ($div10=4) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10))) && (typeof $sub21=='number'||typeof $sub21=='string')?
					$sub21-$sub22:
					$p['op_sub']($sub21,$sub22));
				$p['getattr'](self, 'p2').x = (typeof ($add5=x)==typeof ($add6=(typeof ($div11=(typeof ($sub23=xMax)==typeof ($sub24=xMin) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$p['op_sub']($sub23,$sub24)))==typeof ($div12=4) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12))) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
				$p['getattr'](self, 'p1').y = (typeof ($sub27=y)==typeof ($sub28=(typeof ($div13=(typeof ($sub25=yMax)==typeof ($sub26=yMin) && (typeof $sub25=='number'||typeof $sub25=='string')?
					$sub25-$sub26:
					$p['op_sub']($sub25,$sub26)))==typeof ($div14=4) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14))) && (typeof $sub27=='number'||typeof $sub27=='string')?
					$sub27-$sub28:
					$p['op_sub']($sub27,$sub28));
				$p['getattr'](self, 'p2').y = (typeof ($add7=y)==typeof ($add8=(typeof ($div15=(typeof ($sub29=yMax)==typeof ($sub30=yMin) && (typeof $sub29=='number'||typeof $sub29=='string')?
					$sub29-$sub30:
					$p['op_sub']($sub29,$sub30)))==typeof ($div16=4) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16))) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				$assign7 = false;
				moving = $assign7;
				selecting = $assign7;
				self.zoomIndex = 0;
				self['getCurve']($p['getattr'](self, 'SELECTION_CURVE'))['setVisible'](true);
				self['updateCursor']();
			}
			$assign8 = false;
			self.moving = $assign8;
			self.selecting = $assign8;
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('zoomIn', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul28,$mul26,$mul27,$mul25,$sub31,$sub33,$sub32,$sub35,$sub34,$sub37,$sub36,$sub39,$sub38,dx,dy,newPXSize,$div40,yCenter,$div32,$div33,$div30,$div31,$div36,$div37,$div34,$div35,pYMin,$div39,$bool24,$bool23,pYMax,$div21,$div20,$div23,$div22,$div25,$div24,$div27,$div26,$div29,$div28,newPYSize,$div18,$div19,$div17,xCenter,yMin,yMax,$add30,$add9,$sub48,$sub49,xMax,$sub40,$sub41,$sub42,$sub43,$sub44,$sub45,$sub46,$sub47,$add29,$add28,$add21,$add20,$add22,$add25,$add24,$add27,$add26,xMin,$sub54,$sub53,$sub52,$sub51,$sub50,$eq3,$eq6,$eq4,$eq5,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,pXMax,pXMin,$div38,$add23;
			if ((($bool23=(($eq3=(typeof ($usub5=1)=='number'?
				-$usub5:
				$p['op_usub']($usub5)))===($eq4=$p['getattr'](self, 'zoomIndex'))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['getXAxis']()['setAxisMin']($p['getattr']($p['getattr'](self, 'initialPlotRegion'), 'xMin'));
				self['getXAxis']()['setAxisMax']($p['getattr']($p['getattr'](self, 'initialPlotRegion'), 'xMax'));
				self['getYAxis']()['setAxisMin']($p['getattr']($p['getattr'](self, 'initialPlotRegion'), 'yMin'));
				self['getYAxis']()['setAxisMax']($p['getattr']($p['getattr'](self, 'initialPlotRegion'), 'yMax'));
				$p['getattr'](self, 'p1').x = $p['getattr']($p['getattr'](self, 'initialSelectionRegion'), 'xMin');
				$p['getattr'](self, 'p2').x = $p['getattr']($p['getattr'](self, 'initialSelectionRegion'), 'xMax');
				$p['getattr'](self, 'p1').y = $p['getattr']($p['getattr'](self, 'initialSelectionRegion'), 'yMin');
				$p['getattr'](self, 'p2').y = $p['getattr']($p['getattr'](self, 'initialSelectionRegion'), 'yMax');
			}
			else {
				xMin = self['getXAxis']()['getAxisMin']();
				xMax = self['getXAxis']()['getAxisMax']();
				yMin = self['getYAxis']()['getAxisMin']();
				yMax = self['getYAxis']()['getAxisMax']();
				if ((($bool24=(($eq5=0)===($eq6=$p['getattr'](self, 'zoomIndex'))&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
								$eq5==$eq6)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24.__nonzero__=='function'?
								$bool24.__nonzero__() :
								(typeof $bool24.__len__=='function'?
									($bool24.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr'](self, 'initialPlotRegion').xMin = xMin;
					$p['getattr'](self, 'initialPlotRegion').xMax = xMax;
					$p['getattr'](self, 'initialPlotRegion').yMin = yMin;
					$p['getattr'](self, 'initialPlotRegion').yMax = yMax;
					$p['getattr'](self, 'initialSelectionRegion').xMin = $p['min']($p['getattr']($p['getattr'](self, 'p1'), 'x'), $p['getattr']($p['getattr'](self, 'p2'), 'x'));
					$p['getattr'](self, 'initialSelectionRegion').xMax = $p['max']($p['getattr']($p['getattr'](self, 'p1'), 'x'), $p['getattr']($p['getattr'](self, 'p2'), 'x'));
					$p['getattr'](self, 'initialSelectionRegion').yMin = $p['min']($p['getattr']($p['getattr'](self, 'p1'), 'y'), $p['getattr']($p['getattr'](self, 'p2'), 'y'));
					$p['getattr'](self, 'initialSelectionRegion').yMax = $p['max']($p['getattr']($p['getattr'](self, 'p1'), 'y'), $p['getattr']($p['getattr'](self, 'p2'), 'y'));
					dx = (typeof ($sub31=xMax)==typeof ($sub32=xMin) && (typeof $sub31=='number'||typeof $sub31=='string')?
						$sub31-$sub32:
						$p['op_sub']($sub31,$sub32));
					dy = (typeof ($sub33=yMax)==typeof ($sub34=yMin) && (typeof $sub33=='number'||typeof $sub33=='string')?
						$sub33-$sub34:
						$p['op_sub']($sub33,$sub34));
					xMin = (typeof ($div17=(typeof ($sub35=(typeof ($add9=$p['getattr']($p['getattr'](self, 'p1'), 'x'))==typeof ($add10=$p['getattr']($p['getattr'](self, 'p2'), 'x')) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)))==typeof ($sub36=dx) && (typeof $sub35=='number'||typeof $sub35=='string')?
						$sub35-$sub36:
						$p['op_sub']($sub35,$sub36)))==typeof ($div18=2) && typeof $div17=='number' && $div18 !== 0?
						$div17/$div18:
						$p['op_div']($div17,$div18));
					xMax = (typeof ($div19=(typeof ($add13=(typeof ($add11=$p['getattr']($p['getattr'](self, 'p1'), 'x'))==typeof ($add12=$p['getattr']($p['getattr'](self, 'p2'), 'x')) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)))==typeof ($add14=dx) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)))==typeof ($div20=2) && typeof $div19=='number' && $div20 !== 0?
						$div19/$div20:
						$p['op_div']($div19,$div20));
					yMin = (typeof ($div21=(typeof ($sub37=(typeof ($add15=$p['getattr']($p['getattr'](self, 'p1'), 'y'))==typeof ($add16=$p['getattr']($p['getattr'](self, 'p2'), 'y')) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16)))==typeof ($sub38=dy) && (typeof $sub37=='number'||typeof $sub37=='string')?
						$sub37-$sub38:
						$p['op_sub']($sub37,$sub38)))==typeof ($div22=2) && typeof $div21=='number' && $div22 !== 0?
						$div21/$div22:
						$p['op_div']($div21,$div22));
					yMax = (typeof ($div23=(typeof ($add19=(typeof ($add17=$p['getattr']($p['getattr'](self, 'p1'), 'y'))==typeof ($add18=$p['getattr']($p['getattr'](self, 'p2'), 'y')) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18)))==typeof ($add20=dy) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20)))==typeof ($div24=2) && typeof $div23=='number' && $div24 !== 0?
						$div23/$div24:
						$p['op_div']($div23,$div24));
				}
				pXMin = $p['min']($p['getattr']($p['getattr'](self, 'p1'), 'x'), $p['getattr']($p['getattr'](self, 'p2'), 'x'));
				pXMax = $p['max']($p['getattr']($p['getattr'](self, 'p1'), 'x'), $p['getattr']($p['getattr'](self, 'p2'), 'x'));
				pYMin = $p['min']($p['getattr']($p['getattr'](self, 'p1'), 'y'), $p['getattr']($p['getattr'](self, 'p2'), 'y'));
				pYMax = $p['max']($p['getattr']($p['getattr'](self, 'p1'), 'y'), $p['getattr']($p['getattr'](self, 'p2'), 'y'));
				newPXSize = (typeof ($div25=(typeof ($mul25=(typeof ($sub39=pXMax)==typeof ($sub40=pXMin) && (typeof $sub39=='number'||typeof $sub39=='string')?
					$sub39-$sub40:
					$p['op_sub']($sub39,$sub40)))==typeof ($mul26=(typeof ($sub41=pXMax)==typeof ($sub42=pXMin) && (typeof $sub41=='number'||typeof $sub41=='string')?
					$sub41-$sub42:
					$p['op_sub']($sub41,$sub42))) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26)))==typeof ($div26=(typeof ($sub43=xMax)==typeof ($sub44=xMin) && (typeof $sub43=='number'||typeof $sub43=='string')?
					$sub43-$sub44:
					$p['op_sub']($sub43,$sub44))) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26));
				newPYSize = (typeof ($div27=(typeof ($mul27=(typeof ($sub45=pYMax)==typeof ($sub46=pYMin) && (typeof $sub45=='number'||typeof $sub45=='string')?
					$sub45-$sub46:
					$p['op_sub']($sub45,$sub46)))==typeof ($mul28=(typeof ($sub47=pYMax)==typeof ($sub48=pYMin) && (typeof $sub47=='number'||typeof $sub47=='string')?
					$sub47-$sub48:
					$p['op_sub']($sub47,$sub48))) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)))==typeof ($div28=(typeof ($sub49=yMax)==typeof ($sub50=yMin) && (typeof $sub49=='number'||typeof $sub49=='string')?
					$sub49-$sub50:
					$p['op_sub']($sub49,$sub50))) && typeof $div27=='number' && $div28 !== 0?
					$div27/$div28:
					$p['op_div']($div27,$div28));
				xCenter = (typeof ($div29=(typeof ($add21=$p['getattr']($p['getattr'](self, 'p1'), 'x'))==typeof ($add22=$p['getattr']($p['getattr'](self, 'p2'), 'x')) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$p['op_add']($add21,$add22)))==typeof ($div30=2) && typeof $div29=='number' && $div30 !== 0?
					$div29/$div30:
					$p['op_div']($div29,$div30));
				yCenter = (typeof ($div31=(typeof ($add23=$p['getattr']($p['getattr'](self, 'p1'), 'y'))==typeof ($add24=$p['getattr']($p['getattr'](self, 'p2'), 'y')) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24)))==typeof ($div32=2) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					$p['op_div']($div31,$div32));
				$p['getattr'](self, 'p1').x = (typeof ($sub51=xCenter)==typeof ($sub52=(typeof ($div33=newPXSize)==typeof ($div34=2) && typeof $div33=='number' && $div34 !== 0?
					$div33/$div34:
					$p['op_div']($div33,$div34))) && (typeof $sub51=='number'||typeof $sub51=='string')?
					$sub51-$sub52:
					$p['op_sub']($sub51,$sub52));
				$p['getattr'](self, 'p2').x = (typeof ($add25=xCenter)==typeof ($add26=(typeof ($div35=newPXSize)==typeof ($div36=2) && typeof $div35=='number' && $div36 !== 0?
					$div35/$div36:
					$p['op_div']($div35,$div36))) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26));
				$p['getattr'](self, 'p1').y = (typeof ($sub53=yCenter)==typeof ($sub54=(typeof ($div37=newPYSize)==typeof ($div38=2) && typeof $div37=='number' && $div38 !== 0?
					$div37/$div38:
					$p['op_div']($div37,$div38))) && (typeof $sub53=='number'||typeof $sub53=='string')?
					$sub53-$sub54:
					$p['op_sub']($sub53,$sub54));
				$p['getattr'](self, 'p2').y = (typeof ($add27=yCenter)==typeof ($add28=(typeof ($div39=newPYSize)==typeof ($div40=2) && typeof $div39=='number' && $div40 !== 0?
					$div39/$div40:
					$p['op_div']($div39,$div40))) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28));
				self['getXAxis']()['setAxisMin'](pXMin);
				self['getXAxis']()['setAxisMax'](pXMax);
				self['getYAxis']()['setAxisMin'](pYMin);
				self['getYAxis']()['setAxisMax'](pYMax);
			}
			self['updateCursor']();
			self.zoomIndex = (typeof ($add29=$p['getattr'](self, 'zoomIndex'))==typeof ($add30=1) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				$p['op_add']($add29,$add30));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['zoomIn'] = $method;
		$method = $pyjs__bind_method2('zoomOut', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div58,$div59,$mul29,$div50,$div51,$div52,$div53,$div54,$div55,$div56,$div57,$div76,dx,dy,$div47,$div46,$div45,$div44,$div43,$div42,$div41,$div49,$div48,$mul31,$mul30,$mul32,$sub55,$sub84,$eq10,$sub86,$sub87,$sub80,$sub81,$sub82,$sub83,$sub88,yCenter,pYMin,$bool25,$bool26,newYMax,pYMax,newYMin,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,newYSize,newXMin,$add43,newXSize,$sub68,$sub69,$sub66,$sub67,$sub64,$sub65,$sub62,$sub63,$sub60,$sub61,$add49,$add48,$add47,$add46,$add45,$add44,xCenter,$add42,$add41,$add40,yMin,yMax,$sub79,$sub78,$sub75,$sub74,$sub77,$sub76,$sub71,$sub70,$sub73,$sub72,$add38,$add39,$sub85,$add32,$add33,$add31,$add36,$add37,$add34,$add35,xMax,xMin,$div74,$div75,$div72,$div73,$div70,$div71,$sub57,$sub56,$eq8,$eq9,$eq7,$sub59,$sub58,newXMax,pXMax,pXMin,$div69,$div68,$div65,$div64,$div67,$div66,$div61,$div60,$div63,$div62;
			if ((($bool25=(($eq7=1)===($eq8=$p['getattr'](self, 'zoomIndex'))&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25.__nonzero__=='function'?
							$bool25.__nonzero__() :
							(typeof $bool25.__len__=='function'?
								($bool25.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['getXAxis']()['setAxisMin']($p['getattr']($p['getattr'](self, 'initialPlotRegion'), 'xMin'));
				self['getXAxis']()['setAxisMax']($p['getattr']($p['getattr'](self, 'initialPlotRegion'), 'xMax'));
				self['getYAxis']()['setAxisMin']($p['getattr']($p['getattr'](self, 'initialPlotRegion'), 'yMin'));
				self['getYAxis']()['setAxisMax']($p['getattr']($p['getattr'](self, 'initialPlotRegion'), 'yMax'));
				$p['getattr'](self, 'p1').x = $p['getattr']($p['getattr'](self, 'initialSelectionRegion'), 'xMin');
				$p['getattr'](self, 'p2').x = $p['getattr']($p['getattr'](self, 'initialSelectionRegion'), 'xMax');
				$p['getattr'](self, 'p1').y = $p['getattr']($p['getattr'](self, 'initialSelectionRegion'), 'yMin');
				$p['getattr'](self, 'p2').y = $p['getattr']($p['getattr'](self, 'initialSelectionRegion'), 'yMax');
			}
			else {
				xMin = self['getXAxis']()['getAxisMin']();
				xMax = self['getXAxis']()['getAxisMax']();
				yMin = self['getYAxis']()['getAxisMin']();
				yMax = self['getYAxis']()['getAxisMax']();
				if ((($bool26=(($eq9=0)===($eq10=$p['getattr'](self, 'zoomIndex'))&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26.__nonzero__=='function'?
								$bool26.__nonzero__() :
								(typeof $bool26.__len__=='function'?
									($bool26.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$p['getattr'](self, 'initialPlotRegion').xMin = xMin;
					$p['getattr'](self, 'initialPlotRegion').xMax = xMax;
					$p['getattr'](self, 'initialPlotRegion').yMin = yMin;
					$p['getattr'](self, 'initialPlotRegion').yMax = yMax;
					$p['getattr'](self, 'initialSelectionRegion').xMin = $p['min']($p['getattr']($p['getattr'](self, 'p1'), 'x'), $p['getattr']($p['getattr'](self, 'p2'), 'x'));
					$p['getattr'](self, 'initialSelectionRegion').xMax = $p['max']($p['getattr']($p['getattr'](self, 'p1'), 'x'), $p['getattr']($p['getattr'](self, 'p2'), 'x'));
					$p['getattr'](self, 'initialSelectionRegion').yMin = $p['min']($p['getattr']($p['getattr'](self, 'p1'), 'y'), $p['getattr']($p['getattr'](self, 'p2'), 'y'));
					$p['getattr'](self, 'initialSelectionRegion').yMax = $p['max']($p['getattr']($p['getattr'](self, 'p1'), 'y'), $p['getattr']($p['getattr'](self, 'p2'), 'y'));
					dx = (typeof ($sub55=xMax)==typeof ($sub56=xMin) && (typeof $sub55=='number'||typeof $sub55=='string')?
						$sub55-$sub56:
						$p['op_sub']($sub55,$sub56));
					dy = (typeof ($sub57=yMax)==typeof ($sub58=yMin) && (typeof $sub57=='number'||typeof $sub57=='string')?
						$sub57-$sub58:
						$p['op_sub']($sub57,$sub58));
					xCenter = (typeof ($div41=(typeof ($add31=$p['getattr']($p['getattr'](self, 'p1'), 'x'))==typeof ($add32=$p['getattr']($p['getattr'](self, 'p2'), 'x')) && (typeof $add31=='number'||typeof $add31=='string')?
						$add31+$add32:
						$p['op_add']($add31,$add32)))==typeof ($div42=2) && typeof $div41=='number' && $div42 !== 0?
						$div41/$div42:
						$p['op_div']($div41,$div42));
					yCenter = (typeof ($div43=(typeof ($add33=$p['getattr']($p['getattr'](self, 'p1'), 'y'))==typeof ($add34=$p['getattr']($p['getattr'](self, 'p2'), 'y')) && (typeof $add33=='number'||typeof $add33=='string')?
						$add33+$add34:
						$p['op_add']($add33,$add34)))==typeof ($div44=2) && typeof $div43=='number' && $div44 !== 0?
						$div43/$div44:
						$p['op_div']($div43,$div44));
					xMin = (typeof ($sub59=xCenter)==typeof ($sub60=(typeof ($div45=dx)==typeof ($div46=2) && typeof $div45=='number' && $div46 !== 0?
						$div45/$div46:
						$p['op_div']($div45,$div46))) && (typeof $sub59=='number'||typeof $sub59=='string')?
						$sub59-$sub60:
						$p['op_sub']($sub59,$sub60));
					xMax = (typeof ($add35=xCenter)==typeof ($add36=(typeof ($div47=dx)==typeof ($div48=2) && typeof $div47=='number' && $div48 !== 0?
						$div47/$div48:
						$p['op_div']($div47,$div48))) && (typeof $add35=='number'||typeof $add35=='string')?
						$add35+$add36:
						$p['op_add']($add35,$add36));
					yMin = (typeof ($sub61=yCenter)==typeof ($sub62=(typeof ($div49=dy)==typeof ($div50=2) && typeof $div49=='number' && $div50 !== 0?
						$div49/$div50:
						$p['op_div']($div49,$div50))) && (typeof $sub61=='number'||typeof $sub61=='string')?
						$sub61-$sub62:
						$p['op_sub']($sub61,$sub62));
					yMax = (typeof ($add37=yCenter)==typeof ($add38=(typeof ($div51=dy)==typeof ($div52=2) && typeof $div51=='number' && $div52 !== 0?
						$div51/$div52:
						$p['op_div']($div51,$div52))) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						$p['op_add']($add37,$add38));
				}
				pXMin = $p['min']($p['getattr']($p['getattr'](self, 'p1'), 'x'), $p['getattr']($p['getattr'](self, 'p2'), 'x'));
				pXMax = $p['max']($p['getattr']($p['getattr'](self, 'p1'), 'x'), $p['getattr']($p['getattr'](self, 'p2'), 'x'));
				pYMin = $p['min']($p['getattr']($p['getattr'](self, 'p1'), 'y'), $p['getattr']($p['getattr'](self, 'p2'), 'y'));
				pYMax = $p['max']($p['getattr']($p['getattr'](self, 'p1'), 'y'), $p['getattr']($p['getattr'](self, 'p2'), 'y'));
				newXSize = (typeof ($div53=(typeof ($mul29=(typeof ($sub63=xMax)==typeof ($sub64=xMin) && (typeof $sub63=='number'||typeof $sub63=='string')?
					$sub63-$sub64:
					$p['op_sub']($sub63,$sub64)))==typeof ($mul30=(typeof ($sub65=xMax)==typeof ($sub66=xMin) && (typeof $sub65=='number'||typeof $sub65=='string')?
					$sub65-$sub66:
					$p['op_sub']($sub65,$sub66))) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30)))==typeof ($div54=(typeof ($sub67=pXMax)==typeof ($sub68=pXMin) && (typeof $sub67=='number'||typeof $sub67=='string')?
					$sub67-$sub68:
					$p['op_sub']($sub67,$sub68))) && typeof $div53=='number' && $div54 !== 0?
					$div53/$div54:
					$p['op_div']($div53,$div54));
				newYSize = (typeof ($div55=(typeof ($mul31=(typeof ($sub69=yMax)==typeof ($sub70=yMin) && (typeof $sub69=='number'||typeof $sub69=='string')?
					$sub69-$sub70:
					$p['op_sub']($sub69,$sub70)))==typeof ($mul32=(typeof ($sub71=yMax)==typeof ($sub72=yMin) && (typeof $sub71=='number'||typeof $sub71=='string')?
					$sub71-$sub72:
					$p['op_sub']($sub71,$sub72))) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32)))==typeof ($div56=(typeof ($sub73=pYMax)==typeof ($sub74=pYMin) && (typeof $sub73=='number'||typeof $sub73=='string')?
					$sub73-$sub74:
					$p['op_sub']($sub73,$sub74))) && typeof $div55=='number' && $div56 !== 0?
					$div55/$div56:
					$p['op_div']($div55,$div56));
				dx = (typeof ($sub75=xMax)==typeof ($sub76=xMin) && (typeof $sub75=='number'||typeof $sub75=='string')?
					$sub75-$sub76:
					$p['op_sub']($sub75,$sub76));
				dy = (typeof ($sub77=yMax)==typeof ($sub78=yMin) && (typeof $sub77=='number'||typeof $sub77=='string')?
					$sub77-$sub78:
					$p['op_sub']($sub77,$sub78));
				xCenter = (typeof ($div57=(typeof ($add39=$p['getattr']($p['getattr'](self, 'p1'), 'x'))==typeof ($add40=$p['getattr']($p['getattr'](self, 'p2'), 'x')) && (typeof $add39=='number'||typeof $add39=='string')?
					$add39+$add40:
					$p['op_add']($add39,$add40)))==typeof ($div58=2) && typeof $div57=='number' && $div58 !== 0?
					$div57/$div58:
					$p['op_div']($div57,$div58));
				yCenter = (typeof ($div59=(typeof ($add41=$p['getattr']($p['getattr'](self, 'p1'), 'y'))==typeof ($add42=$p['getattr']($p['getattr'](self, 'p2'), 'y')) && (typeof $add41=='number'||typeof $add41=='string')?
					$add41+$add42:
					$p['op_add']($add41,$add42)))==typeof ($div60=2) && typeof $div59=='number' && $div60 !== 0?
					$div59/$div60:
					$p['op_div']($div59,$div60));
				$p['getattr'](self, 'p1').x = (typeof ($sub79=xCenter)==typeof ($sub80=(typeof ($div61=dx)==typeof ($div62=2) && typeof $div61=='number' && $div62 !== 0?
					$div61/$div62:
					$p['op_div']($div61,$div62))) && (typeof $sub79=='number'||typeof $sub79=='string')?
					$sub79-$sub80:
					$p['op_sub']($sub79,$sub80));
				$p['getattr'](self, 'p2').x = (typeof ($add43=xCenter)==typeof ($add44=(typeof ($div63=dx)==typeof ($div64=2) && typeof $div63=='number' && $div64 !== 0?
					$div63/$div64:
					$p['op_div']($div63,$div64))) && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$p['op_add']($add43,$add44));
				$p['getattr'](self, 'p1').y = (typeof ($sub81=yCenter)==typeof ($sub82=(typeof ($div65=dy)==typeof ($div66=2) && typeof $div65=='number' && $div66 !== 0?
					$div65/$div66:
					$p['op_div']($div65,$div66))) && (typeof $sub81=='number'||typeof $sub81=='string')?
					$sub81-$sub82:
					$p['op_sub']($sub81,$sub82));
				$p['getattr'](self, 'p2').y = (typeof ($add45=yCenter)==typeof ($add46=(typeof ($div67=dy)==typeof ($div68=2) && typeof $div67=='number' && $div68 !== 0?
					$div67/$div68:
					$p['op_div']($div67,$div68))) && (typeof $add45=='number'||typeof $add45=='string')?
					$add45+$add46:
					$p['op_add']($add45,$add46));
				newXMin = (typeof ($div69=(typeof ($sub83=(typeof ($add47=xMin)==typeof ($add48=xMax) && (typeof $add47=='number'||typeof $add47=='string')?
					$add47+$add48:
					$p['op_add']($add47,$add48)))==typeof ($sub84=newXSize) && (typeof $sub83=='number'||typeof $sub83=='string')?
					$sub83-$sub84:
					$p['op_sub']($sub83,$sub84)))==typeof ($div70=2.0) && typeof $div69=='number' && $div70 !== 0?
					$div69/$div70:
					$p['op_div']($div69,$div70));
				newXMax = (typeof ($div71=(typeof ($add51=(typeof ($add49=xMin)==typeof ($add50=xMax) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					$p['op_add']($add49,$add50)))==typeof ($add52=newXSize) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52)))==typeof ($div72=2.0) && typeof $div71=='number' && $div72 !== 0?
					$div71/$div72:
					$p['op_div']($div71,$div72));
				newYMin = (typeof ($div73=(typeof ($sub85=(typeof ($add53=yMin)==typeof ($add54=yMax) && (typeof $add53=='number'||typeof $add53=='string')?
					$add53+$add54:
					$p['op_add']($add53,$add54)))==typeof ($sub86=newYSize) && (typeof $sub85=='number'||typeof $sub85=='string')?
					$sub85-$sub86:
					$p['op_sub']($sub85,$sub86)))==typeof ($div74=2.0) && typeof $div73=='number' && $div74 !== 0?
					$div73/$div74:
					$p['op_div']($div73,$div74));
				newYMax = (typeof ($div75=(typeof ($add57=(typeof ($add55=yMin)==typeof ($add56=yMax) && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					$p['op_add']($add55,$add56)))==typeof ($add58=newYSize) && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					$p['op_add']($add57,$add58)))==typeof ($div76=2.0) && typeof $div75=='number' && $div76 !== 0?
					$div75/$div76:
					$p['op_div']($div75,$div76));
				self['getXAxis']()['setAxisMin'](newXMin);
				self['getXAxis']()['setAxisMax'](newXMax);
				self['getYAxis']()['setAxisMin'](newYMin);
				self['getYAxis']()['setAxisMax'](newYMax);
				$p['getattr'](self, 'p1').x = xMin;
				$p['getattr'](self, 'p2').x = xMax;
				$p['getattr'](self, 'p1').y = yMin;
				$p['getattr'](self, 'p2').y = yMax;
			}
			self.zoomIndex = (typeof ($sub87=$p['getattr'](self, 'zoomIndex'))==typeof ($sub88=1) && (typeof $sub87=='number'||typeof $sub87=='string')?
				$sub87-$sub88:
				$p['op_sub']($sub87,$sub88));
			self['updateCursor']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['zoomOut'] = $method;
		var $bases = new Array($m['GChart']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GChartExample24', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end GChartExample24 */


/* end module: GChartExample24 */


/*
PYJS_DEPS: ['pyjamas.chart.GChartUtil', 'pyjamas', 'pyjamas.chart', 'pyjamas.chart.GChart.GChart', 'pyjamas.chart.GChart', 'pyjamas.chart.AnnotationLocation', 'pyjamas.chart.SymbolType', 'pyjamas.chart.Double', 'math', 'pyjamas.DOM', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Event', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas.ui.FlowPanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.MouseListener']
*/
