import { Question } from '@prisma/client';

export interface IAnswerCheckingProcess {
  check(question: Partial<Question>, answer: string[]);
}
