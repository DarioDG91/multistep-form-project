import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Root() {
  return (
    <div className=" flex flex-col p-0 bg-magnolia  sm:shadow-lg sm:shadow-gray-20  sm:bg-white sm:p-4 sm:flex-row  sm:h-[37.5rem] sm:rounded-xl">
      <Sidebar />
      <Outlet />
    </div>
  );
}
