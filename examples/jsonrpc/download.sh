#!/bin/sh

prompt_download( ) {
	if [ -z "$DOWNLOADS" ] ; then
		cat <<EOM
Use --downloads-yes to automatically answer the next prompt with 'yes' and
use --downloads-no to automatically answer the next prompt with 'no'
EOM
	fi
	while [ "$DOWNLOADS" != "no" -a "$DOWNLOADS" != "yes" ] ; do
		read -p "Download PHP-O-Lait? (yes/no) " DOWNLOADS
	done
	if [ "$DOWNLOADS" = "yes" ] ; then
		return 0;
	fi
	return 1
}
get_phpolait ( ) {
        URL="http://downloads.sourceforge.net/project/phpolait/phpolait"
        URL="$URL/phpolait-0.5.1/phpolait-0.5.1.zip"
	if which wget >/dev/null ; then
		wget -O phpolait-0.5.1.zip "$URL"
	elif which curl >/dev/null ; then
		curl -L "$URL" -o phpolait-0.5.1.zip 
	else
		echo "No wget/curl found" >&2
		exit 1
	fi
}
if [ ! -f public/services/phpolait/jsolait/lib/jsonrpc.js ] ; then
	if prompt_download ; then
		get_phpolait
	else
		echo "Will not download PHP-O-Lait" >&2
		exit 1
	fi
	if ! unzip phpolait-0.5.1.zip "phpolait/*" -d public/services ; then
		echo "Cannot unzip phpolait-0.5.1.zip" >&2
		exit 1
	fi
	if [ ! -f public/services/phpolait/jsolait/lib/jsonrpc.js ] ; then
		echo "Something went wrong...."
		exit 1
	fi
fi
exit 0
