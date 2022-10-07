import React, { useState } from "react";
import AuthCode from "react-auth-code-input";
import { Button, Card, Container, Form, Modal, Row } from "react-bootstrap";
import OTPBox from "../Component/Login/OTPBox";

function LoginPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="h-100vh d-flex align-items-center justify-content-center flex-grow-1">
        <Card style={{ maxWidth: "70%" }} className="m-3">
          <Card.Body>
            {/* <Form> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={handleShow} variant="primary" type="submit">
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
