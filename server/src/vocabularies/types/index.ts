import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVocabularyDTO {
  @IsString()
  @IsNotEmpty()
  word: string;
  @IsString()
  @IsNotEmpty()
  mean: string;
}
