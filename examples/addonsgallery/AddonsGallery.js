/* start module: AddonsGallery */
$pyjs.loaded_modules['AddonsGallery'] = function (__mod_name__) {
	if($pyjs.loaded_modules['AddonsGallery'].__was_initialized__) return $pyjs.loaded_modules['AddonsGallery'];
	var $m = $pyjs.loaded_modules["AddonsGallery"];
	$m.__repr__ = function() { return "<module: AddonsGallery>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'AddonsGallery';
	$m.__name__ = __mod_name__;
	var $eq6,$bool6,$eq5;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['SinkList'] = $p['___import___']('pyjamas.ui.Sink.SinkList', null, null, false);
	$m['History'] = $p['___import___']('pyjamas.History', null, null, false);
	$m['IntroTab'] = $p['___import___']('IntroTab', null);
	$m['TooltipTab'] = $p['___import___']('TooltipTab', null);
	$m['AutoCompleteTab'] = $p['___import___']('AutoCompleteTab', null);
	$m['Canvas2DTab'] = $p['___import___']('Canvas2DTab', null);
	$m['CanvasTab'] = $p['___import___']('CanvasTab', null);
	$m['AddonsGallery'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'AddonsGallery';
		$method = $pyjs__bind_method2('onHistoryChanged', function(token) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				token = arguments[1];
			}
			var info,$bool1;
			info = self['sink_list']['find'](token);
			if ((($bool1=info) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['show'](info, false);
			}
			else {
				self['showIntro']();
			}
			return null;
		}
	, 1, [null,null,['self'],['token']]);
		$cls_definition['onHistoryChanged'] = $method;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var vp,$bool2,initToken,$len1;
			self.curInfo = '';
			self.curSink = null;
			self.description = $m['HTML']();
			self.sink_list = $m['SinkList']();
			self.panel = $m['DockPanel']();
			self['loadSinks']();
			self.sinkContainer = $m['DockPanel']();
			self['sinkContainer']['setStyleName']('ks-Sink');
			vp = $m['VerticalPanel']();
			vp['setWidth']('100%');
			vp['add']($p['getattr'](self, 'description'));
			vp['add']($p['getattr'](self, 'sinkContainer'));
			self['description']['setStyleName']('ks-Info');
			self['panel']['add']($p['getattr'](self, 'sink_list'), $p['getattr']($m['DockPanel'], 'WEST'));
			self['panel']['add'](vp, $p['getattr']($m['DockPanel'], 'CENTER'));
			self['panel']['setCellVerticalAlignment']($p['getattr'](self, 'sink_list'), $p['getattr']($m['HasAlignment'], 'ALIGN_TOP'));
			self['panel']['setCellWidth'](vp, '100%');
			$m['History']['addHistoryListener'](self);
			$m['RootPanel']()['add']($p['getattr'](self, 'panel'));
			initToken = $m['History']['getToken']();
			if ((($bool2=(($len1=initToken) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['onHistoryChanged'](initToken);
			}
			else {
				self['showIntro']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('show', function(info, affectHistory) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				info = arguments[1];
				affectHistory = arguments[2];
			}
			if (typeof affectHistory == 'undefined') affectHistory=arguments.callee.__args__[4][1];
			var $eq2,$eq3,$eq1,$eq4,$bool3,$bool4,$bool5;
			if ((($bool3=(($eq1=info)===($eq2=$p['getattr'](self, 'curInfo'))&&$eq1===null?true:
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
				return null;
			}
			self.curInfo = info;
			if ((($bool4=!(($eq3=$p['getattr'](self, 'curSink'))===($eq4=null)&&$eq3===null?true:
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
				self['curSink']['onHide']();
				self['sinkContainer']['remove']($p['getattr'](self, 'curSink'));
			}
			self.curSink = info['getInstance']();
			self['sink_list']['setSinkSelection'](info['getName']());
			self['description']['setHTML'](info['getDescription']());
			if ((($bool5=affectHistory) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				$m['History']['newItem'](info['getName']());
			}
			self['sinkContainer']['add']($p['getattr'](self, 'curSink'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self['sinkContainer']['setCellWidth']($p['getattr'](self, 'curSink'), '100%');
			self['sinkContainer']['setCellHeight']($p['getattr'](self, 'curSink'), '100%');
			self['sinkContainer']['setCellVerticalAlignment']($p['getattr'](self, 'curSink'), $p['getattr']($m['HasAlignment'], 'ALIGN_TOP'));
			self['curSink']['onShow']();
			return null;
		}
	, 1, [null,null,['self'],['info'],['affectHistory', null]]);
		$cls_definition['show'] = $method;
		$method = $pyjs__bind_method2('loadSinks', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['sink_list']['add']($m['IntroTab']['init']());
			self['sink_list']['add']($m['TooltipTab']['init']());
			self['sink_list']['add']($m['AutoCompleteTab']['init']());
			self['sink_list']['add']($m['Canvas2DTab']['init']());
			self['sink_list']['add']($m['CanvasTab']['init']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['loadSinks'] = $method;
		$method = $pyjs__bind_method2('showIntro', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['show'](self['sink_list']['find']('Intro'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showIntro'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AddonsGallery', $p['tuple']($bases), $data);
	})();
	if ((($bool6=(($eq5=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq6='__main__')&&$eq5===null?true:
		($eq5===null?false:($eq6===null?false:
			((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
				((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
					$eq5==$eq6)))))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
		$m['pyjd']['setup']('./public/AddonsGallery.html');
		$m['app'] = $m['AddonsGallery']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end AddonsGallery */


/* end module: AddonsGallery */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Window', 'pyjamas.ui.Sink.SinkList', 'pyjamas.ui.Sink', 'pyjamas.History', 'IntroTab', 'TooltipTab', 'AutoCompleteTab', 'Canvas2DTab', 'CanvasTab']
*/
