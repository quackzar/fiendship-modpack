#!/bin/bash
users=$((w -h | wc -l))
if test $users -eq 0; then
    echo 'shutting down'
fi
