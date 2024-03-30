import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const User = prisma.user;

async function deleteUser(username: string) {
  const response = await User.delete({
    where: { username },
  });
  console.log(response);
}

deleteUser("abhiram");