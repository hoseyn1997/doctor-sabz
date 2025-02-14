import { User } from "@prisma/client";
import { prisma } from "./db";

export async function fetchUsers(): Promise<User[]> {
  return await prisma.user.findMany({
    orderBy: [
      {
        Id: "desc"
      }
    ],
  })
}