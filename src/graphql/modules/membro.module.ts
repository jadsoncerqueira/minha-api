import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Membro } from '../entity/membro.entity';
import { MembroService } from '../services/membro.service';
import { MembroResolver } from '../resolver/membro.resolver';
//import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [TypeOrmModule.forFeature([Membro])],
  providers: [MembroService, MembroResolver],
  exports: [MembroService, TypeOrmModule],
})
export class MembroModule {}