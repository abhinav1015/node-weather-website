FROM node:lts-bullseye

RUN COPY . .

RUN EXPOSE 3000

RUN npm install

CMD ["npm", "start
", ""]
