import React, { useState } from "react";
import './WelcomePage/WelcomePage';
import './App.css';

import WelcomePage from './WelcomePage/WelcomePage';
import NavBar from './Partials/NavBar/NavBar';
import AddFriendPage from "./AddFriendPage/AddFriendPage";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <React.Fragment>
      <NavBar isLoggedIn={isLoggedIn}></NavBar>
      <WelcomePage></WelcomePage>
      <AddFriendPage></AddFriendPage>
      {/* {
        isLoggedIn ?
        <AddFriendPage></AddFriendPage>
        :
        <WelcomePage></WelcomePage>
      } */}
    </React.Fragment>
  );
}

export default App;
