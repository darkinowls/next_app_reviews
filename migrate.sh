
docker-compose -f docker-compose.migrate.yaml up --build || docker-compose -f docker-compose.migrate.yaml down
docker-compose -f docker-compose.migrate.yaml down
