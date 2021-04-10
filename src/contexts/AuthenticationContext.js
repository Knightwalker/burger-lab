import React, { createContext, useEffect, useState } from "react";

const AuthenticationContext = createContext();

const AuthenticationContextProvider = (props) => {
  const [ objUser, setObjUser ] = useState({
    bUserIsAuthenticated: false,
    username: "guest",
  });
  const [ token, setToken ] = useState(null);

  useEffect(() => {
    if (!token) { return; }

    setObjUser({
      bUserIsAuthenticated: true,
      username: token.username,
      user_id: token.user_id,
    });

  }, [token])

  const loginUserWithJWT = (token) => {
    setToken(token);
  }

  const fLogoutUser = () => {
    setObjUser({
      bUserIsAuthenticated: false,
      username: "guest",
    });
    setToken(null);
  }

  return (
    <AuthenticationContext.Provider 
      value={{
        objUser: objUser,
        loginUserWithJWT: loginUserWithJWT,
        fLogoutUser: fLogoutUser
      }} 
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContextProvider;
export { AuthenticationContext };