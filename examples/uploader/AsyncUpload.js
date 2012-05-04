/* start module: AsyncUpload */
$pyjs.loaded_modules['AsyncUpload'] = function (__mod_name__) {
	if($pyjs.loaded_modules['AsyncUpload'].__was_initialized__) return $pyjs.loaded_modules['AsyncUpload'];
	var $m = $pyjs.loaded_modules["AsyncUpload"];
	$m.__repr__ = function() { return "<module: AsyncUpload>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'AsyncUpload';
	$m.__name__ = __mod_name__;


	$m['asyncUpload'] = function(url, file, handler) {
		var onload,xmlHttp,onprogress,$pyjs_try_err,sys,onerror,wubwubwub,$2,$1;
		xmlHttp = (typeof doCreateXmlHTTPRequest == "undefined"?$m.doCreateXmlHTTPRequest:doCreateXmlHTTPRequest)();
		onload = function(evnt) {
			if (typeof evnt == 'undefined') evnt=arguments.callee.__args__[2][1];
			var status,localHandler;
			localHandler = handler;
			status = $p['getattr'](xmlHttp, 'status');
			localHandler['onload'](status);
			return null;
		};
		onload.__name__ = 'onload';

		onload.__bind_type__ = 0;
		onload.__args__ = [null,null,['evnt', null]];
		onprogress = function(evnt) {
			if (typeof evnt == 'undefined') evnt=arguments.callee.__args__[2][1];
			var localHandler;
			localHandler = handler;
			localHandler['onprogress']($p['getattr'](evnt, 'loaded'), $p['getattr'](evnt, 'total'));
			return null;
		};
		onprogress.__name__ = 'onprogress';

		onprogress.__bind_type__ = 0;
		onprogress.__args__ = [null,null,['evnt', null]];
		onerror = function(evnt) {
			if (typeof evnt == 'undefined') evnt=arguments.callee.__args__[2][1];
			var status,localHandler;
			localHandler = handler;
			status = $p['getattr'](xmlHttp, 'status');
			localHandler['onerror'](status);
			return null;
		};
		onerror.__name__ = 'onerror';

		onerror.__bind_type__ = 0;
		onerror.__args__ = [null,null,['evnt', null]];
		$p['getattr'](xmlHttp, 'upload').load = onload;
		$p['getattr'](xmlHttp, 'upload').progress = onprogress;
		$p['getattr'](xmlHttp, 'upload').onload = onload;
		$p['getattr'](xmlHttp, 'upload').onprogress = onprogress;
		$p['getattr'](xmlHttp, 'upload').onerror = onerror;
		wubwubwub = 1;
		try {
			xmlHttp['open']('POST', url, true);
var reader = new FileReader();
            
            reader.onload = function(evt) {
                var fd = new FormData();
                fd.append("file", file);
                xmlHttp.send(fd);};
            reader.readAsBinaryString(file);
            
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
delete xmlHttp.onreadystatechange;
				xmlHttp = null;
				handler = null;
				sys = $p['___import___']('sys', null);
				$m.Window['alert']($p['str']((typeof ($1=sys['exc_info']()).__array != 'undefined'?
					((typeof $1.__array[$2=1]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(1))));
				return false;
			}
		}
		return true;
	};
	$m['asyncUpload'].__name__ = 'asyncUpload';

	$m['asyncUpload'].__bind_type__ = 0;
	$m['asyncUpload'].__args__ = [null,null,['url'],['file'],['handler']];
	$m['doCreateXmlHTTPRequest'] = function() {
		var res,$bool1,$pyjs_try_err;
		try {
			res = new ActiveXObject("Msxml2.XMLHTTP");
			return res;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
			}
		}
		if ((($bool1=typeof $wnd.XMLHttpRequest != 'undefined') === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			res = new XMLHttpRequest();
			return res;
		}
		return null;
	};
	$m['doCreateXmlHTTPRequest'].__name__ = 'doCreateXmlHTTPRequest';

	$m['doCreateXmlHTTPRequest'].__bind_type__ = 0;
	$m['doCreateXmlHTTPRequest'].__args__ = [null,null];
	$m['is_old_browser'] = function() {
		var $pyjs_try_err;
		try {
var fd = new FormData();
			return false;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				return true;
			}
		}
		return null;
	};
	$m['is_old_browser'].__name__ = 'is_old_browser';

	$m['is_old_browser'].__bind_type__ = 0;
	$m['is_old_browser'].__args__ = [null,null];
	return this;
}; /* end AsyncUpload */


/* end module: AsyncUpload */


/*
PYJS_DEPS: ['sys']
*/
