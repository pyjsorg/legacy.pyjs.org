/* start module: Showcase */
$pyjs.loaded_modules['Showcase'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Showcase'].__was_initialized__) return $pyjs.loaded_modules['Showcase'];
	var $m = $pyjs.loaded_modules["Showcase"];
	$m.__repr__ = function() { return "<module: Showcase>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Showcase';
	$m.__name__ = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['Tree'] = $p['___import___']('pyjamas.ui.Tree.Tree', null, null, false);
	$m['TreeItem'] = $p['___import___']('pyjamas.ui.TreeItem.TreeItem', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['demoInfo'] = $p['___import___']('demoInfo', null);
	$m['uiHelpers'] = $p['___import___']('uiHelpers', null);
	$m['Showcase'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Showcase';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var scroller,intro,$add2,$add1,hPanel,divider;
			self._root = $m['RootPanel']();
			self._tree = $m['Tree']();
			self._rightPanel = $m['SimplePanel']();
			self._curContents = null;
			intro = $m['HTML']($p['__op_add']($add1='<h3>Welcome to the Pyjamas User Interface Showcase</h3>',$add2='<p/>Please click on an item to start.'));
			self._introPanel = $m['VerticalPanel']();
			self['_introPanel']['add']($pyjs_kwargs_call($m['uiHelpers'], 'indent', null, null, [{left:20}, intro]));
			self._demos = $p['list']([]);
			self['loadDemos']();
			self['buildTree']();
			self['_tree']['setSize']('0%', '100%');
			divider = $m['VerticalPanel']();
			divider['setSize']('1px', '100%');
			divider['setBorderWidth'](1);
			scroller = $m['ScrollPanel']($p['getattr'](self, '_rightPanel'));
			scroller['setSize']('100%', '100%');
			hPanel = $m['HorizontalPanel']();
			hPanel['setSpacing'](4);
			hPanel['add']($p['getattr'](self, '_tree'));
			hPanel['add'](divider);
			hPanel['add'](scroller);
			hPanel['setHeight']('100%');
			self['_root']['add'](hPanel);
			self['_tree']['addTreeListener'](self);
			self['showDemo'](null);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('loadDemos', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self._demos = $m['demoInfo']['getDemos']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['loadDemos'] = $method;
		$method = $pyjs__bind_method2('buildTree', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var demo,$iter1_iter,$iter2_type,$iter2_iter,$add3,$iter1_array,sections,$iter1_idx,$iter1_nextval,$iter2_idx,$add10,$iter2_nextval,$iter1_type,item,$add6,$add7,$add4,$add5,$add8,$add9,section,$iter2_array;
			sections = $p['dict']([]);
			$iter1_iter = $p['getattr'](self, '_demos');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				demo = $iter1_nextval.$nextval;
				if ($p['bool'](!sections.__contains__(demo.__getitem__('section')))) {
					section = $m['TreeItem']($p['__op_add']($add5=$p['__op_add']($add3='<b>',$add4=demo.__getitem__('section')),$add6='</b>'));
					$m['DOM']['setStyleAttribute'](section['getElement'](), 'cursor', 'pointer');
					$m['DOM']['setAttribute']($p['getattr'](section, 'itemTable'), 'cellPadding', '0');
					$m['DOM']['setAttribute']($p['getattr'](section, 'itemTable'), 'cellSpacing', '1');
					self['_tree']['addItem'](section);
					sections.__setitem__(demo.__getitem__('section'), section);
				}
				section = sections.__getitem__(demo.__getitem__('section'));
				if ($p['bool']($p['op_eq']($p['__getslice'](demo.__getitem__('doc'), 0, 26), 'Documentation goes here...'))) {
					item = $m['TreeItem']($p['__op_add']($add9=$p['__op_add']($add7='<font style="color:#808080">',$add8=demo.__getitem__('title')),$add10='</font>'));
				}
				else {
					item = $m['TreeItem'](demo.__getitem__('title'));
				}
				$m['DOM']['setStyleAttribute'](item['getElement'](), 'cursor', 'pointer');
				$m['DOM']['setAttribute']($p['getattr'](item, 'itemTable'), 'cellPadding', '0');
				$m['DOM']['setAttribute']($p['getattr'](item, 'itemTable'), 'cellSpacing', '1');
				item['setUserObject'](demo);
				section['addItem'](item);
			}
			$iter2_iter = sections['keys']();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				section = $iter2_nextval.$nextval;
				$pyjs_kwargs_call(sections.__getitem__(section), 'setState', null, null, [{fireEvents:false}, true]);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['buildTree'] = $method;
		$method = $pyjs__bind_method2('onTreeItemSelected', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var demo;
			demo = item['getUserObject']();
			if ($p['bool']((demo === null))) {
				self['showDemo'](null);
			}
			else {
				self['showDemo'](demo.__getitem__('name'));
			}
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['onTreeItemSelected'] = $method;
		$method = $pyjs__bind_method2('onTreeItemStateChanged', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['onTreeItemStateChanged'] = $method;
		$method = $pyjs__bind_method2('showDemo', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var $add14,$iter3_idx,demo,$iter3_array,$add13,$add15,$add16,html,$iter3_iter,$add12,$iter3_type,exampleID,$add11,panel,$add18,$iter3_nextval,$add17,d;
			if ($p['bool'](($p['getattr'](self, '_curContents') !== null))) {
				self['_rightPanel']['remove']($p['getattr'](self, '_curContents'));
				self._curContents = null;
			}
			demo = null;
			$iter3_iter = $p['getattr'](self, '_demos');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				d = $iter3_nextval.$nextval;
				if ($p['bool']($p['op_eq'](d.__getitem__('name'), name))) {
					demo = d;
					break;
				}
			}
			if ($p['bool']((demo !== null))) {
				exampleID = $m['HTMLPanel']['createUniqueId']();
				html = $p['list']([]);
				html['append']('<div style="padding:20px">');
				html['append']($p['__op_add']($add13=$p['__op_add']($add11='<b>',$add12=demo.__getitem__('title')),$add14='</b>'));
				html['append']('<p/>');
				html['append'](self['docToHTML'](demo.__getitem__('doc')));
				html['append']('<p/>');
				html['append']('<hr/>');
				html['append']('<b>Working Example</b>');
				html['append']('<p/>');
				html['append']('<div style="padding-left:20px">');
				html['append']($p['__op_add']($add17=$p['__op_add']($add15='<span id="',$add16=exampleID),$add18='"></span>'));
				html['append']('</div>');
				html['append']('<p/>');
				html['append']('<hr/>');
				html['append']('<b>Source Code</b>');
				html['append']('<p/>');
				html['append'](self['srcToHTML'](demo.__getitem__('src')));
				html['append']('</div>');
				panel = $m['HTMLPanel']('\n'['join'](html));
				panel['add'](demo.__getitem__('example'), exampleID);
				self['_rightPanel']['add'](panel);
				self._curContents = panel;
			}
			else {
				self['_rightPanel']['add']($p['getattr'](self, '_introPanel'));
				self._curContents = $p['getattr'](self, '_introPanel');
			}
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['showDemo'] = $method;
		$method = $pyjs__bind_method2('docToHTML', function(doc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				doc = arguments[1];
			}
			var $add29,$add28,$add30,i,$add22,$add25,$add24,$add27,isBold,$add21,$add20,$add26,$add19,$add23;
			doc = doc['$$replace']('\n\n', '<p/>');
			isBold = false;
			while ($p['bool'](true)) {
				i = doc['find']('``');
				if ($p['bool']($p['op_eq'](i, (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))))) {
					break;
				}
				if ($p['bool'](isBold)) {
					doc = $p['__op_add']($add23=$p['__op_add']($add19=$p['__getslice'](doc, 0, i),$add20='</b></font>'),$add24=$p['__getslice'](doc, $p['__op_add']($add21=i,$add22=2), null));
				}
				else {
					doc = $p['__op_add']($add29=$p['__op_add']($add25=$p['__getslice'](doc, 0, i),$add26='<font face="monospace"><b>'),$add30=$p['__getslice'](doc, $p['__op_add']($add27=i,$add28=2), null));
				}
				isBold = !$p['bool'](isBold);
			}
			return doc;
		}
	, 1, [null,null,['self'],['doc']]);
		$cls_definition['docToHTML'] = $method;
		$method = $pyjs__bind_method2('srcToHTML', function(src) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				src = arguments[1];
			}
			var $add31,i,j,$add32;
			i = src['find']('<body');
			i = src['find']('>', i);
			j = src['find']('</body>');
			return $p['__getslice'](src, $p['__op_add']($add31=i,$add32=1), j);
		}
	, 1, [null,null,['self'],['src']]);
		$cls_definition['srcToHTML'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Showcase', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['pyjd']['setup']('./public/Showcase.html');
		$m['app'] = $m['Showcase']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end Showcase */


/* end module: Showcase */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.Tree.Tree', 'pyjamas.ui.Tree', 'pyjamas.ui.TreeItem.TreeItem', 'pyjamas.ui.TreeItem', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Window', 'pyjamas.DOM', 'demoInfo', 'uiHelpers']
*/
