import pyjd # dummy for pyjs

from pyjamas.ui.Button import Button
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.HTML import HTML
from pyjamas.ui.DockPanel import DockPanel
from pyjamas.ui import HasAlignment
from pyjamas.ui.Hyperlink import Hyperlink
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas import Window
from pyjamas.ui.Sink import SinkList
from pyjamas import History
import IntroTab
import TooltipTab
import AutoCompleteTab
import Canvas2DTab
import CanvasTab


class AddonsGallery:

    def onHistoryChanged(self, token):
        info = self.sink_list.find(token)
        if info:
            self.show(info, False)
        else:
            self.showIntro()

    def onModuleLoad(self):
        self.curInfo=''
        self.curSink=None
        self.description=HTML()
        self.sink_list=SinkList()
        self.panel=DockPanel()
        
        self.loadSinks()
        self.sinkContainer = DockPanel()
        self.sinkContainer.setStyleName("ks-Sink")

        vp=VerticalPanel()
        vp.setWidth("100%")
        vp.add(self.description)
        vp.add(self.sinkContainer)

        self.description.setStyleName("ks-Info")

        self.panel.add(self.sink_list, DockPanel.WEST)
        self.panel.add(vp, DockPanel.CENTER)

        self.panel.setCellVerticalAlignment(self.sink_list, HasAlignment.ALIGN_TOP)
        self.panel.setCellWidth(vp, "100%")

        History.addHistoryListener(self)
        RootPanel().add(self.panel)

        initToken = History.getToken()
        if len(initToken):
            self.onHistoryChanged(initToken)
        else:
            self.showIntro()
    
    def show(self, info, affectHistory=None):
        if info == self.curInfo: return
        self.curInfo = info

        if self.curSink <> None:
            self.curSink.onHide()
            self.sinkContainer.remove(self.curSink)

        self.curSink = info.getInstance()
        self.sink_list.setSinkSelection(info.getName())
        self.description.setHTML(info.getDescription())

        if (affectHistory):
            History.newItem(info.getName())

        self.sinkContainer.add(self.curSink, DockPanel.CENTER)
        self.sinkContainer.setCellWidth(self.curSink, "100%")
        self.sinkContainer.setCellHeight(self.curSink, "100%")
        self.sinkContainer.setCellVerticalAlignment(self.curSink, HasAlignment.ALIGN_TOP)
        self.curSink.onShow()
        
    def loadSinks(self):
        self.sink_list.add(IntroTab.init())
        self.sink_list.add(TooltipTab.init())
        self.sink_list.add(AutoCompleteTab.init())
        self.sink_list.add(Canvas2DTab.init())
        self.sink_list.add(CanvasTab.init())

    def showIntro(self):
        self.show(self.sink_list.find("Intro"))




if __name__ == '__main__':
    pyjd.setup("./public/AddonsGallery.html")
    app = AddonsGallery()
    app.onModuleLoad()
    pyjd.run()
