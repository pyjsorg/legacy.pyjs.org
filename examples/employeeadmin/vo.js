/* start module: vo */
$pyjs.loaded_modules['vo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['vo'].__was_initialized__) return $pyjs.loaded_modules['vo'];
	var $m = $pyjs.loaded_modules["vo"];
	$m.__repr__ = function() { return "<module: vo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'vo';
	$m.__name__ = __mod_name__;


	$m['RoleVO'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'vo';
		$cls_definition['username'] = null;
		$cls_definition['roles'] = $p['list']([]);
		$method = $pyjs__bind_method2('__init__', function(username, roles) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				username = arguments[1];
				roles = arguments[2];
			}
			if (typeof username == 'undefined') username=arguments.callee.__args__[3][1];
			if (typeof roles == 'undefined') roles=arguments.callee.__args__[4][1];
			var $bool2,$bool1;
			if ((($bool1=username) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self.username = username;
			}
			if ((($bool2=roles) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2.__nonzero__=='function'?
							$bool2.__nonzero__() :
							(typeof $bool2.__len__=='function'?
								($bool2.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.roles = roles;
			}
			return null;
		}
	, 1, [null,null,['self'],['username', null],['roles', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RoleVO', $p['tuple']($bases), $data);
	})();
	$m['UserVO'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'vo';
		$cls_definition['username'] = null;
		$cls_definition['fname'] = null;
		$cls_definition['lname'] = null;
		$cls_definition['email'] = null;
		$cls_definition['password'] = null;
		$cls_definition['department'] = $p['list']([]);
		$method = $pyjs__bind_method2('__init__', function(uname, fname, lname, email, password, department) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				uname = arguments[1];
				fname = arguments[2];
				lname = arguments[3];
				email = arguments[4];
				password = arguments[5];
				department = arguments[6];
			}
			if (typeof uname == 'undefined') uname=arguments.callee.__args__[3][1];
			if (typeof fname == 'undefined') fname=arguments.callee.__args__[4][1];
			if (typeof lname == 'undefined') lname=arguments.callee.__args__[5][1];
			if (typeof email == 'undefined') email=arguments.callee.__args__[6][1];
			if (typeof password == 'undefined') password=arguments.callee.__args__[7][1];
			if (typeof department == 'undefined') department=arguments.callee.__args__[8][1];
			var $bool4,$bool3,$bool6,$bool7,$bool5,$bool8;
			if ((($bool3=uname) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.username = uname;
			}
			if ((($bool4=fname) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.fname = fname;
			}
			if ((($bool5=lname) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.lname = lname;
			}
			if ((($bool6=email) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.email = email;
			}
			if ((($bool7=password) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
					false :
					(typeof $bool7=='object'?
						(typeof $bool7.__nonzero__=='function'?
							$bool7.__nonzero__() :
							(typeof $bool7.__len__=='function'?
								($bool7.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.password = password;
			}
			if ((($bool8=department) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
					false :
					(typeof $bool8=='object'?
						(typeof $bool8.__nonzero__=='function'?
							$bool8.__nonzero__() :
							(typeof $bool8.__len__=='function'?
								($bool8.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.department = department;
			}
			return null;
		}
	, 1, [null,null,['self'],['uname', null],['fname', null],['lname', null],['email', null],['password', null],['department', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('isValid', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp4,$cmp1,$cmp3,$cmp2,$bool10,$and1,$and3,$len2,$len1,$bool9,$and2;
			return ((($bool9=$and1=((($cmp1=(($len1=(typeof username == "undefined"?$m.username:username)) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool10=$and2=((($cmp3=(($len2=(typeof password == "undefined"?$m.password:password)) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))))===($cmp4=0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10.__nonzero__=='function'?
						$bool10.__nonzero__() :
						(typeof $bool10.__len__=='function'?
							($bool10.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((typeof department == "undefined"?$m.department:department) !== $p['list']([])):$and2):$and1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isValid'] = $method;
		$method = $pyjs__bind_method2('givenName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%s, %s', $p['tuple']([$p['getattr'](self, 'lname'), $p['getattr'](self, 'fname')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['givenName'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('UserVO', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end vo */


/* end module: vo */


