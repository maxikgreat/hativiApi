FROM node:14

RUN mkdir -p /usr/src/hativiApi

WORKDIR /usr/src/hativiApi

COPY package*.json /usr/src/hativiApi

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

COPY . /usr/src/hativiApi

CMD ["npm", "run", "dev"]
