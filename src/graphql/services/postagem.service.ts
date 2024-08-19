import { Injectable } from '@nestjs/common';
import { Postagem } from '../entity/postagem.entity';
import { PostagemObject } from '../objects/postagem.object';

const POSTAGENS: PostagemObject[] = [
  {
    id: 1,
    titulo: "Primeira Postagem",
    conteudo: "Este é o conteúdo da primeira postagem.",
    autor: "João Silva",
    data: "2024-08-18"
  },
  {
    id: 2,
    titulo: "Segunda Postagem",
    conteudo: "Este é o conteúdo da segunda postagem.",
    autor: "Maria Oliveira",
    data: "2024-08-17"
  },
  {
    id: 3,
    titulo: "Terceira Postagem",
    conteudo: "Este é o conteúdo da terceira postagem.",
    autor: "Carlos Souza",
    data: "2024-08-16"
  }
];

@Injectable()
export class PostagemService {
  async findAll(): Promise<PostagemObject[]> {
    return POSTAGENS;
  }
}
