import UIButton from "./UIButton"
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

export default function SignUp (){
    return (
        <div className="relative w-full flex justify-center items-center bg-gradient-to-b from-secGradStart from-30% to-secGradEnd to-70% py-16 lg:py-32 overflow-hidden ">
            <Image src="/images/emojistar 1.svg" alt="emojistar" width={100} height={100} className="w-3/4 hidden md:flex lg:hidden" />
            <Image src="/images/emojistar wide.svg" alt="emojistar" width={100} height={100} className="w-full hidden lg:flex lg:absolute lg:w-1/4 lg:bottom-[100px] lg:right-[1100px]" />
            <div className="w-4/5 font-main flex flex-col justify-center items-center gap-6 ">
            <div className="w-1/2 text-center text-[24px] font-extrabold">
                <p>Sign Up for <span className="bg-text-gradient bg-clip-text text-transparent">free today</span></p>
            </div>
            <p className="lg:w-1/3 text-center">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
            <div className="w-full flex flex-row justify-center items-center gap-2 text-sm mt-4">
                <UIButton variant="primary">Get for free</UIButton>
                <div className="flex flex-row justify-center items-center gap-2" ><UIButton variant="secondary">Learn more</UIButton><FaArrowRightLong /></div>
            </div>
            </div>
            <Image src="/images/helix2 1.svg" alt="emojistar" width={100} height={100} className="w-3/4 hidden md:flex lg:hidden" />
            <Image src="/images/helix2 wide.svg" alt="emojistar" width={100} height={100} className="w-full hidden lg:flex lg:absolute lg:w-1/4 bottom-[10px] left-[1100px]" />
        </div>
    )
}