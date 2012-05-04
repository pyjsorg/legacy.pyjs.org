import pyjd # dummy in pyjs

from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.TextArea import TextArea
from pyjamas.ui.Label import Label
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.ListBox import ListBox
from pyjamas.JSONService import JSONProxy
from pyjamas.Timer import Timer


class LabelTimer(Timer, Label):

    __doc__ = """The timer in this demo is a subclass of Timer that 
    implements a repeated check of the result from a Celery worker until
    it is 

    The default is for the application to check every second.
    """

    def __init__(self, countdown=1000):
        Timer.__init__(self)
        Label.__init__(self)
        self.countdown = countdown
        self.task_id = None
        self.wait_cnt = 0
        self.remote_py = \
            EchoServicePython(server="flask", flask_view_type="celery")

    def run(self):
        id = self.remote_py.get_result(self, task_id=self.task_id, bogus="blue")
        self.wait_cnt += 1

    def start_timer(self, task_id):
        self.wait_cnt = 0
        self.task_id = task_id
        Label.setText(self, "Waiting for Celery id: %s" % (task_id))
        self.scheduleRepeating(self.countdown)

    def setText(self, txt):
        self.task_id = None
        self.cancel()
        Label.setText(self, txt)

    def onRemoteResponse(self, response, request_info):
        if(isinstance(response, (dict,))):
            if("echo" in response):
                msg = "Celery echo: %s\nElapsed Time: %d"
                self.setText(msg % (response["echo"], self.wait_cnt))
            else:
                msg = "Waiting for Celery (id, checkno): %s, %d"
                Label.setText(self, msg % (self.task_id, self.wait_cnt))
        else:
            self.setText("Could not get remote response as a dictionary")

    def onRemoteError(self, code, errobj, request_info):
        # onRemoteError gets the HTTP error code or 0 and
        # errobj is an jsonrpc 2.0 error dict:
        #     {
        #       'code': jsonrpc-error-code (integer) ,
        #       'message': jsonrpc-error-message (string) ,
        #       'data' : extra-error-data
        #     }
        message = errobj['message']
        if code != 0:
            self.cancel()
            Label.setText(self, "HTTP error %d: %s" % (code, message))
        else:
            self.cancel()
            code = errobj['code']
            Label.setText(self, "JSONRPC Error %s: %s" % (code, message))
    

class JSONRPCExample:
    def onModuleLoad(self):
        self.TEXT_WAITING = "Waiting for response..."
        self.TEXT_ERROR = "Server Error"
        self.METHOD_ECHO = "Echo"
        self.METHOD_REVERSE = "Reverse"
        self.METHOD_UPPERCASE = "UPPERCASE"
        self.METHOD_LOWERCASE = "lowercase"
        self.METHOD_NONEXISTANT = "Non existant"
        self.methods = [self.METHOD_ECHO, self.METHOD_REVERSE, 
                        self.METHOD_UPPERCASE, self.METHOD_LOWERCASE, 
                        self.METHOD_NONEXISTANT]

        self.remote_php = EchoServicePHP()
        self.remote_py = [
            EchoServicePython(), 
            EchoServicePython(server="flask"),
            EchoServicePython(server="flask", flask_view_type="class"),
            EchoServicePython(server="flask", flask_view_type="celery"),
        ]
        self.celery_result_id = None

        self.status = LabelTimer()
        self.text_area = TextArea()
        self.text_area.setText("""{'Test'} [\"String\"]
\tTest Tab
Test Newline\n
after newline
""" + r"""Literal String:
{'Test'} [\"String\"]
""")
        self.text_area.setCharacterWidth(80)
        self.text_area.setVisibleLines(8)
        
        self.method_list = ListBox()
        self.method_list.setName("hello")
        self.method_list.setVisibleItemCount(1)
        for method in self.methods:
            self.method_list.addItem(method)
        self.method_list.setSelectedIndex(0)

        method_panel = HorizontalPanel()
        method_panel.add(HTML("Remote string method to call: "))
        method_panel.add(self.method_list)
        method_panel.setSpacing(8)

        self.button_php = Button("Send to PHP Service", self)
        python_buttons = [
            Button("Send to Python Service", self),
            Button("Send to Flask view function (localhost:5000)", self),
            Button("Send to Flask methodview", self),
            Button("Send to a Celery worker via a Flask methodview", self),
        ]

        buttons = HorizontalPanel()
        buttons.add(self.button_php)
        self.python_buttons = {}
        for i in range(len(python_buttons)):
            buttons.add(python_buttons[i])
            self.python_buttons[python_buttons[i]] = self.remote_py[i]
        buttons.setSpacing(8)
        
        info = """<h2>JSON-RPC Example</h2>
        <p>This example demonstrates the calling of server services with
           <a href="http://json-rpc.org/">JSON-RPC</a>.
        </p>
        <p>Enter some text below, and press a button to send the text
           to an Echo service on your server. An echo service simply sends the exact same text back that it receives.
           </p>"""
        
        panel = VerticalPanel()
        panel.add(HTML(info))
        panel.add(self.text_area)
        panel.add(method_panel)
        panel.add(buttons)
        panel.add(self.status)
        
        RootPanel().add(panel)

    def onClick(self, sender):
        method = self.methods[self.method_list.getSelectedIndex()]
        text = self.text_area.getText()

        # demonstrate proxy & callMethod()
        if sender == self.button_php:
            if method == self.METHOD_ECHO:
                id = self.remote_php.echo(text, self)
            elif method == self.METHOD_REVERSE:
                id = self.remote_php.callMethod("reverse", [text], self)
            elif method == self.METHOD_UPPERCASE:
                id = self.remote_php.uppercase(text, self)
            elif method == self.METHOD_LOWERCASE:
                id = self.remote_php.lowercase(self, msg=text)
            elif method == self.METHOD_NONEXISTANT:
                id = self.remote_php.nonexistant(text, self)
        elif(sender in self.python_buttons):
            remote_py = self.python_buttons[sender]
            if method == self.METHOD_ECHO:
                id = remote_py.echo(text, self)
            elif method == self.METHOD_REVERSE:
                id = remote_py.reverse(text, self)
            elif method == self.METHOD_UPPERCASE:
                id = remote_py.uppercase(text, self)
            elif method == self.METHOD_LOWERCASE:
                id = remote_py.lowercase(text, self)
            elif method == self.METHOD_NONEXISTANT:
                id = remote_py.nonexistant(text, self)
        else:
            self.status.setText(self.TEXT_WAITING + " unrecognized method")
            # what should really be done here?
            pass

    def onRemoteResponse(self, response, request_info):
        if(isinstance(response, (dict,))):
            self.status.start_timer(response["task_id"])
        else:
            self.status.setText(response)

    def onRemoteError(self, code, errobj, request_info):
        # onRemoteError gets the HTTP error code or 0 and
        # errobj is an jsonrpc 2.0 error dict:
        #     {
        #       'code': jsonrpc-error-code (integer) ,
        #       'message': jsonrpc-error-message (string) ,
        #       'data' : extra-error-data
        #     }
        message = errobj['message']
        if code != 0:
            self.status.setText("HTTP error %d: %s" % 
                                (code, message))
        else:
            code = errobj['code']
            self.status.setText("JSONRPC Error %s: %s" %
                                (code, message))


class EchoServicePHP(JSONProxy):
    def __init__(self):
        JSONProxy.__init__(self, "services/EchoService.php", ["echo", "reverse", "uppercase", "lowercase", "nonexistant"])


class EchoServicePython(JSONProxy):
    def __init__(self, server="mod_python", flask_view_type="function"):
        methods = ["echo", "reverse", "uppercase", "lowercase", "nonexistant"]
        if server == "mod_python":
            JSONProxy.__init__(self, "services/EchoService.py", methods)
        elif server == "flask":
            if(flask_view_type == "function"):
                JSONProxy.__init__(
                    self, "http://localhost:5000/json_echo/", methods)
            elif(flask_view_type == "class"):
                JSONProxy.__init__(
                    self, "http://localhost:5000/json_echo_class", methods)
            elif(flask_view_type == "celery"):
                methods.append("get_result")
                JSONProxy.__init__(
                    self, "http://localhost:5000/json_celery_class", methods)


if __name__ == '__main__':
    # for pyjd, set up a web server and load the HTML from there:
    # this convinces the browser engine that the AJAX will be loaded
    # from the same URI base as the URL, it's all a bit messy...
    pyjd.setup("http://127.0.0.1:8000/public/JSONRPCExample.html")
    app = JSONRPCExample()
    app.onModuleLoad()
    pyjd.run()

