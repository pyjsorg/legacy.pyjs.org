/* start module: view.components.TimeGrid */
$pyjs.loaded_modules['view.components.TimeGrid'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.components.TimeGrid'].__was_initialized__) return $pyjs.loaded_modules['view.components.TimeGrid'];
	if(typeof $pyjs.loaded_modules['view.components'] == 'undefined' || !$pyjs.loaded_modules['view.components'].__was_initialized__) $p['___import___']('view.components', null);
	var $m = $pyjs.loaded_modules["view.components.TimeGrid"];
	$m.__repr__ = function() { return "<module: view.components.TimeGrid>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.components.TimeGrid';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view.components']['TimeGrid'] = $pyjs.loaded_modules['view.components.TimeGrid'];


	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view.components', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'view.components', null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', 'view.components', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'view.components', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'view.components', null, false);
	$m['Grid'] = $p['___import___']('Grid.Grid', 'view.components', null, false);
	$m['TimeVO'] = $p['___import___']('model.vo.TimeVO.TimeVO', 'view.components', null, false);
	$m['TimeGrid'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.components.TimeGrid';
		$cls_definition['columns'] = $p['list']([$p['tuple'](['From', 5, 5]), $p['tuple'](['To', 5, 5]), $p['tuple'](['Project', null, 20]), $p['tuple'](['Description', null, 40])]);
		$cls_definition['emptyTimeVO'] = $m['TimeVO']('', '', '', '');
		$cls_definition['rows'] = 0;
		$cls_definition['currentRow'] = 0;
		$cls_definition['cols'] = 0;
		$cls_definition['currentCol'] = 0;
		$cls_definition['date'] = null;
		$cls_definition['dirty'] = false;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,$len1;
			try {
				$m['FlexTable']['__init__'](self);
				self.cols = (($len1=$p['getattr'](self, 'columns')) === null?0:
					(typeof $len1.__array != 'undefined' ? $len1.__array.length:
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'?$len1.length:
								$p['len']($len1)))));
				self['addHeader']();
				self['addRow']();
				self.currentRow = $p['getattr'](self, 'rows');
				self['addRow']();
				self['getWidget'](1, 0)['setFocus'](true);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getEntries', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2,$bool1,$iter1_nextval,$iter1_type,$iter1_iter,$add2,$add1,$iter1_array,entries,timeVO,row,$iter1_idx;
			entries = $p['list']([]);
			$iter1_iter = $p['range'](1, (typeof ($add1=$p['getattr'](self, 'rows'))==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				row = $iter1_nextval;
				timeVO = $m['TimeVO'](self['getWidget'](row, 0)['getText']()['strip'](), self['getWidget'](row, 1)['getText']()['strip'](), self['getWidget'](row, 2)['getText']()['strip'](), self['getWidget'](row, 3)['getText']()['strip']());
				if ((($bool2=!(($bool1=timeVO['isEmpty']()) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					entries['append'](timeVO);
				}
			}
			return entries;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getEntries'] = $method;
		$method = $pyjs__bind_method2('setEntries', function(entries) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				entries = arguments[1];
			}
			var $bool3,$cmp4,$iter2_nextval,$iter2_type,$cmp3,$iter2_iter,$cmp2,$eq2,$eq1,$add3,$iter2_idx,$add4,timeVO,$bool5,$bool4,$cmp1,$iter2_array,row;
			row = 0;
			$iter2_iter = entries;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				timeVO = $iter2_nextval;
				row = (typeof ($add3=row)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				if ((($bool3=((($cmp1=$p['getattr'](self, 'rows'))===($cmp2=row)?0:
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
					self['addRow'](timeVO);
				}
				else {
					self['setRow'](row, timeVO);
				}
			}
			while ((($bool4=((($cmp3=row)===($cmp4=$p['getattr'](self, 'rows'))?0:
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
				self['deleteRow']($p['getattr'](self, 'rows'));
			}
			self['addRow']();
			if ((($bool5=(($eq1=$p['getattr'](self, 'rows'))===($eq2=1)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['addRow']();
			}
			self['setFocus']();
			return null;
		}
	, 1, [null,null,['self'],['entries']]);
		$cls_definition['setEntries'] = $method;
		$method = $pyjs__bind_method2('setFocus', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,$iter3_type,$bool6,$iter3_iter,$iter3_array,$iter3_nextval,$bool7,row;
			$iter3_iter = $p['range'](1, $p['getattr'](self, 'rows'));
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				row = $iter3_nextval;
				if ((($bool7=!(($bool6=self['checkRow'](row)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					break;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('selectCell', function(row, col) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
			}
			var $bool18,$bool19,$bool10,$bool11,$bool12,$bool13,$bool14,$bool15,$bool16,$bool17,$cmp20,$iter4_type,$iter5_idx,$and1,$and2,$and3,$and4,$bool8,$bool9,$iter4_nextval,$iter5_nextval,$iter5_array,$eq11,$eq14,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$bool29,$bool28,$sub10,c,$bool30,$eq10,$iter5_type,$eq12,$eq13,$iter4_iter,$eq15,$eq16,r,$add6,$add5,$iter4_array,$iter5_iter,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$eq8,$eq9,$or1,$or2,$eq3,$eq6,$eq7,$eq4,$eq5,$cmp15,$cmp14,$cmp17,$cmp16,$cmp11,$cmp10,$cmp13,$cmp12,$cmp19,$cmp18,$cmp5,$cmp7,$cmp6,$cmp9,$cmp8,$iter4_idx;
			if ((($bool8=((($cmp5=col)===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				if ((($bool9=((($cmp7=row)===($cmp8=1)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					col = (typeof ($sub1=$p['getattr'](self, 'cols'))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2));
					row = (typeof ($sub3=row)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						$p['op_sub']($sub3,$sub4));
				}
				else {
					col = 0;
				}
			}
			else if ((($bool10=((((($cmp9=col)===($cmp10=$p['getattr'](self, 'cols'))?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))))|1) == 1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				if ((($bool11=((($cmp11=row)===($cmp12=$p['getattr'](self, 'rows'))?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == -1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					col = 0;
					row = (typeof ($add5=row)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						$p['op_add']($add5,$add6));
				}
				else {
					col = (typeof ($sub5=$p['getattr'](self, 'cols'))==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						$p['op_sub']($sub5,$sub6));
				}
			}
			if ((($bool12=((($cmp13=row)===($cmp14=1)?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == -1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				row = 1;
			}
			else if ((($bool13=((($cmp15=row)===($cmp16=$p['getattr'](self, 'rows'))?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				row = $p['getattr'](self, 'rows');
			}
			if ((($bool15=((($bool14=$and1=(($eq3=$p['getattr'](self, 'currentRow'))===($eq4=row)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
				false :
				(typeof $bool14=='object'?
					(typeof $bool14.__nonzero__=='function'?
						$bool14.__nonzero__() :
						(typeof $bool14.__len__=='function'?
							($bool14.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq5=$p['getattr'](self, 'currentCol'))===($eq6=col)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6))))):$and1)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				self['getWidget']($p['getattr'](self, 'currentRow'), $p['getattr'](self, 'currentCol'))['setFocus'](true);
				return null;
			}
			if ((($bool18=((($bool16=$or1=((($cmp17=$p['getattr'](self, 'currentRow'))===($cmp18=row)?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
				false :
				(typeof $bool16=='object'?
					(typeof $bool16.__nonzero__=='function'?
						$bool16.__nonzero__() :
						(typeof $bool16.__len__=='function'?
							($bool16.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($bool17=$and3=(($eq7=$p['getattr'](self, 'currentRow'))===($eq8=row)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
				false :
				(typeof $bool17=='object'?
					(typeof $bool17.__nonzero__=='function'?
						$bool17.__nonzero__() :
						(typeof $bool17.__len__=='function'?
							($bool17.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp19=$p['getattr'](self, 'currentCol'))===($cmp20=col)?0:
				(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
					($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
					$p['cmp']($cmp19, $cmp20))) == 1):$and3))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				self.currentRow = row;
				self.currentCol = col;
				self['getWidget']($p['getattr'](self, 'currentRow'), $p['getattr'](self, 'currentCol'))['setFocus'](true);
				return null;
			}
			if ((($bool20=!(($bool19=self['checkCell']($p['getattr'](self, 'currentRow'), $p['getattr'](self, 'currentCol'), true)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
				false :
				(typeof $bool19=='object'?
					(typeof $bool19.__nonzero__=='function'?
						$bool19.__nonzero__() :
						(typeof $bool19.__len__=='function'?
							($bool19.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				self['getWidget']($p['getattr'](self, 'currentRow'), $p['getattr'](self, 'currentCol'))['setFocus'](true);
				return null;
			}
			if ((($bool21=(($eq9=$p['getattr'](self, 'currentRow'))===($eq10=row)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				self.currentRow = row;
				self.currentCol = col;
			}
			else {
				if ((($bool23=!(($bool22=self['checkRow']($p['getattr'](self, 'currentRow'))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					self['getWidget']($p['getattr'](self, 'currentRow'), $p['getattr'](self, 'currentCol'))['setFocus'](true);
					return null;
				}
				$iter4_iter = $p['range']($p['getattr'](self, 'currentRow'), (typeof ($sub7=row)==typeof ($sub8=1) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					$p['op_sub']($sub7,$sub8)));
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					r = $iter4_nextval;
					if ((($bool25=!(($bool24=self['checkRow'](r)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
						self['getWidget']($p['getattr'](self, 'currentRow'), $p['getattr'](self, 'currentCol'))['setFocus'](true);
						return null;
					}
				}
				self.currentRow = row;
				self.currentCol = col;
				$iter5_iter = $p['range'](col);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					c = $iter5_nextval;
					if ((($bool27=!(($bool26=self['checkCell'](row, c)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
						false :
						(typeof $bool26=='object'?
							(typeof $bool26.__nonzero__=='function'?
								$bool26.__nonzero__() :
								(typeof $bool26.__len__=='function'?
									($bool26.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
						self.currentCol = c;
						break;
					}
				}
				if ((($bool28=(($eq11=$p['getattr'](self, 'currentRow'))===($eq12=$p['getattr'](self, 'rows'))&&$eq11===null?true:
					($eq11===null?false:($eq12===null?false:
						((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
							((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
								$eq11==$eq12)))))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
					self['addRow']();
				}
			}
			if ((($bool29=(($eq13=$p['getattr'](self, 'currentCol'))===($eq14=0)&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				self['autoFill']($p['getattr'](self, 'currentRow'), $p['getattr'](self, 'currentCol'));
			}
			else if ((($bool30=(($eq15=$p['getattr'](self, 'currentCol'))===($eq16=2)&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				self['autoFill']($p['getattr'](self, 'currentRow'), (typeof ($sub9=$p['getattr'](self, 'currentCol'))==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					$p['op_sub']($sub9,$sub10)));
			}
			self['getWidget']($p['getattr'](self, 'currentRow'), $p['getattr'](self, 'currentCol'))['setFocus'](true);
			return null;
		}
	, 1, [null,null,['self'],['row'],['col']]);
		$cls_definition['selectCell'] = $method;
		$method = $pyjs__bind_method2('addHeader', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter6_idx,$iter6_type,$add8,$$label,$iter6_array,$add7,maxLength,$iter6_iter,visibleLength,col,$iter6_nextval;
			col = 0;
			$iter6_iter = $p['getattr'](self, 'columns');
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter6_nextval, 3, null);
				$$label = $tupleassign1[0];
				maxLength = $tupleassign1[1];
				visibleLength = $tupleassign1[2];
				self['setWidget'](0, col, $pyjs_kwargs_call(null, $m['Label'], null, null, [{wordWrap:false}, $$label]));
				col = (typeof ($add7=col)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['addHeader'] = $method;
		$method = $pyjs__bind_method2('setRow', function(row, timeVO) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				timeVO = arguments[2];
			}
			if (typeof timeVO == 'undefined') timeVO=arguments.callee.__args__[4][1];
			var $bool31;
			if ((($bool31=(timeVO === null)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				timeVO = $p['getattr'](self, 'emptyTimeVO');
			}
			self['getWidget'](row, 0)['setText']($p['getattr'](timeVO, 'start'));
			self['getWidget'](row, 1)['setText']($p['getattr'](timeVO, 'end'));
			self['getWidget'](row, 2)['setText']($p['getattr'](timeVO, 'project'));
			self['getWidget'](row, 3)['setText']($p['getattr'](timeVO, 'description'));
			return null;
		}
	, 1, [null,null,['self'],['row'],['timeVO', null]]);
		$cls_definition['setRow'] = $method;
		$method = $pyjs__bind_method2('addRow', function(timeVO) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timeVO = arguments[1];
			}
			if (typeof timeVO == 'undefined') timeVO=arguments.callee.__args__[3][1];
			var maxLength,$iter7_type,textBox,$iter7_iter,$add10,$add11,$add12,$iter7_idx,visibleLength,name,$iter7_nextval,$iter7_array,$bool32,$bool33,$bool36,$bool37,$bool34,$bool35,$add9,col;
			self.rows = (typeof ($add9=$p['getattr'](self, 'rows'))==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10));
			col = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			$iter7_iter = $p['getattr'](self, 'columns');
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter7_nextval, 3, null);
				name = $tupleassign2[0];
				maxLength = $tupleassign2[1];
				visibleLength = $tupleassign2[2];
				col = (typeof ($add11=col)==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					$p['op_add']($add11,$add12));
				textBox = $m['TextBox']();
				textBox['setText']('');
				textBox.col = col;
				textBox.row = $p['getattr'](self, 'rows');
				textBox['addChangeListener']($p['getattr'](self, 'checkValid'));
				textBox['addKeyboardListener'](self);
				textBox['addFocusListener'](self);
				textBox['setName'](name);
				if ((($bool33=!(($bool32=(maxLength === null)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
					false :
					(typeof $bool32=='object'?
						(typeof $bool32.__nonzero__=='function'?
							$bool32.__nonzero__() :
							(typeof $bool32.__len__=='function'?
								($bool32.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
					textBox['setMaxLength'](maxLength);
				}
				if ((($bool35=!(($bool34=(visibleLength === null)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34.__nonzero__=='function'?
							$bool34.__nonzero__() :
							(typeof $bool34.__len__=='function'?
								($bool34.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
					textBox['setVisibleLength'](visibleLength);
				}
				self['setWidget']($p['getattr'](self, 'rows'), col, textBox);
			}
			if ((($bool37=!(($bool36=(timeVO === null)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
				self['setRow']($p['getattr'](self, 'rows'), timeVO);
			}
			return null;
		}
	, 1, [null,null,['self'],['timeVO', null]]);
		$cls_definition['addRow'] = $method;
		$method = $pyjs__bind_method2('deleteRow', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $iter8_idx,$sub12,$iter8_array,col,$iter8_iter,$iter8_nextval,child,$sub11,$bool38,$iter8_type;
			$iter8_iter = $p['range'](self['getCellCount'](row));
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				col = $iter8_nextval;
				child = self['getWidget'](row, col);
				if ((($bool38=(child !== null)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					self['removeWidget'](child);
				}
			}
			self.rows = (typeof ($sub11=$p['getattr'](self, 'rows'))==typeof ($sub12=1) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				$p['op_sub']($sub11,$sub12));
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['deleteRow'] = $method;
		$method = $pyjs__bind_method2('checkNumber', function(text, round) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				round = arguments[2];
			}
			if (typeof round == 'undefined') round=arguments.callee.__args__[4][1];
			var $div1,$bool41,$bool40,i,$and5,$and6,$mul2,$eq18,$cmp21,$cmp22,$cmp23,$cmp24,_text,$div2,$bool39,$mul1,$eq17;
			text = text['strip']();
			_text = text['lstrip']('0');
			if ((($bool39=(($eq17=_text)===($eq18='')&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
				return '00';
			}
			i = $p['float_int'](_text);
			if ((($bool41=((($bool40=$and5=((((($cmp21=i)===($cmp22=0)?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))))|1) == 1)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
				false :
				(typeof $bool40=='object'?
					(typeof $bool40.__nonzero__=='function'?
						$bool40.__nonzero__() :
						(typeof $bool40.__len__=='function'?
							($bool40.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp23=i)===($cmp24=60)?0:
				(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
					($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
					$p['cmp']($cmp23, $cmp24))) == -1):$and5)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
				i = (typeof ($mul1=$p['float_int']((typeof ($div1=i)==typeof ($div2=round) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))))==typeof ($mul2=round) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
				return $p['sprintf']('%02d', i);
			}
			throw ($p['ValueError']($p['sprintf']("Invalid format '%s'", text)));
			return null;
		}
	, 1, [null,null,['self'],['text'],['round', 1]]);
		$cls_definition['checkNumber'] = $method;
		$method = $pyjs__bind_method2('checkHHMM', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $bool44,$bool43,$bool42,$eq19,MM,$len3,$eq21,$eq20,HH,$eq22,$len2,$cmp25,$cmp26,_text,$4,$2,$3,$1;
			if ((($bool42=(($eq19=text)===($eq20='')&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42.__nonzero__=='function'?
							$bool42.__nonzero__() :
							(typeof $bool42.__len__=='function'?
								($bool42.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return '';
			}
			_text = text['$$split'](':');
			if ((($bool43=((($cmp25=(($len2=_text) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))))===($cmp26=2)?0:
				(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
					($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
					$p['cmp']($cmp25, $cmp26))) < 1)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
				HH = self['checkNumber']((typeof ($1=_text).__array != 'undefined'?
					((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(0)));
				if ((($bool44=(($eq21=(($len3=_text) === null?0:
					(typeof $len3.__array != 'undefined' ? $len3.__array.length:
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'?$len3.length:
								$p['len']($len3))))))===($eq22=2)&&$eq21===null?true:
					($eq21===null?false:($eq22===null?false:
						((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
							((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
								$eq21==$eq22)))))) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
					MM = self['checkNumber']((typeof ($3=_text).__array != 'undefined'?
						((typeof $3.__array[$4=1]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(1)), 15);
				}
				else {
					MM = '00';
				}
				return $p['sprintf']('%s:%s', $p['tuple']([HH, MM]));
			}
			throw ($p['ValueError']($p['sprintf']("Invalid format '%s'", text)));
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['checkHHMM'] = $method;
		$method = $pyjs__bind_method2('autoFill', function(row, col) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
			}
			var $bool47,timeFrom,$bool50,$8,$or4,$eq26,$bool45,$sub14,$eq32,$6,$eq30,$eq31,$bool51,$cmp27,$cmp28,$cmp29,$div3,$5,$9,$add18,$pyjs_try_err,$mul4,_textMM,$and8,$bool46,widget,timeFromMM,$7,$or3,$sub13,$sub16,$bool49,$bool48,$add14,$add15,$eq23,$add17,$eq25,$eq24,$eq27,_text,$eq29,$eq28,$mul5,$and7,$mul3,$div4,$cmp30,$10,$11,$12,HM,$add16,$sub15,_textHH,$add13,timeFromHH,$mul6;
			widget = self['getWidget'](row, col);
			if ((($bool45=(($eq23=col)===($eq24=0)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				timeFrom = self['getWidget'](row, 0)['getText']();
				if ((($bool47=((($bool46=$and7=(($eq25=timeFrom)===($eq26='')&&$eq25===null?true:
					($eq25===null?false:($eq26===null?false:
						((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
							((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
								$eq25==$eq26)))))) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46.__nonzero__=='function'?
							$bool46.__nonzero__() :
							(typeof $bool46.__len__=='function'?
								($bool46.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp27=row)===($cmp28=1)?0:
					(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
						($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
						$p['cmp']($cmp27, $cmp28))) == 1):$and7)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					timeFrom = self['getWidget']((typeof ($sub13=row)==typeof ($sub14=1) && (typeof $sub13=='number'||typeof $sub13=='string')?
						$sub13-$sub14:
						$p['op_sub']($sub13,$sub14)), 1)['getText']();
					widget['setText'](timeFrom);
				}
			}
			else if ((($bool48=(($eq27=col)===($eq28=1)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48.__nonzero__=='function'?
							$bool48.__nonzero__() :
							(typeof $bool48.__len__=='function'?
								($bool48.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				timeFrom = self['getWidget'](row, 0)['getText']()['strip']();
				_text = widget['getText']()['strip']();
				if ((($bool50=((($bool49=$or3=(($eq29=timeFrom)===($eq30='')&&$eq29===null?true:
					($eq29===null?false:($eq30===null?false:
						((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
							((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
								$eq29==$eq30)))))) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
					false :
					(typeof $bool49=='object'?
						(typeof $bool49.__nonzero__=='function'?
							$bool49.__nonzero__() :
							(typeof $bool49.__len__=='function'?
								($bool49.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or3:((($cmp29=timeFrom)===($cmp30=_text)?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))) == -1))) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
					return null;
				}
				try {
					HM = timeFrom['$$split'](':');
					timeFromHH = $p['float_int']((typeof ($5=HM).__array != 'undefined'?
						((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(0)));
					timeFromMM = $p['float_int']((typeof ($7=HM).__array != 'undefined'?
						((typeof $7.__array[$8=1]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(1)));
					HM = _text['$$split'](':');
					_textHH = $p['float_int']((typeof ($9=HM).__array != 'undefined'?
						((typeof $9.__array[$10=0]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(0)));
					_textMM = $p['float_int']((typeof ($11=HM).__array != 'undefined'?
						((typeof $11.__array[$12=1]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(1)));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						widget['setFocus'](true);
						return null;
					}
				}
				_textHH = (typeof ($add13=_textHH)==typeof ($add14=timeFromHH) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
				_textMM = (typeof ($add17=_textMM)==typeof ($add18=(typeof ($add15=timeFromMM)==typeof ($add16=(typeof ($mul3=_textHH)==typeof ($mul4=60) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					$p['op_add']($add15,$add16))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					$p['op_add']($add17,$add18));
				_textHH = $p['float_int']((typeof ($div3=_textMM)==typeof ($div4=60) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)));
				_textMM = (typeof ($sub15=_textMM)==typeof ($sub16=(typeof ($mul5=_textHH)==typeof ($mul6=60) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))) && (typeof $sub15=='number'||typeof $sub15=='string')?
					$sub15-$sub16:
					$p['op_sub']($sub15,$sub16));
				_text = $p['sprintf']('%02d:%02d', $p['tuple']([_textHH, _textMM]));
				if ((($bool51=!(($eq31=_text)===($eq32='00:00')&&$eq31===null?true:
					($eq31===null?false:($eq32===null?false:
						((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
							((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
								$eq31==$eq32)))))) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
					widget['setText'](_text);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['col']]);
		$cls_definition['autoFill'] = $method;
		$method = $pyjs__bind_method2('checkCell', function(row, col, auto) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
				auto = arguments[3];
			}
			if (typeof auto == 'undefined') auto=arguments.callee.__args__[5][1];
			var $bool54,$bool55,$bool56,$bool57,$bool52,$bool53,text,$bool58,$eq33,$eq36,$eq37,$eq34,$eq35,$eq38,$eq39,$pyjs_try_err,widget,_text,e,$eq42,$eq41,$eq40,$len4;
			widget = self['getWidget'](row, col);
			if ((($bool52=$p['list']([0, 1]).__contains__(col)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
				try {
					text = widget['getText']();
					_text = text['strip']();
					if ((($bool53=!(($eq33=text)===($eq34=_text)&&$eq33===null?true:
						($eq33===null?false:($eq34===null?false:
							((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
								((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
									$eq33==$eq34)))))) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
						text = _text;
						widget['setText'](text);
					}
					_text = self['checkHHMM'](text);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						e = $pyjs_try_err;
						widget['setFocus'](true);
						return false;
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				if ((($bool54=(($eq35=text)===($eq36='')&&$eq35===null?true:
					($eq35===null?false:($eq36===null?false:
						((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
							((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
								$eq35==$eq36)))))) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54.__nonzero__=='function'?
								$bool54.__nonzero__() :
								(typeof $bool54.__len__=='function'?
									($bool54.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					widget['setFocus'](true);
					return false;
				}
				if ((($bool55=!(($eq37=text)===($eq38=_text)&&$eq37===null?true:
					($eq37===null?false:($eq38===null?false:
						((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
							((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
								$eq37==$eq38)))))) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
					if ((($bool56=auto) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
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
						widget['setText'](_text);
					}
					else {
						return false;
					}
				}
				return true;
			}
			else if ((($bool57=(($eq39=col)===($eq40=2)&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
				text = widget['getText']();
				if ((($bool58=(($eq41=(($len4=text) === null?0:
					(typeof $len4.__array != 'undefined' ? $len4.__array.length:
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'?$len4.length:
								$p['len']($len4))))))===($eq42=0)&&$eq41===null?true:
					($eq41===null?false:($eq42===null?false:
						((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41.__cmp__=='function'?$eq41.__cmp__($eq42) === 0:
							((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42.__cmp__=='function'?$eq42.__cmp__($eq41) === 0:
								$eq41==$eq42)))))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
					widget['setFocus'](true);
					return false;
				}
			}
			return true;
		}
	, 1, [null,null,['self'],['row'],['col'],['auto', false]]);
		$cls_definition['checkCell'] = $method;
		$method = $pyjs__bind_method2('checkRow', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $bool60,$bool59,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,col,$iter9_array;
			$iter9_iter = $p['range']($p['getattr'](self, 'cols'));
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				col = $iter9_nextval;
				if ((($bool60=!(($bool59=self['checkCell'](row, col)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59.__nonzero__=='function'?
							$bool59.__nonzero__() :
							(typeof $bool59.__len__=='function'?
								($bool59.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
					return false;
				}
			}
			return true;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['checkRow'] = $method;
		$method = $pyjs__bind_method2('checkValid', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $bool61,$bool63,$bool62,$eq43,$eq44;
			self['selectCell']($p['getattr'](sender, 'row'), $p['getattr'](sender, 'col'));
			self.dirty = true;
			return null;
			if ((($bool61=!(($eq43=$p['getattr'](sender, 'row'))===($eq44=$p['getattr'](self, 'currentRow'))&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43.__cmp__=='function'?$eq43.__cmp__($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44.__cmp__=='function'?$eq44.__cmp__($eq43) === 0:
							$eq43==$eq44)))))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
					false :
					(typeof $bool61=='object'?
						(typeof $bool61.__nonzero__=='function'?
							$bool61.__nonzero__() :
							(typeof $bool61.__len__=='function'?
								($bool61.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool63=!(($bool62=self['checkRow']($p['getattr'](self, 'currentRow'))) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
					false :
					(typeof $bool62=='object'?
						(typeof $bool62.__nonzero__=='function'?
							$bool62.__nonzero__() :
							(typeof $bool62.__len__=='function'?
								($bool62.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
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
					return false;
				}
			}
			return self['checkRow']($p['getattr'](sender, 'row'));
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['checkValid'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keyCode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}
			var $sub20,$bool70,$eq60,$eq54,$eq55,$eq56,$eq57,$eq50,$eq51,$eq52,$eq53,$eq58,$eq59,$add23,$add21,$add20,$add22,currStatus,$add24,$sub19,$sub18,$bool65,$bool64,$bool67,$bool66,$bool69,$bool68,$sub17,$eq48,$bool71,$add19,$eq49,$eq47,$eq46,$eq45,$len5;
			currStatus = self['checkCell']($p['getattr'](self, 'currentRow'), $p['getattr'](self, 'currentCol'));
			if ((($bool64=(($eq45=modifiers)===($eq46=0)&&$eq45===null?true:
				($eq45===null?false:($eq46===null?false:
					((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45.__cmp__=='function'?$eq45.__cmp__($eq46) === 0:
						((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46.__cmp__=='function'?$eq46.__cmp__($eq45) === 0:
							$eq45==$eq46)))))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
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
				if ((($bool65=(($eq47=keyCode)===($eq48=37)&&$eq47===null?true:
					($eq47===null?false:($eq48===null?false:
						((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47.__cmp__=='function'?$eq47.__cmp__($eq48) === 0:
							((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48.__cmp__=='function'?$eq48.__cmp__($eq47) === 0:
								$eq47==$eq48)))))) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
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
					if ((($bool66=(($eq49=sender['getCursorPos']())===($eq50=0)&&$eq49===null?true:
						($eq49===null?false:($eq50===null?false:
							((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49.__cmp__=='function'?$eq49.__cmp__($eq50) === 0:
								((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50.__cmp__=='function'?$eq50.__cmp__($eq49) === 0:
									$eq49==$eq50)))))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
						self['selectCell']($p['getattr'](sender, 'row'), (typeof ($sub17=$p['getattr'](sender, 'col'))==typeof ($sub18=1) && (typeof $sub17=='number'||typeof $sub17=='string')?
							$sub17-$sub18:
							$p['op_sub']($sub17,$sub18)));
					}
				}
				else if ((($bool67=(($eq51=keyCode)===($eq52=38)&&$eq51===null?true:
					($eq51===null?false:($eq52===null?false:
						((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51.__cmp__=='function'?$eq51.__cmp__($eq52) === 0:
							((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52.__cmp__=='function'?$eq52.__cmp__($eq51) === 0:
								$eq51==$eq52)))))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
						false :
						(typeof $bool67=='object'?
							(typeof $bool67.__nonzero__=='function'?
								$bool67.__nonzero__() :
								(typeof $bool67.__len__=='function'?
									($bool67.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['selectCell']((typeof ($sub19=$p['getattr'](sender, 'row'))==typeof ($sub20=1) && (typeof $sub19=='number'||typeof $sub19=='string')?
						$sub19-$sub20:
						$p['op_sub']($sub19,$sub20)), $p['getattr'](sender, 'col'));
				}
				else if ((($bool68=(($eq53=keyCode)===($eq54=39)&&$eq53===null?true:
					($eq53===null?false:($eq54===null?false:
						((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53.__cmp__=='function'?$eq53.__cmp__($eq54) === 0:
							((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54.__cmp__=='function'?$eq54.__cmp__($eq53) === 0:
								$eq53==$eq54)))))) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
						false :
						(typeof $bool68=='object'?
							(typeof $bool68.__nonzero__=='function'?
								$bool68.__nonzero__() :
								(typeof $bool68.__len__=='function'?
									($bool68.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool69=(($eq55=sender['getCursorPos']())===($eq56=(($len5=sender['getText']()) === null?0:
						(typeof $len5.__array != 'undefined' ? $len5.__array.length:
							(typeof $len5.__len__ == 'function'?$len5.__len__():
								(typeof $len5.length != 'undefined'?$len5.length:
									$p['len']($len5))))))&&$eq55===null?true:
						($eq55===null?false:($eq56===null?false:
							((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55.__cmp__=='function'?$eq55.__cmp__($eq56) === 0:
								((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56.__cmp__=='function'?$eq56.__cmp__($eq55) === 0:
									$eq55==$eq56)))))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
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
						self['selectCell']($p['getattr'](sender, 'row'), (typeof ($add19=$p['getattr'](sender, 'col'))==typeof ($add20=1) && (typeof $add19=='number'||typeof $add19=='string')?
							$add19+$add20:
							$p['op_add']($add19,$add20)));
					}
				}
				else if ((($bool70=(($eq57=keyCode)===($eq58=40)&&$eq57===null?true:
					($eq57===null?false:($eq58===null?false:
						((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57.__cmp__=='function'?$eq57.__cmp__($eq58) === 0:
							((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58.__cmp__=='function'?$eq58.__cmp__($eq57) === 0:
								$eq57==$eq58)))))) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
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
					self['selectCell']((typeof ($add21=$p['getattr'](sender, 'row'))==typeof ($add22=1) && (typeof $add21=='number'||typeof $add21=='string')?
						$add21+$add22:
						$p['op_add']($add21,$add22)), $p['getattr'](sender, 'col'));
				}
				else if ((($bool71=(($eq59=keyCode)===($eq60=13)&&$eq59===null?true:
					($eq59===null?false:($eq60===null?false:
						((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59.__cmp__=='function'?$eq59.__cmp__($eq60) === 0:
							((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60.__cmp__=='function'?$eq60.__cmp__($eq59) === 0:
								$eq59==$eq60)))))) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
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
					self['selectCell']($p['getattr'](sender, 'row'), (typeof ($add23=$p['getattr'](sender, 'col'))==typeof ($add24=1) && (typeof $add23=='number'||typeof $add23=='string')?
						$add23+$add24:
						$p['op_add']($add23,$add24)));
				}
				else {
					self.dirty = true;
				}
			}
			else {
				self.dirty = true;
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keyCode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyPress', function(sender, keyCode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		$method = $pyjs__bind_method2('onFocus', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $or5,$or6,$eq61,$bool72,$bool73,$eq63,$eq62,$eq64;
			if ((($bool73=((($bool72=$or5=!(($eq61=$p['getattr'](sender, 'row'))===($eq62=$p['getattr'](self, 'currentRow'))&&$eq61===null?true:
				($eq61===null?false:($eq62===null?false:
					((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61.__cmp__=='function'?$eq61.__cmp__($eq62) === 0:
						((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62.__cmp__=='function'?$eq62.__cmp__($eq61) === 0:
							$eq61==$eq62)))))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
				false :
				(typeof $bool72=='object'?
					(typeof $bool72.__nonzero__=='function'?
						$bool72.__nonzero__() :
						(typeof $bool72.__len__=='function'?
							($bool72.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:!(($eq63=$p['getattr'](sender, 'col'))===($eq64=$p['getattr'](self, 'currentCol'))&&$eq63===null?true:
				($eq63===null?false:($eq64===null?false:
					((typeof $eq63=='object'||typeof $eq63=='function')&&typeof $eq63.__cmp__=='function'?$eq63.__cmp__($eq64) === 0:
						((typeof $eq64=='object'||typeof $eq64=='function')&&typeof $eq64.__cmp__=='function'?$eq64.__cmp__($eq63) === 0:
							$eq63==$eq64))))))) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
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
				self['selectCell']($p['getattr'](sender, 'row'), $p['getattr'](sender, 'col'));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onFocus'] = $method;
		$method = $pyjs__bind_method2('onLostFocus', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLostFocus'] = $method;
		var $bases = new Array($m['FlexTable']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TimeGrid', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.components.TimeGrid */


/* end module: view.components.TimeGrid */


/*
PYJS_DEPS: ['ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'Grid.Grid', 'Grid', 'model.vo.TimeVO.TimeVO', 'model', 'model.vo', 'model.vo.TimeVO']
*/
