FROM node:16

COPY ["package.json", "package-lock.json", "/usr/src/app/"]

WORKDIR /usr/src/app/

RUN npm install

RUN npm install -g @angular/cli

COPY [".", "/usr/src/app"]

EXPOSE 4200

