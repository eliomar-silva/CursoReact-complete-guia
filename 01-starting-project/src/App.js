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
    <React.Fragment>
      <AddUser onAddUser={addUsersHandler} />
      <CompUsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
