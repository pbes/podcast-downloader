FROM node:16
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.* /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]