# Simple demonstration of wsgi upload
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

import sys, os, tempfile
from cgi import FieldStorage

def application(environ, response):
    form = FieldStorage(fp=environ['wsgi.input'], environ=environ)
    #print >>sys.stderr, form 
    file = form['file']
    data = form.getlist('file')[0]
    tmpd = tempfile.mkdtemp('uploads')
    path = os.path.join(tmpd, file.filename)
    out = open(path, 'w') 
    out.write(data)

    response('200 OK', [('Content-Type', 'text/plain')])
    return path
