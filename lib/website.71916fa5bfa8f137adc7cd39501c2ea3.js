/* start module: website */
$pyjs.loaded_modules['website'] = function (__mod_name__) {
	if($pyjs.loaded_modules['website'].__was_initialized__) return $pyjs.loaded_modules['website'];
	var $m = $pyjs.loaded_modules["website"];
	$m.__repr__ = function() { return "<module: website>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'website';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'website.py, line 1:\n    import pyjd # dummy in pyjs';
		$m.__track_lines__[3] = 'website.py, line 3:\n    from pyjamas import logging';
		$m.__track_lines__[4] = 'website.py, line 4:\n    from pyjamas import DeferredCommand';
		$m.__track_lines__[5] = 'website.py, line 5:\n    from pyjamas import History';
		$m.__track_lines__[6] = 'website.py, line 6:\n    from pyjamas import Window';
		$m.__track_lines__[7] = 'website.py, line 7:\n    from pyjamas.HTTPRequest import HTTPRequest';
		$m.__track_lines__[8] = 'website.py, line 8:\n    from pyjamas.ui import Event';
		$m.__track_lines__[9] = 'website.py, line 9:\n    from pyjamas.ui import HasAlignment';
		$m.__track_lines__[10] = 'website.py, line 10:\n    from pyjamas.ui import MouseListener';
		$m.__track_lines__[11] = 'website.py, line 11:\n    from pyjamas.ui.Composite import Composite';
		$m.__track_lines__[12] = 'website.py, line 12:\n    from pyjamas.ui.DecoratorPanel import DecoratedTabPanel, DecoratorPanel';
		$m.__track_lines__[13] = 'website.py, line 13:\n    from pyjamas.ui.DecoratorPanel import DecoratorTitledPanel';
		$m.__track_lines__[14] = 'website.py, line 14:\n    from pyjamas.ui.DockPanel import DockPanel';
		$m.__track_lines__[15] = 'website.py, line 15:\n    from pyjamas.ui.HorizontalPanel import HorizontalPanel';
		$m.__track_lines__[16] = 'website.py, line 16:\n    from pyjamas.ui.HTML import HTML';
		$m.__track_lines__[17] = 'website.py, line 17:\n    from pyjamas.ui.HTMLLinkPanel import HTMLLinkPanel';
		$m.__track_lines__[18] = 'website.py, line 18:\n    from pyjamas.ui.Image import Image';
		$m.__track_lines__[19] = 'website.py, line 19:\n    from pyjamas.ui.RootPanel import RootPanel';
		$m.__track_lines__[20] = 'website.py, line 20:\n    from pyjamas.ui.TabBar import TabBar';
		$m.__track_lines__[21] = 'website.py, line 21:\n    from pyjamas.ui.TabPanel import TabPanel';
		$m.__track_lines__[22] = 'website.py, line 22:\n    from pyjamas.ui.VerticalPanel import VerticalPanel';
		$m.__track_lines__[23] = 'website.py, line 23:\n    from PageLoader import PageListLoader, PageLoader';
		$m.__track_lines__[26] = 'website.py, line 26:\n    log = logging.getConsoleLogger()';
		$m.__track_lines__[29] = 'website.py, line 29:\n    class PrettyTab(Composite):';
		$m.__track_lines__[31] = 'website.py, line 31:\n    def __init__(self, text, imageUrl):';
		$m.__track_lines__[33] = 'website.py, line 33:\n    DecoratorPanel.__init__(self, DecoratorPanel.DECORATE_ALL)';
		$m.__track_lines__[34] = 'website.py, line 34:\n    p = HorizontalPanel()';
		$m.__track_lines__[35] = 'website.py, line 35:\n    p.setSpacing(3)';
		$m.__track_lines__[36] = 'website.py, line 36:\n    self.img = Image(imageUrl)';
		$m.__track_lines__[37] = 'website.py, line 37:\n    self.txt = HTML(text)';
		$m.__track_lines__[38] = 'website.py, line 38:\n    p.add(self.img)';
		$m.__track_lines__[39] = 'website.py, line 39:\n    p.add(self.txt)';
		$m.__track_lines__[41] = 'website.py, line 41:\n    self.add(p)';
		$m.__track_lines__[43] = 'website.py, line 43:\n    def addClickListener(self, listener):';
		$m.__track_lines__[45] = 'website.py, line 45:\n    self.img.addClickListener(listener)';
		$m.__track_lines__[46] = 'website.py, line 46:\n    self.txt.addClickListener(listener)';
		$m.__track_lines__[49] = 'website.py, line 49:\n    class Tabs:';
		$m.__track_lines__[51] = 'website.py, line 51:\n    def onModuleLoad(self):';
		$m.__track_lines__[53] = 'website.py, line 53:\n    dock = DockPanel(Width="100%")';
		$m.__track_lines__[54] = 'website.py, line 54:\n    self.header = HTML(Width="100%", Height="220px")';
		$m.__track_lines__[55] = 'website.py, line 55:\n    self.footer = HTML(Width="100%")';
		$m.__track_lines__[56] = 'website.py, line 56:\n    self.sidebar = HTML(Width="200px", Height="100%", StyleName="sidebar")';
		$m.__track_lines__[57] = 'website.py, line 57:\n    self.fTabs = DecoratedTabPanel(Size=("100%", "100%"), StyleName="tabs")';
		$m.__track_lines__[63] = 'website.py, line 63:\n    dock.add(self.header, DockPanel.NORTH)';
		$m.__track_lines__[64] = 'website.py, line 64:\n    dock.add(self.footer, DockPanel.SOUTH)';
		$m.__track_lines__[65] = 'website.py, line 65:\n    dock.add(self.sidebar, DockPanel.EAST)';
		$m.__track_lines__[66] = 'website.py, line 66:\n    dock.add(self.fTabs, DockPanel.CENTER)';
		$m.__track_lines__[67] = 'website.py, line 67:\n    dock.setCellVerticalAlignment(self.fTabs, HasAlignment.ALIGN_TOP)';
		$m.__track_lines__[69] = 'website.py, line 69:\n    dock.setCellWidth(self.header, "100%")';
		$m.__track_lines__[70] = 'website.py, line 70:\n    dock.setCellHeight(self.header, "220px")';
		$m.__track_lines__[71] = 'website.py, line 71:\n    dock.setCellWidth(self.footer, "100%")';
		$m.__track_lines__[72] = 'website.py, line 72:\n    dock.setCellWidth(self.sidebar, "200px")';
		$m.__track_lines__[74] = 'website.py, line 74:\n    RootPanel().add(dock)';
		$m.__track_lines__[75] = 'website.py, line 75:\n    self.dock = dock';
		$m.__track_lines__[77] = 'website.py, line 77:\n    self.loadPageList()';
		$m.__track_lines__[79] = 'website.py, line 79:\n    Window.addWindowResizeListener(self)';
		$m.__track_lines__[81] = 'website.py, line 81:\n    DeferredCommand.add(self)';
		$m.__track_lines__[84] = 'website.py, line 84:\n    def execute(self):';
		$m.__track_lines__[85] = 'website.py, line 85:\n    self.onWindowResized(Window.getClientWidth(), Window.getClientHeight())';
		$m.__track_lines__[87] = 'website.py, line 87:\n    def onWindowResized(self, width, height):';
		$m.__track_lines__[89] = 'website.py, line 89:\n    tabwidth = "%dpx" % (width - 350)';
		$m.__track_lines__[90] = 'website.py, line 90:\n    log.info(\'New tab control width = %s <a href="foo.bar">foo.bar</a>\', tabwidth)';
		$m.__track_lines__[96] = 'website.py, line 96:\n    self.fTabs.setWidth(tabwidth)';
		$m.__track_lines__[97] = 'website.py, line 97:\n    self.dock.setCellWidth(self.fTabs, tabwidth)';
		$m.__track_lines__[99] = 'website.py, line 99:\n    def createPage(self, title, purpose, text):';
		$m.__track_lines__[101] = "website.py, line 101:\n    if purpose == 'faq':";
		$m.__track_lines__[102] = 'website.py, line 102:\n    self.faq_pages[title] = text';
		$m.__track_lines__[103] = 'website.py, line 103:\n    log.debug("%d %d", len(self.faq_pages), len(self.faq_list))';
		$m.__track_lines__[106] = 'website.py, line 106:\n    if len(self.faq_pages) != len(self.faq_list):';
		$m.__track_lines__[107] = 'website.py, line 107:\n    return';
		$m.__track_lines__[108] = "website.py, line 108:\n    faq = self.page_widgets['FAQ']";
		$m.__track_lines__[109] = 'website.py, line 109:\n    for l in self.faq_list:';
		$m.__track_lines__[110] = 'website.py, line 110:\n    question = l[0]';
		$m.__track_lines__[111] = 'website.py, line 111:\n    answer = self.faq_pages[question]';
		$m.__track_lines__[112] = 'website.py, line 112:\n    html = faq.getHTML()';
		$m.__track_lines__[113] = 'website.py, line 113:\n    html += "<h3>%s</h3>\\n" % question';
		$m.__track_lines__[114] = 'website.py, line 114:\n    html += "\\n%s\\n\\n" % answer';
		$m.__track_lines__[115] = 'website.py, line 115:\n    faq.setHTML(html)';
		$m.__track_lines__[116] = 'website.py, line 116:\n    html = "<div class=\'faq\'>\\n%s</div>\\n" % html';
		$m.__track_lines__[117] = 'website.py, line 117:\n    faq.setHTML(html)';
		$m.__track_lines__[118] = 'website.py, line 118:\n    faq.replaceLinks(use_page_href=False)';
		$m.__track_lines__[119] = 'website.py, line 119:\n    return';
		$m.__track_lines__[121] = "website.py, line 121:\n    if title == 'header':";
		$m.__track_lines__[122] = 'website.py, line 122:\n    self.header.setHTML(text)';
		$m.__track_lines__[123] = 'website.py, line 123:\n    return';
		$m.__track_lines__[125] = 'website.py, line 125:\n    self.footer.setHTML(text)';
		$m.__track_lines__[126] = 'website.py, line 126:\n    return';
		$m.__track_lines__[128] = 'website.py, line 128:\n    self.sidebar.setHTML(text)';
		$m.__track_lines__[129] = 'website.py, line 129:\n    return';
		$m.__track_lines__[133] = 'website.py, line 133:\n    self.pages[title] = text';
		$m.__track_lines__[134] = 'website.py, line 134:\n    if len(self.pages) != len(self.page_list):';
		$m.__track_lines__[135] = 'website.py, line 135:\n    return';
		$m.__track_lines__[136] = 'website.py, line 136:\n    self.page_widgets = {}';
		$m.__track_lines__[137] = 'website.py, line 137:\n    self.tab_index = {}';
		$m.__track_lines__[138] = 'website.py, line 138:\n    for (idx, l) in enumerate(self.page_list):';
		$m.__track_lines__[139] = 'website.py, line 139:\n    title = l[0]';
		$m.__track_lines__[140] = 'website.py, line 140:\n    text = self.pages[title]';
		$m.__track_lines__[141] = 'website.py, line 141:\n    self.tab_index[title] = idx';
		$m.__track_lines__[142] = 'website.py, line 142:\n    widget = HTMLLinkPanel(text)';
		$m.__track_lines__[143] = 'website.py, line 143:\n    self.fTabs.add(widget, title, True)';
		$m.__track_lines__[144] = 'website.py, line 144:\n    self.page_widgets[title] = widget';
		$m.__track_lines__[145] = "website.py, line 145:\n    if title == 'FAQ':";
		$m.__track_lines__[146] = 'website.py, line 146:\n    HTTPRequest().asyncGet("faq/questions.txt",';
		$m.__track_lines__[149] = 'website.py, line 149:\n    widget.replaceLinks(use_page_href=False)';
		$m.__track_lines__[150] = 'website.py, line 150:\n    self.fTabs.selectTab(0)';
		$m.__track_lines__[152] = 'website.py, line 152:\n    History.addHistoryListener(self)';
		$m.__track_lines__[153] = 'website.py, line 153:\n    initToken = History.getToken()';
		$m.__track_lines__[154] = 'website.py, line 154:\n    log.debug("initial token: \'%s\'", initToken)';
		$m.__track_lines__[155] = 'website.py, line 155:\n    self.onHistoryChanged(initToken)';
		$m.__track_lines__[156] = 'website.py, line 156:\n    self.fTabs.addTabListener(self)';
		$m.__track_lines__[158] = 'website.py, line 158:\n    def onBeforeTabSelected(self, sender, tabIndex):';
		$m.__track_lines__[159] = 'website.py, line 159:\n    return True';
		$m.__track_lines__[161] = 'website.py, line 161:\n    def onTabSelected(self, sender, tabIndex):';
		$m.__track_lines__[162] = 'website.py, line 162:\n    current_token = History.getToken()';
		$m.__track_lines__[163] = 'website.py, line 163:\n    new_token = self.page_list[tabIndex][0]';
		$m.__track_lines__[164] = 'website.py, line 164:\n    if current_token != new_token:';
		$m.__track_lines__[165] = 'website.py, line 165:\n    History.newItem(new_token)';
		$m.__track_lines__[167] = 'website.py, line 167:\n    def onHistoryChanged(self, token):';
		$m.__track_lines__[168] = 'website.py, line 168:\n    if self.pages.has_key(token):';
		$m.__track_lines__[169] = 'website.py, line 169:\n    idx = self.tab_index[token]';
		$m.__track_lines__[170] = 'website.py, line 170:\n    self.fTabs.selectTab(idx)';
		$m.__track_lines__[172] = 'website.py, line 172:\n    def onError(self, text, code):';
		$m.__track_lines__[173] = 'website.py, line 173:\n    log.error("LOAD ERROR(%s): %s", str(code), text)';
		$m.__track_lines__[174] = 'website.py, line 174:\n    pass';
		$m.__track_lines__[176] = 'website.py, line 176:\n    def loadPageList(self):';
		$m.__track_lines__[177] = 'website.py, line 177:\n    HTTPRequest().asyncGet("sidebar.html",';
		$m.__track_lines__[179] = 'website.py, line 179:\n    HTTPRequest().asyncGet("header.html",';
		$m.__track_lines__[181] = 'website.py, line 181:\n    HTTPRequest().asyncGet("footer.html",';
		$m.__track_lines__[183] = 'website.py, line 183:\n    HTTPRequest().asyncGet("contents.txt",';
		$m.__track_lines__[186] = 'website.py, line 186:\n    def loadPages(self, pages, purpose):';
		$m.__track_lines__[187] = "website.py, line 187:\n    if purpose == 'contents':";
		$m.__track_lines__[188] = 'website.py, line 188:\n    self.pages = {}';
		$m.__track_lines__[189] = 'website.py, line 189:\n    self.page_list = pages';
		$m.__track_lines__[191] = 'website.py, line 191:\n    self.faq_pages = {}';
		$m.__track_lines__[192] = 'website.py, line 192:\n    self.faq_list = pages';
		$m.__track_lines__[194] = 'website.py, line 194:\n    for l in pages:';
		$m.__track_lines__[195] = 'website.py, line 195:\n    title = l[0]';
		$m.__track_lines__[196] = 'website.py, line 196:\n    desc = l[1]';
		$m.__track_lines__[197] = 'website.py, line 197:\n    HTTPRequest().asyncGet(desc, PageLoader(self, title, purpose))';
		$m.__track_lines__[200] = "website.py, line 200:\n    if __name__ == '__main__':";
		$m.__track_lines__[201] = 'website.py, line 201:\n    pyjd.setup("http://127.0.0.1/pyjamas/doc/pyjs_site/public/index.html")';
		$m.__track_lines__[202] = 'website.py, line 202:\n    app = Tabs()';
		$m.__track_lines__[203] = 'website.py, line 203:\n    app.onModuleLoad()';
		$m.__track_lines__[204] = 'website.py, line 204:\n    pyjd.run()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_350 = new $p['int'](350);
		$pyjs.track.module='website';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['pyjd'] = $p['___import___']('pyjd', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['logging'] = $p['___import___']('pyjamas.logging', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DeferredCommand'] = $p['___import___']('pyjamas.DeferredCommand', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['History'] = $p['___import___']('pyjamas.History', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=7;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=9;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=10;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['MouseListener'] = $p['___import___']('pyjamas.ui.MouseListener', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=11;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=12;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DecoratedTabPanel'] = $p['___import___']('pyjamas.ui.DecoratorPanel.DecoratedTabPanel', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DecoratorPanel'] = $p['___import___']('pyjamas.ui.DecoratorPanel.DecoratorPanel', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=13;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DecoratorTitledPanel'] = $p['___import___']('pyjamas.ui.DecoratorPanel.DecoratorTitledPanel', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=14;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=15;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=16;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=17;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['HTMLLinkPanel'] = $p['___import___']('pyjamas.ui.HTMLLinkPanel.HTMLLinkPanel', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=18;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=19;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=20;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['TabBar'] = $p['___import___']('pyjamas.ui.TabBar.TabBar', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=21;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['TabPanel'] = $p['___import___']('pyjamas.ui.TabPanel.TabPanel', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=22;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=23;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['PageListLoader'] = $p['___import___']('PageLoader.PageListLoader', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['PageLoader'] = $p['___import___']('PageLoader.PageLoader', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=26;
		$m['log'] = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['logging']['getConsoleLogger']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$pyjs.track.lineno=29;
		$m['PrettyTab'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'website';
			$cls_definition.__md5__ = '311ff86b6980912e57ccca1a4313b619';
			$pyjs.track.lineno=31;
			$method = $pyjs__bind_method2('__init__', function(text, imageUrl) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					imageUrl = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '311ff86b6980912e57ccca1a4313b619') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var p;
				$pyjs.track={module:'website', lineno:31};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=31;
				$pyjs.track.lineno=33;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DecoratorPanel']['__init__'](self, $p['getattr']($m['DecoratorPanel'], 'DECORATE_ALL'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
				$pyjs.track.lineno=34;
				p = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['HorizontalPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
				$pyjs.track.lineno=35;
				(function(){try{try{$pyjs.in_try_except += 1;
				return p['setSpacing']($constant_int_3);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
				$pyjs.track.lineno=36;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('img', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['Image'](imageUrl);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) : $p['setattr'](self, 'img', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['Image'](imageUrl);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()); 
				$pyjs.track.lineno=37;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('txt', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['HTML'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) : $p['setattr'](self, 'txt', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['HTML'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()); 
				$pyjs.track.lineno=38;
				(function(){try{try{$pyjs.in_try_except += 1;
				return p['add']($p['getattr'](self, 'img'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs.track.lineno=39;
				(function(){try{try{$pyjs.in_try_except += 1;
				return p['add']($p['getattr'](self, 'txt'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs.track.lineno=41;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['add'](p);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text'],['imageUrl']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=43;
			$method = $pyjs__bind_method2('addClickListener', function(listener) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '311ff86b6980912e57ccca1a4313b619') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'website', lineno:43};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=43;
				$pyjs.track.lineno=45;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['img']['addClickListener'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs.track.lineno=46;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['txt']['addClickListener'](listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addClickListener'] = $method;
			$pyjs.track.lineno=29;
			var $bases = new Array($m['Composite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('PrettyTab', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=49;
		$m['Tabs'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'website';
			$cls_definition.__md5__ = '68022fe648dee1d4484cb202243a6269';
			$pyjs.track.lineno=51;
			$method = $pyjs__bind_method2('onModuleLoad', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '68022fe648dee1d4484cb202243a6269') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var dock;
				$pyjs.track={module:'website', lineno:51};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=51;
				$pyjs.track.lineno=53;
				dock = (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['DockPanel'], null, null, [{Width:'100%'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs.track.lineno=54;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('header', (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'100%', Height:'220px'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) : $p['setattr'](self, 'header', (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'100%', Height:'220px'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()); 
				$pyjs.track.lineno=55;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('footer', (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'100%'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) : $p['setattr'](self, 'footer', (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'100%'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()); 
				$pyjs.track.lineno=56;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sidebar', (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'200px', Height:'100%', StyleName:'sidebar'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) : $p['setattr'](self, 'sidebar', (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['HTML'], null, null, [{Width:'200px', Height:'100%', StyleName:'sidebar'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()); 
				$pyjs.track.lineno=57;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('fTabs', (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['DecoratedTabPanel'], null, null, [{Size:(function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple'](['100%', '100%']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), StyleName:'tabs'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) : $p['setattr'](self, 'fTabs', (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $m['DecoratedTabPanel'], null, null, [{Size:(function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple'](['100%', '100%']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), StyleName:'tabs'}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()); 
				$pyjs.track.lineno=63;
				(function(){try{try{$pyjs.in_try_except += 1;
				return dock['add']($p['getattr'](self, 'header'), $p['getattr']($m['DockPanel'], 'NORTH'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
				$pyjs.track.lineno=64;
				(function(){try{try{$pyjs.in_try_except += 1;
				return dock['add']($p['getattr'](self, 'footer'), $p['getattr']($m['DockPanel'], 'SOUTH'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs.track.lineno=65;
				(function(){try{try{$pyjs.in_try_except += 1;
				return dock['add']($p['getattr'](self, 'sidebar'), $p['getattr']($m['DockPanel'], 'EAST'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs.track.lineno=66;
				(function(){try{try{$pyjs.in_try_except += 1;
				return dock['add']($p['getattr'](self, 'fTabs'), $p['getattr']($m['DockPanel'], 'CENTER'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				$pyjs.track.lineno=67;
				(function(){try{try{$pyjs.in_try_except += 1;
				return dock['setCellVerticalAlignment']($p['getattr'](self, 'fTabs'), $p['getattr']($m['HasAlignment'], 'ALIGN_TOP'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
				$pyjs.track.lineno=69;
				(function(){try{try{$pyjs.in_try_except += 1;
				return dock['setCellWidth']($p['getattr'](self, 'header'), '100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs.track.lineno=70;
				(function(){try{try{$pyjs.in_try_except += 1;
				return dock['setCellHeight']($p['getattr'](self, 'header'), '220px');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs.track.lineno=71;
				(function(){try{try{$pyjs.in_try_except += 1;
				return dock['setCellWidth']($p['getattr'](self, 'footer'), '100%');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$pyjs.track.lineno=72;
				(function(){try{try{$pyjs.in_try_except += 1;
				return dock['setCellWidth']($p['getattr'](self, 'sidebar'), '200px');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs.track.lineno=74;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $m['RootPanel']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()['add'](dock);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs.track.lineno=75;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dock', dock) : $p['setattr'](self, 'dock', dock); 
				$pyjs.track.lineno=77;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['loadPageList']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs.track.lineno=79;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['Window']['addWindowResizeListener'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs.track.lineno=81;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['DeferredCommand']['add'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['onModuleLoad'] = $method;
			$pyjs.track.lineno=84;
			$method = $pyjs__bind_method2('execute', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '68022fe648dee1d4484cb202243a6269') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'website', lineno:84};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=84;
				$pyjs.track.lineno=85;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['onWindowResized']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['Window']['getClientWidth']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
				return $m['Window']['getClientHeight']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['execute'] = $method;
			$pyjs.track.lineno=87;
			$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '68022fe648dee1d4484cb202243a6269') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var tabwidth,$sub2,$sub1;
				$pyjs.track={module:'website', lineno:87};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=87;
				$pyjs.track.lineno=89;
				tabwidth = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('%dpx', $p['__op_sub']($sub1=width,$sub2=$constant_int_350));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				$pyjs.track.lineno=90;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['log']['info']('New tab control width = %s <a href="foo.bar">foo.bar</a>', tabwidth);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs.track.lineno=96;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['fTabs']['setWidth'](tabwidth);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				$pyjs.track.lineno=97;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['dock']['setCellWidth']($p['getattr'](self, 'fTabs'), tabwidth);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['onWindowResized'] = $method;
			$pyjs.track.lineno=99;
			$method = $pyjs__bind_method2('createPage', function(title, purpose, text) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					purpose = arguments[2];
					text = arguments[3];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 4) $pyjs__exception_func_param(arguments.callee.__name__, 4, 4, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '68022fe648dee1d4484cb202243a6269') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_iter,$iter2_type,$iter2_iter,question,html,$iter1_array,answer,widget,$iter1_nextval,faq,$iter2_idx,$iter2_nextval,initToken,$iter1_type,idx,l,$add2,$add3,$add1,$iter1_idx,$add4,$pyjs__trackstack_size_1,$iter2_array;
				$pyjs.track={module:'website', lineno:99};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=99;
				$pyjs.track.lineno=101;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](purpose, 'faq'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
					$pyjs.track.lineno=102;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, 'faq_pages').__setitem__(title, text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
					$pyjs.track.lineno=103;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['log']['debug']('%d %d', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['len']($p['getattr'](self, 'faq_pages'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
					return $p['len']($p['getattr'](self, 'faq_list'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
					$pyjs.track.lineno=106;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['len']($p['getattr'](self, 'faq_pages'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
					return $p['len']($p['getattr'](self, 'faq_list'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
						$pyjs.track.lineno=107;
						$pyjs.track.lineno=107;
						var $pyjs__ret = null;
						$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
						return $pyjs__ret;
					}
					$pyjs.track.lineno=108;
					faq = $p['getattr'](self, 'page_widgets').__getitem__('FAQ');
					$pyjs.track.lineno=109;
					$pyjs__trackstack_size_1=$pyjs.trackstack.length;
					$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, 'faq_list');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
						l = $iter1_nextval.$nextval;
						$pyjs.track.lineno=110;
						question = l.__getitem__($constant_int_0);
						$pyjs.track.lineno=111;
						answer = $p['getattr'](self, 'faq_pages').__getitem__(question);
						$pyjs.track.lineno=112;
						html = (function(){try{try{$pyjs.in_try_except += 1;
						return faq['getHTML']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
						$pyjs.track.lineno=113;
						html = $p['__op_add']($add1=html,$add2=(function(){try{try{$pyjs.in_try_except += 1;
						return $p['sprintf']('<h3>%s</h3>\n', question);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})());
						$pyjs.track.lineno=114;
						html = $p['__op_add']($add3=html,$add4=(function(){try{try{$pyjs.in_try_except += 1;
						return $p['sprintf']('\n%s\n\n', answer);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})());
						$pyjs.track.lineno=115;
						(function(){try{try{$pyjs.in_try_except += 1;
						return faq['setHTML'](html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='website';
					$pyjs.track.lineno=116;
					html = (function(){try{try{$pyjs.in_try_except += 1;
					return $p['sprintf']("<div class='faq'>\n%s</div>\n", html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
					$pyjs.track.lineno=117;
					(function(){try{try{$pyjs.in_try_except += 1;
					return faq['setHTML'](html);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
					$pyjs.track.lineno=118;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(faq, 'replaceLinks', null, null, [{use_page_href:false}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
					$pyjs.track.lineno=119;
					$pyjs.track.lineno=119;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=121;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](title, 'header'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
					$pyjs.track.lineno=122;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['header']['setHTML'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
					$pyjs.track.lineno=123;
					$pyjs.track.lineno=123;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](title, 'footer'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
					$pyjs.track.lineno=125;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['footer']['setHTML'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
					$pyjs.track.lineno=126;
					$pyjs.track.lineno=126;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](title, 'sidebar'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
					$pyjs.track.lineno=128;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['sidebar']['setHTML'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
					$pyjs.track.lineno=129;
					$pyjs.track.lineno=129;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=133;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, 'pages').__setitem__(title, text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				$pyjs.track.lineno=134;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']($p['getattr'](self, 'pages'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
				return $p['len']($p['getattr'](self, 'page_list'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
					$pyjs.track.lineno=135;
					$pyjs.track.lineno=135;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=136;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page_widgets', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) : $p['setattr'](self, 'page_widgets', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()); 
				$pyjs.track.lineno=137;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tab_index', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) : $p['setattr'](self, 'tab_index', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()); 
				$pyjs.track.lineno=138;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $p['enumerate']($p['getattr'](self, 'page_list'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					idx = $tupleassign1[0];
					l = $tupleassign1[1];
					$pyjs.track.lineno=139;
					title = l.__getitem__($constant_int_0);
					$pyjs.track.lineno=140;
					text = $p['getattr'](self, 'pages').__getitem__(title);
					$pyjs.track.lineno=141;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, 'tab_index').__setitem__(title, idx);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
					$pyjs.track.lineno=142;
					widget = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['HTMLLinkPanel'](text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
					$pyjs.track.lineno=143;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['fTabs']['add'](widget, title, true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
					$pyjs.track.lineno=144;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr'](self, 'page_widgets').__setitem__(title, widget);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
					$pyjs.track.lineno=145;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](title, 'FAQ'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
						$pyjs.track.lineno=146;
						(function(){try{try{$pyjs.in_try_except += 1;
						return (function(){try{try{$pyjs.in_try_except += 1;
						return $m['HTTPRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()['asyncGet']('faq/questions.txt', (function(){try{try{$pyjs.in_try_except += 1;
						return $m['PageListLoader'](self, 'faq');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
					}
					else {
						$pyjs.track.lineno=149;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $pyjs_kwargs_call(widget, 'replaceLinks', null, null, [{use_page_href:false}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
					}
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='website';
				$pyjs.track.lineno=150;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['fTabs']['selectTab']($constant_int_0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs.track.lineno=152;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['History']['addHistoryListener'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs.track.lineno=153;
				initToken = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['History']['getToken']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
				$pyjs.track.lineno=154;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['log']['debug']("initial token: '%s'", initToken);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$pyjs.track.lineno=155;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['onHistoryChanged'](initToken);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
				$pyjs.track.lineno=156;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['fTabs']['addTabListener'](self);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['title'],['purpose'],['text']]);
			$cls_definition['createPage'] = $method;
			$pyjs.track.lineno=158;
			$method = $pyjs__bind_method2('onBeforeTabSelected', function(sender, tabIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					tabIndex = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '68022fe648dee1d4484cb202243a6269') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'website', lineno:158};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=158;
				$pyjs.track.lineno=159;
				$pyjs.track.lineno=159;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
			$cls_definition['onBeforeTabSelected'] = $method;
			$pyjs.track.lineno=161;
			$method = $pyjs__bind_method2('onTabSelected', function(sender, tabIndex) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					tabIndex = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '68022fe648dee1d4484cb202243a6269') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var new_token,current_token;
				$pyjs.track={module:'website', lineno:161};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=161;
				$pyjs.track.lineno=162;
				current_token = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['History']['getToken']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
				$pyjs.track.lineno=163;
				new_token = $p['getattr'](self, 'page_list').__getitem__(tabIndex).__getitem__($constant_int_0);
				$pyjs.track.lineno=164;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['op_eq'](current_token, new_token));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) {
					$pyjs.track.lineno=165;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $m['History']['newItem'](new_token);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['tabIndex']]);
			$cls_definition['onTabSelected'] = $method;
			$pyjs.track.lineno=167;
			$method = $pyjs__bind_method2('onHistoryChanged', function(token) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					token = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '68022fe648dee1d4484cb202243a6269') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var idx;
				$pyjs.track={module:'website', lineno:167};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=167;
				$pyjs.track.lineno=168;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return self['pages']['has_key'](token);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
					$pyjs.track.lineno=169;
					idx = $p['getattr'](self, 'tab_index').__getitem__(token);
					$pyjs.track.lineno=170;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['fTabs']['selectTab'](idx);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['token']]);
			$cls_definition['onHistoryChanged'] = $method;
			$pyjs.track.lineno=172;
			$method = $pyjs__bind_method2('onError', function(text, code) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					code = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '68022fe648dee1d4484cb202243a6269') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'website', lineno:172};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=172;
				$pyjs.track.lineno=173;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $m['log']['error']('LOAD ERROR(%s): %s', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['str'](code);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})(), text);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				$pyjs.track.lineno=174;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['text'],['code']]);
			$cls_definition['onError'] = $method;
			$pyjs.track.lineno=176;
			$method = $pyjs__bind_method2('loadPageList', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '68022fe648dee1d4484cb202243a6269') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'website', lineno:176};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=176;
				$pyjs.track.lineno=177;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $m['HTTPRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()['asyncGet']('sidebar.html', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['PageLoader'](self, 'sidebar', 'contents');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				$pyjs.track.lineno=179;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $m['HTTPRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()['asyncGet']('header.html', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['PageLoader'](self, 'header', 'contents');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
				$pyjs.track.lineno=181;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $m['HTTPRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()['asyncGet']('footer.html', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['PageLoader'](self, 'footer', 'contents');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				$pyjs.track.lineno=183;
				(function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $m['HTTPRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})()['asyncGet']('contents.txt', (function(){try{try{$pyjs.in_try_except += 1;
				return $m['PageListLoader'](self, 'contents');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['loadPageList'] = $method;
			$pyjs.track.lineno=186;
			$method = $pyjs__bind_method2('loadPages', function(pages, purpose) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length+1);
				} else {
					var self = arguments[0];
					pages = arguments[1];
					purpose = arguments[2];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 3) $pyjs__exception_func_param(arguments.callee.__name__, 3, 3, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '68022fe648dee1d4484cb202243a6269') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,title,$iter3_array,l,$iter3_iter,$iter3_type,desc,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs.track={module:'website', lineno:186};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='website';
				$pyjs.track.lineno=186;
				$pyjs.track.lineno=187;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](purpose, 'contents'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
					$pyjs.track.lineno=188;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('pages', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()) : $p['setattr'](self, 'pages', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()); 
					$pyjs.track.lineno=189;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('page_list', pages) : $p['setattr'](self, 'page_list', pages); 
				}
				else if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](purpose, 'faq'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()) {
					$pyjs.track.lineno=191;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('faq_pages', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) : $p['setattr'](self, 'faq_pages', (function(){try{try{$pyjs.in_try_except += 1;
					return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()); 
					$pyjs.track.lineno=192;
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('faq_list', pages) : $p['setattr'](self, 'faq_list', pages); 
				}
				$pyjs.track.lineno=194;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return pages;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					l = $iter3_nextval.$nextval;
					$pyjs.track.lineno=195;
					title = l.__getitem__($constant_int_0);
					$pyjs.track.lineno=196;
					desc = l.__getitem__($constant_int_1);
					$pyjs.track.lineno=197;
					(function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $m['HTTPRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()['asyncGet'](desc, (function(){try{try{$pyjs.in_try_except += 1;
					return $m['PageLoader'](self, title, purpose);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='website';
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['pages'],['purpose']]);
			$cls_definition['loadPages'] = $method;
			$pyjs.track.lineno=49;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Tabs', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=200;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()) {
			$pyjs.track.lineno=201;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['pyjd']['setup']('http://127.0.0.1/pyjamas/doc/pyjs_site/public/index.html');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			$pyjs.track.lineno=202;
			$m['app'] = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['Tabs']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
			$pyjs.track.lineno=203;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['app']['onModuleLoad']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
			$pyjs.track.lineno=204;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['pyjd']['run']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end website */


/* end module: website */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.logging', 'pyjamas', 'pyjamas.DeferredCommand', 'pyjamas.History', 'pyjamas.Window', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.MouseListener', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui.Composite', 'pyjamas.ui.DecoratorPanel.DecoratedTabPanel', 'pyjamas.ui.DecoratorPanel', 'pyjamas.ui.DecoratorPanel.DecoratorPanel', 'pyjamas.ui.DecoratorPanel.DecoratorTitledPanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.HTMLLinkPanel.HTMLLinkPanel', 'pyjamas.ui.HTMLLinkPanel', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.TabBar.TabBar', 'pyjamas.ui.TabBar', 'pyjamas.ui.TabPanel.TabPanel', 'pyjamas.ui.TabPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'PageLoader.PageListLoader', 'PageLoader', 'PageLoader.PageLoader']
*/
