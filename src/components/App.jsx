import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleEvent(event) {
    const { value, name } = event.target;
    setContact((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email
        };
      } else if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email
        };
      } else if (name === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          onChange={handleEvent}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={handleEvent}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={handleEvent}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
