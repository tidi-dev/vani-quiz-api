import { QuestionAndChoices } from '@/common/types';
import { BadRequestException } from '@nestjs/common';
import { IAnswerCheckingProcess } from './interface';

export class SingleAnswerCheckingProcess implements IAnswerCheckingProcess {
  check({ choices }: QuestionAndChoices, answer: string[]) {
    if (answer.length !== 1) throw new BadRequestException();

    return {
      is_correct: choices[0].id === answer[0],
      correct_answer: [choices[0].id],
    };
  }
}
