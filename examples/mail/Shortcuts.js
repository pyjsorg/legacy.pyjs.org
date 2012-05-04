/* start module: Shortcuts */
$pyjs.loaded_modules['Shortcuts'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Shortcuts'].__was_initialized__) return $pyjs.loaded_modules['Shortcuts'];
	var $m = $pyjs.loaded_modules["Shortcuts"];
	$m.__repr__ = function() { return "<module: Shortcuts>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Shortcuts';
	$m.__name__ = __mod_name__;


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['StackPanel'] = $p['___import___']('pyjamas.ui.StackPanel.StackPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Tasks'] = $p['___import___']('Tasks.Tasks', null, null, false);
	$m['Mailboxes'] = $p['___import___']('Mailboxes.Mailboxes', null, null, false);
	$m['Contacts'] = $p['___import___']('Contacts.Contacts', null, null, false);
	$m['Shortcuts'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Shortcuts';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var stackPanel;
			$m['Composite']['__init__'](self);
			stackPanel = $m['StackPanel']();
			stackPanel['add']($m['Mailboxes'](), self['createHeaderHTML']('mailgroup.gif', 'Mail'), true);
			stackPanel['add']($m['Tasks'](), self['createHeaderHTML']('tasksgroup.gif', 'Tasks'), true);
			stackPanel['add']($m['Contacts'](), self['createHeaderHTML']('contactsgroup.gif', 'Contacts'), true);
			stackPanel['showStack'](0);
			self['initWidget'](stackPanel);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createHeaderHTML', function(imageUrl, caption) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imageUrl = arguments[1];
				caption = arguments[2];
			}
			var $add14,$add15,$add11,$add12,header,$add13,$add2,$add16,$add1,$add6,$add7,$add4,$add5,$add10,$add8,$add9,$add3;
			header = (typeof ($add1="<table align='left'><tr>")==typeof ($add2="<td><img src='") && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			header = (typeof ($add3=header)==typeof ($add4='./') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4));
			header = (typeof ($add7=header)==typeof ($add8=(typeof ($add5=imageUrl)==typeof ($add6="'></td>") && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6))) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8));
			header = (typeof ($add9=header)==typeof ($add10="<td style='vertical-align:middle'><b style='white-space:nowrap'>") && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10));
			header = (typeof ($add15=header)==typeof ($add16=(typeof ($add13=(typeof ($add11=caption)==typeof ($add12='</b></td>') && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12)))==typeof ($add14='</tr></table>') && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14))) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16));
			return header;
		}
	, 1, [null,null,['self'],['imageUrl'],['caption']]);
		$cls_definition['createHeaderHTML'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Shortcuts', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Shortcuts */


/* end module: Shortcuts */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.StackPanel.StackPanel', 'pyjamas.ui.StackPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'Tasks.Tasks', 'Tasks', 'Mailboxes.Mailboxes', 'Mailboxes', 'Contacts.Contacts', 'Contacts']
*/
