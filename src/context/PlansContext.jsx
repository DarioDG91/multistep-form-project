import { createContext, useState } from "react";
const PlansContext = createContext();

function PlansProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState({
    plan: "",
    title: "",
    price: null,
  });

  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState({
    title: "",
    price: null,
  });

  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState({
    title: "",
    price: null,
  });

  const value = {
    selectedPlan,
    setSelectedPlan,
    selectedMonthlyPlan,
    setSelectedMonthlyPlan,
    selectedYearlyPlan,
    setSelectedYearlyPlan,
  };

  return (
    <PlansContext.Provider value={value}>{children}</PlansContext.Provider>
  );
}

export { PlansContext, PlansProvider };
