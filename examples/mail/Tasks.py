from pyjamas.ui.CheckBox import CheckBox
from pyjamas.ui.Composite import Composite
from pyjamas.ui.VerticalPanel import VerticalPanel

class Tasks(Composite):

    def __init__(self):
        Composite.__init__(self)

        panel = VerticalPanel()
        panel.add(CheckBox("Get groceries"))
        panel.add(CheckBox("Walk the dog"))
        panel.add(CheckBox("Start Web 2.0 company"))
        panel.add(CheckBox("Write cool app in GWT"))
        panel.add(CheckBox("Get funding"))
        panel.add(CheckBox("Take a vacation"))
        self.initWidget(panel)
        self.setStyleName("mail-Tasks")
