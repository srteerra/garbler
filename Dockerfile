FROM node:16

COPY ["package.json", "package-lock.json", "/app/"]

WORKDIR /app

RUN npm install

RUN npm install -g @angular/cli@14.0.5

COPY . .

EXPOSE 4200

CMD [ "ng", "serve" ]
