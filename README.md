<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Esta API permite subir archivos JSON de gran cantidad de datos

## Installation

```bash
$ docker run --name monguitodb -d mongo:tag
```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing the app

1. Abrir postman y colocar la siguiente URL con el método POST

```bash
localhost:4000/upload
```

2. En postman seleccionamos body - form-data | key: file y value seleccionamos el archivo de prueba adjunto en el codigo
3. Consideración: El archivo de prueba lo puedes colocar en cualquier ruta, no es necesario que vaya en la ruta del app.
