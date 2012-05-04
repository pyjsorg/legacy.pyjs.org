/* start module: ApplicationConstants */
$pyjs.loaded_modules['ApplicationConstants'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ApplicationConstants'].__was_initialized__) return $pyjs.loaded_modules['ApplicationConstants'];
	var $m = $pyjs.loaded_modules["ApplicationConstants"];
	$m.__repr__ = function() { return "<module: ApplicationConstants>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ApplicationConstants';
	$m.__name__ = __mod_name__;


	$m['DEPT_NONE_SELECTED'] = '--None Selected--';
	$m['DEPT_ACCT'] = 'Accounting';
	$m['DEPT_SALES'] = 'Sales';
	$m['DEPT_PLANT'] = 'Plant';
	$m['DEPT_SHIPPING'] = 'Shipping';
	$m['DEPT_QC'] = 'Quality Control';
	$m['DeptList'] = $p['list']([$m['DEPT_NONE_SELECTED'], $m['DEPT_ACCT'], $m['DEPT_SALES'], $m['DEPT_PLANT']]);
	$m['ROLE_NONE_SELECTED'] = '--None Selected--';
	$m['ROLE_ADMIN'] = 'Administrator';
	$m['ROLE_ACCT_PAY'] = 'Accounts Payable';
	$m['ROLE_ACCT_RCV'] = 'Accounts Receivable';
	$m['ROLE_EMP_BENEFITS'] = 'Employee Benefits';
	$m['ROLE_GEN_LEDGER'] = 'General Ledger';
	$m['ROLE_PAYROLL'] = 'Payroll';
	$m['ROLE_INVENTORY'] = 'Inventory';
	$m['ROLE_PRODUCTION'] = 'Production';
	$m['ROLE_QUALITY_CTL'] = 'Quality Control';
	$m['ROLE_SALES'] = 'Sales';
	$m['ROLE_ORDERS'] = 'Orders';
	$m['ROLE_CUSTOMERS'] = 'Customers';
	$m['ROLE_SHIPPING'] = 'Shipping';
	$m['ROLE_RETURNS'] = 'Returns';
	$m['RoleList'] = $p['list']([$m['ROLE_NONE_SELECTED'], $m['ROLE_ADMIN'], $m['ROLE_ACCT_PAY'], $m['ROLE_ACCT_RCV'], $m['ROLE_EMP_BENEFITS'], $m['ROLE_GEN_LEDGER'], $m['ROLE_PAYROLL'], $m['ROLE_INVENTORY'], $m['ROLE_PRODUCTION'], $m['ROLE_QUALITY_CTL'], $m['ROLE_SALES'], $m['ROLE_ORDERS'], $m['ROLE_CUSTOMERS'], $m['ROLE_SHIPPING'], $m['ROLE_RETURNS']]);
	$m['Command'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ApplicationConstants';
		$cls_definition['STARTUP'] = 'startup';
		$cls_definition['DELETE_USER'] = 'deleteUser';
		$cls_definition['ADD_ROLE_RESULT'] = 'addRoleResult';
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Command', $p['tuple']($bases), $data);
	})();
	$m['Notification'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ApplicationConstants';
		$cls_definition['NEW_USER'] = 'newUser';
		$cls_definition['CANCEL_SELECTED'] = 'cancelSelected';
		$cls_definition['USER_SELECTED'] = 'userSelected';
		$cls_definition['USER_ADDED'] = 'userAdded';
		$cls_definition['USER_UPDATED'] = 'userUpdated';
		$cls_definition['USER_DELETED'] = 'userDeleted';
		$cls_definition['SHOW_DIALOG'] = 'showDialog';
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Notification', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end ApplicationConstants */


/* end module: ApplicationConstants */


