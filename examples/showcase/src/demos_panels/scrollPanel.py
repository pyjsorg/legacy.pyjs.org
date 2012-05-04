"""
The ``ui.ScrollPanel`` class implements a panel that scrolls its contents.

If you want the scroll bars to be always visible, call
``setAlwaysShowScrollBars(True)``.  You can also change the current scrolling
position programmatically by calling ``setScrollPosition(vPos)`` and
``setScrollHorizontalPosition(hPos)`` to change the horizontal and vertical
scrolling position, respectively.

It is in the nature of a scrollpanel that if you give it a relative size, it will not work.
This makes it tricky to use it where you want it to fill out a parent widget of unknown size.
To avoid this problem you will have to wrap its content in a SimplePanel and
then use css/oveflow to control its behaviour as shown in the second example:
"container" represents the parent widget that could be any absolute or relative size and
the superscrollpanel will fill it out and apply vertical scrollbars if needed.
"""
from pyjamas.ui.SimplePanel import SimplePanel
from pyjamas.ui.ScrollPanel import ScrollPanel
from pyjamas.ui.HTML import HTML
from pyjamas.ui.VerticalPanel import VerticalPanel


class ScrollPanelDemo(SimplePanel):
    def __init__(self):
        SimplePanel.__init__(self)
        vert = VerticalPanel()
        vert.setSpacing("10px")
        self.add(vert)
        
        panel = ScrollPanel(Size=("300px", "100px"))

        contents = HTML("<b>Tao Te Ching, Chapter One</b><p>" +
                        "The Way that can be told of is not an unvarying " +
                        "way;<p>The names that can be named are not " +
                        "unvarying names.<p>It was from the Nameless that " +
                        "Heaven and Earth sprang;<p>The named is but the " +
                        "mother that rears the ten thousand creatures, " +
                        "each after its kind.")
        panel.add(contents)
        vert.add(panel)

        container = SimplePanel(Width="400px", Height="200px")
        contents2 = HTML(50*"Dont forget to grab the css for SuperScrollPanel in Showcase.css! ")
        panel2 = SuperScrollPanel(contents2)
        container.add(panel2)
        vert.add(container)

class SuperScrollPanel(ScrollPanel):
    def __init__(self, panel):
        ScrollPanel.__init__(self)
        self.setHeight("100%")
        self.setStyleName("SuperScrollPanelOuter")

        self.inner = SimplePanel(Height="100%")
        self.add(self.inner)
        self.inner.setStyleName("SuperScrollPanelInner")
        self.inner.add(panel)

