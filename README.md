<p align="center">
    <img alt="GoStack" src="https://imagensbrasil.org/images/2021/08/03/Rocketseat---Bootcamp-GoStack-11-Banner.png" />
</p>

## :rocket: Back-end with <span style="color:lightgreen;">NodeJS</span> + <span style="color:darkslateblue;">TypeScript</span>

<p align="left">
    <img alt="Github language count" src="https://img.shields.io/github/languages/count/gbdsantos/nodejs-bootcamp-gostack-11-gobarber">

  <img alt="Github percentage language count" src="https://img.shields.io/github/languages/top/gbdsantos/nodejs-bootcamp-gostack-11-gobarber">

  <a href="http://expressjs.com/">
    <img alt="Express version" src="https://img.shields.io/github/package-json/dependency-version/gbdsantos/nodejs-bootcamp-gostack-11-gobarber/express">
  </a>

  <a href="https://www.npmjs.com/package/jsonwebtoken/">
    <img alt="JsonWebToken version" src="https://img.shields.io/github/package-json/dependency-version/gbdsantos/nodejs-bootcamp-gostack-11-gobarber/jsonwebtoken">
  </a>

  <a href="https://www.npmjs.com/package/mongodb">
    <img alt="Mongodb version" src="https://img.shields.io/github/package-json/dependency-version/gbdsantos/nodejs-bootcamp-gostack-11-gobarber/mongodb">
  </a>

  <a href="https://www.npmjs.com/package/multer">
    <img alt="Mongodb version" src="https://img.shields.io/github/package-json/dependency-version/gbdsantos/nodejs-bootcamp-gostack-11-gobarber/multer">
  </a>

  <a href="https://nodejs.org/en/">
    <img alt="NodeJS version" src="https://img.shields.io/badge/nodejs-v12.16.1%20LTS-brightgreen">
  </a>

  <a href="https://node-postgres.com/">
    <img alt="Node-postgres version" src="https://img.shields.io/github/package-json/dependency-version/gbdsantos/nodejs-bootcamp-gostack-11-gobarber/pg">
  </a>

  <a href="https://www.npmjs.com/package/redis">
    <img alt="Redis version" src="https://img.shields.io/github/package-json/dependency-version/gbdsantos/nodejs-bootcamp-gostack-11-gobarber/redis">
  </a>

  <a href="https://typeorm.io/#/">
    <img alt="Typeorm version" src="https://img.shields.io/github/package-json/dependency-version/gbdsantos/nodejs-bootcamp-gostack-11-gobarber/typeorm">
  </a>

  <a href="https://www.typescriptlang.org/">
    <img alt="Typescript version" src="https://img.shields.io/github/package-json/dependency-version/gbdsantos/nodejs-bootcamp-gostack-11-gobarber/dev/typescript">
  </a>

  <img alt="Wakatime time of development" src="https://wakatime.com/badge/github/gbdsantos/nodejs-bootcamp-gostack-11-gobarber.svg">

  <img alt="Github last commit" src="https://img.shields.io/github/last-commit/gbdsantos/nodejs-bootcamp-gostack-11-gobarber">
</p>

## :bulb: About Project

**GoBarber backend project** made with <span style="color:lightgreen; font-weight:bold;">**NodeJS**</span> + <span style="color:darkslateblue; font-weight:bold;">**TypeScript**</span>. At the level 04 of Bootcamp GoStack 11.

Project completed on 2020-xx-xx.

## :gear: Getting Started

```Bash
# 1. Install dependencies
yarn install

# 2. Create files .env and ormconfig.json, see example files

# 3. Create Postgres container with Docker
docker run --name rocketseat-bootcamp-gostack-11-gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# 4. Create Postgres database using any GUI or command line
CREATE DATABASE gobarber;

# 5. Create MongoDB container with Docker
docker run --name db-mongodb -p 27017:27017 -d -t mongo

# 6. Create Redis container with Docker
docker run --name redis -p 6379:6379 -d -t redis:alpine

# 7. Execute migrations
yarn typeorm migration:run

# 8. Run application
yarn dev:server
```

> Access the URL in your browser http://localhost:3333

## :wrench: Tecnology

- [NodeJS](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/gbdsantos/bootcamp-gostack-gobarber-frontend/blob/master/LICENSE) for more information.

---
Made with ♥ by :man_astronaut: Guilherme Bezerra :wave: [Get in touch!](https://www.linkedin.com/in/gbdsantos/)

