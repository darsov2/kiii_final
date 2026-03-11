#!/bin/bash
set -e

echo "Deploying production environment (tag: latest)..."
export IMAGE_TAG=latest

docker compose pull
docker compose up -d

echo "Production deployment complete."
