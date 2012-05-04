/* start module: GChartTestApp */
$pyjs.loaded_modules['GChartTestApp'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GChartTestApp'].__was_initialized__) return $pyjs.loaded_modules['GChartTestApp'];
	var $m = $pyjs.loaded_modules["GChartTestApp"];
	$m.__repr__ = function() { return "<module: GChartTestApp>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GChartTestApp';
	$m.__name__ = __mod_name__;
	var $eq3,$bool3,$eq2,$eq1,$eq4,$bool1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
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
		$m['pyjd']['setup']('./public/GChartTestApp.html');
	}
	$m['DeferredCommand'] = $p['___import___']('pyjamas.DeferredCommand', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['GChart'] = $p['___import___']('pyjamas.chart.GChart', null, null, false);
	$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
	$m['TestGChart00'] = $p['___import___']('TestGChart00.TestGChart00', null, null, false);
	$m['TestGChart01'] = $p['___import___']('TestGChart01.TestGChart01', null, null, false);
	$m['TestGChart02'] = $p['___import___']('TestGChart02.TestGChart02', null, null, false);
	$m['TestGChart05'] = $p['___import___']('TestGChart05.TestGChart05', null, null, false);
	$m['GChartExample00'] = $p['___import___']('GChartExample00.GChartExample00', null, null, false);
	$m['GChartExample00a'] = $p['___import___']('GChartExample00a.GChartExample00a', null, null, false);
	$m['GChartExample01'] = $p['___import___']('GChartExample01.GChartExample01', null, null, false);
	$m['GChartExample02'] = $p['___import___']('GChartExample02.GChartExample02', null, null, false);
	$m['GChartExample03'] = $p['___import___']('GChartExample03.GChartExample03', null, null, false);
	$m['GChartExample04'] = $p['___import___']('GChartExample04.GChartExample04', null, null, false);
	$m['GChartExample06'] = $p['___import___']('GChartExample06.GChartExample06', null, null, false);
	$m['GChartExample07'] = $p['___import___']('GChartExample07.GChartExample07', null, null, false);
	$m['GChartExample14'] = $p['___import___']('GChartExample14.GChartExample14', null, null, false);
	$m['GChartExample17'] = $p['___import___']('GChartExample17.GChartExample17', null, null, false);
	$m['GChartExample20'] = $p['___import___']('GChartExample20.GChartExample20', null, null, false);
	$m['GChartExample21'] = $p['___import___']('GChartExample21.GChartExample21', null, null, false);
	$m['GChartExample24'] = $p['___import___']('GChartExample24.GChartExample24', null, null, false);
	$m['GChartExample25'] = $p['___import___']('GChartExample25.GChartExample25', null, null, false);
	$m['i'] = 0;
	$m['rnd'] = function() {
		var a,c,i,m,$add2,$add1,$mod1,$mod2,$div2,$div1,$mul2,$mul1;
		m = 217728;
		a = 84589;
		c = 45989;
		i = (typeof ($mod1=(typeof ($add1=(typeof ($mul1=a)==typeof ($mul2=$m['i']) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)))==typeof ($add2=c) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2)))==typeof ($mod2=m) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2));
		return (typeof ($div1=i)==typeof ($div2=m) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2));
	};
	$m['rnd'].__name__ = 'rnd';

	$m['rnd'].__bind_type__ = 0;
	$m['rnd'].__args__ = [null,null];
	$m['getTitle'] = $p['___import___']('GChartTestAppUtil.getTitle', null, null, false);
	$m['AddOneChart'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartTestApp';
		$method = $pyjs__bind_method2('__init__', function(gchart, needsUpdate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gchart = arguments[1];
				needsUpdate = arguments[2];
			}
			if (typeof needsUpdate == 'undefined') needsUpdate=arguments.callee.__args__[4][1];

			self.gchart = gchart;
			self.needsUpdate = needsUpdate;
			return null;
		}
	, 1, [null,null,['self'],['gchart'],['needsUpdate', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('execute', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2;
			$m['RootPanel']('testappcharts')['add']($m['HTML']($m['getTitle']($p['getattr'](self, 'gchart'))));
			$m['RootPanel']('testappcharts')['add']($p['getattr'](self, 'gchart'));
			if ((($bool2=$p['getattr'](self, 'needsUpdate')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['gchart']['update']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['execute'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AddOneChart', $p['tuple']($bases), $data);
	})();
	$m['addChart'] = function(gchart) {

		$m['DeferredCommand']['add']($m['AddOneChart'](gchart, true));
		return null;
	};
	$m['addChart'].__name__ = 'addChart';

	$m['addChart'].__bind_type__ = 0;
	$m['addChart'].__args__ = [null,null,['gchart']];
	$m['addChartNoUpdate'] = function(gchart) {

		$m['DeferredCommand']['add']($m['AddOneChart'](gchart, false));
		return null;
	};
	$m['addChartNoUpdate'].__name__ = 'addChartNoUpdate';

	$m['addChartNoUpdate'].__bind_type__ = 0;
	$m['addChartNoUpdate'].__args__ = [null,null,['gchart']];
	$m['GWTCanvasBasedCanvasFactory'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GChartTestApp';
		$method = $pyjs__bind_method2('create', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['GWTCanvas']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['create'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GWTCanvasBasedCanvasFactory', $p['tuple']($bases), $data);
	})();
	$m['onModuleLoad'] = function() {

		$m['GChart']['setCanvasFactory']($m['GWTCanvasBasedCanvasFactory']());
		$m['addChart']($m['GChartExample02']());
		$m['addChart']($m['GChartExample07']());
		$m['addChart']($m['GChartExample20']());
		$m['addChart']($m['GChartExample21']());
		$m['addChart']($m['GChartExample24']());
		$m['addChart']($m['TestGChart05'](true));
		$m['RootPanel']('loadingMessage')['setVisible'](false);
		return null;
	};
	$m['onModuleLoad'].__name__ = 'onModuleLoad';

	$m['onModuleLoad'].__bind_type__ = 0;
	$m['onModuleLoad'].__args__ = [null,null];
	if ((($bool3=(($eq3=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq4='__main__')&&$eq3===null?true:
		($eq3===null?false:($eq4===null?false:
			((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
				((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
					$eq3==$eq4)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
		$m['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end GChartTestApp */


/* end module: GChartTestApp */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.DeferredCommand', 'pyjamas', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.chart.GChart', 'pyjamas.chart', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'TestGChart00.TestGChart00', 'TestGChart00', 'TestGChart01.TestGChart01', 'TestGChart01', 'TestGChart02.TestGChart02', 'TestGChart02', 'TestGChart05.TestGChart05', 'TestGChart05', 'GChartExample00.GChartExample00', 'GChartExample00', 'GChartExample00a.GChartExample00a', 'GChartExample00a', 'GChartExample01.GChartExample01', 'GChartExample01', 'GChartExample02.GChartExample02', 'GChartExample02', 'GChartExample03.GChartExample03', 'GChartExample03', 'GChartExample04.GChartExample04', 'GChartExample04', 'GChartExample06.GChartExample06', 'GChartExample06', 'GChartExample07.GChartExample07', 'GChartExample07', 'GChartExample14.GChartExample14', 'GChartExample14', 'GChartExample17.GChartExample17', 'GChartExample17', 'GChartExample20.GChartExample20', 'GChartExample20', 'GChartExample21.GChartExample21', 'GChartExample21', 'GChartExample24.GChartExample24', 'GChartExample24', 'GChartExample25.GChartExample25', 'GChartExample25', 'GChartTestAppUtil.getTitle', 'GChartTestAppUtil']
*/
