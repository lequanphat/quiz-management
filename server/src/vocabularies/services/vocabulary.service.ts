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

  async getVocabularies(page: number) {
    const limit = 8;
    try {
      const skip = (page - 1) * limit;
      const total = await this.vocabularyRepository.count();
      const vocabularies = await this.vocabularyRepository
        .createQueryBuilder()
        .skip(skip)
        .take(limit)
        .getMany();
      const totalPages = Math.ceil(total / limit);
      return { vocabularies, totalPages, currentPage: page };
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
