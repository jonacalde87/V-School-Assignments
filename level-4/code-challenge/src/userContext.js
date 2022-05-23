// import React, { useState, useEffect } from "react";
import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider(props) {
  const [user, setUser] = useState("vschooler22");

  const login = () => {
    setUser("vschooler22");
  };

  const logout = () => {
    setUser("");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

// challenge 1: pass down the login, logout buttons

