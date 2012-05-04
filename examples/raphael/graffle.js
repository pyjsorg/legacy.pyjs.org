/* start module: graffle */
$pyjs.loaded_modules['graffle'] = function (__mod_name__) {
	if($pyjs.loaded_modules['graffle'].__was_initialized__) return $pyjs.loaded_modules['graffle'];
	var $m = $pyjs.loaded_modules["graffle"];
	$m.__repr__ = function() { return "<module: graffle>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'graffle';
	$m.__name__ = __mod_name__;
	var $bool1,$eq2,$eq1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Raphael'] = $p['___import___']('pyjamas.raphael.raphael.Raphael', null, null, false);
	$m['DOCK_CONNECTION'] = $p['___import___']('pyjamas.raphael.raphael.DOCK_CONNECTION', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Graffle'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'graffle';
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

			$m['SimplePanel']['__init__'](self);
			self.canvas = $m['Raphael'](width, height);
			self['add']($p['getattr'](self, 'canvas'));
			return null;
		}
	, 1, [null,null,['self'],['width', 600],['height', 300]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.circle1 = self['canvas']['circle'](50, 50, 25);
			self['circle1']['setAttr']('fill', '#000');
			self['circle1']['setAttrs']($p['dict']([['cursor', 'move'], ['opacity', 0.6]]));
			self['circle1']['drag']($p['getattr'](self, '_move_circle'), (typeof start == "undefined"?$m.start:start), (typeof up == "undefined"?$m.up:up));
			self.circle2 = self['canvas']['circle'](150, 100, 25);
			self['circle2']['setAttr']('fill', '#000');
			self['circle2']['setAttrs']($p['dict']([['cursor', 'move'], ['opacity', 0.6]]));
			self['circle2']['drag']($p['getattr'](self, '_move_circle'), (typeof start == "undefined"?$m.start:start), (typeof up == "undefined"?$m.up:up));
			self.rect1 = self['canvas']['rect'](200, 100, 30, 30);
			self['rect1']['setAttr']('fill', '#000');
			self['rect1']['drag']($p['getattr'](self, '_move_rect'), (typeof start == "undefined"?$m.start:start), (typeof up == "undefined"?$m.up:up));
			self.rect2 = self['canvas']['rect'](200, 150, 30, 30);
			self['rect2']['setAttr']('fill', '#000');
			self['rect2']['drag']($p['getattr'](self, '_move_rect'), (typeof start == "undefined"?$m.start:start), (typeof up == "undefined"?$m.up:up));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('connect', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var bg,line;
			line = $p['dict']([['stroke', '#fff'], ['stroke-width', 3]]);
			bg = $p['dict']([['stroke', '#000'], ['stroke-width', 5]]);
			self.connection_rect = $pyjs_kwargs_call(self['canvas'], 'connection', null, null, [{line:line, bg:bg}, $p['getattr'](self, 'rect1'), $p['getattr'](self, 'rect2')]);
			line = $p['dict']([['stroke', '#fff'], ['stroke-width', 3]]);
			bg = $p['dict']([['stroke', '#000'], ['stroke-width', 5]]);
			self.connection_circle = $pyjs_kwargs_call(self['canvas'], 'connection', null, null, [{line:line, bg:bg, cp1:$p['getattr']($m['DOCK_CONNECTION'], 'EAST'), cp2:$p['getattr']($m['DOCK_CONNECTION'], 'WEST')}, $p['getattr'](self, 'circle1'), $p['getattr'](self, 'circle2')]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['connect'] = $method;
		$method = $pyjs__bind_method2('_move_rect', function(obj, dx, dy, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				dx = arguments[2];
				dy = arguments[3];
				x = arguments[4];
				y = arguments[5];
			}
			var $sub2,$sub3,$sub1,$sub4;
			obj['translate']((typeof ($sub1=dx)==typeof ($sub2=$p['getattr'](obj, 'dx')) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				$p['op_sub']($sub1,$sub2)), (typeof ($sub3=dy)==typeof ($sub4=$p['getattr'](obj, 'dy')) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				$p['op_sub']($sub3,$sub4)));
			obj.dx = dx;
			obj.dy = dy;
			self['connection_rect']['draw']();
			return null;
		}
	, 1, [null,null,['self'],['obj'],['dx'],['dy'],['x'],['y']]);
		$cls_definition['_move_rect'] = $method;
		$method = $pyjs__bind_method2('_move_circle', function(obj, dx, dy, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				dx = arguments[2];
				dy = arguments[3];
				x = arguments[4];
				y = arguments[5];
			}
			var $sub8,$sub7,$sub6,$sub5;
			obj['translate']((typeof ($sub5=dx)==typeof ($sub6=$p['getattr'](obj, 'dx')) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				$p['op_sub']($sub5,$sub6)), (typeof ($sub7=dy)==typeof ($sub8=$p['getattr'](obj, 'dy')) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				$p['op_sub']($sub7,$sub8)));
			obj.dx = dx;
			obj.dy = dy;
			self['connection_circle']['draw']();
			return null;
		}
	, 1, [null,null,['self'],['obj'],['dx'],['dy'],['x'],['y']]);
		$cls_definition['_move_circle'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Graffle', $p['tuple']($bases), $data);
	})();
	$m['start'] = function(obj, x, y) {

		obj.dx = 0;
		obj.dy = 0;
		return null;
	};
	$m['start'].__name__ = 'start';

	$m['start'].__bind_type__ = 0;
	$m['start'].__args__ = [null,null,['obj'],['x'],['y']];
	$m['up'] = function(obj) {

 		return null;
	};
	$m['up'].__name__ = 'up';

	$m['up'].__bind_type__ = 0;
	$m['up'].__args__ = [null,null,['obj']];
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
		$m['pyjd']['setup']('public/graffle.html');
		$m['graffle'] = $m['Graffle']();
		$m['RootPanel']()['add']($m['graffle']);
		$m['graffle']['draw']();
		$m['graffle']['connect']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end graffle */


/* end module: graffle */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HasAlignment', 'pyjamas.raphael.raphael.Raphael', 'pyjamas.raphael', 'pyjamas.raphael.raphael', 'pyjamas.raphael.raphael.DOCK_CONNECTION', 'pyjamas.DOM']
*/
