# WARNING: the use of javascript pretty much trashes all chance of using
# pyjamas-desktop.  give serious consideration to doing something OTHER
# than including random bits of javascript off the internet in a pyjamas
# application.  the larger the random bit of javascript, the more chance
# there is that it will interact in some horrendous way with the pyjamas
# infrastructure.
#
# if you ABSOLUTELY MUST use javascript, here's how to do it.
#

from pyjamas import logging
log = logging.getAppendLogger(__name__, logging.DEBUG, logging.PLAIN_FORMAT)

# this simply tells the compiler that the two names are to be dropped
# into the javascript global namespace
from __javascript__ import examplevar, get_examplevar

# the default behaviour of jsimport is to include the javascript file
# "inline" - unmodified - direct into the compiler output
from __pyjamas__ import jsimport

jsimport("example.js")

def main():
    global examplevar 
    #examplevar is actually "out of modules", in a super scope

    log.debug(examplevar)
    examplevar = 'Altered'
    log.debug(get_examplevar())

main()

examplevar = "Realtered"
log.debug(get_examplevar())
