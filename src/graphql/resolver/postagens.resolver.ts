import { Query, Resolver } from "@nestjs/graphql";
import { PostagemObject } from "../objects/postagem.objext";

@Resolver()
export class PostagemResolver{
    @Query(() => PostagemObject)
    postagens() {
        return "Olá mundo!"
    }
}