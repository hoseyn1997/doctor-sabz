import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

interface PhoneRequestBody {
  phoneNumber: string;
}

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function POST(req: Request) {
  console.log(req);
  const { phoneNumber }: PhoneRequestBody = await req.json();

  if (!!!phoneNumber) {
    return NextResponse.json(
      { message: "فیلد شماره تلفن اجباری است" },
      { status: 401 }
    );
  }
  const user = await prisma.user.findUnique({
    where: { PhoneNumber: phoneNumber },
  });
  if (!user)
    return NextResponse.json({ message: "کاربر یافت نشد" }, { status: 401 });

  console.log("code has been sended to: " + phoneNumber);
  return NextResponse.json({ message: "کد با موفقیت ارسال شد" });
}
