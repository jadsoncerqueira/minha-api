import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MembroResolver } from './graphql/resolver/membro.resolver';
import { PostagemResolver } from './graphql/resolver/postagem.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './graphql/entity/postagem.entity';
import { Membro } from './graphql/entity/membro.entity';
import "dotenv/config"
import { MembroService } from './graphql/services/membro.service';
import { PostagemService } from './graphql/services/postagem.service';
import { MembroModule } from './graphql/modules/membro.module';
import { PostagemModule } from './graphql/modules/postagem.module';
import { DataSource } from 'typeorm';
import { join } from 'path';



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
    MembroModule,
    PostagemModule,
  ]
})
export class AppModule {constructor(private dataSource: DataSource) {}}

