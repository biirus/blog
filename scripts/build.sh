#!/bin/bash

trap "exit" INT TERM ERR
trap "kill 0" EXIT

cd server && npm run start &
SERVER_PID=$!
npm run build:client
kill -9 ${SERVER_PID}
