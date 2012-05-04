/* start module: StaticDemo */
$pyjs.loaded_modules['StaticDemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['StaticDemo'].__was_initialized__) return $pyjs.loaded_modules['StaticDemo'];
	var $m = $pyjs.loaded_modules["StaticDemo"];
	$m.__repr__ = function() { return "<module: StaticDemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'StaticDemo';
	$m.__name__ = __mod_name__;


	$m['math'] = $p['___import___']('math', null);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
	$m['SimpleCanvasDemo'] = $p['___import___']('SimpleCanvasDemo.SimpleCanvasDemo', null, null, false);
	$m['StaticDemoControls'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'StaticDemo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Composite']['__init__'](self, $m['VerticalPanel']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('StaticDemoControls', $p['tuple']($bases), $data);
	})();
	$m['StaticDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'StaticDemo';
		$method = $pyjs__bind_method2('__init__', function(theCanvas) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				theCanvas = arguments[1];
			}

			$m['SimpleCanvasDemo']['__init__'](self, theCanvas);
			self.width = 400;
			self.height = 400;
			self.demoName = 'Static Scene';
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

			self.controls = $m['StaticDemoControls']();
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
			var $iter3_type,$mul24,$iter1_iter,$div2,$iter2_type,$mul20,$iter3_idx,$iter2_iter,$iter1_array,$sub2,$sub1,$mul22,$mul23,$iter3_array,$iter3_iter,$iter1_nextval,$div1,$iter2_idx,$mul14,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$iter1_type,$mul17,$mul16,$mul15,$iter2_nextval,$mul13,$mul12,$mul11,$mul10,i,j,$mul19,$mul18,$add2,$add1,$iter1_idx,$mul21,$iter3_nextval,$iter2_array;
			self['canvas']['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			self['canvas']['saveContext']();
			self['canvas']['setLineWidth'](1);
			self['canvas']['setFillStyle']($p['getattr']($m['Color'], 'GREEN'));
			self['canvas']['fillRect'](5, 5, 25, 25);
			self['canvas']['setStrokeStyle']($p['getattr']($m['Color'], 'RED'));
			self['canvas']['strokeRect'](20, 20, 25, 25);
			self['canvas']['beginPath']();
			self['canvas']['setLineWidth'](1);
			self['canvas']['moveTo'](1, 1);
			self['canvas']['lineTo'](80, 80);
			self['canvas']['lineTo'](100, 20);
			self['canvas']['closePath']();
			self['canvas']['stroke']();
			self['canvas']['setStrokeStyle']($p['getattr']($m['Color'], 'BLUE'));
			self['canvas']['setFillStyle']($p['getattr']($m['Color'], 'BLACK'));
			self['canvas']['beginPath']();
			self['canvas']['moveTo'](120, 50);
			self['canvas']['lineTo'](150, 70);
			self['canvas']['lineTo'](150, 50);
			self['canvas']['quadraticCurveTo'](150, 150, 80, 80);
			self['canvas']['cubicCurveTo'](85, 25, 75, 37, 75, 40);
			self['canvas']['closePath']();
			self['canvas']['fill']();
			self['canvas']['setFont']('bold 16px Verdana');
			self['canvas']['fillText']('PYJS', 20, 120);
			self['canvas']['beginPath']();
			self['canvas']['rect'](180, 180, 80, 80);
			self['canvas']['rect'](200, 200, 80, 80);
			self['canvas']['stroke']();
			self['canvas']['beginPath']();
			self['canvas']['arc'](200, 100, 20, 0, $p['getattr']($m['math'], 'pi'), false);
			self['canvas']['stroke']();
			self['canvas']['saveContext']();
			self['canvas']['translate'](150, 0);
			self['canvas']['fillRect'](0, 0, 150, 150);
			self['canvas']['setFillStyle']($m['Color']['Color']('#09F'));
			self['canvas']['fillRect'](15, 15, 120, 120);
			self['canvas']['setFillStyle']($m['Color']['Color']('#FFF'));
			self['canvas']['setGlobalAlpha'](0.5);
			self['canvas']['fillRect'](30, 30, 90, 90);
			self['canvas']['fillRect'](45, 45, 60, 60);
			self['canvas']['fillRect'](60, 60, 30, 30);
			self['canvas']['restoreContext']();
			self['canvas']['saveContext']();
			self['canvas']['translate'](10, 140);
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
			$iter1_iter = $p['range'](7);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				self['canvas']['beginPath']();
				self['canvas']['arc'](75, 75, (typeof ($add1=10)==typeof ($add2=(typeof ($mul1=10)==typeof ($mul2=i) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)), 0, (typeof ($mul3=$p['getattr']($m['math'], 'pi'))==typeof ($mul4=2) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)), false);
				self['canvas']['fill']();
			}
			self['canvas']['saveContext']();
			self['canvas']['setGlobalAlpha'](0.8);
			self['canvas']['beginPath']();
			self['canvas']['arc'](75, 75, 50, 0, (typeof ($mul5=$p['getattr']($m['math'], 'pi'))==typeof ($mul6=2) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)), true);
			self['canvas']['moveTo'](110, 75);
			self['canvas']['arc'](75, 75, 35, 0, $p['getattr']($m['math'], 'pi'), false);
			self['canvas']['moveTo'](65, 65);
			self['canvas']['arc'](60, 65, 5, 0, (typeof ($mul7=$p['getattr']($m['math'], 'pi'))==typeof ($mul8=2) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)), true);
			self['canvas']['moveTo'](95, 65);
			self['canvas']['arc'](90, 65, 5, 0, (typeof ($mul9=$p['getattr']($m['math'], 'pi'))==typeof ($mul10=2) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)), true);
			self['canvas']['stroke']();
			self['canvas']['restoreContext']();
			self['canvas']['restoreContext']();
			self['canvas']['beginPath']();
			self['canvas']['arc'](200, 200, 20, 0, (typeof ($mul11=$p['getattr']($m['math'], 'pi'))==typeof ($mul12=2) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)), false);
			self['canvas']['stroke']();
			self['canvas']['saveContext']();
			self['canvas']['setGlobalAlpha'](1.0);
			$iter2_iter = $p['range'](6);
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				self['canvas']['saveContext']();
				self['canvas']['setFillStyle']($m['Color']['Color']((typeof ($mul13=51)==typeof ($mul14=i) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)), (typeof ($sub1=255)==typeof ($sub2=(typeof ($mul15=51)==typeof ($mul16=i) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)), 255));
				$iter3_iter = $p['range']((typeof ($mul17=i)==typeof ($mul18=6) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)));
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					j = $iter3_nextval;
					self['canvas']['rotate']((typeof ($div1=(typeof ($mul19=$p['getattr']($m['math'], 'pi'))==typeof ($mul20=2) && typeof $mul19=='number'?
						$mul19*$mul20:
						$p['op_mul']($mul19,$mul20)))==typeof ($div2=(typeof ($mul21=i)==typeof ($mul22=6.0) && typeof $mul21=='number'?
						$mul21*$mul22:
						$p['op_mul']($mul21,$mul22))) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2)));
					self['canvas']['beginPath']();
					self['canvas']['rect'](0, (typeof ($mul23=i)==typeof ($mul24=12.5) && typeof $mul23=='number'?
						$mul23*$mul24:
						$p['op_mul']($mul23,$mul24)), 5, 5);
					self['canvas']['fill']();
				}
				self['canvas']['restoreContext']();
			}
			self['canvas']['restoreContext']();
			self['canvas']['restoreContext']();
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

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stopDemo'] = $method;
		var $bases = new Array($m['SimpleCanvasDemo']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('StaticDemo', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end StaticDemo */


/* end module: StaticDemo */


/*
PYJS_DEPS: ['math', 'pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Canvas.Color', 'pyjamas.Canvas', 'SimpleCanvasDemo.SimpleCanvasDemo', 'SimpleCanvasDemo']
*/
