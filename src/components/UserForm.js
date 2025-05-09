import React, { useState } from "react";

const UserForm = ({ onAddUser }) => {
  // Lokalt state för formulärfält
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Hanterar formulärets submit-event
  const handleSubmit = (e) => {
    e.preventDefault(); // Stoppar sidomladdning
    if (!name || !email) return; // Validering

    const newUser = {
      name,
      email,
    };

    console.log("Submitting new user:", newUser); // Logga innan skickas
    onAddUser(newUser); // Skicka till parent-komponent
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Name:"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          placeholder="Email:"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default UserForm;
