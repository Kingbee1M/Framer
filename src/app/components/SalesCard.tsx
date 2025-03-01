import UIButton from "./UIButton"
import Image from "next/image"

interface salesProps {
    plan: string
    popularity?: string | null
    cost: string
    start: string
    vari: "primary" | "secondary" | "alpha" | "beta"
    tick: string
    specs: string[]
}

export default function SalesCard ({plan, popularity, cost, start, specs, vari, tick}: salesProps) {
    return (
        <div className="w-4/5 h-auto shadow-custom rounded-xl flex flex-col justify-center items-center text-center gap-5 py-7">
            <div>
                <p>{plan}</p>
                <p>{popularity}</p>
                <p>{cost}</p>
            </div>
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