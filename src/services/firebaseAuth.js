// services/firebaseAuth.js
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase"; // make sure db (Firestore) is imported
import { doc, setDoc } from "firebase/firestore"; 

export const registerUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Optional: update display name in Firebase Auth
    await updateProfile(user, { displayName: name });

    // Optional: Store extra user info in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email,
      name,
      createdAt: new Date(),
    });

    return user;
  } catch (error) {
    throw error;
  }
};
