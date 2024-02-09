import { SubmitChoiceDto } from '@/common/dtos';
import { QuestionRepository } from '@/common/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionsService {
  constructor(private questionRepository: QuestionRepository) {}
  findAll() {
    return this.questionRepository.findAll();
  }

  getById(id: string, submitChoiceDto: SubmitChoiceDto) {
    return this.questionRepository.getQuestionById(id);
  }
}
