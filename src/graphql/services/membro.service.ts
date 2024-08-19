import { Injectable } from '@nestjs/common';
import { MembroObject } from '../objects/membro.object';

const MEMBROS: MembroObject[] = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@example.com",
    dataDeEntrada: "2023-01-10"
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    dataDeEntrada: "2023-02-15"
  },
  {
    id: 3,
    nome: "Carlos Souza",
    email: "carlos.souza@example.com",
    dataDeEntrada: "2023-03-20"
  }
];

@Injectable()
export class MembroService {
  async findAll(): Promise<MembroObject[]> {
    return MEMBROS;
  }
}
