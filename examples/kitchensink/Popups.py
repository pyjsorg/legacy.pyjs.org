from pyjamas.ui.Sink import Sink, SinkInfo
from pyjamas.ui.Button import Button
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.PopupPanel import PopupPanel
from pyjamas.ui.ListBox import ListBox
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Image import Image
from pyjamas.ui.DockPanel import DockPanel
from pyjamas.ui.DialogBox import DialogBox
from pyjamas.ui.DialogWindow import DialogWindow
from pyjamas.ui.Frame import Frame
from pyjamas.ui import HasAlignment
from pyjamas import DOM

class Popups(Sink):
    def __init__(self):
        Sink.__init__(self)

        self.fDialogButton = Button("Show Dialog", self)
        self.fPopupButton = Button("Show Popup", self)
        self.fMultipleDialogButton = Button("Show muliple dialogs", self)
        
        panel = VerticalPanel()
        panel.add(self.fPopupButton)
        panel.add(self.fDialogButton)
        panel.add(self.fMultipleDialogButton)
        
        list = ListBox()
        list.setVisibleItemCount(5)
        for i in range(10):
            list.addItem("list item %d" % i)
        panel.add(list)
        
        panel.setSpacing(8)
        self.initWidget(panel)

    def onShow(self):
        pass

    def onClick(self, sender):
        if sender == self.fPopupButton:
            p = MyPopup()
            left = sender.getAbsoluteLeft() + 10
            top = sender.getAbsoluteTop() + 10
            p.setPopupPosition(left, top)
            p.show()
        elif sender == self.fDialogButton:
            dlg = MyDialog(self.baseURL())
            left = self.fDialogButton.getAbsoluteLeft() + 10
            top = self.fDialogButton.getAbsoluteTop() + 10
            dlg.setPopupPosition(left, top)
            dlg.show()
        elif sender == self.fMultipleDialogButton:
            dlg = MyDialogWindow(self.baseURL())
            left = self.fDialogButton.getAbsoluteLeft() + 10
            top = self.fDialogButton.getAbsoluteTop() + 10
            dlg.setPopupPosition(left, top)
            dlg.show()


def init():
    text="This page demonstrates GWT's built-in support for in-page "
    text+="popups.  The first is a very simple informational popup that closes "
    text+="itself automatically when you click off of it.  The second is a more "
    text+="complex draggable dialog box. If you're wondering why there's "
    text+="a list box at the bottom, it's to demonstrate that you can drag the "
    text+="dialog box over it.  "
    text+="This is noteworthy because some browsers render lists and combos in "
    text+="a funky way that, if GWT didn't do some magic for you, would "
    text+="normally cause the dialog box to appear to hover <i>underneath</i> "
    text+="the list box.  Fortunately, you don't have to worry about it -- "
    text+="just use the GWT <code>DialogBox</code> class."
    return SinkInfo("Popups", text, Popups)



class MyDialog(DialogBox):
    def __init__(self, baseURL):
        DialogBox.__init__(self, glass=True)
        self.setText("Sample DialogBox with embedded Frame")
        
        iframe = Frame(baseURL + "rembrandt/LaMarcheNocturne.html")
        closeButton = Button("Close", self)
        msg = HTML("<center>This is an example of a standard dialog box component.<br>  You can put pretty much anything you like into it,<br>such as the following IFRAME:</center>", True)
        
        dock = DockPanel()
        dock.setSpacing(4)
        
        dock.add(closeButton, DockPanel.SOUTH)
        dock.add(msg, DockPanel.NORTH)
        dock.add(iframe, DockPanel.CENTER)
        
        dock.setCellHorizontalAlignment(closeButton, HasAlignment.ALIGN_RIGHT)
        dock.setCellWidth(iframe, "100%")
        dock.setWidth("100%")
        iframe.setWidth("36em")
        iframe.setHeight("20em")
        self.setWidget(dock)
        
        # Work around for IE/MSHTML Issue 511
        self.initURL = iframe.getUrl()
        self.iframe = iframe

    def onClick(self, sender):
        # Work around for IE/MSHTML Issue 511
        self.iframe.setUrl(self.initURL)

        self.hide()


class MyDialogWindow(DialogWindow):
    images = [
        'JohannesElison.jpg',
        'LaMarcheNocturne.jpg',
        'SelfPortrait1628.jpg',
        'SelfPortrait1640.jpg',
        'TheArtistInHisStudio.jpg',
        'TheReturnOfTheProdigalSon.jpg',
    ]

    def __init__(self, baseURL):
        DialogWindow.__init__(
            self, modal=False,
            minimize=True, maximize=True, close=True,
        )
        closeButton = Button("Close", self)
        imgname = self.images.pop(0)
        self.images.append(imgname)
        self.setText("Sample DialogWindow with embedded image")
        img = Image("%srembrandt/%s" % (baseURL, imgname))
        msg = HTML("<center>This is an example of a standard dialog box component.<br>  You can put pretty much anything you like into it,<br>such as the following image '%s':</center>" % imgname, True)

        dock = DockPanel()
        dock.setSpacing(4)

        dock.add(closeButton, DockPanel.SOUTH)
        dock.add(msg, DockPanel.NORTH)
        dock.add(img, DockPanel.CENTER)

        dock.setCellHorizontalAlignment(closeButton, HasAlignment.ALIGN_RIGHT)
        dock.setCellWidth(img, "100%")
        dock.setWidth("100%")
        self.setWidget(dock)

    def onClick(self, sender):
        self.hide()


class MyPopup(PopupPanel):
    def __init__(self):
        PopupPanel.__init__(self, True)
        
        contents = HTML("Click anywhere outside this popup to make it disappear.")
        contents.setWidth("128px")
        self.setWidget(contents)
        
        self.setStyleName("ks-popups-Popup")
