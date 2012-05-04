import pyjd # this is dummy in pyjs

from pyjamas import logging
from pyjamas.ui.Button import Button
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.HTML import HTML
from pyjamas.ui.DockPanel import DockPanel
from pyjamas.ui import HasAlignment
from pyjamas.ui.Hyperlink import Hyperlink
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.Sink import SinkList
from pyjamas import History
from pyjamas import Window
import Info
import Buttons
import Layouts
import Images
import Menus
import Lists
import Popups
import Tables
import Text
import Trees
import Frames
import Tabs
from Logger import Logger

log = logging.getAppendLogger(__name__, logging.DEBUG, logging.PLAIN_FORMAT)

class KitchenSink:

    def onHistoryChanged(self, token):
        log.debug("onHistoryChanged: %s", token)
        info = self.sink_list.find(token)
        if info is not None:
            self.show(info, False)
        else:
            self.showInfo()

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
        RootPanel().add(Logger())

        #Show the initial screen.
        initToken = History.getToken()
        if len(initToken):
            self.onHistoryChanged(initToken)
        else:
            self.showInfo()

    def show(self, info, affectHistory):
        if info == self.curInfo: return
        self.curInfo = info

        #log.debug("showing " + info.getName())
        if self.curSink is not None:
            #log.debug("removing " + str(self.curSink))
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
        self.sink_list.add(Info.init())
        self.sink_list.add(Buttons.init())
        self.sink_list.add(Menus.init())
        self.sink_list.add(Images.init())
        self.sink_list.add(Layouts.init())
        self.sink_list.add(Lists.init())
        self.sink_list.add(Popups.init())
        self.sink_list.add(Tables.init())
        self.sink_list.add(Text.init())
        self.sink_list.add(Trees.init())
        self.sink_list.add(Frames.init())
        self.sink_list.add(Tabs.init())

    def showInfo(self):
        self.show(self.sink_list.find("Info"), False)


if __name__ == '__main__':
    pyjd.setup("public/KitchenSink.html")
    app = KitchenSink()
    app.onModuleLoad()
    pyjd.run()
