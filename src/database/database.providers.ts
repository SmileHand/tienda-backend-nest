import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATA SOURCE',
        useFactory: async()=>{
            const dataSource = new DataSource({
                type: 'mysql',
                host: process.env.HOST,
                port: parseInt(process.env.PORTDB ?? '80',10),
                username: process.env.USERNAME,
                database: process.env.DATABASE,
                entities: [__dirname+'/../**/*.entity{.ts,.js}',],
                synchronize: true,
            });
            console.log("estos son los datos ",dataSource);
            return dataSource.initialize()
        },


    },
];