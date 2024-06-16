import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Vocabulary } from './Vocabulary';

@Entity({ name: 'vocabulary_examples' })
export class VocabularyExample {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vocabulary)
  @JoinColumn({ name: 'vocabulary_id' })
  vocabulary: Vocabulary;

  @Column()
  mean: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
