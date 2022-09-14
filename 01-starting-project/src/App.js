import React, { useState } from "react";


import AddUser from "./components/Users/AddUser";
import CompUsersList from "./components/Users/UsersList";


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      
      <AddUser onAddUser={addUsersHandler} />
      <CompUsersList users={usersList} />
    </div>
  );
}

export default App;
