import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Membro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  dataDeEntrada: string;
}