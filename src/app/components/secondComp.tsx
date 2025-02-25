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
        <div className="w-full h-auto flex flex-col justify-center items-center gap-1 font-main mt-20">
            <div className="w-4/5 h-auto flex flex-col justify-center items-center gap-6 font-main">
            <div className="font-semibold  border-solid border-greyBorder border rounded-2xl px-3 py-2 text-[10px]">Boost your productivity</div>
            <div className="font-head text-[22px] font-[800] text-center">A more effective way to <span className="text-lightBlue">track progress</span></div>
            <div className="purpleFont break-words text-center text-[15px] text-purpleFont">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</div>
            </div>
            <div className="bg-gradient-to-b from-secGradStart to-secGradEnd w-full flex flex-col justify-center items-center gap-6">
                <Image src="/images/Product Image.svg" width={500} height={500} alt="product" className="w-full h-auto "/>
                <div className="w-4/5 flex flex-col items-center gap-16 mt-6">
                    {feat.map((feature, index) => (
                        <Features key={index} first={feature.first} second={feature.second} icon={feature.icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}