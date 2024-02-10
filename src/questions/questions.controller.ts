import { QuestionIdParam, SubmitAnswerDto } from '@/common/dtos';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  @Post(':id')
  getById(
    @Param() { id }: QuestionIdParam,
    @Body() submitAnswerDto: SubmitAnswerDto,
  ) {
    return this.questionsService.checkAnswer(id, submitAnswerDto);
  }
}
