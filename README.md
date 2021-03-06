<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>


  ![NodeJS Workflow](https://github.com/abhishekpatel946/Twitter-Backend/actions/workflows/nodejs.yml/badge.svg)


  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

<br />

## Description - A Twitter Clone
Backend API for Moo using Nest framework.
- NodeJS
- TypeScript
- PostgreSQL

## Installation

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Postgres

```bash
➜  sudo systemctl start postgresql.service
➜  sudo -i -u postgres
➜  ➜ psql
➜  ➜  ➜ create database moodb;
➜  ➜  ➜ create user mooadmin with _encrypted_ password 'moopass';
➜  ➜  ➜ grant all priviliges on databse moodb to mooadmin;
```

## NEST Backend Layer

![img](/assets/images/nest-backend-layers.png)


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Abhishek Patel](https://github.com/abhishekpatel946)

## License

Nest is [MIT licensed](LICENSE).
