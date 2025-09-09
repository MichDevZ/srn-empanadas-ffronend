import { Provider } from '@nestjs/common';
import { createPool } from 'mysql2/promise';

export const databaseProvider: Provider[] = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const connection = await createPool({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        waitForConnections: true,
        port: parseInt(process.env.DB_PORT ?? '3306', 10),
        connectionLimit: 10,
        queueLimit: 0,
      });
      return connection;
    },
    inject: [],
  },
];