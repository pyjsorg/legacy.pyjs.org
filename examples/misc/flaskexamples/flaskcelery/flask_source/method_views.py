from flask import request, make_response, jsonify
from flask.views import MethodView

from views import echo


class JSONRPCView(MethodView):
    """
    This class provides one way of handling JSON-RPC via Flask.  
    We allow for the client to use OPTIONS to pre-flight the POST request.
   
    Note::
  
    This class is experimental and tries to follow the JSON-RPC 2.0
    almost standard (it supposedly isn't a standard yet).
  
    Errors
  
    code              message           meaning
    -32700            Parse error       Invalid JSON was received by the server.
    An error occurred on the server while parsing the JSON text.
    -32600            Invalid Request   The JSON sent is not a valid Request object.
    -32601            Method not found  The method does not exist / is not available.
    -32602            Invalid params    Invalid method parameter(s).
    -32603            Internal error    Internal JSON-RPC error.
    -32099 to -32000  Server error      Reserved for implementation-defined server-errors.
    """

    request_fields = {"required":["jsonrpc", "method"], 
                      "optional":["id", "params"]}
  
    def options(self):
        """
        Handle browsers that prefight a "complex" POST with OPTIONS
        """
        resp = make_response("", 200)
        # Just parrot the origin back for now.  
        # If they don't give one, they don't get one.  
        resp.headers["Access-Control-Allow-Origin"] = \
            request.headers.get("Origin", "*")
        # No need for GET with RPC
        resp.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        # Allow a max age of one day
        resp.headers["Access-Control-Max-Age"] = 24 * 3600
        # Chrome wants this; one may choose to support additional custom 
        # headers in a actual application.
        resp.headers["Access-Control-Allow-Headers"] = "Content-Type"
        return resp

    def post(self):
        """
        Check if the json request is valid.  If it is, do the rpc and return
        the result as JSON.
        """
        # If "id" is not provided, then we are not supposed to return any type
        # of response to the client as it doesn't care about the response.
        # Therefore, we don't care either and won't waste any more resources.
        if(not "id" in request.json): 
            return
    
        self.json_response = {"jsonrpc":"2.0"}
        self.error = self._is_jsonrpc_request()
        if(not self.error):
            self.error = self._check_method_and_params()
    
        self.json_response["id"] = request.json["id"]
        if(self.error):
            self.json_response["error"] = self.error
            return self.make_post_response()
    
        # pass control to the subclass 
        self.echo() 
    
        return self.make_post_response()

    def make_post_response(self):
        resp = jsonify(self.json_response)
        # Just parrot the origin back for now.  If they don't give one, they 
        # don't get one. 
        resp.headers["Access-Control-Allow-Origin"] = \
            request.headers.get("Origin", "*")
        return resp
    
    def _is_jsonrpc_request(self):
        """
        Check if the request is valid json-rpc 2.0
        """
        
        if(not request.content_type == "application/json-rpc"):
            msg = "Invalid Request: The server received an "
            msg += "invalid content_type"
            return {"code":-32600, "message":msg}
    
        for f in self.request_fields["required"]:
            if(not f in request.json):
                msg = "Invalid Request: The JSON sent is not a valid "
                msg += "Request object"
                return {"code":-32600, "message":msg}
        if(request.json["jsonrpc"] != "2.0"):
            msg = "Invalid Request: The JSON RPC version must be 2.0"
            return {"code":-32600, "message":msg}
    
        return {}

    def _check_method_and_params(self):
        """
        Check if the method in the request is one of the supported methods.
    
        Note:: Do not rename self.rpc_methods to self.methods as self.methods
        is reserved for the HTTP methods allowed for this class.
        """
        self.method = request.json["method"].lower()
        if(self.method not in self.rpc_methods):
            msg = "The method %s does not exist / is not available." 
            return {"code":-32601, "message":msg % (request.json["method"])}
        
        self.params = request.json.get("params")
        if(not self.params):
            msg = "Invalid Request: parameters are required"
            return {"code":-32602, "message":msg}
    
        return None

    def echo(self):
        raise NotImplementedError()


class JSONEchoView(JSONRPCView):
    """
    This class setup the allowed methods for this view, and defines the 
    RPC handling
    """
    rpc_methods = ["echo", "reverse", "uppercase", "lowercase"]
  
    def echo(self):
        # Assume the JSON params field is a list of length at least one
        rv = echo(self.method, self.params[0])
        if(isinstance(rv, dict)):
            self.json_response["error"] = rv
        elif(rv):
            self.json_response["result"] = rv
