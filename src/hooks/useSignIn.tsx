import { signInWithEmailAndPassword, UserCredential } from "@firebase/auth";
import { useState } from "react";
import { auth } from "../fbase/firebase";

function useSignIn(email: string, password: string) {
  const [authData, setAuthData] = useState<UserCredential>();
  const [error, setError] = useState();

  signInWithEmailAndPassword(auth, email, password)
    .then((user) => setAuthData(user))
    .catch((error) => {
      setError(error);
    });
  return {
    authData,
    error,
  };
}

export default useSignIn;
