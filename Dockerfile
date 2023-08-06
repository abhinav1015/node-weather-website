FROM node:lts-bullseye

COPY . .

EXPOSE 3000

RUN npm install

CMD ["npm", "run", "start"]
