import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const Todo = prisma.todo;

async function getTodo(userId: number) {
  const response = await Todo.findMany({
    where: { userId },
  });
  console.log(response);
}

getTodo(1);