/* start module: stat */
$pyjs.loaded_modules['stat'] = function (__mod_name__) {
	if($pyjs.loaded_modules['stat'].__was_initialized__) return $pyjs.loaded_modules['stat'];
	var $m = $pyjs.loaded_modules["stat"];
	$m.__repr__ = function() { return "<module: stat>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'stat';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'stat.py, line 1:\n    """Constants/functions for interpreting results of os.stat() and os.lstat().';
		$m.__track_lines__[8] = 'stat.py, line 8:\n    ST_MODE  = 0';
		$m.__track_lines__[9] = 'stat.py, line 9:\n    ST_INO   = 1';
		$m.__track_lines__[10] = 'stat.py, line 10:\n    ST_DEV   = 2';
		$m.__track_lines__[11] = 'stat.py, line 11:\n    ST_NLINK = 3';
		$m.__track_lines__[12] = 'stat.py, line 12:\n    ST_UID   = 4';
		$m.__track_lines__[13] = 'stat.py, line 13:\n    ST_GID   = 5';
		$m.__track_lines__[14] = 'stat.py, line 14:\n    ST_SIZE  = 6';
		$m.__track_lines__[15] = 'stat.py, line 15:\n    ST_ATIME = 7';
		$m.__track_lines__[16] = 'stat.py, line 16:\n    ST_MTIME = 8';
		$m.__track_lines__[17] = 'stat.py, line 17:\n    ST_CTIME = 9';
		$m.__track_lines__[21] = 'stat.py, line 21:\n    def S_IMODE(mode):';
		$m.__track_lines__[22] = 'stat.py, line 22:\n    return mode & 07777';
		$m.__track_lines__[24] = 'stat.py, line 24:\n    def S_IFMT(mode):';
		$m.__track_lines__[25] = 'stat.py, line 25:\n    return mode & 0170000';
		$m.__track_lines__[30] = 'stat.py, line 30:\n    S_IFDIR  = 0040000';
		$m.__track_lines__[31] = 'stat.py, line 31:\n    S_IFCHR  = 0020000';
		$m.__track_lines__[32] = 'stat.py, line 32:\n    S_IFBLK  = 0060000';
		$m.__track_lines__[33] = 'stat.py, line 33:\n    S_IFREG  = 0100000';
		$m.__track_lines__[34] = 'stat.py, line 34:\n    S_IFIFO  = 0010000';
		$m.__track_lines__[35] = 'stat.py, line 35:\n    S_IFLNK  = 0120000';
		$m.__track_lines__[36] = 'stat.py, line 36:\n    S_IFSOCK = 0140000';
		$m.__track_lines__[40] = 'stat.py, line 40:\n    def S_ISDIR(mode):';
		$m.__track_lines__[41] = 'stat.py, line 41:\n    return S_IFMT(mode) == S_IFDIR';
		$m.__track_lines__[43] = 'stat.py, line 43:\n    def S_ISCHR(mode):';
		$m.__track_lines__[44] = 'stat.py, line 44:\n    return S_IFMT(mode) == S_IFCHR';
		$m.__track_lines__[46] = 'stat.py, line 46:\n    def S_ISBLK(mode):';
		$m.__track_lines__[47] = 'stat.py, line 47:\n    return S_IFMT(mode) == S_IFBLK';
		$m.__track_lines__[49] = 'stat.py, line 49:\n    def S_ISREG(mode):';
		$m.__track_lines__[50] = 'stat.py, line 50:\n    return S_IFMT(mode) == S_IFREG';
		$m.__track_lines__[52] = 'stat.py, line 52:\n    def S_ISFIFO(mode):';
		$m.__track_lines__[53] = 'stat.py, line 53:\n    return S_IFMT(mode) == S_IFIFO';
		$m.__track_lines__[55] = 'stat.py, line 55:\n    def S_ISLNK(mode):';
		$m.__track_lines__[56] = 'stat.py, line 56:\n    return S_IFMT(mode) == S_IFLNK';
		$m.__track_lines__[58] = 'stat.py, line 58:\n    def S_ISSOCK(mode):';
		$m.__track_lines__[59] = 'stat.py, line 59:\n    return S_IFMT(mode) == S_IFSOCK';
		$m.__track_lines__[63] = 'stat.py, line 63:\n    S_ISUID = 04000';
		$m.__track_lines__[64] = 'stat.py, line 64:\n    S_ISGID = 02000';
		$m.__track_lines__[65] = 'stat.py, line 65:\n    S_ENFMT = S_ISGID';
		$m.__track_lines__[66] = 'stat.py, line 66:\n    S_ISVTX = 01000';
		$m.__track_lines__[67] = 'stat.py, line 67:\n    S_IREAD = 00400';
		$m.__track_lines__[68] = 'stat.py, line 68:\n    S_IWRITE = 00200';
		$m.__track_lines__[69] = 'stat.py, line 69:\n    S_IEXEC = 00100';
		$m.__track_lines__[70] = 'stat.py, line 70:\n    S_IRWXU = 00700';
		$m.__track_lines__[71] = 'stat.py, line 71:\n    S_IRUSR = 00400';
		$m.__track_lines__[72] = 'stat.py, line 72:\n    S_IWUSR = 00200';
		$m.__track_lines__[73] = 'stat.py, line 73:\n    S_IXUSR = 00100';
		$m.__track_lines__[74] = 'stat.py, line 74:\n    S_IRWXG = 00070';
		$m.__track_lines__[75] = 'stat.py, line 75:\n    S_IRGRP = 00040';
		$m.__track_lines__[76] = 'stat.py, line 76:\n    S_IWGRP = 00020';
		$m.__track_lines__[77] = 'stat.py, line 77:\n    S_IXGRP = 00010';
		$m.__track_lines__[78] = 'stat.py, line 78:\n    S_IRWXO = 00007';
		$m.__track_lines__[79] = 'stat.py, line 79:\n    S_IROTH = 00004';
		$m.__track_lines__[80] = 'stat.py, line 80:\n    S_IWOTH = 00002';
		$m.__track_lines__[81] = 'stat.py, line 81:\n    S_IXOTH = 00001';
		$m.__track_lines__[85] = 'stat.py, line 85:\n    UF_NODUMP    = 0x00000001';
		$m.__track_lines__[86] = 'stat.py, line 86:\n    UF_IMMUTABLE = 0x00000002';
		$m.__track_lines__[87] = 'stat.py, line 87:\n    UF_APPEND    = 0x00000004';
		$m.__track_lines__[88] = 'stat.py, line 88:\n    UF_OPAQUE    = 0x00000008';
		$m.__track_lines__[89] = 'stat.py, line 89:\n    UF_NOUNLINK  = 0x00000010';
		$m.__track_lines__[90] = 'stat.py, line 90:\n    SF_ARCHIVED  = 0x00010000';
		$m.__track_lines__[91] = 'stat.py, line 91:\n    SF_IMMUTABLE = 0x00020000';
		$m.__track_lines__[92] = 'stat.py, line 92:\n    SF_APPEND    = 0x00040000';
		$m.__track_lines__[93] = 'stat.py, line 93:\n    SF_NOUNLINK  = 0x00100000';
		$m.__track_lines__[94] = 'stat.py, line 94:\n    SF_SNAPSHOT  = 0x00200000';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_128 = new $p['int'](128);
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_448 = new $p['int'](448);
		var $constant_int_512 = new $p['int'](512);
		var $constant_int_131072 = new $p['int'](131072);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_4096 = new $p['int'](4096);
		var $constant_int_262144 = new $p['int'](262144);
		var $constant_int_1024 = new $p['int'](1024);
		var $constant_int_8192 = new $p['int'](8192);
		var $constant_int_16384 = new $p['int'](16384);
		var $constant_int_24576 = new $p['int'](24576);
		var $constant_int_56 = new $p['int'](56);
		var $constant_int_1048576 = new $p['int'](1048576);
		var $constant_int_32768 = new $p['int'](32768);
		var $constant_int_64 = new $p['int'](64);
		var $constant_int_2048 = new $p['int'](2048);
		var $constant_int_40960 = new $p['int'](40960);
		var $constant_int_49152 = new $p['int'](49152);
		var $constant_int_61440 = new $p['int'](61440);
		var $constant_int_2097152 = new $p['int'](2097152);
		var $constant_int_65536 = new $p['int'](65536);
		var $constant_int_4095 = new $p['int'](4095);
		$pyjs.track.module='stat';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=8;
		$m['ST_MODE'] = $constant_int_0;
		$pyjs.track.lineno=9;
		$m['ST_INO'] = $constant_int_1;
		$pyjs.track.lineno=10;
		$m['ST_DEV'] = $constant_int_2;
		$pyjs.track.lineno=11;
		$m['ST_NLINK'] = $constant_int_3;
		$pyjs.track.lineno=12;
		$m['ST_UID'] = $constant_int_4;
		$pyjs.track.lineno=13;
		$m['ST_GID'] = $constant_int_5;
		$pyjs.track.lineno=14;
		$m['ST_SIZE'] = $constant_int_6;
		$pyjs.track.lineno=15;
		$m['ST_ATIME'] = $constant_int_7;
		$pyjs.track.lineno=16;
		$m['ST_MTIME'] = $constant_int_8;
		$pyjs.track.lineno=17;
		$m['ST_CTIME'] = $constant_int_9;
		$pyjs.track.lineno=21;
		$m['S_IMODE'] = function(mode) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'stat',lineno:21};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='stat';
			$pyjs.track.lineno=21;
			$pyjs.track.lineno=22;
			$pyjs.track.lineno=22;
			var $pyjs__ret = $p['op_bitand2'](mode, $constant_int_4095);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['S_IMODE'].__name__ = 'S_IMODE';

		$m['S_IMODE'].__bind_type__ = 0;
		$m['S_IMODE'].__args__ = [null,null,['mode']];
		$pyjs.track.lineno=24;
		$m['S_IFMT'] = function(mode) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'stat',lineno:24};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='stat';
			$pyjs.track.lineno=24;
			$pyjs.track.lineno=25;
			$pyjs.track.lineno=25;
			var $pyjs__ret = $p['op_bitand2'](mode, $constant_int_61440);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['S_IFMT'].__name__ = 'S_IFMT';

		$m['S_IFMT'].__bind_type__ = 0;
		$m['S_IFMT'].__args__ = [null,null,['mode']];
		$pyjs.track.lineno=30;
		$m['S_IFDIR'] = $constant_int_16384;
		$pyjs.track.lineno=31;
		$m['S_IFCHR'] = $constant_int_8192;
		$pyjs.track.lineno=32;
		$m['S_IFBLK'] = $constant_int_24576;
		$pyjs.track.lineno=33;
		$m['S_IFREG'] = $constant_int_32768;
		$pyjs.track.lineno=34;
		$m['S_IFIFO'] = $constant_int_4096;
		$pyjs.track.lineno=35;
		$m['S_IFLNK'] = $constant_int_40960;
		$pyjs.track.lineno=36;
		$m['S_IFSOCK'] = $constant_int_49152;
		$pyjs.track.lineno=40;
		$m['S_ISDIR'] = function(mode) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'stat',lineno:40};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='stat';
			$pyjs.track.lineno=40;
			$pyjs.track.lineno=41;
			$pyjs.track.lineno=41;
			var $pyjs__ret = $p['op_eq']($m['S_IFMT'](mode), $m['S_IFDIR']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['S_ISDIR'].__name__ = 'S_ISDIR';

		$m['S_ISDIR'].__bind_type__ = 0;
		$m['S_ISDIR'].__args__ = [null,null,['mode']];
		$pyjs.track.lineno=43;
		$m['S_ISCHR'] = function(mode) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'stat',lineno:43};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='stat';
			$pyjs.track.lineno=43;
			$pyjs.track.lineno=44;
			$pyjs.track.lineno=44;
			var $pyjs__ret = $p['op_eq']($m['S_IFMT'](mode), $m['S_IFCHR']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['S_ISCHR'].__name__ = 'S_ISCHR';

		$m['S_ISCHR'].__bind_type__ = 0;
		$m['S_ISCHR'].__args__ = [null,null,['mode']];
		$pyjs.track.lineno=46;
		$m['S_ISBLK'] = function(mode) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'stat',lineno:46};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='stat';
			$pyjs.track.lineno=46;
			$pyjs.track.lineno=47;
			$pyjs.track.lineno=47;
			var $pyjs__ret = $p['op_eq']($m['S_IFMT'](mode), $m['S_IFBLK']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['S_ISBLK'].__name__ = 'S_ISBLK';

		$m['S_ISBLK'].__bind_type__ = 0;
		$m['S_ISBLK'].__args__ = [null,null,['mode']];
		$pyjs.track.lineno=49;
		$m['S_ISREG'] = function(mode) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'stat',lineno:49};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='stat';
			$pyjs.track.lineno=49;
			$pyjs.track.lineno=50;
			$pyjs.track.lineno=50;
			var $pyjs__ret = $p['op_eq']($m['S_IFMT'](mode), $m['S_IFREG']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['S_ISREG'].__name__ = 'S_ISREG';

		$m['S_ISREG'].__bind_type__ = 0;
		$m['S_ISREG'].__args__ = [null,null,['mode']];
		$pyjs.track.lineno=52;
		$m['S_ISFIFO'] = function(mode) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'stat',lineno:52};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='stat';
			$pyjs.track.lineno=52;
			$pyjs.track.lineno=53;
			$pyjs.track.lineno=53;
			var $pyjs__ret = $p['op_eq']($m['S_IFMT'](mode), $m['S_IFIFO']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['S_ISFIFO'].__name__ = 'S_ISFIFO';

		$m['S_ISFIFO'].__bind_type__ = 0;
		$m['S_ISFIFO'].__args__ = [null,null,['mode']];
		$pyjs.track.lineno=55;
		$m['S_ISLNK'] = function(mode) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'stat',lineno:55};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='stat';
			$pyjs.track.lineno=55;
			$pyjs.track.lineno=56;
			$pyjs.track.lineno=56;
			var $pyjs__ret = $p['op_eq']($m['S_IFMT'](mode), $m['S_IFLNK']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['S_ISLNK'].__name__ = 'S_ISLNK';

		$m['S_ISLNK'].__bind_type__ = 0;
		$m['S_ISLNK'].__args__ = [null,null,['mode']];
		$pyjs.track.lineno=58;
		$m['S_ISSOCK'] = function(mode) {
			if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);

			$pyjs.track={module:'stat',lineno:58};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='stat';
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=59;
			$pyjs.track.lineno=59;
			var $pyjs__ret = $p['op_eq']($m['S_IFMT'](mode), $m['S_IFSOCK']);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['S_ISSOCK'].__name__ = 'S_ISSOCK';

		$m['S_ISSOCK'].__bind_type__ = 0;
		$m['S_ISSOCK'].__args__ = [null,null,['mode']];
		$pyjs.track.lineno=63;
		$m['S_ISUID'] = $constant_int_2048;
		$pyjs.track.lineno=64;
		$m['S_ISGID'] = $constant_int_1024;
		$pyjs.track.lineno=65;
		$m['S_ENFMT'] = $m['S_ISGID'];
		$pyjs.track.lineno=66;
		$m['S_ISVTX'] = $constant_int_512;
		$pyjs.track.lineno=67;
		$m['S_IREAD'] = $constant_int_256;
		$pyjs.track.lineno=68;
		$m['S_IWRITE'] = $constant_int_128;
		$pyjs.track.lineno=69;
		$m['S_IEXEC'] = $constant_int_64;
		$pyjs.track.lineno=70;
		$m['S_IRWXU'] = $constant_int_448;
		$pyjs.track.lineno=71;
		$m['S_IRUSR'] = $constant_int_256;
		$pyjs.track.lineno=72;
		$m['S_IWUSR'] = $constant_int_128;
		$pyjs.track.lineno=73;
		$m['S_IXUSR'] = $constant_int_64;
		$pyjs.track.lineno=74;
		$m['S_IRWXG'] = $constant_int_56;
		$pyjs.track.lineno=75;
		$m['S_IRGRP'] = $constant_int_32;
		$pyjs.track.lineno=76;
		$m['S_IWGRP'] = $constant_int_16;
		$pyjs.track.lineno=77;
		$m['S_IXGRP'] = $constant_int_8;
		$pyjs.track.lineno=78;
		$m['S_IRWXO'] = $constant_int_7;
		$pyjs.track.lineno=79;
		$m['S_IROTH'] = $constant_int_4;
		$pyjs.track.lineno=80;
		$m['S_IWOTH'] = $constant_int_2;
		$pyjs.track.lineno=81;
		$m['S_IXOTH'] = $constant_int_1;
		$pyjs.track.lineno=85;
		$m['UF_NODUMP'] = $constant_int_1;
		$pyjs.track.lineno=86;
		$m['UF_IMMUTABLE'] = $constant_int_2;
		$pyjs.track.lineno=87;
		$m['UF_APPEND'] = $constant_int_4;
		$pyjs.track.lineno=88;
		$m['UF_OPAQUE'] = $constant_int_8;
		$pyjs.track.lineno=89;
		$m['UF_NOUNLINK'] = $constant_int_16;
		$pyjs.track.lineno=90;
		$m['SF_ARCHIVED'] = $constant_int_65536;
		$pyjs.track.lineno=91;
		$m['SF_IMMUTABLE'] = $constant_int_131072;
		$pyjs.track.lineno=92;
		$m['SF_APPEND'] = $constant_int_262144;
		$pyjs.track.lineno=93;
		$m['SF_NOUNLINK'] = $constant_int_1048576;
		$pyjs.track.lineno=94;
		$m['SF_SNAPSHOT'] = $constant_int_2097152;
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end stat */


/* end module: stat */


