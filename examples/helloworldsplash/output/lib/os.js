/* start module: os */
$pyjs.loaded_modules['os'] = function (__mod_name__) {
	if($pyjs.loaded_modules['os'].__was_initialized__) return $pyjs.loaded_modules['os'];
	var $m = $pyjs.loaded_modules["os"];
	$m.__repr__ = function() { return "<module: os>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'os';
	$m.__name__ = __mod_name__;


	$m['path'] = $p['___import___']('path', 'os');
	$m['walk'] = $p['___import___']('os.path.walk', 'os', null, false);
	$m['curdir'] = $p['___import___']('os.path.curdir', 'os', null, false);
	$m['pardir'] = $p['___import___']('os.path.pardir', 'os', null, false);
	$m['sep'] = $p['___import___']('os.path.sep', 'os', null, false);
	$m['pathsep'] = $p['___import___']('os.path.pathsep', 'os', null, false);
	$m['defpath'] = $p['___import___']('os.path.defpath', 'os', null, false);
	$m['extsep'] = $p['___import___']('os.path.extsep', 'os', null, false);
	$m['altsep'] = $p['___import___']('os.path.altsep', 'os', null, false);
	$m['devnull'] = $p['___import___']('os.path.devnull', 'os', null, false);
	$m['$$name'] = 'pyjs';
	$m['SEEK_SET'] = 0;
	$m['SEEK_CUR'] = 1;
	$m['SEEK_END'] = 2;
	$m['EX_CANTCREAT'] = 73;
	$m['EX_CONFIG'] = 78;
	$m['EX_DATAERR'] = 65;
	$m['EX_IOERR'] = 74;
	$m['EX_NOHOST'] = 68;
	$m['EX_NOINPUT'] = 66;
	$m['EX_NOPERM'] = 77;
	$m['EX_NOUSER'] = 67;
	$m['EX_OK'] = 0;
	$m['EX_OSERR'] = 71;
	$m['EX_OSFILE'] = 72;
	$m['EX_PROTOCOL'] = 76;
	$m['EX_SOFTWARE'] = 70;
	$m['EX_TEMPFAIL'] = 75;
	$m['EX_UNAVAILABLE'] = 69;
	$m['EX_USAGE'] = 64;
	$m['F_OK'] = 0;
	$m['NGROUPS_MAX'] = 65536;
	$m['O_APPEND'] = 1024;
	$m['O_ASYNC'] = 8192;
	$m['O_CREAT'] = 64;
	$m['O_DIRECT'] = 16384;
	$m['O_DIRECTORY'] = 65536;
	$m['O_DSYNC'] = 4096;
	$m['O_EXCL'] = 128;
	$m['O_LARGEFILE'] = 32768;
	$m['O_NDELAY'] = 2048;
	$m['O_NOATIME'] = 262144;
	$m['O_NOCTTY'] = 256;
	$m['O_NOFOLLOW'] = 131072;
	$m['O_NONBLOCK'] = 2048;
	$m['O_RDONLY'] = 0;
	$m['O_RDWR'] = 2;
	$m['O_RSYNC'] = 1052672;
	$m['O_SYNC'] = 1052672;
	$m['O_TRUNC'] = 512;
	$m['O_WRONLY'] = 1;
	$m['R_OK'] = 4;
	$m['TMP_MAX'] = 238328;
	$m['WCONTINUED'] = 8;
	$m['WNOHANG'] = 1;
	$m['WUNTRACED'] = 2;
	$m['W_OK'] = 2;
	$m['X_OK'] = 1;
	$m['environ'] = $p['dict']([]);
	$m['urandom'] = function(n) {

		throw ($p['NotImplementedError']('/dev/urandom (or equivalent) not found'));
		return (typeof bs == "undefined"?$m.bs:bs);
	};
	$m['urandom'].__name__ = 'urandom';

	$m['urandom'].__bind_type__ = 0;
	$m['urandom'].__args__ = [null,null,['n']];
	$m['unlink'] = function() {
		var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));


		throw ($p['NotImplementedError']('PyJS does not support filesystem access'));
		return null;
	};
	$m['unlink'].__name__ = 'unlink';

	$m['unlink'].__bind_type__ = 0;
	$m['unlink'].__args__ = ['args',null];
	return this;
}; /* end os */


/* end module: os */


/*
PYJS_DEPS: ['path', 'os.path.walk', 'os', 'os.path', 'os.path.curdir', 'os.path.pardir', 'os.path.sep', 'os.path.pathsep', 'os.path.defpath', 'os.path.extsep', 'os.path.altsep', 'os.path.devnull']
*/
