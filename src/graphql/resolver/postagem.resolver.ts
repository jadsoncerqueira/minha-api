import { Resolver, Query } from '@nestjs/graphql';
import { PostagemService } from '../services/postagem.service';
import { PostagemObject } from '../objects/postagem.object';

@Resolver(() => PostagemObject)
export class PostagemResolver {
  constructor(private postagemService: PostagemService) {}

  @Query(() => [PostagemObject])
  async getPostagem() {
    return this.postagemService.findAll();
  }
}
