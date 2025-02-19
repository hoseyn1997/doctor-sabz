import { verify } from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const inputid = searchParams.get('inputid');

  const token = req.cookies.get('token')?.value
  if (!token)
    return new Response(JSON.stringify({ message: 'unAuthorized' }), { status: 401 })

  try {
    const decoded = verify(token, JWT_SECRET);
    return new Response(JSON.stringify({
      post: 'this is post',
      inputid: inputid?.toString(),
      data: decoded
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "invalid token", error: error }), { status: 401 })
  }
}