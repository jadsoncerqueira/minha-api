import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ColumnOptions, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Membro } from './membro.entity';

export function RelationColumn(options?: ColumnOptions) {
    return Column({ nullable: true, ...options });
  }

@ObjectType()
@Entity()
export class Postagem {
    @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  titulo: string;

  @Field()
  @Column()
  conteudo: string;

  @Field()
  @Column()
  autor: string;

  @Field()
  @CreateDateColumn()
  data: Date;

  @Field(() => [Membro])
  @ManyToOne(() => Membro, membro => membro.postagens)
  membro: Membro[];

  @RelationColumn()
  membro_id: number;
}