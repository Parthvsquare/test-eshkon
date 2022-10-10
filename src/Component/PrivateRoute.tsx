import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
import { selectUser } from "../store/userSlice";

// interface IProps {
//   children: any;
//   user: any;
// }
const PrivateRoute = ({ children }: any) => {
  const user = useSelector(selectUser);
  console.log(
    "===> ~ file: PrivateRoute.tsx ~ line 9 ~ PrivateRoute ~ user",
    user
  );
  //   eslint-disable-next-line no-extra-boolean-cast
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
