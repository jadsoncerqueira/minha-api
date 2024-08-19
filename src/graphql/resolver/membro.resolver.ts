import { Resolver, Query } from '@nestjs/graphql';
import { MembroService } from '../services/membro.service';
import { MembroObject } from '../objects/membro.object';

@Resolver(() => MembroObject)
export class MembroResolver {
  constructor(private membroService: MembroService) {}

  @Query(() => [MembroObject])
  async getMembros() {
    return this.membroService.findAll();
  }
}
