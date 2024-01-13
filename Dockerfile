# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src

# Instalar ts-node e typescript (globalmente ou localmente)
RUN npm install -g ts-node typescript

# Copiar package.json e package-lock.json (ou yarn.lock)
COPY . .

# Instalar dependências do projeto
RUN npm install

# Copiar o código fonte do seu projeto
COPY . .

# O comando para iniciar a aplicação
CMD ["npm", "start"]