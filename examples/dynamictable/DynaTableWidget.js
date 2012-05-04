/* start module: DynaTableWidget */
$pyjs.loaded_modules['DynaTableWidget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DynaTableWidget'].__was_initialized__) return $pyjs.loaded_modules['DynaTableWidget'];
	var $m = $pyjs.loaded_modules["DynaTableWidget"];
	$m.__repr__ = function() { return "<module: DynaTableWidget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DynaTableWidget';
	$m.__name__ = __mod_name__;


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['NavBar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DynaTableWidget';
		$method = $pyjs__bind_method2('__init__', function(owner) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				owner = arguments[1];
			}
			var buttons;
			$m['Composite']['__init__'](self);
			self.owner = owner;
			self.bar = $m['DockPanel']();
			self.gotoFirst = $m['Button']('&lt;&lt;', self);
			self.gotoNext = $m['Button']('&gt;', self);
			self.gotoPrev = $m['Button']('&lt;', self);
			self.status = $m['HTML']();
			self['initWidget']($p['getattr'](self, 'bar'));
			self['bar']['setStyleName']('navbar');
			self['status']['setStyleName']('status');
			buttons = $m['HorizontalPanel']();
			buttons['add']($p['getattr'](self, 'gotoFirst'));
			buttons['add']($p['getattr'](self, 'gotoPrev'));
			buttons['add']($p['getattr'](self, 'gotoNext'));
			self['bar']['add'](buttons, $p['getattr']($m['DockPanel'], 'EAST'));
			self['bar']['setCellHorizontalAlignment'](buttons, $p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
			self['bar']['add']($p['getattr'](self, 'status'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self['bar']['setVerticalAlignment']($p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE'));
			self['bar']['setCellHorizontalAlignment']($p['getattr'](self, 'status'), $p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
			self['bar']['setCellVerticalAlignment']($p['getattr'](self, 'status'), $p['getattr']($m['HasAlignment'], 'ALIGN_MIDDLE'));
			self['bar']['setCellWidth']($p['getattr'](self, 'status'), '100%');
			self['gotoPrev']['setEnabled'](false);
			self['gotoFirst']['setEnabled'](false);
			return null;
		}
	, 1, [null,null,['self'],['owner']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $bool2,$cmp1,$cmp2,$eq2,$eq3,$eq1,$eq6,$eq4,$eq5,$add2,$bool3,$bool1,$bool4,$sub2,$sub1,$add1;
			if ((($bool1=(($eq1=sender)===($eq2=$p['getattr'](self, 'gotoNext'))&&$eq1===null?true:
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
				$p['getattr'](self, 'owner').startRow = (typeof ($add1=$p['getattr']($p['getattr'](self, 'owner'), 'startRow'))==typeof ($add2=self['owner']['getDataRowCount']()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				self['owner']['refresh']();
			}
			else if ((($bool2=(($eq3=sender)===($eq4=$p['getattr'](self, 'gotoPrev'))&&$eq3===null?true:
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
				$p['getattr'](self, 'owner').startRow = (typeof ($sub1=$p['getattr']($p['getattr'](self, 'owner'), 'startRow'))==typeof ($sub2=self['owner']['getDataRowCount']()) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2));
				if ((($bool3=((($cmp1=$p['getattr']($p['getattr'](self, 'owner'), 'startRow'))===($cmp2=0)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					$p['getattr'](self, 'owner').startRow = 0;
				}
				self['owner']['refresh']();
			}
			else if ((($bool4=(($eq5=sender)===($eq6=$p['getattr'](self, 'gotoFirst'))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				$p['getattr'](self, 'owner').startRow = 0;
				self['owner']['refresh']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('NavBar', $p['tuple']($bases), $data);
	})();
	$m['RowDataAcceptorImpl'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DynaTableWidget';
		$method = $pyjs__bind_method2('__init__', function(owner) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				owner = arguments[1];
			}

			self.owner = owner;
			return null;
		}
	, 1, [null,null,['self'],['owner']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('accept', function(startRow, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				startRow = arguments[1];
				data = arguments[2];
			}
			var $add13,$add18,$iter1_iter,srcRowData,destRowIndex,$iter2_type,cellHTML,$iter2_iter,$iter2_nextval,srcRowIndex,$iter1_array,destRowCount,$add11,srcColIndex,$add7,srcRowCount,$iter1_nextval,$add5,$add14,$add15,$iter2_idx,$cmp6,$bool6,$bool7,$add12,$bool5,$4,$2,$3,$1,$cmp5,$cmp4,$cmp7,isLastPage,$iter1_type,$cmp3,destColCount,$cmp9,$cmp8,$add16,$add3,destColIndex,$add17,$add6,$iter1_idx,$add4,$len1,$add10,$add8,$add9,$iter2_array,$cmp10;
			destRowCount = self['owner']['getDataRowCount']();
			destColCount = self['owner']['grid']['getCellCount'](0);
			srcRowIndex = 0;
			srcRowCount = (($len1=data) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1)))));
			destRowIndex = 1;
			while ((($bool5=((($cmp3=srcRowIndex)===($cmp4=srcRowCount)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				srcRowData = (typeof ($1=data).__array != 'undefined'?
					((typeof $1.__array[$2=srcRowIndex]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(srcRowIndex));
				$iter1_iter = $p['range'](destColCount);
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					srcColIndex = $iter1_nextval;
					cellHTML = (typeof ($3=srcRowData).__array != 'undefined'?
						((typeof $3.__array[$4=srcColIndex]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(srcColIndex));
					self['owner']['grid']['setText'](destRowIndex, srcColIndex, cellHTML);
				}
				srcRowIndex = (typeof ($add3=srcRowIndex)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				destRowIndex = (typeof ($add5=destRowIndex)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
			}
			isLastPage = false;
			while ((($bool6=((($cmp5=destRowIndex)===($cmp6=(typeof ($add7=destRowCount)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)))?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				isLastPage = true;
				$iter2_iter = $p['range'](destColCount);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					destColIndex = $iter2_nextval;
					self['owner']['grid']['clearCell'](destRowIndex, destColIndex);
				}
				destRowIndex = (typeof ($add9=destRowIndex)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
			self['owner']['navbar']['gotoNext']['setEnabled'](!(($bool7=isLastPage) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7.__nonzero__=='function'?
						$bool7.__nonzero__() :
						(typeof $bool7.__len__=='function'?
							($bool7.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ));
			self['owner']['navbar']['gotoFirst']['setEnabled'](((($cmp7=startRow)===($cmp8=0)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == 1));
			self['owner']['navbar']['gotoPrev']['setEnabled'](((($cmp9=startRow)===($cmp10=0)?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == 1));
			self['owner']['setStatusText']((typeof ($add17=(typeof ($add13=$p['str']((typeof ($add11=startRow)==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12))))==typeof ($add14=' - ') && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14)))==typeof ($add18=$p['str']((typeof ($add15=startRow)==typeof ($add16=srcRowCount) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16)))) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18)));
			return null;
		}
	, 1, [null,null,['self'],['startRow'],['data']]);
		$cls_definition['accept'] = $method;
		$method = $pyjs__bind_method2('failed', function(message) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				message = arguments[1];
			}
			var msg,$bool8;
			msg = 'Failed to access data';
			if ((($bool8=message) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				msg = $p['sprintf']('%s: %s', $p['tuple']([msg, message]));
			}
			$m['RootPanel']()['add']($m['HTML'](msg));
			return null;
		}
	, 1, [null,null,['self'],['message']]);
		$cls_definition['failed'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RowDataAcceptorImpl', $p['tuple']($bases), $data);
	})();
	$m['DynaTableWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DynaTableWidget';
		$method = $pyjs__bind_method2('__init__', function(provider, columns, columnStyles, rowCount) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				provider = arguments[1];
				columns = arguments[2];
				columnStyles = arguments[3];
				rowCount = arguments[4];
			}

			$m['Composite']['__init__'](self);
			self.acceptor = $m['RowDataAcceptorImpl'](self);
			self.outer = $m['DockPanel']();
			self.startRow = 0;
			self.grid = $m['Grid']();
			self.navbar = $m['NavBar'](self);
			self.provider = provider;
			self['initWidget']($p['getattr'](self, 'outer'));
			self['grid']['setStyleName']('table');
			self['outer']['add']($p['getattr'](self, 'navbar'), $p['getattr']($m['DockPanel'], 'NORTH'));
			self['outer']['add']($p['getattr'](self, 'grid'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self['initTable'](columns, columnStyles, rowCount);
			self['setStyleName']('DynaTable-DynaTableWidget');
			return null;
		}
	, 1, [null,null,['self'],['provider'],['columns'],['columnStyles'],['rowCount']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('initTable', function(columns, columnStyles, rowCount) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				columns = arguments[1];
				columnStyles = arguments[2];
				rowCount = arguments[3];
			}
			var $add21,$iter3_idx,i,$add20,$iter3_array,$add22,$5,$bool9,$len2,$iter3_iter,$8,$iter3_type,$6,$7,$iter3_nextval,$add19,$len3;
			self['grid']['resize']((typeof ($add19=rowCount)==typeof ($add20=1) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20)), (($len2=columns) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))));
			$iter3_iter = $p['range']((($len3=columns) === null?0:
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
				self['grid']['setText'](0, i, (typeof ($5=columns).__array != 'undefined'?
					((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
						$5.__getitem__($6)):
						$5.__getitem__(i)));
				if ((($bool9=columnStyles) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					self['grid']['cellFormatter']['setStyleName'](0, i, (typeof ($add21=(typeof ($7=columnStyles).__array != 'undefined'?
						((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(i)))==typeof ($add22='header') && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22)));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['columns'],['columnStyles'],['rowCount']]);
		$cls_definition['initTable'] = $method;
		$method = $pyjs__bind_method2('setStatusText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['navbar']['status']['setText'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setStatusText'] = $method;
		$method = $pyjs__bind_method2('clearStatusText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['navbar']['status']['setHTML']('&nbsp;');
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['clearStatusText'] = $method;
		$method = $pyjs__bind_method2('refresh', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub3,$sub4;
			self['navbar']['gotoFirst']['setEnabled'](false);
			self['navbar']['gotoPrev']['setEnabled'](false);
			self['navbar']['gotoNext']['setEnabled'](false);
			self['setStatusText']('Please wait...');
			self['provider']['updateRowData']($p['getattr'](self, 'startRow'), (typeof ($sub3=self['grid']['getRowCount']())==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)), $p['getattr'](self, 'acceptor'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['refresh'] = $method;
		$method = $pyjs__bind_method2('setRowCount', function(rows) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rows = arguments[1];
			}

			self['grid']['resizeRows'](rows);
			return null;
		}
	, 1, [null,null,['self'],['rows']]);
		$cls_definition['setRowCount'] = $method;
		$method = $pyjs__bind_method2('getDataRowCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub6,$sub5;
			return (typeof ($sub5=self['grid']['getRowCount']())==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDataRowCount'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DynaTableWidget', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end DynaTableWidget */


/* end module: DynaTableWidget */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel']
*/
