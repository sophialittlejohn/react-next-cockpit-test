FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./app/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./app /usr/src/app
RUN npm run build

VOLUME /usr/src/app

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
