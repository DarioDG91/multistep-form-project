import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { PlansContext } from "../context/PlansContext";
import { AddonsContext } from "../context/AddonsContext";
import iconThankYou from "../assets/images/icon-thank-you.svg";
import Header from "../components/Header";

export default function Summary() {
  const { selectedPlan, setSelectedPlan } = useContext(PlansContext);
  const { selectedAddonsValue, setSelectedAddonsValue } =
    useContext(AddonsContext);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const total =
    selectedPlan.price +
    selectedAddonsValue.reduce(
      (accumulator, currentItem) => accumulator + currentItem.price,
      0
    );

  function handleConfirmationClick() {
    setIsConfirmed(true);
    setSelectedAddonsValue([]);
    setSelectedPlan({});
  }

  const summary = (
    <main className=" flex flex-col justify-between sm:pl-[6.5rem] sm:pr-[5.5rem] ">
      <div className=" bg-white mx-4  -mb-8 px-6 sm:px-0 py-[1.8rem] rounded-lg -translate-y-[4.5rem] shadow-lg shadow-gray-200 sm:shadow-transparent sm:translate-y-0  sm:py-10 sm:mx-0">
        <Header
          title="Finishing Up"
          paragraph="Double-check everything looks OK before confirming."
        />

        {selectedPlan.plan === "" ? (
          <p className="text-xl text-red-500">
            You did NOT select any plan, please choose one{" "}
            <Link
              className=" underline"
              onClick={() => setSelectedAddonsValue([])}
              to="/selectplan"
            >
              here
            </Link>{" "}
          </p>
        ) : (
          <div>
            <div className=" rounded-md bg-magnolia p-4 sm:px-6 sm:min-w-[28rem]">
              <div className=" flex items-center justify-between mb-2 sm:mb-5 ">
                <div>
                  {selectedPlan.title && (
                    <p className=" text-marineBlue font-semibold text-sm sm:text-base">
                      {selectedPlan.title} (
                      {selectedPlan.plan[0].toUpperCase() +
                        selectedPlan.plan.substring(1)}
                      )
                    </p>
                  )}
                  <Link
                    className="text-sm text-coolGray font-semibold underline"
                    onClick={() => setSelectedAddonsValue([])}
                    to="/selectplan"
                  >
                    Change
                  </Link>
                </div>
                <p className=" text-marineBlue text-sm font-bold sm:text-base">
                  ${selectedPlan.price}/
                  {selectedPlan.plan === "monthly" ? "mo" : "yr"}
                </p>
              </div>
              <hr />
              <ul>
                {selectedAddonsValue.map((item) => {
                  return (
                    <li key={item.id} className=" mt-3 sm:mt-4">
                      <div className=" flex items-center justify-between">
                        <p className="text-sm  text-coolGray font-semibold">
                          {item.title}
                        </p>
                        <p className=" text-marineBlue text-sm  font-semibold">
                          +${item.price}/{item.plan === "monthly" ? "mo" : "yr"}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className=" flex items-center justify-between px-4 mt-5 sm:mt-8 sm:px-6">
              <p className="  text-sm text-coolGray font-semibold">
                Total (per {selectedPlan.plan === "monthly" ? "month" : "year"})
              </p>
              <p className=" text-md font-bold text-purplishBlue sm:text-xl">
                ${total}/{selectedPlan.plan === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className=" absolute bottom-0 w-full p-4 sm:p-0 sm:static sm:mb-4  flex items-center justify-between bg-white ">
        <Link
          to="/addons"
          className=" text-sm text-coolGray sm:text-base sm:font-semibold transition ease-in-out delay-75 hover:text-marineBlue"
        >
          Go Back
        </Link>
        <button
          onClick={handleConfirmationClick}
          disabled={selectedPlan.plan === ""}
          className=" disabled:opacity-60 px-4 py-2 rounded-md bg-purplishBlue text-sm font-bold text-lightGray   sm:py-3  sm:px-8 sm:text-base transition ease-in-out delay-75 hover:opacity-80 "
        >
          Confirm
        </button>
      </div>
    </main>
  );

  const thankYou = (
    <main className=" flex flex-col items-center justify-center text-center bg-white mx-4 px-6 sm:px-24 py-20 rounded-lg -translate-y-[4.5rem] shadow-lg shadow-gray-200 sm:shadow-transparent sm:translate-y-0 sm:py-24 sm:mx-0 sm:max-w-[40rem]">
      <img
        src={iconThankYou}
        alt="thank you"
        width="55"
        height="55"
        className=" sm:w-20"
      />
      <h1 className=" mt-5 text-2xl text-marineBlue font-bold sm:text-4xl sm:mt-7">
        Thank you!
      </h1>
      <p className=" mt-3 text-coolGray sm:mt-4">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </main>
  );

  return <>{!isConfirmed ? summary : thankYou}</>;
}
