
import React from "react";
const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(null);
  const [loggedInUser, setLoggedInUser] = React.useState(null);

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth,
      loggedInUser,
      setLoggedInUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;