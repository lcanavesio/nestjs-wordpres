# GraphQL Server Wordpres with NestJS  

This example shows how to implement an **GraphQL server (code-first) with TypeScript** with the following stack:

- [NestJS](https://docs.nestjs.com/graphql/quick-start): Web framework for building scalable server-side applications
- [**Prisma Client**](https://www.prisma.io/docs/concepts/components/prisma-client): Databases access (ORM)                  
- [**Prisma Migrate**](https://www.prisma.io/docs/concepts/components/prisma-migrate): Database migrations               
- [**SQLite**](https://www.sqlite.org/index.html): Local, file-based SQL database

- [**Typegraphql-prisma**](https://github.com/MichalLytek/typegraphql-prisma): Prisma generator to emit TypeGraphQL types and CRUD resolvers from your Prisma schema.

## Getting started

### 1. Git clone repository

Install npm dependencies:

```
cd nestjs-wordpres

npm install
```

### 2. Conect to database 

Config file . env

```
DATABASE_URL="mysql://exampleuser:examplepass@localhost:3306/exampledb"
```

### 2. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run start:dev
```

Navigate to [http://localhost:7000/graphql](http://localhost:3000/graphql) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).


### 3. Graphql Playground show posts

```
query {
  posts {
    ID
    post_content
    post_title
    post_date
  }
}
```