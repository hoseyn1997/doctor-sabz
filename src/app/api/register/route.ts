import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

interface RegisterRequestBody {
  username: string;
  password: string;
  phoneNumber: string;
  email?: string;
}
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function POST(req: Request) {
  const { username, password, phoneNumber, email }: RegisterRequestBody =
    await req.json();

  const user = await prisma.user.findUnique({ where: { UserName: username } });
  if (user)
    return NextResponse.json(
      { message: "نام کاربری قبلا انتخاب شده است" },
      { status: 409 }
    );
  const user_with_phone = await prisma.user.findUnique({
    where: { PhoneNumber: phoneNumber },
  });
  if (user_with_phone)
    return NextResponse.json(
      { message: " شماره تماس قبلا انتخاب شده است" },
      { status: 409 }
    );

  if (!username || !phoneNumber || !password) {
    return NextResponse.json(
      { message: "فیلد های اجباری را پر کنید" },
      { status: 409 }
    );
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Save user to the database
  const new_user = await prisma.user.create({
    data: {
      UserName: username,
      PhoneNumber: password,
      Password: hashedPassword,
      PhoneNumberConfirmed: false,
    },
  });

  // Create a token
  const token = jwt.sign({ userId: new_user.Id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  const response = NextResponse.json({
    message: "ثبت نام موفق. وارد سامانه شدید",
  });
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
