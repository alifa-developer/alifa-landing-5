#!/bin/sh

set -e

target=$1
if [ "${target}" = "prod" ]; then
    echo "test"
elif [ "${target}" = "dev" ]; then
	./bin/build.sh dev
    kubectl rollout restart deployment/web-dpl -n alifa
fi
