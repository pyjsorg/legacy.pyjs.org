import pyjd

from pyjamas import DeferredCommand
from pyjamas.ui.DockPanel import DockPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.FlowPanel import FlowPanel
from pyjamas.ui.Grid import Grid
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.TextArea import TextArea
from pyjamas.ui import RootPanel
from pyjamas.ui.RichTextArea import RichTextArea

from pyjamas.ui.RichTextToolbar import RichTextToolbar
from pyjamas.ui.RichTextToolbar import FontFamilyManager
from pyjamas.ui.RichTextToolbar import CustomStyleManager

"""*
* Entry point classes define <code>onModuleLoad()</code>.
"""
class SelectionTest:

    def onSelectionChange(self, selection):
        self.refresh(selection)

    """*
    * This is the entry point method.
    """
    def onModuleLoad(self):
        dlp = DockPanel(Width="100%", Height="100%")

        self.m_rte = RichTextArea(Width="500px", Height="400px")
        self.m_tb = RichTextToolbar(self.m_rte, self)

        buts = FlowPanel()
        self.m_getCurr = Button("Refresh v", self)
        self.m_setHtml = Button("Set html ^", self)
        self.m_setHtml.setTitle("Set html from the lower left text area")
        self.m_toSCursor = Button("< To Cursor", self)
        self.m_toSCursor.setTitle("Set the selection to be a cursor at the beginning of the current selection")
        self.m_toECursor = Button("To Cursor >", self)
        self.m_toECursor.setTitle("Set the selection to be a cursor at the end of the current selection")
        self.m_surround1 = Button("Surround1", self)
        self.m_surround2 = Button("Surround2", self)
        self.m_font1 = Button("Times New Roman", self)
        self.m_font2 = Button("Arial", self)

        grid = Grid(2, 2)
        self.m_startNode = self.createTextBox(1)
        self.m_startOffset = self.createTextBox(3)
        self.m_endNode = self.createTextBox(4)
        self.m_endOffset = self.createTextBox(5)
        self.m_select = Button("`>Select", self)
        self.m_select.setTitle("Select the texts/offsets in the boxes above")
        self.m_cursor = Button("`>Cursor", self)
        self.m_cursor.setTitle("Set cursor to text/offset of top 2 boxes above")
        grid.setWidget(0, 0, self.m_startNode)
        grid.setWidget(0, 1, self.m_startOffset)
        grid.setWidget(1, 0, self.m_endNode)
        grid.setWidget(1, 1, self.m_endOffset)

        self.m_deleteSel = Button("Delete", self)
        self.m_reset = Button("Reset", self)

        buts.add(self.m_getCurr)
        buts.add(self.m_setHtml)
        buts.add(self.m_toSCursor)
        buts.add(self.m_toECursor)
        buts.add(self.m_font1)
        buts.add(self.m_font2)
        buts.add(self.m_surround1)
        buts.add(self.m_surround2)
        buts.add(grid)
        buts.add(self.m_select)
        buts.add(self.m_cursor)

        buts.add(self.m_deleteSel)
        buts.add(self.m_reset)

        dlp.add(buts, DockPanel.WEST)

        textPanels = DockPanel()

        self.m_html = TextArea()
        self.m_html.setSize("100%", "100%")
        self.m_sel = TextArea()
        self.m_sel.setSize("100%", "100%")

        textPanels.add(self.m_sel, DockPanel.EAST)
        textPanels.add(self.m_html, DockPanel.WEST)

        dlp.add(textPanels, DockPanel.SOUTH)
        dlp.add(self.m_tb, DockPanel.NORTH)
        dlp.add(self.m_rte, DockPanel.CENTER)

        rp = RootPanel.get()
        rp.add(dlp)

        DeferredCommand.add(getattr(self, "set_html_focus"))

        self.reset()

    def set_html_focus(self):
        self.m_html.setFocus(True)

    def createTextBox(self, startVal):
        res = TextBox()
        res.setWidth("35px")
        res.setText(str(startVal))
        return res

    def reset(self):
        self.m_rte.setHTML(
        "The <span style=\"font-weight: bold;\">quick</span> " +
        "<span style=\"font-style: italic;\">brown </span>" +
        "fox jumped<br>ov" +
        "<a href=\"http:#google.com\">er </a>" +
        "<span style=\"text-decoration: underline;\">" +
        "<a href=\"http:#google.com\">th</a>e la</span>zy dogs<br>" +
        "Some&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; spaces<br>")


    def refresh(self, rng=None):
        if rng is None:
            rng = self.m_tb.getRange()
        self.m_html.setText(self.m_tb.getHtml())
        if rng is not None:
            if rng.isCursor():
                rep = rng.getCursor()
                self.m_sel.setText(str(rep))

            else:
                self.m_sel.setText(rng.getHtmlText())

        else:
            self.m_sel.setText("")

    def font1(self):
        self.m_tb._surround(FontFamilyManager, "Times New Roman")

    def font2(self):
        self.m_tb._surround(FontFamilyManager, "Arial")

    def surround1(self):
        self.m_tb._surround(CustomStyleManager, "editor-cls1")

    def surround2(self):
        self.m_tb._surround(CustomStyleManager, "editor-cls2")

    def onClick(self, wid):

        if wid == self.m_getCurr:
            self.refresh()

        elif wid == self.m_deleteSel:
            self.m_tb.delete()

        elif wid == self.m_reset:
            self.reset()

        elif wid == self.m_toECursor:
            self.m_tb.toCursor(False)

        elif wid == self.m_toSCursor:
            self.m_tb.toCursor(True)

        elif wid == self.m_font1:
            self.font1()

        elif wid == self.m_font2:
            self.font2()

        elif wid == self.m_surround1:
            self.surround1()

        elif wid == self.m_surround2:
            self.surround2()

        elif wid == self.m_setHtml:
            self.toHtml()

        elif wid == self.m_select:
            self.selectNodes(True)

        elif wid == self.m_cursor:
            self.selectNodes(False)

    def toHtml(self):
        self.m_tb.setHtml(self.m_html.getText())

    def selectNodes(self, fullSel):
        startNode = int(self.m_startNode.getText())
        startOffset = int(self.m_startOffset.getText())

        if fullSel:
            endNode = int(self.m_endNode.getText())
            endOffset = int(self.m_endOffset.getText())
        else:
            endNode = startNode
            endOffset = startOffset

        self.m_tb.selectNodes(startNode, startOffset, endNode, endOffset)


if __name__ == '__main__':
    pyjd.setup("public/SelectionTest.html")
    app = SelectionTest()
    app.onModuleLoad()
    pyjd.run()

