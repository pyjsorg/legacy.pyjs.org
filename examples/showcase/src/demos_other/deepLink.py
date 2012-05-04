"""
This example shows you how to set and get deep links (also known as Tokens)
"""
from pyjamas import History
from pyjamas.ui.Button import Button
from pyjamas import Window
from pyjamas.ui.HorizontalPanel import HorizontalPanel

class DeepLinkDemo(HorizontalPanel):
    def __init__(self):
        HorizontalPanel.__init__(self)

        History.newItem("test")
        show = Button("Show deep link", self.showDL)
        setDL = Button("Set deep link to 'pyjamas'", self.setDL)
        self.add(setDL)
        self.add(show)

    def showDL(self):
        Window.alert(History.getToken())

    def setDL(self):
        History.newItem("pyjamas")

