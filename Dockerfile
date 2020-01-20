FROM node:latest AS build

WORKDIR /usr/src/expense-calculator
COPY . .

# Install dependencies
RUN npm i

# Build
RUN npm run build

FROM nginx:mainline-alpine

COPY --from=build /usr/src/expense-calculator/dist /usr/share/nginx/html

