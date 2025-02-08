import { NextResponse } from 'next/server';
import { users } from '../../route'; // Import users array from the main route  

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const index = users.findIndex(user => user.id === id);

  if (index > -1) {
    users.splice(index, 1);
    return new NextResponse(null, { status: 204 }); // Return 204 without a body  
  } else {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
}