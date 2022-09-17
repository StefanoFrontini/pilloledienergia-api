// const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL);

// module.exports = () => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: false,
//     },
//     debug: false,
//   },
// });
module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT"),
    connection: {
      host: env("PGHOST"),
      port: env.int("PGPORT"),
      database: env("PGDATABASE"),
      user: env("PGUSER"),
      password: env("PGPASSWORD"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
    // options: {
    //   ssl: true,
    // },
  },
});
