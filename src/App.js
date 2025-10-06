import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UserForm from "./UserForm";
import Success from "./Success";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  return (
    <div className="container">
      {!isLoggedIn && !userData && (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      )}

      {isLoggedIn && !userData && (
        <UserForm onSubmit={(data) => setUserData(data)} />
      )}

      {userData && <Success data={userData} />}
    </div>
  );
}

export default App;
