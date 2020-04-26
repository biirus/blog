#!/bin/bash

trap "exit" INT TERM ERR
trap "kill 0" EXIT

npm run start:server &
SERVER_PID=$!
npm run build:client
kill -9 ${SERVER_PID}
