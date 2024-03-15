import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

import Header from "../components/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main
      style={{
        top: "calc(50% - 142px)",
        right: "calc(50% - 179.095px)",
      }}
      className=" flex flex-col items-center justify-center absolute  "
    >
      <div className="p-8 bg-white   rounded-lg ] shadow-lg shadow-gray-200  ">
        <Header
          title="Oops!"
          paragraph="Sorry, an unexpected error has occurred."
        />
        <p className=" text-coolGray ">
          <i>{error.statusText || error.message}</i>
        </p>
        <div className=" w-full mt-12 flex justify-center items-center bg-white sm:px-20">
          <Link
            to="/"
            className=" px-4 py-2 rounded-md  bg-marineBlue text-sm font-bold text-white  sm:py-3 sm:px-5 sm:text-base transition ease-in-out delay-75 hover:opacity-80 "
          >
            Go Back
          </Link>
        </div>
      </div>
    </main>
  );
}
