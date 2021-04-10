import React, { createContext, useEffect, useState } from "react";

const AuthenticationContext = createContext();

const AuthenticationContextProvider = (props) => {
  const [ token, setToken ] = useState(null);
  const [ objUser, setObjUser ] = useState({
    bUserIsAuthenticated: false,
    username: "guest"
  });

  useEffect(() => {
    if (!token) {
      setObjUser({
        bUserIsAuthenticated: false,
        username: "guest"
      });
      return;
    }

    setObjUser({
      bUserIsAuthenticated: true,
      username: token.username,
      user_id: token.user_id,
    });

  }, [token])

  const loginUserWithJWT = (token) => {
    setToken(token);
  }

  return (
    <AuthenticationContext.Provider 
      value={{
        objUser: objUser,
        loginUserWithJWT: loginUserWithJWT
      }} 
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContextProvider;
export { AuthenticationContext };