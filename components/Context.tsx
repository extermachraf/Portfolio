"use client";
import { createContext, useContext } from "react";
import Informations from "@/components/Informations";
import { ReactNode } from "react";
// const data = Informations();
// const dataContext = createContext<Data>(data);
interface Projects {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

interface Data {
  projects: Projects[];
}

const data: Data = Informations();
const DataContext = createContext<Data | undefined>(undefined);
export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
