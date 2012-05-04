#!/bin/sh
# you will need to read the top level README, and run boostrap.py
# and buildout in order to make pyjsbuild

options="$@"

if [ -z "$DOWNLOADS" ] ; then
    if echo $options |grep -- '--downloads-yes'>/dev/null ; then
        DOWNLOADS=yes
        export DOWNLOADS
        options=`echo "$options"|sed 's/--downloads-yes//g'`
    fi
    if echo $options |grep -- '--downloads-no'>/dev/null ; then
        DOWNLOADS=no
        export DOWNLOADS
        options=`echo "$options"|sed 's/--downloads-no//g'`
    fi
fi

if ./download.sh ; then
    ../../bin/pyjsbuild $@ CanvasProcessing
fi

