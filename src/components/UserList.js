import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p> // Visa detta om listan är tom
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
