import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class SubmitAnswerDto {
  @ApiProperty()
  @IsUUID('4', { each: true })
  answer: string[];
}
