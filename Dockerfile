FROM node:20.17-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
ENTRYPOINT ["npm"]
CMD ["start"]
