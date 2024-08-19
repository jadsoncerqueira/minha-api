import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MembroResolver } from './graphql/resolver/membros.resolver';
import { PostagemResolver } from './graphql/resolver/postagens.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './graphql/entity/postagem.entity';
import { Membro } from './graphql/entity/membro.entity';
import "dotenv/config"



console.log(process.env.NODE_USERNAME)
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
    }),
    TypeOrmModule.forFeature([Postagem, Membro]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
  ],
  controllers: [],
  providers: [MembroResolver, PostagemResolver]
})
export class AppModule {}
