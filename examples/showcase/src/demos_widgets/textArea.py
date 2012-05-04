"""
The ``ui.TextArea`` class implements a standard multi-line input field.

The ``setCharacterWidth()`` method sets the width of the input field, in
characters, while ``setVisibleLines()`` sets the height of the field, in lines.

Use the ``getText()`` method to retrieve the field's current text, and
``setText()`` to set it.  There are many other useful methods defined by
``ui.TextArea`` and its parent classes; see the module documentation for more
details.

If you want a TextArea that adjusts its size after its content, then have a look
at the AutoTextArea below. It also shows you how to catch certain keystrokes such as ctrl-enter.
"""
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.TextArea import TextArea
import math

class TextAreaDemo(VerticalPanel):
    def __init__(self):
        VerticalPanel.__init__(self)
        self.setSpacing("10px")

        field = TextArea()
        field.setCharacterWidth(20)
        field.setVisibleLines(4)
        self.add(field)

        self.add(AutoTextArea(self))

    def done(self):
        Window.alert("Ctrl-enter!")


class AutoTextArea(TextArea):
    def __init__(self, doneHandler):
        TextArea.__init__(self)
        self.doneHandler = doneHandler #this handler will be called when user press ctrl-enter

    def onBrowserEvent(self, event):
        if event.type == "keydown":
            if event.keyCode == 13 and event.ctrlKey: #ctrl-enter
                self.doneHandler.done()
            else:
                self.autoHeight() #if not ctrl-enter, adjust height
        
    def autoHeight(self):
        #here is some really weak code to calculate the height of the textarea.
        #its not very accurate, im sure you can do better! remember to "import math"
        lines = self.getText().split("\n")
        c = 0
        for i in lines:
            fsize = 9
            a = float(len(i)*fsize) / float((self.getOffsetWidth()/fsize)*fsize)
            b = int(math.ceil(a))
            c += max(1,b)
        newHeight = str(16*(2+c)) + "px"
        self.setHeight(newHeight)

    def setText(self, text):
        TextArea.setText(self, text)
        self.autoHeight()
