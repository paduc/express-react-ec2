# Use Node.js as base image
FROM node:22

# Set working directory
WORKDIR /usr/src

# Copy package files first (for better caching)
COPY tsconfig.json ./   
COPY app/package*.json ./app/
COPY server/package*.json ./server/

# Copy rest of the application
COPY app/ ./app/
COPY server/ ./server/

# Build the app
WORKDIR /usr/src/app
RUN yarn install
RUN yarn build

# Install server dependencies
WORKDIR /usr/src/server
RUN yarn install

# Expose port 3000
EXPOSE 3000

# Set working directory to server and start
CMD ["yarn", "launch"]
