import { useContext, useState } from "react";
import { PlansContext } from "../context/PlansContext";
import { Link, useNavigate } from "react-router-dom";
import { monthlyPlans, yearlyPlans } from "../../data";
import Header from "../components/Header";

export default function SelectPlan() {
  const navigate = useNavigate();
  const {
    selectedPlan,
    setSelectedPlan,
    selectedMonthlyPlan,
    selectedYearlyPlan,
  } = useContext(PlansContext);
  const [yearlyPlanToggle, setYearlyPlanToggle] = useState(false);
  const [num, setNum] = useState(0);

  function handleClickToggle() {
    setYearlyPlanToggle((prev) => !prev);
    setSelectedPlan({});
  }

  const getMonthlyDetails = (id) => {
    selectedMonthlyPlan.title = monthlyPlans[id].title;
    selectedMonthlyPlan.price = monthlyPlans[id].price;

    setNum(id + 1);
  };

  const getYearlyDetails = (id) => {
    selectedYearlyPlan.title = yearlyPlans[id].title;
    selectedYearlyPlan.price = yearlyPlans[id].price;

    setNum(id + 1);
  };

  function handleClickPlan(id) {
    if (!yearlyPlanToggle) {
      getMonthlyDetails(id);
      setSelectedPlan((prev) => {
        return {
          ...prev,
          plan: "monthly",
          title: selectedMonthlyPlan.title,
          price: selectedMonthlyPlan.price,
        };
      });
    } else {
      getYearlyDetails(id);
      setSelectedPlan((prev) => {
        return {
          ...prev,
          plan: "yearly",
          title: selectedYearlyPlan.title,
          price: selectedYearlyPlan.price,
        };
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedPlan.plan) {
      alert("Please select a plan");
    } else {
      navigate("/addons");
    }
  }

  let plans;

  if (!yearlyPlanToggle) {
    plans = monthlyPlans;
  } else {
    plans = yearlyPlans;
  }

  return (
    <main className=" flex flex-col justify-between">
      <div className=" bg-white mx-4 mb-6 px-6 py-[1.8rem] rounded-lg -translate-y-[4.5rem] shadow-lg shadow-gray-200 sm:shadow-transparent sm:translate-y-0 sm:px-20 sm:py-10 sm:mx-0">
        <Header
          title="Select your plan"
          paragraph="You have the option of monthly or yearly billing."
        />

        <form id="form" onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-4 sm:flex-row">
            {plans.map((item, index) => {
              return (
                <div
                  onClick={() => handleClickPlan(index)}
                  className={` ${
                    selectedPlan.title === item.title
                      ? "bg-magnolia border-marineBlue"
                      : ""
                  }  rounded-md px-4 py-3 border-2 border-lightGray flex items-center gap-4 transition ease-in-out delay-75 hover:border-marineBlue hover:cursor-pointer sm:flex-col sm:items-start sm:gap-12 sm:min-w-[8.5rem]`}
                  key={item.id}
                >
                  <img src={item.img} alt={`${item.title} plan icon`} />
                  <div>
                    <h2 className=" text-marineBlue text-md font-semibold">
                      {item.title}
                    </h2>
                    <p className=" text-sm text-coolGray">
                      ${item.price}/{!yearlyPlanToggle ? "mo" : "yr"}
                    </p>
                    {yearlyPlanToggle && (
                      <p className=" text-xs text-marineBlue font-medium">
                        {item.extra}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" rounded-md bg-magnolia mt-6 py-3  flex items-center justify-center gap-4">
            <p
              className={`${
                !yearlyPlanToggle ? "text-marineBlue" : "text-coolGray"
              } text-sm font-semibold`}
            >
              Monthly
            </p>
            <label className="toggle-switch">
              <input type="checkbox" />
              <div
                onClick={handleClickToggle}
                className="toggle-switch-background"
              >
                <div className="toggle-switch-handle"></div>
              </div>
            </label>
            <p
              className={`${
                !yearlyPlanToggle ? "text-coolGray" : "text-marineBlue"
              } text-sm font-semibold`}
            >
              Yearly
            </p>
          </div>
        </form>
      </div>
      <div className="absolute bottom-0 w-full sm:static p-4 flex items-center justify-between bg-white sm:px-20">
        <Link
          to="/"
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
  );
}
