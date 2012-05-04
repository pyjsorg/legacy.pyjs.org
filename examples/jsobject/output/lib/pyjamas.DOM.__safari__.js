/* start module: pyjamas.DOM */
$pyjs.loaded_modules['pyjamas.DOM'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.DOM'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.DOM'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.DOM"];
	$m.__repr__ = function() { return "<module: pyjamas.DOM>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DOM';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas']['DOM'] = $pyjs.loaded_modules['pyjamas.DOM'];
	var $bool1,$bool67,$bool66;

	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
	if ((($bool1=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
		$m['onResize'] = $p['___import___']('pyjamas.Window.onResize', 'pyjamas', null, false);
		$m['onClosing'] = $p['___import___']('pyjamas.Window.onClosing', 'pyjamas', null, false);
		$m['onClosed'] = $p['___import___']('pyjamas.Window.onClosed', 'pyjamas', null, false);
		$m['currentEvent'] = null;
	}
	$m['sCaptureElem'] = null;
	$m['sEventPreviewStack'] = $p['list']([]);
	$m['listeners'] = $p['dict']([]);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas', null, false);
	$m['ONBLUR'] = $p['___import___']('pyjamas.ui.Event.ONBLUR', 'pyjamas', null, false);
	$m['ONCHANGE'] = $p['___import___']('pyjamas.ui.Event.ONCHANGE', 'pyjamas', null, false);
	$m['ONCLICK'] = $p['___import___']('pyjamas.ui.Event.ONCLICK', 'pyjamas', null, false);
	$m['ONCONTEXTMENU'] = $p['___import___']('pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas', null, false);
	$m['ONDBLCLICK'] = $p['___import___']('pyjamas.ui.Event.ONDBLCLICK', 'pyjamas', null, false);
	$m['ONERROR'] = $p['___import___']('pyjamas.ui.Event.ONERROR', 'pyjamas', null, false);
	$m['ONFOCUS'] = $p['___import___']('pyjamas.ui.Event.ONFOCUS', 'pyjamas', null, false);
	$m['ONKEYDOWN'] = $p['___import___']('pyjamas.ui.Event.ONKEYDOWN', 'pyjamas', null, false);
	$m['ONKEYPRESS'] = $p['___import___']('pyjamas.ui.Event.ONKEYPRESS', 'pyjamas', null, false);
	$m['ONKEYUP'] = $p['___import___']('pyjamas.ui.Event.ONKEYUP', 'pyjamas', null, false);
	$m['ONLOAD'] = $p['___import___']('pyjamas.ui.Event.ONLOAD', 'pyjamas', null, false);
	$m['ONLOSECAPTURE'] = $p['___import___']('pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas', null, false);
	$m['ONMOUSEDOWN'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas', null, false);
	$m['ONMOUSEMOVE'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas', null, false);
	$m['ONMOUSEOUT'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas', null, false);
	$m['ONMOUSEOVER'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas', null, false);
	$m['ONMOUSEUP'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEUP', 'pyjamas', null, false);
	$m['ONSCROLL'] = $p['___import___']('pyjamas.ui.Event.ONSCROLL', 'pyjamas', null, false);
	$m['ONINPUT'] = $p['___import___']('pyjamas.ui.Event.ONINPUT', 'pyjamas', null, false);
	$m['ELEMENT_NODE'] = 1;
	$m['TEXT_NODE'] = 3;
	$m['DOCUMENT_NODE'] = 9;
	$m['get_listener'] = function(item) {
		var $bool2,ret,$bool3;
		if ((($bool2=(item === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			return null;
		}
		if ((($bool3=$p['hasattr'](item, '__instance__')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			ret = $m['listeners']['get']($p['getattr'](item, '__instance__'));
		}
		else {
			ret = $m['listeners']['get']($p['hash'](item));
		}
		return ret;
	};
	$m['get_listener'].__name__ = 'get_listener';

	$m['get_listener'].__bind_type__ = 0;
	$m['get_listener'].__args__ = [null,null,['item']];
	$m['set_listener'] = function(item, listener) {
		var $bool4,$bool5;
		if ((($bool4=$p['hasattr'](item, '__instance__')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
			$m['listeners'].__setitem__($p['getattr'](item, '__instance__'), listener);
		}
		else if ((($bool5=(listener === null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			$m['listeners']['pop']($p['hash'](item));
		}
		else {
			$m['listeners'].__setitem__($p['hash'](item), listener);
		}
		return null;
	};
	$m['set_listener'].__name__ = 'set_listener';

	$m['set_listener'].__bind_type__ = 0;
	$m['set_listener'].__args__ = [null,null,['item'],['listener']];
	$m['hack_timer_workaround_bug_button'] = null;
	$m['init'] = function() {
		var mousewheel,$6,$4,$5,$2,$3,$1;
		mousewheel = (typeof ($5=(typeof ($3=$p['getattr']($m['Event'], 'eventbits')).__array != 'undefined'?
			((typeof $3.__array[$4=(typeof ($1=$p['getattr']($m['Event'], 'eventmap')).__array != 'undefined'?
			((typeof $1.__array[$2='mousewheel']) != 'undefined'?$1.__array[$2]:
				$1.__getitem__($2)):
				$1.__getitem__('mousewheel'))]) != 'undefined'?$3.__array[$4]:
				$3.__getitem__($4)):
				$3.__getitem__((typeof ($1=$p['getattr']($m['Event'], 'eventmap')).__array != 'undefined'?
			((typeof $1.__array[$2='mousewheel']) != 'undefined'?$1.__array[$2]:
				$1.__getitem__($2)):
				$1.__getitem__('mousewheel'))))).__array != 'undefined'?
			((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
				$5.__getitem__($6)):
				$5.__getitem__(0));

    // Set up capture event dispatchers.
    $wnd.__dispatchCapturedMouseEvent = function(evt) {
        if ($wnd.__dispatchCapturedEvent(evt)) {
            var cap = $m.getCaptureElement();
            if (cap && cap.__listener) {
                $m.dispatchEvent(evt, cap, cap.__listener);
                evt.stopPropagation();
            }
        }
    };

    $wnd.__dispatchCapturedEvent = function(evt) {
        if (!$m.previewEvent(evt).valueOf()) {
            evt.stopPropagation();
            evt.preventDefault();
            return false;
        }

        return true;
        };

    $wnd.addEventListener(
        'mouseout',
        function(evt){
            var cap = $m.getCaptureElement();
            if (cap) {
                if (!evt.relatedTarget) {
                    // When the mouse leaves the window during capture,
                    // release capture and synthesize an 'onlosecapture' event.
                    $m['sCaptureElem'] = null;
                    if (cap.__listener) {
                        var lcEvent = $doc.createEvent('UIEvent');
                        lcEvent.initUIEvent('losecapture', false, false,
                                             $wnd, 0);
                        $m.dispatchEvent(lcEvent, cap, cap.__listener);
                    }
                }
            }
        },
        true
    );

    var dcme = $wnd.__dispatchCapturedMouseEvent;
    var dce = $wnd.__dispatchCapturedEvent;

    $wnd.addEventListener('click', dcme, true);
    $wnd.addEventListener('dblclick', dcme, true);
    $wnd.addEventListener('mousedown', dcme, true);
    $wnd.addEventListener('mouseup', dcme, true);
    $wnd.addEventListener('mousemove', dcme, true);
    $wnd.addEventListener('keydown', dce, true);
    $wnd.addEventListener('keyup', dce, true);
    $wnd.addEventListener('keypress', dce, true);
    
    $wnd.__dispatchEvent = function(evt) {
    
        var listener, curElem = this;
        
        while (curElem && !(listener = curElem.__listener)) {
            curElem = curElem.parentNode;
        }
        if (curElem && curElem.nodeType != 1) {
            curElem = null;
        }
    
        if (listener) {
            $m.dispatchEvent(evt, curElem, listener);
        }
    };
    var dcme = $wnd.__dispatchCapturedMouseEvent;
    $wnd.addEventListener(mousewheel, dcme, true);
    
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$m['_init_testing'] = function() {
		var body,$7,$8;
		body = (typeof ($7=$doc['getElementsByTagName']('body')).__array != 'undefined'?
			((typeof $7.__array[$8=0]) != 'undefined'?$7.__array[$8]:
				$7.__getitem__($8)):
				$7.__getitem__(0));
		$m.mf['_addEventListener'](body, 'click', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'change', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mouseout', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mousedown', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mouseup', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mousemove', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'resize', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'keyup', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'keydown', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'keypress', (typeof cb == "undefined"?$m.cb:cb));
		return null;
	};
	$m['_init_testing'].__name__ = '_init_testing';

	$m['_init_testing'].__bind_type__ = 0;
	$m['_init_testing'].__args__ = [null,null];
	$m['_dispatchWindowEvent'] = function(sender, evt, useCap) {

 		return null;
	};
	$m['_dispatchWindowEvent'].__name__ = '_dispatchWindowEvent';

	$m['_dispatchWindowEvent'].__bind_type__ = 0;
	$m['_dispatchWindowEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$m['_dispatchEvent'] = function(sender, evt, useCap) {
		var $bool10,$bool11,$bool12,$bool13,$pyjs_try_err,$eq1,$eq2,$and1,$and2,$and3,$and4,$and5,$and6,curElem,$bool6,$bool7,$bool8,$bool9,listener,cap;
		if ((($bool6=(evt === null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
			evt = $p['getattr']($wnd, 'event');
		}
		else {
			try {
				sender = $m.get_main_frame()['gobject_wrap'](sender);
				evt = $m.get_main_frame()['gobject_wrap'](evt);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		listener = null;
		curElem = sender;
		cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
		listener = $m['get_listener'](cap);
		if ((($bool8=((($bool7=$and1=cap) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
			false :
			(typeof $bool7=='object'?
				(typeof $bool7.__nonzero__=='function'?
					$bool7.__nonzero__() :
					(typeof $bool7.__len__=='function'?
						($bool7.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(listener !== null):$and1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
			evt['stopPropagation']();
			return null;
		}
		while ((($bool10=((($bool9=$and3=curElem) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
			false :
			(typeof $bool9=='object'?
				(typeof $bool9.__nonzero__=='function'?
					$bool9.__nonzero__() :
					(typeof $bool9.__len__=='function'?
						($bool9.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?($m['get_listener'](curElem) === null):$and3)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
			curElem = (typeof getParent == "undefined"?$m.getParent:getParent)(curElem);
		}
		if ((($bool12=((($bool11=$and5=curElem) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
			false :
			(typeof $bool11=='object'?
				(typeof $bool11.__nonzero__=='function'?
					$bool11.__nonzero__() :
					(typeof $bool11.__len__=='function'?
						($bool11.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($eq1=(typeof getNodeType == "undefined"?$m.getNodeType:getNodeType)(curElem))===($eq2=1)&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
						$eq1==$eq2))))):$and5)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
			curElem = null;
		}
		listener = $m['get_listener'](curElem);
		if ((($bool13=(listener !== null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, curElem, listener);
		}
		return null;
	};
	$m['_dispatchEvent'].__name__ = '_dispatchEvent';

	$m['_dispatchEvent'].__bind_type__ = 0;
	$m['_dispatchEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$m['_dispatchCapturedMouseEvent'] = function(evt) {
		var $and8,cap,$bool14,$bool15,$bool16,$and7,listener,$bool17;
		if ((($bool15=!(($bool14=(typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(evt)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
			false :
			(typeof $bool14=='object'?
				(typeof $bool14.__nonzero__=='function'?
					$bool14.__nonzero__() :
					(typeof $bool14.__len__=='function'?
						($bool14.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
		listener = $m['get_listener'](cap);
		if ((($bool17=((($bool16=$and7=cap) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
			false :
			(typeof $bool16=='object'?
				(typeof $bool16.__nonzero__=='function'?
					$bool16.__nonzero__() :
					(typeof $bool16.__len__=='function'?
						($bool16.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(listener !== null):$and7)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
			evt['stopPropagation']();
		}
		return null;
	};
	$m['_dispatchCapturedMouseEvent'].__name__ = '_dispatchCapturedMouseEvent';

	$m['_dispatchCapturedMouseEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedMouseEvent'].__args__ = [null,null,['evt']];
	$m['_dispatchCapturedMouseoutEvent'] = function(evt) {
		var $bool18,$bool19,cap,listener,lcEvent,$bool20;
		cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
		if ((($bool18=(cap === null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18.__nonzero__=='function'?
						$bool18.__nonzero__() :
						(typeof $bool18.__len__=='function'?
							($bool18.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		if ((($bool19=(typeof eventGetToElement == "undefined"?$m.eventGetToElement:eventGetToElement)(evt)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
		(typeof setCapture == "undefined"?$m.setCapture:setCapture)(null);
		listener = $m['get_listener'](cap);
		if ((($bool20=(listener === null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
			return null;
		}
		lcEvent = $doc['createEvent']('UIEvent');
		lcEvent['initUIEvent']('losecapture', false, false, $wnd, 0);
		(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(lcEvent, cap, listener);
		return null;
	};
	$m['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

	$m['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
	$m['browser_event_cb'] = function(view, event, from_window) {
		var et,$eq10,$eq11,$eq12,$eq13,$eq14,$bool25,$bool24,$bool27,$pyjs_try_err,$bool21,$bool23,$bool22,$or4,$eq8,$eq9,$or1,$or3,$or2,$eq3,$eq6,$eq7,$eq4,$eq5,$bool26;
		if ((($bool21=(event === null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
				false :
				(typeof $bool21=='object'?
					(typeof $bool21.__nonzero__=='function'?
						$bool21.__nonzero__() :
						(typeof $bool21.__len__=='function'?
							($bool21.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			event = $p['getattr']($wnd, 'event');
		}
		else {
			try {
				event = $m.get_main_frame()['gobject_wrap'](event);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		et = (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(event);
		if ((($bool22=(($eq3=et)===($eq4='resize')&&$eq3===null?true:
			($eq3===null?false:($eq4===null?false:
				((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
					((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
						$eq3==$eq4)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22.__nonzero__=='function'?
						$bool22.__nonzero__() :
						(typeof $bool22.__len__=='function'?
							($bool22.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['onResize']();
			return null;
		}
		if ((($bool23=(($eq5=et)===($eq6='mouseout')&&$eq5===null?true:
			($eq5===null?false:($eq6===null?false:
				((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
					((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
						$eq5==$eq6)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
			$m['_dispatchCapturedMouseoutEvent'](event);
		}
		if ((($bool27=((($bool24=$or1=(($eq7=et)===($eq8='keyup')&&$eq7===null?true:
			($eq7===null?false:($eq8===null?false:
				((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
					((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
						$eq7==$eq8)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
			false :
			(typeof $bool24=='object'?
				(typeof $bool24.__nonzero__=='function'?
					$bool24.__nonzero__() :
					(typeof $bool24.__len__=='function'?
						($bool24.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or1:((($bool25=$or2=(($eq9=et)===($eq10='keydown')&&$eq9===null?true:
			($eq9===null?false:($eq10===null?false:
				((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
					((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
						$eq9==$eq10)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
			false :
			(typeof $bool25=='object'?
				(typeof $bool25.__nonzero__=='function'?
					$bool25.__nonzero__() :
					(typeof $bool25.__len__=='function'?
						($bool25.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or2:((($bool26=$or3=(($eq11=et)===($eq12='keypress')&&$eq11===null?true:
			($eq11===null?false:($eq12===null?false:
				((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
					((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
						$eq11==$eq12)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
			false :
			(typeof $bool26=='object'?
				(typeof $bool26.__nonzero__=='function'?
					$bool26.__nonzero__() :
					(typeof $bool26.__len__=='function'?
						($bool26.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or3:(($eq13=et)===($eq14='change')&&$eq13===null?true:
			($eq13===null?false:($eq14===null?false:
				((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
					((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
						$eq13==$eq14))))))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
				false :
				(typeof $bool27=='object'?
					(typeof $bool27.__nonzero__=='function'?
						$bool27.__nonzero__() :
						(typeof $bool27.__len__=='function'?
							($bool27.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return (typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(event);
		}
		else {
			return $m['_dispatchCapturedMouseEvent'](event);
		}
		return null;
	};
	$m['browser_event_cb'].__name__ = 'browser_event_cb';

	$m['browser_event_cb'].__bind_type__ = 0;
	$m['browser_event_cb'].__args__ = [null,null,['view'],['event'],['from_window']];
	$m['_dispatchCapturedEvent'] = function(event) {
		var $bool29,$bool28;
		if ((($bool29=!(($bool28=(typeof previewEvent == "undefined"?$m.previewEvent:previewEvent)(event)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
			false :
			(typeof $bool28=='object'?
				(typeof $bool28.__nonzero__=='function'?
					$bool28.__nonzero__() :
					(typeof $bool28.__len__=='function'?
						($bool28.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
				false :
				(typeof $bool29=='object'?
					(typeof $bool29.__nonzero__=='function'?
						$bool29.__nonzero__() :
						(typeof $bool29.__len__=='function'?
							($bool29.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			event['stopPropagation']();
			(typeof eventPreventDefault == "undefined"?$m.eventPreventDefault:eventPreventDefault)(event);
			return false;
		}
		return true;
	};
	$m['_dispatchCapturedEvent'].__name__ = '_dispatchCapturedEvent';

	$m['_dispatchCapturedEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedEvent'].__args__ = [null,null,['event']];
	$m['addEventPreview'] = function(preview) {

		$m['sEventPreviewStack']['append'](preview);
		return null;
	};
	$m['addEventPreview'].__name__ = 'addEventPreview';

	$m['addEventPreview'].__bind_type__ = 0;
	$m['addEventPreview'].__args__ = [null,null,['preview']];
	$m['appendChild'] = function(parent, child) {

		parent['appendChild'](child);
		return null;
	};
	$m['appendChild'].__name__ = 'appendChild';

	$m['appendChild'].__bind_type__ = 0;
	$m['appendChild'].__args__ = [null,null,['parent'],['child']];
	$m['removeChild'] = function(parent, child) {

		parent['removeChild'](child);
		return null;
	};
	$m['removeChild'].__name__ = 'removeChild';

	$m['removeChild'].__bind_type__ = 0;
	$m['removeChild'].__args__ = [null,null,['parent'],['child']];
	$m['replaceChild'] = function(parent, newChild, oldChild) {

		parent['replaceChild'](newChild, oldChild);
		return null;
	};
	$m['replaceChild'].__name__ = 'replaceChild';

	$m['replaceChild'].__bind_type__ = 0;
	$m['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
	$m['buttonClick'] = function(elem) {


        var evt = $doc.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, null, 1, 0,
                    0, 0, 0, false, false, false, false, 0, null);

        elem.dispatchEvent(evt);
    
	};
	$m['buttonClick'].__name__ = 'buttonClick';

	$m['buttonClick'].__bind_type__ = 0;
	$m['buttonClick'].__args__ = [null,null,['elem']];
	$m['compare'] = function(elem1, elem2) {


    return (elem1 == elem2);
    
	};
	$m['compare'].__name__ = 'compare';

	$m['compare'].__bind_type__ = 0;
	$m['compare'].__args__ = [null,null,['elem1'],['elem2']];
	$m['createAnchor'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('A');
	};
	$m['createAnchor'].__name__ = 'createAnchor';

	$m['createAnchor'].__bind_type__ = 0;
	$m['createAnchor'].__args__ = [null,null];
	$m['createButton'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('button');
	};
	$m['createButton'].__name__ = 'createButton';

	$m['createButton'].__bind_type__ = 0;
	$m['createButton'].__args__ = [null,null];
	$m['createCol'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('col');
	};
	$m['createCol'].__name__ = 'createCol';

	$m['createCol'].__bind_type__ = 0;
	$m['createCol'].__args__ = [null,null];
	$m['createDiv'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('div');
	};
	$m['createDiv'].__name__ = 'createDiv';

	$m['createDiv'].__bind_type__ = 0;
	$m['createDiv'].__args__ = [null,null];
	$m['createElement'] = function(tag) {


    return $doc.createElement(tag);
    
	};
	$m['createElement'].__name__ = 'createElement';

	$m['createElement'].__bind_type__ = 0;
	$m['createElement'].__args__ = [null,null,['tag']];
	$m['createFieldSet'] = function() {

		return $m['createElement']('fieldset');
	};
	$m['createFieldSet'].__name__ = 'createFieldSet';

	$m['createFieldSet'].__bind_type__ = 0;
	$m['createFieldSet'].__args__ = [null,null];
	$m['createForm'] = function() {

		return $m['createElement']('form');
	};
	$m['createForm'].__name__ = 'createForm';

	$m['createForm'].__bind_type__ = 0;
	$m['createForm'].__args__ = [null,null];
	$m['createIFrame'] = function() {

		return $m['createElement']('iframe');
	};
	$m['createIFrame'].__name__ = 'createIFrame';

	$m['createIFrame'].__bind_type__ = 0;
	$m['createIFrame'].__args__ = [null,null];
	$m['createImg'] = function() {

		return $m['createElement']('img');
	};
	$m['createImg'].__name__ = 'createImg';

	$m['createImg'].__bind_type__ = 0;
	$m['createImg'].__args__ = [null,null];
	$m['createInputCheck'] = function() {

		return (typeof createInputElement == "undefined"?$m.createInputElement:createInputElement)('checkbox');
	};
	$m['createInputCheck'].__name__ = 'createInputCheck';

	$m['createInputCheck'].__bind_type__ = 0;
	$m['createInputCheck'].__args__ = [null,null];
	$m['createInputElement'] = function(elementType) {


    var e = $doc.createElement("INPUT");
    e.type = elementType;
    return e;
    
	};
	$m['createInputElement'].__name__ = 'createInputElement';

	$m['createInputElement'].__bind_type__ = 0;
	$m['createInputElement'].__args__ = [null,null,['elementType']];
	$m['createInputPassword'] = function() {

		return $m['createInputElement']('password');
	};
	$m['createInputPassword'].__name__ = 'createInputPassword';

	$m['createInputPassword'].__bind_type__ = 0;
	$m['createInputPassword'].__args__ = [null,null];
	$m['createInputRadio'] = function(group) {


    var elem = $doc.createElement("INPUT");
    elem.type = 'radio';
    elem.name = group;
    return elem;
    
	};
	$m['createInputRadio'].__name__ = 'createInputRadio';

	$m['createInputRadio'].__bind_type__ = 0;
	$m['createInputRadio'].__args__ = [null,null,['group']];
	$m['createInputText'] = function() {

		return $m['createInputElement']('text');
	};
	$m['createInputText'].__name__ = 'createInputText';

	$m['createInputText'].__bind_type__ = 0;
	$m['createInputText'].__args__ = [null,null];
	$m['createLabel'] = function() {

		return $m['createElement']('label');
	};
	$m['createLabel'].__name__ = 'createLabel';

	$m['createLabel'].__bind_type__ = 0;
	$m['createLabel'].__args__ = [null,null];
	$m['createLegend'] = function() {

		return $m['createElement']('legend');
	};
	$m['createLegend'].__name__ = 'createLegend';

	$m['createLegend'].__bind_type__ = 0;
	$m['createLegend'].__args__ = [null,null];
	$m['createOptions'] = function() {

		return $m['createElement']('options');
	};
	$m['createOptions'].__name__ = 'createOptions';

	$m['createOptions'].__bind_type__ = 0;
	$m['createOptions'].__args__ = [null,null];
	$m['createSelect'] = function() {

		return $m['createElement']('select');
	};
	$m['createSelect'].__name__ = 'createSelect';

	$m['createSelect'].__bind_type__ = 0;
	$m['createSelect'].__args__ = [null,null];
	$m['createSpan'] = function() {

		return $m['createElement']('span');
	};
	$m['createSpan'].__name__ = 'createSpan';

	$m['createSpan'].__bind_type__ = 0;
	$m['createSpan'].__args__ = [null,null];
	$m['createTable'] = function() {

		return $m['createElement']('table');
	};
	$m['createTable'].__name__ = 'createTable';

	$m['createTable'].__bind_type__ = 0;
	$m['createTable'].__args__ = [null,null];
	$m['createTBody'] = function() {

		return $m['createElement']('tbody');
	};
	$m['createTBody'].__name__ = 'createTBody';

	$m['createTBody'].__bind_type__ = 0;
	$m['createTBody'].__args__ = [null,null];
	$m['createTD'] = function() {

		return $m['createElement']('td');
	};
	$m['createTD'].__name__ = 'createTD';

	$m['createTD'].__bind_type__ = 0;
	$m['createTD'].__args__ = [null,null];
	$m['createTextArea'] = function() {

		return $m['createElement']('textarea');
	};
	$m['createTextArea'].__name__ = 'createTextArea';

	$m['createTextArea'].__bind_type__ = 0;
	$m['createTextArea'].__args__ = [null,null];
	$m['createTH'] = function() {

		return $m['createElement']('th');
	};
	$m['createTH'].__name__ = 'createTH';

	$m['createTH'].__bind_type__ = 0;
	$m['createTH'].__args__ = [null,null];
	$m['createTR'] = function() {

		return $m['createElement']('tr');
	};
	$m['createTR'].__name__ = 'createTR';

	$m['createTR'].__bind_type__ = 0;
	$m['createTR'].__args__ = [null,null];
	$m['eventStopPropagation'] = function(evt) {

		evt['stopPropagation']();
		return null;
	};
	$m['eventStopPropagation'].__name__ = 'eventStopPropagation';

	$m['eventStopPropagation'].__bind_type__ = 0;
	$m['eventStopPropagation'].__args__ = [null,null,['evt']];
	$m['eventCancelBubble'] = function(evt, cancel) {

		evt.cancelBubble = cancel;
		return null;
	};
	$m['eventCancelBubble'].__name__ = 'eventCancelBubble';

	$m['eventCancelBubble'].__bind_type__ = 0;
	$m['eventCancelBubble'].__args__ = [null,null,['evt'],['cancel']];
	$m['eventGetAltKey'] = function(evt) {

		return $p['getattr'](evt, 'altKey');
	};
	$m['eventGetAltKey'].__name__ = 'eventGetAltKey';

	$m['eventGetAltKey'].__bind_type__ = 0;
	$m['eventGetAltKey'].__args__ = [null,null,['evt']];
	$m['eventGetButton'] = function(evt) {


    var button = evt.which;
    if(button == 2) {
        return 4;
    } else if (button == 3) {
        return 2;
    } else {
        return button || 0;
    }
    
	};
	$m['eventGetButton'].__name__ = 'eventGetButton';

	$m['eventGetButton'].__bind_type__ = 0;
	$m['eventGetButton'].__args__ = [null,null,['evt']];
	$m['eventGetClientX'] = function(evt) {

		return $p['getattr'](evt, 'clientX');
	};
	$m['eventGetClientX'].__name__ = 'eventGetClientX';

	$m['eventGetClientX'].__bind_type__ = 0;
	$m['eventGetClientX'].__args__ = [null,null,['evt']];
	$m['eventGetClientY'] = function(evt) {

		return $p['getattr'](evt, 'clientY');
	};
	$m['eventGetClientY'].__name__ = 'eventGetClientY';

	$m['eventGetClientY'].__bind_type__ = 0;
	$m['eventGetClientY'].__args__ = [null,null,['evt']];
	$m['eventGetCtrlKey'] = function(evt) {

		return $p['getattr'](evt, 'ctrlKey');
	};
	$m['eventGetCtrlKey'].__name__ = 'eventGetCtrlKey';

	$m['eventGetCtrlKey'].__bind_type__ = 0;
	$m['eventGetCtrlKey'].__args__ = [null,null,['evt']];
	$m['eventGetFromElement'] = function(evt) {


    return evt.fromElement ? evt.fromElement : null;
    
	};
	$m['eventGetFromElement'].__name__ = 'eventGetFromElement';

	$m['eventGetFromElement'].__bind_type__ = 0;
	$m['eventGetFromElement'].__args__ = [null,null,['evt']];
	$m['eventGetKeyCode'] = function(evt) {


    return evt.which ? evt.which :
            (evt.keyCode ? evt.keyCode : 0);
    
	};
	$m['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

	$m['eventGetKeyCode'].__bind_type__ = 0;
	$m['eventGetKeyCode'].__args__ = [null,null,['evt']];
	$m['eventGetRepeat'] = function(evt) {

		return $p['getattr'](evt, 'repeat');
	};
	$m['eventGetRepeat'].__name__ = 'eventGetRepeat';

	$m['eventGetRepeat'].__bind_type__ = 0;
	$m['eventGetRepeat'].__args__ = [null,null,['evt']];
	$m['eventGetScreenX'] = function(evt) {

		return $p['getattr'](evt, 'screenX');
	};
	$m['eventGetScreenX'].__name__ = 'eventGetScreenX';

	$m['eventGetScreenX'].__bind_type__ = 0;
	$m['eventGetScreenX'].__args__ = [null,null,['evt']];
	$m['eventGetScreenY'] = function(evt) {

		return $p['getattr'](evt, 'screenY');
	};
	$m['eventGetScreenY'].__name__ = 'eventGetScreenY';

	$m['eventGetScreenY'].__bind_type__ = 0;
	$m['eventGetScreenY'].__args__ = [null,null,['evt']];
	$m['eventGetShiftKey'] = function(evt) {

		return $p['getattr'](evt, 'shiftKey');
	};
	$m['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

	$m['eventGetShiftKey'].__bind_type__ = 0;
	$m['eventGetShiftKey'].__args__ = [null,null,['evt']];
	$m['eventGetCurrentTarget'] = function(event) {

		return $p['getattr'](event, 'currentTarget');
	};
	$m['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

	$m['eventGetCurrentTarget'].__bind_type__ = 0;
	$m['eventGetCurrentTarget'].__args__ = [null,null,['event']];
	$m['eventGetTarget'] = function(event) {


    return event.target ? event.target : null;
    
	};
	$m['eventGetTarget'].__name__ = 'eventGetTarget';

	$m['eventGetTarget'].__bind_type__ = 0;
	$m['eventGetTarget'].__args__ = [null,null,['event']];
	$m['eventGetToElement'] = function(evt) {


    return evt.relatedTarget ? evt.relatedTarget : null;
    
	};
	$m['eventGetToElement'].__name__ = 'eventGetToElement';

	$m['eventGetToElement'].__bind_type__ = 0;
	$m['eventGetToElement'].__args__ = [null,null,['evt']];
	$m['eventGetType'] = function(event) {

		return $p['getattr'](event, 'type');
	};
	$m['eventGetType'].__name__ = 'eventGetType';

	$m['eventGetType'].__bind_type__ = 0;
	$m['eventGetType'].__args__ = [null,null,['event']];
	$m['eventGetTypeInt'] = function(event) {

		return $m['Event']['eventmap']['get']($p['str']($p['getattr'](event, 'type')), 0);
	};
	$m['eventGetTypeInt'].__name__ = 'eventGetTypeInt';

	$m['eventGetTypeInt'].__bind_type__ = 0;
	$m['eventGetTypeInt'].__args__ = [null,null,['event']];
	$m['eventGetTypeString'] = function(event) {

		return $m['eventGetType'](event);
	};
	$m['eventGetTypeString'].__name__ = 'eventGetTypeString';

	$m['eventGetTypeString'].__bind_type__ = 0;
	$m['eventGetTypeString'].__args__ = [null,null,['event']];
	$m['eventPreventDefault'] = function(evt) {

		evt['preventDefault']();
		return null;
	};
	$m['eventPreventDefault'].__name__ = 'eventPreventDefault';

	$m['eventPreventDefault'].__bind_type__ = 0;
	$m['eventPreventDefault'].__args__ = [null,null,['evt']];
	$m['eventSetKeyCode'] = function(evt, key) {

		evt.keyCode = key;
		return null;
	};
	$m['eventSetKeyCode'].__name__ = 'eventSetKeyCode';

	$m['eventSetKeyCode'].__bind_type__ = 0;
	$m['eventSetKeyCode'].__args__ = [null,null,['evt'],['key']];
	$m['eventToString'] = function(evt) {


    return evt.toString();
    
	};
	$m['eventToString'].__name__ = 'eventToString';

	$m['eventToString'].__bind_type__ = 0;
	$m['eventToString'].__args__ = [null,null,['evt']];
	$m['iframeGetSrc'] = function(elem) {

		return $p['getattr'](elem, 'src');
	};
	$m['iframeGetSrc'].__name__ = 'iframeGetSrc';

	$m['iframeGetSrc'].__bind_type__ = 0;
	$m['iframeGetSrc'].__args__ = [null,null,['elem']];
	$m['getAbsoluteLeft'] = function(_elem) {


    // Unattached elements and elements (or their ancestors) with style
    // 'display: none' have no offsetLeft.
    var elem = _elem;
    if (elem.offsetLeft == null) {
      return 0;
    }

    var left = 0;
    var curr = elem.parentNode;
    if (curr) {
      // This intentionally excludes body which has a null offsetParent.
      while (curr.offsetParent) {
        left -= curr.scrollLeft;
        curr = curr.parentNode;
      }
    }
    
    while (elem) {
      left += elem.offsetLeft;

      // Safari bug: a top-level absolutely positioned element includes the
      // body's offset position already.
      var parent = elem.offsetParent;
      if (parent && (parent.tagName == 'BODY') &&
          (elem.style.position == 'absolute')) {
        break;
      }

      elem = parent;
    }
    return left;
    
	};
	$m['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

	$m['getAbsoluteLeft'].__bind_type__ = 0;
	$m['getAbsoluteLeft'].__args__ = [null,null,['_elem']];
	$m['getAbsoluteTop'] = function(_elem) {


    // Unattached elements and elements (or their ancestors) with style
    // 'display: none' have no offsetTop.
    var elem = _elem;
    if (elem.offsetTop == null) {
      return 0;
    }

    var top = 0;
    var curr = elem.parentNode;
    if (curr) {
      // This intentionally excludes body which has a null offsetParent.
      while (curr.offsetParent) {
        top -= curr.scrollTop;
        curr = curr.parentNode;
      }
    }
    
    while (elem) {
      top += elem.offsetTop;

      // Safari bug: a top-level absolutely positioned element includes the
      // body's offset position already.
      var parent = elem.offsetParent;
      if (parent && (parent.tagName == 'BODY') &&
          (elem.style.position == 'absolute')) {
        break;
      }

      elem = parent;
    }
    return top;
    
	};
	$m['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

	$m['getAbsoluteTop'].__bind_type__ = 0;
	$m['getAbsoluteTop'].__args__ = [null,null,['_elem']];
	$m['getAttribute'] = function(elem, attr) {


    var ret = elem[attr];
    return (ret == null) ? null : String(ret);
    
	};
	$m['getAttribute'].__name__ = 'getAttribute';

	$m['getAttribute'].__bind_type__ = 0;
	$m['getAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getElemAttribute'] = function(elem, attr) {

		return elem['getAttribute'](attr);
	};
	$m['getElemAttribute'].__name__ = 'getElemAttribute';

	$m['getElemAttribute'].__bind_type__ = 0;
	$m['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getBooleanAttribute'] = function(elem, attr) {


    return !!elem[attr];
    
	};
	$m['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

	$m['getBooleanAttribute'].__bind_type__ = 0;
	$m['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getBooleanElemAttribute'] = function(elem, attr) {
		var $bool30,$bool31;
		if ((($bool31=!(($bool30=elem['hasAttribute'](attr)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
			false :
			(typeof $bool30=='object'?
				(typeof $bool30.__nonzero__=='function'?
					$bool30.__nonzero__() :
					(typeof $bool30.__len__=='function'?
						($bool30.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
				false :
				(typeof $bool31=='object'?
					(typeof $bool31.__nonzero__=='function'?
						$bool31.__nonzero__() :
						(typeof $bool31.__len__=='function'?
							($bool31.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		return $p['bool'](elem['getAttribute'](attr));
	};
	$m['getBooleanElemAttribute'].__name__ = 'getBooleanElemAttribute';

	$m['getBooleanElemAttribute'].__bind_type__ = 0;
	$m['getBooleanElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getCaptureElement'] = function() {

		return $m['sCaptureElem'];
	};
	$m['getCaptureElement'].__name__ = 'getCaptureElement';

	$m['getCaptureElement'].__bind_type__ = 0;
	$m['getCaptureElement'].__args__ = [null,null];
	$m['getChild'] = function(elem, index) {


    var count = 0, child = elem.firstChild;
    while (child) {
      var next = child.nextSibling;
      if (child.nodeType == 1) {
        if (index == count)
          return child;
        ++count;
      }
      child = next;
    }

    return null;
    
	};
	$m['getChild'].__name__ = 'getChild';

	$m['getChild'].__bind_type__ = 0;
	$m['getChild'].__args__ = [null,null,['elem'],['index']];
	$m['getChildCount'] = function(elem) {


    var count = 0, child = elem.firstChild;
    while (child) {
      if (child.nodeType == 1)
      ++count;
      child = child.nextSibling;
    }
    return count;
    
	};
	$m['getChildCount'].__name__ = 'getChildCount';

	$m['getChildCount'].__bind_type__ = 0;
	$m['getChildCount'].__args__ = [null,null,['elem']];
	$m['getChildIndex'] = function(parent, toFind) {


    var count = 0, child = parent.firstChild;
    while (child) {
        if (child == toFind)
            return count;
        if (child.nodeType == 1)
            ++count;
        child = child.nextSibling;
    }

    return -1;
    
	};
	$m['getChildIndex'].__name__ = 'getChildIndex';

	$m['getChildIndex'].__bind_type__ = 0;
	$m['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
	$m['getElementById'] = function(id) {


    var elem = $doc.getElementById(id);
    return elem ? elem : null;
    
	};
	$m['getElementById'].__name__ = 'getElementById';

	$m['getElementById'].__bind_type__ = 0;
	$m['getElementById'].__args__ = [null,null,['id']];
	$m['getEventListener'] = function(element) {


    return element.__listener;
    
	};
	$m['getEventListener'].__name__ = 'getEventListener';

	$m['getEventListener'].__bind_type__ = 0;
	$m['getEventListener'].__args__ = [null,null,['element']];
	$m['eventbitsmap'] = $p['dict']([]);
	$m['getEventsSunk'] = function(element) {

		return element.__eventBits ? element.__eventBits : 0;
	};
	$m['getEventsSunk'].__name__ = 'getEventsSunk';

	$m['getEventsSunk'].__bind_type__ = 0;
	$m['getEventsSunk'].__args__ = [null,null,['element']];
	$m['getFirstChild'] = function(elem) {


    var child = elem.firstChild;
    while (child && child.nodeType != 1)
      child = child.nextSibling;
    return child ? child : null;
    
	};
	$m['getFirstChild'].__name__ = 'getFirstChild';

	$m['getFirstChild'].__bind_type__ = 0;
	$m['getFirstChild'].__args__ = [null,null,['elem']];
	$m['getLastChild'] = function(elem) {
		var $and9,$and12,$bool32,$bool33,$and10,$and11,$bool34,child,$eq15,$eq16;
		child = ((($bool32=$and9=elem) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
			false :
			(typeof $bool32=='object'?
				(typeof $bool32.__nonzero__=='function'?
					$bool32.__nonzero__() :
					(typeof $bool32.__len__=='function'?
						($bool32.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$p['getattr'](elem, 'lastChild'):$and9);
		while ((($bool34=((($bool33=$and11=child) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
			false :
			(typeof $bool33=='object'?
				(typeof $bool33.__nonzero__=='function'?
					$bool33.__nonzero__() :
					(typeof $bool33.__len__=='function'?
						($bool33.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($eq15=$p['getattr'](child, 'nodeType'))===($eq16=1)&&$eq15===null?true:
			($eq15===null?false:($eq16===null?false:
				((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
					((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
						$eq15==$eq16))))):$and11)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
				false :
				(typeof $bool34=='object'?
					(typeof $bool34.__nonzero__=='function'?
						$bool34.__nonzero__() :
						(typeof $bool34.__len__=='function'?
							($bool34.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			child = $p['getattr'](child, 'previousSibling');
		}
		return child;
	};
	$m['getLastChild'].__name__ = 'getLastChild';

	$m['getLastChild'].__bind_type__ = 0;
	$m['getLastChild'].__args__ = [null,null,['elem']];
	$m['getInnerHTML'] = function(element) {


    var ret = element.innerHTML;
    return (ret == null) ? null : ret;
    
	};
	$m['getInnerHTML'].__name__ = 'getInnerHTML';

	$m['getInnerHTML'].__bind_type__ = 0;
	$m['getInnerHTML'].__args__ = [null,null,['element']];
	$m['getInnerText'] = function(element) {


    // To mimic IE's 'innerText' property in the W3C DOM, we need to recursively
    // concatenate all child text nodes (depth first).
    var text = '', child = element.firstChild;
    while (child) {
      if (child.nodeType == 1){ // 1 == Element node
        text += $m['getInnerText'](child);
      } else if (child.nodeValue) {
        text += child.nodeValue;
      }
      child = child.nextSibling;
    }
    return text;
    
	};
	$m['getInnerText'].__name__ = 'getInnerText';

	$m['getInnerText'].__bind_type__ = 0;
	$m['getInnerText'].__args__ = [null,null,['element']];
	$m['getIntAttribute'] = function(elem, attr) {


    var i = parseInt(elem[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
	};
	$m['getIntAttribute'].__name__ = 'getIntAttribute';

	$m['getIntAttribute'].__bind_type__ = 0;
	$m['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getIntElemAttribute'] = function(elem, attr) {
		var $bool35,$bool36;
		if ((($bool36=!(($bool35=elem['hasAttribute'](attr)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
			false :
			(typeof $bool35=='object'?
				(typeof $bool35.__nonzero__=='function'?
					$bool35.__nonzero__() :
					(typeof $bool35.__len__=='function'?
						($bool35.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
				false :
				(typeof $bool36=='object'?
					(typeof $bool36.__nonzero__=='function'?
						$bool36.__nonzero__() :
						(typeof $bool36.__len__=='function'?
							($bool36.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		return $p['float_int'](elem['getAttribute'](attr));
	};
	$m['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

	$m['getIntElemAttribute'].__bind_type__ = 0;
	$m['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getIntStyleAttribute'] = function(elem, attr) {


    var i = parseInt(elem.style[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
	};
	$m['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

	$m['getIntStyleAttribute'].__bind_type__ = 0;
	$m['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getPrevSibling'] = function(elem) {
		var $and13,$eq18,sib,$bool37,$and14,$bool38,$eq17;
		sib = $p['getattr'](elem, 'previousSibling');
		while ((($bool38=((($bool37=$and13=sib) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
			false :
			(typeof $bool37=='object'?
				(typeof $bool37.__nonzero__=='function'?
					$bool37.__nonzero__() :
					(typeof $bool37.__len__=='function'?
						($bool37.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?!(($eq17=$p['getattr'](sib, 'nodeType'))===($eq18=1)&&$eq17===null?true:
			($eq17===null?false:($eq18===null?false:
				((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
					((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
						$eq17==$eq18))))):$and13)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
				false :
				(typeof $bool38=='object'?
					(typeof $bool38.__nonzero__=='function'?
						$bool38.__nonzero__() :
						(typeof $bool38.__len__=='function'?
							($bool38.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			sib = $p['getattr'](sib, 'previousSibling');
		}
		return sib;
	};
	$m['getPrevSibling'].__name__ = 'getPrevSibling';

	$m['getPrevSibling'].__bind_type__ = 0;
	$m['getPrevSibling'].__args__ = [null,null,['elem']];
	$m['getNextSibling'] = function(elem) {


    var sib = elem.nextSibling;
    while (sib && sib.nodeType != 1)
      sib = sib.nextSibling;
    return sib ? sib : null;
    
	};
	$m['getNextSibling'].__name__ = 'getNextSibling';

	$m['getNextSibling'].__bind_type__ = 0;
	$m['getNextSibling'].__args__ = [null,null,['elem']];
	$m['getNodeType'] = function(elem) {

		return $p['getattr'](elem, 'nodeType');
	};
	$m['getNodeType'].__name__ = 'getNodeType';

	$m['getNodeType'].__bind_type__ = 0;
	$m['getNodeType'].__args__ = [null,null,['elem']];
	$m['getParent'] = function(elem) {


    var parent = elem.parentNode;
    if(parent == null) {
        return null;
    }
    if (parent.nodeType != 1)
        parent = null;
    return parent ? parent : null;
    
	};
	$m['getParent'].__name__ = 'getParent';

	$m['getParent'].__bind_type__ = 0;
	$m['getParent'].__args__ = [null,null,['elem']];
	$m['getStyleAttribute'] = function(elem, attr) {


    var ret = elem.style[attr];
    return (ret == null) ? null : ret;
    
	};
	$m['getStyleAttribute'].__name__ = 'getStyleAttribute';

	$m['getStyleAttribute'].__bind_type__ = 0;
	$m['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['insertChild'] = function(parent, toAdd, index) {


    var count = 0, child = parent.firstChild, before = null;
    while (child) {
      if (child.nodeType == 1) {
        if (count == index) {
          before = child;
          break;
        }
        ++count;
      }
      child = child.nextSibling;
    }

    parent.insertBefore(toAdd, before);
    
	};
	$m['insertChild'].__name__ = 'insertChild';

	$m['insertChild'].__bind_type__ = 0;
	$m['insertChild'].__args__ = [null,null,['parent'],['toAdd'],['index']];
	$m['IterChildrenClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.DOM';
		$method = $pyjs__bind_method2('__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			self.parent = elem;
			self.child = $p['getattr'](elem, 'firstChild');
			self.lastChild = null;
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool39,$bool40;
			if ((($bool40=!(($bool39=$p['getattr'](self, 'child')) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
				false :
				(typeof $bool39=='object'?
					(typeof $bool39.__nonzero__=='function'?
						$bool39.__nonzero__() :
						(typeof $bool39.__len__=='function'?
							($bool39.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
					false :
					(typeof $bool40=='object'?
						(typeof $bool40.__nonzero__=='function'?
							$bool40.__nonzero__() :
							(typeof $bool40.__len__=='function'?
								($bool40.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['StopIteration']);
			}
			self.lastChild = $p['getattr'](self, 'child');
			self.child = $m['getNextSibling']($p['getattr'](self, 'child'));
			return $p['getattr'](self, 'lastChild');
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['parent']['removeChild']($p['getattr'](self, 'lastChild'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('IterChildrenClass', $p['tuple']($bases), $data);
	})();
	$m['iterChildren'] = function(elem) {


    var parent = elem;
    var child = elem.firstChild;
    var lastChild = null;
    return {
        'next': function() {
            if (child == null) {
                throw $p['StopIteration'];
            }
            lastChild = child;
            child = $m['getNextSibling'](child);
            return lastChild;
        },
        'remove': function() {        
            parent.removeChild(lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
	};
	$m['iterChildren'].__name__ = 'iterChildren';

	$m['iterChildren'].__bind_type__ = 0;
	$m['iterChildren'].__args__ = [null,null,['elem']];
	$m['IterWalkChildren'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.DOM';
		$method = $pyjs__bind_method2('__init__', function(elem, all_nodes) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				all_nodes = arguments[2];
			}
			if (typeof all_nodes == 'undefined') all_nodes=arguments.callee.__args__[4][1];
			var $bool41;
			self.parent = elem;
			self.all_nodes = all_nodes;
			if ((($bool41=all_nodes) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
					false :
					(typeof $bool41=='object'?
						(typeof $bool41.__nonzero__=='function'?
							$bool41.__nonzero__() :
							(typeof $bool41.__len__=='function'?
								($bool41.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.child = $p['getattr'](elem, 'firstChild');
			}
			else {
				self.child = $m['getFirstChild'](elem);
			}
			self.lastChild = null;
			self.stack = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['elem'],['all_nodes', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool47,$bool46,$bool45,$bool44,$bool43,$bool42,$cmp2,nextSibling,firstChild,$bool48,$len1,$cmp1;
			if ((($bool43=!(($bool42=$p['getattr'](self, 'child')) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
				false :
				(typeof $bool42=='object'?
					(typeof $bool42.__nonzero__=='function'?
						$bool42.__nonzero__() :
						(typeof $bool42.__len__=='function'?
							($bool42.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43.__nonzero__=='function'?
							$bool43.__nonzero__() :
							(typeof $bool43.__len__=='function'?
								($bool43.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['StopIteration']);
			}
			self.lastChild = $p['getattr'](self, 'child');
			if ((($bool44=$p['getattr'](self, 'all_nodes')) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44.__nonzero__=='function'?
							$bool44.__nonzero__() :
							(typeof $bool44.__len__=='function'?
								($bool44.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				firstChild = $p['getattr']($p['getattr'](self, 'child'), 'firstChild');
				nextSibling = $p['getattr']($p['getattr'](self, 'child'), 'nextSibling');
			}
			else {
				firstChild = $m['getFirstChild']($p['getattr'](self, 'child'));
				nextSibling = $m['getNextSibling']($p['getattr'](self, 'child'));
			}
			if ((($bool45=(firstChild !== null)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool46=(nextSibling !== null)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46.__nonzero__=='function'?
								$bool46.__nonzero__() :
								(typeof $bool46.__len__=='function'?
									($bool46.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['stack']['append']($p['tuple']([nextSibling, $p['getattr'](self, 'parent')]));
				}
				self.parent = $p['getattr'](self, 'child');
				self.child = firstChild;
			}
			else if ((($bool47=(nextSibling !== null)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
					false :
					(typeof $bool47=='object'?
						(typeof $bool47.__nonzero__=='function'?
							$bool47.__nonzero__() :
							(typeof $bool47.__len__=='function'?
								($bool47.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.child = nextSibling;
			}
			else if ((($bool48=((($cmp1=(($len1=$p['getattr'](self, 'stack')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48.__nonzero__=='function'?
							$bool48.__nonzero__() :
							(typeof $bool48.__len__=='function'?
								($bool48.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign1 = $p['__ass_unpack'](self['stack']['pop'](), 2, null);
				self.child = $tupleassign1[0];
				self.parent = $tupleassign1[1];
			}
			else {
				self.child = null;
			}
			return $p['getattr'](self, 'lastChild');
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['parent']['removeChild']($p['getattr'](self, 'lastChild'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('IterWalkChildren', $p['tuple']($bases), $data);
	})();
	$m['walkChildren'] = function(elem) {


    var parent = elem;
    var child = $m['getFirstChild'](elem);
    var lastChild = null;
    var stack = [];
    var parentStack = [];
    return {
        'next': function() {
            if (child == null) {
                throw $p['StopIteration'];
            }
            lastChild = child;
            var firstChild = $m['getFirstChild'](child);
            var nextSibling = $m['getNextSibling'](child);
            if(firstChild != null) {
               if(nextSibling != null) {
                   stack.push(nextSibling);
                   parentStack.push(parent);
                }
                parent = child;
                child = firstChild;
            } else if(nextSibling != null) {
                child = nextSibling;
            } else if(stack.length > 0) {
                child = stack.pop();
                parent = parentStack.pop();
            } else {
                child = null;
            }
            return lastChild;
        },
        'remove': function() {        
            parent.removeChild(lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
	};
	$m['walkChildren'].__name__ = 'walkChildren';

	$m['walkChildren'].__bind_type__ = 0;
	$m['walkChildren'].__args__ = [null,null,['elem']];
	$m['isOrHasChild'] = function(parent, child) {
		var $bool50,$bool51,$bool52,$eq20,$bool53,$bool49,$eq19;
		while ((($bool49=child) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
				false :
				(typeof $bool49=='object'?
					(typeof $bool49.__nonzero__=='function'?
						$bool49.__nonzero__() :
						(typeof $bool49.__len__=='function'?
							($bool49.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool50=$m['compare'](parent, child)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50.__nonzero__=='function'?
							$bool50.__nonzero__() :
							(typeof $bool50.__len__=='function'?
								($bool50.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
			child = $p['getattr'](child, 'parentNode');
			if ((($bool52=!(($bool51=child) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
				false :
				(typeof $bool51=='object'?
					(typeof $bool51.__nonzero__=='function'?
						$bool51.__nonzero__() :
						(typeof $bool51.__len__=='function'?
							($bool51.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52.__nonzero__=='function'?
							$bool52.__nonzero__() :
							(typeof $bool52.__len__=='function'?
								($bool52.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			if ((($bool53=!(($eq19=$p['getattr'](child, 'nodeType'))===($eq20=1)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53.__nonzero__=='function'?
							$bool53.__nonzero__() :
							(typeof $bool53.__len__=='function'?
								($bool53.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				child = null;
			}
		}
		return false;
	};
	$m['isOrHasChild'].__name__ = 'isOrHasChild';

	$m['isOrHasChild'].__bind_type__ = 0;
	$m['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
	$m['releaseCapture'] = function(elem) {
		var $bool54,$bool55,$and16,$and15;
		if ((($bool55=((($bool54=$and15=$m['sCaptureElem']) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
			false :
			(typeof $bool54=='object'?
				(typeof $bool54.__nonzero__=='function'?
					$bool54.__nonzero__() :
					(typeof $bool54.__len__=='function'?
						($bool54.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$m['compare'](elem, $m['sCaptureElem']):$and15)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
				false :
				(typeof $bool55=='object'?
					(typeof $bool55.__nonzero__=='function'?
						$bool55.__nonzero__() :
						(typeof $bool55.__len__=='function'?
							($bool55.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['sCaptureElem'] = null;
			(typeof releaseCapture_impl == "undefined"?$m.releaseCapture_impl:releaseCapture_impl)(elem);
		}
		return null;
	};
	$m['releaseCapture'].__name__ = 'releaseCapture';

	$m['releaseCapture'].__bind_type__ = 0;
	$m['releaseCapture'].__args__ = [null,null,['elem']];
	$m['releaseCapture_impl'] = function(elem) {

 		return null;
	};
	$m['releaseCapture_impl'].__name__ = 'releaseCapture_impl';

	$m['releaseCapture_impl'].__bind_type__ = 0;
	$m['releaseCapture_impl'].__args__ = [null,null,['elem']];
	$m['removeEventPreview'] = function(preview) {

		$m['sEventPreviewStack']['remove'](preview);
		return null;
	};
	$m['removeEventPreview'].__name__ = 'removeEventPreview';

	$m['removeEventPreview'].__bind_type__ = 0;
	$m['removeEventPreview'].__args__ = [null,null,['preview']];
	$m['getOffsetHeight'] = function(elem) {

		return $p['getattr'](elem, 'offsetHeight');
	};
	$m['getOffsetHeight'].__name__ = 'getOffsetHeight';

	$m['getOffsetHeight'].__bind_type__ = 0;
	$m['getOffsetHeight'].__args__ = [null,null,['elem']];
	$m['getOffsetWidth'] = function(elem) {

		return $p['getattr'](elem, 'offsetWidth');
	};
	$m['getOffsetWidth'].__name__ = 'getOffsetWidth';

	$m['getOffsetWidth'].__bind_type__ = 0;
	$m['getOffsetWidth'].__args__ = [null,null,['elem']];
	$m['scrollIntoView'] = function(elem) {


    var left = elem.offsetLeft, top = elem.offsetTop;
    var width = elem.offsetWidth, height = elem.offsetHeight;
    
    if (elem.parentNode != elem.offsetParent) {
        left -= elem.parentNode.offsetLeft;
        top -= elem.parentNode.offsetTop;
    }

    var cur = elem.parentNode;
    while (cur && (cur.nodeType == 1)) {
        if ((cur.style.overflow == 'auto') || (cur.style.overflow == 'scroll')) {
            if (left < cur.scrollLeft) {
                cur.scrollLeft = left;
            }
            if (left + width > cur.scrollLeft + cur.clientWidth) {
                cur.scrollLeft = (left + width) - cur.clientWidth;
            }
            if (top < cur.scrollTop) {
                cur.scrollTop = top;
            }
            if (top + height > cur.scrollTop + cur.clientHeight) {
                cur.scrollTop = (top + height) - cur.clientHeight;
            }
        }

        var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
        if (cur.parentNode != cur.offsetParent) {
            offsetLeft -= cur.parentNode.offsetLeft;
            offsetTop -= cur.parentNode.offsetTop;
        }

        left += offsetLeft - cur.scrollLeft;
        top += offsetTop - cur.scrollTop;
        cur = cur.parentNode;
    }
    
	};
	$m['scrollIntoView'].__name__ = 'scrollIntoView';

	$m['scrollIntoView'].__bind_type__ = 0;
	$m['scrollIntoView'].__args__ = [null,null,['elem']];
	$m['mash_name_for_glib'] = function(name, joiner) {
		if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
		var c,$iter1_nextval,$iter1_idx,res,$bool56,$iter1_iter,$add2,$add3,$add1,$add6,$iter1_array,$add4,$add5,$iter1_type;
		res = '';
		$iter1_iter = name;
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			c = $iter1_nextval;
			if ((($bool56=c['isupper']()) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
					false :
					(typeof $bool56=='object'?
						(typeof $bool56.__nonzero__=='function'?
							$bool56.__nonzero__() :
							(typeof $bool56.__len__=='function'?
								($bool56.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				res = (typeof ($add3=res)==typeof ($add4=(typeof ($add1=joiner)==typeof ($add2=c['lower']()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
			}
			else {
				res = (typeof ($add5=res)==typeof ($add6=c) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
			}
		}
		return res;
	};
	$m['mash_name_for_glib'].__name__ = 'mash_name_for_glib';

	$m['mash_name_for_glib'].__bind_type__ = 0;
	$m['mash_name_for_glib'].__args__ = [null,null,['name'],['joiner', '-']];
	$m['removeAttribute'] = function(element, attribute) {


    delete element[attribute];
    
	};
	$m['removeAttribute'].__name__ = 'removeAttribute';

	$m['removeAttribute'].__bind_type__ = 0;
	$m['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
	$m['setAttribute'] = function(element, attribute, value) {


    element[attribute] = value;
    
	};
	$m['setAttribute'].__name__ = 'setAttribute';

	$m['setAttribute'].__bind_type__ = 0;
	$m['setAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$m['setElemAttribute'] = function(element, attribute, value) {

		element['setAttribute'](attribute, value);
		return null;
	};
	$m['setElemAttribute'].__name__ = 'setElemAttribute';

	$m['setElemAttribute'].__bind_type__ = 0;
	$m['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$m['setBooleanAttribute'] = function(elem, attr, value) {


    elem[attr] = value;
    
	};
	$m['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

	$m['setBooleanAttribute'].__bind_type__ = 0;
	$m['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setCapture'] = function(elem) {

		$m['sCaptureElem'] = elem;
		(typeof setCapture_impl == "undefined"?$m.setCapture_impl:setCapture_impl)(elem);
		return null;
	};
	$m['setCapture'].__name__ = 'setCapture';

	$m['setCapture'].__bind_type__ = 0;
	$m['setCapture'].__args__ = [null,null,['elem']];
	$m['setCapture_impl'] = function(elem) {

 		return null;
	};
	$m['setCapture_impl'].__name__ = 'setCapture_impl';

	$m['setCapture_impl'].__bind_type__ = 0;
	$m['setCapture_impl'].__args__ = [null,null,['elem']];
	$m['setEventListener'] = function(element, listener) {


    element.__listener = listener;
    
	};
	$m['setEventListener'].__name__ = 'setEventListener';

	$m['setEventListener'].__bind_type__ = 0;
	$m['setEventListener'].__args__ = [null,null,['element'],['listener']];
	$m['createTextNode'] = function(txt) {

		return $doc['createTextNode'](txt);
	};
	$m['createTextNode'].__name__ = 'createTextNode';

	$m['createTextNode'].__bind_type__ = 0;
	$m['createTextNode'].__args__ = [null,null,['txt']];
	$m['setInnerHTML'] = function(element, html) {

element.innerHTML = html || "";
	};
	$m['setInnerHTML'].__name__ = 'setInnerHTML';

	$m['setInnerHTML'].__bind_type__ = 0;
	$m['setInnerHTML'].__args__ = [null,null,['element'],['html']];
	$m['setInnerText'] = function(elem, text) {


    // Remove all children first.
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    // Add a new text node.
    elem.appendChild($doc.createTextNode(text));
    
	};
	$m['setInnerText'].__name__ = 'setInnerText';

	$m['setInnerText'].__bind_type__ = 0;
	$m['setInnerText'].__args__ = [null,null,['elem'],['text']];
	$m['setIntElemAttribute'] = function(elem, attr, value) {

		elem['setAttribute'](attr, $p['str'](value));
		return null;
	};
	$m['setIntElemAttribute'].__name__ = 'setIntElemAttribute';

	$m['setIntElemAttribute'].__bind_type__ = 0;
	$m['setIntElemAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setIntAttribute'] = function(elem, attr, value) {


    elem[attr] = value.valueOf();
    
	};
	$m['setIntAttribute'].__name__ = 'setIntAttribute';

	$m['setIntAttribute'].__bind_type__ = 0;
	$m['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setIntStyleAttribute'] = function(elem, attr, value) {


    elem.style[attr] = value.valueOf();
    
	};
	$m['setIntStyleAttribute'].__name__ = 'setIntStyleAttribute';

	$m['setIntStyleAttribute'].__bind_type__ = 0;
	$m['setIntStyleAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setOptionText'] = function(select, text, index) {
		var option;
		option = select['options']['item'](index);
		option.text = text;
		return null;
	};
	$m['setOptionText'].__name__ = 'setOptionText';

	$m['setOptionText'].__bind_type__ = 0;
	$m['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
	$m['setStyleAttribute'] = function(element, attr, value) {


    element.style[attr] = value;
    
	};
	$m['setStyleAttribute'].__name__ = 'setStyleAttribute';

	$m['setStyleAttribute'].__bind_type__ = 0;
	$m['setStyleAttribute'].__args__ = [null,null,['element'],['attr'],['value']];
	$m['setStyleAttributes'] = function(element) {
		var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof element != 'undefined') {
				if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = element;
					element = arguments[1];
				}
			} else {
			}
		}
		var $iter2_nextval,$iter2_type,attr,$iter2_iter,$iter2_idx,val,$bool57,$iter2_array;
		$iter2_iter = kwargs['items']();
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			var $tupleassign2 = $p['__ass_unpack']($iter2_nextval, 2, null);
			attr = $tupleassign2[0];
			val = $tupleassign2[1];
			if ((($bool57=$p['hasattr']($p['getattr'](element, 'style'), 'setProperty')) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
					false :
					(typeof $bool57=='object'?
						(typeof $bool57.__nonzero__=='function'?
							$bool57.__nonzero__() :
							(typeof $bool57.__len__=='function'?
								($bool57.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				element['style']['setProperty']($m['mash_name_for_glib'](attr), val, '');
			}
			else {
				element['style']['setAttribute'](attr, val, '');
			}
		}
		return null;
	};
	$m['setStyleAttributes'].__name__ = 'setStyleAttributes';

	$m['setStyleAttributes'].__bind_type__ = 0;
	$m['setStyleAttributes'].__args__ = [null,['kwargs'],['element']];
	$m['sinkEvents'] = function(element, bits) {
		var $iter5_nextval,$iter3_type,dispEvnt,$iter5_array,$9,$bool58,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,$iter3_nextval,$iter3_iter,$iter5_idx,event_name,$iter3_array,bit,$14,$15,$16,$10,$11,$12,$13,$iter4_nextval,$iter4_idx,$iter4_array;
element.__eventBits = bits;
		(typeof sinkEventsMozilla == "undefined"?$m.sinkEventsMozilla:sinkEventsMozilla)(element, bits);
		dispEvnt = $wnd.__dispatchEvent;
		$iter3_iter = $p['getattr']($m['Event'], 'eventbits');
		if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter.__iter__();
			$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			bit = $iter3_nextval;
			if ((($bool58=(bits)&(bit)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58.__nonzero__=='function'?
							$bool58.__nonzero__() :
							(typeof $bool58.__len__=='function'?
								($bool58.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter4_iter = (typeof ($11=(typeof ($9=$p['getattr']($m['Event'], 'eventbits')).__array != 'undefined'?
					((typeof $9.__array[$10=bit]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(bit))).__array != 'undefined'?
					((typeof $11.__array[$12=1]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(1));
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					event_name = $iter4_nextval;
element['on'+event_name] = dispEvnt
				}
			}
			else {
				$iter5_iter = (typeof ($15=(typeof ($13=$p['getattr']($m['Event'], 'eventbits')).__array != 'undefined'?
					((typeof $13.__array[$14=bit]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__(bit))).__array != 'undefined'?
					((typeof $15.__array[$16=1]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(1));
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					event_name = $iter5_nextval;
element['on'+event_name] = null
				}
			}
		}
		return null;
	};
	$m['sinkEvents'].__name__ = 'sinkEvents';

	$m['sinkEvents'].__bind_type__ = 0;
	$m['sinkEvents'].__args__ = [null,null,['element'],['bits']];
	$m['sinkEventsMozilla'] = function(element, bits) {

 		return null;
	};
	$m['sinkEventsMozilla'].__name__ = 'sinkEventsMozilla';

	$m['sinkEventsMozilla'].__bind_type__ = 0;
	$m['sinkEventsMozilla'].__args__ = [null,null,['element'],['bits']];
	$m['toString'] = function(elem) {


    var temp = elem.cloneNode(true);
    var tempDiv = $doc.createElement("DIV");
    tempDiv.appendChild(temp);
    var outer = tempDiv.innerHTML;
    //temp.innerHTML = " ";
    return outer;
    
	};
	$m['toString'].__name__ = 'toString';

	$m['toString'].__bind_type__ = 0;
	$m['toString'].__args__ = [null,null,['elem']];
	$m['dispatchEvent'] = function(event, element, listener) {

		(typeof dispatchEventImpl == "undefined"?$m.dispatchEventImpl:dispatchEventImpl)(event, element, listener);
		return null;
	};
	$m['dispatchEvent'].__name__ = 'dispatchEvent';

	$m['dispatchEvent'].__bind_type__ = 0;
	$m['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
	$m['previewEvent'] = function(evt) {
		var $bool61,$cmp4,$17,$cmp3,$bool60,$18,$bool59,ret,$len2,$len3,$sub2,$sub1,preview;
		ret = true;
		if ((($bool59=((($cmp3=(($len2=$m['sEventPreviewStack']) === null?0:
			(typeof $len2.__array != 'undefined' ? $len2.__array.length:
				(typeof $len2.__len__ == 'function'?$len2.__len__():
					(typeof $len2.length != 'undefined'?$len2.length:
						$p['len']($len2))))))===($cmp4=0)?0:
			(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
				($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
				$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
				false :
				(typeof $bool59=='object'?
					(typeof $bool59.__nonzero__=='function'?
						$bool59.__nonzero__() :
						(typeof $bool59.__len__=='function'?
							($bool59.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			preview = (typeof ($17=$m['sEventPreviewStack']).__array != 'undefined'?
				((typeof $17.__array[$18=(typeof ($sub1=(($len3=$m['sEventPreviewStack']) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2))]) != 'undefined'?$17.__array[$18]:
					$17.__getitem__($18)):
					$17.__getitem__((typeof ($sub1=(($len3=$m['sEventPreviewStack']) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2))));
			ret = preview['onEventPreview'](evt);
			if ((($bool61=!(($bool60=ret) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
				false :
				(typeof $bool60=='object'?
					(typeof $bool60.__nonzero__=='function'?
						$bool60.__nonzero__() :
						(typeof $bool60.__len__=='function'?
							($bool60.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61.__nonzero__=='function'?
							$bool61.__nonzero__() :
							(typeof $bool61.__len__=='function'?
								($bool61.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['eventCancelBubble'](evt, true);
				$m['eventPreventDefault'](evt);
			}
		}
		return ret;
	};
	$m['previewEvent'].__name__ = 'previewEvent';

	$m['previewEvent'].__bind_type__ = 0;
	$m['previewEvent'].__args__ = [null,null,['evt']];
	$m['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {

 		return null;
	};
	$m['dispatchEventAndCatch'].__name__ = 'dispatchEventAndCatch';

	$m['dispatchEventAndCatch'].__bind_type__ = 0;
	$m['dispatchEventAndCatch'].__args__ = [null,null,['evt'],['elem'],['listener'],['handler']];
	$m['currentEvent'] = null;
	$m['dispatchEventImpl'] = function(event, element, listener) {
		var $eq21,$bool62,$bool63,$eq23,$eq22,$eq24,prevCurrentEvent;
		if ((($bool62=(($eq21=element)===($eq22=$m['sCaptureElem'])&&$eq21===null?true:
			($eq21===null?false:($eq22===null?false:
				((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
					((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
						$eq21==$eq22)))))) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
				false :
				(typeof $bool62=='object'?
					(typeof $bool62.__nonzero__=='function'?
						$bool62.__nonzero__() :
						(typeof $bool62.__len__=='function'?
							($bool62.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool63=(($eq23=$m['eventGetType'](event))===($eq24='losecapture')&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
					false :
					(typeof $bool63=='object'?
						(typeof $bool63.__nonzero__=='function'?
							$bool63.__nonzero__() :
							(typeof $bool63.__len__=='function'?
								($bool63.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['sCaptureElem'] = null;
			}
		}
		prevCurrentEvent = $m['currentEvent'];
		$m['currentEvent'] = event;
		listener['onBrowserEvent'](event);
		$m['currentEvent'] = prevCurrentEvent;
		return null;
	};
	$m['dispatchEventImpl'].__name__ = 'dispatchEventImpl';

	$m['dispatchEventImpl'].__bind_type__ = 0;
	$m['dispatchEventImpl'].__args__ = [null,null,['event'],['element'],['listener']];
	$m['eventGetCurrentEvent'] = function() {

		return $m['currentEvent'];
	};
	$m['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

	$m['eventGetCurrentEvent'].__bind_type__ = 0;
	$m['eventGetCurrentEvent'].__args__ = [null,null];
	$m['insertListItem'] = function(select, item, value, index) {
		var $bool65,$bool64,$eq25,$eq26,option;
		option = $m['createElement']('OPTION');
		$m['setInnerText'](option, item);
		if ((($bool64=(value !== null)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
				false :
				(typeof $bool64=='object'?
					(typeof $bool64.__nonzero__=='function'?
						$bool64.__nonzero__() :
						(typeof $bool64.__len__=='function'?
							($bool64.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['setAttribute'](option, 'value', value);
		}
		if ((($bool65=(($eq25=index)===($eq26=(typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1)))&&$eq25===null?true:
			($eq25===null?false:($eq26===null?false:
				((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
					((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
						$eq25==$eq26)))))) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
				false :
				(typeof $bool65=='object'?
					(typeof $bool65.__nonzero__=='function'?
						$bool65.__nonzero__() :
						(typeof $bool65.__len__=='function'?
							($bool65.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['appendChild'](select, option);
		}
		else {
			$m['insertChild'](select, option, index);
		}
		return null;
	};
	$m['insertListItem'].__name__ = 'insertListItem';

	$m['insertListItem'].__bind_type__ = 0;
	$m['insertListItem'].__args__ = [null,null,['select'],['item'],['value'],['index']];
	$m['getBodyOffsetTop'] = function() {

		return 0;
	};
	$m['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

	$m['getBodyOffsetTop'].__bind_type__ = 0;
	$m['getBodyOffsetTop'].__args__ = [null,null];
	$m['getBodyOffsetLeft'] = function() {

		return 0;
	};
	$m['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

	$m['getBodyOffsetLeft'].__bind_type__ = 0;
	$m['getBodyOffsetLeft'].__args__ = [null,null];
	$m['eventGetMouseWheelVelocityY'] = function(evt) {


    return Math.round(-evt.wheelDelta / 40) || 0;
    
	};
	$m['eventGetMouseWheelVelocityY'].__name__ = 'eventGetMouseWheelVelocityY';

	$m['eventGetMouseWheelVelocityY'].__bind_type__ = 0;
	$m['eventGetMouseWheelVelocityY'].__args__ = [null,null,['evt']];
	if ((($bool67=!(($bool66=$p['getattr']($m['pyjd'], 'is_desktop')) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
		false :
		(typeof $bool66=='object'?
			(typeof $bool66.__nonzero__=='function'?
				$bool66.__nonzero__() :
				(typeof $bool66.__len__=='function'?
					($bool66.__len__()>0 ?
						true :
						false) :
					true ) ) :
			 true ) )) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
			false :
			(typeof $bool67=='object'?
				(typeof $bool67.__nonzero__=='function'?
					$bool67.__nonzero__() :
					(typeof $bool67.__len__=='function'?
						($bool67.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['init']();
	}
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Event.ONBLUR', 'pyjamas.ui.Event.ONCHANGE', 'pyjamas.ui.Event.ONCLICK', 'pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas.ui.Event.ONDBLCLICK', 'pyjamas.ui.Event.ONERROR', 'pyjamas.ui.Event.ONFOCUS', 'pyjamas.ui.Event.ONKEYDOWN', 'pyjamas.ui.Event.ONKEYPRESS', 'pyjamas.ui.Event.ONKEYUP', 'pyjamas.ui.Event.ONLOAD', 'pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas.ui.Event.ONMOUSEUP', 'pyjamas.ui.Event.ONSCROLL', 'pyjamas.ui.Event.ONINPUT']
*/
