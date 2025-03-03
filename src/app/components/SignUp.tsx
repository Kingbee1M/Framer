import UIButton from "./UIButton"
import { FaArrowRightLong } from "react-icons/fa6";

export default function SignUp (){
    return (
        <div className="w-full flex justify-center items-center bg-gradient-to-b from-secGradStart from-30% to-secGradEnd to-70% py-16">
            <div className="w-4/5 font-main flex flex-col justify-center items-center gap-6 ">
            <div className="w-1/2 text-center text-[24px] font-extrabold">
                <p>Sign Up for <span className="bg-text-gradient bg-clip-text text-transparent">free today</span></p>
            </div>
            <p>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
            <div className="w-full flex flex-row justify-center items-center gap-2 text-sm mt-4">
                <UIButton variant="primary">Get for free</UIButton>
                <div className="flex flex-row justify-center items-center gap-2" ><UIButton variant="secondary">Learn more</UIButton><FaArrowRightLong /></div>
            </div>
            </div>
        </div>
    )
}