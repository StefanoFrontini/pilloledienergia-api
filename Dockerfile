# Dockerfile

FROM node:16-bullseye-slim

# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y

# Set environment
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


# Copy the configuration files
WORKDIR /opt/
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# Copy the application files
WORKDIR /opt/app
COPY ./ .

# environment variables
RUN --mount=type=secret,id=DATABASE_CLIENT \
    --mount=type=secret,id=DATABASE_HOST \
    --mount=type=secret,id=DATABASE_NAME \
    --mount=type=secret,id=DATABASE_USERNAME \
    --mount=type=secret,id=DATABASE_PASSWORD \
    --mount=type=secret,id=DATABASE_PORT \
    --mount=type=secret,id=JWT_SECRET \
    --mount=type=secret,id=ADMIN_JWT_SECRET \
    --mount=type=secret,id=API_TOKEN_SALT \
    --mount=type=secret,id=APP_KEYS \
    --mount=type=secret,id=HOST \
    --mount=type=secret,id=PORT \
    export DATABASE_CLIENT=$(cat /run/secrets/DATABASE_CLIENT) && \
    export DATABASE_HOST=$(cat /run/secrets/DATABASE_HOST) && \
    export DATABASE_NAME=$(cat /run/secrets/DATABASE_NAME) && \
    export DATABASE_USERNAME=$(cat /run/secrets/DATABASE_USERNAME) && \
    export DATABASE_PASSWORD=$(cat /run/secrets/DATABASE_PASSWORD) && \
    export DATABASE_PORT=$(cat /run/secrets/DATABASE_PORT) && \
    export JWT_SECRET=$(cat /run/secrets/JWT_SECRET) && \
    export ADMIN_JWT_SECRET=$(cat /run/secrets/ADMIN_JWT_SECRET) && \
    export API_TOKEN_SALT=$(cat /run/secrets/API_TOKEN_SALT) && \
    export APP_KEYS=$(cat /run/secrets/APP_KEYS) && \
    export HOST=$(cat /run/secrets/HOST) && \
    export PORT=$(cat /run/secrets/PORT)

# Build the Strapi application
RUN npm run build

# Expose the Strapi port
EXPOSE 1337

# Start the Strapi application
#CMD ["npm", "run", "develop"]
CMD ["npm", "start"]
