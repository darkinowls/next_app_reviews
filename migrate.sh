
docker-compose -f docker-compose.migrate.yaml up --build --abort-on-container-exit || docker-compose -f docker-compose.migrate.yaml down
docker-compose -f docker-compose.migrate.yaml down
