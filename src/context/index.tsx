import { useState, createContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export const Context = createContext({});

function ContextProvider({ children }: any) {
  // TODO
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState('');
  // const navigate = useNavigate();

  // function changeAuth(value: any) {
  //   setIsAuthenticated(value);
  // }
  useEffect(() => {
    console.log(userData);
  }, [userData,]);
  return (
    <Context.Provider
      value={{
        // isAuthenticated,
        // changeAuth,
        userData, 
        setUserData
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
