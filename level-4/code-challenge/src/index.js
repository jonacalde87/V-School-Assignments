import React from "react";
import ReactDOM from 'react-dom/client';
import { UserProvider } from "./userContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
);

/*
    Code Challenge Level 4:
Part 1: 
[x] 1. Pass down the user state, login 
and logout functions into the value prop 
[x] 2. Wrap the whole app in the UserProvider tags

Part 2: 
[x] 1. Import useContext
[x] 2. Consume UserContext in the Profile 
component by displaying the user's username

Part 3: 
[x] Use the React Router Dom library to split the
Home and Profile components to their own pages.
Render in the app component. Home should be rendered
by default.

Extra Credit - Functionality: (no thank you)
1. Add functionality to the Profile page by 
making the button either call the logout button if 
the user is logged in (and conditionally render
the username), or 
2. call the login button if the 
user is logged out (and conditionally render
"User" instead of the username)
*/
