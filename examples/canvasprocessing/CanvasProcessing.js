/* start module: CanvasProcessing */
$pyjs.loaded_modules['CanvasProcessing'] = function (__mod_name__) {
	if($pyjs.loaded_modules['CanvasProcessing'].__was_initialized__) return $pyjs.loaded_modules['CanvasProcessing'];
	var $m = $pyjs.loaded_modules["CanvasProcessing"];
	$m.__repr__ = function() { return "<module: CanvasProcessing>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'CanvasProcessing';
	$m.__name__ = __mod_name__;
	var $eq2,$eq1,$bool1;

	$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['getFirstChild'] = $p['___import___']('pyjamas.DOM.getFirstChild', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['math'] = $p['___import___']('math', null);
	;
	$m['p'] = null;
	$m['radius'] = 50.0;
	$m['delay'] = 16;
	$m['setup'] = function() {
		var $div2,$div3,$div1,$div4;
		$m['p']['size'](200, 200);
		$m['p']['strokeWeight'](10);
		$m['p']['frameRate'](15);
		$m['X'] = (typeof ($div1=$p['getattr']($m['p'], 'width'))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2));
		$m['Y'] = (typeof ($div3=$p['getattr']($m['p'], 'width'))==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4));
		$m['nX'] = $m['X'];
		$m['nY'] = $m['Y'];
		return null;
	};
	$m['setup'].__name__ = 'setup';

	$m['setup'].__bind_type__ = 0;
	$m['setup'].__args__ = [null,null];
	$m['draw'] = function() {
		var $div10,$sub3,$sub2,$sub1,$sub4,$div8,$div9,$div6,$div7,$div5,$add2,$add3,$add1,$add6,$add4,$add5;
		$m['radius'] = (typeof ($add1=$m['radius'])==typeof ($add2=$m['math']['sin']((typeof ($div5=$p['getattr']($m['p'], 'frameCount'))==typeof ($div6=4) && typeof $div5=='number' && $div6 !== 0?
			$div5/$div6:
			$p['op_div']($div5,$div6)))) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
		$m['X'] = (typeof ($add3=$m['X'])==typeof ($add4=(typeof ($div7=(typeof ($sub1=$m['nX'])==typeof ($sub2=$m['X']) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			$p['op_sub']($sub1,$sub2)))==typeof ($div8=$m['delay']) && typeof $div7=='number' && $div8 !== 0?
			$div7/$div8:
			$p['op_div']($div7,$div8))) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4));
		$m['Y'] = (typeof ($add5=$m['Y'])==typeof ($add6=(typeof ($div9=(typeof ($sub3=$m['nY'])==typeof ($sub4=$m['Y']) && (typeof $sub3=='number'||typeof $sub3=='string')?
			$sub3-$sub4:
			$p['op_sub']($sub3,$sub4)))==typeof ($div10=$m['delay']) && typeof $div9=='number' && $div10 !== 0?
			$div9/$div10:
			$p['op_div']($div9,$div10))) && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			$p['op_add']($add5,$add6));
		$m['p']['background'](100);
		$m['p']['fill'](0, 121, 184);
		$m['p']['stroke'](255);
		$m['p']['ellipse']($m['X'], $m['Y'], $m['radius'], $m['radius']);
		return null;
	};
	$m['draw'].__name__ = 'draw';

	$m['draw'].__bind_type__ = 0;
	$m['draw'].__args__ = [null,null];
	$m['mouseMoved'] = function() {

		$m['nX'] = $p['getattr']($m['p'], 'mouseX');
		$m['nY'] = $p['getattr']($m['p'], 'mouseY');
		return null;
	};
	$m['mouseMoved'].__name__ = 'mouseMoved';

	$m['mouseMoved'].__bind_type__ = 0;
	$m['mouseMoved'].__args__ = [null,null];
	$m['ProcessingCanvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'CanvasProcessing';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['GWTCanvas']['__init__'](self, 150, 150, 150, 150);
			self.c = self['getCanvasElement']();
			self.p = Processing($p['getattr'](self, 'c'));
			$m['p'] = $p['getattr'](self, 'p');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['GWTCanvas']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ProcessingCanvas', $p['tuple']($bases), $data);
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
		$m['note'] = $m['HTML']('\nNote that this is an example of using processing.js.<br>\nSee <a href=http://ejohn.org/blog/processingjs/>http://ejohn.org/blog/processingjs/</a> for more info.<br>\nSince processing.js is built for state-of-the-art browser<br>\nthat properly implement canvas, IE is not supported.<br>\n<br>\n');
		$m['RootPanel']()['add']($m['note']);
		$m['PC'] = $m['ProcessingCanvas']();
		$p['getattr']($m['PC'], 'p').setup = $m['setup'];
		$p['getattr']($m['PC'], 'p').draw = $m['draw'];
		$p['getattr']($m['PC'], 'p').mouseMoved = $m['mouseMoved'];
		$m['PC']['p']['init']();
		$m['RootPanel']()['add']($m['PC']);
	}
	return this;
}; /* end CanvasProcessing */


/* end module: CanvasProcessing */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.DOM.getFirstChild', 'pyjamas.DOM', 'pyjamas.Window', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'math']
*/
/*
PYJS_JS: [('processing.js', 'default', 'middle')]
*/
