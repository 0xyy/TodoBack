import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 8889,
    username: 'root',
    password: 'root',
    database: 'todo_app',
    entities: ['dist/**/**.entity{.ts,.js}'],
    logging: true,
    bigNumberStrings: false,
    synchronize: true,
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'migrations'
    },
} as DataSourceOptions);