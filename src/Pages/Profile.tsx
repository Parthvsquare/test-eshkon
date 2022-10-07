import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

function Profile() {
  const [userName, setUserName] = useState<string>("test 1");
  const [emailId, setEmailId] = useState<string>("test@gmail.com");
  const [translated, setTranslated] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at officia quisquam fugit eum, quod quidem adipisci totam alias, molestias voluptatem facere cupiditate tenetur? Voluptas numquam doloremque distinctio autem ratione
`);
  return (
    <Container className="mx-auto border rounded p-2 mt-2">
      <img
        src="https://images.unsplash.com/photo-1665159693681-9fbad00a9a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        className="img-fluid rounded"
        style={{ height: "30vh", width: "100%", objectFit: "cover" }}
      />

      <div className="d-flex flex-column pt-4 px-2">
        <div className="h2">
          Name
          <span>{userName}</span>
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
        <span className="">{description}</span>
      </div>

      <div className="pt-4 py-2 d-grid">
        <Button className="btn-primary">Translate</Button>
      </div>
    </Container>
  );
}

export default Profile;
