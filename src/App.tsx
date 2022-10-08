import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./fbase/firebase";
import { login, logout, selectUser } from "./store/userSlice";
import LoginPage from "./Pages/LoginPage";

function App() {
  const user = useSelector(selectUser);
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
        dispatch(logout());
        //user is logged out
      }
    });
  }, []);

  return <BrowserRouter>{!user ? <LoginPage /> : <AppRoutes />}</BrowserRouter>;
}

export default App;
