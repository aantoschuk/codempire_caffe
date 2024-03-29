export const config = () => ({
  port: Number(process.env.PORT),
  auth: {
    secret: process.env.SECRET,
    signOptions: {
      expiresIn: process.env.JWT_EXPIRES,
    },
  },
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false },
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    keepConnectionAlive: true,
  },
});
