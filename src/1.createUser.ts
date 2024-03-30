import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const User = prisma.user;

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const response = await User.create({
        data:{
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log(response);
}

insertUser("aashish", "aashish", "aashish", "aashish");