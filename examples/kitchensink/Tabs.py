from pyjamas.ui.Sink import Sink, SinkInfo
from pyjamas.ui.TabPanel import TabPanel
from pyjamas.ui import HasAlignment
from pyjamas.ui.Image import Image
from pyjamas.ui.VerticalPanel import VerticalPanel

class Tabs(Sink):
    def __init__(self):
        Sink.__init__(self)

        self.fTabs = TabPanel()
        self.fTabs.addTabListener(self)
        self.fTabs.add(self.createImage(self.baseURL() + "rembrandt/JohannesElison.jpg"), "1634")
        self.fTabs.add(self.createImage(self.baseURL() + "rembrandt/SelfPortrait1640.jpg"), "1640")
        self.fTabs.add(self.createImage(self.baseURL() + "rembrandt/LaMarcheNocturne.jpg"), "1642")
        self.fTabs.add(self.createImage(self.baseURL() + "rembrandt/TheReturnOfTheProdigalSon.jpg"), "1662")
        self.fTabs.add(self.createImage(self.baseURL() + "rembrandt/TheReturnOfTheProdigalSon.jpg"), "1662 (disabled)")
        self.fTabs.selectTab(0)

        self.fTabs.setWidth("100%")
        self.fTabs.setHeight("100%")
        self.initWidget(self.fTabs)

    def onShow(self):
        pass

    def createImage(self, imageUrl):
        image = Image(imageUrl)
        image.setStyleName("ks-images-Image")
        
        p = VerticalPanel()
        p.setHorizontalAlignment(HasAlignment.ALIGN_CENTER)
        p.setVerticalAlignment(HasAlignment.ALIGN_MIDDLE)
        p.add(image)
        return p

    def onBeforeTabSelected(self, sender, tabIndex):
        # Returning False disables the tab.
        if tabIndex == 4:
            return False
        return True

    def onTabSelected(self, sender, tabIndex):
        bar = self.fTabs.getTabBar()
        if tabIndex == 0:
            bar.getTabWidget(0).setText('1634 (selected)')
        else:
            bar.getTabWidget(0).setText('1634 (not selected)')

def init():
    text="This page demonstrates GWT's support for images.  Notice in particular how it uses the image's onLoad event to display a 'wait spinner' between the back and forward buttons."
    text="GWT's built-in <code>TabPanel</code> class makes it easy to build tabbed dialogs "
    text+="and the like.  Notice that no page load occurs when you select the "
    text+="different tabs in this page.  That's the magic of dynamic HTML."
    return SinkInfo("Tabs", text, Tabs)
