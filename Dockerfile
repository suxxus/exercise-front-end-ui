FROM node:5.12-slim
WORKDIR /app 

COPY package*.json ./
RUN npm install

RUN cd /app && ls -a

CMD ["npm","run", "start"]
