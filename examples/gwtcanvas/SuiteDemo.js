/* start module: SuiteDemo */
$pyjs.loaded_modules['SuiteDemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SuiteDemo'].__was_initialized__) return $pyjs.loaded_modules['SuiteDemo'];
	var $m = $pyjs.loaded_modules["SuiteDemo"];
	$m.__repr__ = function() { return "<module: SuiteDemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SuiteDemo';
	$m.__name__ = __mod_name__;


	$m['math'] = $p['___import___']('math', null);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
	$m['GWTCanvasConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasConsts', null, null, false);
	$m['time'] = $p['___import___']('time', null);
	$m['SimpleCanvasDemo'] = $p['___import___']('SimpleCanvasDemo.SimpleCanvasDemo', null, null, false);
	$m['SuiteDemoControls'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SuiteDemo';
		$method = $pyjs__bind_method2('__init__', function(chart) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				chart = arguments[1];
			}
			var vp,hp;
			self.chart = chart;
			self.canvas = $p['getattr'](chart, 'canvas');
			self.b2 = $m['Button']('Compositing', self);
			self.b3 = $m['Button']('Paths & shapes', self);
			self.b4 = $m['Button']('Arcs & circles', self);
			self.b1 = $m['Button']('Bezier curves', self);
			self.b6 = $m['Button']('Colors', self);
			self.b7 = $m['Button']('Translating', self);
			self.b8 = $m['Button']('Scaling', self);
			self.b5 = $m['Button']('Rotating', self);
			self.b10 = $m['Button']('Transparency', self);
			self.b11 = $m['Button']('Lines', self);
			self.b9 = $m['Button']('Animations', self);
			self.b12 = $m['Button']('Text', self);
			self.b13 = $m['Button']('Gradients', self);
			hp = $m['HorizontalPanel']();
			vp = $m['VerticalPanel']();
			vp['setHorizontalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_LEFT'));
			vp['add']($m['Label']('MENU'));
			vp['setSpacing'](6);
			vp['add']($p['getattr'](self, 'b2'));
			vp['add']($p['getattr'](self, 'b3'));
			vp['add']($p['getattr'](self, 'b4'));
			vp['add']($p['getattr'](self, 'b1'));
			vp['add']($p['getattr'](self, 'b6'));
			vp['add']($p['getattr'](self, 'b7'));
			vp['add']($p['getattr'](self, 'b8'));
			vp['add']($p['getattr'](self, 'b5'));
			vp['add']($p['getattr'](self, 'b10'));
			vp['add']($p['getattr'](self, 'b11'));
			vp['add']($p['getattr'](self, 'b9'));
			vp['add']($p['getattr'](self, 'b12'));
			vp['add']($p['getattr'](self, 'b13'));
			hp['add'](vp);
			$m['Composite']['__init__'](self, hp);
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
			var $bool10,$bool11,$bool12,$eq26,$eq18,$eq19,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,$eq17,$bool13,$eq8,$eq9,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,$bool2,$bool3,$eq23,$bool1,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$eq21,$eq20,$eq22,$eq25,$eq24;
			if ((($bool1=(($eq1=sender)===($eq2=$p['getattr'](self, 'b2'))&&$eq1===null?true:
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
				self['onClickCompositing'](sender);
			}
			else if ((($bool2=(($eq3=sender)===($eq4=$p['getattr'](self, 'b3'))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['onClickPaths'](sender);
			}
			else if ((($bool3=(($eq5=sender)===($eq6=$p['getattr'](self, 'b4'))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['onClickArcs'](sender);
			}
			else if ((($bool4=(($eq7=sender)===($eq8=$p['getattr'](self, 'b1'))&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['onClickBezier'](sender);
			}
			else if ((($bool5=(($eq9=sender)===($eq10=$p['getattr'](self, 'b6'))&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['onClickColours'](sender);
			}
			else if ((($bool6=(($eq11=sender)===($eq12=$p['getattr'](self, 'b7'))&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self['onClickTranslate'](sender);
			}
			else if ((($bool7=(($eq13=sender)===($eq14=$p['getattr'](self, 'b8'))&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				self['onClickScale'](sender);
			}
			else if ((($bool8=(($eq15=sender)===($eq16=$p['getattr'](self, 'b5'))&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8.__nonzero__=='function'?
							$bool8.__nonzero__() :
							(typeof $bool8.__len__=='function'?
								($bool8.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['onClickRotate'](sender);
			}
			else if ((($bool9=(($eq17=sender)===($eq18=$p['getattr'](self, 'b11'))&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				self['onClickLines'](sender);
			}
			else if ((($bool10=(($eq19=sender)===($eq20=$p['getattr'](self, 'b9'))&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				self['onClickClock'](sender);
			}
			else if ((($bool11=(($eq21=sender)===($eq22=$p['getattr'](self, 'b10'))&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				self['onClickTrans'](sender);
			}
			else if ((($bool12=(($eq23=sender)===($eq24=$p['getattr'](self, 'b12'))&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				self['onClickText'](sender);
			}
			else if ((($bool13=(($eq25=sender)===($eq26=$p['getattr'](self, 'b13'))&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['onClickGradients'](sender);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onClickCompositing', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['translate'](40, 40);
			self['canvas']['setFillStyle']($m['Color']['Color']('#f00'));
			self['canvas']['fillRect'](75, 50, 100, 100);
			self['canvas']['setGlobalCompositeOperation']($p['getattr']($m['GWTCanvasConsts'], 'DESTINATION_OVER'));
			self['canvas']['setFillStyle']($m['Color']['Color']('#0f0'));
			self['canvas']['fillRect'](110, 110, 100, 100);
			self['canvas']['setGlobalCompositeOperation']($p['getattr']($m['GWTCanvasConsts'], 'SOURCE_OVER'));
			self['canvas']['setFillStyle']($m['Color']['Color']('#00f'));
			self['canvas']['fillRect'](40, 85, 100, 100);
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickCompositing'] = $method;
		$method = $pyjs__bind_method2('onClickPaths', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['translate'](30, 30);
			self['canvas']['setFillStyle']($m['Color']['Color']('#fff'));
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#fff'));
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](25, 25);
			self['canvas']['lineTo'](105, 25);
			self['canvas']['lineTo'](25, 105);
			self['canvas']['closePath']();
			self['canvas']['fill']();
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](125, 125);
			self['canvas']['lineTo'](125, 45);
			self['canvas']['lineTo'](45, 125);
			self['canvas']['closePath']();
			self['canvas']['stroke']();
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](265, 265);
			self['canvas']['lineTo'](165, 265);
			self['canvas']['lineTo'](265, 165);
			self['canvas']['lineTo'](265, 265);
			self['canvas']['fillRect'](25, 165, 100, 100);
			self['canvas']['setFillStyle']($p['getattr']($m['Color'], 'BLACK'));
			self['canvas']['fillRect'](45, 185, 60, 60);
			self['canvas']['strokeRect'](50, 190, 50, 50);
			self['canvas']['rect'](165, 25, 100, 100);
			self['canvas']['stroke']();
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickPaths'] = $method;
		$method = $pyjs__bind_method2('onClickArcs', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $mul9,$eq28,$bool14,$bool15,$bool16,$iter1_iter,$mul7,$mod1,radius,$mod2,$iter2_type,$or1,$mul10,$div1,$iter2_iter,$iter1_array,startAngle,$mul12,$iter1_nextval,$or2,$and1,$and2,anticlockwise,endAngle,$iter2_idx,$eq27,$mul8,$div2,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter2_nextval,$cmp1,$iter1_type,$mul11,$cmp2,i,j,$add2,$add3,$add1,$add6,$iter1_idx,$add4,$add5,y,x,$iter2_array;
			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['translate'](30, 70);
			self['canvas']['setFillStyle']($m['Color']['Color']('#f0f'));
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#0ff'));
			self['canvas']['setLineWidth'](2);
			$iter1_iter = $p['range'](4);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				$iter2_iter = $p['range'](3);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					j = $iter2_nextval;
					self['canvas']['beginPath']();
					x = (typeof ($add1=25)==typeof ($add2=(typeof ($mul1=j)==typeof ($mul2=50) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2))) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
					y = (typeof ($add3=25)==typeof ($add4=(typeof ($mul3=i)==typeof ($mul4=50) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4))) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
					radius = 20;
					startAngle = 0;
					endAngle = (typeof ($add5=$p['getattr']($m['math'], 'pi'))==typeof ($add6=(typeof ($div1=(typeof ($mul5=$p['getattr']($m['math'], 'pi'))==typeof ($mul6=j) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2))) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
					anticlockwise = ((($bool15=$or1=((($bool14=$and1=(($eq27=(typeof ($mod1=i)==typeof ($mod2=2) && typeof $mod1=='number'?
						(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
						$p['op_mod']($mod1,$mod2)))===($eq28=0)&&$eq27===null?true:
						($eq27===null?false:($eq28===null?false:
							((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
								((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
									$eq27==$eq28)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14.__nonzero__=='function'?
								$bool14.__nonzero__() :
								(typeof $bool14.__len__=='function'?
									($bool14.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?false:$and1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15.__nonzero__=='function'?
								$bool15.__nonzero__() :
								(typeof $bool15.__len__=='function'?
									($bool15.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:true);
					self['canvas']['arc'](x, y, radius, startAngle, endAngle, anticlockwise);
					if ((($bool16=((($cmp1=i)===($cmp2=1)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
						self['canvas']['fill']();
					}
					else {
						self['canvas']['stroke']();
					}
				}
			}
			self['canvas']['translate'](160, 20);
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#ff0'));
			self['canvas']['setLineWidth'](4);
			self['canvas']['beginPath']();
			self['canvas']['arc'](75, 75, 50, 0, (typeof ($mul7=$p['getattr']($m['math'], 'pi'))==typeof ($mul8=2) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)), true);
			self['canvas']['moveTo'](110, 75);
			self['canvas']['arc'](75, 75, 35, 0, $p['getattr']($m['math'], 'pi'), false);
			self['canvas']['moveTo'](65, 65);
			self['canvas']['arc'](60, 65, 5, 0, (typeof ($mul9=$p['getattr']($m['math'], 'pi'))==typeof ($mul10=2) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)), true);
			self['canvas']['moveTo'](95, 65);
			self['canvas']['arc'](90, 65, 5, 0, (typeof ($mul11=$p['getattr']($m['math'], 'pi'))==typeof ($mul12=2) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)), true);
			self['canvas']['stroke']();
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickArcs'] = $method;
		$method = $pyjs__bind_method2('onClickBezier', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['translate'](30, 70);
			self['canvas']['setFillStyle']($m['Color']['Color']('#f00'));
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#0f0'));
			self['canvas']['setLineWidth'](2);
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](75, 25);
			self['canvas']['quadraticCurveTo'](25, 25, 25, 62.5);
			self['canvas']['quadraticCurveTo'](25, 100, 50, 100);
			self['canvas']['quadraticCurveTo'](50, 120, 30, 125);
			self['canvas']['quadraticCurveTo'](60, 120, 65, 100);
			self['canvas']['quadraticCurveTo'](125, 100, 125, 62.5);
			self['canvas']['quadraticCurveTo'](125, 25, 75, 25);
			self['canvas']['stroke']();
			self['canvas']['translate'](140, 0);
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](75, 40);
			self['canvas']['cubicCurveTo'](75, 37, 70, 25, 50, 25);
			self['canvas']['cubicCurveTo'](20, 25, 20, 62.5, 20, 62.5);
			self['canvas']['cubicCurveTo'](20, 80, 40, 102, 75, 120);
			self['canvas']['cubicCurveTo'](110, 102, 130, 80, 130, 62.5);
			self['canvas']['cubicCurveTo'](130, 62.5, 130, 25, 100, 25);
			self['canvas']['cubicCurveTo'](85, 25, 75, 37, 75, 40);
			self['canvas']['fill']();
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickBezier'] = $method;
		$method = $pyjs__bind_method2('onClickColours', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter5_nextval,$mul27,$iter6_type,$iter5_array,$iter3_array,$mul30,$iter5_iter,$iter4_type,$iter5_type,$iter6_iter,$iter4_iter,$iter6_nextval,$iter3_idx,$sub7,$sub8,$iter3_iter,$add7,$iter5_idx,$sub3,$sub2,$sub1,$mul25,$mul22,$sub6,$mul20,$sub4,$mul28,$iter6_idx,$mul29,$mul23,$mul26,$iter6_array,$add10,$iter3_type,$mul24,$mul17,$mul16,$mul15,$mul14,$mul13,$add9,i,$iter4_nextval,j,$mul19,$mul18,$iter4_idx,$sub5,$iter4_array,$add8,$mul21,$iter3_nextval;
			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['translate'](20, 20);
			self['canvas']['setFillStyle']($m['Color']['Color'](255, 165, 0));
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#FFA500'));
			$iter3_iter = $p['range'](6);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				$iter4_iter = $p['range'](6);
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					j = $iter4_nextval;
					self['canvas']['setFillStyle']($m['Color']['Color']($p['float_int']($m['math']['floor']((typeof ($sub1=255)==typeof ($sub2=(typeof ($mul13=42.5)==typeof ($mul14=i) && typeof $mul13=='number'?
						$mul13*$mul14:
						$p['op_mul']($mul13,$mul14))) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2)))), $p['float_int']($m['math']['floor']((typeof ($sub3=255)==typeof ($sub4=(typeof ($mul15=42.5)==typeof ($mul16=j) && typeof $mul15=='number'?
						$mul15*$mul16:
						$p['op_mul']($mul15,$mul16))) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4)))), 0));
					self['canvas']['fillRect']((typeof ($mul17=j)==typeof ($mul18=25) && typeof $mul17=='number'?
						$mul17*$mul18:
						$p['op_mul']($mul17,$mul18)), (typeof ($mul19=i)==typeof ($mul20=25) && typeof $mul19=='number'?
						$mul19*$mul20:
						$p['op_mul']($mul19,$mul20)), 25, 25);
				}
			}
			self['canvas']['translate'](160, 160);
			$iter5_iter = $p['range'](6);
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				$iter6_iter = $p['range'](6);
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					j = $iter6_nextval;
					self['canvas']['setStrokeStyle']($m['Color']['Color'](0, $p['float_int']($m['math']['floor']((typeof ($sub5=255)==typeof ($sub6=(typeof ($mul21=42.5)==typeof ($mul22=i) && typeof $mul21=='number'?
						$mul21*$mul22:
						$p['op_mul']($mul21,$mul22))) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6)))), $p['float_int']($m['math']['floor']((typeof ($sub7=255)==typeof ($sub8=(typeof ($mul23=42.5)==typeof ($mul24=j) && typeof $mul23=='number'?
						$mul23*$mul24:
						$p['op_mul']($mul23,$mul24))) && (typeof $sub7=='number'||typeof $sub7=='string')?
						$sub7-$sub8:
						$p['op_sub']($sub7,$sub8))))));
					self['canvas']['beginPath']();
					self['canvas']['arc']((typeof ($add7=12.5)==typeof ($add8=(typeof ($mul25=j)==typeof ($mul26=25) && typeof $mul25=='number'?
						$mul25*$mul26:
						$p['op_mul']($mul25,$mul26))) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8)), (typeof ($add9=12.5)==typeof ($add10=(typeof ($mul27=i)==typeof ($mul28=25) && typeof $mul27=='number'?
						$mul27*$mul28:
						$p['op_mul']($mul27,$mul28))) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10)), 10, 0, (typeof ($mul29=$p['getattr']($m['math'], 'pi'))==typeof ($mul30=2) && typeof $mul29=='number'?
						$mul29*$mul30:
						$p['op_mul']($mul29,$mul30)), true);
					self['canvas']['stroke']();
				}
			}
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickColours'] = $method;
		$method = $pyjs__bind_method2('onClickTranslate', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter7_array,color,$add13,$iter8_iter,$add21,$add18,$add22,$iter7_type,$div5,$iter8_idx,$iter7_iter,$iter8_type,$add14,$add15,$add16,$add17,$add11,$add12,$iter7_idx,$div3,$2,$add19,$div4,$1,$mul36,$iter7_nextval,i,$div6,j,$iter8_array,$mul38,$add20,$mul35,$mul34,$mul37,$mul32,$mul31,$mul33,$iter8_nextval;
			$p['getattr'](self, 'chart').run = false;
			color = $p['list']([$m['Color']['Color']('#fc0'), $m['Color']['Color']('#0cf'), $m['Color']['Color']('#cf0')]);
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['translate'](25, 25);
			$iter7_iter = $p['range'](3);
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				i = $iter7_nextval;
				$iter8_iter = $p['range'](3);
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					j = $iter8_nextval;
					self['canvas']['setStrokeStyle']((typeof ($1=color).__array != 'undefined'?
						((typeof $1.__array[$2=j]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(j)));
					self['canvas']['saveContext']();
					self['canvas']['translate']((typeof ($add11=50)==typeof ($add12=(typeof ($mul31=j)==typeof ($mul32=100) && typeof $mul31=='number'?
						$mul31*$mul32:
						$p['op_mul']($mul31,$mul32))) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12)), (typeof ($add13=50)==typeof ($add14=(typeof ($mul33=i)==typeof ($mul34=100) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34))) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14)));
					self['chart']['drawSpirograph'](2000, (typeof ($div3=(typeof ($mul35=20.0)==typeof ($mul36=(typeof ($add15=j)==typeof ($add16=2) && (typeof $add15=='number'||typeof $add15=='string')?
						$add15+$add16:
						$p['op_add']($add15,$add16))) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36)))==typeof ($div4=(typeof ($add17=j)==typeof ($add18=1) && (typeof $add17=='number'||typeof $add17=='string')?
						$add17+$add18:
						$p['op_add']($add17,$add18))) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)), (typeof ($div5=(typeof ($mul37=(typeof ($usub1=8.0)=='number'?
						-$usub1:
						$p['op_usub']($usub1)))==typeof ($mul38=(typeof ($add19=i)==typeof ($add20=3) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20))) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38)))==typeof ($div6=(typeof ($add21=i)==typeof ($add22=1) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22))) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6)), 10.0);
					self['canvas']['restoreContext']();
				}
			}
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickTranslate'] = $method;
		$method = $pyjs__bind_method2('onClickScale', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['translate'](25, 25);
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#fc0'));
			self['canvas']['setLineWidth'](1.5);
			self['canvas']['saveContext']();
			self['canvas']['translate'](50, 50);
			self['chart']['drawSpirograph'](2000, 22, 6, 5);
			self['canvas']['translate'](100, 0);
			self['canvas']['scale'](0.75, 0.75);
			self['chart']['drawSpirograph'](2000, 22, 6, 5);
			self['canvas']['translate'](133.333, 0);
			self['canvas']['scale'](0.75, 0.75);
			self['chart']['drawSpirograph'](2000, 22, 6, 5);
			self['canvas']['restoreContext']();
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#0cf'));
			self['canvas']['saveContext']();
			self['canvas']['translate'](50, 150);
			self['canvas']['scale'](1, 0.75);
			self['chart']['drawSpirograph'](2000, 22, 6, 5);
			self['canvas']['translate'](100, 0);
			self['canvas']['scale'](1, 0.75);
			self['chart']['drawSpirograph'](2000, 22, 6, 5);
			self['canvas']['translate'](100, 0);
			self['canvas']['scale'](1, 0.75);
			self['chart']['drawSpirograph'](2000, 22, 6, 5);
			self['canvas']['restoreContext']();
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#cf0'));
			self['canvas']['saveContext']();
			self['canvas']['translate'](50, 250);
			self['canvas']['scale'](0.75, 1);
			self['chart']['drawSpirograph'](2000, 22, 6, 5);
			self['canvas']['translate'](133.333, 0);
			self['canvas']['scale'](0.75, 1);
			self['chart']['drawSpirograph'](2000, 22, 6, 5);
			self['canvas']['translate'](177.777, 0);
			self['canvas']['scale'](0.75, 1);
			self['chart']['drawSpirograph'](2000, 22, 6, 5);
			self['canvas']['restoreContext']();
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickScale'] = $method;
		$method = $pyjs__bind_method2('onClickRotate', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter10_nextval,$iter9_nextval,$mul41,$iter10_iter,$mul48,$mul49,$iter9_iter,$mul44,$mul45,$mul47,$mul40,$iter9_idx,$mul42,$mul43,$sub9,$iter9_type,$iter10_idx,$mul46,$sub10,$div8,$div7,$mul50,i,$mul52,$mul51,j,$iter10_array,$mul39,$iter10_type,$iter9_array;
			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['translate'](175, 175);
			self['canvas']['scale'](1.6, 1.6);
			$iter9_iter = $p['range'](1, 6);
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				i = $iter9_nextval;
				self['canvas']['saveContext']();
				self['canvas']['setFillStyle']($m['Color']['Color']($p['sprintf']('rgb(%d,%d,255)', $p['tuple']([(typeof ($mul39=51)==typeof ($mul40=i) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40)), (typeof ($sub9=255)==typeof ($sub10=(typeof ($mul41=51)==typeof ($mul42=i) && typeof $mul41=='number'?
					$mul41*$mul42:
					$p['op_mul']($mul41,$mul42))) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10))]))));
				$iter10_iter = $p['range']((typeof ($mul43=i)==typeof ($mul44=6) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44)));
				if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter.__iter__();
					$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					j = $iter10_nextval;
					self['canvas']['rotate']((typeof ($div7=(typeof ($mul45=$p['getattr']($m['math'], 'pi'))==typeof ($mul46=2) && typeof $mul45=='number'?
						$mul45*$mul46:
						$p['op_mul']($mul45,$mul46)))==typeof ($div8=(typeof ($mul47=i)==typeof ($mul48=6) && typeof $mul47=='number'?
						$mul47*$mul48:
						$p['op_mul']($mul47,$mul48))) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)));
					self['canvas']['beginPath']();
					self['canvas']['arc'](0, (typeof ($mul49=i)==typeof ($mul50=12.5) && typeof $mul49=='number'?
						$mul49*$mul50:
						$p['op_mul']($mul49,$mul50)), 5, 0, (typeof ($mul51=$p['getattr']($m['math'], 'pi'))==typeof ($mul52=2) && typeof $mul51=='number'?
						$mul51*$mul52:
						$p['op_mul']($mul51,$mul52)), true);
					self['canvas']['fill']();
				}
				self['canvas']['restoreContext']();
			}
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickRotate'] = $method;
		$method = $pyjs__bind_method2('onClickLines', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter12_type,$iter11_type,$mul57,$add43,dy,$add37,$add40,$eq30,$add34,$mod3,$add35,$add29,$add28,$add49,$add48,$add47,$add46,$add44,$add25,$add24,$add27,$add26,$iter12_nextval,$iter11_idx,$iter11_iter,$iter12_array,$add32,$mul58,$add42,$iter11_array,$eq29,$iter11_nextval,$bool17,$add50,$add38,$add39,$mod4,i,$add33,$add30,$add31,$add36,$mul56,$mul55,$mul54,$iter12_iter,$mul53,$add41,$add45,$iter12_idx,$add23;
			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['scale'](0.9, 0.9);
			self['canvas']['translate'](30, 40);
			self['canvas']['saveContext']();
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#9CFF00'));
			$iter11_iter = $p['range'](10);
			if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter.__iter__();
				$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				i = $iter11_nextval;
				self['canvas']['setLineWidth']((typeof ($add23=1)==typeof ($add24=i) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$p['op_add']($add23,$add24)));
				self['canvas']['beginPath']();
				self['canvas']['moveTo']((typeof ($add25=5)==typeof ($add26=(typeof ($mul53=i)==typeof ($mul54=14) && typeof $mul53=='number'?
					$mul53*$mul54:
					$p['op_mul']($mul53,$mul54))) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$p['op_add']($add25,$add26)), 5);
				self['canvas']['lineTo']((typeof ($add27=5)==typeof ($add28=(typeof ($mul55=i)==typeof ($mul56=14) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56))) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$p['op_add']($add27,$add28)), 140);
				self['canvas']['stroke']();
			}
			self['canvas']['restoreContext']();
			self['canvas']['saveContext']();
			self['canvas']['translate'](0, 170);
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#09f'));
			self['canvas']['setLineWidth'](2);
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](10, 10);
			self['canvas']['lineTo'](140, 10);
			self['canvas']['moveTo'](10, 140);
			self['canvas']['lineTo'](140, 140);
			self['canvas']['stroke']();
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#9CFF00'));
			self['canvas']['setLineWidth'](15);
			self['canvas']['setLineCap']($p['getattr']($m['GWTCanvasConsts'], 'BUTT'));
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](25, 10);
			self['canvas']['lineTo'](25, 140);
			self['canvas']['stroke']();
			self['canvas']['setLineCap']($p['getattr']($m['GWTCanvasConsts'], 'ROUND'));
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](75, 10);
			self['canvas']['lineTo'](75, 140);
			self['canvas']['stroke']();
			self['canvas']['setLineCap']($p['getattr']($m['GWTCanvasConsts'], 'SQUARE'));
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](125, 10);
			self['canvas']['lineTo'](125, 140);
			self['canvas']['stroke']();
			self['canvas']['restoreContext']();
			self['canvas']['saveContext']();
			self['canvas']['translate'](170, 0);
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#9CFF00'));
			self['canvas']['setLineWidth'](10);
			self['canvas']['setLineJoin']($p['getattr']($m['GWTCanvasConsts'], 'ROUND'));
			self['canvas']['beginPath']();
			self['canvas']['moveTo']((typeof ($usub2=5)=='number'?
				-$usub2:
				$p['op_usub']($usub2)), 5);
			self['canvas']['lineTo'](35, 45);
			self['canvas']['lineTo'](75, 5);
			self['canvas']['lineTo'](115, 45);
			self['canvas']['lineTo'](155, 5);
			self['canvas']['stroke']();
			self['canvas']['setLineJoin']($p['getattr']($m['GWTCanvasConsts'], 'BEVEL'));
			self['canvas']['beginPath']();
			self['canvas']['moveTo']((typeof ($usub3=5)=='number'?
				-$usub3:
				$p['op_usub']($usub3)), (typeof ($add29=5)==typeof ($add30=40) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				$p['op_add']($add29,$add30)));
			self['canvas']['lineTo'](35, (typeof ($add31=45)==typeof ($add32=40) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$p['op_add']($add31,$add32)));
			self['canvas']['lineTo'](75, (typeof ($add33=5)==typeof ($add34=40) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				$p['op_add']($add33,$add34)));
			self['canvas']['lineTo'](115, (typeof ($add35=45)==typeof ($add36=40) && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				$p['op_add']($add35,$add36)));
			self['canvas']['lineTo'](155, (typeof ($add37=5)==typeof ($add38=40) && (typeof $add37=='number'||typeof $add37=='string')?
				$add37+$add38:
				$p['op_add']($add37,$add38)));
			self['canvas']['stroke']();
			self['canvas']['setLineJoin']($p['getattr']($m['GWTCanvasConsts'], 'MITER'));
			self['canvas']['beginPath']();
			self['canvas']['moveTo']((typeof ($usub4=5)=='number'?
				-$usub4:
				$p['op_usub']($usub4)), (typeof ($add39=5)==typeof ($add40=80) && (typeof $add39=='number'||typeof $add39=='string')?
				$add39+$add40:
				$p['op_add']($add39,$add40)));
			self['canvas']['lineTo'](35, (typeof ($add41=45)==typeof ($add42=80) && (typeof $add41=='number'||typeof $add41=='string')?
				$add41+$add42:
				$p['op_add']($add41,$add42)));
			self['canvas']['lineTo'](75, (typeof ($add43=5)==typeof ($add44=80) && (typeof $add43=='number'||typeof $add43=='string')?
				$add43+$add44:
				$p['op_add']($add43,$add44)));
			self['canvas']['lineTo'](115, (typeof ($add45=45)==typeof ($add46=80) && (typeof $add45=='number'||typeof $add45=='string')?
				$add45+$add46:
				$p['op_add']($add45,$add46)));
			self['canvas']['lineTo'](155, (typeof ($add47=5)==typeof ($add48=80) && (typeof $add47=='number'||typeof $add47=='string')?
				$add47+$add48:
				$p['op_add']($add47,$add48)));
			self['canvas']['stroke']();
			self['canvas']['restoreContext']();
			self['canvas']['saveContext']();
			self['canvas']['translate'](170, 170);
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#09f'));
			self['canvas']['setLineWidth'](2);
			self['canvas']['strokeRect']((typeof ($usub5=5)=='number'?
				-$usub5:
				$p['op_usub']($usub5)), 50, 160, 50);
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#9CFF00'));
			self['canvas']['setLineWidth'](10);
			self['canvas']['setMiterLimit'](10);
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](0, 100);
			$iter12_iter = $p['range'](19);
			if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter.__iter__();
				$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				i = $iter12_nextval;
				if ((($bool17=(($eq29=(typeof ($mod3=i)==typeof ($mod4=2) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)))===($eq30=0)&&$eq29===null?true:
					($eq29===null?false:($eq30===null?false:
						((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
							((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
								$eq29==$eq30)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					dy = 25.0;
				}
				else {
					dy = (typeof ($usub6=25.0)=='number'?
						-$usub6:
						$p['op_usub']($usub6));
				}
				self['canvas']['lineTo']((typeof ($mul57=$m['math']['pow'](i, 1.5))==typeof ($mul58=2.0) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58)), (typeof ($add49=75)==typeof ($add50=dy) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					$p['op_add']($add49,$add50)));
			}
			self['canvas']['stroke']();
			self['canvas']['restoreContext']();
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickLines'] = $method;
		$method = $pyjs__bind_method2('onClickClock', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$p['getattr'](self, 'chart').run = true;
			self['chart']['drawClock']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickClock'] = $method;
		$method = $pyjs__bind_method2('onClickTrans', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $add57,$iter13_idx,$iter15_idx,$mul62,$mul63,$mul60,$mul61,$mul66,$iter15_iter,$mul64,$mul65,$div10,$add55,$iter13_type,$iter14_array,$iter14_type,$iter15_array,$mul59,$div9,$iter14_iter,$add54,$iter14_idx,$iter14_nextval,$add51,$add52,$add53,$iter13_nextval,$add56,$iter13_iter,i,j,$iter13_array,$add58,$iter15_nextval,$iter15_type;
			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['translate'](20, 180);
			self['canvas']['setFillStyle']($m['Color']['Color']('rgb(255,221,0)'));
			self['canvas']['fillRect'](0, 0, 150, 37.5);
			self['canvas']['setFillStyle']($m['Color']['Color']('rgb(102,204,0)'));
			self['canvas']['fillRect'](0, 37.5, 150, 37.5);
			self['canvas']['setFillStyle']($m['Color']['Color']('rgb(0,153,255)'));
			self['canvas']['fillRect'](0, 75, 150, 37.5);
			self['canvas']['setFillStyle']($m['Color']['Color']('rgb(255,51,0)'));
			self['canvas']['fillRect'](0, 112.5, 150, 37.5);
			$iter13_iter = $p['range'](10);
			if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
				$iter13_type = 0;
			} else {
				$iter13_iter = $iter13_iter.__iter__();
				$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter13_idx = 0;
			while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
				i = $iter13_nextval;
				self['canvas']['setFillStyle']($m['Color']['Color']($p['sprintf']('rgba(255,255,255,%f)', (typeof ($div9=(typeof ($add51=i)==typeof ($add52=1) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					$p['op_add']($add51,$add52)))==typeof ($div10=10.0) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10)))));
				$iter14_iter = $p['range'](4);
				if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter.__iter__();
					$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					j = $iter14_nextval;
					self['canvas']['fillRect']((typeof ($add53=5)==typeof ($add54=(typeof ($mul59=i)==typeof ($mul60=14.0) && typeof $mul59=='number'?
						$mul59*$mul60:
						$p['op_mul']($mul59,$mul60))) && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						$p['op_add']($add53,$add54)), (typeof ($add55=5)==typeof ($add56=(typeof ($mul61=j)==typeof ($mul62=37.5) && typeof $mul61=='number'?
						$mul61*$mul62:
						$p['op_mul']($mul61,$mul62))) && (typeof $add55=='number'||typeof $add55=='string')?
						$add55+$add56:
						$p['op_add']($add55,$add56)), 14, 27.5);
				}
			}
			self['canvas']['restoreContext']();
			self['canvas']['saveContext']();
			self['canvas']['translate'](180, 20);
			self['canvas']['setGlobalAlpha'](1.0);
			self['canvas']['setFillStyle']($m['Color']['Color']('#FD0'));
			self['canvas']['fillRect'](0, 0, 75, 75);
			self['canvas']['setFillStyle']($m['Color']['Color']('#6C0'));
			self['canvas']['fillRect'](75, 0, 75, 75);
			self['canvas']['setFillStyle']($m['Color']['Color']('#09F'));
			self['canvas']['fillRect'](0, 75, 75, 75);
			self['canvas']['setFillStyle']($m['Color']['Color']('#F30'));
			self['canvas']['fillRect'](75, 75, 75, 75);
			self['canvas']['setFillStyle']($m['Color']['Color']('#FFF'));
			self['canvas']['setGlobalAlpha'](0.2);
			$iter15_iter = $p['range'](7);
			if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
				$iter15_type = 0;
			} else {
				$iter15_iter = $iter15_iter.__iter__();
				$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter15_idx = 0;
			while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
				i = $iter15_nextval;
				self['canvas']['beginPath']();
				self['canvas']['arc'](75, 75, (typeof ($add57=10)==typeof ($add58=(typeof ($mul63=10)==typeof ($mul64=i) && typeof $mul63=='number'?
					$mul63*$mul64:
					$p['op_mul']($mul63,$mul64))) && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					$p['op_add']($add57,$add58)), 0, (typeof ($mul65=$p['getattr']($m['math'], 'pi'))==typeof ($mul66=2) && typeof $mul65=='number'?
					$mul65*$mul66:
					$p['op_mul']($mul65,$mul66)), true);
				self['canvas']['fill']();
			}
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickTrans'] = $method;
		$method = $pyjs__bind_method2('onClickText', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $mul70,$mul67,$div14,$mul69,$div11,$div12,$div13,$mul68;
			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['setFillStyle']($m['Color']['Color']('#FFF'));
			self['canvas']['fillText']('Simple Text', 10, 10);
			self['canvas']['saveContext']();
			self['canvas']['setFillStyle']($m['Color']['Color']('#00F'));
			self['canvas']['fillText']('Changed Font Text', 10, 30);
			self['canvas']['restoreContext']();
			self['canvas']['saveContext']();
			self['canvas']['translate'](100, 100);
			self['canvas']['saveContext']();
			self['canvas']['rotate']((typeof ($mul67=45.0)==typeof ($mul68=(typeof ($div11=$p['getattr']($m['math'], 'pi'))==typeof ($div12=180) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12))) && typeof $mul67=='number'?
				$mul67*$mul68:
				$p['op_mul']($mul67,$mul68)));
			self['canvas']['fillText']('CW 45d Rotated Text', 0, 0);
			self['canvas']['restoreContext']();
			self['canvas']['rotate']((typeof ($mul69=90.0)==typeof ($mul70=(typeof ($div13=$p['getattr']($m['math'], 'pi'))==typeof ($div14=180) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14))) && typeof $mul69=='number'?
				$mul69*$mul70:
				$p['op_mul']($mul69,$mul70)));
			self['canvas']['fillText']('CW 90d Rotated Text', 0, 0);
			self['canvas']['restoreContext']();
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickText'] = $method;
		$method = $pyjs__bind_method2('onClickGradients', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var radgrad,fillLG_1V,fillLG_C1V,fillLG_C3,fillLG_C2,fillLG_C1,fillLG_C2V,fillLG_1H,fillLG_0;
			$p['getattr'](self, 'chart').run = false;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			fillLG_0 = self['canvas']['createLinearGradient'](0, 0, 400, 400);
			fillLG_0['addColorStop'](0.0, $m['Color']['Color']('#100000'));
			fillLG_0['addColorStop'](1.0, $m['Color']['Color']('#F01010'));
			self['canvas']['setFillStyle'](fillLG_0);
			self['canvas']['fillRect'](0, 0, 400, 400);
			fillLG_1H = self['canvas']['createLinearGradient'](20, 0, 120, 0);
			fillLG_1H['addColorStop'](0.0, $m['Color']['Color']('#101010'));
			fillLG_1H['addColorStop'](0.35, $m['Color']['Color']('#f0f0f0'));
			fillLG_1H['addColorStop'](0.65, $m['Color']['Color']('#f0f0f0'));
			fillLG_1H['addColorStop'](1.0, $m['Color']['Color']('#101010'));
			self['canvas']['setFillStyle'](fillLG_1H);
			self['canvas']['fillRect'](20, 20, 100, 20);
			fillLG_1V = self['canvas']['createLinearGradient'](140, 20, 140, 40);
			fillLG_1V['addColorStop'](0.0, $m['Color']['Color']('#101010'));
			fillLG_1V['addColorStop'](0.35, $m['Color']['Color']('#f0f0f0'));
			fillLG_1V['addColorStop'](0.65, $m['Color']['Color']('#f0f0f0'));
			fillLG_1V['addColorStop'](1.0, $m['Color']['Color']('#101010'));
			self['canvas']['setFillStyle'](fillLG_1V);
			self['canvas']['fillRect'](140, 20, 100, 20);
			fillLG_C1 = self['canvas']['createLinearGradient'](20, 0, 120, 0);
			fillLG_C1['addColorStop'](0.0, $m['Color']['Color']('#001000'));
			fillLG_C1['addColorStop'](0.35, $m['Color']['Color']('#00f000'));
			fillLG_C1['addColorStop'](0.35, $m['Color']['Color']('#f0f0f0'));
			fillLG_C1['addColorStop'](0.65, $m['Color']['Color']('#f0f0f0'));
			fillLG_C1['addColorStop'](0.65, $m['Color']['Color']('#0000f0'));
			fillLG_C1['addColorStop'](1.0, $m['Color']['Color']('#000010'));
			self['canvas']['setFillStyle'](fillLG_C1);
			self['canvas']['fillRect'](20, 50, 100, 20);
			fillLG_C1V = self['canvas']['createLinearGradient'](140, 50, 140, 70);
			fillLG_C1V['addColorStop'](0.0, $m['Color']['Color']('#001000'));
			fillLG_C1V['addColorStop'](0.35, $m['Color']['Color']('#00f000'));
			fillLG_C1V['addColorStop'](0.35, $m['Color']['Color']('#f0f0f0'));
			fillLG_C1V['addColorStop'](0.65, $m['Color']['Color']('#f0f0f0'));
			fillLG_C1V['addColorStop'](0.65, $m['Color']['Color']('#0000f0'));
			fillLG_C1V['addColorStop'](1.0, $m['Color']['Color']('#000010'));
			self['canvas']['setFillStyle'](fillLG_C1V);
			self['canvas']['fillRect'](140, 50, 100, 20);
			fillLG_C2 = self['canvas']['createLinearGradient'](20, 0, 120, 0);
			fillLG_C2['addColorStop'](0.0, $m['Color']['Color']('#001000'));
			fillLG_C2['addColorStop'](0.35, $m['Color']['Color']('#00f000'));
			fillLG_C2['addColorStop'](0.5, $m['Color']['Color']('#f0f0f0'));
			fillLG_C2['addColorStop'](0.65, $m['Color']['Color']('#0000f0'));
			fillLG_C2['addColorStop'](1.0, $m['Color']['Color']('#000010'));
			self['canvas']['setFillStyle'](fillLG_C2);
			self['canvas']['fillRect'](20, 80, 100, 20);
			fillLG_C2V = self['canvas']['createLinearGradient'](140, 80, 140, 100);
			fillLG_C2V['addColorStop'](0.0, $m['Color']['Color']('#001000'));
			fillLG_C2V['addColorStop'](0.35, $m['Color']['Color']('#00f000'));
			fillLG_C2V['addColorStop'](0.5, $m['Color']['Color']('#f0f0f0'));
			fillLG_C2V['addColorStop'](0.65, $m['Color']['Color']('#0000f0'));
			fillLG_C2V['addColorStop'](1.0, $m['Color']['Color']('#000010'));
			self['canvas']['setFillStyle'](fillLG_C2V);
			self['canvas']['fillRect'](140, 80, 100, 20);
			fillLG_C3 = self['canvas']['createLinearGradient'](45, 0, 145, 20);
			fillLG_C3['addColorStop'](0.0, $m['Color']['Color']('#001000'));
			fillLG_C3['addColorStop'](0.35, $m['Color']['Color']('#00f000'));
			fillLG_C3['addColorStop'](0.5, $m['Color']['Color']('#f0f0f0'));
			fillLG_C3['addColorStop'](0.65, $m['Color']['Color']('#0000f0'));
			fillLG_C3['addColorStop'](1.0, $m['Color']['Color']('#000010'));
			self['canvas']['setFillStyle'](fillLG_C3);
			self['canvas']['fillRect'](20, 110, 100, 20);
			self['canvas']['saveContext']();
			self['canvas']['translate'](150, 150);
			radgrad = self['canvas']['createRadialGradient'](45, 45, 10, 52, 50, 30);
			radgrad['addColorStop'](0, $m['Color']['Color']('#A7D30C'));
			radgrad['addColorStop'](0.5, $m['Color']['Color']('#019F62'));
			radgrad['addColorStop'](1, $m['Color']['Color']('rgba(1,159,98,0)'));
			self['canvas']['setFillStyle'](radgrad);
			self['canvas']['fillRect'](0, 0, 150, 150);
			self['canvas']['restoreContext']();
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickGradients'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SuiteDemoControls', $p['tuple']($bases), $data);
	})();
	$m['SuiteDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SuiteDemo';
		$method = $pyjs__bind_method2('__init__', function(theCanvas) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				theCanvas = arguments[1];
			}

			$m['SimpleCanvasDemo']['__init__'](self, theCanvas);
			self.width = 350;
			self.height = 350;
			self.demoName = 'Feature Suite';
			self.run = false;
			return null;
		}
	, 1, [null,null,['self'],['theCanvas']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createControls', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.controls = $m['SuiteDemoControls'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createControls'] = $method;
		$method = $pyjs__bind_method2('drawDemo', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvas']['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			self['canvas']['setBackgroundColor']($p['getattr']($m['Color'], 'BLACK'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawDemo'] = $method;
		$method = $pyjs__bind_method2('stopDemo', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.run = false;
			self['canvas']['setBackgroundColor']($p['getattr']($m['GWTCanvasConsts'], 'TRANSPARENT'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stopDemo'] = $method;
		$method = $pyjs__bind_method2('getTimeSeconds', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mod5,$mod6;
			return (typeof ($mod5=$m['time']['time']())==typeof ($mod6=60.0) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTimeSeconds'] = $method;
		$method = $pyjs__bind_method2('getTimeMilliseconds', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul71,$mul72,$mod7,$mod8;
			return (typeof ($mod7=(typeof ($mul71=$m['time']['time']())==typeof ($mul72=1000.0) && typeof $mul71=='number'?
				$mul71*$mul72:
				$p['op_mul']($mul71,$mul72)))==typeof ($mod8=1.0) && typeof $mod7=='number'?
				(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
				$p['op_mod']($mod7,$mod8));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTimeMilliseconds'] = $method;
		$method = $pyjs__bind_method2('getTimeMinutes', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div15,$mod9,$div16,$mod10;
			return (typeof ($mod9=(typeof ($div15=$m['time']['time']())==typeof ($div16=60) && typeof $div15=='number' && $div16 !== 0?
				$div15/$div16:
				$p['op_div']($div15,$div16)))==typeof ($mod10=60.0) && typeof $mod9=='number'?
				(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
				$p['op_mod']($mod9,$mod10));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTimeMinutes'] = $method;
		$method = $pyjs__bind_method2('getTimeHours', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mod11,$div17,$div18,$mod12;
			return (typeof ($mod11=(typeof ($div17=$m['time']['time']())==typeof ($div18=3600) && typeof $div17=='number' && $div18 !== 0?
				$div17/$div18:
				$p['op_div']($div17,$div18)))==typeof ($mod12=12.0) && typeof $mod11=='number'?
				(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
				$p['op_mod']($mod11,$mod12));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTimeHours'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(tid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tid = arguments[1];
			}
			var $bool18,$bool19;
			if ((($bool19=!(($bool18=$p['getattr'](self, 'run')) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18.__nonzero__=='function'?
						$bool18.__nonzero__() :
						(typeof $bool18.__len__=='function'?
							($bool18.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				return null;
			}
			self['drawClock']();
			return null;
		}
	, 1, [null,null,['self'],['tid']]);
		$cls_definition['onTimer'] = $method;
		$method = $pyjs__bind_method2('drawClock', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul80,$div39,$add66,$mul81,$mul86,$add65,$div40,$mul93,$mul92,$mul91,$mul90,$iter16_idx,$div29,$eq31,sec,$iter17_type,$div38,$iter16_iter,$div35,$div37,$div32,$add64,$div30,$iter17_iter,$add61,$div19,$iter16_type,min,$mul77,$add68,$mul88,$bool20,$mul94,$iter16_nextval,$mul87,$div34,$iter17_nextval,$mod14,$mul82,$div36,$mul84,$mul85,$mod13,$div33,hr,$mul89,$add63,$div23,$iter17_array,$div31,$mul83,$mul79,$div25,$eq32,$div21,$div24,$iter16_array,$div20,$mul73,$div22,$mul75,$mul74,$div27,$mul76,i,$add59,$div26,$add60,$add67,$div28,$iter17_idx,$add62,$mul78;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['translate'](175, 175);
			self['canvas']['scale'](0.8, 0.8);
			self['canvas']['rotate']((typeof ($div19=(typeof ($usub7=$p['getattr']($m['math'], 'pi'))=='number'?
				-$usub7:
				$p['op_usub']($usub7)))==typeof ($div20=2) && typeof $div19=='number' && $div20 !== 0?
				$div19/$div20:
				$p['op_div']($div19,$div20)));
			self['canvas']['saveContext']();
			self['canvas']['beginPath']();
			self['canvas']['setLineWidth'](7);
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#325FA2'));
			self['canvas']['setFillStyle']($m['Color']['Color']('#fff'));
			self['canvas']['arc'](0, 0, 142, 0, (typeof ($mul73=$p['getattr']($m['math'], 'pi'))==typeof ($mul74=2) && typeof $mul73=='number'?
				$mul73*$mul74:
				$p['op_mul']($mul73,$mul74)), true);
			self['canvas']['fill']();
			self['canvas']['arc'](0, 0, 142, 0, (typeof ($mul75=$p['getattr']($m['math'], 'pi'))==typeof ($mul76=2) && typeof $mul75=='number'?
				$mul75*$mul76:
				$p['op_mul']($mul75,$mul76)), true);
			self['canvas']['stroke']();
			self['canvas']['restoreContext']();
			self['canvas']['setStrokeStyle']($p['getattr']($m['Color'], 'BLACK'));
			self['canvas']['setFillStyle']($p['getattr']($m['Color'], 'WHITE'));
			self['canvas']['setLineWidth'](4);
			self['canvas']['setLineCap']('round');
			self['canvas']['saveContext']();
			$iter16_iter = $p['range'](12);
			if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter.__iter__();
				$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				i = $iter16_nextval;
				self['canvas']['beginPath']();
				self['canvas']['rotate']((typeof ($div21=$p['getattr']($m['math'], 'pi'))==typeof ($div22=6) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22)));
				self['canvas']['moveTo'](100, 0);
				self['canvas']['lineTo'](120, 0);
				self['canvas']['stroke']();
			}
			self['canvas']['restoreContext']();
			self['canvas']['saveContext']();
			self['canvas']['setLineWidth'](2.5);
			$iter17_iter = $p['range'](60);
			if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
				$iter17_type = 0;
			} else {
				$iter17_iter = $iter17_iter.__iter__();
				$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter17_idx = 0;
			while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
				i = $iter17_nextval;
				if ((($bool20=!(($eq31=(typeof ($mod13=i)==typeof ($mod14=5) && typeof $mod13=='number'?
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
					$p['op_mod']($mod13,$mod14)))===($eq32=0)&&$eq31===null?true:
					($eq31===null?false:($eq32===null?false:
						((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
							((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
								$eq31==$eq32)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					self['canvas']['beginPath']();
					self['canvas']['moveTo'](117, 0);
					self['canvas']['lineTo'](120, 0);
					self['canvas']['stroke']();
				}
				self['canvas']['rotate']((typeof ($div23=$p['getattr']($m['math'], 'pi'))==typeof ($div24=30) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24)));
			}
			self['canvas']['restoreContext']();
			sec = self['getTimeSeconds']();
			min = (typeof ($add59=self['getTimeMinutes']())==typeof ($add60=(typeof ($div25=sec)==typeof ($div26=60.0) && typeof $div25=='number' && $div26 !== 0?
				$div25/$div26:
				$p['op_div']($div25,$div26))) && (typeof $add59=='number'||typeof $add59=='string')?
				$add59+$add60:
				$p['op_add']($add59,$add60));
			hr = (typeof ($add61=self['getTimeHours']())==typeof ($add62=(typeof ($div27=min)==typeof ($div28=60.0) && typeof $div27=='number' && $div28 !== 0?
				$div27/$div28:
				$p['op_div']($div27,$div28))) && (typeof $add61=='number'||typeof $add61=='string')?
				$add61+$add62:
				$p['op_add']($add61,$add62));
			self['canvas']['setFillStyle']($p['getattr']($m['Color'], 'BLACK'));
			self['canvas']['saveContext']();
			self['canvas']['rotate']((typeof ($add65=(typeof ($add63=(typeof ($div29=(typeof ($mul77=hr)==typeof ($mul78=$p['getattr']($m['math'], 'pi')) && typeof $mul77=='number'?
				$mul77*$mul78:
				$p['op_mul']($mul77,$mul78)))==typeof ($div30=6) && typeof $div29=='number' && $div30 !== 0?
				$div29/$div30:
				$p['op_div']($div29,$div30)))==typeof ($add64=(typeof ($mul79=(typeof ($div31=$p['getattr']($m['math'], 'pi'))==typeof ($div32=360) && typeof $div31=='number' && $div32 !== 0?
				$div31/$div32:
				$p['op_div']($div31,$div32)))==typeof ($mul80=min) && typeof $mul79=='number'?
				$mul79*$mul80:
				$p['op_mul']($mul79,$mul80))) && (typeof $add63=='number'||typeof $add63=='string')?
				$add63+$add64:
				$p['op_add']($add63,$add64)))==typeof ($add66=(typeof ($mul81=(typeof ($div33=$p['getattr']($m['math'], 'pi'))==typeof ($div34=21600) && typeof $div33=='number' && $div34 !== 0?
				$div33/$div34:
				$p['op_div']($div33,$div34)))==typeof ($mul82=sec) && typeof $mul81=='number'?
				$mul81*$mul82:
				$p['op_mul']($mul81,$mul82))) && (typeof $add65=='number'||typeof $add65=='string')?
				$add65+$add66:
				$p['op_add']($add65,$add66)));
			self['canvas']['setLineWidth'](7);
			self['canvas']['beginPath']();
			self['canvas']['moveTo']((typeof ($usub8=20)=='number'?
				-$usub8:
				$p['op_usub']($usub8)), 0);
			self['canvas']['lineTo'](80, 0);
			self['canvas']['stroke']();
			self['canvas']['restoreContext']();
			self['canvas']['saveContext']();
			self['canvas']['rotate']((typeof ($add67=(typeof ($mul83=(typeof ($div35=$p['getattr']($m['math'], 'pi'))==typeof ($div36=30) && typeof $div35=='number' && $div36 !== 0?
				$div35/$div36:
				$p['op_div']($div35,$div36)))==typeof ($mul84=min) && typeof $mul83=='number'?
				$mul83*$mul84:
				$p['op_mul']($mul83,$mul84)))==typeof ($add68=(typeof ($mul85=(typeof ($div37=$p['getattr']($m['math'], 'pi'))==typeof ($div38=1800) && typeof $div37=='number' && $div38 !== 0?
				$div37/$div38:
				$p['op_div']($div37,$div38)))==typeof ($mul86=sec) && typeof $mul85=='number'?
				$mul85*$mul86:
				$p['op_mul']($mul85,$mul86))) && (typeof $add67=='number'||typeof $add67=='string')?
				$add67+$add68:
				$p['op_add']($add67,$add68)));
			self['canvas']['setLineWidth'](5);
			self['canvas']['beginPath']();
			self['canvas']['moveTo']((typeof ($usub9=28)=='number'?
				-$usub9:
				$p['op_usub']($usub9)), 0);
			self['canvas']['lineTo'](112, 0);
			self['canvas']['stroke']();
			self['canvas']['restoreContext']();
			self['canvas']['saveContext']();
			self['canvas']['rotate']((typeof ($div39=(typeof ($mul87=sec)==typeof ($mul88=$p['getattr']($m['math'], 'pi')) && typeof $mul87=='number'?
				$mul87*$mul88:
				$p['op_mul']($mul87,$mul88)))==typeof ($div40=30) && typeof $div39=='number' && $div40 !== 0?
				$div39/$div40:
				$p['op_div']($div39,$div40)));
			self['canvas']['setStrokeStyle']($m['Color']['Color']('#D40000'));
			self['canvas']['setFillStyle']($m['Color']['Color']('#D40000'));
			self['canvas']['setLineWidth'](3);
			self['canvas']['beginPath']();
			self['canvas']['moveTo']((typeof ($usub10=30)=='number'?
				-$usub10:
				$p['op_usub']($usub10)), 0);
			self['canvas']['lineTo'](83, 0);
			self['canvas']['stroke']();
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](107, 0);
			self['canvas']['lineTo'](121, 0);
			self['canvas']['stroke']();
			self['canvas']['beginPath']();
			self['canvas']['arc'](0, 0, 10, 0, (typeof ($mul89=$p['getattr']($m['math'], 'pi'))==typeof ($mul90=2) && typeof $mul89=='number'?
				$mul89*$mul90:
				$p['op_mul']($mul89,$mul90)), true);
			self['canvas']['fill']();
			self['canvas']['beginPath']();
			self['canvas']['arc'](95, 0, 10, 0, (typeof ($mul91=$p['getattr']($m['math'], 'pi'))==typeof ($mul92=2) && typeof $mul91=='number'?
				$mul91*$mul92:
				$p['op_mul']($mul91,$mul92)), true);
			self['canvas']['stroke']();
			self['canvas']['beginPath']();
			self['canvas']['setFillStyle']($m['Color']['Color']('#555'));
			self['canvas']['arc'](0, 0, 3, 0, (typeof ($mul93=$p['getattr']($m['math'], 'pi'))==typeof ($mul94=2) && typeof $mul93=='number'?
				$mul93*$mul94:
				$p['op_mul']($mul93,$mul94)), true);
			self['canvas']['fill']();
			self['canvas']['restoreContext']();
			self['canvas']['restoreContext']();
			$m['Timer'](1000, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawClock'] = $method;
		$method = $pyjs__bind_method2('drawSpirograph', function(p, r0, r, o) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				p = arguments[1];
				r0 = arguments[2];
				r = arguments[3];
				o = arguments[4];
			}
			var $mul111,$mul99,$mul98,$mul97,$mul96,$mul95,$add80,$mul110,$eq33,$mul114,$eq36,$add78,$eq34,$eq35,y1,$mul106,y2,$add79,$mul107,$add69,$add73,$div43,$add77,$bool21,$bool23,$bool22,$div50,$div51,$div52,$add81,$div47,$sub18,$div46,$sub13,$sub12,$sub11,$and3,$and4,$and5,$sub15,$sub14,$mul104,$mul105,$sub16,$add75,$mul100,$mul101,$mul102,$mul103,x2,$add72,$mul109,x1,$mul108,$div49,$div42,$add76,$cmp4,$add74,$div44,$add70,$cmp3,$add71,i,$div41,$div48,$add82,$div45,$mul113,$sub17,$mul112;
			x1 = (typeof ($sub11=r0)==typeof ($sub12=o) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				$p['op_sub']($sub11,$sub12));
			y1 = 0;
			i = 1;
			x2 = null;
			y2 = null;
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](x1, y1);
			while ((($bool23=((($bool21=$and3=!(($eq33=x2)===($eq34=(typeof ($sub13=r0)==typeof ($sub14=o) && (typeof $sub13=='number'||typeof $sub13=='string')?
				$sub13-$sub14:
				$p['op_sub']($sub13,$sub14)))&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
				false :
				(typeof $bool21=='object'?
					(typeof $bool21.__nonzero__=='function'?
						$bool21.__nonzero__() :
						(typeof $bool21.__len__=='function'?
							($bool21.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool22=$and4=!(($eq35=y2)===($eq36=0)&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22.__nonzero__=='function'?
						$bool22.__nonzero__() :
						(typeof $bool22.__len__=='function'?
							($bool22.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp3=i)===($cmp4=p)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1):$and4):$and3)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				x2 = (typeof ($sub15=(typeof ($mul97=(typeof ($add69=r0)==typeof ($add70=r) && (typeof $add69=='number'||typeof $add69=='string')?
					$add69+$add70:
					$p['op_add']($add69,$add70)))==typeof ($mul98=$m['math']['cos']((typeof ($div41=(typeof ($mul95=i)==typeof ($mul96=$p['getattr']($m['math'], 'pi')) && typeof $mul95=='number'?
					$mul95*$mul96:
					$p['op_mul']($mul95,$mul96)))==typeof ($div42=72) && typeof $div41=='number' && $div42 !== 0?
					$div41/$div42:
					$p['op_div']($div41,$div42)))) && typeof $mul97=='number'?
					$mul97*$mul98:
					$p['op_mul']($mul97,$mul98)))==typeof ($sub16=(typeof ($mul103=(typeof ($add71=r)==typeof ($add72=o) && (typeof $add71=='number'||typeof $add71=='string')?
					$add71+$add72:
					$p['op_add']($add71,$add72)))==typeof ($mul104=$m['math']['cos']((typeof ($mul101=(typeof ($div43=(typeof ($add73=r0)==typeof ($add74=r) && (typeof $add73=='number'||typeof $add73=='string')?
					$add73+$add74:
					$p['op_add']($add73,$add74)))==typeof ($div44=r) && typeof $div43=='number' && $div44 !== 0?
					$div43/$div44:
					$p['op_div']($div43,$div44)))==typeof ($mul102=(typeof ($div45=(typeof ($mul99=i)==typeof ($mul100=$p['getattr']($m['math'], 'pi')) && typeof $mul99=='number'?
					$mul99*$mul100:
					$p['op_mul']($mul99,$mul100)))==typeof ($div46=72) && typeof $div45=='number' && $div46 !== 0?
					$div45/$div46:
					$p['op_div']($div45,$div46))) && typeof $mul101=='number'?
					$mul101*$mul102:
					$p['op_mul']($mul101,$mul102)))) && typeof $mul103=='number'?
					$mul103*$mul104:
					$p['op_mul']($mul103,$mul104))) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16));
				y2 = (typeof ($sub17=(typeof ($mul107=(typeof ($add75=r0)==typeof ($add76=r) && (typeof $add75=='number'||typeof $add75=='string')?
					$add75+$add76:
					$p['op_add']($add75,$add76)))==typeof ($mul108=$m['math']['sin']((typeof ($div47=(typeof ($mul105=i)==typeof ($mul106=$p['getattr']($m['math'], 'pi')) && typeof $mul105=='number'?
					$mul105*$mul106:
					$p['op_mul']($mul105,$mul106)))==typeof ($div48=72) && typeof $div47=='number' && $div48 !== 0?
					$div47/$div48:
					$p['op_div']($div47,$div48)))) && typeof $mul107=='number'?
					$mul107*$mul108:
					$p['op_mul']($mul107,$mul108)))==typeof ($sub18=(typeof ($mul113=(typeof ($add77=r)==typeof ($add78=o) && (typeof $add77=='number'||typeof $add77=='string')?
					$add77+$add78:
					$p['op_add']($add77,$add78)))==typeof ($mul114=$m['math']['sin']((typeof ($mul111=(typeof ($div49=(typeof ($add79=r0)==typeof ($add80=r) && (typeof $add79=='number'||typeof $add79=='string')?
					$add79+$add80:
					$p['op_add']($add79,$add80)))==typeof ($div50=r) && typeof $div49=='number' && $div50 !== 0?
					$div49/$div50:
					$p['op_div']($div49,$div50)))==typeof ($mul112=(typeof ($div51=(typeof ($mul109=i)==typeof ($mul110=$p['getattr']($m['math'], 'pi')) && typeof $mul109=='number'?
					$mul109*$mul110:
					$p['op_mul']($mul109,$mul110)))==typeof ($div52=72) && typeof $div51=='number' && $div52 !== 0?
					$div51/$div52:
					$p['op_div']($div51,$div52))) && typeof $mul111=='number'?
					$mul111*$mul112:
					$p['op_mul']($mul111,$mul112)))) && typeof $mul113=='number'?
					$mul113*$mul114:
					$p['op_mul']($mul113,$mul114))) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$p['op_sub']($sub17,$sub18));
				self['canvas']['lineTo'](x2, y2);
				x1 = x2;
				y1 = y2;
				i = (typeof ($add81=i)==typeof ($add82=1) && (typeof $add81=='number'||typeof $add81=='string')?
					$add81+$add82:
					$p['op_add']($add81,$add82));
			}
			self['canvas']['stroke']();
			return null;
		}
	, 1, [null,null,['self'],['p'],['r0'],['r'],['o']]);
		$cls_definition['drawSpirograph'] = $method;
		var $bases = new Array($m['SimpleCanvasDemo']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SuiteDemo', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end SuiteDemo */


/* end module: SuiteDemo */


/*
PYJS_DEPS: ['math', 'pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer', 'pyjamas.ui.Button.Button', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.Canvas.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasConsts', 'time', 'SimpleCanvasDemo.SimpleCanvasDemo', 'SimpleCanvasDemo']
*/
