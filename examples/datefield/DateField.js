/* start module: DateField */
$pyjs.loaded_modules['DateField'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DateField'].__was_initialized__) return $pyjs.loaded_modules['DateField'];
	var $m = $pyjs.loaded_modules["DateField"];
	$m.__repr__ = function() { return "<module: DateField>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DateField';
	$m.__name__ = __mod_name__;
	var $bool1,$eq1,$eq2;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['DateField'] = $p['___import___']('pyjamas.ui.Calendar.DateField', null, null, false);
	$m['Calendar'] = $p['___import___']('pyjamas.ui.Calendar.Calendar', null, null, false);
	$m['CalendarPopup'] = $p['___import___']('pyjamas.ui.Calendar.CalendarPopup', null, null, false);
	$m['App'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DateField';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var b,text,df1,df2,vp;
			text = $m['TextBox']();
			df1 = $m['DateField']();
			df2 = $pyjs_kwargs_call(null, $m['DateField'], null, null, [{format:'%Y/%m/%d'}]);
			b = $m['Button']('Show Calendar', self);
			self.cal = $m['Calendar']();
			vp = $m['VerticalPanel']();
			vp['setSpacing'](10);
			vp['add'](df1);
			vp['add'](b);
			vp['add'](df2);
			$m['RootPanel']()['add'](vp);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $add3,$add2,p,$add1,$add4,y,x;
			p = $m['CalendarPopup']($p['getattr'](self, 'cal'));
			x = (typeof ($add1=sender['getAbsoluteLeft']())==typeof ($add2=10) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			y = (typeof ($add3=sender['getAbsoluteTop']())==typeof ($add4=10) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			p['setPopupPosition'](x, y);
			p['show']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('App', $p['tuple']($bases), $data);
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
		$m['pyjd']['setup']('./public/DateField.html');
		$m['app'] = $m['App']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end DateField */


/* end module: DateField */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Calendar.DateField', 'pyjamas.ui.Calendar', 'pyjamas.ui.Calendar.Calendar', 'pyjamas.ui.Calendar.CalendarPopup']
*/
