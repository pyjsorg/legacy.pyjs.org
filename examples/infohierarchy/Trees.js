/* start module: Trees */
$pyjs.loaded_modules['Trees'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Trees'].__was_initialized__) return $pyjs.loaded_modules['Trees'];
	var $m = $pyjs.loaded_modules["Trees"];
	$m.__repr__ = function() { return "<module: Trees>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Trees';
	$m.__name__ = __mod_name__;


	$m['Tree'] = $p['___import___']('pyjamas.ui.Tree.Tree', null, null, false);
	$m['TreeItem'] = $p['___import___']('pyjamas.ui.TreeItem.TreeItem', null, null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['Trees'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Trees';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Composite']['__init__'](self);
			self.fProto = $p['list']([]);
			self.fTree = $m['Tree']();
			self['fTree']['addTreeListener'](self);
			self['initWidget']($p['getattr'](self, 'fTree'));
			self.remote = (typeof InfoServicePython == "undefined"?$m.InfoServicePython:InfoServicePython)();
			self['remote']['index']('', 1, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('protoise_tree', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $5,$iter1_nextval,$iter1_type,name,i,res,$2,children,$iter1_iter,$bool2,d,$bool1,$iter1_array,$len1,$6,$4,$1,$3,$iter1_idx;
			if ((($bool2=!(($bool1=data) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return $p['list']([]);
			}
			res = $p['list']([]);
			$iter1_iter = $p['range']((($len1=data) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				d = (typeof ($1=data).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i));
				name = (typeof ($3=d).__array != 'undefined'?
					((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(0));
				children = (typeof ($5=d).__array != 'undefined'?
					((typeof $5.__array[$6=1]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(1));
				res['append']((typeof Proto == "undefined"?$m.Proto:Proto)(name, self['protoise_tree'](children)));
			}
			return res;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['protoise_tree'] = $method;
		$method = $pyjs__bind_method2('create_tree', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,i,p,$iter2_idx,$len2,$8,$7,$iter2_array;
			self.fProto = self['protoise_tree'](data);
			$iter2_iter = $p['range']((($len2=$p['getattr'](self, 'fProto')) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				p = (typeof ($7=$p['getattr'](self, 'fProto')).__array != 'undefined'?
					((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
						$7.__getitem__($8)):
						$7.__getitem__(i));
				p['pathify']();
				self['createItem'](p);
				self['fTree']['addItem']($p['getattr'](p, 'item'));
			}
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['create_tree'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var $eq2,$eq1,$bool3;
			if ((($bool3=(($eq1=$p['getattr'](request_info, 'method'))===($eq2='index')&&$eq1===null?true:
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
						 true ) )) {
				self['create_tree'](response);
			}
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$method = $pyjs__bind_method2('onRemoteError', function(code, message, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				message = arguments[2];
				request_info = arguments[3];
			}

			$m['RootPanel']()['add']($m['HTML']($p['sprintf']('Server Error or Invalid Response: ERROR %s - %s', $p['tuple']([code, message]))));
			return null;
		}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		$method = $pyjs__bind_method2('onTreeItemSelected', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['onTreeItemSelected'] = $method;
		$method = $pyjs__bind_method2('onTreeItemStateChanged', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $iter3_idx,$10,$11,$iter3_array,proto,i,$iter3_type,$9,$12,$iter3_iter,$bool4,child,$iter3_nextval,$len3;
			child = item['getChild'](0);
			if ((($bool4=$p['hasattr'](child, 'isPendingItem')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				item['removeItem'](child);
				proto = item['getUserObject']();
				$iter3_iter = $p['range']((($len3=$p['getattr'](proto, 'children')) === null?0:
					(typeof $len3.__array != 'undefined' ? $len3.__array.length:
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'?$len3.length:
								$p['len']($len3))))));
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					i = $iter3_nextval;
					self['createItem']((typeof ($9=$p['getattr'](proto, 'children')).__array != 'undefined'?
						((typeof $9.__array[$10=i]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(i)));
					item['addItem']($p['getattr']((typeof ($11=$p['getattr'](proto, 'children')).__array != 'undefined'?
						((typeof $11.__array[$12=i]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(i)), 'item'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['onTreeItemStateChanged'] = $method;
		$method = $pyjs__bind_method2('createItem', function(proto) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proto = arguments[1];
			}
			var $cmp1,$cmp2,$len4,$bool5;
			proto.item = $m['TreeItem']($p['getattr'](proto, 'text'));
			proto['item']['setUserObject'](proto);
			if ((($bool5=((($cmp1=(($len4=$p['getattr'](proto, 'children')) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4))))))===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				proto['item']['addItem']((typeof PendingItem == "undefined"?$m.PendingItem:PendingItem)());
			}
			return null;
		}
	, 1, [null,null,['self'],['proto']]);
		$cls_definition['createItem'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Trees', $p['tuple']($bases), $data);
	})();
	$m['Proto'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Trees';
		$method = $pyjs__bind_method2('__init__', function(text, children) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				children = arguments[2];
			}
			if (typeof children == 'undefined') children=arguments.callee.__args__[4][1];
			var $bool6;
			self.children = $p['list']([]);
			self.item = null;
			self.text = text;
			self.root = '/';
			if ((($bool6=(children !== null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self.children = children;
			}
			return null;
		}
	, 1, [null,null,['self'],['text'],['children', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('pathify', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,c,$add4,$iter4_nextval,$iter4_idx,$add3,$add1,$iter4_type,$iter4_array,$iter4_iter;
			$iter4_iter = $p['getattr'](self, 'children');
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				c = $iter4_nextval;
				c.root = (typeof ($add3=(typeof ($add1=$p['getattr'](self, 'root'))==typeof ($add2=$p['getattr'](self, 'text')) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)))==typeof ($add4='/') && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				c['pathify']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pathify'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Proto', $p['tuple']($bases), $data);
	})();
	$m['PendingItem'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Trees';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['TreeItem']['__init__'](self, 'Please wait...');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('isPendingItem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isPendingItem'] = $method;
		var $bases = new Array($m['TreeItem']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PendingItem', $p['tuple']($bases), $data);
	})();
	$m['InfoServicePython'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Trees';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['JSONProxy']['__init__'](self, 'services/EchoService.py', $p['list'](['index']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('InfoServicePython', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Trees */


/* end module: Trees */


/*
PYJS_DEPS: ['pyjamas.ui.Tree.Tree', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Tree', 'pyjamas.ui.TreeItem.TreeItem', 'pyjamas.ui.TreeItem', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.Window', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService']
*/
