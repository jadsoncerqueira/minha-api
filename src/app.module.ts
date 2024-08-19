import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MembroResolver } from './graphql/resolver/membros.resolver';
import { PostagemResolver } from './graphql/resolver/postagens.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
  ],
  controllers: [],
  providers: [MembroResolver, PostagemResolver]
})
export class AppModule {}
