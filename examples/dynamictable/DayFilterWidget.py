from pyjamas.ui.Composite import Composite
from pyjamas.ui.CheckBox import CheckBox
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.Button import Button
from pyjamas.ui import HasAlignment

class DayCheckBox(CheckBox):

    def __init__(self, owner, caption, day):
        CheckBox.__init__(self, caption)

        self.day = day
        self.addClickListener(owner.dayCheckBoxListener)
        self.setChecked(owner.calendar.getDayIncluded(day))


class DayCheckBoxListener:
    def __init__(self, calendar):
        self.calendar = calendar
        
    def onClick(self, sender):
        self.calendar.setDayIncluded(sender.day, sender.isChecked())


class DayFilterWidget(Composite):

    def __init__(self, calendar):
        Composite.__init__(self)
    
        self.calendar = calendar
        self.dayCheckBoxListener = DayCheckBoxListener(calendar)
        self.outer = VerticalPanel()
        self.initWidget(self.outer)
        self.setStyleName("DynaTable-DayFilterWidget")
        self.outer.add(DayCheckBox(self, "Sunday", 0))
        self.outer.add(DayCheckBox(self, "Monday", 1))
        self.outer.add(DayCheckBox(self, "Tuesday", 2))
        self.outer.add(DayCheckBox(self, "Wednesday", 3))
        self.outer.add(DayCheckBox(self, "Thursday", 4))
        self.outer.add(DayCheckBox(self, "Friday", 5))
        self.outer.add(DayCheckBox(self, "Saturday", 6))

        self.buttonAll = Button("All", self)
        self.buttonNone = Button("None", self)

        hp = HorizontalPanel()
        hp.setHorizontalAlignment(HasAlignment.ALIGN_CENTER)
        hp.add(self.buttonAll)
        hp.add(self.buttonNone)
        
        self.outer.add(hp)
        self.outer.setCellVerticalAlignment(hp, HasAlignment.ALIGN_BOTTOM)
        self.outer.setCellHorizontalAlignment(hp, HasAlignment.ALIGN_CENTER)
        
    def setAllCheckBoxes(self, checked):
        for widget in self.outer:
            if hasattr(widget, "setChecked"):
                widget.setChecked(checked)
                self.dayCheckBoxListener.onClick(widget)
    
    def onClick(self, sender):
        if self.buttonAll == sender:
            self.setAllCheckBoxes(True)
        elif self.buttonNone == sender:
            self.setAllCheckBoxes(False)


        
        
