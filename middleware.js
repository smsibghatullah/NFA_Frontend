// middleware.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect only dashboard routes
  if (pathname.startsWith('/dashboard')) {
    const token = req.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { message: 'No token provided' },
        { status: 401 }
      );
    }

    try {
      jwt.verify(token, JWT_SECRET);
      // Token is valid; proceed to the requested route
      return NextResponse.next();
    } catch (err) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 403 }
      );
    }
  }

  return NextResponse.next(); // Allow other routes
}
