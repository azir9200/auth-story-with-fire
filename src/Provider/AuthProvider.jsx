import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";

export const AuthContext = createContext(null);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loadering, setLoading] = useState(true);

  // const googleSignIn = (value) => {
  //   return signInWithPopup(auth, googleProvider);
  // };


  const createUser = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

  }
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(
      auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }

    )
    return () => {
      unSubscribe();
    }

  }, [])

  const authInfo = { user, createUser, signIn, logOut, loadering };

  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;