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
    client: env("DATABASE_CLIENT", "postgres"),
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    },
    debug: false,
    // options: {
    //   ssl: true,
    // },
  },
});
