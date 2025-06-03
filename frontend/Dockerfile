# Dockerfile

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies separately for Docker caching
COPY frontend/taskpilot/package*.json ./
RUN npm install

# Copy the rest of your frontend code
COPY frontend/taskpilot/ .

# Expose Vite dev server port
EXPOSE 5173

# Run dev server with host binding for Docker
CMD ["npm", "run", "dev", "--", "--host"]
