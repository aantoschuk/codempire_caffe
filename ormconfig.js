module.exports = [
  {
    type: 'postgres',
    host: `${process.env.DB_HOST}`,
    port: `${process.env.DB_PORT}`,
    username: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`,
    migrations: [__dirname + '/src/migrations/*.ts'],
    entities: ['src/**/**/*{.js,.ts}'],
    cli: {
      migrationDir: 'src/migrations',
    },
  },
];
