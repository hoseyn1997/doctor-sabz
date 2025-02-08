import { NextResponse } from 'next/server';  
import { users } from '../../route'; // Import users array  

export async function PUT(request: Request) {  
  const { id, newUsername } = await request.json();  
  const user = users.find(u => u.id === id);  

  if (user) {  
    user.username = newUsername;  
    return NextResponse.json(user);  
  } else {  
    return NextResponse.json({ message: 'User not found' }, { status: 404 });  
  }  
}