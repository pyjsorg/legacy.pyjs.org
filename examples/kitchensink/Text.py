from pyjamas.ui.Sink import Sink, SinkInfo
from pyjamas.ui.Button import Button
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.HTML import HTML
from pyjamas.ui.PasswordTextBox import PasswordTextBox
from pyjamas.ui.TextArea import TextArea
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.TextBoxBase import TextBoxBase
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.Widget import Widget

class Text(Sink):
    def __init__(self):
        Sink.__init__(self)
        self.fPasswordText = PasswordTextBox()
        self.fTextArea = TextArea()
        self.fTextBox = TextBox()

        panel = VerticalPanel()
        panel.setSpacing(8)
        panel.add(HTML("Normal text box:"))
        panel.add(self.createTextThing(self.fTextBox))
        panel.add(HTML("Password text box:"))
        panel.add(self.createTextThing(self.fPasswordText))
        panel.add(HTML("Text area:"))
        panel.add(self.createTextThing(self.fTextArea))
        
        panel.add(HTML("""Textarea below demos oninput event. oninput allows
to detect when the content of an element has changed. This is different
from examples above, where changes are detected only if they are made with
keyboard. oninput occurs when the content is changed through any user
interface(keyboard, mouse, etc.). For example, at first type few chars, but
then paste some text to the text areas above and below by selecting 'Paste'
command from context menu or by dragging&dropping and see the difference.
oninput is similar to onchange event, but onchange event fires only when a
text-entry widget loses focus."""))
        vp = VerticalPanel()
        self.echo = HTML()
        textArea = TextArea()
        vp.add(textArea)
        vp.add(self.echo)
        textArea.addInputListener(self)
        panel.add(vp)
        
        self.initWidget(panel)

    def onShow(self):
        pass
    
    def onInput(self, sender):
        self.echo.setText(sender.getText())

    def createTextThing(self, textBox):
        p = HorizontalPanel()
        p.setSpacing(4)

        p.add(textBox)

        echo = HTML()
        select_all = Button("select all")
        p.add(select_all)
        p.add(echo)
        
        listener=TextBoxListener(self, textBox, echo, select_all)
        select_all.addClickListener(listener)
        textBox.addKeyboardListener(listener)
        textBox.addClickListener(listener)

        return p

    def updateText(self, text, echo):
        echo.setHTML("Text: " + text.getText() + "<br>" + "Selection: %d" % text.getCursorPos() + ", %d" % text.getSelectionLength())


class TextBoxListener:
    def __init__(self, parent, textBox, echo, select_all):
        self.textBox=textBox
        self.echo=echo
        self.parent=parent
        self.select_all=select_all
        
    def onClick(self, sender):
        if sender == self.select_all:
            self.textBox.selectAll()
            self.textBox.setFocus(True)

        self.parent.updateText(self.textBox, self.echo)

    def onKeyUp(self, sender, keyCode, modifiers):
        self.parent.updateText(self.textBox, self.echo)

    def onKeyDown(self, sender, keyCode, modifiers):
        pass
    
    def onKeyPress(self, sender, keyCode, modifiers):
        pass

    
def init():
    text="GWT includes the standard complement of text-entry widgets, each of which "
    text+="supports keyboard and selection events you can use to control text entry.  "
    text+="In particular, notice that the selection range for each widget is "
    text+="updated whenever you press a key.  "
    text+="This can be a bit tricky on some browsers, but the GWT class library "
    text+="takes care of the plumbing for you automatically."
    return SinkInfo("Text", text, Text)
