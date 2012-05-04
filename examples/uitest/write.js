/* start module: write */
$pyjs.loaded_modules['write'] = function (__mod_name__) {
	if($pyjs.loaded_modules['write'].__was_initialized__) return $pyjs.loaded_modules['write'];
	var $m = $pyjs.loaded_modules["write"];
	$m.__repr__ = function() { return "<module: write>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'write';
	$m.__name__ = __mod_name__;


	$m['data'] = '';
	$m['escape'] = function(s) {

		s = s['$$replace']('&', '&amp;');
		s = s['$$replace']('<', '&lt;');
		s = s['$$replace']('>', '&gt;');
		s = s['$$replace']('"', '&quot;');
		return s;
	};
	$m['escape'].__name__ = 'escape';

	$m['escape'].__bind_type__ = 0;
	$m['escape'].__args__ = [null,null,['s']];
	$m['display_log_output'] = function() {

		$m['element'] = $doc['createElement']('div');
		$doc['body']['appendChild']($m['element']);
		$m['element'].innerHTML = $m['data'];
		return null;
	};
	$m['display_log_output'].__name__ = 'display_log_output';

	$m['display_log_output'].__bind_type__ = 0;
	$m['display_log_output'].__args__ = [null,null];
	$m['write'] = function(text, do_escape) {
		if (typeof do_escape == 'undefined') do_escape=arguments.callee.__args__[3][1];
		var $add2,$bool1,$add1;
		if ((($bool1=do_escape) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			text = $m['escape'](text);
		}
		$m['data'] = (typeof ($add1=$m['data'])==typeof ($add2=text) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
		return null;
	};
	$m['write'].__name__ = 'write';

	$m['write'].__bind_type__ = 0;
	$m['write'].__args__ = [null,null,['text'],['do_escape', true]];
	$m['writebr'] = function(text, do_escape) {
		if (typeof do_escape == 'undefined') do_escape=arguments.callee.__args__[3][1];
		var $add4,$add3;
		$m['write']((typeof ($add3=text)==typeof ($add4='<br />\n') && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4)), do_escape);
		return null;
	};
	$m['writebr'].__name__ = 'writebr';

	$m['writebr'].__bind_type__ = 0;
	$m['writebr'].__args__ = [null,null,['text'],['do_escape', true]];
	return this;
}; /* end write */


/* end module: write */


