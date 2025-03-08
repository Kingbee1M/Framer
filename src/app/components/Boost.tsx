import SalesCard from "./SalesCard"

export default function Boost () {
    const sales = [
        {
            plan: "Free",
            popularity: null,
            cost: "$0",
            start: "Get started for free",
            vari: "alpha" as const,
            tick: "/images/tickBlack.svg",
            theme: "bg-white text-black lg:mt-[400px]",
            extheme: "text-black",
            specs: [
                "Up to 5 project members",
                "Unlimited tasks and projects",
                "20GB storage",
                "Integrations",
                "Basic support",
            ]
        },
        {
            plan: "Pro",
            popularity: "Most Popular",
            cost: "$9",
            start: "Sign up now",
            vari: "beta" as const,
            tick: "/images/tickWhite.svg",
            theme: "bg-black text-white lg:mt-[200px]",
            extheme: "text-white",
            specs: [
                "Up to 50 project members",
                "Unlimited tasks and projects",
                "50GB storage",
                "Integrations",
                "Priority support",
                "Advanced support",
                "Export support",
            ]
        },
        {
            plan: "Business",
            popularity: null,
            cost: "$19",
            start: "Sign up now",
            vari: "alpha" as const,
            tick: "/images/tickBlack.svg",
            theme: "bg-white text-black",
            extheme: "text-black",
            specs: [
                "Up to 5 project members",
                "Unlimited tasks and projects",
                "200GB storage",
                "Integrations",
                "Dedicated account manager",
                "Custom fields",
                "Advanced analytics",
                "Export capabilities",
                "API access",
                "Advanced security features",
            ]
        },
    ]
    return (
        <div className="w-full flex flex-col justify-center items-center gap-1 font-main mt-20">
            <div className="font-semibold  border-solid border-greyBorder border rounded-2xl px-3 py-2 text-[10px]">Boost your prouductivity</div>
            <div className="font-head text-[22px] font-[800] text-center">A more effective way <p className="text-lightBlue">tract Progress</p></div>
            <div className="purpleFont break-words text-center text-[15px] text-purpleFont md:w-3/5 lg:w-1/3">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</div>
            <div className="w-full flex flex-col justify-center items-center mt-20 gap-10 lg:flex-row lg:flex-wrap">
                {sales.map ((Sales, index) => (
                    <SalesCard key={index} plan={Sales.plan} popularity={Sales.popularity} cost={Sales.cost} start={Sales.start} vari={Sales.vari} tick={Sales.tick} theme={Sales.theme} extheme={Sales.extheme} specs={Sales.specs} />
                ))}
            </div>
        </div>
    )
}