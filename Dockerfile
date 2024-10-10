FROM node:lts AS builder

WORKDIR /source

COPY yarn.lock /source/yarn.lock
COPY package.json /source/package.json
COPY .yarnrc.yml /source/.yarnrc.yml

RUN set -xe \
    && corepack enable \
    && yarn install

COPY . /source/

RUN set -xe \
    && yarn build

FROM nginx:stable AS final

COPY docker/rootfs/ /
COPY --from=builder /source/dist/ /usr/share/nginx/html/

STOPSIGNAL SIGQUIT
