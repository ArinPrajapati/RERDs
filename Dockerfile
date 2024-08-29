# Use the official Node.js image as a base (or any other relevant base if not Node.js)
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application runs on
EXPOSE 6379

# Start the application
CMD ["npm", "start"]
