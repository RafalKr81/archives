export default () => ({
  port: parseInt(process.env.API_PORT, 10) || 3333,
  database: {
    u: process.env.DATABASE_USER,
    p: process.env.DATABASE_PASSWORD,
    dbName: process.env.DATABASE_NAME,
    url: process.env.DATABASE_URL,
  },
  auth0: {
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER,
  },
});
