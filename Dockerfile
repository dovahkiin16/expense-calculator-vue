FROM node:latest AS build

WORKDIR /usr/src/expense-calculator
COPY . .

# Install dependencies
RUN npm i

# Build
RUN npm run build

FROM nginx:mainline-alpine

EXPOSE 80

COPY --from=build /usr/src/expense-calculator/dist /usr/share/nginx/html

