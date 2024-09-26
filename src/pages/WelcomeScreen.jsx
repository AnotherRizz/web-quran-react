import React from "react";
import Button from "../Components/Elements/Buttons";
import Links from "../Components/Elements/Links";

const WelcomeScreen = () => {
  return (
    <div className="font-inter flex w-full h-screen items-center">
      <div className="text-center">
        <img
          src="/images/first-page.png"
          alt="first-page"
          className=" w-2/3 mx-auto"
        />
        <h1 className=" text-4xl font-bold text-blue-900">Quran.id</h1>
        <Links to="/home">
          <Button variant="bg-first px-6 mt-5">Get Started</Button>
        </Links>
      </div>
    </div>
  );
};

export default WelcomeScreen;
