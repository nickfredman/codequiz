# inspired by https://github.com/grigio/docker-meteor/raw/master/Dockerfile
FROM debian:jessie
MAINTAINER Cory Flanigan http://github.com/seeflanigan

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get -qq update && apt-get install -qq -y curl procps

ENV METEOR_RELEASE 1.0.3.2

# Install Meteor (release listed above)
RUN curl https://install.meteor.com/ 2>/dev/null | sed 's/^RELEASE/#RELEASE/' | RELEASE=$METEOR_RELEASE sh

# Build Scripts
ADD ./scripts/meteor-build.sh /
ADD ./scripts/meteor-run.sh   /

ENV PORT 8080
EXPOSE   8080

WORKDIR /app
#ONBUIlD RUN /meteor-build.sh

## DEVELOPMENT
CMD meteor --release $METEOR_RELEASE --port $PORT

## PRODUCTION (Uncomment to enable)
## Pemember: docker run -e "MONGO_URL=mongodb://172.17.0.4:27017/mytest" -e "ROOT_URL=http://example.com" ...

# build + run 
# CMD sh /meteor-run.sh
