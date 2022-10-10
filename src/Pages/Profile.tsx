import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../fbase/firebase";
import { logout, selectUser } from "../store/userSlice";
import { userBio } from "../assets/data";
import { useTranslation } from "react-i18next";

function Profile() {
  const user = useSelector(selectUser);

  const [userName, setUserName] = useState<string>("test 1");
  const [emailId, setEmailId] = useState<string>("test@gmail.com");
  const [translated, setTranslated] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(userBio);

  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  function handleSignout() {
    auth.signOut();
    dispatch(logout());
  }

  useEffect(() => {
    if (user.email) {
      setEmailId(user.email);
    }
  }, []);

  return (
    <Container className="mx-auto border rounded p-2 mt-2">
      <img
        src="https://images.unsplash.com/photo-1665159693681-9fbad00a9a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        className="img-fluid rounded"
        style={{ height: "30vh", width: "100%", objectFit: "cover" }}
      />

      <div className="d-flex flex-column pt-4 px-2">
        <div className="d-flex flex-row justify-content-between">
          <span className="h2">{userName}</span>
          <Button size="sm" onClick={handleSignout}>
            Sign Out
          </Button>
        </div>

        <ul className="list-group">
          <li className="list-group-item text-capitalize">
            email: <span className="text-lowercase">{emailId}</span>
          </li>
          <li className="list-group-item text-capitalize">
            translated: <span>{translated}</span>
          </li>
        </ul>
      </div>

      <div className="d-flex flex-column pt-4 px-2">
        <span className="h2">Description</span>
        <span className="">{t(description)}</span>
      </div>

      <div className="pt-4 py-2 d-grid">
        <Button>Translate</Button>
      </div>
    </Container>
  );
}

export default Profile;
