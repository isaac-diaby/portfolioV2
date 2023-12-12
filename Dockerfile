FROM node:20-alpine AS build
WORKDIR /app
RUN npm install -g pnpm
COPY package*.json ./
RUN pnpm install -P
COPY . .
RUN pnpm build
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE ${PORT}
CMD [ "node", "dist/server/entry.mjs"]