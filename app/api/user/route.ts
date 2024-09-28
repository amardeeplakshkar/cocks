import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const userData = await req.json();

    // Validate user data
    if (!userData || !userData.id) {
      return NextResponse.json({ error: 'Invalid user data' }, { status: 400 });
    }

    // Log the received user data for debugging
    console.log('Received user data:', userData);

    // Check if user already exists
    let user = await prisma.user.findUnique({
      where: { telegramId: userData.id },
    });

    // If user does not exist, create a new user
    if (!user) {
      user = await prisma.user.create({
        data: {
          telegramId: userData.id,
          username: userData.username || '',
          firstName: userData.first_name || '',
          lastName: userData.last_name || '',
        },
      });

      console.log('Created new user:', user);
    } else {
      console.log('User found:', user);
    }

    // Return the user data
    return NextResponse.json(user);
  } catch (error) {
    // Explicitly cast error to type `Error`
    console.error('Error processing user data:', error);

    // Use error.message if available
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json({ error: 'Internal server error', details: errorMessage }, { status: 500 });
  }
}
