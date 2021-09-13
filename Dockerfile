# Sert de base à la création d'une nouvelle image
FROM node:8

RUN mkdir usr/src/app

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . .

# il est possible d'envoyer des commandes pour la création d'image
# RUN apt-get update

# Copie de fichiers
COPY dist/myNetflix/ /usr/share/nginx/html
