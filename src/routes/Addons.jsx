import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AddonsContext } from "../context/AddonsContext";
import { PlansContext } from "../context/PlansContext";
import { monthlyAddons, yearlyAddons } from "../../data";
import Header from "../components/Header";

export default function Addons() {
  const navigate = useNavigate();
  const { selectedPlan, setSelectedPlan } = useContext(PlansContext);
  const { selectedAddonsValue, setSelectedAddonsValue } =
    useContext(AddonsContext);

  // Function to handle checkbox click and update the array state
  function handleCheckboxChange(value) {
    // Check if the value is already in the array
    const newArray = selectedAddonsValue.includes(value)
      ? selectedAddonsValue.filter((item) => item !== value) // If it's present, remove it
      : [...selectedAddonsValue, value]; // If it's not present, add it

    setSelectedAddonsValue(newArray); // Update the array state
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/summary");
  }

  function resetAddonsAndPlans(){
    setSelectedAddonsValue([])
    setSelectedPlan({})
  }

  let addonsPlans;

  if (selectedPlan.plan === "" || selectedPlan.plan === "monthly") {
    addonsPlans = monthlyAddons;
  } else {
    addonsPlans = yearlyAddons;
  }

  return (
    <>
      <main className=" flex flex-col justify-between">
        <div className=" bg-white mx-4  -mb-8 px-6 py-[1.8rem] rounded-lg -translate-y-[4.5rem] shadow-lg shadow-gray-200 sm:shadow-transparent sm:translate-y-0 sm:px-20 sm:py-10 sm:mx-0">
          <Header
            title="Pick add-ons"
            paragraph="Add-ons help enhance your gaming experience."
          />
          <form
            onSubmit={handleSubmit}
            id="form"
            className=" flex flex-col gap-3"
          >
            {addonsPlans.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={` ${
                    selectedAddonsValue.includes(item)
                      ? "bg-magnolia border-marineBlue"
                      : ""
                  } flex justify-between items-center  px-4 py-3 border-lightGrey rounded-md border-2 sm:px-6 sm:w-[28rem]`}
                >
                  <div className="flex items-center gap-4 sm:gap-6 ">
                    <input
                      checked={selectedAddonsValue.includes(item)}
                      onChange={() => handleCheckboxChange(item)}
                      name="addons[]"
                      value={item.title}
                      id={item.title}
                      type="checkbox"
                      className=" w-5 h-5 "
                    />
                    <label htmlFor={item.title}>
                      <h2 className=" text-marineBlue text-sm font-semibold sm:text-base">
                        {item.title}
                      </h2>
                      <p className="text-xs text-coolGray sm:text-[0.9rem]">
                        {item.description}
                      </p>
                    </label>
                  </div>
                  <p className=" text-xs font-semibold  text-purplishBlue">
                    +${item.price}/
                    {selectedPlan.plan === "yearly" ? "yr" : "mo"}
                  </p>
                </div>
              );
            })}
          </form>
        </div>
        <div className=" absolute bottom-0 w-full sm:static p-4 flex items-center justify-between bg-white sm:px-20">
          <Link
            onClick={resetAddonsAndPlans}
            to="/selectplan"
            className=" text-sm text-coolGray sm:text-md sm:font-semibold transition ease-in-out delay-75 hover:text-marineBlue"
          >
            Go Back
          </Link>
          <button
            form="form"
            type="submit"
            className=" px-4 py-2 rounded-md  bg-marineBlue text-sm font-bold text-white  sm:py-3  sm:px-5 sm:text-base transition ease-in-out delay-75 hover:opacity-80 "
          >
            Next Step
          </button>
        </div>
      </main>
    </>
  );
}
