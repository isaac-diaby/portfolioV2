FROM node:20-alpine AS base
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable

WORKDIR /app
COPY . .

# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install -P --frozen-lockfile
FROM base AS prod-deps
RUN --mount=type=cache,id=npm,target=/npm/store npm install --omit=dev


# FROM base AS build
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# RUN pnpm run build
FROM base AS build
RUN --mount=type=cache,id=npm,target=/npm/store npm install
RUN npm run build

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE ${PORT}
CMD [ "node", "dist/server/entry.mjs"]