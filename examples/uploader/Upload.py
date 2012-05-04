# Client-side async upload with progress, without Flash. Demo only!!
# Copyright (C) 2012 James Hedley (jameskhedley@gmail.com)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Distributed as part of pyjamas (http://pyjs.org)

#See the README in this directory!

import pyjd

from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Label import Label
from pyjamas.ui.SimplePanel import SimplePanel
from pyjamas.ui.FormPanel import FormPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.FileUpload import FileUpload
from pyjamas.ui.CheckBox import CheckBox
from pyjamas.ui.NamedFrame import NamedFrame
from pyjamas import Window
from __pyjamas__ import JS

import AsyncUpload


class Upload:
    def onModuleLoad(self):
        self.main=FileUploadPanel()
        RootPanel().add(self.main)


class FileUploadPanel(SimplePanel):
    def __init__(self):
        SimplePanel.__init__(self)

        self.form = FormPanel()
        self.form.setEncoding(FormPanel.ENCODING_MULTIPART)
        self.form.setMethod(FormPanel.METHOD_POST)
        self.url =  "http://localhost/pyjamas_upload_demo"
        self.form.setAction(self.url)
        self.form.setTarget("results")

        vPanel = VerticalPanel()

        hPanel = HorizontalPanel()
        hPanel.setSpacing(5)
        hPanel.add(Label("Upload file:"))

        self.field = FileUpload()
        self.field.setName("file")
        hPanel.add(self.field)

        hPanel.add(Button("Submit", getattr(self, "onBtnClick")))
        vPanel.add(hPanel)
        
        self.simple = CheckBox("Simple mode?  ")
        #self.simple.setChecked(True)
        vPanel.add(self.simple)
        self.progress = Label('0%')

        results = NamedFrame("results")
        vPanel.add(results)
        vPanel.add(self.progress)

        self.form.add(vPanel)
        self.add(self.form)

    def onBtnClick(self, event):
        self.progress.setText('0%')
        if self.simple.isChecked():
            self.form.submit()
        else:
            if AsyncUpload.is_old_browser():
                Window.alert("Hmmm, your browser doesn't support this.")
            else:
                el = self.field.getElement()
                files = getattr(el, 'files')
                #TODO implement loop for multiple file uploads 
                file = JS("@{{files}}[0]") #otherwise pyjs thinks it's a string?
                AsyncUpload.asyncUpload(self.url, file, self)

    def onload(self, status):
        self.progress.setText('100%')

    def onerror(self, status):
        Window.alert("oh noes we got an " + str(status))

    def onprogress(self, loaded, total):
        if self.progress.getText() == '100%': return
        progress = (loaded / total)
        p = int(progress * 100)
        self.progress.setText(str(p) + '%')


if __name__ == '__main__':
    #Well it makes no sense whatsoever to run this as desktop!!
    pyjd.setup("public/Upload.html")
    app = Upload()
    app.onModuleLoad()
    pyjd.run()

