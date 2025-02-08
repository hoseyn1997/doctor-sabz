import { NextResponse } from 'next/server';  
import { users } from '../../route'; // Import users array from the main users route  

export async function GET(request: Request, { params }: { params: { username: string } }) {  
  const { username } = params;  
  const user = users.find(u => u.username === username);  

  if (user) {  
    return NextResponse.json(user);  
  } else {  
    return NextResponse.json({ message: 'User not found' }, { status: 404 });  
  }  
}