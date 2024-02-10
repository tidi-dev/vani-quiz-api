import { QuestionAndChoices } from '@/common/types';
import { IAnswerCheckingProcess } from './interface';

export class MultipleAnswerCheckingProcess implements IAnswerCheckingProcess {
  check(question: QuestionAndChoices, answer: string[]) {
    const answer_set = new Set(answer);
    const correct_choice_ids = new Set(
      question.choices.map((choice) => choice.id),
    );

    return {
      is_correct:
        correct_choice_ids.size === answer_set.size &&
        question.choices.every((choice) => answer_set.has(choice.id)),
      correct_answer: [...correct_choice_ids],
    };
  }
}
