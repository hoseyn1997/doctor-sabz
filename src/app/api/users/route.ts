import { NextResponse } from 'next/server';  

export let users = [{ username: "Jimi", id: "154876" }]; // Sample user data  

export async function GET() {  
  return NextResponse.json(users); // Return the list of users  
}  

export async function POST(request: Request) {  
  const { username } = await request.json();  
  const newUser = { username, id: new Date().getTime().toString() }; // Generate unique ID  
  users.push(newUser);  
  return NextResponse.json(newUser, { status: 201 }); // Return the created user  
}