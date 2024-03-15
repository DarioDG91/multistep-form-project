import { useLocation } from "react-router-dom";

const dataSidebar = [
  {
    id: 1,
    step: "step 1",
    title: "your info",
    to: "/",
  },
  {
    id: 2,
    step: "step 2",
    title: "select plan",
    to: "/selectplan",
  },
  {
    id: 3,
    step: "step 3",
    title: "add-ons",
    to: "/addons",
  },
  {
    id: 4,
    step: "step 4",
    title: "summary",
    to: "/summary",
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className=" bg-sidebarMobile bg-no-repeat bg-cover bg-center min-h-44 w-full sm:w-[17rem] sm:bg-sidebarDesktop ">
      <ol className=" p-9 flex justify-center gap-4 sm:flex-col sm:gap-7">
        {dataSidebar.map((item, index) => {
          return (
            <li key={index} className=" flex items-center gap-4">
              <div
                className={`${
                  location.pathname === item.to ? " active-sidebar" : ""
                } text-lightGray bg-transparent border-2 border-lightGray font-medium w-8 h-8 rounded-full grid place-items-center`}
              >
                {item.id}
              </div>
              <div className=" uppercase hidden sm:block">
                <p className=" text-xs text-lightGray ">{item.step}</p>
                <h2 className=" font-bold text-sm tracking-wider text-white">
                  {item.title}{" "}
                </h2>
              </div>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
