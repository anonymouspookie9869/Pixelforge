import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';

export async function POST(req: NextRequest) {
  try {
    const { name, businessName, email, phone, country, type, budget, message } = await req.json();

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Valid name is required.' }, { status: 400 });
    }
    
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email address is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const db = getAdminDb();

    const submissionRef = await db.collection('contactSubmissions').add({
      name: name.trim(),
      businessName: businessName?.trim() || '',
      email: email.trim(),
      phone: phone?.trim() || '',
      country: country?.trim() || '',
      type: type || '',
      budget: budget || '',
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'new'
    });

    return NextResponse.json({ success: true, id: submissionRef.id });

  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    
    if (error.message?.includes('Firebase Admin environment variables are missing')) {
      return NextResponse.json(
        { error: 'Backend is not fully configured yet. Missing Firebase Secrets.', details: error.message },
        { status: 500 }
      );
    }
    
    if (error.message?.includes('Cloud Firestore API has not been used')) {
      return NextResponse.json(
        { error: 'Cloud Firestore API is not enabled. Please enable it in your Google Cloud Console for this project and try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ error: 'Internal server error while processing request.' }, { status: 500 });
  }
}
