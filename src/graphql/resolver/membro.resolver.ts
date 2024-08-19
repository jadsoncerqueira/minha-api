import { Resolver, Query } from '@nestjs/graphql';
import { MembroService } from '../services/membro.service';
import { MembroObject } from '../objects/membro.object';
//import { UseInterceptors } from '@nestjs/common';
//import { CacheInterceptor } from '@nestjs/cache-manager';

@Resolver(() => MembroObject)
//@UseInterceptors(CacheInterceptor)
export class MembroResolver {
  constructor(private membroService: MembroService) {}

  @Query(() => [MembroObject])
  async getMembros() {
    return this.membroService.findAll();
  }
}
