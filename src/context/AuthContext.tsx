import { createContext, useContext, useState } from "react";
import { User } from "../types";
interface ChildrenProps {
  children: React.ReactNode;
}

interface AuthContextType {
  authUser: User | null;
  setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  authUser: null,
  setAuthUser: () => null,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const ls = localStorage.getItem("chat-user");

  let authUser: User | null = null;

  if (ls) {
    try {
      authUser = JSON.parse(ls);
    } catch (error) {
      console.error("Error parsing localStorage:", error);
    }
  }

  const [authUserState, setAuthUserState] = useState<User | null>(authUser);

  return (
    <AuthContext.Provider value={{ authUser: authUserState, setAuthUser: setAuthUserState}}>
      {children}
    </AuthContext.Provider>
  );
};
