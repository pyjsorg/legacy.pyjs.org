/* start module: LogoDemo */
$pyjs.loaded_modules['LogoDemo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LogoDemo'].__was_initialized__) return $pyjs.loaded_modules['LogoDemo'];
	var $m = $pyjs.loaded_modules["LogoDemo"];
	$m.__repr__ = function() { return "<module: LogoDemo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LogoDemo';
	$m.__name__ = __mod_name__;


	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['loadImages'] = $p['___import___']('pyjamas.Canvas.ImageLoader.loadImages', null, null, false);
	$m['SimpleCanvasDemo'] = $p['___import___']('SimpleCanvasDemo.SimpleCanvasDemo', null, null, false);
	$m['LogoDemoControls'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'LogoDemo';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Composite']['__init__'](self, $m['VerticalPanel']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LogoDemoControls', $p['tuple']($bases), $data);
	})();
	$m['LogoDemo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'LogoDemo';
		$method = $pyjs__bind_method2('__init__', function(theCanvas) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				theCanvas = arguments[1];
			}

			$m['SimpleCanvasDemo']['__init__'](self, theCanvas);
			self.height = 400;
			self.width = 600;
			self.demoName = 'Pyjamas Logo';
			self.img = null;
			self.rotation = 0.1;
			self.run = false;
			return null;
		}
	, 1, [null,null,['self'],['theCanvas']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createControls', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.controls = $m['LogoDemoControls']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createControls'] = $method;
		$method = $pyjs__bind_method2('drawDemo', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2,$bool1,imageUrls;
			self['canvas']['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			imageUrls = $p['list'](['./pyjamas.128x128.png']);
			if ((($bool1=($p['getattr'](self, 'img') === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$m['loadImages'](imageUrls, self);
			}
			else {
				if ((($bool2=self['isImageLoaded']($p['getattr'](self, 'img'))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self.run = true;
					$m['Timer'](1, self);
				}
				else {
					$m['Window']['alert']('Refresh the page to reload the image.');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['drawDemo'] = $method;
		$method = $pyjs__bind_method2('onImagesLoaded', function(imageHandles) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imageHandles = arguments[1];
			}
			var $2,$1;
			self.img = (typeof ($1=imageHandles).__array != 'undefined'?
				((typeof $1.__array[$2=0]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(0));
			self.run = true;
			$m['Timer'](1, self);
			return null;
		}
	, 1, [null,null,['self'],['imageHandles']]);
		$cls_definition['onImagesLoaded'] = $method;
		$method = $pyjs__bind_method2('stopDemo', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.run = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stopDemo'] = $method;
		$method = $pyjs__bind_method2('isImageLoaded', function(imgElem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imgElem = arguments[1];
			}
			var $and1,$and2,$bool3;
			return ((($bool3=$and1=$p['hasattr'](imgElem, '__isLoaded')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['getattr'](imgElem, '__isLoaded'):$and1);
		}
	, 1, [null,null,['self'],['imgElem']]);
		$cls_definition['isImageLoaded'] = $method;
		$method = $pyjs__bind_method2('renderingLoop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add1;
			self['canvas']['saveContext']();
			self['canvas']['clear']();
			self['canvas']['drawImage']($p['getattr'](self, 'img'), 84, 74);
			self['canvas']['translate'](300, 200);
			self['canvas']['rotate']($p['getattr'](self, 'rotation'));
			self['canvas']['scale'](0.9, 0.9);
			self['canvas']['drawImage']($p['getattr'](self, 'img'), 0, 0);
			self.rotation = (typeof ($add1=$p['getattr'](self, 'rotation'))==typeof ($add2=0.1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['renderingLoop'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(timer) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer = arguments[1];
			}
			var $bool4,$bool5;
			if ((($bool5=!(($bool4=$p['getattr'](self, 'run')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4.__nonzero__=='function'?
						$bool4.__nonzero__() :
						(typeof $bool4.__len__=='function'?
							($bool4.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				return null;
			}
			self['renderingLoop']();
			timer['schedule'](10);
			return null;
		}
	, 1, [null,null,['self'],['timer']]);
		$cls_definition['onTimer'] = $method;
		var $bases = new Array($m['SimpleCanvasDemo']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LogoDemo', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end LogoDemo */


/* end module: LogoDemo */


/*
PYJS_DEPS: ['pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer', 'pyjamas.Window', 'pyjamas.DOM', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas', 'pyjamas.Canvas.ImageLoader', 'SimpleCanvasDemo.SimpleCanvasDemo', 'SimpleCanvasDemo']
*/
