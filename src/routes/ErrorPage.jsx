import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function ErrorPage() {
  return (
    <main className=" flex flex-col justify-between ">
      <div className=" bg-white mx-4 mb-4 px-6 py-8 rounded-lg -translate-y-[4.5rem] shadow-lg shadow-gray-200 sm:shadow-transparent sm:translate-y-0  sm:px-20 sm:py-10 sm:mx-0 ">
        <Header
          title="404 - Page Not Found"
          paragraph="The page you are looking for does not exist."
        />
      </div>
      <div className="absolute bottom-0 w-full sm:static p-4 flex justify-end items-center bg-white sm:px-20">
        <Link to='/' className=" px-4 py-2 rounded-md  bg-marineBlue text-sm font-bold text-white  sm:py-3 sm:px-5 sm:text-base transition ease-in-out delay-75 hover:opacity-80 "
>Go Back</Link> 
      </div>
    </main>
  );
}

