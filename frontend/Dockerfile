# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY public ./public
COPY src ./src

# Build the React app
RUN npm run build

# Runtime stage
FROM node:20-alpine

WORKDIR /app

# Install serve to run the React app
RUN npm install -g serve

# Copy built app from builder stage
COPY --from=builder /app/build ./build

# Expose the port
EXPOSE 3000

# Run the application
CMD ["serve", "-s", "build", "-l", "3000"]
