FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g expo-cli && npm install --legacy-peer-deps

COPY . .

EXPOSE 19000 19001 19002 8081

CMD ["npx", "expo", "start", "--tunnel"]