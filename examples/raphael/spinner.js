/* start module: spinner */
$pyjs.loaded_modules['spinner'] = function (__mod_name__) {
	if($pyjs.loaded_modules['spinner'].__was_initialized__) return $pyjs.loaded_modules['spinner'];
	var $m = $pyjs.loaded_modules["spinner"];
	$m.__repr__ = function() { return "<module: spinner>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'spinner';
	$m.__name__ = __mod_name__;
	var $bool1,$eq1,$eq2;

	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['math'] = $p['___import___']('math', null);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['Raphael'] = $p['___import___']('pyjamas.raphael.raphael.Raphael', null, null, false);
	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Spinner'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'spinner';
		$method = $pyjs__bind_method2('__init__', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments.callee.__args__[3][1];
			if (typeof height == 'undefined') height=arguments.callee.__args__[4][1];
			var $add3,$mul8,$add8,$add2,$add1,$add6,$add7,$add4,$add5,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1;
			$m['SimplePanel']['__init__'](self);
			self.width = 15;
			self.r1 = 35;
			self.r2 = 60;
			self.cx = (typeof ($add1=$p['getattr'](self, 'r2'))==typeof ($add2=$p['getattr'](self, 'width')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			self.cy = (typeof ($add3=$p['getattr'](self, 'r2'))==typeof ($add4=$p['getattr'](self, 'width')) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			self.numSectors = 12;
			self.canvas = $m['Raphael']((typeof ($add5=(typeof ($mul1=$p['getattr'](self, 'r2'))==typeof ($mul2=2) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))==typeof ($add6=(typeof ($mul3=$p['getattr'](self, 'width'))==typeof ($mul4=2) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)), (typeof ($add7=(typeof ($mul5=$p['getattr'](self, 'r2'))==typeof ($mul6=2) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)))==typeof ($add8=(typeof ($mul7=$p['getattr'](self, 'width'))==typeof ($mul8=2) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)));
			self.sectors = $p['list']([]);
			self.opacity = $p['list']([]);
			self['add']($p['getattr'](self, 'canvas'));
			return null;
		}
	, 1, [null,null,['self'],['width', 600],['height', 300]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add12,period,$iter1_iter,$div3,$div8,$div6,$iter1_array,$sub2,$sub1,$div5,$mul22,sin,$mul20,$mul21,$iter1_nextval,$mul15,$add14,$add15,beta,$add10,$add11,$mul9,$add13,$div2,alpha,$div1,data,$div7,$div4,$iter1_type,$mul17,$mul16,cos,$mul14,$mul13,$mul12,$mul11,$mul10,i,colour,$add16,$mul19,$mul18,$iter1_idx,path,$add9,pathParams;
			colour = '#000000';
			beta = (typeof ($div1=(typeof ($mul9=2)==typeof ($mul10=$p['getattr']($m['math'], 'pi')) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)))==typeof ($div2=$p['getattr'](self, 'numSectors')) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
			pathParams = $p['dict']([['stroke', colour], ['stroke-width', $p['getattr'](self, 'width')], ['stroke-linecap', 'round']]);
			$iter1_iter = $p['range']($p['getattr'](self, 'numSectors'));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				alpha = (typeof ($sub1=(typeof ($mul11=beta)==typeof ($mul12=i) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))==typeof ($sub2=(typeof ($div3=$p['getattr']($m['math'], 'pi'))==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				cos = $m['math']['cos'](alpha);
				sin = $m['math']['sin'](alpha);
				data = ','['join']($p['list'](['M', $p['str']((typeof ($add9=$p['getattr'](self, 'cx'))==typeof ($add10=(typeof ($mul13=$p['getattr'](self, 'r1'))==typeof ($mul14=cos) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14))) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10))), $p['str']((typeof ($add11=$p['getattr'](self, 'cy'))==typeof ($add12=(typeof ($mul15=$p['getattr'](self, 'r1'))==typeof ($mul16=sin) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16))) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12))), 'L', $p['str']((typeof ($add13=$p['getattr'](self, 'cx'))==typeof ($add14=(typeof ($mul17=$p['getattr'](self, 'r2'))==typeof ($mul18=cos) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14))), $p['str']((typeof ($add15=$p['getattr'](self, 'cy'))==typeof ($add16=(typeof ($mul19=$p['getattr'](self, 'r2'))==typeof ($mul20=sin) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)))]));
				path = $pyjs_kwargs_call(self['canvas'], 'path', null, null, [{data:data, attrs:pathParams}]);
				self['opacity']['append']((typeof ($div5=(typeof ($mul21=1.0)==typeof ($mul22=i) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)))==typeof ($div6=$p['getattr'](self, 'numSectors')) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)));
				self['sectors']['append'](path);
			}
			period = (typeof ($div7=1000)==typeof ($div8=$p['getattr'](self, 'numSectors')) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8));
			self._timer = $pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:self}]);
			self['_timer']['scheduleRepeating'](period);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(timerID) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timerID = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,$4,$2,$3,$iter2_array,$1;
			self['opacity']['insert'](0, self['opacity']['pop']());
			$iter2_iter = $p['range']($p['getattr'](self, 'numSectors'));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				(typeof ($1=$p['getattr'](self, 'sectors')).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i))['setAttr']('opacity', (typeof ($3=$p['getattr'](self, 'opacity')).__array != 'undefined'?
					((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(i)));
			}
			return null;
		}
	, 1, [null,null,['self'],['timerID']]);
		$cls_definition['onTimer'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Spinner', $p['tuple']($bases), $data);
	})();
	if ((($bool1=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
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
		$m['pyjd']['setup']('public/spinner.html');
		$m['spinner'] = $m['Spinner']();
		$m['RootPanel']()['add']($m['spinner']);
		$m['spinner']['draw']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end spinner */


/* end module: spinner */


/*
PYJS_DEPS: ['pyjamas.ui.HTML.HTML', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'math', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.Window', 'pyjamas.raphael.raphael.Raphael', 'pyjamas.raphael', 'pyjamas.raphael.raphael', 'pyjd']
*/
