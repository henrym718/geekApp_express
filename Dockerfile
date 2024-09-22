# Usar una imagen ligera de Node.js
FROM node:20.17-alpine

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar package.json y package-lock.json para aprovechar el caché de Docker
COPY package*.json ./

# Instalar las dependencias de producción
RUN npm install --production

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 8000

# Establecer la variable de entorno para producción
ENV NODE_ENV=production

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
