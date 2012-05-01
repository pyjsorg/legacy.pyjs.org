/* start module: pyjamas.logging.handlers */
$pyjs.loaded_modules['pyjamas.logging.handlers'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.logging.handlers'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.logging.handlers'];
	if(typeof $pyjs.loaded_modules['pyjamas.logging'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.logging'].__was_initialized__) $p['___import___']('pyjamas.logging', null);
	var $m = $pyjs.loaded_modules["pyjamas.logging.handlers"];
	$m.__repr__ = function() { return "<module: pyjamas.logging.handlers>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.logging.handlers';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas.logging']['handlers'] = $pyjs.loaded_modules['pyjamas.logging.handlers'];
	try {
		$m.__track_lines__[1] = 'pyjamas.logging.handlers.py, line 1:\n    """Logging handlers for Pyjamas logging based on CPython\'s logging handlers."""';
		$m.__track_lines__[2] = "pyjamas.logging.handlers.py, line 2:\n    __author__ = 'Peter Bittner <peter.bittner@gmx.net>'";
		$m.__track_lines__[4] = 'pyjamas.logging.handlers.py, line 4:\n    from cgi import escape';
		$m.__track_lines__[5] = 'pyjamas.logging.handlers.py, line 5:\n    from logging import Handler';
		$m.__track_lines__[6] = 'pyjamas.logging.handlers.py, line 6:\n    from pyjamas import DOM, Window';
		$m.__track_lines__[7] = 'pyjamas.logging.handlers.py, line 7:\n    from __pyjamas__ import doc, JS';
		$m.__track_lines__[9] = 'pyjamas.logging.handlers.py, line 9:\n    class AlertHandler(Handler):';
		$m.__track_lines__[11] = 'pyjamas.logging.handlers.py, line 11:\n    def __init__(self):';
		$m.__track_lines__[12] = 'pyjamas.logging.handlers.py, line 12:\n    Handler.__init__(self)';
		$m.__track_lines__[14] = 'pyjamas.logging.handlers.py, line 14:\n    def emit(self, record):';
		$m.__track_lines__[15] = 'pyjamas.logging.handlers.py, line 15:\n    msg = self.format(record)';
		$m.__track_lines__[16] = 'pyjamas.logging.handlers.py, line 16:\n    Window.alert(msg)';
		$m.__track_lines__[18] = 'pyjamas.logging.handlers.py, line 18:\n    class AppendHandler(Handler):';
		$m.__track_lines__[22] = 'pyjamas.logging.handlers.py, line 22:\n    div = None';
		$m.__track_lines__[23] = "pyjamas.logging.handlers.py, line 23:\n    div_id = ''";
		$m.__track_lines__[24] = "pyjamas.logging.handlers.py, line 24:\n    output = ''";
		$m.__track_lines__[26] = 'pyjamas.logging.handlers.py, line 26:\n    def __init__(self, logger_name):';
		$m.__track_lines__[27] = 'pyjamas.logging.handlers.py, line 27:\n    Handler.__init__(self)';
		$m.__track_lines__[28] = "pyjamas.logging.handlers.py, line 28:\n    self.div_id = self.__getSafeNameFor('logging_' + logger_name)";
		$m.__track_lines__[30] = 'pyjamas.logging.handlers.py, line 30:\n    def __getSafeNameFor(self, name):';
		$m.__track_lines__[32] = 'pyjamas.logging.handlers.py, line 32:\n    from string import ascii_letters, digits';
		$m.__track_lines__[33] = "pyjamas.logging.handlers.py, line 33:\n    return ''.join(c for c in name if c in (ascii_letters + digits + '_'))";
		$m.__track_lines__[35] = 'pyjamas.logging.handlers.py, line 35:\n    def __addLogElement(self):';
		$m.__track_lines__[39] = 'pyjamas.logging.handlers.py, line 39:\n    if self.div == None:';
		$m.__track_lines__[40] = 'pyjamas.logging.handlers.py, line 40:\n    self.div = DOM.createDiv()';
		$m.__track_lines__[41] = "pyjamas.logging.handlers.py, line 41:\n    self.div.setAttribute('id', self.div_id)";
		$m.__track_lines__[42] = 'pyjamas.logging.handlers.py, line 42:\n    DOM.appendChild(doc().body, self.div)';
		$m.__track_lines__[44] = 'pyjamas.logging.handlers.py, line 44:\n    def emit(self, record):';
		$m.__track_lines__[45] = 'pyjamas.logging.handlers.py, line 45:\n    msg = self.format(record)';
		$m.__track_lines__[46] = 'pyjamas.logging.handlers.py, line 46:\n    msg = escape(msg)';
		$m.__track_lines__[47] = 'pyjamas.logging.handlers.py, line 47:\n    msg = msg.replace("\\n", "<br/>\\n") + "<br/>\\n"';
		$m.__track_lines__[48] = 'pyjamas.logging.handlers.py, line 48:\n    self.output += msg';
		$m.__track_lines__[49] = 'pyjamas.logging.handlers.py, line 49:\n    self.__addLogElement()';
		$m.__track_lines__[50] = 'pyjamas.logging.handlers.py, line 50:\n    DOM.setInnerHTML(self.div, self.output)';
		$m.__track_lines__[52] = 'pyjamas.logging.handlers.py, line 52:\n    class ConsoleHandler(Handler):';
		$m.__track_lines__[55] = 'pyjamas.logging.handlers.py, line 55:\n    __consoleFuncForLevel = None';
		$m.__track_lines__[57] = 'pyjamas.logging.handlers.py, line 57:\n    def __init__(self):';
		$m.__track_lines__[58] = 'pyjamas.logging.handlers.py, line 58:\n    Handler.__init__(self)';
		$m.__track_lines__[59] = 'pyjamas.logging.handlers.py, line 59:\n    self.__consoleFuncForLevel = {';
		$m.__track_lines__[67] = 'pyjamas.logging.handlers.py, line 67:\n    def emit(self, record):';
		$m.__track_lines__[71] = 'pyjamas.logging.handlers.py, line 71:\n    msg = self.format(record)';
		$m.__track_lines__[72] = 'pyjamas.logging.handlers.py, line 72:\n    func = self.__consoleFuncForLevel.get(record.levelname, self.__log)';
		$m.__track_lines__[73] = 'pyjamas.logging.handlers.py, line 73:\n    try:';
		$m.__track_lines__[75] = 'pyjamas.logging.handlers.py, line 75:\n    func(msg)';
		$m.__track_lines__[77] = 'pyjamas.logging.handlers.py, line 77:\n    print(msg)';
		$m.__track_lines__[79] = 'pyjamas.logging.handlers.py, line 79:\n    def __debug(self, msg):';
		$m.__track_lines__[80] = 'pyjamas.logging.handlers.py, line 80:\n    JS(" console.debug(@{{msg}}); ")';
		$m.__track_lines__[82] = 'pyjamas.logging.handlers.py, line 82:\n    def __info(self, msg):';
		$m.__track_lines__[83] = 'pyjamas.logging.handlers.py, line 83:\n    JS(" console.info(@{{msg}}); ")';
		$m.__track_lines__[85] = 'pyjamas.logging.handlers.py, line 85:\n    def __warn(self, msg):';
		$m.__track_lines__[86] = 'pyjamas.logging.handlers.py, line 86:\n    JS(" console.warn(@{{msg}}); ")';
		$m.__track_lines__[88] = 'pyjamas.logging.handlers.py, line 88:\n    def __error(self, msg):';
		$m.__track_lines__[89] = 'pyjamas.logging.handlers.py, line 89:\n    JS(" console.error(@{{msg}}); ")';
		$m.__track_lines__[91] = 'pyjamas.logging.handlers.py, line 91:\n    def __log(self, msg):';
		$m.__track_lines__[92] = 'pyjamas.logging.handlers.py, line 92:\n    JS(" console.log(@{{msg}}); ")';
		$m.__track_lines__[94] = 'pyjamas.logging.handlers.py, line 94:\n    class NullHandler(Handler):';
		$m.__track_lines__[96] = 'pyjamas.logging.handlers.py, line 96:\n    def __init__(self):';
		$m.__track_lines__[97] = 'pyjamas.logging.handlers.py, line 97:\n    Handler.__init__(self)';
		$m.__track_lines__[99] = 'pyjamas.logging.handlers.py, line 99:\n    def emit(self, record):';
		$m.__track_lines__[100] = 'pyjamas.logging.handlers.py, line 100:\n    pass';


		$pyjs.track.module='pyjamas.logging.handlers';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$m['__author__'] = 'Peter Bittner <peter.bittner@gmx.net>';
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['escape'] = $p['___import___']('cgi.escape', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Handler'] = $p['___import___']('logging.Handler', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.logging', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=7;
		$pyjs.track.lineno=9;
		$m['AlertHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.logging.handlers';
			$cls_definition.__md5__ = '64464272748ea7c724b916045ddb04a9';
			$pyjs.track.lineno=11;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '64464272748ea7c724b916045ddb04a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.logging.handlers', lineno:11};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=11;
				$pyjs.track.lineno=12;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Handler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=14;
			$method = $pyjs__bind_method2('emit', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '64464272748ea7c724b916045ddb04a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var msg;
				$pyjs.track={module:'pyjamas.logging.handlers', lineno:14};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=14;
				$pyjs.track.lineno=15;
				msg = (function(){try{try{$pyjs.in_try_except += 1;
				return self['format'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				$pyjs.track.lineno=16;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Window']['alert'](msg);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['emit'] = $method;
			$pyjs.track.lineno=9;
			var $bases = new Array($m['Handler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('AlertHandler', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=18;
		$m['AppendHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.logging.handlers';
			$cls_definition.__md5__ = '2871a2e6cf60992904b002cada6f720c';
			$pyjs.track.lineno=22;
			$cls_definition['div'] = null;
			$pyjs.track.lineno=23;
			$cls_definition['div_id'] = '';
			$pyjs.track.lineno=24;
			$cls_definition['output'] = '';
			$pyjs.track.lineno=26;
			$method = $pyjs__bind_method2('__init__', function(logger_name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					logger_name = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2871a2e6cf60992904b002cada6f720c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs.track={module:'pyjamas.logging.handlers', lineno:26};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=26;
				$pyjs.track.lineno=27;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Handler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.track.lineno=28;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('div_id', (function(){try{try{$pyjs.in_try_except += 1;
				return self['__getSafeNameFor']($p['__op_add']($add1='logging_',$add2=logger_name));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) : $p['setattr'](self, 'div_id', (function(){try{try{$pyjs.in_try_except += 1;
				return self['__getSafeNameFor']($p['__op_add']($add1='logging_',$add2=logger_name));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['logger_name']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=30;
			$method = $pyjs__bind_method2('__getSafeNameFor', function(name) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2871a2e6cf60992904b002cada6f720c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var digits,c,$iter1_nextval,$iter1_idx,$iter1_iter,$add3,$add6,$iter1_array,$add4,$add5,ascii_letters,$iter1_type;
				$pyjs.track={module:'pyjamas.logging.handlers', lineno:30};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=30;
				$pyjs.track.lineno=32;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				ascii_letters = $p['___import___']('string.ascii_letters', 'pyjamas.logging', null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				digits = $p['___import___']('string.digits', 'pyjamas.logging', null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=33;
				$pyjs.track.lineno=33;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return ''['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
						var $res;
						$yield_value = $exc = null;
						try {
							$res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res == 'undefined') {
								if (noStop === true) {
									$generator_state[0] = -1;
									return;
								}
								throw $p['StopIteration']();
							}
						} catch (e) {
					
							$is_executing=false;
							$generator_state[0] = -1;
							if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
								return;
							}
							throw e;
						}
						return $res;
					};
					$generator['__iter__'] = function () {return $generator;};
					$generator['send'] = function ($val) {
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
							throw (e);
						}
						return null;
					};
					$generator['$genfunc'] = function () {
						var $yielding = false;
						if ($is_executing) throw $p['ValueError']('generator already executing');
						$is_executing = true;
					
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter1_iter = name;
						$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
								c = $iter1_nextval.$nextval;
								$generator_state[3] = 0;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']($p['__op_add']($add5=$p['__op_add']($add3=ascii_letters,$add4=digits),$add6='_').__contains__(c))))) {
									$generator_state[2]=1;
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
										$yield_value = c;
										$yielding = true;
										$generator_state[3] = 1;
										return $yield_value;
										$generator_state[3]=1;
									}
									if ($generator_state[3] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[3] = -1;
											throw $exc;
										}
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=0;
								$generator_state[1]=2;
							}
							if ($generator_state[1] == 2) {
							}
						}
						$generator_state[0]=3;
					}
					if ($generator_state[0] == 3) {
						$generator_state[0]=4;
					}
					if ($generator_state[0] == 4) {
					}

						return;
					};
					return $generator;
				}()
);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['__getSafeNameFor'] = $method;
			$pyjs.track.lineno=35;
			$method = $pyjs__bind_method2('__addLogElement', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2871a2e6cf60992904b002cada6f720c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.logging.handlers', lineno:35};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=35;
				$pyjs.track.lineno=39;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq']($p['getattr'](self, 'div'), null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
					$pyjs.track.lineno=40;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('div', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) : $p['setattr'](self, 'div', (function(){try{try{$pyjs.in_try_except += 1;
					return $m['DOM']['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()); 
					$pyjs.track.lineno=41;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['div']['setAttribute']('id', $p['getattr'](self, 'div_id'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
					$pyjs.track.lineno=42;
					$m['DOM']['appendChild']($p['getattr']($doc, 'body'), $p['getattr'](self, 'div'));
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__addLogElement'] = $method;
			$pyjs.track.lineno=44;
			$method = $pyjs__bind_method2('emit', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '2871a2e6cf60992904b002cada6f720c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add10,$add7,msg,$add8,$add9;
				$pyjs.track={module:'pyjamas.logging.handlers', lineno:44};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=44;
				$pyjs.track.lineno=45;
				msg = (function(){try{try{$pyjs.in_try_except += 1;
				return self['format'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs.track.lineno=46;
				msg = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['escape'](msg);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.track.lineno=47;
				msg = $p['__op_add']($add7=(function(){try{try{$pyjs.in_try_except += 1;
				return msg['$$replace']('\n', '<br/>\n');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(),$add8='<br/>\n');
				$pyjs.track.lineno=48;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('output', $p['__op_add']($add9=$p['getattr'](self, 'output'),$add10=msg)) : $p['setattr'](self, 'output', $p['__op_add']($add9=$p['getattr'](self, 'output'),$add10=msg)); 
				$pyjs.track.lineno=49;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['__addLogElement']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.track.lineno=50;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DOM']['setInnerHTML']($p['getattr'](self, 'div'), $p['getattr'](self, 'output'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['emit'] = $method;
			$pyjs.track.lineno=18;
			var $bases = new Array($m['Handler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('AppendHandler', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=52;
		$m['ConsoleHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.logging.handlers';
			$cls_definition.__md5__ = 'fc4254c1a01b79f31033e8009fc99098';
			$pyjs.track.lineno=55;
			$cls_definition['__consoleFuncForLevel'] = null;
			$pyjs.track.lineno=57;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fc4254c1a01b79f31033e8009fc99098') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.logging.handlers', lineno:57};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=57;
				$pyjs.track.lineno=58;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Handler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				$pyjs.track.lineno=59;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('__consoleFuncForLevel', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([['DEBUG', $p['getattr'](self, '__debug')], ['INFO', $p['getattr'](self, '__info')], ['WARNING', $p['getattr'](self, '__warn')], ['ERROR', $p['getattr'](self, '__error')], ['CRITICAL', $p['getattr'](self, '__error')]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) : $p['setattr'](self, '__consoleFuncForLevel', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([['DEBUG', $p['getattr'](self, '__debug')], ['INFO', $p['getattr'](self, '__info')], ['WARNING', $p['getattr'](self, '__warn')], ['ERROR', $p['getattr'](self, '__error')], ['CRITICAL', $p['getattr'](self, '__error')]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=67;
			$method = $pyjs__bind_method2('emit', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fc4254c1a01b79f31033e8009fc99098') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var msg,$pyjs_try_err,func;
				$pyjs.track={module:'pyjamas.logging.handlers', lineno:67};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=67;
				$pyjs.track.lineno=71;
				msg = (function(){try{try{$pyjs.in_try_except += 1;
				return self['format'](record);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs.track.lineno=72;
				func = (function(){try{try{$pyjs.in_try_except += 1;
				return self['__consoleFuncForLevel']['get']($p['getattr'](record, 'levelname'), $p['getattr'](self, '__log'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.track.lineno=73;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					try {
						$pyjs.in_try_except += 1;
						$pyjs.track.lineno=75;
						(function(){try{try{$pyjs.in_try_except += 1;
						return func(msg);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
					} finally { $pyjs.in_try_except -= 1; }
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.logging.handlers';
					if (true) {
						$pyjs.track.lineno=77;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $p['printFunc']([msg], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['emit'] = $method;
			$pyjs.track.lineno=79;
			$method = $pyjs__bind_method2('__debug', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fc4254c1a01b79f31033e8009fc99098') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.logging.handlers', lineno:79};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=79;
				$pyjs.track.lineno=80;
 console.debug(msg); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			}
	, 1, [null,null,['self'],['msg']]);
			$cls_definition['__debug'] = $method;
			$pyjs.track.lineno=82;
			$method = $pyjs__bind_method2('__info', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fc4254c1a01b79f31033e8009fc99098') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.logging.handlers', lineno:82};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=82;
				$pyjs.track.lineno=83;
 console.info(msg); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			}
	, 1, [null,null,['self'],['msg']]);
			$cls_definition['__info'] = $method;
			$pyjs.track.lineno=85;
			$method = $pyjs__bind_method2('__warn', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fc4254c1a01b79f31033e8009fc99098') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.logging.handlers', lineno:85};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=85;
				$pyjs.track.lineno=86;
 console.warn(msg); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			}
	, 1, [null,null,['self'],['msg']]);
			$cls_definition['__warn'] = $method;
			$pyjs.track.lineno=88;
			$method = $pyjs__bind_method2('__error', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fc4254c1a01b79f31033e8009fc99098') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.logging.handlers', lineno:88};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=88;
				$pyjs.track.lineno=89;
 console.error(msg); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			}
	, 1, [null,null,['self'],['msg']]);
			$cls_definition['__error'] = $method;
			$pyjs.track.lineno=91;
			$method = $pyjs__bind_method2('__log', function(msg) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'fc4254c1a01b79f31033e8009fc99098') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.logging.handlers', lineno:91};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=91;
				$pyjs.track.lineno=92;
 console.log(msg); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			}
	, 1, [null,null,['self'],['msg']]);
			$cls_definition['__log'] = $method;
			$pyjs.track.lineno=52;
			var $bases = new Array($m['Handler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('ConsoleHandler', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=94;
		$m['NullHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'pyjamas.logging.handlers';
			$cls_definition.__md5__ = '3770372519984c68a06f97839d13094c';
			$pyjs.track.lineno=96;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3770372519984c68a06f97839d13094c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.logging.handlers', lineno:96};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=96;
				$pyjs.track.lineno=97;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Handler']['__init__'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=99;
			$method = $pyjs__bind_method2('emit', function(record) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					record = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '3770372519984c68a06f97839d13094c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'pyjamas.logging.handlers', lineno:99};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='pyjamas.logging.handlers';
				$pyjs.track.lineno=99;
				$pyjs.track.lineno=100;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['record']]);
			$cls_definition['emit'] = $method;
			$pyjs.track.lineno=94;
			var $bases = new Array($m['Handler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('NullHandler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.logging.handlers */


/* end module: pyjamas.logging.handlers */


/*
PYJS_DEPS: ['cgi.escape', 'cgi', 'logging.Handler', 'logging', 'pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'string.ascii_letters', 'string', 'string.digits']
*/
