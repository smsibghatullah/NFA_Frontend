import bcrypt from 'bcryptjs';
import connectToDatabase from '../../../lib/db';
import User from '../../../admin/models/User';
import { NextResponse } from 'next/server';

// Named export for the POST method
export async function POST(req) {
  await connectToDatabase();

  try {
    const body = await req.json(); // Parse JSON body

    if (!body) {
      return NextResponse.json({ message: 'Bad Request' }, { status: 400 });
    }

    const { username, password } = body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}
