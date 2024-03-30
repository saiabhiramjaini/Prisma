import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getTodosAndUserDetails(userId: number) {
    const response = await prisma.todo.findMany({
        where:{
            userId
        },
        select:{
            id: true,
            title: true,
            description: true,
            user: true,   // Include the associated User details for each Todo
        }
    })
    console.log(response);
}

getTodosAndUserDetails(1);