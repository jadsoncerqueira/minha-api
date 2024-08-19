import { Resolver, Query } from '@nestjs/graphql';
import { PostagemService } from '../services/postagem.service';
import { PostagemObject } from '../objects/postagem.object';
import { UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Resolver(() => PostagemObject)
//@UseInterceptors(CacheInterceptor)
export class PostagemResolver {
  constructor(private postagemService: PostagemService) {}

  @Query(() => [PostagemObject])
  async getPostagem() {
    return this.postagemService.findAll();
  }
}
