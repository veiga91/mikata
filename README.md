# mikata [WIP]
```
MIKATA (Japanese)

Noun. 味方 • (mikata) a friend. a supporter. an ally.
```

Manage and organize your pet's vaccines, docs, and schedules


- In this repo you will find the back-end and front-end projects.

## Roadmap
- ~~Create Back-end base project~~
- Create Front-end base project (React Native)
- Add User Authentication
- Add Pet Agenda 
- Add pet picture upload
- Add pet docs upload
- Add user shared pet management

## Back-end
Nest.js + TypeScript + Prisma project. 

##### Bruno
Check the API client documentation and testing in the ``bruno`` dir using [Bruno](https://docs.usebruno.com/).


#### Running the back-end app
All commands should be ran from the ```mikata-backend``` dir root

##### Prerequisites
- Node.js installed on your machine
- a PostgreSQL database server running

#### Installation

```bash
$ pnpm install
```

#### Data base connection
Create a ```.env``` file in the ```mikata-backend``` dir root and add your DB information like following

```bash 
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```

e.g

```bash 
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```
Run the migrations and then generate the models

```bash
# migrations
$ pnpm run migration:dev

# generate models
$ pnpm run generate:models

# DB prisma GUI
$ pnpm run prisma:gui
```

#### Running the app

```bash
# development
$ pnpm run start
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Front-end (mobile)
### ...soon