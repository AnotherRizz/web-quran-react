import React from "react";
import Button from "../Components/Elements/Buttons";
import Links from "../Components/Elements/Links";

const WelcomeScreen = () => {
  return (
    <div className="font-inter flex w-full h-screen items-center">
      <div className="text-center md:mx-auto">
        <h1 className=" text-4xl mb-5 font-extrabold text-blue-900">Quran.id</h1>
        <img
          src="/images/welcome.png"
          alt="first-page"
          className=" w-[75%] rounded-3xl mx-auto md:w-1/3"
        />
        <Links to="/home">
          <Button variant=" bg-orange-500 rounded-full  px-6 relative bottom-5">Get Started</Button>
        </Links>
      </div>
    </div>
  );
};

export default WelcomeScreen;
