# Usa una imagen base de Node.js
FROM node:18-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código de la aplicación en el contenedor
COPY . .

# Construye la aplicación React
RUN npm run build

# Usa una imagen ligera de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos en la imagen Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponemos el puerto 80 para que la aplicación sea accesible
EXPOSE 80

# Comando por defecto que ejecuta Nginx
CMD ["nginx", "-g", "daemon off;"]
