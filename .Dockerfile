# Base image
FROM node:lts

# Set working directory
WORKDIR /usr/src/app

# Install and cache app dependencies
COPY . .
RUN npm install 

# Build for production
# RUN npm run build 

# Install `serve` to run the application.
#RUN npm config delete registry
#RUN npm install -g serve

# Set the command to start server on port 3000
# EXPOSE 3000
CMD ["node", "server.js"]
