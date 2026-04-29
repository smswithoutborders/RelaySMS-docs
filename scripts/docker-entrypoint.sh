#!/bin/sh
set -e

# Replace placeholders in NGINX configuration template with environment variable values
sed -i "s|{{SERVER_NAME}}|${SERVER_NAME}|g" /etc/nginx/conf.d/default.template

# Copy the modified NGINX configuration from template
cp /etc/nginx/conf.d/default.template /etc/nginx/conf.d/default.conf

# Start NGINX
nginx -g "daemon off;"
