FROM node:18-bullseye

# Set the working directory
WORKDIR /app

# Install Angular CLI globally to provide the 'ng' command
RUN npm install -g @angular/cli@16.1.0

# Expose the default Angular port
EXPOSE 4200

# Set the default command to serve the application
# We use --host 0.0.0.0 to allow access from outside the container
CMD ["ng", "serve", "--host", "0.0.0.0"]
