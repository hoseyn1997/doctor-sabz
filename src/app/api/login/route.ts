import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

interface LoginRequestBody {
  username: string;
  password: string;
}
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function POST(req: Request) {
  console.log(req)
  const { username, password }: LoginRequestBody = await req.json();

  const user = await prisma.user.findUnique({ where: { UserName: username } });
  if (!user)
    return NextResponse.json({ message: "کاربر یافت نشد" }, { status: 401 });

  const isPasswordValid = await bcrypt.compare(password, user.Password);
  if (!isPasswordValid)
    return NextResponse.json(
      { message: "نام کاربری یا رمز اشتباه است" },
      { status: 401 }
    );

  // Create a token
  const token = jwt.sign({ userId: user.Id }, JWT_SECRET, { expiresIn: "2h" });
  const response = NextResponse.json({ message: "ورود موفق" });
  // Set the cookie
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only in production
    maxAge: 7200, // 2 hours
    path: "/", // Cookie path
    sameSite: "lax", // SameSite attribute
  });
  return response;
}
