import React from "react";
import UIButton from "./UIButton";


export default function FirstComp() {
  return (
    <div className= "full flex flex-col justify-center items-center md:flex-row justify-ceneter items-ceneter h-screen bg-gradient-to-t from-gradientStart to-gradientend pt-20 font-main">
      <div className="w-85p">
      <div className="flex flex-col justify-left item-start gap-6">
      <div className="font-main text-sm">Version 2.0 is here</div>
      <div className="font-main text-5xl font-semibold text-black">Pathway to <span className="text-lightBlue">productivity</span></div>
      <div className="text-lightBlue">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</div>
      <div className="w-4/5 flex flex-row justify-start items-center gap-2 text-sm">
        <UIButton variant="primary">Get for free</UIButton>
        <UIButton variant="secondary">Learn more</UIButton>
      </div>
      </div>
      <div className="w-full flex flex-row justify-center item-center">
        <div className="hidden md:flex"><img src="./images/half-torus 1.svg" alt="visual" /></div>
        <div className="flex"><img src="./images/Visual.svg" alt="visual" /></div>
        <div className="hidden lg:flex"><img src="./images/cylinder 1.svg" alt="visual" /></div>
        </div>
      </div>
    </div>
  );
}