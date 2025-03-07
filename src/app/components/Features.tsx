import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

interface featProps {
        first: string;
        second: string;
        icon: string;
    }

export default function Features ({ first, second, icon}: featProps) {

    return (
        <div className="md:w-1/3 lg:w-1/5 flex flex-col justify-start items-start gap-2 text-[16px]">
            <div><Image src={icon} alt="icon" width={30} height={30} /></div>
            <p className="font-bold">{first}</p>
            <p>{second}</p>
            <div className="flex flex-row justify-start items-center gap-3"><p>learn more</p><FaArrowRightLong /></div>
        </div>
    )
}