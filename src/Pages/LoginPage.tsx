import { signInWithEmailAndPassword } from "@firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import OTPBox from "../Component/Login/OTPBox";
import { auth } from "../fbase/firebase";
import { login } from "../store/userSlice";

function LoginPage() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState({
    error: false,
    desc: "none",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    emailRef.current?.focus() && setError({ error: false, desc: "none" });
  }, [emailRef, passwordRef]);

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      emailRef.current &&
      emailRef.current.value === "" &&
      passwordRef.current &&
      passwordRef.current.value === ""
    ) {
      setError({ error: true, desc: "Credentials are empty, Please complete" });
    } else {
      const tempEmailRef = emailRef.current ? emailRef.current.value : "";
      const tempPasswordRef = passwordRef.current
        ? passwordRef.current.value
        : "";
      signInWithEmailAndPassword(auth, tempEmailRef, tempPasswordRef)
        .then((userAuth) => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              profileUrl: userAuth.user.photoURL,
            })
          );
          navigate("/profile");
        })
        .catch((error) => {
          setError({
            error: true,
            desc: "Credentials Not found, Please enter valid Email id and Password",
          });
        });
    }
  };

  return (
    <>
      {error.error && <Alert variant="danger">{error.desc}</Alert>}
      <Container className="h-100vh d-flex align-items-center justify-content-center flex-grow-1">
        <Card style={{ maxWidth: "70%" }} className="m-3">
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                onClick={(e) => handleSignIn(e)}
                variant="primary"
                type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <OTPBox show={show} handleClose={handleClose} />
    </>
  );
}

export default LoginPage;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
