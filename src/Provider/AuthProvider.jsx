import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase.config";

export const AuthContext = createContext(null);
// const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const googleSignIn = (value) => {
    return signInWithPopup(auth, googleProvider);
  };


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const signOut = () => {
    return signOut(auth);
  }


  const authInfo = { googleSignIn, user, createUser, signIn, signOut };

  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;