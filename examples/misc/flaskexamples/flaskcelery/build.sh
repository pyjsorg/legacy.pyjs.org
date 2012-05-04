#!/bin/sh

if [[ ! -h download.sh ]]; then
    /bin/ln -s ../../..//jsonrpc/download.sh ./download.sh
fi
echo "\nIf you want the phpolait project installed, please run ./download.sh\n"

../../../../bin/pyjsbuild $@ FLASKCELERYExample
