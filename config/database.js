module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT"),
    connection: {
      host: env("PGHOST"),
      port: env.int("PGPORT"),
      database: env("PGDATABASE"),
      user: env("PGUSER"),
      password: env("PGPASSWORD"),
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
