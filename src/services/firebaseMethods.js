import app from './firebase';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("🚀 ~ file: firebaseMethods.js ~ line 11 ~ .then ~ user", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ' - ' + errorMessage);
    });
}