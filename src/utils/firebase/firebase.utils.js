import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyDXgUWeM5lKlmQrW_942Glx4FD8kEBUcos",
  authDomain: "fshion-db.firebaseapp.com",
  projectId: "fshion-db",
  storageBucket: "fshion-db.appspot.com",
  messagingSenderId: "1082028757715",
  appId: "1:1082028757715:web:c2928ed0c40175c51e7a26"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>signInWithPopup(auth, provider);

export const db = getFirestore();

export const createDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log('error creating the user, error.message');
    }
  }

  return userDocRef;
}
