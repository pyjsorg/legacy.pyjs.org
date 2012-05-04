/* start module: MailItem */
$pyjs.loaded_modules['MailItem'] = function (__mod_name__) {
	if($pyjs.loaded_modules['MailItem'].__was_initialized__) return $pyjs.loaded_modules['MailItem'];
	var $m = $pyjs.loaded_modules["MailItem"];
	$m.__repr__ = function() { return "<module: MailItem>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MailItem';
	$m.__name__ = __mod_name__;


	$m['MailItem'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'MailItem';
		$method = $pyjs__bind_method2('__init__', function(sender, email, subject, body) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				email = arguments[2];
				subject = arguments[3];
				body = arguments[4];
			}

			self.sender = sender;
			self.email = email;
			self.subject = subject;
			self.body = body;
			return null;
		}
	, 1, [null,null,['self'],['sender'],['email'],['subject'],['body']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MailItem', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end MailItem */


/* end module: MailItem */


