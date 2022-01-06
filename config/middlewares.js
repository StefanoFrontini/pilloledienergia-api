module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",

  {
    name: "strapi::body",
    config: {
      formLimit: "10mb",
      jsonLimit: "10mb",
      textLimit: "10mb",
    },
  },
  "strapi::favicon",
  "strapi::public",
];
