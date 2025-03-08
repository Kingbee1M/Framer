import Image from "next/image";
import FirstComp from "./components/firstComp";
import SecondComp from "./components/SecondComp";
import Everything from "./components/Everything";
import Boost from "./components/Boost";
import SignUp from "./components/SignUp";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
    <FirstComp />
    <Image src="/images/Logo Ticker.svg" width={500} height={500} alt="logo" className="w-full h-auto block md:hidden lg:hidden"/>
    <Image src="/images/Logo Ticker (1).svg" width={500} height={500} alt="logo" className="w-full h-auto hidden md:block lg:hidden"/>
    <Image src="/images/Logo Ticker (2).svg" width={500} height={500} alt="logo" className="w-full h-auto hidden md:hidden lg:block"/>
    <SecondComp />
    <Everything />
    <Boost />
    <Image src="/images/Testimonials.svg" width={500} height={500} alt="logo" className="w-full h-auto block md:hidden lg:hidden"/>
    <Image src="/images/Testimonials (1).svg" width={500} height={500} alt="logo" className="w-full h-auto hidden md:block lg:hidden"/>
    <Image src="/images/Testimonials (2).svg" width={500} height={500} alt="logo" className="w-full h-auto hidden md:hidden lg:block"/>
    <SignUp />
    </div>
  );
}
