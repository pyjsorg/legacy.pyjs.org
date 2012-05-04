/* start module: ApplicationConstants */
$pyjs.loaded_modules['ApplicationConstants'] = function (__mod_name__) {
	if($pyjs.loaded_modules['ApplicationConstants'].__was_initialized__) return $pyjs.loaded_modules['ApplicationConstants'];
	var $m = $pyjs.loaded_modules["ApplicationConstants"];
	$m.__repr__ = function() { return "<module: ApplicationConstants>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'ApplicationConstants';
	$m.__name__ = __mod_name__;


	$m['Notification'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'ApplicationConstants';
		$cls_definition['STARTUP'] = 'startup';
		$cls_definition['SHOW_DIALOG'] = 'showDialog';
		$cls_definition['HELLO'] = 'hello';
		$cls_definition['FILE_LOADED'] = 'fileLoaded';
		$cls_definition['EDIT_SELECTED'] = 'editMode';
		$cls_definition['SUM_SELECTED'] = 'summaryMode';
		$cls_definition['DATE_SELECTED'] = 'dateSelected';
		$cls_definition['CELL_SELECTED'] = 'cellSelected';
		$cls_definition['CELL_UPDATED'] = 'cellUpdated';
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Notification', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end ApplicationConstants */


/* end module: ApplicationConstants */


