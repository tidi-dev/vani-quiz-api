import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class SubmitChoiceDto {
  @ApiProperty()
  @IsUUID('4', { each: true })
  choices: string[];
}
