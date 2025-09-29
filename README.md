->`src` Contains all main source code of the project (no tests here).

-> `config` Project configurations, examples: dotenv for environment variables.

-> `routes` Define API routes, connect routes with controllers and middlewares.

-> `middlewares`Code that runs before controllers, examples: Validators (check data),Authenticators (check user).

-> `controllers` Receive requests after middlewares, pass data to business logic,format and send the response back to the client.


-> `repositories` Contains logic for interacting with the database, includes raw queries or ORM queries (like Sequelize, TypeORM, Prisma, etc.).

-> `services` Contain the actual business logic, Call repositories to fetch or update data, Controllers depend on services to perform the main work.

-> `utils` Helper methods, utility functions, error classes, constants, etc.

-> In `src/config` we create file `config.json` write following code : 
 {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

if you write setting of your development enviroment write your username , password of database