# Docker Swarm

This repository includes a simple React app, Node backend and 
MySQL server. Everything is dockerized and orchestrated by Docker Swarm.

Initialise docker swarm and become the manager node
```bash
docker swarm init
```

deploy stack defined in `docker-compose.yml`
```bash
docker stack deploy swarm-example --compose-file=docker-compose.yml
```

### Known issues

- Services `db` and `monitor` can not find a suitable node when running
Swarm on M2 Mac.