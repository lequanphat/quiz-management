import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vocabulary } from 'src/entities/Vocabulary';
import { Repository } from 'typeorm';
import { CreateVocabularyDTO } from '../types';

@Injectable()
export class VocabularyService {
  constructor(
    @InjectRepository(Vocabulary)
    private vocabularyRepository: Repository<Vocabulary>,
  ) {}

  async getVocabularies() {
    try {
      const vocabularies = await this.vocabularyRepository.find();
      return vocabularies;
    } catch (error) {
      throw new HttpException('Error', HttpStatus.BAD_REQUEST);
    }
  }
  async createVocabulary(data: CreateVocabularyDTO) {
    try {
      const vocabulary = await this.vocabularyRepository.save({
        word: data.word,
        mean: data.mean,
      });
      return vocabulary;
    } catch (error) {
      throw new HttpException('Error', HttpStatus.BAD_REQUEST);
    }
  }
}
