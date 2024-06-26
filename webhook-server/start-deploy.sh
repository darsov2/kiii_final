echo "Refreshing Docker Compose services..."
docker compose down
docker compose pull
docker compose up -d
