import React from "react";

const UserList = ({ users, onRemoveUser }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p> // Visa detta om listan är tom
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <div className="user-info">
                <strong>{user.name}</strong> – {user.email}
              </div>
              <button onClick={() => onRemoveUser(user.id)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
