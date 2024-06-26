import React, {useState, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuth] = useState(false);
    const [userName, setUserName] = useState("admin");
    const [userRole, setUserRole] = useState("admin")
    const [userId, setUserId] = useState(1)
    return (
      <AuthContext.Provider value={{ isAuthenticated, userName, userRole, userId, toogleAuth: () => setAuth(prev => !prev), setUserName, setUserRole, setUserId}}>
        {children}
      </AuthContext.Provider>
    );
};