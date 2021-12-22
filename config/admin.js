module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '23ae9be6a77865ee6dd9ebb53f21117b'),
  },
});
