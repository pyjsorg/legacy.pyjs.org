/* start module: JSONRPCExample */
$pyjs.loaded_modules['JSONRPCExample'] = function (__mod_name__) {
	if($pyjs.loaded_modules['JSONRPCExample'].__was_initialized__) return $pyjs.loaded_modules['JSONRPCExample'];
	var $m = $pyjs.loaded_modules["JSONRPCExample"];
	$m.__repr__ = function() { return "<module: JSONRPCExample>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'JSONRPCExample';
	$m.__name__ = __mod_name__;
	var $eq26,$bool13,$eq25;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['JSONRPCExample'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'JSONRPCExample';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var info,buttons,$iter1_nextval,$iter1_type,$iter1_iter,$add2,$add1,$iter1_array,method_panel,panel,method,$iter1_idx;
			self.TEXT_WAITING = 'Waiting for response...';
			self.TEXT_ERROR = 'Server Error';
			self.METHOD_ECHO = 'Echo';
			self.METHOD_REVERSE = 'Reverse';
			self.METHOD_UPPERCASE = 'UPPERCASE';
			self.METHOD_LOWERCASE = 'lowercase';
			self.METHOD_NONEXISTANT = 'Non existant';
			self.methods = $p['list']([$p['getattr'](self, 'METHOD_ECHO'), $p['getattr'](self, 'METHOD_REVERSE'), $p['getattr'](self, 'METHOD_UPPERCASE'), $p['getattr'](self, 'METHOD_LOWERCASE'), $p['getattr'](self, 'METHOD_NONEXISTANT')]);
			self.remote_php = (typeof EchoServicePHP == "undefined"?$m.EchoServicePHP:EchoServicePHP)();
			self.remote_py = (typeof EchoServicePython == "undefined"?$m.EchoServicePython:EchoServicePython)();
			self.status = $m['Label']();
			self.text_area = $m['TextArea']();
			self['text_area']['setText']((typeof ($add1='{\'Test\'} ["String"]\n\tTest Tab\nTest Newline\n\nafter newline\n')==typeof ($add2='Literal String:\n{\'Test\'} [\\"String\\"]\n') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			self['text_area']['setCharacterWidth'](80);
			self['text_area']['setVisibleLines'](8);
			self.method_list = $m['ListBox']();
			self['method_list']['setName']('hello');
			self['method_list']['setVisibleItemCount'](1);
			$iter1_iter = $p['getattr'](self, 'methods');
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				method = $iter1_nextval;
				self['method_list']['addItem'](method);
			}
			self['method_list']['setSelectedIndex'](0);
			method_panel = $m['HorizontalPanel']();
			method_panel['add']($m['HTML']('Remote string method to call: '));
			method_panel['add']($p['getattr'](self, 'method_list'));
			method_panel['setSpacing'](8);
			self.button_php = $m['Button']('Send to PHP Service', self);
			self.button_py = $m['Button']('Send to Python Service', self);
			buttons = $m['HorizontalPanel']();
			buttons['add']($p['getattr'](self, 'button_php'));
			buttons['add']($p['getattr'](self, 'button_py'));
			buttons['setSpacing'](8);
			info = '<h2>JSON-RPC Example</h2>\n        <p>This example demonstrates the calling of server services with\n           <a href="http://json-rpc.org/">JSON-RPC</a>.\n        </p>\n        <p>Enter some text below, and press a button to send the text\n           to an Echo service on your server. An echo service simply sends the exact same text back that it receives.\n           </p>';
			panel = $m['VerticalPanel']();
			panel['add']($m['HTML'](info));
			panel['add']($p['getattr'](self, 'text_area'));
			panel['add'](method_panel);
			panel['add'](buttons);
			panel['add']($p['getattr'](self, 'status'));
			$m['RootPanel']()['add'](panel);
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
			var $bool10,text,$eq18,$eq19,$eq10,$eq11,$eq12,$eq13,$eq14,id,$eq16,$eq17,$eq15,$bool11,method,$eq8,$eq9,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,$bool2,$bool3,$bool1,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$2,$1,$eq21,$eq20,$eq22;
			self['status']['setText']($p['getattr'](self, 'TEXT_WAITING'));
			method = (typeof ($1=$p['getattr'](self, 'methods')).__array != 'undefined'?
				((typeof $1.__array[$2=self['method_list']['getSelectedIndex']()]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(self['method_list']['getSelectedIndex']()));
			text = self['text_area']['getText']();
			if ((($bool1=(($eq1=sender)===($eq2=$p['getattr'](self, 'button_php'))&&$eq1===null?true:
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
				if ((($bool2=(($eq3=method)===($eq4=$p['getattr'](self, 'METHOD_ECHO'))&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					id = self['remote_php']['echo'](text, self);
				}
				else if ((($bool3=(($eq5=method)===($eq6=$p['getattr'](self, 'METHOD_REVERSE'))&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
								$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					id = self['remote_php']['callMethod']('reverse', $p['list']([text]), self);
				}
				else if ((($bool4=(($eq7=method)===($eq8=$p['getattr'](self, 'METHOD_UPPERCASE'))&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					id = self['remote_php']['uppercase'](text, self);
				}
				else if ((($bool5=(($eq9=method)===($eq10=$p['getattr'](self, 'METHOD_LOWERCASE'))&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					id = $pyjs_kwargs_call(self['remote_php'], 'lowercase', null, null, [{msg:text}, self]);
				}
				else if ((($bool6=(($eq11=method)===($eq12=$p['getattr'](self, 'METHOD_NONEXISTANT'))&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					id = self['remote_php']['nonexistant'](text, self);
				}
			}
			else {
				if ((($bool7=(($eq13=method)===($eq14=$p['getattr'](self, 'METHOD_ECHO'))&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					id = self['remote_py']['echo'](text, self);
				}
				else if ((($bool8=(($eq15=method)===($eq16=$p['getattr'](self, 'METHOD_REVERSE'))&&$eq15===null?true:
					($eq15===null?false:($eq16===null?false:
						((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
							((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
								$eq15==$eq16)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					id = self['remote_py']['reverse'](text, self);
				}
				else if ((($bool9=(($eq17=method)===($eq18=$p['getattr'](self, 'METHOD_UPPERCASE'))&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
								$eq17==$eq18)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
						false :
						(typeof $bool9=='object'?
							(typeof $bool9.__nonzero__=='function'?
								$bool9.__nonzero__() :
								(typeof $bool9.__len__=='function'?
									($bool9.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					id = self['remote_py']['uppercase'](text, self);
				}
				else if ((($bool10=(($eq19=method)===($eq20=$p['getattr'](self, 'METHOD_LOWERCASE'))&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					id = self['remote_py']['lowercase'](text, self);
				}
				else if ((($bool11=(($eq21=method)===($eq22=$p['getattr'](self, 'METHOD_NONEXISTANT'))&&$eq21===null?true:
					($eq21===null?false:($eq22===null?false:
						((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
							((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
								$eq21==$eq22)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11.__nonzero__=='function'?
								$bool11.__nonzero__() :
								(typeof $bool11.__len__=='function'?
									($bool11.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					id = self['remote_py']['nonexistant'](text, self);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}

			self['status']['setText'](response);
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$method = $pyjs__bind_method2('onRemoteError', function(code, errobj, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				errobj = arguments[2];
				request_info = arguments[3];
			}
			var $bool12,message,$3,$6,$eq23,$eq24,$4,$5;
			message = (typeof ($3=errobj).__array != 'undefined'?
				((typeof $3.__array[$4='message']) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__('message'));
			if ((($bool12=!(($eq23=code)===($eq24=0)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				self['status']['setText']($p['sprintf']('HTTP error %d: %s', $p['tuple']([code, message])));
			}
			else {
				code = (typeof ($5=errobj).__array != 'undefined'?
					((typeof $5.__array[$6='code']) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__('code'));
				self['status']['setText']($p['sprintf']('JSONRPC Error %s: %s', $p['tuple']([code, message])));
			}
			return null;
		}
	, 1, [null,null,['self'],['code'],['errobj'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONRPCExample', $p['tuple']($bases), $data);
	})();
	$m['EchoServicePHP'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'JSONRPCExample';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['JSONProxy']['__init__'](self, 'services/EchoService.php', $p['list'](['echo', 'reverse', 'uppercase', 'lowercase', 'nonexistant']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('EchoServicePHP', $p['tuple']($bases), $data);
	})();
	$m['EchoServicePython'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'JSONRPCExample';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['JSONProxy']['__init__'](self, 'services/EchoService.py', $p['list'](['echo', 'reverse', 'uppercase', 'lowercase', 'nonexistant']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('EchoServicePython', $p['tuple']($bases), $data);
	})();
	if ((($bool13=(($eq25=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq26='__main__')&&$eq25===null?true:
		($eq25===null?false:($eq26===null?false:
			((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
				((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
					$eq25==$eq26)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
		$m['pyjd']['setup']('http://127.0.0.1/examples/jsonrpc/public/JSONRPCExample.html');
		$m['app'] = $m['JSONRPCExample']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end JSONRPCExample */


/* end module: JSONRPCExample */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService']
*/
