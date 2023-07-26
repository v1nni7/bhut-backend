FROM node:16-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4000

EXPOSE 4000

CMD ["npm", "run", "dev"]
