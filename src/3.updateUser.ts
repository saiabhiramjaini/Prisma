import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const User = prisma.user;

async function updateUser(username: string, firstName: string, lastName: string){
  const respone = await User.update({
    where: { username},
    data:{
        firstName,
        lastName
    }
  })
  console.log(respone);
}

updateUser("abhiram", "abhiram", "jaini");

