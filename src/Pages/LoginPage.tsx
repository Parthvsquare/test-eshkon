import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Button, Card, Container, Form, Modal, Row } from "react-bootstrap";
import OTPBox from "../Component/Login/OTPBox";
import { auth } from "../fbase/firebase";

function LoginPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    // e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => console.log(user))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container className="h-100vh d-flex align-items-center justify-content-center flex-grow-1">
        <Card style={{ maxWidth: "70%" }} className="m-3">
          <Card.Body>
            {/* <Form> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={email}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button onClick={handleSignIn} variant="primary" type="submit">
              Submit
            </Button>
            {/* </Form> */}
          </Card.Body>
        </Card>
      </Container>
      <OTPBox show={show} handleClose={handleClose} />
    </>
  );
}

export default LoginPage;
