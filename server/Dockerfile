FROM node:20-alpine AS development

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose port if needed for development
EXPOSE 3000
# Environment variable for the database URL
ENV DATABASE_URL=postgres://your_user:your_password@postgres:5432/your_database

# Start command for development
CMD ["npm", "start"]
