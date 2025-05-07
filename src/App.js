import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  // State för användare
  const [users, setUsers] = useState([]);

  // useEffect körs en gång vid laddning (tom dependency array [])
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched users:", data); // Loggar datan som hämtats
        setUsers(data); // Sparar användarna i state
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // Funktion för att lägga till ny användare
  const addUser = async (user) => {
    try {
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const newUser = await res.json();
      console.log("User added:", newUser); // Logga svaret från servern

      // Uppdatera listan med tidigare användare + ny
      setUsers((prev) => {
        console.log("Previous users:", prev); // Debugga tidigare state
        return [...prev, newUser];
      });
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  const removeUser = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/users/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setUsers((prev) => prev.filter((user) => user.id !== id));
      } else {
        console.error("Error deleting user:", res.statusText);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>User Manager</h1>
      <UserForm onAddUser={addUser} />
      <UserList users={users} onRemoveUser={removeUser} />
    </div>
  );
};

export default App;
