import { QuestionAndChoices } from '@/common/types';
import { QuestionTypeEnum } from '@prisma/client';
import { MultipleAnswerCheckingProcess } from './multiple-answer-checking-process';
import { SingleAnswerCheckingProcess } from './single-answer-checking-process';

export class AnswerCheckingProcess {
  constructor(
    private question: QuestionAndChoices,
    private answer: string[],
  ) {}

  public checkAnswerByType() {
    return this.getQuestionType()[this.question.type].check(
      this.question,
      this.answer,
    );
  }
  private getQuestionType(): object {
    return {
      [QuestionTypeEnum.SINGLE_CHOICE]: new SingleAnswerCheckingProcess(),
      [QuestionTypeEnum.MULTIPLE_CHOICE]: new MultipleAnswerCheckingProcess(),
    };
  }
}
