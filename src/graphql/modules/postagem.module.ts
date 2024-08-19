import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from '../entity/postagem.entity';
import { PostagemService } from '../services/postagem.service';
import { PostagemResolver } from '../resolver/postagem.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  providers: [PostagemService, PostagemResolver],
  exports: [PostagemService, TypeOrmModule],
})
export class PostagemModule {}
