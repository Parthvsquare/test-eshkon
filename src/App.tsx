import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./fbase/firebase";
import { login, logout } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
