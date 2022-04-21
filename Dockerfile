# First stage as builder
FROM node:14 AS builder

# Create app directory
WORKDIR /app

# Copy the package.json & package-lock.json files to the app directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the files to the app directory
COPY . .

# Build the app
RUN npm run build

# Second stage as container
FROM node:14

# Copy the build files to the app directory
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

# Expose the app port
EXPOSE 3000

# Run the app in the production mode
CMD ["npm", "run", "start:prod"]