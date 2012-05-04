/* start module: Popups */
$pyjs.loaded_modules['Popups'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Popups'].__was_initialized__) return $pyjs.loaded_modules['Popups'];
	var $m = $pyjs.loaded_modules["Popups"];
	$m.__repr__ = function() { return "<module: Popups>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Popups';
	$m.__name__ = __mod_name__;


	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', null, null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['modal_popups'] = $p['dict']([]);
	$m['ModalPopupActive'] = function(title) {

		return $m['modal_popups']['has_key'](title);
	};
	$m['ModalPopupActive'].__name__ = 'ModalPopupActive';

	$m['ModalPopupActive'].__bind_type__ = 0;
	$m['ModalPopupActive'].__args__ = [null,null,['title']];
	$m['ModalPopupCloseAll'] = function() {
		var $cmp1,$cmp2,k,$bool1,$len1,$4,$2,$3,$1;
		while ((($bool1=((($cmp1=(($len1=$m['modal_popups']) === null?0:
			(typeof $len1.__array != 'undefined' ? $len1.__array.length:
				(typeof $len1.__len__ == 'function'?$len1.__len__():
					(typeof $len1.length != 'undefined'?$len1.length:
						$p['len']($len1))))))===($cmp2=0)?0:
			(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
				($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
				$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			k = (typeof ($1=$m['modal_popups']['keys']()).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0));
			(typeof ($3=$m['modal_popups']).__array != 'undefined'?
				((typeof $3.__array[$4=k]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(k))['hide']();
		}
		return null;
	};
	$m['ModalPopupCloseAll'].__name__ = 'ModalPopupCloseAll';

	$m['ModalPopupCloseAll'].__bind_type__ = 0;
	$m['ModalPopupCloseAll'].__args__ = [null,null];
	$m['DialogBoxModal'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Popups';
		$method = $pyjs__bind_method2('__init__', function(identifier, autoHide, modal, rootpanel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				identifier = arguments[1];
				autoHide = arguments[2];
				modal = arguments[3];
				rootpanel = arguments[4];
			}
			if (typeof autoHide == 'undefined') autoHide=arguments.callee.__args__[4][1];
			if (typeof modal == 'undefined') modal=arguments.callee.__args__[5][1];
			if (typeof rootpanel == 'undefined') rootpanel=arguments.callee.__args__[6][1];
			var dock;
			$m['PopupPanel']['__init__'](self, autoHide, modal, rootpanel);
			self.identifier = identifier;
			self.caption = $m['HTML']();
			self.child = null;
			self.showing = false;
			self.dragging = false;
			self.dragStartX = 0;
			self.dragStartY = 0;
			self.panel = $m['FlexTable']();
			self.closeButton = $m['Image']('images/cancel.png');
			self['closeButton']['addClickListener'](self);
			dock = $m['DockPanel']();
			dock['setSpacing'](0);
			dock['add']($p['getattr'](self, 'closeButton'), $p['getattr']($m['DockPanel'], 'EAST'));
			dock['add']($p['getattr'](self, 'caption'), $p['getattr']($m['DockPanel'], 'WEST'));
			dock['setCellHorizontalAlignment']($p['getattr'](self, 'closeButton'), $p['getattr']($m['HasAlignment'], 'ALIGN_RIGHT'));
			dock['setCellHorizontalAlignment']($p['getattr'](self, 'caption'), $p['getattr']($m['HasAlignment'], 'ALIGN_LEFT'));
			dock['setCellWidth']($p['getattr'](self, 'caption'), '100%');
			dock['setWidth']('100%');
			self['panel']['setWidget'](0, 0, dock);
			self['panel']['setHeight']('100%');
			self['panel']['setBorderWidth'](0);
			self['panel']['setCellPadding'](0);
			self['panel']['setCellSpacing'](0);
			self['panel']['getCellFormatter']()['setHeight'](1, 0, '100%');
			self['panel']['getCellFormatter']()['setWidth'](1, 0, '100%');
			$m['PopupPanel']['setWidget'](self, $p['getattr'](self, 'panel'));
			self['setStyleName']('gwt-DialogBox');
			self['caption']['setStyleName']('Caption');
			self['closeButton']['setStyleName']('Close');
			dock['setStyleName']('Header');
			self['caption']['addMouseListener'](self);
			return null;
		}
	, 1, [null,null,['self'],['identifier'],['autoHide', null],['modal', false],['rootpanel', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['caption']['getHTML']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['caption']['getText']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self.dragging = true;
			$m['DOM']['setCapture'](self['caption']['getElement']());
			self.dragStartX = x;
			self.dragStartY = y;
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $add2,$sub3,absX,absY,$bool2,$add3,$add1,$add4,$sub2,$sub1,$sub4;
			if ((($bool2=$p['getattr'](self, 'dragging')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				absX = (typeof ($add1=x)==typeof ($add2=self['getAbsoluteLeft']()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
				absY = (typeof ($add3=y)==typeof ($add4=self['getAbsoluteTop']()) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					$p['op_add']($add3,$add4));
				self['setPopupPosition']((typeof ($sub1=absX)==typeof ($sub2=$p['getattr'](self, 'dragStartX')) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					$p['op_sub']($sub1,$sub2)), (typeof ($sub3=absY)==typeof ($sub4=$p['getattr'](self, 'dragStartY')) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					$p['op_sub']($sub3,$sub4)));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self.dragging = false;
			$m['DOM']['releaseCapture'](self['caption']['getElement']());
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $eq2,$bool3,$eq1;
			if ((($bool3=!(($eq1=$p['getattr'](self, 'child'))===($eq2=widget)&&$eq1===null?true:
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
				return false;
			}
			self['panel']['remove'](widget);
			self.child = null;
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
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
		$method = $pyjs__bind_method2('doAttachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['PopupPanel']['doAttachChildren'](self);
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

			$m['PopupPanel']['doDetachChildren'](self);
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
			var $bool4,$bool5;
			if ((($bool4=($p['getattr'](self, 'child') !== null)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['panel']['remove']($p['getattr'](self, 'child'));
			}
			if ((($bool5=(widget !== null)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['panel']['setWidget'](1, 0, widget);
			}
			self.child = widget;
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setWidget'] = $method;
		$method = $pyjs__bind_method2('createElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['createDiv']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createElement'] = $method;
		$method = $pyjs__bind_method2('setPopupPosition', function(left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left = arguments[1];
				top = arguments[2];
			}
			var $cmp5,$cmp4,$cmp6,$cmp3,element,$bool6,$bool7;
			if ((($bool6=((($cmp3=left)===($cmp4=0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				left = 0;
			}
			if ((($bool7=((($cmp5=top)===($cmp6=0)?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				top = 0;
			}
			element = self['getElement']();
			$m['DOM']['setStyleAttribute'](element, 'left', $p['sprintf']('%dpx', left));
			$m['DOM']['setStyleAttribute'](element, 'top', $p['sprintf']('%dpx', top));
			return null;
		}
	, 1, [null,null,['self'],['left'],['top']]);
		$cls_definition['setPopupPosition'] = $method;
		$method = $pyjs__bind_method2('show', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $5,$bool10,$and1,$eq4,$eq3,$6,$bool8,$bool9,$and2;
			if ((($bool8=$p['getattr'](self, 'showing')) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				return null;
			}
			if ((($bool10=((($bool9=$and1=$m['modal_popups']['has_key']($p['getattr'](self, 'identifier'))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9.__nonzero__=='function'?
						$bool9.__nonzero__() :
						(typeof $bool9.__len__=='function'?
							($bool9.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($eq3=(typeof ($5=$m['modal_popups']).__array != 'undefined'?
				((typeof $5.__array[$6=$p['getattr'](self, 'identifier')]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__($p['getattr'](self, 'identifier'))))===($eq4=self)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4))))):$and1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				return null;
			}
			$m['modal_popups'].__setitem__($p['getattr'](self, 'identifier'), self);
			$m['PopupPanel']['show'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		$method = $pyjs__bind_method2('hide', function(autoClosed) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autoClosed = arguments[1];
			}
			if (typeof autoClosed == 'undefined') autoClosed=arguments.callee.__args__[3][1];
			var $bool13,$bool11,$bool12;
			if ((($bool12=!(($bool11=$p['getattr'](self, 'showing')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11.__nonzero__=='function'?
						$bool11.__nonzero__() :
						(typeof $bool11.__len__=='function'?
							($bool11.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				return null;
			}
			if ((($bool13=$m['modal_popups']['has_key']($p['getattr'](self, 'identifier'))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				$m['modal_popups'].__delitem__($p['getattr'](self, 'identifier'));
			}
			$m['PopupPanel']['hide'](self);
			return null;
		}
	, 1, [null,null,['self'],['autoClosed', false]]);
		$cls_definition['hide'] = $method;
		$method = $pyjs__bind_method2('onEventPreview', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool15,target,event_targets_popup,$bool14,$and3,$eq6,elem,$bool16,$eq5,$and4,type;
			type = $m['DOM']['eventGetType'](event);
			if ((($bool14=(($eq5=type)===($eq6='mousedown')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				target = $m['DOM']['eventGetTarget'](event);
				elem = self['caption']['getElement']();
				event_targets_popup = ((($bool15=$and3=target) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15.__nonzero__=='function'?
							$bool15.__nonzero__() :
							(typeof $bool15.__len__=='function'?
								($bool15.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$m['DOM']['isOrHasChild'](elem, target):$and3);
				if ((($bool16=event_targets_popup) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					$m['DOM']['eventPreventDefault'](event);
				}
			}
			return $m['PopupPanel']['onEventPreview'](self, event);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onEventPreview'] = $method;
		var $bases = new Array($m['PopupPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DialogBoxModal', $p['tuple']($bases), $data);
	})();
	$m['PopupFrame'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Popups';
		$method = $pyjs__bind_method2('__init__', function(identifier, title, iframe) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				identifier = arguments[1];
				title = arguments[2];
				iframe = arguments[3];
			}
			var $bool17;
			if ((($bool17=$m['modal_popups']['has_key'](identifier)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				return null;
			}
			$m['modal_popups'].__setitem__(identifier, self);
			$m['DialogBoxModal']['__init__'](self, identifier);
			self['setText'](title);
			self.iframe = iframe;
			self['iframe']['setStyleName']('gwt-DialogFrame');
			self.dock = $m['DockPanel']();
			self['dock']['setSpacing'](4);
			self['dock']['add']($p['getattr'](self, 'iframe'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self['dock']['setCellWidth']($p['getattr'](self, 'iframe'), '100%');
			self['dock']['setWidth']('100%');
			self['setWidget']($p['getattr'](self, 'dock'));
			return null;
		}
	, 1, [null,null,['self'],['identifier'],['title'],['iframe']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setUrl', function(url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			self['iframe']['setUrl'](url);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['setUrl'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['hide']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('set_width', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			self['iframe']['setWidth']($p['sprintf']('%dpx', width));
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['set_width'] = $method;
		$method = $pyjs__bind_method2('set_height', function(height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}

			self['iframe']['setHeight']($p['sprintf']('%dpx', height));
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['set_height'] = $method;
		var $bases = new Array($m['DialogBoxModal']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('PopupFrame', $p['tuple']($bases), $data);
	})();
	$m['Popup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Popups';
		$method = $pyjs__bind_method2('__init__', function(identifier, title, frame_page) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				identifier = arguments[1];
				title = arguments[2];
				frame_page = arguments[3];
			}
			if (typeof frame_page == 'undefined') frame_page=arguments.callee.__args__[5][1];

			$m['PopupFrame']['__init__'](self, identifier, title, $m['Frame'](frame_page));
			return null;
		}
	, 1, [null,null,['self'],['identifier'],['title'],['frame_page', '']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PopupFrame']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Popup', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Popups */


/* end module: Popups */


/*
PYJS_DEPS: ['pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.Panel.Panel', 'pyjamas.ui.Panel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.Window', 'pyjamas.DOM']
*/
