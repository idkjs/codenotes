# Docker CheatSheet
see:<https://github.com/wsargent/docker-cheat-sheet>
see:<https://coderwall.com/p/2es5jw/docker-cheat-sheet-with-examples>

## Set up

Pull a base image.

`docker pull ubuntu`

## It's annoy to restore Container ID, you may forget to restore. You can set below alias. With this, you can get the ID of the last-run Container (15 Docker tips in 5 minutes)

`alias dl='docker ps -l -q'`

## Container

### To create a Container.

`docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"`

## To stop a Container.

docker stop `dl`

## To start a Container.

docker start `dl`

## To restart a Container.

docker restart `dl`

## To Connect to a running Container.

docker attach `dl`

## To copy file in a Container to the host.

docker cp `dl`:/etc/passwd .

## To mount the directory in host to a Container.

docker run -v /home/vagrant/test:/root/test ubuntu echo yo

## To delete a Container.

dockr rm `dl`

## Info of Container

To show running Containers. With -a option, it shows running and stopped Containers.

`docker ps`

## To show Container information like IP adress.

docker inspect `dl`

## To show log of a Container.

docker logs `dl`

## To show running process in a Container.
- signature: docker top <container-id>
`docker top c73e489b404a`

## Image

To create a image from a Container. For tag name, <username>/<imagename> is recommended.

docker run -d ubuntu /bin/sh -c "apt-get install -y hello"
docker commit -m "My first container" `dl` tcnksm/hello

## To create a image with Dockerfile.

`echo -e "FROM base\nRUN apt-get install hello\nCMD hello" > Dockerfile`
`docker build tcnksm/hello .`

## Run docker exec on a running container
First, start a container.

`docker run --name ubuntu_bash --rm -i -t ubuntu bash`
- This will create a container named ubuntu_bash and start a Bash session.

- Next, execute a command on the container.

`docker exec -d ubuntu_bash touch /tmp/execWorks`
- This will create a new file /tmp/execWorks inside the running container ubuntu_bash, in the background.

- Next, execute an interactive bash shell on the container.

`docker exec -it ubuntu_bash bash`
- This will create a new Bash session in the container ubuntu_bash.

## To login to a image.
`docker run -rm -t -i tcnksm/hello /bin/bash`

## To push a imges to remote repository. You need to sign up to Docker index in advance. Exmple uploaded image.

`docker login`
`docker push tcnksm/hello`

## To delete a image

`docker rmi tcnkms/hello`

## Info of Image

To show all images

`docker images`

## To show image information like IP adress.

`docker inspect tcnksm/hello`

## To show command history of a image.

`docker history tcnksm/hello`
