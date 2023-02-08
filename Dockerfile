FROM node
RUN mkdir /app
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 3000
CMD ["npm", "run", "dev"]