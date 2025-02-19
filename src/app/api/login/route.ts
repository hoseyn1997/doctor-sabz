import { prisma } from '@/lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';


interface LoginRequestBody {
  username: string;
  password: string;
}
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req: Request) {
  const { username, password }: LoginRequestBody = await req.json();

  const user = await prisma.user.findUnique({ where: { UserName: username } });
  if (!user)
    return NextResponse.json({ message: "user not found" }, { status: 401 })

  const isPasswordValid = bcrypt.compare(password, user.Password);
  if (!isPasswordValid)
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });

  // Create a token  
  const token = jwt.sign({ userId: user.Id }, JWT_SECRET, { expiresIn: '1h' });
  const response = NextResponse.json({ message: 'Logged in successfully' });
  // Set the cookie  
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only in production  
    maxAge: 50, // 1 hour  
    path: '/', // Cookie path  
    sameSite: 'lax', // SameSite attribute  
  });
  return response;
}