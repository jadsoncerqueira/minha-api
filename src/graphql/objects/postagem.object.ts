import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class PostagemObject {
  @Field(() => ID)
  id: number;

  @Field()
  titulo: string;

  @Field()
  conteudo: string;

  @Field()
  autor: string;

  @Field()
  data: string;
}
