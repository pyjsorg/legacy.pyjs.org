/* start module: TreeItemTest */
$pyjs.loaded_modules['TreeItemTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TreeItemTest'].__was_initialized__) return $pyjs.loaded_modules['TreeItemTest'];
	var $m = $pyjs.loaded_modules["TreeItemTest"];
	$m.__repr__ = function() { return "<module: TreeItemTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TreeItemTest';
	$m.__name__ = __mod_name__;
	var $bool1,$eq2,$eq1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['Tree'] = $p['___import___']('pyjamas.ui.Tree.Tree', null, null, false);
	$m['TreeItem'] = $p['___import___']('pyjamas.ui.TreeItem.TreeItem', null, null, false);
	$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['onCb1'] = function(sender) {
		var $add2,$add3,$add1,$add4;
		$m['Window']['alert']((typeof ($add3=(typeof ($add1='onCb1 ')==typeof ($add2=$p['str'](sender)) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2)))==typeof ($add4=$p['str'](sender['isChecked']())) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4)));
		return null;
	};
	$m['onCb1'].__name__ = 'onCb1';

	$m['onCb1'].__bind_type__ = 0;
	$m['onCb1'].__args__ = [null,null,['sender']];
	$m['onCb2'] = function(sender) {
		var $add8,$add7,$add6,$add5;
		$m['Window']['alert']((typeof ($add7=(typeof ($add5='onCb2 ')==typeof ($add6=$p['str'](sender)) && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			$p['op_add']($add5,$add6)))==typeof ($add8=$p['str'](sender['isChecked']())) && (typeof $add7=='number'||typeof $add7=='string')?
			$add7+$add8:
			$p['op_add']($add7,$add8)));
		return null;
	};
	$m['onCb2'].__name__ = 'onCb2';

	$m['onCb2'].__bind_type__ = 0;
	$m['onCb2'].__args__ = [null,null,['sender']];
	$m['main'] = function() {
		var cb2,tree,cb1,root,item;
		root = $m['RootPanel']();
		tree = $m['Tree']();
		cb1 = $m['CheckBox']('test 1');
		cb1['addClickListener']($m['onCb1']);
		root['add'](cb1);
		cb2 = $m['CheckBox']('test 2');
		cb2['addClickListener']($m['onCb2']);
		item = $m['TreeItem'](cb2);
		tree['addItem'](item);
		root['add'](tree);
		return null;
	};
	$m['main'].__name__ = 'main';

	$m['main'].__bind_type__ = 0;
	$m['main'].__args__ = [null,null];
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
		$m['pyjd']['setup']('./public/TreeItemTest.html');
		$m['main']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end TreeItemTest */


/* end module: TreeItemTest */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window', 'pyjamas', 'pyjamas.ui.Tree.Tree', 'pyjamas.ui', 'pyjamas.ui.Tree', 'pyjamas.ui.TreeItem.TreeItem', 'pyjamas.ui.TreeItem', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel']
*/
