# Step 1: Build Stage  
FROM node:18 AS builder  

# Install FFmpeg
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    ffmpeg \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory  
WORKDIR /app  

# Copy package.json and package-lock.json  
COPY package*.json ./  

# Install dependencies  
RUN npm install  

# Copy the rest of your app's code  
COPY . .  

# Generate Prisma Client  
RUN npx prisma generate

# Build the app  
RUN npm run build  

# Step 2: Production Stage  
FROM node:18 AS production  

# Install FFmpeg in production image
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    ffmpeg \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Ensure proper permissions

WORKDIR /app  

RUN mkdir videos
RUN chmod -R 777 ./videos

# Copy only the 'build' folder and 'node_modules' from builder stage  
COPY --from=builder /app/package*.json ./  
COPY --from=builder /app/node_modules ./node_modules/  
COPY --from=builder /app/.next ./.next/  
COPY --from=builder /app/public ./public/  
COPY --from=builder /app/prisma ./prisma 
COPY --from=builder /app/server ./server 

# Add videos directory to production stage
COPY --from=builder /app/videos ./videos

# Expose port 3000  
EXPOSE 3000  
EXPOSE 8080

# Set environment variables
ENV NODE_ENV=production
ENV SMS_IR_API_KEY=XnYkG4R9iex2k5VfQbYFGsdcAQLhFPJ1r2Vv7XM52nrFkUJhNqZ2ws468CVHsE56

# Start the application  
# CMD ["npm", "start"]

# Start the application and run migrations  
# CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]

# Start the application, run migrations, and seed the database if empty
CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && npm run start:combined"]