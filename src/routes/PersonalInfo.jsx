import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function PersonalInfo() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(() => {
    const storedValues = localStorage.getItem("userInfo");
    return storedValues
      ? JSON.parse(storedValues)
      : { name: "", email: "", phoneNumber: "" };
  });

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);

  // Effect to persist input values object to localStorage on change
  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  // Effect to retrieve input values object from localStorage on component mount
  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("userInfo"));
    if (storedValues !== null) {
      setUserInfo(storedValues);
    }
  }, []);

  function onChangeName(e) {
    setUserInfo((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  }

  function onChangeEmail(e) {
    setUserInfo((prev) => {
      return {
        ...prev,
        email: e.target.value,
      };
    });
  }
  function onChangeNumber(e) {
    setUserInfo((prev) => {
      return {
        ...prev,
        phoneNumber: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (userInfo.name === "") {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
    if (userInfo.email === "") {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
    if (userInfo.phoneNumber === "") {
      setIsNumberValid(false);
    } else {
      setIsNumberValid(true);
    }

    if (userInfo.name && userInfo.email && userInfo.phoneNumber) {
      navigate("/selectplan");
    }
  }

  return (
    <main className=" flex flex-col justify-between ">
      <div className=" bg-white mx-4 mb-4 px-6 py-8 rounded-lg -translate-y-[4.5rem] shadow-lg shadow-gray-200 sm:shadow-transparent sm:translate-y-0  sm:px-20 sm:py-10 sm:mx-0 ">
        <Header
          title="Personal Info"
          paragraph="Please provide your name, email address, and phone number."
        />
        <form id="form" onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-4 sm:gap-5">
            <Input
              onChange={onChangeName}
              isValid={isNameValid}
              id="name"
              label="Name"
              type="text"
              placeholder="e.g. Stephen King"
              value={userInfo.name}
            />
            <Input
              onChange={onChangeEmail}
              isValid={isEmailValid}
              id="email"
              label="Email Address"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              value={userInfo.email}
            />
            <Input
              onChange={onChangeNumber}
              isValid={isNumberValid}
              id="phone"
              label="Phone Number"
              type="number"
              inputType="tel"
              placeholder="e.g. +1 234 567 890"
              value={userInfo.phoneNumber}
            />
          </div>
        </form>
      </div>
      <div className="absolute bottom-0 w-full sm:static p-4 flex justify-end items-center bg-white sm:px-20">
        <button
          form="form"
          type="submit"
          className=" px-4 py-2 rounded-md  bg-marineBlue text-sm font-bold text-white  sm:py-3 sm:px-5 sm:text-base transition ease-in-out delay-75 hover:opacity-80 "
        >
          Next Step
        </button>
      </div>
    </main>
  );
}
