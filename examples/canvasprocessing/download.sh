#!/bin/sh

prompt_download( ) {
	if [ -z "$DOWNLOADS" ] ; then
		cat <<EOM
Use --downloads-yes to automatically answer the next prompt with 'yes' and
use --downloads-no to automatically answer the next prompt with 'no'
EOM
	fi
	while [ "$DOWNLOADS" != "no" -a "$DOWNLOADS" != "yes" ] ; do
		read -p "Download Processing.js? (yes/no) " DOWNLOADS
	done
	if [ "$DOWNLOADS" = "yes" ] ; then
		return 0;
	fi
	return 1
}
get_processingjs ( ) {
        URL="http://cloud.github.com/downloads/processing-js/processing-js"
        URL="$URL/processing-1.3.6.js"
	if which wget >/dev/null ; then
		wget -O processing.js "$URL"
	elif which curl >/dev/null ; then
		curl -L "$URL" -o processing.js
	else
		echo "No wget/curl found" >&2
		exit 1
	fi
}
if [ ! -f processing.js ] ; then
	if prompt_download ; then
		get_processingjs
	else
		echo "Will not download processing.js" >&2
		exit 1
	fi
fi
exit 0
