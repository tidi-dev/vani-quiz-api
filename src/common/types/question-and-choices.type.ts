import { Choice, Question } from '@prisma/client';

export type QuestionAndChoices = Partial<Question> & {
  choices: Partial<Choice>[];
};
