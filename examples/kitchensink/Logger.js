/* start module: Logger */
$pyjs.loaded_modules['Logger'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Logger'].__was_initialized__) return $pyjs.loaded_modules['Logger'];
	var $m = $pyjs.loaded_modules["Logger"];
	$m.__repr__ = function() { return "<module: Logger>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Logger';
	$m.__name__ = __mod_name__;


	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['Logger'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Logger';
		$cls_definition['instances'] = $p['list']([]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,i,$iter1_iter,$add2,$add3,$add1,$len2,$iter1_array,$add4,$len1,$1,$2,target,$iter1_idx;
			$m['Logger']['instances']['append'](self);
			$m['Grid']['__init__'](self);
			self.targets = $p['list']([]);
			self['targets']['append']('app');
			self['resize']((typeof ($add1=(($len1=$p['getattr'](self, 'targets')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)), 2);
			self['setBorderWidth']('1');
			self.counter = 0;
			self['setHTML'](0, 0, '<b>Log</b>');
			self['setText'](1, 0, 'app');
			$iter1_iter = $p['range']((($len2=$p['getattr'](self, 'targets')) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				target = (typeof ($1=$p['getattr'](self, 'targets')).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i));
				self['setText']((typeof ($add3=i)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)), 0, target);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getSingleton', function() {
    var self = this.prototype;

			return $p['getattr']($m['Logger'], 'singleton');
		}
	, 2, [null,null,['self']]);
		$cls_definition['getSingleton'] = $method;
		$method = $pyjs__bind_method2('setSingleton', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Logger'].singleton = self;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setSingleton'] = $method;
		$method = $pyjs__bind_method2('addTarget', function(target) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}
			var $len4,$add6,$len3,$add5;
			self['targets']['append'](target);
			self['resize']((typeof ($add5=(($len3=$p['getattr'](self, 'targets')) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))))==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)), 2);
			self['setText']((($len4=$p['getattr'](self, 'targets')) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4))))), 0, target);
			return self['targets']['index'](target);
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['addTarget'] = $method;
		$method = $pyjs__bind_method2('write', function(target, message) {
    var cls = this.prototype;
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,logger,$iter2_array;
			$iter2_iter = $p['getattr'](cls, 'instances');
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				logger = $iter2_nextval;
				logger['onMessage'](target, message);
			}
			return null;
		}
	, 2, [null,null,['cls'],['target'],['message']]);
		$cls_definition['write'] = $method;
		$method = $pyjs__bind_method2('onMessage', function(target, message) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
				message = arguments[2];
			}
			var new_text,log_line,$add15,old_text,$eq2,$eq3,$eq1,$eq4,$add14,$bool3,$add16,$bool1,$add10,$add11,$add12,$add13,$add18,target_row,$bool2,$cmp1,$cmp2,$add17,$add7,$add8,$add9,target_idx;
			self.counter = (typeof ($add7=$p['getattr'](self, 'counter'))==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8));
			if ((($bool1=(($eq1=target)===($eq2='')&&$eq1===null?true:
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
				target = 'app';
			}
			target_idx = self['targets']['index'](target);
			if ((($bool2=((($cmp1=target_idx)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				target_idx = self['addTarget'](target);
			}
			target_row = (typeof ($add9=target_idx)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10));
			old_text = self['getHTML'](target_row, 1);
			log_line = (typeof ($add13=(typeof ($add11=$p['getattr'](self, 'counter'))==typeof ($add12=': ') && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12)))==typeof ($add14=message) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
			if ((($bool3=(($eq3=old_text)===($eq4='&nbsp;')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				new_text = log_line;
			}
			else {
				new_text = (typeof ($add17=(typeof ($add15=old_text)==typeof ($add16='<br>') && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16)))==typeof ($add18=log_line) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
			}
			self['setHTML'](target_row, 1, new_text);
			return null;
		}
	, 1, [null,null,['self'],['target'],['message']]);
		$cls_definition['onMessage'] = $method;
		var $bases = new Array($m['Grid']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Logger', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Logger */


/* end module: Logger */


/*
PYJS_DEPS: ['pyjamas.ui.Grid.Grid', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Grid']
*/
