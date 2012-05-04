/* start module: events */
$pyjs.loaded_modules['events'] = function (__mod_name__) {
	if($pyjs.loaded_modules['events'].__was_initialized__) return $pyjs.loaded_modules['events'];
	var $m = $pyjs.loaded_modules["events"];
	$m.__repr__ = function() { return "<module: events>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'events';
	$m.__name__ = __mod_name__;
	var $eq2,$eq1,$bool1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Raphael'] = $p['___import___']('pyjamas.raphael.raphael.Raphael', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Events'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'events';
		$method = $pyjs__bind_method2('__init__', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments.callee.__args__[3][1];
			if (typeof height == 'undefined') height=arguments.callee.__args__[4][1];

			$m['VerticalPanel']['__init__'](self);
			self.elements = $p['list']([]);
			self.desc = $p['list']([]);
			self.canvas = $m['Raphael'](width, height);
			self['canvas']['addListener']('mouseup', $p['getattr'](self, 'onCanvasMouseup'));
			self['canvas']['addListener']('mousemove', $p['getattr'](self, 'onCanvasMousemove'));
			self['canvas']['addListener']('dblclick', $p['getattr'](self, 'onCanvasDblClick'));
			self['canvas']['addListener']('contextmenu', $p['getattr'](self, 'onCanvasContextmenu'));
			self['canvas']['addListener']('mousedown', $p['getattr'](self, 'onCanvasMousedown'));
			self['add']($p['getattr'](self, 'canvas'));
			self.status = $m['Label']('Execute any events on the canvas!');
			self['add']($p['getattr'](self, 'status'));
			return null;
		}
	, 1, [null,null,['self'],['width', 600],['height', 300]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set_status', function(status) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				status = arguments[1];
			}

			self['status']['setText'](status);
			return null;
		}
	, 1, [null,null,['self'],['status']]);
		$cls_definition['set_status'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var circle2,circle1,set,text,connection,rect2,rect1,ellipse;
			circle1 = self['canvas']['circle'](50, 50, 25);
			circle1['setAttr']('fill', '#000');
			circle1['setAttrs']($p['dict']([['cursor', 'move'], ['opacity', 0.6]]));
			circle1['addListener']('mouseup', $p['getattr'](self, 'onElementMouseup'));
			circle1['addListener']('mousemove', $p['getattr'](self, 'onElementMousemove'));
			circle1['addListener']('dblclick', $p['getattr'](self, 'onElementDblClick'));
			circle1['addListener']('contextmenu', $p['getattr'](self, 'onElementContextmenu'));
			circle1['addListener']('mousedown', $p['getattr'](self, 'onElementMousedown'));
			self['elements']['append'](circle1);
			self['desc']['append']('Circle 1');
			circle2 = self['canvas']['circle'](100, 100, 25);
			circle2['setAttr']('fill', '#000');
			circle2['setAttrs']($p['dict']([['cursor', 'move'], ['opacity', 0.6]]));
			circle2['addListener']('mouseup', $p['getattr'](self, 'onElementMouseup'));
			circle2['addListener']('mousemove', $p['getattr'](self, 'onElementMousemove'));
			circle2['addListener']('dblclick', $p['getattr'](self, 'onElementDblClick'));
			circle2['addListener']('contextmenu', $p['getattr'](self, 'onElementContextmenu'));
			circle2['addListener']('mousedown', $p['getattr'](self, 'onElementMousedown'));
			self['elements']['append'](circle2);
			self['desc']['append']('Circle 2');
			rect1 = self['canvas']['rect'](200, 100, 30, 30);
			rect1['setAttr']('fill', '#000');
			rect1['addListener']('mouseup', $p['getattr'](self, 'onElementMouseup'));
			rect1['addListener']('mousemove', $p['getattr'](self, 'onElementMousemove'));
			rect1['addListener']('dblclick', $p['getattr'](self, 'onElementDblClick'));
			rect1['addListener']('contextmenu', $p['getattr'](self, 'onElementContextmenu'));
			rect1['addListener']('mousedown', $p['getattr'](self, 'onElementMousedown'));
			self['elements']['append'](rect1);
			self['desc']['append']('Rectangle 1');
			rect2 = self['canvas']['rect'](200, 150, 30, 30);
			rect2['setAttr']('fill', '#000');
			rect2['addListener']('mouseup', $p['getattr'](self, 'onElementMouseup'));
			rect2['addListener']('mousemove', $p['getattr'](self, 'onElementMousemove'));
			rect2['addListener']('dblclick', $p['getattr'](self, 'onElementDblClick'));
			rect2['addListener']('contextmenu', $p['getattr'](self, 'onElementContextmenu'));
			rect2['addListener']('mousedown', $p['getattr'](self, 'onElementMousedown'));
			self['elements']['append'](rect2);
			self['desc']['append']('Rectangle 2');
			connection = self['canvas']['connection'](rect1, rect2);
			connection['addListener']('mouseup', $p['getattr'](self, 'onElementMouseup'));
			connection['addListener']('mousemove', $p['getattr'](self, 'onElementMousemove'));
			connection['addListener']('dblclick', $p['getattr'](self, 'onElementDblClick'));
			connection['addListener']('contextmenu', $p['getattr'](self, 'onElementContextmenu'));
			connection['addListener']('mousedown', $p['getattr'](self, 'onElementMousedown'));
			self['elements']['append'](connection);
			self['desc']['append']('Connection');
			ellipse = self['canvas']['ellipse'](200, 200, 25, 40);
			text = self['canvas']['text'](200, 200, 'ABC');
			set = self['canvas']['set']();
			set['add'](ellipse);
			set['add'](text);
			set['addListener']('mousemove', $p['getattr'](self, 'onElementMousemove'));
			self['elements']['append'](set);
			self['desc']['append']('Set');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('onCanvasMousedown', function(sender, event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
			}
			var $add3,$add5,$add2,y,$add1,$add6,$add4,x,$sub3,$sub2,$sub1,$sub4;
			x = (typeof ($sub1=$m['DOM']['eventGetClientX'](event))==typeof ($sub2=$m['DOM']['getAbsoluteLeft'](self['canvas']['getElement']())) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2));
			y = (typeof ($sub3=$m['DOM']['eventGetClientY'](event))==typeof ($sub4=$m['DOM']['getAbsoluteTop'](self['canvas']['getElement']())) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4));
			self['set_status']((typeof ($add5=(typeof ($add3=(typeof ($add1='Mousedown on Canvas at ')==typeof ($add2=$p['str'](x)) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)))==typeof ($add4=', ') && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				$p['op_add']($add3,$add4)))==typeof ($add6=$p['str'](y)) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				$p['op_add']($add5,$add6)));
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event']]);
		$cls_definition['onCanvasMousedown'] = $method;
		$method = $pyjs__bind_method2('onCanvasMouseup', function(obj, event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				event = arguments[2];
			}
			var $sub6,$sub8,$add10,$add7,$add12,y,x,$add8,$add9,$sub7,$sub5,$add11;
			x = (typeof ($sub5=$m['DOM']['eventGetClientX'](event))==typeof ($sub6=$m['DOM']['getAbsoluteLeft'](self['canvas']['getElement']())) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6));
			y = (typeof ($sub7=$m['DOM']['eventGetClientY'](event))==typeof ($sub8=$m['DOM']['getAbsoluteTop'](self['canvas']['getElement']())) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8));
			self['set_status']((typeof ($add11=(typeof ($add9=(typeof ($add7='Mousemove on Canvas at ')==typeof ($add8=$p['str'](x)) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				$p['op_add']($add7,$add8)))==typeof ($add10=', ') && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				$p['op_add']($add9,$add10)))==typeof ($add12=$p['str'](y)) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				$p['op_add']($add11,$add12)));
			return null;
		}
	, 1, [null,null,['self'],['obj'],['event']]);
		$cls_definition['onCanvasMouseup'] = $method;
		$method = $pyjs__bind_method2('onCanvasMousemove', function(sender, event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
			}
			var $add15,$sub12,$sub10,$add16,$add14,y,$sub9,$add17,$add13,$sub11,x,$add18;
			x = (typeof ($sub9=$m['DOM']['eventGetClientX'](event))==typeof ($sub10=$m['DOM']['getAbsoluteLeft'](self['canvas']['getElement']())) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				$p['op_sub']($sub9,$sub10));
			y = (typeof ($sub11=$m['DOM']['eventGetClientY'](event))==typeof ($sub12=$m['DOM']['getAbsoluteTop'](self['canvas']['getElement']())) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				$p['op_sub']($sub11,$sub12));
			self['set_status']((typeof ($add17=(typeof ($add15=(typeof ($add13='Mousemove on Canvas at ')==typeof ($add14=$p['str'](x)) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				$p['op_add']($add13,$add14)))==typeof ($add16=', ') && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				$p['op_add']($add15,$add16)))==typeof ($add18=$p['str'](y)) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				$p['op_add']($add17,$add18)));
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event']]);
		$cls_definition['onCanvasMousemove'] = $method;
		$method = $pyjs__bind_method2('onCanvasDblClick', function(sender, event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
			}
			var $sub13,$add20,$add22,$sub16,$sub15,$sub14,$add24,$add21,$add19,y,x,$add23;
			x = (typeof ($sub13=$m['DOM']['eventGetClientX'](event))==typeof ($sub14=$m['DOM']['getAbsoluteLeft'](self['canvas']['getElement']())) && (typeof $sub13=='number'||typeof $sub13=='string')?
				$sub13-$sub14:
				$p['op_sub']($sub13,$sub14));
			y = (typeof ($sub15=$m['DOM']['eventGetClientY'](event))==typeof ($sub16=$m['DOM']['getAbsoluteTop'](self['canvas']['getElement']())) && (typeof $sub15=='number'||typeof $sub15=='string')?
				$sub15-$sub16:
				$p['op_sub']($sub15,$sub16));
			self['set_status']((typeof ($add23=(typeof ($add21=(typeof ($add19='Doubleclick on Canvas at ')==typeof ($add20=$p['str'](x)) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				$p['op_add']($add19,$add20)))==typeof ($add22=', ') && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				$p['op_add']($add21,$add22)))==typeof ($add24=$p['str'](y)) && (typeof $add23=='number'||typeof $add23=='string')?
				$add23+$add24:
				$p['op_add']($add23,$add24)));
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event']]);
		$cls_definition['onCanvasDblClick'] = $method;
		$method = $pyjs__bind_method2('onCanvasContextmenu', function(sender, event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
			}
			var $add29,$add28,$sub19,$sub18,$add30,$add25,$sub17,$sub20,$add27,$add26,y,x;
			x = (typeof ($sub17=$m['DOM']['eventGetClientX'](event))==typeof ($sub18=$m['DOM']['getAbsoluteLeft'](self['canvas']['getElement']())) && (typeof $sub17=='number'||typeof $sub17=='string')?
				$sub17-$sub18:
				$p['op_sub']($sub17,$sub18));
			y = (typeof ($sub19=$m['DOM']['eventGetClientY'](event))==typeof ($sub20=$m['DOM']['getAbsoluteTop'](self['canvas']['getElement']())) && (typeof $sub19=='number'||typeof $sub19=='string')?
				$sub19-$sub20:
				$p['op_sub']($sub19,$sub20));
			self['set_status']((typeof ($add29=(typeof ($add27=(typeof ($add25='Contextmenue on Canvas at ')==typeof ($add26=$p['str'](x)) && (typeof $add25=='number'||typeof $add25=='string')?
				$add25+$add26:
				$p['op_add']($add25,$add26)))==typeof ($add28=', ') && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				$p['op_add']($add27,$add28)))==typeof ($add30=$p['str'](y)) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				$p['op_add']($add29,$add30)));
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event']]);
		$cls_definition['onCanvasContextmenu'] = $method;
		$method = $pyjs__bind_method2('onElementMousedown', function(sender, event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
			}
			var $sub22,$sub23,$sub21,$sub24,$add40,$2,$1,$add38,$add39,$add32,$add33,$add31,$add36,$add37,$add34,$add35,s,y,x;
			x = (typeof ($sub21=$m['DOM']['eventGetClientX'](event))==typeof ($sub22=$m['DOM']['getAbsoluteLeft'](self['canvas']['getElement']())) && (typeof $sub21=='number'||typeof $sub21=='string')?
				$sub21-$sub22:
				$p['op_sub']($sub21,$sub22));
			y = (typeof ($sub23=$m['DOM']['eventGetClientY'](event))==typeof ($sub24=$m['DOM']['getAbsoluteTop'](self['canvas']['getElement']())) && (typeof $sub23=='number'||typeof $sub23=='string')?
				$sub23-$sub24:
				$p['op_sub']($sub23,$sub24));
			s = (typeof ($1=$p['getattr'](self, 'desc')).__array != 'undefined'?
				((typeof $1.__array[$2=self['elements']['index'](sender)]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(self['elements']['index'](sender)));
			self['set_status']((typeof ($add39=(typeof ($add37=(typeof ($add35=(typeof ($add33=(typeof ($add31='Mousedown on Element ')==typeof ($add32=s) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				$p['op_add']($add31,$add32)))==typeof ($add34=' at ') && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				$p['op_add']($add33,$add34)))==typeof ($add36=$p['str'](x)) && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				$p['op_add']($add35,$add36)))==typeof ($add38=', ') && (typeof $add37=='number'||typeof $add37=='string')?
				$add37+$add38:
				$p['op_add']($add37,$add38)))==typeof ($add40=$p['str'](y)) && (typeof $add39=='number'||typeof $add39=='string')?
				$add39+$add40:
				$p['op_add']($add39,$add40)));
			$m['DOM']['eventCancelBubble'](event, true);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event']]);
		$cls_definition['onElementMousedown'] = $method;
		$method = $pyjs__bind_method2('onElementMouseup', function(sender, event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
			}
			var $sub26,$sub27,$sub25,$sub28,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$4,$3,$add50,s,y,x,$add45;
			x = (typeof ($sub25=$m['DOM']['eventGetClientX'](event))==typeof ($sub26=$m['DOM']['getAbsoluteLeft'](self['canvas']['getElement']())) && (typeof $sub25=='number'||typeof $sub25=='string')?
				$sub25-$sub26:
				$p['op_sub']($sub25,$sub26));
			y = (typeof ($sub27=$m['DOM']['eventGetClientY'](event))==typeof ($sub28=$m['DOM']['getAbsoluteTop'](self['canvas']['getElement']())) && (typeof $sub27=='number'||typeof $sub27=='string')?
				$sub27-$sub28:
				$p['op_sub']($sub27,$sub28));
			s = (typeof ($3=$p['getattr'](self, 'desc')).__array != 'undefined'?
				((typeof $3.__array[$4=self['elements']['index'](sender)]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__(self['elements']['index'](sender)));
			self['set_status']((typeof ($add49=(typeof ($add47=(typeof ($add45=(typeof ($add43=(typeof ($add41='Mouseup on Element ')==typeof ($add42=s) && (typeof $add41=='number'||typeof $add41=='string')?
				$add41+$add42:
				$p['op_add']($add41,$add42)))==typeof ($add44=' at ') && (typeof $add43=='number'||typeof $add43=='string')?
				$add43+$add44:
				$p['op_add']($add43,$add44)))==typeof ($add46=$p['str'](x)) && (typeof $add45=='number'||typeof $add45=='string')?
				$add45+$add46:
				$p['op_add']($add45,$add46)))==typeof ($add48=', ') && (typeof $add47=='number'||typeof $add47=='string')?
				$add47+$add48:
				$p['op_add']($add47,$add48)))==typeof ($add50=$p['str'](y)) && (typeof $add49=='number'||typeof $add49=='string')?
				$add49+$add50:
				$p['op_add']($add49,$add50)));
			$m['DOM']['eventCancelBubble'](event, true);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event']]);
		$cls_definition['onElementMouseup'] = $method;
		$method = $pyjs__bind_method2('onElementMousemove', function(sender, event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
			}
			var $sub29,$add60,$sub31,$sub30,$sub32,$6,$5,$add55,$add51,$add52,$add53,$add54,$add56,$add57,$add58,$add59,s,y,x;
			x = (typeof ($sub29=$m['DOM']['eventGetClientX'](event))==typeof ($sub30=$m['DOM']['getAbsoluteLeft'](self['canvas']['getElement']())) && (typeof $sub29=='number'||typeof $sub29=='string')?
				$sub29-$sub30:
				$p['op_sub']($sub29,$sub30));
			y = (typeof ($sub31=$m['DOM']['eventGetClientY'](event))==typeof ($sub32=$m['DOM']['getAbsoluteTop'](self['canvas']['getElement']())) && (typeof $sub31=='number'||typeof $sub31=='string')?
				$sub31-$sub32:
				$p['op_sub']($sub31,$sub32));
			s = (typeof ($5=$p['getattr'](self, 'desc')).__array != 'undefined'?
				((typeof $5.__array[$6=self['elements']['index'](sender)]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__(self['elements']['index'](sender)));
			self['set_status']((typeof ($add59=(typeof ($add57=(typeof ($add55=(typeof ($add53=(typeof ($add51='Mousemove on Element ')==typeof ($add52=s) && (typeof $add51=='number'||typeof $add51=='string')?
				$add51+$add52:
				$p['op_add']($add51,$add52)))==typeof ($add54=' at ') && (typeof $add53=='number'||typeof $add53=='string')?
				$add53+$add54:
				$p['op_add']($add53,$add54)))==typeof ($add56=$p['str'](x)) && (typeof $add55=='number'||typeof $add55=='string')?
				$add55+$add56:
				$p['op_add']($add55,$add56)))==typeof ($add58=', ') && (typeof $add57=='number'||typeof $add57=='string')?
				$add57+$add58:
				$p['op_add']($add57,$add58)))==typeof ($add60=$p['str'](y)) && (typeof $add59=='number'||typeof $add59=='string')?
				$add59+$add60:
				$p['op_add']($add59,$add60)));
			$m['DOM']['eventCancelBubble'](event, true);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event']]);
		$cls_definition['onElementMousemove'] = $method;
		$method = $pyjs__bind_method2('onElementDblClick', function(sender, event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
			}
			var $add65,$add64,$add67,$add66,$add61,$add63,$add62,$add69,$add68,$sub33,$sub35,$sub34,$sub36,$8,$7,$add70,s,y,x;
			x = (typeof ($sub33=$m['DOM']['eventGetClientX'](event))==typeof ($sub34=$m['DOM']['getAbsoluteLeft'](self['canvas']['getElement']())) && (typeof $sub33=='number'||typeof $sub33=='string')?
				$sub33-$sub34:
				$p['op_sub']($sub33,$sub34));
			y = (typeof ($sub35=$m['DOM']['eventGetClientY'](event))==typeof ($sub36=$m['DOM']['getAbsoluteTop'](self['canvas']['getElement']())) && (typeof $sub35=='number'||typeof $sub35=='string')?
				$sub35-$sub36:
				$p['op_sub']($sub35,$sub36));
			s = (typeof ($7=$p['getattr'](self, 'desc')).__array != 'undefined'?
				((typeof $7.__array[$8=self['elements']['index'](sender)]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__(self['elements']['index'](sender)));
			self['set_status']((typeof ($add69=(typeof ($add67=(typeof ($add65=(typeof ($add63=(typeof ($add61='Doubleclick on Element ')==typeof ($add62=s) && (typeof $add61=='number'||typeof $add61=='string')?
				$add61+$add62:
				$p['op_add']($add61,$add62)))==typeof ($add64=' at ') && (typeof $add63=='number'||typeof $add63=='string')?
				$add63+$add64:
				$p['op_add']($add63,$add64)))==typeof ($add66=$p['str'](x)) && (typeof $add65=='number'||typeof $add65=='string')?
				$add65+$add66:
				$p['op_add']($add65,$add66)))==typeof ($add68=', ') && (typeof $add67=='number'||typeof $add67=='string')?
				$add67+$add68:
				$p['op_add']($add67,$add68)))==typeof ($add70=$p['str'](y)) && (typeof $add69=='number'||typeof $add69=='string')?
				$add69+$add70:
				$p['op_add']($add69,$add70)));
			$m['DOM']['eventCancelBubble'](event, true);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event']]);
		$cls_definition['onElementDblClick'] = $method;
		$method = $pyjs__bind_method2('onElementContextmenu', function(sender, event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
			}
			var $add80,$sub40,$sub37,$sub39,$sub38,$9,$add72,$add73,$add76,$add77,$add74,$add75,$10,$add71,$add78,$add79,s,y,x;
			x = (typeof ($sub37=$m['DOM']['eventGetClientX'](event))==typeof ($sub38=$m['DOM']['getAbsoluteLeft'](self['canvas']['getElement']())) && (typeof $sub37=='number'||typeof $sub37=='string')?
				$sub37-$sub38:
				$p['op_sub']($sub37,$sub38));
			y = (typeof ($sub39=$m['DOM']['eventGetClientY'](event))==typeof ($sub40=$m['DOM']['getAbsoluteTop'](self['canvas']['getElement']())) && (typeof $sub39=='number'||typeof $sub39=='string')?
				$sub39-$sub40:
				$p['op_sub']($sub39,$sub40));
			s = (typeof ($9=$p['getattr'](self, 'desc')).__array != 'undefined'?
				((typeof $9.__array[$10=self['elements']['index'](sender)]) != 'undefined'?$9.__array[$10]:
					$9.__getitem__($10)):
					$9.__getitem__(self['elements']['index'](sender)));
			self['set_status']((typeof ($add79=(typeof ($add77=(typeof ($add75=(typeof ($add73=(typeof ($add71='Contextmenue on Element ')==typeof ($add72=s) && (typeof $add71=='number'||typeof $add71=='string')?
				$add71+$add72:
				$p['op_add']($add71,$add72)))==typeof ($add74=' at ') && (typeof $add73=='number'||typeof $add73=='string')?
				$add73+$add74:
				$p['op_add']($add73,$add74)))==typeof ($add76=$p['str'](x)) && (typeof $add75=='number'||typeof $add75=='string')?
				$add75+$add76:
				$p['op_add']($add75,$add76)))==typeof ($add78=', ') && (typeof $add77=='number'||typeof $add77=='string')?
				$add77+$add78:
				$p['op_add']($add77,$add78)))==typeof ($add80=$p['str'](y)) && (typeof $add79=='number'||typeof $add79=='string')?
				$add79+$add80:
				$p['op_add']($add79,$add80)));
			$m['DOM']['eventCancelBubble'](event, true);
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event']]);
		$cls_definition['onElementContextmenu'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Events', $p['tuple']($bases), $data);
	})();
	if ((($bool1=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
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
		$m['pyjd']['setup']('public/events.html');
		$m['events'] = $m['Events']();
		$m['RootPanel']()['add']($m['events']);
		$m['events']['draw']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end events */


/* end module: events */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.raphael.raphael.Raphael', 'pyjamas', 'pyjamas.raphael', 'pyjamas.raphael.raphael', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HasAlignment', 'pyjamas.DOM']
*/
