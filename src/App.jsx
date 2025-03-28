import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { ContactProvider } from "./context/ContactContext";

const App = () => {
  return (
    <ContactProvider>
      <Navbar />
      <div className="container p-5">
        <Form />
        <ListGroup />
      </div>
    </ContactProvider>
  );
};

export default App;
