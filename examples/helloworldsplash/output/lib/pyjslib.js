/* start module: pyjslib */
var pyjslib;
$pyjs.loaded_modules['pyjslib'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjslib'].__was_initialized__) return $pyjs.loaded_modules['pyjslib'];
	var $m = pyjslib = $pyjs.loaded_modules["pyjslib"];
	$m.__repr__ = function() { return "<module: pyjslib>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjslib';
	$m.__name__ = __mod_name__;
	var $add3,$add2,$add6,$add4,$add5,$add1,$bool249;
	;
	$m['platform'] = $pyjs.platform;
	$m['sys'] = null;
	$m['dynamic'] = null;
	$m['Ellipsis'] = null;

var $max_float_int = 1;
for (var i = 0; i < 1000; i++) {
    $max_float_int *= 2;
    if ($max_float_int + 1 == $max_float_int) {
        break;
    }
}
$max_int = 0x7fffffff;
$min_int = -0x80000000;

	$m['_handle_exception'] = function(err) {
    $pyjs.loaded_modules['sys'].save_exception_stack();

    if (!$pyjs.in_try_except) {
        var $pyjs_msg = $pyjs.loaded_modules['sys']._get_traceback(err);
        $pyjs.__active_exception_stack__ = null;
        $p['debugReport']($pyjs_msg);
    }
    throw err;
};
;
	$m['_create_class'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments.callee.__args__[3][1];
		if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
		var main_base,$and1,$and2,$and3,$bool1,$bool2,$bool3,$6,$4,$5,$2,$3,$1;
		if ((($bool3=((($bool1=$and1=bases) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1.__nonzero__=='function'?
					$bool1.__nonzero__() :
					(typeof $bool1.__len__=='function'?
						($bool1.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($bool2=$and2=$p['hasattr']((typeof ($1=bases).__array != 'undefined'?
			((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
				$1.__getitem__($2)):
				$1.__getitem__(0)), '__class__')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
			false :
			(typeof $bool2=='object'?
				(typeof $bool2.__nonzero__=='function'?
					$bool2.__nonzero__() :
					(typeof $bool2.__len__=='function'?
						($bool2.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$p['hasattr']((typeof ($3=bases).__array != 'undefined'?
			((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
				$3.__getitem__($4)):
				$3.__getitem__(0)), '__new__'):$and2):$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
			main_base = (typeof ($5=bases).__array != 'undefined'?
				((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(0));
			return main_base['__class__'](clsname, bases, methods);
		}
		return $p['type'](clsname, bases, methods);
	};
	$m['_create_class'].__name__ = '_create_class';

	$m['_create_class'].__bind_type__ = 0;
	$m['_create_class'].__args__ = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['type'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments.callee.__args__[3][1];
		if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
		var $bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$iter1_iter,$8,$iter1_array,$iter1_nextval,$attr1,$attr2,$and4,$and5,$bool6,$bool7,$bool4,$bool5,$7,$bool8,$bool9,$iter1_type,k,mth,$iter1_idx;
		if ((($bool5=((($bool4=$and4=(bases === null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
			false :
			(typeof $bool4=='object'?
				(typeof $bool4.__nonzero__=='function'?
					$bool4.__nonzero__() :
					(typeof $bool4.__len__=='function'?
						($bool4.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?(methods === null):$and4)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			if ((($bool6=$p['isinstance'](clsname, $p['str'])) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				return $p['str'];
			}
			if ((($bool7=$p['isinstance'](clsname, $p['bool'])) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				return $p['bool'];
			}
			if ((($bool8=$p['hasattr'](clsname, '__class__')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				return clsname['__class__'];
			}
			if ((($bool9=$p['isinstance'](clsname, $p['float_int'])) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				return $p['float_int'];
			}
			if ((($bool10=$p['isinstance'](clsname, $p['float'])) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['float'];
			}
			if ((($bool11=typeof clsname == 'number') === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
					false :
					(typeof $bool11=='object'?
						(typeof $bool11.__nonzero__=='function'?
							$bool11.__nonzero__() :
							(typeof $bool11.__len__=='function'?
								($bool11.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['float'];
			}
			if ((($bool12=clsname == null) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				return (typeof NoneType == "undefined"?$m.NoneType:NoneType);
			}
			if ((($bool13=typeof clsname == 'function') === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13.__nonzero__=='function'?
							$bool13.__nonzero__() :
							(typeof $bool13.__len__=='function'?
								($bool13.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return (typeof FunctionType == "undefined"?$m.FunctionType:FunctionType);
			}
			throw ($p['ValueError']($p['sprintf']('Cannot determine type for %r', clsname)));
		}
 var mths = {}; 
		if ((($bool14=methods) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
			$iter1_iter = methods['keys']();
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				k = $iter1_nextval;
				mth = (typeof ($7=methods).__array != 'undefined'?
					((typeof $7.__array[$8=k]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(k));
 mths[k] = mth; 
			}
		}
 var bss = null; 
		if ((($bool15=bases) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
				false :
				(typeof $bool15=='object'?
					(typeof $bool15.__nonzero__=='function'?
						$bool15.__nonzero__() :
						(typeof $bool15.__len__=='function'?
							($bool15.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
bss = bases.__array;
		}
 return $pyjs_type(clsname, bss, mths); 
	};
	$m['type'].__name__ = 'type';

	$m['type'].__bind_type__ = 0;
	$m['type'].__args__ = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['object'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '290314fc0fa4a99f620c75931d876890';
		$method = $pyjs__bind_method2('__setattr__', function(name, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				value = arguments[2];
			}


        if (typeof name != 'string') {
            throw $p['TypeError']("attribute name must be string");
        }
        if (attrib_remap.indexOf(name) >= 0) {
            name = '$$' + name;
        }
        if (typeof self[name] != 'undefined'
            && self.__is_instance__
            && self[name] !== null
            && typeof self[name].__set__ == 'function') {
            self[name].__set__(self, value);
        } else {
            self[name] = value;
        }
        
		}
	, 1, [null,null,['self'],['name'],['value']]);
		$cls_definition['__setattr__'] = $method;
		var $bases = new Array();
		return $pyjs_type('object', $bases, $cls_definition);
	})();
	$m['object'].__str__ = function (self) {
    if (typeof self == 'undefined') {
        self = this;
    }
    var s;
    if (self.__is_instance__ === true) {
        s = "instance of ";
    } else if (self.__is_instance__ === false) {
        s = "class ";
    } else {
        s = "javascript " + typeof self + " ";
    }
    if (self.__module__) {
        s += self.__module__ + ".";
    }
    if (typeof self.__name__ != 'undefined') {
        return s + self.__name__;
    }
    return s + "<unknown>";
};
	$m['basestring'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'd18c09c07974ad0482e58163c0d89f91';
		var $bases = new Array($m['object']);
		return $pyjs_type('basestring', $bases, $cls_definition);
	})();
	$m['TypeClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'e8d06874b7a525e88b4475846b899d0b';
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var cls = this;
			} else {
				var cls = arguments[0];
			}
			var $attr3,$attr4;
			return $p['sprintf']("<type '%s'>", cls['__name__']);
		}
	, 1, [null,null,['cls']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('TypeClass', $bases, $cls_definition);
	})();
	$m['NoneType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '9b11dddee0e4d3700697e2a59837056b';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('NoneType', $bases, $cls_definition);
	})();
	$m['ModuleType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'e0869adaec0f7134f3b2f1f7b6c19d20';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('ModuleType', $bases, $cls_definition);
	})();
	$m['FunctionType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '6257c9b228b37d998fb7f2ad28bffe0c';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('FunctionType', $bases, $cls_definition);
	})();
	$m['CodeType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '2b999be849e34a3112bbd7b0ece962c7';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('CodeType', $bases, $cls_definition);
	})();
	$m['TracebackType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '8c2b760a0b54fd4020439a971775ea79';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('TracebackType', $bases, $cls_definition);
	})();
	$m['FrameType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '90ca219935e6d581a320af8985cdaf2c';
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('FrameType', $bases, $cls_definition);
	})();
	$m['EllipsisType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'b0488c929bad847063fc19df4cc4ca98';
		$method = $pyjs__bind_method2('__new__', function(cls) {
			var $bool16;
			if ((($bool16=($m['Ellipsis'] === null)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				return $m['object']['__new__'](cls);
			}
			else {
				return $m['Ellipsis'];
			}
			return null;
		}
	, 3, [null,null,['cls']]);
		$cls_definition['__new__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'Ellipsis';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'Ellipsis';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($m['TypeClass']);
		return $pyjs_type('EllipsisType', $bases, $cls_definition);
	})();
	$m['op_is'] = function(a, b) {


    if (a === b) return true;
    if (a !== null && b !== null) {
        switch ((a.__number__ << 8) | b.__number__) {
            case 0x0101:
                return a == b;
            case 0x0202:
                return a.__v == b.__v;
            case 0x0404:
                return a.__cmp__(b) == 0;
        }
    }
    return false;

	};
	$m['op_is'].__name__ = 'op_is';

	$m['op_is'].__bind_type__ = 0;
	$m['op_is'].__args__ = [null,null,['a'],['b']];
	$m['op_eq'] = function(a, b) {


    if (a === null) {
        if (b === null) return true;
        return false;
    }
    if (b === null) {
        return false;
    }
    if (a === b) {
        if (a.__is_instance__ === false &&
            b.__is_instance__ === false) {
            return true;
        }
    }
    switch ((a.__number__ << 8) | b.__number__) {
        case 0x0101:
        case 0x0401:
            return a == b;
        case 0x0102:
            return a == b.__v;
        case 0x0201:
            return a.__v == b;
        case 0x0202:
            return a.__v == b.__v;
        case 0x0104:
        case 0x0204:
            a = new $p['float_int'](a.valueOf());
        case 0x0404:
            return a.__cmp__(b) == 0;
        case 0x0402:
            return a.__cmp__(new $p['float_int'](b.valueOf())) == 0;
    }
    if (typeof a == 'object' || typeof a == 'function') {
        if (typeof a.__eq__ == 'function') {
            if (typeof b.__eq__ != 'function') {
                return false;
            }
            if (a.__eq__ === b.__eq__) {
                return a.__eq__(b);
            }
            if ($p['_isinstance'](a, b)) {
                return a.__eq__(b);
            }
            return false;
        }
        if (typeof a.__cmp__ == 'function') {
            if (typeof b.__cmp__ != 'function') {
                return false;
            }
            if (a.__cmp__ === b.__cmp__) {
                return a.__cmp__(b) == 0;
            }
            if ($p['_isinstance'](a, b)) {
                return a.__cmp__(b) == 0;
            }
            return false;
        }
    } else if (typeof b == 'object' || typeof b == 'function') {
        if (typeof b.__eq__ == 'function') {
            if ($p['_isinstance'](a, b)) {
                return b.__eq__(a);
            }
            return false;
        }
        if (typeof b.__cmp__ == 'function') {
            // typeof bXXX.__cmp__ != 'function'
            // aXXX.__cmp__ !== bXXX.__cmp__
            if ($p['_isinstance'](a, b)) {
                return b.__cmp__(a) == 0;
            }
            return false;
        }
    }
    return a == b;
    
	};
	$m['op_eq'].__name__ = 'op_eq';

	$m['op_eq'].__bind_type__ = 0;
	$m['op_eq'].__args__ = [null,null,['a'],['b']];
	$m['op_uadd'] = function(v) {


    switch (v.__number__) {
        case 0x01:
        case 0x02:
        case 0x04:
            return v;
    }
    if (v!== null) {
        if (typeof v['__pos__'] == 'function') return v.__pos__();
    }

		throw ($p['TypeError']($p['sprintf']("bad operand type for unary +: '%r'", v)));
		return null;
	};
	$m['op_uadd'].__name__ = 'op_uadd';

	$m['op_uadd'].__bind_type__ = 0;
	$m['op_uadd'].__args__ = [null,null,['v']];
	$m['op_usub'] = function(v) {


    switch (v.__number__) {
        case 0x01:
            return -v;
        case 0x02:
            return new $p['float_int'](-v);
    }
    if (v!== null) {
        if (typeof v['__neg__'] == 'function') return v.__neg__();
    }

		throw ($p['TypeError']($p['sprintf']("bad operand type for unary -: '%r'", v)));
		return null;
	};
	$m['op_usub'].__name__ = 'op_usub';

	$m['op_usub'].__bind_type__ = 0;
	$m['op_usub'].__args__ = [null,null,['v']];
	$m['__op_add'] = function(x, y) {


        return (typeof (x)==typeof (y) &&
                (typeof x=='number'||typeof x=='string')?
                x+y:
                $p['op_add'](x,y));
    
	};
	$m['__op_add'].__name__ = '__op_add';

	$m['__op_add'].__bind_type__ = 0;
	$m['__op_add'].__args__ = [null,null,['x'],['y']];
	$m['op_add'] = function(x, y) {


    if (x!== null && y!== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x+ y;
            case 0x0102:
                return x+ y.__v;
            case 0x0201:
                return x.__v + y;
            case 0x0202:
                return new $p['float_int'](x.__v + y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__add(y);
            case 0x0402:
                return x.__add(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__add(y);
        }
        if (!x.__number__) {
            if (typeof x== 'string' && typeof y== 'string') return x+ y;
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__add__'] == 'function')
                return y.__add__(x);
            if (typeof x['__add__'] == 'function') return x.__add__(y);
        }
        if (!y.__number__ && typeof y['__radd__'] == 'function') return y.__radd__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for +: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_add'].__name__ = 'op_add';

	$m['op_add'].__bind_type__ = 0;
	$m['op_add'].__args__ = [null,null,['x'],['y']];
	$m['__op_sub'] = function(x, y) {


        return (typeof (x)==typeof (y) &&
                (typeof x=='number'||typeof x=='string')?
                x-y:
                $p['op_sub'](x,y));
    
	};
	$m['__op_sub'].__name__ = '__op_sub';

	$m['__op_sub'].__bind_type__ = 0;
	$m['__op_sub'].__args__ = [null,null,['x'],['y']];
	$m['op_sub'] = function(x, y) {


    if (x!== null && y!== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x- y;
            case 0x0102:
                return x- y.__v;
            case 0x0201:
                return x.__v - y;
            case 0x0202:
                return new $p['float_int'](x.__v - y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__sub(y);
            case 0x0402:
                return x.__sub(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__sub(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__sub__'] == 'function')
                return y.__sub__(x);
            if (typeof x['__sub__'] == 'function') return x.__sub__(y);
        }
        if (!y.__number__ && typeof y['__rsub__'] == 'function') return y.__rsub__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for -: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_sub'].__name__ = 'op_sub';

	$m['op_sub'].__bind_type__ = 0;
	$m['op_sub'].__args__ = [null,null,['x'],['y']];
	$m['op_floordiv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y.__v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x.__v / y);
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                return new $p['float_int'](Math.floor(x.__v / y.__v));
            case 0x0204:
                return (new $p['float_int'](x.__v)).__floordiv(y);
            case 0x0402:
                return x.__floordiv(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__floordiv(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__floordiv__'] == 'function')
                return y.__floordiv__(x);
            if (typeof x['__floordiv__'] == 'function') return x.__floordiv__(y);
        }
        if (!y.__number__ && typeof y['__rfloordiv__'] == 'function') return y.__rfloordiv__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for //: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_floordiv'].__name__ = 'op_floordiv';

	$m['op_floordiv'].__bind_type__ = 0;
	$m['op_floordiv'].__args__ = [null,null,['x'],['y']];
	$m['op_div'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y.__v;
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y;
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return new $p['float_int'](x.__v / y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__div(y);
            case 0x0402:
                return x.__div(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__div(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__div__'] == 'function')
                return y.__div__(x);
            if (typeof x['__div__'] == 'function') return x.__div__(y);
        }
        if (!y.__number__ && typeof y['__rdiv__'] == 'function') return y.__rdiv__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for /: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_div'].__name__ = 'op_div';

	$m['op_div'].__bind_type__ = 0;
	$m['op_div'].__args__ = [null,null,['x'],['y']];
	$m['op_truediv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
            case 0x0204:
            case 0x0402:
            case 0x0404:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y.__v;
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y;
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y.__v;
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__truediv__'] == 'function')
                return y.__truediv__(x);
            if (typeof x['__truediv__'] == 'function') return x.__truediv__(y);
        }
        if (!y.__number__ && typeof y['__rtruediv__'] == 'function') return y.__rtruediv__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for /: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_truediv'].__name__ = 'op_truediv';

	$m['op_truediv'].__bind_type__ = 0;
	$m['op_truediv'].__args__ = [null,null,['x'],['y']];
	$m['op_mul'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x * y;
            case 0x0102:
                return x * y.__v;
            case 0x0201:
                return x.__v * y;
            case 0x0202:
                return new $p['float_int'](x.__v * y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__mul(y);
            case 0x0402:
                return x.__mul(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__mul(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__mul__'] == 'function')
                return y.__mul__(x);
            if (typeof x['__mul__'] == 'function') return x.__mul__(y);
        }
        if (!y.__number__ && typeof y['__rmul__'] == 'function') return y.__rmul__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for *: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mul'].__name__ = 'op_mul';

	$m['op_mul'].__bind_type__ = 0;
	$m['op_mul'].__args__ = [null,null,['x'],['y']];
	$m['op_mod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y;
                return (v < 0 && y > 0 ? v + y : v);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y.__v;
                return (v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x.__v % y;
                return (v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                var v = x.__v % y.__v;
                return new $p['float_int'](v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__mod(y);
            case 0x0402:
                return x.__mod(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__mod(y);
        }
        if (typeof x == 'string') {
            return $p['sprintf'](x, y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__mod__'] == 'function')
                return y.__mod__(x);
            if (typeof x['__mod__'] == 'function') return x.__mod__(y);
        }
        if (!y.__number__ && typeof y['__rmod__'] == 'function') return y.__rmod__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for %: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mod'].__name__ = 'op_mod';

	$m['op_mod'].__bind_type__ = 0;
	$m['op_mod'].__args__ = [null,null,['x'],['y']];
	$m['op_pow'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x, y);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x,y.__v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x.__v,y);
            case 0x0202:
                return x.__pow__(y);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__pow(y);
            case 0x0402:
                return x.__pow(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__pow(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__pow__'] == 'function')
                return y.__pow__(x);
            if (typeof x['__pow__'] == 'function') return x.__pow__(y);
        }
        if (!y.__number__ && typeof y['__rpow__'] == 'function') return y.__rpow__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for %: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_pow'].__name__ = 'op_pow';

	$m['op_pow'].__bind_type__ = 0;
	$m['op_pow'].__args__ = [null,null,['x'],['y']];
	$m['op_invert'] = function(v) {


    if (v !== null) {
        if (typeof v['__invert__'] == 'function') return v.__invert__();
    }

		throw ($p['TypeError']($p['sprintf']("bad operand type for unary -: '%r'", v)));
		return null;
	};
	$m['op_invert'].__name__ = 'op_invert';

	$m['op_invert'].__bind_type__ = 0;
	$m['op_invert'].__args__ = [null,null,['v']];
	$m['op_bitshiftleft'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__lshift__(y);
            case 0x0204:
                return y.__rlshift__(x);
            case 0x0402:
                return x.__lshift(y.__v);
            case 0x0404:
                return x.__lshift(y.valueOf());
        }
        if (typeof x['__lshift__'] == 'function') {
            var v = x.__lshift__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rlshift__'] != 'undefined') return y.__rlshift__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for <<: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftleft'].__name__ = 'op_bitshiftleft';

	$m['op_bitshiftleft'].__bind_type__ = 0;
	$m['op_bitshiftleft'].__args__ = [null,null,['x'],['y']];
	$m['op_bitshiftright'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__rshift__(y);
            case 0x0204:
                return y.__rrshift__(x);
            case 0x0402:
                return x.__rshift(y.__v);
            case 0x0404:
                return x.__rshift(y.valueOf());
        }
        if (typeof x['__rshift__'] == 'function') {
            var v = x.__rshift__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rrshift__'] != 'undefined') return y.__rrshift__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for >>: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftright'].__name__ = 'op_bitshiftright';

	$m['op_bitshiftright'].__bind_type__ = 0;
	$m['op_bitshiftright'].__args__ = [null,null,['x'],['y']];
	$m['op_bitand2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__and__(y);
            case 0x0204:
                return y.__and(new $p['float_int'](x));
            case 0x0402:
                return x.__and(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__and(y);
        }
        if (typeof x['__and__'] == 'function') {
            var v = x.__and__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rand__'] != 'undefined') return y.__rand__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for &: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitand2'].__name__ = 'op_bitand2';

	$m['op_bitand2'].__bind_type__ = 0;
	$m['op_bitand2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitand'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__and__'] == 'function') {
                r = res;
                res = res.__and__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rand__'] == 'function') {
                    res = args[i].__rand__(r);
                }
            } else if (typeof args[i]['__rand__'] == 'function') {
                res = args[i].__rand__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']((typeof ($add1='unsupported operand type(s) for &: ')==typeof ($add2=', '['join'](function(){
		var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$iter2_idx,$iter2_array;
	$collcomp1 = $p['list']();
	$iter2_iter = $p['list']((typeof args == "undefined"?$m.args:args));
	if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
		$iter2_type = 0;
	} else {
		$iter2_iter = $iter2_iter.__iter__();
		$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter2_idx = 0;
	while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
		$m['a'] = $iter2_nextval;
		$collcomp1['append']($p['repr']($m['a']));
	}

	return $collcomp1;}())) && (typeof $add1=='number'||typeof $add1=='string')?
		$add1+$add2:
		$m['op_add']($add1,$add2))));

};

	$m['op_bitxor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__xor__(y);
            case 0x0204:
                return y.__xor(new $p['float_int'](x));
            case 0x0402:
                return x.__xor(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__xor(y);
        }
        if (typeof x['__xor__'] == 'function') {
            var v = x.__xor__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rxor__'] != 'undefined') return y.__rxor__(x);
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for ^: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitxor2'].__name__ = 'op_bitxor2';

	$m['op_bitxor2'].__bind_type__ = 0;
	$m['op_bitxor2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitxor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__xor__'] == 'function') {
                r = res;
                res = res.__xor__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rxor__'] == 'function') {
                    res = args[i].__rxor__(r);
                }
            } else if (typeof args[i]['__rxor__'] == 'function') {
                res = args[i].__rxor__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']((typeof ($add3='unsupported operand type(s) for ^: ')==typeof ($add4=', '['join'](function(){
		var $iter3_idx,$iter3_nextval,$iter3_array,$collcomp2,$iter3_iter,$iter3_type;
	$collcomp2 = $p['list']();
	$iter3_iter = $m.args;
	if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
		$iter3_type = 0;
	} else {
		$iter3_iter = $iter3_iter.__iter__();
		$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter3_idx = 0;
	while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
		$m['a'] = $iter3_nextval;
		$collcomp2['append']($p['repr']($m['a']));
	}

	return $collcomp2;}())) && (typeof $add3=='number'||typeof $add3=='string')?
		$add3+$add4:
		$m['op_add']($add3,$add4))));

};

	$m['op_bitor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__or__(y);
            case 0x0204:
                return y.__or(new $p['float_int'](x));
            case 0x0402:
                return x.__or(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__or(y);
        }
        if (typeof x['__or__'] == 'function') {
            var v = x.__or__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__ror__'] != 'undefined') {
            return y.__ror__(x);
        }
    }

		throw ($p['TypeError']($p['sprintf']("unsupported operand type(s) for |: '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitor2'].__name__ = 'op_bitor2';

	$m['op_bitor2'].__bind_type__ = 0;
	$m['op_bitor2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__or__'] == 'function') {
                r = res;
                res = res.__or__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__ror__'] == 'function') {
                    res = args[i].__ror__(r);
                }
            } else if (typeof args[i]['__ror__'] == 'function') {
                res = args[i].__ror__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']((typeof ($add5='unsupported operand type(s) for |: ')==typeof ($add6=', '['join'](function(){
		var $iter4_nextval,$collcomp3,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp3 = $p['list']();
	$iter4_iter = $m.args;
	if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
		$iter4_type = 0;
	} else {
		$iter4_iter = $iter4_iter.__iter__();
		$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter4_idx = 0;
	while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
		$m['a'] = $iter4_nextval;
		$collcomp3['append']($p['repr']($m['a']));
	}

	return $collcomp3;}())) && (typeof $add5=='number'||typeof $add5=='string')?
		$add5+$add6:
		$m['op_add']($add5,$add6))));

};

	$m['___import___'] = function(path, context, module_name, get_base) {
		if (typeof module_name == 'undefined') module_name=arguments.callee.__args__[4][1];
		if (typeof get_base == 'undefined') get_base=arguments.callee.__args__[5][1];
		var $bool18,$bool19,$and13,$bool17,$and16,$and8,$and9,$and6,$and7,pyjslib,path_parts,inContextImportName,$bool47,$bool46,module,$and11,$bool42,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$bool29,$bool28,$attr9,$attr8,$bool45,$bool44,$bool43,contextTopName,$bool41,$bool40,$attr5,$attr7,$attr6,$bool49,$and17,$bool48,$add14,topName,inContextTopName,$and10,$bool32,$bool33,$bool30,$bool31,$bool36,$bool37,$bool34,$bool35,$and14,$attr19,$bool38,$bool39,$add11,$bool54,$bool55,$bool56,$bool57,$bool50,$bool51,$bool52,$bool53,$and15,$bool58,$bool59,$eq10,$add18,objName,importName,$bool61,$bool60,$bool63,$bool62,$attr27,$bool64,$bool66,$9,$14,$15,$16,$17,$10,$11,$12,$13,$18,$19,$and12,$add7,$add8,$add9,save_track_module,parentName,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,is_module_object,$attr28,$bool65,in_context,$20,$sub2,$sub1,$eq8,$eq9,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,sys,$add15,$add16,$add17,$add10,$attr18,$add12,$add13,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$cmp4,$cmp1,$cmp3,$cmp2,depth,inContextParentName;
		save_track_module = $pyjs.track.module;
		sys = $pyjs.loaded_modules['sys'];
		pyjslib = $pyjs.loaded_modules['pyjslib'];
		if ((($bool17=sys.__was_initialized__ != true) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
			module = $pyjs.loaded_modules[path];
			module();
$pyjs.track.module = save_track_module;
			if ((($bool18=(($eq1=path)===($eq2='sys')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				module.modules = $p['dict']($p['dict']([['pyjslib', pyjslib], ['__builtin__', pyjslib], ['builtins', pyjslib], ['sys', module]]));
$pyjs.loaded_modules['__builtin__'] = pyjslib;
$pyjs.loaded_modules['builtins'] = pyjslib;
			}
			return module;
		}
		importName = path;
		is_module_object = false;
		path_parts = path['__split']('.');
		depth = path_parts['length'];
		topName = path_parts[0];
		objName = path_parts[path_parts.length-1];
		parentName = path_parts['slice'](0, (typeof ($sub1=path_parts['length'])==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			$m['op_sub']($sub1,$sub2)))['join']('.');
		if ((($bool19=(context === null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
			in_context = false;
		}
		else {
			in_context = true;
			inContextImportName = (typeof ($add9=(typeof ($add7=context)==typeof ($add8='.') && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$m['op_add']($add7,$add8)))==typeof ($add10=importName) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$m['op_add']($add9,$add10));
			if ((($bool21=!(($bool20=parentName) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				inContextParentName = context;
			}
			else {
				inContextParentName = (typeof ($add13=(typeof ($add11=context)==typeof ($add12='.') && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$m['op_add']($add11,$add12)))==typeof ($add14=parentName) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$m['op_add']($add13,$add14));
			}
			inContextTopName = (typeof ($add17=(typeof ($add15=context)==typeof ($add16='.') && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$m['op_add']($add15,$add16)))==typeof ($add18=topName) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$m['op_add']($add17,$add18));
			contextTopName = context.__split('.')[0];
			if ((($bool23=((($bool22=$and6=((($cmp1=depth)===($cmp2=1)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22.__nonzero__=='function'?
						$bool22.__nonzero__() :
						(typeof $bool22.__len__=='function'?
							($bool22.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?sys['modules']['has_key'](inContextParentName):$and6)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				module = (typeof ($9=sys['modules']).__array != 'undefined'?
					((typeof $9.__array[$10=inContextParentName]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(inContextParentName));
				if ((($bool24=typeof module[objName] != 'undefined') === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
						false :
						(typeof $bool24=='object'?
							(typeof $bool24.__nonzero__=='function'?
								$bool24.__nonzero__() :
								(typeof $bool24.__len__=='function'?
									($bool24.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool25=get_base) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			else if ((($bool26=sys['modules']['has_key'](inContextImportName)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				if ((($bool27=get_base) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
					return $pyjs.loaded_modules[inContextTopName];
				}
				return (typeof ($11=sys['modules']).__array != 'undefined'?
					((typeof $11.__array[$12=inContextImportName]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(inContextImportName));
			}
			else if ((($bool29=((($bool28=$and8=((($cmp3=depth)===($cmp4=1)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28.__nonzero__=='function'?
						$bool28.__nonzero__() :
						(typeof $bool28.__len__=='function'?
							($bool28.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?typeof (module = $pyjs.loaded_modules[inContextParentName]) != 'undefined':$and8)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				sys['modules'].__setitem__(inContextParentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if ((($bool30=typeof module[objName] != 'undefined') === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					if ((($bool31=get_base) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			if ((($bool32=sys['modules']['has_key'](inContextImportName)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				if ((($bool33=get_base) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33.__nonzero__=='function'?
								$bool33.__nonzero__() :
								(typeof $bool33.__len__=='function'?
									($bool33.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return (typeof ($13=sys['modules']).__array != 'undefined'?
					((typeof $13.__array[$14=inContextImportName]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__(inContextImportName));
			}
			if ((($bool34=typeof (module = $pyjs.loaded_modules[inContextImportName]) != 'undefined') === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				sys['modules'].__setitem__(inContextImportName, module);
module.__was_initialized__ = false;
				module(module_name);
$pyjs.track.module = save_track_module;
				if ((($bool35=get_base) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
						false :
						(typeof $bool35=='object'?
							(typeof $bool35.__nonzero__=='function'?
								$bool35.__nonzero__() :
								(typeof $bool35.__len__=='function'?
									($bool35.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return module;
			}
			if ((($bool37=!(($bool36=sys['modules']['has_key'](inContextTopName)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
				false :
				(typeof $bool36=='object'?
					(typeof $bool36.__nonzero__=='function'?
						$bool36.__nonzero__() :
						(typeof $bool36.__len__=='function'?
							($bool36.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37.__nonzero__=='function'?
							$bool37.__nonzero__() :
							(typeof $bool37.__len__=='function'?
								($bool37.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool38=typeof (module = $pyjs.loaded_modules[inContextTopName]) != 'function') === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38.__nonzero__=='function'?
								$bool38.__nonzero__() :
								(typeof $bool38.__len__=='function'?
									($bool38.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					in_context = false;
					if ((($bool39=$pyjs.options.dynamic_loading) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
							false :
							(typeof $bool39=='object'?
								(typeof $bool39.__nonzero__=='function'?
									$bool39.__nonzero__() :
									(typeof $bool39.__len__=='function'?
										($bool39.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						module = (typeof __dynamic_load__ == "undefined"?$m.__dynamic_load__:__dynamic_load__)(inContextTopName);
						if ((($bool40=typeof module == 'function') === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
								false :
								(typeof $bool40=='object'?
									(typeof $bool40.__nonzero__=='function'?
										$bool40.__nonzero__() :
										(typeof $bool40.__len__=='function'?
											($bool40.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							in_context = true;
							if ((($bool41=(($eq3=depth)===($eq4=1)&&$eq3===null?true:
								($eq3===null?false:($eq4===null?false:
									((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
										((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
											$eq3==$eq4)))))) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
									false :
									(typeof $bool41=='object'?
										(typeof $bool41.__nonzero__=='function'?
											$bool41.__nonzero__() :
											(typeof $bool41.__len__=='function'?
												($bool41.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								module(module_name);
$pyjs.track.module = save_track_module;
								return module;
							}
							else {
								module(null);
								if ((($bool43=((($bool42=$and10=(($eq5=depth)===($eq6=2)&&$eq5===null?true:
									($eq5===null?false:($eq6===null?false:
										((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
											((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
												$eq5==$eq6)))))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
									false :
									(typeof $bool42=='object'?
										(typeof $bool42.__nonzero__=='function'?
											$bool42.__nonzero__() :
											(typeof $bool42.__len__=='function'?
												($bool42.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )?typeof module[objName] != 'undefined':$and10)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
										false :
										(typeof $bool43=='object'?
											(typeof $bool43.__nonzero__=='function'?
												$bool43.__nonzero__() :
												(typeof $bool43.__len__=='function'?
													($bool43.__len__()>0 ?
														true :
														false) :
													true ) ) :
											 true ) )) {
									if ((($bool44=get_base) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
											false :
											(typeof $bool44=='object'?
												(typeof $bool44.__nonzero__=='function'?
													$bool44.__nonzero__() :
													(typeof $bool44.__len__=='function'?
														($bool44.__len__()>0 ?
															true :
															false) :
														true ) ) :
												 true ) )) {
										return $pyjs.loaded_modules[inContextTopName];
									}
									return module[objName];
								}
							}
						}
					}
				}
			}
			if ((($bool45=in_context) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45.__nonzero__=='function'?
							$bool45.__nonzero__() :
							(typeof $bool45.__len__=='function'?
								($bool45.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				importName = inContextImportName;
				parentName = inContextParentName;
				topName = inContextTopName;
			}
		}
		if ((($bool47=!(($bool46=in_context) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
			false :
			(typeof $bool46=='object'?
				(typeof $bool46.__nonzero__=='function'?
					$bool46.__nonzero__() :
					(typeof $bool46.__len__=='function'?
						($bool46.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
				false :
				(typeof $bool47=='object'?
					(typeof $bool47.__nonzero__=='function'?
						$bool47.__nonzero__() :
						(typeof $bool47.__len__=='function'?
							($bool47.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool49=((($bool48=$and12=parentName) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
				false :
				(typeof $bool48=='object'?
					(typeof $bool48.__nonzero__=='function'?
						$bool48.__nonzero__() :
						(typeof $bool48.__len__=='function'?
							($bool48.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?sys['modules']['has_key'](parentName):$and12)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49.__nonzero__=='function'?
							$bool49.__nonzero__() :
							(typeof $bool49.__len__=='function'?
								($bool49.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				module = (typeof ($15=sys['modules']).__array != 'undefined'?
					((typeof $15.__array[$16=parentName]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(parentName));
				if ((($bool50=typeof module[objName] != 'undefined') === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50.__nonzero__=='function'?
								$bool50.__nonzero__() :
								(typeof $bool50.__len__=='function'?
									($bool50.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool51=get_base) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
							false :
							(typeof $bool51=='object'?
								(typeof $bool51.__nonzero__=='function'?
									$bool51.__nonzero__() :
									(typeof $bool51.__len__=='function'?
										($bool51.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			else if ((($bool52=sys['modules']['has_key'](importName)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52.__nonzero__=='function'?
							$bool52.__nonzero__() :
							(typeof $bool52.__len__=='function'?
								($bool52.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool53=get_base) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
						false :
						(typeof $bool53=='object'?
							(typeof $bool53.__nonzero__=='function'?
								$bool53.__nonzero__() :
								(typeof $bool53.__len__=='function'?
									($bool53.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[topName];
				}
				return (typeof ($17=sys['modules']).__array != 'undefined'?
					((typeof $17.__array[$18=importName]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__(importName));
			}
			else if ((($bool55=((($bool54=$and14=parentName) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
				false :
				(typeof $bool54=='object'?
					(typeof $bool54.__nonzero__=='function'?
						$bool54.__nonzero__() :
						(typeof $bool54.__len__=='function'?
							($bool54.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?typeof (module = $pyjs.loaded_modules[parentName]) != 'undefined':$and14)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55.__nonzero__=='function'?
							$bool55.__nonzero__() :
							(typeof $bool55.__len__=='function'?
								($bool55.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sys['modules'].__setitem__(parentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if ((($bool56=typeof module[objName] != 'undefined') === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
						false :
						(typeof $bool56=='object'?
							(typeof $bool56.__nonzero__=='function'?
								$bool56.__nonzero__() :
								(typeof $bool56.__len__=='function'?
									($bool56.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool57=get_base) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
							false :
							(typeof $bool57=='object'?
								(typeof $bool57.__nonzero__=='function'?
									$bool57.__nonzero__() :
									(typeof $bool57.__len__=='function'?
										($bool57.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			if ((($bool58=sys['modules']['has_key'](importName)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58.__nonzero__=='function'?
							$bool58.__nonzero__() :
							(typeof $bool58.__len__=='function'?
								($bool58.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool59=get_base) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
						false :
						(typeof $bool59=='object'?
							(typeof $bool59.__nonzero__=='function'?
								$bool59.__nonzero__() :
								(typeof $bool59.__len__=='function'?
									($bool59.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[topName];
				}
				return (typeof ($19=sys['modules']).__array != 'undefined'?
					((typeof $19.__array[$20=importName]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__(importName));
			}
			if ((($bool60=typeof (module = $pyjs.loaded_modules[importName]) != 'undefined') === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
					false :
					(typeof $bool60=='object'?
						(typeof $bool60.__nonzero__=='function'?
							$bool60.__nonzero__() :
							(typeof $bool60.__len__=='function'?
								($bool60.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sys['modules'].__setitem__(importName, module);
				if ((($bool62=((($bool61=$and16=!(($eq7=importName)===($eq8='pyjslib')&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61.__nonzero__=='function'?
							$bool61.__nonzero__() :
							(typeof $bool61.__len__=='function'?
								($bool61.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($eq9=importName)===($eq10='sys')&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10))))):$and16)) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62.__nonzero__=='function'?
								$bool62.__nonzero__() :
								(typeof $bool62.__len__=='function'?
									($bool62.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
module.__was_initialized__ = false;
				}
				module(module_name);
$pyjs.track.module = save_track_module;
				if ((($bool63=get_base) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
						false :
						(typeof $bool63=='object'?
							(typeof $bool63.__nonzero__=='function'?
								$bool63.__nonzero__() :
								(typeof $bool63.__len__=='function'?
									($bool63.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		if ((($bool64=$pyjs.options.dynamic_loading) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
				false :
				(typeof $bool64=='object'?
					(typeof $bool64.__nonzero__=='function'?
						$bool64.__nonzero__() :
						(typeof $bool64.__len__=='function'?
							($bool64.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			module = (typeof __dynamic_load__ == "undefined"?$m.__dynamic_load__:__dynamic_load__)(importName);
			if ((($bool65=typeof module== 'function') === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
					false :
					(typeof $bool65=='object'?
						(typeof $bool65.__nonzero__=='function'?
							$bool65.__nonzero__() :
							(typeof $bool65.__len__=='function'?
								($bool65.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				module(module_name);
$pyjs.track.module = save_track_module;
				if ((($bool66=get_base) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
						false :
						(typeof $bool66=='object'?
							(typeof $bool66.__nonzero__=='function'?
								$bool66.__nonzero__() :
								(typeof $bool66.__len__=='function'?
									($bool66.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		throw ($p['ImportError']($p['sprintf']('No module named %s, %s in context %s', $p['tuple']([importName, path, context]))));
		return null;
	};
	$m['___import___'].__name__ = '___import___';

	$m['___import___'].__bind_type__ = 0;
	$m['___import___'].__args__ = [null,null,['path'],['context'],['module_name', null],['get_base', true]];
	$m['__dynamic_load__'] = function(importName) {
		var $bool72,module,$bool71,$add29,$add28,$bool67,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$pyjs_try_err,$or1,$or3,$or2,$bool69,$bool68,$bool70,$add19,$add30;
		;
		module = $pyjs.loaded_modules[importName];
		if ((($bool69=((($bool67=$or1=($m['sys'] === null)) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
			false :
			(typeof $bool67=='object'?
				(typeof $bool67.__nonzero__=='function'?
					$bool67.__nonzero__() :
					(typeof $bool67.__len__=='function'?
						($bool67.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or1:((($bool68=$or2=($m['dynamic'] === null)) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
			false :
			(typeof $bool68=='object'?
				(typeof $bool68.__nonzero__=='function'?
					$bool68.__nonzero__() :
					(typeof $bool68.__len__=='function'?
						($bool68.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$or2:$m['__nondynamic_modules__']['has_key'](importName)))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
				false :
				(typeof $bool69=='object'?
					(typeof $bool69.__nonzero__=='function'?
						$bool69.__nonzero__() :
						(typeof $bool69.__len__=='function'?
							($bool69.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return module;
		}
		if ((($bool70=typeof module== 'undefined') === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
				false :
				(typeof $bool70=='object'?
					(typeof $bool70.__nonzero__=='function'?
						$bool70.__nonzero__() :
						(typeof $bool70.__len__=='function'?
							($bool70.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			try {
				$m['dynamic']['ajax_import']((typeof ($add25=(typeof ($add23=(typeof ($add21=(typeof ($add19='lib/')==typeof ($add20=importName) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					$m['op_add']($add19,$add20)))==typeof ($add22='.__') && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					$m['op_add']($add21,$add22)))==typeof ($add24=$m['platform']) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					$m['op_add']($add23,$add24)))==typeof ($add26='__.js') && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					$m['op_add']($add25,$add26)));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		if ((($bool71=typeof module== 'undefined') === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
				false :
				(typeof $bool71=='object'?
					(typeof $bool71.__nonzero__=='function'?
						$bool71.__nonzero__() :
						(typeof $bool71.__len__=='function'?
							($bool71.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			try {
				$m['dynamic']['ajax_import']((typeof ($add29=(typeof ($add27='lib/')==typeof ($add28=importName) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					$m['op_add']($add27,$add28)))==typeof ($add30='.js') && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					$m['op_add']($add29,$add30)));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			if ((($bool72=typeof module== 'undefined') === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
					false :
					(typeof $bool72=='object'?
						(typeof $bool72.__nonzero__=='function'?
							$bool72.__nonzero__() :
							(typeof $bool72.__len__=='function'?
								($bool72.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['__nondynamic_modules__'].__setitem__(importName, 1.0);
			}
		}
		return module;
	};
	$m['__dynamic_load__'].__name__ = '__dynamic_load__';

	$m['__dynamic_load__'].__bind_type__ = 0;
	$m['__dynamic_load__'].__args__ = [null,null,['importName']];
	$m['__import_all__'] = function(path, context, namespace, module_name, get_base) {
		if (typeof module_name == 'undefined') module_name=arguments.callee.__args__[5][1];
		if (typeof get_base == 'undefined') get_base=arguments.callee.__args__[6][1];
		var $iter5_nextval,$iter5_idx,name,$iter6_idx,$iter6_type,$iter5_array,$bool74,$bool75,$bool73,module,$iter6_array,$iter5_iter,$iter6_iter,$iter5_type,$iter6_nextval;
		module = $m['___import___'](path, context, module_name, get_base);
		if ((($bool73=typeof module['__all__'] == 'undefined') === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
				false :
				(typeof $bool73=='object'?
					(typeof $bool73.__nonzero__=='function'?
						$bool73.__nonzero__() :
						(typeof $bool73.__len__=='function'?
							($bool73.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$iter5_iter = $p['dir'](module);
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				name = $iter5_nextval;
				if ((($bool75=!(($bool74=name['startswith']('_')) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
					false :
					(typeof $bool74=='object'?
						(typeof $bool74.__nonzero__=='function'?
							$bool74.__nonzero__() :
							(typeof $bool74.__len__=='function'?
								($bool74.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
						false :
						(typeof $bool75=='object'?
							(typeof $bool75.__nonzero__=='function'?
								$bool75.__nonzero__() :
								(typeof $bool75.__len__=='function'?
									($bool75.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
namespace[name] = module[name];
				}
			}
		}
		else {
			$iter6_iter = module['__all__'];
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				name = $iter6_nextval;
namespace[name] = module[name];
			}
		}
		return null;
	};
	$m['__import_all__'].__name__ = '__import_all__';

	$m['__import_all__'].__bind_type__ = 0;
	$m['__import_all__'].__args__ = [null,null,['path'],['context'],['namespace'],['module_name', null],['get_base', true]];
	$m['BaseException'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'c7f30f04cbe0ab4be9edd0727d0e68dc';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}

			self.args = args;
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['args']['__getitem__'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add32,$add33,$add31,$add34,$attr30,$attr29;
			return (typeof ($add33=(typeof ($add31=self['__name__'])==typeof ($add32=': ') && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$m['op_add']($add31,$add32)))==typeof ($add34=self['__str__']()) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				$m['op_add']($add33,$add34));
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $21,$bool76,$bool77,$attr34,$attr33,$attr32,$attr31,$len2,$attr36,$attr35,$len1,$attr37,$attr38,$22;
			if ((($bool76=((($len1=self['args']) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))) === 0)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
					false :
					(typeof $bool76=='object'?
						(typeof $bool76.__nonzero__=='function'?
							$bool76.__nonzero__() :
							(typeof $bool76.__len__=='function'?
								($bool76.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return '';
			}
			else if ((($bool77=((($len2=self['args']) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))) === 1)) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
					false :
					(typeof $bool77=='object'?
						(typeof $bool77.__nonzero__=='function'?
							$bool77.__nonzero__() :
							(typeof $bool77.__len__=='function'?
								($bool77.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['str']((typeof ($21=self['args']).__array != 'undefined'?
					((typeof $21.__array[$22=0]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__(0)));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool78,$add36,$add35,$attr44,$attr42,$attr43,$attr40,$attr41,$attr39;
			if ((($bool78=$p['callable'](self)) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78.__nonzero__=='function'?
							$bool78.__nonzero__() :
							(typeof $bool78.__len__=='function'?
								($bool78.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}
			return (typeof ($add35=self['__name__'])==typeof ($add36=$p['repr'](self['args'])) && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				$m['op_add']($add35,$add36));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('BaseException', $bases, $cls_definition);
	})();
	$m['KeyboardInterrupt'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'afcc07d00afa0f35c76a90efe2f5bc4c';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('KeyboardInterrupt', $bases, $cls_definition);
	})();
	$m['GeneratorExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '01cfe2a20513e01e3252e8fb4d0ce65e';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('GeneratorExit', $bases, $cls_definition);
	})();
	$m['SystemExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '5b63cfe69fb174208e0c61c936d98725';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('SystemExit', $bases, $cls_definition);
	})();
	$m['Exception'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '991b21429dc33119e56f4716d6a0c7b9';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('Exception', $bases, $cls_definition);
	})();
	$m['StandardError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '75880a8ec804ad1a8a94bd5cc1ab5aaa';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('StandardError', $bases, $cls_definition);
	})();
	$m['ArithmeticError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '8f477ed614153c3f4481962b0cfdae9a';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ArithmeticError', $bases, $cls_definition);
	})();
	$m['StopIteration'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '46a96566883c3e4d3f4789c79636fdc0';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('StopIteration', $bases, $cls_definition);
	})();
	$m['GeneratorExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'ed4d417ad706abc291a424a14660dc0e';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('GeneratorExit', $bases, $cls_definition);
	})();
	$m['AssertionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '779badc979ddd07cc6a8d8ff822d17b7';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AssertionError', $bases, $cls_definition);
	})();
	$m['TypeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '15d8ce61f378502a5e445abbdd12eecf';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('TypeError', $bases, $cls_definition);
	})();
	$m['AttributeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '70ef1401d3f0d5c29339065c1d48c2d7';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AttributeError', $bases, $cls_definition);
	})();
	$m['NameError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'e806ed29e00451a3a4e43280bca72cef';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('NameError', $bases, $cls_definition);
	})();
	$m['ValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '295b1f7277f6dccf8e1a3f338203b015';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ValueError', $bases, $cls_definition);
	})();
	$m['ImportError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'e8f77b2be85d1d4c92f4513a6cc6ce4e';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ImportError', $bases, $cls_definition);
	})();
	$m['LookupError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'e3918d06f2a88cbbedfe3c116d585d38';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('LookupError', $bases, $cls_definition);
	})();
	$m['RuntimeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '44ce1cf108c1b9ca7cefd9eeea866336';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('RuntimeError', $bases, $cls_definition);
	})();
	$m['SystemError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '32d46cc4fec7f4e80a9b6eb72a858287';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('SystemError', $bases, $cls_definition);
	})();
	$m['KeyError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '8171d31c1579fc7e14bcc0de2e9e7b8a';
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool80,$bool79,$attr51,$attr50,$attr52,$24,$attr46,$attr47,$len4,$attr45,$len3,$23,$attr48,$attr49;
			if ((($bool79=((($len3=self['args']) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))) === 0)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
					false :
					(typeof $bool79=='object'?
						(typeof $bool79.__nonzero__=='function'?
							$bool79.__nonzero__() :
							(typeof $bool79.__len__=='function'?
								($bool79.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return '';
			}
			else if ((($bool80=((($len4=self['args']) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4))))) === 1)) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
					false :
					(typeof $bool80=='object'?
						(typeof $bool80.__nonzero__=='function'?
							$bool80.__nonzero__() :
							(typeof $bool80.__len__=='function'?
								($bool80.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['repr']((typeof ($23=self['args']).__array != 'undefined'?
					((typeof $23.__array[$24=0]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__(0)));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('KeyError', $bases, $cls_definition);
	})();
	$m['IndexError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'e0917d92a5b56bb059eb80eedf359972';
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('IndexError', $bases, $cls_definition);
	})();
	$m['NotImplementedError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '26ad830a89c3b62de4bd3ae32c9d15d9';
		var $bases = new Array($m['RuntimeError']);
		return $pyjs_type('NotImplementedError', $bases, $cls_definition);
	})();
	$m['ZeroDivisionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '6718576e66e997f6e1ad2283e18bb693';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('ZeroDivisionError', $bases, $cls_definition);
	})();
	$m['OverflowError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '17bc5f2b9fab6cefad00019caf22de62';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('OverflowError', $bases, $cls_definition);
	})();
	$m['UndefinedValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '7c0c538e7af9041e61fe975756641a9e';
		var $bases = new Array($m['ValueError']);
		return $pyjs_type('UndefinedValueError', $bases, $cls_definition);
	})();
	$m['init'] = function() {


$p['_errorMapping'] = function(err) {
    if (err instanceof(ReferenceError) || err instanceof(TypeError)) {
        var message = '';
        try {
            message = err.message;
        } catch ( e) {
        }
        return $m['AttributeError'](message);
    }
    return err;
};


$p['TryElse'] = function () { };
$p['TryElse'].prototype = new Error();
$p['TryElse'].__name__ = 'TryElse';


String.prototype.rfind = function(sub, start, end) {
    var pos;
    if (typeof start != 'undefined') {
        /* *sigh* - python rfind goes *RIGHT*, NOT left */
        pos = this.substring(start).lastIndexOf(sub);
        if (pos == -1) {
            return -1;
        }
        pos += start;
    }
    else {
        pos=this.lastIndexOf(sub, start);
    }
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.find = function(sub, start, end) {
    var pos=this.indexOf(sub, start);
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};
String.prototype.index = function(sub, start, end) {
    var pos = this.find(sub, start, end);
    if (pos < 0)
        throw $m['ValueError']('substring not found');
    return pos;
}
String.prototype.count = function(sub, start, end) {
    var pos, count = 0, n = sub.length;
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;
    while (start < end) {
        pos = this.find(sub, start, end);
        if (pos < 0) break;
        count ++;
        start = pos + n;
    }
    return count;
}

String.prototype.format = function() {
    var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

    var kw = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
    if (typeof kw != 'object' || kw.__name__ != 'dict' || typeof kw.$pyjs_is_kwarg == 'undefined') {
        if (typeof kw != 'undefined') args.__array.push(kw);
        kw = arguments[arguments.length+1];
    } else {
        delete kw['$pyjs_is_kwarg'];
    }
    if (typeof kw == 'undefined') {
        kw = $p['__empty_dict']();
    }
    return $p['_string_format'](this, args, kw);
}
String.prototype.format.__args__ = ['args', ['kw']];

String.prototype.join = function(data) {
    var text="";

    if (data.constructor === Array) {
        return data.join(this);
    } else if (typeof data.__iter__ == 'function') {
        if (typeof data.__array == 'object') {
            return data.__array.join(this);
        }
        var iter=data.__iter__();
        if (typeof iter.__array == 'object') {
            return iter.__array.join(this);
        }
        data = [];
        var item, i = 0;
        if (typeof iter.$genfunc == 'function') {
            while (typeof (item=iter.next(true)) != 'undefined') {
                data[i++] = item;
            }
        } else {
            try {
                while (true) {
                    data[i++] = iter.next();
                }
            }
            catch (e) {
                if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
            }
        }
        return data.join(this);
    }

    return text;
};

String.prototype.isdigit = function() {
    return (this.match(/^\d+$/g) !== null);
};

String.prototype.isalnum = function() {
    return (this.match(/^[a-zA-Z\d]+$/g) !== null);
};

String.prototype.isalpha = function() {
    return (this.match(/^[a-zA-Z]+$/g) !== null);
};

String.prototype.isupper = function() {
    return (this.match(/[a-z]/g) === null);
};

String.prototype.islower = function() {
    return (this.match(/[A-Z]/g) === null);
};

String.prototype.__replace=String.prototype.replace;

String.prototype.$$replace = function(old, replace, count) {
    var do_max=false;
    var start=0;
    var new_str="";
    var pos=0;

    if (typeof old != 'string') return this.__replace(old, replace);
    if (typeof count != 'undefined') do_max=true;

    while (start<this.length) {
        if (do_max && !count--) break;

        pos=this.indexOf(old, start);
        if (pos<0) break;

        new_str+=this.substring(start, pos) + replace;
        start=pos+old.length;
    }
    if (start<this.length) new_str+=this.substring(start);

    return new_str;
};

String.prototype.__contains__ = function(s){
    return this.indexOf(s)>=0;
};

String.prototype.__split = String.prototype.split;

String.prototype.$$split = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var start=0;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject.length == 0) {
            return items;
        }
        subject=subject.strip();
        subject=subject.$$replace(/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject.length == 0) {
        items.__array.push('');
        return items;
    }

    while (start<subject.length) {
        if (do_max && !maxsplit--) break;

        pos=subject.indexOf(sep, start);
        if (pos<0) break;

        items.__array.push(subject.substring(start, pos));
        start=pos+sep.length;
    }
    if (start<=subject.length) items.__array.push(subject.substring(start));

    return items;
};

String.prototype.rsplit = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject.length == 0) {
            return items;
        }
        subject=subject.strip();
        subject=subject.$$replace(/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject.length == 0) {
        items.__array.push('');
        return items;
    }

    while (subject.length > 0) {
        if (do_max && !maxsplit--) break;

        pos=subject.lastIndexOf(sep);
        if (pos<0) break;

        items.__array.push(subject.substr(pos+sep.lenght));
        subject = subject.substr(0, pos);
    }
    if (subject.length > 0) items.__array.push(subject);
    items.__array.reverse()

    return items;
};
String.prototype.splitlines = function(keepends) {
    var items = this.$$split("\n");
    if (typeof keepends != 'undefined' && keepends)
    {
        for (var i=0; i<items.__array.length; i++)
        {
            items.__array[i] = items.__array[i] + "\n";
        }
    }
    return items;
}
if (typeof "a"[0] == 'undefined' ) {
    // IE: cannot do "abc"[idx]
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw $m['StopIteration']();
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
} else {
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            '__array': this,
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw $m['StopIteration']();
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
}

String.prototype.strip = function(chars) {
    return this.lstrip(chars).rstrip(chars);
};

String.prototype.lstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/^\s+/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("^[" + chars + "]+"), "");
};

String.prototype.rstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/\s+$/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("[" + chars + "]+$"), "");
};

String.prototype.startswith = function(prefix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < prefix.length) return false;
    if (this.substr(start, prefix.length) == prefix) return true;
    return false;
};

String.prototype.endswith = function(suffix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < suffix.length) return false;
    if (this.substr(end - suffix.length, suffix.length) == suffix) return true;
    return false;
};

String.prototype.ljust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("ljust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return this + new Array(width+1 - this.length).join(fillchar);
};

String.prototype.rjust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("rjust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return new Array(width + 1 - this.length).join(fillchar) + this;
};

String.prototype.center = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("center() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    var padlen = width - this.length;
    var right = Math.ceil(padlen / 2);
    var left = padlen - right;
    return new Array(left+1).join(fillchar) + this + new Array(right+1).join(fillchar);
};

String.prototype.__getslice__ = function(lower, upper) {
    if (lower === null) {
        lower = 0;
    } else if (lower < 0) {
        lower = this.length + lower;
    }
    if (upper === null) {
        upper=this.length;
    } else if (upper < 0) {
       upper = this.length + upper;
    }
    return this.substring(lower, upper);
};

String.prototype.__getitem__ = function(idx) {
    if (idx < 0) idx += this.length;
    if (idx < 0 || idx > this.length) {
        throw $m['IndexError']("string index out of range");
    }
    return this.charAt(idx);
};

String.prototype.__setitem__ = function(idx, val) {
    throw $m['TypeError']("'str' object does not support item assignment");
};

String.prototype.upper = String.prototype.toUpperCase;
String.prototype.lower = String.prototype.toLowerCase;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1);
};

String.prototype.zfill = function(width) {
    return this.rjust(width, '0');
};

String.prototype.__add__ = function(y) {
    if (typeof y != "string") {
        throw $m['TypeError']("cannot concatenate 'str' and non-str objects");
    }
    return this + y;
};

String.prototype.__mul__ = function(y) {
    switch (y.__number__) {
        case 0x02:
        case 0x04:
            y = y.valueOf();
            break;
        case 0x01:
            if (Math.floor(y) == y) break;
        default:
            throw $m['TypeError']("can't multiply sequence by non-int of type 'str'");
    }
    var s = '';
    while (y-- > 0) {
        s += this;
    }
    return s;
};
String.prototype.__rmul__ = String.prototype.__mul__;
String.prototype.__number__ = null;
String.prototype.__name__ = 'str';
String.prototype.__class__ = String.prototype;
String.prototype.__is_instance__ = null;
String.prototype.__str__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};
String.prototype.__repr__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return "'" + this.toString() + "'";
};
String.prototype.__mro__ = [$m['basestring']];


Boolean.prototype.__number__ = 0x01;
Boolean.prototype.__name__ = 'bool';
Boolean.prototype.__class__ = Boolean.prototype;
Boolean.prototype.__is_instance__ = null;
Boolean.prototype.__str__= function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    if (this == true) return "True";
    return "False";
};
Boolean.prototype.__repr__ = Boolean.prototype.__str__;
Boolean.prototype.__and__ = function (y) {
    return this & y.valueOf();
};
Boolean.prototype.__or__ = function (y) {
    return this | y.valueOf();
};
Boolean.prototype.__xor__ = function (y) {
    return this ^ y.valueOf();
};


if (typeof Array.prototype.indexOf != 'function') {
    Array.prototype.indexOf = function(elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
};


RegExp.prototype.Exec = function(pat) {
    var m = this.exec(pat);
    if (m !== null) {
        var len = m.length >>> 0;
        for (var i = 0; i < len; i++) {
            if (typeof(m[i]) == 'undefined')
                m[i] = null;
        }
    }
    return m;
};


$p['abs'] = Math.abs;

	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$m['Class'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '64493199a9c00761e6e4959b83ad53c6';
		$method = $pyjs__bind_method2('__init__', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str___', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr53,$attr54;
			return self['$$name'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str___'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('Class', $bases, $cls_definition);
	})();
	$m['open'] = function(fname, mode) {
		if (typeof mode == 'undefined') mode=arguments.callee.__args__[3][1];

		throw ($m['NotImplementedError']('open is not implemented in browsers'));
		return null;
	};
	$m['open'].__name__ = 'open';

	$m['open'].__bind_type__ = 0;
	$m['open'].__args__ = [null,null,['fname'],['mode', 'r']];
	$m['cmp'] = function(a, b) {
    if (typeof a == typeof b) {
        switch (typeof a) {
            case 'number':
            case 'string':
            case 'boolean':
                return a == b ? 0 : (a < b ? -1 : 1);
        }
        if (a === b) return 0;
    }
    if (a === null) {
        if (b === null) return 0;
        return -1;
    }
    if (b === null) {
        return 1;
    }

    switch ((a.__number__ << 8)|b.__number__) {
        case 0x0202:
            a = a.__v;
            b = b.__v;
        case 0x0101:
            return a == b ? 0 : (a < b ? -1 : 1);
        case 0x0100:
        case 0x0200:
        case 0x0400:
            if (typeof b.__cmp__ == 'function') {
                return -b.__cmp__(a);
            }
            return -1;
        case 0x0001:
        case 0x0002:
        case 0x0004:
            if (typeof a.__cmp__ == 'function') {
                return a.__cmp__(b);
            }
            return 1;
        case 0x0102:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0104:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0201:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0401:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0204:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0402:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0404:
            return a.__cmp__(b);
    }

    if (typeof a.__class__ == typeof b.__class__ && typeof a.__class__ == 'function') {
        if (a.__class__.__name__ < b.__class__.__name__) {
            return -1;
        }
        if (a.__class__.__name__ > b.__class__.__name__) {
            return 1;
        }
    }

    if ((typeof a == 'object' || typeof a == 'function') && typeof a.__cmp__ == 'function') {
        return a.__cmp__(b);
    } else if ((typeof b == 'object' || typeof b == 'function') && typeof b.__cmp__ == 'function') {
        return -b.__cmp__(a);
    }
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
};
    ;
	$m['__cmp'] = $m['cmp'];
	$m['bool'] = function(v) {


    switch (v) {
        case null:
        case false:
        case 0:
        case '':
            return false;
    }
    if (typeof v == 'object') {
        if (typeof v.__nonzero__ == 'function'){
            return v.__nonzero__();
        } else if (typeof v.__len__ == 'function'){
            return v.__len__() > 0;
        }
    }
    return true;
    
	};
	$m['bool'].__name__ = 'bool';

	$m['bool'].__bind_type__ = 0;
	$m['bool'].__args__ = [null,null,['v']];
	$m['float'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'ff7213050efc2d38ca89c846a52d6605';
		$cls_definition['__number__'] = 0x01;
		$method = $pyjs__bind_method2('__new__', function(self, num) {


        if (typeof num == 'string') {
            num = num.lstrip();
            if (num === "") {
                throw $m['ValueError']("empty string for float()");
            }
        }
        var v = Number(num);
        if (isNaN(v)) {
            throw $m['ValueError']("invalid literal for float(): " + num);
        }
        return v;

		}
	, 3, [null,null,['self'],['num']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('float', $bases, $cls_definition);
	})();

Number.prototype.__number__ = 0x01;
Number.prototype.__name__ = 'float';
Number.prototype.__init__ = function (value, radix) {
    return null;
};

Number.prototype.__str__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};

Number.prototype.__repr__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};

Number.prototype.__nonzero__ = function () {
    return this != 0;
};

Number.prototype.__cmp__ = function (y) {
    return this < y? -1 : (this == y ? 0 : 1);
};

Number.prototype.__hash__ = function () {
    return this;
};

Number.prototype.__oct__ = function () {
    return '0'+this.toString(8);
};

Number.prototype.__hex__ = function () {
    return '0x'+this.toString(16);
};

Number.prototype.__pos__ = function () {
    return this;
};

Number.prototype.__neg__ = function () {
    return -this;
};

Number.prototype.__abs__ = function () {
    if (this >= 0) return this;
    return -this;
};

Number.prototype.__add__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this + y;
};

Number.prototype.__radd__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y + this;
};

Number.prototype.__sub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this - y;
};

Number.prototype.__rsub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y - this;
};

Number.prototype.__floordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
    return Math.floor(this / y);
};

Number.prototype.__rfloordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float divmod');
    return Math.floor(y / this);
};

Number.prototype.__div__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float division');
    return this / y;
};

Number.prototype.__rdiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float division');
    return y / this;
};

Number.prototype.__mul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this * y;
};

Number.prototype.__rmul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y * this;
};

Number.prototype.__mod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float modulo');
    return this % y;
};

Number.prototype.__rmod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float modulo');
    return y % this;
};

Number.prototype.__pow__ = function (y, z) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (typeof z == 'undefined' || z == null) {
        return Math.pow(this, y);
    }
    if (!z.__number__ || isNaN(z = z.valueOf())) return $p['NotImplemented'];
    return Math.pow(this, y) % z;
};

	$m['float_int'] = function(value, radix) {
		if (typeof radix == 'undefined') radix=arguments.callee.__args__[3][1];


    var v;
    if (typeof value['__int__'] != 'undefined') {
        return value['__int__']();
    }
    if (value.__number__) {
        if (radix !== null) {
            throw $m['TypeError']("int() can't convert non-string with explicit base");
        }
        v = value.valueOf();
        if (v > 0) {
            v = Math.floor(v);
        } else {
            v = Math.ceil(v);
        }
    } else if (typeof value == 'string') {
        if (radix === null) {
            radix = 10;
        }
        value = value.lstrip();
        switch (value[value.length-1]) {
            case 'l':
            case 'L':
                v = value.slice(0, value.length-2);
                break;
            default:
                v = value;
        }
        if (v.match($radix_regex[radix]) === null) {
            v = NaN;
        } else {
            v = v.$$replace(' ', '');
            v = parseInt(v, radix);
        }
    } else {
        throw $m['TypeError']("TypeError: int() argument must be a string or a number");
    }
    if (isNaN(v) || !isFinite(v)) {
        throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
    }
    return v;

	};
	$m['float_int'].__name__ = 'float_int';

	$m['float_int'].__bind_type__ = 0;
	$m['float_int'].__args__ = [null,null,['value'],['radix', null]];

var $radix_regex = [
    /^$/i,              //  0
    /^$/i,              //  1
    /^ *-? *[01]+ *$/i,     //  2
    /^ *-? *[0-2]+ *$/i,    //  3
    /^ *-? *[0-3]+ *$/i,    //  4
    /^ *-? *[0-4]+ *$/i,    //  5
    /^ *-? *[0-5]+ *$/i,    //  6
    /^ *-? *[0-6]+ *$/i,    //  7
    /^ *-? *[0-7]+ *$/i,    //  8
    /^ *-? *[0-8]+ *$/i,    //  9
    /^ *-? *[0-9]+ *$/i,    // 10
    /^ *-? *[0-9a]+ *$/i,   // 11
    /^ *-? *[0-9ab]+ *$/i,  // 12
    /^ *-? *[0-9a-c]+ *$/i, // 13
    /^ *-? *[0-9a-d]+ *$/i, // 14
    /^ *-? *[0-9a-e]+ *$/i, // 15
    /^ *-? *[0-9a-f]+ *$/i, // 16
    /^ *-? *[0-9a-g]+ *$/i, // 17
    /^ *-? *[0-9a-h]+ *$/i, // 18
    /^ *-? *[0-9a-i]+ *$/i, // 19
    /^ *-? *[0-9a-j]+ *$/i, // 20
    /^ *-? *[0-9a-k]+ *$/i, // 21
    /^ *-? *[0-9a-l]+ *$/i, // 22
    /^ *-? *[0-9a-m]+ *$/i, // 23
    /^ *-? *[0-9a-n]+ *$/i, // 24
    /^ *-? *[0-9a-o]+ *$/i, // 25
    /^ *-? *[0-9a-p]+ *$/i, // 26
    /^ *-? *[0-9a-q]+ *$/i, // 27
    /^ *-? *[0-9a-r]+ *$/i, // 28
    /^ *-? *[0-9a-s]+ *$/i, // 29
    /^ *-? *[0-9a-t]+ *$/i, // 30
    /^ *-? *[0-9a-u]+ *$/i, // 31
    /^ *-? *[0-9a-v]+ *$/i, // 32
    /^ *-? *[0-9a-w]+ *$/i, // 33
    /^ *-? *[0-9a-x]+ *$/i, // 34
    /^ *-? *[0-9a-y]+ *$/i, // 35
    /^ *-? *[0-9a-z]+ *$/i  // 36
];

(function(){
    /* XXX do not convert to $p['float_int'] - this is correct */
    var $int = pyjslib['int'] = function (value, radix) {
        var v, i;
        if (typeof radix == 'undefined' || radix === null) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("int() takes at least 1 argument");
            }
            if (typeof value['__int__'] != 'undefined') {
                return value['__int__']();
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    return value;
                case 0x04:
                    v = value.valueOf();
                    if (!($min_int <= v && v <= $max_int))
                        return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x02) return new $int(value, radix);
        if (value.__number__) {
            if (radix !== null) throw $m['TypeError']("int() can't convert non-string with explicit base");
            v = value.valueOf();
        } else if (typeof value == 'string') {
            if (radix === null) {
                radix = 10;
            }
            if (value.match($radix_regex[radix]) === null) {
                value = value.lstrip();
                v = NaN;
            } else {
                value = value.$$replace(' ', '');
                v = parseInt(value, radix);
            }
        } else {
            throw $m['TypeError']("TypeError: int() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
        }
        if ($min_int <= v && v <= $max_int) {
            this.__v = v;
            return this;
        }
        return new pyjslib['long'](v);
    };
    $int.__init__ = function () {};
    $int.__number__ = 0x02;
    $int.__v = 0;
    $int.__name__ = 'int';
    $int.prototype = $int;
    $int.__class__ = $int;

    $int.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $int.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $int.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $int.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $int.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? this.__v.toString() : this.__v.toString(radix);
    };

    $int.valueOf = function () {
        return this.__v.valueOf();
    };

    $int.__str__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        if (this.__number__ == 0x02) return this.__v.toString();
        return this.toString();
    };

    $int.__repr__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        if (this.__number__ == 0x02) return this.__v.toString();
        return this.toString();
    };

    $int.__nonzero__ = function () {
        return this.__v != 0;
    };

    $int.__cmp__ = function (y) {
        return this.__v < y? -1 : (this.__v == y ? 0 : 1);
    };

    $int.__hash__ = function () {
        return this.__v;
    };

    $int.__invert__ = function () {
        return new $int(~this.__v);
    };

    $int.__lshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y < 32) {
            var v = this.__v << y;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new $p['float_int'](this.__v).__lshift__(y);
    };

    $int.__rlshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v < 32) {
            var v = y << this.__v;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new $p['float_int'](y).__lshift__(this.__v);
    };

    $int.__rshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v >> y);
    };

    $int.__rrshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y >> this.__v);
    };

    $int.__and__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v & y);
    };

    $int.__rand__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y & this.__v);
    };

    $int.__xor__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v ^ y);
    };

    $int.__rxor__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y ^ this.__v);
    };

    $int.__or__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v | y);
    };

    $int.__ror__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y | this.__v);
    };

    $int.__oct__ = function () {
        return '0x'+this.__v.toString(8);
    };

    $int.__hex__ = function () {
        return '0x'+this.__v.toString(16);
    };

    $int.__pos__ = function () {
        return this;
    };

    $int.__neg__ = function () {
        return new $int(-this.__v);
    };

    $int.__abs__ = function () {
        if (this.__v >= 0) return this;
        return new $int(-this.__v);
    };

    $int.__add__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v + y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__add__(new $p['float_int'](y));
    };

    $int.__radd__ = $int.__add__;

    $int.__sub__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v - y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__sub__(new $p['float_int'](y));
    };

    $int.__rsub__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = y -this.__v;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](y).__sub__(new $p['float_int'](this.__v));
    };

    $int.__floordiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(this.__v / y));
    };

    $int.__rfloordiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(y / this.__v));
    };

    $int.__div__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v / y);
    };

    $int.__rdiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y / this.__v);
    };

    $int.__mul__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v * y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__mul__(new $p['float_int'](y));
    };

    $int.__rmul__ = $int.__mul__;

    $int.__mod__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v % y);
    };

    $int.__rmod__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y % this.__v);
    };

    $int.__pow__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = Math.pow(this.__v, y);
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__pow__(new $p['float_int'](y));
    };
})();


(function(){

    var $log2 = Math.log(2);
    var $DigitValue = [
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  37, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37
    ];
    var $log_base_PyLong_BASE = new Array();
    var $convwidth_base = new Array();
    var $convmultmax_base = new Array();
    for (var i = 0; i < 37; i++) {
        $log_base_PyLong_BASE[i] = $convwidth_base[i] = $convmultmax_base[i] = 0;
    }
    var $cdigit = '0123456789abcdefghijklmnopqrstuvwxyz';


    var PyLong_SHIFT = 15;
    var PyLong_MASK = 0x7fff;
    var PyLong_BASE = 0x8000;

    var KARATSUBA_CUTOFF = 70;
    var KARATSUBA_SQUARE_CUTOFF = (2 * KARATSUBA_CUTOFF);

    var FIVEARY_CUTOFF = 8;

    function array_eq(a, b, n) {
        for (var i = 0 ; i < n; i++) {
            if (a[i] != b[i])
                return false;
        }
        return true;
    }

    function long_normalize(v) {
        var j = v.ob_size < 0 ? -v.ob_size:v.ob_size;
        var i = j;
        while (i > 0 && v.ob_digit[i-1] == 0) {
            i--;
        }
        if (i != j) {
            v.ob_size = v.ob_size < 0 ? -i:i;
        }
        return v;
    }

    function AsScaledDouble(vv) {
        var multiplier = PyLong_BASE; // 1L << PyLong_SHIFT == 1 << 15
        var neg, i, x, nbitsneeded;

        if (vv.ob_size < 0) {
            i = -vv.ob_size;
            neg = true;
        } else if (vv.ob_size > 0) {
            i = vv.ob_size;
            neg = false;
        } else {
            return [0.0, 0];
        }
        --i;
        x = vv.ob_digit[i];
        nbitsneeded = 56;
        while (i > 0 && nbitsneeded > 0) {
            --i;
            x = x * multiplier + vv.ob_digit[i];
            nbitsneeded -= PyLong_SHIFT;
        }
        if (neg) {
            return [-x, i];
        }
        return [x, i];
    }

    function v_iadd(x, m, y, n) {
        var i, carry = 0;
        for (i = 0; i < n; ++i) {
                carry += x[i] + y[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        for (; carry && i < m; ++i) {
                carry += x[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        return carry;
    }

    function v_isub(x, m, y, n) {
        var i, borrow = 0;
        for (i = 0; i < n; ++i) {
                borrow = x[i] - y[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; borrow && i < m; ++i) {
                borrow = x[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        return borrow;
    }

    //function mul1(a, n) {
    //    return muladd1(a, n, 0);
    //}

    function muladd1(z, a, n, extra) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var carry = extra, i;

        for (i = 0; i < size_a; ++i) {
                carry += a.ob_digit[i] * n;
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i + 1;
        return long_normalize(z);
    }

    function inplace_divrem1(pout, pin, pout_idx, pin_idx, size, n) {
        var rem = 0, hi = 0;
        pin_idx += size;
        pout_idx += size;
        while (pin_idx > pin.length) {
            --size;
            --pin_idx;
            pout[--pout_idx] = 0;
        }
        while (--size >= 0) {
            rem = (rem << PyLong_SHIFT) + pin[--pin_idx];
            pout[--pout_idx] = hi = Math.floor(rem / n);
            rem -= hi * n;
        }
        return [rem, pout_idx, pin_idx];
    }

    function divrem1(a, n, prem) {
        var size = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var z = new $long(0);

        prem[0] = inplace_divrem1(z.ob_digit, a.ob_digit, 0, 0, size, n)[0];
        z.ob_size = size;
        return long_normalize(z);
    }

    function Format(aa, base, addL, newstyle, noBase) {
        var text, str, p, i, bits, sz, rem, sign = '';
        var c_0 = "0".charCodeAt(0);
        var c_a = "a".charCodeAt(0);
        base = base.valueOf();

        if (aa.ob_size == 0) {
            if (addL) {
                text = "0L";
            } else {
                text = "0";
            }
        } else {
            if (aa.ob_size < 0) {
                sign = '-';
                size_a = -aa.ob_size;
            } else {
                size_a = aa.ob_size;
            }
            i = base;
            bits = 0;
            while (i > 1) {
                ++bits;
                i >>>= 1;
            }
            i = addL ? 6 : 5;
            j = size_a * PyLong_SHIFT + bits - 1;
            sz = Math.floor(i + j / bits);
            if (j / PyLong_SHIFT < size_a || sz < i) {
                throw $m['OverflowError']("long is too large to format");
            }
            str = new Array();
            p = sz;
            if (addL) str[--p] = 'L';
            if ((base & (base - 1)) == 0) {
                var accum = 0, accumbits = 0, basebits = 1;
                i = base;
                while ((i >>>= 1) > 1) ++basebits;
                for (i = 0; i < size_a; ++i) {
                    accum |= aa.ob_digit[i] << accumbits;
                    accumbits += PyLong_SHIFT;
                    while (1) {
                        var cdigit = accum & (base - 1);
                        str[--p] = $cdigit.charAt(cdigit);
                        accumbits -= basebits;
                        accum >>>= basebits;
                        if (i < size_a-1) {
                            if (accumbits < basebits) break;
                        } else if (accum <= 0) break;
                    }
                }
                text = str.join("");
            } else {
                // Not 0, and base not a power of 2.
                var scratch, pin, scratch_idx, pin_idx;
                var powbase = base, power = 1, size = size_a;

                while (1) {
                    var newpow = powbase * base;
                    if (newpow >>> PyLong_SHIFT)  /* doesn't fit in a digit */
                        break;
                    powbase = newpow;
                    ++power;
                }
                scratch = aa.ob_digit.slice(0);
                pin = aa.ob_digit;
                scratch_idx = pin_idx = 0;
                do {
                        var ntostore = power;
                        rem = inplace_divrem1(scratch, pin, scratch_idx, pin_idx, size, powbase);
                        scratch_idx = rem[1];
                        rem = rem[0];
                        pin = scratch;
                        pin_idx = 0;
                        if (pin[size - 1] == 0) {
                            --size;
                        }
                        do {
                            var nextrem = Math.floor(rem / base);
                            str[--p] = $cdigit.charAt(rem - nextrem * base);
                            rem = nextrem;
                            --ntostore;
                        } while (ntostore && (size || rem));
                } while (size !=0);
                text = str.slice(p).join("");
            }
            text = text.lstrip('0');
            if (text == "" || text == "L") text = "0" + text;
        }
        if (noBase !== false) {
            switch (base) {
                case 10:
                    break;
                case 2:
                    text = '0b' + text;
                    break;
                case 8:
                    text = (newstyle ? '0o':(aa.ob_size ? '0': '')) + text;
                    break;
                case 16:
                    text = '0x' + text;
                    break;
                default:
                    text = base + '#' + text;
                    break;
            }
        }
        return sign + text;
    }

    function long_divrem(a, b, pdiv, prem) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = null;

        if (size_b == 0) {
            throw $m['ZeroDivisionError']("long division or modulo by zero");
        }
        if (size_a < size_b ||
            (size_a == size_b &&
             a.ob_digit[size_a-1] < b.ob_digit[size_b-1])) {
                // |a| < |b|
                pdiv.ob_size = 0;
                prem.ob_digit = a.ob_digit.slice(0);
                prem.ob_size = a.ob_size;
                return 0;
        }
        if (size_b == 1) {
                rem = [0];
                prem.ob_digit = [0];
                prem.ob_size = 1;
                z = divrem1(a, b.ob_digit[0], prem.ob_digit);
                prem = long_normalize(prem);
        }
        else {
                z = x_divrem(a, b, prem);
        }
        if (z === null) {
            pdiv.ob_size = 0;
        } else {
            pdiv.ob_digit = z.ob_digit.slice(0);
            pdiv.ob_size = z.ob_size;
        }
        if ((a.ob_size < 0) != (b.ob_size < 0))
                pdiv.ob_size = -(pdiv.ob_size);
        if (a.ob_size < 0 && prem.ob_size != 0)
                prem.ob_size = -prem.ob_size;
        return 0;
    }

    function x_divrem(v1, w1, prem) {
        var size_w = w1.ob_size < 0 ? -w1.ob_size : w1.ob_size;
        var d = Math.floor(PyLong_BASE / (w1.ob_digit[size_w-1] + 1));
        var v = muladd1($x_divrem_v, v1, d, 0);
        var w = muladd1($x_divrem_w, w1, d, 0);
        var a, j, k;
        var size_v = v.ob_size < 0 ? -v.ob_size : v.ob_size;
        k = size_v - size_w;
        a = new $long(0);
        a.ob_size = k + 1;

        for (j = size_v; k >= 0; --j, --k) {
            var vj = (j >= size_v) ? 0 : v.ob_digit[j];
            var carry = 0;
            var q, i;

            if (vj == w.ob_digit[size_w-1])
                q = PyLong_MASK;
            else
                q = Math.floor(((vj << PyLong_SHIFT) + v.ob_digit[j-1]) /
                        w.ob_digit[size_w-1]);

            while (w.ob_digit[size_w-2]*q >
                    ((
                        (vj << PyLong_SHIFT)
                        + v.ob_digit[j-1]
                        - q*w.ob_digit[size_w-1]
                                                ) << PyLong_SHIFT)
                    + v.ob_digit[j-2])
                --q;

            for (i = 0; i < size_w && i+k < size_v; ++i) {
                var z = w.ob_digit[i] * q;
                var zz = z >>> PyLong_SHIFT;
                carry += v.ob_digit[i+k] - z
                        + (zz << PyLong_SHIFT);
                v.ob_digit[i+k] = carry & PyLong_MASK;
                // carry = Py_ARITHMETIC_RIGHT_SHIFT(BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                carry >>= PyLong_SHIFT;
                carry -= zz;
            }

            if (i+k < size_v) {
                carry += v.ob_digit[i+k];
                v.ob_digit[i+k] = 0;
            }

            if (carry == 0)
                a.ob_digit[k] = q;
            else {
                a.ob_digit[k] = q-1;
                carry = 0;
                for (i = 0; i < size_w && i+k < size_v; ++i) {
                    carry += v.ob_digit[i+k] + w.ob_digit[i];
                    v.ob_digit[i+k] = carry & PyLong_MASK;
                    // carry = Py_ARITHMETIC_RIGHT_SHIFT( BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                    carry >>= PyLong_SHIFT;
                }
            }
        } /* for j, k */

        i = divrem1(v, d, prem);
        prem.ob_digit = i.ob_digit.slice(0);
        prem.ob_size = i.ob_size;
        return long_normalize(a);
    }

    function x_add(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var carry = 0;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
        }
        for (i = 0; i < size_b; ++i) {
                carry += a.ob_digit[i] + b.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        for (; i < size_a; ++i) {
                carry += a.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i+1;
        return long_normalize(z);
    }

    function x_sub(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var borrow = 0;
        var sign = 1;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
            sign = -1;
        } else if (size_a == size_b) {
            i = size_a;
            while (--i >= 0 && a.ob_digit[i] == b.ob_digit[i])
                ;
            if (i < 0)
                return z;
            if (a.ob_digit[i] < b.ob_digit[i]) {
                var temp = a;
                a = b;
                b = temp;
                temp = size_a;
                size_a = size_b;
                size_b = temp;
                sign = -1;
            }
            size_a = size_b = i+1;
        }
        for (i = 0; i < size_b; ++i) {
                borrow = a.ob_digit[i] - b.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; i < size_a; ++i) {
                borrow = a.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        z.ob_size = i;
        if (sign < 0)
            z.ob_size = -(z.ob_size);
        return long_normalize(z);
    }

    function x_mul(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i, s;

        z.ob_size = size_a + size_b;
        for (i = 0; i < z.ob_size; i++) {
            z.ob_digit[i] = 0;
        }
        if (size_a == size_b && array_eq(a.ob_digit, b.ob_digit, size_a)) {
            // Efficient squaring per HAC, Algorithm 14.16:
            for (i = 0; i < size_a; ++i) {
                var carry;
                var f = a.ob_digit[i];
                var pz = (i << 1);
                var pa = i + 1;
                var paend = size_a;

                carry = z.ob_digit[pz] + f * f;
                z.ob_digit[pz++] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;

                f <<= 1;
                while (pa < paend) {
                    carry += z.ob_digit[pz] + a.ob_digit[pa++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    carry += z.ob_digit[pz];
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        else {  // a is not the same as b -- gradeschool long mult
            for (i = 0; i < size_a; ++i) {
                var carry = 0;
                var f = a.ob_digit[i];
                var pz = i;
                var pb = 0;
                var pbend = size_b;

                while (pb < pbend) {
                    carry += z.ob_digit[pz] + b.ob_digit[pb++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        z.ob_size = z.ob_digit.length;
        return long_normalize(z);
    }

    function l_divmod(v, w, pdiv, pmod) {
        var div = $l_divmod_div,
            mod = $l_divmod_mod;

        if (long_divrem(v, w, div, mod) < 0)
                return -1;
        if (pdiv == null && pmod == null) return 0;

        if ((mod.ob_size < 0 && w.ob_size > 0) ||
            (mod.ob_size > 0 && w.ob_size < 0)) {
                mod = mod.__add__(w);
                div = div.__sub__($const_long_1);
        }
        if (pdiv !== null) {
            pdiv.ob_digit = div.ob_digit.slice(0);
            pdiv.ob_size = div.ob_size;
        }
        if (pmod !== null) {
            pmod.ob_digit = mod.ob_digit.slice(0);
            pmod.ob_size = mod.ob_size;
        }
        return 0;
    }



    /* XXX do not convert to $p['float_int'] - this is correct */
    var $long = pyjslib['long'] = function(value, radix) {
        var v, i;
        if (!radix || radix.valueOf() == 0) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("long() takes at least 1 argument");
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    break;
                case 0x04:
                    return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x04) return new $long(value, radix);

        v = value;
        this.ob_size = 0;
        this.ob_digit = new Array();
        if (v.__number__) {
            if (radix) {
                throw $m['TypeError']("long() can't convert non-string with explicit base");
            }
            if (v.__number__ == 0x04) {
                var size = v.ob_size < 0 ? -v.ob_size:v.ob_size;
                for (var i = 0; i < size; i++) {
                    this.ob_digit[i] = v.ob_digit[i];
                }
                this.ob_size = v.ob_size;
                return this;
            }
            if (v.__number__ == 0x02) {
                var neg = false;
                var ndig = 0;
                v = v.valueOf();

                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // Count the number of Python digits.
                var t = v;
                while (t) {
                    this.ob_digit[ndig] = t & PyLong_MASK;
                    t >>>= PyLong_SHIFT;
                    ++ndig;
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            if (v.__number__ == 0x01) {
                var ndig, frac, expo, bits;
                var neg = false;

                if (isNaN(v)) {
                    throw $m['ValueError']('cannot convert float NaN to integer');
                }
                if (!isFinite(v)) {
                    throw $m['OverflowError']('cannot convert float infinity to integer');
                }
                if (v == 0) {
                    this.ob_digit[0] = 0;
                    this.ob_size = 0;
                    return this;
                }
                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // frac = frexp(dval, &expo); // dval = frac*2**expo; 0.0 <= frac < 1.0
                if (v == 0) {
                    frac = 0;
                    expo = 0;
                } else {
                    expo = Math.log(v)/$log2;
                    expo = (expo < 0 ? Math.ceil(expo):Math.floor(expo)) + 1;
                    frac = v / Math.pow(2.0, expo);
                }
                if (expo <= 0) {
                    return this;
                }
                ndig = Math.floor((expo-1) / PyLong_SHIFT) + 1;
                // ldexp(a,b) == a * (2**b)
                frac = frac * Math.pow(2.0, ((expo-1) % PyLong_SHIFT) + 1);
                for (var i = ndig; --i >= 0;) {
                    bits = Math.floor(frac);
                    this.ob_digit[i] = bits;
                    frac -= bits;
                    frac = frac * Math.pow(2.0, PyLong_SHIFT);
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            throw $m['ValueError']('cannot convert ' + $p['repr']($m.value) + 'to integer');
        } else if (typeof v == 'string') {
            var nchars;
            var text = value.lstrip();
            var i = 0;
            var neg = false;

            switch (text.charAt(0)) {
                case '-':
                    neg = true;
                case '+':
                    text = text.slice(1).lstrip();
            }

            if (!radix) {
                if (text == '0' || text.charAt(0) != '0') {
                    radix = 10;
                } else {
                    switch (text.charAt(1)) {
                        case 'x':
                        case 'X':
                            radix = 16;
                            break;
                        case 'o':
                        case 'O':
                            radix = 8;
                            break;
                        case 'b':
                        case 'B':
                            radix = 2;
                            break;
                        default:
                            radix = 8;
                            break;
                    }
                }
            } else if (radix < 1 || radix > 36) {
                throw $m['ValueError']("long() arg 2 must be >= 2 and <= 36");
            }
            if (text.charAt(0) == '0' && text.length > 1) {
                switch (text.charAt(1)) {
                    case 'x':
                    case 'X':
                        if (radix == 16) text = text.slice(2);
                        break;
                    case 'o':
                    case 'O':
                        if (radix == 8) text = text.slice(2);
                        break;
                    case 'b':
                    case 'B':
                        if (radix == 2) text = text.slice(2);
                        break;

                }
            }
            if ((radix & (radix - 1)) == 0) {
                // binary base: 2, 4, 8, ...
                var n, bits_per_char, accum, bits_in_accum, k, pdigit;
                var p = 0;

                n = radix;
                for (bits_per_char = -1; n; ++bits_per_char) {
                    n >>>= 1;
                }
                n = 0;
                while ($DigitValue[text.charCodeAt(p)] < radix) {
                    p++;
                }
                nchars = p;
                n = p * bits_per_char + PyLong_SHIFT-1; //14 = PyLong_SHIFT - 1
                if (n / bits_per_char < p) {
                    throw $m['ValueError']("long string too large to convert");
                }
                this.ob_size = n = Math.floor(n/PyLong_SHIFT);
                for (var i = 0; i < n; i++) {
                    this.ob_digit[i] = 0;
                }
                // Read string from right, and fill in long from left
                accum = 0;
                bits_in_accum = 0;
                pdigit = 0;
                while (--p >= 0) {
                    k = $DigitValue[text.charCodeAt(p)];
                    accum |= k << bits_in_accum;
                    bits_in_accum += bits_per_char;
                    if (bits_in_accum >= PyLong_SHIFT) {
                        this.ob_digit[pdigit] = accum & PyLong_MASK;
                        pdigit++;
                        accum >>>= PyLong_SHIFT;
                        bits_in_accum -= PyLong_SHIFT;
                    }
                }
                if (bits_in_accum) {
                    this.ob_digit[pdigit++] = accum;
                }
                while (pdigit < n) {
                    this.ob_digit[pdigit++] = 0;
                }
                long_normalize(this);
            } else {
                // Non-binary bases (such as radix == 10)
                var c, i, convwidth, convmultmax, convmult, pz, pzstop, scan, size_z;

                if ($log_base_PyLong_BASE[radix] == 0.0) {
                    var i = 1;
                    var convmax = radix;
                    $log_base_PyLong_BASE[radix] = Math.log(radix) / Math.log(PyLong_BASE);
                    while (1) {
                        var next = convmax * radix;
                        if (next > PyLong_BASE) break;
                        convmax = next;
                        ++i;
                    }
                    $convmultmax_base[radix] = convmax;
                    $convwidth_base[radix] = i;
                }
                scan = 0;
                while ($DigitValue[text.charCodeAt(scan)] < radix)
                    ++scan;
                nchars = scan;
                size_z = scan * $log_base_PyLong_BASE[radix] + 1;
                for (var i = 0; i < size_z; i ++) {
                    this.ob_digit[i] = 0;
                }
                this.ob_size = 0;
                convwidth = $convwidth_base[radix];
                convmultmax = $convmultmax_base[radix];
                for (var str = 0; str < scan;) {
                    c = $DigitValue[text.charCodeAt(str++)];
                    for (i = 1; i < convwidth && str != scan; ++i, ++str) {
                        c = c * radix + $DigitValue[text.charCodeAt(str)];
                    }
                    convmult = convmultmax;
                    if (i != convwidth) {
                        convmult = radix;
                        for ( ; i > 1; --i) convmult *= radix;
                    }
                    pz = 0;
                    pzstop = this.ob_size;
                    for (; pz < pzstop; ++pz) {
                        c += this.ob_digit[pz] * convmult;
                        this.ob_digit[pz] = c & PyLong_MASK;
                        c >>>= PyLong_SHIFT;
                    }
                    if (c) {
                        if (this.ob_size < size_z) {
                            this.ob_digit[pz] = c;
                            this.ob_size++;
                        } else {
                            this.ob_digit[this.ob_size] = c;
                        }
                    }
                }
            }
            text = text.slice(nchars);
            if (neg) this.ob_size = -this.ob_size;
            if (text.charAt(0) == 'l' || text.charAt(0) == 'L') text = text.slice(1);
            text = text.lstrip();
            if (text.length === 0) {
                return this;
            }
            throw $m['ValueError']("invalid literal for long() with base " +
                                     radix + ": " + value);
        } else {
            throw $m['TypeError']("TypeError: long() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for long() with base " + radix + ": '" + v + "'");
        }
        return this;
    };
    $long.__init__ = function () {};
    $long.__number__ = 0x04;
    $long.__name__ = 'long';
    $long.prototype = $long;
    $long.__class__ = $long;
    $long.ob_size = 0;

    $long.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $long.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $long.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $long.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $long.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? Format(this, 10, false, false) : Format(this, radix, false, false, false);
    };

    $long.valueOf = function() {
        var x, v;
        x = AsScaledDouble(this);
        // ldexp(a,b) == a * (2**b)
        v = x[0] * Math.pow(2.0, x[1] * PyLong_SHIFT);
        if (!isFinite(v)) {
            throw $m['OverflowError']('long int too large to convert to float');
        }
        return v;
    };

    $long.__str__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        return Format(this, 10, false, false);
    };

    $long.__repr__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        return Format(this, 10, true, false);
    };

    $long.__nonzero__ = function () {
        return this.ob_size != 0;
    };

    $long.__cmp__ = function (b) {
        var sign;

        if (this.ob_size != b.ob_size) {
            if (this.ob_size < b.ob_size) return -1;
            return 1;
        }
        var i = this.ob_size < 0 ? - this.ob_size : this.ob_size;
        while (--i >= 0 && this.ob_digit[i] == b.ob_digit[i])
            ;
        if (i < 0) return 0;
        if (this.ob_digit[i] < b.ob_digit[i]) {
            if (this.ob_size < 0) return 1;
            return -1;
        }
        if (this.ob_size < 0) return -1;
        return 1;
    };

    $long.__hash__ = function () {
        var s = this.__str__();
        var v = this.valueOf();
        if (v.toString() == s) {
            return v;
        }
        return s;
    };

    $long.__invert__ = function () {
        var x = this.__add__($const_long_1);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__neg__ = function () {
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -this.ob_size;
        return x;
    };

    $long.__abs__ = function () {
        if (this.ob_size >= 0) return this;
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__lshift = function (y) {
        var a, z, wordshift, remshift, oldsize, newsize,
            accum, i, j;
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('outrageous left shift count');
        }
        a = this;

        wordshift = Math.floor(y / PyLong_SHIFT);
        remshift  = y - wordshift * PyLong_SHIFT;

        oldsize = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        newsize = oldsize + wordshift;
        if (remshift) ++newsize;
        z = new $long(0);
        z.ob_size = a.ob_size < 0 ? -newsize : newsize;
        for (i = 0; i < wordshift; i++) {
            z.ob_digit[i] = 0;
        }
        accum = 0;
        for (i = wordshift, j = 0; j < oldsize; i++, j++) {
            accum |= a.ob_digit[j] << remshift;
            z.ob_digit[i] = accum & PyLong_MASK;
            accum >>>= PyLong_SHIFT;
        }
        if (remshift) {
            z.ob_digit[newsize-1] = accum;
        }
        z = long_normalize(z);
        return z;
    };

    $long.__lshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__lshift(y);
                break;
            case 0x02:
                return this.__lshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__lshift(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rlshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__lshift(this.valueOf());
            case 0x04:
                return y.__lshift(this.valueOf());
        }
        return $p['NotImplemented'];
    };

    $long.__rshift = function (y) {
        var a, z, size, wordshift, newsize, loshift, hishift,
            lomask, himask, i, j;
        if (y.__number__ != 0x01) {
            y = y.valueOf();
        } else {
            if (y != Math.floor(y)) {
                throw $m['TypeError']("unsupported operand type(s) for >>: 'long' and 'float'");
            }
        }
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('shift count too big');
        }
        a = this;
        size = this.ob_size;
        if (this.ob_size < 0) {
            size = -size;
            a = this.__add__($const_long_1);
            a.ob_size = -a.ob_size;
        }

        wordshift = Math.floor(y / PyLong_SHIFT);
        newsize = size - wordshift;
        if (newsize <= 0) {
            z = $const_long_0;
        } else {
            loshift = y % PyLong_SHIFT;
            hishift = PyLong_SHIFT - loshift;
            lomask = (1 << hishift) - 1;
            himask = PyLong_MASK ^ lomask;
            z = new $long(0);
            z.ob_size = a.ob_size < 0 ? -newsize : newsize;
            for (i = 0, j = wordshift; i < newsize; i++, j++) {
                z.ob_digit[i] = (a.ob_digit[j] >>> loshift) & lomask;
                if (i+1 < newsize) {
                    z.ob_digit[i] |=
                      (a.ob_digit[j+1] << hishift) & himask;
                }
            }
            z = long_normalize(z);
        }

        if (this.ob_size < 0) {
            z = z.__add__($const_long_1);
            z.ob_size = -z.ob_size;
        }
        return z;
    };

    $long.__rshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__rshift(y);
                break;
            case 0x02:
                return this.__rshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__rshift(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rrshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__rshift(this.valueOf());
            case 0x04:
                return y.__rshift(this.valueOf());
        }
        return $p['NotImplemented'];
    };

    $long.__and = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '&';
            if (maska && maskb) {
                op = '|';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__and__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__and(new $long(y));
                break;
            case 0x02:
                return this.__and(new $long(y.__v));
            case 0x04:
                return this.__and(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rand__ = $long.__and__;

    $long.__xor = function (b) {
        var a,maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '^';
            if (maska != maskb) {
                maska ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__xor__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__xor(new $long(y));
                break;
            case 0x02:
                return this.__xor(new $long(y.__v));
            case 0x04:
                return this.__xor(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rxor__ = $long.__xor__;

    $long.__or = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '|';
            if (maska || maskb) {
                op = '&';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__or__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__or(new $long(y));
                break;
            case 0x02:
                return this.__or(new $long(y.__v));
            case 0x04:
                return this.__or(y);
        }
        return $p['NotImplemented'];
    };

    $long.__ror__ = $long.__or__;

    $long.__oct__ = function () {
        return Format(this, 8, true, false);
    };

    $long.__hex__ = function () {
        return Format(this, 16, true, false);
    };

    $long.__add = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            if (b.ob_size < 0) {
                z = x_add(a, b);
                z.ob_size = -(z.ob_size);
            }
            else {
                z = x_sub(b, a);
            }
        }
        else {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
        }
        return z;
    };

    $long.__add__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__add(new $long(y.__v));
            case 0x04:
                return this.__add(y);
        }
        return $p['NotImplemented'];
    };

    $long.__radd__ = $long.__add__;

    $long.__sub = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
            z.ob_size = -(z.ob_size);
        }
        else {
            z = b.ob_size < 0 ?  x_add(a, b) : x_sub(a, b);
        }
        return z;
    };

    $long.__sub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rsub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__sub(this);
            case 0x04:
                return y.__sub(this);
        }
        return $p['NotImplemented'];
    };

    $long.__mul = function (b) {
        //var z = k_mul(a, b);
        var z = x_mul(this, b);
        if ((this.ob_size ^ b.ob_size) < 0)
            z.ob_size = -(z.ob_size);
        return z;
    };

    $long.__mul__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mul(new $long(y.__v));
            case 0x04:
                return this.__mul(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rmul__ = $long.__mul__;

    $long.__div = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__div__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rdiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__div(this);
            case 0x04:
                return y.__div(this);
        }
        return $p['NotImplemented'];
    };

    $long.__mod = function (b) {
        var mod = new $long(0);
        l_divmod(this, b, null, mod);
        return mod;
    };

    $long.__mod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mod(new $long(y.__v));
            case 0x04:
                return this.__mod(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__mod(this);
            case 0x04:
                return y.__mod(this);
        }
        return $p['NotImplemented'];
    };

    $long.__divmod = function (b) {
        var div = new $long(0);
        var mod = new $long(0);
        l_divmod(this, b, div, mod);
        return $p['tuple']([div, mod]);
    };

    $long.__divmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__divmod(new $long(y.__v));
            case 0x04:
                return this.__divmod(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rdivmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__divmod(this);
            case 0x04:
                return y.__divmod(this);
        }
        return $p['NotImplemented'];
    };

    $long.__floordiv = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__floordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__floordiv(new $long(y.__v));
            case 0x04:
                return this.__floordiv(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rfloordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__floordiv(this);
            case 0x04:
                return y.__floordiv(this);
        }
        return $p['NotImplemented'];
    };

    $long.__pow = function (w, x) {
        var v = this;
        var a, b, c, negativeOutput = 0, z, i, j, k, temp, bi;
        var table = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        a = this;
        b = w.__number__ == 0x04 ? w : new $long(w);
        if (x === null || typeof x == 'undefined') {
            c = null;
        } else {
            c = x.__number__ == 0x04 ? x : new $long(x);
        }

        if (b.ob_size < 0) {
            if (c !== null) {
                throw $m['TypeError']("pow() 2nd argument cannot be negative when 3rd argument specified");
            }
            return Math.pow(v.valueOf(), w.valueOf());
        }

        if (c !== null) {
            if (c.ob_size == 0) {
                throw $m['ValueError']("pow() 3rd argument cannot be 0");
            }
            if (c.ob_size < 0) {
                negativeOutput = 1;
                temp = $pow_temp_c;
                temp.ob_digit = c.ob_digit.slice(0);
                temp.ob_size = -c.ob_size;
                c = temp;
            }
            if (c.ob_size == 1 && c.ob_digit[0] == 1) {
                return $const_long_0;
            }
            if (a.ob_size < 0) {
                temp = $pow_temp_a;
                l_divmod(a, c, null, temp);
                a = temp;
            }
        }
        z = new $long(1);
        temp = $pow_temp_z;
        if (b.ob_size <= FIVEARY_CUTOFF) {
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = 1 << (PyLong_SHIFT-1); j != 0; j >>>= 1) {
                    z = z.__mul(z);
                    if (c !== null) {
                        l_divmod(z, c, null, temp);
                        z.ob_digit = temp.ob_digit.slice(0);
                        z.ob_size = temp.ob_size;
                    }
                    if (bi & j) {
                        z = z.__mul(a);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        } else {
            table[0] = z;
            for (i = 1; i < 32; ++i) {
                table[i] = table[i-1].__mul(a);
                if (c !== null) {
                    l_divmod(table[i], c, null, temp);
                    table[i].ob_digit = temp.ob_digit.slice(0);
                    table[i].ob_size = temp.ob_size;
                }
            }
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = PyLong_SHIFT - 5; j >= 0; j -= 5) {
                    var index = (bi >>> j) & 0x1f;
                    for (k = 0; k < 5; ++k) {
                        z = z.__mul(z);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                    if (index) {
                        z = z.__mul(table[index]);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        }

        if ((c !== null) && negativeOutput &&
            (z.ob_size != 0) && (c.ob_size != 0)) {
            z = z.__sub__(c);
        }
        return z;
    };

    $long.__pow__ = function (y, z) {
        switch (y.__number__) {
            case 0x02:
                if (typeof z == 'undefined')
                    return this.__pow(new $long(y.__v), null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(new $long(y.__v), new $long(z));
                    case 0x04:
                        return this.__pow(new $long(y.__v), z);
                }
                break;
            case 0x04:
                if (typeof z == 'undefined')
                    return this.__pow(y, null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(y, new $long(z));
                    case 0x04:
                        return this.__pow(y, z);
                }
                break;
        }
        return $p['NotImplemented'];
    };


    var $const_long_0 = new $long(0),
        $const_long_1 = new $long(1);
    // Since javascript is single threaded:
    var $l_divmod_div = new $long(0),
        $l_divmod_mod = new $long(0),
        $x_divrem_v = new $long(0),
        $x_divrem_w = new $long(0),
        $pow_temp_a = new $long(0),
        $pow_temp_c = new $long(0),
        $pow_temp_z = new $long(0);
})();

	var attrib_remap = $m.attrib_remap = ['Function', 'apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'native', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	var var_remap = $m.var_remap = ['Function', 'arguments', 'break', 'case', 'catch', 'char', 'class', 'comment', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'final', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'native', 'new', 'return', 'super', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with'];

	$m['tuple'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'fae542c0328a79c1e859fb8ac9e9e2fc';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr55,$add37,$add38,$attr56;
			return (typeof ($add37='$tuple$')==typeof ($add38=$p['str'](self['__array'])) && (typeof $add37=='number'||typeof $add37=='string')?
				$add37+$add38:
				$m['op_add']($add37,$add38));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}
			var $bool82,$bool81;
			if ((($bool82=!(($bool81=$p['isinstance'](l, $m['tuple'])) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
				false :
				(typeof $bool81=='object'?
					(typeof $bool81.__nonzero__=='function'?
						$bool81.__nonzero__() :
						(typeof $bool81.__len__=='function'?
							($bool81.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
					false :
					(typeof $bool82=='object'?
						(typeof $bool82.__nonzero__=='function'?
							$bool82.__nonzero__() :
							(typeof $bool82.__len__=='function'?
								($bool82.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return 1;
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null) return $m['tuple'](self.__array.slice(lower));
        return $m['tuple'](self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (typeof index == 'boolean') index = $p['float_int'](index);
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("tuple index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('index', function(value, _start) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				_start = arguments[2];
			}
			if (typeof _start == 'undefined') _start=arguments.callee.__args__[4][1];


        var start = _start.valueOf();
        /* if (typeof valueXXX == 'number' || typeof valueXXX == 'string') {
            start = selfXXX.__array.indexOf(valueXXX, start);
            if (start >= 0)
                return start;
        } else */ {
            var len = self.__array.length >>> 0;

            start = (start < 0)
                    ? Math.ceil(start)
                    : Math.floor(start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if ( /*start in selfXXX.__array && */
                    $m['cmp'](self.__array[start], value) == 0)
                    return start;
            }
        }
        
			throw ($m['ValueError']('list.index(x): x not in list'));
			return null;
		}
	, 1, [null,null,['self'],['value'],['_start', 0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $pyjs_try_err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $m['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$m['ValueError'])) {
					return false;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);

        var i = 0;
        var l = self.__array;
        return {
            'next': function() {
                if (i >= l.length) {
                    throw $m['StopIteration']();
                }
                return l[i++];
            },
            '__iter__': function() {
                return this;
            }
        };
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr58,$attr57;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool83,$attr59,$attr60;
			if ((($bool83=$p['callable'](self)) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
					false :
					(typeof $bool83=='object'?
						(typeof $bool83.__nonzero__=='function'?
							$bool83.__nonzero__() :
							(typeof $bool83.__len__=='function'?
								($bool83.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var s = "(";
        for (var i=0; i < self.__array.length; i++) {
            s += $p['repr'](self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        if (self.__array.length == 1)
            s += ",";
        s += ")";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $bool85,$bool84,$attr61,$attr62;
			if ((($bool85=!(($bool84=$p['isinstance'](y, self)) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
				false :
				(typeof $bool84=='object'?
					(typeof $bool84.__nonzero__=='function'?
						$bool84.__nonzero__() :
						(typeof $bool84.__len__=='function'?
							($bool84.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
					false :
					(typeof $bool85=='object'?
						(typeof $bool85.__nonzero__=='function'?
							$bool85.__nonzero__() :
							(typeof $bool85.__len__=='function'?
								($bool85.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']('can only concatenate tuple to tuple'));
			}
			return $m['tuple'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$bool87,$bool86,$attr64,$bool88,$sub3,$attr63,$sub4;
			if ((($bool87=!(($bool86=n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
				false :
				(typeof $bool86=='object'?
					(typeof $bool86.__nonzero__=='function'?
						$bool86.__nonzero__() :
						(typeof $bool86.__len__=='function'?
							($bool86.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
					false :
					(typeof $bool87=='object'?
						(typeof $bool87.__nonzero__=='function'?
							$bool87.__nonzero__() :
							(typeof $bool87.__len__=='function'?
								($bool87.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']("can't multiply sequence by non-int"));
			}
			a = $p['list']([]);
			while ((($bool88=n) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
					false :
					(typeof $bool88=='object'?
						(typeof $bool88.__nonzero__=='function'?
							$bool88.__nonzero__() :
							(typeof $bool88.__len__=='function'?
								($bool88.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				n = (typeof ($sub3=n)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$m['op_sub']($sub3,$sub4));
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('tuple', $bases, $cls_definition);
	})();
$m['tuple'].__str__ = $m['tuple'].__repr__;
$m['tuple'].toString = $m['tuple'].__str__;
	$m['NotImplementedType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '275ad5ed61b8211b511ed5499a83c385';
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return "<type 'NotImplementedType'>";
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('NotImplementedType', $bases, $cls_definition);
	})();
	$m['NotImplemented'] = $m['NotImplementedType']();

var $iter_array = function (l) {
    this.__array = l;
    this.i = -1;
};
$iter_array.prototype.next = function (noStop) {
    if (++this.i == this.__array.length) {
        if (noStop === true) {
            return;
        }
        throw $m['StopIteration']();
    }
    return this.__array[this.i];
};
$iter_array.prototype.__iter__ = function ( ) {
    return this;
};
var $reversed_iter_array = function (l) {
    this.___array = l;
    this.i = l.length;
};
$reversed_iter_array.prototype.next = function (noStop) {
    if (--this.i == -1) {
        if (noStop === true) {
            return;
        }
        throw $m['StopIteration']();
    }
    return this.___array[this.i];
};
$reversed_iter_array.prototype.__iter__ = function ( ) {
    return this;
};
//$reversed_iter_array.prototype.$genfunc = $reversed_iter_array.prototype.next;
var $enumerate_array = function (l) {
    this.array = l;
    this.i = -1;
    this.tuple = 
	$m['tuple']($p['list']([0, '']));

    this.tl = this.tuple.__array;
};
$enumerate_array.prototype.next = function (noStop, reuseTuple) {
    if (++this.i == this.array.length) {
        if (noStop === true) {
            return;
        }
        throw $m['StopIteration']();
    }
    this.tl[1] = this.array[this.i];
    if (this.tl[0].__number__ == 0x01) {
        this.tl[0] = this.i;
    } else {
        this.tl[0] = new $p['float_int'](this.i);
    }
    return reuseTuple === true ? this.tuple : $m['tuple'](this.tl);
};
$enumerate_array.prototype.__iter__ = function ( ) {
    return this;
};
$enumerate_array.prototype.$genfunc = $enumerate_array.prototype.next;

	$m['list'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '6ad7ecb70573ecb2ecda93e68ac7643e';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('list objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('append', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

self.__array[self.__array.length] = item;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('extend', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                    }
                }
            }
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        var l = self.__array;
        var j = self.__array.length;
        var n = data.length, i = 0;
        while (i < n) {
            l[j++] = data[i++];
        }
        
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['extend'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}


        var index=self.index(value);
        if (index<0) {
            throw $m['ValueError']("list.remove(x): x not in list");
        }
        self.__array.splice(index, 1);
        return true;
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('index', function(value, _start) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				_start = arguments[2];
			}
			if (typeof _start == 'undefined') _start=arguments.callee.__args__[4][1];


        var start = _start.valueOf();
        /* if (typeof valueXXX == 'number' || typeof valueXXX == 'string') {
            start = selfXXX.__array.indexOf(valueXXX, start);
            if (start >= 0)
                return start;
        } else */ {
            var len = self.__array.length >>> 0;

            start = (start < 0)
                    ? Math.ceil(start)
                    : Math.floor(start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if ( /*start in selfXXX.__array && */
                    $m['cmp'](self.__array[start], value) == 0)
                    return start;
            }
        }
        
			throw ($m['ValueError']('list.index(x): x not in list'));
			return null;
		}
	, 1, [null,null,['self'],['value'],['_start', 0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method2('insert', function(index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

    var a = self.__array; self.__array=a.slice(0, index).concat(value, a.slice(index));
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('pop', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}
			if (typeof _index == 'undefined') _index=arguments.callee.__args__[3][1];


        var index = _index.valueOf();
        if (index<0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            if (self.__array.length == 0) {
                throw $m['IndexError']("pop from empty list");
            }
            throw $m['IndexError']("pop index out of range");
        }
        var a = self.__array[index];
        self.__array.splice(index, 1);
        return a;
        
		}
	, 1, [null,null,['self'],['_index', (typeof ($usub1=1)=='number'?
			-$usub1:
			$m['op_usub']($usub1))]]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}
			var $bool90,$bool89;
			if ((($bool90=!(($bool89=$p['isinstance'](l, $m['list'])) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
				false :
				(typeof $bool89=='object'?
					(typeof $bool89.__nonzero__=='function'?
						$bool89.__nonzero__() :
						(typeof $bool89.__len__=='function'?
							($bool89.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
					false :
					(typeof $bool90=='object'?
						(typeof $bool90.__nonzero__=='function'?
							$bool90.__nonzero__() :
							(typeof $bool90.__len__=='function'?
								($bool90.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return (typeof ($usub2=1)=='number'?
					-$usub2:
					$m['op_usub']($usub2));
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null)
            return $m['list'](self.__array.slice(lower));
        return $m['list'](self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__delslice__', function(_lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_lower = arguments[1];
				upper = arguments[2];
			}


        var lower = _lower;
        var n = upper - lower;
        if (upper==null) {
            n =  self.__array.length;
        }
        if (!lower) lower = 0;
        if (n > 0) self.__array.splice(lower, n);
        
			return null;
		}
	, 1, [null,null,['self'],['_lower'],['upper']]);
		$cls_definition['__delslice__'] = $method;
		$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
			}
			var tail;
			self['__delslice__'](lower, upper);
			tail = self['__getslice__'](lower, null);
			self['__delslice__'](lower, null);
			self['extend'](data);
			self['extend'](tail);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (typeof index == 'boolean') index = $p['float_int'](index);
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(_index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
				value = arguments[2];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self.__array[index]=value;
        
		}
	, 1, [null,null,['self'],['_index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self.__array.splice(index, 1);
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $pyjs_try_err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $m['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$m['ValueError'])) {
					return false;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__reversed__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $reversed_iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reversed__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('reverse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

    self.__array.reverse();
		}
	, 1, [null,null,['self']]);
		$cls_definition['reverse'] = $method;
		$method = $pyjs__bind_method2('sort', function(cmp, key, reverse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmp = arguments[1];
				key = arguments[2];
				reverse = arguments[3];
			}
			if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
			if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
			if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
			var $bool91,$bool92,$bool93,$bool94,thisSort1,thisSort2,$bool95,$and18,$and19,thisSort3;
			if ((($bool91=(cmp === null)) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
					false :
					(typeof $bool91=='object'?
						(typeof $bool91.__nonzero__=='function'?
							$bool91.__nonzero__() :
							(typeof $bool91.__len__=='function'?
								($bool91.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				cmp = $m['__cmp'];
			}
			if ((($bool93=((($bool92=$and18=key) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
				false :
				(typeof $bool92=='object'?
					(typeof $bool92.__nonzero__=='function'?
						$bool92.__nonzero__() :
						(typeof $bool92.__len__=='function'?
							($bool92.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?reverse:$and18)) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
					false :
					(typeof $bool93=='object'?
						(typeof $bool93.__nonzero__=='function'?
							$bool93.__nonzero__() :
							(typeof $bool93.__len__=='function'?
								($bool93.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				thisSort1 = function(a, b) {

					return (typeof ($usub3=cmp(key(a), key(b)))=='number'?
						-$usub3:
						$m['op_usub']($usub3));
				};
				thisSort1.__name__ = 'thisSort1';

				thisSort1.__bind_type__ = 0;
				thisSort1.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort1);
			}
			else if ((($bool94=key) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
					false :
					(typeof $bool94=='object'?
						(typeof $bool94.__nonzero__=='function'?
							$bool94.__nonzero__() :
							(typeof $bool94.__len__=='function'?
								($bool94.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				thisSort2 = function(a, b) {

					return cmp(key(a), key(b));
				};
				thisSort2.__name__ = 'thisSort2';

				thisSort2.__bind_type__ = 0;
				thisSort2.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort2);
			}
			else if ((($bool95=reverse) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
					false :
					(typeof $bool95=='object'?
						(typeof $bool95.__nonzero__=='function'?
							$bool95.__nonzero__() :
							(typeof $bool95.__len__=='function'?
								($bool95.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				thisSort3 = function(a, b) {

					return (typeof ($usub4=cmp(a, b))=='number'?
						-$usub4:
						$m['op_usub']($usub4));
				};
				thisSort3.__name__ = 'thisSort3';

				thisSort3.__bind_type__ = 0;
				thisSort3.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort3);
			}
			else {
				self['__array']['sort'](cmp);
			}
			return null;
		}
	, 1, [null,null,['self'],['cmp', null],['key', null],['reverse', false]]);
		$cls_definition['sort'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr65,$attr66;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr67,$attr68,$bool96;
			if ((($bool96=$p['callable'](self)) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
					false :
					(typeof $bool96=='object'?
						(typeof $bool96.__nonzero__=='function'?
							$bool96.__nonzero__() :
							(typeof $bool96.__len__=='function'?
								($bool96.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var s = "[";
        for (var i=0; i < self.__array.length; i++) {
            s += $p['repr'](self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        s += "]";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr69,$bool97,$bool98,$attr70;
			if ((($bool98=!(($bool97=$p['isinstance'](y, self)) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
				false :
				(typeof $bool97=='object'?
					(typeof $bool97.__nonzero__=='function'?
						$bool97.__nonzero__() :
						(typeof $bool97.__len__=='function'?
							($bool97.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
					false :
					(typeof $bool98=='object'?
						(typeof $bool98.__nonzero__=='function'?
							$bool98.__nonzero__() :
							(typeof $bool98.__len__=='function'?
								($bool98.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']('can only concatenate list to list'));
			}
			return $m['list'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$bool99,$attr72,$attr71,$bool101,$bool100,$sub6,$sub5;
			if ((($bool100=!(($bool99=n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
				false :
				(typeof $bool99=='object'?
					(typeof $bool99.__nonzero__=='function'?
						$bool99.__nonzero__() :
						(typeof $bool99.__len__=='function'?
							($bool99.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100.__nonzero__=='function'?
							$bool100.__nonzero__() :
							(typeof $bool100.__len__=='function'?
								($bool100.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']("can't multiply sequence by non-int"));
			}
			a = $p['list']([]);
			while ((($bool101=n) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
					false :
					(typeof $bool101=='object'?
						(typeof $bool101.__nonzero__=='function'?
							$bool101.__nonzero__() :
							(typeof $bool101.__len__=='function'?
								($bool101.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				n = (typeof ($sub5=n)==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$m['op_sub']($sub5,$sub6));
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('list', $bases, $cls_definition);
	})();
$m['list'].__str__ = $m['list'].__repr__;
$m['list'].toString = $m['list'].__str__;
	$m['slice'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '798450a088e7033cd9dcd8aa9e712319';
		$method = $pyjs__bind_method2('__init__', function(a1) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			} else {
				var self = arguments[0];
				a1 = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

			}
			var $cmp5,$28,$cmp6,$25,$27,$26,$len5,$bool103,$bool102;
			if ((($bool102=args) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
					false :
					(typeof $bool102=='object'?
						(typeof $bool102.__nonzero__=='function'?
							$bool102.__nonzero__() :
							(typeof $bool102.__len__=='function'?
								($bool102.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.start = a1;
				self.stop = (typeof ($25=args).__array != 'undefined'?
					((typeof $25.__array[$26=0]) != 'undefined'?$25.__array[$26]:
						$25.__getitem__($26)):
						$25.__getitem__(0));
				if ((($bool103=((($cmp5=(($len5=args) === null?0:
					(typeof $len5.__array != 'undefined' ? $len5.__array.length:
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'?$len5.length:
								$p['len']($len5))))))===($cmp6=1)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$m['cmp']($cmp5, $cmp6))) == 1)) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
						false :
						(typeof $bool103=='object'?
							(typeof $bool103.__nonzero__=='function'?
								$bool103.__nonzero__() :
								(typeof $bool103.__len__=='function'?
									($bool103.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.step = (typeof ($27=args).__array != 'undefined'?
						((typeof $27.__array[$28=1]) != 'undefined'?$27.__array[$28]:
							$27.__getitem__($28)):
							$27.__getitem__(1));
				}
				else {
					self.step = null;
				}
			}
			else {
				self.stop = a1;
				self.start = null;
				self.step = null;
			}
			return null;
		}
	, 1, ['args',null,['self'],['a1']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
			}
			var $attr82,$attr83,$attr80,$attr81,$attr84,$attr79,$attr78,$attr77,$attr76,$attr74,$attr73,$bool105,$bool104,r,$eq11,$eq12,$eq13,$eq14,$attr75;
			r = $m['cmp'](self['start'], x['start']);
			if ((($bool104=!(($eq11=r)===($eq12=0)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
					false :
					(typeof $bool104=='object'?
						(typeof $bool104.__nonzero__=='function'?
							$bool104.__nonzero__() :
							(typeof $bool104.__len__=='function'?
								($bool104.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return r;
			}
			r = $m['cmp'](self['stop'], x['stop']);
			if ((($bool105=!(($eq13=r)===($eq14=0)&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
					false :
					(typeof $bool105=='object'?
						(typeof $bool105.__nonzero__=='function'?
							$bool105.__nonzero__() :
							(typeof $bool105.__len__=='function'?
								($bool105.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return r;
			}
			r = $m['cmp'](self['step'], x['step']);
			return r;
		}
	, 1, [null,null,['self'],['x']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('indices', function(length) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				length = arguments[1];
			}
			var $cmp20,$cmp21,$cmp22,$cmp23,$cmp24,$cmp25,$cmp26,$cmp27,$cmp28,$cmp29,$attr86,$attr87,$attr85,$attr88,$attr89,stop,$cmp38,$cmp37,$cmp36,$cmp35,$cmp34,$cmp33,$cmp32,$cmp31,$cmp30,defstop,defstart,$and23,$and22,$and21,$and20,$sub18,$sub13,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,step,$bool107,$cmp16,$add46,$eq15,$eq16,$add48,$add47,$bool109,$add45,$add44,$add43,$add42,$add41,$add40,start,$bool108,$bool125,$bool124,$bool123,$bool122,$bool121,$bool120,$add39,$bool112,$bool113,$bool110,$bool111,$bool116,$bool117,$bool114,$bool115,$bool118,$bool119,$sub9,$sub8,$sub7,$or5,$or4,$cmp15,$cmp14,$cmp17,$bool106,$cmp11,$cmp10,$cmp13,$cmp12,$div2,$div3,$div1,$cmp19,$cmp18,$div4,$attr95,$attr94,$cmp7,$attr96,$attr91,$attr90,$attr93,$attr92,slicelength,$cmp9,$cmp8;
			step = 0;
			start = 0;
			stop = 0;
			if ((($bool106=(self['step'] === null)) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
					false :
					(typeof $bool106=='object'?
						(typeof $bool106.__nonzero__=='function'?
							$bool106.__nonzero__() :
							(typeof $bool106.__len__=='function'?
								($bool106.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				step = 1;
			}
			else {
				step = self['step'];
				if ((($bool107=(($eq15=step)===($eq16=0)&&$eq15===null?true:
					($eq15===null?false:($eq16===null?false:
						((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
							((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
								$eq15==$eq16)))))) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
						false :
						(typeof $bool107=='object'?
							(typeof $bool107.__nonzero__=='function'?
								$bool107.__nonzero__() :
								(typeof $bool107.__len__=='function'?
									($bool107.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($m['ValueError']('slice step cannot be zero'));
				}
			}
			if ((($bool108=((($cmp7=step)===($cmp8=0)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$m['cmp']($cmp7, $cmp8))) == -1)) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
					false :
					(typeof $bool108=='object'?
						(typeof $bool108.__nonzero__=='function'?
							$bool108.__nonzero__() :
							(typeof $bool108.__len__=='function'?
								($bool108.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				defstart = (typeof ($sub7=length)==typeof ($sub8=1) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$m['op_sub']($sub7,$sub8));
				defstop = (typeof ($usub5=1)=='number'?
					-$usub5:
					$m['op_usub']($usub5));
			}
			else {
				defstart = 0;
				defstop = length;
			}
			if ((($bool109=(self['start'] === null)) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
					false :
					(typeof $bool109=='object'?
						(typeof $bool109.__nonzero__=='function'?
							$bool109.__nonzero__() :
							(typeof $bool109.__len__=='function'?
								($bool109.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				start = defstart;
			}
			else {
				start = self['start'];
				if ((($bool110=((($cmp9=start)===($cmp10=0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$m['cmp']($cmp9, $cmp10))) == -1)) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
						false :
						(typeof $bool110=='object'?
							(typeof $bool110.__nonzero__=='function'?
								$bool110.__nonzero__() :
								(typeof $bool110.__len__=='function'?
									($bool110.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					start = (typeof ($add39=start)==typeof ($add40=length) && (typeof $add39=='number'||typeof $add39=='string')?
						$add39+$add40:
						$m['op_add']($add39,$add40));
				}
				if ((($bool111=((($cmp11=start)===($cmp12=0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$m['cmp']($cmp11, $cmp12))) == -1)) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
						false :
						(typeof $bool111=='object'?
							(typeof $bool111.__nonzero__=='function'?
								$bool111.__nonzero__() :
								(typeof $bool111.__len__=='function'?
									($bool111.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool112=((($cmp13=step)===($cmp14=0)?0:
						(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
							($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
							$m['cmp']($cmp13, $cmp14))) == -1)) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
							false :
							(typeof $bool112=='object'?
								(typeof $bool112.__nonzero__=='function'?
									$bool112.__nonzero__() :
									(typeof $bool112.__len__=='function'?
										($bool112.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						start = (typeof ($usub6=1)=='number'?
							-$usub6:
							$m['op_usub']($usub6));
					}
					else {
						start = 0;
					}
				}
				if ((($bool113=((((($cmp15=start)===($cmp16=length)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$m['cmp']($cmp15, $cmp16))))|1) == 1)) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
						false :
						(typeof $bool113=='object'?
							(typeof $bool113.__nonzero__=='function'?
								$bool113.__nonzero__() :
								(typeof $bool113.__len__=='function'?
									($bool113.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool114=((($cmp17=step)===($cmp18=0)?0:
						(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
							($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
							$m['cmp']($cmp17, $cmp18))) == -1)) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
							false :
							(typeof $bool114=='object'?
								(typeof $bool114.__nonzero__=='function'?
									$bool114.__nonzero__() :
									(typeof $bool114.__len__=='function'?
										($bool114.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						start = (typeof ($sub9=length)==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							$m['op_sub']($sub9,$sub10));
					}
					else {
						start = length;
					}
				}
			}
			if ((($bool115=(self['stop'] === null)) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
					false :
					(typeof $bool115=='object'?
						(typeof $bool115.__nonzero__=='function'?
							$bool115.__nonzero__() :
							(typeof $bool115.__len__=='function'?
								($bool115.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				stop = defstop;
			}
			else {
				stop = self['stop'];
				if ((($bool116=((($cmp19=stop)===($cmp20=0)?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$m['cmp']($cmp19, $cmp20))) == -1)) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
						false :
						(typeof $bool116=='object'?
							(typeof $bool116.__nonzero__=='function'?
								$bool116.__nonzero__() :
								(typeof $bool116.__len__=='function'?
									($bool116.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					stop = (typeof ($add41=stop)==typeof ($add42=length) && (typeof $add41=='number'||typeof $add41=='string')?
						$add41+$add42:
						$m['op_add']($add41,$add42));
				}
				if ((($bool117=((($cmp21=stop)===($cmp22=0)?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$m['cmp']($cmp21, $cmp22))) == -1)) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
						false :
						(typeof $bool117=='object'?
							(typeof $bool117.__nonzero__=='function'?
								$bool117.__nonzero__() :
								(typeof $bool117.__len__=='function'?
									($bool117.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool118=((($cmp23=step)===($cmp24=0)?0:
						(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
							($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
							$m['cmp']($cmp23, $cmp24))) == -1)) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
							false :
							(typeof $bool118=='object'?
								(typeof $bool118.__nonzero__=='function'?
									$bool118.__nonzero__() :
									(typeof $bool118.__len__=='function'?
										($bool118.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						stop = (typeof ($usub7=1)=='number'?
							-$usub7:
							$m['op_usub']($usub7));
					}
					else {
						stop = 0;
					}
				}
				if ((($bool119=((((($cmp25=stop)===($cmp26=length)?0:
					(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
						($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
						$m['cmp']($cmp25, $cmp26))))|1) == 1)) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
						false :
						(typeof $bool119=='object'?
							(typeof $bool119.__nonzero__=='function'?
								$bool119.__nonzero__() :
								(typeof $bool119.__len__=='function'?
									($bool119.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool120=((($cmp27=step)===($cmp28=0)?0:
						(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
							($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
							$m['cmp']($cmp27, $cmp28))) == -1)) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
							false :
							(typeof $bool120=='object'?
								(typeof $bool120.__nonzero__=='function'?
									$bool120.__nonzero__() :
									(typeof $bool120.__len__=='function'?
										($bool120.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						stop = (typeof ($sub11=length)==typeof ($sub12=1) && (typeof $sub11=='number'||typeof $sub11=='string')?
							$sub11-$sub12:
							$m['op_sub']($sub11,$sub12));
					}
					else {
						stop = length;
					}
				}
			}
			if ((($bool124=((($bool122=$or4=((($bool121=$and20=((($cmp29=step)===($cmp30=0)?0:
				(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
					($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
					$m['cmp']($cmp29, $cmp30))) == -1)) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
				false :
				(typeof $bool121=='object'?
					(typeof $bool121.__nonzero__=='function'?
						$bool121.__nonzero__() :
						(typeof $bool121.__len__=='function'?
							($bool121.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((((($cmp31=stop)===($cmp32=start)?0:
				(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
					($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
					$m['cmp']($cmp31, $cmp32))))|1) == 1):$and20)) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
				false :
				(typeof $bool122=='object'?
					(typeof $bool122.__nonzero__=='function'?
						$bool122.__nonzero__() :
						(typeof $bool122.__len__=='function'?
							($bool122.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or4:((($bool123=$and22=((($cmp33=step)===($cmp34=0)?0:
				(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
					($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
					$m['cmp']($cmp33, $cmp34))) == 1)) === null || $bool123 === false || $bool123 === 0 || $bool123 === '' ?
				false :
				(typeof $bool123=='object'?
					(typeof $bool123.__nonzero__=='function'?
						$bool123.__nonzero__() :
						(typeof $bool123.__len__=='function'?
							($bool123.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((((($cmp35=start)===($cmp36=stop)?0:
				(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
					($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
					$m['cmp']($cmp35, $cmp36))))|1) == 1):$and22))) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
					false :
					(typeof $bool124=='object'?
						(typeof $bool124.__nonzero__=='function'?
							$bool124.__nonzero__() :
							(typeof $bool124.__len__=='function'?
								($bool124.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				slicelength = 0;
			}
			else if ((($bool125=((($cmp37=step)===($cmp38=0)?0:
				(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
					($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
					$m['cmp']($cmp37, $cmp38))) == -1)) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
					false :
					(typeof $bool125=='object'?
						(typeof $bool125.__nonzero__=='function'?
							$bool125.__nonzero__() :
							(typeof $bool125.__len__=='function'?
								($bool125.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				slicelength = (typeof ($add45=(typeof ($div1=(typeof ($add43=(typeof ($sub13=stop)==typeof ($sub14=start) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					$m['op_sub']($sub13,$sub14)))==typeof ($add44=1) && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					$m['op_add']($add43,$add44)))==typeof ($div2=step) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$m['op_div']($div1,$div2)))==typeof ($add46=1) && (typeof $add45=='number'||typeof $add45=='string')?
					$add45+$add46:
					$m['op_add']($add45,$add46));
			}
			else {
				slicelength = (typeof ($add47=(typeof ($div3=(typeof ($sub17=(typeof ($sub15=stop)==typeof ($sub16=start) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$m['op_sub']($sub15,$sub16)))==typeof ($sub18=1) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					$m['op_sub']($sub17,$sub18)))==typeof ($div4=step) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$m['op_div']($div3,$div4)))==typeof ($add48=1) && (typeof $add47=='number'||typeof $add47=='string')?
					$add47+$add48:
					$m['op_add']($add47,$add48));
			}
			return $p['tuple']([start, stop, step]);
		}
	, 1, [null,null,['self'],['length']]);
		$cls_definition['indices'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr97,$attr99,$attr98,$attr102,$attr100,$attr101;
			return $p['sprintf']('slice(%s, %s, %s)', $p['tuple']([self['start'], self['stop'], self['step']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('slice', $bases, $cls_definition);
	})();
$m['slice'].__str__ = $m['slice'].__repr__;
$m['slice'].toString = $m['slice'].__str__;
	$m['dict'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '157239c7d743527ef0435e6ca350d2ef';
		$method = $pyjs__bind_method2('__init__', function(seq) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				seq = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof seq != 'undefined') {
					if (seq !== null && typeof seq['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = seq;
						seq = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof seq == 'undefined') seq=arguments.callee.__args__[3][1];
			var $bool126,init;
			self.__object = {};
			init = function(_data) {


        var item, i, n, sKey;
        var data = _data;
        //selfXXX.__object = {};

        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__object == 'object') {
            data = data.__object;
            for (sKey in data) {
                self.__object[sKey] = data[sKey].slice();
            }
            return null;
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                var _key = key;
                if (key.substring(0,2) == '$$') {
                    // handle back mapping of name
                    // d = dict(comment='value')
                    // comment will be in the object as $$comment
                    _key = key.substring(2);
                    if (var_remap.indexOf(_key) < 0) {
                        _key = key;
                    }
                }
                self.__object['$'+_key] = [_key, data[key]];
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = 0;
        if (data[0].constructor === Array) {
            while (i < n) {
                item = data[i++];
                key = item[0];
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        if (typeof data[0].__array != 'undefined') {
            while (i < n) {
                item = data[i++].__array;
                key = item[0];
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        i = -1;
        var key;
        while (++i < n) {
            key = data[i].__getitem__(0);
            sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
            self.__object[sKey] = [key, data[i].__getitem__(1)];
        }
        return null;
        
			};
			init.__name__ = 'init';

			init.__bind_type__ = 0;
			init.__args__ = [null,null,['_data']];
			init(seq);
			if ((($bool126=kwargs) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
					false :
					(typeof $bool126=='object'?
						(typeof $bool126.__nonzero__=='function'?
							$bool126.__nonzero__() :
							(typeof $bool126.__len__=='function'?
								($bool126.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				init(kwargs);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['seq', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(key, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}


        if (typeof value == 'undefined') {
            throw $m['ValueError']("Value for key '" + key + "' is undefined");
        }
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        self.__object[sKey] = [key, value];
        
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        var value=self.__object[sKey];
        if (typeof value == 'undefined'){
            throw $m['KeyError'](key);
        }
        return value[1];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var i in self.__object){
            return true;
        }
        return false;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool127,$bool128;
			if ((($bool128=!(($bool127=$p['isinstance'](other, $m['dict'])) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
				false :
				(typeof $bool127=='object'?
					(typeof $bool127.__nonzero__=='function'?
						$bool127.__nonzero__() :
						(typeof $bool127.__len__=='function'?
							($bool127.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
					false :
					(typeof $bool128=='object'?
						(typeof $bool128.__nonzero__=='function'?
							$bool128.__nonzero__() :
							(typeof $bool128.__len__=='function'?
								($bool128.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']("dict.__cmp__(x,y) requires y to be a 'dict'"));
			}

        var self_sKeys = new Array(),
            other_sKeys = new Array(),
            selfLen = 0,
            otherLen = 0,
            selfObj = self.__object,
            otherObj = other.__object;
        for (sKey in selfObj) {
           self_sKeys[selfLen++] = sKey;
        }
        for (sKey in otherObj) {
           other_sKeys[otherLen++] = sKey;
        }
        if (selfLen < otherLen) {
            return -1;
        }
        if (selfLen > otherLen) {
            return 1;
        }
        self_sKeys.sort();
        other_sKeys.sort();
        var c, sKey;
        for (var idx = 0; idx < selfLen; idx++) {
            c = $m['cmp'](selfObj[sKey = self_sKeys[idx]][0], otherObj[other_sKeys[idx]][0]);
            if (c != 0) {
                return c;
            }
            c = $m['cmp'](selfObj[sKey][1], otherObj[sKey][1]);
            if (c != 0) {
                return c;
            }
        }
        return 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0;

        for (var i in self.__object) size++;
        
			return size;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        delete self.__object[sKey];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? false : true;
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('keys', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys=$m['list'](),
            selfObj = self.__object,
            __array = keys.__array,
            i = 0;
        for (var sKey in self.__object) {
            __array[i++] = selfObj[sKey][0];
        }
        return keys;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['keys'] = $method;
		$method = $pyjs__bind_method2('fromkeys', function(iterable, v) {
			if (typeof v == 'undefined') v=arguments.callee.__args__[3][1];
			var d,$iter7_nextval,i,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type;
			d = $p['dict']([]);
			$iter7_iter = iterable;
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				i = $iter7_nextval;
				d.__setitem__(i, v);
			}
			return d;
		}
	, 3, [null,null,['iterable'],['v', null]]);
		$cls_definition['fromkeys'] = $method;
		$method = $pyjs__bind_method2('values', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var values=$m['list']();
        var i = 0;
        for (var key in self.__object) {
            values.__array[i++] = self.__object[key][1];
        }
        return values;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['values'] = $method;
		$method = $pyjs__bind_method2('items', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = $m['list']();
        var i = 0;
        for (var key in self.__object) {
          var kv = self.__object[key];
          items.__array[i++] = $m['list'](kv);
          }
          return items;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['items'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $iter_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $enumerate_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('itervalues', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['values']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['itervalues'] = $method;
		$method = $pyjs__bind_method2('iteritems', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['items']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['iteritems'] = $method;
		$method = $pyjs__bind_method2('setdefault', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? (self.__object[sKey]=[key, default_value])[1] : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value']]);
		$cls_definition['setdefault'] = $method;
		$method = $pyjs__bind_method2('get', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}
			if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


        var empty = true;
        for (var sKey in self.__object) {
            empty = false;
            break;
        }
        if (empty) return default_value;
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? default_value : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $iter10_nextval,$cmp39,$32,$iter8_iter,$iter10_array,$iter10_iter,$cmp40,$bool130,$bool131,$bool132,$bool133,$29,$iter9_iter,$iter9_nextval,$iter9_idx,$iter11_idx,$iter9_type,$iter10_idx,$iter8_idx,$iter11_iter,$iter8_type,$iter8_nextval,$bool129,$iter11_array,$iter11_nextval,d,k,$iter11_type,$iter8_array,$30,$31,$len6,$len7,v,$iter10_type,$iter9_array;
			if ((($bool129=args) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
					false :
					(typeof $bool129=='object'?
						(typeof $bool129.__nonzero__=='function'?
							$bool129.__nonzero__() :
							(typeof $bool129.__len__=='function'?
								($bool129.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool130=((($cmp39=(($len6=args) === null?0:
					(typeof $len6.__array != 'undefined' ? $len6.__array.length:
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'?$len6.length:
								$p['len']($len6))))))===($cmp40=1)?0:
					(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
						($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
						$m['cmp']($cmp39, $cmp40))) == 1)) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
						false :
						(typeof $bool130=='object'?
							(typeof $bool130.__nonzero__=='function'?
								$bool130.__nonzero__() :
								(typeof $bool130.__len__=='function'?
									($bool130.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($m['TypeError']($p['sprintf']('update expected at most 1 arguments, got %d', (($len7=args) === null?0:
						(typeof $len7.__array != 'undefined' ? $len7.__array.length:
							(typeof $len7.__len__ == 'function'?$len7.__len__():
								(typeof $len7.length != 'undefined'?$len7.length:
									$p['len']($len7))))))));
				}
				d = (typeof ($29=args).__array != 'undefined'?
					((typeof $29.__array[$30=0]) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__(0));
				if ((($bool131=$p['hasattr'](d, 'iteritems')) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
						false :
						(typeof $bool131=='object'?
							(typeof $bool131.__nonzero__=='function'?
								$bool131.__nonzero__() :
								(typeof $bool131.__len__=='function'?
									($bool131.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter8_iter = d['iteritems']();
					if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter.__iter__();
						$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						var $tupleassign1 = $p['__ass_unpack']($iter8_nextval, 2, null);
						k = $tupleassign1[0];
						v = $tupleassign1[1];
						self.__setitem__(k, v);
					}
				}
				else if ((($bool132=$p['hasattr'](d, 'keys')) === null || $bool132 === false || $bool132 === 0 || $bool132 === '' ?
						false :
						(typeof $bool132=='object'?
							(typeof $bool132.__nonzero__=='function'?
								$bool132.__nonzero__() :
								(typeof $bool132.__len__=='function'?
									($bool132.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter9_iter = d;
					if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
						$iter9_type = 0;
					} else {
						$iter9_iter = $iter9_iter.__iter__();
						$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter9_idx = 0;
					while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
						k = $iter9_nextval;
						self.__setitem__(k, (typeof ($31=d).__array != 'undefined'?
							((typeof $31.__array[$32=k]) != 'undefined'?$31.__array[$32]:
								$31.__getitem__($32)):
								$31.__getitem__(k)));
					}
				}
				else {
					$iter10_iter = d;
					if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
						$iter10_type = 0;
					} else {
						$iter10_iter = $iter10_iter.__iter__();
						$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter10_idx = 0;
					while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
						var $tupleassign2 = $p['__ass_unpack']($iter10_nextval, 2, null);
						k = $tupleassign2[0];
						v = $tupleassign2[1];
						self.__setitem__(k, v);
					}
				}
			}
			if ((($bool133=kwargs) === null || $bool133 === false || $bool133 === 0 || $bool133 === '' ?
					false :
					(typeof $bool133=='object'?
						(typeof $bool133.__nonzero__=='function'?
							$bool133.__nonzero__() :
							(typeof $bool133.__len__=='function'?
								($bool133.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter11_iter = kwargs['iteritems']();
				if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
					$iter11_type = 0;
				} else {
					$iter11_iter = $iter11_iter.__iter__();
					$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter11_idx = 0;
				while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter11_nextval, 2, null);
					k = $tupleassign3[0];
					v = $tupleassign3[1];
					self.__setitem__(k, v);
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('pop', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
				var d = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			} else {
				var self = arguments[0];
				k = arguments[1];
				var d = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

			}
			var $add50,$34,$add49,$36,res,$35,$33,$bool134,$pyjs_try_err,$cmp42,$bool135,$cmp41,$len8,$len9;
			if ((($bool134=((($cmp41=(($len8=d) === null?0:
				(typeof $len8.__array != 'undefined' ? $len8.__array.length:
					(typeof $len8.__len__ == 'function'?$len8.__len__():
						(typeof $len8.length != 'undefined'?$len8.length:
							$p['len']($len8))))))===($cmp42=1)?0:
				(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
					($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
					$m['cmp']($cmp41, $cmp42))) == 1)) === null || $bool134 === false || $bool134 === 0 || $bool134 === '' ?
					false :
					(typeof $bool134=='object'?
						(typeof $bool134.__nonzero__=='function'?
							$bool134.__nonzero__() :
							(typeof $bool134.__len__=='function'?
								($bool134.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']($p['sprintf']('pop expected at most 2 arguments, got %s', (typeof ($add49=1)==typeof ($add50=(($len9=d) === null?0:
					(typeof $len9.__array != 'undefined' ? $len9.__array.length:
						(typeof $len9.__len__ == 'function'?$len9.__len__():
							(typeof $len9.length != 'undefined'?$len9.length:
								$p['len']($len9)))))) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					$m['op_add']($add49,$add50)))));
			}
			try {
				res = (typeof ($33=self).__array != 'undefined'?
					((typeof $33.__array[$34=k]) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__(k));
				self.__delitem__(k);
				return res;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $m['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$m['KeyError'])) {
					if ((($bool135=d) === null || $bool135 === false || $bool135 === 0 || $bool135 === '' ?
							false :
							(typeof $bool135=='object'?
								(typeof $bool135.__nonzero__=='function'?
									$bool135.__nonzero__() :
									(typeof $bool135.__len__=='function'?
										($bool135.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return (typeof ($35=d).__array != 'undefined'?
							((typeof $35.__array[$36=0]) != 'undefined'?$35.__array[$36]:
								$35.__getitem__($36)):
								$35.__getitem__(0));
					}
					else {
						throw ($pyjs.__last_exception__?
							$pyjs.__last_exception__.error:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, ['d',null,['self'],['k']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('popitem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter12_type,$iter12_array,$iter12_nextval,$iter12_iter,v,k,$iter12_idx;
			$iter12_iter = self['iteritems']();
			if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter.__iter__();
				$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				var $tupleassign4 = $p['__ass_unpack']($iter12_nextval, 2, null);
				k = $tupleassign4[0];
				v = $tupleassign4[1];
				return $p['tuple']([k, v]);
			}
			throw ($m['KeyError']('popitem(): dictionary is empty'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popitem'] = $method;
		$method = $pyjs__bind_method2('getObject', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr104,$attr103;
			return self['__object'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObject'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['dict'](self['items']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr106,$attr105,$bool136;
			if ((($bool136=$p['callable'](self)) === null || $bool136 === false || $bool136 === 0 || $bool136 === '' ?
					false :
					(typeof $bool136=='object'?
						(typeof $bool136.__nonzero__=='function'?
							$bool136.__nonzero__() :
							(typeof $bool136.__len__=='function'?
								($bool136.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var keys = new Array();
        for (var key in self.__object)
            keys.push(key);

        var s = "{";
        for (var i=0; i<keys.length; i++) {
            var v = self.__object[keys[i]];
            s += $p['repr'](v[0]) + ": " + $p['repr'](v[1]);
            if (i < keys.length-1)
                s += ", ";
        }
        s += "}";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__repr__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('dict', $bases, $cls_definition);
	})();
$m['dict'].has_key = $m['dict'].__contains__;
$m['dict'].iterkeys = $m['dict'].__iter__;
$m['dict'].__str__ = $m['dict'].__repr__;
	$m['__empty_dict'] = function() {


    var dict__init__ = $m['dict'].__init__;
    var d;
    $m['dict'].__init__ = function() {
        this.__object = {};
    };
    d = $m['dict']();
    d.__init__ = $m['dict'].__init__ = dict__init__;
    return d;

	};
	$m['__empty_dict'].__name__ = '__empty_dict';

	$m['__empty_dict'].__bind_type__ = 0;
	$m['__empty_dict'].__args__ = [null,null];
	$m['set'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '82b18c7f59ebd07b447e38ccad9335f6';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_data = arguments[1];
			}
			if (typeof _data == 'undefined') _data=arguments.callee.__args__[3][1];
			var $bool137,$bool138;
			if ((($bool137=(_data === null)) === null || $bool137 === false || $bool137 === 0 || $bool137 === '' ?
					false :
					(typeof $bool137=='object'?
						(typeof $bool137.__nonzero__=='function'?
							$bool137.__nonzero__() :
							(typeof $bool137.__len__=='function'?
								($bool137.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
var data = [];
			}
			else {
var data = _data;
			}
			if ((($bool138=(typeof isSet == "undefined"?$m.isSet:isSet)(_data)) === null || $bool138 === false || $bool138 === 0 || $bool138 === '' ?
					false :
					(typeof $bool138=='object'?
						(typeof $bool138.__nonzero__=='function'?
							$bool138.__nonzero__() :
							(typeof $bool138.__len__=='function'?
								($bool138.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

            self.__object = {};
            var selfObj = self.__object,
                dataObj = data.__object;
            for (var sVal in dataObj) {
                selfObj[sVal] = dataObj[sVal];
            }
            return null;
			}

        var item,
            i,
            n,
            selfObj = self.__object = {};

        if (data.constructor === Array) {
        // data is already an Array.
        // We deal with the Array of data after this if block.
          }

          // We may have some other set-like thing with __object
          else if (typeof data.__object == 'object') {
            var dataObj = data.__object;
            for (var sKey in dataObj) {
                selfObj[sKey] = dataObj[sKey];
            }
            return null;
          }

          // Something with an __iter__ method
          else if (typeof data.__iter__ == 'function') {

            // It has an __array member to iterate over. Make that our data.
            if (typeof data.__array == 'object') {
                data = data.__array;
                }
            else {
                // Several ways to deal with the __iter__ method
                var iter = data.__iter__();
                // iter has an __array member that's an array. Use that.
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                var data = [];
                var item, i = 0;
                // iter has a .$genfunc
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                // actually use the object's __iter__ method
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (!$p['isinstance'](e, $m['StopIteration'])) throw e;
                    }
                }
            }
          // Check undefined first so isIteratable can do check for __iter__.
        } else if (!($p['isUndefined']($m.data)) && $m.isIteratable($m.data))
            {
            for (var item in $m.data) {
                selfObj[$p['__hash'](item)] = item;
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = n-1;
        do {
            item = data[i];
            selfObj[$p['__hash'](item)] = item;
        }
        while (i--);
        return null;
        
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool140,$bool139;
			if ((($bool140=!(($bool139=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool139 === false || $bool139 === 0 || $bool139 === '' ?
				false :
				(typeof $bool139=='object'?
					(typeof $bool139.__nonzero__=='function'?
						$bool139.__nonzero__() :
						(typeof $bool139.__len__=='function'?
							($bool139.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool140 === false || $bool140 === 0 || $bool140 === '' ?
					false :
					(typeof $bool140=='object'?
						(typeof $bool140.__nonzero__=='function'?
							$bool140.__nonzero__() :
							(typeof $bool140.__len__=='function'?
								($bool140.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return 2;
			}

        var selfObj = self.__object,
            otherObj = other.__object,
            selfMismatch = false,
            otherMismatch = false;
        if (selfObj === otherObj) {
            throw $m['TypeError']("Set operations must use two sets.");
            }
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                selfMismatch = true;
                break;
            }
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                otherMismatch = true;
                break;
            }
        }
        if (selfMismatch && otherMismatch) return 2;
        if (selfMismatch) return 1;
        if (otherMismatch) return -1;
        return 0;

		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $eq18,$bool141,$eq17;
			if ((($bool141=(($eq17=(typeof isSet == "undefined"?$m.isSet:isSet)(value))===($eq18=1)&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool141 === false || $bool141 === 0 || $bool141 === '' ?
					false :
					(typeof $bool141=='object'?
						(typeof $bool141.__nonzero__=='function'?
							$bool141.__nonzero__() :
							(typeof $bool141.__len__=='function'?
								($bool141.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

            var hashes = new Array(),
                obj = self.__object,
                i = 0;
            for (var v in obj) {
                hashes[i++] = v;
            }
            hashes.sort();
            var h = hashes.join("|");
            return (h in obj);

			}
return $p['__hash'](value) in self.__object;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('set objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = new Array(),
            i = 0,
            obj = self.__object;
        for (var key in obj) {
            items[i++] = obj[key];
        }
        return new $iter_array(items);
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0.0;

        for (var i in self.__object) size++;
        
			return size;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr107,$bool142,$attr108;
			if ((($bool142=$p['callable'](self)) === null || $bool142 === false || $bool142 === 0 || $bool142 === '' ?
					false :
					(typeof $bool142=='object'?
						(typeof $bool142.__nonzero__=='function'?
							$bool142.__nonzero__() :
							(typeof $bool142.__len__=='function'?
								($bool142.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']("<type '%s'>", self['__name__']);
			}

        var values = new Array();
        var i = 0,
            obj = self.__object,
            s = self.__name__ + "([";
        for (var sVal in obj) {
            values[i++] = $p['repr'](obj[sVal]);
        }
        s += values.join(", ");
        s += "])";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__and__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool143,$bool144;
			if ((($bool144=!(($bool143=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool143 === false || $bool143 === 0 || $bool143 === '' ?
				false :
				(typeof $bool143=='object'?
					(typeof $bool143.__nonzero__=='function'?
						$bool143.__nonzero__() :
						(typeof $bool143.__len__=='function'?
							($bool143.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool144 === false || $bool144 === 0 || $bool144 === '' ?
					false :
					(typeof $bool144=='object'?
						(typeof $bool144.__nonzero__=='function'?
							$bool144.__nonzero__() :
							(typeof $bool144.__len__=='function'?
								($bool144.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['NotImplemented'];
			}
			return self['intersection'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method2('__or__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool145,$bool146;
			if ((($bool146=!(($bool145=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool145 === false || $bool145 === 0 || $bool145 === '' ?
				false :
				(typeof $bool145=='object'?
					(typeof $bool145.__nonzero__=='function'?
						$bool145.__nonzero__() :
						(typeof $bool145.__len__=='function'?
							($bool145.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool146 === false || $bool146 === 0 || $bool146 === '' ?
					false :
					(typeof $bool146=='object'?
						(typeof $bool146.__nonzero__=='function'?
							$bool146.__nonzero__() :
							(typeof $bool146.__len__=='function'?
								($bool146.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['NotImplemented'];
			}
			return self['union'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method2('__xor__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool148,$bool147;
			if ((($bool148=!(($bool147=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool147 === false || $bool147 === 0 || $bool147 === '' ?
				false :
				(typeof $bool147=='object'?
					(typeof $bool147.__nonzero__=='function'?
						$bool147.__nonzero__() :
						(typeof $bool147.__len__=='function'?
							($bool147.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool148 === false || $bool148 === 0 || $bool148 === '' ?
					false :
					(typeof $bool148=='object'?
						(typeof $bool148.__nonzero__=='function'?
							$bool148.__nonzero__() :
							(typeof $bool148.__len__=='function'?
								($bool148.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['NotImplemented'];
			}
			return self['symmetric_difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool149,$bool150;
			if ((($bool150=!(($bool149=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool149 === false || $bool149 === 0 || $bool149 === '' ?
				false :
				(typeof $bool149=='object'?
					(typeof $bool149.__nonzero__=='function'?
						$bool149.__nonzero__() :
						(typeof $bool149.__len__=='function'?
							($bool149.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool150 === false || $bool150 === 0 || $bool150 === '' ?
					false :
					(typeof $bool150=='object'?
						(typeof $bool150.__nonzero__=='function'?
							$bool150.__nonzero__() :
							(typeof $bool150.__len__=='function'?
								($bool150.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['NotImplemented'];
			}
			return self['difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

self.__object[$p['hash'](value)] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_set;
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }

			return new_set;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set,$bool152,$bool151;
			if ((($bool152=!(($bool151=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool151 === false || $bool151 === 0 || $bool151 === '' ?
				false :
				(typeof $bool151=='object'?
					(typeof $bool151.__nonzero__=='function'?
						$bool151.__nonzero__() :
						(typeof $bool151.__len__=='function'?
							($bool151.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool152 === false || $bool152 === 0 || $bool152 === '' ?
					false :
					(typeof $bool152=='object'?
						(typeof $bool152.__nonzero__=='function'?
							$bool152.__nonzero__() :
							(typeof $bool152.__len__=='function'?
								($bool152.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool153,$bool154;
			if ((($bool154=!(($bool153=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool153 === false || $bool153 === 0 || $bool153 === '' ?
				false :
				(typeof $bool153=='object'?
					(typeof $bool153.__nonzero__=='function'?
						$bool153.__nonzero__() :
						(typeof $bool153.__len__=='function'?
							($bool153.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool154 === false || $bool154 === 0 || $bool154 === '' ?
					false :
					(typeof $bool154=='object'?
						(typeof $bool154.__nonzero__=='function'?
							$bool154.__nonzero__() :
							(typeof $bool154.__len__=='function'?
								($bool154.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in otherObj) {
            if (sVal in selfObj) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $eq19,$bool155,$eq20;
			if ((($bool155=(($eq19=(typeof isSet == "undefined"?$m.isSet:isSet)(value))===($eq20=1)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool155 === false || $bool155 === 0 || $bool155 === '' ?
					false :
					(typeof $bool155=='object'?
						(typeof $bool155.__nonzero__=='function'?
							$bool155.__nonzero__() :
							(typeof $bool155.__len__=='function'?
								($bool155.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				value = $p['frozenset'](value);
			}
delete self.__object[$p['hash'](value)];
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool156,$bool157,new_set;
			if ((($bool157=!(($bool156=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool156 === false || $bool156 === 0 || $bool156 === '' ?
				false :
				(typeof $bool156=='object'?
					(typeof $bool156.__nonzero__=='function'?
						$bool156.__nonzero__() :
						(typeof $bool156.__len__=='function'?
							($bool156.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool157 === false || $bool157 === 0 || $bool157 === '' ?
					false :
					(typeof $bool157=='object'?
						(typeof $bool157.__nonzero__=='function'?
							$bool157.__nonzero__() :
							(typeof $bool157.__len__=='function'?
								($bool157.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (sVal in otherObj) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool158,$bool159;
			if ((($bool159=!(($bool158=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool158 === false || $bool158 === 0 || $bool158 === '' ?
				false :
				(typeof $bool158=='object'?
					(typeof $bool158.__nonzero__=='function'?
						$bool158.__nonzero__() :
						(typeof $bool158.__len__=='function'?
							($bool158.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool159 === false || $bool159 === 0 || $bool159 === '' ?
					false :
					(typeof $bool159=='object'?
						(typeof $bool159.__nonzero__=='function'?
							$bool159.__nonzero__() :
							(typeof $bool159.__len__=='function'?
								($bool159.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('isdisjoint', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool161,$bool160;
			if ((($bool161=!(($bool160=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool160 === false || $bool160 === 0 || $bool160 === '' ?
				false :
				(typeof $bool160=='object'?
					(typeof $bool160.__nonzero__=='function'?
						$bool160.__nonzero__() :
						(typeof $bool160.__len__=='function'?
							($bool160.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool161 === false || $bool161 === 0 || $bool161 === '' ?
					false :
					(typeof $bool161=='object'?
						(typeof $bool161.__nonzero__=='function'?
							$bool161.__nonzero__() :
							(typeof $bool161.__len__=='function'?
								($bool161.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                return false;
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                return false;
            }
        }

			return true;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isdisjoint'] = $method;
		$method = $pyjs__bind_method2('issubset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool163,$bool162;
			if ((($bool163=!(($bool162=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool162 === false || $bool162 === 0 || $bool162 === '' ?
				false :
				(typeof $bool162=='object'?
					(typeof $bool162.__nonzero__=='function'?
						$bool162.__nonzero__() :
						(typeof $bool162.__len__=='function'?
							($bool162.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool163 === false || $bool163 === 0 || $bool163 === '' ?
					false :
					(typeof $bool163=='object'?
						(typeof $bool163.__nonzero__=='function'?
							$bool163.__nonzero__() :
							(typeof $bool163.__len__=='function'?
								($bool163.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}
			return self.__cmp__(other) < 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method2('issuperset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool165,$bool164;
			if ((($bool165=!(($bool164=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool164 === false || $bool164 === 0 || $bool164 === '' ?
				false :
				(typeof $bool164=='object'?
					(typeof $bool164.__nonzero__=='function'?
						$bool164.__nonzero__() :
						(typeof $bool164.__len__=='function'?
							($bool164.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool165 === false || $bool165 === 0 || $bool165 === '' ?
					false :
					(typeof $bool165=='object'?
						(typeof $bool165.__nonzero__=='function'?
							$bool165.__nonzero__() :
							(typeof $bool165.__len__=='function'?
								($bool165.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}
			return (self.__cmp__(other)|1) == 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var sVal in self.__object) {
            var value = self.__object[sVal];
            delete self.__object[sVal];
            return value;
        }
        
			throw ($m['KeyError']('pop from an empty set'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $bool166,val,$eq21,$eq22;
			if ((($bool166=(($eq21=(typeof isSet == "undefined"?$m.isSet:isSet)(value))===($eq22=1)&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool166 === false || $bool166 === 0 || $bool166 === '' ?
					false :
					(typeof $bool166=='object'?
						(typeof $bool166.__nonzero__=='function'?
							$bool166.__nonzero__() :
							(typeof $bool166.__len__=='function'?
								($bool166.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				val = $p['frozenset'](value);
			}
			else {
				val = value;
			}

        var h = $p['hash'](val);
        if (!(h in self.__object)) {
            throw $m['KeyError'](value);
        }
        delete self.__object[h];
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set,$bool167,$bool168;
			if ((($bool168=!(($bool167=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool167 === false || $bool167 === 0 || $bool167 === '' ?
				false :
				(typeof $bool167=='object'?
					(typeof $bool167.__nonzero__=='function'?
						$bool167.__nonzero__() :
						(typeof $bool167.__len__=='function'?
							($bool167.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool168 === false || $bool168 === 0 || $bool168 === '' ?
					false :
					(typeof $bool168=='object'?
						(typeof $bool168.__nonzero__=='function'?
							$bool168.__nonzero__() :
							(typeof $bool168.__len__=='function'?
								($bool168.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool170,$bool169;
			if ((($bool170=!(($bool169=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool169 === false || $bool169 === 0 || $bool169 === '' ?
				false :
				(typeof $bool169=='object'?
					(typeof $bool169.__nonzero__=='function'?
						$bool169.__nonzero__() :
						(typeof $bool169.__len__=='function'?
							($bool169.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool170 === false || $bool170 === 0 || $bool170 === '' ?
					false :
					(typeof $bool170=='object'?
						(typeof $bool170.__nonzero__=='function'?
							$bool170.__nonzero__() :
							(typeof $bool170.__len__=='function'?
								($bool170.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}

        var obj = new Object(),
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }
        self.__object = obj;

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		$method = $pyjs__bind_method2('union', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool171,new_set,$bool172;
			new_set = $m['set']();
			if ((($bool172=!(($bool171=(typeof isSet == "undefined"?$m.isSet:isSet)(other)) === null || $bool171 === false || $bool171 === 0 || $bool171 === '' ?
				false :
				(typeof $bool171=='object'?
					(typeof $bool171.__nonzero__=='function'?
						$bool171.__nonzero__() :
						(typeof $bool171.__len__=='function'?
							($bool171.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool172 === false || $bool172 === 0 || $bool172 === '' ?
					false :
					(typeof $bool172=='object'?
						(typeof $bool172.__nonzero__=='function'?
							$bool172.__nonzero__() :
							(typeof $bool172.__len__=='function'?
								($bool172.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				other = $p['frozenset'](other);
			}

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method2('update', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $bool174,$bool173;
			if ((($bool174=!(($bool173=(typeof isSet == "undefined"?$m.isSet:isSet)(data)) === null || $bool173 === false || $bool173 === 0 || $bool173 === '' ?
				false :
				(typeof $bool173=='object'?
					(typeof $bool173.__nonzero__=='function'?
						$bool173.__nonzero__() :
						(typeof $bool173.__len__=='function'?
							($bool173.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool174 === false || $bool174 === 0 || $bool174 === '' ?
					false :
					(typeof $bool174=='object'?
						(typeof $bool174.__nonzero__=='function'?
							$bool174.__nonzero__() :
							(typeof $bool174.__len__=='function'?
								($bool174.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				data = $p['frozenset'](data);
			}

        var selfObj = self.__object,
            dataObj = data.__object;
        for (var sVal in dataObj) {
            if (!(sVal in selfObj)) {
                selfObj[sVal] = dataObj[sVal];
            }
        }
        
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('set', $bases, $cls_definition);
	})();
$m['set']['__str__'] = $m['set']['__repr__'];
$m['set']['toString'] = $m['set']['__repr__'];
	$m['frozenset'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'd7597b0d0afc65ae2c41fe48633c215c';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_data = arguments[1];
			}
			if (typeof _data == 'undefined') _data=arguments.callee.__args__[3][1];
			var $bool175;
			if ((($bool175=(!('__object' in self))) === null || $bool175 === false || $bool175 === 0 || $bool175 === '' ?
					false :
					(typeof $bool175=='object'?
						(typeof $bool175.__nonzero__=='function'?
							$bool175.__nonzero__() :
							(typeof $bool175.__len__=='function'?
								($bool175.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['set']['__init__'](self, _data);
			}
			return null;
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var hashes = new Array(), obj = self.__object, i = 0;
        for (var v in obj) {
            hashes[i++] = v;
        }
        hashes.sort();
        return (self.$H = hashes.join("|"));

		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		var $bases = new Array($m['set']);
		return $pyjs_type('frozenset', $bases, $cls_definition);
	})();
$m['frozenset']['__str__'] = $m['frozenset']['__repr__'];
$m['frozenset']['toString'] = $m['frozenset']['__repr__'];
	$m['property'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'a82c2154eae9e7325f36f3c0a5b4e8a1';
		$method = $pyjs__bind_method2('__init__', function(fget, fset, fdel, doc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fget = arguments[1];
				fset = arguments[2];
				fdel = arguments[3];
				doc = arguments[4];
			}
			if (typeof fget == 'undefined') fget=arguments.callee.__args__[3][1];
			if (typeof fset == 'undefined') fset=arguments.callee.__args__[4][1];
			if (typeof fdel == 'undefined') fdel=arguments.callee.__args__[5][1];
			if (typeof doc == 'undefined') doc=arguments.callee.__args__[6][1];
			var $or6,$bool176,$bool177,$bool178,$or7,$bool179,$attr110,$attr109;
			self.fget = fget;
			self.fset = fset;
			self.fdel = fdel;
			if ((($bool179=((($bool177=$or6=!(($bool176=(doc === null)) === null || $bool176 === false || $bool176 === 0 || $bool176 === '' ?
				false :
				(typeof $bool176=='object'?
					(typeof $bool176.__nonzero__=='function'?
						$bool176.__nonzero__() :
						(typeof $bool176.__len__=='function'?
							($bool176.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool177 === false || $bool177 === 0 || $bool177 === '' ?
				false :
				(typeof $bool177=='object'?
					(typeof $bool177.__nonzero__=='function'?
						$bool177.__nonzero__() :
						(typeof $bool177.__len__=='function'?
							($bool177.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or6:!(($bool178=$p['hasattr'](fget, '__doc__')) === null || $bool178 === false || $bool178 === 0 || $bool178 === '' ?
				false :
				(typeof $bool178=='object'?
					(typeof $bool178.__nonzero__=='function'?
						$bool178.__nonzero__() :
						(typeof $bool178.__len__=='function'?
							($bool178.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ))) === null || $bool179 === false || $bool179 === 0 || $bool179 === '' ?
					false :
					(typeof $bool179=='object'?
						(typeof $bool179.__nonzero__=='function'?
							$bool179.__nonzero__() :
							(typeof $bool179.__len__=='function'?
								($bool179.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.__doc__ = doc;
			}
			else {
				self.__doc__ = fget['__doc__'];
			}
			return null;
		}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				objtype = arguments[2];
			}
			if (typeof objtype == 'undefined') objtype=arguments.callee.__args__[4][1];
			var $attr111,$attr112,$bool181,$bool180;
			if ((($bool180=(obj === null)) === null || $bool180 === false || $bool180 === 0 || $bool180 === '' ?
					false :
					(typeof $bool180=='object'?
						(typeof $bool180.__nonzero__=='function'?
							$bool180.__nonzero__() :
							(typeof $bool180.__len__=='function'?
								($bool180.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self;
			}
			if ((($bool181=(self['fget'] === null)) === null || $bool181 === false || $bool181 === 0 || $bool181 === '' ?
					false :
					(typeof $bool181=='object'?
						(typeof $bool181.__nonzero__=='function'?
							$bool181.__nonzero__() :
							(typeof $bool181.__len__=='function'?
								($bool181.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'unreadable attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return self['fget'](obj);
		}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
		$cls_definition['__get__'] = $method;
		$method = $pyjs__bind_method2('__set__', function(obj, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				value = arguments[2];
			}
			var $attr114,$bool182,$attr113;
			if ((($bool182=(self['fset'] === null)) === null || $bool182 === false || $bool182 === 0 || $bool182 === '' ?
					false :
					(typeof $bool182=='object'?
						(typeof $bool182.__nonzero__=='function'?
							$bool182.__nonzero__() :
							(typeof $bool182.__len__=='function'?
								($bool182.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = "can't set attribute";
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fset'](obj, value);
			return null;
		}
	, 1, [null,null,['self'],['obj'],['value']]);
		$cls_definition['__set__'] = $method;
		$method = $pyjs__bind_method2('__delete__', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var $attr115,$bool183,$attr116;
			if ((($bool183=(self['fdel'] === null)) === null || $bool183 === false || $bool183 === 0 || $bool183 === '' ?
					false :
					(typeof $bool183=='object'?
						(typeof $bool183.__nonzero__=='function'?
							$bool183.__nonzero__() :
							(typeof $bool183.__len__=='function'?
								($bool183.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = "can't delete attribute";
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fdel'](obj);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['__delete__'] = $method;
		$method = $pyjs__bind_method2('setter', function(fset) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fset = arguments[1];
			}

			self.fset = fset;
			return self;
		}
	, 1, [null,null,['self'],['fset']]);
		$cls_definition['setter'] = $method;
		$method = $pyjs__bind_method2('deleter', function(fdel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fdel = arguments[1];
			}

			self.fdel = fdel;
			return self;
		}
	, 1, [null,null,['self'],['fdel']]);
		$cls_definition['deleter'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('property', $bases, $cls_definition);
	})();
	$m['staticmethod'] = function(func) {


    var fnwrap = function() {
        return func.apply(null,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = func.__name__;
    fnwrap.__args__ = func.__args__;
    fnwrap.__bind_type__ = 3;
    return fnwrap;
    
	};
	$m['staticmethod'].__name__ = 'staticmethod';

	$m['staticmethod'].__bind_type__ = 0;
	$m['staticmethod'].__args__ = [null,null,['func']];
	$m['$$super'] = function(typ, object_or_type) {
		if (typeof object_or_type == 'undefined') object_or_type=arguments.callee.__args__[3][1];
		var $bool185,i,$bool184;
		if ((($bool185=!(($bool184=(typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(object_or_type, typ)) === null || $bool184 === false || $bool184 === 0 || $bool184 === '' ?
			false :
			(typeof $bool184=='object'?
				(typeof $bool184.__nonzero__=='function'?
					$bool184.__nonzero__() :
					(typeof $bool184.__len__=='function'?
						($bool184.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool185 === false || $bool185 === 0 || $bool185 === '' ?
				false :
				(typeof $bool185=='object'?
					(typeof $bool185.__nonzero__=='function'?
						$bool185.__nonzero__() :
						(typeof $bool185.__len__=='function'?
							($bool185.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			i = (typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(object_or_type, typ);
			throw ($m['TypeError']('super(type, obj): obj must be an instance or subtype of type'));
		}

    var type_ = typ
    if (typeof type_.__mro__ == 'undefined') {
        type_ = type_.__class__;
    }
    var fn = $pyjs_type('super', type_.__mro__.slice(1), {});
    fn.__new__ = fn.__mro__[1].__new__;
    fn.__init__ = fn.__mro__[1].__init__;
    if (object_or_type.__is_instance__ === false) {
        return fn;
    }
    var obj = new Object();
    function wrapper(obj, name) {
        var fnwrap = function() {
            return obj[name].apply(object_or_type,
                                   $pyjs_array_slice.call(arguments));
        };
        fnwrap.__name__ = name;
        fnwrap.__args__ = obj[name].__args__;
        fnwrap.__bind_type__ = obj[name].__bind_type__;
        return fnwrap;
    }
    for (var m in fn) {
        if (typeof fn[m] == 'function') {
            obj[m] = wrapper(fn, m);
        }
    }
    obj.__is_instance__ = object_or_type.__is_instance__;
    return obj;
    
	};
	$m['$$super'].__name__ = 'super';

	$m['$$super'].__bind_type__ = 0;
	$m['$$super'].__args__ = [null,null,['typ'],['object_or_type', null]];
	$m['xrange'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var $attr119,$attr118,$bool191,$bool189,$bool188,$attr121,$bool192,$bool187,$bool186,$attr122,$attr117,$attr120,$assign1,rval,nval,$bool190;
		if ((($bool186=(stop === null)) === null || $bool186 === false || $bool186 === 0 || $bool186 === '' ?
				false :
				(typeof $bool186=='object'?
					(typeof $bool186.__nonzero__=='function'?
						$bool186.__nonzero__() :
						(typeof $bool186.__len__=='function'?
							($bool186.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			stop = start;
			start = 0;
		}
		if ((($bool188=!(($bool187=start!== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))) === null || $bool187 === false || $bool187 === 0 || $bool187 === '' ?
			false :
			(typeof $bool187=='object'?
				(typeof $bool187.__nonzero__=='function'?
					$bool187.__nonzero__() :
					(typeof $bool187.__len__=='function'?
						($bool187.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool188 === false || $bool188 === 0 || $bool188 === '' ?
				false :
				(typeof $bool188=='object'?
					(typeof $bool188.__nonzero__=='function'?
						$bool188.__nonzero__() :
						(typeof $bool188.__len__=='function'?
							($bool188.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ((($bool190=!(($bool189=stop!== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))) === null || $bool189 === false || $bool189 === 0 || $bool189 === '' ?
			false :
			(typeof $bool189=='object'?
				(typeof $bool189.__nonzero__=='function'?
					$bool189.__nonzero__() :
					(typeof $bool189.__len__=='function'?
						($bool189.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool190 === false || $bool190 === 0 || $bool190 === '' ?
				false :
				(typeof $bool190=='object'?
					(typeof $bool190.__nonzero__=='function'?
						$bool190.__nonzero__() :
						(typeof $bool190.__len__=='function'?
							($bool190.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ((($bool192=!(($bool191=step!== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))) === null || $bool191 === false || $bool191 === 0 || $bool191 === '' ?
			false :
			(typeof $bool191=='object'?
				(typeof $bool191.__nonzero__=='function'?
					$bool191.__nonzero__() :
					(typeof $bool191.__len__=='function'?
						($bool191.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool192 === false || $bool192 === 0 || $bool192 === '' ?
				false :
				(typeof $bool192=='object'?
					(typeof $bool192.__nonzero__=='function'?
						$bool192.__nonzero__() :
						(typeof $bool192.__len__=='function'?
							($bool192.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		$assign1 = start;
		rval = $assign1;
		nval = $assign1;

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    var _stop = start+ nstep * step;
    if (nstep <= 0) nval = _stop;
    var x = {
        'next': function(noStop) {
            if (nval == _stop) {
                if (noStop === true) {
                    return;
                }
                throw $m['StopIteration']();
            }
            rval = nval;
            nval += step;

		return rval;

        },
        '$genfunc': function() {
            return this.next(true);
        },
        '__iter__': function() {
            return this;
        },
        '__reversed__': function() {
            return $m['xrange'](_stop-step, start-step, -step);
        },
        'toString': function() {
            var s = "xrange(";
            if (start!= 0) {
                s += start+ ", ";
            }
            s += _stop;
            if (step!= 1) {
                s += ", " + step;
            }
            return s + ")";
        },
        '__repr__': function() {
            return "'" + this.toString() + "'";
        }
    };
    x['__str__'] = x.toString;
    return x;
    
	};
	$m['xrange'].__name__ = 'xrange';

	$m['xrange'].__bind_type__ = 0;
	$m['xrange'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	$m['get_len_of_range'] = function(lo, hi, step) {
		var n;
		n = 0;

    var diff = hi - lo - 1;
    n = Math.floor(diff / step) + 1;
    
		return n;
	};
	$m['get_len_of_range'].__name__ = 'get_len_of_range';

	$m['get_len_of_range'].__bind_type__ = 0;
	$m['get_len_of_range'].__args__ = [null,null,['lo'],['hi'],['step']];
	$m['range'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var $bool200,$cmp43,$bool201,$cmp44,$bool198,$bool199,$bool193,$bool196,$bool197,$bool194,$bool195,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128,ilow,$eq23,$eq24,items,n,r;
		if ((($bool193=(stop === null)) === null || $bool193 === false || $bool193 === 0 || $bool193 === '' ?
				false :
				(typeof $bool193=='object'?
					(typeof $bool193.__nonzero__=='function'?
						$bool193.__nonzero__() :
						(typeof $bool193.__len__=='function'?
							($bool193.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			stop = start;
			start = 0;
		}
		ilow = start;
		if ((($bool195=!(($bool194=start!== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))) === null || $bool194 === false || $bool194 === 0 || $bool194 === '' ?
			false :
			(typeof $bool194=='object'?
				(typeof $bool194.__nonzero__=='function'?
					$bool194.__nonzero__() :
					(typeof $bool194.__len__=='function'?
						($bool194.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool195 === false || $bool195 === 0 || $bool195 === '' ?
				false :
				(typeof $bool195=='object'?
					(typeof $bool195.__nonzero__=='function'?
						$bool195.__nonzero__() :
						(typeof $bool195.__len__=='function'?
							($bool195.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ((($bool197=!(($bool196=stop!== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))) === null || $bool196 === false || $bool196 === 0 || $bool196 === '' ?
			false :
			(typeof $bool196=='object'?
				(typeof $bool196.__nonzero__=='function'?
					$bool196.__nonzero__() :
					(typeof $bool196.__len__=='function'?
						($bool196.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool197 === false || $bool197 === 0 || $bool197 === '' ?
				false :
				(typeof $bool197=='object'?
					(typeof $bool197.__nonzero__=='function'?
						$bool197.__nonzero__() :
						(typeof $bool197.__len__=='function'?
							($bool197.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ((($bool199=!(($bool198=step!== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))) === null || $bool198 === false || $bool198 === 0 || $bool198 === '' ?
			false :
			(typeof $bool198=='object'?
				(typeof $bool198.__nonzero__=='function'?
					$bool198.__nonzero__() :
					(typeof $bool198.__len__=='function'?
						($bool198.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool199 === false || $bool199 === 0 || $bool199 === '' ?
				false :
				(typeof $bool199=='object'?
					(typeof $bool199.__nonzero__=='function'?
						$bool199.__nonzero__() :
						(typeof $bool199.__len__=='function'?
							($bool199.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		if ((($bool200=(($eq23=step)===($eq24=0)&&$eq23===null?true:
			($eq23===null?false:($eq24===null?false:
				((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
					((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
						$eq23==$eq24)))))) === null || $bool200 === false || $bool200 === 0 || $bool200 === '' ?
				false :
				(typeof $bool200=='object'?
					(typeof $bool200.__nonzero__=='function'?
						$bool200.__nonzero__() :
						(typeof $bool200.__len__=='function'?
							($bool200.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['ValueError']('range() step argument must not be zero'));
		}
		if ((($bool201=((($cmp43=step)===($cmp44=0)?0:
			(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
				($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
				$m['cmp']($cmp43, $cmp44))) == 1)) === null || $bool201 === false || $bool201 === 0 || $bool201 === '' ?
				false :
				(typeof $bool201=='object'?
					(typeof $bool201.__nonzero__=='function'?
						$bool201.__nonzero__() :
						(typeof $bool201.__len__=='function'?
							($bool201.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			n = $m['get_len_of_range'](ilow, stop, step);
		}
		else {
			n = $m['get_len_of_range'](stop, ilow, (typeof ($usub8=step)=='number'?
				-$usub8:
				$m['op_usub']($usub8)));
		}
		r = null;
		items = new Array();

    for (var i = 0; i < n; i++) {
    
		items['push'](ilow);

        ilow += step;
    }
    r = $m['list'](items);
    
		return r;
	};
	$m['range'].__name__ = 'range';

	$m['range'].__bind_type__ = 0;
	$m['range'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	$m['__getslice'] = function(object, lower, upper) {


    if (object=== null) {
        return null;
    }
    if (typeof object.__getslice__ == 'function') {
        return object.__getslice__(lower, upper);
    }
    if (object.slice == 'function')
        return object.slice(lower, upper);

    return null;
    
	};
	$m['__getslice'].__name__ = '__getslice';

	$m['__getslice'].__bind_type__ = 0;
	$m['__getslice'].__args__ = [null,null,['object'],['lower'],['upper']];
	$m['__delslice'] = function(object, lower, upper) {


    if (typeof object.__delslice__ == 'function') {
        return object.__delslice__(lower, upper);
    }
    if (object.__getslice__ == 'function'
      && object.__delitem__ == 'function') {
        if (upper== null) {
            upper= $p['len'](object);
        }
        for (var i = lower; i < upper; i++) {
            object.__delitem__(i);
        }
        return null;
    }
    throw $m['TypeError']('object does not support item deletion');
    return null;
    
	};
	$m['__delslice'].__name__ = '__delslice';

	$m['__delslice'].__bind_type__ = 0;
	$m['__delslice'].__args__ = [null,null,['object'],['lower'],['upper']];
	$m['__setslice'] = function(object, lower, upper, value) {


    if (typeof object.__setslice__ == 'function') {
        return object.__setslice__(lower, upper, value);
    }
    throw $m['TypeError']('object does not support __setslice__');
    return null;
    
	};
	$m['__setslice'].__name__ = '__setslice';

	$m['__setslice'].__bind_type__ = 0;
	$m['__setslice'].__args__ = [null,null,['object'],['lower'],['upper'],['value']];
	$m['str'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '647a29e56b5ff8869b1d0413661bbbe1';
		$method = $pyjs__bind_method2('__new__', function(self, text) {
			if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];


        if (text==='') {
            return text;
        }
        if (text===null) {
            return 'None';
        }
        if (typeof text=='boolean') {
            if (text) return 'True';
            return 'False';
        }
        if (text.__is_instance__ === false) {
            return $m['object'].__str__(text);
        }
        if ($p['hasattr'](text,'__str__')) {
            return text.__str__();
        }
        return String(text);

		}
	, 3, [null,null,['self'],['text', '']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array($m['basestring']);
		return $pyjs_type('str', $bases, $cls_definition);
	})();
	$m['ord'] = function(x) {
		var $len10,$bool202,$bool203,$and25,$and24;
		if ((($bool203=((($bool202=$and24=typeof x== 'string') === null || $bool202 === false || $bool202 === 0 || $bool202 === '' ?
			false :
			(typeof $bool202=='object'?
				(typeof $bool202.__nonzero__=='function'?
					$bool202.__nonzero__() :
					(typeof $bool202.__len__=='function'?
						($bool202.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?((($len10=x) === null?0:
			(typeof $len10.__array != 'undefined' ? $len10.__array.length:
				(typeof $len10.__len__ == 'function'?$len10.__len__():
					(typeof $len10.length != 'undefined'?$len10.length:
						$p['len']($len10))))) === 1):$and24)) === null || $bool203 === false || $bool203 === 0 || $bool203 === '' ?
				false :
				(typeof $bool203=='object'?
					(typeof $bool203.__nonzero__=='function'?
						$bool203.__nonzero__() :
						(typeof $bool203.__len__=='function'?
							($bool203.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return x['charCodeAt'](0);
		}
		else {
throw $m['TypeError']("ord() expected string of length 1");
		}
		return null;
	};
	$m['ord'].__name__ = 'ord';

	$m['ord'].__bind_type__ = 0;
	$m['ord'].__args__ = [null,null,['x']];
	$m['chr'] = function(x) {


        return String.fromCharCode(x);
    
	};
	$m['chr'].__name__ = 'chr';

	$m['chr'].__bind_type__ = 0;
	$m['chr'].__args__ = [null,null,['x']];
	$m['is_basetype'] = function(x) {


       var t = typeof(x);
       return t == 'boolean' ||
       t == 'function' ||
       t == 'number' ||
       t == 'string' ||
       t == 'undefined';
    
	};
	$m['is_basetype'].__name__ = 'is_basetype';

	$m['is_basetype'].__bind_type__ = 0;
	$m['is_basetype'].__args__ = [null,null,['x']];
	$m['get_pyjs_classtype'] = function(x) {


        if (x!== null && typeof x.__is_instance__ == 'boolean') {
            var src = x.__name__;
            return src;
        }
        return null;
    
	};
	$m['get_pyjs_classtype'].__name__ = 'get_pyjs_classtype';

	$m['get_pyjs_classtype'].__bind_type__ = 0;
	$m['get_pyjs_classtype'].__args__ = [null,null,['x']];
	$m['repr'] = function(x) {
		var $bool204,$bool205;

       if (x=== null)
           return "None";

       var t = typeof(x);

       if (t == "undefined")
           return "undefined";

       if (t == "boolean") {
           if (x) return "True";
           return "False";
       }

       if (t == "number")
           return x.toString();

       if (t == "string") {
           if (x.indexOf("'") == -1)
               return "'" + x+ "'";
           if (x.indexOf('"') == -1)
               return '"' + x+ '"';
           var s = x.$$replace(new RegExp('"', "g"), '\\"');
           return '"' + s + '"';
       }


		if ((($bool204=$p['hasattr'](x, '__repr__')) === null || $bool204 === false || $bool204 === 0 || $bool204 === '' ?
				false :
				(typeof $bool204=='object'?
					(typeof $bool204.__nonzero__=='function'?
						$bool204.__nonzero__() :
						(typeof $bool204.__len__=='function'?
							($bool204.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool205=$p['callable'](x)) === null || $bool205 === false || $bool205 === 0 || $bool205 === '' ?
					false :
					(typeof $bool205=='object'?
						(typeof $bool205.__nonzero__=='function'?
							$bool205.__nonzero__() :
							(typeof $bool205.__len__=='function'?
								($bool205.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return x['__repr__'](x);
			}
			return x['__repr__']();
		}

       if (t == "function")
           return "<function " + x.toString() + ">";

       // If we get here, x is an object.  See if it's a Pyjamas class.

       if (!$p['hasattr'](x, "__init__"))
           return "<" + x.toString() + ">";

       // Handle the common Pyjamas data types.

       var constructor = "UNKNOWN";

       constructor = $m['get_pyjs_classtype'](x);

        //alert("repr constructor: " + constructor);

       // If we get here, the class isn't one we know -> return the class name.
       // Note that we replace underscores with dots so that the name will
       // (hopefully!) look like the original Python name.
       // (XXX this was for pyjamas 0.4 but may come back in an optimised mode)

       //var s = constructor.$$replace(new RegExp('_', "g"), '.');
       return "<" + constructor + " object>";
    
	};
	$m['repr'].__name__ = 'repr';

	$m['repr'].__bind_type__ = 0;
	$m['repr'].__args__ = [null,null,['x']];
	$m['len'] = function(object) {
		var v;
		v = 0;

    if (typeof object== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (object=== null)
        return v;
    else if (typeof object.__array != 'undefined')
        v = object.__array.length;
    else if (typeof object.__len__ == 'function')
        v = object.__len__();
    else if (typeof object.length != 'undefined')
        v = object.length;
    else throw $m['TypeError']("object has no len()");
    if (v.__number__ & 0x06) return v;
    
		return v;
	};
	$m['len'].__name__ = 'len';

	$m['len'].__bind_type__ = 0;
	$m['len'].__args__ = [null,null,['object']];
	$m['isinstance'] = function(object_, classinfo) {
		var ci,$iter13_nextval,$bool208,$iter13_iter,$bool206,$bool207,$iter13_array,$iter13_idx,$iter13_type;

    if (typeof object_== 'undefined') {
        return false;
    }
    if (object_== null) {
        if (classinfo== null) {
            return true;
        }
        return false;
    }
    switch (classinfo.__name__) {
        case 'float':
            return typeof object_== 'number' && object_.__number__ == 0x01 && isFinite(object_);
        case 'int':
        case 'float_int':
            if (object_!== null
                && object_.__number__) {
                if (object_.__number__ == 0x02) {
                    return true;
                }
                if (isFinite(object_) &&
                    Math.ceil(object_) == object_) {
                    return true;
                }
            }
            return false;
        case 'basestring':
        case 'str':
            return typeof object_== 'string';
        case 'bool':
            return typeof object_== 'boolean';
        case 'long':
            return object_.__number__ == 0x04;
    }
    if (typeof object_!= 'object' && typeof object_!= 'function') {
        return false;
    }

		if ((($bool206=$p['_isinstance'](classinfo, $m['tuple'])) === null || $bool206 === false || $bool206 === 0 || $bool206 === '' ?
				false :
				(typeof $bool206=='object'?
					(typeof $bool206.__nonzero__=='function'?
						$bool206.__nonzero__() :
						(typeof $bool206.__len__=='function'?
							($bool206.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool207=$p['_isinstance'](object_, $m['tuple'])) === null || $bool207 === false || $bool207 === 0 || $bool207 === '' ?
					false :
					(typeof $bool207=='object'?
						(typeof $bool207.__nonzero__=='function'?
							$bool207.__nonzero__() :
							(typeof $bool207.__len__=='function'?
								($bool207.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
			$iter13_iter = classinfo;
			if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
				$iter13_type = 0;
			} else {
				$iter13_iter = $iter13_iter.__iter__();
				$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter13_idx = 0;
			while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
				ci = $iter13_nextval;
				if ((($bool208=$m['isinstance'](object_, ci)) === null || $bool208 === false || $bool208 === 0 || $bool208 === '' ?
						false :
						(typeof $bool208=='object'?
							(typeof $bool208.__nonzero__=='function'?
								$bool208.__nonzero__() :
								(typeof $bool208.__len__=='function'?
									($bool208.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
			}
			return false;
		}
		else {
			return $p['_isinstance'](object_, classinfo);
		}
		return null;
	};
	$m['isinstance'].__name__ = 'isinstance';

	$m['isinstance'].__bind_type__ = 0;
	$m['isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	$m['_isinstance'] = function(object_, classinfo) {


    if (   object_.__is_instance__ !== true
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	$m['_isinstance'].__name__ = '_isinstance';

	$m['_isinstance'].__bind_type__ = 0;
	$m['_isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	$m['issubclass'] = function(class_, classinfo) {
		var $bool211,$bool210,$iter14_array,$bool212,$iter14_type,$bool209,ci,$iter14_iter,$iter14_idx,$iter14_nextval;
		if ((($bool209= typeof class_ == 'undefined' || class_ === null || class_.__is_instance__ !== false ) === null || $bool209 === false || $bool209 === 0 || $bool209 === '' ?
				false :
				(typeof $bool209=='object'?
					(typeof $bool209.__nonzero__=='function'?
						$bool209.__nonzero__() :
						(typeof $bool209.__len__=='function'?
							($bool209.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			throw ($m['TypeError']('arg 1 must be a class'));
		}
		if ((($bool210=$m['isinstance'](classinfo, $m['tuple'])) === null || $bool210 === false || $bool210 === 0 || $bool210 === '' ?
				false :
				(typeof $bool210=='object'?
					(typeof $bool210.__nonzero__=='function'?
						$bool210.__nonzero__() :
						(typeof $bool210.__len__=='function'?
							($bool210.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$iter14_iter = classinfo;
			if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
				$iter14_type = 0;
			} else {
				$iter14_iter = $iter14_iter.__iter__();
				$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter14_idx = 0;
			while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
				ci = $iter14_nextval;
				if ((($bool211=$m['issubclass'](class_, ci)) === null || $bool211 === false || $bool211 === 0 || $bool211 === '' ?
						false :
						(typeof $bool211=='object'?
							(typeof $bool211.__nonzero__=='function'?
								$bool211.__nonzero__() :
								(typeof $bool211.__len__=='function'?
									($bool211.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
			}
			return false;
		}
		else {
			if ((($bool212= typeof classinfo == 'undefined' || classinfo.__is_instance__ !== false ) === null || $bool212 === false || $bool212 === 0 || $bool212 === '' ?
					false :
					(typeof $bool212=='object'?
						(typeof $bool212.__nonzero__=='function'?
							$bool212.__nonzero__() :
							(typeof $bool212.__len__=='function'?
								($bool212.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['TypeError']('arg 2 must be a class or tuple of classes'));
			}
			return (typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(class_, classinfo);
		}
		return null;
	};
	$m['issubclass'].__name__ = 'issubclass';

	$m['issubclass'].__bind_type__ = 0;
	$m['issubclass'].__args__ = [null,null,['class_'],['classinfo']];
	$m['_issubtype'] = function(object_, classinfo) {


    if (   object_.__is_instance__ === null
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	$m['_issubtype'].__name__ = '_issubtype';

	$m['_issubtype'].__bind_type__ = 0;
	$m['_issubtype'].__args__ = [null,null,['object_'],['classinfo']];
	$m['__getattr_check'] = function(attr, attr_left, attr_right, attrstr, bound_methods, descriptors, attribute_checking, source_tracking) {

 		return null;
	};
	$m['__getattr_check'].__name__ = '__getattr_check';

	$m['__getattr_check'].__bind_type__ = 0;
	$m['__getattr_check'].__args__ = [null,null,['attr'],['attr_left'],['attr_right'],['attrstr'],['bound_methods'],['descriptors'],['attribute_checking'],['source_tracking']];
	$m['getattr'] = function(obj, name, default_value) {
		if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


    if (obj=== null || typeof obj== 'undefined') {
        if (arguments.length != 3 || typeof obj== 'undefined') {
            throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
        }
        return default_value;
    }
    var mapped_name = attrib_remap.indexOf(name) < 0 ? name:
                        '$$'+name;
    if (typeof obj[mapped_name] == 'undefined') {
        if (arguments.length != 3) {
            if (obj.__is_instance__ === true &&
                    typeof obj.__getattr__ == 'function') {
                return obj.__getattr__(name);
            }
            throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
        }
        return default_value;
    }
    var method = obj[mapped_name];
    if (method === null) return method;

    if (typeof method.__get__ == 'function') {
        if (obj.__is_instance__) {
            return method.__get__(obj, obj.__class__);
        }
        return method.__get__(null, obj.__class__);
    }
    if (   typeof method != 'function'
        || typeof method.__is_instance__ != 'undefined'
        || obj.__is_instance__ !== true
        || name== '__class__') {
        return obj[mapped_name];
    }

    var fnwrap = function() {
        return method.apply(obj,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = name;
    fnwrap.__args__ = obj[mapped_name].__args__;
    fnwrap.__class__ = obj.__class__;
    fnwrap.__doc__ = method.__doc__ || '';
    fnwrap.__bind_type__ = obj[mapped_name].__bind_type__;
    if (typeof obj[mapped_name].__is_instance__ != 'undefined') {
        fnwrap.__is_instance__ = obj[mapped_name].__is_instance__;
    } else {
        fnwrap.__is_instance__ = false;
    }
    return fnwrap;
    
	};
	$m['getattr'].__name__ = 'getattr';

	$m['getattr'].__bind_type__ = 0;
	$m['getattr'].__args__ = [null,null,['obj'],['name'],['default_value', null]];
	$m['_del'] = function(obj) {


    if (typeof obj.__delete__ == 'function') {
        obj.__delete__(obj);
    } else {
        delete obj;
    }
    
	};
	$m['_del'].__name__ = '_del';

	$m['_del'].__bind_type__ = 0;
	$m['_del'].__args__ = [null,null,['obj']];
	$m['delattr'] = function(obj, name) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj.__is_instance__ && typeof obj.__delattr__ == 'function') {
        obj.__delattr__(name);
        return;
    }
    var mapped_name = attrib_remap.indexOf(name) < 0 ? name:
                        '$$'+name;
    if (   obj!== null
        && (typeof obj== 'object' || typeof obj== 'function')
        && (typeof(obj[mapped_name]) != "undefined") ){
        if (obj.__is_instance__
            && typeof obj[mapped_name].__delete__ == 'function') {
            obj[mapped_name].__delete__(obj);
        } else {
            delete obj[mapped_name];
        }
        return;
    }
    if (obj=== null) {
        throw $m['AttributeError']("'NoneType' object"+
                                  "has no attribute '"+name+"'");
    }
    if (typeof obj!= 'object' && typeof obj== 'function') {
       throw $m['AttributeError']("'"+typeof(obj)+
                                 "' object has no attribute '"+name+"'");
    }
    throw $m['AttributeError'](obj.__name__+
                              " instance has no attribute '"+ name+"'");
    
	};
	$m['delattr'].__name__ = 'delattr';

	$m['delattr'].__bind_type__ = 0;
	$m['delattr'].__args__ = [null,null,['obj'],['name']];
	$m['setattr'] = function(obj, name, value) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj.__is_instance__ && typeof obj.__setattr__ == 'function') {
        obj.__setattr__(name, value)
        return;
    }
    if (attrib_remap.indexOf(name) >= 0) {
        name= '$$' + name;
    }
    if (   typeof obj[name] != 'undefined'
        && obj.__is_instance__
        && obj[name] !== null
        && typeof obj[name].__set__ == 'function') {
        obj[name].__set__(obj, value);
    } else {
        obj[name] = value;
    }
    
	};
	$m['setattr'].__name__ = 'setattr';

	$m['setattr'].__bind_type__ = 0;
	$m['setattr'].__args__ = [null,null,['obj'],['name'],['value']];
	$m['hasattr'] = function(obj, name) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name != 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj=== null) return false;
    if (typeof obj[name] == 'undefined' && (
            typeof obj['$$'+name] == 'undefined' ||
            attrib_remap.indexOf(name) < 0)
      ) {
        return false;
    }
    //if (obj!= 'object' && typeof obj!= 'function')
    //    return false;
    return true;
    
	};
	$m['hasattr'].__name__ = 'hasattr';

	$m['hasattr'].__bind_type__ = 0;
	$m['hasattr'].__args__ = [null,null,['obj'],['name']];
	$m['dir'] = function(obj) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    var properties=$m['list']();
    for (var property in obj) {
        if (property.substring(0,2) == '$$') {
            // handle back mapping of name
            properties.append(property.substring(2));
        } else if (attrib_remap.indexOf(property) < 0) {
            properties.append(property);
        }
    }
    return properties;
    
	};
	$m['dir'].__name__ = 'dir';

	$m['dir'].__bind_type__ = 0;
	$m['dir'].__args__ = [null,null,['obj']];
	$m['filter'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter16_array,$bool213,$iter15_iter,$iter16_type,items,$iter15_array,$iter15_idx,$iter16_idx,item,$bool215,$iter15_nextval,$iter15_type,$iter16_nextval,$iter16_iter,$bool214;
		items = $p['list']([]);
		if ((($bool213=(sequence === null)) === null || $bool213 === false || $bool213 === 0 || $bool213 === '' ?
				false :
				(typeof $bool213=='object'?
					(typeof $bool213.__nonzero__=='function'?
						$bool213.__nonzero__() :
						(typeof $bool213.__len__=='function'?
							($bool213.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			sequence = method;
			method = obj;
			$iter15_iter = sequence;
			if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
				$iter15_type = 0;
			} else {
				$iter15_iter = $iter15_iter.__iter__();
				$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter15_idx = 0;
			while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
				item = $iter15_nextval;
				if ((($bool214=method(item)) === null || $bool214 === false || $bool214 === 0 || $bool214 === '' ?
						false :
						(typeof $bool214=='object'?
							(typeof $bool214.__nonzero__=='function'?
								$bool214.__nonzero__() :
								(typeof $bool214.__len__=='function'?
									($bool214.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					items['append'](item);
				}
			}
		}
		else {
			$iter16_iter = sequence;
			if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter.__iter__();
				$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				item = $iter16_nextval;
				if ((($bool215=method['$$call'](obj, item)) === null || $bool215 === false || $bool215 === 0 || $bool215 === '' ?
						false :
						(typeof $bool215=='object'?
							(typeof $bool215.__nonzero__=='function'?
								$bool215.__nonzero__() :
								(typeof $bool215.__len__=='function'?
									($bool215.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					items['append'](item);
				}
			}
		}
		return items;
	};
	$m['filter'].__name__ = 'filter';

	$m['filter'].__bind_type__ = 0;
	$m['filter'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	$m['map'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter17_nextval,$iter18_type,$iter18_iter,$iter17_iter,$iter18_array,$bool216,items,$iter17_array,$iter18_idx,item,$iter17_idx,$iter17_type,$iter18_nextval;
		items = $p['list']([]);
		if ((($bool216=(sequence === null)) === null || $bool216 === false || $bool216 === 0 || $bool216 === '' ?
				false :
				(typeof $bool216=='object'?
					(typeof $bool216.__nonzero__=='function'?
						$bool216.__nonzero__() :
						(typeof $bool216.__len__=='function'?
							($bool216.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			sequence = method;
			method = obj;
			$iter17_iter = sequence;
			if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
				$iter17_type = 0;
			} else {
				$iter17_iter = $iter17_iter.__iter__();
				$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter17_idx = 0;
			while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
				item = $iter17_nextval;
				items['append'](method(item));
			}
		}
		else {
			$iter18_iter = sequence;
			if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
				$iter18_type = 0;
			} else {
				$iter18_iter = $iter18_iter.__iter__();
				$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter18_idx = 0;
			while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
				item = $iter18_nextval;
				items['append'](method['$$call'](obj, item));
			}
		}
		return items;
	};
	$m['map'].__name__ = 'map';

	$m['map'].__bind_type__ = 0;
	$m['map'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	$m['reduce'] = function(func, iterable, initializer) {
		if (typeof initializer == 'undefined') initializer=arguments.callee.__args__[4][1];
		var $iter19_idx,$bool217,$iter19_type,$bool219,$bool218,emtpy,$iter19_iter,$iter19_nextval,$pyjs_try_err,value,$iter19_array;
		try {
			iterable = $p['iter'](iterable);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() arg 2 must support iteration';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
		}
		emtpy = true;
		$iter19_iter = iterable;
		if (typeof ($iter19_array = $iter19_iter.__array) != 'undefined') {
			$iter19_type = 0;
		} else {
			$iter19_iter = $iter19_iter.__iter__();
			$iter19_type = typeof ($iter19_array = $iter19_iter.__array) != 'undefined'? 0 : (typeof $iter19_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter19_idx = 0;
		while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
			value = $iter19_nextval;
			emtpy = false;
			if ((($bool217=typeof initializer== 'undefined') === null || $bool217 === false || $bool217 === 0 || $bool217 === '' ?
					false :
					(typeof $bool217=='object'?
						(typeof $bool217.__nonzero__=='function'?
							$bool217.__nonzero__() :
							(typeof $bool217.__len__=='function'?
								($bool217.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				initializer = value;
			}
			else {
				initializer = func(initializer, value);
			}
		}
		if ((($bool218=(typeof empty == "undefined"?$m.empty:empty)) === null || $bool218 === false || $bool218 === 0 || $bool218 === '' ?
				false :
				(typeof $bool218=='object'?
					(typeof $bool218.__nonzero__=='function'?
						$bool218.__nonzero__() :
						(typeof $bool218.__len__=='function'?
							($bool218.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool219=typeof initializer== 'undefined') === null || $bool219 === false || $bool219 === 0 || $bool219 === '' ?
					false :
					(typeof $bool219=='object'?
						(typeof $bool219.__nonzero__=='function'?
							$bool219.__nonzero__() :
							(typeof $bool219.__len__=='function'?
								($bool219.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() of empty sequence with no initial value';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return initializer;
		}
		return initializer;
	};
	$m['reduce'].__name__ = 'reduce';

	$m['reduce'].__bind_type__ = 0;
	$m['reduce'].__args__ = [null,null,['func'],['iterable'],['initializer', (function(){return;})()]];
	$m['zip'] = function() {
		var iterables = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $add51,$add52,$38,$bool220,$bool221,$bool222,$pyjs_try_err,n,i,lst,$37,$eq25,t,$eq26,$cmp46,$cmp45;
		n = $m['len'](iterables);
		if ((($bool220=(($eq25=n)===($eq26=0)&&$eq25===null?true:
			($eq25===null?false:($eq26===null?false:
				((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
					((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
						$eq25==$eq26)))))) === null || $bool220 === false || $bool220 === 0 || $bool220 === '' ?
				false :
				(typeof $bool220=='object'?
					(typeof $bool220.__nonzero__=='function'?
						$bool220.__nonzero__() :
						(typeof $bool220.__len__=='function'?
							($bool220.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return $p['list']([]);
		}
		lst = $p['list']([]);
		iterables = function(){
			var $iter20_iter,$iter20_nextval,$iter20_type,i,$collcomp4,$iter20_idx,$iter20_array;
	$collcomp4 = $p['list']();
		$iter20_iter = iterables;
		if (typeof ($iter20_array = $iter20_iter.__array) != 'undefined') {
			$iter20_type = 0;
		} else {
			$iter20_iter = $iter20_iter.__iter__();
			$iter20_type = typeof ($iter20_array = $iter20_iter.__array) != 'undefined'? 0 : (typeof $iter20_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter20_idx = 0;
		while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
			i = $iter20_nextval;
			$collcomp4['append']($p['iter'](i));
		}

	return $collcomp4;}();
		try {
			while ((($bool221=true) === null || $bool221 === false || $bool221 === 0 || $bool221 === '' ?
					false :
					(typeof $bool221=='object'?
						(typeof $bool221.__nonzero__=='function'?
							$bool221.__nonzero__() :
							(typeof $bool221.__len__=='function'?
								($bool221.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				t = $p['list']([]);
				i = 0;
				while ((($bool222=((($cmp45=i)===($cmp46=n)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$m['cmp']($cmp45, $cmp46))) == -1)) === null || $bool222 === false || $bool222 === 0 || $bool222 === '' ?
						false :
						(typeof $bool222=='object'?
							(typeof $bool222.__nonzero__=='function'?
								$bool222.__nonzero__() :
								(typeof $bool222.__len__=='function'?
									($bool222.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					t['append']((typeof ($37=iterables).__array != 'undefined'?
						((typeof $37.__array[$38=i]) != 'undefined'?$37.__array[$38]:
							$37.__getitem__($38)):
							$37.__getitem__(i))['next']());
					i = (typeof ($add51=i)==typeof ($add52=1) && (typeof $add51=='number'||typeof $add51=='string')?
						$add51+$add52:
						$m['op_add']($add51,$add52));
				}
				lst['append']($m['tuple'](t));
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $m['StopIteration'].__name__)||$m['_isinstance']($pyjs_try_err,$m['StopIteration'])) {
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		return lst;
	};
	$m['zip'].__name__ = 'zip';

	$m['zip'].__bind_type__ = 0;
	$m['zip'].__args__ = ['iterables',null];
	$m['sorted'] = function(iterable, cmp, key, reverse) {
		if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
		if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
		if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
		var lst;
		lst = $m['list'](iterable);
		lst['sort'](cmp, key, reverse);
		return lst;
	};
	$m['sorted'].__name__ = 'sorted';

	$m['sorted'].__bind_type__ = 0;
	$m['sorted'].__args__ = [null,null,['iterable'],['cmp', null],['key', null],['reverse', false]];
	$m['reversed'] = function(iterable) {
		var $39,$bool223,$bool224,$bool225,$bool226,l,$pyjs_try_err,$eq27,v,$eq28,$40,$and27,$and26;
		if ((($bool223=$m['hasattr'](iterable, '__reversed__')) === null || $bool223 === false || $bool223 === 0 || $bool223 === '' ?
				false :
				(typeof $bool223=='object'?
					(typeof $bool223.__nonzero__=='function'?
						$bool223.__nonzero__() :
						(typeof $bool223.__len__=='function'?
							($bool223.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return iterable['__reversed__']();
		}
		if ((($bool225=((($bool224=$and26=$m['hasattr'](iterable, '__len__')) === null || $bool224 === false || $bool224 === 0 || $bool224 === '' ?
			false :
			(typeof $bool224=='object'?
				(typeof $bool224.__nonzero__=='function'?
					$bool224.__nonzero__() :
					(typeof $bool224.__len__=='function'?
						($bool224.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$m['hasattr'](iterable, '__getitem__'):$and26)) === null || $bool225 === false || $bool225 === 0 || $bool225 === '' ?
				false :
				(typeof $bool225=='object'?
					(typeof $bool225.__nonzero__=='function'?
						$bool225.__nonzero__() :
						(typeof $bool225.__len__=='function'?
							($bool225.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool226=(($eq27=$m['len'](iterable))===($eq28=0)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool226 === false || $bool226 === 0 || $bool226 === '' ?
					false :
					(typeof $bool226=='object'?
						(typeof $bool226.__nonzero__=='function'?
							$bool226.__nonzero__() :
							(typeof $bool226.__len__=='function'?
								($bool226.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				l = $p['list']([]);
				return l['__iter__']();
			}
			try {
				v = (typeof ($39=iterable).__array != 'undefined'?
					((typeof $39.__array[$40=0]) != 'undefined'?$39.__array[$40]:
						$39.__getitem__($40)):
						$39.__getitem__(0));
				return (typeof _reversed == "undefined"?$m._reversed:_reversed)(iterable);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		throw ($m['TypeError']('argument to reversed() must be a sequence'));
		return null;
	};
	$m['reversed'].__name__ = 'reversed';

	$m['reversed'].__bind_type__ = 0;
	$m['reversed'].__args__ = [null,null,['iterable']];
	$m['_reversed'] = function(iterable) {
		var $bool228,$sub22,$sub19,$sub21,i,$sub20,$bool227,$cmp48,$cmp49,$cmp50,$43,$42,$41,$cmp47,$44;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = $m['len'](iterable);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||((($bool228=((($cmp49=i)===($cmp50=0)?0:
					(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
						($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
						$m['cmp']($cmp49, $cmp50))) == 1)) === null || $bool228 === false || $bool228 === 0 || $bool228 === '' ?
						false :
						(typeof $bool228=='object'?
							(typeof $bool228.__nonzero__=='function'?
								$bool228.__nonzero__() :
								(typeof $bool228.__len__=='function'?
									($bool228.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						i = (typeof ($sub21=i)==typeof ($sub22=1) && (typeof $sub21=='number'||typeof $sub21=='string')?
							$sub21-$sub22:
							$m['op_sub']($sub21,$sub22));
						$yield_value = (typeof ($43=iterable).__array != 'undefined'?
							((typeof $43.__array[$44=i]) != 'undefined'?$43.__array[$44]:
								$43.__getitem__($44)):
								$43.__getitem__(i));
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_reversed'].__name__ = '_reversed';

	$m['_reversed'].__bind_type__ = 0;
	$m['_reversed'].__args__ = [null,null,['iterable']];
	$m['enumerate'] = function(seq) {


    if (typeof seq.__enumerate__ == 'function') {
        return seq.__enumerate__();
    }

		return (typeof _enumerate == "undefined"?$m._enumerate:_enumerate)(seq);
	};
	$m['enumerate'].__name__ = 'enumerate';

	$m['enumerate'].__bind_type__ = 0;
	$m['enumerate'].__args__ = [null,null,['seq']];
	$m['_enumerate'] = function(sequence) {
		var $iter21_idx,$add53,$add54,$iter22_array,$add56,$iter21_nextval,$iter22_nextval,$iter22_idx,$iter21_type,item,$iter21_iter,$add55,nextIndex,$iter22_type,$iter21_array,$iter22_iter;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				nextIndex = 0;
				$iter22_iter = sequence;
				if (typeof ($iter22_array = $iter22_iter.__array) != 'undefined') {
					$iter22_type = 0;
				} else {
					$iter22_iter = $iter22_iter.__iter__();
					$iter22_type = typeof ($iter22_array = $iter22_iter.__array) != 'undefined'? 0 : (typeof $iter22_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter22_idx = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						item = $iter22_nextval;
						$yield_value = $p['tuple']([nextIndex, item]);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						nextIndex = (typeof ($add55=nextIndex)==typeof ($add56=1) && (typeof $add55=='number'||typeof $add55=='string')?
							$add55+$add56:
							$m['op_add']($add55,$add56));
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_enumerate'].__name__ = '_enumerate';

	$m['_enumerate'].__bind_type__ = 0;
	$m['_enumerate'].__args__ = [null,null,['sequence']];
	$m['iter'] = function(iterable, sentinel) {
		if (typeof sentinel == 'undefined') sentinel=arguments.callee.__args__[3][1];
		var $bool229,$bool232,$bool231,$bool230;
		if ((($bool229=(sentinel === null)) === null || $bool229 === false || $bool229 === 0 || $bool229 === '' ?
				false :
				(typeof $bool229=='object'?
					(typeof $bool229.__nonzero__=='function'?
						$bool229.__nonzero__() :
						(typeof $bool229.__len__=='function'?
							($bool229.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool230=(typeof isIteratable == "undefined"?$m.isIteratable:isIteratable)(iterable)) === null || $bool230 === false || $bool230 === 0 || $bool230 === '' ?
					false :
					(typeof $bool230=='object'?
						(typeof $bool230.__nonzero__=='function'?
							$bool230.__nonzero__() :
							(typeof $bool230.__len__=='function'?
								($bool230.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return iterable['__iter__']();
			}
			if ((($bool231=$m['hasattr'](iterable, '__getitem__')) === null || $bool231 === false || $bool231 === 0 || $bool231 === '' ?
					false :
					(typeof $bool231=='object'?
						(typeof $bool231.__nonzero__=='function'?
							$bool231.__nonzero__() :
							(typeof $bool231.__len__=='function'?
								($bool231.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return (typeof _iter_getitem == "undefined"?$m._iter_getitem:_iter_getitem)(iterable);
			}
			throw ($m['TypeError']('object is not iterable'));
		}
		if ((($bool232=(typeof isFunction == "undefined"?$m.isFunction:isFunction)(iterable)) === null || $bool232 === false || $bool232 === 0 || $bool232 === '' ?
				false :
				(typeof $bool232=='object'?
					(typeof $bool232.__nonzero__=='function'?
						$bool232.__nonzero__() :
						(typeof $bool232.__len__=='function'?
							($bool232.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return (typeof _iter_callable == "undefined"?$m._iter_callable:_iter_callable)(iterable, sentinel);
		}
		throw ($m['TypeError']('iter(v, w): v must be callable'));
		return null;
	};
	$m['iter'].__name__ = 'iter';

	$m['iter'].__bind_type__ = 0;
	$m['iter'].__args__ = [null,null,['iterable'],['sentinel', null]];
	$m['_iter_getitem'] = function(object) {
		var $48,$add60,$add57,i,$add59,$add58,$bool234,$bool233,$pyjs_try_err,$47,$46,$45;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				try {
					if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						$generator_exc[0] = null;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
						$generator_state.splice(2, $generator_state.length-2);
						$generator_state[1]=3;
					}
					if ($generator_state[1] == 3) {
						for (;($generator_state[2] > 0)||((($bool234=true) === null || $bool234 === false || $bool234 === 0 || $bool234 === '' ?
								false :
								(typeof $bool234=='object'?
									(typeof $bool234.__nonzero__=='function'?
										$bool234.__nonzero__() :
										(typeof $bool234.__len__=='function'?
											($bool234.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) ));$generator_state[2] = 0) {
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
								$yield_value = (typeof ($47=object).__array != 'undefined'?
									((typeof $47.__array[$48=i]) != 'undefined'?$47.__array[$48]:
										$47.__getitem__($48)):
										$47.__getitem__(i));
								$yielding = true;
								$generator_state[2] = 1;
								return $yield_value;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[2] = -1;
									throw $exc;
								}
								i = (typeof ($add59=i)==typeof ($add60=1) && (typeof $add59=='number'||typeof $add59=='string')?
									$add59+$add60:
									$m['op_add']($add59,$add60));
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
							}
						}
						$generator_state[1]=4;
					}
					if ($generator_state[1] == 4) {
						$generator_state[1]=5;
					}
					if ($generator_state[1] == 5) {
						$generator_state[1]=6;
					}
					if ($generator_state[1] == 6) {
					}
				} catch($pyjs_try_err) {
					$generator_exc[0] = $pyjs_try_err;
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $m['IndexError'].__name__)||$m['_isinstance']($pyjs_try_err,$m['IndexError'])) {
						if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
							for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[3]=1;
						}
						if ($generator_state[3] == 1) {
						}
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$generator_exc[0] = null;
				for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_getitem'].__name__ = '_iter_getitem';

	$m['_iter_getitem'].__bind_type__ = 0;
	$m['_iter_getitem'].__args__ = [null,null,['object']];
	$m['_iter_callable'] = function(callable, sentinel) {
		var $eq32,$bool238,nextval,$bool237,$bool236,$bool235,$eq29,$eq30,$eq31;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $m['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $m['isinstance'](e, $m['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $m['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($m['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($m['isinstance'](e, $m['StopIteration']) || $m['isinstance'](e, $m['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||((($bool237=true) === null || $bool237 === false || $bool237 === 0 || $bool237 === '' ?
						false :
						(typeof $bool237=='object'?
							(typeof $bool237.__nonzero__=='function'?
								$bool237.__nonzero__() :
								(typeof $bool237.__len__=='function'?
									($bool237.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						nextval = callable();
						if ((($bool238=(($eq31=nextval)===($eq32=sentinel)&&$eq31===null?true:
							($eq31===null?false:($eq32===null?false:
								((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
									((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
										$eq31==$eq32)))))) === null || $bool238 === false || $bool238 === 0 || $bool238 === '' ?
								false :
								(typeof $bool238=='object'?
									(typeof $bool238.__nonzero__=='function'?
										$bool238.__nonzero__() :
										(typeof $bool238.__len__=='function'?
											($bool238.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							break;
						}
						$yield_value = nextval;
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_callable'].__name__ = '_iter_callable';

	$m['_iter_callable'].__bind_type__ = 0;
	$m['_iter_callable'].__args__ = [null,null,['callable'],['sentinel']];
	$m['min'] = function() {
		var sequence = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $bool239,$iter23_nextval,$iter23_iter,item,$eq36,$iter23_type,minValue,$eq33,$49,$iter23_array,$eq34,$eq35,$50,$iter23_idx,$bool240,$bool241;
		if ((($bool239=(($eq33=$m['len'](sequence))===($eq34=1)&&$eq33===null?true:
			($eq33===null?false:($eq34===null?false:
				((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
					((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
						$eq33==$eq34)))))) === null || $bool239 === false || $bool239 === 0 || $bool239 === '' ?
				false :
				(typeof $bool239=='object'?
					(typeof $bool239.__nonzero__=='function'?
						$bool239.__nonzero__() :
						(typeof $bool239.__len__=='function'?
							($bool239.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			sequence = (typeof ($49=sequence).__array != 'undefined'?
				((typeof $49.__array[$50=0]) != 'undefined'?$49.__array[$50]:
					$49.__getitem__($50)):
					$49.__getitem__(0));
		}
		minValue = null;
		$iter23_iter = sequence;
		if (typeof ($iter23_array = $iter23_iter.__array) != 'undefined') {
			$iter23_type = 0;
		} else {
			$iter23_iter = $iter23_iter.__iter__();
			$iter23_type = typeof ($iter23_array = $iter23_iter.__array) != 'undefined'? 0 : (typeof $iter23_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter23_idx = 0;
		while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
			item = $iter23_nextval;
			if ((($bool240=(minValue === null)) === null || $bool240 === false || $bool240 === 0 || $bool240 === '' ?
					false :
					(typeof $bool240=='object'?
						(typeof $bool240.__nonzero__=='function'?
							$bool240.__nonzero__() :
							(typeof $bool240.__len__=='function'?
								($bool240.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				minValue = item;
			}
			else if ((($bool241=(($eq35=$m['cmp'](item, minValue))===($eq36=(typeof ($usub9=1)=='number'?
				-$usub9:
				$m['op_usub']($usub9)))&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool241 === false || $bool241 === 0 || $bool241 === '' ?
					false :
					(typeof $bool241=='object'?
						(typeof $bool241.__nonzero__=='function'?
							$bool241.__nonzero__() :
							(typeof $bool241.__len__=='function'?
								($bool241.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				minValue = item;
			}
		}
		return minValue;
	};
	$m['min'].__name__ = 'min';

	$m['min'].__bind_type__ = 0;
	$m['min'].__args__ = ['sequence',null];
	$m['max'] = function() {
		var sequence = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $eq39,$iter24_idx,$eq40,maxValue,$iter24_iter,item,$iter24_array,$eq37,$bool244,$bool243,$bool242,$51,$eq38,$iter24_type,$52,$iter24_nextval;
		if ((($bool242=(($eq37=$m['len'](sequence))===($eq38=1)&&$eq37===null?true:
			($eq37===null?false:($eq38===null?false:
				((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
					((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
						$eq37==$eq38)))))) === null || $bool242 === false || $bool242 === 0 || $bool242 === '' ?
				false :
				(typeof $bool242=='object'?
					(typeof $bool242.__nonzero__=='function'?
						$bool242.__nonzero__() :
						(typeof $bool242.__len__=='function'?
							($bool242.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			sequence = (typeof ($51=sequence).__array != 'undefined'?
				((typeof $51.__array[$52=0]) != 'undefined'?$51.__array[$52]:
					$51.__getitem__($52)):
					$51.__getitem__(0));
		}
		maxValue = null;
		$iter24_iter = sequence;
		if (typeof ($iter24_array = $iter24_iter.__array) != 'undefined') {
			$iter24_type = 0;
		} else {
			$iter24_iter = $iter24_iter.__iter__();
			$iter24_type = typeof ($iter24_array = $iter24_iter.__array) != 'undefined'? 0 : (typeof $iter24_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter24_idx = 0;
		while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
			item = $iter24_nextval;
			if ((($bool243=(maxValue === null)) === null || $bool243 === false || $bool243 === 0 || $bool243 === '' ?
					false :
					(typeof $bool243=='object'?
						(typeof $bool243.__nonzero__=='function'?
							$bool243.__nonzero__() :
							(typeof $bool243.__len__=='function'?
								($bool243.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				maxValue = item;
			}
			else if ((($bool244=(($eq39=$m['cmp'](item, maxValue))===($eq40=1)&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool244 === false || $bool244 === 0 || $bool244 === '' ?
					false :
					(typeof $bool244=='object'?
						(typeof $bool244.__nonzero__=='function'?
							$bool244.__nonzero__() :
							(typeof $bool244.__len__=='function'?
								($bool244.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				maxValue = item;
			}
		}
		return maxValue;
	};
	$m['max'].__name__ = 'max';

	$m['max'].__bind_type__ = 0;
	$m['max'].__args__ = ['sequence',null];
	$m['sum'] = function(iterable, start) {
		if (typeof start == 'undefined') start=arguments.callee.__args__[3][1];
		var $add61,$iter25_nextval,i,$iter25_array,$add62,$iter25_iter,$iter25_idx,$iter25_type,$bool245;
		if ((($bool245=(start === null)) === null || $bool245 === false || $bool245 === 0 || $bool245 === '' ?
				false :
				(typeof $bool245=='object'?
					(typeof $bool245.__nonzero__=='function'?
						$bool245.__nonzero__() :
						(typeof $bool245.__len__=='function'?
							($bool245.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			start = 0;
		}
		$iter25_iter = iterable;
		if (typeof ($iter25_array = $iter25_iter.__array) != 'undefined') {
			$iter25_type = 0;
		} else {
			$iter25_iter = $iter25_iter.__iter__();
			$iter25_type = typeof ($iter25_array = $iter25_iter.__array) != 'undefined'? 0 : (typeof $iter25_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter25_idx = 0;
		while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
			i = $iter25_nextval;
			start = (typeof ($add61=start)==typeof ($add62=i) && (typeof $add61=='number'||typeof $add61=='string')?
				$add61+$add62:
				$m['op_add']($add61,$add62));
		}
		return start;
	};
	$m['sum'].__name__ = 'sum';

	$m['sum'].__bind_type__ = 0;
	$m['sum'].__args__ = [null,null,['iterable'],['start', null]];
	$m['complex'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '25725e4ecef7921503547b22e7b3348a';
		$method = $pyjs__bind_method2('__init__', function(real, imag) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				real = arguments[1];
				imag = arguments[2];
			}

			self.real = $m['float'](real);
			self.imag = $m['float'](imag);
			return null;
		}
	, 1, [null,null,['self'],['real'],['imag']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr133,$attr132,$attr131,$attr130,$attr136,$attr135,$attr134,$attr129,$bool246;
			if ((($bool246=self['real']) === null || $bool246 === false || $bool246 === 0 || $bool246 === '' ?
					false :
					(typeof $bool246=='object'?
						(typeof $bool246.__nonzero__=='function'?
							$bool246.__nonzero__() :
							(typeof $bool246.__len__=='function'?
								($bool246.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['sprintf']('(%s+%sj)', $p['tuple']([self['real'], self['imag']]));
			}
			else {
				return $p['sprintf']('%sj', self['imag']);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(b) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				b = arguments[1];
			}
			var $bool248,$bool247,$attr142,$add64,$attr140,$add66,$attr146,$attr147,$attr144,$attr145,$add68,$add65,$attr143,$add67,$attr141,$add63,$attr137,$attr139,$attr138,$attr148;
			if ((($bool247=$m['isinstance'](b, $m['complex'])) === null || $bool247 === false || $bool247 === 0 || $bool247 === '' ?
					false :
					(typeof $bool247=='object'?
						(typeof $bool247.__nonzero__=='function'?
							$bool247.__nonzero__() :
							(typeof $bool247.__len__=='function'?
								($bool247.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['complex']((typeof ($add63=self['real'])==typeof ($add64=b['real']) && (typeof $add63=='number'||typeof $add63=='string')?
					$add63+$add64:
					$m['op_add']($add63,$add64)), (typeof ($add65=self['imag'])==typeof ($add66=b['imag']) && (typeof $add65=='number'||typeof $add65=='string')?
					$add65+$add66:
					$m['op_add']($add65,$add66)));
			}
			else if ((($bool248=typeof b.__number__ != 'undefined') === null || $bool248 === false || $bool248 === 0 || $bool248 === '' ?
					false :
					(typeof $bool248=='object'?
						(typeof $bool248.__nonzero__=='function'?
							$bool248.__nonzero__() :
							(typeof $bool248.__len__=='function'?
								($bool248.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['complex']((typeof ($add67=self['real'])==typeof ($add68=b) && (typeof $add67=='number'||typeof $add67=='string')?
					$add67+$add68:
					$m['op_add']($add67,$add68)), self['imag']);
			}
			else {
				throw ($m['TypeError']($p['sprintf']("unsupported operand type(s) for +: '%r', '%r'", $p['tuple']([self, b]))));
			}
			return null;
		}
	, 1, [null,null,['self'],['b']]);
		$cls_definition['__add__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('complex', $bases, $cls_definition);
	})();
$m['complex']['__radd__'] = $m['complex']['__add__'];
$m['complex']['__str__'] = $m['complex']['__repr__'];
$m['complex']['toString'] = $m['complex']['__repr__'];
$p['next_hash_id'] = 0;
	if ((($bool249=typeof 'a'[0] == 'undefined') === null || $bool249 === false || $bool249 === 0 || $bool249 === '' ?
			false :
			(typeof $bool249=='object'?
				(typeof $bool249.__nonzero__=='function'?
					$bool249.__nonzero__() :
					(typeof $bool249.__len__=='function'?
						($bool249.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
$p['__hash'] = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj.$H = ++$p['next_hash_id'];
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj.$H = ++$p['next_hash_id'];
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
	}
	else {
$p['__hash'] = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++$p['next_hash_id'];
        return obj.$H;
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++$p['next_hash_id'];
        return obj.$H;
    };
        
	}
	$m['isObject'] = function(a) {


    return (a!== null && (typeof a== 'object')) || typeof a== 'function';
    
	};
	$m['isObject'].__name__ = 'isObject';

	$m['isObject'].__bind_type__ = 0;
	$m['isObject'].__args__ = [null,null,['a']];
	$m['isFunction'] = function(a) {


    return typeof a== 'function';
    
	};
	$m['isFunction'].__name__ = 'isFunction';

	$m['isFunction'].__bind_type__ = 0;
	$m['isFunction'].__args__ = [null,null,['a']];
	$m['callable'] = $m['isFunction'];
	$m['isString'] = function(a) {


    return typeof a== 'string';
    
	};
	$m['isString'].__name__ = 'isString';

	$m['isString'].__bind_type__ = 0;
	$m['isString'].__args__ = [null,null,['a']];
	$m['isNull'] = function(a) {


    return typeof a== 'object' && !a;
    
	};
	$m['isNull'].__name__ = 'isNull';

	$m['isNull'].__bind_type__ = 0;
	$m['isNull'].__args__ = [null,null,['a']];
	$m['isArray'] = function(a) {


    return $m['isObject'](a) && a.constructor === Array;
    
	};
	$m['isArray'].__name__ = 'isArray';

	$m['isArray'].__bind_type__ = 0;
	$m['isArray'].__args__ = [null,null,['a']];
	$m['isUndefined'] = function(a) {


    return typeof a== 'undefined';
    
	};
	$m['isUndefined'].__name__ = 'isUndefined';

	$m['isUndefined'].__bind_type__ = 0;
	$m['isUndefined'].__args__ = [null,null,['a']];
	$m['isIteratable'] = function(a) {


    if (a=== null) return false;
    return typeof a.__iter__ == 'function';
    
	};
	$m['isIteratable'].__name__ = 'isIteratable';

	$m['isIteratable'].__bind_type__ = 0;
	$m['isIteratable'].__args__ = [null,null,['a']];
	$m['isNumber'] = function(a) {


    return a!== null && a.__number__ &&
           (a.__number__ != 0x01 || isFinite(a));
    
	};
	$m['isNumber'].__name__ = 'isNumber';

	$m['isNumber'].__bind_type__ = 0;
	$m['isNumber'].__args__ = [null,null,['a']];
	$m['isInteger'] = function(a) {


    switch (a.__number__) {
        case 0x01:
            if (a != Math.floor(a)) break;
        case 0x02:
        case 0x04:
            return true;
    }
    return false;

	};
	$m['isInteger'].__name__ = 'isInteger';

	$m['isInteger'].__bind_type__ = 0;
	$m['isInteger'].__args__ = [null,null,['a']];
	$m['isSet'] = function(a) {


    if (a=== null) return false;
    if (typeof a.__object == 'undefined') return false;
    var a_mro = a.__mro__;
    switch (a_mro[a_mro.length-2].__md5__) {
        case $m['set'].__md5__:
            return 1;
        case $m['frozenset'].__md5__:
            return 2;
    }
    return false;

	};
	$m['isSet'].__name__ = 'isSet';

	$m['isSet'].__bind_type__ = 0;
	$m['isSet'].__args__ = [null,null,['a']];
	$m['toJSObjects'] = function(x) {
		var $attr150,$attr149,$bool258,$bool254,$bool255,$bool257,$bool256,$bool251,$bool250,$bool253,$bool252;
		if ((($bool250=$m['isArray'](x)) === null || $bool250 === false || $bool250 === 0 || $bool250 === '' ?
				false :
				(typeof $bool250=='object'?
					(typeof $bool250.__nonzero__=='function'?
						$bool250.__nonzero__() :
						(typeof $bool250.__len__=='function'?
							($bool250.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {

        var result = [];
        for(var k=0; k < x.length; k++) {
           var v = x[k];
           var tv = $m['toJSObjects'](v);
           result.push(tv);
        }
        return result;
        
		}
		if ((($bool251=$m['isObject'](x)) === null || $bool251 === false || $bool251 === 0 || $bool251 === '' ?
				false :
				(typeof $bool251=='object'?
					(typeof $bool251.__nonzero__=='function'?
						$bool251.__nonzero__() :
						(typeof $bool251.__len__=='function'?
							($bool251.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			if ((($bool252=$m['getattr'](x, '__number__', null)) === null || $bool252 === false || $bool252 === 0 || $bool252 === '' ?
					false :
					(typeof $bool252=='object'?
						(typeof $bool252.__nonzero__=='function'?
							$bool252.__nonzero__() :
							(typeof $bool252.__len__=='function'?
								($bool252.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return x['valueOf']();
			}
			else if ((($bool253=$m['isinstance'](x, $m['dict'])) === null || $bool253 === false || $bool253 === 0 || $bool253 === '' ?
					false :
					(typeof $bool253=='object'?
						(typeof $bool253.__nonzero__=='function'?
							$bool253.__nonzero__() :
							(typeof $bool253.__len__=='function'?
								($bool253.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {

            var o = x.getObject();
            var result = {};
            for (var i in o) {
               result[o[i][0].toString()] = $m['toJSObjects'](o[i][1]);
            }
            return result;
            
			}
			else if ((($bool254=$m['isinstance'](x, $m['list'])) === null || $bool254 === false || $bool254 === 0 || $bool254 === '' ?
					false :
					(typeof $bool254=='object'?
						(typeof $bool254.__nonzero__=='function'?
							$bool254.__nonzero__() :
							(typeof $bool254.__len__=='function'?
								($bool254.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['toJSObjects'](x['__array']);
			}
			else if ((($bool255=$m['hasattr'](x, '__class__')) === null || $bool255 === false || $bool255 === 0 || $bool255 === '' ?
					false :
					(typeof $bool255=='object'?
						(typeof $bool255.__nonzero__=='function'?
							$bool255.__nonzero__() :
							(typeof $bool255.__len__=='function'?
								($bool255.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return x;
			}
			else if ((($bool256=$m['isFunction'](x)) === null || $bool256 === false || $bool256 === 0 || $bool256 === '' ?
					false :
					(typeof $bool256=='object'?
						(typeof $bool256.__nonzero__=='function'?
							$bool256.__nonzero__() :
							(typeof $bool256.__len__=='function'?
								($bool256.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return x;
			}
		}
		if ((($bool257=$m['isObject'](x)) === null || $bool257 === false || $bool257 === 0 || $bool257 === '' ?
				false :
				(typeof $bool257=='object'?
					(typeof $bool257.__nonzero__=='function'?
						$bool257.__nonzero__() :
						(typeof $bool257.__len__=='function'?
							($bool257.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {

        var result = {};
        for(var k in x) {
            var v = x[k];
            var tv = $m['toJSObjects'](v);
            result[k] = tv;
            }
            return result;
         
		}
		if ((($bool258=$m['isString'](x)) === null || $bool258 === false || $bool258 === 0 || $bool258 === '' ?
				false :
				(typeof $bool258=='object'?
					(typeof $bool258.__nonzero__=='function'?
						$bool258.__nonzero__() :
						(typeof $bool258.__len__=='function'?
							($bool258.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return $m['str'](x);
		}
		return x;
	};
	$m['toJSObjects'].__name__ = 'toJSObjects';

	$m['toJSObjects'].__bind_type__ = 0;
	$m['toJSObjects'].__args__ = [null,null,['x']];
	$m['sprintf'] = function(strng, args) {


    var re_dict = /([^%]*)%[(]([^)]+)[)]([#0\x20\x2B-]*)(\d+)?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_list = /([^%]*)%([#0\x20\x2B-]*)(\*|(\d+))?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_exp = /(.*)([+-])(.*)/;

    var argidx = 0;
    var nargs = 0;
    var result = [];
    var remainder = strng;

    function formatarg(flags, minlen, precision, conversion, param) {
        var subst = '';
        var numeric = true;
        var left_padding = 1;
        var padchar = ' ';
        if (minlen === null || minlen == 0 || !minlen) {
            minlen=0;
        } else {
            minlen = parseInt(minlen);
        }
        if (!precision) {
            precision = null;
        } else {
            precision = parseInt(precision.substr(1));
        }
        if (flags.indexOf('-') >= 0) {
            left_padding = 0;
        }
        switch (conversion) {
            case '%':
                numeric = false;
                subst = '%';
                break;
            case 'c':
                numeric = false;
                subst = String.fromCharCode(parseInt(param));
                break;
            case 'd':
            case 'i':
            case 'u':
                subst = '' + parseInt(param);
                break;
            case 'e':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)));
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'E':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)).toUpperCase());
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'f':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision));
                break;
            case 'F':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision)).toUpperCase();
                break;
            case 'g':
                // FIXME: Issue 672 should return double digit exponent
                // probably can remove code in formatd after that
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision));
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision));
                }
                break;
            case 'G':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision)).toUpperCase();
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision)).toUpperCase().toUpperCase();
                }
                break;
            case 'r':
                numeric = false;
                subst = $m['repr'](param);
                break;
            case 's':
                numeric = false;
                subst = $m['str'](param);
                break;
            case 'o':
                param = $p['float_int'](param);
                subst = param.toString(8);
                if (subst != '0' && flags.indexOf('#') >= 0) {
                    subst = '0' + subst;
                }
                break;
            case 'x':
                param = $p['float_int'](param);
                subst = param.toString(16);
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            case 'X':
                param = $p['float_int'](param);
                subst = param.toString(16).toUpperCase();
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            default:
                throw $m['ValueError']("unsupported format character '" + conversion + "' ("+$p['hex'](conversion.charCodeAt(0))+") at index " + (strng.length - remainder.length - 1));
        }
        if (minlen && subst.length < minlen) {
            if (numeric && left_padding && flags.indexOf('0') >= 0) {
                padchar = '0';
            }
            subst = left_padding ? subst.rjust(minlen, padchar) : subst.ljust(minlen, padchar);
        }
        return subst;
    }

    function sprintf_list(strng, args) {
        var a, left, flags, precision, conversion, minlen, param,
            __array = result;
        while (remainder) {
            a = re_list.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; flags = a[2];
            minlen = a[3]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            if (minlen == '*') {
                if (argidx == nargs) {
                    throw $m['TypeError']("not enough arguments for format string");
                }
                minlen = args.__getitem__(argidx++);
                switch (minlen.__number__) {
                    case 0x02:
                    case 0x04:
                        break;
                    case 0x01:
                        if (minlen == Math.floor(minlen)) {
                            break;
                        }
                    default:
                        throw $m['TypeError']('* wants int');
                }
            }
            if (conversion != '%') {
                if (argidx == nargs) {
                    throw $m['TypeError']("not enough arguments for format string");
                }
                param = args.__getitem__(argidx++);
            }
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    function sprintf_dict(strng, args) {
        var a = null,
            left = null,
            flags = null,
            precision = null,
            conversion = null,
            minlen = null,
            minlen_type = null,
            key = null,
            arg = args,
            param,
            __array = result;

        argidx++;
        while (remainder) {
            a = re_dict.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; key = a[2]; flags = a[3];
            minlen = a[4]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            param = arg.__getitem__(key);
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    var constructor = args === null ? 'NoneType' : (args.__md5__ == $m['tuple'].__md5__ ? 'tuple': (args.__md5__ == $m['dict'].__md5__ ? 'dict': 'Other'));
    if (strng.indexOf("%(") >= 0) {
        if (re_dict.exec(strng) !== null) {
            if (constructor != "dict") {
                throw $m['TypeError']("format requires a mapping");
            }
            sprintf_dict(strng, args);
            return result.join("");
        }
    }
    if (constructor != "tuple") {
        args = $m['tuple']([args]);
    }
    nargs = args.__array.length;
    sprintf_list(strng, args);
    if (argidx != nargs) {
        throw $m['TypeError']('not all arguments converted during string formatting');
    }
    return result.join("");

	};
	$m['sprintf'].__name__ = 'sprintf';

	$m['sprintf'].__bind_type__ = 0;
	$m['sprintf'].__args__ = [null,null,['strng'],['args']];
	$m['__module_internals'] = $m['set']($p['list'](['__track_lines__']));
	$m['_globals'] = function(module) {
		var $bool260,d,$iter26_idx,$iter26_nextval,$iter26_type,$bool259,$iter26_array,$iter26_iter,name;
		d = $m['dict']();
		$iter26_iter = $m['dir'](module);
		if (typeof ($iter26_array = $iter26_iter.__array) != 'undefined') {
			$iter26_type = 0;
		} else {
			$iter26_iter = $iter26_iter.__iter__();
			$iter26_type = typeof ($iter26_array = $iter26_iter.__array) != 'undefined'? 0 : (typeof $iter26_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter26_idx = 0;
		while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
			name = $iter26_nextval;
			if ((($bool260=!(($bool259=$m['__module_internals'].__contains__(name)) === null || $bool259 === false || $bool259 === 0 || $bool259 === '' ?
				false :
				(typeof $bool259=='object'?
					(typeof $bool259.__nonzero__=='function'?
						$bool259.__nonzero__() :
						(typeof $bool259.__len__=='function'?
							($bool259.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool260 === false || $bool260 === 0 || $bool260 === '' ?
					false :
					(typeof $bool260=='object'?
						(typeof $bool260.__nonzero__=='function'?
							$bool260.__nonzero__() :
							(typeof $bool260.__len__=='function'?
								($bool260.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				d.__setitem__(name, module[name]);
			}
		}
		return d;
	};
	$m['_globals'].__name__ = '_globals';

	$m['_globals'].__bind_type__ = 0;
	$m['_globals'].__args__ = [null,null,['module']];
	$m['debugReport'] = function(msg) {


    $p['printFunc']([msg], true);
    
	};
	$m['debugReport'].__name__ = 'debugReport';

	$m['debugReport'].__bind_type__ = 0;
	$m['debugReport'].__args__ = [null,null,['msg']];

var $printFunc = null;
if (   typeof $wnd.console != 'undefined'
    && typeof $wnd.console.debug == 'function') {
    $printFunc = function(s) {
        $wnd.console.debug(s);
    };
} else if (   typeof $wnd.opera != 'undefined'
           && typeof $wnd.opera.postError == 'function') {
    $printFunc = function(s) {
        $wnd.opera.postError(s);
    };
} else if ( typeof console != 'undefined') {
    if (   typeof console.log == 'function'
        || typeof console.log == 'object') {
        $printFunc = function(s){
            console.log(s);
        };
    }
}

	$m['_print_to_console'] = function(s) {


    if ($printFunc === null) return null;
    $printFunc(s);
    
	};
	$m['_print_to_console'].__name__ = '_print_to_console';

	$m['_print_to_console'].__bind_type__ = 0;
	$m['_print_to_console'].__args__ = [null,null,['s']];
	$m['printFunc'] = function(objs, newline) {


    var s = "";
    for(var i=0; i < objs.length; i++) {
        if(s != "") s += " ";
        s += objs[i];
    }
    if (newline) {
      s += '\n';
    }
    $m['sys'].stdout.write(s);
    
	};
	$m['printFunc'].__name__ = 'printFunc';

	$m['printFunc'].__bind_type__ = 0;
	$m['printFunc'].__args__ = [null,null,['objs'],['newline']];
	$m['pow'] = function(x, y, z) {
		if (typeof z == 'undefined') z=arguments.callee.__args__[4][1];
		var $bool261,p,$mod1,$mod2;
		p = null;
p = Math.pow(x, y);
		if ((($bool261=(z === null)) === null || $bool261 === false || $bool261 === 0 || $bool261 === '' ?
				false :
				(typeof $bool261=='object'?
					(typeof $bool261.__nonzero__=='function'?
						$bool261.__nonzero__() :
						(typeof $bool261.__len__=='function'?
							($bool261.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return $m['float'](p);
		}
		return $m['float']((typeof ($mod1=p)==typeof ($mod2=z) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$m['op_mod']($mod1,$mod2)));
	};
	$m['pow'].__name__ = 'pow';

	$m['pow'].__bind_type__ = 0;
	$m['pow'].__args__ = [null,null,['x'],['y'],['z', null]];
	$m['hex'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return '0x' + x.toString(16);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return '0x' + x.__v.toString(16);
            case 0x04:
                return x.__hex__();
        }
    }

		throw ($m['TypeError']("hex() argument can't be converted to hex"));
		return null;
	};
	$m['hex'].__name__ = 'hex';

	$m['hex'].__bind_type__ = 0;
	$m['hex'].__args__ = [null,null,['x']];
	$m['oct'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return x == 0 ? '0': '0' + x.toString(8);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return x.__v == 0 ? '0': '0' + x.__v.toString(8);
            case 0x04:
                return x.__oct__();
        }
    }

		throw ($m['TypeError']("oct() argument can't be converted to oct"));
		return null;
	};
	$m['oct'].__name__ = 'oct';

	$m['oct'].__bind_type__ = 0;
	$m['oct'].__args__ = [null,null,['x']];
	$m['round'] = function(x, n) {
		if (typeof n == 'undefined') n=arguments.callee.__args__[3][1];
		var r;
		n = $m['pow'](10, n);
		r = null;
r = Math.round(n*x)/n;
		return $m['float'](r);
	};
	$m['round'].__name__ = 'round';

	$m['round'].__bind_type__ = 0;
	$m['round'].__args__ = [null,null,['x'],['n', 0]];
	$m['divmod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y);
                return $m['tuple']([f, x - f * y]);
            case 0x0102:
                if (y.__v == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y.__v);
                return $m['tuple']([f, x - f * y.__v]);
            case 0x0201:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x.__v / y);
                return $m['tuple']([f, x.__v - f * y]);
            case 0x0202:
                if (y.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
                var f = Math.floor(x.__v / y.__v);
                return $m['tuple']([new $p['float_int'](f), new $p['float_int'](x.__v - f * y.__v)]);
            case 0x0204:
                return y.__rdivmod__(new $p['float_int'](x.__v));
            case 0x0402:
                return x.__divmod__(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__divmod__(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $m['isinstance'](x, y)
                && typeof x['__divmod__'] == 'function')
                return y.__divmod__(x);
            if (typeof x['__divmod__'] == 'function') return x.__divmod__(y);
        }
        if (!y.__number__ && typeof y['__rdivmod__'] == 'function') return y.__rdivmod__(x);
    }

		throw ($m['TypeError']($m['sprintf']("unsupported operand type(s) for divmod(): '%r', '%r'", $p['tuple']([x, y]))));
		return null;
	};
	$m['divmod'].__name__ = 'divmod';

	$m['divmod'].__bind_type__ = 0;
	$m['divmod'].__args__ = [null,null,['x'],['y']];
	$m['all'] = function(iterable) {
		var $iter27_nextval,$bool262,$bool263,$iter27_array,element,$iter27_idx,$iter27_iter,$iter27_type;
		$iter27_iter = iterable;
		if (typeof ($iter27_array = $iter27_iter.__array) != 'undefined') {
			$iter27_type = 0;
		} else {
			$iter27_iter = $iter27_iter.__iter__();
			$iter27_type = typeof ($iter27_array = $iter27_iter.__array) != 'undefined'? 0 : (typeof $iter27_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter27_idx = 0;
		while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
			element = $iter27_nextval;
			if ((($bool263=!(($bool262=element) === null || $bool262 === false || $bool262 === 0 || $bool262 === '' ?
				false :
				(typeof $bool262=='object'?
					(typeof $bool262.__nonzero__=='function'?
						$bool262.__nonzero__() :
						(typeof $bool262.__len__=='function'?
							($bool262.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool263 === false || $bool263 === 0 || $bool263 === '' ?
					false :
					(typeof $bool263=='object'?
						(typeof $bool263.__nonzero__=='function'?
							$bool263.__nonzero__() :
							(typeof $bool263.__len__=='function'?
								($bool263.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
		}
		return true;
	};
	$m['all'].__name__ = 'all';

	$m['all'].__bind_type__ = 0;
	$m['all'].__args__ = [null,null,['iterable']];
	$m['any'] = function(iterable) {
		var $bool264,$iter28_array,$iter28_nextval,$iter28_idx,element,$iter28_iter,$iter28_type;
		$iter28_iter = iterable;
		if (typeof ($iter28_array = $iter28_iter.__array) != 'undefined') {
			$iter28_type = 0;
		} else {
			$iter28_iter = $iter28_iter.__iter__();
			$iter28_type = typeof ($iter28_array = $iter28_iter.__array) != 'undefined'? 0 : (typeof $iter28_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter28_idx = 0;
		while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
			element = $iter28_nextval;
			if ((($bool264=element) === null || $bool264 === false || $bool264 === 0 || $bool264 === '' ?
					false :
					(typeof $bool264=='object'?
						(typeof $bool264.__nonzero__=='function'?
							$bool264.__nonzero__() :
							(typeof $bool264.__len__=='function'?
								($bool264.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
		}
		return false;
	};
	$m['any'].__name__ = 'any';

	$m['any'].__bind_type__ = 0;
	$m['any'].__args__ = [null,null,['iterable']];
	$m['StringBuilder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '5ec46a453bd561c25a5b215af1809967';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.l = $p['list']([]);
			self.tp = $m['str'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('append', function(s) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
			}

			self['l']['append'](s);
			return null;
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('append_slice', function(s, start, end) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
				start = arguments[2];
				end = arguments[3];
			}

			self['l']['append']($p['__getslice'](s, start, end));
			return null;
		}
	, 1, [null,null,['self'],['s'],['start'],['end']]);
		$cls_definition['append_slice'] = $method;
		$method = $pyjs__bind_method2('append_multiple_char', function(c, times) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				c = arguments[1];
				times = arguments[2];
			}
			var $mul2,$mul1;
			self['l']['append']((typeof ($mul1=c)==typeof ($mul2=times) && typeof $mul1=='number'?
				$mul1*$mul2:
				$m['op_mul']($mul1,$mul2)));
			return null;
		}
	, 1, [null,null,['self'],['c'],['times']]);
		$cls_definition['append_multiple_char'] = $method;
		$method = $pyjs__bind_method2('build', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr151,$attr152;
			return self['tp']('')['join'](self['l']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['build'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('StringBuilder', $bases, $cls_definition);
	})();
	$m['_parse_int'] = function(s, start, end) {
		var $sub23,$sub24,$bool268,result,$bool265,$bool266,$bool267,$mul3,$add69,$pyjs_try_err,msg,$cmp58,$cmp51,$cmp53,$mul4,$cmp55,$cmp54,$cmp57,$cmp56,c,$add72,$add70,$cmp52,$add71,i,$eq42,$eq41,$53,$54;
		result = 0;
		i = start;
		while ((($bool265=((($cmp51=i)===($cmp52=end)?0:
			(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
				($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
				$m['cmp']($cmp51, $cmp52))) == -1)) === null || $bool265 === false || $bool265 === 0 || $bool265 === '' ?
				false :
				(typeof $bool265=='object'?
					(typeof $bool265.__nonzero__=='function'?
						$bool265.__nonzero__() :
						(typeof $bool265.__len__=='function'?
							($bool265.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			c = $m['ord']((typeof ($53=s).__array != 'undefined'?
				((typeof $53.__array[$54=i]) != 'undefined'?$53.__array[$54]:
					$53.__getitem__($54)):
					$53.__getitem__(i)));
			if ((($bool266=(((($cmp53=$m['ord']('0'))===($cmp54=($compare1 = c))?0:
				(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
					($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
					$m['cmp']($cmp53, $cmp54))) < 1)&&((($cmp55=$compare1)===($cmp56=($compare2 = $m['ord']('9')))?0:
				(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
					($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
					$m['cmp']($cmp55, $cmp56))) < 1))) === null || $bool266 === false || $bool266 === 0 || $bool266 === '' ?
					false :
					(typeof $bool266=='object'?
						(typeof $bool266.__nonzero__=='function'?
							$bool266.__nonzero__() :
							(typeof $bool266.__len__=='function'?
								($bool266.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				try {
					result = (typeof ($mul3=result)==typeof ($mul4=10) && typeof $mul3=='number'?
						$mul3*$mul4:
						$m['op_mul']($mul3,$mul4));
					if ((($bool267=((($cmp57=result)===($cmp58=1000000000)?0:
						(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
							($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
							$m['cmp']($cmp57, $cmp58))) == 1)) === null || $bool267 === false || $bool267 === 0 || $bool267 === '' ?
							false :
							(typeof $bool267=='object'?
								(typeof $bool267.__nonzero__=='function'?
									$bool267.__nonzero__() :
									(typeof $bool267.__len__=='function'?
										($bool267.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($m['OverflowError']);
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $m['OverflowError'].__name__)||$m['_isinstance']($pyjs_try_err,$m['OverflowError'])) {
						msg = 'too many decimal digits in format string';
						throw ($m['ValueError'](msg));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				result = (typeof ($add69=result)==typeof ($add70=(typeof ($sub23=c)==typeof ($sub24=$m['ord']('0')) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					$m['op_sub']($sub23,$sub24))) && (typeof $add69=='number'||typeof $add69=='string')?
					$add69+$add70:
					$m['op_add']($add69,$add70));
			}
			else {
				break;
			}
			i = (typeof ($add71=i)==typeof ($add72=1) && (typeof $add71=='number'||typeof $add71=='string')?
				$add71+$add72:
				$m['op_add']($add71,$add72));
		}
		if ((($bool268=(($eq41=i)===($eq42=start)&&$eq41===null?true:
			($eq41===null?false:($eq42===null?false:
				((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41.__cmp__=='function'?$eq41.__cmp__($eq42) === 0:
					((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42.__cmp__=='function'?$eq42.__cmp__($eq41) === 0:
						$eq41==$eq42)))))) === null || $bool268 === false || $bool268 === 0 || $bool268 === '' ?
				false :
				(typeof $bool268=='object'?
					(typeof $bool268.__nonzero__=='function'?
						$bool268.__nonzero__() :
						(typeof $bool268.__len__=='function'?
							($bool268.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			result = (typeof ($usub10=1)=='number'?
				-$usub10:
				$m['op_usub']($usub10));
		}
		return $p['tuple']([result, i]);
	};
	$m['_parse_int'].__name__ = '_parse_int';

	$m['_parse_int'].__bind_type__ = 0;
	$m['_parse_int'].__args__ = [null,null,['s'],['start'],['end']];
	$m['TemplateFormatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'd54cd0cb44a5e889560fb448778092c7';
		$cls_definition['ANS_INIT'] = 1;
		$cls_definition['ANS_AUTO'] = 2;
		$cls_definition['ANS_MANUAL'] = 3;
		$method = $pyjs__bind_method2('__init__', function(space, template) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				space = arguments[1];
				template = arguments[2];
			}

			self.space = space;
			self.empty = '';
			self.template = template;
			self.parser_list_w = null;
			return null;
		}
	, 1, [null,null,['self'],['space'],['template']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('build', function(args, kw) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				args = arguments[1];
				kw = arguments[2];
			}
			var $attr155,$attr154,$attr156,$attr153;
			var $tupleassign5 = $p['__ass_unpack']($p['tuple']([args, kw]), 2, null);
			self.args = $tupleassign5[0];
			self.kwargs = $tupleassign5[1];
			self.auto_numbering = 0;
			self.auto_numbering_state = self['ANS_INIT'];
			return self['_build_string'](0, $m['len'](self['template']), 2);
		}
	, 1, [null,null,['self'],['args'],['kw']]);
		$cls_definition['build'] = $method;
		$method = $pyjs__bind_method2('_build_string', function(start, end, level) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				level = arguments[3];
			}
			var $attr157,$sub25,$bool270,$bool269,$attr158,s,$sub26,out;
			out = $m['StringBuilder']();
			if ((($bool270=!(($bool269=level) === null || $bool269 === false || $bool269 === 0 || $bool269 === '' ?
				false :
				(typeof $bool269=='object'?
					(typeof $bool269.__nonzero__=='function'?
						$bool269.__nonzero__() :
						(typeof $bool269.__len__=='function'?
							($bool269.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool270 === false || $bool270 === 0 || $bool270 === '' ?
					false :
					(typeof $bool270=='object'?
						(typeof $bool270.__nonzero__=='function'?
							$bool270.__nonzero__() :
							(typeof $bool270.__len__=='function'?
								($bool270.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['ValueError']('Recursion depth exceeded'));
			}
			level = (typeof ($sub25=level)==typeof ($sub26=1) && (typeof $sub25=='number'||typeof $sub25=='string')?
				$sub25-$sub26:
				$m['op_sub']($sub25,$sub26));
			s = self['template'];
			return self['_do_build_string'](start, end, level, out, s);
		}
	, 1, [null,null,['self'],['start'],['end'],['level']]);
		$cls_definition['_build_string'] = $method;
		$method = $pyjs__bind_method2('_do_build_string', function(start, end, level, out, s) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				level = arguments[3];
				out = arguments[4];
				s = arguments[5];
			}
			var $bool277,field_start,rendered,$cmp60,$sub27,$cmp62,$sub30,$add83,$add82,$sub28,$bool281,nested,$eq54,$eq55,$eq56,$eq57,$eq50,$eq51,$eq52,$eq53,$bool287,at_end,$eq58,$bool283,$sub29,$add84,$bool279,$59,last_literal,$bool280,$eq59,$add80,$add81,$bool284,$add77,$eq60,$61,$bool275,$62,$eq49,$bool278,$bool276,$or9,$or8,$cmp61,$cmp59,$60,$bool274,$bool285,$add74,$add78,$add79,$bool272,$add76,markup_follows,c,$eq48,$bool273,$add73,$bool271,i,recursive,$eq47,$eq46,$eq45,$eq44,$58,$eq43,$add75,$or11,$or10,$assign2,$bool282,$bool286,$55,$56,$57;
			$assign2 = start;
			last_literal = $assign2;
			i = $assign2;
			while ((($bool271=((($cmp59=i)===($cmp60=end)?0:
				(typeof $cmp59==typeof $cmp60 && ((typeof $cmp59 == 'number')||(typeof $cmp59 == 'string')||(typeof $cmp59 == 'boolean'))?
					($cmp59 == $cmp60 ? 0 : ($cmp59 < $cmp60 ? -1 : 1)):
					$m['cmp']($cmp59, $cmp60))) == -1)) === null || $bool271 === false || $bool271 === 0 || $bool271 === '' ?
					false :
					(typeof $bool271=='object'?
						(typeof $bool271.__nonzero__=='function'?
							$bool271.__nonzero__() :
							(typeof $bool271.__len__=='function'?
								($bool271.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				c = (typeof ($55=s).__array != 'undefined'?
					((typeof $55.__array[$56=i]) != 'undefined'?$55.__array[$56]:
						$55.__getitem__($56)):
						$55.__getitem__(i));
				i = (typeof ($add73=i)==typeof ($add74=1) && (typeof $add73=='number'||typeof $add73=='string')?
					$add73+$add74:
					$m['op_add']($add73,$add74));
				if ((($bool273=((($bool272=$or8=(($eq43=c)===($eq44='{')&&$eq43===null?true:
					($eq43===null?false:($eq44===null?false:
						((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43.__cmp__=='function'?$eq43.__cmp__($eq44) === 0:
							((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44.__cmp__=='function'?$eq44.__cmp__($eq43) === 0:
								$eq43==$eq44)))))) === null || $bool272 === false || $bool272 === 0 || $bool272 === '' ?
					false :
					(typeof $bool272=='object'?
						(typeof $bool272.__nonzero__=='function'?
							$bool272.__nonzero__() :
							(typeof $bool272.__len__=='function'?
								($bool272.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or8:(($eq45=c)===($eq46='}')&&$eq45===null?true:
					($eq45===null?false:($eq46===null?false:
						((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45.__cmp__=='function'?$eq45.__cmp__($eq46) === 0:
							((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46.__cmp__=='function'?$eq46.__cmp__($eq45) === 0:
								$eq45==$eq46))))))) === null || $bool273 === false || $bool273 === 0 || $bool273 === '' ?
						false :
						(typeof $bool273=='object'?
							(typeof $bool273.__nonzero__=='function'?
								$bool273.__nonzero__() :
								(typeof $bool273.__len__=='function'?
									($bool273.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					at_end = (($eq47=i)===($eq48=end)&&$eq47===null?true:
						($eq47===null?false:($eq48===null?false:
							((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47.__cmp__=='function'?$eq47.__cmp__($eq48) === 0:
								((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48.__cmp__=='function'?$eq48.__cmp__($eq47) === 0:
									$eq47==$eq48)))));
					markup_follows = true;
					if ((($bool274=(($eq49=c)===($eq50='}')&&$eq49===null?true:
						($eq49===null?false:($eq50===null?false:
							((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49.__cmp__=='function'?$eq49.__cmp__($eq50) === 0:
								((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50.__cmp__=='function'?$eq50.__cmp__($eq49) === 0:
									$eq49==$eq50)))))) === null || $bool274 === false || $bool274 === 0 || $bool274 === '' ?
							false :
							(typeof $bool274=='object'?
								(typeof $bool274.__nonzero__=='function'?
									$bool274.__nonzero__() :
									(typeof $bool274.__len__=='function'?
										($bool274.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool276=((($bool275=$or10=at_end) === null || $bool275 === false || $bool275 === 0 || $bool275 === '' ?
							false :
							(typeof $bool275=='object'?
								(typeof $bool275.__nonzero__=='function'?
									$bool275.__nonzero__() :
									(typeof $bool275.__len__=='function'?
										($bool275.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or10:!(($eq51=(typeof ($57=s).__array != 'undefined'?
							((typeof $57.__array[$58=i]) != 'undefined'?$57.__array[$58]:
								$57.__getitem__($58)):
								$57.__getitem__(i)))===($eq52='}')&&$eq51===null?true:
							($eq51===null?false:($eq52===null?false:
								((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51.__cmp__=='function'?$eq51.__cmp__($eq52) === 0:
									((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52.__cmp__=='function'?$eq52.__cmp__($eq51) === 0:
										$eq51==$eq52))))))) === null || $bool276 === false || $bool276 === 0 || $bool276 === '' ?
								false :
								(typeof $bool276=='object'?
									(typeof $bool276.__nonzero__=='function'?
										$bool276.__nonzero__() :
										(typeof $bool276.__len__=='function'?
											($bool276.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							throw ($m['ValueError']("Single '}'"));
						}
						i = (typeof ($add75=i)==typeof ($add76=1) && (typeof $add75=='number'||typeof $add75=='string')?
							$add75+$add76:
							$m['op_add']($add75,$add76));
						markup_follows = false;
					}
					if ((($bool277=(($eq53=c)===($eq54='{')&&$eq53===null?true:
						($eq53===null?false:($eq54===null?false:
							((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53.__cmp__=='function'?$eq53.__cmp__($eq54) === 0:
								((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54.__cmp__=='function'?$eq54.__cmp__($eq53) === 0:
									$eq53==$eq54)))))) === null || $bool277 === false || $bool277 === 0 || $bool277 === '' ?
							false :
							(typeof $bool277=='object'?
								(typeof $bool277.__nonzero__=='function'?
									$bool277.__nonzero__() :
									(typeof $bool277.__len__=='function'?
										($bool277.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						if ((($bool278=at_end) === null || $bool278 === false || $bool278 === 0 || $bool278 === '' ?
								false :
								(typeof $bool278=='object'?
									(typeof $bool278.__nonzero__=='function'?
										$bool278.__nonzero__() :
										(typeof $bool278.__len__=='function'?
											($bool278.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							throw ($m['ValueError']("Single '{'"));
						}
						if ((($bool279=(($eq55=(typeof ($59=s).__array != 'undefined'?
							((typeof $59.__array[$60=i]) != 'undefined'?$59.__array[$60]:
								$59.__getitem__($60)):
								$59.__getitem__(i)))===($eq56='{')&&$eq55===null?true:
							($eq55===null?false:($eq56===null?false:
								((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55.__cmp__=='function'?$eq55.__cmp__($eq56) === 0:
									((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56.__cmp__=='function'?$eq56.__cmp__($eq55) === 0:
										$eq55==$eq56)))))) === null || $bool279 === false || $bool279 === 0 || $bool279 === '' ?
								false :
								(typeof $bool279=='object'?
									(typeof $bool279.__nonzero__=='function'?
										$bool279.__nonzero__() :
										(typeof $bool279.__len__=='function'?
											($bool279.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							i = (typeof ($add77=i)==typeof ($add78=1) && (typeof $add77=='number'||typeof $add77=='string')?
								$add77+$add78:
								$m['op_add']($add77,$add78));
							markup_follows = false;
						}
					}
					out['append_slice'](s, last_literal, (typeof ($sub27=i)==typeof ($sub28=1) && (typeof $sub27=='number'||typeof $sub27=='string')?
						$sub27-$sub28:
						$m['op_sub']($sub27,$sub28)));
					if ((($bool281=!(($bool280=markup_follows) === null || $bool280 === false || $bool280 === 0 || $bool280 === '' ?
						false :
						(typeof $bool280=='object'?
							(typeof $bool280.__nonzero__=='function'?
								$bool280.__nonzero__() :
								(typeof $bool280.__len__=='function'?
									($bool280.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool281 === false || $bool281 === 0 || $bool281 === '' ?
							false :
							(typeof $bool281=='object'?
								(typeof $bool281.__nonzero__=='function'?
									$bool281.__nonzero__() :
									(typeof $bool281.__len__=='function'?
										($bool281.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						last_literal = i;
						continue;
					}
					nested = 1;
					field_start = i;
					recursive = false;
					while ((($bool282=((($cmp61=i)===($cmp62=end)?0:
						(typeof $cmp61==typeof $cmp62 && ((typeof $cmp61 == 'number')||(typeof $cmp61 == 'string')||(typeof $cmp61 == 'boolean'))?
							($cmp61 == $cmp62 ? 0 : ($cmp61 < $cmp62 ? -1 : 1)):
							$m['cmp']($cmp61, $cmp62))) == -1)) === null || $bool282 === false || $bool282 === 0 || $bool282 === '' ?
							false :
							(typeof $bool282=='object'?
								(typeof $bool282.__nonzero__=='function'?
									$bool282.__nonzero__() :
									(typeof $bool282.__len__=='function'?
										($bool282.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						c = (typeof ($61=s).__array != 'undefined'?
							((typeof $61.__array[$62=i]) != 'undefined'?$61.__array[$62]:
								$61.__getitem__($62)):
								$61.__getitem__(i));
						if ((($bool283=(($eq57=c)===($eq58='{')&&$eq57===null?true:
							($eq57===null?false:($eq58===null?false:
								((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57.__cmp__=='function'?$eq57.__cmp__($eq58) === 0:
									((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58.__cmp__=='function'?$eq58.__cmp__($eq57) === 0:
										$eq57==$eq58)))))) === null || $bool283 === false || $bool283 === 0 || $bool283 === '' ?
								false :
								(typeof $bool283=='object'?
									(typeof $bool283.__nonzero__=='function'?
										$bool283.__nonzero__() :
										(typeof $bool283.__len__=='function'?
											($bool283.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							recursive = true;
							nested = (typeof ($add79=nested)==typeof ($add80=1) && (typeof $add79=='number'||typeof $add79=='string')?
								$add79+$add80:
								$m['op_add']($add79,$add80));
						}
						else if ((($bool284=(($eq59=c)===($eq60='}')&&$eq59===null?true:
							($eq59===null?false:($eq60===null?false:
								((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59.__cmp__=='function'?$eq59.__cmp__($eq60) === 0:
									((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60.__cmp__=='function'?$eq60.__cmp__($eq59) === 0:
										$eq59==$eq60)))))) === null || $bool284 === false || $bool284 === 0 || $bool284 === '' ?
								false :
								(typeof $bool284=='object'?
									(typeof $bool284.__nonzero__=='function'?
										$bool284.__nonzero__() :
										(typeof $bool284.__len__=='function'?
											($bool284.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							nested = (typeof ($sub29=nested)==typeof ($sub30=1) && (typeof $sub29=='number'||typeof $sub29=='string')?
								$sub29-$sub30:
								$m['op_sub']($sub29,$sub30));
							if ((($bool286=!(($bool285=nested) === null || $bool285 === false || $bool285 === 0 || $bool285 === '' ?
								false :
								(typeof $bool285=='object'?
									(typeof $bool285.__nonzero__=='function'?
										$bool285.__nonzero__() :
										(typeof $bool285.__len__=='function'?
											($bool285.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) === null || $bool286 === false || $bool286 === 0 || $bool286 === '' ?
									false :
									(typeof $bool286=='object'?
										(typeof $bool286.__nonzero__=='function'?
											$bool286.__nonzero__() :
											(typeof $bool286.__len__=='function'?
												($bool286.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								break;
							}
						}
						i = (typeof ($add81=i)==typeof ($add82=1) && (typeof $add81=='number'||typeof $add81=='string')?
							$add81+$add82:
							$m['op_add']($add81,$add82));
					}
					if ((($bool287=nested) === null || $bool287 === false || $bool287 === 0 || $bool287 === '' ?
							false :
							(typeof $bool287=='object'?
								(typeof $bool287.__nonzero__=='function'?
									$bool287.__nonzero__() :
									(typeof $bool287.__len__=='function'?
										($bool287.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($m['ValueError']("Unmatched '{'"));
					}
					rendered = self['_render_field'](field_start, i, recursive, level);
					out['append'](rendered);
					i = (typeof ($add83=i)==typeof ($add84=1) && (typeof $add83=='number'||typeof $add83=='string')?
						$add83+$add84:
						$m['op_add']($add83,$add84));
					last_literal = i;
				}
			}
			out['append_slice'](s, last_literal, end);
			return out['build']();
		}
	, 1, [null,null,['self'],['start'],['end'],['level'],['out'],['s']]);
		$cls_definition['_do_build_string'] = $method;
		$method = $pyjs__bind_method2('_parse_field', function(start, end) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
			}
			var $cmp64,$cmp65,$cmp66,$add88,$cmp63,$eq61,$add87,$add86,$add85,$add89,$bool288,$bool289,conversion,$attr160,$eq70,$68,end_name,$65,$64,$67,$66,$add90,$63,$add94,$bool291,$bool290,$bool293,$bool292,w_msg,$bool294,$add92,$add91,$add93,c,$eq69,$eq68,i,$eq64,$eq67,$eq66,$attr159,$eq63,$eq62,$eq65,s,$or13,$or12;
			s = self['template'];
			i = start;
			while ((($bool288=((($cmp63=i)===($cmp64=end)?0:
				(typeof $cmp63==typeof $cmp64 && ((typeof $cmp63 == 'number')||(typeof $cmp63 == 'string')||(typeof $cmp63 == 'boolean'))?
					($cmp63 == $cmp64 ? 0 : ($cmp63 < $cmp64 ? -1 : 1)):
					$m['cmp']($cmp63, $cmp64))) == -1)) === null || $bool288 === false || $bool288 === 0 || $bool288 === '' ?
					false :
					(typeof $bool288=='object'?
						(typeof $bool288.__nonzero__=='function'?
							$bool288.__nonzero__() :
							(typeof $bool288.__len__=='function'?
								($bool288.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				c = (typeof ($63=s).__array != 'undefined'?
					((typeof $63.__array[$64=i]) != 'undefined'?$63.__array[$64]:
						$63.__getitem__($64)):
						$63.__getitem__(i));
				if ((($bool290=((($bool289=$or12=(($eq61=c)===($eq62=':')&&$eq61===null?true:
					($eq61===null?false:($eq62===null?false:
						((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61.__cmp__=='function'?$eq61.__cmp__($eq62) === 0:
							((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62.__cmp__=='function'?$eq62.__cmp__($eq61) === 0:
								$eq61==$eq62)))))) === null || $bool289 === false || $bool289 === 0 || $bool289 === '' ?
					false :
					(typeof $bool289=='object'?
						(typeof $bool289.__nonzero__=='function'?
							$bool289.__nonzero__() :
							(typeof $bool289.__len__=='function'?
								($bool289.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or12:(($eq63=c)===($eq64='!')&&$eq63===null?true:
					($eq63===null?false:($eq64===null?false:
						((typeof $eq63=='object'||typeof $eq63=='function')&&typeof $eq63.__cmp__=='function'?$eq63.__cmp__($eq64) === 0:
							((typeof $eq64=='object'||typeof $eq64=='function')&&typeof $eq64.__cmp__=='function'?$eq64.__cmp__($eq63) === 0:
								$eq63==$eq64))))))) === null || $bool290 === false || $bool290 === 0 || $bool290 === '' ?
						false :
						(typeof $bool290=='object'?
							(typeof $bool290.__nonzero__=='function'?
								$bool290.__nonzero__() :
								(typeof $bool290.__len__=='function'?
									($bool290.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					end_name = i;
					if ((($bool291=(($eq65=c)===($eq66='!')&&$eq65===null?true:
						($eq65===null?false:($eq66===null?false:
							((typeof $eq65=='object'||typeof $eq65=='function')&&typeof $eq65.__cmp__=='function'?$eq65.__cmp__($eq66) === 0:
								((typeof $eq66=='object'||typeof $eq66=='function')&&typeof $eq66.__cmp__=='function'?$eq66.__cmp__($eq65) === 0:
									$eq65==$eq66)))))) === null || $bool291 === false || $bool291 === 0 || $bool291 === '' ?
							false :
							(typeof $bool291=='object'?
								(typeof $bool291.__nonzero__=='function'?
									$bool291.__nonzero__() :
									(typeof $bool291.__len__=='function'?
										($bool291.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						i = (typeof ($add85=i)==typeof ($add86=1) && (typeof $add85=='number'||typeof $add85=='string')?
							$add85+$add86:
							$m['op_add']($add85,$add86));
						if ((($bool292=(($eq67=i)===($eq68=end)&&$eq67===null?true:
							($eq67===null?false:($eq68===null?false:
								((typeof $eq67=='object'||typeof $eq67=='function')&&typeof $eq67.__cmp__=='function'?$eq67.__cmp__($eq68) === 0:
									((typeof $eq68=='object'||typeof $eq68=='function')&&typeof $eq68.__cmp__=='function'?$eq68.__cmp__($eq67) === 0:
										$eq67==$eq68)))))) === null || $bool292 === false || $bool292 === 0 || $bool292 === '' ?
								false :
								(typeof $bool292=='object'?
									(typeof $bool292.__nonzero__=='function'?
										$bool292.__nonzero__() :
										(typeof $bool292.__len__=='function'?
											($bool292.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							w_msg = 'expected conversion';
							throw ($m['ValueError'](w_msg));
						}
						conversion = (typeof ($65=s).__array != 'undefined'?
							((typeof $65.__array[$66=i]) != 'undefined'?$65.__array[$66]:
								$65.__getitem__($66)):
								$65.__getitem__(i));
						i = (typeof ($add87=i)==typeof ($add88=1) && (typeof $add87=='number'||typeof $add87=='string')?
							$add87+$add88:
							$m['op_add']($add87,$add88));
						if ((($bool293=((($cmp65=i)===($cmp66=end)?0:
							(typeof $cmp65==typeof $cmp66 && ((typeof $cmp65 == 'number')||(typeof $cmp65 == 'string')||(typeof $cmp65 == 'boolean'))?
								($cmp65 == $cmp66 ? 0 : ($cmp65 < $cmp66 ? -1 : 1)):
								$m['cmp']($cmp65, $cmp66))) == -1)) === null || $bool293 === false || $bool293 === 0 || $bool293 === '' ?
								false :
								(typeof $bool293=='object'?
									(typeof $bool293.__nonzero__=='function'?
										$bool293.__nonzero__() :
										(typeof $bool293.__len__=='function'?
											($bool293.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							if ((($bool294=!(($eq69=(typeof ($67=s).__array != 'undefined'?
								((typeof $67.__array[$68=i]) != 'undefined'?$67.__array[$68]:
									$67.__getitem__($68)):
									$67.__getitem__(i)))===($eq70=':')&&$eq69===null?true:
								($eq69===null?false:($eq70===null?false:
									((typeof $eq69=='object'||typeof $eq69=='function')&&typeof $eq69.__cmp__=='function'?$eq69.__cmp__($eq70) === 0:
										((typeof $eq70=='object'||typeof $eq70=='function')&&typeof $eq70.__cmp__=='function'?$eq70.__cmp__($eq69) === 0:
											$eq69==$eq70)))))) === null || $bool294 === false || $bool294 === 0 || $bool294 === '' ?
									false :
									(typeof $bool294=='object'?
										(typeof $bool294.__nonzero__=='function'?
											$bool294.__nonzero__() :
											(typeof $bool294.__len__=='function'?
												($bool294.__len__()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )) {
								w_msg = "expected ':' after format specifier";
								throw ($m['ValueError'](w_msg));
							}
							i = (typeof ($add89=i)==typeof ($add90=1) && (typeof $add89=='number'||typeof $add89=='string')?
								$add89+$add90:
								$m['op_add']($add89,$add90));
						}
					}
					else {
						conversion = null;
						i = (typeof ($add91=i)==typeof ($add92=1) && (typeof $add91=='number'||typeof $add91=='string')?
							$add91+$add92:
							$m['op_add']($add91,$add92));
					}
					return $p['tuple']([$p['__getslice'](s, start, end_name), conversion, i]);
				}
				i = (typeof ($add93=i)==typeof ($add94=1) && (typeof $add93=='number'||typeof $add93=='string')?
					$add93+$add94:
					$m['op_add']($add93,$add94));
			}
			return $p['tuple']([$p['__getslice'](s, start, end), null, end]);
		}
	, 1, [null,null,['self'],['start'],['end']]);
		$cls_definition['_parse_field'] = $method;
		$method = $pyjs__bind_method2('_get_argument', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var $eq78,$cmp67,$attr180,$attr164,$cmp68,kwarg,$attr161,stop,$73,$and29,$and28,$bool309,arg_key,$attr163,$attr177,$bool307,index,$attr168,$bool304,end,$bool302,$bool301,$bool300,$eq76,$eq77,$eq75,$eq72,$eq73,$attr162,$eq71,$attr169,w_msg,$pyjs_try_err,$69,$eq83,use_numeric,msg,$bool311,$attr167,empty,$bool299,$bool298,$add98,$attr166,$attr174,$add95,$add96,$add97,$bool295,c,$bool297,$bool296,$eq82,$74,$bool306,$71,$bool303,$bool305,$72,$attr179,$70,$eq84,$bool310,$eq81,$eq80,i,$attr176,$attr175,$eq79,$attr173,$attr172,$attr171,$attr170,$or15,$or14,$or17,$or16,$attr165,$bool308,w_arg,$eq74,$attr178;
			i = 0;
			end = $m['len'](name);
			while ((($bool295=((($cmp67=i)===($cmp68=end)?0:
				(typeof $cmp67==typeof $cmp68 && ((typeof $cmp67 == 'number')||(typeof $cmp67 == 'string')||(typeof $cmp67 == 'boolean'))?
					($cmp67 == $cmp68 ? 0 : ($cmp67 < $cmp68 ? -1 : 1)):
					$m['cmp']($cmp67, $cmp68))) == -1)) === null || $bool295 === false || $bool295 === 0 || $bool295 === '' ?
					false :
					(typeof $bool295=='object'?
						(typeof $bool295.__nonzero__=='function'?
							$bool295.__nonzero__() :
							(typeof $bool295.__len__=='function'?
								($bool295.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				c = (typeof ($69=name).__array != 'undefined'?
					((typeof $69.__array[$70=i]) != 'undefined'?$69.__array[$70]:
						$69.__getitem__($70)):
						$69.__getitem__(i));
				if ((($bool297=((($bool296=$or14=(($eq71=c)===($eq72='[')&&$eq71===null?true:
					($eq71===null?false:($eq72===null?false:
						((typeof $eq71=='object'||typeof $eq71=='function')&&typeof $eq71.__cmp__=='function'?$eq71.__cmp__($eq72) === 0:
							((typeof $eq72=='object'||typeof $eq72=='function')&&typeof $eq72.__cmp__=='function'?$eq72.__cmp__($eq71) === 0:
								$eq71==$eq72)))))) === null || $bool296 === false || $bool296 === 0 || $bool296 === '' ?
					false :
					(typeof $bool296=='object'?
						(typeof $bool296.__nonzero__=='function'?
							$bool296.__nonzero__() :
							(typeof $bool296.__len__=='function'?
								($bool296.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or14:(($eq73=c)===($eq74='.')&&$eq73===null?true:
					($eq73===null?false:($eq74===null?false:
						((typeof $eq73=='object'||typeof $eq73=='function')&&typeof $eq73.__cmp__=='function'?$eq73.__cmp__($eq74) === 0:
							((typeof $eq74=='object'||typeof $eq74=='function')&&typeof $eq74.__cmp__=='function'?$eq74.__cmp__($eq73) === 0:
								$eq73==$eq74))))))) === null || $bool297 === false || $bool297 === 0 || $bool297 === '' ?
						false :
						(typeof $bool297=='object'?
							(typeof $bool297.__nonzero__=='function'?
								$bool297.__nonzero__() :
								(typeof $bool297.__len__=='function'?
									($bool297.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					break;
				}
				i = (typeof ($add95=i)==typeof ($add96=1) && (typeof $add95=='number'||typeof $add95=='string')?
					$add95+$add96:
					$m['op_add']($add95,$add96));
			}
			empty = !(($bool298=i) === null || $bool298 === false || $bool298 === 0 || $bool298 === '' ?
				false :
				(typeof $bool298=='object'?
					(typeof $bool298.__nonzero__=='function'?
						$bool298.__nonzero__() :
						(typeof $bool298.__len__=='function'?
							($bool298.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) );
			if ((($bool299=empty) === null || $bool299 === false || $bool299 === 0 || $bool299 === '' ?
					false :
					(typeof $bool299=='object'?
						(typeof $bool299.__nonzero__=='function'?
							$bool299.__nonzero__() :
							(typeof $bool299.__len__=='function'?
								($bool299.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				index = (typeof ($usub11=1)=='number'?
					-$usub11:
					$m['op_usub']($usub11));
			}
			else {
				var $tupleassign6 = $p['__ass_unpack']($m['_parse_int'](name, 0, i), 2, null);
				index = $tupleassign6[0];
				stop = $tupleassign6[1];
				if ((($bool300=!(($eq75=stop)===($eq76=i)&&$eq75===null?true:
					($eq75===null?false:($eq76===null?false:
						((typeof $eq75=='object'||typeof $eq75=='function')&&typeof $eq75.__cmp__=='function'?$eq75.__cmp__($eq76) === 0:
							((typeof $eq76=='object'||typeof $eq76=='function')&&typeof $eq76.__cmp__=='function'?$eq76.__cmp__($eq75) === 0:
								$eq75==$eq76)))))) === null || $bool300 === false || $bool300 === 0 || $bool300 === '' ?
						false :
						(typeof $bool300=='object'?
							(typeof $bool300.__nonzero__=='function'?
								$bool300.__nonzero__() :
								(typeof $bool300.__len__=='function'?
									($bool300.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					index = (typeof ($usub12=1)=='number'?
						-$usub12:
						$m['op_usub']($usub12));
				}
			}
			use_numeric = ((($bool301=$or16=empty) === null || $bool301 === false || $bool301 === 0 || $bool301 === '' ?
				false :
				(typeof $bool301=='object'?
					(typeof $bool301.__nonzero__=='function'?
						$bool301.__nonzero__() :
						(typeof $bool301.__len__=='function'?
							($bool301.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or16:!(($eq77=index)===($eq78=(typeof ($usub13=1)=='number'?
				-$usub13:
				$m['op_usub']($usub13)))&&$eq77===null?true:
				($eq77===null?false:($eq78===null?false:
					((typeof $eq77=='object'||typeof $eq77=='function')&&typeof $eq77.__cmp__=='function'?$eq77.__cmp__($eq78) === 0:
						((typeof $eq78=='object'||typeof $eq78=='function')&&typeof $eq78.__cmp__=='function'?$eq78.__cmp__($eq77) === 0:
							$eq77==$eq78))))));
			if ((($bool303=((($bool302=$and28=(($eq79=self['auto_numbering_state'])===($eq80=self['ANS_INIT'])&&$eq79===null?true:
				($eq79===null?false:($eq80===null?false:
					((typeof $eq79=='object'||typeof $eq79=='function')&&typeof $eq79.__cmp__=='function'?$eq79.__cmp__($eq80) === 0:
						((typeof $eq80=='object'||typeof $eq80=='function')&&typeof $eq80.__cmp__=='function'?$eq80.__cmp__($eq79) === 0:
							$eq79==$eq80)))))) === null || $bool302 === false || $bool302 === 0 || $bool302 === '' ?
				false :
				(typeof $bool302=='object'?
					(typeof $bool302.__nonzero__=='function'?
						$bool302.__nonzero__() :
						(typeof $bool302.__len__=='function'?
							($bool302.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?use_numeric:$and28)) === null || $bool303 === false || $bool303 === 0 || $bool303 === '' ?
					false :
					(typeof $bool303=='object'?
						(typeof $bool303.__nonzero__=='function'?
							$bool303.__nonzero__() :
							(typeof $bool303.__len__=='function'?
								($bool303.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool304=empty) === null || $bool304 === false || $bool304 === 0 || $bool304 === '' ?
						false :
						(typeof $bool304=='object'?
							(typeof $bool304.__nonzero__=='function'?
								$bool304.__nonzero__() :
								(typeof $bool304.__len__=='function'?
									($bool304.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self.auto_numbering_state = self['ANS_AUTO'];
				}
				else {
					self.auto_numbering_state = self['ANS_MANUAL'];
				}
			}
			if ((($bool305=use_numeric) === null || $bool305 === false || $bool305 === 0 || $bool305 === '' ?
					false :
					(typeof $bool305=='object'?
						(typeof $bool305.__nonzero__=='function'?
							$bool305.__nonzero__() :
							(typeof $bool305.__len__=='function'?
								($bool305.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool306=(($eq81=self['auto_numbering_state'])===($eq82=self['ANS_MANUAL'])&&$eq81===null?true:
					($eq81===null?false:($eq82===null?false:
						((typeof $eq81=='object'||typeof $eq81=='function')&&typeof $eq81.__cmp__=='function'?$eq81.__cmp__($eq82) === 0:
							((typeof $eq82=='object'||typeof $eq82=='function')&&typeof $eq82.__cmp__=='function'?$eq82.__cmp__($eq81) === 0:
								$eq81==$eq82)))))) === null || $bool306 === false || $bool306 === 0 || $bool306 === '' ?
						false :
						(typeof $bool306=='object'?
							(typeof $bool306.__nonzero__=='function'?
								$bool306.__nonzero__() :
								(typeof $bool306.__len__=='function'?
									($bool306.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool307=empty) === null || $bool307 === false || $bool307 === 0 || $bool307 === '' ?
							false :
							(typeof $bool307=='object'?
								(typeof $bool307.__nonzero__=='function'?
									$bool307.__nonzero__() :
									(typeof $bool307.__len__=='function'?
										($bool307.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						msg = 'switching from manual to automatic numbering';
						throw ($m['ValueError'](msg));
					}
				}
				else if ((($bool309=!(($bool308=empty) === null || $bool308 === false || $bool308 === 0 || $bool308 === '' ?
					false :
					(typeof $bool308=='object'?
						(typeof $bool308.__nonzero__=='function'?
							$bool308.__nonzero__() :
							(typeof $bool308.__len__=='function'?
								($bool308.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool309 === false || $bool309 === 0 || $bool309 === '' ?
						false :
						(typeof $bool309=='object'?
							(typeof $bool309.__nonzero__=='function'?
								$bool309.__nonzero__() :
								(typeof $bool309.__len__=='function'?
									($bool309.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					msg = 'switching from automatic to manual numbering';
					throw ($m['ValueError'](msg));
				}
			}
			if ((($bool310=empty) === null || $bool310 === false || $bool310 === 0 || $bool310 === '' ?
					false :
					(typeof $bool310=='object'?
						(typeof $bool310.__nonzero__=='function'?
							$bool310.__nonzero__() :
							(typeof $bool310.__len__=='function'?
								($bool310.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				index = self['auto_numbering'];
				self.auto_numbering = (typeof ($add97=self['auto_numbering'])==typeof ($add98=1) && (typeof $add97=='number'||typeof $add97=='string')?
					$add97+$add98:
					$m['op_add']($add97,$add98));
			}
			if ((($bool311=(($eq83=index)===($eq84=(typeof ($usub14=1)=='number'?
				-$usub14:
				$m['op_usub']($usub14)))&&$eq83===null?true:
				($eq83===null?false:($eq84===null?false:
					((typeof $eq83=='object'||typeof $eq83=='function')&&typeof $eq83.__cmp__=='function'?$eq83.__cmp__($eq84) === 0:
						((typeof $eq84=='object'||typeof $eq84=='function')&&typeof $eq84.__cmp__=='function'?$eq84.__cmp__($eq83) === 0:
							$eq83==$eq84)))))) === null || $bool311 === false || $bool311 === 0 || $bool311 === '' ?
					false :
					(typeof $bool311=='object'?
						(typeof $bool311.__nonzero__=='function'?
							$bool311.__nonzero__() :
							(typeof $bool311.__len__=='function'?
								($bool311.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				kwarg = $p['__getslice'](name, 0, i);
				arg_key = kwarg;
				try {
					w_arg = (typeof ($71=self['kwargs']).__array != 'undefined'?
						((typeof $71.__array[$72=arg_key]) != 'undefined'?$71.__array[$72]:
							$71.__getitem__($72)):
							$71.__getitem__(arg_key));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $m['KeyError'].__name__)||$m['_isinstance']($pyjs_try_err,$m['KeyError'])) {
						throw ($m['KeyError'](arg_key));
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			else {
				try {
					w_arg = (typeof ($73=self['args']).__array != 'undefined'?
						((typeof $73.__array[$74=index]) != 'undefined'?$73.__array[$74]:
							$73.__getitem__($74)):
							$73.__getitem__(index));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $m['IndexError'].__name__)||$m['_isinstance']($pyjs_try_err,$m['IndexError'])) {
						w_msg = 'index out of range';
						throw ($m['IndexError'](w_msg));
					} else {
						throw ($pyjs.__last_exception__?
							$pyjs.__last_exception__.error:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
			}
			return self['_resolve_lookups'](w_arg, name, i, end);
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['_get_argument'] = $method;
		$method = $pyjs__bind_method2('_resolve_lookups', function(w_obj, name, start, end) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_obj = arguments[1];
				name = arguments[2];
				start = arguments[3];
				end = arguments[4];
			}
			var $cmp73,$79,$bool316,$cmp72,$83,$attr182,$cmp69,$add108,$add102,$eq95,$bool324,$bool325,got_bracket,$bool327,$eq101,$bool321,$bool320,$bool323,$add104,$eq90,$eq91,$eq92,$eq93,$add103,$eq96,$eq97,$eq98,index,$cmp74,$bool326,w_attr,msg,$eq100,$bool322,$eq87,$82,$add101,$add100,$cmp71,$cmp70,$add105,$add99,$add107,$bool315,w_msg,$attr184,$84,$eq85,$81,$attr181,$attr183,$eq102,$add106,w_item,$eq94,$80,$and30,$and31,$77,$bool314,$eq86,c,$bool317,$76,$bool312,$75,i,$78,$bool313,$bool318,$bool319,$eq89,$eq88,$eq99,reached,$or19,$or18;
			i = start;
			while ((($bool312=((($cmp69=i)===($cmp70=end)?0:
				(typeof $cmp69==typeof $cmp70 && ((typeof $cmp69 == 'number')||(typeof $cmp69 == 'string')||(typeof $cmp69 == 'boolean'))?
					($cmp69 == $cmp70 ? 0 : ($cmp69 < $cmp70 ? -1 : 1)):
					$m['cmp']($cmp69, $cmp70))) == -1)) === null || $bool312 === false || $bool312 === 0 || $bool312 === '' ?
					false :
					(typeof $bool312=='object'?
						(typeof $bool312.__nonzero__=='function'?
							$bool312.__nonzero__() :
							(typeof $bool312.__len__=='function'?
								($bool312.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				c = (typeof ($75=name).__array != 'undefined'?
					((typeof $75.__array[$76=i]) != 'undefined'?$75.__array[$76]:
						$75.__getitem__($76)):
						$75.__getitem__(i));
				if ((($bool313=(($eq85=c)===($eq86='.')&&$eq85===null?true:
					($eq85===null?false:($eq86===null?false:
						((typeof $eq85=='object'||typeof $eq85=='function')&&typeof $eq85.__cmp__=='function'?$eq85.__cmp__($eq86) === 0:
							((typeof $eq86=='object'||typeof $eq86=='function')&&typeof $eq86.__cmp__=='function'?$eq86.__cmp__($eq85) === 0:
								$eq85==$eq86)))))) === null || $bool313 === false || $bool313 === 0 || $bool313 === '' ?
						false :
						(typeof $bool313=='object'?
							(typeof $bool313.__nonzero__=='function'?
								$bool313.__nonzero__() :
								(typeof $bool313.__len__=='function'?
									($bool313.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					i = (typeof ($add99=i)==typeof ($add100=1) && (typeof $add99=='number'||typeof $add99=='string')?
						$add99+$add100:
						$m['op_add']($add99,$add100));
					start = i;
					while ((($bool314=((($cmp71=i)===($cmp72=end)?0:
						(typeof $cmp71==typeof $cmp72 && ((typeof $cmp71 == 'number')||(typeof $cmp71 == 'string')||(typeof $cmp71 == 'boolean'))?
							($cmp71 == $cmp72 ? 0 : ($cmp71 < $cmp72 ? -1 : 1)):
							$m['cmp']($cmp71, $cmp72))) == -1)) === null || $bool314 === false || $bool314 === 0 || $bool314 === '' ?
							false :
							(typeof $bool314=='object'?
								(typeof $bool314.__nonzero__=='function'?
									$bool314.__nonzero__() :
									(typeof $bool314.__len__=='function'?
										($bool314.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						c = (typeof ($77=name).__array != 'undefined'?
							((typeof $77.__array[$78=i]) != 'undefined'?$77.__array[$78]:
								$77.__getitem__($78)):
								$77.__getitem__(i));
						if ((($bool316=((($bool315=$or18=(($eq87=c)===($eq88='[')&&$eq87===null?true:
							($eq87===null?false:($eq88===null?false:
								((typeof $eq87=='object'||typeof $eq87=='function')&&typeof $eq87.__cmp__=='function'?$eq87.__cmp__($eq88) === 0:
									((typeof $eq88=='object'||typeof $eq88=='function')&&typeof $eq88.__cmp__=='function'?$eq88.__cmp__($eq87) === 0:
										$eq87==$eq88)))))) === null || $bool315 === false || $bool315 === 0 || $bool315 === '' ?
							false :
							(typeof $bool315=='object'?
								(typeof $bool315.__nonzero__=='function'?
									$bool315.__nonzero__() :
									(typeof $bool315.__len__=='function'?
										($bool315.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )?$or18:(($eq89=c)===($eq90='.')&&$eq89===null?true:
							($eq89===null?false:($eq90===null?false:
								((typeof $eq89=='object'||typeof $eq89=='function')&&typeof $eq89.__cmp__=='function'?$eq89.__cmp__($eq90) === 0:
									((typeof $eq90=='object'||typeof $eq90=='function')&&typeof $eq90.__cmp__=='function'?$eq90.__cmp__($eq89) === 0:
										$eq89==$eq90))))))) === null || $bool316 === false || $bool316 === 0 || $bool316 === '' ?
								false :
								(typeof $bool316=='object'?
									(typeof $bool316.__nonzero__=='function'?
										$bool316.__nonzero__() :
										(typeof $bool316.__len__=='function'?
											($bool316.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							break;
						}
						i = (typeof ($add101=i)==typeof ($add102=1) && (typeof $add101=='number'||typeof $add101=='string')?
							$add101+$add102:
							$m['op_add']($add101,$add102));
					}
					if ((($bool317=(($eq91=start)===($eq92=i)&&$eq91===null?true:
						($eq91===null?false:($eq92===null?false:
							((typeof $eq91=='object'||typeof $eq91=='function')&&typeof $eq91.__cmp__=='function'?$eq91.__cmp__($eq92) === 0:
								((typeof $eq92=='object'||typeof $eq92=='function')&&typeof $eq92.__cmp__=='function'?$eq92.__cmp__($eq91) === 0:
									$eq91==$eq92)))))) === null || $bool317 === false || $bool317 === 0 || $bool317 === '' ?
							false :
							(typeof $bool317=='object'?
								(typeof $bool317.__nonzero__=='function'?
									$bool317.__nonzero__() :
									(typeof $bool317.__len__=='function'?
										($bool317.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						w_msg = 'Empty attribute in format string';
						throw ($m['ValueError'](w_msg));
					}
					w_attr = $p['__getslice'](name, start, i);
					if ((($bool318=(w_obj !== null)) === null || $bool318 === false || $bool318 === 0 || $bool318 === '' ?
							false :
							(typeof $bool318=='object'?
								(typeof $bool318.__nonzero__=='function'?
									$bool318.__nonzero__() :
									(typeof $bool318.__len__=='function'?
										($bool318.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						w_obj = $m['getattr'](w_obj, w_attr);
					}
					else {
						self['parser_list_w']['append'](self['space']['newtuple']($p['list']([self['space']['w_True'], w_attr])));
					}
				}
				else if ((($bool319=(($eq93=c)===($eq94='[')&&$eq93===null?true:
					($eq93===null?false:($eq94===null?false:
						((typeof $eq93=='object'||typeof $eq93=='function')&&typeof $eq93.__cmp__=='function'?$eq93.__cmp__($eq94) === 0:
							((typeof $eq94=='object'||typeof $eq94=='function')&&typeof $eq94.__cmp__=='function'?$eq94.__cmp__($eq93) === 0:
								$eq93==$eq94)))))) === null || $bool319 === false || $bool319 === 0 || $bool319 === '' ?
						false :
						(typeof $bool319=='object'?
							(typeof $bool319.__nonzero__=='function'?
								$bool319.__nonzero__() :
								(typeof $bool319.__len__=='function'?
									($bool319.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					got_bracket = false;
					i = (typeof ($add103=i)==typeof ($add104=1) && (typeof $add103=='number'||typeof $add103=='string')?
						$add103+$add104:
						$m['op_add']($add103,$add104));
					start = i;
					while ((($bool320=((($cmp73=i)===($cmp74=end)?0:
						(typeof $cmp73==typeof $cmp74 && ((typeof $cmp73 == 'number')||(typeof $cmp73 == 'string')||(typeof $cmp73 == 'boolean'))?
							($cmp73 == $cmp74 ? 0 : ($cmp73 < $cmp74 ? -1 : 1)):
							$m['cmp']($cmp73, $cmp74))) == -1)) === null || $bool320 === false || $bool320 === 0 || $bool320 === '' ?
							false :
							(typeof $bool320=='object'?
								(typeof $bool320.__nonzero__=='function'?
									$bool320.__nonzero__() :
									(typeof $bool320.__len__=='function'?
										($bool320.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						c = (typeof ($79=name).__array != 'undefined'?
							((typeof $79.__array[$80=i]) != 'undefined'?$79.__array[$80]:
								$79.__getitem__($80)):
								$79.__getitem__(i));
						if ((($bool321=(($eq95=c)===($eq96=']')&&$eq95===null?true:
							($eq95===null?false:($eq96===null?false:
								((typeof $eq95=='object'||typeof $eq95=='function')&&typeof $eq95.__cmp__=='function'?$eq95.__cmp__($eq96) === 0:
									((typeof $eq96=='object'||typeof $eq96=='function')&&typeof $eq96.__cmp__=='function'?$eq96.__cmp__($eq95) === 0:
										$eq95==$eq96)))))) === null || $bool321 === false || $bool321 === 0 || $bool321 === '' ?
								false :
								(typeof $bool321=='object'?
									(typeof $bool321.__nonzero__=='function'?
										$bool321.__nonzero__() :
										(typeof $bool321.__len__=='function'?
											($bool321.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							got_bracket = true;
							break;
						}
						i = (typeof ($add105=i)==typeof ($add106=1) && (typeof $add105=='number'||typeof $add105=='string')?
							$add105+$add106:
							$m['op_add']($add105,$add106));
					}
					if ((($bool323=!(($bool322=got_bracket) === null || $bool322 === false || $bool322 === 0 || $bool322 === '' ?
						false :
						(typeof $bool322=='object'?
							(typeof $bool322.__nonzero__=='function'?
								$bool322.__nonzero__() :
								(typeof $bool322.__len__=='function'?
									($bool322.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool323 === false || $bool323 === 0 || $bool323 === '' ?
							false :
							(typeof $bool323=='object'?
								(typeof $bool323.__nonzero__=='function'?
									$bool323.__nonzero__() :
									(typeof $bool323.__len__=='function'?
										($bool323.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($m['ValueError']("Missing ']'"));
					}
					if ((($bool324=(($eq97=(typeof ($81=name).__array != 'undefined'?
						((typeof $81.__array[$82=start]) != 'undefined'?$81.__array[$82]:
							$81.__getitem__($82)):
							$81.__getitem__(start)))===($eq98='{')&&$eq97===null?true:
						($eq97===null?false:($eq98===null?false:
							((typeof $eq97=='object'||typeof $eq97=='function')&&typeof $eq97.__cmp__=='function'?$eq97.__cmp__($eq98) === 0:
								((typeof $eq98=='object'||typeof $eq98=='function')&&typeof $eq98.__cmp__=='function'?$eq98.__cmp__($eq97) === 0:
									$eq97==$eq98)))))) === null || $bool324 === false || $bool324 === 0 || $bool324 === '' ?
							false :
							(typeof $bool324=='object'?
								(typeof $bool324.__nonzero__=='function'?
									$bool324.__nonzero__() :
									(typeof $bool324.__len__=='function'?
										($bool324.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($m['TypeError']('no replacement on fieldname'));
					}
					var $tupleassign7 = $p['__ass_unpack']($m['_parse_int'](name, start, i), 2, null);
					index = $tupleassign7[0];
					reached = $tupleassign7[1];
					if ((($bool326=((($bool325=$and30=!(($eq99=index)===($eq100=(typeof ($usub15=1)=='number'?
						-$usub15:
						$m['op_usub']($usub15)))&&$eq99===null?true:
						($eq99===null?false:($eq100===null?false:
							((typeof $eq99=='object'||typeof $eq99=='function')&&typeof $eq99.__cmp__=='function'?$eq99.__cmp__($eq100) === 0:
								((typeof $eq100=='object'||typeof $eq100=='function')&&typeof $eq100.__cmp__=='function'?$eq100.__cmp__($eq99) === 0:
									$eq99==$eq100)))))) === null || $bool325 === false || $bool325 === 0 || $bool325 === '' ?
						false :
						(typeof $bool325=='object'?
							(typeof $bool325.__nonzero__=='function'?
								$bool325.__nonzero__() :
								(typeof $bool325.__len__=='function'?
									($bool325.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq101=reached)===($eq102=i)&&$eq101===null?true:
						($eq101===null?false:($eq102===null?false:
							((typeof $eq101=='object'||typeof $eq101=='function')&&typeof $eq101.__cmp__=='function'?$eq101.__cmp__($eq102) === 0:
								((typeof $eq102=='object'||typeof $eq102=='function')&&typeof $eq102.__cmp__=='function'?$eq102.__cmp__($eq101) === 0:
									$eq101==$eq102))))):$and30)) === null || $bool326 === false || $bool326 === 0 || $bool326 === '' ?
							false :
							(typeof $bool326=='object'?
								(typeof $bool326.__nonzero__=='function'?
									$bool326.__nonzero__() :
									(typeof $bool326.__len__=='function'?
										($bool326.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						w_item = index;
					}
					else {
						w_item = $p['__getslice'](name, start, i);
					}
					i = (typeof ($add107=i)==typeof ($add108=1) && (typeof $add107=='number'||typeof $add107=='string')?
						$add107+$add108:
						$m['op_add']($add107,$add108));
					if ((($bool327=(w_obj !== null)) === null || $bool327 === false || $bool327 === 0 || $bool327 === '' ?
							false :
							(typeof $bool327=='object'?
								(typeof $bool327.__nonzero__=='function'?
									$bool327.__nonzero__() :
									(typeof $bool327.__len__=='function'?
										($bool327.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						w_obj = (typeof ($83=w_obj).__array != 'undefined'?
							((typeof $83.__array[$84=w_item]) != 'undefined'?$83.__array[$84]:
								$83.__getitem__($84)):
								$83.__getitem__(w_item));
					}
					else {
						self['parser_list_w']['append'](self['space']['newtuple']($p['list']([self['space']['w_False'], w_item])));
					}
				}
				else {
					msg = "Only '[' and '.' may follow ']'";
					throw ($m['ValueError'](msg));
				}
			}
			return w_obj;
		}
	, 1, [null,null,['self'],['w_obj'],['name'],['start'],['end']]);
		$cls_definition['_resolve_lookups'] = $method;
		$method = $pyjs__bind_method2('formatter_field_name_split', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add110,w_first,$bool329,$bool328,$bool333,index,$eq103,end,$eq104,$eq107,$eq106,$eq109,$eq108,$add109,$attr187,$or20,$or21,$cmp78,$cmp77,$cmp76,$cmp75,$attr186,$86,$85,$attr185,stop,$eq110,$attr188,$bool332,$eq105,$bool330,$bool331,c,name,i;
			name = self['template'];
			i = 0;
			end = $m['len'](name);
			while ((($bool328=((($cmp75=i)===($cmp76=end)?0:
				(typeof $cmp75==typeof $cmp76 && ((typeof $cmp75 == 'number')||(typeof $cmp75 == 'string')||(typeof $cmp75 == 'boolean'))?
					($cmp75 == $cmp76 ? 0 : ($cmp75 < $cmp76 ? -1 : 1)):
					$m['cmp']($cmp75, $cmp76))) == -1)) === null || $bool328 === false || $bool328 === 0 || $bool328 === '' ?
					false :
					(typeof $bool328=='object'?
						(typeof $bool328.__nonzero__=='function'?
							$bool328.__nonzero__() :
							(typeof $bool328.__len__=='function'?
								($bool328.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				c = (typeof ($85=name).__array != 'undefined'?
					((typeof $85.__array[$86=i]) != 'undefined'?$85.__array[$86]:
						$85.__getitem__($86)):
						$85.__getitem__(i));
				if ((($bool330=((($bool329=$or20=(($eq103=c)===($eq104='[')&&$eq103===null?true:
					($eq103===null?false:($eq104===null?false:
						((typeof $eq103=='object'||typeof $eq103=='function')&&typeof $eq103.__cmp__=='function'?$eq103.__cmp__($eq104) === 0:
							((typeof $eq104=='object'||typeof $eq104=='function')&&typeof $eq104.__cmp__=='function'?$eq104.__cmp__($eq103) === 0:
								$eq103==$eq104)))))) === null || $bool329 === false || $bool329 === 0 || $bool329 === '' ?
					false :
					(typeof $bool329=='object'?
						(typeof $bool329.__nonzero__=='function'?
							$bool329.__nonzero__() :
							(typeof $bool329.__len__=='function'?
								($bool329.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or20:(($eq105=c)===($eq106='.')&&$eq105===null?true:
					($eq105===null?false:($eq106===null?false:
						((typeof $eq105=='object'||typeof $eq105=='function')&&typeof $eq105.__cmp__=='function'?$eq105.__cmp__($eq106) === 0:
							((typeof $eq106=='object'||typeof $eq106=='function')&&typeof $eq106.__cmp__=='function'?$eq106.__cmp__($eq105) === 0:
								$eq105==$eq106))))))) === null || $bool330 === false || $bool330 === 0 || $bool330 === '' ?
						false :
						(typeof $bool330=='object'?
							(typeof $bool330.__nonzero__=='function'?
								$bool330.__nonzero__() :
								(typeof $bool330.__len__=='function'?
									($bool330.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					break;
				}
				i = (typeof ($add109=i)==typeof ($add110=1) && (typeof $add109=='number'||typeof $add109=='string')?
					$add109+$add110:
					$m['op_add']($add109,$add110));
			}
			if ((($bool331=(($eq107=i)===($eq108=0)&&$eq107===null?true:
				($eq107===null?false:($eq108===null?false:
					((typeof $eq107=='object'||typeof $eq107=='function')&&typeof $eq107.__cmp__=='function'?$eq107.__cmp__($eq108) === 0:
						((typeof $eq108=='object'||typeof $eq108=='function')&&typeof $eq108.__cmp__=='function'?$eq108.__cmp__($eq107) === 0:
							$eq107==$eq108)))))) === null || $bool331 === false || $bool331 === 0 || $bool331 === '' ?
					false :
					(typeof $bool331=='object'?
						(typeof $bool331.__nonzero__=='function'?
							$bool331.__nonzero__() :
							(typeof $bool331.__len__=='function'?
								($bool331.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				index = (typeof ($usub16=1)=='number'?
					-$usub16:
					$m['op_usub']($usub16));
			}
			else {
				var $tupleassign8 = $p['__ass_unpack']($m['_parse_int'](name, 0, i), 2, null);
				index = $tupleassign8[0];
				stop = $tupleassign8[1];
				if ((($bool332=!(($eq109=stop)===($eq110=i)&&$eq109===null?true:
					($eq109===null?false:($eq110===null?false:
						((typeof $eq109=='object'||typeof $eq109=='function')&&typeof $eq109.__cmp__=='function'?$eq109.__cmp__($eq110) === 0:
							((typeof $eq110=='object'||typeof $eq110=='function')&&typeof $eq110.__cmp__=='function'?$eq110.__cmp__($eq109) === 0:
								$eq109==$eq110)))))) === null || $bool332 === false || $bool332 === 0 || $bool332 === '' ?
						false :
						(typeof $bool332=='object'?
							(typeof $bool332.__nonzero__=='function'?
								$bool332.__nonzero__() :
								(typeof $bool332.__len__=='function'?
									($bool332.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					index = (typeof ($usub17=1)=='number'?
						-$usub17:
						$m['op_usub']($usub17));
				}
			}
			if ((($bool333=((((($cmp77=index)===($cmp78=0)?0:
				(typeof $cmp77==typeof $cmp78 && ((typeof $cmp77 == 'number')||(typeof $cmp77 == 'string')||(typeof $cmp77 == 'boolean'))?
					($cmp77 == $cmp78 ? 0 : ($cmp77 < $cmp78 ? -1 : 1)):
					$m['cmp']($cmp77, $cmp78))))|1) == 1)) === null || $bool333 === false || $bool333 === 0 || $bool333 === '' ?
					false :
					(typeof $bool333=='object'?
						(typeof $bool333.__nonzero__=='function'?
							$bool333.__nonzero__() :
							(typeof $bool333.__len__=='function'?
								($bool333.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				w_first = index;
			}
			else {
				w_first = $p['__getslice'](name, 0, i);
			}
			self.parser_list_w = $p['list']([]);
			self['_resolve_lookups'](null, name, i, end);
			return self['space']['newtuple']($p['list']([w_first, self['space']['iter'](self['space']['newlist'](self['parser_list_w']))]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['formatter_field_name_split'] = $method;
		$method = $pyjs__bind_method2('_convert', function(w_obj, conversion) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_obj = arguments[1];
				conversion = arguments[2];
			}
			var $eq112,$eq113,$eq111,$eq114,conv,$88,$87,$bool334,$bool335;
			conv = (typeof ($87=conversion).__array != 'undefined'?
				((typeof $87.__array[$88=0]) != 'undefined'?$87.__array[$88]:
					$87.__getitem__($88)):
					$87.__getitem__(0));
			if ((($bool334=(($eq111=conv)===($eq112='r')&&$eq111===null?true:
				($eq111===null?false:($eq112===null?false:
					((typeof $eq111=='object'||typeof $eq111=='function')&&typeof $eq111.__cmp__=='function'?$eq111.__cmp__($eq112) === 0:
						((typeof $eq112=='object'||typeof $eq112=='function')&&typeof $eq112.__cmp__=='function'?$eq112.__cmp__($eq111) === 0:
							$eq111==$eq112)))))) === null || $bool334 === false || $bool334 === 0 || $bool334 === '' ?
					false :
					(typeof $bool334=='object'?
						(typeof $bool334.__nonzero__=='function'?
							$bool334.__nonzero__() :
							(typeof $bool334.__len__=='function'?
								($bool334.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['repr'](w_obj);
			}
			else if ((($bool335=(($eq113=conv)===($eq114='s')&&$eq113===null?true:
				($eq113===null?false:($eq114===null?false:
					((typeof $eq113=='object'||typeof $eq113=='function')&&typeof $eq113.__cmp__=='function'?$eq113.__cmp__($eq114) === 0:
						((typeof $eq114=='object'||typeof $eq114=='function')&&typeof $eq114.__cmp__=='function'?$eq114.__cmp__($eq113) === 0:
							$eq113==$eq114)))))) === null || $bool335 === false || $bool335 === 0 || $bool335 === '' ?
					false :
					(typeof $bool335=='object'?
						(typeof $bool335.__nonzero__=='function'?
							$bool335.__nonzero__() :
							(typeof $bool335.__len__=='function'?
								($bool335.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['str'](w_obj);
			}
			else {
				throw ($m['ValueError']('invalid conversion'));
			}
			return null;
		}
	, 1, [null,null,['self'],['w_obj'],['conversion']]);
		$cls_definition['_convert'] = $method;
		$method = $pyjs__bind_method2('_render_field', function(start, end, recursive, level) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				recursive = arguments[3];
				level = arguments[4];
			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,$add112,$cmp80,$add111,conversion,spec,w_rendered,$sub31,$sub32,$attr189,$cmp79,w_obj,$bool338,$bool339,w_entry,$bool336,$bool337,startm1,$eq116,name,$eq115,$attr200,spec_start;
			var $tupleassign9 = $p['__ass_unpack'](self['_parse_field'](start, end), 3, null);
			name = $tupleassign9[0];
			conversion = $tupleassign9[1];
			spec_start = $tupleassign9[2];
			spec = $p['__getslice'](self['template'], spec_start, end);
			if ((($bool336=(self['parser_list_w'] !== null)) === null || $bool336 === false || $bool336 === 0 || $bool336 === '' ?
					false :
					(typeof $bool336=='object'?
						(typeof $bool336.__nonzero__=='function'?
							$bool336.__nonzero__() :
							(typeof $bool336.__len__=='function'?
								($bool336.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool337=(($eq115=level)===($eq116=1)&&$eq115===null?true:
					($eq115===null?false:($eq116===null?false:
						((typeof $eq115=='object'||typeof $eq115=='function')&&typeof $eq115.__cmp__=='function'?$eq115.__cmp__($eq116) === 0:
							((typeof $eq116=='object'||typeof $eq116=='function')&&typeof $eq116.__cmp__=='function'?$eq116.__cmp__($eq115) === 0:
								$eq115==$eq116)))))) === null || $bool337 === false || $bool337 === 0 || $bool337 === '' ?
						false :
						(typeof $bool337=='object'?
							(typeof $bool337.__nonzero__=='function'?
								$bool337.__nonzero__() :
								(typeof $bool337.__len__=='function'?
									($bool337.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					startm1 = (typeof ($sub31=start)==typeof ($sub32=1) && (typeof $sub31=='number'||typeof $sub31=='string')?
						$sub31-$sub32:
						$m['op_sub']($sub31,$sub32));
					if (!( ((((($cmp79=startm1)===($cmp80=self['last_end'])?0:
						(typeof $cmp79==typeof $cmp80 && ((typeof $cmp79 == 'number')||(typeof $cmp79 == 'string')||(typeof $cmp79 == 'boolean'))?
							($cmp79 == $cmp80 ? 0 : ($cmp79 < $cmp80 ? -1 : 1)):
							$m['cmp']($cmp79, $cmp80))))|1) == 1) )) {
					   throw $m['AssertionError']();
					 }
					w_entry = self['space']['newtuple']($p['list']([$p['__getslice'](self['template'], self['last_end'], startm1), name, spec, conversion]));
					self['parser_list_w']['append'](w_entry);
					self.last_end = (typeof ($add111=end)==typeof ($add112=1) && (typeof $add111=='number'||typeof $add111=='string')?
						$add111+$add112:
						$m['op_add']($add111,$add112));
				}
				return self['empty'];
			}
			w_obj = self['_get_argument'](name);
			if ((($bool338=(conversion !== null)) === null || $bool338 === false || $bool338 === 0 || $bool338 === '' ?
					false :
					(typeof $bool338=='object'?
						(typeof $bool338.__nonzero__=='function'?
							$bool338.__nonzero__() :
							(typeof $bool338.__len__=='function'?
								($bool338.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				w_obj = self['_convert'](w_obj, conversion);
			}
			if ((($bool339=recursive) === null || $bool339 === false || $bool339 === 0 || $bool339 === '' ?
					false :
					(typeof $bool339=='object'?
						(typeof $bool339.__nonzero__=='function'?
							$bool339.__nonzero__() :
							(typeof $bool339.__len__=='function'?
								($bool339.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				spec = self['_build_string'](spec_start, end, level);
			}
			w_rendered = self['space']['format'](w_obj, spec);
			return $m['str'](w_rendered);
		}
	, 1, [null,null,['self'],['start'],['end'],['recursive'],['level']]);
		$cls_definition['_render_field'] = $method;
		$method = $pyjs__bind_method2('formatter_parser', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp82,$cmp81,$bool340,$attr202,$attr209,w_lastentry,$attr205,$attr204,$attr207,$attr206,$attr201,$attr203,$attr208,$attr218,$attr212,$attr213,$attr210,$attr211,$attr216,$attr217,$attr214,$attr215;
			self.parser_list_w = $p['list']([]);
			self.last_end = 0;
			self['_build_string'](0, $m['len'](self['template']), 2);
			if ((($bool340=((($cmp81=self['last_end'])===($cmp82=$m['len'](self['template']))?0:
				(typeof $cmp81==typeof $cmp82 && ((typeof $cmp81 == 'number')||(typeof $cmp81 == 'string')||(typeof $cmp81 == 'boolean'))?
					($cmp81 == $cmp82 ? 0 : ($cmp81 < $cmp82 ? -1 : 1)):
					$m['cmp']($cmp81, $cmp82))) == -1)) === null || $bool340 === false || $bool340 === 0 || $bool340 === '' ?
					false :
					(typeof $bool340=='object'?
						(typeof $bool340.__nonzero__=='function'?
							$bool340.__nonzero__() :
							(typeof $bool340.__len__=='function'?
								($bool340.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				w_lastentry = self['space']['newtuple']($p['list']([$p['__getslice'](self['template'], self['last_end'], null), self['space']['w_None'], self['space']['w_None'], self['space']['w_None']]));
				self['parser_list_w']['append'](w_lastentry);
			}
			return self['space']['iter'](self['space']['newlist'](self['parser_list_w']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['formatter_parser'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('TemplateFormatter', $bases, $cls_definition);
	})();
	$m['NumberSpec'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'b684dce6b3f167ba657792e1f80fad6b';
		var $bases = new Array($m['object']);
		return $pyjs_type('NumberSpec', $bases, $cls_definition);
	})();
	$m['BaseFormatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'b7202a2c19114ddc062fe03b535f05ea';
		$method = $pyjs__bind_method2('format_int_or_long', function(w_num, kind) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				kind = arguments[2];
			}

			throw ($m['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['w_num'],['kind']]);
		$cls_definition['format_int_or_long'] = $method;
		$method = $pyjs__bind_method2('format_float', function(w_num) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_num = arguments[1];
			}

			throw ($m['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['w_num']]);
		$cls_definition['format_float'] = $method;
		$method = $pyjs__bind_method2('format_complex', function(w_num) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_num = arguments[1];
			}

			throw ($m['NotImplementedError']);
			return null;
		}
	, 1, [null,null,['self'],['w_num']]);
		$cls_definition['format_complex'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('BaseFormatter', $bases, $cls_definition);
	})();
	$m['INT_KIND'] = 1;
	$m['LONG_KIND'] = 2;
	$m['NO_LOCALE'] = 1;
	$m['DEFAULT_LOCALE'] = 2;
	$m['CURRENT_LOCALE'] = 3;
	$m['Formatter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '8eb903c45cfb74f41dc7640c59a82092';
		$cls_definition['_grouped_digits'] = null;
		$method = $pyjs__bind_method2('__init__', function(space, spec) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				space = arguments[1];
				spec = arguments[2];
			}

			self.space = space;
			self.empty = '';
			self.spec = spec;
			return null;
		}
	, 1, [null,null,['self'],['space'],['spec']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_is_alignment', function(c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				c = arguments[1];
			}
			var $eq119,$eq117,$bool343,$eq122,$eq120,$eq124,$eq123,$eq121,$bool342,$or24,$or25,$bool341,$eq118,$or22,$or23;
			return ((($bool341=$or22=(($eq117=c)===($eq118='<')&&$eq117===null?true:
				($eq117===null?false:($eq118===null?false:
					((typeof $eq117=='object'||typeof $eq117=='function')&&typeof $eq117.__cmp__=='function'?$eq117.__cmp__($eq118) === 0:
						((typeof $eq118=='object'||typeof $eq118=='function')&&typeof $eq118.__cmp__=='function'?$eq118.__cmp__($eq117) === 0:
							$eq117==$eq118)))))) === null || $bool341 === false || $bool341 === 0 || $bool341 === '' ?
				false :
				(typeof $bool341=='object'?
					(typeof $bool341.__nonzero__=='function'?
						$bool341.__nonzero__() :
						(typeof $bool341.__len__=='function'?
							($bool341.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or22:((($bool342=$or23=(($eq119=c)===($eq120='>')&&$eq119===null?true:
				($eq119===null?false:($eq120===null?false:
					((typeof $eq119=='object'||typeof $eq119=='function')&&typeof $eq119.__cmp__=='function'?$eq119.__cmp__($eq120) === 0:
						((typeof $eq120=='object'||typeof $eq120=='function')&&typeof $eq120.__cmp__=='function'?$eq120.__cmp__($eq119) === 0:
							$eq119==$eq120)))))) === null || $bool342 === false || $bool342 === 0 || $bool342 === '' ?
				false :
				(typeof $bool342=='object'?
					(typeof $bool342.__nonzero__=='function'?
						$bool342.__nonzero__() :
						(typeof $bool342.__len__=='function'?
							($bool342.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or23:((($bool343=$or24=(($eq121=c)===($eq122='=')&&$eq121===null?true:
				($eq121===null?false:($eq122===null?false:
					((typeof $eq121=='object'||typeof $eq121=='function')&&typeof $eq121.__cmp__=='function'?$eq121.__cmp__($eq122) === 0:
						((typeof $eq122=='object'||typeof $eq122=='function')&&typeof $eq122.__cmp__=='function'?$eq122.__cmp__($eq121) === 0:
							$eq121==$eq122)))))) === null || $bool343 === false || $bool343 === 0 || $bool343 === '' ?
				false :
				(typeof $bool343=='object'?
					(typeof $bool343.__nonzero__=='function'?
						$bool343.__nonzero__() :
						(typeof $bool343.__len__=='function'?
							($bool343.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or24:(($eq123=c)===($eq124='^')&&$eq123===null?true:
				($eq123===null?false:($eq124===null?false:
					((typeof $eq123=='object'||typeof $eq123=='function')&&typeof $eq123.__cmp__=='function'?$eq123.__cmp__($eq124) === 0:
						((typeof $eq124=='object'||typeof $eq124=='function')&&typeof $eq124.__cmp__=='function'?$eq124.__cmp__($eq123) === 0:
							$eq123==$eq124))))))));
		}
	, 1, [null,null,['self'],['c']]);
		$cls_definition['_is_alignment'] = $method;
		$method = $pyjs__bind_method2('_is_sign', function(c) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				c = arguments[1];
			}
			var $eq128,$eq129,$eq130,$eq127,$eq126,$eq125,$bool344,$or28,$bool345,$or26,$or27;
			return ((($bool344=$or26=(($eq125=c)===($eq126=' ')&&$eq125===null?true:
				($eq125===null?false:($eq126===null?false:
					((typeof $eq125=='object'||typeof $eq125=='function')&&typeof $eq125.__cmp__=='function'?$eq125.__cmp__($eq126) === 0:
						((typeof $eq126=='object'||typeof $eq126=='function')&&typeof $eq126.__cmp__=='function'?$eq126.__cmp__($eq125) === 0:
							$eq125==$eq126)))))) === null || $bool344 === false || $bool344 === 0 || $bool344 === '' ?
				false :
				(typeof $bool344=='object'?
					(typeof $bool344.__nonzero__=='function'?
						$bool344.__nonzero__() :
						(typeof $bool344.__len__=='function'?
							($bool344.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or26:((($bool345=$or27=(($eq127=c)===($eq128='+')&&$eq127===null?true:
				($eq127===null?false:($eq128===null?false:
					((typeof $eq127=='object'||typeof $eq127=='function')&&typeof $eq127.__cmp__=='function'?$eq127.__cmp__($eq128) === 0:
						((typeof $eq128=='object'||typeof $eq128=='function')&&typeof $eq128.__cmp__=='function'?$eq128.__cmp__($eq127) === 0:
							$eq127==$eq128)))))) === null || $bool345 === false || $bool345 === 0 || $bool345 === '' ?
				false :
				(typeof $bool345=='object'?
					(typeof $bool345.__nonzero__=='function'?
						$bool345.__nonzero__() :
						(typeof $bool345.__len__=='function'?
							($bool345.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or27:(($eq129=c)===($eq130='-')&&$eq129===null?true:
				($eq129===null?false:($eq130===null?false:
					((typeof $eq129=='object'||typeof $eq129=='function')&&typeof $eq129.__cmp__=='function'?$eq129.__cmp__($eq130) === 0:
						((typeof $eq130=='object'||typeof $eq130=='function')&&typeof $eq130.__cmp__=='function'?$eq130.__cmp__($eq129) === 0:
							$eq129==$eq130)))))));
		}
	, 1, [null,null,['self'],['c']]);
		$cls_definition['_is_sign'] = $method;
		$method = $pyjs__bind_method2('_parse_spec', function(default_type, default_align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				default_type = arguments[1];
				default_align = arguments[2];
			}
			var $add118,$add119,$add116,$add117,$add114,$add115,$add113,$eq166,$eq165,$eq164,$eq163,$eq162,$eq161,$eq160,tp,$or29,spec,$sub33,$sub35,$sub34,$sub37,$sub36,$sub39,$sub38,presentation_type,$and38,$and39,$and34,$and35,$and36,$and37,$and32,$and33,$attr219,$attr227,$attr226,$attr225,$attr224,$attr223,$sub43,$attr222,$107,$eq153,$attr220,$cmp94,$89,$eq159,$and41,$attr228,$bool358,$bool359,$eq138,$eq139,$eq134,$bool351,$bool352,$bool353,$bool354,$bool355,$bool356,$eq133,length,$and40,$and46,$98,$99,$94,$95,$96,$97,$90,$91,$92,$93,$115,$add130,$add131,$bool349,$bool348,$110,$add132,$and45,$and44,$111,$bool347,$bool346,$and43,$and42,the_type,$add127,$add126,$add125,$add124,$add123,$add122,$add121,$add120,$add129,$add128,start_i,$bool376,$bool377,$bool374,$bool375,$bool372,$bool373,$bool370,$bool371,$bool350,$eq158,$eq135,$eq156,$eq157,$eq154,$eq155,$eq152,$eq136,$eq150,$eq151,$116,$114,$eq137,$112,$113,$cmp88,$cmp89,$cmp86,$cmp87,$cmp84,$cmp85,$cmp83,$eq131,$eq132,$sub40,$sub41,$sub42,$bool357,$sub44,$sub45,$sub46,$bool361,$bool360,$bool363,$bool362,$bool365,$bool364,$bool367,$bool366,$bool369,$bool368,got_align,$eq149,$eq148,$eq145,$eq144,$eq147,$eq146,$eq141,$eq140,$eq143,$eq142,$101,$100,$103,$102,$105,$104,$attr221,$106,$109,$108,$cmp91,$cmp90,$cmp93,$cmp92,i,$or33,$or32,$or31,$or30,$or37,$or36,$or35,$or34;
			self._fill_char = (typeof ($89=self['_lit']('\x00')).__array != 'undefined'?
				((typeof $89.__array[$90=0]) != 'undefined'?$89.__array[$90]:
					$89.__getitem__($90)):
					$89.__getitem__(0));
			self._align = default_align;
			self._alternate = false;
			self._sign = '\x00';
			self._thousands_sep = false;
			self._precision = (typeof ($usub18=1)=='number'?
				-$usub18:
				$m['op_usub']($usub18));
			the_type = default_type;
			spec = self['spec'];
			if ((($bool347=!(($bool346=spec) === null || $bool346 === false || $bool346 === 0 || $bool346 === '' ?
				false :
				(typeof $bool346=='object'?
					(typeof $bool346.__nonzero__=='function'?
						$bool346.__nonzero__() :
						(typeof $bool346.__len__=='function'?
							($bool346.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool347 === false || $bool347 === 0 || $bool347 === '' ?
					false :
					(typeof $bool347=='object'?
						(typeof $bool347.__nonzero__=='function'?
							$bool347.__nonzero__() :
							(typeof $bool347.__len__=='function'?
								($bool347.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
			length = $m['len'](spec);
			i = 0;
			got_align = true;
			if ((($bool349=((($bool348=$and32=((((($cmp83=(typeof ($sub33=length)==typeof ($sub34=i) && (typeof $sub33=='number'||typeof $sub33=='string')?
				$sub33-$sub34:
				$m['op_sub']($sub33,$sub34)))===($cmp84=2)?0:
				(typeof $cmp83==typeof $cmp84 && ((typeof $cmp83 == 'number')||(typeof $cmp83 == 'string')||(typeof $cmp83 == 'boolean'))?
					($cmp83 == $cmp84 ? 0 : ($cmp83 < $cmp84 ? -1 : 1)):
					$m['cmp']($cmp83, $cmp84))))|1) == 1)) === null || $bool348 === false || $bool348 === 0 || $bool348 === '' ?
				false :
				(typeof $bool348=='object'?
					(typeof $bool348.__nonzero__=='function'?
						$bool348.__nonzero__() :
						(typeof $bool348.__len__=='function'?
							($bool348.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?self['_is_alignment']((typeof ($91=spec).__array != 'undefined'?
				((typeof $91.__array[$92=(typeof ($add113=i)==typeof ($add114=1) && (typeof $add113=='number'||typeof $add113=='string')?
				$add113+$add114:
				$m['op_add']($add113,$add114))]) != 'undefined'?$91.__array[$92]:
					$91.__getitem__($92)):
					$91.__getitem__((typeof ($add113=i)==typeof ($add114=1) && (typeof $add113=='number'||typeof $add113=='string')?
				$add113+$add114:
				$m['op_add']($add113,$add114))))):$and32)) === null || $bool349 === false || $bool349 === 0 || $bool349 === '' ?
					false :
					(typeof $bool349=='object'?
						(typeof $bool349.__nonzero__=='function'?
							$bool349.__nonzero__() :
							(typeof $bool349.__len__=='function'?
								($bool349.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self._align = (typeof ($93=spec).__array != 'undefined'?
					((typeof $93.__array[$94=(typeof ($add115=i)==typeof ($add116=1) && (typeof $add115=='number'||typeof $add115=='string')?
					$add115+$add116:
					$m['op_add']($add115,$add116))]) != 'undefined'?$93.__array[$94]:
						$93.__getitem__($94)):
						$93.__getitem__((typeof ($add115=i)==typeof ($add116=1) && (typeof $add115=='number'||typeof $add115=='string')?
					$add115+$add116:
					$m['op_add']($add115,$add116))));
				self._fill_char = (typeof ($95=spec).__array != 'undefined'?
					((typeof $95.__array[$96=i]) != 'undefined'?$95.__array[$96]:
						$95.__getitem__($96)):
						$95.__getitem__(i));
				i = (typeof ($add117=i)==typeof ($add118=2) && (typeof $add117=='number'||typeof $add117=='string')?
					$add117+$add118:
					$m['op_add']($add117,$add118));
			}
			else if ((($bool351=((($bool350=$and34=((((($cmp85=(typeof ($sub35=length)==typeof ($sub36=i) && (typeof $sub35=='number'||typeof $sub35=='string')?
				$sub35-$sub36:
				$m['op_sub']($sub35,$sub36)))===($cmp86=1)?0:
				(typeof $cmp85==typeof $cmp86 && ((typeof $cmp85 == 'number')||(typeof $cmp85 == 'string')||(typeof $cmp85 == 'boolean'))?
					($cmp85 == $cmp86 ? 0 : ($cmp85 < $cmp86 ? -1 : 1)):
					$m['cmp']($cmp85, $cmp86))))|1) == 1)) === null || $bool350 === false || $bool350 === 0 || $bool350 === '' ?
				false :
				(typeof $bool350=='object'?
					(typeof $bool350.__nonzero__=='function'?
						$bool350.__nonzero__() :
						(typeof $bool350.__len__=='function'?
							($bool350.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?self['_is_alignment']((typeof ($97=spec).__array != 'undefined'?
				((typeof $97.__array[$98=i]) != 'undefined'?$97.__array[$98]:
					$97.__getitem__($98)):
					$97.__getitem__(i))):$and34)) === null || $bool351 === false || $bool351 === 0 || $bool351 === '' ?
					false :
					(typeof $bool351=='object'?
						(typeof $bool351.__nonzero__=='function'?
							$bool351.__nonzero__() :
							(typeof $bool351.__len__=='function'?
								($bool351.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self._align = (typeof ($99=spec).__array != 'undefined'?
					((typeof $99.__array[$100=i]) != 'undefined'?$99.__array[$100]:
						$99.__getitem__($100)):
						$99.__getitem__(i));
				i = (typeof ($add119=i)==typeof ($add120=1) && (typeof $add119=='number'||typeof $add119=='string')?
					$add119+$add120:
					$m['op_add']($add119,$add120));
			}
			else {
				got_align = false;
			}
			if ((($bool353=((($bool352=$and36=((((($cmp87=(typeof ($sub37=length)==typeof ($sub38=i) && (typeof $sub37=='number'||typeof $sub37=='string')?
				$sub37-$sub38:
				$m['op_sub']($sub37,$sub38)))===($cmp88=1)?0:
				(typeof $cmp87==typeof $cmp88 && ((typeof $cmp87 == 'number')||(typeof $cmp87 == 'string')||(typeof $cmp87 == 'boolean'))?
					($cmp87 == $cmp88 ? 0 : ($cmp87 < $cmp88 ? -1 : 1)):
					$m['cmp']($cmp87, $cmp88))))|1) == 1)) === null || $bool352 === false || $bool352 === 0 || $bool352 === '' ?
				false :
				(typeof $bool352=='object'?
					(typeof $bool352.__nonzero__=='function'?
						$bool352.__nonzero__() :
						(typeof $bool352.__len__=='function'?
							($bool352.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?self['_is_sign']((typeof ($101=spec).__array != 'undefined'?
				((typeof $101.__array[$102=i]) != 'undefined'?$101.__array[$102]:
					$101.__getitem__($102)):
					$101.__getitem__(i))):$and36)) === null || $bool353 === false || $bool353 === 0 || $bool353 === '' ?
					false :
					(typeof $bool353=='object'?
						(typeof $bool353.__nonzero__=='function'?
							$bool353.__nonzero__() :
							(typeof $bool353.__len__=='function'?
								($bool353.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self._sign = (typeof ($103=spec).__array != 'undefined'?
					((typeof $103.__array[$104=i]) != 'undefined'?$103.__array[$104]:
						$103.__getitem__($104)):
						$103.__getitem__(i));
				i = (typeof ($add121=i)==typeof ($add122=1) && (typeof $add121=='number'||typeof $add121=='string')?
					$add121+$add122:
					$m['op_add']($add121,$add122));
			}
			if ((($bool355=((($bool354=$and38=((((($cmp89=(typeof ($sub39=length)==typeof ($sub40=i) && (typeof $sub39=='number'||typeof $sub39=='string')?
				$sub39-$sub40:
				$m['op_sub']($sub39,$sub40)))===($cmp90=1)?0:
				(typeof $cmp89==typeof $cmp90 && ((typeof $cmp89 == 'number')||(typeof $cmp89 == 'string')||(typeof $cmp89 == 'boolean'))?
					($cmp89 == $cmp90 ? 0 : ($cmp89 < $cmp90 ? -1 : 1)):
					$m['cmp']($cmp89, $cmp90))))|1) == 1)) === null || $bool354 === false || $bool354 === 0 || $bool354 === '' ?
				false :
				(typeof $bool354=='object'?
					(typeof $bool354.__nonzero__=='function'?
						$bool354.__nonzero__() :
						(typeof $bool354.__len__=='function'?
							($bool354.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq131=(typeof ($105=spec).__array != 'undefined'?
				((typeof $105.__array[$106=i]) != 'undefined'?$105.__array[$106]:
					$105.__getitem__($106)):
					$105.__getitem__(i)))===($eq132='#')&&$eq131===null?true:
				($eq131===null?false:($eq132===null?false:
					((typeof $eq131=='object'||typeof $eq131=='function')&&typeof $eq131.__cmp__=='function'?$eq131.__cmp__($eq132) === 0:
						((typeof $eq132=='object'||typeof $eq132=='function')&&typeof $eq132.__cmp__=='function'?$eq132.__cmp__($eq131) === 0:
							$eq131==$eq132))))):$and38)) === null || $bool355 === false || $bool355 === 0 || $bool355 === '' ?
					false :
					(typeof $bool355=='object'?
						(typeof $bool355.__nonzero__=='function'?
							$bool355.__nonzero__() :
							(typeof $bool355.__len__=='function'?
								($bool355.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self._alternate = true;
				i = (typeof ($add123=i)==typeof ($add124=1) && (typeof $add123=='number'||typeof $add123=='string')?
					$add123+$add124:
					$m['op_add']($add123,$add124));
			}
			if ((($bool358=((($bool356=$and40=(($eq133=self['_fill_char'])===($eq134='\x00')&&$eq133===null?true:
				($eq133===null?false:($eq134===null?false:
					((typeof $eq133=='object'||typeof $eq133=='function')&&typeof $eq133.__cmp__=='function'?$eq133.__cmp__($eq134) === 0:
						((typeof $eq134=='object'||typeof $eq134=='function')&&typeof $eq134.__cmp__=='function'?$eq134.__cmp__($eq133) === 0:
							$eq133==$eq134)))))) === null || $bool356 === false || $bool356 === 0 || $bool356 === '' ?
				false :
				(typeof $bool356=='object'?
					(typeof $bool356.__nonzero__=='function'?
						$bool356.__nonzero__() :
						(typeof $bool356.__len__=='function'?
							($bool356.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool357=$and41=((((($cmp91=(typeof ($sub41=length)==typeof ($sub42=i) && (typeof $sub41=='number'||typeof $sub41=='string')?
				$sub41-$sub42:
				$m['op_sub']($sub41,$sub42)))===($cmp92=1)?0:
				(typeof $cmp91==typeof $cmp92 && ((typeof $cmp91 == 'number')||(typeof $cmp91 == 'string')||(typeof $cmp91 == 'boolean'))?
					($cmp91 == $cmp92 ? 0 : ($cmp91 < $cmp92 ? -1 : 1)):
					$m['cmp']($cmp91, $cmp92))))|1) == 1)) === null || $bool357 === false || $bool357 === 0 || $bool357 === '' ?
				false :
				(typeof $bool357=='object'?
					(typeof $bool357.__nonzero__=='function'?
						$bool357.__nonzero__() :
						(typeof $bool357.__len__=='function'?
							($bool357.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq135=(typeof ($107=spec).__array != 'undefined'?
				((typeof $107.__array[$108=i]) != 'undefined'?$107.__array[$108]:
					$107.__getitem__($108)):
					$107.__getitem__(i)))===($eq136='0')&&$eq135===null?true:
				($eq135===null?false:($eq136===null?false:
					((typeof $eq135=='object'||typeof $eq135=='function')&&typeof $eq135.__cmp__=='function'?$eq135.__cmp__($eq136) === 0:
						((typeof $eq136=='object'||typeof $eq136=='function')&&typeof $eq136.__cmp__=='function'?$eq136.__cmp__($eq135) === 0:
							$eq135==$eq136))))):$and41):$and40)) === null || $bool358 === false || $bool358 === 0 || $bool358 === '' ?
					false :
					(typeof $bool358=='object'?
						(typeof $bool358.__nonzero__=='function'?
							$bool358.__nonzero__() :
							(typeof $bool358.__len__=='function'?
								($bool358.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self._fill_char = (typeof ($109=self['_lit']('0')).__array != 'undefined'?
					((typeof $109.__array[$110=0]) != 'undefined'?$109.__array[$110]:
						$109.__getitem__($110)):
						$109.__getitem__(0));
				if ((($bool360=!(($bool359=got_align) === null || $bool359 === false || $bool359 === 0 || $bool359 === '' ?
					false :
					(typeof $bool359=='object'?
						(typeof $bool359.__nonzero__=='function'?
							$bool359.__nonzero__() :
							(typeof $bool359.__len__=='function'?
								($bool359.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool360 === false || $bool360 === 0 || $bool360 === '' ?
						false :
						(typeof $bool360=='object'?
							(typeof $bool360.__nonzero__=='function'?
								$bool360.__nonzero__() :
								(typeof $bool360.__len__=='function'?
									($bool360.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self._align = '=';
				}
				i = (typeof ($add125=i)==typeof ($add126=1) && (typeof $add125=='number'||typeof $add125=='string')?
					$add125+$add126:
					$m['op_add']($add125,$add126));
			}
			start_i = i;
			var $tupleassign10 = $p['__ass_unpack']($m['_parse_int'](spec, i, length), 2, null);
			self._width = $tupleassign10[0];
			i = $tupleassign10[1];
			if ((($bool362=((($bool361=$and43=!(($eq137=length)===($eq138=i)&&$eq137===null?true:
				($eq137===null?false:($eq138===null?false:
					((typeof $eq137=='object'||typeof $eq137=='function')&&typeof $eq137.__cmp__=='function'?$eq137.__cmp__($eq138) === 0:
						((typeof $eq138=='object'||typeof $eq138=='function')&&typeof $eq138.__cmp__=='function'?$eq138.__cmp__($eq137) === 0:
							$eq137==$eq138)))))) === null || $bool361 === false || $bool361 === 0 || $bool361 === '' ?
				false :
				(typeof $bool361=='object'?
					(typeof $bool361.__nonzero__=='function'?
						$bool361.__nonzero__() :
						(typeof $bool361.__len__=='function'?
							($bool361.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq139=(typeof ($111=spec).__array != 'undefined'?
				((typeof $111.__array[$112=i]) != 'undefined'?$111.__array[$112]:
					$111.__getitem__($112)):
					$111.__getitem__(i)))===($eq140=',')&&$eq139===null?true:
				($eq139===null?false:($eq140===null?false:
					((typeof $eq139=='object'||typeof $eq139=='function')&&typeof $eq139.__cmp__=='function'?$eq139.__cmp__($eq140) === 0:
						((typeof $eq140=='object'||typeof $eq140=='function')&&typeof $eq140.__cmp__=='function'?$eq140.__cmp__($eq139) === 0:
							$eq139==$eq140))))):$and43)) === null || $bool362 === false || $bool362 === 0 || $bool362 === '' ?
					false :
					(typeof $bool362=='object'?
						(typeof $bool362.__nonzero__=='function'?
							$bool362.__nonzero__() :
							(typeof $bool362.__len__=='function'?
								($bool362.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self._thousands_sep = true;
				i = (typeof ($add127=i)==typeof ($add128=1) && (typeof $add127=='number'||typeof $add127=='string')?
					$add127+$add128:
					$m['op_add']($add127,$add128));
			}
			if ((($bool364=((($bool363=$and45=!(($eq141=length)===($eq142=i)&&$eq141===null?true:
				($eq141===null?false:($eq142===null?false:
					((typeof $eq141=='object'||typeof $eq141=='function')&&typeof $eq141.__cmp__=='function'?$eq141.__cmp__($eq142) === 0:
						((typeof $eq142=='object'||typeof $eq142=='function')&&typeof $eq142.__cmp__=='function'?$eq142.__cmp__($eq141) === 0:
							$eq141==$eq142)))))) === null || $bool363 === false || $bool363 === 0 || $bool363 === '' ?
				false :
				(typeof $bool363=='object'?
					(typeof $bool363.__nonzero__=='function'?
						$bool363.__nonzero__() :
						(typeof $bool363.__len__=='function'?
							($bool363.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq143=(typeof ($113=spec).__array != 'undefined'?
				((typeof $113.__array[$114=i]) != 'undefined'?$113.__array[$114]:
					$113.__getitem__($114)):
					$113.__getitem__(i)))===($eq144='.')&&$eq143===null?true:
				($eq143===null?false:($eq144===null?false:
					((typeof $eq143=='object'||typeof $eq143=='function')&&typeof $eq143.__cmp__=='function'?$eq143.__cmp__($eq144) === 0:
						((typeof $eq144=='object'||typeof $eq144=='function')&&typeof $eq144.__cmp__=='function'?$eq144.__cmp__($eq143) === 0:
							$eq143==$eq144))))):$and45)) === null || $bool364 === false || $bool364 === 0 || $bool364 === '' ?
					false :
					(typeof $bool364=='object'?
						(typeof $bool364.__nonzero__=='function'?
							$bool364.__nonzero__() :
							(typeof $bool364.__len__=='function'?
								($bool364.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				i = (typeof ($add129=i)==typeof ($add130=1) && (typeof $add129=='number'||typeof $add129=='string')?
					$add129+$add130:
					$m['op_add']($add129,$add130));
				var $tupleassign11 = $p['__ass_unpack']($m['_parse_int'](spec, i, length), 2, null);
				self._precision = $tupleassign11[0];
				i = $tupleassign11[1];
				if ((($bool365=(($eq145=self['_precision'])===($eq146=(typeof ($usub19=1)=='number'?
					-$usub19:
					$m['op_usub']($usub19)))&&$eq145===null?true:
					($eq145===null?false:($eq146===null?false:
						((typeof $eq145=='object'||typeof $eq145=='function')&&typeof $eq145.__cmp__=='function'?$eq145.__cmp__($eq146) === 0:
							((typeof $eq146=='object'||typeof $eq146=='function')&&typeof $eq146.__cmp__=='function'?$eq146.__cmp__($eq145) === 0:
								$eq145==$eq146)))))) === null || $bool365 === false || $bool365 === 0 || $bool365 === '' ?
						false :
						(typeof $bool365=='object'?
							(typeof $bool365.__nonzero__=='function'?
								$bool365.__nonzero__() :
								(typeof $bool365.__len__=='function'?
									($bool365.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($m['ValueError']('no precision given'));
				}
			}
			if ((($bool366=((($cmp93=(typeof ($sub43=length)==typeof ($sub44=i) && (typeof $sub43=='number'||typeof $sub43=='string')?
				$sub43-$sub44:
				$m['op_sub']($sub43,$sub44)))===($cmp94=1)?0:
				(typeof $cmp93==typeof $cmp94 && ((typeof $cmp93 == 'number')||(typeof $cmp93 == 'string')||(typeof $cmp93 == 'boolean'))?
					($cmp93 == $cmp94 ? 0 : ($cmp93 < $cmp94 ? -1 : 1)):
					$m['cmp']($cmp93, $cmp94))) == 1)) === null || $bool366 === false || $bool366 === 0 || $bool366 === '' ?
					false :
					(typeof $bool366=='object'?
						(typeof $bool366.__nonzero__=='function'?
							$bool366.__nonzero__() :
							(typeof $bool366.__len__=='function'?
								($bool366.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($m['ValueError']('invalid format spec'));
			}
			if ((($bool367=(($eq147=(typeof ($sub45=length)==typeof ($sub46=i) && (typeof $sub45=='number'||typeof $sub45=='string')?
				$sub45-$sub46:
				$m['op_sub']($sub45,$sub46)))===($eq148=1)&&$eq147===null?true:
				($eq147===null?false:($eq148===null?false:
					((typeof $eq147=='object'||typeof $eq147=='function')&&typeof $eq147.__cmp__=='function'?$eq147.__cmp__($eq148) === 0:
						((typeof $eq148=='object'||typeof $eq148=='function')&&typeof $eq148.__cmp__=='function'?$eq148.__cmp__($eq147) === 0:
							$eq147==$eq148)))))) === null || $bool367 === false || $bool367 === 0 || $bool367 === '' ?
					false :
					(typeof $bool367=='object'?
						(typeof $bool367.__nonzero__=='function'?
							$bool367.__nonzero__() :
							(typeof $bool367.__len__=='function'?
								($bool367.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				presentation_type = (typeof ($115=spec).__array != 'undefined'?
					((typeof $115.__array[$116=i]) != 'undefined'?$115.__array[$116]:
						$115.__getitem__($116)):
						$115.__getitem__(i));
				the_type = presentation_type;
				i = (typeof ($add131=i)==typeof ($add132=1) && (typeof $add131=='number'||typeof $add131=='string')?
					$add131+$add132:
					$m['op_add']($add131,$add132));
			}
			self._type = the_type;
			if ((($bool368=self['_thousands_sep']) === null || $bool368 === false || $bool368 === 0 || $bool368 === '' ?
					false :
					(typeof $bool368=='object'?
						(typeof $bool368.__nonzero__=='function'?
							$bool368.__nonzero__() :
							(typeof $bool368.__len__=='function'?
								($bool368.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				tp = self['_type'];
				if ((($bool377=((($bool369=$or29=(($eq149=tp)===($eq150='d')&&$eq149===null?true:
					($eq149===null?false:($eq150===null?false:
						((typeof $eq149=='object'||typeof $eq149=='function')&&typeof $eq149.__cmp__=='function'?$eq149.__cmp__($eq150) === 0:
							((typeof $eq150=='object'||typeof $eq150=='function')&&typeof $eq150.__cmp__=='function'?$eq150.__cmp__($eq149) === 0:
								$eq149==$eq150)))))) === null || $bool369 === false || $bool369 === 0 || $bool369 === '' ?
					false :
					(typeof $bool369=='object'?
						(typeof $bool369.__nonzero__=='function'?
							$bool369.__nonzero__() :
							(typeof $bool369.__len__=='function'?
								($bool369.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or29:((($bool370=$or30=(($eq151=tp)===($eq152='e')&&$eq151===null?true:
					($eq151===null?false:($eq152===null?false:
						((typeof $eq151=='object'||typeof $eq151=='function')&&typeof $eq151.__cmp__=='function'?$eq151.__cmp__($eq152) === 0:
							((typeof $eq152=='object'||typeof $eq152=='function')&&typeof $eq152.__cmp__=='function'?$eq152.__cmp__($eq151) === 0:
								$eq151==$eq152)))))) === null || $bool370 === false || $bool370 === 0 || $bool370 === '' ?
					false :
					(typeof $bool370=='object'?
						(typeof $bool370.__nonzero__=='function'?
							$bool370.__nonzero__() :
							(typeof $bool370.__len__=='function'?
								($bool370.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or30:((($bool371=$or31=(($eq153=tp)===($eq154='f')&&$eq153===null?true:
					($eq153===null?false:($eq154===null?false:
						((typeof $eq153=='object'||typeof $eq153=='function')&&typeof $eq153.__cmp__=='function'?$eq153.__cmp__($eq154) === 0:
							((typeof $eq154=='object'||typeof $eq154=='function')&&typeof $eq154.__cmp__=='function'?$eq154.__cmp__($eq153) === 0:
								$eq153==$eq154)))))) === null || $bool371 === false || $bool371 === 0 || $bool371 === '' ?
					false :
					(typeof $bool371=='object'?
						(typeof $bool371.__nonzero__=='function'?
							$bool371.__nonzero__() :
							(typeof $bool371.__len__=='function'?
								($bool371.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or31:((($bool372=$or32=(($eq155=tp)===($eq156='g')&&$eq155===null?true:
					($eq155===null?false:($eq156===null?false:
						((typeof $eq155=='object'||typeof $eq155=='function')&&typeof $eq155.__cmp__=='function'?$eq155.__cmp__($eq156) === 0:
							((typeof $eq156=='object'||typeof $eq156=='function')&&typeof $eq156.__cmp__=='function'?$eq156.__cmp__($eq155) === 0:
								$eq155==$eq156)))))) === null || $bool372 === false || $bool372 === 0 || $bool372 === '' ?
					false :
					(typeof $bool372=='object'?
						(typeof $bool372.__nonzero__=='function'?
							$bool372.__nonzero__() :
							(typeof $bool372.__len__=='function'?
								($bool372.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or32:((($bool373=$or33=(($eq157=tp)===($eq158='E')&&$eq157===null?true:
					($eq157===null?false:($eq158===null?false:
						((typeof $eq157=='object'||typeof $eq157=='function')&&typeof $eq157.__cmp__=='function'?$eq157.__cmp__($eq158) === 0:
							((typeof $eq158=='object'||typeof $eq158=='function')&&typeof $eq158.__cmp__=='function'?$eq158.__cmp__($eq157) === 0:
								$eq157==$eq158)))))) === null || $bool373 === false || $bool373 === 0 || $bool373 === '' ?
					false :
					(typeof $bool373=='object'?
						(typeof $bool373.__nonzero__=='function'?
							$bool373.__nonzero__() :
							(typeof $bool373.__len__=='function'?
								($bool373.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or33:((($bool374=$or34=(($eq159=tp)===($eq160='G')&&$eq159===null?true:
					($eq159===null?false:($eq160===null?false:
						((typeof $eq159=='object'||typeof $eq159=='function')&&typeof $eq159.__cmp__=='function'?$eq159.__cmp__($eq160) === 0:
							((typeof $eq160=='object'||typeof $eq160=='function')&&typeof $eq160.__cmp__=='function'?$eq160.__cmp__($eq159) === 0:
								$eq159==$eq160)))))) === null || $bool374 === false || $bool374 === 0 || $bool374 === '' ?
					false :
					(typeof $bool374=='object'?
						(typeof $bool374.__nonzero__=='function'?
							$bool374.__nonzero__() :
							(typeof $bool374.__len__=='function'?
								($bool374.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or34:((($bool375=$or35=(($eq161=tp)===($eq162='%')&&$eq161===null?true:
					($eq161===null?false:($eq162===null?false:
						((typeof $eq161=='object'||typeof $eq161=='function')&&typeof $eq161.__cmp__=='function'?$eq161.__cmp__($eq162) === 0:
							((typeof $eq162=='object'||typeof $eq162=='function')&&typeof $eq162.__cmp__=='function'?$eq162.__cmp__($eq161) === 0:
								$eq161==$eq162)))))) === null || $bool375 === false || $bool375 === 0 || $bool375 === '' ?
					false :
					(typeof $bool375=='object'?
						(typeof $bool375.__nonzero__=='function'?
							$bool375.__nonzero__() :
							(typeof $bool375.__len__=='function'?
								($bool375.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or35:((($bool376=$or36=(($eq163=tp)===($eq164='F')&&$eq163===null?true:
					($eq163===null?false:($eq164===null?false:
						((typeof $eq163=='object'||typeof $eq163=='function')&&typeof $eq163.__cmp__=='function'?$eq163.__cmp__($eq164) === 0:
							((typeof $eq164=='object'||typeof $eq164=='function')&&typeof $eq164.__cmp__=='function'?$eq164.__cmp__($eq163) === 0:
								$eq163==$eq164)))))) === null || $bool376 === false || $bool376 === 0 || $bool376 === '' ?
					false :
					(typeof $bool376=='object'?
						(typeof $bool376.__nonzero__=='function'?
							$bool376.__nonzero__() :
							(typeof $bool376.__len__=='function'?
								($bool376.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or36:(($eq165=tp)===($eq166='\x00')&&$eq165===null?true:
					($eq165===null?false:($eq166===null?false:
						((typeof $eq165=='object'||typeof $eq165=='function')&&typeof $eq165.__cmp__=='function'?$eq165.__cmp__($eq166) === 0:
							((typeof $eq166=='object'||typeof $eq166=='function')&&typeof $eq166.__cmp__=='function'?$eq166.__cmp__($eq165) === 0:
								$eq165==$eq166)))))))))))))) === null || $bool377 === false || $bool377 === 0 || $bool377 === '' ?
						false :
						(typeof $bool377=='object'?
							(typeof $bool377.__nonzero__=='function'?
								$bool377.__nonzero__() :
								(typeof $bool377.__len__=='function'?
									($bool377.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
				}
				else {
					throw ($m['ValueError']("invalid type with ','"));
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['default_type'],['default_align']]);
		$cls_definition['_parse_spec'] = $method;
		$method = $pyjs__bind_method2('_calc_padding', function(string, length) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				length = arguments[2];
			}
			var $attr234,$attr235,$attr236,right,$attr230,$attr231,$attr232,$attr233,$bool383,$bool382,$bool381,$bool380,$sub48,$sub49,$sub52,total,$sub47,$eq167,$and48,$eq169,$eq168,$sub54,$sub53,$sub51,$sub50,$cmp95,$cmp96,$attr229,$div6,$or39,$div5,$or38,$bool378,$bool379,align,$eq175,$eq170,$eq171,$eq172,$eq173,$eq174,$and47,$eq176,left;
			if ((($bool379=((($bool378=$and47=!(($eq167=self['_width'])===($eq168=(typeof ($usub20=1)=='number'?
				-$usub20:
				$m['op_usub']($usub20)))&&$eq167===null?true:
				($eq167===null?false:($eq168===null?false:
					((typeof $eq167=='object'||typeof $eq167=='function')&&typeof $eq167.__cmp__=='function'?$eq167.__cmp__($eq168) === 0:
						((typeof $eq168=='object'||typeof $eq168=='function')&&typeof $eq168.__cmp__=='function'?$eq168.__cmp__($eq167) === 0:
							$eq167==$eq168)))))) === null || $bool378 === false || $bool378 === 0 || $bool378 === '' ?
				false :
				(typeof $bool378=='object'?
					(typeof $bool378.__nonzero__=='function'?
						$bool378.__nonzero__() :
						(typeof $bool378.__len__=='function'?
							($bool378.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp95=length)===($cmp96=self['_width'])?0:
				(typeof $cmp95==typeof $cmp96 && ((typeof $cmp95 == 'number')||(typeof $cmp95 == 'string')||(typeof $cmp95 == 'boolean'))?
					($cmp95 == $cmp96 ? 0 : ($cmp95 < $cmp96 ? -1 : 1)):
					$m['cmp']($cmp95, $cmp96))) == -1):$and47)) === null || $bool379 === false || $bool379 === 0 || $bool379 === '' ?
					false :
					(typeof $bool379=='object'?
						(typeof $bool379.__nonzero__=='function'?
							$bool379.__nonzero__() :
							(typeof $bool379.__len__=='function'?
								($bool379.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				total = self['_width'];
			}
			else {
				total = length;
			}
			align = self['_align'];
			if ((($bool380=(($eq169=align)===($eq170='>')&&$eq169===null?true:
				($eq169===null?false:($eq170===null?false:
					((typeof $eq169=='object'||typeof $eq169=='function')&&typeof $eq169.__cmp__=='function'?$eq169.__cmp__($eq170) === 0:
						((typeof $eq170=='object'||typeof $eq170=='function')&&typeof $eq170.__cmp__=='function'?$eq170.__cmp__($eq169) === 0:
							$eq169==$eq170)))))) === null || $bool380 === false || $bool380 === 0 || $bool380 === '' ?
					false :
					(typeof $bool380=='object'?
						(typeof $bool380.__nonzero__=='function'?
							$bool380.__nonzero__() :
							(typeof $bool380.__len__=='function'?
								($bool380.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				left = (typeof ($sub47=total)==typeof ($sub48=length) && (typeof $sub47=='number'||typeof $sub47=='string')?
					$sub47-$sub48:
					$m['op_sub']($sub47,$sub48));
			}
			else if ((($bool381=(($eq171=align)===($eq172='^')&&$eq171===null?true:
				($eq171===null?false:($eq172===null?false:
					((typeof $eq171=='object'||typeof $eq171=='function')&&typeof $eq171.__cmp__=='function'?$eq171.__cmp__($eq172) === 0:
						((typeof $eq172=='object'||typeof $eq172=='function')&&typeof $eq172.__cmp__=='function'?$eq172.__cmp__($eq171) === 0:
							$eq171==$eq172)))))) === null || $bool381 === false || $bool381 === 0 || $bool381 === '' ?
					false :
					(typeof $bool381=='object'?
						(typeof $bool381.__nonzero__=='function'?
							$bool381.__nonzero__() :
							(typeof $bool381.__len__=='function'?
								($bool381.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				left = (typeof ($div5=(typeof ($sub49=total)==typeof ($sub50=length) && (typeof $sub49=='number'||typeof $sub49=='string')?
					$sub49-$sub50:
					$m['op_sub']($sub49,$sub50)))==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$m['op_div']($div5,$div6));
			}
			else if ((($bool383=((($bool382=$or38=(($eq173=align)===($eq174='<')&&$eq173===null?true:
				($eq173===null?false:($eq174===null?false:
					((typeof $eq173=='object'||typeof $eq173=='function')&&typeof $eq173.__cmp__=='function'?$eq173.__cmp__($eq174) === 0:
						((typeof $eq174=='object'||typeof $eq174=='function')&&typeof $eq174.__cmp__=='function'?$eq174.__cmp__($eq173) === 0:
							$eq173==$eq174)))))) === null || $bool382 === false || $bool382 === 0 || $bool382 === '' ?
				false :
				(typeof $bool382=='object'?
					(typeof $bool382.__nonzero__=='function'?
						$bool382.__nonzero__() :
						(typeof $bool382.__len__=='function'?
							($bool382.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or38:(($eq175=align)===($eq176='=')&&$eq175===null?true:
				($eq175===null?false:($eq176===null?false:
					((typeof $eq175=='object'||typeof $eq175=='function')&&typeof $eq175.__cmp__=='function'?$eq175.__cmp__($eq176) === 0:
						((typeof $eq176=='object'||typeof $eq176=='function')&&typeof $eq176.__cmp__=='function'?$eq176.__cmp__($eq175) === 0:
							$eq175==$eq176))))))) === null || $bool383 === false || $bool383 === 0 || $bool383 === '' ?
					false :
					(typeof $bool383=='object'?
						(typeof $bool383.__nonzero__=='function'?
							$bool383.__nonzero__() :
							(typeof $bool383.__len__=='function'?
								($bool383.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				left = 0;
			}
			else {
				throw ($m['AssertionError']("shouldn't be here"));
			}
			right = (typeof ($sub53=(typeof ($sub51=total)==typeof ($sub52=length) && (typeof $sub51=='number'||typeof $sub51=='string')?
				$sub51-$sub52:
				$m['op_sub']($sub51,$sub52)))==typeof ($sub54=left) && (typeof $sub53=='number'||typeof $sub53=='string')?
				$sub53-$sub54:
				$m['op_sub']($sub53,$sub54));
			self._left_pad = left;
			self._right_pad = right;
			return total;
		}
	, 1, [null,null,['self'],['string'],['length']]);
		$cls_definition['_calc_padding'] = $method;
		$method = $pyjs__bind_method2('_lit', function(s) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
			}

			return s;
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['_lit'] = $method;
		$method = $pyjs__bind_method2('_pad', function(string) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
			}
			var $attr241,$attr240,$attr243,$attr237,builder,$attr238,$attr239,$attr242,$attr244;
			builder = self['_builder']();
			builder['append_multiple_char'](self['_fill_char'], self['_left_pad']);
			builder['append'](string);
			builder['append_multiple_char'](self['_fill_char'], self['_right_pad']);
			return builder['build']();
		}
	, 1, [null,null,['self'],['string']]);
		$cls_definition['_pad'] = $method;
		$method = $pyjs__bind_method2('_builder', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['StringBuilder']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['_builder'] = $method;
		$method = $pyjs__bind_method2('_unknown_presentation', function(tp) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tp = arguments[1];
			}
			var $attr245,$attr246,w_msg,$mod4,$mod3,msg;
			msg = "unknown presentation for %s: '%s'";
			w_msg = (typeof ($mod3=msg)==typeof ($mod4=$p['tuple']([tp, self['_type']])) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$m['op_mod']($mod3,$mod4));
			throw ($m['ValueError'](w_msg));
			return null;
		}
	, 1, [null,null,['self'],['tp']]);
		$cls_definition['_unknown_presentation'] = $method;
		$method = $pyjs__bind_method2('format_string', function(string) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
			}
			var $117,$bool389,$bool388,$bool387,$bool386,$attr254,$bool384,$attr252,$attr253,$attr250,$attr251,$cmp98,$and49,$attr258,$cmp97,$attr249,$eq180,msg,$bool385,$attr255,$cmp99,$attr247,$eq181,$attr248,$eq183,$eq182,$bool390,precision,$eq184,$cmp100,$eq186,$attr256,$118,$eq185,$and50,$eq178,$eq179,length,$bool391,$attr257,$eq177;
			if ((($bool384=self['_parse_spec']('s', '<')) === null || $bool384 === false || $bool384 === 0 || $bool384 === '' ?
					false :
					(typeof $bool384=='object'?
						(typeof $bool384.__nonzero__=='function'?
							$bool384.__nonzero__() :
							(typeof $bool384.__len__=='function'?
								($bool384.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return string;
			}
			if ((($bool385=!(($eq177=self['_type'])===($eq178='s')&&$eq177===null?true:
				($eq177===null?false:($eq178===null?false:
					((typeof $eq177=='object'||typeof $eq177=='function')&&typeof $eq177.__cmp__=='function'?$eq177.__cmp__($eq178) === 0:
						((typeof $eq178=='object'||typeof $eq178=='function')&&typeof $eq178.__cmp__=='function'?$eq178.__cmp__($eq177) === 0:
							$eq177==$eq178)))))) === null || $bool385 === false || $bool385 === 0 || $bool385 === '' ?
					false :
					(typeof $bool385=='object'?
						(typeof $bool385.__nonzero__=='function'?
							$bool385.__nonzero__() :
							(typeof $bool385.__len__=='function'?
								($bool385.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_unknown_presentation']('string');
			}
			if ((($bool386=!(($eq179=self['_sign'])===($eq180='\x00')&&$eq179===null?true:
				($eq179===null?false:($eq180===null?false:
					((typeof $eq179=='object'||typeof $eq179=='function')&&typeof $eq179.__cmp__=='function'?$eq179.__cmp__($eq180) === 0:
						((typeof $eq180=='object'||typeof $eq180=='function')&&typeof $eq180.__cmp__=='function'?$eq180.__cmp__($eq179) === 0:
							$eq179==$eq180)))))) === null || $bool386 === false || $bool386 === 0 || $bool386 === '' ?
					false :
					(typeof $bool386=='object'?
						(typeof $bool386.__nonzero__=='function'?
							$bool386.__nonzero__() :
							(typeof $bool386.__len__=='function'?
								($bool386.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				msg = 'Sign not allowed in string format specifier';
				throw ($m['ValueError'](msg));
			}
			if ((($bool387=self['_alternate']) === null || $bool387 === false || $bool387 === 0 || $bool387 === '' ?
					false :
					(typeof $bool387=='object'?
						(typeof $bool387.__nonzero__=='function'?
							$bool387.__nonzero__() :
							(typeof $bool387.__len__=='function'?
								($bool387.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				msg = 'Alternate form not allowed in string format specifier';
				throw ($m['ValueError'](msg));
			}
			if ((($bool388=(($eq181=self['_align'])===($eq182='=')&&$eq181===null?true:
				($eq181===null?false:($eq182===null?false:
					((typeof $eq181=='object'||typeof $eq181=='function')&&typeof $eq181.__cmp__=='function'?$eq181.__cmp__($eq182) === 0:
						((typeof $eq182=='object'||typeof $eq182=='function')&&typeof $eq182.__cmp__=='function'?$eq182.__cmp__($eq181) === 0:
							$eq181==$eq182)))))) === null || $bool388 === false || $bool388 === 0 || $bool388 === '' ?
					false :
					(typeof $bool388=='object'?
						(typeof $bool388.__nonzero__=='function'?
							$bool388.__nonzero__() :
							(typeof $bool388.__len__=='function'?
								($bool388.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				msg = "'=' alignment not allowed in string format specifier";
				throw ($m['ValueError'](msg));
			}
			length = $m['len'](string);
			precision = self['_precision'];
			if ((($bool390=((($bool389=$and49=!(($eq183=precision)===($eq184=(typeof ($usub21=1)=='number'?
				-$usub21:
				$m['op_usub']($usub21)))&&$eq183===null?true:
				($eq183===null?false:($eq184===null?false:
					((typeof $eq183=='object'||typeof $eq183=='function')&&typeof $eq183.__cmp__=='function'?$eq183.__cmp__($eq184) === 0:
						((typeof $eq184=='object'||typeof $eq184=='function')&&typeof $eq184.__cmp__=='function'?$eq184.__cmp__($eq183) === 0:
							$eq183==$eq184)))))) === null || $bool389 === false || $bool389 === 0 || $bool389 === '' ?
				false :
				(typeof $bool389=='object'?
					(typeof $bool389.__nonzero__=='function'?
						$bool389.__nonzero__() :
						(typeof $bool389.__len__=='function'?
							($bool389.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((((($cmp97=length)===($cmp98=precision)?0:
				(typeof $cmp97==typeof $cmp98 && ((typeof $cmp97 == 'number')||(typeof $cmp97 == 'string')||(typeof $cmp97 == 'boolean'))?
					($cmp97 == $cmp98 ? 0 : ($cmp97 < $cmp98 ? -1 : 1)):
					$m['cmp']($cmp97, $cmp98))))|1) == 1):$and49)) === null || $bool390 === false || $bool390 === 0 || $bool390 === '' ?
					false :
					(typeof $bool390=='object'?
						(typeof $bool390.__nonzero__=='function'?
							$bool390.__nonzero__() :
							(typeof $bool390.__len__=='function'?
								($bool390.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if (!( ((((($cmp99=precision)===($cmp100=0)?0:
					(typeof $cmp99==typeof $cmp100 && ((typeof $cmp99 == 'number')||(typeof $cmp99 == 'string')||(typeof $cmp99 == 'boolean'))?
						($cmp99 == $cmp100 ? 0 : ($cmp99 < $cmp100 ? -1 : 1)):
						$m['cmp']($cmp99, $cmp100))))|1) == 1) )) {
				   throw $m['AssertionError']();
				 }
				length = precision;
				string = $p['__getslice'](string, 0, precision);
			}
			if ((($bool391=(($eq185=self['_fill_char'])===($eq186='\x00')&&$eq185===null?true:
				($eq185===null?false:($eq186===null?false:
					((typeof $eq185=='object'||typeof $eq185=='function')&&typeof $eq185.__cmp__=='function'?$eq185.__cmp__($eq186) === 0:
						((typeof $eq186=='object'||typeof $eq186=='function')&&typeof $eq186.__cmp__=='function'?$eq186.__cmp__($eq185) === 0:
							$eq185==$eq186)))))) === null || $bool391 === false || $bool391 === 0 || $bool391 === '' ?
					false :
					(typeof $bool391=='object'?
						(typeof $bool391.__nonzero__=='function'?
							$bool391.__nonzero__() :
							(typeof $bool391.__len__=='function'?
								($bool391.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self._fill_char = (typeof ($117=self['_lit'](' ')).__array != 'undefined'?
					((typeof $117.__array[$118=0]) != 'undefined'?$117.__array[$118]:
						$117.__getitem__($118)):
						$117.__getitem__(0));
			}
			self['_calc_padding'](string, length);
			return self['_pad'](string);
		}
	, 1, [null,null,['self'],['string']]);
		$cls_definition['format_string'] = $method;
		$method = $pyjs__bind_method2('_get_locale', function(tp) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tp = arguments[1];
			}
			var $eq188,$attr260,$attr259,$bool392,$bool393,$eq187,dec,thousands,grouping;
			if ((($bool392=(($eq187=tp)===($eq188='n')&&$eq187===null?true:
				($eq187===null?false:($eq188===null?false:
					((typeof $eq187=='object'||typeof $eq187=='function')&&typeof $eq187.__cmp__=='function'?$eq187.__cmp__($eq188) === 0:
						((typeof $eq188=='object'||typeof $eq188=='function')&&typeof $eq188.__cmp__=='function'?$eq188.__cmp__($eq187) === 0:
							$eq187==$eq188)))))) === null || $bool392 === false || $bool392 === 0 || $bool392 === '' ?
					false :
					(typeof $bool392=='object'?
						(typeof $bool392.__nonzero__=='function'?
							$bool392.__nonzero__() :
							(typeof $bool392.__len__=='function'?
								($bool392.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign12 = $p['__ass_unpack']((typeof numeric_formatting == "undefined"?$m.numeric_formatting:numeric_formatting)(), 3, null);
				dec = $tupleassign12[0];
				thousands = $tupleassign12[1];
				grouping = $tupleassign12[2];
			}
			else if ((($bool393=self['_thousands_sep']) === null || $bool393 === false || $bool393 === 0 || $bool393 === '' ?
					false :
					(typeof $bool393=='object'?
						(typeof $bool393.__nonzero__=='function'?
							$bool393.__nonzero__() :
							(typeof $bool393.__len__=='function'?
								($bool393.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				dec = '.';
				thousands = ',';
				grouping = '\x03\x00';
			}
			else {
				dec = '.';
				thousands = '';
				grouping = '\xae';
			}
			self._loc_dec = dec;
			self._loc_thousands = thousands;
			self._loc_grouping = grouping;
			return null;
		}
	, 1, [null,null,['self'],['tp']]);
		$cls_definition['_get_locale'] = $method;
		$method = $pyjs__bind_method2('_calc_num_width', function(n_prefix, sign_char, to_number, n_number, n_remainder, has_dec, digits) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n_prefix = arguments[1];
				sign_char = arguments[2];
				to_number = arguments[3];
				n_number = arguments[4];
				n_remainder = arguments[5];
				has_dec = arguments[6];
				digits = arguments[7];
			}
			var $eq198,$eq199,$eq192,$eq193,$eq190,$eq191,$eq196,$eq197,$eq194,$cmp101,$attr288,$eq210,spec,$eq189,$cmp102,$eq208,$eq195,$attr292,$attr293,$attr290,$attr291,$attr296,$attr297,$attr294,$attr295,$attr298,$attr299,$bool400,$bool401,$bool402,$bool403,$bool404,$bool405,n_grouped_digits,$attr278,$attr279,$attr270,$attr271,$attr272,$attr273,$attr274,$attr275,$attr276,sign,$attr285,$attr284,$attr287,$attr281,$attr280,$attr283,$attr282,extra_length,$bool394,$eq203,$eq200,$attr269,$attr268,$attr300,$attr301,$attr302,$attr263,$attr262,$attr261,$attr267,$attr266,$attr265,$attr264,$eq204,$eq205,$and52,$and51,$floordiv2,$floordiv1,$sub64,$sub62,$sub63,$sub60,$sub61,$add145,$add144,$add147,$add146,$add141,$add140,$add143,$add142,$add149,$add148,n_padding,$attr277,$eq201,align,$add152,$add153,$add150,$add151,$add154,$bool406,$add134,$add135,$add136,$add137,$add133,$add138,$add139,$attr289,$sub57,$sub56,$sub55,$eq209,$bool398,$bool399,$eq202,$bool395,$bool396,$bool397,$eq206,$eq207,$sub59,$sub58,$attr286;
			spec = $m['NumberSpec']();
			spec.n_digits = (typeof ($sub57=(typeof ($sub55=n_number)==typeof ($sub56=n_remainder) && (typeof $sub55=='number'||typeof $sub55=='string')?
				$sub55-$sub56:
				$m['op_sub']($sub55,$sub56)))==typeof ($sub58=has_dec) && (typeof $sub57=='number'||typeof $sub57=='string')?
				$sub57-$sub58:
				$m['op_sub']($sub57,$sub58));
			spec.n_prefix = n_prefix;
			spec.n_lpadding = 0;
			spec.n_decimal = $p['float_int'](has_dec);
			spec.n_remainder = n_remainder;
			spec.n_spadding = 0;
			spec.n_rpadding = 0;
			spec.n_min_width = 0;
			spec.n_total = 0;
			spec.sign = '\x00';
			spec.n_sign = 0;
			sign = self['_sign'];
			if ((($bool394=(($eq189=sign)===($eq190='+')&&$eq189===null?true:
				($eq189===null?false:($eq190===null?false:
					((typeof $eq189=='object'||typeof $eq189=='function')&&typeof $eq189.__cmp__=='function'?$eq189.__cmp__($eq190) === 0:
						((typeof $eq190=='object'||typeof $eq190=='function')&&typeof $eq190.__cmp__=='function'?$eq190.__cmp__($eq189) === 0:
							$eq189==$eq190)))))) === null || $bool394 === false || $bool394 === 0 || $bool394 === '' ?
					false :
					(typeof $bool394=='object'?
						(typeof $bool394.__nonzero__=='function'?
							$bool394.__nonzero__() :
							(typeof $bool394.__len__=='function'?
								($bool394.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				spec.n_sign = 1;
				spec.sign = ((($bool395=(($eq191=sign_char)===($eq192='-')&&$eq191===null?true:
					($eq191===null?false:($eq192===null?false:
						((typeof $eq191=='object'||typeof $eq191=='function')&&typeof $eq191.__cmp__=='function'?$eq191.__cmp__($eq192) === 0:
							((typeof $eq192=='object'||typeof $eq192=='function')&&typeof $eq192.__cmp__=='function'?$eq192.__cmp__($eq191) === 0:
								$eq191==$eq192)))))) === null || $bool395 === false || $bool395 === 0 || $bool395 === '' ?
					false :
					(typeof $bool395=='object'?
						(typeof $bool395.__nonzero__=='function'?
							$bool395.__nonzero__() :
							(typeof $bool395.__len__=='function'?
								($bool395.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ('-') : ('+'));
			}
			else if ((($bool396=(($eq193=sign)===($eq194=' ')&&$eq193===null?true:
				($eq193===null?false:($eq194===null?false:
					((typeof $eq193=='object'||typeof $eq193=='function')&&typeof $eq193.__cmp__=='function'?$eq193.__cmp__($eq194) === 0:
						((typeof $eq194=='object'||typeof $eq194=='function')&&typeof $eq194.__cmp__=='function'?$eq194.__cmp__($eq193) === 0:
							$eq193==$eq194)))))) === null || $bool396 === false || $bool396 === 0 || $bool396 === '' ?
					false :
					(typeof $bool396=='object'?
						(typeof $bool396.__nonzero__=='function'?
							$bool396.__nonzero__() :
							(typeof $bool396.__len__=='function'?
								($bool396.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				spec.n_sign = 1;
				spec.sign = ((($bool397=(($eq195=sign_char)===($eq196='-')&&$eq195===null?true:
					($eq195===null?false:($eq196===null?false:
						((typeof $eq195=='object'||typeof $eq195=='function')&&typeof $eq195.__cmp__=='function'?$eq195.__cmp__($eq196) === 0:
							((typeof $eq196=='object'||typeof $eq196=='function')&&typeof $eq196.__cmp__=='function'?$eq196.__cmp__($eq195) === 0:
								$eq195==$eq196)))))) === null || $bool397 === false || $bool397 === 0 || $bool397 === '' ?
					false :
					(typeof $bool397=='object'?
						(typeof $bool397.__nonzero__=='function'?
							$bool397.__nonzero__() :
							(typeof $bool397.__len__=='function'?
								($bool397.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ('-') : (' '));
			}
			else if ((($bool398=(($eq197=sign_char)===($eq198='-')&&$eq197===null?true:
				($eq197===null?false:($eq198===null?false:
					((typeof $eq197=='object'||typeof $eq197=='function')&&typeof $eq197.__cmp__=='function'?$eq197.__cmp__($eq198) === 0:
						((typeof $eq198=='object'||typeof $eq198=='function')&&typeof $eq198.__cmp__=='function'?$eq198.__cmp__($eq197) === 0:
							$eq197==$eq198)))))) === null || $bool398 === false || $bool398 === 0 || $bool398 === '' ?
					false :
					(typeof $bool398=='object'?
						(typeof $bool398.__nonzero__=='function'?
							$bool398.__nonzero__() :
							(typeof $bool398.__len__=='function'?
								($bool398.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				spec.n_sign = 1;
				spec.sign = '-';
			}
			extra_length = (typeof ($add137=(typeof ($add135=(typeof ($add133=spec['n_sign'])==typeof ($add134=spec['n_prefix']) && (typeof $add133=='number'||typeof $add133=='string')?
				$add133+$add134:
				$m['op_add']($add133,$add134)))==typeof ($add136=spec['n_decimal']) && (typeof $add135=='number'||typeof $add135=='string')?
				$add135+$add136:
				$m['op_add']($add135,$add136)))==typeof ($add138=spec['n_remainder']) && (typeof $add137=='number'||typeof $add137=='string')?
				$add137+$add138:
				$m['op_add']($add137,$add138));
			if ((($bool400=((($bool399=$and51=(($eq199=self['_fill_char'])===($eq200='0')&&$eq199===null?true:
				($eq199===null?false:($eq200===null?false:
					((typeof $eq199=='object'||typeof $eq199=='function')&&typeof $eq199.__cmp__=='function'?$eq199.__cmp__($eq200) === 0:
						((typeof $eq200=='object'||typeof $eq200=='function')&&typeof $eq200.__cmp__=='function'?$eq200.__cmp__($eq199) === 0:
							$eq199==$eq200)))))) === null || $bool399 === false || $bool399 === 0 || $bool399 === '' ?
				false :
				(typeof $bool399=='object'?
					(typeof $bool399.__nonzero__=='function'?
						$bool399.__nonzero__() :
						(typeof $bool399.__len__=='function'?
							($bool399.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq201=self['_align'])===($eq202='=')&&$eq201===null?true:
				($eq201===null?false:($eq202===null?false:
					((typeof $eq201=='object'||typeof $eq201=='function')&&typeof $eq201.__cmp__=='function'?$eq201.__cmp__($eq202) === 0:
						((typeof $eq202=='object'||typeof $eq202=='function')&&typeof $eq202.__cmp__=='function'?$eq202.__cmp__($eq201) === 0:
							$eq201==$eq202))))):$and51)) === null || $bool400 === false || $bool400 === 0 || $bool400 === '' ?
					false :
					(typeof $bool400=='object'?
						(typeof $bool400.__nonzero__=='function'?
							$bool400.__nonzero__() :
							(typeof $bool400.__len__=='function'?
								($bool400.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				spec.n_min_width = (typeof ($sub59=self['_width'])==typeof ($sub60=extra_length) && (typeof $sub59=='number'||typeof $sub59=='string')?
					$sub59-$sub60:
					$m['op_sub']($sub59,$sub60));
			}
			if ((($bool401=self['_loc_thousands']) === null || $bool401 === false || $bool401 === 0 || $bool401 === '' ?
					false :
					(typeof $bool401=='object'?
						(typeof $bool401.__nonzero__=='function'?
							$bool401.__nonzero__() :
							(typeof $bool401.__len__=='function'?
								($bool401.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_group_digits'](spec, $p['__getslice'](digits, to_number, null));
				n_grouped_digits = $m['len'](self['_grouped_digits']);
			}
			else {
				n_grouped_digits = spec['n_digits'];
			}
			n_padding = (typeof ($sub61=self['_width'])==typeof ($sub62=(typeof ($add139=extra_length)==typeof ($add140=n_grouped_digits) && (typeof $add139=='number'||typeof $add139=='string')?
				$add139+$add140:
				$m['op_add']($add139,$add140))) && (typeof $sub61=='number'||typeof $sub61=='string')?
				$sub61-$sub62:
				$m['op_sub']($sub61,$sub62));
			if ((($bool402=((($cmp101=n_padding)===($cmp102=0)?0:
				(typeof $cmp101==typeof $cmp102 && ((typeof $cmp101 == 'number')||(typeof $cmp101 == 'string')||(typeof $cmp101 == 'boolean'))?
					($cmp101 == $cmp102 ? 0 : ($cmp101 < $cmp102 ? -1 : 1)):
					$m['cmp']($cmp101, $cmp102))) == 1)) === null || $bool402 === false || $bool402 === 0 || $bool402 === '' ?
					false :
					(typeof $bool402=='object'?
						(typeof $bool402.__nonzero__=='function'?
							$bool402.__nonzero__() :
							(typeof $bool402.__len__=='function'?
								($bool402.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				align = self['_align'];
				if ((($bool403=(($eq203=align)===($eq204='<')&&$eq203===null?true:
					($eq203===null?false:($eq204===null?false:
						((typeof $eq203=='object'||typeof $eq203=='function')&&typeof $eq203.__cmp__=='function'?$eq203.__cmp__($eq204) === 0:
							((typeof $eq204=='object'||typeof $eq204=='function')&&typeof $eq204.__cmp__=='function'?$eq204.__cmp__($eq203) === 0:
								$eq203==$eq204)))))) === null || $bool403 === false || $bool403 === 0 || $bool403 === '' ?
						false :
						(typeof $bool403=='object'?
							(typeof $bool403.__nonzero__=='function'?
								$bool403.__nonzero__() :
								(typeof $bool403.__len__=='function'?
									($bool403.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					spec.n_rpadding = n_padding;
				}
				else if ((($bool404=(($eq205=align)===($eq206='>')&&$eq205===null?true:
					($eq205===null?false:($eq206===null?false:
						((typeof $eq205=='object'||typeof $eq205=='function')&&typeof $eq205.__cmp__=='function'?$eq205.__cmp__($eq206) === 0:
							((typeof $eq206=='object'||typeof $eq206=='function')&&typeof $eq206.__cmp__=='function'?$eq206.__cmp__($eq205) === 0:
								$eq205==$eq206)))))) === null || $bool404 === false || $bool404 === 0 || $bool404 === '' ?
						false :
						(typeof $bool404=='object'?
							(typeof $bool404.__nonzero__=='function'?
								$bool404.__nonzero__() :
								(typeof $bool404.__len__=='function'?
									($bool404.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					spec.n_lpadding = n_padding;
				}
				else if ((($bool405=(($eq207=align)===($eq208='^')&&$eq207===null?true:
					($eq207===null?false:($eq208===null?false:
						((typeof $eq207=='object'||typeof $eq207=='function')&&typeof $eq207.__cmp__=='function'?$eq207.__cmp__($eq208) === 0:
							((typeof $eq208=='object'||typeof $eq208=='function')&&typeof $eq208.__cmp__=='function'?$eq208.__cmp__($eq207) === 0:
								$eq207==$eq208)))))) === null || $bool405 === false || $bool405 === 0 || $bool405 === '' ?
						false :
						(typeof $bool405=='object'?
							(typeof $bool405.__nonzero__=='function'?
								$bool405.__nonzero__() :
								(typeof $bool405.__len__=='function'?
									($bool405.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					spec.n_lpadding = (typeof ($floordiv1=n_padding)==typeof ($floordiv2=2) && typeof $floordiv1=='number' && $floordiv2 !== 0?
						Math.floor($floordiv1/$floordiv2):
						$m['op_floordiv']($floordiv1,$floordiv2));
					spec.n_rpadding = (typeof ($sub63=n_padding)==typeof ($sub64=spec['n_lpadding']) && (typeof $sub63=='number'||typeof $sub63=='string')?
						$sub63-$sub64:
						$m['op_sub']($sub63,$sub64));
				}
				else if ((($bool406=(($eq209=align)===($eq210='=')&&$eq209===null?true:
					($eq209===null?false:($eq210===null?false:
						((typeof $eq209=='object'||typeof $eq209=='function')&&typeof $eq209.__cmp__=='function'?$eq209.__cmp__($eq210) === 0:
							((typeof $eq210=='object'||typeof $eq210=='function')&&typeof $eq210.__cmp__=='function'?$eq210.__cmp__($eq209) === 0:
								$eq209==$eq210)))))) === null || $bool406 === false || $bool406 === 0 || $bool406 === '' ?
						false :
						(typeof $bool406=='object'?
							(typeof $bool406.__nonzero__=='function'?
								$bool406.__nonzero__() :
								(typeof $bool406.__len__=='function'?
									($bool406.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					spec.n_spadding = n_padding;
				}
				else {
					throw ($m['AssertionError']("shouldn't reach"));
				}
			}
			spec.n_total = (typeof ($add153=(typeof ($add151=(typeof ($add149=(typeof ($add147=(typeof ($add145=(typeof ($add143=(typeof ($add141=spec['n_lpadding'])==typeof ($add142=spec['n_sign']) && (typeof $add141=='number'||typeof $add141=='string')?
				$add141+$add142:
				$m['op_add']($add141,$add142)))==typeof ($add144=spec['n_prefix']) && (typeof $add143=='number'||typeof $add143=='string')?
				$add143+$add144:
				$m['op_add']($add143,$add144)))==typeof ($add146=spec['n_spadding']) && (typeof $add145=='number'||typeof $add145=='string')?
				$add145+$add146:
				$m['op_add']($add145,$add146)))==typeof ($add148=n_grouped_digits) && (typeof $add147=='number'||typeof $add147=='string')?
				$add147+$add148:
				$m['op_add']($add147,$add148)))==typeof ($add150=spec['n_decimal']) && (typeof $add149=='number'||typeof $add149=='string')?
				$add149+$add150:
				$m['op_add']($add149,$add150)))==typeof ($add152=spec['n_remainder']) && (typeof $add151=='number'||typeof $add151=='string')?
				$add151+$add152:
				$m['op_add']($add151,$add152)))==typeof ($add154=spec['n_rpadding']) && (typeof $add153=='number'||typeof $add153=='string')?
				$add153+$add154:
				$m['op_add']($add153,$add154));
			return spec;
		}
	, 1, [null,null,['self'],['n_prefix'],['sign_char'],['to_number'],['n_number'],['n_remainder'],['has_dec'],['digits']]);
		$cls_definition['_calc_num_width'] = $method;
		$method = $pyjs__bind_method2('_fill_digits', function(buf, digits, d_state, n_chars, n_zeros, thousands_sep) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				buf = arguments[1];
				digits = arguments[2];
				d_state = arguments[3];
				n_chars = arguments[4];
				n_zeros = arguments[5];
				thousands_sep = arguments[6];
			}
			var $iter31_nextval,$119,$iter30_array,$sub68,$sub69,$sub66,$sub67,$sub65,$iter30_nextval,$iter29_type,$iter31_idx,$iter31_type,$iter29_array,$iter30_type,$iter31_array,$iter29_nextval,$iter30_idx,$120,$sub70,c,$iter30_iter,$iter29_iter,i,$iter29_idx,$iter31_iter,$bool407;
			if ((($bool407=thousands_sep) === null || $bool407 === false || $bool407 === 0 || $bool407 === '' ?
					false :
					(typeof $bool407=='object'?
						(typeof $bool407.__nonzero__=='function'?
							$bool407.__nonzero__() :
							(typeof $bool407.__len__=='function'?
								($bool407.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter29_iter = thousands_sep;
				if (typeof ($iter29_array = $iter29_iter.__array) != 'undefined') {
					$iter29_type = 0;
				} else {
					$iter29_iter = $iter29_iter.__iter__();
					$iter29_type = typeof ($iter29_array = $iter29_iter.__array) != 'undefined'? 0 : (typeof $iter29_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter29_idx = 0;
				while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
					c = $iter29_nextval;
					buf['append'](c);
				}
			}
			$iter30_iter = $m['range']((typeof ($sub65=d_state)==typeof ($sub66=1) && (typeof $sub65=='number'||typeof $sub65=='string')?
				$sub65-$sub66:
				$m['op_sub']($sub65,$sub66)), (typeof ($sub69=(typeof ($sub67=d_state)==typeof ($sub68=n_chars) && (typeof $sub67=='number'||typeof $sub67=='string')?
				$sub67-$sub68:
				$m['op_sub']($sub67,$sub68)))==typeof ($sub70=1) && (typeof $sub69=='number'||typeof $sub69=='string')?
				$sub69-$sub70:
				$m['op_sub']($sub69,$sub70)), (typeof ($usub22=1)=='number'?
				-$usub22:
				$m['op_usub']($usub22)));
			if (typeof ($iter30_array = $iter30_iter.__array) != 'undefined') {
				$iter30_type = 0;
			} else {
				$iter30_iter = $iter30_iter.__iter__();
				$iter30_type = typeof ($iter30_array = $iter30_iter.__array) != 'undefined'? 0 : (typeof $iter30_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter30_idx = 0;
			while (typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined') {
				i = $iter30_nextval;
				buf['append']((typeof ($119=digits).__array != 'undefined'?
					((typeof $119.__array[$120=i]) != 'undefined'?$119.__array[$120]:
						$119.__getitem__($120)):
						$119.__getitem__(i)));
			}
			$iter31_iter = $m['range'](n_zeros);
			if (typeof ($iter31_array = $iter31_iter.__array) != 'undefined') {
				$iter31_type = 0;
			} else {
				$iter31_iter = $iter31_iter.__iter__();
				$iter31_type = typeof ($iter31_array = $iter31_iter.__array) != 'undefined'? 0 : (typeof $iter31_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter31_idx = 0;
			while (typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined') {
				i = $iter31_nextval;
				buf['append']('0');
			}
			return null;
		}
	, 1, [null,null,['self'],['buf'],['digits'],['d_state'],['n_chars'],['n_zeros'],['thousands_sep']]);
		$cls_definition['_fill_digits'] = $method;
		$method = $pyjs__bind_method2('_group_digits', function(spec, digits) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				spec = arguments[1];
				digits = arguments[2];
			}
			var $sub72,$attr314,$attr313,$attr312,$attr311,$attr310,$eq211,$cmp107,$cmp104,$eq212,$cmp103,done,n_ts,$sub74,min_width,$sub77,previous,group,$cmp108,$sub71,ts,grouping_state,$cmp106,$bool413,$bool412,$bool411,$bool410,$cmp105,$bool414,$attr304,count,$attr306,$attr307,$attr303,$attr308,$attr309,n_chars,$sub79,n_zeros,$sub78,$sub75,$122,$121,$sub76,buf,final_grouping,$sub73,groupings,$and54,$and53,$bool416,$bool408,$bool409,$add156,$bool415,need_separator,$add155,$sub80,$attr305,grouping,left;
			buf = $p['list']([]);
			grouping = self['_loc_grouping'];
			min_width = spec['n_min_width'];
			grouping_state = 0;
			count = 0;
			left = spec['n_digits'];
			n_ts = $m['len'](self['_loc_thousands']);
			need_separator = false;
			done = false;
			groupings = $m['len'](grouping);
			previous = 0;
			while ((($bool408=true) === null || $bool408 === false || $bool408 === 0 || $bool408 === '' ?
					false :
					(typeof $bool408=='object'?
						(typeof $bool408.__nonzero__=='function'?
							$bool408.__nonzero__() :
							(typeof $bool408.__len__=='function'?
								($bool408.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				group = $m['ord']((typeof ($121=grouping).__array != 'undefined'?
					((typeof $121.__array[$122=grouping_state]) != 'undefined'?$121.__array[$122]:
						$121.__getitem__($122)):
						$121.__getitem__(grouping_state)));
				if ((($bool409=((($cmp103=group)===($cmp104=0)?0:
					(typeof $cmp103==typeof $cmp104 && ((typeof $cmp103 == 'number')||(typeof $cmp103 == 'string')||(typeof $cmp103 == 'boolean'))?
						($cmp103 == $cmp104 ? 0 : ($cmp103 < $cmp104 ? -1 : 1)):
						$m['cmp']($cmp103, $cmp104))) == 1)) === null || $bool409 === false || $bool409 === 0 || $bool409 === '' ?
						false :
						(typeof $bool409=='object'?
							(typeof $bool409.__nonzero__=='function'?
								$bool409.__nonzero__() :
								(typeof $bool409.__len__=='function'?
									($bool409.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool410=(($eq211=group)===($eq212=256)&&$eq211===null?true:
						($eq211===null?false:($eq212===null?false:
							((typeof $eq211=='object'||typeof $eq211=='function')&&typeof $eq211.__cmp__=='function'?$eq211.__cmp__($eq212) === 0:
								((typeof $eq212=='object'||typeof $eq212=='function')&&typeof $eq212.__cmp__=='function'?$eq212.__cmp__($eq211) === 0:
									$eq211==$eq212)))))) === null || $bool410 === false || $bool410 === 0 || $bool410 === '' ?
							false :
							(typeof $bool410=='object'?
								(typeof $bool410.__nonzero__=='function'?
									$bool410.__nonzero__() :
									(typeof $bool410.__len__=='function'?
										($bool410.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						break;
					}
					grouping_state = (typeof ($add155=grouping_state)==typeof ($add156=1) && (typeof $add155=='number'||typeof $add155=='string')?
						$add155+$add156:
						$m['op_add']($add155,$add156));
					previous = group;
				}
				else {
					group = previous;
				}
				final_grouping = $m['min'](group, $m['max'](left, $m['max'](min_width, 1)));
				n_zeros = $m['max'](0, (typeof ($sub71=final_grouping)==typeof ($sub72=left) && (typeof $sub71=='number'||typeof $sub71=='string')?
					$sub71-$sub72:
					$m['op_sub']($sub71,$sub72)));
				n_chars = $m['max'](0, $m['min'](left, final_grouping));
				ts = ((($bool411=need_separator) === null || $bool411 === false || $bool411 === 0 || $bool411 === '' ?
					false :
					(typeof $bool411=='object'?
						(typeof $bool411.__nonzero__=='function'?
							$bool411.__nonzero__() :
							(typeof $bool411.__len__=='function'?
								($bool411.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (self['_loc_thousands']) : (null));
				self['_fill_digits'](buf, digits, left, n_chars, n_zeros, ts);
				need_separator = true;
				left = (typeof ($sub73=left)==typeof ($sub74=n_chars) && (typeof $sub73=='number'||typeof $sub73=='string')?
					$sub73-$sub74:
					$m['op_sub']($sub73,$sub74));
				min_width = (typeof ($sub75=min_width)==typeof ($sub76=final_grouping) && (typeof $sub75=='number'||typeof $sub75=='string')?
					$sub75-$sub76:
					$m['op_sub']($sub75,$sub76));
				if ((($bool413=((($bool412=$and53=((($cmp105=left)===($cmp106=0)?0:
					(typeof $cmp105==typeof $cmp106 && ((typeof $cmp105 == 'number')||(typeof $cmp105 == 'string')||(typeof $cmp105 == 'boolean'))?
						($cmp105 == $cmp106 ? 0 : ($cmp105 < $cmp106 ? -1 : 1)):
						$m['cmp']($cmp105, $cmp106))) < 1)) === null || $bool412 === false || $bool412 === 0 || $bool412 === '' ?
					false :
					(typeof $bool412=='object'?
						(typeof $bool412.__nonzero__=='function'?
							$bool412.__nonzero__() :
							(typeof $bool412.__len__=='function'?
								($bool412.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp107=min_width)===($cmp108=0)?0:
					(typeof $cmp107==typeof $cmp108 && ((typeof $cmp107 == 'number')||(typeof $cmp107 == 'string')||(typeof $cmp107 == 'boolean'))?
						($cmp107 == $cmp108 ? 0 : ($cmp107 < $cmp108 ? -1 : 1)):
						$m['cmp']($cmp107, $cmp108))) < 1):$and53)) === null || $bool413 === false || $bool413 === 0 || $bool413 === '' ?
						false :
						(typeof $bool413=='object'?
							(typeof $bool413.__nonzero__=='function'?
								$bool413.__nonzero__() :
								(typeof $bool413.__len__=='function'?
									($bool413.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					done = true;
					break;
				}
				min_width = (typeof ($sub77=min_width)==typeof ($sub78=n_ts) && (typeof $sub77=='number'||typeof $sub77=='string')?
					$sub77-$sub78:
					$m['op_sub']($sub77,$sub78));
			}
			if ((($bool415=!(($bool414=done) === null || $bool414 === false || $bool414 === 0 || $bool414 === '' ?
				false :
				(typeof $bool414=='object'?
					(typeof $bool414.__nonzero__=='function'?
						$bool414.__nonzero__() :
						(typeof $bool414.__len__=='function'?
							($bool414.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool415 === false || $bool415 === 0 || $bool415 === '' ?
					false :
					(typeof $bool415=='object'?
						(typeof $bool415.__nonzero__=='function'?
							$bool415.__nonzero__() :
							(typeof $bool415.__len__=='function'?
								($bool415.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				group = $m['max']($m['max'](left, min_width), 1);
				n_zeros = $m['max'](0, (typeof ($sub79=group)==typeof ($sub80=left) && (typeof $sub79=='number'||typeof $sub79=='string')?
					$sub79-$sub80:
					$m['op_sub']($sub79,$sub80)));
				n_chars = $m['max'](0, $m['min'](left, group));
				ts = ((($bool416=need_separator) === null || $bool416 === false || $bool416 === 0 || $bool416 === '' ?
					false :
					(typeof $bool416=='object'?
						(typeof $bool416.__nonzero__=='function'?
							$bool416.__nonzero__() :
							(typeof $bool416.__len__=='function'?
								($bool416.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (self['_loc_thousands']) : (null));
				self['_fill_digits'](buf, digits, left, n_chars, n_zeros, ts);
			}
			buf['reverse']();
			self._grouped_digits = self['empty']['join'](buf);
			return null;
		}
	, 1, [null,null,['self'],['spec'],['digits']]);
		$cls_definition['_group_digits'] = $method;
		$method = $pyjs__bind_method2('_upcase_string', function(s) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
			}
			var $cmp111,index,$iter32_idx,$cmp112,$sub82,$cmp109,c,$iter32_nextval,$iter32_iter,$iter32_type,$bool417,$sub81,$iter32_array,$cmp110,buf;
			buf = $p['list']([]);
			$iter32_iter = s;
			if (typeof ($iter32_array = $iter32_iter.__array) != 'undefined') {
				$iter32_type = 0;
			} else {
				$iter32_iter = $iter32_iter.__iter__();
				$iter32_type = typeof ($iter32_array = $iter32_iter.__array) != 'undefined'? 0 : (typeof $iter32_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter32_idx = 0;
			while (typeof ($iter32_nextval=($iter32_type?($iter32_type > 0?$iter32_iter.next(true,false):$p['wrapped_next']($iter32_iter)):$iter32_array[$iter32_idx++])) != 'undefined') {
				c = $iter32_nextval;
				index = $m['ord'](c);
				if ((($bool417=(((($cmp109=$m['ord']('a'))===($cmp110=($compare3 = index))?0:
					(typeof $cmp109==typeof $cmp110 && ((typeof $cmp109 == 'number')||(typeof $cmp109 == 'string')||(typeof $cmp109 == 'boolean'))?
						($cmp109 == $cmp110 ? 0 : ($cmp109 < $cmp110 ? -1 : 1)):
						$m['cmp']($cmp109, $cmp110))) < 1)&&((($cmp111=$compare3)===($cmp112=($compare4 = $m['ord']('z')))?0:
					(typeof $cmp111==typeof $cmp112 && ((typeof $cmp111 == 'number')||(typeof $cmp111 == 'string')||(typeof $cmp111 == 'boolean'))?
						($cmp111 == $cmp112 ? 0 : ($cmp111 < $cmp112 ? -1 : 1)):
						$m['cmp']($cmp111, $cmp112))) < 1))) === null || $bool417 === false || $bool417 === 0 || $bool417 === '' ?
						false :
						(typeof $bool417=='object'?
							(typeof $bool417.__nonzero__=='function'?
								$bool417.__nonzero__() :
								(typeof $bool417.__len__=='function'?
									($bool417.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					c = $m['chr']((typeof ($sub81=index)==typeof ($sub82=32) && (typeof $sub81=='number'||typeof $sub81=='string')?
						$sub81-$sub82:
						$m['op_sub']($sub81,$sub82)));
				}
				buf['append'](c);
			}
			return self['empty']['join'](buf);
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['_upcase_string'] = $method;
		$method = $pyjs__bind_method2('_fill_number', function(spec, num, to_digits, to_prefix, fill_char, to_remainder, upper, grouped_digits) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				spec = arguments[1];
				num = arguments[2];
				to_digits = arguments[3];
				to_prefix = arguments[4];
				fill_char = arguments[5];
				to_remainder = arguments[6];
				upper = arguments[7];
				grouped_digits = arguments[8];
			}
			if (typeof grouped_digits == 'undefined') grouped_digits=arguments.callee.__args__[10][1];
			var $attr317,$attr315,$bool423,$attr316,$eq213,$eq214,$attr319,$attr318,$bool424,$add159,$add157,out,$attr327,pref,$attr328,$bool419,$bool418,$attr322,$attr323,$attr320,$attr326,$attr324,$attr325,$attr336,$cmp113,$add160,$cmp114,$bool425,$attr340,$attr341,$attr342,$attr338,stop,$attr345,$attr346,$bool426,$bool427,$123,$attr333,sign,$127,$126,$125,$124,digits,$attr337,$attr321,$attr343,$attr331,$attr344,$attr330,$128,$attr339,$bool428,$bool429,$attr335,$attr334,$add158,$attr332,$bool422,$attr329,$bool420,$bool421;
			out = self['_builder']();
			if ((($bool418=spec['n_lpadding']) === null || $bool418 === false || $bool418 === 0 || $bool418 === '' ?
					false :
					(typeof $bool418=='object'?
						(typeof $bool418.__nonzero__=='function'?
							$bool418.__nonzero__() :
							(typeof $bool418.__len__=='function'?
								($bool418.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				out['append_multiple_char']((typeof ($123=fill_char).__array != 'undefined'?
					((typeof $123.__array[$124=0]) != 'undefined'?$123.__array[$124]:
						$123.__getitem__($124)):
						$123.__getitem__(0)), spec['n_lpadding']);
			}
			if ((($bool419=spec['n_sign']) === null || $bool419 === false || $bool419 === 0 || $bool419 === '' ?
					false :
					(typeof $bool419=='object'?
						(typeof $bool419.__nonzero__=='function'?
							$bool419.__nonzero__() :
							(typeof $bool419.__len__=='function'?
								($bool419.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sign = spec['sign'];
				out['append'](sign);
			}
			if ((($bool420=spec['n_prefix']) === null || $bool420 === false || $bool420 === 0 || $bool420 === '' ?
					false :
					(typeof $bool420=='object'?
						(typeof $bool420.__nonzero__=='function'?
							$bool420.__nonzero__() :
							(typeof $bool420.__len__=='function'?
								($bool420.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				pref = $p['__getslice'](num, to_prefix, (typeof ($add157=to_prefix)==typeof ($add158=spec['n_prefix']) && (typeof $add157=='number'||typeof $add157=='string')?
					$add157+$add158:
					$m['op_add']($add157,$add158)));
				if ((($bool421=upper) === null || $bool421 === false || $bool421 === 0 || $bool421 === '' ?
						false :
						(typeof $bool421=='object'?
							(typeof $bool421.__nonzero__=='function'?
								$bool421.__nonzero__() :
								(typeof $bool421.__len__=='function'?
									($bool421.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					pref = self['_upcase_string'](pref);
				}
				out['append'](pref);
			}
			if ((($bool422=spec['n_spadding']) === null || $bool422 === false || $bool422 === 0 || $bool422 === '' ?
					false :
					(typeof $bool422=='object'?
						(typeof $bool422.__nonzero__=='function'?
							$bool422.__nonzero__() :
							(typeof $bool422.__len__=='function'?
								($bool422.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				out['append_multiple_char']((typeof ($125=fill_char).__array != 'undefined'?
					((typeof $125.__array[$126=0]) != 'undefined'?$125.__array[$126]:
						$125.__getitem__($126)):
						$125.__getitem__(0)), spec['n_spadding']);
			}
			if ((($bool423=!(($eq213=spec['n_digits'])===($eq214=0)&&$eq213===null?true:
				($eq213===null?false:($eq214===null?false:
					((typeof $eq213=='object'||typeof $eq213=='function')&&typeof $eq213.__cmp__=='function'?$eq213.__cmp__($eq214) === 0:
						((typeof $eq214=='object'||typeof $eq214=='function')&&typeof $eq214.__cmp__=='function'?$eq214.__cmp__($eq213) === 0:
							$eq213==$eq214)))))) === null || $bool423 === false || $bool423 === 0 || $bool423 === '' ?
					false :
					(typeof $bool423=='object'?
						(typeof $bool423.__nonzero__=='function'?
							$bool423.__nonzero__() :
							(typeof $bool423.__len__=='function'?
								($bool423.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool424=self['_loc_thousands']) === null || $bool424 === false || $bool424 === 0 || $bool424 === '' ?
						false :
						(typeof $bool424=='object'?
							(typeof $bool424.__nonzero__=='function'?
								$bool424.__nonzero__() :
								(typeof $bool424.__len__=='function'?
									($bool424.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool425=(grouped_digits !== null)) === null || $bool425 === false || $bool425 === 0 || $bool425 === '' ?
							false :
							(typeof $bool425=='object'?
								(typeof $bool425.__nonzero__=='function'?
									$bool425.__nonzero__() :
									(typeof $bool425.__len__=='function'?
										($bool425.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						digits = grouped_digits;
					}
					else {
						digits = self['_grouped_digits'];
						if (!( (digits !== null) )) {
						   throw $m['AssertionError']();
						 }
					}
				}
				else {
					stop = (typeof ($add159=to_digits)==typeof ($add160=spec['n_digits']) && (typeof $add159=='number'||typeof $add159=='string')?
						$add159+$add160:
						$m['op_add']($add159,$add160));
					if (!( ((((($cmp113=stop)===($cmp114=0)?0:
						(typeof $cmp113==typeof $cmp114 && ((typeof $cmp113 == 'number')||(typeof $cmp113 == 'string')||(typeof $cmp113 == 'boolean'))?
							($cmp113 == $cmp114 ? 0 : ($cmp113 < $cmp114 ? -1 : 1)):
							$m['cmp']($cmp113, $cmp114))))|1) == 1) )) {
					   throw $m['AssertionError']();
					 }
					digits = $p['__getslice'](num, to_digits, stop);
				}
				if ((($bool426=upper) === null || $bool426 === false || $bool426 === 0 || $bool426 === '' ?
						false :
						(typeof $bool426=='object'?
							(typeof $bool426.__nonzero__=='function'?
								$bool426.__nonzero__() :
								(typeof $bool426.__len__=='function'?
									($bool426.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					digits = self['_upcase_string'](digits);
				}
				out['append'](digits);
			}
			if ((($bool427=spec['n_decimal']) === null || $bool427 === false || $bool427 === 0 || $bool427 === '' ?
					false :
					(typeof $bool427=='object'?
						(typeof $bool427.__nonzero__=='function'?
							$bool427.__nonzero__() :
							(typeof $bool427.__len__=='function'?
								($bool427.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				out['append']('.');
			}
			if ((($bool428=spec['n_remainder']) === null || $bool428 === false || $bool428 === 0 || $bool428 === '' ?
					false :
					(typeof $bool428=='object'?
						(typeof $bool428.__nonzero__=='function'?
							$bool428.__nonzero__() :
							(typeof $bool428.__len__=='function'?
								($bool428.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				out['append']($p['__getslice'](num, to_remainder, null));
			}
			if ((($bool429=spec['n_rpadding']) === null || $bool429 === false || $bool429 === 0 || $bool429 === '' ?
					false :
					(typeof $bool429=='object'?
						(typeof $bool429.__nonzero__=='function'?
							$bool429.__nonzero__() :
							(typeof $bool429.__len__=='function'?
								($bool429.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				out['append_multiple_char']((typeof ($127=fill_char).__array != 'undefined'?
					((typeof $127.__array[$128=0]) != 'undefined'?$127.__array[$128]:
						$127.__getitem__($128)):
						$127.__getitem__(0)), spec['n_rpadding']);
			}
			return out['build']();
		}
	, 1, [null,null,['self'],['spec'],['num'],['to_digits'],['to_prefix'],['fill_char'],['to_remainder'],['upper'],['grouped_digits', null]]);
		$cls_definition['_fill_number'] = $method;
		$method = $pyjs__bind_method2('_format_int_or_long', function(w_num, kind) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				kind = arguments[2];
			}
			var $eq219,$eq218,$attr359,$attr358,n_remainder,$bool439,upper,$attr353,$attr352,$attr351,$attr350,$eq215,$attr356,$eq217,$eq216,$sub84,$bool442,n_digits,result,$sub83,$130,$bool438,fill,spec,$eq224,sign_char,$add164,$eq225,$attr357,$eq226,tp,$bool431,$bool430,$bool433,$bool432,$eq220,$eq221,$eq222,$eq223,msg,$bool435,$or40,to_prefix,$eq228,$eq229,$bool434,$attr348,$attr349,$eq238,$bool437,$eq240,$add163,$add162,$add161,$bool436,$attr360,$attr347,$or42,$129,base,$attr355,$or43,$attr354,$or41,$eq237,$eq227,$eq234,value,to_remainder,$eq233,$eq232,$eq231,$eq230,$bool440,$eq236,$eq235,n_prefix,$eq239,$bool441,skip_leading,to_numeric;
			if ((($bool430=!(($eq215=self['_precision'])===($eq216=(typeof ($usub23=1)=='number'?
				-$usub23:
				$m['op_usub']($usub23)))&&$eq215===null?true:
				($eq215===null?false:($eq216===null?false:
					((typeof $eq215=='object'||typeof $eq215=='function')&&typeof $eq215.__cmp__=='function'?$eq215.__cmp__($eq216) === 0:
						((typeof $eq216=='object'||typeof $eq216=='function')&&typeof $eq216.__cmp__=='function'?$eq216.__cmp__($eq215) === 0:
							$eq215==$eq216)))))) === null || $bool430 === false || $bool430 === 0 || $bool430 === '' ?
					false :
					(typeof $bool430=='object'?
						(typeof $bool430.__nonzero__=='function'?
							$bool430.__nonzero__() :
							(typeof $bool430.__len__=='function'?
								($bool430.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				msg = 'precision not allowed in integer type';
				throw ($m['ValueError'](msg));
			}
			sign_char = '\x00';
			tp = self['_type'];
			if ((($bool431=(($eq217=tp)===($eq218='c')&&$eq217===null?true:
				($eq217===null?false:($eq218===null?false:
					((typeof $eq217=='object'||typeof $eq217=='function')&&typeof $eq217.__cmp__=='function'?$eq217.__cmp__($eq218) === 0:
						((typeof $eq218=='object'||typeof $eq218=='function')&&typeof $eq218.__cmp__=='function'?$eq218.__cmp__($eq217) === 0:
							$eq217==$eq218)))))) === null || $bool431 === false || $bool431 === 0 || $bool431 === '' ?
					false :
					(typeof $bool431=='object'?
						(typeof $bool431.__nonzero__=='function'?
							$bool431.__nonzero__() :
							(typeof $bool431.__len__=='function'?
								($bool431.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool432=!(($eq219=self['_sign'])===($eq220='\x00')&&$eq219===null?true:
					($eq219===null?false:($eq220===null?false:
						((typeof $eq219=='object'||typeof $eq219=='function')&&typeof $eq219.__cmp__=='function'?$eq219.__cmp__($eq220) === 0:
							((typeof $eq220=='object'||typeof $eq220=='function')&&typeof $eq220.__cmp__=='function'?$eq220.__cmp__($eq219) === 0:
								$eq219==$eq220)))))) === null || $bool432 === false || $bool432 === 0 || $bool432 === '' ?
						false :
						(typeof $bool432=='object'?
							(typeof $bool432.__nonzero__=='function'?
								$bool432.__nonzero__() :
								(typeof $bool432.__len__=='function'?
									($bool432.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					msg = "sign not allowed with 'c' presentation type";
					throw ($m['ValueError'](msg));
				}
				value = w_num;
				result = $m['chr'](value);
				n_digits = 1;
				n_remainder = 1;
				to_remainder = 0;
				n_prefix = 0;
				to_prefix = 0;
				to_numeric = 0;
			}
			else {
				if ((($bool433=(($eq221=tp)===($eq222='b')&&$eq221===null?true:
					($eq221===null?false:($eq222===null?false:
						((typeof $eq221=='object'||typeof $eq221=='function')&&typeof $eq221.__cmp__=='function'?$eq221.__cmp__($eq222) === 0:
							((typeof $eq222=='object'||typeof $eq222=='function')&&typeof $eq222.__cmp__=='function'?$eq222.__cmp__($eq221) === 0:
								$eq221==$eq222)))))) === null || $bool433 === false || $bool433 === 0 || $bool433 === '' ?
						false :
						(typeof $bool433=='object'?
							(typeof $bool433.__nonzero__=='function'?
								$bool433.__nonzero__() :
								(typeof $bool433.__len__=='function'?
									($bool433.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					base = 2;
					skip_leading = 2;
				}
				else if ((($bool434=(($eq223=tp)===($eq224='o')&&$eq223===null?true:
					($eq223===null?false:($eq224===null?false:
						((typeof $eq223=='object'||typeof $eq223=='function')&&typeof $eq223.__cmp__=='function'?$eq223.__cmp__($eq224) === 0:
							((typeof $eq224=='object'||typeof $eq224=='function')&&typeof $eq224.__cmp__=='function'?$eq224.__cmp__($eq223) === 0:
								$eq223==$eq224)))))) === null || $bool434 === false || $bool434 === 0 || $bool434 === '' ?
						false :
						(typeof $bool434=='object'?
							(typeof $bool434.__nonzero__=='function'?
								$bool434.__nonzero__() :
								(typeof $bool434.__len__=='function'?
									($bool434.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					base = 8;
					skip_leading = 2;
				}
				else if ((($bool436=((($bool435=$or40=(($eq225=tp)===($eq226='x')&&$eq225===null?true:
					($eq225===null?false:($eq226===null?false:
						((typeof $eq225=='object'||typeof $eq225=='function')&&typeof $eq225.__cmp__=='function'?$eq225.__cmp__($eq226) === 0:
							((typeof $eq226=='object'||typeof $eq226=='function')&&typeof $eq226.__cmp__=='function'?$eq226.__cmp__($eq225) === 0:
								$eq225==$eq226)))))) === null || $bool435 === false || $bool435 === 0 || $bool435 === '' ?
					false :
					(typeof $bool435=='object'?
						(typeof $bool435.__nonzero__=='function'?
							$bool435.__nonzero__() :
							(typeof $bool435.__len__=='function'?
								($bool435.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or40:(($eq227=tp)===($eq228='X')&&$eq227===null?true:
					($eq227===null?false:($eq228===null?false:
						((typeof $eq227=='object'||typeof $eq227=='function')&&typeof $eq227.__cmp__=='function'?$eq227.__cmp__($eq228) === 0:
							((typeof $eq228=='object'||typeof $eq228=='function')&&typeof $eq228.__cmp__=='function'?$eq228.__cmp__($eq227) === 0:
								$eq227==$eq228))))))) === null || $bool436 === false || $bool436 === 0 || $bool436 === '' ?
						false :
						(typeof $bool436=='object'?
							(typeof $bool436.__nonzero__=='function'?
								$bool436.__nonzero__() :
								(typeof $bool436.__len__=='function'?
									($bool436.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					base = 16;
					skip_leading = 2;
				}
				else if ((($bool438=((($bool437=$or42=(($eq229=tp)===($eq230='n')&&$eq229===null?true:
					($eq229===null?false:($eq230===null?false:
						((typeof $eq229=='object'||typeof $eq229=='function')&&typeof $eq229.__cmp__=='function'?$eq229.__cmp__($eq230) === 0:
							((typeof $eq230=='object'||typeof $eq230=='function')&&typeof $eq230.__cmp__=='function'?$eq230.__cmp__($eq229) === 0:
								$eq229==$eq230)))))) === null || $bool437 === false || $bool437 === 0 || $bool437 === '' ?
					false :
					(typeof $bool437=='object'?
						(typeof $bool437.__nonzero__=='function'?
							$bool437.__nonzero__() :
							(typeof $bool437.__len__=='function'?
								($bool437.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or42:(($eq231=tp)===($eq232='d')&&$eq231===null?true:
					($eq231===null?false:($eq232===null?false:
						((typeof $eq231=='object'||typeof $eq231=='function')&&typeof $eq231.__cmp__=='function'?$eq231.__cmp__($eq232) === 0:
							((typeof $eq232=='object'||typeof $eq232=='function')&&typeof $eq232.__cmp__=='function'?$eq232.__cmp__($eq231) === 0:
								$eq231==$eq232))))))) === null || $bool438 === false || $bool438 === 0 || $bool438 === '' ?
						false :
						(typeof $bool438=='object'?
							(typeof $bool438.__nonzero__=='function'?
								$bool438.__nonzero__() :
								(typeof $bool438.__len__=='function'?
									($bool438.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					base = 10;
					skip_leading = 0;
				}
				else {
					throw ($m['AssertionError']("shouldn't reach"));
				}
				if ((($bool439=(($eq233=kind)===($eq234=$m['INT_KIND'])&&$eq233===null?true:
					($eq233===null?false:($eq234===null?false:
						((typeof $eq233=='object'||typeof $eq233=='function')&&typeof $eq233.__cmp__=='function'?$eq233.__cmp__($eq234) === 0:
							((typeof $eq234=='object'||typeof $eq234=='function')&&typeof $eq234.__cmp__=='function'?$eq234.__cmp__($eq233) === 0:
								$eq233==$eq234)))))) === null || $bool439 === false || $bool439 === 0 || $bool439 === '' ?
						false :
						(typeof $bool439=='object'?
							(typeof $bool439.__nonzero__=='function'?
								$bool439.__nonzero__() :
								(typeof $bool439.__len__=='function'?
									($bool439.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					result = self['_int_to_base'](base, w_num);
				}
				else {
					result = self['_int_to_base'](base, w_num);
				}
				n_prefix = ((($bool440=self['_alternate']) === null || $bool440 === false || $bool440 === 0 || $bool440 === '' ?
					false :
					(typeof $bool440=='object'?
						(typeof $bool440.__nonzero__=='function'?
							$bool440.__nonzero__() :
							(typeof $bool440.__len__=='function'?
								($bool440.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (skip_leading) : (0));
				to_prefix = 0;
				if ((($bool441=(($eq235=(typeof ($129=result).__array != 'undefined'?
					((typeof $129.__array[$130=0]) != 'undefined'?$129.__array[$130]:
						$129.__getitem__($130)):
						$129.__getitem__(0)))===($eq236='-')&&$eq235===null?true:
					($eq235===null?false:($eq236===null?false:
						((typeof $eq235=='object'||typeof $eq235=='function')&&typeof $eq235.__cmp__=='function'?$eq235.__cmp__($eq236) === 0:
							((typeof $eq236=='object'||typeof $eq236=='function')&&typeof $eq236.__cmp__=='function'?$eq236.__cmp__($eq235) === 0:
								$eq235==$eq236)))))) === null || $bool441 === false || $bool441 === 0 || $bool441 === '' ?
						false :
						(typeof $bool441=='object'?
							(typeof $bool441.__nonzero__=='function'?
								$bool441.__nonzero__() :
								(typeof $bool441.__len__=='function'?
									($bool441.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					sign_char = '-';
					skip_leading = (typeof ($add161=skip_leading)==typeof ($add162=1) && (typeof $add161=='number'||typeof $add161=='string')?
						$add161+$add162:
						$m['op_add']($add161,$add162));
					to_prefix = (typeof ($add163=to_prefix)==typeof ($add164=1) && (typeof $add163=='number'||typeof $add163=='string')?
						$add163+$add164:
						$m['op_add']($add163,$add164));
				}
				n_digits = (typeof ($sub83=$m['len'](result))==typeof ($sub84=skip_leading) && (typeof $sub83=='number'||typeof $sub83=='string')?
					$sub83-$sub84:
					$m['op_sub']($sub83,$sub84));
				n_remainder = 0;
				to_remainder = 0;
				to_numeric = skip_leading;
			}
			self['_get_locale'](tp);
			spec = self['_calc_num_width'](n_prefix, sign_char, to_numeric, n_digits, n_remainder, false, result);
			fill = ((($bool442=(($eq237=self['_fill_char'])===($eq238='\x00')&&$eq237===null?true:
				($eq237===null?false:($eq238===null?false:
					((typeof $eq237=='object'||typeof $eq237=='function')&&typeof $eq237.__cmp__=='function'?$eq237.__cmp__($eq238) === 0:
						((typeof $eq238=='object'||typeof $eq238=='function')&&typeof $eq238.__cmp__=='function'?$eq238.__cmp__($eq237) === 0:
							$eq237==$eq238)))))) === null || $bool442 === false || $bool442 === 0 || $bool442 === '' ?
				false :
				(typeof $bool442=='object'?
					(typeof $bool442.__nonzero__=='function'?
						$bool442.__nonzero__() :
						(typeof $bool442.__len__=='function'?
							($bool442.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['_lit'](' ')) : (self['_fill_char']));
			upper = (($eq239=self['_type'])===($eq240='X')&&$eq239===null?true:
				($eq239===null?false:($eq240===null?false:
					((typeof $eq239=='object'||typeof $eq239=='function')&&typeof $eq239.__cmp__=='function'?$eq239.__cmp__($eq240) === 0:
						((typeof $eq240=='object'||typeof $eq240=='function')&&typeof $eq240.__cmp__=='function'?$eq240.__cmp__($eq239) === 0:
							$eq239==$eq240)))));
			return self['_fill_number'](spec, result, to_numeric, to_prefix, fill, to_remainder, upper);
		}
	, 1, [null,null,['self'],['w_num'],['kind']]);
		$cls_definition['_format_int_or_long'] = $method;
		$method = $pyjs__bind_method2('_int_to_base', function(base, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				base = arguments[1];
				value = arguments[2];
			}
			var $cmp120,$sub95,$cmp122,$add170,$add171,$mod6,$sub94,$eq244,$mod5,$sub85,$sub86,$sub87,$sub104,$sub105,$sub106,$sub107,$sub108,$cmp115,$eq248,$sub88,$sub89,$cmp121,$eq245,$floordiv6,$cmp116,negative,$cmp119,$bool447,$bool452,$bool451,$bool450,$add172,$eq246,$eq247,digit,$add168,$eq242,$eq243,$cmp117,$eq241,$sub99,$cmp118,$add167,$add166,$add165,$sub93,$sub92,$sub91,$sub97,$sub96,$mul9,$mul8,$mul7,$mul6,$mul5,$sub98,buf,mod,$sub100,$add169,$sub103,$mul10,i,$floordiv5,$sub101,$sub102,$bool444,$bool445,$bool446,$floordiv4,$floordiv3,$sub90,$bool443,div,$bool448,$bool449;
			if ((($bool443=(($eq241=base)===($eq242=10)&&$eq241===null?true:
				($eq241===null?false:($eq242===null?false:
					((typeof $eq241=='object'||typeof $eq241=='function')&&typeof $eq241.__cmp__=='function'?$eq241.__cmp__($eq242) === 0:
						((typeof $eq242=='object'||typeof $eq242=='function')&&typeof $eq242.__cmp__=='function'?$eq242.__cmp__($eq241) === 0:
							$eq241==$eq242)))))) === null || $bool443 === false || $bool443 === 0 || $bool443 === '' ?
					false :
					(typeof $bool443=='object'?
						(typeof $bool443.__nonzero__=='function'?
							$bool443.__nonzero__() :
							(typeof $bool443.__len__=='function'?
								($bool443.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['str'](value);
			}
			negative = ((($cmp115=value)===($cmp116=0)?0:
				(typeof $cmp115==typeof $cmp116 && ((typeof $cmp115 == 'number')||(typeof $cmp115 == 'string')||(typeof $cmp115 == 'boolean'))?
					($cmp115 == $cmp116 ? 0 : ($cmp115 < $cmp116 ? -1 : 1)):
					$m['cmp']($cmp115, $cmp116))) == -1);
			value = $p['abs'](value);
			buf = (typeof ($mul7=$p['list'](['\x00']))==typeof ($mul8=(typeof ($add165=(typeof ($mul5=8)==typeof ($mul6=8) && typeof $mul5=='number'?
				$mul5*$mul6:
				$m['op_mul']($mul5,$mul6)))==typeof ($add166=6) && (typeof $add165=='number'||typeof $add165=='string')?
				$add165+$add166:
				$m['op_add']($add165,$add166))) && typeof $mul7=='number'?
				$mul7*$mul8:
				$m['op_mul']($mul7,$mul8));
			i = (typeof ($sub85=$m['len'](buf))==typeof ($sub86=1) && (typeof $sub85=='number'||typeof $sub85=='string')?
				$sub85-$sub86:
				$m['op_sub']($sub85,$sub86));
			while ((($bool444=true) === null || $bool444 === false || $bool444 === 0 || $bool444 === '' ?
					false :
					(typeof $bool444=='object'?
						(typeof $bool444.__nonzero__=='function'?
							$bool444.__nonzero__() :
							(typeof $bool444.__len__=='function'?
								($bool444.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				div = (typeof ($floordiv3=value)==typeof ($floordiv4=base) && typeof $floordiv3=='number' && $floordiv4 !== 0?
					Math.floor($floordiv3/$floordiv4):
					$m['op_floordiv']($floordiv3,$floordiv4));
				mod = (typeof ($sub87=value)==typeof ($sub88=(typeof ($mul9=div)==typeof ($mul10=base) && typeof $mul9=='number'?
					$mul9*$mul10:
					$m['op_mul']($mul9,$mul10))) && (typeof $sub87=='number'||typeof $sub87=='string')?
					$sub87-$sub88:
					$m['op_sub']($sub87,$sub88));
				digit = $p['abs'](mod);
				digit = (typeof ($add167=digit)==typeof ($add168=((($bool445=((($cmp117=digit)===($cmp118=10)?0:
					(typeof $cmp117==typeof $cmp118 && ((typeof $cmp117 == 'number')||(typeof $cmp117 == 'string')||(typeof $cmp117 == 'boolean'))?
						($cmp117 == $cmp118 ? 0 : ($cmp117 < $cmp118 ? -1 : 1)):
						$m['cmp']($cmp117, $cmp118))) == -1)) === null || $bool445 === false || $bool445 === 0 || $bool445 === '' ?
					false :
					(typeof $bool445=='object'?
						(typeof $bool445.__nonzero__=='function'?
							$bool445.__nonzero__() :
							(typeof $bool445.__len__=='function'?
								($bool445.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ($m['ord']('0')) : ((typeof ($sub89=$m['ord']('a'))==typeof ($sub90=10) && (typeof $sub89=='number'||typeof $sub89=='string')?
					$sub89-$sub90:
					$m['op_sub']($sub89,$sub90))))) && (typeof $add167=='number'||typeof $add167=='string')?
					$add167+$add168:
					$m['op_add']($add167,$add168));
				buf.__setitem__(i, $m['chr'](digit));
				value = div;
				i = (typeof ($sub91=i)==typeof ($sub92=1) && (typeof $sub91=='number'||typeof $sub91=='string')?
					$sub91-$sub92:
					$m['op_sub']($sub91,$sub92));
				if ((($bool447=!(($bool446=value) === null || $bool446 === false || $bool446 === 0 || $bool446 === '' ?
					false :
					(typeof $bool446=='object'?
						(typeof $bool446.__nonzero__=='function'?
							$bool446.__nonzero__() :
							(typeof $bool446.__len__=='function'?
								($bool446.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool447 === false || $bool447 === 0 || $bool447 === '' ?
						false :
						(typeof $bool447=='object'?
							(typeof $bool447.__nonzero__=='function'?
								$bool447.__nonzero__() :
								(typeof $bool447.__len__=='function'?
									($bool447.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					break;
				}
			}
			if ((($bool448=(($eq243=base)===($eq244=2)&&$eq243===null?true:
				($eq243===null?false:($eq244===null?false:
					((typeof $eq243=='object'||typeof $eq243=='function')&&typeof $eq243.__cmp__=='function'?$eq243.__cmp__($eq244) === 0:
						((typeof $eq244=='object'||typeof $eq244=='function')&&typeof $eq244.__cmp__=='function'?$eq244.__cmp__($eq243) === 0:
							$eq243==$eq244)))))) === null || $bool448 === false || $bool448 === 0 || $bool448 === '' ?
					false :
					(typeof $bool448=='object'?
						(typeof $bool448.__nonzero__=='function'?
							$bool448.__nonzero__() :
							(typeof $bool448.__len__=='function'?
								($bool448.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				buf.__setitem__(i, 'b');
				buf.__setitem__((typeof ($sub93=i)==typeof ($sub94=1) && (typeof $sub93=='number'||typeof $sub93=='string')?
					$sub93-$sub94:
					$m['op_sub']($sub93,$sub94)), '0');
			}
			else if ((($bool449=(($eq245=base)===($eq246=8)&&$eq245===null?true:
				($eq245===null?false:($eq246===null?false:
					((typeof $eq245=='object'||typeof $eq245=='function')&&typeof $eq245.__cmp__=='function'?$eq245.__cmp__($eq246) === 0:
						((typeof $eq246=='object'||typeof $eq246=='function')&&typeof $eq246.__cmp__=='function'?$eq246.__cmp__($eq245) === 0:
							$eq245==$eq246)))))) === null || $bool449 === false || $bool449 === 0 || $bool449 === '' ?
					false :
					(typeof $bool449=='object'?
						(typeof $bool449.__nonzero__=='function'?
							$bool449.__nonzero__() :
							(typeof $bool449.__len__=='function'?
								($bool449.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				buf.__setitem__(i, 'o');
				buf.__setitem__((typeof ($sub95=i)==typeof ($sub96=1) && (typeof $sub95=='number'||typeof $sub95=='string')?
					$sub95-$sub96:
					$m['op_sub']($sub95,$sub96)), '0');
			}
			else if ((($bool450=(($eq247=base)===($eq248=16)&&$eq247===null?true:
				($eq247===null?false:($eq248===null?false:
					((typeof $eq247=='object'||typeof $eq247=='function')&&typeof $eq247.__cmp__=='function'?$eq247.__cmp__($eq248) === 0:
						((typeof $eq248=='object'||typeof $eq248=='function')&&typeof $eq248.__cmp__=='function'?$eq248.__cmp__($eq247) === 0:
							$eq247==$eq248)))))) === null || $bool450 === false || $bool450 === 0 || $bool450 === '' ?
					false :
					(typeof $bool450=='object'?
						(typeof $bool450.__nonzero__=='function'?
							$bool450.__nonzero__() :
							(typeof $bool450.__len__=='function'?
								($bool450.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				buf.__setitem__(i, 'x');
				buf.__setitem__((typeof ($sub97=i)==typeof ($sub98=1) && (typeof $sub97=='number'||typeof $sub97=='string')?
					$sub97-$sub98:
					$m['op_sub']($sub97,$sub98)), '0');
			}
			else {
				buf.__setitem__(i, '#');
				buf.__setitem__((typeof ($sub99=i)==typeof ($sub100=1) && (typeof $sub99=='number'||typeof $sub99=='string')?
					$sub99-$sub100:
					$m['op_sub']($sub99,$sub100)), $m['chr']((typeof ($add169=$m['ord']('0'))==typeof ($add170=(typeof ($mod5=base)==typeof ($mod6=10) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$m['op_mod']($mod5,$mod6))) && (typeof $add169=='number'||typeof $add169=='string')?
					$add169+$add170:
					$m['op_add']($add169,$add170))));
				if ((($bool451=((($cmp119=base)===($cmp120=10)?0:
					(typeof $cmp119==typeof $cmp120 && ((typeof $cmp119 == 'number')||(typeof $cmp119 == 'string')||(typeof $cmp119 == 'boolean'))?
						($cmp119 == $cmp120 ? 0 : ($cmp119 < $cmp120 ? -1 : 1)):
						$m['cmp']($cmp119, $cmp120))) == 1)) === null || $bool451 === false || $bool451 === 0 || $bool451 === '' ?
						false :
						(typeof $bool451=='object'?
							(typeof $bool451.__nonzero__=='function'?
								$bool451.__nonzero__() :
								(typeof $bool451.__len__=='function'?
									($bool451.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					buf.__setitem__((typeof ($sub101=i)==typeof ($sub102=2) && (typeof $sub101=='number'||typeof $sub101=='string')?
						$sub101-$sub102:
						$m['op_sub']($sub101,$sub102)), $m['chr']((typeof ($add171=$m['ord']('0'))==typeof ($add172=(typeof ($floordiv5=base)==typeof ($floordiv6=10) && typeof $floordiv5=='number' && $floordiv6 !== 0?
						Math.floor($floordiv5/$floordiv6):
						$m['op_floordiv']($floordiv5,$floordiv6))) && (typeof $add171=='number'||typeof $add171=='string')?
						$add171+$add172:
						$m['op_add']($add171,$add172))));
					i = (typeof ($sub103=i)==typeof ($sub104=1) && (typeof $sub103=='number'||typeof $sub103=='string')?
						$sub103-$sub104:
						$m['op_sub']($sub103,$sub104));
				}
			}
			i = (typeof ($sub105=i)==typeof ($sub106=1) && (typeof $sub105=='number'||typeof $sub105=='string')?
				$sub105-$sub106:
				$m['op_sub']($sub105,$sub106));
			if ((($bool452=negative) === null || $bool452 === false || $bool452 === 0 || $bool452 === '' ?
					false :
					(typeof $bool452=='object'?
						(typeof $bool452.__nonzero__=='function'?
							$bool452.__nonzero__() :
							(typeof $bool452.__len__=='function'?
								($bool452.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				i = (typeof ($sub107=i)==typeof ($sub108=1) && (typeof $sub107=='number'||typeof $sub107=='string')?
					$sub107-$sub108:
					$m['op_sub']($sub107,$sub108));
				buf.__setitem__(i, '-');
			}
			if (!( ((((($cmp121=i)===($cmp122=0)?0:
				(typeof $cmp121==typeof $cmp122 && ((typeof $cmp121 == 'number')||(typeof $cmp121 == 'string')||(typeof $cmp121 == 'boolean'))?
					($cmp121 == $cmp122 ? 0 : ($cmp121 < $cmp122 ? -1 : 1)):
					$m['cmp']($cmp121, $cmp122))))|1) == 1) )) {
			   throw $m['AssertionError']();
			 }
			return self['empty']['join']($p['__getslice'](buf, i, null));
		}
	, 1, [null,null,['self'],['base'],['value']]);
		$cls_definition['_int_to_base'] = $method;
		$method = $pyjs__bind_method2('format_int_or_long', function(w_num, kind) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_num = arguments[1];
				kind = arguments[2];
			}
			var $eq255,$eq254,$eq257,$eq256,$eq251,$eq250,$eq253,$eq252,$eq272,$eq276,$eq275,$eq274,$eq259,$eq258,$eq271,$eq270,$bool467,w_float,$eq278,$or48,tp,$bool457,$bool456,$bool455,$bool454,$bool453,$or49,$or46,$or47,$or44,$or45,$eq260,$eq261,$eq262,$eq263,$eq264,$eq265,$eq266,$eq267,$eq268,$eq269,$attr362,$bool468,$attr361,$eq249,$or52,$bool462,$bool463,$bool460,$bool461,$bool466,$or57,$bool464,$bool465,$eq277,$bool459,$or51,$or50,$or53,$bool458,$or55,$or54,$eq273,$or56;
			if ((($bool453=self['_parse_spec']('d', '>')) === null || $bool453 === false || $bool453 === 0 || $bool453 === '' ?
					false :
					(typeof $bool453=='object'?
						(typeof $bool453.__nonzero__=='function'?
							$bool453.__nonzero__() :
							(typeof $bool453.__len__=='function'?
								($bool453.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['space']['str'](w_num);
			}
			tp = self['_type'];
			if ((($bool460=((($bool454=$or44=(($eq249=tp)===($eq250='b')&&$eq249===null?true:
				($eq249===null?false:($eq250===null?false:
					((typeof $eq249=='object'||typeof $eq249=='function')&&typeof $eq249.__cmp__=='function'?$eq249.__cmp__($eq250) === 0:
						((typeof $eq250=='object'||typeof $eq250=='function')&&typeof $eq250.__cmp__=='function'?$eq250.__cmp__($eq249) === 0:
							$eq249==$eq250)))))) === null || $bool454 === false || $bool454 === 0 || $bool454 === '' ?
				false :
				(typeof $bool454=='object'?
					(typeof $bool454.__nonzero__=='function'?
						$bool454.__nonzero__() :
						(typeof $bool454.__len__=='function'?
							($bool454.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or44:((($bool455=$or45=(($eq251=tp)===($eq252='c')&&$eq251===null?true:
				($eq251===null?false:($eq252===null?false:
					((typeof $eq251=='object'||typeof $eq251=='function')&&typeof $eq251.__cmp__=='function'?$eq251.__cmp__($eq252) === 0:
						((typeof $eq252=='object'||typeof $eq252=='function')&&typeof $eq252.__cmp__=='function'?$eq252.__cmp__($eq251) === 0:
							$eq251==$eq252)))))) === null || $bool455 === false || $bool455 === 0 || $bool455 === '' ?
				false :
				(typeof $bool455=='object'?
					(typeof $bool455.__nonzero__=='function'?
						$bool455.__nonzero__() :
						(typeof $bool455.__len__=='function'?
							($bool455.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or45:((($bool456=$or46=(($eq253=tp)===($eq254='d')&&$eq253===null?true:
				($eq253===null?false:($eq254===null?false:
					((typeof $eq253=='object'||typeof $eq253=='function')&&typeof $eq253.__cmp__=='function'?$eq253.__cmp__($eq254) === 0:
						((typeof $eq254=='object'||typeof $eq254=='function')&&typeof $eq254.__cmp__=='function'?$eq254.__cmp__($eq253) === 0:
							$eq253==$eq254)))))) === null || $bool456 === false || $bool456 === 0 || $bool456 === '' ?
				false :
				(typeof $bool456=='object'?
					(typeof $bool456.__nonzero__=='function'?
						$bool456.__nonzero__() :
						(typeof $bool456.__len__=='function'?
							($bool456.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or46:((($bool457=$or47=(($eq255=tp)===($eq256='o')&&$eq255===null?true:
				($eq255===null?false:($eq256===null?false:
					((typeof $eq255=='object'||typeof $eq255=='function')&&typeof $eq255.__cmp__=='function'?$eq255.__cmp__($eq256) === 0:
						((typeof $eq256=='object'||typeof $eq256=='function')&&typeof $eq256.__cmp__=='function'?$eq256.__cmp__($eq255) === 0:
							$eq255==$eq256)))))) === null || $bool457 === false || $bool457 === 0 || $bool457 === '' ?
				false :
				(typeof $bool457=='object'?
					(typeof $bool457.__nonzero__=='function'?
						$bool457.__nonzero__() :
						(typeof $bool457.__len__=='function'?
							($bool457.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or47:((($bool458=$or48=(($eq257=tp)===($eq258='x')&&$eq257===null?true:
				($eq257===null?false:($eq258===null?false:
					((typeof $eq257=='object'||typeof $eq257=='function')&&typeof $eq257.__cmp__=='function'?$eq257.__cmp__($eq258) === 0:
						((typeof $eq258=='object'||typeof $eq258=='function')&&typeof $eq258.__cmp__=='function'?$eq258.__cmp__($eq257) === 0:
							$eq257==$eq258)))))) === null || $bool458 === false || $bool458 === 0 || $bool458 === '' ?
				false :
				(typeof $bool458=='object'?
					(typeof $bool458.__nonzero__=='function'?
						$bool458.__nonzero__() :
						(typeof $bool458.__len__=='function'?
							($bool458.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or48:((($bool459=$or49=(($eq259=tp)===($eq260='X')&&$eq259===null?true:
				($eq259===null?false:($eq260===null?false:
					((typeof $eq259=='object'||typeof $eq259=='function')&&typeof $eq259.__cmp__=='function'?$eq259.__cmp__($eq260) === 0:
						((typeof $eq260=='object'||typeof $eq260=='function')&&typeof $eq260.__cmp__=='function'?$eq260.__cmp__($eq259) === 0:
							$eq259==$eq260)))))) === null || $bool459 === false || $bool459 === 0 || $bool459 === '' ?
				false :
				(typeof $bool459=='object'?
					(typeof $bool459.__nonzero__=='function'?
						$bool459.__nonzero__() :
						(typeof $bool459.__len__=='function'?
							($bool459.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or49:(($eq261=tp)===($eq262='n')&&$eq261===null?true:
				($eq261===null?false:($eq262===null?false:
					((typeof $eq261=='object'||typeof $eq261=='function')&&typeof $eq261.__cmp__=='function'?$eq261.__cmp__($eq262) === 0:
						((typeof $eq262=='object'||typeof $eq262=='function')&&typeof $eq262.__cmp__=='function'?$eq262.__cmp__($eq261) === 0:
							$eq261==$eq262)))))))))))) === null || $bool460 === false || $bool460 === 0 || $bool460 === '' ?
					false :
					(typeof $bool460=='object'?
						(typeof $bool460.__nonzero__=='function'?
							$bool460.__nonzero__() :
							(typeof $bool460.__len__=='function'?
								($bool460.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['_format_int_or_long'](w_num, kind);
			}
			else if ((($bool467=((($bool461=$or51=(($eq263=tp)===($eq264='e')&&$eq263===null?true:
				($eq263===null?false:($eq264===null?false:
					((typeof $eq263=='object'||typeof $eq263=='function')&&typeof $eq263.__cmp__=='function'?$eq263.__cmp__($eq264) === 0:
						((typeof $eq264=='object'||typeof $eq264=='function')&&typeof $eq264.__cmp__=='function'?$eq264.__cmp__($eq263) === 0:
							$eq263==$eq264)))))) === null || $bool461 === false || $bool461 === 0 || $bool461 === '' ?
				false :
				(typeof $bool461=='object'?
					(typeof $bool461.__nonzero__=='function'?
						$bool461.__nonzero__() :
						(typeof $bool461.__len__=='function'?
							($bool461.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or51:((($bool462=$or52=(($eq265=tp)===($eq266='E')&&$eq265===null?true:
				($eq265===null?false:($eq266===null?false:
					((typeof $eq265=='object'||typeof $eq265=='function')&&typeof $eq265.__cmp__=='function'?$eq265.__cmp__($eq266) === 0:
						((typeof $eq266=='object'||typeof $eq266=='function')&&typeof $eq266.__cmp__=='function'?$eq266.__cmp__($eq265) === 0:
							$eq265==$eq266)))))) === null || $bool462 === false || $bool462 === 0 || $bool462 === '' ?
				false :
				(typeof $bool462=='object'?
					(typeof $bool462.__nonzero__=='function'?
						$bool462.__nonzero__() :
						(typeof $bool462.__len__=='function'?
							($bool462.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or52:((($bool463=$or53=(($eq267=tp)===($eq268='f')&&$eq267===null?true:
				($eq267===null?false:($eq268===null?false:
					((typeof $eq267=='object'||typeof $eq267=='function')&&typeof $eq267.__cmp__=='function'?$eq267.__cmp__($eq268) === 0:
						((typeof $eq268=='object'||typeof $eq268=='function')&&typeof $eq268.__cmp__=='function'?$eq268.__cmp__($eq267) === 0:
							$eq267==$eq268)))))) === null || $bool463 === false || $bool463 === 0 || $bool463 === '' ?
				false :
				(typeof $bool463=='object'?
					(typeof $bool463.__nonzero__=='function'?
						$bool463.__nonzero__() :
						(typeof $bool463.__len__=='function'?
							($bool463.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or53:((($bool464=$or54=(($eq269=tp)===($eq270='F')&&$eq269===null?true:
				($eq269===null?false:($eq270===null?false:
					((typeof $eq269=='object'||typeof $eq269=='function')&&typeof $eq269.__cmp__=='function'?$eq269.__cmp__($eq270) === 0:
						((typeof $eq270=='object'||typeof $eq270=='function')&&typeof $eq270.__cmp__=='function'?$eq270.__cmp__($eq269) === 0:
							$eq269==$eq270)))))) === null || $bool464 === false || $bool464 === 0 || $bool464 === '' ?
				false :
				(typeof $bool464=='object'?
					(typeof $bool464.__nonzero__=='function'?
						$bool464.__nonzero__() :
						(typeof $bool464.__len__=='function'?
							($bool464.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or54:((($bool465=$or55=(($eq271=tp)===($eq272='g')&&$eq271===null?true:
				($eq271===null?false:($eq272===null?false:
					((typeof $eq271=='object'||typeof $eq271=='function')&&typeof $eq271.__cmp__=='function'?$eq271.__cmp__($eq272) === 0:
						((typeof $eq272=='object'||typeof $eq272=='function')&&typeof $eq272.__cmp__=='function'?$eq272.__cmp__($eq271) === 0:
							$eq271==$eq272)))))) === null || $bool465 === false || $bool465 === 0 || $bool465 === '' ?
				false :
				(typeof $bool465=='object'?
					(typeof $bool465.__nonzero__=='function'?
						$bool465.__nonzero__() :
						(typeof $bool465.__len__=='function'?
							($bool465.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or55:((($bool466=$or56=(($eq273=tp)===($eq274='G')&&$eq273===null?true:
				($eq273===null?false:($eq274===null?false:
					((typeof $eq273=='object'||typeof $eq273=='function')&&typeof $eq273.__cmp__=='function'?$eq273.__cmp__($eq274) === 0:
						((typeof $eq274=='object'||typeof $eq274=='function')&&typeof $eq274.__cmp__=='function'?$eq274.__cmp__($eq273) === 0:
							$eq273==$eq274)))))) === null || $bool466 === false || $bool466 === 0 || $bool466 === '' ?
				false :
				(typeof $bool466=='object'?
					(typeof $bool466.__nonzero__=='function'?
						$bool466.__nonzero__() :
						(typeof $bool466.__len__=='function'?
							($bool466.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or56:(($eq275=tp)===($eq276='%')&&$eq275===null?true:
				($eq275===null?false:($eq276===null?false:
					((typeof $eq275=='object'||typeof $eq275=='function')&&typeof $eq275.__cmp__=='function'?$eq275.__cmp__($eq276) === 0:
						((typeof $eq276=='object'||typeof $eq276=='function')&&typeof $eq276.__cmp__=='function'?$eq276.__cmp__($eq275) === 0:
							$eq275==$eq276)))))))))))) === null || $bool467 === false || $bool467 === 0 || $bool467 === '' ?
					false :
					(typeof $bool467=='object'?
						(typeof $bool467.__nonzero__=='function'?
							$bool467.__nonzero__() :
							(typeof $bool467.__len__=='function'?
								($bool467.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				w_float = $m['float'](w_num);
				return self['_format_float'](w_float);
			}
			else {
				self['_unknown_presentation'](((($bool468=(($eq277=kind)===($eq278=$m['INT_KIND'])&&$eq277===null?true:
					($eq277===null?false:($eq278===null?false:
						((typeof $eq277=='object'||typeof $eq277=='function')&&typeof $eq277.__cmp__=='function'?$eq277.__cmp__($eq278) === 0:
							((typeof $eq278=='object'||typeof $eq278=='function')&&typeof $eq278.__cmp__=='function'?$eq278.__cmp__($eq277) === 0:
								$eq277==$eq278)))))) === null || $bool468 === false || $bool468 === 0 || $bool468 === '' ?
					false :
					(typeof $bool468=='object'?
						(typeof $bool468.__nonzero__=='function'?
							$bool468.__nonzero__() :
							(typeof $bool468.__len__=='function'?
								($bool468.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? ('int') : ('long')));
			}
			return null;
		}
	, 1, [null,null,['self'],['w_num'],['kind']]);
		$cls_definition['format_int_or_long'] = $method;
		$method = $pyjs__bind_method2('_parse_number', function(s, i) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
				i = arguments[2];
			}
			var $cmp124,$cmp125,$cmp126,$cmp127,$eq279,$cmp123,$add173,$add174,$cmp129,rest,$131,$132,$133,$134,$eq280,$bool471,$bool470,$bool472,length,$cmp130,$cmp128,$add175,dec_point,$add176,$bool469,$and58,$and57,$and55,$and56;
			length = $m['len'](s);
			while ((($bool470=((($bool469=$and55=((($cmp123=i)===($cmp124=length)?0:
				(typeof $cmp123==typeof $cmp124 && ((typeof $cmp123 == 'number')||(typeof $cmp123 == 'string')||(typeof $cmp123 == 'boolean'))?
					($cmp123 == $cmp124 ? 0 : ($cmp123 < $cmp124 ? -1 : 1)):
					$m['cmp']($cmp123, $cmp124))) == -1)) === null || $bool469 === false || $bool469 === 0 || $bool469 === '' ?
				false :
				(typeof $bool469=='object'?
					(typeof $bool469.__nonzero__=='function'?
						$bool469.__nonzero__() :
						(typeof $bool469.__len__=='function'?
							($bool469.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(((($cmp125='0')===($cmp126=($compare5 = (typeof ($131=s).__array != 'undefined'?
				((typeof $131.__array[$132=i]) != 'undefined'?$131.__array[$132]:
					$131.__getitem__($132)):
					$131.__getitem__(i))))?0:
				(typeof $cmp125==typeof $cmp126 && ((typeof $cmp125 == 'number')||(typeof $cmp125 == 'string')||(typeof $cmp125 == 'boolean'))?
					($cmp125 == $cmp126 ? 0 : ($cmp125 < $cmp126 ? -1 : 1)):
					$m['cmp']($cmp125, $cmp126))) < 1)&&((($cmp127=$compare5)===($cmp128=($compare6 = '9'))?0:
				(typeof $cmp127==typeof $cmp128 && ((typeof $cmp127 == 'number')||(typeof $cmp127 == 'string')||(typeof $cmp127 == 'boolean'))?
					($cmp127 == $cmp128 ? 0 : ($cmp127 < $cmp128 ? -1 : 1)):
					$m['cmp']($cmp127, $cmp128))) < 1)):$and55)) === null || $bool470 === false || $bool470 === 0 || $bool470 === '' ?
					false :
					(typeof $bool470=='object'?
						(typeof $bool470.__nonzero__=='function'?
							$bool470.__nonzero__() :
							(typeof $bool470.__len__=='function'?
								($bool470.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				i = (typeof ($add173=i)==typeof ($add174=1) && (typeof $add173=='number'||typeof $add173=='string')?
					$add173+$add174:
					$m['op_add']($add173,$add174));
			}
			rest = i;
			dec_point = ((($bool471=$and57=((($cmp129=i)===($cmp130=length)?0:
				(typeof $cmp129==typeof $cmp130 && ((typeof $cmp129 == 'number')||(typeof $cmp129 == 'string')||(typeof $cmp129 == 'boolean'))?
					($cmp129 == $cmp130 ? 0 : ($cmp129 < $cmp130 ? -1 : 1)):
					$m['cmp']($cmp129, $cmp130))) == -1)) === null || $bool471 === false || $bool471 === 0 || $bool471 === '' ?
				false :
				(typeof $bool471=='object'?
					(typeof $bool471.__nonzero__=='function'?
						$bool471.__nonzero__() :
						(typeof $bool471.__len__=='function'?
							($bool471.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq279=(typeof ($133=s).__array != 'undefined'?
				((typeof $133.__array[$134=i]) != 'undefined'?$133.__array[$134]:
					$133.__getitem__($134)):
					$133.__getitem__(i)))===($eq280='.')&&$eq279===null?true:
				($eq279===null?false:($eq280===null?false:
					((typeof $eq279=='object'||typeof $eq279=='function')&&typeof $eq279.__cmp__=='function'?$eq279.__cmp__($eq280) === 0:
						((typeof $eq280=='object'||typeof $eq280=='function')&&typeof $eq280.__cmp__=='function'?$eq280.__cmp__($eq279) === 0:
							$eq279==$eq280))))):$and57);
			if ((($bool472=dec_point) === null || $bool472 === false || $bool472 === 0 || $bool472 === '' ?
					false :
					(typeof $bool472=='object'?
						(typeof $bool472.__nonzero__=='function'?
							$bool472.__nonzero__() :
							(typeof $bool472.__len__=='function'?
								($bool472.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				rest = (typeof ($add175=rest)==typeof ($add176=1) && (typeof $add175=='number'||typeof $add175=='string')?
					$add175+$add176:
					$m['op_add']($add175,$add176));
			}
			return $p['tuple']([dec_point, rest]);
		}
	, 1, [null,null,['self'],['s'],['i']]);
		$cls_definition['_parse_number'] = $method;
		$method = $pyjs__bind_method2('_format_float', function(w_float) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_float = arguments[1];
			}
			var $add178,$attr370,$attr373,$eq289,n_remainder,$bool477,sign,$bool478,$add177,n_digits,tp,$sub109,$135,$136,$attr374,$eq282,$eq283,$eq281,$eq286,add_pct,$eq284,$eq285,$bool475,$bool474,$bool476,to_number,$bool473,default_precision,$attr372,msg,have_dec_point,fill,spec,$eq291,$attr368,$attr369,$attr366,$attr367,$attr364,$attr365,$attr363,$sub112,$sub111,$sub110,$bool480,$bool479,$eq287,digits,$eq290,$eq292,$mul12,$mul11,value,to_remainder,flags,$attr371,$eq288,result;
			flags = 0;
			default_precision = 6;
			if ((($bool473=self['_alternate']) === null || $bool473 === false || $bool473 === 0 || $bool473 === '' ?
					false :
					(typeof $bool473=='object'?
						(typeof $bool473.__nonzero__=='function'?
							$bool473.__nonzero__() :
							(typeof $bool473.__len__=='function'?
								($bool473.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				msg = 'alternate form not allowed in float formats';
				throw ($m['ValueError'](msg));
			}
			tp = self['_type'];
			self['_get_locale'](tp);
			if ((($bool474=(($eq281=tp)===($eq282='\x00')&&$eq281===null?true:
				($eq281===null?false:($eq282===null?false:
					((typeof $eq281=='object'||typeof $eq281=='function')&&typeof $eq281.__cmp__=='function'?$eq281.__cmp__($eq282) === 0:
						((typeof $eq282=='object'||typeof $eq282=='function')&&typeof $eq282.__cmp__=='function'?$eq282.__cmp__($eq281) === 0:
							$eq281==$eq282)))))) === null || $bool474 === false || $bool474 === 0 || $bool474 === '' ?
					false :
					(typeof $bool474=='object'?
						(typeof $bool474.__nonzero__=='function'?
							$bool474.__nonzero__() :
							(typeof $bool474.__len__=='function'?
								($bool474.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				tp = 'g';
				default_precision = 12;
				flags |= (typeof DTSF_ADD_DOT_0 == "undefined"?$m.DTSF_ADD_DOT_0:DTSF_ADD_DOT_0);
			}
			else if ((($bool475=(($eq283=tp)===($eq284='n')&&$eq283===null?true:
				($eq283===null?false:($eq284===null?false:
					((typeof $eq283=='object'||typeof $eq283=='function')&&typeof $eq283.__cmp__=='function'?$eq283.__cmp__($eq284) === 0:
						((typeof $eq284=='object'||typeof $eq284=='function')&&typeof $eq284.__cmp__=='function'?$eq284.__cmp__($eq283) === 0:
							$eq283==$eq284)))))) === null || $bool475 === false || $bool475 === 0 || $bool475 === '' ?
					false :
					(typeof $bool475=='object'?
						(typeof $bool475.__nonzero__=='function'?
							$bool475.__nonzero__() :
							(typeof $bool475.__len__=='function'?
								($bool475.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				tp = 'g';
			}
			value = $m['float'](w_float);
			if ((($bool476=(($eq285=tp)===($eq286='%')&&$eq285===null?true:
				($eq285===null?false:($eq286===null?false:
					((typeof $eq285=='object'||typeof $eq285=='function')&&typeof $eq285.__cmp__=='function'?$eq285.__cmp__($eq286) === 0:
						((typeof $eq286=='object'||typeof $eq286=='function')&&typeof $eq286.__cmp__=='function'?$eq286.__cmp__($eq285) === 0:
							$eq285==$eq286)))))) === null || $bool476 === false || $bool476 === 0 || $bool476 === '' ?
					false :
					(typeof $bool476=='object'?
						(typeof $bool476.__nonzero__=='function'?
							$bool476.__nonzero__() :
							(typeof $bool476.__len__=='function'?
								($bool476.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				tp = 'f';
				value = (typeof ($mul11=value)==typeof ($mul12=100) && typeof $mul11=='number'?
					$mul11*$mul12:
					$m['op_mul']($mul11,$mul12));
				add_pct = true;
			}
			else {
				add_pct = false;
			}
			if ((($bool477=(($eq287=self['_precision'])===($eq288=(typeof ($usub24=1)=='number'?
				-$usub24:
				$m['op_usub']($usub24)))&&$eq287===null?true:
				($eq287===null?false:($eq288===null?false:
					((typeof $eq287=='object'||typeof $eq287=='function')&&typeof $eq287.__cmp__=='function'?$eq287.__cmp__($eq288) === 0:
						((typeof $eq288=='object'||typeof $eq288=='function')&&typeof $eq288.__cmp__=='function'?$eq288.__cmp__($eq287) === 0:
							$eq287==$eq288)))))) === null || $bool477 === false || $bool477 === 0 || $bool477 === '' ?
					false :
					(typeof $bool477=='object'?
						(typeof $bool477.__nonzero__=='function'?
							$bool477.__nonzero__() :
							(typeof $bool477.__len__=='function'?
								($bool477.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self._precision = default_precision;
			}
			result = (typeof formatd == "undefined"?$m.formatd:formatd)(value, tp, self['_precision'], flags);
			if ((($bool478=add_pct) === null || $bool478 === false || $bool478 === 0 || $bool478 === '' ?
					false :
					(typeof $bool478=='object'?
						(typeof $bool478.__nonzero__=='function'?
							$bool478.__nonzero__() :
							(typeof $bool478.__len__=='function'?
								($bool478.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				result = (typeof ($add177=result)==typeof ($add178='%') && (typeof $add177=='number'||typeof $add177=='string')?
					$add177+$add178:
					$m['op_add']($add177,$add178));
			}
			n_digits = $m['len'](result);
			if ((($bool479=(($eq289=(typeof ($135=result).__array != 'undefined'?
				((typeof $135.__array[$136=0]) != 'undefined'?$135.__array[$136]:
					$135.__getitem__($136)):
					$135.__getitem__(0)))===($eq290='-')&&$eq289===null?true:
				($eq289===null?false:($eq290===null?false:
					((typeof $eq289=='object'||typeof $eq289=='function')&&typeof $eq289.__cmp__=='function'?$eq289.__cmp__($eq290) === 0:
						((typeof $eq290=='object'||typeof $eq290=='function')&&typeof $eq290.__cmp__=='function'?$eq290.__cmp__($eq289) === 0:
							$eq289==$eq290)))))) === null || $bool479 === false || $bool479 === 0 || $bool479 === '' ?
					false :
					(typeof $bool479=='object'?
						(typeof $bool479.__nonzero__=='function'?
							$bool479.__nonzero__() :
							(typeof $bool479.__len__=='function'?
								($bool479.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				sign = '-';
				to_number = 1;
				n_digits = (typeof ($sub109=n_digits)==typeof ($sub110=1) && (typeof $sub109=='number'||typeof $sub109=='string')?
					$sub109-$sub110:
					$m['op_sub']($sub109,$sub110));
			}
			else {
				sign = '\x00';
				to_number = 0;
			}
			var $tupleassign13 = $p['__ass_unpack'](self['_parse_number'](result, to_number), 2, null);
			have_dec_point = $tupleassign13[0];
			to_remainder = $tupleassign13[1];
			n_remainder = (typeof ($sub111=$m['len'](result))==typeof ($sub112=to_remainder) && (typeof $sub111=='number'||typeof $sub111=='string')?
				$sub111-$sub112:
				$m['op_sub']($sub111,$sub112));
			digits = result;
			spec = self['_calc_num_width'](0, sign, to_number, n_digits, n_remainder, have_dec_point, digits);
			fill = ((($bool480=(($eq291=self['_fill_char'])===($eq292='\x00')&&$eq291===null?true:
				($eq291===null?false:($eq292===null?false:
					((typeof $eq291=='object'||typeof $eq291=='function')&&typeof $eq291.__cmp__=='function'?$eq291.__cmp__($eq292) === 0:
						((typeof $eq292=='object'||typeof $eq292=='function')&&typeof $eq292.__cmp__=='function'?$eq292.__cmp__($eq291) === 0:
							$eq291==$eq292)))))) === null || $bool480 === false || $bool480 === 0 || $bool480 === '' ?
				false :
				(typeof $bool480=='object'?
					(typeof $bool480.__nonzero__=='function'?
						$bool480.__nonzero__() :
						(typeof $bool480.__len__=='function'?
							($bool480.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['_lit'](' ')) : (self['_fill_char']));
			return self['_fill_number'](spec, digits, to_number, 0, fill, to_remainder, false);
		}
	, 1, [null,null,['self'],['w_float']]);
		$cls_definition['_format_float'] = $method;
		$method = $pyjs__bind_method2('format_float', function(w_float) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_float = arguments[1];
			}
			var $attr375,$attr376,$or60,$or61,$or62,$or63,$or64,$or65,$or66,tp,$eq303,$eq302,$eq301,$eq300,$eq307,$eq306,$eq305,$eq304,$eq309,$eq308,$bool486,$bool482,$bool490,$bool484,$bool485,$bool481,$eq293,$bool483,$eq295,$eq294,$eq297,$eq296,$eq299,$eq298,$bool487,$or59,$or58,$eq310,$bool489,$bool488;
			if ((($bool481=self['_parse_spec']('\x00', '>')) === null || $bool481 === false || $bool481 === 0 || $bool481 === '' ?
					false :
					(typeof $bool481=='object'?
						(typeof $bool481.__nonzero__=='function'?
							$bool481.__nonzero__() :
							(typeof $bool481.__len__=='function'?
								($bool481.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['space']['str'](w_float);
			}
			tp = self['_type'];
			if ((($bool490=((($bool482=$or58=(($eq293=tp)===($eq294='\x00')&&$eq293===null?true:
				($eq293===null?false:($eq294===null?false:
					((typeof $eq293=='object'||typeof $eq293=='function')&&typeof $eq293.__cmp__=='function'?$eq293.__cmp__($eq294) === 0:
						((typeof $eq294=='object'||typeof $eq294=='function')&&typeof $eq294.__cmp__=='function'?$eq294.__cmp__($eq293) === 0:
							$eq293==$eq294)))))) === null || $bool482 === false || $bool482 === 0 || $bool482 === '' ?
				false :
				(typeof $bool482=='object'?
					(typeof $bool482.__nonzero__=='function'?
						$bool482.__nonzero__() :
						(typeof $bool482.__len__=='function'?
							($bool482.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or58:((($bool483=$or59=(($eq295=tp)===($eq296='e')&&$eq295===null?true:
				($eq295===null?false:($eq296===null?false:
					((typeof $eq295=='object'||typeof $eq295=='function')&&typeof $eq295.__cmp__=='function'?$eq295.__cmp__($eq296) === 0:
						((typeof $eq296=='object'||typeof $eq296=='function')&&typeof $eq296.__cmp__=='function'?$eq296.__cmp__($eq295) === 0:
							$eq295==$eq296)))))) === null || $bool483 === false || $bool483 === 0 || $bool483 === '' ?
				false :
				(typeof $bool483=='object'?
					(typeof $bool483.__nonzero__=='function'?
						$bool483.__nonzero__() :
						(typeof $bool483.__len__=='function'?
							($bool483.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or59:((($bool484=$or60=(($eq297=tp)===($eq298='E')&&$eq297===null?true:
				($eq297===null?false:($eq298===null?false:
					((typeof $eq297=='object'||typeof $eq297=='function')&&typeof $eq297.__cmp__=='function'?$eq297.__cmp__($eq298) === 0:
						((typeof $eq298=='object'||typeof $eq298=='function')&&typeof $eq298.__cmp__=='function'?$eq298.__cmp__($eq297) === 0:
							$eq297==$eq298)))))) === null || $bool484 === false || $bool484 === 0 || $bool484 === '' ?
				false :
				(typeof $bool484=='object'?
					(typeof $bool484.__nonzero__=='function'?
						$bool484.__nonzero__() :
						(typeof $bool484.__len__=='function'?
							($bool484.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or60:((($bool485=$or61=(($eq299=tp)===($eq300='f')&&$eq299===null?true:
				($eq299===null?false:($eq300===null?false:
					((typeof $eq299=='object'||typeof $eq299=='function')&&typeof $eq299.__cmp__=='function'?$eq299.__cmp__($eq300) === 0:
						((typeof $eq300=='object'||typeof $eq300=='function')&&typeof $eq300.__cmp__=='function'?$eq300.__cmp__($eq299) === 0:
							$eq299==$eq300)))))) === null || $bool485 === false || $bool485 === 0 || $bool485 === '' ?
				false :
				(typeof $bool485=='object'?
					(typeof $bool485.__nonzero__=='function'?
						$bool485.__nonzero__() :
						(typeof $bool485.__len__=='function'?
							($bool485.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or61:((($bool486=$or62=(($eq301=tp)===($eq302='F')&&$eq301===null?true:
				($eq301===null?false:($eq302===null?false:
					((typeof $eq301=='object'||typeof $eq301=='function')&&typeof $eq301.__cmp__=='function'?$eq301.__cmp__($eq302) === 0:
						((typeof $eq302=='object'||typeof $eq302=='function')&&typeof $eq302.__cmp__=='function'?$eq302.__cmp__($eq301) === 0:
							$eq301==$eq302)))))) === null || $bool486 === false || $bool486 === 0 || $bool486 === '' ?
				false :
				(typeof $bool486=='object'?
					(typeof $bool486.__nonzero__=='function'?
						$bool486.__nonzero__() :
						(typeof $bool486.__len__=='function'?
							($bool486.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or62:((($bool487=$or63=(($eq303=tp)===($eq304='g')&&$eq303===null?true:
				($eq303===null?false:($eq304===null?false:
					((typeof $eq303=='object'||typeof $eq303=='function')&&typeof $eq303.__cmp__=='function'?$eq303.__cmp__($eq304) === 0:
						((typeof $eq304=='object'||typeof $eq304=='function')&&typeof $eq304.__cmp__=='function'?$eq304.__cmp__($eq303) === 0:
							$eq303==$eq304)))))) === null || $bool487 === false || $bool487 === 0 || $bool487 === '' ?
				false :
				(typeof $bool487=='object'?
					(typeof $bool487.__nonzero__=='function'?
						$bool487.__nonzero__() :
						(typeof $bool487.__len__=='function'?
							($bool487.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or63:((($bool488=$or64=(($eq305=tp)===($eq306='G')&&$eq305===null?true:
				($eq305===null?false:($eq306===null?false:
					((typeof $eq305=='object'||typeof $eq305=='function')&&typeof $eq305.__cmp__=='function'?$eq305.__cmp__($eq306) === 0:
						((typeof $eq306=='object'||typeof $eq306=='function')&&typeof $eq306.__cmp__=='function'?$eq306.__cmp__($eq305) === 0:
							$eq305==$eq306)))))) === null || $bool488 === false || $bool488 === 0 || $bool488 === '' ?
				false :
				(typeof $bool488=='object'?
					(typeof $bool488.__nonzero__=='function'?
						$bool488.__nonzero__() :
						(typeof $bool488.__len__=='function'?
							($bool488.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or64:((($bool489=$or65=(($eq307=tp)===($eq308='n')&&$eq307===null?true:
				($eq307===null?false:($eq308===null?false:
					((typeof $eq307=='object'||typeof $eq307=='function')&&typeof $eq307.__cmp__=='function'?$eq307.__cmp__($eq308) === 0:
						((typeof $eq308=='object'||typeof $eq308=='function')&&typeof $eq308.__cmp__=='function'?$eq308.__cmp__($eq307) === 0:
							$eq307==$eq308)))))) === null || $bool489 === false || $bool489 === 0 || $bool489 === '' ?
				false :
				(typeof $bool489=='object'?
					(typeof $bool489.__nonzero__=='function'?
						$bool489.__nonzero__() :
						(typeof $bool489.__len__=='function'?
							($bool489.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or65:(($eq309=tp)===($eq310='%')&&$eq309===null?true:
				($eq309===null?false:($eq310===null?false:
					((typeof $eq309=='object'||typeof $eq309=='function')&&typeof $eq309.__cmp__=='function'?$eq309.__cmp__($eq310) === 0:
						((typeof $eq310=='object'||typeof $eq310=='function')&&typeof $eq310.__cmp__=='function'?$eq310.__cmp__($eq309) === 0:
							$eq309==$eq310)))))))))))))) === null || $bool490 === false || $bool490 === 0 || $bool490 === '' ?
					false :
					(typeof $bool490=='object'?
						(typeof $bool490.__nonzero__=='function'?
							$bool490.__nonzero__() :
							(typeof $bool490.__len__=='function'?
								($bool490.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['_format_float'](w_float);
			}
			self['_unknown_presentation']('float');
			return null;
		}
	, 1, [null,null,['self'],['w_float']]);
		$cls_definition['format_float'] = $method;
		$method = $pyjs__bind_method2('_format_complex', function(w_complex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_complex = arguments[1];
			}
			var re_grouped_digits,$sub120,$sub118,add_parens,im_have_dec,tp,re_num,im_n_remainder,$add181,$add180,$add183,$add182,$add184,re_remainder_ptr,skip_re,im_spec,$add179,$attr377,$attr379,$attr378,$eq330,$mod7,$mod8,out,$bool493,$bool492,$bool491,$bool497,$bool496,$bool495,$bool494,$bool499,$bool498,re_spec,tmp_align,$eq329,$eq328,$eq312,$eq321,$eq320,$eq323,$eq322,$eq325,$eq324,$eq327,$eq326,$148,$145,$144,$147,$146,$141,$140,$143,$142,re_n_remainder,$mul14,$mul13,$and59,tmp_fill_char,im_num,tmp_width,$eq318,$attr418,$attr419,$attr410,$attr411,$attr412,$attr413,$attr414,$attr415,$attr416,$attr417,$138,$139,default_precision,$137,$attr388,$attr389,$attr384,$attr385,$attr386,$attr387,$attr380,$attr381,$attr382,$attr383,msg,re_sign,$attr408,$attr403,$attr402,$attr401,$attr400,$attr407,$attr406,$attr405,$attr404,$sub113,$sub117,$sub116,$sub115,$sub114,$sub119,n_im_digits,$attr399,$attr398,$attr397,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr390,$eq314,$eq315,$eq316,$eq317,$eq311,$assign3,$eq313,to_real_number,$eq319,to_imag_number,$attr409,re_have_dec,$and60,fill,im_grouped_digits,n_re_digits,$attr421,$attr420,$attr422,im_remainder_ptr,im_sign,$bool501,$bool500,$bool503,$bool502,$bool505,$bool504,$bool507,$bool506,$bool508;
			tp = self['_type'];
			self['_get_locale'](tp);
			default_precision = 6;
			if ((($bool491=(($eq311=self['_align'])===($eq312='=')&&$eq311===null?true:
				($eq311===null?false:($eq312===null?false:
					((typeof $eq311=='object'||typeof $eq311=='function')&&typeof $eq311.__cmp__=='function'?$eq311.__cmp__($eq312) === 0:
						((typeof $eq312=='object'||typeof $eq312=='function')&&typeof $eq312.__cmp__=='function'?$eq312.__cmp__($eq311) === 0:
							$eq311==$eq312)))))) === null || $bool491 === false || $bool491 === 0 || $bool491 === '' ?
					false :
					(typeof $bool491=='object'?
						(typeof $bool491.__nonzero__=='function'?
							$bool491.__nonzero__() :
							(typeof $bool491.__len__=='function'?
								($bool491.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				msg = "'=' alignment flag is not allowed in complex format specifier";
				throw ($m['ValueError'](msg));
			}
			if ((($bool492=(($eq313=self['_fill_char'])===($eq314='0')&&$eq313===null?true:
				($eq313===null?false:($eq314===null?false:
					((typeof $eq313=='object'||typeof $eq313=='function')&&typeof $eq313.__cmp__=='function'?$eq313.__cmp__($eq314) === 0:
						((typeof $eq314=='object'||typeof $eq314=='function')&&typeof $eq314.__cmp__=='function'?$eq314.__cmp__($eq313) === 0:
							$eq313==$eq314)))))) === null || $bool492 === false || $bool492 === 0 || $bool492 === '' ?
					false :
					(typeof $bool492=='object'?
						(typeof $bool492.__nonzero__=='function'?
							$bool492.__nonzero__() :
							(typeof $bool492.__len__=='function'?
								($bool492.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				msg = 'Zero padding is not allowed in complex format specifier';
				throw ($m['ValueError'](msg));
			}
			if ((($bool493=self['_alternate']) === null || $bool493 === false || $bool493 === 0 || $bool493 === '' ?
					false :
					(typeof $bool493=='object'?
						(typeof $bool493.__nonzero__=='function'?
							$bool493.__nonzero__() :
							(typeof $bool493.__len__=='function'?
								($bool493.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				msg = 'Alternate form %s not allowed in complex format specifier';
				throw ($m['ValueError']((typeof ($mod7=msg)==typeof ($mod8=self['_alternate']) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$m['op_mod']($mod7,$mod8))));
			}
			skip_re = 0;
			add_parens = 0;
			if ((($bool494=(($eq315=tp)===($eq316='\x00')&&$eq315===null?true:
				($eq315===null?false:($eq316===null?false:
					((typeof $eq315=='object'||typeof $eq315=='function')&&typeof $eq315.__cmp__=='function'?$eq315.__cmp__($eq316) === 0:
						((typeof $eq316=='object'||typeof $eq316=='function')&&typeof $eq316.__cmp__=='function'?$eq316.__cmp__($eq315) === 0:
							$eq315==$eq316)))))) === null || $bool494 === false || $bool494 === 0 || $bool494 === '' ?
					false :
					(typeof $bool494=='object'?
						(typeof $bool494.__nonzero__=='function'?
							$bool494.__nonzero__() :
							(typeof $bool494.__len__=='function'?
								($bool494.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				tp = 'g';
				default_precision = 12;
				if ((($bool496=((($bool495=$and59=(($eq317=w_complex['realval'])===($eq318=0)&&$eq317===null?true:
					($eq317===null?false:($eq318===null?false:
						((typeof $eq317=='object'||typeof $eq317=='function')&&typeof $eq317.__cmp__=='function'?$eq317.__cmp__($eq318) === 0:
							((typeof $eq318=='object'||typeof $eq318=='function')&&typeof $eq318.__cmp__=='function'?$eq318.__cmp__($eq317) === 0:
								$eq317==$eq318)))))) === null || $bool495 === false || $bool495 === 0 || $bool495 === '' ?
					false :
					(typeof $bool495=='object'?
						(typeof $bool495.__nonzero__=='function'?
							$bool495.__nonzero__() :
							(typeof $bool495.__len__=='function'?
								($bool495.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq319=(typeof copysign == "undefined"?$m.copysign:copysign)(1.0, w_complex['realval']))===($eq320=1.0)&&$eq319===null?true:
					($eq319===null?false:($eq320===null?false:
						((typeof $eq319=='object'||typeof $eq319=='function')&&typeof $eq319.__cmp__=='function'?$eq319.__cmp__($eq320) === 0:
							((typeof $eq320=='object'||typeof $eq320=='function')&&typeof $eq320.__cmp__=='function'?$eq320.__cmp__($eq319) === 0:
								$eq319==$eq320))))):$and59)) === null || $bool496 === false || $bool496 === 0 || $bool496 === '' ?
						false :
						(typeof $bool496=='object'?
							(typeof $bool496.__nonzero__=='function'?
								$bool496.__nonzero__() :
								(typeof $bool496.__len__=='function'?
									($bool496.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					skip_re = 1;
				}
				else {
					add_parens = 1;
				}
			}
			if ((($bool497=(($eq321=tp)===($eq322='n')&&$eq321===null?true:
				($eq321===null?false:($eq322===null?false:
					((typeof $eq321=='object'||typeof $eq321=='function')&&typeof $eq321.__cmp__=='function'?$eq321.__cmp__($eq322) === 0:
						((typeof $eq322=='object'||typeof $eq322=='function')&&typeof $eq322.__cmp__=='function'?$eq322.__cmp__($eq321) === 0:
							$eq321==$eq322)))))) === null || $bool497 === false || $bool497 === 0 || $bool497 === '' ?
					false :
					(typeof $bool497=='object'?
						(typeof $bool497.__nonzero__=='function'?
							$bool497.__nonzero__() :
							(typeof $bool497.__len__=='function'?
								($bool497.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				tp = 'g';
			}
			if ((($bool498=(($eq323=self['_precision'])===($eq324=(typeof ($usub25=1)=='number'?
				-$usub25:
				$m['op_usub']($usub25)))&&$eq323===null?true:
				($eq323===null?false:($eq324===null?false:
					((typeof $eq323=='object'||typeof $eq323=='function')&&typeof $eq323.__cmp__=='function'?$eq323.__cmp__($eq324) === 0:
						((typeof $eq324=='object'||typeof $eq324=='function')&&typeof $eq324.__cmp__=='function'?$eq324.__cmp__($eq323) === 0:
							$eq323==$eq324)))))) === null || $bool498 === false || $bool498 === 0 || $bool498 === '' ?
					false :
					(typeof $bool498=='object'?
						(typeof $bool498.__nonzero__=='function'?
							$bool498.__nonzero__() :
							(typeof $bool498.__len__=='function'?
								($bool498.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self._precision = default_precision;
			}
			re_num = (typeof formatd == "undefined"?$m.formatd:formatd)(w_complex['realval'], tp, self['_precision']);
			im_num = (typeof formatd == "undefined"?$m.formatd:formatd)(w_complex['imagval'], tp, self['_precision']);
			n_re_digits = $m['len'](re_num);
			n_im_digits = $m['len'](im_num);
			to_real_number = 0;
			to_imag_number = 0;
			$assign3 = '';
			re_sign = $assign3;
			im_sign = $assign3;
			if ((($bool499=(($eq325=(typeof ($137=re_num).__array != 'undefined'?
				((typeof $137.__array[$138=0]) != 'undefined'?$137.__array[$138]:
					$137.__getitem__($138)):
					$137.__getitem__(0)))===($eq326='-')&&$eq325===null?true:
				($eq325===null?false:($eq326===null?false:
					((typeof $eq325=='object'||typeof $eq325=='function')&&typeof $eq325.__cmp__=='function'?$eq325.__cmp__($eq326) === 0:
						((typeof $eq326=='object'||typeof $eq326=='function')&&typeof $eq326.__cmp__=='function'?$eq326.__cmp__($eq325) === 0:
							$eq325==$eq326)))))) === null || $bool499 === false || $bool499 === 0 || $bool499 === '' ?
					false :
					(typeof $bool499=='object'?
						(typeof $bool499.__nonzero__=='function'?
							$bool499.__nonzero__() :
							(typeof $bool499.__len__=='function'?
								($bool499.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				re_sign = '-';
				to_real_number = 1;
				n_re_digits = (typeof ($sub113=n_re_digits)==typeof ($sub114=1) && (typeof $sub113=='number'||typeof $sub113=='string')?
					$sub113-$sub114:
					$m['op_sub']($sub113,$sub114));
			}
			if ((($bool500=(($eq327=(typeof ($139=im_num).__array != 'undefined'?
				((typeof $139.__array[$140=0]) != 'undefined'?$139.__array[$140]:
					$139.__getitem__($140)):
					$139.__getitem__(0)))===($eq328='-')&&$eq327===null?true:
				($eq327===null?false:($eq328===null?false:
					((typeof $eq327=='object'||typeof $eq327=='function')&&typeof $eq327.__cmp__=='function'?$eq327.__cmp__($eq328) === 0:
						((typeof $eq328=='object'||typeof $eq328=='function')&&typeof $eq328.__cmp__=='function'?$eq328.__cmp__($eq327) === 0:
							$eq327==$eq328)))))) === null || $bool500 === false || $bool500 === 0 || $bool500 === '' ?
					false :
					(typeof $bool500=='object'?
						(typeof $bool500.__nonzero__=='function'?
							$bool500.__nonzero__() :
							(typeof $bool500.__len__=='function'?
								($bool500.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				im_sign = '-';
				to_imag_number = 1;
				n_im_digits = (typeof ($sub115=n_im_digits)==typeof ($sub116=1) && (typeof $sub115=='number'||typeof $sub115=='string')?
					$sub115-$sub116:
					$m['op_sub']($sub115,$sub116));
			}
			tmp_fill_char = self['_fill_char'];
			tmp_align = self['_align'];
			tmp_width = self['_width'];
			self._fill_char = '\x00';
			self._align = '<';
			self._width = (typeof ($usub26=1)=='number'?
				-$usub26:
				$m['op_usub']($usub26));
			var $tupleassign14 = $p['__ass_unpack'](self['_parse_number'](re_num, to_real_number), 2, null);
			re_have_dec = $tupleassign14[0];
			re_remainder_ptr = $tupleassign14[1];
			var $tupleassign15 = $p['__ass_unpack'](self['_parse_number'](im_num, to_imag_number), 2, null);
			im_have_dec = $tupleassign15[0];
			im_remainder_ptr = $tupleassign15[1];
			re_n_remainder = (typeof ($sub117=$m['len'](re_num))==typeof ($sub118=re_remainder_ptr) && (typeof $sub117=='number'||typeof $sub117=='string')?
				$sub117-$sub118:
				$m['op_sub']($sub117,$sub118));
			im_n_remainder = (typeof ($sub119=$m['len'](im_num))==typeof ($sub120=im_remainder_ptr) && (typeof $sub119=='number'||typeof $sub119=='string')?
				$sub119-$sub120:
				$m['op_sub']($sub119,$sub120));
			re_spec = self['_calc_num_width'](0, re_sign, to_real_number, n_re_digits, re_n_remainder, re_have_dec, re_num);
			re_grouped_digits = self['_grouped_digits'];
			if ((($bool502=!(($bool501=skip_re) === null || $bool501 === false || $bool501 === 0 || $bool501 === '' ?
				false :
				(typeof $bool501=='object'?
					(typeof $bool501.__nonzero__=='function'?
						$bool501.__nonzero__() :
						(typeof $bool501.__len__=='function'?
							($bool501.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool502 === false || $bool502 === 0 || $bool502 === '' ?
					false :
					(typeof $bool502=='object'?
						(typeof $bool502.__nonzero__=='function'?
							$bool502.__nonzero__() :
							(typeof $bool502.__len__=='function'?
								($bool502.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self._sign = '+';
			}
			im_spec = self['_calc_num_width'](0, im_sign, to_imag_number, n_im_digits, im_n_remainder, im_have_dec, im_num);
			im_grouped_digits = self['_grouped_digits'];
			if ((($bool503=skip_re) === null || $bool503 === false || $bool503 === 0 || $bool503 === '' ?
					false :
					(typeof $bool503=='object'?
						(typeof $bool503.__nonzero__=='function'?
							$bool503.__nonzero__() :
							(typeof $bool503.__len__=='function'?
								($bool503.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				re_spec.n_total = 0;
			}
			self._align = tmp_align;
			self._width = tmp_width;
			self._fill_char = tmp_fill_char;
			self['_calc_padding'](self['empty'], (typeof ($add183=(typeof ($add181=(typeof ($add179=re_spec['n_total'])==typeof ($add180=im_spec['n_total']) && (typeof $add179=='number'||typeof $add179=='string')?
				$add179+$add180:
				$m['op_add']($add179,$add180)))==typeof ($add182=1) && (typeof $add181=='number'||typeof $add181=='string')?
				$add181+$add182:
				$m['op_add']($add181,$add182)))==typeof ($add184=(typeof ($mul13=add_parens)==typeof ($mul14=2) && typeof $mul13=='number'?
				$mul13*$mul14:
				$m['op_mul']($mul13,$mul14))) && (typeof $add183=='number'||typeof $add183=='string')?
				$add183+$add184:
				$m['op_add']($add183,$add184)));
			out = self['_builder']();
			fill = self['_fill_char'];
			if ((($bool504=(($eq329=fill)===($eq330='\x00')&&$eq329===null?true:
				($eq329===null?false:($eq330===null?false:
					((typeof $eq329=='object'||typeof $eq329=='function')&&typeof $eq329.__cmp__=='function'?$eq329.__cmp__($eq330) === 0:
						((typeof $eq330=='object'||typeof $eq330=='function')&&typeof $eq330.__cmp__=='function'?$eq330.__cmp__($eq329) === 0:
							$eq329==$eq330)))))) === null || $bool504 === false || $bool504 === 0 || $bool504 === '' ?
					false :
					(typeof $bool504=='object'?
						(typeof $bool504.__nonzero__=='function'?
							$bool504.__nonzero__() :
							(typeof $bool504.__len__=='function'?
								($bool504.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				fill = (typeof ($141=self['_lit'](' ')).__array != 'undefined'?
					((typeof $141.__array[$142=0]) != 'undefined'?$141.__array[$142]:
						$141.__getitem__($142)):
						$141.__getitem__(0));
			}
			out['append_multiple_char'](fill, self['_left_pad']);
			if ((($bool505=add_parens) === null || $bool505 === false || $bool505 === 0 || $bool505 === '' ?
					false :
					(typeof $bool505=='object'?
						(typeof $bool505.__nonzero__=='function'?
							$bool505.__nonzero__() :
							(typeof $bool505.__len__=='function'?
								($bool505.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				out['append']((typeof ($143=self['_lit']('(')).__array != 'undefined'?
					((typeof $143.__array[$144=0]) != 'undefined'?$143.__array[$144]:
						$143.__getitem__($144)):
						$143.__getitem__(0)));
			}
			if ((($bool507=!(($bool506=skip_re) === null || $bool506 === false || $bool506 === 0 || $bool506 === '' ?
				false :
				(typeof $bool506=='object'?
					(typeof $bool506.__nonzero__=='function'?
						$bool506.__nonzero__() :
						(typeof $bool506.__len__=='function'?
							($bool506.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool507 === false || $bool507 === 0 || $bool507 === '' ?
					false :
					(typeof $bool507=='object'?
						(typeof $bool507.__nonzero__=='function'?
							$bool507.__nonzero__() :
							(typeof $bool507.__len__=='function'?
								($bool507.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				out['append'](self['_fill_number'](re_spec, re_num, to_real_number, 0, fill, re_remainder_ptr, false, re_grouped_digits));
			}
			out['append'](self['_fill_number'](im_spec, im_num, to_imag_number, 0, fill, im_remainder_ptr, false, im_grouped_digits));
			out['append']((typeof ($145=self['_lit']('j')).__array != 'undefined'?
				((typeof $145.__array[$146=0]) != 'undefined'?$145.__array[$146]:
					$145.__getitem__($146)):
					$145.__getitem__(0)));
			if ((($bool508=add_parens) === null || $bool508 === false || $bool508 === 0 || $bool508 === '' ?
					false :
					(typeof $bool508=='object'?
						(typeof $bool508.__nonzero__=='function'?
							$bool508.__nonzero__() :
							(typeof $bool508.__len__=='function'?
								($bool508.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				out['append']((typeof ($147=self['_lit'](')')).__array != 'undefined'?
					((typeof $147.__array[$148=0]) != 'undefined'?$147.__array[$148]:
						$147.__getitem__($148)):
						$147.__getitem__(0)));
			}
			out['append_multiple_char'](fill, self['_right_pad']);
			return out['build']();
		}
	, 1, [null,null,['self'],['w_complex']]);
		$cls_definition['_format_complex'] = $method;
		$method = $pyjs__bind_method2('format_complex', function(w_complex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_complex = arguments[1];
			}
			var $eq338,$eq339,$eq332,$eq333,$eq331,$eq336,$eq337,$eq334,$eq335,$or67,$or68,$or69,tp,$bool516,$bool517,$bool514,$bool515,$bool512,$bool513,$bool510,$bool511,$attr423,$attr424,$eq346,$eq345,$eq344,$eq343,$eq342,$eq341,$eq340,$or74,$or73,$or72,$or71,$or70,$bool509;
			if ((($bool509=self['_parse_spec']('\x00', '>')) === null || $bool509 === false || $bool509 === 0 || $bool509 === '' ?
					false :
					(typeof $bool509=='object'?
						(typeof $bool509.__nonzero__=='function'?
							$bool509.__nonzero__() :
							(typeof $bool509.__len__=='function'?
								($bool509.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['space']['str'](w_complex);
			}
			tp = self['_type'];
			if ((($bool517=((($bool510=$or67=(($eq331=tp)===($eq332='\x00')&&$eq331===null?true:
				($eq331===null?false:($eq332===null?false:
					((typeof $eq331=='object'||typeof $eq331=='function')&&typeof $eq331.__cmp__=='function'?$eq331.__cmp__($eq332) === 0:
						((typeof $eq332=='object'||typeof $eq332=='function')&&typeof $eq332.__cmp__=='function'?$eq332.__cmp__($eq331) === 0:
							$eq331==$eq332)))))) === null || $bool510 === false || $bool510 === 0 || $bool510 === '' ?
				false :
				(typeof $bool510=='object'?
					(typeof $bool510.__nonzero__=='function'?
						$bool510.__nonzero__() :
						(typeof $bool510.__len__=='function'?
							($bool510.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or67:((($bool511=$or68=(($eq333=tp)===($eq334='e')&&$eq333===null?true:
				($eq333===null?false:($eq334===null?false:
					((typeof $eq333=='object'||typeof $eq333=='function')&&typeof $eq333.__cmp__=='function'?$eq333.__cmp__($eq334) === 0:
						((typeof $eq334=='object'||typeof $eq334=='function')&&typeof $eq334.__cmp__=='function'?$eq334.__cmp__($eq333) === 0:
							$eq333==$eq334)))))) === null || $bool511 === false || $bool511 === 0 || $bool511 === '' ?
				false :
				(typeof $bool511=='object'?
					(typeof $bool511.__nonzero__=='function'?
						$bool511.__nonzero__() :
						(typeof $bool511.__len__=='function'?
							($bool511.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or68:((($bool512=$or69=(($eq335=tp)===($eq336='E')&&$eq335===null?true:
				($eq335===null?false:($eq336===null?false:
					((typeof $eq335=='object'||typeof $eq335=='function')&&typeof $eq335.__cmp__=='function'?$eq335.__cmp__($eq336) === 0:
						((typeof $eq336=='object'||typeof $eq336=='function')&&typeof $eq336.__cmp__=='function'?$eq336.__cmp__($eq335) === 0:
							$eq335==$eq336)))))) === null || $bool512 === false || $bool512 === 0 || $bool512 === '' ?
				false :
				(typeof $bool512=='object'?
					(typeof $bool512.__nonzero__=='function'?
						$bool512.__nonzero__() :
						(typeof $bool512.__len__=='function'?
							($bool512.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or69:((($bool513=$or70=(($eq337=tp)===($eq338='f')&&$eq337===null?true:
				($eq337===null?false:($eq338===null?false:
					((typeof $eq337=='object'||typeof $eq337=='function')&&typeof $eq337.__cmp__=='function'?$eq337.__cmp__($eq338) === 0:
						((typeof $eq338=='object'||typeof $eq338=='function')&&typeof $eq338.__cmp__=='function'?$eq338.__cmp__($eq337) === 0:
							$eq337==$eq338)))))) === null || $bool513 === false || $bool513 === 0 || $bool513 === '' ?
				false :
				(typeof $bool513=='object'?
					(typeof $bool513.__nonzero__=='function'?
						$bool513.__nonzero__() :
						(typeof $bool513.__len__=='function'?
							($bool513.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or70:((($bool514=$or71=(($eq339=tp)===($eq340='F')&&$eq339===null?true:
				($eq339===null?false:($eq340===null?false:
					((typeof $eq339=='object'||typeof $eq339=='function')&&typeof $eq339.__cmp__=='function'?$eq339.__cmp__($eq340) === 0:
						((typeof $eq340=='object'||typeof $eq340=='function')&&typeof $eq340.__cmp__=='function'?$eq340.__cmp__($eq339) === 0:
							$eq339==$eq340)))))) === null || $bool514 === false || $bool514 === 0 || $bool514 === '' ?
				false :
				(typeof $bool514=='object'?
					(typeof $bool514.__nonzero__=='function'?
						$bool514.__nonzero__() :
						(typeof $bool514.__len__=='function'?
							($bool514.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or71:((($bool515=$or72=(($eq341=tp)===($eq342='g')&&$eq341===null?true:
				($eq341===null?false:($eq342===null?false:
					((typeof $eq341=='object'||typeof $eq341=='function')&&typeof $eq341.__cmp__=='function'?$eq341.__cmp__($eq342) === 0:
						((typeof $eq342=='object'||typeof $eq342=='function')&&typeof $eq342.__cmp__=='function'?$eq342.__cmp__($eq341) === 0:
							$eq341==$eq342)))))) === null || $bool515 === false || $bool515 === 0 || $bool515 === '' ?
				false :
				(typeof $bool515=='object'?
					(typeof $bool515.__nonzero__=='function'?
						$bool515.__nonzero__() :
						(typeof $bool515.__len__=='function'?
							($bool515.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or72:((($bool516=$or73=(($eq343=tp)===($eq344='G')&&$eq343===null?true:
				($eq343===null?false:($eq344===null?false:
					((typeof $eq343=='object'||typeof $eq343=='function')&&typeof $eq343.__cmp__=='function'?$eq343.__cmp__($eq344) === 0:
						((typeof $eq344=='object'||typeof $eq344=='function')&&typeof $eq344.__cmp__=='function'?$eq344.__cmp__($eq343) === 0:
							$eq343==$eq344)))))) === null || $bool516 === false || $bool516 === 0 || $bool516 === '' ?
				false :
				(typeof $bool516=='object'?
					(typeof $bool516.__nonzero__=='function'?
						$bool516.__nonzero__() :
						(typeof $bool516.__len__=='function'?
							($bool516.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or73:(($eq345=tp)===($eq346='n')&&$eq345===null?true:
				($eq345===null?false:($eq346===null?false:
					((typeof $eq345=='object'||typeof $eq345=='function')&&typeof $eq345.__cmp__=='function'?$eq345.__cmp__($eq346) === 0:
						((typeof $eq346=='object'||typeof $eq346=='function')&&typeof $eq346.__cmp__=='function'?$eq346.__cmp__($eq345) === 0:
							$eq345==$eq346))))))))))))) === null || $bool517 === false || $bool517 === 0 || $bool517 === '' ?
					false :
					(typeof $bool517=='object'?
						(typeof $bool517.__nonzero__=='function'?
							$bool517.__nonzero__() :
							(typeof $bool517.__len__=='function'?
								($bool517.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return self['_format_complex'](w_complex);
			}
			self['_unknown_presentation']('complex');
			return null;
		}
	, 1, [null,null,['self'],['w_complex']]);
		$cls_definition['format_complex'] = $method;
		var $bases = new Array($m['BaseFormatter']);
		return $pyjs_type('Formatter', $bases, $cls_definition);
	})();
	$m['StringFormatSpace'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '12b2e46cf7d4b317ec2505a1e98dd739';
		$method = $pyjs__bind_method2('format', function(w_obj, spec) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w_obj = arguments[1];
				spec = arguments[2];
			}
			var $bool518,fmt,$bool526,$bool528,$and62,$and61,$bool519,$bool523,$bool522,$bool521,$bool520,$bool527,$bool525,$bool524;
			if ((($bool520=((($bool518=$and61=$m['isinstance'](w_obj, $m['object'])) === null || $bool518 === false || $bool518 === 0 || $bool518 === '' ?
				false :
				(typeof $bool518=='object'?
					(typeof $bool518.__nonzero__=='function'?
						$bool518.__nonzero__() :
						(typeof $bool518.__len__=='function'?
							($bool518.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool519=$m['isinstance'](w_obj, $p['tuple']([$p['float_int'], $m['float'], $m['basestring']]))) === null || $bool519 === false || $bool519 === 0 || $bool519 === '' ?
				false :
				(typeof $bool519=='object'?
					(typeof $bool519.__nonzero__=='function'?
						$bool519.__nonzero__() :
						(typeof $bool519.__len__=='function'?
							($bool519.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and61)) === null || $bool520 === false || $bool520 === 0 || $bool520 === '' ?
					false :
					(typeof $bool520=='object'?
						(typeof $bool520.__nonzero__=='function'?
							$bool520.__nonzero__() :
							(typeof $bool520.__len__=='function'?
								($bool520.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool521=$m['hasattr'](w_obj, '__format__')) === null || $bool521 === false || $bool521 === 0 || $bool521 === '' ?
						false :
						(typeof $bool521=='object'?
							(typeof $bool521.__nonzero__=='function'?
								$bool521.__nonzero__() :
								(typeof $bool521.__len__=='function'?
									($bool521.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return w_obj['__format__'](spec);
				}
			}
			if ((($bool523=!(($bool522=spec) === null || $bool522 === false || $bool522 === 0 || $bool522 === '' ?
				false :
				(typeof $bool522=='object'?
					(typeof $bool522.__nonzero__=='function'?
						$bool522.__nonzero__() :
						(typeof $bool522.__len__=='function'?
							($bool522.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool523 === false || $bool523 === 0 || $bool523 === '' ?
					false :
					(typeof $bool523=='object'?
						(typeof $bool523.__nonzero__=='function'?
							$bool523.__nonzero__() :
							(typeof $bool523.__len__=='function'?
								($bool523.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return w_obj;
			}
			fmt = $m['Formatter'](self, spec);
			if ((($bool524=$m['isinstance'](w_obj, $m['basestring'])) === null || $bool524 === false || $bool524 === 0 || $bool524 === '' ?
					false :
					(typeof $bool524=='object'?
						(typeof $bool524.__nonzero__=='function'?
							$bool524.__nonzero__() :
							(typeof $bool524.__len__=='function'?
								($bool524.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return fmt['format_string'](w_obj);
			}
			else if ((($bool525=$m['isinstance'](w_obj, $p['float_int'])) === null || $bool525 === false || $bool525 === 0 || $bool525 === '' ?
					false :
					(typeof $bool525=='object'?
						(typeof $bool525.__nonzero__=='function'?
							$bool525.__nonzero__() :
							(typeof $bool525.__len__=='function'?
								($bool525.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return fmt['format_int_or_long'](w_obj, spec);
			}
			else if ((($bool526=$m['isinstance'](w_obj, $m['float'])) === null || $bool526 === false || $bool526 === 0 || $bool526 === '' ?
					false :
					(typeof $bool526=='object'?
						(typeof $bool526.__nonzero__=='function'?
							$bool526.__nonzero__() :
							(typeof $bool526.__len__=='function'?
								($bool526.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return fmt['format_float'](w_obj);
			}
			if ((($bool527=$m['isinstance'](w_obj, $m['object'])) === null || $bool527 === false || $bool527 === 0 || $bool527 === '' ?
					false :
					(typeof $bool527=='object'?
						(typeof $bool527.__nonzero__=='function'?
							$bool527.__nonzero__() :
							(typeof $bool527.__len__=='function'?
								($bool527.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool528=$m['hasattr'](w_obj, '__str__')) === null || $bool528 === false || $bool528 === 0 || $bool528 === '' ?
						false :
						(typeof $bool528=='object'?
							(typeof $bool528.__nonzero__=='function'?
								$bool528.__nonzero__() :
								(typeof $bool528.__len__=='function'?
									($bool528.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return fmt['format_string'](w_obj['__str__']());
				}
			}
			return w_obj;
		}
	, 1, [null,null,['self'],['w_obj'],['spec']]);
		$cls_definition['format'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('StringFormatSpace', $bases, $cls_definition);
	})();
	$m['DTSF_STR_PRECISION'] = 12;
	$m['DTSF_SIGN'] = 1;
	$m['DTSF_ADD_DOT_0'] = 2;
	$m['DTSF_ALT'] = 4;
	$m['DIST_FINITE'] = 1;
	$m['DIST_NAN'] = 2;
	$m['DIST_INFINITY'] = 3;
	$m['formatd'] = function(x, code, precision, flags) {
		if (typeof flags == 'undefined') flags=arguments.callee.__args__[5][1];
		var $eq350,$iter33_iter,sign,$152,$153,$150,$151,$and63,$154,$sub122,$sub123,alt,$sub121,$mod9,$sub124,$cmp132,$bool538,$iter33_type,$eq349,fmt,$iter33_test,$bool529,$add189,$add188,$iter33_idx,$bool530,$bool531,$bool532,$bool533,$add185,$bool535,$add187,$add186,$iter33_nextval,$cmp134,$cmp133,$mod10,$cmp131,$eq348,$eq347,$149,$iter33_array,c,$add190,idx,$bool534,s,$and64,$bool536,$bool537;
		if ((($bool529=(flags)&($m['DTSF_ALT'])) === null || $bool529 === false || $bool529 === 0 || $bool529 === '' ?
				false :
				(typeof $bool529=='object'?
					(typeof $bool529.__nonzero__=='function'?
						$bool529.__nonzero__() :
						(typeof $bool529.__len__=='function'?
							($bool529.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			alt = '#';
		}
		else {
			alt = '';
		}
		if ((($bool530=(($eq347=code)===($eq348='r')&&$eq347===null?true:
			($eq347===null?false:($eq348===null?false:
				((typeof $eq347=='object'||typeof $eq347=='function')&&typeof $eq347.__cmp__=='function'?$eq347.__cmp__($eq348) === 0:
					((typeof $eq348=='object'||typeof $eq348=='function')&&typeof $eq348.__cmp__=='function'?$eq348.__cmp__($eq347) === 0:
						$eq347==$eq348)))))) === null || $bool530 === false || $bool530 === 0 || $bool530 === '' ?
				false :
				(typeof $bool530=='object'?
					(typeof $bool530.__nonzero__=='function'?
						$bool530.__nonzero__() :
						(typeof $bool530.__len__=='function'?
							($bool530.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			fmt = '%r';
		}
		else {
			fmt = $m['sprintf']('%%%s.%d%s', $p['tuple']([alt, precision, code]));
		}
		s = (typeof ($mod9=fmt)==typeof ($mod10=$p['tuple']([x])) && typeof $mod9=='number'?
			(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
			$m['op_mod']($mod9,$mod10));
		if ((($bool531=(flags)&($m['DTSF_ADD_DOT_0'])) === null || $bool531 === false || $bool531 === 0 || $bool531 === '' ?
				false :
				(typeof $bool531=='object'?
					(typeof $bool531.__nonzero__=='function'?
						$bool531.__nonzero__() :
						(typeof $bool531.__len__=='function'?
							($bool531.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			idx = $m['len'](s);
			$iter33_iter = $m['range']($m['len'](s), 0, (typeof ($usub27=1)=='number'?
				-$usub27:
				$m['op_usub']($usub27)));
			if (typeof ($iter33_array = $iter33_iter.__array) != 'undefined') {
				$iter33_type = 0;
			} else {
				$iter33_iter = $iter33_iter.__iter__();
				$iter33_type = typeof ($iter33_array = $iter33_iter.__array) != 'undefined'? 0 : (typeof $iter33_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter33_idx = 0;
			while ($iter33_test = typeof ($iter33_nextval=($iter33_type?($iter33_type > 0?$iter33_iter.next(true,false):$p['wrapped_next']($iter33_iter)):$iter33_array[$iter33_idx++])) != 'undefined') {
				idx = $iter33_nextval;
				c = (typeof ($149=s).__array != 'undefined'?
					((typeof $149.__array[$150=(typeof ($sub121=idx)==typeof ($sub122=1) && (typeof $sub121=='number'||typeof $sub121=='string')?
					$sub121-$sub122:
					$m['op_sub']($sub121,$sub122))]) != 'undefined'?$149.__array[$150]:
						$149.__getitem__($150)):
						$149.__getitem__((typeof ($sub121=idx)==typeof ($sub122=1) && (typeof $sub121=='number'||typeof $sub121=='string')?
					$sub121-$sub122:
					$m['op_sub']($sub121,$sub122))));
				if ((($bool532='eE'.__contains__(c)) === null || $bool532 === false || $bool532 === 0 || $bool532 === '' ?
						false :
						(typeof $bool532=='object'?
							(typeof $bool532.__nonzero__=='function'?
								$bool532.__nonzero__() :
								(typeof $bool532.__len__=='function'?
									($bool532.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool533='+-'.__contains__((typeof ($151=s).__array != 'undefined'?
						((typeof $151.__array[$152=idx]) != 'undefined'?$151.__array[$152]:
							$151.__getitem__($152)):
							$151.__getitem__(idx)))) === null || $bool533 === false || $bool533 === 0 || $bool533 === '' ?
							false :
							(typeof $bool533=='object'?
								(typeof $bool533.__nonzero__=='function'?
									$bool533.__nonzero__() :
									(typeof $bool533.__len__=='function'?
										($bool533.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						idx = (typeof ($add185=idx)==typeof ($add186=1) && (typeof $add185=='number'||typeof $add185=='string')?
							$add185+$add186:
							$m['op_add']($add185,$add186));
					}
					s = (typeof ($add187=$p['__getslice'](s, 0, idx))==typeof ($add188=$m['sprintf']('%02d', $p['float_int']($p['__getslice'](s, idx, null)))) && (typeof $add187=='number'||typeof $add187=='string')?
						$add187+$add188:
						$m['op_add']($add187,$add188));
					break;
				}
				if ((($bool534='.eE'.__contains__(c)) === null || $bool534 === false || $bool534 === 0 || $bool534 === '' ?
						false :
						(typeof $bool534=='object'?
							(typeof $bool534.__nonzero__=='function'?
								$bool534.__nonzero__() :
								(typeof $bool534.__len__=='function'?
									($bool534.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					break;
				}
			}
			if (!$iter33_test) {
				if ((($bool535=((($cmp131=$m['len'](s))===($cmp132=precision)?0:
					(typeof $cmp131==typeof $cmp132 && ((typeof $cmp131 == 'number')||(typeof $cmp131 == 'string')||(typeof $cmp131 == 'boolean'))?
						($cmp131 == $cmp132 ? 0 : ($cmp131 < $cmp132 ? -1 : 1)):
						$m['cmp']($cmp131, $cmp132))) == -1)) === null || $bool535 === false || $bool535 === 0 || $bool535 === '' ?
						false :
						(typeof $bool535=='object'?
							(typeof $bool535.__nonzero__=='function'?
								$bool535.__nonzero__() :
								(typeof $bool535.__len__=='function'?
									($bool535.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					s = (typeof ($add189=s)==typeof ($add190='.0') && (typeof $add189=='number'||typeof $add189=='string')?
						$add189+$add190:
						$m['op_add']($add189,$add190));
				}
				else {
					sign = '+';
					if ((($bool536=((($cmp133=x)===($cmp134=1)?0:
						(typeof $cmp133==typeof $cmp134 && ((typeof $cmp133 == 'number')||(typeof $cmp133 == 'string')||(typeof $cmp133 == 'boolean'))?
							($cmp133 == $cmp134 ? 0 : ($cmp133 < $cmp134 ? -1 : 1)):
							$m['cmp']($cmp133, $cmp134))) == -1)) === null || $bool536 === false || $bool536 === 0 || $bool536 === '' ?
							false :
							(typeof $bool536=='object'?
								(typeof $bool536.__nonzero__=='function'?
									$bool536.__nonzero__() :
									(typeof $bool536.__len__=='function'?
										($bool536.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						sign = '-';
					}
					s = $m['sprintf']('%s.%se%s%02d', $p['tuple']([(typeof ($153=s).__array != 'undefined'?
						((typeof $153.__array[$154=0]) != 'undefined'?$153.__array[$154]:
							$153.__getitem__($154)):
							$153.__getitem__(0)), $p['__getslice'](s, 1, null), sign, (typeof ($sub123=$m['len'](s))==typeof ($sub124=1) && (typeof $sub123=='number'||typeof $sub123=='string')?
						$sub123-$sub124:
						$m['op_sub']($sub123,$sub124))]));
				}
			}
		}
		else if ((($bool538=((($bool537=$and63=(($eq349=code)===($eq350='r')&&$eq349===null?true:
			($eq349===null?false:($eq350===null?false:
				((typeof $eq349=='object'||typeof $eq349=='function')&&typeof $eq349.__cmp__=='function'?$eq349.__cmp__($eq350) === 0:
					((typeof $eq350=='object'||typeof $eq350=='function')&&typeof $eq350.__cmp__=='function'?$eq350.__cmp__($eq349) === 0:
						$eq349==$eq350)))))) === null || $bool537 === false || $bool537 === 0 || $bool537 === '' ?
			false :
			(typeof $bool537=='object'?
				(typeof $bool537.__nonzero__=='function'?
					$bool537.__nonzero__() :
					(typeof $bool537.__len__=='function'?
						($bool537.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?s['endswith']('.0'):$and63)) === null || $bool538 === false || $bool538 === 0 || $bool538 === '' ?
				false :
				(typeof $bool538=='object'?
					(typeof $bool538.__nonzero__=='function'?
						$bool538.__nonzero__() :
						(typeof $bool538.__len__=='function'?
							($bool538.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			s = $p['__getslice'](s, 0, (typeof ($usub28=2)=='number'?
				-$usub28:
				$m['op_usub']($usub28)));
		}
		return s;
	};
	$m['formatd'].__name__ = 'formatd';

	$m['formatd'].__bind_type__ = 0;
	$m['formatd'].__args__ = [null,null,['x'],['code'],['precision'],['flags', 0]];
	$m['numeric_formatting'] = function() {

		return $p['tuple'](['.', ',', '\x03\x00']);
	};
	$m['numeric_formatting'].__name__ = 'numeric_formatting';

	$m['numeric_formatting'].__bind_type__ = 0;
	$m['numeric_formatting'].__args__ = [null,null];
	$m['_string_format'] = function(s, args, kw) {
		if (typeof args == 'undefined') args=arguments.callee.__args__[3][1];
		if (typeof kw == 'undefined') kw=arguments.callee.__args__[4][1];
		var space,res,fm;
		space = $m['StringFormatSpace']();
		fm = $m['TemplateFormatter'](space, s);
		res = fm['build'](args, kw);
		return res;
	};
	$m['_string_format'].__name__ = '_string_format';

	$m['_string_format'].__bind_type__ = 0;
	$m['_string_format'].__args__ = [null,null,['s'],['args', $p['list']([])],['kw', $p['dict']([])]];
	$m['format'] = function(val, spec) {
		if (typeof spec == 'undefined') spec=arguments.callee.__args__[3][1];
		var args,space;
		args = $p['list']([val]);
		space = $m['StringFormatSpace']();
		return $m['str'](space['format'](val, spec));
	};
	$m['format'].__name__ = 'format';

	$m['format'].__bind_type__ = 0;
	$m['format'].__args__ = [null,null,['val'],['spec', '']];
	$m['__iter_prepare'] = function(iter, reuse_tuple) {

    if (typeof iter == 'undefined') {
        throw $m['TypeError']("iter is undefined");
    }
    var it = {};
    it.$iter = iter;
    it.$loopvar = 0;
    it.$reuse_tuple = reuse_tuple;
    if (typeof (it.$arr = iter.__array) != 'undefined') {
        it.$gentype = 0;
    } else {
        it.$iter = iter.__iter__();
        it.$gentype = typeof (it.$arr = iter.__array) != 'undefined'? 0 : (typeof iter.$genfunc == 'function'? 1 : -1);
    }
    return it;
};
	$m['__wrapped_next'] = function(it) {
    var iterator = it.$iter;
    it.$nextval = it.$gentype?(it.$gentype > 0?
        iterator.next(true,it.$reuse_tuple):$p['wrapped_next'](iterator)
                              ) : it.$arr[it.$loopvar++];
    return it;
};
	$m['wrapped_next'] = function (iter) {
    try {
        var res = iter.next();
    } catch (e) {
        if ($m['isinstance'](e, $m['StopIteration'])) {
            return;
        }
        throw e;
    }
    return res;
};
	$m['__ass_unpack'] = function (data, count, extended) {
    if (data === null) {
        throw $m['TypeError']("'NoneType' is not iterable");
    }
    if (data.constructor === Array) {
    } else if (typeof data.__iter__ == 'function') {
        if (typeof data.__array == 'object') {
            data = data.__array;
        } else {
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                data = iter.__array;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
        }
    } else {
        throw $m['TypeError']("'" + $m['repr'](data) + "' is not iterable");
    }
    var res = new Array();
    if (typeof extended == 'undefined' || extended === null)
    {
        if (data.length != count)
        if (data.length > count)
            throw $m['ValueError']("too many values to unpack");
        else
            throw $m['ValueError']("need more than "+data.length+" values to unpack");
        return data;
    }
    else
    {
        throw $m['NotImplemented']("Extended unpacking is not implemented");
    }
};
	$m['__with'] = function(mgr, func) {
		var $attr425,exc,$attr426,$bool541,$bool539,value,$bool540,$pyjs_try_err,exit;
		exit = $m['type'](mgr)['__exit__'];
		value = $m['type'](mgr)['__enter__'](mgr);
		exc = true;
		try {
			try {
				func(value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					exc = false;
					if ((($bool540=!(($bool539=$pyjs_kwargs_call(null, exit, $m['sys']['exc_info'](), null, [{}, mgr])) === null || $bool539 === false || $bool539 === 0 || $bool539 === '' ?
						false :
						(typeof $bool539=='object'?
							(typeof $bool539.__nonzero__=='function'?
								$bool539.__nonzero__() :
								(typeof $bool539.__len__=='function'?
									($bool539.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool540 === false || $bool540 === 0 || $bool540 === '' ?
							false :
							(typeof $bool540=='object'?
								(typeof $bool540.__nonzero__=='function'?
									$bool540.__nonzero__() :
									(typeof $bool540.__len__=='function'?
										($bool540.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($pyjs.__last_exception__?
							$pyjs.__last_exception__.error:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
		} finally {
			if ((($bool541=exc) === null || $bool541 === false || $bool541 === 0 || $bool541 === '' ?
					false :
					(typeof $bool541=='object'?
						(typeof $bool541.__nonzero__=='function'?
							$bool541.__nonzero__() :
							(typeof $bool541.__len__=='function'?
								($bool541.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				exit(mgr, null, null, null);
			}
		}
		return null;
	};
	$m['__with'].__name__ = '__with';

	$m['__with'].__bind_type__ = 0;
	$m['__with'].__args__ = [null,null,['mgr'],['func']];
	$m['init']();
	$m['Ellipsis'] = $m['EllipsisType']();
	$m['__nondynamic_modules__'] = $p['dict']([]);
	$m['__import__'] = function(name, globals, locals, fromlist, level) {
		if (typeof globals == 'undefined') globals=arguments.callee.__args__[3][1];
		if (typeof locals == 'undefined') locals=arguments.callee.__args__[4][1];
		if (typeof fromlist == 'undefined') fromlist=arguments.callee.__args__[5][1];
		if (typeof level == 'undefined') level=arguments.callee.__args__[6][1];
		var $add192,$bool544,$add191,module,$bool542,$and66,$and65,$bool543;
		module = $m['___import___'](name, null);
		if ((($bool544=((($bool543=$and65=!(($bool542=(module === null)) === null || $bool542 === false || $bool542 === 0 || $bool542 === '' ?
			false :
			(typeof $bool542=='object'?
				(typeof $bool542.__nonzero__=='function'?
					$bool542.__nonzero__() :
					(typeof $bool542.__len__=='function'?
						($bool542.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool543 === false || $bool543 === 0 || $bool543 === '' ?
			false :
			(typeof $bool543=='object'?
				(typeof $bool543.__nonzero__=='function'?
					$bool543.__nonzero__() :
					(typeof $bool543.__len__=='function'?
						($bool543.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?$m['hasattr'](module, '__was_initialized__'):$and65)) === null || $bool544 === false || $bool544 === 0 || $bool544 === '' ?
				false :
				(typeof $bool544=='object'?
					(typeof $bool544.__nonzero__=='function'?
						$bool544.__nonzero__() :
						(typeof $bool544.__len__=='function'?
							($bool544.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return module;
		}
		throw ($m['ImportError']((typeof ($add191='No module named ')==typeof ($add192=name) && (typeof $add191=='number'||typeof $add191=='string')?
			$add191+$add192:
			$m['op_add']($add191,$add192))));
		return null;
	};
	$m['__import__'].__name__ = '__import__';

	$m['__import__'].__bind_type__ = 0;
	$m['__import__'].__args__ = [null,null,['name'],['globals', $p['dict']([])],['locals', $p['dict']([])],['fromlist', $p['list']([])],['level', (typeof ($usub29=1)=='number'?
		-$usub29:
		$m['op_usub']($usub29))]];
	$m['sys'] = $m['___import___']('sys', null);
	$m['dynamic'] = $m['___import___']('dynamic', null);
	return this;
}; /* end pyjslib */


/* end module: pyjslib */


/*
PYJS_DEPS: ['sys', 'dynamic']
*/
