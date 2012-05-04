/* start module: Mailboxes */
$pyjs.loaded_modules['Mailboxes'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Mailboxes'].__was_initialized__) return $pyjs.loaded_modules['Mailboxes'];
	var $m = $pyjs.loaded_modules["Mailboxes"];
	$m.__repr__ = function() { return "<module: Mailboxes>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Mailboxes';
	$m.__name__ = __mod_name__;


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['Tree'] = $p['___import___']('pyjamas.ui.Tree.Tree', null, null, false);
	$m['TreeItem'] = $p['___import___']('pyjamas.ui.TreeItem.TreeItem', null, null, false);
	$m['Mailboxes'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Mailboxes';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var inboxItem,root;
			$m['Composite']['__init__'](self);
			self.tree = $m['Tree']();
			root = $m['TreeItem'](self['imageItemHTML']('home.gif', 'foo@example.com'));
			self['tree']['addItem'](root);
			inboxItem = self['addImageItem'](root, 'Inbox');
			self['addImageItem'](root, 'Drafts');
			self['addImageItem'](root, 'Templates');
			self['addImageItem'](root, 'Sent');
			self['addImageItem'](root, 'Trash');
			root['setState'](true);
			self['initWidget']($p['getattr'](self, 'tree'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addImageItem', function(root, title) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				root = arguments[1];
				title = arguments[2];
			}
			var $add2,item,$add1;
			item = $m['TreeItem'](self['imageItemHTML']((typeof ($add1=title)==typeof ($add2='.gif') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)), title));
			root['addItem'](item);
			return item;
		}
	, 1, [null,null,['self'],['root'],['title']]);
		$cls_definition['addImageItem'] = $method;
		$method = $pyjs__bind_method2('imageItemHTML', function(imageUrl, title) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imageUrl = arguments[1];
				title = arguments[2];
			}
			var $add12,value,$add3,$add6,$add7,$add4,$add5,$add10,$add8,$add9,$add11;
			value = "<span><img style='margin-right:4px' src='";
			value = (typeof ($add3=value)==typeof ($add4='./') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			value = (typeof ($add11=value)==typeof ($add12=(typeof ($add9=(typeof ($add7=(typeof ($add5=imageUrl['lower']())==typeof ($add6="'>") && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)))==typeof ($add8=title) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)))==typeof ($add10='</span>') && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10))) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			return value;
		}
	, 1, [null,null,['self'],['imageUrl'],['title']]);
		$cls_definition['imageItemHTML'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Mailboxes', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Mailboxes */


/* end module: Mailboxes */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.Tree.Tree', 'pyjamas.ui.Tree', 'pyjamas.ui.TreeItem.TreeItem', 'pyjamas.ui.TreeItem']
*/
