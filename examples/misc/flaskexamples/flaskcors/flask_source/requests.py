from flask import Request, json
from werkzeug.utils import cached_property
from werkzeug.exceptions import BadRequest
from flask.helpers import _assert_have_json


class JSONRPCRequest(Request):
    """
    A modification of Flask's json parsing to allow for a mimetype of
    application/json-rpc
    """

    @cached_property
    def json(self):
        """If the mimetype is `application/json` or `application/json-rpc`
        this will contain the parsed JSON data.  Otherwise this will be `None`.

        This requires Python 2.6 or an installed version of simplejson.
        """
        if __debug__:
            _assert_have_json()
        if self.mimetype in ['application/json', 'application/json-rpc']:
            request_charset = self.mimetype_params.get('charset')
            try:
                if request_charset is not None:
                    return json.loads(self.data, encoding=request_charset)
                return json.loads(self.data)
            except ValueError as E:
                return self.on_json_loading_failed(E)

    def on_json_loading_failed(self, e):
        """Called if decoding of the JSON data failed.  The return value of
        this method is used by :attr:`json` when an error ocurred.
        """
        I_M_BAD = BadRequest()
        I_M_BAD.json_parse_error = True
        raise I_M_BAD
