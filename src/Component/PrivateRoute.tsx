import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../fbase/firebase";
import { login, logout, selectUser } from "../store/userSlice";

const PrivateRoute = ({ children }: any) => {
  // isauth() returns true or false based on localStorage

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
  //   eslint-disable-next-line no-extra-boolean-cast
  return !!user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
