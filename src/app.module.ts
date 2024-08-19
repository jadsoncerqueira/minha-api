import { Module } from '@nestjs/common';
//import { CacheModule} from '@nestjs/cache-manager';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './graphql/entity/postagem.entity';
import { Membro } from './graphql/entity/membro.entity';
import "dotenv/config"
import { MembroModule } from './graphql/modules/membro.module';
import { PostagemModule } from './graphql/modules/postagem.module';
import { DataSource } from 'typeorm';
import { join } from 'path';
//import * as redisStore from 'cache-manager-ioredis';
import { ConfigModule} from '@nestjs/config';



console.log(process.env.NODE_PASSWORD)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.NODE_TYPE as unknown as "mysql" | "mariadb" | "postgres" | "cockroachdb" | "sqlite" | "mssql",
      host: process.env.NODE_HOST,
      port: process.env.NODE_PORT as unknown as number,
      username: process.env.NODE_USERNAME,
      password: process.env.NODE_PASSWORD,
      database: process.env.NODE_DATABASE,
      entities: [Postagem, Membro],
      synchronize: true,
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot(),
    //CacheModule.registerAsync({
      //imports: [ConfigModule],
      //useFactory: async (configService: ConfigService) => ({
        //store: redisStore,
        //host: process.env.REDIS_HOST,
        //port: process.env.REDIS_PORT,
      //}),
      //inject: [ConfigService],
    //}),
    MembroModule,
    PostagemModule,
  ]
})
export class AppModule {constructor(private dataSource: DataSource) {}}

