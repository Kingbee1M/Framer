import React from "react";
import UIButton from "./UIButton";
import Image from "next/image";


export default function FirstComp() {
  return (
    <div className= "relative w-full flex flex-col justify-center items-center md:flex-row justify-ceneter items-ceneter bg-gradient-to-t from-gradientStart to-gradientend pt-20 font-main py-11 md:py-200 break-words overflow-hidden lg:overflow-visible">
      <div className="w-85p flex flex-col items-start md:flex-row">
      <div className="flex flex-col justify-left item-start gap-6">
      <div className="font-main text-sm">Version 2.0 is here</div>
      <div className="font-main text-5xl font-semibold text-black">Pathway to <span className="text-lightBlue">productivity</span></div>
      <div className="text-lightBlue md:text-[18px]">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</div>
      <div className="w-4/5 flex flex-row justify-start items-center gap-2 text-sm">
        <UIButton variant="primary">Get for free</UIButton>
        <UIButton variant="secondary">Learn more</UIButton>
      </div>
      </div>
      <div className="w-full flex flex-row justify-center item-center">
        <Image src="./images/cylinder 1.svg" alt="visual" width={100} height={100} className="hidden md:flex w-full md:w-1/5 md:absolute md:right-[150px] md:bottom-[450px] lg:w-10p lg:right-[550px]"/>
        <Image src="./images/Visual.svg" alt="visual" width={100} height={100} className="flex w-full md:absolute  md:right-[-280px] md:bottom-[0px] md:w-4/5 xl:absolute lg:w-2/5 lg:right-[100px] lg:bottom-[70px]" />
        <Image src="./images/half-torus 1.svg" alt="visual" width={100} height={100} className="hidden lg:flex w-full xl:absolute lg:w-1/5 lg:right-0 lg:bottom-[-100px]" />
        </div>
      </div>
    </div>
  );
}