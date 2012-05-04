/* start module: TimeSheet */
$pyjs.loaded_modules['TimeSheet'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TimeSheet'].__was_initialized__) return $pyjs.loaded_modules['TimeSheet'];
	var $m = $pyjs.loaded_modules["TimeSheet"];
	$m.__repr__ = function() { return "<module: TimeSheet>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TimeSheet';
	$m.__name__ = __mod_name__;
	var $bool1,$eq1,$eq2,$pyjs_try_err;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	try {
		$m['Facade'] = $p['___import___']('puremvc.patterns.facade.Facade', null, null, false);
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
		$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
		if (true) {
			$m['alert'] = $p['___import___']('pyjamas.Window.alert', null, null, false);
			$m['alert']("This application depends on puremvc for python,\nwhich doesn't seem to be available.\nSee README.\n");
		}
	}
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', null, null, false);
	$m['StartupCommand'] = $p['___import___']('controller.StartupCommand.StartupCommand', null, null, false);
	$m['AppFrame'] = $p['___import___']('view.components.AppFrame.AppFrame', null, null, false);
	$m['AppFacade'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TimeSheet';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['initializeFacade']();
			self['initializeController']();
			self['registerCommand']($p['getattr']($m['Notification'], 'STARTUP'), $m['StartupCommand']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getInstance', function() {

			return $m['AppFacade']();
		}
	, 3, [null,null]);
		$cls_definition['getInstance'] = $method;
		var $bases = new Array($m['Facade']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AppFacade', $p['tuple']($bases), $data);
	})();
	$m['TimerCls'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'TimeSheet';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.app = $m['AppFacade']['getInstance']();
			$m['Timer'](1, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(tid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tid = arguments[1];
			}
			var appFrame;
			appFrame = $m['AppFrame']();
			self['app']['sendNotification']($p['getattr']($m['Notification'], 'STARTUP'), appFrame);
			return null;
		}
	, 1, [null,null,['self'],['tid']]);
		$cls_definition['onTimer'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TimerCls', $p['tuple']($bases), $data);
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
		$m['pyjd']['setup']('http://127.0.0.1/examples/timesheet/public/TimeSheet.html');
		$m['t'] = $m['TimerCls']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end TimeSheet */


/* end module: TimeSheet */


/*
PYJS_DEPS: ['pyjd', 'puremvc.patterns.facade.Facade', 'puremvc', 'puremvc.patterns', 'puremvc.patterns.facade', 'pyjamas.Window.alert', 'pyjamas', 'pyjamas.Window', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'ApplicationConstants.Notification', 'ApplicationConstants', 'controller.StartupCommand.StartupCommand', 'controller', 'controller.StartupCommand', 'view.components.AppFrame.AppFrame', 'view', 'view.components', 'view.components.AppFrame']
*/
