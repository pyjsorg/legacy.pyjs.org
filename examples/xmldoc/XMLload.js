/* start module: XMLload */
$pyjs.loaded_modules['XMLload'] = function (__mod_name__) {
	if($pyjs.loaded_modules['XMLload'].__was_initialized__) return $pyjs.loaded_modules['XMLload'];
	var $m = $pyjs.loaded_modules["XMLload"];
	$m.__repr__ = function() { return "<module: XMLload>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'XMLload';
	$m.__name__ = __mod_name__;
	var $eq2,$eq1,$bool1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['create_xml_doc'] = $p['___import___']('pyjamas.XMLDoc.create_xml_doc', null, null, false);
	$m['XMLloader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'XMLload';
		$method = $pyjs__bind_method2('__init__', function(panel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
			}

			self.panel = panel;
			return null;
		}
	, 1, [null,null,['self'],['panel']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(doc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				doc = arguments[1];
			}

			self['panel']['doStuff']($m['create_xml_doc'](doc));
			return null;
		}
	, 1, [null,null,['self'],['doc']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

			self['panel']['onError'](text, code);
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['onTimeout'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('XMLloader', $p['tuple']($bases), $data);
	})();
	$m['XMLload'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'XMLload';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['HTTPRequest']()['asyncGet']('contacts.xml', $m['XMLloader'](self));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		$method = $pyjs__bind_method2('doStuff', function(xmldoc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xmldoc = arguments[1];
			}
			var firstNameNode,$iter1_nextval,$iter1_type,firstName,contacts,i,len,$iter1_iter,firstNames,$iter1_array,contactsDom,$iter1_idx;
			contacts = xmldoc['getElementsByTagName']('contact');
			len = $p['getattr'](contacts, 'length');
			$iter1_iter = $p['range'](len);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				contactsDom = contacts['item'](i);
				firstNames = contactsDom['getElementsByTagName']('firstname');
				firstNameNode = firstNames['item'](0);
				firstName = $p['getattr']($p['getattr'](firstNameNode, 'firstChild'), 'nodeValue');
				$m['RootPanel']()['add']($m['HTML']($p['sprintf']('firstname: %s', $p['str'](firstName))));
			}
			return null;
		}
	, 1, [null,null,['self'],['xmldoc']]);
		$cls_definition['doStuff'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('XMLload', $p['tuple']($bases), $data);
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
		$m['pyjd']['setup']('./public/XMLload.html');
		$m['app'] = $m['XMLload']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end XMLload */


/* end module: XMLload */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.Window', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.XMLDoc.create_xml_doc', 'pyjamas.XMLDoc']
*/
