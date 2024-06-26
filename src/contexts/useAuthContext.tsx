import { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  authUser: any; // You can replace 'any' with a specific type if known
  setAuthUser: (user: any) => void;
}

export const AuthContext = createContext<AuthContextType>({
  authUser: null,
  setAuthUser: () => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authUser, setAuthUser] = useState<any>(() => {
    // Stores the data from the "user-token" in the authUer

    const storedUser = localStorage.getItem("user-token");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
