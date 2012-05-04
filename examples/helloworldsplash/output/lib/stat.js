/* start module: stat */
$pyjs.loaded_modules['stat'] = function (__mod_name__) {
	if($pyjs.loaded_modules['stat'].__was_initialized__) return $pyjs.loaded_modules['stat'];
	var $m = $pyjs.loaded_modules["stat"];
	$m.__repr__ = function() { return "<module: stat>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'stat';
	$m.__name__ = __mod_name__;


	$m['ST_MODE'] = 0;
	$m['ST_INO'] = 1;
	$m['ST_DEV'] = 2;
	$m['ST_NLINK'] = 3;
	$m['ST_UID'] = 4;
	$m['ST_GID'] = 5;
	$m['ST_SIZE'] = 6;
	$m['ST_ATIME'] = 7;
	$m['ST_MTIME'] = 8;
	$m['ST_CTIME'] = 9;
	$m['S_IMODE'] = function(mode) {

		return (mode)&(4095);
	};
	$m['S_IMODE'].__name__ = 'S_IMODE';

	$m['S_IMODE'].__bind_type__ = 0;
	$m['S_IMODE'].__args__ = [null,null,['mode']];
	$m['S_IFMT'] = function(mode) {

		return (mode)&(61440);
	};
	$m['S_IFMT'].__name__ = 'S_IFMT';

	$m['S_IFMT'].__bind_type__ = 0;
	$m['S_IFMT'].__args__ = [null,null,['mode']];
	$m['S_IFDIR'] = 16384;
	$m['S_IFCHR'] = 8192;
	$m['S_IFBLK'] = 24576;
	$m['S_IFREG'] = 32768;
	$m['S_IFIFO'] = 4096;
	$m['S_IFLNK'] = 40960;
	$m['S_IFSOCK'] = 49152;
	$m['S_ISDIR'] = function(mode) {
		var $eq2,$eq1;
		return (($eq1=$m['S_IFMT'](mode))===($eq2=$m['S_IFDIR'])&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
						$eq1==$eq2)))));
	};
	$m['S_ISDIR'].__name__ = 'S_ISDIR';

	$m['S_ISDIR'].__bind_type__ = 0;
	$m['S_ISDIR'].__args__ = [null,null,['mode']];
	$m['S_ISCHR'] = function(mode) {
		var $eq3,$eq4;
		return (($eq3=$m['S_IFMT'](mode))===($eq4=$m['S_IFCHR'])&&$eq3===null?true:
			($eq3===null?false:($eq4===null?false:
				((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
					((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
						$eq3==$eq4)))));
	};
	$m['S_ISCHR'].__name__ = 'S_ISCHR';

	$m['S_ISCHR'].__bind_type__ = 0;
	$m['S_ISCHR'].__args__ = [null,null,['mode']];
	$m['S_ISBLK'] = function(mode) {
		var $eq6,$eq5;
		return (($eq5=$m['S_IFMT'](mode))===($eq6=$m['S_IFBLK'])&&$eq5===null?true:
			($eq5===null?false:($eq6===null?false:
				((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
					((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
						$eq5==$eq6)))));
	};
	$m['S_ISBLK'].__name__ = 'S_ISBLK';

	$m['S_ISBLK'].__bind_type__ = 0;
	$m['S_ISBLK'].__args__ = [null,null,['mode']];
	$m['S_ISREG'] = function(mode) {
		var $eq8,$eq7;
		return (($eq7=$m['S_IFMT'](mode))===($eq8=$m['S_IFREG'])&&$eq7===null?true:
			($eq7===null?false:($eq8===null?false:
				((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
					((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
						$eq7==$eq8)))));
	};
	$m['S_ISREG'].__name__ = 'S_ISREG';

	$m['S_ISREG'].__bind_type__ = 0;
	$m['S_ISREG'].__args__ = [null,null,['mode']];
	$m['S_ISFIFO'] = function(mode) {
		var $eq10,$eq9;
		return (($eq9=$m['S_IFMT'](mode))===($eq10=$m['S_IFIFO'])&&$eq9===null?true:
			($eq9===null?false:($eq10===null?false:
				((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
					((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
						$eq9==$eq10)))));
	};
	$m['S_ISFIFO'].__name__ = 'S_ISFIFO';

	$m['S_ISFIFO'].__bind_type__ = 0;
	$m['S_ISFIFO'].__args__ = [null,null,['mode']];
	$m['S_ISLNK'] = function(mode) {
		var $eq11,$eq12;
		return (($eq11=$m['S_IFMT'](mode))===($eq12=$m['S_IFLNK'])&&$eq11===null?true:
			($eq11===null?false:($eq12===null?false:
				((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
					((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
						$eq11==$eq12)))));
	};
	$m['S_ISLNK'].__name__ = 'S_ISLNK';

	$m['S_ISLNK'].__bind_type__ = 0;
	$m['S_ISLNK'].__args__ = [null,null,['mode']];
	$m['S_ISSOCK'] = function(mode) {
		var $eq13,$eq14;
		return (($eq13=$m['S_IFMT'](mode))===($eq14=$m['S_IFSOCK'])&&$eq13===null?true:
			($eq13===null?false:($eq14===null?false:
				((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
					((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
						$eq13==$eq14)))));
	};
	$m['S_ISSOCK'].__name__ = 'S_ISSOCK';

	$m['S_ISSOCK'].__bind_type__ = 0;
	$m['S_ISSOCK'].__args__ = [null,null,['mode']];
	$m['S_ISUID'] = 2048;
	$m['S_ISGID'] = 1024;
	$m['S_ENFMT'] = $m['S_ISGID'];
	$m['S_ISVTX'] = 512;
	$m['S_IREAD'] = 256;
	$m['S_IWRITE'] = 128;
	$m['S_IEXEC'] = 64;
	$m['S_IRWXU'] = 448;
	$m['S_IRUSR'] = 256;
	$m['S_IWUSR'] = 128;
	$m['S_IXUSR'] = 64;
	$m['S_IRWXG'] = 56;
	$m['S_IRGRP'] = 32;
	$m['S_IWGRP'] = 16;
	$m['S_IXGRP'] = 8;
	$m['S_IRWXO'] = 7;
	$m['S_IROTH'] = 4;
	$m['S_IWOTH'] = 2;
	$m['S_IXOTH'] = 1;
	$m['UF_NODUMP'] = 1;
	$m['UF_IMMUTABLE'] = 2;
	$m['UF_APPEND'] = 4;
	$m['UF_OPAQUE'] = 8;
	$m['UF_NOUNLINK'] = 16;
	$m['SF_ARCHIVED'] = 65536;
	$m['SF_IMMUTABLE'] = 131072;
	$m['SF_APPEND'] = 262144;
	$m['SF_NOUNLINK'] = 1048576;
	$m['SF_SNAPSHOT'] = 2097152;
	return this;
}; /* end stat */


/* end module: stat */


