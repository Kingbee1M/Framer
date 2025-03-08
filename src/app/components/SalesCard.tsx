import UIButton from "./UIButton"
import Image from "next/image"

interface salesProps {
    plan: string
    popularity?: string | null
    cost: string
    start: string
    vari: "primary" | "secondary" | "alpha" | "beta"
    tick: string
    theme: string
    extheme: string
    specs: string[]
}

export default function SalesCard ({plan, popularity, cost, start, specs, vari, tick, theme, extheme}: salesProps) {
    return (
        <div className={`w-4/5 h-auto shadow-custom rounded-3xl flex flex-col justify-center items-center text-center gap-5 py-12 ${theme} font-main md:py-44`}>
            <div className="w-4/5">
                <p className="w-full text-left text-grey">{plan}</p>
                <p>{popularity}</p>
            </div>
            <p className="w-4/5 text-left text-grey"><span className={`text-black text-[30px] font-extrabold ${extheme}`}>{cost}</span>/monthly</p>
            <UIButton variant={vari}>{start}</UIButton>
            <div className="flex flex-col gap-2">
                {specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <img src={tick} alt="Tick" className="w-4 h-4" />
                        <p>{spec}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}