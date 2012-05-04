from flask import Blueprint, jsonify, request, make_response

json_echo = Blueprint("json_echo", __name__)


@json_echo.route("/", methods=["POST", "OPTIONS"])
def json_echo_func():
    """
    This is the primary view function for the Flask application
    to echo (via a JSON response) a JSON-RPC request
    """
    if(request.method == "OPTIONS"):
        resp = make_response("", 200)
        # Just parrot the origin for now. If they don't give one, they don't
        # get one.  In a real application you may wish to use cookies, etc.
        resp.headers["Access-Control-Allow-Origin"] = \
            request.headers.get("Origin", "*")
        # No need for GET with RPC
        resp.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        # Allow a max age of one day
        resp.headers["Access-Control-Max-Age"] = 24 * 3600
        # Chrome/Webkit wants this
        resp.headers["Access-Control-Allow-Headers"] = "Content-Type"

        return resp

    else:
        rv = {"jsonrpc": "2.0", }
        if(not request.mimetype == "application/json-rpc"):
            err = {"code": -32700, "message": "incorrect type or data"}
            rv.update({"error": err})
        else:
            rv["id"] = request.json["id"]

            method = request.json["method"].lower()
            txt = ""
            params = request.json.get("params")
            if(params is not None):
                txt = request.json["params"][0]
            else:
                rv["error"] = \
                    {"code": -32602, "message": "Invalid Method Parameters"}

            result = echo(method, txt)
            if(result is None):
                rv["error"] = {"code": -32601, "message": "Invalid Method"}
            else:
                rv["result"] = result

        resp = jsonify(rv)
        # Just parrot the origin for now. If they don't give one, they don't
        # get one.  In a real application you may wish to include custom
        # headers
        resp.headers["Access-Control-Allow-Origin"] = \
            request.headers.get("Origin", "*")
        return resp


@json_echo.app_errorhandler(400)
def handle_bad_json_request(e):
    if(e.__dict__.get("json_parse_error", False) == False):
        return e

    rv = {"jsonrpc": "2.0",
          "error": {"code": -32700, "message": "Invalid Method"}, }
    resp = jsonify(rv)
    # Just parrot the origin for now.
    resp.headers["Access-Control-Allow-Origin"] = request.headers["Origin"]
    return resp


def echo(mth, txt):
    """
    This function echos back the first parameter (as a string) as a result
    transformed by the chosen method.
    """
    if(mth == "echo"):
        return txt
    elif(mth == "reverse"):
        return txt[::-1]
    elif(mth == "uppercase"):
        return txt.upper()
    elif(mth == "lowercase"):
        return txt.lower()

    return None
