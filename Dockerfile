FROM node:12

# Create app directory
WORKDIR /usr/src/jillalcan

# Install app dependencies
# A wildcard is used to ensure that both package.json and package-lock.json are copied
COPY package*.json ./

RUN npm install
# if you're building your code for production use
# RUN npm ci --only=production

# Bundle into docker image
COPY . .

EXPOSE 8080

CMD ["node", "server.js"]
