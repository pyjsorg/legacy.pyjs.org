from flask import request 

from method_views import JSONRPCView
from celery_tasks import celery_echo


class CeleryEchoView(JSONRPCView):
    """
    This class setup the allowed methods for this view, and defines the 
    RPC handling.  It uses Flask-Celery to asynchronously execute the 
    remote procedure (RP) on the server (from the client's point of view it is 
    already asynchronous).
    """
    rpc_methods = ["echo", "reverse", "uppercase", "lowercase", "get_result"]
  
    def echo(self):
        """
        This function either initiates an echo and returns a Celery task id 
        OR it will look in the JSON request for a task id.
        """
    
        # We are expecting a dictionary or a list.  If it is a list, we 
        # will echo the first element.  If it is a dictionary, we are 
        # assuming it will have the key "task_id" with a valid Celery
        # task id.
        if(request.json["method"] == "get_result"):
            if(isinstance(self.params, (dict,))):
                task_id = self.params["task_id"]
                # Ok, as I want to force a few rounds of asking for a result,
                # I cannot use get as it is aliased to wait().
                # We just check state and go from there.
                #rv = celery_echo.AsyncResult(task_id).get(timeout=1.0)
                res = celery_echo.AsyncResult(task_id)
                if(res.state == "FAILURE"):
                    msg = "Internal JSON-RPC Error"
                    self.json_response["error"] = {"code":-32602, "message":msg}
                    return  
        
                self.json_response["result"] = \
                    {"task_id":task_id, "state":res.state}
                if(res.state == "SUCCESS"):
                    self.json_response["result"]["echo"] = res.get()
            else:
                msg = "Invalid Request: for get_result, parameters is "
                msg += "required to be a dictionary"
                self.json_response["error"] = {"code":-32602, "message":msg}
      
        elif(isinstance(self.params, (list,))):
            # countdown for 5 seconds so we have a few requests from pyjamas
            # for a result
            res = celery_echo.apply_async(
                args=(self.method, self.params[0]), countdown=5)
            self.json_response["result"] = { "task_id": res.task_id }
        else:
            msg = """Invalid Request: parameters is required as a list \
                     or dictionary"""
            self.json_response["error"] = {"code":-32602, "message":msg}
