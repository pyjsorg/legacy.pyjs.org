/* start module: pyjamas.ui.KeyboardListener */
$pyjs.loaded_modules['pyjamas.ui.KeyboardListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.KeyboardListener'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.KeyboardListener'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.KeyboardListener"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.KeyboardListener>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.KeyboardListener';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['KeyboardListener'] = $pyjs.loaded_modules['pyjamas.ui.KeyboardListener'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['KEY_ALT'] = 18;
	$m['KEY_BACKSPACE'] = 8;
	$m['KEY_CTRL'] = 17;
	$m['KEY_DELETE'] = 46;
	$m['KEY_DOWN'] = 40;
	$m['KEY_END'] = 35;
	$m['KEY_ENTER'] = 13;
	$m['KEY_ESCAPE'] = 27;
	$m['KEY_HOME'] = 36;
	$m['KEY_LEFT'] = 37;
	$m['KEY_PAGEDOWN'] = 34;
	$m['KEY_PAGEUP'] = 33;
	$m['KEY_RIGHT'] = 39;
	$m['KEY_SHIFT'] = 16;
	$m['KEY_TAB'] = 9;
	$m['KEY_UP'] = 38;
	$m['KEYS'] = $p['list']([$m['KEY_ALT'], $m['KEY_BACKSPACE'], $m['KEY_CTRL'], $m['KEY_DELETE'], $m['KEY_DOWN'], $m['KEY_END'], $m['KEY_ENTER'], $m['KEY_ESCAPE'], $m['KEY_HOME'], $m['KEY_LEFT'], $m['KEY_PAGEDOWN'], $m['KEY_PAGEUP'], $m['KEY_RIGHT'], $m['KEY_SHIFT'], $m['KEY_TAB'], $m['KEY_UP']]);
	$m['MODIFIER_ALT'] = 4;
	$m['MODIFIER_CTRL'] = 2;
	$m['MODIFIER_SHIFT'] = 1;
	$m['getKeyboardModifiers'] = function(event) {
		var ctrl,shift,$bool2,$bool3,$bool1,alt;
		shift = 0;
		ctrl = 0;
		alt = 0;
		if ((($bool1=$m['DOM']['eventGetShiftKey'](event)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			shift = $m['MODIFIER_SHIFT'];
		}
		if ((($bool2=$m['DOM']['eventGetCtrlKey'](event)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			ctrl = $m['MODIFIER_CTRL'];
		}
		if ((($bool3=$m['DOM']['eventGetAltKey'](event)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			alt = $m['MODIFIER_ALT'];
		}
		return (shift)|(ctrl)|(alt);
	};
	$m['getKeyboardModifiers'].__name__ = 'getKeyboardModifiers';

	$m['getKeyboardModifiers'].__bind_type__ = 0;
	$m['getKeyboardModifiers'].__args__ = [null,null,['event']];
	$m['fireKeyboardEvent'] = function(listeners, sender, event) {
		var $iter3_type,$iter1_iter,$iter2_type,$iter3_idx,$iter2_iter,$iter3_nextval,$iter1_array,type,$iter3_array,$iter3_iter,$iter1_nextval,$eq2,$eq3,$eq1,$eq6,$eq4,$eq5,listener,$iter2_idx,$iter2_nextval,$bool6,$bool4,$bool5,keycode,$iter1_type,modifiers,$iter1_idx,$iter2_array;
		modifiers = $m['getKeyboardModifiers'](event);
		keycode = $m['DOM']['eventGetKeyCode'](event);
		type = $m['DOM']['eventGetType'](event);
		if ((($bool4=(($eq1=type)===($eq2='keydown')&&$eq1===null?true:
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
			$iter1_iter = listeners;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				listener = $iter1_nextval;
				listener['onKeyDown'](sender, keycode, modifiers);
			}
		}
		else if ((($bool5=(($eq3=type)===($eq4='keyup')&&$eq3===null?true:
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
			$iter2_iter = listeners;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				listener = $iter2_nextval;
				listener['onKeyUp'](sender, keycode, modifiers);
			}
		}
		else if ((($bool6=(($eq5=type)===($eq6='keypress')&&$eq5===null?true:
			($eq5===null?false:($eq6===null?false:
				((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
					((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
						$eq5==$eq6)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			$iter3_iter = listeners;
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				listener = $iter3_nextval;
				listener['onKeyPress'](sender, keycode, modifiers);
			}
		}
		return null;
	};
	$m['fireKeyboardEvent'].__name__ = 'fireKeyboardEvent';

	$m['fireKeyboardEvent'].__bind_type__ = 0;
	$m['fireKeyboardEvent'].__args__ = [null,null,['listeners'],['sender'],['event']];
	$m['KEYBOARD_EVENTS'] = $p['list'](['keydown', 'keyup', 'keypress']);
	$m['KeyboardHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.KeyboardListener';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self._keyboardListeners = $p['list']([]);
			self['sinkEvents']($p['getattr']($m['Event'], 'KEYEVENTS'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var type,$bool7;
			type = $m['DOM']['eventGetType'](event);
			if ((($bool7=$p['list'](['keydown', 'keyup', 'keypress']).__contains__(type)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				$m['fireKeyboardEvent']($p['getattr'](self, '_keyboardListeners'), self, event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('addKeyboardListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_keyboardListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addKeyboardListener'] = $method;
		$method = $pyjs__bind_method2('removeKeyboardListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_keyboardListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeKeyboardListener'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('KeyboardHandler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.KeyboardListener */


/* end module: pyjamas.ui.KeyboardListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
