import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PlansProvider } from "./context/PlansContext";
import { AddonsProvider } from "./context/AddonsContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import SelectPlan from "./routes/SelectPlan";
import PersonalInfo from "./routes/PersonalInfo";
import Addons from "./routes/Addons";
import Summary from "./routes/Summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <PersonalInfo />
      }, {
        path: "selectplan",
        element: <SelectPlan />
      }, {
        path: "addons",
        element: <Addons />
      }, {
        path: "summary",
        element: <Summary />
      }, 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlansProvider>
      <AddonsProvider>
        <RouterProvider router={router} />
      </AddonsProvider>
    </PlansProvider>
  </React.StrictMode>
);
