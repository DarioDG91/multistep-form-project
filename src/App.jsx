import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./routes/PersonalInfo";
import SelectPlan from "./routes/SelectPlan";
import Addons from "./routes/Addons";
import Summary from "./routes/Summary";
import ErrorPage from "./routes/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className=" flex flex-col p-0 bg-magnolia  sm:shadow-lg sm:shadow-gray-20  sm:bg-white sm:p-4 sm:flex-row  sm:h-[37.5rem] sm:rounded-xl">
        <Sidebar />

        <Routes>
          <Route path="/" element={<PersonalInfo />}></Route>
          <Route path="selectplan" element={<SelectPlan />}></Route>
          <Route path="addons" element={<Addons />}></Route>
          <Route path="summary" element={<Summary />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
