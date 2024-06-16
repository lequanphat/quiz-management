import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vocabularies' })
export class Vocabulary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;

  @Column()
  mean: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
