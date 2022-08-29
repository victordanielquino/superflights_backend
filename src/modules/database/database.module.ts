import { Global, Module } from "@nestjs/common";
import { MongoClient } from "mongodb";

import config from '../../common/config/config';
import { ConfigType } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configEnv: ConfigType<typeof config>) => {
        return {
          //type: 'mongodb',
          uri: configEnv.mongo.mongoUrl,
          dbName: configEnv.mongo.nameDb
        }
      }
    })
  ],
  providers: [
    {
      provide: 'MONGO',
      useFactory: async (configEnv: ConfigType<typeof config>) => {
        const client = new MongoClient(configEnv.mongo.mongoUrl);
        await client.connect();
        const database = client.db(configEnv.mongo.nameDb);
        return database;
      },
      inject: [config.KEY]
    }
  ],
  exports: ['MONGO', MongooseModule]
})
export class DatabaseModule {}
