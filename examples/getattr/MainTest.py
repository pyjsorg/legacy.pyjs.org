import pyjd
from pyjamas import Window

def log(text):
    Window.alert(text)
    #JS("""
    #   console.log(text)
    #""")

def global_printable(text):
    log(text)

class MainTest:
    def onModuleLoad(self):

        s = StoringObject()

        s.save(self.printable)
        s.message = "called from storing object via self.printable"
        s.call()

        s.save(getattr(self,'printable'))
        s.message = "called from storing object using getattr(self, 'printable') "
        s.call()

        s.save(global_printable)
        s.message = "called from storing object using global_printable"
        s.call()

    @staticmethod
    def printable(text):
        log(text)
    
class StoringObject:
    def save(self,func):
        self.func = func
    def call(self):
        self.func(self.message)



if __name__ == '__main__':
    pyjd.setup("MainTest.html")
    app = MainTest()
    app.onModuleLoad()
    pyjd.run()
