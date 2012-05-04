/* start module: InfoDirectory */
$pyjs.loaded_modules['InfoDirectory'] = function (__mod_name__) {
	if($pyjs.loaded_modules['InfoDirectory'].__was_initialized__) return $pyjs.loaded_modules['InfoDirectory'];
	var $m = $pyjs.loaded_modules["InfoDirectory"];
	$m.__repr__ = function() { return "<module: InfoDirectory>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'InfoDirectory';
	$m.__name__ = __mod_name__;
	var $eq50,$bool40,$eq49;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', null, null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['Trees'] = $p['___import___']('Trees.Trees', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['CollapserPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'InfoDirectory';
		$method = $pyjs__bind_method2('__init__', function(sink) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sink = arguments[1];
			}
			var dock;
			$m['SimplePanel']['__init__'](self);
			self.sink = sink;
			self.caption = $m['HTML']();
			self.child = null;
			self.showing = false;
			self.dragging = false;
			self.dragStartX = 0;
			self.dragStartY = 0;
			self.panel = $m['FlexTable']();
			self.collapse = $m['Image']('./images/cancel.png');
			self['collapse']['addClickListener'](self);
			dock = $m['DockPanel']();
			dock['setSpacing'](0);
			dock['add']($p['getattr'](self, 'collapse'), $p['getattr']($m['DockPanel'], 'EAST'));
			dock['add']($p['getattr'](self, 'caption'), $p['getattr']($m['DockPanel'], 'WEST'));
			dock['setCellHorizontalAlignment']($p['getattr'](self, 'collapse'), $p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
			dock['setCellVerticalAlignment']($p['getattr'](self, 'collapse'), $p['getattr']($m['HasAlignment'], 'ALIGN_TOP'));
			dock['setCellHorizontalAlignment']($p['getattr'](self, 'caption'), $p['getattr']($m['HasAlignment'], 'ALIGN_LEFT'));
			dock['setCellWidth']($p['getattr'](self, 'caption'), '100%');
			dock['setWidth']('100%');
			dock['setHeight']('100%');
			self['panel']['setWidget'](0, 0, dock);
			self['panel']['setHeight']('100%');
			self['panel']['setWidth']('100%');
			self['panel']['setBorderWidth'](0);
			self['panel']['setCellPadding'](0);
			self['panel']['setCellSpacing'](0);
			self['panel']['getCellFormatter']()['setHeight'](1, 0, '100%');
			self['panel']['getCellFormatter']()['setWidth'](1, 0, '100%');
			self['panel']['getCellFormatter']()['setAlignment'](1, 0, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_LEFT'), $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_TOP'));
			$m['SimplePanel']['setWidget'](self, $p['getattr'](self, 'panel'));
			self['setStyleName']('gwt-DialogBox');
			self['caption']['setStyleName']('Caption');
			self['collapse']['setStyleName']('Close');
			dock['setStyleName']('Header');
			self.collapsed = false;
			self.collapsed_width = '15px';
			self.uncollapsed_width = '100%';
			return null;
		}
	, 1, [null,null,['self'],['sink']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setInitialWidth', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			self.uncollapsed_width = width;
			$m['SimplePanel']['setWidth'](self, width);
			self['sink']['setCollapserWidth'](self, width);
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setInitialWidth'] = $method;
		$method = $pyjs__bind_method2('setHeight', function(height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}

			$m['SimplePanel']['setHeight'](self, height);
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setHeight'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $eq2,$eq1,$bool2,$bool3,$bool1;
			if ((($bool1=(($eq1=$p['getattr'](self, 'collapsed'))===($eq2=false)&&$eq1===null?true:
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
				self['collapse']['setUrl']('./tree_closed.gif');
				self.collapsed = true;
				self['caption']['setVisible'](false);
				if ((($bool2=$p['getattr'](self, 'child')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['child']['setVisible'](false);
				}
				self['setWidth']($p['getattr'](self, 'collapsed_width'));
				self['sink']['setCollapserWidth'](self, $p['getattr'](self, 'collapsed_width'));
			}
			else {
				self['collapse']['setUrl']('./images/cancel.png');
				self.collapsed = false;
				self['caption']['setVisible'](true);
				if ((($bool3=$p['getattr'](self, 'child')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self['child']['setVisible'](true);
				}
				self['setWidth']($p['getattr'](self, 'uncollapsed_width'));
				self['sink']['setCollapserWidth'](self, $p['getattr'](self, 'uncollapsed_width'));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			self['caption']['setHTML'](html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['caption']['setText'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $eq3,$bool4,$eq4;
			if ((($bool4=!(($eq3=$p['getattr'](self, 'child'))===($eq4=widget)&&$eq3===null?true:
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
				return false;
			}
			self['panel']['remove'](widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('doAttachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['SimplePanel']['doAttachChildren'](self);
			self['caption']['onAttach']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$method = $pyjs__bind_method2('doDetachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['SimplePanel']['doDetachChildren'](self);
			self['caption']['onDetach']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doDetachChildren'] = $method;
		$method = $pyjs__bind_method2('setWidget', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $bool6,$bool5;
			if ((($bool5=($p['getattr'](self, 'child') !== null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['panel']['remove']($p['getattr'](self, 'child'));
			}
			if ((($bool6=(widget !== null)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self['panel']['setWidget'](1, 0, widget);
			}
			self.child = widget;
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setWidget'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CollapserPanel', $p['tuple']($bases), $data);
	})();
	$m['space_split'] = function(data) {
		var $add2,res,$add1,idx;
		res = $p['list']([]);
		idx = data['find'](' ');
		res['append']($p['__getslice'](data, 0, idx));
		res['append']($p['__getslice'](data, (typeof ($add1=idx)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2)), null));
		return res;
	};
	$m['space_split'].__name__ = 'space_split';

	$m['space_split'].__bind_type__ = 0;
	$m['space_split'].__args__ = [null,null,['data']];
	$m['RightGrid'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'InfoDirectory';
		$method = $pyjs__bind_method2('__init__', function(title) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
			}

			$m['DockPanel']['__init__'](self);
			self.grid = $m['FlexTable']();
			title = $m['HTML'](title);
			self['add'](title, $p['getattr']($m['DockPanel'], 'NORTH'));
			self['setCellHorizontalAlignment'](title, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_LEFT'));
			self['add']($p['getattr'](self, 'grid'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self['grid']['setBorderWidth']('0px');
			self['grid']['setCellSpacing']('0px');
			self['grid']['setCellPadding']('4px');
			self['formatCell'](0, 0);
			self['grid']['setHTML'](0, 0, '&nbsp;');
			return null;
		}
	, 1, [null,null,['self'],['title']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('clear_items', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.index = 0;
			self.items = $p['dict']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear_items'] = $method;
		$method = $pyjs__bind_method2('set_items', function(items) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				items = arguments[1];
			}

			self.items = items;
			self.index = 0;
			self.max_rows = 0;
			self.max_cols = 0;
			$m['Timer'](1, self);
			return null;
		}
	, 1, [null,null,['self'],['items']]);
		$cls_definition['set_items'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(timer) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer = arguments[1];
			}
			var count,$cmp4,$cmp6,$cmp1,$cmp5,$cmp3,$cmp2,$and1,$add5,$add3,$add6,$bool7,$add4,$len1,$len2,$bool8,$bool9,$and2;
			count = 0;
			while ((($bool8=((($bool7=$and1=((($cmp1=count)===($cmp2=10)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7.__nonzero__=='function'?
						$bool7.__nonzero__() :
						(typeof $bool7.__len__=='function'?
							($bool7.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp3=$p['getattr'](self, 'index'))===($cmp4=(($len1=$p['getattr'](self, 'items')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1):$and1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				self['_add_items']($p['getattr'](self, 'index'));
				self.index = (typeof ($add3=$p['getattr'](self, 'index'))==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				count = (typeof ($add5=count)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					$p['op_add']($add5,$add6));
			}
			if ((($bool9=((($cmp5=$p['getattr'](self, 'index'))===($cmp6=(($len2=$p['getattr'](self, 'items')) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))))?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				timer['schedule'](1);
			}
			return null;
		}
	, 1, [null,null,['self'],['timer']]);
		$cls_definition['onTimer'] = $method;
		$method = $pyjs__bind_method2('_add_items', function(i) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				i = arguments[1];
			}
			var $bool18,$bool19,$18,$add12,$bool10,$bool11,$bool12,$9,$bool14,cf,$bool16,$iter1_iter,$eq18,$eq19,$eq9,$bool17,colspan,attr,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,row,horiz,$cmp12,$19,$21,$2,$22,rowspan,$iter1_array,$11,format_col,$eq17,$iter1_idx,$eq8,$bool13,$iter1_nextval,vert,$eq6,$eq7,$eq5,$add14,$eq20,$17,$add10,$add11,$8,format_row,$6,$7,$4,$5,data,$3,$bool20,$1,$14,$15,$cmp7,$bool15,$10,$iter1_type,$12,$13,k,$cmp9,$cmp8,item,val,command,$add7,$add13,$20,$cmp11,$add8,$add9,$16,col,$cmp10;
			item = (typeof ($1=$p['getattr'](self, 'items')).__array != 'undefined'?
				((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(i));
			command = (typeof ($3=item).__array != 'undefined'?
				((typeof $3.__array[$4=0]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(0));
			col = (typeof ($5=item).__array != 'undefined'?
				((typeof $5.__array[$6=1]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(1));
			row = (typeof ($7=item).__array != 'undefined'?
				((typeof $7.__array[$8=2]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__(2));
			data = (typeof ($9=item).__array != 'undefined'?
				((typeof $9.__array[$10=3]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(3));
			format_row = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			format_col = (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2));
			if ((($bool10=((($cmp7=(typeof ($add7=col)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)))===($cmp8=$p['getattr'](self, 'max_cols'))?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				format_col = $p['getattr'](self, 'max_cols');
				self.max_cols = (typeof ($add9=col)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
			}
			if ((($bool11=((((($cmp9=(typeof ($add11=row)==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12)))===($cmp10=$p['getattr'](self, 'max_rows'))?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))))|1) == 1)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				format_row = $p['getattr'](self, 'max_rows');
				self.max_rows = (typeof ($add13=row)==typeof ($add14=1) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					$p['op_add']($add13,$add14));
			}
			if ((($bool12=((((($cmp11=format_row)===($cmp12=0)?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				$iter1_iter = $p['range'](format_row, $p['getattr'](self, 'max_rows'));
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					k = $iter1_nextval;
					self['formatCell'](k, 0);
				}
			}
			self['formatCell'](row, col);
			cf = self['grid']['getCellFormatter']();
			if ((($bool13=(($eq5=command)===($eq6='data')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				self['grid']['setHTML'](row, col, data);
			}
			else if ((($bool14=(($eq7=command)===($eq8='cellstyle')&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				data = $m['space_split'](data);
				attr = (typeof ($11=data).__array != 'undefined'?
					((typeof $11.__array[$12=0]) != 'undefined'?$11.__array[$12]:
						$11.__getitem__($12)):
						$11.__getitem__(0));
				val = (typeof ($13=data).__array != 'undefined'?
					((typeof $13.__array[$14=1]) != 'undefined'?$13.__array[$14]:
						$13.__getitem__($14)):
						$13.__getitem__(1));
				cf['setStyleAttr'](row, col, attr, val);
			}
			else if ((($bool15=(($eq9=command)===($eq10='align')&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9.__cmp__=='function'?$eq9.__cmp__($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10.__cmp__=='function'?$eq10.__cmp__($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				data = $m['space_split'](data);
				vert = (typeof ($15=data).__array != 'undefined'?
					((typeof $15.__array[$16=0]) != 'undefined'?$15.__array[$16]:
						$15.__getitem__($16)):
						$15.__getitem__(0));
				horiz = (typeof ($17=data).__array != 'undefined'?
					((typeof $17.__array[$18=1]) != 'undefined'?$17.__array[$18]:
						$17.__getitem__($18)):
						$17.__getitem__(1));
				if ((($bool16=!(($eq11=vert)===($eq12='-')&&$eq11===null?true:
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
					cf['setVerticalAlignment'](row, col, vert);
				}
				if ((($bool17=!(($eq13=horiz)===($eq14='-')&&$eq13===null?true:
					($eq13===null?false:($eq14===null?false:
						((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13.__cmp__=='function'?$eq13.__cmp__($eq14) === 0:
							((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14.__cmp__=='function'?$eq14.__cmp__($eq13) === 0:
								$eq13==$eq14)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					cf['setHorizontalAlignment'](row, col, horiz);
				}
			}
			else if ((($bool18=(($eq15=command)===($eq16='cellspan')&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15.__cmp__=='function'?$eq15.__cmp__($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16.__cmp__=='function'?$eq16.__cmp__($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				data = $m['space_split'](data);
				rowspan = (typeof ($19=data).__array != 'undefined'?
					((typeof $19.__array[$20=0]) != 'undefined'?$19.__array[$20]:
						$19.__getitem__($20)):
						$19.__getitem__(0));
				colspan = (typeof ($21=data).__array != 'undefined'?
					((typeof $21.__array[$22=1]) != 'undefined'?$21.__array[$22]:
						$21.__getitem__($22)):
						$21.__getitem__(1));
				if ((($bool19=!(($eq17=colspan)===($eq18='-')&&$eq17===null?true:
					($eq17===null?false:($eq18===null?false:
						((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17.__cmp__=='function'?$eq17.__cmp__($eq18) === 0:
							((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18.__cmp__=='function'?$eq18.__cmp__($eq17) === 0:
								$eq17==$eq18)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					cf['setColSpan'](row, col, colspan);
				}
				if ((($bool20=!(($eq19=rowspan)===($eq20='-')&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19.__cmp__=='function'?$eq19.__cmp__($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20.__cmp__=='function'?$eq20.__cmp__($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					cf['setRowSpan'](row, col, rowspan);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['i']]);
		$cls_definition['_add_items'] = $method;
		$method = $pyjs__bind_method2('formatCell', function(row, col) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
			}
			var $eq32,$eq33,$eq30,$eq31,$eq36,$eq34,$eq35,fmt,$bool25,$bool24,$bool27,$bool26,$bool21,$bool23,$bool22,$bool28,$and8,$and3,$and4,$and5,$and6,$and7,$eq21,$eq23,$eq22,$eq25,$eq24,$eq27,$eq26,$eq29,$eq28;
			self['grid']['prepareCell'](row, col);
			if ((($bool22=((($bool21=$and3=(($eq21=col)===($eq22=0)&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21.__cmp__=='function'?$eq21.__cmp__($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22.__cmp__=='function'?$eq22.__cmp__($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
				false :
				(typeof $bool21=='object'?
					(typeof $bool21.__nonzero__=='function'?
						$bool21.__nonzero__() :
						(typeof $bool21.__len__=='function'?
							($bool21.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($eq23=row)===($eq24=0)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23.__cmp__=='function'?$eq23.__cmp__($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24.__cmp__=='function'?$eq24.__cmp__($eq23) === 0:
							$eq23==$eq24))))):$and3)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				self['grid']['setHTML'](row, col, $p['sprintf']('%d', row));
			}
			if ((($bool24=((($bool23=$and5=!(($eq25=row)===($eq26=0)&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25.__cmp__=='function'?$eq25.__cmp__($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26.__cmp__=='function'?$eq26.__cmp__($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
				false :
				(typeof $bool23=='object'?
					(typeof $bool23.__nonzero__=='function'?
						$bool23.__nonzero__() :
						(typeof $bool23.__len__=='function'?
							($bool23.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($eq27=col)===($eq28=0)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27.__cmp__=='function'?$eq27.__cmp__($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28.__cmp__=='function'?$eq28.__cmp__($eq27) === 0:
							$eq27==$eq28))))):$and5)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				fmt = 'rightpanel-cellformat';
			}
			if ((($bool26=((($bool25=$and7=(($eq29=col)===($eq30=0)&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29.__cmp__=='function'?$eq29.__cmp__($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30.__cmp__=='function'?$eq30.__cmp__($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25.__nonzero__=='function'?
						$bool25.__nonzero__() :
						(typeof $bool25.__len__=='function'?
							($bool25.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq31=row)===($eq32=0)&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31.__cmp__=='function'?$eq31.__cmp__($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32.__cmp__=='function'?$eq32.__cmp__($eq31) === 0:
							$eq31==$eq32))))):$and7)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				fmt = 'rightpanel-cellcornerformat';
			}
			else if ((($bool27=(($eq33=row)===($eq34=0)&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33.__cmp__=='function'?$eq33.__cmp__($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34.__cmp__=='function'?$eq34.__cmp__($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				fmt = 'rightpanel-celltitleformat';
			}
			else if ((($bool28=(($eq35=col)===($eq36=0)&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35.__cmp__=='function'?$eq35.__cmp__($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36.__cmp__=='function'?$eq36.__cmp__($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				fmt = 'rightpanel-cellleftformat';
			}
			self['grid']['getCellFormatter']()['setStyleName'](row, col, fmt);
			return null;
		}
	, 1, [null,null,['self'],['row'],['col']]);
		$cls_definition['formatCell'] = $method;
		var $bases = new Array($m['DockPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RightGrid', $p['tuple']($bases), $data);
	})();
	$m['RightPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'InfoDirectory';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['DockPanel']['__init__'](self);
			self.grids = $p['dict']([]);
			self.g = $m['Grid']();
			self['g']['setCellSpacing']('0px');
			self['g']['setCellPadding']('8px');
			self.title = $m['HTML']('&nbsp;');
			self['title']['setStyleName']('rightpanel-title');
			self['add']($p['getattr'](self, 'title'), $p['getattr']($m['DockPanel'], 'NORTH'));
			self['setCellWidth']($p['getattr'](self, 'title'), '100%');
			self['setCellHorizontalAlignment']($p['getattr'](self, 'title'), $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_LEFT'));
			self['add']($p['getattr'](self, 'g'), $p['getattr']($m['DockPanel'], 'CENTER'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setTitle', function(title) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
			}

			self['title']['setHTML'](title);
			return null;
		}
	, 1, [null,null,['self'],['title']]);
		$cls_definition['setTitle'] = $method;
		$method = $pyjs__bind_method2('clear_items', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,g,$iter2_iter,i,$24,$iter2_idx,$len3,$bool29,$23,$iter2_array;
			$iter2_iter = $p['range']((($len3=$p['getattr'](self, 'grids')) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				g = (typeof ($23=$p['getattr'](self, 'grids')).__array != 'undefined'?
					((typeof $23.__array[$24=i]) != 'undefined'?$23.__array[$24]:
						$23.__getitem__($24)):
						$23.__getitem__(i));
				if ((($bool29=$p['hasattr'](g, 'clear_items')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
					g['clear_items']();
				}
			}
			self.grids = $p['dict']([]);
			self['g']['resize'](0, 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear_items'] = $method;
		$method = $pyjs__bind_method2('setup_panels', function(datasets) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				datasets = arguments[1];
			}
			var $len4,size;
			self.grids = $p['dict']([]);
			self.data = $p['dict']([]);
			self.names = $p['dict']([]);
			self.loaded = $p['dict']([]);
			size = (($len4=datasets) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4)))));
			self['g']['resize'](size, 1);
			return null;
		}
	, 1, [null,null,['self'],['datasets']]);
		$cls_definition['setup_panels'] = $method;
		$method = $pyjs__bind_method2('add_html', function(html, name, index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
				name = arguments[2];
				index = arguments[3];
			}
			var $25,$26;
			$p['getattr'](self, 'data').__setitem__(index, html);
			$p['getattr'](self, 'names').__setitem__(index, name);
			$p['getattr'](self, 'grids').__setitem__(index, $m['HTML'](html));
			self['g']['setWidget'](index, 0, (typeof ($25=$p['getattr'](self, 'grids')).__array != 'undefined'?
				((typeof $25.__array[$26=index]) != 'undefined'?$25.__array[$26]:
					$25.__getitem__($26)):
					$25.__getitem__(index)));
			return null;
		}
	, 1, [null,null,['self'],['html'],['name'],['index']]);
		$cls_definition['add_html'] = $method;
		$method = $pyjs__bind_method2('add_items', function(items, name, index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				items = arguments[1];
				name = arguments[2];
				index = arguments[3];
			}
			var $29,$28,$27,$30;
			$p['getattr'](self, 'data').__setitem__(index, items);
			$p['getattr'](self, 'names').__setitem__(index, name);
			$p['getattr'](self, 'grids').__setitem__(index, $m['RightGrid'](''));
			(typeof ($27=$p['getattr'](self, 'grids')).__array != 'undefined'?
				((typeof $27.__array[$28=index]) != 'undefined'?$27.__array[$28]:
					$27.__getitem__($28)):
					$27.__getitem__(index))['set_items'](items);
			self['g']['setWidget'](index, 0, (typeof ($29=$p['getattr'](self, 'grids')).__array != 'undefined'?
				((typeof $29.__array[$30=index]) != 'undefined'?$29.__array[$30]:
					$29.__getitem__($30)):
					$29.__getitem__(index)));
			return null;
		}
	, 1, [null,null,['self'],['items'],['name'],['index']]);
		$cls_definition['add_items'] = $method;
		var $bases = new Array($m['DockPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RightPanel', $p['tuple']($bases), $data);
	})();
	$m['MidPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'InfoDirectory';
		$method = $pyjs__bind_method2('__init__', function(sink) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sink = arguments[1];
			}

			$m['Grid']['__init__'](self);
			self['resize'](1, 1);
			self['addTableListener'](self);
			self.sink = sink;
			self.selected_row = (typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3));
			return null;
		}
	, 1, [null,null,['self'],['sink']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set_items', function(items) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				items = arguments[1];
			}
			var $iter3_type,$eq37,$eq38,$iter3_idx,location,$iter3_iter,$36,$iter3_array,name,i,$34,$35,$32,$33,$31,$len6,item,$bool30,$len5,$iter3_nextval;
			if ((($bool30=!(($eq37=$p['getattr'](self, 'selected_row'))===($eq38=(typeof ($usub4=1)=='number'?
				-$usub4:
				$p['op_usub']($usub4)))&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37.__cmp__=='function'?$eq37.__cmp__($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38.__cmp__=='function'?$eq38.__cmp__($eq37) === 0:
							$eq37==$eq38)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				self['styleRow']($p['getattr'](self, 'selected_row'), false);
			}
			self.item_names = $p['list']([]);
			self.item_locations = $p['list']([]);
			self['resizeRows']((($len5=items) === null?0:
				(typeof $len5.__array != 'undefined' ? $len5.__array.length:
					(typeof $len5.__len__ == 'function'?$len5.__len__():
						(typeof $len5.length != 'undefined'?$len5.length:
							$p['len']($len5))))));
			$iter3_iter = $p['range']((($len6=items) === null?0:
				(typeof $len6.__array != 'undefined' ? $len6.__array.length:
					(typeof $len6.__len__ == 'function'?$len6.__len__():
						(typeof $len6.length != 'undefined'?$len6.length:
							$p['len']($len6))))));
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				item = (typeof ($31=items).__array != 'undefined'?
					((typeof $31.__array[$32=i]) != 'undefined'?$31.__array[$32]:
						$31.__getitem__($32)):
						$31.__getitem__(i));
				name = (typeof ($33=item).__array != 'undefined'?
					((typeof $33.__array[$34=0]) != 'undefined'?$33.__array[$34]:
						$33.__getitem__($34)):
						$33.__getitem__(0));
				location = (typeof ($35=item).__array != 'undefined'?
					((typeof $35.__array[$36=1]) != 'undefined'?$35.__array[$36]:
						$35.__getitem__($36)):
						$35.__getitem__(1));
				self['setHTML'](i, 0, name);
				self['item_names']['append'](name);
				self['item_locations']['append'](location);
			}
			return null;
		}
	, 1, [null,null,['self'],['items']]);
		$cls_definition['set_items'] = $method;
		$method = $pyjs__bind_method2('onCellClicked', function(sender, row, col) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				row = arguments[2];
				col = arguments[3];
			}
			var $38,$39,$37,$40;
			self['styleRow']($p['getattr'](self, 'selected_row'), false);
			self.selected_row = row;
			self['styleRow']($p['getattr'](self, 'selected_row'), true);
			self['sink']['select_right_grid']((typeof ($37=$p['getattr'](self, 'item_locations')).__array != 'undefined'?
				((typeof $37.__array[$38=row]) != 'undefined'?$37.__array[$38]:
					$37.__getitem__($38)):
					$37.__getitem__(row)), (typeof ($39=$p['getattr'](self, 'item_names')).__array != 'undefined'?
				((typeof $39.__array[$40=row]) != 'undefined'?$39.__array[$40]:
					$39.__getitem__($40)):
					$39.__getitem__(row)));
			return null;
		}
	, 1, [null,null,['self'],['sender'],['row'],['col']]);
		$cls_definition['onCellClicked'] = $method;
		$method = $pyjs__bind_method2('styleRow', function(row, selected) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				selected = arguments[2];
			}
			var $eq40,$bool32,$bool31,$eq39;
			if ((($bool31=!(($eq39=row)===($eq40=(typeof ($usub5=1)=='number'?
				-$usub5:
				$p['op_usub']($usub5)))&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39.__cmp__=='function'?$eq39.__cmp__($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40.__cmp__=='function'?$eq40.__cmp__($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				if ((($bool32=selected) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32.__nonzero__=='function'?
								$bool32.__nonzero__() :
								(typeof $bool32.__len__=='function'?
									($bool32.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['getRowFormatter']()['addStyleName'](row, 'midpanel-SelectedRow');
				}
				else {
					self['getRowFormatter']()['removeStyleName'](row, 'midpanel-SelectedRow');
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['selected']]);
		$cls_definition['styleRow'] = $method;
		var $bases = new Array($m['Grid']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MidPanel', $p['tuple']($bases), $data);
	})();
	$m['InfoDirectory'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'InfoDirectory';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var width,height;
			self.remote = (typeof InfoServicePython == "undefined"?$m.InfoServicePython:InfoServicePython)();
			self.tree_width = 200;
			self.tp = $m['HorizontalPanel']();
			self['tp']['setWidth']($p['sprintf']('%dpx', $p['getattr'](self, 'tree_width')));
			self.treeview = $m['Trees']();
			self['treeview']['fTree']['addTreeListener'](self);
			self.sp = $m['ScrollPanel']();
			self['tp']['add']($p['getattr'](self, 'treeview'));
			self['sp']['add']($p['getattr'](self, 'tp'));
			self['sp']['setHeight']('100%');
			self.horzpanel1 = $m['HorizontalPanel']();
			self['horzpanel1']['setSize']('100%', '100%');
			self['horzpanel1']['setBorderWidth'](1);
			self['horzpanel1']['setSpacing']('10px');
			self.rp = $m['RightPanel']();
			self.rps = $m['ScrollPanel']();
			self['rps']['add']($p['getattr'](self, 'rp'));
			self['rps']['setWidth']('100%');
			self['rp']['setWidth']('100%');
			self.cp1 = $m['CollapserPanel'](self);
			self['cp1']['setWidget']($p['getattr'](self, 'sp'));
			self['cp1']['setHTML']('&nbsp;');
			self.midpanel = $m['MidPanel'](self);
			self.cp2 = $m['CollapserPanel'](self);
			self['cp2']['setWidget']($p['getattr'](self, 'midpanel'));
			self['cp2']['setHTML']('&nbsp;');
			self['horzpanel1']['add']($p['getattr'](self, 'cp1'));
			self['horzpanel1']['add']($p['getattr'](self, 'cp2'));
			self['horzpanel1']['add']($p['getattr'](self, 'rps'));
			self['cp1']['setInitialWidth']($p['sprintf']('%dpx', $p['getattr'](self, 'tree_width')));
			self['cp2']['setInitialWidth']('200px');
			$m['RootPanel']()['add']($p['getattr'](self, 'horzpanel1'));
			width = $m['Window']['getClientWidth']();
			height = $m['Window']['getClientHeight']();
			self['onWindowResized'](width, height);
			$m['Window']['addWindowResizeListener'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('setCollapserWidth', function(widget, width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				width = arguments[2];
			}

			self['horzpanel1']['setCellWidth'](widget, width);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['width']]);
		$cls_definition['setCollapserWidth'] = $method;
		$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4;
			self['cp1']['setHeight']($p['sprintf']('%dpx', (typeof ($sub1=height)==typeof ($sub2=30) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2))));
			self['cp2']['setHeight']($p['sprintf']('%dpx', (typeof ($sub3=height)==typeof ($sub4=30) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4))));
			self['rps']['setHeight']($p['sprintf']('%dpx', (typeof ($sub5=height)==typeof ($sub6=30) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6))));
			self['horzpanel1']['setHeight']($p['sprintf']('%dpx', (typeof ($sub7=height)==typeof ($sub8=20) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8))));
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['onWindowResized'] = $method;
		$method = $pyjs__bind_method2('onTreeItemStateChanged', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $bool33;
			if ((($bool33=item['isSelected']()) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
				self['onTreeItemSelected'](item);
			}
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['onTreeItemStateChanged'] = $method;
		$method = $pyjs__bind_method2('onTreeItemSelected', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $add15,obj,$len7,$eq42,$add16,$add17,$bool34,$add18,$eq41;
			obj = item['getUserObject']();
			if ((($bool34=!(($eq41=(($len7=$p['getattr'](obj, 'children')) === null?0:
				(typeof $len7.__array != 'undefined' ? $len7.__array.length:
					(typeof $len7.__len__ == 'function'?$len7.__len__():
						(typeof $len7.length != 'undefined'?$len7.length:
							$p['len']($len7))))))===($eq42=0)&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41.__cmp__=='function'?$eq41.__cmp__($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42.__cmp__=='function'?$eq42.__cmp__($eq41) === 0:
							$eq41==$eq42)))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34.__nonzero__=='function'?
							$bool34.__nonzero__() :
							(typeof $bool34.__len__=='function'?
								($bool34.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['clear_mid_panel']();
				return null;
			}
			self['remote']['get_midpanel_data']((typeof ($add17=(typeof ($add15=$p['getattr'](obj, 'root'))==typeof ($add16='/') && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16)))==typeof ($add18=$p['getattr'](obj, 'text')) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18)), self);
			self['cp2']['setHTML']($p['getattr'](obj, 'text'));
			self['clear_right_panel']();
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['onTreeItemSelected'] = $method;
		$method = $pyjs__bind_method2('clear_right_panel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['horzpanel1']['remove'](2);
			self['horzpanel1']['insert']($m['HTML'](''), 2);
			self['rp']['setTitle']('&nbsp;');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear_right_panel'] = $method;
		$method = $pyjs__bind_method2('clear_mid_panel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['clear_right_panel']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear_mid_panel'] = $method;
		$method = $pyjs__bind_method2('set_mid_panel', function(response) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}

			self['midpanel']['set_items'](response);
			self['cp2']['setWidget']($p['getattr'](self, 'midpanel'));
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['set_mid_panel'] = $method;
		$method = $pyjs__bind_method2('select_right_grid', function(location, name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				location = arguments[1];
				name = arguments[2];
			}

			self['horzpanel1']['remove'](2);
			self['horzpanel1']['insert']($p['getattr'](self, 'rps'), 2);
			self['rp']['setTitle'](name);
			self['remote']['get_rightpanel_datanames'](location, self);
			return null;
		}
	, 1, [null,null,['self'],['location'],['name']]);
		$cls_definition['select_right_grid'] = $method;
		$method = $pyjs__bind_method2('get_rightpanel_datasets', function(datasets) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				datasets = arguments[1];
			}
			var fname,i,$iter4_nextval,$iter4_idx,item,$iter4_type,$43,$iter4_array,$42,$41,$iter4_iter,$len8,$44;
			self['rp']['clear_items']();
			self['rp']['setup_panels'](datasets);
			$iter4_iter = $p['range']((($len8=datasets) === null?0:
				(typeof $len8.__array != 'undefined' ? $len8.__array.length:
					(typeof $len8.__len__ == 'function'?$len8.__len__():
						(typeof $len8.length != 'undefined'?$len8.length:
							$p['len']($len8))))));
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				item = (typeof ($41=datasets).__array != 'undefined'?
					((typeof $41.__array[$42=i]) != 'undefined'?$41.__array[$42]:
						$41.__getitem__($42)):
						$41.__getitem__(i));
				fname = (typeof ($43=item).__array != 'undefined'?
					((typeof $43.__array[$44=0]) != 'undefined'?$43.__array[$44]:
						$43.__getitem__($44)):
						$43.__getitem__(0));
				self['remote']['get_rightpanel_data'](fname, fname, i, self);
			}
			return null;
		}
	, 1, [null,null,['self'],['datasets']]);
		$cls_definition['get_rightpanel_datasets'] = $method;
		$method = $pyjs__bind_method2('fill_right_grid', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var index,name,$bool36,$bool35;
			index = data['get']('index');
			name = data['get']('name');
			if ((($bool35=data['has_key']('items')) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
				self['rp']['add_items'](data['get']('items'), name, index);
			}
			else if ((($bool36=data['has_key']('html')) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
					false :
					(typeof $bool36=='object'?
						(typeof $bool36.__nonzero__=='function'?
							$bool36.__nonzero__() :
							(typeof $bool36.__len__=='function'?
								($bool36.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['rp']['add_html'](data['get']('html'), name, index);
			}
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['fill_right_grid'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}
			var $eq48,$eq43,$eq47,$eq46,$eq45,$eq44,method,$bool37,$bool38,$bool39;
			method = $p['getattr'](request_info, 'method');
			if ((($bool37=(($eq43=method)===($eq44='get_midpanel_data')&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43.__cmp__=='function'?$eq43.__cmp__($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44.__cmp__=='function'?$eq44.__cmp__($eq43) === 0:
							$eq43==$eq44)))))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
				self['set_mid_panel'](response);
			}
			else if ((($bool38=(($eq45=method)===($eq46='get_rightpanel_datanames')&&$eq45===null?true:
				($eq45===null?false:($eq46===null?false:
					((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45.__cmp__=='function'?$eq45.__cmp__($eq46) === 0:
						((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46.__cmp__=='function'?$eq46.__cmp__($eq45) === 0:
							$eq45==$eq46)))))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
				self['get_rightpanel_datasets'](response);
			}
			else if ((($bool39=(($eq47=method)===($eq48='get_rightpanel_data')&&$eq47===null?true:
				($eq47===null?false:($eq48===null?false:
					((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47.__cmp__=='function'?$eq47.__cmp__($eq48) === 0:
						((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48.__cmp__=='function'?$eq48.__cmp__($eq47) === 0:
							$eq47==$eq48)))))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
				self['fill_right_grid'](response);
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
			var $add20,$add19;
			$m['RootPanel']()['add']($m['HTML']((typeof ($add19='Server Error or Invalid Response: ERROR ')==typeof ($add20=code) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20))));
			$m['RootPanel']()['add']($m['HTML'](message));
			return null;
		}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('InfoDirectory', $p['tuple']($bases), $data);
	})();
	$m['InfoServicePython'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'InfoDirectory';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['JSONProxy']['__init__'](self, 'services/EchoService.py', $p['list'](['get_midpanel_data', 'get_rightpanel_datanames', 'get_rightpanel_data']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('InfoServicePython', $p['tuple']($bases), $data);
	})();
	if ((($bool40=(($eq49=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq50='__main__')&&$eq49===null?true:
		($eq49===null?false:($eq50===null?false:
			((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49.__cmp__=='function'?$eq49.__cmp__($eq50) === 0:
				((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50.__cmp__=='function'?$eq50.__cmp__($eq49) === 0:
					$eq49==$eq50)))))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
			false :
			(typeof $bool40=='object'?
				(typeof $bool40.__nonzero__=='function'?
					$bool40.__nonzero__() :
					(typeof $bool40.__len__=='function'?
						($bool40.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['pyjd']['setup']('http://127.0.0.1/examples/infohierarchy/public/InfoDirectory.html');
		$m['app'] = $m['InfoDirectory']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end InfoDirectory */


/* end module: InfoDirectory */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui.HasAlignment', 'pyjamas.Window', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'Trees.Trees', 'Trees', 'pyjamas.Timer.Timer', 'pyjamas.Timer']
*/
