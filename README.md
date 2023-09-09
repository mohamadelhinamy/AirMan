# AirMan

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Download and install [Nodejs](https://nodejs.org/en)
- Download and install [PostgreSQL](https://www.postgresql.org/download/)
- A web browser (e.g. Google Chrome, Mozilla Firefox, Microsoft Edge)
- A text editor (e.g. Visual Studio Code, Sublime Text)
- A platform for testing APIs like [Postman](https://www.postman.com/downloads/)

### Installing

1. Clone the repository to your local machine:

```HTTPS
https://github.com/mohamadelhinamy/AirMan.git
```

2. Install [required packages](https://github.com/mohamadelhinamy/AirMan/blob/main/package.json) `npm install`
3. Configure the [environment variables](https://github.com/mohamadelhinamy/AirMan/blob/main/.env.default), such as the database URL.
4. `npm run prisma:migrate`
5. `npm run build` then `npm run dev`

## Folder Structure

- package.json
- .gitignore
- .prettierrc
- tsconfig
- tslint.json
- .env (not committed)
- .env.default (commit it)
- README.md
- src
  - app.ts
  - config.ts
  - index.ts
  - routes
    - [routeFileName].ts
    - index.ts
  - modules
    - [module name]
      - repos
        - [moduleNameRepo].ts
      - services
        - [moduleNameService].ts
      - interface
        - [IModuleName].ts
      - index.ts (In which you export your modules' services)
  - database
    - Prisma
      - migrations
      - schema.prisma
    - client.ts
  - core
    - route.ts

## Tools & Technologies

- TypeScript
- Nodejs
  - Express.js
- PostgreSQL
- Prisma (ORM)
