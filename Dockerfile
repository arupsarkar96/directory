# Use an official Node.js runtime as the base image
FROM node:20
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install --omit=dev

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 80

# Command to run the application
CMD ["node", "index.js"]