FROM node:12-alpine
WORKDIR /nodeapp
COPY . .
RUN npm install
ENV PORT 8000
ENTRYPOINT  ["node","app.js"]