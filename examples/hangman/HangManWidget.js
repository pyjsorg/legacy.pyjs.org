/* start module: HangManWidget */
$pyjs.loaded_modules['HangManWidget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['HangManWidget'].__was_initialized__) return $pyjs.loaded_modules['HangManWidget'];
	var $m = $pyjs.loaded_modules["HangManWidget"];
	$m.__repr__ = function() { return "<module: HangManWidget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'HangManWidget';
	$m.__name__ = __mod_name__;


	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['RadioButton'] = $p['___import___']('pyjamas.ui.RadioButton.RadioButton', null, null, false);
	$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['math'] = $p['___import___']('math', null);
	$m['random'] = $p['___import___']('random', null);
	$m['string'] = $p['___import___']('string', null);
	$m['Wordlist_20'] = $p['___import___']('Wordlist_20', null);
	$m['Wordlist_15'] = $p['___import___']('Wordlist_15', null);
	$m['Wordlist_10'] = $p['___import___']('Wordlist_10', null);
	$m['Wordlist_5'] = $p['___import___']('Wordlist_5', null);
	$m['HangManWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'HangManWidget';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_array,$iter1_iter,$iter2_type,$iter3_idx,$iter2_iter,$iter1_array,$iter3_iter,$iter1_nextval,$bool2,$iter2_idx,$bool1,$iter3_type,$6,$4,$5,$2,$3,$1,$cmp4,$iter2_nextval,$cmp1,$iter1_type,$cmp3,$cmp2,i,$add2,$add1,$len2,$iter1_idx,$len1,$iter3_nextval,$iter2_array;
			$m['Composite']['__init__'](self);
			self.guesses = 0;
			self.score = 0;
			self.level = 5;
			self.answer = '';
			self.blanks = '';
			self.vp_main = $m['VerticalPanel']();
			self['vp_main']['setSpacing'](4);
			self.hangdude = (typeof HangDude == "undefined"?$m.HangDude:HangDude)();
			self.cmdNew = $m['Button']('Start', self);
			self.radLevel5 = $m['RadioButton']('group0', '5-10 letters');
			self['radLevel5']['setChecked'](true);
			self.radLevel10 = $m['RadioButton']('group0', '10-15 letters');
			self.radLevel15 = $m['RadioButton']('group0', '15-20 letters');
			self.radLevel20 = $m['RadioButton']('group0', '20+ letters');
			self['radLevel5']['addClickListener']($p['getattr'](self, 'onRadioSelect'));
			self['radLevel10']['addClickListener']($p['getattr'](self, 'onRadioSelect'));
			self['radLevel15']['addClickListener']($p['getattr'](self, 'onRadioSelect'));
			self['radLevel20']['addClickListener']($p['getattr'](self, 'onRadioSelect'));
			self.rad_hp = $m['HorizontalPanel']();
			self['rad_hp']['setSpacing'](4);
			self['rad_hp']['add']($p['getattr'](self, 'radLevel5'));
			self['rad_hp']['add']($p['getattr'](self, 'radLevel10'));
			self['rad_hp']['add']($p['getattr'](self, 'radLevel15'));
			self['rad_hp']['add']($p['getattr'](self, 'radLevel20'));
			self['rad_hp']['add']($p['getattr'](self, 'cmdNew'));
			self.puzzlestring = $m['HTML']();
			self.key_widgets = $p['list']([]);
			$iter1_iter = $p['range']((($len1=$p['getattr']($m['string'], 'uppercase')) === null?0:
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
				self['key_widgets']['append']($m['Button']($p['__getslice']($p['getattr']($m['string'], 'uppercase'), i, (typeof ($add1=i)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2))), self));
			}
			self.toprow = $m['HorizontalPanel']();
			self.midrow = $m['HorizontalPanel']();
			self.botrow = $m['HorizontalPanel']();
			$iter2_iter = $p['range']((($len2=$p['getattr'](self, 'key_widgets')) === null?0:
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
				if ((($bool1=((($cmp1=i)===($cmp2=7)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) < 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
					self['toprow']['add']((typeof ($1=$p['getattr'](self, 'key_widgets')).__array != 'undefined'?
						((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
							$1.__getitem__($2)):
							$1.__getitem__(i)));
				}
				else if ((($bool2=((($cmp3=i)===($cmp4=16)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) < 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['midrow']['add']((typeof ($3=$p['getattr'](self, 'key_widgets')).__array != 'undefined'?
						((typeof $3.__array[$4=i]) != 'undefined'?$3.__array[$4]:
							$3.__getitem__($4)):
							$3.__getitem__(i)));
				}
				else {
					self['botrow']['add']((typeof ($5=$p['getattr'](self, 'key_widgets')).__array != 'undefined'?
						((typeof $5.__array[$6=i]) != 'undefined'?$5.__array[$6]:
							$5.__getitem__($6)):
							$5.__getitem__(i)));
				}
			}
			self['vp_main']['add']($p['getattr'](self, 'hangdude'));
			self['vp_main']['add']($p['getattr'](self, 'puzzlestring'));
			self['vp_main']['add']($p['getattr'](self, 'toprow'));
			self['vp_main']['add']($p['getattr'](self, 'midrow'));
			self['vp_main']['add']($p['getattr'](self, 'botrow'));
			self['vp_main']['add']($p['getattr'](self, 'rad_hp'));
			$iter3_iter = $p['range'](1, 12);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				self['hangdude']['draw'](i);
			}
			self['setWidget']($p['getattr'](self, 'vp_main'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var words,$bool10,$iter5_idx,$bool12,$bool13,$iter4_type,$mul6,$bool11,$bool3,$iter6_array,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$iter4_nextval,found,$iter5_nextval,$iter5_array,$iter5_type,$iter6_iter,$len7,$eq14,r,$len3,$iter6_idx,g,$iter6_type,$eq10,$eq11,$eq12,$eq13,$iter4_iter,$8,$9,$7,$mul5,$mul4,$mul3,$mul2,$mul1,$10,$11,$12,j,$len6,$add3,$len4,$len5,$add6,$add7,$add4,$add5,$iter4_array,$add8,$add9,$iter5_iter,$iter6_nextval,$add21,$add20,$add22,$sub2,$sub1,$eq8,$eq9,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$cmp5,$cmp7,$cmp6,i,$cmp8,$iter4_idx,guess_letter;
			found = false;
			if ((($bool3=(($eq1=sender)===($eq2=$p['getattr'](self, 'cmdNew'))&&$eq1===null?true:
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
				self.blanks = '';
				self['hangdude']['clear']();
				self.guesses = 0;
				self.score = 0;
				$iter4_iter = $p['range']((($len3=$p['getattr'](self, 'key_widgets')) === null?0:
					(typeof $len3.__array != 'undefined' ? $len3.__array.length:
						(typeof $len3.__len__ == 'function'?$len3.__len__():
							(typeof $len3.length != 'undefined'?$len3.length:
								$p['len']($len3))))));
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					(typeof ($7=$p['getattr'](self, 'key_widgets')).__array != 'undefined'?
						((typeof $7.__array[$8=i]) != 'undefined'?$7.__array[$8]:
							$7.__getitem__($8)):
							$7.__getitem__(i))['setEnabled'](true);
				}
				if ((($bool4=(($eq3=$p['getattr'](self, 'level'))===($eq4=5)&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					words = $p['getattr']($m['Wordlist_5'], 'words');
				}
				else if ((($bool5=(($eq5=$p['getattr'](self, 'level'))===($eq6=10)&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
								$eq5==$eq6)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					words = $p['getattr']($m['Wordlist_10'], 'words');
				}
				else if ((($bool6=(($eq7=$p['getattr'](self, 'level'))===($eq8=15)&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					words = $p['getattr']($m['Wordlist_15'], 'words');
				}
				else if ((($bool7=(($eq9=$p['getattr'](self, 'level'))===($eq10=20)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					words = $p['getattr']($m['Wordlist_20'], 'words');
				}
				g = $m['random']['Random']();
				r = $p['float_int']((typeof ($mul1=g['random']())==typeof ($mul2=(($len4=words) === null?0:
					(typeof $len4.__array != 'undefined' ? $len4.__array.length:
						(typeof $len4.__len__ == 'function'?$len4.__len__():
							(typeof $len4.length != 'undefined'?$len4.length:
								$p['len']($len4)))))) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
				self.answer = (typeof ($9=words).__array != 'undefined'?
					((typeof $9.__array[$10=r]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__(r))['upper']();
				$iter5_iter = $p['range']((($len5=$p['getattr'](self, 'answer')) === null?0:
					(typeof $len5.__array != 'undefined' ? $len5.__array.length:
						(typeof $len5.__len__ == 'function'?$len5.__len__():
							(typeof $len5.length != 'undefined'?$len5.length:
								$p['len']($len5))))));
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					if ((($bool8=(($eq11=(typeof ($11=$p['getattr'](self, 'answer')).__array != 'undefined'?
						((typeof $11.__array[$12=i]) != 'undefined'?$11.__array[$12]:
							$11.__getitem__($12)):
							$11.__getitem__(i)))===($eq12=' ')&&$eq11===null?true:
						($eq11===null?false:($eq12===null?false:
							((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11.__cmp__=='function'?$eq11.__cmp__($eq12) === 0:
								((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12.__cmp__=='function'?$eq12.__cmp__($eq11) === 0:
									$eq11==$eq12)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						self.blanks = (typeof ($add3=$p['getattr'](self, 'blanks'))==typeof ($add4='  ') && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
					}
					else {
						self.blanks = (typeof ($add5=$p['getattr'](self, 'blanks'))==typeof ($add6='_ ') && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6));
					}
				}
				self['puzzlestring']['setHTML']($p['getattr'](self, 'blanks'));
			}
			else {
				guess_letter = sender['getText']();
				sender['setEnabled'](false);
				$iter6_iter = $p['range']((($len6=$p['getattr'](self, 'answer')) === null?0:
					(typeof $len6.__array != 'undefined' ? $len6.__array.length:
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'?$len6.length:
								$p['len']($len6))))));
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					i = $iter6_nextval;
					if ((($bool9=(($eq13=$p['__getslice']($p['getattr'](self, 'answer'), i, (typeof ($add7=i)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
						$add7+$add8:
						$p['op_add']($add7,$add8))))===($eq14=guess_letter)&&$eq13===null?true:
						($eq13===null?false:($eq14===null?false:
							((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
								((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
									$eq13==$eq14)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
						j = (typeof ($add9=i)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
							$add9+$add10:
							$p['op_add']($add9,$add10));
						self.blanks = (typeof ($add15=(typeof ($add13=(typeof ($add11=$p['__getslice']($p['getattr'](self, 'blanks'), 0, (typeof ($sub1=(typeof ($mul3=j)==typeof ($mul4=2) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4)))==typeof ($sub2=2) && (typeof $sub1=='number'||typeof $sub1=='string')?
							$sub1-$sub2:
							$p['op_sub']($sub1,$sub2))))==typeof ($add12=guess_letter) && (typeof $add11=='number'||typeof $add11=='string')?
							$add11+$add12:
							$p['op_add']($add11,$add12)))==typeof ($add14=' ') && (typeof $add13=='number'||typeof $add13=='string')?
							$add13+$add14:
							$p['op_add']($add13,$add14)))==typeof ($add16=$p['__getslice']($p['getattr'](self, 'blanks'), (typeof ($mul5=j)==typeof ($mul6=2) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)), null)) && (typeof $add15=='number'||typeof $add15=='string')?
							$add15+$add16:
							$p['op_add']($add15,$add16));
						found = true;
						self.score = (typeof ($add17=$p['getattr'](self, 'score'))==typeof ($add18=1) && (typeof $add17=='number'||typeof $add17=='string')?
							$add17+$add18:
							$p['op_add']($add17,$add18));
					}
				}
				self['puzzlestring']['setHTML']($p['getattr'](self, 'blanks'));
				if ((($bool11=!(($bool10=found) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10.__nonzero__=='function'?
							$bool10.__nonzero__() :
							(typeof $bool10.__len__=='function'?
								($bool10.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					self.guesses = (typeof ($add19=$p['getattr'](self, 'guesses'))==typeof ($add20=1) && (typeof $add19=='number'||typeof $add19=='string')?
						$add19+$add20:
						$p['op_add']($add19,$add20));
					self['hangdude']['draw']($p['getattr'](self, 'guesses'));
					if ((($bool12=((((($cmp5=$p['getattr'](self, 'guesses'))===($cmp6=11)?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						$m['Window']['alert']((typeof ($add21='You lose! Answer: ')==typeof ($add22=$p['getattr'](self, 'answer')) && (typeof $add21=='number'||typeof $add21=='string')?
							$add21+$add22:
							$p['op_add']($add21,$add22)));
					}
				}
				else {
					if ((($bool13=((((($cmp7=$p['getattr'](self, 'score'))===($cmp8=(($len7=$p['getattr'](self, 'answer')) === null?0:
						(typeof $len7.__array != 'undefined' ? $len7.__array.length:
							(typeof $len7.__len__ == 'function'?$len7.__len__():
								(typeof $len7.length != 'undefined'?$len7.length:
									$p['len']($len7))))))?0:
						(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
							($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
							$p['cmp']($cmp7, $cmp8))))|1) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
						$m['Window']['alert']('You win!');
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onRadioSelect', function(sender, keyCode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keyCode = arguments[2];
				modifiers = arguments[3];
			}
			if (typeof keyCode == 'undefined') keyCode=arguments.callee.__args__[4][1];
			if (typeof modifiers == 'undefined') modifiers=arguments.callee.__args__[5][1];
			var $eq21,$eq20,$bool14,$bool15,$bool16,$eq18,$eq19,$eq22,$bool17,$eq15,$eq16,$eq17;
			if ((($bool14=(($eq15=sender)===($eq16=$p['getattr'](self, 'radLevel5'))&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				self.level = 5;
			}
			else if ((($bool15=(($eq17=sender)===($eq18=$p['getattr'](self, 'radLevel10'))&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				self.level = 10;
			}
			else if ((($bool16=(($eq19=sender)===($eq20=$p['getattr'](self, 'radLevel15'))&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				self.level = 15;
			}
			else if ((($bool17=(($eq21=sender)===($eq22=$p['getattr'](self, 'radLevel20'))&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				self.level = 20;
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keyCode', null],['modifiers', null]]);
		$cls_definition['onRadioSelect'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HangManWidget', $p['tuple']($bases), $data);
	})();
	$m['HangDude'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'HangManWidget';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['HorizontalPanel']['__init__'](self);
			self.context = $m['GWTCanvas'](300, 300, 300, 300);
			self['context']['addStyleName']('gwt-canvas');
			self['add']($p['getattr'](self, 'context'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['context']['clear']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('draw', function(guesses) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				guesses = arguments[1];
			}
			var $bool18,$bool19,$mul9,$eq26,$mul18,$eq32,$eq33,$eq30,$eq31,$eq36,$eq37,$eq34,$eq35,$eq38,$eq39,$div3,$div10,$bool25,$bool24,$bool27,$bool26,$bool21,$bool20,$bool23,$bool22,$eq29,$bool28,$mul17,$eq23,$div9,$eq25,$eq24,$eq27,$mul8,$div2,$eq28,$div1,$div6,$div7,$div4,$div5,$mul7,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,$eq43,$eq42,$eq41,$eq40,$div8,$eq44;
			$p['getattr'](self, 'context').fillStyle = '#000';
			$p['getattr'](self, 'context').lineWidth = 2;
			if ((($bool18=(($eq23=guesses)===($eq24=1)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				self['context']['fillRect'](20, 280, 200, 10);
			}
			else if ((($bool19=(($eq25=guesses)===($eq26=2)&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				self['context']['fillRect'](40, 20, 10, 260);
			}
			else if ((($bool20=(($eq27=guesses)===($eq28=3)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				self['context']['fillRect'](20, 20, 160, 10);
			}
			else if ((($bool21=(($eq29=guesses)===($eq30=4)&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				self['context']['saveContext']();
				self['context']['translate'](80, 30);
				self['context']['rotate']((typeof ($div1=(typeof ($mul7=130)==typeof ($mul8=$p['getattr']($m['math'], 'pi')) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)))==typeof ($div2=180) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)));
				self['context']['fillRect'](0, 0, 50, 10);
				self['context']['restoreContext']();
			}
			else if ((($bool22=(($eq31=guesses)===($eq32=5)&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
							$eq31==$eq32)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22.__nonzero__=='function'?
							$bool22.__nonzero__() :
							(typeof $bool22.__len__=='function'?
								($bool22.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['context']['fillRect'](140, 20, 10, 50);
			}
			else if ((($bool23=(($eq33=guesses)===($eq34=6)&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				self['context']['beginPath']();
				self['context']['arc'](145, 100, 30, 0, (typeof ($mul9=$p['getattr']($m['math'], 'pi'))==typeof ($mul10=2) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)), true);
				self['context']['closePath']();
				self['context']['stroke']();
			}
			else if ((($bool24=(($eq35=guesses)===($eq36=7)&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				self['context']['fillRect'](145, 130, 2, 80);
			}
			else if ((($bool25=(($eq37=guesses)===($eq38=8)&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
							$eq37==$eq38)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				self['context']['saveContext']();
				self['context']['translate'](147, 160);
				self['context']['rotate']((typeof ($div3=(typeof ($mul11=130)==typeof ($mul12=$p['getattr']($m['math'], 'pi')) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))==typeof ($div4=180) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)));
				self['context']['fillRect'](0, 0, 50, 2);
				self['context']['restoreContext']();
			}
			else if ((($bool26=(($eq39=guesses)===($eq40=9)&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				self['context']['saveContext']();
				self['context']['translate'](147, 160);
				self['context']['rotate']((typeof ($div5=(typeof ($mul13=45)==typeof ($mul14=$p['getattr']($m['math'], 'pi')) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))==typeof ($div6=180) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)));
				self['context']['fillRect'](0, 0, 50, 2);
				self['context']['restoreContext']();
			}
			else if ((($bool27=(($eq41=guesses)===($eq42=10)&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41.__cmp__=='function'?$eq41.__cmp__($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42.__cmp__=='function'?$eq42.__cmp__($eq41) === 0:
							$eq41==$eq42)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				self['context']['saveContext']();
				self['context']['translate'](147, 210);
				self['context']['rotate']((typeof ($div7=(typeof ($mul15=130)==typeof ($mul16=$p['getattr']($m['math'], 'pi')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)))==typeof ($div8=180) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)));
				self['context']['fillRect'](0, 0, 60, 2);
				self['context']['restoreContext']();
			}
			else if ((($bool28=(($eq43=guesses)===($eq44=11)&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43.__cmp__=='function'?$eq43.__cmp__($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44.__cmp__=='function'?$eq44.__cmp__($eq43) === 0:
							$eq43==$eq44)))))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				self['context']['saveContext']();
				self['context']['translate'](147, 210);
				self['context']['rotate']((typeof ($div9=(typeof ($mul17=45)==typeof ($mul18=$p['getattr']($m['math'], 'pi')) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))==typeof ($div10=180) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10)));
				self['context']['fillRect'](0, 0, 60, 2);
				self['context']['restoreContext']();
			}
			self['context']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self'],['guesses']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($m['HorizontalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HangDude', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end HangManWidget */


/* end module: HangManWidget */


/*
PYJS_DEPS: ['pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.RadioButton.RadioButton', 'pyjamas.ui.RadioButton', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Window', 'math', 'random', 'string', 'Wordlist_20', 'Wordlist_15', 'Wordlist_10', 'Wordlist_5']
*/
