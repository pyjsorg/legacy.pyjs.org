"""
* Copyright (C) 2012 Rich Newpol <rich.newpol@gmail.com>
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not
* use this file except in compliance with the License. You may obtain a copy of
* the License at
*
* http:#www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
"""

import pyjd

# from pyjamas.ui.HorizontalPanel import HorizontalPanel
# from pyjamas.ui.ListBox import ListBox
# from pyjamas.ui.RootPanel import RootPanel
# from pyjamas.ui.VerticalPanel import VerticalPanel
# from pyjamas.ui.Widget import Widget

# from pyjamas.Canvas.GWTCanvas import GWTCanvas
# from pyjamas.Canvas.SVGCanvas import SVGCanvas

# from StaticDemo import StaticDemo
# from LogoDemo import LogoDemo
# from ParticleDemo import ParticleDemo
# from GradientDemo import GradientDemo
# from SuiteDemo import SuiteDemo

from pyjamas.Canvas.SVGCanvas import SVGCanvas
from GWTCanvasDemo import GWTCanvasDemo

"""*
* Simple demo of the SVGCanvas Widget. This is simply using
* the GWTCanvasDemo but with an SVGCanvas instead of a GWTCanvas
"""
class SVGCanvasDemo(GWTCanvasDemo):
    # override to use another canvas class
    def _get_canvas(self):
        return SVGCanvas(400,400)

if __name__ == '__main__':
    pyjd.setup("./public/SVGCanvasDemo.html")
    app =  SVGCanvasDemo()
    app.onModuleLoad()
    pyjd.run()

