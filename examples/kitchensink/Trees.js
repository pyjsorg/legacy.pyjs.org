/* start module: Trees */
$pyjs.loaded_modules['Trees'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Trees'].__was_initialized__) return $pyjs.loaded_modules['Trees'];
	var $m = $pyjs.loaded_modules["Trees"];
	$m.__repr__ = function() { return "<module: Trees>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Trees';
	$m.__name__ = __mod_name__;


	$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
	$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
	$m['Tree'] = $p['___import___']('pyjamas.ui.Tree.Tree', null, null, false);
	$m['TreeItem'] = $p['___import___']('pyjamas.ui.TreeItem.TreeItem', null, null, false);
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
			var $iter1_nextval,$iter1_type,i,$iter1_iter,$iter1_array,$len1,$4,$1,$2,$3,$iter1_idx;
			$m['Sink']['__init__'](self);
			self.fProto = $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('Beethoven', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('Concertos', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('No. 1 - C'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 2 - B-Flat Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 3 - C Minor'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 4 - G Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 5 - E-Flat Major')])), (typeof Proto == "undefined"?$m.Proto:Proto)('Quartets', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('Six String Quartets'), (typeof Proto == "undefined"?$m.Proto:Proto)('Three String Quartets'), (typeof Proto == "undefined"?$m.Proto:Proto)('Grosse Fugue for String Quartets')])), (typeof Proto == "undefined"?$m.Proto:Proto)('Sonatas', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('Sonata in A Minor'), (typeof Proto == "undefined"?$m.Proto:Proto)('Sonata in F Major')])), (typeof Proto == "undefined"?$m.Proto:Proto)('Symphonies', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('No. 1 - C Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 2 - D Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 3 - E-Flat Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 4 - B-Flat Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 5 - C Minor'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 6 - F Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 7 - A Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 8 - F Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 9 - D Minor')]))])), (typeof Proto == "undefined"?$m.Proto:Proto)('Brahms', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('Concertos', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('Violin Concerto'), (typeof Proto == "undefined"?$m.Proto:Proto)('Double Concerto - A Minor'), (typeof Proto == "undefined"?$m.Proto:Proto)('Piano Concerto No. 1 - D Minor'), (typeof Proto == "undefined"?$m.Proto:Proto)('Piano Concerto No. 2 - B-Flat Major')])), (typeof Proto == "undefined"?$m.Proto:Proto)('Quartets', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('Piano Quartet No. 1 - G Minor'), (typeof Proto == "undefined"?$m.Proto:Proto)('Piano Quartet No. 2 - A Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('Piano Quartet No. 3 - C Minor'), (typeof Proto == "undefined"?$m.Proto:Proto)('String Quartet No. 3 - B-Flat Minor')])), (typeof Proto == "undefined"?$m.Proto:Proto)('Sonatas', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('Two Sonatas for Clarinet - F Minor'), (typeof Proto == "undefined"?$m.Proto:Proto)('Two Sonatas for Clarinet - E-Flat Major')])), (typeof Proto == "undefined"?$m.Proto:Proto)('Symphonies', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('No. 1 - C Minor'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 2 - D Minor'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 3 - F Major'), (typeof Proto == "undefined"?$m.Proto:Proto)('No. 4 - E Minor')]))])), (typeof Proto == "undefined"?$m.Proto:Proto)('Mozart', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('Concertos', $p['list']([(typeof Proto == "undefined"?$m.Proto:Proto)('Piano Concerto No. 12'), (typeof Proto == "undefined"?$m.Proto:Proto)('Piano Concerto No. 17'), (typeof Proto == "undefined"?$m.Proto:Proto)('Clarinet Concerto'), (typeof Proto == "undefined"?$m.Proto:Proto)('Violin Concerto No. 5'), (typeof Proto == "undefined"?$m.Proto:Proto)('Violin Concerto No. 4')]))]))]);
			self.fTree = $m['Tree']();
			$iter1_iter = $p['range']((($len1=$p['getattr'](self, 'fProto')) === null?0:
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
				self['createItem']((typeof ($1=$p['getattr'](self, 'fProto')).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i)));
				self['fTree']['addItem']($p['getattr']((typeof ($3=$p['getattr'](self, 'fProto')).__array != 'undefined'?
					((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
						$3.__getitem__($4)):
						$3.__getitem__(i)), 'item'));
			}
			self['fTree']['addTreeListener'](self);
			self['initWidget']($p['getattr'](self, 'fTree'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
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
			var index,$iter2_nextval,$iter2_type,$iter2_iter,proto,i,$9,$iter2_idx,$bool1,$len2,$8,child,$6,$7,$10,$5,$iter2_array;
			child = item['getChild'](0);
			if ((($bool1=$p['hasattr'](child, 'isPendingItem')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				item['removeItem'](child);
				proto = item['getUserObject']();
				$iter2_iter = $p['range']((($len2=$p['getattr'](proto, 'children')) === null?0:
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
					self['createItem']((typeof ($5=$p['getattr'](proto, 'children')).__array != 'undefined'?
						((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(i)));
					index = self['getSortIndex'](item, $p['getattr']((typeof ($7=$p['getattr'](proto, 'children')).__array != 'undefined'?
						((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(i)), 'text'));
					item['insertItem']($p['getattr']((typeof ($9=$p['getattr'](proto, 'children')).__array != 'undefined'?
						((typeof $9.__array[$10=i]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(i)), 'item'), index);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['onTreeItemStateChanged'] = $method;
		$method = $pyjs__bind_method2('getSortIndex', function(parent, text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parent = arguments[1];
				text = arguments[2];
			}
			var node,$cmp4,$cmp1,$cmp3,$cmp2,$bool2,item,$add1,$add2,nodes,$bool3;
			nodes = parent['getChildCount']();
			node = 0;
			text = text['lower']();
			while ((($bool2=((($cmp1=node)===($cmp2=nodes)?0:
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
				item = parent['getChild'](node);
				if ((($bool3=((($cmp3=$p['cmp'](text, item['getText']()['lower']()))===($cmp4=0)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					break;
				}
				else {
					node = (typeof ($add1=node)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2));
				}
			}
			return node;
		}
	, 1, [null,null,['self'],['parent'],['text']]);
		$cls_definition['getSortIndex'] = $method;
		$method = $pyjs__bind_method2('createItem', function(proto) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				proto = arguments[1];
			}
			var $cmp5,$cmp6,$len3,$bool4;
			proto.item = $m['TreeItem']($p['getattr'](proto, 'text'));
			proto['item']['setUserObject'](proto);
			if ((($bool4=((($cmp5=(($len3=$p['getattr'](proto, 'children')) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))))===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				proto['item']['addItem']((typeof PendingItem == "undefined"?$m.PendingItem:PendingItem)());
			}
			return null;
		}
	, 1, [null,null,['self'],['proto']]);
		$cls_definition['createItem'] = $method;
		var $bases = new Array($m['Sink']);
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
			var $bool5;
			self.children = $p['list']([]);
			self.item = null;
			self.text = text;
			if ((($bool5=(children !== null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self.children = children;
			}
			return null;
		}
	, 1, [null,null,['self'],['text'],['children', null]]);
		$cls_definition['__init__'] = $method;
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
	$m['init'] = function() {
		var text;
		text = 'GWT has a built-in <code>Tree</code> widget. The tree is focusable and has keyboard support as well.';
		return $m['SinkInfo']('Trees', text, $m['Trees']);
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	return this;
}; /* end Trees */


/* end module: Trees */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Tree.Tree', 'pyjamas.ui.Tree', 'pyjamas.ui.TreeItem.TreeItem', 'pyjamas.ui.TreeItem']
*/
