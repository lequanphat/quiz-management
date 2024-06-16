import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { VocabularyService } from '../services/vocabulary.service';
import { CreateVocabularyDTO } from '../types';
import { Response } from 'express';

@Controller('vocabularies')
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabularyService) {}

  @Get()
  async getVocabularies(@Res() res: Response, @Query('page') page: number) {
    try {
      const vocabularies = await this.vocabularyService.getVocabularies(page);
      return res.json({ data: vocabularies });
    } catch (error) {
      throw error;
    }
  }
  @Post('create-vocabulary')
  async createVocabulary(
    @Body() data: CreateVocabularyDTO,
    @Res() res: Response,
  ) {
    try {
      const vocabulary = await this.vocabularyService.createVocabulary(data);
      return res.json({ data: vocabulary });
    } catch (error) {
      throw error;
    }
  }
}
