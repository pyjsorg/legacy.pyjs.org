from pyjamas.ui.Sink import Sink, SinkInfo
from pyjamas.ui.Image import Image
from pyjamas.ui.HTML import HTML
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.AutoComplete import AutoCompleteTextBox

class AutoCompleteTab(Sink):
    def __init__(self):
        colours = ['Azure', 'Red', 'Rust', 'Green', 'Beige', 'Brass', 'Brown', 'Bronze', 'Blue', 'Black', 'Burgundy', 'Pink', 'Gold', 'Gray', 'Purple', 'Yellow', 'White']
        Sink.__init__(self)
        self.colour_input = AutoCompleteTextBox()
        self.colour_input.setCompletionItems(colours)
        
        panel = HorizontalPanel()
        panel.add(HTML("Enter a colour: "))
        panel.add(self.colour_input)

        panel.setSpacing(8)
        self.setWidget(panel)
        

    def onShow(self):
        #self.colour_input.setFocus(True)
        return


def init():
    text="<b>Text field auto-completion component</b><p>Shows a list of matching items as you type. Items can be selected with keyboard or mouse."
    text+=r"<p>Originally by Oliver Albers at <a href=\"http://gwt.components.googlepages.com\">gwt.components.googlepages.com</a>"
    return SinkInfo("AutoComplete", text, AutoCompleteTab)
