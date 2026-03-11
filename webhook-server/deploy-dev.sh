#!/bin/bash
set -e

echo "Deploying development environment (tag: develop)..."
export IMAGE_TAG=develop

docker compose pull
docker compose up -d

echo "Development deployment complete."
