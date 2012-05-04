/* start module: Navigate */
$pyjs.loaded_modules['Navigate'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Navigate'].__was_initialized__) return $pyjs.loaded_modules['Navigate'];
	var $m = $pyjs.loaded_modules["Navigate"];
	$m.__repr__ = function() { return "<module: Navigate>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Navigate';
	$m.__name__ = __mod_name__;
	var $bool16,$eq11,$eq12;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['Buoy'] = $p['___import___']('buoy.Buoy', null, null, false);
	$m['BuoyService'] = $p['___import___']('buoy.BuoyService', null, null, false);
	$m['pygwt'] = $p['___import___']('pygwt', null);
	$m['Hovercraft'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Navigate';
		$method = $pyjs__bind_method2('__init__', function(tabBar) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			} else {
				var self = arguments[0];
				tabBar = arguments[1];
				var kwargs = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

			}
			if (typeof tabBar == 'undefined') tabBar=arguments.callee.__args__[3][1];
			var $iter3_array,$iter1_iter,tab,$iter2_type,$iter3_idx,$9,$iter2_iter,$iter1_array,$11,$iter3_iter,$iter1_nextval,$iter2_idx,$8,$iter3_type,$6,$7,$4,$5,$2,$3,$1,$iter2_nextval,$10,$iter1_type,$12,items,item,$len2,$iter1_idx,$len1,h,$iter3_nextval,$iter2_array;
			$pyjs_kwargs_call($m['TabPanel'], '__init__', kwargs, null, [{}, self, tabBar]);
			self.parent_buoy = null;
			self.tabs = $p['list']([$p['dict']([['hovertype', $m['ListBox']()], ['name', 'Cost']]), $p['dict']([['hovertype', $m['ListBox']()], ['name', 'Speed']])]);
			self.cost = (typeof ($3=(typeof ($1=$p['getattr'](self, 'tabs')).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0))).__array != 'undefined'?
				((typeof $3.__array[$4='hovertype']) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__('hovertype'));
			items = $p['list'](['cheap', 'next to cheap', 'average', 'above average', 'expensive', 'if you have to ask']);
			self['cost']['setVisibleItemCount']((($len1=items) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))));
			$iter1_iter = items;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				item = $iter1_nextval;
				self['cost']['addItem'](item);
			}
			self['cost']['addChangeListener'](self);
			self.speed = (typeof ($7=(typeof ($5=$p['getattr'](self, 'tabs')).__array != 'undefined'?
				((typeof $5.__array[$6=1]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(1))).__array != 'undefined'?
				((typeof $7.__array[$8='hovertype']) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__('hovertype'));
			items = $p['list'](['very slow', 'slow', 'average', 'above average', 'fast', 'quick', 'hyper', 'turbo', 'lightening', 'light']);
			self['speed']['setVisibleItemCount']((($len2=items) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))));
			$iter2_iter = items;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				item = $iter2_nextval;
				self['speed']['addItem'](item);
			}
			self['speed']['addChangeListener'](self);
			$iter3_iter = $p['getattr'](self, 'tabs');
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				tab = $iter3_nextval;
				h = $m['HorizontalPanel']();
				h['add']((typeof ($9=tab).__array != 'undefined'?
					((typeof $9.__array[$10='hovertype']) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__('hovertype')));
				self['add'](h, (typeof ($11=tab).__array != 'undefined'?
					((typeof $11.__array[$12='name']) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__('name')));
			}
			return null;
		}
	, 1, ['kwargs',null,['self'],['tabBar', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set_speed', function(buoy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				buoy = arguments[1];
			}
			var $14,txt,$13,$bool1,params,last_buoy,v,$sub3,$sub2,$sub1,$sub4;
			params = buoy['plan']();
			if ((($bool1=params) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				v = $p['float_int']((typeof ($13=params).__array != 'undefined'?
					((typeof $13.__array[$14='v']) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__('v')));
			}
			else {
				v = 1;
			}
			self['speed']['setSelectedIndex']((typeof ($sub1=v)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)));
			txt = self['speed']['getItemText']((typeof ($sub3=v)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)));
			last_buoy = buoy['$$new'](txt, $p['dict']([['v', v]]));
			last_buoy['end']();
			return null;
		}
	, 1, [null,null,['self'],['buoy']]);
		$cls_definition['set_speed'] = $method;
		$method = $pyjs__bind_method2('set_cost', function(buoy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				buoy = arguments[1];
			}
			var $15,$16,$bool2,$sub8,params,last_buoy,v,txt,$sub7,$sub6,$sub5;
			params = buoy['plan']();
			if ((($bool2=params) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				v = $p['float_int']((typeof ($15=params).__array != 'undefined'?
					((typeof $15.__array[$16='v']) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__('v')));
			}
			else {
				v = 1;
			}
			self['cost']['setSelectedIndex']((typeof ($sub5=v)==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6)));
			txt = self['cost']['getItemText']((typeof ($sub7=v)==typeof ($sub8=1) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8)));
			last_buoy = buoy['$$new'](txt, $p['dict']([['v', v]]));
			last_buoy['end']();
			return null;
		}
	, 1, [null,null,['self'],['buoy']]);
		$cls_definition['set_cost'] = $method;
		$method = $pyjs__bind_method2('onChange', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $cmp1,idx,$cmp2,$eq2,$eq3,$eq1,$eq4,$add2,$bool3,$add1,$add4,$bool4,$bool5,txt,$add3,buoy;
			idx = sender['getSelectedIndex']();
			if ((($bool3=((((($cmp1=idx)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))))|1) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				txt = sender['getItemText'](idx);
				if ((($bool4=(($eq1=sender)===($eq2=$p['getattr'](self, 'cost'))&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					buoy = self['buoy']['$$new'](txt, $p['dict']([['v', (typeof ($add1=idx)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2))]]));
					buoy['end']();
				}
				else if ((($bool5=(($eq3=sender)===($eq4=$p['getattr'](self, 'speed'))&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					buoy = self['buoy']['$$new'](txt, $p['dict']([['v', (typeof ($add3=idx)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4))]]));
					buoy['end']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onChange'] = $method;
		$method = $pyjs__bind_method2('set', function(parentBuoy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parentBuoy = arguments[1];
			}
			var $17,tab,$iter4_nextval,$18,$19,n,$iter4_idx,$bool6,$bool7,$iter4_type,$20,$iter4_array,params,$iter4_iter;
			self.parent_buoy = parentBuoy;
			params = parentBuoy['plan']();
			if ((($bool6=params) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$iter4_iter = $p['enumerate']($p['getattr'](self, 'tabs'));
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter4_nextval, 2, null);
					n = $tupleassign1[0];
					tab = $tupleassign1[1];
					if ((($bool7=(typeof ($19=params).__array != 'undefined'?
						((typeof $19.__array[$20='hovertype']) != 'undefined'?$19.__array[$20]:
							$19.__getitem__($20)):
							$19.__getitem__('hovertype')).__contains__((typeof ($17=tab).__array != 'undefined'?
						((typeof $17.__array[$18='name']) != 'undefined'?$17.__array[$18]:
							$17.__getitem__($18)):
							$17.__getitem__('name')))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						self['selectTab'](n);
						break;
					}
				}
			}
			else {
				self['selectTab'](0);
			}
			return null;
		}
	, 1, [null,null,['self'],['parentBuoy']]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('onTabSelected', function(sender, tabIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var $bool10,$29,$28,$21,$22,$25,$24,$27,$26,page_name,params,$eq8,$eq6,$eq7,$eq5,$bool8,$bool9,$32,$30,$31,$23;
			page_name = (typeof ($23=(typeof ($21=$p['getattr'](self, 'tabs')).__array != 'undefined'?
				((typeof $21.__array[$22=tabIndex]) != 'undefined'?$21.__array[$22]:
					$21.__getitem__($22)):
					$21.__getitem__(tabIndex))).__array != 'undefined'?
				((typeof $23.__array[$24='name']) != 'undefined'?$23.__array[$24]:
					$23.__getitem__($24)):
					$23.__getitem__('name'));
			self.buoy = self['parent_buoy']['$$new'](page_name, $p['dict']([['hovertype', (typeof ($27=(typeof ($25=$p['getattr'](self, 'tabs')).__array != 'undefined'?
				((typeof $25.__array[$26=tabIndex]) != 'undefined'?$25.__array[$26]:
					$25.__getitem__($26)):
					$25.__getitem__(tabIndex))).__array != 'undefined'?
				((typeof $27.__array[$28='name']) != 'undefined'?$27.__array[$28]:
					$27.__getitem__($28)):
					$27.__getitem__('name'))]]));
			params = self['buoy']['navigate']();
			if ((($bool8=params.__contains__('hovertype')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				if ((($bool9=(($eq5=(typeof ($29=params).__array != 'undefined'?
					((typeof $29.__array[$30='hovertype']) != 'undefined'?$29.__array[$30]:
						$29.__getitem__($30)):
						$29.__getitem__('hovertype')))===($eq6='Cost')&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
								$eq5==$eq6)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					self['set_cost']($p['getattr'](self, 'buoy'));
				}
				else if ((($bool10=(($eq7=(typeof ($31=params).__array != 'undefined'?
					((typeof $31.__array[$32='hovertype']) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__('hovertype')))===($eq8='Speed')&&$eq7===null?true:
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
							 true ) )) {
					self['set_speed']($p['getattr'](self, 'buoy'));
				}
			}
			else {
				self['set_cost']($p['getattr'](self, 'buoy'));
			}
			return $m['TabPanel']['onTabSelected'](self, sender, tabIndex);
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onTabSelected'] = $method;
		var $bases = new Array($m['TabPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Hovercraft', $p['tuple']($bases), $data);
	})();
	$m['Ships'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Navigate';
		$method = $pyjs__bind_method2('__init__', function(html, wordWrap) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				html = arguments[1];
				wordWrap = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof wordWrap != 'undefined') {
					if (wordWrap !== null && typeof wordWrap['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = wordWrap;
						wordWrap = arguments[3];
					}
				} else 				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = html;
						html = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof html == 'undefined') html=arguments.callee.__args__[3][1];
			if (typeof wordWrap == 'undefined') wordWrap=arguments.callee.__args__[4][1];

			$pyjs_kwargs_call($m['HTML'], '__init__', null, kwargs, [{}, self, html, wordWrap]);
			self['setHTML']('Ships are reliable.');
			return null;
		}
	, 1, [null,['kwargs'],['self'],['html', null],['wordWrap', true]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['HTML']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Ships', $p['tuple']($bases), $data);
	})();
	$m['Surfboard'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Navigate';
		$method = $pyjs__bind_method2('__init__', function(html, wordWrap) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				html = arguments[1];
				wordWrap = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof wordWrap != 'undefined') {
					if (wordWrap !== null && typeof wordWrap['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = wordWrap;
						wordWrap = arguments[3];
					}
				} else 				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = html;
						html = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof html == 'undefined') html=arguments.callee.__args__[3][1];
			if (typeof wordWrap == 'undefined') wordWrap=arguments.callee.__args__[4][1];

			$pyjs_kwargs_call($m['HTML'], '__init__', null, kwargs, [{}, self, html, wordWrap]);
			self['setHTML']('Surfboards can be cool.');
			return null;
		}
	, 1, [null,['kwargs'],['self'],['html', null],['wordWrap', true]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['HTML']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Surfboard', $p['tuple']($bases), $data);
	})();
	$m['TopNav'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Navigate';
		$method = $pyjs__bind_method2('__init__', function(tabBar) {
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
				tabBar = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof tabBar != 'undefined') {
					if (tabBar !== null && typeof tabBar['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = tabBar;
						tabBar = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof tabBar == 'undefined') tabBar=arguments.callee.__args__[3][1];
			var $iter5_nextval,$iter5_idx,tab,$36,$iter5_array,$35,$33,$iter5_iter,$iter5_type,$34;
			$pyjs_kwargs_call($m['TabPanel'], '__init__', null, kwargs, [{}, self, tabBar]);
			self.buoy = null;
			self.tabs = $p['list']([$p['dict']([['tab', $m['Hovercraft']()], ['name', 'Hovercraft']]), $p['dict']([['tab', $m['Ships']()], ['name', 'Ship']]), $p['dict']([['tab', $m['Surfboard']()], ['name', 'Surfboard']])]);
			$iter5_iter = $p['getattr'](self, 'tabs');
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				tab = $iter5_nextval;
				self['add']((typeof ($33=tab).__array != 'undefined'?
					((typeof $33.__array[$34='tab']) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__('tab')), (typeof ($35=tab).__array != 'undefined'?
					((typeof $35.__array[$36='name']) != 'undefined'?$35.__array[$36]:
						$35.__getitem__($36)):
						$35.__getitem__('name')));
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['tabBar', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set', function(parentBuoy) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parentBuoy = arguments[1];
			}
			var $38,$iter6_idx,$iter6_type,$bool11,n,$iter6_array,params,tab,$37,$iter6_iter,$bool12,$iter6_nextval;
			self.parent_buoy = parentBuoy;
			params = parentBuoy['plan']();
			if ((($bool11=params) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				$iter6_iter = $p['enumerate']($p['getattr'](self, 'tabs'));
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter6_nextval, 2, null);
					n = $tupleassign2[0];
					tab = $tupleassign2[1];
					if ((($bool12=params.__contains__((typeof ($37=tab).__array != 'undefined'?
						((typeof $37.__array[$38='name']) != 'undefined'?$37.__array[$38]:
							$37.__getitem__($38)):
							$37.__getitem__('name')))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						self['selectTab'](n);
						break;
					}
				}
			}
			else {
				self['selectTab'](0);
			}
			return null;
		}
	, 1, [null,null,['self'],['parentBuoy']]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('onTabSelected', function(sender, tabIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				tabIndex = arguments[2];
			}
			var $eq9,$39,$44,buoy,$bool13,$43,page_name,$eq10,$42,$41,$40,$46,$45;
			page_name = (typeof ($41=(typeof ($39=$p['getattr'](self, 'tabs')).__array != 'undefined'?
				((typeof $39.__array[$40=tabIndex]) != 'undefined'?$39.__array[$40]:
					$39.__getitem__($40)):
					$39.__getitem__(tabIndex))).__array != 'undefined'?
				((typeof $41.__array[$42='name']) != 'undefined'?$41.__array[$42]:
					$41.__getitem__($42)):
					$41.__getitem__('name'));
			buoy = self['parent_buoy']['$$new'](page_name, $p['dict']([[page_name, null]]));
			if ((($bool13=(($eq9=tabIndex)===($eq10=0)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				buoy['navigate']();
				(typeof ($45=(typeof ($43=$p['getattr'](self, 'tabs')).__array != 'undefined'?
					((typeof $43.__array[$44=tabIndex]) != 'undefined'?$43.__array[$44]:
						$43.__getitem__($44)):
						$43.__getitem__(tabIndex))).__array != 'undefined'?
					((typeof $45.__array[$46='tab']) != 'undefined'?$45.__array[$46]:
						$45.__getitem__($46)):
						$45.__getitem__('tab'))['set'](buoy);
			}
			else {
				buoy['end']();
			}
			return $m['TabPanel']['onTabSelected'](self, sender, tabIndex);
		}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
		$cls_definition['onTabSelected'] = $method;
		var $bases = new Array($m['TabPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TopNav', $p['tuple']($bases), $data);
	})();
	$m['Navigate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Navigate';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.crumbs = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{StyleName:'breadcrumbs'}]);
			self['crumbs']['add']($m['HTML']('Home'));
			$m['RootPanel']()['add']($p['getattr'](self, 'crumbs'));
			self.buoy = $pyjs_kwargs_call(null, $m['BuoyService'], null, null, [{crumb:'Home'}, 'Navigator']);
			self['buoy']['add_flare_listener'](self);
			self['buoy']['set_titles_listener'](self);
			self['buoy']['set_breadcrumbs_listener'](self);
			self.toplevel = $m['TopNav']();
			self['toplevel']['set']($p['getattr'](self, 'buoy'));
			self['buoy']['cast_off']();
			$m['RootPanel']()['add']($p['getattr'](self, 'toplevel'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onFlare', function(service, prefixes) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				service = arguments[1];
				prefixes = arguments[2];
			}
			var $bool14;
			if ((($bool14=$p['getattr'](self, 'toplevel')) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				self['toplevel']['set'](service);
			}
			return null;
		}
	, 1, [null,null,['self'],['service'],['prefixes']]);
		$cls_definition['onFlare'] = $method;
		$method = $pyjs__bind_method2('onTitlesChanged', function(titles) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				titles = arguments[1];
			}
			var $iter7_nextval,title,$iter7_iter,$iter7_array,browser_title,$add5,$add6,$add7,$iter7_idx,$add8,$iter7_type;
			browser_title = '';
			$iter7_iter = $p['reversed'](titles);
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				title = $iter7_nextval;
				browser_title = (typeof ($add7=browser_title)==typeof ($add8=(typeof ($add5=title)==typeof ($add6=' - ') && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6))) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
			}
			browser_title = $p['__getslice'](browser_title, 0, (typeof ($usub1=3)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			$m['Window']['setTitle'](browser_title);
			return null;
		}
	, 1, [null,null,['self'],['titles']]);
		$cls_definition['onTitlesChanged'] = $method;
		$method = $pyjs__bind_method2('onBreadcrumbsChanged', function(crumbs) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				crumbs = arguments[1];
			}
			var $cmp4,$49,$iter8_idx,$cmp3,$sub10,$iter8_array,$bool15,n,$iter8_iter,$sub9,$48,$iter8_nextval,$51,$50,crumb,$52,$47,$iter8_type,$len3;
			self['crumbs']['clear']();
			$iter8_iter = $p['enumerate'](crumbs);
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				var $tupleassign3 = $p['__ass_unpack']($iter8_nextval, 2, null);
				n = $tupleassign3[0];
				crumb = $tupleassign3[1];
				if ((($bool15=((($cmp3=n)===($cmp4=(typeof ($sub9=(($len3=crumbs) === null?0:
					(typeof $len3.__array != 'undefined' ? $len3.__array.length:
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'?$len3.length:
								$p['len']($len3))))))==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10)))?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					self['crumbs']['add']($pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{text:(typeof ($47=crumb).__array != 'undefined'?
						((typeof $47.__array[$48='label']) != 'undefined'?$47.__array[$48]:
							$47.__getitem__($48)):
							$47.__getitem__('label')), TargetHistoryToken:(typeof ($49=crumb).__array != 'undefined'?
						((typeof $49.__array[$50='token']) != 'undefined'?$49.__array[$50]:
							$49.__getitem__($50)):
							$49.__getitem__('token'))}]));
					self['crumbs']['add']($m['Label']('>'));
				}
				else {
					self['crumbs']['add']($m['HTML']($p['sprintf']('<b>%s</b>', (typeof ($51=crumb).__array != 'undefined'?
						((typeof $51.__array[$52='label']) != 'undefined'?$51.__array[$52]:
							$51.__getitem__($52)):
							$51.__getitem__('label')))));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['crumbs']]);
		$cls_definition['onBreadcrumbsChanged'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Navigate', $p['tuple']($bases), $data);
	})();
	if ((($bool16=(($eq11=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq12='__main__')&&$eq11===null?true:
		($eq11===null?false:($eq12===null?false:
			((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
				((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
					$eq11==$eq12)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
		$m['pyjd']['setup']('public/Navigate.html');
		$m['app'] = $m['Navigate']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end Navigate */


/* end module: Navigate */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.Window', 'buoy.Buoy', 'buoy', 'buoy.BuoyService', 'pygwt']
*/
