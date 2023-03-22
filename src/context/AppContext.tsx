import React, { createContext, useState } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterMenuOpen: boolean;
  setFilterMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  statusMenuOpen: boolean;
  setStatusMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// export const AppContext = createContext<AppContextType | null>(null);
export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        mobileSidebarOpen: mobileSidebarOpen,
        setMobileSidebarOpen: setMobileSidebarOpen,
        filterMenuOpen: filterMenuOpen,
        setFilterMenuOpen: setFilterMenuOpen,
        statusMenuOpen: statusMenuOpen,
        setStatusMenuOpen: setStatusMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
