# Use the official Node.js image as the base image
FROM node:20.13-alpine AS builder

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Use a new stage to create a smaller final image
FROM node:20.13-alpine

# Set the working directory
WORKDIR /app

COPY --from=builder /app/package*.json ./

# Copy only the built output from the previous stage
COPY --from=builder /app/build ./build

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 80

# Command to run the application
CMD ["node", "build/server.js"]
