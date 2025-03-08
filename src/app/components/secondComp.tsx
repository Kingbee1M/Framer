import React from "react";
import Image from "next/image";
import Features from "./Features";


export default function SecondComp () {
    const feat = [
        {
            first: "Integration ecosystem",
            second: "Track your progress and motivate your efforts everyday.",
            icon: "/images/Icons.svg"
        },
        {
            first: "Goal setting and tracking",
            second: "Set and track goals with manageable task breakdowns.",
            icon: "/images/Icons (1).svg"
        },
        {
            first: "Secure data encryption",
            second: "Ensure your data’s safety with top-tier encryption.",
            icon: "/images/Icons (2).svg"
        },
        {
            first: "Customizable notifications",
            second: "Get alerts on tasks and deadlines that matter most.",
            icon: "/images/Icons (3).svg"
        },
    ]
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center gap-1 font-main mt-20 break-words">
            <div className="w-4/5 h-auto flex flex-col justify-center items-center gap-6 font-main">
            <div className="font-semibold  border-solid border-greyBorder border rounded-2xl px-3 py-2 text-[10px]">Boost your productivity</div>
            <div className="font-head text-[22px] font-[800] text-center">A more effective way to <p className="text-lightBlue">track progress.</p></div>
            <div className="purpleFont break-words text-center text-[15px] text-purpleFont md:w-3/5 lg:w-1/3">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</div>
            </div>
            <div className="bg-gradient-to-b from-secGradStart to-secGradEnd w-full flex flex-col justify-center items-center gap-6 pb-16 relative">
                <Image src="/images/Product Image.svg" width={500} height={500} alt="product" className="w-full h-auto "/>
                <Image src="/images/pyramid 1.svg" alt="pyramid" width={100} height={100} className="hidden md:flex md:w-15p md:absolute md:right-0 md:top-[20px]" />
                <Image src="/images/torus 1.svg" alt="tarus" width={100} height={100} className="hidden md:flex md:absolute md:w-1/5 md:left-0 md:top-[200px]" />
                <div className="w-full flex flex-col items-center gap-16 mt-6 md:w-screen md:flex-row md:flex-wrap md:justify-center lg:w-full lg:flex-row lg:flex-nowrap lg:gap-10 lg:justify-center lg:items-center">
                    {feat.map((feature, index) => (
                        <Features key={index} first={feature.first} second={feature.second} icon={feature.icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}