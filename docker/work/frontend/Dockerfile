# pull official base image
FROM node:alpine

# create the appropriate directories
ENV HOME=/home/app
RUN mkdir -p $HOME
ENV APP_HOME=/home/app/frontend
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# copy file
COPY . .

# remove file
RUN rm -R doc/
RUN rm -R node_modules/
RUN rm -R docker/
RUN rm README.md
RUN rm -R .git/
RUN rm .gitignore

# update
RUN apk update

# install dependencies
RUN npm install

CMD ["npm", "run", "build"]
