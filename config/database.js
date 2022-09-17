module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT"),
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
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
