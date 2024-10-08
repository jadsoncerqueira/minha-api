import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MembroObject {
  @Field(() => ID)
  id: number;

  @Field()
  nome: string;

  @Field()
  email: string;

  @Field()
  dataDeEntrada: string;
}
