import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  console.log(process.env.DATABASE_URL);
  return {
    mongo: {
      mongoUrl: process.env.DATABASE_URL,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      nameDb: process.env.MONGO_DB,
      port: parseInt(process.env.MONGO_PORT, 10),
      host: process.env.MONGO_HOST,
      conn: process.env.MONGO_CONNECTION,
    }
  };
});