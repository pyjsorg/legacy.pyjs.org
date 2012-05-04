/* start module: view.components.Summary */
$pyjs.loaded_modules['view.components.Summary'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.components.Summary'].__was_initialized__) return $pyjs.loaded_modules['view.components.Summary'];
	if(typeof $pyjs.loaded_modules['view.components'] == 'undefined' || !$pyjs.loaded_modules['view.components'].__was_initialized__) $p['___import___']('view.components', null);
	var $m = $pyjs.loaded_modules["view.components.Summary"];
	$m.__repr__ = function() { return "<module: view.components.Summary>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.components.Summary';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view.components']['Summary'] = $pyjs.loaded_modules['view.components.Summary'];


	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view.components', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'view.components', null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', 'view.components', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'view.components', null, false);
	$m['Grid'] = $p['___import___']('Grid.Grid', 'view.components', null, false);
	$m['time'] = $p['___import___']('time', 'view.components');
	$m['Summary'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.components.Summary';
		$cls_definition['columns'] = $p['list']([$p['tuple'](['Time', 5, 5]), $p['tuple'](['Description', null, 60])]);
		$cls_definition['rows'] = 0;
		$cls_definition['cols'] = 0;
		$cls_definition['date'] = null;
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
				self['setVisible'](false);
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
		$method = $pyjs__bind_method2('setEntries', function(entries) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				entries = arguments[1];
			}
			var $iter1_iter,$iter4_type,row,tt,$iter3_iter,$43,$42,$41,$40,$44,$iter2_type,$bool2,$bool3,$bool1,$bool6,$bool4,$bool5,dt,projects,desc,timeVO,$iter4_nextval,t2,t1,descriptions,project,$iter2_iter,$add7,$iter1_nextval,timelines,$17,$iter2_array,$iter3_array,$iter4_iter,$iter3_nextval,$iter1_array,$iter2_idx,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$iter2_nextval,$10,$11,$12,$13,$18,$19,$add2,$add3,$add1,$add6,$iter1_idx,$add4,$add5,$iter4_array,$add8,$29,$28,$iter3_idx,descr,$21,$20,$23,$22,$25,$24,$27,$26,$pyjs_try_err,$sub2,$sub1,$or1,$or2,$iter3_type,$iter1_type,$38,$39,$36,$37,$34,$35,$32,$33,$30,$31,$iter4_idx;
			try {
				tt = $p['list']([0, 0, 0, 0, 0, 0, 0, 0, 0]);
				if ((($bool1=$p['getattr'](self, 'date')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					tt.__setitem__(0, $p['float_int']($p['__getslice']($p['getattr'](self, 'date'), 0, 4)));
					tt.__setitem__(1, $p['float_int']($p['__getslice']($p['getattr'](self, 'date'), 4, 6)));
					tt.__setitem__(2, $p['float_int']($p['__getslice']($p['getattr'](self, 'date'), 6, 8)));
				}
				tt.__setitem__(3, 0);
				tt.__setitem__(4, 0);
				tt.__setitem__(5, 0);
				tt.__setitem__(6, (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				tt.__setitem__(7, (typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				tt.__setitem__(8, (typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)));
				timelines = $p['dict']([]);
				$iter1_iter = entries;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					timeVO = $iter1_nextval;
					t1 = $p['__getslice'](tt, 0, null);
					t2 = $p['__getslice'](tt, 0, null);
					if ((($bool5=((($bool3=$or1=!(($bool2=$p['getattr'](timeVO, 'start')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
						false :
						(typeof $bool2=='object'?
							(typeof $bool2.__nonzero__=='function'?
								$bool2.__nonzero__() :
								(typeof $bool2.__len__=='function'?
									($bool2.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
						false :
						(typeof $bool3=='object'?
							(typeof $bool3.__nonzero__=='function'?
								$bool3.__nonzero__() :
								(typeof $bool3.__len__=='function'?
									($bool3.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:!(($bool4=$p['getattr'](timeVO, 'end')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
						false :
						(typeof $bool4=='object'?
							(typeof $bool4.__nonzero__=='function'?
								$bool4.__nonzero__() :
								(typeof $bool4.__len__=='function'?
									($bool4.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) ))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
						continue;
					}
					t1.__setitem__(3, $p['float_int']($p['__getslice']($p['getattr'](timeVO, 'start'), 0, 2)));
					t1.__setitem__(4, $p['float_int']($p['__getslice']($p['getattr'](timeVO, 'start'), 3, null)));
					t2.__setitem__(3, $p['float_int']($p['__getslice']($p['getattr'](timeVO, 'end'), 0, 2)));
					t2.__setitem__(4, $p['float_int']($p['__getslice']($p['getattr'](timeVO, 'end'), 3, null)));
					t1 = $m['time']['mktime'](t1);
					t2 = $m['time']['mktime'](t2);
					dt = (typeof ($sub1=t2)==typeof ($sub2=t1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						$p['op_sub']($sub1,$sub2));
					project = timelines['get'](timeVO['project']['lower'](), $p['list']([0, $p['getattr'](timeVO, 'project'), $p['dict']([])]));
					project.__setitem__(0, (typeof ($add1=(typeof ($1=project).__array != 'undefined'?
						((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(0)))==typeof ($add2=dt) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						$p['op_add']($add1,$add2)));
					descr = (typeof ($3=project).__array != 'undefined'?
						((typeof $3.__array[$4=2]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(2))['get'](timeVO['description']['lower'](), $p['list']([0, $p['getattr'](timeVO, 'description')]));
					descr.__setitem__(0, (typeof ($add3=(typeof ($5=descr).__array != 'undefined'?
						((typeof $5.__array[$6=0]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(0)))==typeof ($add4=dt) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)));
					(typeof ($7=project).__array != 'undefined'?
						((typeof $7.__array[$8=2]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(2)).__setitem__(timeVO['description']['lower'](), descr);
					timelines.__setitem__(timeVO['project']['lower'](), project);
				}
				$iter2_iter = $p['range'](self['getRowCount']());
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					row = $iter2_nextval;
					self['removeRow'](0);
				}
				self.rows = 0;
				self['addHeader']();
				projects = timelines['keys']();
				projects['sort']();
				$iter3_iter = projects;
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					project = $iter3_nextval;
					self['addRow']($p['list']([self['HHMM']((typeof ($11=(typeof ($9=timelines).__array != 'undefined'?
						((typeof $9.__array[$10=project]) != 'undefined'?$9.__array[$10]:
							$9.__getitem__($10)):
							$9.__getitem__(project))).__array != 'undefined'?
						((typeof $11.__array[$12=0]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(0))), (typeof ($15=(typeof ($13=timelines).__array != 'undefined'?
						((typeof $13.__array[$14=project]) != 'undefined'?$13.__array[$14]:
							$13.__getitem__($14)):
							$13.__getitem__(project))).__array != 'undefined'?
						((typeof $15.__array[$16=1]) != 'undefined'?$15.__array[$16]:
							$15.__getitem__($16)):
							$15.__getitem__(1))]));
					descriptions = (typeof ($19=(typeof ($17=timelines).__array != 'undefined'?
						((typeof $17.__array[$18=project]) != 'undefined'?$17.__array[$18]:
							$17.__getitem__($18)):
							$17.__getitem__(project))).__array != 'undefined'?
						((typeof $19.__array[$20=2]) != 'undefined'?$19.__array[$20]:
							$19.__getitem__($20)):
							$19.__getitem__(2));
					descriptions = descriptions['keys']();
					descriptions['sort']();
					$iter4_iter = descriptions;
					if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter.__iter__();
						$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
						desc = $iter4_nextval;
						if ((($bool6=(typeof ($27=(typeof ($25=(typeof ($23=(typeof ($21=timelines).__array != 'undefined'?
							((typeof $21.__array[$22=project]) != 'undefined'?$21.__array[$22]:
								$21.__getitem__($22)):
								$21.__getitem__(project))).__array != 'undefined'?
							((typeof $23.__array[$24=2]) != 'undefined'?$23.__array[$24]:
								$23.__getitem__($24)):
								$23.__getitem__(2))).__array != 'undefined'?
							((typeof $25.__array[$26=desc]) != 'undefined'?$25.__array[$26]:
								$25.__getitem__($26)):
								$25.__getitem__(desc))).__array != 'undefined'?
							((typeof $27.__array[$28=1]) != 'undefined'?$27.__array[$28]:
								$27.__getitem__($28)):
								$27.__getitem__(1))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
							self['addRow']($p['list'](['', (typeof ($add7=(typeof ($add5=self['HHMM']((typeof ($35=(typeof ($33=(typeof ($31=(typeof ($29=timelines).__array != 'undefined'?
								((typeof $29.__array[$30=project]) != 'undefined'?$29.__array[$30]:
									$29.__getitem__($30)):
									$29.__getitem__(project))).__array != 'undefined'?
								((typeof $31.__array[$32=2]) != 'undefined'?$31.__array[$32]:
									$31.__getitem__($32)):
									$31.__getitem__(2))).__array != 'undefined'?
								((typeof $33.__array[$34=desc]) != 'undefined'?$33.__array[$34]:
									$33.__getitem__($34)):
									$33.__getitem__(desc))).__array != 'undefined'?
								((typeof $35.__array[$36=0]) != 'undefined'?$35.__array[$36]:
									$35.__getitem__($36)):
									$35.__getitem__(0))))==typeof ($add6=' ') && (typeof $add5=='number'||typeof $add5=='string')?
								$add5+$add6:
								$p['op_add']($add5,$add6)))==typeof ($add8=(typeof ($43=(typeof ($41=(typeof ($39=(typeof ($37=timelines).__array != 'undefined'?
								((typeof $37.__array[$38=project]) != 'undefined'?$37.__array[$38]:
									$37.__getitem__($38)):
									$37.__getitem__(project))).__array != 'undefined'?
								((typeof $39.__array[$40=2]) != 'undefined'?$39.__array[$40]:
									$39.__getitem__($40)):
									$39.__getitem__(2))).__array != 'undefined'?
								((typeof $41.__array[$42=desc]) != 'undefined'?$41.__array[$42]:
									$41.__getitem__($42)):
									$41.__getitem__(desc))).__array != 'undefined'?
								((typeof $43.__array[$44=1]) != 'undefined'?$43.__array[$44]:
									$43.__getitem__($44)):
									$43.__getitem__(1))) && (typeof $add7=='number'||typeof $add7=='string')?
								$add7+$add8:
								$p['op_add']($add7,$add8))]));
						}
					}
				}
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
	, 1, [null,null,['self'],['entries']]);
		$cls_definition['setEntries'] = $method;
		$method = $pyjs__bind_method2('HHMM', function(t) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				t = arguments[1];
			}
			var mm,hh,$mod1,$mod2,$div2,$div3,$div1,$div4;
			t = (typeof ($div1=t)==typeof ($div2=60) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
			hh = (typeof ($div3=t)==typeof ($div4=60) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4));
			mm = (typeof ($mod1=t)==typeof ($mod2=60) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2));
			return $p['sprintf']('%02d:%02d', $p['tuple']([hh, mm]));
		}
	, 1, [null,null,['self'],['t']]);
		$cls_definition['HHMM'] = $method;
		$method = $pyjs__bind_method2('addHeader', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter5_array,maxLength,$$label,$iter5_iter,$add10,$iter5_idx,$iter5_type,$add9,col,visibleLength;
			col = 0;
			$iter5_iter = $p['getattr'](self, 'columns');
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter5_nextval, 3, null);
				$$label = $tupleassign1[0];
				maxLength = $tupleassign1[1];
				visibleLength = $tupleassign1[2];
				self['setWidget'](0, col, $pyjs_kwargs_call(null, $m['Label'], null, null, [{wordWrap:false}, $$label]));
				col = (typeof ($add9=col)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['addHeader'] = $method;
		$method = $pyjs__bind_method2('addRow', function(values) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}
			var name,$iter6_idx,$iter6_type,$add13,$46,$$label,$add14,$iter6_array,$add11,$add12,maxLength,$iter6_iter,visibleLength,col,$45,$iter6_nextval;
			self.rows = (typeof ($add11=$p['getattr'](self, 'rows'))==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12));
			col = (typeof ($usub4=1)=='number'?
				-$usub4:
				$p['op_usub']($usub4));
			$iter6_iter = $p['getattr'](self, 'columns');
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter6_nextval, 3, null);
				name = $tupleassign2[0];
				maxLength = $tupleassign2[1];
				visibleLength = $tupleassign2[2];
				col = (typeof ($add13=col)==typeof ($add14=1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
				$$label = $m['Label']();
				$$label['setText']((typeof ($45=values).__array != 'undefined'?
					((typeof $45.__array[$46=col]) != 'undefined'?$45.__array[$46]:
						$45.__getitem__($46)):
						$45.__getitem__(col)));
				self['setWidget']($p['getattr'](self, 'rows'), col, $$label);
			}
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['addRow'] = $method;
		var $bases = new Array($m['FlexTable']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Summary', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.components.Summary */


/* end module: view.components.Summary */


/*
PYJS_DEPS: ['ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'Grid.Grid', 'Grid', 'time']
*/
