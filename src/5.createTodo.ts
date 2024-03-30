import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Todo = prisma.todo;

async function insertTodo(title: string, description: string, userId: number) {
    const response = await Todo.create({
        data:{
            title,
            description,
            userId,
        }
    })
    console.log(response);
}

insertTodo("Learn Prisma", "Learing Prism with type script", 1);