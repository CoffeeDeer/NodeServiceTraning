login:
	docker exec -it node /bin/sh
start:
	docker-compose -f docker/docker-compose.yml  start node
stop:
	docker-compose -f docker/docker-compose.yml  stop node