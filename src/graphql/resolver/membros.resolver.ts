import { Query, Resolver } from "@nestjs/graphql";
import { MembroObject } from "../objects/membro.object";

@Resolver()
export class MembroResolver{
    @Query(() => MembroObject)
    membros() {
        return "Olá mundo!"
    }
}