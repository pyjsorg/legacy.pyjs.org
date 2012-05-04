from pyjamas.ui.Composite import Composite
from pyjamas.ui.RichTextArea import RichTextArea
from pyjamas.ui.ToggleButton import ToggleButton
from pyjamas.ui.PushButton import PushButton
from pyjamas.ui.DockPanel import DockPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.Image import Image
from pyjamas.ui import Event
from pyjamas.Timer import Timer

from __pyjamas__ import doc

import traceback

import EventLinkPopup

from pyjamas.selection import Selection

class Icons:
    bold_icon = "bold.png"
    italics_icon = "Italic.png"
    underline_icon = "Underline.png"
    subscript_icon = "Subscript.png"
    superscript_icon = "Superscript.png"
    strikethrough_icon = "Strikethrough.png"
    indentmore_icon = "Indent Right.png"
    indentless_icon = "Indent Left.png"
    justifyleft_icon = "Justify Left.png"
    justifycenter_icon = "Justify Center.png"
    justifyright_icon = "Justify Right.png"
    horizontalrule_icon = "Horizontal Rule.png"
    numberedlist_icon = "Numbered List.png"
    list_icon = "List.png"
    link_icon = "Link Document.png"
    noformat_icon = "No Format.png"


BUTTON_WIDTH = "25px"

class RichTextEditor(Composite):


    def run(self):
        try:
            self.getSelection()
            rng = Selection.getRange()
            if (self.m_timerRange is None)  or  (not self.m_timerRange.equals(rng)):
                self.onSelectionChange(rng)
                self.m_timerRange = rng

        except:
            GWT.log("Error in timer selection", ex)

    def __init__(self):
        Composite.__init__(self)

        self.m_isInText = False
        self.m_lastText = ""
        self.trigger = False
        self.m_lastRange = None

        # Timer for trying real time selection change stuff
        self.m_timerRange = None
        self.m_selTimer = Timer()

        self.m_mainPanel = DockPanel()
        self.m_toolbarPanel = HorizontalPanel()
        self.m_toolbarPanel.setWidth("100%")
        self.m_toolbarPanel.setHeight("25px")
        self.m_toolbarPanel.setBorderWidth(1)
        self.m_toolbarPanel.addStyleName("timeline-RichTextToolbar")

        self.m_textW = RichTextArea()
        self.m_textW.addClickListener(self)
        self.m_textW.addKeyboardListener(self)
        self.m_textW.addFocusListener(self)
        self.m_textW.addMouseListener(self)
        # According to gwt doc, these do need to be set because this is a frame
        self.m_textW.setHeight("100%")
        self.m_textW.setWidth("100%")

        # Add buttons
        self.m_formatter = self.getFormatter()

        self.m_boldW = self.addToggleButton(self.m_toolbarPanel,
                                    Icons.bold_icon, "Bold")
        self.m_italicW = self.addToggleButton(self.m_toolbarPanel,
                                    Icons.italics_icon, "Italic")
        self.m_underlineW = self.addToggleButton(self.m_toolbarPanel,
                                    Icons.underline_icon, "Underline")
        self.m_subscriptW = self.addToggleButton(self.m_toolbarPanel,
                                    Icons.subscript_icon, "Subscript")
        self.m_superscriptW = self.addToggleButton(self.m_toolbarPanel,
                                    Icons.superscript_icon, "Superscript")
        self.m_strikethroughW = self.addToggleButton(self.m_toolbarPanel,
                                    Icons.strikethrough_icon, "Strikethrough")

        self.m_indentW = self.addPushButton(self.m_toolbarPanel,
                                    Icons.indentmore_icon, "Indent Right")
        self.m_outdentW = self.addPushButton(self.m_toolbarPanel,
                                    Icons.indentless_icon, "Indent Left")
        self.m_justifyLeftW = self.addPushButton(self.m_toolbarPanel,
                                    Icons.justifyleft_icon, "Justify Left")
        self.m_justifyCenterW = self.addPushButton(self.m_toolbarPanel,
                                    Icons.justifycenter_icon, "Justify Center")
        self.m_justifyRightW = self.addPushButton(self.m_toolbarPanel,
                                    Icons.justifyright_icon, "Justify Right")
        self.m_hrW = self.addPushButton(self.m_toolbarPanel,
                                Icons.horizontalrule_icon, "Horizontal Rule")
        self.m_olW = self.addPushButton(self.m_toolbarPanel,
                                Icons.numberedlist_icon, "Numbered List")
        self.m_ulW = self.addPushButton(self.m_toolbarPanel, Icons.list_icon, "List")
        self.m_newLinkW = self.addPushButton(self.m_toolbarPanel,
                                Icons.link_icon, "Link Document")
        self.m_removeFormatW = self.addPushButton(self.m_toolbarPanel,
                                Icons.noformat_icon, "No Format")

        self.m_mainPanel.add(self.m_toolbarPanel, DockPanel.NORTH)
        self.m_mainPanel.add(self.m_textW, DockPanel.CENTER)

        self.initWidget(self.m_mainPanel)
        self.sinkEvents(Event.ONCLICK)

    def getFormatter(self):
        return self.m_textW.getExtendedFormatter()

    def getRichTextArea(self):
        return self.m_textW

    def addPushButton(self, panel, imagep, tip):
        img = Image(imagep)
        img.setWidth("20px")
        img.setHeight("20px")

        pb = PushButton(img)
        self.addAnyButton(panel, pb, tip)
        return pb


    def addToggleButton(self, panel, imagep, tip):
        img = Image(imagep)
        img.setWidth("20px")
        img.setHeight("20px")
        tb = ToggleButton(img)
        self.addAnyButton(panel, tb, tip)
        return tb


    def addAnyButton(self, panel, button, tip):
        button.addStyleName("richText-button")
        button.setTitle(tip)
        button.setWidth(BUTTON_WIDTH)
        button.setHeight("100%")
        panel.add(button)
        panel.setCellWidth(button, BUTTON_WIDTH)
        button.addClickListener(self)


    def onClick(self, sender):
        if sender == self.m_boldW:
            self.m_formatter.toggleBold()
        elif sender == self.m_italicW:
            self.m_formatter.toggleItalic()
        elif sender == self.m_underlineW:
            self.m_formatter.toggleUnderline()
        elif sender == self.m_subscriptW:
            self.m_formatter.toggleSubscript()
        elif sender == self.m_superscriptW:
            self.m_formatter.toggleSuperscript()
        elif sender == self.m_strikethroughW:
            self.m_formatter.toggleStrikethrough()
        elif sender == self.m_indentW:
            self.m_formatter.rightIndent()
        elif sender == self.m_outdentW:
            self.m_formatter.leftIndent()
        elif sender == self.m_justifyLeftW:
            self.m_formatter.setJustification(RichTextArea.Justification.LEFT)
        elif sender == self.m_justifyCenterW:
            self.m_formatter.setJustification(RichTextArea.Justification.CENTER)
        elif sender == self.m_justifyRightW:
            self.m_formatter.setJustification(RichTextArea.Justification.RIGHT)
        elif sender == self.m_hrW:
            self.m_formatter.insertHorizontalRule()
        elif sender == self.m_olW:
            self.m_formatter.insertOrderedList()
        elif sender == self.m_ulW:
            self.m_formatter.insertUnorderedList()
        elif sender == self.m_removeFormatW:
            self.m_formatter.removeFormat()
        elif sender == self.m_newLinkW:
            EventLinkPopup.open(self)
        elif sender == self.m_textW:
            self.updateStatus()

        self.checkForChange()

    def onKeyDown(self, sender, keycode, modifiers):
        pass

    def onKeyUp(self, sender, keycode, modifiers):
        if sender == self.m_textW:
            self.updateStatus()
            self.checkForChange()

    def onMouseLeave(self, event):
        pass

    def onMouseEnter(self, event):
        pass

    def onMouseUp(self, event, x, y):
        pass

    def onMouseMove(self, event, x, y):
        pass

    def onMouseDown(self, event, x, y):
        self.trigger = True

    def onFocus(self, event):
        pass

    def onLostFocus(self, event):
        self.checkForChange()

    def onMouseOut(self, event):
        if self.m_isInText  and  self.isOnTextBorder(event):
            self.m_isInText = False
            self.captureSelection()
            self.endSelTimer()

    def onMouseOver(self, event):
        if not self.m_isInText:
            self.m_isInText = True
            self.m_textW.setFocus(True)
            self.m_lastRange = None
            self.startSelTimer()

    """*
    * This captures the selection when the mouse leaves the RTE, because in IE
    * the selection indicating the cursor position is lost once another widget
    * gains focus.  Could be implemented for IE only.
    """
    def captureSelection(self):
        try:
            self.getSelection()
            self.m_lastRange = Selection.getRange()

        except:
            GWT.log("Error capturing selection for IE", ex)

    # Gets run every time the selection is changed
    def onSelectionChange(self, sel):
        pass

    def isOnTextBorder(self, event):
        sender = event.getSource()
        twX = self.m_textW.getAbsoluteLeft()
        twY = self.m_textW.getAbsoluteTop()
        x = event.getClientX() - twX
        y = event.getClientY() - twY
        width = self.m_textW.getOffsetWidth()
        height = self.m_textW.getOffsetHeight()
        return ((sender == self.m_textW)  and
        ((x <= 0)  or  (x >= width)  or
        (y <= 0)  or  (y >= height)))

    def startSelTimer(self):
        self.m_selTimer.scheduleRepeating(250)

    def endSelTimer(self):
        self.m_selTimer.cancel()

    def getRange(self):
        if self.m_lastRange is None:
            self.getSelection()
            return Selection.getRange()

        else:
            return self.m_lastRange

    def getSelection(self):
        res = None
        try:
            window = self.getWindow()
            Selection.getSelection(window)

        except:
            print "Error getting the selection"
            traceback.print_exc()

    def getWindow(self, iFrame=None):
        if iFrame is None:
            iFrame = self.m_textW.getElement()
        iFrameWin = iFrame.contentWindow or iFrame.contentDocument

        if not iFrameWin.document:
            iFrameWin = iFrameWin.parentNode # FBJS version of parentNode

        #print "getWindow", iFrameWin, dir(iFrameWin)

        return iFrameWin


    def getDocument(self):
        return Selection.getDocument(self.getWindow())

    def setHtml(self, text):
        self.m_textW.setHTML(text)
        self.m_lastText = text

    def getHtml(self):
        return self.m_textW.getHTML()

    def checkForChange(self):
        text = self.m_textW.getHTML()
        if text != self.m_lastText:
            nEvt = doc().createEvent("HTMLEvents")
            nEvt.initEvent("change", False, True)
            self.getElement().dispatchEvent(nEvt)
            self.m_lastText = text


    # Update edit buttons based on current cursor location
    def updateStatus(self):
        if self.m_formatter is None:
            return
        self.m_boldW.setDown(self.m_formatter.isBold())
        self.m_italicW.setDown(self.m_formatter.isItalic())
        self.m_underlineW.setDown(self.m_formatter.isUnderlined())
        self.m_subscriptW.setDown(self.m_formatter.isSubscript())
        self.m_superscriptW.setDown(self.m_formatter.isSuperscript())
        self.m_strikethroughW.setDown(self.m_formatter.isStrikethrough())



    def addChangeHandler(self, handler):
        return addDomHandler(handler, ChangeEvent.getType())




