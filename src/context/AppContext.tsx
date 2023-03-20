import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }: any) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const toggleMobileNavBar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <AppContext.Provider value={{ mobileSidebarOpen, toggleMobileNavBar }}>
      {children}
    </AppContext.Provider>
  );
};
