
# Vani Heroes Quiz API

This is the Back End

  
## Stacks


- Typescript [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)

- Docker [https://docs.docker.com/](https://docs.docker.com/)

- NestJS framework [https://docs.nestjs.com/](https://docs.nestjs.com/)

	- class-validator [https://docs.nestjs.com/techniques/validation](https://docs.nestjs.com/techniques/validation)

	- class-transformer [https://docs.nestjs.com/techniques/serialization](https://docs.nestjs.com/techniques/serialization)

	- passport [https://docs.nestjs.com/security/authentication](https://docs.nestjs.com/security/authentication)

	- passport-jwt [http://www.passportjs.org/packages/passport-jwt/](http://www.passportjs.org/packages/passport-jwt/)

	- passport-local [https://www.passportjs.org/packages/passport-local/](https://www.passportjs.org/packages/passport-local/)


- Prisma (mysql) [https://www.prisma.io/docs](https://www.prisma.io/docs)

- Swagger [https://docs.nestjs.com/openapi/introduction](https://docs.nestjs.com/openapi/introduction)

- crypto-js [https://www.npmjs.com/package/crypto-js](https://www.npmjs.com/package/crypto-js)

- bcrypt [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)

  

## Pre Setup

- Required **Node 16** or higher

- **Tools** are recommended

	- [**Visual Studio Code**](https://code.visualstudio.com/): Completely free and with built-in Git support and huge extension library, it’s widely used, especially by frontend developers.

	- [**Postman**](https://www.postman.com/): API platform for building and using APIs

	- [**Table Plus**](https://tableplus.com/): Modern, native, and friendly GUI tool for relational databases

- Make sure to install the [suggested extensions](.vscode/extensions.json)

## Structure
```
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── auth
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── jwt
│   │   ├── jwt-auth.guard.ts
│   │   └── jwt-auth.strategy.ts
│   └── user
│       ├── user-auth.guard.ts
│       └── user-auth.strategy.ts
├── common
│   ├── constants
│   │   ├── index.ts
│   │   └── regex.constant.ts
│   ├── dtos
│   │   ├── index.ts
│   │   ├── login.dto.ts
│   │   ├── question-id.dto.ts
│   │   ├── register.dto.ts
│   │   └── submit-answer.dto.ts
│   ├── functions
│   │   ├── index.ts
│   │   ├── password.function.ts
│   │   └── phone.function.ts
│   ├── repositories
│   │   ├── base.repository.ts
│   │   ├── index.ts
│   │   ├── question.repository.ts
│   │   └── user.repository.ts
│   ├── responses
│   │   ├── index.ts
│   │   └── login.response.ts
│   └── types
│       ├── index.ts
│       └── question-and-choices.type.ts
├── config
│   └── swagger.config.ts
├── core
│   ├── decorators
│   │   ├── index.ts
│   │   └── public.decorator.ts
│   └── validators
│       ├── index.ts
│       ├── is-existing-id.validator.ts
│       ├── is-existing-phone-number.validator.ts
│       └── is-unique-phone-number.validator.ts
├── database
│   ├── migrations
│   │   ├── 20240209123906_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── schema.prisma
│   ├── seed.ts
│   └── seeders
│       └── dummy.data.ts
├── main.ts
├── prisma
│   ├── prisma.module.ts
│   └── prisma.service.ts
└── questions
    ├── answer-checking-process
    │   ├── answer-checking-process.ts
    │   ├── interface.ts
    │   ├── multiple-answer-checking-process.ts
    │   └── single-answer-checking-process.ts
    ├── questions.controller.spec.ts
    ├── questions.controller.ts
    ├── questions.module.ts
    ├── questions.service.spec.ts
    └── questions.service.ts
```

The project organizes its main folders within `/src`, encompassing essential directories such as `common`, `core`, `config`, `database`, and `prisma`.

Additionally, it incorporates several model-related folders, including `auth`, `user`, and `question`.

## Setup
```bash
# copy & paste .env.local .env

cp .env.local .env
```
Please refrain from editing the MYSQL settings already present in `.env.local` to avoid potential errors.

- [**Generate JWT_SECRET**](docs/jwt-secret-generating.md): on how to generate JWT_SECRET to use local

- [**Generate ENCRYPT_KEY**](docs/encrypt-key-generating.md): on how to generate ENCRYPT_KEY and ENCRYPT_IV to use local

```bash

# install required packages

yarn install

```

```bash

# init database schema

yarn db:init

```

```bash

# seed dummy data

yarn db:seed

```

```bash

# reset data and create new dummy data

yarn db:reset

# to reset data without creating new dummy data, add `--skip-seed`

yarn db:reset --skip-seed

```

```bash

# start docker in detach mode

docker compose up database -d

```
