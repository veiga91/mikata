# mikata [WIP]
```
MIKATA (Japanese)

Noun. 味方 • (mikata) a friend. a supporter. an ally.
```

Manage and organize your pet's vaccines, docs, and schedules


- In this repo you will find the back-end and front-end projects.

## Back-end
Nest.js + TypeScript + Prisma project. 

##### Bruno
Check the API client documentation and testing in the ``bruno`` dir using [Bruno](https://docs.usebruno.com/).

##### Prerequisites
- Node.js installed on your machine
- a PostgreSQL database server running

#### Installation
All commands should be ran from the ```mikata-backend``` dir root

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
React Native + TypeScript project.

# Learn More

To learn more about React Native config and installation, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.

#### Installation (IOS)
All commands should be ran from the ```mikata-mobile``` dir root

##### Prerequisites (IOS)
- Node.js installed on your machine
- Xcode installed with IOS simulators
- Cocoa Pods installed

```bash
# install packages
$ npm install

# install project pods
$ npm run pod:install

#running IOS project
$ npm run ios
```

