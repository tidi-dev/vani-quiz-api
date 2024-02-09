import { $Enums, Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { DATA } from './seeders/dummy.data';
const prisma = new PrismaClient();

async function main() {
  const pTasks: Prisma.Prisma__QuestionClient<
    {
      id: string;
      content: string;
      hint: string;
      type: $Enums.QuestionTypeEnum;
      created_by: string;
      created_at: Date;
      updated_by: string;
      updated_at: Date;
    },
    never,
    DefaultArgs
  >[] = [];
  DATA.forEach(({ content, hint, type, choices }, index) => {
    pTasks[index] = prisma.question.create({
      data: {
        content,
        hint,
        type,
        choices: {
          createMany: {
            data: choices,
          },
        },
      },
    });
  });

  await Promise.all(pTasks);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
