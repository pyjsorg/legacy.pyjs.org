/* start module: pyjamas.ui.UIObject */
$pyjs.loaded_modules['pyjamas.ui.UIObject'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.UIObject'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.UIObject'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs.loaded_modules["pyjamas.ui.UIObject"];
	$m.__repr__ = function() { return "<module: pyjamas.ui.UIObject>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.UIObject';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['pyjamas.ui']['UIObject'] = $pyjs.loaded_modules['pyjamas.ui.UIObject'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
	$m['Applier'] = $p['___import___']('pyjamas.ui.Applier', 'pyjamas.ui', null, false);
	$m['findStyleName'] = function(element, style) {
		var lastPos,$eq10,$and1,$sub2,$sub1,$and2,$or4,$eq8,$eq9,$or1,$or3,$or2,$eq2,$eq3,oldStyle,$eq1,$eq6,$eq7,$eq4,$eq5,$bool2,$bool3,$bool1,$bool6,$bool7,$bool4,$bool5,$cmp1,$4,$2,$3,$1,last,idx,$cmp2,$add2,$add3,$add1,$len2,$add4,$len1;
		oldStyle = $m['DOM']['getAttribute'](element, 'className');
		if ((($bool1=(oldStyle === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			return (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
		}
		idx = oldStyle['find'](style);
		lastPos = (($len1=oldStyle) === null?0:
			(typeof $len1.__array != 'undefined' ? $len1.__array.length:
				(typeof $len1.__len__ == 'function'?$len1.__len__():
					(typeof $len1.length != 'undefined'?$len1.length:
						$p['len']($len1)))));
		while ((($bool2=!(($eq1=idx)===($eq2=(typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2)))&&$eq1===null?true:
			($eq1===null?false:($eq2===null?false:
				((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
					((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
						$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			if ((($bool4=((($bool3=$or1=(($eq3=idx)===($eq4=0)&&$eq3===null?true:
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
					 true ) )?$or1:(($eq5=(typeof ($1=oldStyle).__array != 'undefined'?
				((typeof $1.__array[$2=(typeof ($sub1=idx)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2))]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__((typeof ($sub1=idx)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)))))===($eq6=' ')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6))))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				last = (typeof ($add1=idx)==typeof ($add2=(($len2=style) === null?0:
					(typeof $len2.__array != 'undefined' ? $len2.__array.length:
						(typeof $len2.__len__ == 'function'?$len2.__len__():
							(typeof $len2.length != 'undefined'?$len2.length:
								$p['len']($len2)))))) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				if ((($bool7=((($bool5=$or3=(($eq7=last)===($eq8=lastPos)&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:((($bool6=$and1=((($cmp1=last)===($cmp2=lastPos)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq9=(typeof ($3=oldStyle).__array != 'undefined'?
					((typeof $3.__array[$4=last]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(last)))===($eq10=' ')&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10))))):$and1))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					break;
				}
			}
			idx = oldStyle['find'](style, (typeof ($add3=idx)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)));
		}
		return idx;
	};
	$m['findStyleName'].__name__ = 'findStyleName';

	$m['findStyleName'].__bind_type__ = 0;
	$m['findStyleName'].__args__ = [null,null,['element'],['style']];
	$m['setStyleName'] = function(element, style, add) {
		var $bool10,$bool11,$bool12,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,end,$len3,$sub3,$sub4,begin,oldStyle,$add10,$add11,$add12,$bool8,$bool9,idx,$add6,$add7,$add5,$add8,$add9;
		oldStyle = $m['DOM']['getAttribute'](element, 'className');
		if ((($bool8=(oldStyle === null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
			oldStyle = '';
		}
		idx = $m['findStyleName'](element, style);
		if ((($bool9=add) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
			if ((($bool10=(($eq11=idx)===($eq12=(typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3)))&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				$m['DOM']['setAttribute'](element, 'className', (typeof ($add7=(typeof ($add5=oldStyle)==typeof ($add6=' ') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6)))==typeof ($add8=style) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8)));
			}
			return null;
		}
		if ((($bool11=(($eq13=idx)===($eq14=(typeof ($usub4=1)=='number'?
			-$usub4:
			$p['op_usub']($usub4)))&&$eq13===null?true:
			($eq13===null?false:($eq14===null?false:
				((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
					((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
						$eq13==$eq14)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
			return null;
		}
		if ((($bool12=(($eq15=idx)===($eq16=0)&&$eq15===null?true:
			($eq15===null?false:($eq16===null?false:
				((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
					((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
						$eq15==$eq16)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
			begin = '';
		}
		else {
			begin = $p['__getslice'](oldStyle, 0, (typeof ($sub3=idx)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)));
		}
		end = $p['__getslice'](oldStyle, (typeof ($add9=idx)==typeof ($add10=(($len3=style) === null?0:
			(typeof $len3.__array != 'undefined' ? $len3.__array.length:
				(typeof $len3.__len__ == 'function'?$len3.__len__():
					(typeof $len3.length != 'undefined'?$len3.length:
						$p['len']($len3)))))) && (typeof $add9=='number'||typeof $add9=='string')?
			$add9+$add10:
			$p['op_add']($add9,$add10)), null);
		$m['DOM']['setAttribute'](element, 'className', (typeof ($add11=begin)==typeof ($add12=end) && (typeof $add11=='number'||typeof $add11=='string')?
			$add11+$add12:
			$p['op_add']($add11,$add12)));
		return null;
	};
	$m['setStyleName'].__name__ = 'setStyleName';

	$m['setStyleName'].__bind_type__ = 0;
	$m['setStyleName'].__args__ = [null,null,['element'],['style'],['add']];
	$m['UIObject'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.ui.UIObject';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['visible', 'Visibility', 'Visible', null]), $p['tuple'](['element', 'Element', 'Element', null]), $p['tuple'](['stylename', 'Style name', 'StyleName', null]), $p['tuple'](['width', 'Width', 'Width', null]), $p['tuple'](['height', 'Height', 'Height', null]), $p['tuple'](['size', 'Size', 'Size', null]), $p['tuple'](['title', 'Title', 'Title', null]), $p['tuple'](['zindex', 'Z Index', 'zIndex', null])]);
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add14,$add13;
			return (typeof ($add13=$m['Applier']['_getProps']())==typeof ($add14=$p['getattr'](self, '_props')) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
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

			$pyjs_kwargs_call($m['Applier'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAbsoluteLeft'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteLeft'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteTop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAbsoluteTop'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteTop'] = $method;
		$method = $pyjs__bind_method2('getElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'element');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getElement'] = $method;
		$method = $pyjs__bind_method2('getOffsetHeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute']($p['getattr'](self, 'element'), 'offsetHeight');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOffsetHeight'] = $method;
		$method = $pyjs__bind_method2('getOffsetWidth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute']($p['getattr'](self, 'element'), 'offsetWidth');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOffsetWidth'] = $method;
		$method = $pyjs__bind_method2('getStyleName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute']($p['getattr'](self, 'element'), 'className');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStyleName'] = $method;
		$method = $pyjs__bind_method2('getStylePrimaryName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $6,fullClassName,$bool13,$5;
			fullClassName = self['getStyleName']();
			if ((($bool13=fullClassName) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				return (typeof ($5=fullClassName['$$split']()).__array != 'undefined'?
					((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStylePrimaryName'] = $method;
		$method = $pyjs__bind_method2('getStyleAttribute', function(attribute) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attribute = arguments[1];
			}
			var el,$iter1_nextval,$iter1_type,$iter1_idx,$bool14,$iter1_iter,result,attr,$iter1_array;
			if ((($bool14=$p['isinstance'](attribute, $p['basestring'])) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				return $m['DOM']['getStyleAttribute'](self['getElement'](), attribute);
			}
			el = self['getElement']();
			result = $p['dict']([]);
			$iter1_iter = attribute;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				attr = $iter1_nextval;
				result.__setitem__(attr, $m['DOM']['getStyleAttribute'](el, attr));
			}
			return result;
		}
	, 1, [null,null,['self'],['attribute']]);
		$cls_definition['getStyleAttribute'] = $method;
		$method = $pyjs__bind_method2('getTitle', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute']($p['getattr'](self, 'element'), 'title');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTitle'] = $method;
		$method = $pyjs__bind_method2('setElement', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			self.element = element;
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['setElement'] = $method;
		$method = $pyjs__bind_method2('setHeight', function(height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}
			var $bool15;
			if ((($bool15=(height === null)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				height = '';
			}
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'element'), 'height', $p['str'](height));
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setHeight'] = $method;
		$method = $pyjs__bind_method2('getHeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getStyleAttribute']($p['getattr'](self, 'element'), 'height');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeight'] = $method;
		$method = $pyjs__bind_method2('setPixelSize', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $cmp5,$cmp4,$cmp6,$cmp3,$bool16,$bool17;
			if ((($bool16=((((($cmp3=width)===($cmp4=0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				self['setWidth']($p['sprintf']('%dpx', width));
			}
			if ((($bool17=((((($cmp5=height)===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				self['setHeight']($p['sprintf']('%dpx', height));
			}
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['setPixelSize'] = $method;
		$method = $pyjs__bind_method2('setSize', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['setWidth'](width);
			self['setHeight'](height);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['setSize'] = $method;
		$method = $pyjs__bind_method2('addStyleName', function(style) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}

			self['setStyleName']($p['getattr'](self, 'element'), style, true);
			return null;
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['addStyleName'] = $method;
		$method = $pyjs__bind_method2('addStyleDependentName', function(styleSuffix) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleSuffix = arguments[1];
			}
			var $add15,$add16,$add17,$add18;
			self['addStyleName']((typeof ($add17=(typeof ($add15=self['getStylePrimaryName']())==typeof ($add16='-') && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16)))==typeof ($add18=styleSuffix) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18)));
			return null;
		}
	, 1, [null,null,['self'],['styleSuffix']]);
		$cls_definition['addStyleDependentName'] = $method;
		$method = $pyjs__bind_method2('removeStyleName', function(style) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}

			self['setStyleName']($p['getattr'](self, 'element'), style, false);
			return null;
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['removeStyleName'] = $method;
		$method = $pyjs__bind_method2('removeStyleDependentName', function(styleSuffix) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleSuffix = arguments[1];
			}
			var $add21,$add20,$add22,$add19;
			self['removeStyleName']((typeof ($add21=(typeof ($add19=self['getStylePrimaryName']())==typeof ($add20='-') && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20)))==typeof ($add22=styleSuffix) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				$p['op_add']($add21,$add22)));
			return null;
		}
	, 1, [null,null,['self'],['styleSuffix']]);
		$cls_definition['removeStyleDependentName'] = $method;
		$method = $pyjs__bind_method2('setStyleName', function(element, style, add) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				style = arguments[2];
				add = arguments[3];
			}
			if (typeof style == 'undefined') style=arguments.callee.__args__[4][1];
			if (typeof add == 'undefined') add=arguments.callee.__args__[5][1];
			var $bool18;
			if ((($bool18=(style !== null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				$m['setStyleName'](element, style, add);
				return null;
			}
			style = element;
			$m['DOM']['setAttribute']($p['getattr'](self, 'element'), 'className', style);
			return null;
		}
	, 1, [null,null,['self'],['element'],['style', null],['add', true]]);
		$cls_definition['setStyleName'] = $method;
		$method = $pyjs__bind_method2('setStyleAttribute', function(attribute, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attribute = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments.callee.__args__[4][1];
			var el,$iter2_nextval,$iter2_type,attr,$iter2_iter,$bool19,$iter2_idx,val,$iter2_array;
			if ((($bool19=(value !== null)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				$m['DOM']['setStyleAttribute'](self['getElement'](), attribute, value);
				return null;
			}
			el = self['getElement']();
			$iter2_iter = attribute['items']();
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter2_nextval, 2, null);
				attr = $tupleassign1[0];
				val = $tupleassign1[1];
				$m['DOM']['setStyleAttribute'](el, attr, val);
			}
			return null;
		}
	, 1, [null,null,['self'],['attribute'],['value', null]]);
		$cls_definition['setStyleAttribute'] = $method;
		$method = $pyjs__bind_method2('setTitle', function(title) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
			}

			$m['DOM']['setAttribute']($p['getattr'](self, 'element'), 'title', title);
			return null;
		}
	, 1, [null,null,['self'],['title']]);
		$cls_definition['setTitle'] = $method;
		$method = $pyjs__bind_method2('setWidth', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $bool20;
			if ((($bool20=(width === null)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20.__nonzero__=='function'?
							$bool20.__nonzero__() :
							(typeof $bool20.__len__=='function'?
								($bool20.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				width = '';
			}
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'element'), 'width', $p['str'](width));
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setWidth'] = $method;
		$method = $pyjs__bind_method2('getWidth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getStyleAttribute']($p['getattr'](self, 'element'), 'width');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidth'] = $method;
		$method = $pyjs__bind_method2('sinkEvents', function(eventBitsToAdd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventBitsToAdd = arguments[1];
			}
			var $bool21;
			if ((($bool21=$p['getattr'](self, 'element')) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				$m['DOM']['sinkEvents'](self['getElement'](), (eventBitsToAdd)|($m['DOM']['getEventsSunk'](self['getElement']())));
			}
			return null;
		}
	, 1, [null,null,['self'],['eventBitsToAdd']]);
		$cls_definition['sinkEvents'] = $method;
		$method = $pyjs__bind_method2('setzIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			$m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'element'), 'zIndex', index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setzIndex'] = $method;
		$method = $pyjs__bind_method2('isVisible', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			if (typeof element == 'undefined') element=arguments.callee.__args__[3][1];

			return self['getVisible'](element);
		}
	, 1, [null,null,['self'],['element', null]]);
		$cls_definition['isVisible'] = $method;
		$method = $pyjs__bind_method2('getVisible', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			if (typeof element == 'undefined') element=arguments.callee.__args__[3][1];
			var $eq18,$pyjs_try_err,$bool23,$bool22,$eq17;
			if ((($bool23=!(($bool22=element) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22.__nonzero__=='function'?
						$bool22.__nonzero__() :
						(typeof $bool22.__len__=='function'?
							($bool22.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				element = $p['getattr'](self, 'element');
			}
			try {
				return !(($eq17=$p['getattr']($p['getattr'](element, 'style'), 'display'))===($eq18='none')&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
								$eq17==$eq18)))));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					return true;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['element', null]]);
		$cls_definition['getVisible'] = $method;
		$method = $pyjs__bind_method2('setVisible', function(element, visible) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				visible = arguments[2];
			}
			if (typeof visible == 'undefined') visible=arguments.callee.__args__[4][1];
			var $bool25,$bool24;
			if ((($bool24=(visible === null)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				visible = element;
				element = $p['getattr'](self, 'element');
			}
			if ((($bool25=visible) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				$m['DOM']['setStyleAttribute'](element, 'display', '');
			}
			else {
				$m['DOM']['setStyleAttribute'](element, 'display', 'none');
			}
			return null;
		}
	, 1, [null,null,['self'],['element'],['visible', null]]);
		$cls_definition['setVisible'] = $method;
		$method = $pyjs__bind_method2('unsinkEvents', function(eventBitsToRemove) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventBitsToRemove = arguments[1];
			}

			$m['DOM']['sinkEvents'](self['getElement'](), (~(eventBitsToRemove))&($m['DOM']['getEventsSunk'](self['getElement']())));
			return null;
		}
	, 1, [null,null,['self'],['eventBitsToRemove']]);
		$cls_definition['unsinkEvents'] = $method;
		var $bases = new Array($m['Applier']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('UIObject', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.UIObject', 'UIObject', $m['UIObject']);
	return this;
}; /* end pyjamas.ui.UIObject */


/* end module: pyjamas.ui.UIObject */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.Window', 'pyjamas.ui.Applier', 'pyjamas.ui']
*/
