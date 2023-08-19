import { FirebaseApp, FirebaseError, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const transformFirebaseErrorMessage = (message: string): string | null => {
  const modifiable = message.split('/').pop();

  if (!modifiable) {
    return null;
  }

  const finalString = modifiable?.replace(/-/g, ' ');
  const upperCased = finalString?.charAt(0).toUpperCase() + finalString?.slice(1);

  // uppercase first letter
  return upperCased;
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const initializeFirebase = (): FirebaseApp => initializeApp(firebaseConfig);
export const handleFirebaseError = (e: unknown): string => {
  let message = 'Something unexpected happend';

  if (e instanceof FirebaseError) {
    message = transformFirebaseErrorMessage(e.code) || message;
  }

  return message;
};
