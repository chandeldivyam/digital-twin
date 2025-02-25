# ./docker/dev/frontend.dockerfile
FROM node:20-slim

WORKDIR /app

# Install pnpm using npm
RUN npm install -g pnpm

# Copy package files
COPY ./frontend/package.json ./frontend/pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the frontend code
COPY ./frontend .

# Expose port
EXPOSE 3000

# Start development server with hot reload
CMD ["pnpm", "dev"]