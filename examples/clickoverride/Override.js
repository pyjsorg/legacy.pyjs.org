/* start module: Override */
$pyjs.loaded_modules['Override'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Override'].__was_initialized__) return $pyjs.loaded_modules['Override'];
	var $m = $pyjs.loaded_modules["Override"];
	$m.__repr__ = function() { return "<module: Override>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Override';
	$m.__name__ = __mod_name__;
	var $eq3,$eq4,$bool4;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['logging'] = $p['___import___']('pyjamas.logging', null, null, false);
	$m['log'] = $m['logging']['getAppendLogger']((typeof __name__ == "undefined"?$m.__name__:__name__), $p['getattr']($m['logging'], 'DEBUG'), $p['getattr']($m['logging'], 'PLAIN_FORMAT'));
	$m['Board'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Override';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['VerticalPanel']['__init__'](self);
			$m['ClickHandler']['__init__'](self);
			self['addClickListener'](self);
			self.title = $m['Text']('Board');
			self['title']['setzIndex'](100);
			self['add']($p['getattr'](self, 'title'));
			self['setSize']('100%', '50%');
			self['setBorderWidth'](1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $add2,$add1;
			$m['log']['debug']((typeof ($add1='Text')==typeof ($add2=$p['str'](sender)) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('_event_targets_title', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var target,$and1,$bool1,$and2;
			target = $m['DOM']['eventGetTarget'](event);
			return ((($bool1=$and1=target) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$m['DOM']['isOrHasChild'](self['title']['getElement'](), target):$and1);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_event_targets_title'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $eq2,$eq1,$bool2,$bool3,etype;
			etype = $m['DOM']['eventGetType'](event);
			if ((($bool2=(($eq1=etype)===($eq2='click')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				if ((($bool3=self['_event_targets_title'](event)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					return null;
				}
			}
			$m['ClickHandler']['onBrowserEvent'](self, event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		var $bases = new Array($m['VerticalPanel'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Board', $p['tuple']($bases), $data);
	})();
	$m['Text'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Override';
		$method = $pyjs__bind_method2('__init__', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['HTML']['__init__'](self, text);
			$pyjs_kwargs_call($m['ClickHandler'], '__init__', null, null, [{preventDefault:true}, self]);
			self['addClickListener'](self);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $add3,$add4;
			$m['log']['debug']((typeof ($add3='Text')==typeof ($add4=$p['str'](sender)) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['HTML'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Text', $p['tuple']($bases), $data);
	})();
	if ((($bool4=(($eq3=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq4='__main__')&&$eq3===null?true:
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
		$m['pyjd']['setup']('./Override.html');
		$m['board'] = $m['Board']();
		$m['RootPanel']()['add']($m['board']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end Override */


/* end module: Override */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Event', 'pyjamas.DOM', 'pyjamas.logging']
*/
