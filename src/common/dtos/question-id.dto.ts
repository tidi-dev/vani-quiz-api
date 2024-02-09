import { ExistingId } from '@/core/validators';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class QuestionIdParam {
  @ApiProperty()
  @IsUUID()
  @ExistingId('question', {
    message: (_) => `question id ${_.value} is NOT found`,
  })
  id: string;
}
