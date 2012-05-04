/* start module: ClickableRootPanel */
$pyjs.loaded_modules['ClickableRootPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ClickableRootPanel'].__was_initialized__) return $pyjs.loaded_modules['ClickableRootPanel'];
	var $m = $pyjs.loaded_modules["ClickableRootPanel"];
	$m.__repr__ = function() { return "<module: ClickableRootPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ClickableRootPanel';
	$m.__name__ = __mod_name__;
	var $eq2,$eq1,$bool4;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanelCls'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanelCls', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['manageRootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.manageRootPanel', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', null, null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['RootPanelListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ClickableRootPanel';
		$method = $pyjs__bind_method2('__init__', function(Parent) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				Parent = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof Parent != 'undefined') {
					if (Parent !== null && typeof Parent['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Parent;
						Parent = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self.Parent = Parent;
			self.focussed = false;
			$pyjs_kwargs_call($m['RootPanelCls'], '__init__', args, kwargs, [{}, self]);
			$m['ClickHandler']['__init__'](self);
			$m['KeyboardHandler']['__init__'](self);
			self['addClickListener'](self);
			self['addKeyboardListener'](self);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['Parent']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(Sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				Sender = arguments[1];
			}
			var $or1,$or2,$and1,$bool2,$bool3,$bool1,txt,$and2;
			self.focussed = !(($bool1=$p['getattr'](self, 'focussed')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) );
			self['Parent']['setFocus']($p['getattr'](self, 'focussed'));
			txt = ((($bool3=$or1=((($bool2=$and1=$p['getattr'](self, 'focussed')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?'yes. now press keys':$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:'no. keys fail now');
			self['add']($m['HTML']($p['sprintf']('focus: %s', txt)));
			return null;
		}
	, 1, [null,null,['self'],['Sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keyCode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}
			if (typeof modifiers == 'undefined') modifiers=arguments.callee.__args__[5][1];

			self['add']($m['HTML']($p['sprintf']('keyDOWN: %d', keyCode)));
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers', null]]);
		$cls_definition['onKeyDown'] = $method;
		var $bases = new Array($m['RootPanelCls'],$m['KeyboardHandler'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RootPanelListener', $p['tuple']($bases), $data);
	})();
	$m['heightset'] = function(fred) {

		$m['DOM']['setStyleAttribute']($p['getattr']($doc, 'body'), 'height', '100%');
		return null;
	};
	$m['heightset'].__name__ = 'heightset';

	$m['heightset'].__bind_type__ = 0;
	$m['heightset'].__args__ = [null,null,['fred']];
	$m['marginset'] = function(fred) {

		$m['DOM']['setStyleAttribute']($p['getattr']($doc, 'body'), 'margin', '0px');
		return null;
	};
	$m['marginset'].__name__ = 'marginset';

	$m['marginset'].__bind_type__ = 0;
	$m['marginset'].__args__ = [null,null,['fred']];
	if ((($bool4=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
		$m['pyjd']['setup']('public/ClickableRootPanel.html');
		$m['bh'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:'teststyle'}, 'Click me to set body height to 100%', $m['heightset']]);
		$m['b'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:'teststyle'}, 'Click me to set body margin to 0', $m['marginset']]);
		$m['h'] = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'teststyle'}, '<b>Hello World</b> - watch for focus highlighting after click']);
		$m['panel'] = $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{Widget:$m['h']}]);
		$m['gp'] = $pyjs_kwargs_call(null, $m['RootPanelListener'], null, null, [{StyleName:'rootstyle'}, $m['panel']]);
		$m['manageRootPanel']($m['gp']);
		$m['info'] = 'Click anywhere in the Root (grey) to activate key input;\n            click again to disable it.  Note the focus highlighting\n            that occurs on the "Hello World" HTML box.\n    <br /> <br />\n    The CSS style has been set to 100% width\n    and the margin to 100px.  Even though it is the "body" - root\n    element, clicking outside the margin (indicated by the black border)\n    will NOT activate key input.\n    <br /><br />\n    Note that many browsers screw up the sizes of the window when the\n    margin is set as well as width or height to 100%, as evidenced by\n    the black border being off the screen.  (Normally, you would add a\n    WindowResize Listener which received the window size and then\n    directly adjusted the CSS width and height of the body element\n    to correct these problems (!) or, much better, add a SimplePanel\n    on which the appropriate (100% width+height) CSS styles are set).\n    <br /> <br />\n    However that\'s not the issue: the point is that you <b>must</b>\n    actually set the body to be 100% of the screen area in order to\n    receive click events, and the above highlights why it is important\n    to set margin and padding of body to 0 as well, and also to not\n    set any borders.\n    <br /> <br />\n    Click the button to change the margin on the document "body" tag\n    to zero, in order to test this out.  Note that the border may still\n    be off the screen, even when the margin is zero.\n    <br /> <br />\n    ';
		$m['RootPanel']()['add']($m['panel']);
		$m['RootPanel']()['add']($m['b']);
		$m['RootPanel']()['add']($m['bh']);
		$m['RootPanel']()['add']($m['HTML']($m['info']));
		$m['pyjd']['run']();
	}
	return this;
}; /* end ClickableRootPanel */


/* end module: ClickableRootPanel */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanelCls', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel.manageRootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.Window', 'pyjamas.DOM']
*/
