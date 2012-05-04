/* start module: uitest */
$pyjs.loaded_modules['uitest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['uitest'].__was_initialized__) return $pyjs.loaded_modules['uitest'];
	var $m = $pyjs.loaded_modules["uitest"];
	$m.__repr__ = function() { return "<module: uitest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'uitest';
	$m.__name__ = __mod_name__;
	var $bool5,$len3,$eq2,$eq3,$eq1,$bool3,$bool4,$eq4,$4,$3;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['IN_BROWSER'] = $p['___import___']('UnitTest.IN_BROWSER', null, null, false);
	$m['IN_JS'] = $p['___import___']('UnitTest.IN_JS', null, null, false);
	$m['IN_BROWSER'] = $p['___import___']('UnitTest.IN_BROWSER', null, null, false);
	$m['DockPanelTest'] = $p['___import___']('DockPanelTest.DockPanelTest', null, null, false);
	$m['LabelTest'] = $p['___import___']('LabelTest.LabelTest', null, null, false);
	$m['DOMTest'] = $p['___import___']('DOMTest.DOMTest', null, null, false);
	$m['EventTest'] = $p['___import___']('EventTest.EventTest', null, null, false);
	$m['write'] = $p['___import___']('write', null);
	$m['sys'] = $p['___import___']('sys', null);
	$m['RunTests'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'uitest';
		$method = $pyjs__bind_method2('__init__', function(test_gen) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				test_gen = arguments[1];
			}

			self.current_test = null;
			self.test_gen = test_gen;
			self.testlist = $p['dict']([]);
			self.test_idx = 0;
			$m['Timer'](100, self);
			return null;
		}
	, 1, [null,null,['self'],['test_gen']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(test) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				test = arguments[1];
			}
			var $len1;
			$p['getattr'](self, 'testlist').__setitem__((($len1=$p['getattr'](self, 'testlist')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))), test);
			return null;
		}
	, 1, [null,null,['self'],['test']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(tid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tid = arguments[1];
			}

			self['start_test']();
			return null;
		}
	, 1, [null,null,['self'],['tid']]);
		$cls_definition['onTimer'] = $method;
		$method = $pyjs__bind_method2('start_test', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp4,$cmp1,idx,$cmp3,$cmp2,test_kls,t,$bool2,$bool1,$len2,$add2,$add1,$2,$1;
			if ((($bool1=((((($cmp1=$p['getattr'](self, 'test_idx'))===($cmp2=(($len2=$p['getattr'](self, 'testlist')) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))))?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				if ((($bool2=((($cmp3=$p['getattr']($p['getattr'](self, 'current_test'), 'tests_outstanding'))===($cmp4=0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					$m['Timer'](100, self);
					return null;
				}
				$m['write']['display_log_output']();
				return null;
			}
			idx = $p['getattr'](self, 'test_idx');
			self.test_idx = (typeof ($add1=$p['getattr'](self, 'test_idx'))==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			test_kls = (typeof ($1=$p['getattr'](self, 'testlist')).__array != 'undefined'?
				((typeof $1.__array[$2=idx]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(idx));
			t = test_kls($p['getattr'](self, 'test_gen'));
			self.current_test = t;
			t.start_next_test = $p['getattr'](self, 'start_test');
			t['run']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['start_test'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RunTests', $p['tuple']($bases), $data);
	})();
	$m['main'] = function(test_gen_out) {
		var t;
		$m['pyjd']['setup']('public/uitest.html');
		t = $m['RunTests'](test_gen_out);
		t['add']($m['DockPanelTest']);
		t['add']($m['LabelTest']);
		t['add']($m['EventTest']);
		t['add']($m['DOMTest']);
		$m['pyjd']['run']();
		return null;
	};
	$m['main'].__name__ = 'main';

	$m['main'].__bind_type__ = 0;
	$m['main'].__args__ = [null,null,['test_gen_out']];
	if ((($bool3=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
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
		$m['test_gen_output_folder'] = null;
		if ((($bool4=$p['hasattr']($m['sys'], 'argv')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			if ((($bool5=(($eq3=(($len3=$p['getattr']($m['sys'], 'argv')) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))))===($eq4=2)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$m['test_gen_output_folder'] = (typeof ($3=$p['getattr']($m['sys'], 'argv')).__array != 'undefined'?
					((typeof $3.__array[$4=1]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(1));
			}
		}
		$m['main']($m['test_gen_output_folder']);
	}
	return this;
}; /* end uitest */


/* end module: uitest */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'UnitTest.IN_BROWSER', 'UnitTest', 'UnitTest.IN_JS', 'DockPanelTest.DockPanelTest', 'DockPanelTest', 'LabelTest.LabelTest', 'LabelTest', 'DOMTest.DOMTest', 'DOMTest', 'EventTest.EventTest', 'EventTest', 'write', 'sys']
*/
