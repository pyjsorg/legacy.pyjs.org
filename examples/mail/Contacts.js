/* start module: Contacts */
$pyjs.loaded_modules['Contacts'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Contacts'].__was_initialized__) return $pyjs.loaded_modules['Contacts'];
	var $m = $pyjs.loaded_modules["Contacts"];
	$m.__repr__ = function() { return "<module: Contacts>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Contacts';
	$m.__name__ = __mod_name__;


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Logger'] = $p['___import___']('Logger.Logger', null, null, false);
	$m['Contact'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Contacts';
		$method = $pyjs__bind_method2('__init__', function(name, email) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				email = arguments[2];
			}

			self.photo = 'http://code.google.com/webtoolkit/documentation/examples/desktopclone/default_photo.jpg';
			self.$$name = name;
			self.email = email;
			return null;
		}
	, 1, [null,null,['self'],['name'],['email']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Contact', $p['tuple']($bases), $data);
	})();
	$m['ContactPopup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Contacts';
		$method = $pyjs__bind_method2('__init__', function(contact) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				contact = arguments[1];
			}
			var nameLabel,inner,emailLabel,panel;
			$m['PopupPanel']['__init__'](self, true);
			inner = $m['VerticalPanel']();
			nameLabel = $m['Label']($p['getattr'](contact, '$$name'));
			emailLabel = $m['Label']($p['getattr'](contact, 'email'));
			inner['add'](nameLabel);
			inner['add'](emailLabel);
			panel = $m['HorizontalPanel']();
			panel['setSpacing'](4);
			panel['add']($m['Image']($p['getattr'](contact, 'photo')));
			panel['add'](inner);
			self['add'](panel);
			self['setStyleName']('mail-ContactPopup');
			nameLabel['setStyleName']('mail-ContactPopupName');
			emailLabel['setStyleName']('mail-ContactPopupEmail');
			return null;
		}
	, 1, [null,null,['self'],['contact']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['PopupPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ContactPopup', $p['tuple']($bases), $data);
	})();
	$m['Contacts'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Contacts';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp1,$cmp2,i,$add2,$bool1,$len1,$add1,$2,$1;
			$m['Composite']['__init__'](self);
			self.contacts = $p['list']([]);
			self['contacts']['append']($m['Contact']('Benoit Mandelbrot', 'benoit@example.com'));
			self['contacts']['append']($m['Contact']('Albert Einstein', 'albert@example.com'));
			self['contacts']['append']($m['Contact']('Rene Descartes', 'rene@example.com'));
			self['contacts']['append']($m['Contact']('Bob Saget', 'bob@example.com'));
			self['contacts']['append']($m['Contact']('Ludwig von Beethoven', 'ludwig@example.com'));
			self['contacts']['append']($m['Contact']('Richard Feynman', 'richard@example.com'));
			self['contacts']['append']($m['Contact']('Alan Turing', 'alan@example.com'));
			self['contacts']['append']($m['Contact']('John von Neumann', 'john@example.com'));
			self.panel = $m['VerticalPanel']();
			i = 0;
			while ((($bool1=((($cmp1=i)===($cmp2=(($len1=$p['getattr'](self, 'contacts')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1))))))?0:
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
				self['addContact']((typeof ($1=$p['getattr'](self, 'contacts')).__array != 'undefined'?
					((typeof $1.__array[$2=i]) != 'undefined'?$1.__array[$2]:
						$1.__getitem__($2)):
						$1.__getitem__(i)));
				i = (typeof ($add1=i)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					$p['op_add']($add1,$add2));
			}
			self['initWidget']($p['getattr'](self, 'panel'));
			self['setStyleName']('mail-Contacts');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addContact', function(contact) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				contact = arguments[1];
			}
			var listener,$add3,$add6,$add4,$add5,link;
			link = $m['HTML']((typeof ($add5=(typeof ($add3="<a href='javascript:;'>")==typeof ($add4=$p['getattr'](contact, '$$name')) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)))==typeof ($add6='</a>') && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)));
			self['panel']['add'](link);
			listener = (typeof ContactListener == "undefined"?$m.ContactListener:ContactListener)(contact, link);
			link['addClickListener'](listener);
			return null;
		}
	, 1, [null,null,['self'],['contact']]);
		$cls_definition['addContact'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Contacts', $p['tuple']($bases), $data);
	})();
	$m['ContactListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Contacts';
		$method = $pyjs__bind_method2('__init__', function(contact, link) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				contact = arguments[1];
				link = arguments[2];
			}

			self.cont = contact;
			self.link = link;
			return null;
		}
	, 1, [null,null,['self'],['contact'],['link']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var popup,$eq2,$eq1,$bool2,$add10,$add7,$add8,$add9,top,left;
			if ((($bool2=(($eq1=sender)===($eq2=$p['getattr'](self, 'link'))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				popup = $m['ContactPopup']($p['getattr'](self, 'cont'));
				left = (typeof ($add7=self['link']['getAbsoluteLeft']())==typeof ($add8=32) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					$p['op_add']($add7,$add8));
				top = (typeof ($add9=self['link']['getAbsoluteTop']())==typeof ($add10=8) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					$p['op_add']($add9,$add10));
				popup['setPopupPosition'](left, top);
				popup['show']();
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ContactListener', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Contacts */


/* end module: Contacts */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'Logger.Logger', 'Logger']
*/
