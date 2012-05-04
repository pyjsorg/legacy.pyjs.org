# Copyright (C) 2011 Vsevolod Fedorov <vsevolod.fedorov@gmail.com>
# License: Apache2 
# demonstrates issue #628 http://code.google.com/p/pyjamas/issues/detail?id=638

import pyjd # this is dummy in pyjs.
from pyjamas import Window
from pyjamas.ui.Tree import Tree
from pyjamas.ui.TreeItem import TreeItem
from pyjamas.ui.CheckBox import CheckBox
from pyjamas.ui.RootPanel import RootPanel


def onCb1(sender):
    Window.alert('onCb1 ' + str(sender) + str(sender.isChecked()))

def onCb2(sender):
    Window.alert('onCb2 ' + str(sender) + str(sender.isChecked()))

def main():
    root = RootPanel()
    tree = Tree()
    cb1 = CheckBox('test 1')
    cb1.addClickListener(onCb1)
    root.add(cb1)
    cb2 = CheckBox('test 2')
    cb2.addClickListener(onCb2)
    item = TreeItem(cb2)
    tree.addItem(item)
    root.add(tree)

if __name__ == '__main__':
    pyjd.setup("./public/TreeItemTest.html")
    main()
    pyjd.run()
