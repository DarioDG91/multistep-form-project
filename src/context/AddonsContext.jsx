import { createContext, useState } from "react";

const AddonsContext = createContext();

function AddonsProvider({ children }) {
  const [selectedAddonsValue, setSelectedAddonsValue] = useState([]);

  const value = {
    selectedAddonsValue,
    setSelectedAddonsValue,
  };

  return (
    <AddonsContext.Provider value={value}>{children}</AddonsContext.Provider>
  );
}

export { AddonsContext, AddonsProvider };
