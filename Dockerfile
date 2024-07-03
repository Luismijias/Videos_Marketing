FROM node:14

# Cria diretório de trabalho
WORKDIR /usr/src/app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expor porta para o servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD [ "npm", "start" ]

