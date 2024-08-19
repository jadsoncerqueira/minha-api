import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Postagem } from './postagem.entity';

@ObjectType()
@Entity()
export class Membro {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  nome: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @CreateDateColumn()
  dataDeEntrada: Date;

  @Field(() => [Postagem])
  @OneToMany(() => Postagem, postagem => postagem.membro)
  postagens: Postagem[];
}