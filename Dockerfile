#Latest version of node tested on.
FROM hypriot/rpi-node:latest

WORKDIR /app

# Only run npm install if these files change.
ADD ./package.json /app/package.json

# Install dependencies
RUN npm install --unsafe-perm=true

# Add the rest of the sources
ADD . /app

#Default port to expose.
ENV PORT 3333
EXPOSE 3333

CMD ["npm","start"]
