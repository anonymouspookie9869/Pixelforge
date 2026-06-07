import * as admin from 'firebase-admin';

// Initialize Firebase Admin lazily to prevent server crashes on startup if env vars are missing
let adminDb: admin.firestore.Firestore | null = null;

export function getAdminDb(): admin.firestore.Firestore {
  if (!adminDb) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error('Firebase Admin environment variables are missing. Please configure FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in your Secrets panel.');
    }

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
    }

    adminDb = admin.firestore();
  }

  return adminDb;
}
