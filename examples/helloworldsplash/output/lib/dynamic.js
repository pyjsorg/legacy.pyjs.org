/* start module: dynamic */
$pyjs.loaded_modules['dynamic'] = function (__mod_name__) {
	if($pyjs.loaded_modules['dynamic'].__was_initialized__) return $pyjs.loaded_modules['dynamic'];
	var $m = $pyjs.loaded_modules["dynamic"];
	$m.__repr__ = function() { return "<module: dynamic>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'dynamic';
	$m.__name__ = __mod_name__;


	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['sys'] = $p['___import___']('sys', null);
	;
	$m['AjaxError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'dynamic';
		var $bases = new Array($p['RuntimeError']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AjaxError', $p['tuple']($bases), $data);
	})();
	$m['createHttpRequest'] = function() {
		var res,$bool1,$pyjs_try_err;
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
			return new XMLHttpRequest();
		}
		try {
			res = new ActiveXObject("Msxml2.XMLHTTP");
			return res;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
			}
		}
		return null;
	};
	$m['createHttpRequest'].__name__ = 'createHttpRequest';

	$m['createHttpRequest'].__bind_type__ = 0;
	$m['createHttpRequest'].__args__ = [null,null];
	$m['load'] = function(url, onreadystatechange, on_load_fn, async) {
		if (typeof onreadystatechange == 'undefined') onreadystatechange=arguments.callee.__args__[3][1];
		if (typeof on_load_fn == 'undefined') on_load_fn=arguments.callee.__args__[4][1];
		if (typeof async == 'undefined') async=arguments.callee.__args__[5][1];
		var $bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$or6,$eq10,$eq11,$eq12,$eq13,$eq14,req,$pyjs_try_err,$or5,$or4,$eq8,$eq9,$or3,$and3,$and4,$eq7,$bool2,$bool8,$bool9,$add2,$add1;
		;
		$wnd.status = (typeof ($add1='Loading ')==typeof ($add2=url) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2));
		req = $m['createHttpRequest']();
		if ((($bool2=(onreadystatechange === null)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			onreadystatechange = function(evnt) {
				var $or1,str,$or2,$eq2,$and1,$and2,$eq1,$eq6,$eq4,$eq5,$bool3,$bool6,$add4,$bool4,$eq3,$bool7,$bool5,$add3;
				if ((($bool5=((($bool3=$and1=(($eq1=$p['getattr'](req, 'readyState'))===($eq2=4)&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
					false :
					(typeof $bool3=='object'?
						(typeof $bool3.__nonzero__=='function'?
							$bool3.__nonzero__() :
							(typeof $bool3.__len__=='function'?
								($bool3.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool4=$or1=(($eq3=$p['getattr'](req, 'status'))===($eq4=200)&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:(($eq5=$p['getattr'](req, 'status'))===($eq6=0)&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
								$eq5==$eq6)))))):$and1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					str = $p['getattr'](req, 'responseText');
					$wnd.status = (typeof ($add3='Loaded ')==typeof ($add4=url) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4));
					if ((($bool7=!(($bool6=(on_load_fn === null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6.__nonzero__=='function'?
								$bool6.__nonzero__() :
								(typeof $bool6.__len__=='function'?
									($bool6.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						on_load_fn(evnt, req);
					}
				}
				return null;
			};
			onreadystatechange.__name__ = 'onreadystatechange';

			onreadystatechange.__bind_type__ = 0;
			onreadystatechange.__args__ = [null,null,['evnt']];
		}
req.onreadystatechange = onreadystatechange;
		req['open']('GET', url, async);
		try {
			req['send'](null);
			if ((($bool8=async) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				return null;
			}
			while ((($bool9=true) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
					false :
					(typeof $bool9=='object'?
						(typeof $bool9.__nonzero__=='function'?
							$bool9.__nonzero__() :
							(typeof $bool9.__len__=='function'?
								($bool9.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool12=((($bool10=$or3=(($eq7=$p['getattr'](req, 'status'))===($eq8=200)&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:((($bool11=$and3=(($eq9=$p['getattr'](req, 'status'))===($eq10=0)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11.__nonzero__=='function'?
							$bool11.__nonzero__() :
							(typeof $bool11.__len__=='function'?
								($bool11.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['getattr'](req, 'responseText'):$and3))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
						false :
						(typeof $bool12=='object'?
							(typeof $bool12.__nonzero__=='function'?
								$bool12.__nonzero__() :
								(typeof $bool12.__len__=='function'?
									($bool12.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool14=!(($bool13=(on_load_fn === null)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13.__nonzero__=='function'?
								$bool13.__nonzero__() :
								(typeof $bool13.__len__=='function'?
									($bool13.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
							false :
							(typeof $bool14=='object'?
								(typeof $bool14.__nonzero__=='function'?
									$bool14.__nonzero__() :
									(typeof $bool14.__len__=='function'?
										($bool14.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						on_load_fn(null, req);
					}
					return req;
				}
				if ((($bool16=((($bool15=$or5=!(($eq11=$p['getattr'](req, 'status'))===($eq12=0)&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15.__nonzero__=='function'?
							$bool15.__nonzero__() :
							(typeof $bool15.__len__=='function'?
								($bool15.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or5:!(($eq13=$p['getattr'](req, 'responseText'))===($eq14='')&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14))))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16.__nonzero__=='function'?
								$bool16.__nonzero__() :
								(typeof $bool16.__len__=='function'?
									($bool16.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					break;
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
			}
		}
		throw ($m['AjaxError']('Synchronous error', $p['getattr'](req, 'status')));
		return null;
	};
	$m['load'].__name__ = 'load';

	$m['load'].__bind_type__ = 0;
	$m['load'].__args__ = [null,null,['url'],['onreadystatechange', null],['on_load_fn', null],['async', false]];
	$m['inject'] = function(values, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
		if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
		var $bool18,$bool17,$iter1_iter,$iter2_type,$iter2_iter,$iter1_array,$iter1_nextval,$iter2_idx,$4,$2,$3,$1,$iter2_nextval,$iter1_type,k,$iter1_idx,v,$iter2_array;
		if ((($bool17=(namespace === null)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
				false :
				(typeof $bool17=='object'?
					(typeof $bool17.__nonzero__=='function'?
						$bool17.__nonzero__() :
						(typeof $bool17.__len__=='function'?
							($bool17.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			namespace = $pyjs.global_namespace;
		}
		values = $p['dict'](values);
		if ((($bool18=(names === null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
				false :
				(typeof $bool18=='object'?
					(typeof $bool18.__nonzero__=='function'?
						$bool18.__nonzero__() :
						(typeof $bool18.__len__=='function'?
							($bool18.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$iter1_iter = values;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				k = $iter1_nextval;
				v = (typeof ($1=values).__array != 'undefined'?
					((typeof $1.__array[$2=k]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(k));
namespace[k] = v;
			}
		}
		else {
			$iter2_iter = names;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				k = $iter2_nextval;
				v = (typeof ($3=values).__array != 'undefined'?
					((typeof $3.__array[$4=k]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(k));
namespace[k] = v;
			}
		}
		return null;
	};
	$m['inject'].__name__ = 'inject';

	$m['inject'].__bind_type__ = 0;
	$m['inject'].__args__ = [null,null,['values'],['namespace', null],['names', null]];
	$m['activate_css'] = function(targetnode) {
		var $bool19,$iter3_idx,LC,$iter3_type,$iter3_nextval,scriptnodes,$len1,$iter3_iter,$iter3_array,$6,fileref,$5,sn;
		scriptnodes = $p['list'](targetnode['getElementsByTagName']('link'));
		$iter3_iter = $p['range']((($len1=scriptnodes) === null?0:
			(typeof $len1.__array != 'undefined' ? $len1.__array.length:
				(typeof $len1.__len__ == 'function'?$len1.__len__():
					(typeof $len1.length != 'undefined'?$len1.length:
						$p['len']($len1))))));
		if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter.__iter__();
			$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			LC = $iter3_nextval;
			sn = (typeof ($5=scriptnodes).__array != 'undefined'?
				((typeof $5.__array[$6=LC]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(LC));
			sn['parentNode']['removeChild'](sn);
			fileref = $m['DOM']['createElement']('link');
			if ((($bool19=(typeof hassattr == "undefined"?$m.hassattr:hassattr)(sn, 'href')) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19.__nonzero__=='function'?
							$bool19.__nonzero__() :
							(typeof $bool19.__len__=='function'?
								($bool19.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				fileref.href = $p['getattr'](sn, 'href');
			}
			else {
				fileref.text = $p['getattr'](sn, 'text');
			}
			fileref.rel = 'stylesheet';
			fileref.type = 'text/css';
			$doc['getElementsByTagName']('head')['item'](0)['appendChild'](fileref);
		}
		return null;
	};
	$m['activate_css'].__name__ = 'activate_css';

	$m['activate_css'].__bind_type__ = 0;
	$m['activate_css'].__args__ = [null,null,['targetnode']];
	$m['activate_javascript'] = function(txt) {
		var fileref;
		fileref = $m['DOM']['createElement']('script');
		fileref.text = txt;
		fileref.type = 'text/javascript';
		fileref.language = 'javascript';
		fileref = fileref['cloneNode'](true);
		$doc['getElementsByTagName']('head')['item'](0)['appendChild'](fileref);
		return null;
	};
	$m['activate_javascript'].__name__ = 'activate_javascript';

	$m['activate_javascript'].__bind_type__ = 0;
	$m['activate_javascript'].__args__ = [null,null,['txt']];
	$m['eval'] = function(str) {

		return eval(str);
	};
	$m['eval'].__name__ = 'eval';

	$m['eval'].__bind_type__ = 0;
	$m['eval'].__args__ = [null,null,['str']];
	$m['ajax_eval'] = function(url, on_load_fn, async) {
		var onready;
		;
		onready = function(evnt, req) {
			var $bool21,$bool20,str;
			str = $p['getattr'](req, 'responseText');
			$m['activate_javascript'](str);
			if ((($bool21=!(($bool20=(on_load_fn === null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
				false :
				(typeof $bool20=='object'?
					(typeof $bool20.__nonzero__=='function'?
						$bool20.__nonzero__() :
						(typeof $bool20.__len__=='function'?
							($bool20.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21.__nonzero__=='function'?
							$bool21.__nonzero__() :
							(typeof $bool21.__len__=='function'?
								($bool21.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				on_load_fn();
			}
			return null;
		};
		onready.__name__ = 'onready';

		onready.__bind_type__ = 0;
		onready.__args__ = [null,null,['evnt'],['req']];
		$m['load'](url, null, onready, async);
		return null;
	};
	$m['ajax_eval'].__name__ = 'ajax_eval';

	$m['ajax_eval'].__bind_type__ = 0;
	$m['ajax_eval'].__args__ = [null,null,['url'],['on_load_fn'],['async']];
	$m['__imported__'] = $p['dict']([]);
	$m['ajax_import'] = function(url, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
		if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
		var e,$bool23,script,$iter4_nextval,req,module,$iter4_idx,name_getter,$pyjs_try_err,$8,$bool22,$iter4_array,$7,$iter4_type,$iter4_iter,name;
		;
		if ((($bool22=$m['__imported__']['has_key'](url)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22.__nonzero__=='function'?
						$bool22.__nonzero__() :
						(typeof $bool22.__len__=='function'?
							($bool22.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			module = (typeof ($7=$m['__imported__']).__array != 'undefined'?
				((typeof $7.__array[$8=url]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__(url));
		}
		else {
			req = $m['load'](url, null, null, false);
			module = null;
			name_getter = $p['list']([]);
			if ((($bool23=(names === null)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
					false :
					(typeof $bool23=='object'?
						(typeof $bool23.__nonzero__=='function'?
							$bool23.__nonzero__() :
							(typeof $bool23.__len__=='function'?
								($bool23.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				names = $p['list']([]);
			}
			$iter4_iter = names;
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				name = $iter4_nextval;
				name_getter['append']($p['sprintf']("$pyjs$moduleObject['%s'] = %s;", $p['tuple']([name, name])));
			}
			script = $p['sprintf']('(function ( ) {\n$pyjs$moduleObject={};\n%s;\n%s\nreturn $pyjs$moduleObject;\n})();', $p['tuple']([$p['getattr'](req, 'responseText'), '\n'['join'](name_getter)]));
			try {
				module = $m['eval'](script);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					e = $m['sys']['exc_info']();
					throw ($m['AjaxError']($p['sprintf']('Error in %s: %s', $p['tuple']([url, $p['getattr'](e, 'message')]))));
				}
			}
			$m['__imported__'].__setitem__(url, module);
		}
		$m['inject'](module, namespace, names);
		return null;
	};
	$m['ajax_import'].__name__ = 'ajax_import';

	$m['ajax_import'].__bind_type__ = 0;
	$m['ajax_import'].__args__ = [null,null,['url'],['namespace', null],['names', null]];
	$m['load_script'] = function(url, onload, async) {
		var e,$9,onload_fn,$add6,$add5,$10;
		$wnd.status = (typeof ($add5='Loading ')==typeof ($add6=url) && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			$p['op_add']($add5,$add6));
		onload_fn = function() {
			var $bool25,$bool24,$add8,$add7;
			$wnd.status = (typeof ($add7='Loaded ')==typeof ($add8=url) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8));
			if ((($bool25=!(($bool24=(onload === null)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24.__nonzero__=='function'?
						$bool24.__nonzero__() :
						(typeof $bool24.__len__=='function'?
							($bool24.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
					false :
					(typeof $bool25=='object'?
						(typeof $bool25.__nonzero__=='function'?
							$bool25.__nonzero__() :
							(typeof $bool25.__len__=='function'?
								($bool25.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['eval'](onload);
			}
			return true;
		};
		onload_fn.__name__ = 'onload_fn';

		onload_fn.__bind_type__ = 0;
		onload_fn.__args__ = [null,null];
		e = $m['DOM']['createElement']('script');
		e.src = url;
		e.type = 'text/javascript';
		e.language = 'javascript';
		e.defer = async;
		e.onload = onload_fn;
		(typeof ($9=$doc['getElementsByTagName']('head')).__array != 'undefined'?
			((typeof $9.__array[$10=0]) != 'undefined'?$9.__array[$10]:
				$9.__getitem__($10)):
				$9.__getitem__(0))['appendChild'](e);
		return null;
	};
	$m['load_script'].__name__ = 'load_script';

	$m['load_script'].__bind_type__ = 0;
	$m['load_script'].__args__ = [null,null,['url'],['onload'],['async']];
	$m['running_timeout'] = 0;
	$m['timeout_idname'] = null;
	$m['timeout_url'] = null;
	$m['timeout_on_load_fn'] = null;
	$m['redo_timeout'] = null;
	$m['timeout_id'] = null;
	$m['ajax_dlink_refresh'] = function(idname, url, on_load_fn, timeout) {
		var $cmp2,$bool26,$cmp1;
		$m['timeout_idname'] = idname;
		$m['timeout_url'] = url;
		$m['timeout_on_load_fn'] = on_load_fn;
		$m['redo_timeout'] = timeout;
		if ((($bool26=((($cmp1=$m['running_timeout'])===($cmp2=0)?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
				false :
				(typeof $bool26=='object'?
					(typeof $bool26.__nonzero__=='function'?
						$bool26.__nonzero__() :
						(typeof $bool26.__len__=='function'?
							($bool26.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return null;
		}
		$m['timeout_id'] = setTimeout((typeof do_ajax_dlink_refresh == "undefined"?$m.do_ajax_dlink_refresh:do_ajax_dlink_refresh), timeout);
		$m['running_timeout'] = 1;
		return null;
	};
	$m['ajax_dlink_refresh'].__name__ = 'ajax_dlink_refresh';

	$m['ajax_dlink_refresh'].__bind_type__ = 0;
	$m['ajax_dlink_refresh'].__args__ = [null,null,['idname'],['url'],['on_load_fn'],['timeout']];
	$m['do_ajax_dlink_refresh'] = function() {
		var $eq16,$eq15,$bool27;
		if ((($bool27=(($eq15=(typeof ajax_dlink == "undefined"?$m.ajax_dlink:ajax_dlink)($m['timeout_idname'], $m['timeout_url'], $m['timeout_on_load_fn']))===($eq16=0)&&$eq15===null?true:
			($eq15===null?false:($eq16===null?false:
				((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
					((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
						$eq15==$eq16)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
				false :
				(typeof $bool27=='object'?
					(typeof $bool27.__nonzero__=='function'?
						$bool27.__nonzero__() :
						(typeof $bool27.__len__=='function'?
							($bool27.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['timeout_id'] = null;
			$m['running_timeout'] = 0;
			return null;
		}
		$m['timeout_id'] = null;
		$m['running_timeout'] = 0;
		$m['ajax_dlink_refresh']($m['timeout_idname'], $m['timeout_url'], $m['timeout_on_load_fn'], $m['redo_timeout']);
		return null;
	};
	$m['do_ajax_dlink_refresh'].__name__ = 'do_ajax_dlink_refresh';

	$m['do_ajax_dlink_refresh'].__bind_type__ = 0;
	$m['do_ajax_dlink_refresh'].__args__ = [null,null];
	$m['ajax_dlink'] = function(idname, url, on_load_fn) {
		var body,xhtoj,$bool28,onreadystatechange;
		body = $p['getattr']($doc, 'body');
		if ((($bool28=$m['timeout_id']) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28.__nonzero__=='function'?
						$bool28.__nonzero__() :
						(typeof $bool28.__len__=='function'?
							($bool28.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			clearTimeout($m['timeout_id']);
		}
		onreadystatechange = function() {
			var $bool32,$bool35,$eq20,jsnode,$eq18,$eq19,$bool30,$bool31,$bool36,$bool34,$bool33,txt,$bool29,$eq17;
			if ((($bool29=(($eq17=$p['getattr']((typeof xhtoj == "undefined"?$m.xhtoj:xhtoj), 'readyState'))===($eq18=4)&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29.__nonzero__=='function'?
							$bool29.__nonzero__() :
							(typeof $bool29.__len__=='function'?
								($bool29.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				jsnode = 0;
				if ((($bool30=(($eq19=$p['getattr']((typeof xhtoj == "undefined"?$m.xhtoj:xhtoj), 'status'))===($eq20=200)&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
						false :
						(typeof $bool30=='object'?
							(typeof $bool30.__nonzero__=='function'?
								$bool30.__nonzero__() :
								(typeof $bool30.__len__=='function'?
									($bool30.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					txt = $p['getattr']((typeof xhtoj == "undefined"?$m.xhtoj:xhtoj), 'responseText');
					jsnode = null;
					if ((($bool31=idname) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
							false :
							(typeof $bool31=='object'?
								(typeof $bool31.__nonzero__=='function'?
									$bool31.__nonzero__() :
									(typeof $bool31.__len__=='function'?
										($bool31.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						jsnode = $m['DOM']['getElementById'](idname);
					}
					if ((($bool32=(jsnode === null)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
							false :
							(typeof $bool32=='object'?
								(typeof $bool32.__nonzero__=='function'?
									$bool32.__nonzero__() :
									(typeof $bool32.__len__=='function'?
										($bool32.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						jsnode = $m['DOM']['createElement']('script');
					}
					$m['activate_javascript'](txt);
					if ((($bool34=!(($bool33=(on_load_fn === null)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33.__nonzero__=='function'?
								$bool33.__nonzero__() :
								(typeof $bool33.__len__=='function'?
									($bool33.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
							false :
							(typeof $bool34=='object'?
								(typeof $bool34.__nonzero__=='function'?
									$bool34.__nonzero__() :
									(typeof $bool34.__len__=='function'?
										($bool34.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$wnd['alert'](on_load_fn);
						(typeof test_fn == "undefined"?$m.test_fn:test_fn)();
					}
					return 1;
				}
				else {
					jsnode = $m['DOM']['getElementById'](idname);
					if ((($bool36=!(($bool35=(jsnode === null)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
							false :
							(typeof $bool36=='object'?
								(typeof $bool36.__nonzero__=='function'?
									$bool36.__nonzero__() :
									(typeof $bool36.__len__=='function'?
										($bool36.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						jsnode.innerHTML = $p['getattr']((typeof xhtoj == "undefined"?$m.xhtoj:xhtoj), 'status');
					}
				}
			}
			return null;
		};
		onreadystatechange.__name__ = 'onreadystatechange';

		onreadystatechange.__bind_type__ = 0;
		onreadystatechange.__args__ = [null,null];
		xhtoj = $m['createHttpRequest']();
		xhtoj.onreadystatechange = onreadystatechange;
		xhtoj['open']('GET', url, true);
		xhtoj['send']('');
		return 0;
	};
	$m['ajax_dlink'].__name__ = 'ajax_dlink';

	$m['ajax_dlink'].__bind_type__ = 0;
	$m['ajax_dlink'].__args__ = [null,null,['idname'],['url'],['on_load_fn']];
	return this;
}; /* end dynamic */


/* end module: dynamic */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'sys']
*/
