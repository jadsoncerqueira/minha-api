import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MembroObject {
    @Field()
    nome: string;
    @Field()
    email: string;
    @Field()
    dataDeEntrada: string;
}