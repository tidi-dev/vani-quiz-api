import { BaseRepository, QuestionRepository } from '@/common/repositories';
import { ExistingIdConstraint } from '@/core/validators';
import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';

@Module({
  controllers: [QuestionsController],
  providers: [
    QuestionsService,
    ExistingIdConstraint,
    QuestionRepository,
    BaseRepository,
  ],
})
export class QuestionsModule {}
