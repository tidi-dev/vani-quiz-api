import { SubmitAnswerDto } from '@/common/dtos';
import { QuestionRepository } from '@/common/repositories';
import { Injectable } from '@nestjs/common';
import { AnswerCheckingProcess } from './answer-checking-process/answer-checking-process';

@Injectable()
export class QuestionsService {
  constructor(private questionRepository: QuestionRepository) {}
  findAll() {
    return this.questionRepository.findAll();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async checkAnswer(id: string, { answer }: SubmitAnswerDto) {
    const question = await this.questionRepository.getQuestionById(id);

    return new AnswerCheckingProcess(question, answer).checkAnswerByType();
  }
}
