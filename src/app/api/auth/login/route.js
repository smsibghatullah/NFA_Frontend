import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectToDatabase from '../../../lib/db';
import User from '../../../admin/models/User';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET;

// Named export for the POST method
export async function POST(req) {
  // Ensure the database connection
  try {
    await connectToDatabase();
  } catch (dbError) {
    console.error("Database connection error:", dbError);
    return NextResponse.json(
      { message: 'Database connection failed', error: dbError.message },
      { status: 500 }
    );
  }

  try {
    const body = await req.json(); // Parse JSON body
    if (!body) {
      return NextResponse.json({ message: 'Bad Request: Missing request body' }, { status: 400 });
    }

    const { username, password } = body;

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { message: 'Bad Request: Username and password are required' },
        { status: 400 }
      );
    }

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials: User not found' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials: Incorrect password' }, { status: 401 });
    }

    // Generate JWT
    let token;
    try {
      token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
        expiresIn: '1h',
      });
    } catch (tokenError) {
      console.error("JWT generation error:", tokenError);
      return NextResponse.json(
        { message: 'Internal Server Error: Token generation failed', error: tokenError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}
