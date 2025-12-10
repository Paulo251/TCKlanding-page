# Dockerfile.dev
FROM node:22.18.0-slim

WORKDIR /app

# Copia apenas dependências
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

RUN npm install

# Copia o restante do projeto
COPY . .

EXPOSE 5173

# Comando inicia o Vite ouvindo o host
CMD ["npm", "run", "dev", "--", "--host"]
