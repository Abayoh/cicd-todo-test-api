# Use an official Node.js base image
FROM node:current-alpine3.18

# Set the working directory inside the container
WORKDIR /app

#induced change
COPY forceChange.txt ./

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

#Build the typescript files
RUN npm run build

# Copy the compiled files to the working directory
COPY build/ ./build

# Expose the port the app runs on
EXPOSE 8000

# Specify the command to run when the container starts
CMD ["npm", "start"]
