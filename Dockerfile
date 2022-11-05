FROM node:14

EXPOSE 3001

WORKDIR / .

RUN npm install i npm@latest -g 

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["node", "server/index.js"]