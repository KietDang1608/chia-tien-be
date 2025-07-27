import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

export class DatabaseConfiguration {
    static getDatabaseConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: process.env.DB_HOST ,
            port: parseInt(process.env.DB_PORT ?? "5432", 10),
            username: process.env.DB_USERNAME ,
            password: String(process.env.DB_PASSWORD) ,
            database: process.env.DB_NAME ,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            ssl: {
            rejectUnauthorized: false
            },
            synchronize: true,
            autoLoadEntities: true,
        };
    }
}
