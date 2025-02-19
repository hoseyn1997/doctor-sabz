import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logged in successfully' });
  response.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only in production  
    maxAge: 3600, // 1 hour  
    path: '/', // Cookie path  
    sameSite: 'lax', // SameSite attribute  
  });

  return response;
}