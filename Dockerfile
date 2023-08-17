FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npx prisma migrate dev --name init
CMD [ "node", "src/index.js" ]
EXPOSE 3000