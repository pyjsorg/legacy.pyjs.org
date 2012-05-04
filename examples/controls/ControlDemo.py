""" ControlDemo Example

    Bill Winder <wgwinder@gmail.com> added HorizontalSlider demo.
    Bill Winder <wgwinder@gmail.com> added AreaSlider demo.
"""
import pyjd # dummy in pyjs
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.CaptionPanel import CaptionPanel
from pyjamas.ui.Label import Label
from pyjamas.ui.Controls import VerticalDemoSlider
from pyjamas.ui.Controls import VerticalDemoSlider2
from pyjamas.ui.Controls import HorizontalDemoSlider
from pyjamas.ui.Controls import HorizontalDemoSlider2
from pyjamas.ui.Controls import AreaDemoSlider
from pyjamas.ui.Controls import AreaDemoSlider2
from pyjamas.ui.Controls import InputControl
from pyjamas.ui.MouseInputControl import MouseInputControl
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui import HasAlignment

class SliderClass(VerticalPanel):
    """ example of control which pairs up two other controls.
        should really be made into a control itself.
    """
    def __init__(self, p2):
        VerticalPanel.__init__(self)

        self.setSpacing(10)
        if p2:
            self.b = VerticalDemoSlider2(0, 100)
        else:
            self.b = VerticalDemoSlider(0, 100)
        self.add(self.b)

        self.b.setWidth("20px")
        self.b.setHeight("100px")

        self.b.addControlValueListener(self)

        self.label = InputControl(0, 100)
        self.add(self.label)

        self.label.addControlValueListener(self)

    def onControlValueChanged(self, sender, old_value, new_value):
        if sender == self.label:
            self.b.setControlPos(new_value)
            self.b.setValue(new_value, 0)
        if sender == self.b:
            self.label.setControlPos(new_value)
            self.label.setValue(new_value, 0)

class HSliderClass(VerticalPanel):
    """ example of control which pairs up two other controls.
        should really be made into a control itself.
    """
    def __init__(self, p2):
        VerticalPanel.__init__(self)

        self.setSpacing(10)
        if p2:
            self.b = HorizontalDemoSlider2(0, 100)
        else:
            self.b = HorizontalDemoSlider(0, 100)
        self.add(self.b)

        self.b.setHeight("20px")
        self.b.setWidth("100px")

        self.b.addControlValueListener(self)

        self.label = InputControl(0, 100)
        self.add(self.label)

        self.label.addControlValueListener(self)

    def onControlValueChanged(self, sender, old_value, new_value):
        if sender == self.label:
            self.b.setControlPos(new_value)
            self.b.setValue(new_value, 0)
        if sender == self.b:
            self.label.setControlPos(new_value)
            self.label.setValue(new_value, 0)

class ASliderClass(VerticalPanel):
    """ example of control which pairs up two other controls.
        should really be made into a control itself.
    """
    def __init__(self, p2):
        VerticalPanel.__init__(self)

        self.setSpacing(10)
        if p2:
            self.b = AreaDemoSlider2([0,0], [100,100], [0.2, 0.2])
        else:
            self.b = AreaDemoSlider([0,0], [100,100], [0.2, 0.2])
        self.add(self.b)

        self.b.setHeight("100px")
        self.b.setWidth("100px")

        self.b.addControlValueListener(self)

        self.label_x = MouseInputControl(0, 100, 0.2)
        self.add(self.label_x)

        self.label_x.addControlValueListener(self)

        self.label_y = MouseInputControl(0, 100, 0.2)
        self.add(self.label_y)

        self.label_y.addControlValueListener(self)

    def onControlValueChanged(self, sender, old_value_xy, new_value_xy):

        #no use of old_values? (old_value_x,old_value_y)

        if (sender == self.label_x):

            self.b.setControlPos([new_value_xy, self.b.value_y])
            self.b.setValue([new_value_xy, self.b.value_y], 0)

        elif (sender == self.label_y):

            self.b.setControlPos([self.b.value_x, new_value_xy])
            self.b.setValue([self.b.value_x, new_value_xy], 0)

        elif (sender == self.b):

            (new_value_x,new_value_y) = new_value_xy

            self.label_x.setControlPos(new_value_x)
            self.label_x.setValue(new_value_x, 0)

            self.label_y.setControlPos(new_value_y)
            self.label_y.setValue(new_value_y, 0)

class ControlDemo:
    def onModuleLoad(self):

        v = VerticalPanel(Spacing=10)

        p = HorizontalPanel(Spacing=10,
                            VerticalAlignment=HasAlignment.ALIGN_BOTTOM)

        sc = SliderClass(False)
        p.add(CaptionPanel("clickable only", sc))
        sc = SliderClass(True)
        p.add(CaptionPanel("draggable", sc))
        sc = SliderClass(True)
        p.add(CaptionPanel("draggable", sc))

        v.add(CaptionPanel("Vertical Sliders with inputboxes", p))

        p = HorizontalPanel()
        p.setSpacing(10)
        p.setVerticalAlignment(HasAlignment.ALIGN_BOTTOM)

        sc = HSliderClass(False)
        p.add(CaptionPanel("clickable only", sc))
        sc = HSliderClass(True)
        p.add(CaptionPanel("draggable", sc))

        v.add(CaptionPanel("Horizontal Sliders with inputboxes", p))

        p = HorizontalPanel()
        p.setSpacing(10)
        p.setVerticalAlignment(HasAlignment.ALIGN_BOTTOM)

        sc = ASliderClass(False)
        p.add(CaptionPanel("clickable only", sc))
        sc = ASliderClass(True)
        p.add(CaptionPanel("draggable", sc))

        v.add(CaptionPanel("2D Controls: Inputboxes are draggable as well", p))

        RootPanel().add(v)


if __name__ == '__main__':
    pyjd.setup("./public/ControlDemo.html")
    app = ControlDemo()
    app.onModuleLoad()
    pyjd.run()
