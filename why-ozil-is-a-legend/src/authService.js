import { auth } from "./Firebase";

import { onAuthStateChanged, signOut } from "firebase/auth";


const listenToAuthChanges = (callback) => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    callback(user);
  });

  return unsubscribe;
};


const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export { listenToAuthChanges ,  getCurrentUser };