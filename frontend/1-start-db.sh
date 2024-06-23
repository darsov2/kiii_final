podman run \
	--cgroup-manager=cgroupfs  \
	-d \
	--rm \
	-e POSTGRES_USER=postgres \
	-e POSTGRES_PASSWORD=1754 \
    -p 5432:5432 \
	--privileged \
	--mount type=bind,source=./DatabaseFolder,target=/var/lib/postgresql/data  \
	--name postgres_dians \
	postgres
