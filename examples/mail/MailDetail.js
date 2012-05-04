/* start module: MailDetail */
$pyjs.loaded_modules['MailDetail'] = function (__mod_name__) {
	if($pyjs.loaded_modules['MailDetail'].__was_initialized__) return $pyjs.loaded_modules['MailDetail'];
	var $m = $pyjs.loaded_modules["MailDetail"];
	$m.__repr__ = function() { return "<module: MailDetail>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MailDetail';
	$m.__name__ = __mod_name__;


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Logger'] = $p['___import___']('Logger.Logger', null, null, false);
	$m['MailDetail'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'MailDetail';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var innerPanel,headerPanel,panel;
			$m['Composite']['__init__'](self);
			panel = $m['VerticalPanel']();
			headerPanel = $m['VerticalPanel']();
			self.subject = $m['HTML']();
			self.sender = $m['HTML']();
			self.recipient = $m['HTML']();
			self.body = $m['HTML']();
			self.scroller = $m['ScrollPanel']($p['getattr'](self, 'body'));
			self['body']['setWordWrap'](true);
			headerPanel['add']($p['getattr'](self, 'subject'));
			headerPanel['add']($p['getattr'](self, 'sender'));
			headerPanel['add']($p['getattr'](self, 'recipient'));
			headerPanel['setWidth']('100%');
			innerPanel = $m['DockPanel']();
			innerPanel['add'](headerPanel, $p['getattr']($m['DockPanel'], 'NORTH'));
			innerPanel['add']($p['getattr'](self, 'scroller'), $p['getattr']($m['DockPanel'], 'CENTER'));
			innerPanel['setCellHeight']($p['getattr'](self, 'scroller'), '100%');
			panel['add'](innerPanel);
			innerPanel['setSize']('100%', '100%');
			self['scroller']['setSize']('100%', '100%');
			self['initWidget'](panel);
			self['setStyleName']('mail-Detail');
			headerPanel['setStyleName']('mail-DetailHeader');
			innerPanel['setStyleName']('mail-DetailInner');
			self['subject']['setStyleName']('mail-DetailSubject');
			self['sender']['setStyleName']('mail-DetailSender');
			self['recipient']['setStyleName']('mail-DetailRecipient');
			self['body']['setStyleName']('mail-DetailBody');
			$m['Logger']('Mail detail', ' ');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setItem', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $add2,$add1;
			self['scroller']['setScrollPosition'](0);
			self['scroller']['setHorizontalScrollPosition'](0);
			self['subject']['setHTML']($p['getattr'](item, 'subject'));
			self['sender']['setHTML']((typeof ($add1='<b>From:</b>&nbsp;')==typeof ($add2=$p['getattr'](item, 'sender')) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			self['recipient']['setHTML']('<b>To:</b>&nbsp;foo@example.com');
			self['body']['setHTML']($p['getattr'](item, 'body'));
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['setItem'] = $method;
		$method = $pyjs__bind_method2('adjustSize', function(windowWidth, windowHeight) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				windowWidth = arguments[1];
				windowHeight = arguments[2];
			}
			var $cmp4,scrollWidth,$cmp1,$cmp3,$cmp2,$sub8,$bool2,$bool1,scrollHeight,$sub2,$sub3,$sub1,$sub7,$sub6,$sub5,$sub4;
			scrollWidth = (typeof ($sub3=(typeof ($sub1=windowWidth)==typeof ($sub2=self['scroller']['getAbsoluteLeft']()) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)))==typeof ($sub4=9) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			if ((($bool1=((($cmp1=scrollWidth)===($cmp2=1)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				scrollWidth = 1;
			}
			scrollHeight = (typeof ($sub7=(typeof ($sub5=windowHeight)==typeof ($sub6=self['scroller']['getAbsoluteTop']()) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6)))==typeof ($sub8=9) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8));
			if ((($bool2=((($cmp3=scrollHeight)===($cmp4=1)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				scrollHeight = 1;
			}
			self['scroller']['setSize']($p['sprintf']('%dpx', scrollWidth), $p['sprintf']('%dpx', scrollHeight));
			return null;
		}
	, 1, [null,null,['self'],['windowWidth'],['windowHeight']]);
		$cls_definition['adjustSize'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MailDetail', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end MailDetail */


/* end module: MailDetail */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'Logger.Logger', 'Logger']
*/
