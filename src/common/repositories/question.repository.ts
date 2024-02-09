import { Injectable } from '@nestjs/common';
import { Question } from '@prisma/client';
import { BaseRepository } from './base.repository';

@Injectable()
export class QuestionRepository extends BaseRepository {
  async findAll(): Promise<Partial<Question>[]> {
    return this.prisma.question.findMany({
      select: {
        id: true,
        content: true,
        hint: true,
        type: true,
        choices: {
          select: {
            id: true,
            answer: true,
          },
        },
      },
    });
  }

  async getQuestionById(id: string): Promise<Partial<Question>> {
    return await this.prisma.question.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        choices: {
          select: {
            id: true,
            answer: true,
          },
          where: {
            is_correct: true,
          },
        },
      },
    });
  }
}
