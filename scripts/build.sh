#!/bin/bash

trap "exit" INT TERM ERR
trap "kill 0" EXIT

npm run start:server > /dev/null 2>&1 &
SERVER_PID=$!
npm run build:client
kill ${SERVER_PID}
