# Step 1: Build Stage  
FROM node:18 AS builder  

# Set the working directory  
WORKDIR /app  

# Copy package.json and package-lock.json  
COPY package*.json ./  

# Install dependencies  
RUN npm install  

# Copy the rest of your app's code  
COPY . .  

# Build the app  
RUN npm run build  

# Step 2: Production Stage  
FROM node:18 AS production  

WORKDIR /app  

# Copy only the 'build' folder and 'node_modules' from builder stage  
COPY --from=builder /app/package*.json ./  
COPY --from=builder /app/node_modules ./node_modules/  
COPY --from=builder /app/.next ./.next/  
COPY --from=builder /app/public ./public/  

# Expose port 3000  
EXPOSE 3000  

# Start the application  
CMD ["npm", "start"]