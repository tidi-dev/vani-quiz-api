import { QuestionTypeEnum } from '@prisma/client';

export const DATA = [
  {
    content: 'How can you accumulate and use membership points with vani?',
    hint: 'To earn/use membership points with vani benefits, scan the Vani Barcode',
    type: QuestionTypeEnum.SINGLE_CHOICE,
    choices: [
      {
        answer: 'Hand over membership card',
        is_correct: false,
      },
      {
        answer: 'Tell your Phone number',
        is_correct: false,
      },
      {
        answer: 'Show Vani Barcode on the Home screen',
        is_correct: true,
      },
    ],
  },
  {
    content: 'There is another way to get Vani Coin. What is it?',
    hint: 'Earn/use membership points with vani. Open Ice Cream. Get Vani Coins',
    type: QuestionTypeEnum.SINGLE_CHOICE,
    choices: [
      {
        answer: 'Vani Point',
        is_correct: false,
      },
      {
        answer: 'Vani Coin',
        is_correct: false,
      },
      {
        answer: 'Vani Money',
        is_correct: true,
      },
    ],
  },
  {
    content:
      'What is an additional reward when you earn membership points with vani?',
    hint: 'You can get additional Vani Coins when you play Shake once a day',
    type: QuestionTypeEnum.SINGLE_CHOICE,
    choices: [
      {
        answer: 'Leave a 1:1 inquiry',
        is_correct: false,
      },
      {
        answer: 'Run the vani app every day',
        is_correct: false,
      },
      {
        answer: 'Play Shake',
        is_correct: true,
      },
    ],
  },
  {
    content: 'How can you use Vani Coin? Please choose 2 answers.',
    hint: 'Your Vani Coins can be exchanged for other membership points or Vouchers.',
    type: QuestionTypeEnum.MULTIPLE_CHOICE,
    choices: [
      {
        answer: 'Exchange to Voucher',
        is_correct: true,
      },
      {
        answer: 'Buy a product at stores',
        is_correct: false,
      },
      {
        answer: 'Exchange to membership points',
        is_correct: true,
      },
    ],
  },
];
