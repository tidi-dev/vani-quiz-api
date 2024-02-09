import { QuestionIdParam, SubmitChoiceDto } from '@/common/dtos';
import { Body, Controller, Get, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  getById(
    @Param() { id }: QuestionIdParam,
    @Body() submitChoiceDto: SubmitChoiceDto,
  ) {
    return this.questionsService.getById(id, submitChoiceDto);
  }
}
