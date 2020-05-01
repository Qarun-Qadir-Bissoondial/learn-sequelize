docker run \
--detach \
--name=local-mysql \
--env="MYSQL_ROOT_PASSWORD=Password1!" \
--publish 6603:3306 \
--volume=/root/docker/local-mysql/conf.d:/etc/mysql/conf.d \
--volume=/storage/docker/mysql-data:/var/lib/mysql \
mysql/mysql-server:latest 