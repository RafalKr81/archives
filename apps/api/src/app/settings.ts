import * as dotenv from 'dotenv';

dotenv.config();

export const Settings = {
  server: {
    port: parseInt(process.env.API_PORT, 10) || 3333,
    prefix: 'api',
  },
  auth: {
    auth0: {
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER,
      algorithm: process.env.AUTH0_ALG || 'RS256',
    },
  },
  db: {
    school: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
  },
};
