import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const User = prisma.user;

async function getUser(username: string) {
  const response = await User.findUnique({
    where: { username },
  });
  console.log(response);
}

getUser("abhiram");