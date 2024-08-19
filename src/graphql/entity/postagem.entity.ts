import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Postagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  conteudo: string;

  @Column()
  autor: string;

  @Column()
  data: string;
}