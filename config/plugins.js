module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  graphql: {
    config: {
      playgroundAlways: true,
    },
  },
});
