import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VocabularyController } from './controllers/vocabulary.controller';
import { VocabularyService } from './services/vocabulary.service';
import { Vocabulary } from 'src/entities/Vocabulary';
import { VocabularyExample } from 'src/entities/VocabularyExample';

@Module({
  imports: [TypeOrmModule.forFeature([Vocabulary, VocabularyExample])],
  controllers: [VocabularyController],
  providers: [VocabularyService],
})
export class VocabulariesModule {}
