import { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: User | null;
  setAuth: any;
  setUserData: any;
}

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  const setAuth = (authUser: any) => {
    setUser(authUser);
  };

  const setUserData = (userData: any) => {
    setUser({ ...userData });
  };

  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
