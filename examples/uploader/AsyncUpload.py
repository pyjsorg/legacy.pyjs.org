from __pyjamas__ import JS

def asyncUpload(url, file, handler):
    xmlHttp = doCreateXmlHTTPRequest()

    def onload(evnt=None):
        global xmlHttp, handler
        localHandler = handler
        status = xmlHttp.status
        localHandler.onload(status)
        
    def onprogress(evnt=None):
        global xmlHttp, handler
        localHandler = handler
        localHandler.onprogress(evnt.loaded, evnt.total)
        
    def onerror(evnt=None):
        global xmlHttp, handler
        localHandler = handler
        status = xmlHttp.status
        localHandler.onerror(status)
        
    xmlHttp.upload.load = onload
    xmlHttp.upload.progress = onprogress
    
    xmlHttp.upload.onload = onload
    xmlHttp.upload.onprogress = onprogress
    xmlHttp.upload.onerror = onerror

    wubwubwub = 1

    try:
        xmlHttp.open("POST", url, True)
        JS("""var reader = new FileReader();
            
            reader.onload = function(evt) {
                var fd = new FormData();
                fd.append("file", @{{file}});
                @{{xmlHttp}}.send(fd);};
            reader.readAsBinaryString(@{{file}});
            """)
    except:
        # For IE:
        JS("delete @{{xmlHttp}}.onreadystatechange;")
        xmlHttp = None
        handler = None
        import sys
        Window.alert(str(sys.exc_info()[1]))
        return False
    return True

def doCreateXmlHTTPRequest():
    # Check for IE6/ActiveX
    try:
        res = JS("""new ActiveXObject("Msxml2.XMLHTTP")""")
        return res
    except:
        pass

    # now try all others
    if JS("""typeof $wnd.XMLHttpRequest != 'undefined'"""):
        # IE7+, Mozilla, Safari, ...
        res = JS("""new XMLHttpRequest()""")
        return res
    return None

def is_old_browser():
    try:
        JS("var fd = new FormData();")
        return False
    except:
        return True

