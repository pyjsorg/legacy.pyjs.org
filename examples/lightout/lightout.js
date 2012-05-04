/* start module: lightout */
$pyjs.loaded_modules['lightout'] = function (__mod_name__) {
	if($pyjs.loaded_modules['lightout'].__was_initialized__) return $pyjs.loaded_modules['lightout'];
	var $m = $pyjs.loaded_modules["lightout"];
	$m.__repr__ = function() { return "<module: lightout>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'lightout';
	$m.__name__ = __mod_name__;
	var $bool9,$eq2,$eq1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['FlowPanel'] = $p['___import___']('pyjamas.ui.FlowPanel.FlowPanel', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['CheckBox'] = $p['___import___']('pyjamas.ui.CheckBox.CheckBox', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', null, null, false);
	$m['game'] = null;
	$m['GridCell'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'lightout';
		$method = $pyjs__bind_method2('__init__', function(i, j) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				i = arguments[1];
				j = arguments[2];
			}
			var element;
			self.i = i;
			self.j = j;
			self.light = true;
			element = $m['DOM']['createDiv']();
			$m['FocusWidget']['__init__'](self, element);
			self['redraw']();
			self['addClickListener'](self);
			return null;
		}
	, 1, [null,null,['self'],['i'],['j']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('redraw', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool1;
			if ((($bool1=$p['getattr'](self, 'light')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['setStyleName']('on');
			}
			else {
				self['setStyleName']('off');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['redraw'] = $method;
		$method = $pyjs__bind_method2('toggle', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2;
			if ((($bool2=$p['getattr'](self, 'light')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self.light = false;
			}
			else {
				self.light = true;
			}
			self['redraw']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toggle'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$bool3,$bool6,$bool4,$bool5,$cmp5,$cmp4,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,$cmp8,$add2,$add3,$add1,$add4;
			if ((($bool3=((($cmp1=$p['getattr'](self, 'i'))===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['parent']['getWidget']((typeof ($sub1=$p['getattr'](self, 'i'))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)), $p['getattr'](self, 'j'))['toggle']();
			}
			if ((($bool4=((($cmp3=$p['getattr'](self, 'i'))===($cmp4=(typeof ($sub3=self['parent']['getRowCount']())==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['parent']['getWidget']((typeof ($add1=$p['getattr'](self, 'i'))==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2)), $p['getattr'](self, 'j'))['toggle']();
			}
			if ((($bool5=((($cmp5=$p['getattr'](self, 'j'))===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['parent']['getWidget']($p['getattr'](self, 'i'), (typeof ($sub5=$p['getattr'](self, 'j'))==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					$p['op_sub']($sub5,$sub6)))['toggle']();
			}
			if ((($bool6=((($cmp7=$p['getattr'](self, 'j'))===($cmp8=(typeof ($sub7=self['parent']['getColumnCount']())==typeof ($sub8=1) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8)))?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self['parent']['getWidget']($p['getattr'](self, 'i'), (typeof ($add3=$p['getattr'](self, 'j'))==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4)))['toggle']();
			}
			self['toggle']();
			self['check_win']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('check_win', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,i,j,$iter1_iter,$iter2_idx,$iter1_array,$iter2_type,$bool7,$iter2_array,$iter1_idx;
			$iter1_iter = $p['range'](self['parent']['getRowCount']());
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				$iter2_iter = $p['range'](self['parent']['getColumnCount']());
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					j = $iter2_nextval;
					if ((($bool7=$p['getattr'](self['parent']['getWidget'](i, j), 'light')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						return null;
					}
				}
			}
			$m['Window']['alert']('You win!!! But can you beat the next level?');
			$m['game']['next_level']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['check_win'] = $method;
		var $bases = new Array($m['FocusWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GridCell', $p['tuple']($bases), $data);
	})();
	$m['Game'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'lightout';
		$method = $pyjs__bind_method2('__init__', function(level) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
			}

			self.level = level;
			$m['SimplePanel']['__init__'](self);
			self['start_game']($p['getattr'](self, 'level'));
			return null;
		}
	, 1, [null,null,['self'],['level']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('start_game', function(level) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
			}
			if (typeof level == 'undefined') level=arguments.callee.__args__[3][1];
			var dim,$iter3_idx,i,$iter4_nextval,$iter3_array,j,$iter4_idx,grid,$iter3_iter,$iter4_type,$iter3_type,$iter4_array,gc,$bool8,$iter4_iter,$iter3_nextval;
			if ((($bool8=(level !== null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				self.level = level;
			}
			dim = $p['getattr'](self, 'level');
			grid = $m['Grid'](dim, dim);
			grid['setStyleName']('grid');
			$iter3_iter = $p['range'](dim);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				$iter4_iter = $p['range'](dim);
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					j = $iter4_nextval;
					gc = $m['GridCell'](i, j);
					grid['setWidget'](i, j, gc);
				}
			}
			self['add'](grid);
			return null;
		}
	, 1, [null,null,['self'],['level', null]]);
		$cls_definition['start_game'] = $method;
		$method = $pyjs__bind_method2('next_level', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add6,$add5;
			self['remove'](self['getWidget']());
			self.level = (typeof ($add5=$p['getattr'](self, 'level'))==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6));
			self['start_game']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['next_level'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Game', $p['tuple']($bases), $data);
	})();
	if ((($bool9=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
		$m['pyjd']['setup']('public/lightout.html');
		$m['game'] = $m['Game'](3);
		$m['RootPanel']('game')['add']($m['game']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end lightout */


/* end module: lightout */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.FlowPanel.FlowPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.FlowPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.CheckBox.CheckBox', 'pyjamas.ui.CheckBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.Window', 'pyjamas.DOM', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui.FocusWidget']
*/
