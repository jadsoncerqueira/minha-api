import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PostagemObject {
    @Field()
    nome: string;
    @Field()
    titulo: string;
    @Field()
    conteudo: string;
    @Field()
    autor: string;
    @Field()
    data: string;
}