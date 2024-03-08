// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface LoadingContextProps {
//   loading: boolean;
//   startLoading: () => void;
//   stopLoading: () => void;
// }

// const LoadingContext = createContext<LoadingContextProps | undefined>(
//   undefined
// );

// interface LoadingProviderProps {
//   children: ReactNode;
// }

// export const LoadingProvider: React.FC<LoadingProviderProps> = ({
//   children,
// }) => {
//   const [loading, setLoading] = useState(false);

//   const startLoading = () => setLoading(true);
//   const stopLoading = () => setLoading(false);

//   return (
//     <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// };

// export const useLoading = (): LoadingContextProps => {
//   const context = useContext(LoadingContext);
//   if (!context) {
//     throw new Error("useLoading must be used within a LoadingProvider");
//   }
//   return context;
// };
