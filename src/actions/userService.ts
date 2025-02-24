"use server";
import { prisma } from '@/lib/db';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Store your secret securely 
export async function register(formData: FormData) {
  const UserName = formData.get('username')?.toString();
  const Password = formData.get('password')?.toString();
  const PhoneNumber = formData.get('phoneNumber')?.toString();

  if (!UserName || !PhoneNumber || !Password) {
    throw new Error('All fields are required');
  }
  // Hash the password  
  const hashedPassword = await bcrypt.hash(Password, 10);

  // Save user to the database  
  const user = await prisma.user.create({
    data: {
      UserName: UserName,
      PhoneNumber: PhoneNumber,
      Password: hashedPassword,
      PhoneNumberConfirmed: false,
    },
  });

  // console.log('created-user: ', user)
  // Optionally redirect or return a success message  
  redirect(''); // Redirect to login page on success  
};

export async function login(formData: FormData) {
  const UserName = formData.get('username')?.toString();
  const Password = formData.get('password')?.toString();

  if (!UserName || !Password) {
    throw new Error('All fields are required');
  }

  const user = await prisma.user.findUnique({
    where: { UserName },
  });

  if (!user) {
    throw new Error('Invalid username or password');
  }

  // Compare provided password with hashed password  
  const isPasswordValid = await bcrypt.compare(Password, user.Password);

  if (!isPasswordValid) {
    throw new Error('Invalid username or password');
  }

  const token = jwt.sign(
    {
      id: user.Id,
      username: user.UserName,
      Email: user.PhoneNumberConfirmed
    },
    JWT_SECRET, {
    expiresIn: '1h',
  });

  // Create a cookie string  
  // const cookie = `token=${token}; HttpOnly; Max-Age=3600; Path=/; SameSite=Lax;` + (process.env.NODE_ENV === 'production' ? '; Secure' : '');

  // Create a new Response object and set the cookie header  
  // Return a plain object instead of a class instance  
  return {
    redirect: {
      destination: '/dashboard',
      permanent: false,
    },
    token, // You can also return the token here if needed  
  };
}