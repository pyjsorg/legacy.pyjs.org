/* start module: GridEdit */
$pyjs.loaded_modules['GridEdit'] = function (__mod_name__) {
	if($pyjs.loaded_modules['GridEdit'].__was_initialized__) return $pyjs.loaded_modules['GridEdit'];
	var $m = $pyjs.loaded_modules["GridEdit"];
	$m.__repr__ = function() { return "<module: GridEdit>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'GridEdit';
	$m.__name__ = __mod_name__;
	var $eq8,$eq7,$bool4;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['CellFormatter'] = $p['___import___']('pyjamas.ui.CellFormatter.CellFormatter', null, null, false);
	$m['RowFormatter'] = $p['___import___']('pyjamas.ui.RowFormatter.RowFormatter', null, null, false);
	$m['HTMLTable'] = $p['___import___']('pyjamas.ui.HTMLTable.HTMLTable', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['KeyboardListener'] = $p['___import___']('pyjamas.ui.KeyboardListener', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['GridEdit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'GridEdit';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.input = $m['TextBox']();
			self['input']['setEnabled'](false);
			self['input']['addKeyboardListener'](self);
			self.g = $m['Grid']();
			self['g']['resize'](5, 5);
			self['g']['setHTML'](0, 0, '<b>Grid Edit</b>');
			self['g']['setBorderWidth'](2);
			self['g']['setCellPadding'](4);
			self['g']['setCellSpacing'](1);
			self['g']['setWidth']('500px');
			self['g']['setHeight']('120px');
			self['g']['addTableListener'](self);
			self['initGrid']();
			$m['RootPanel']()['add']($p['getattr'](self, 'input'));
			$m['RootPanel']()['add']($p['getattr'](self, 'g'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}
			var val,$eq2,$eq3,$eq1,$eq4,$bool2,$bool1;
			if ((($bool1=(($eq1=keycode)===($eq2=$p['getattr']($m['KeyboardListener'], 'KEY_ESCAPE'))&&$eq1===null?true:
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
				self['input']['setEnabled'](false);
			}
			else if ((($bool2=(($eq3=keycode)===($eq4=$p['getattr']($m['KeyboardListener'], 'KEY_ENTER'))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['input']['setEnabled'](false);
				val = self['input']['getText']();
				self['set_grid_value']($p['getattr'](self, 'row'), $p['getattr'](self, 'col'), val);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		$method = $pyjs__bind_method2('onCellClicked', function(sender, row, col) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				row = arguments[2];
				col = arguments[3];
			}
			var val,$3,$4,$2,$1;
			self.row = row;
			self.col = col;
			val = (typeof ($3=(typeof ($1=$p['getattr'](self, 'values')).__array != 'undefined'?
				((typeof $1.__array[$2=row]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(row))).__array != 'undefined'?
				((typeof $3.__array[$4=col]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(col));
			self['input']['setText'](val);
			self['input']['setEnabled'](true);
			self['input']['setFocus'](true);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['row'],['col']]);
		$cls_definition['onCellClicked'] = $method;
		$method = $pyjs__bind_method2('set_grid_value', function(row, col, val) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
				val = arguments[3];
			}
			var $eq6,$eq5,$bool3,$6,$5;
			(typeof ($5=$p['getattr'](self, 'values')).__array != 'undefined'?
				((typeof $5.__array[$6=row]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(row)).__setitem__(col, val);
			if ((($bool3=(($eq5=val)===($eq6='')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				val = '&nbsp;';
			}
			self['g']['setHTML'](row, col, val);
			return null;
		}
	, 1, [null,null,['self'],['row'],['col'],['val']]);
		$cls_definition['set_grid_value'] = $method;
		$method = $pyjs__bind_method2('initGrid', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_type,$iter1_iter,$iter4_type,$iter2_type,$iter4_iter,$iter3_idx,$9,$iter2_iter,$iter3_iter,$iter1_array,$iter1_nextval,$iter4_array,$iter2_idx,$8,$iter3_array,$7,$11,$iter2_nextval,$10,$iter1_type,$12,$iter4_nextval,$iter4_idx,val,$iter1_idx,y,x,$iter3_nextval,$iter2_array;
			self.values = $p['dict']([]);
			$iter1_iter = $p['range'](5);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				y = $iter1_nextval;
				$p['getattr'](self, 'values').__setitem__(y, $p['dict']([]));
				$iter2_iter = $p['range'](5);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					x = $iter2_nextval;
					(typeof ($7=$p['getattr'](self, 'values')).__array != 'undefined'?
						((typeof $7.__array[$8=y]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(y)).__setitem__(x, '');
				}
			}
			$iter3_iter = $p['range'](5);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				y = $iter3_nextval;
				$iter4_iter = $p['range'](5);
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					x = $iter4_nextval;
					val = (typeof ($11=(typeof ($9=$p['getattr'](self, 'values')).__array != 'undefined'?
						((typeof $9.__array[$10=y]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(y))).__array != 'undefined'?
						((typeof $11.__array[$12=x]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(x));
					self['set_grid_value'](y, x, val);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initGrid'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('GridEdit', $p['tuple']($bases), $data);
	})();
	if ((($bool4=(($eq7=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq8='__main__')&&$eq7===null?true:
		($eq7===null?false:($eq8===null?false:
			((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
				((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
					$eq7==$eq8)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
		$m['pyjd']['setup']('./GridEdit.html');
		$m['app'] = $m['GridEdit']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end GridEdit */


/* end module: GridEdit */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.CellFormatter.CellFormatter', 'pyjamas.ui.CellFormatter', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter', 'pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui.HTMLTable', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.KeyboardListener', 'pyjamas.Window']
*/
