import Image from "next/image";
import FirstComp from "./components/firstComp";
import secondComp from "./components/secondComp";


const canvas =  "flex flex-col justify-center item-center"
export default function Home() {
  return (
    <div className={canvas}>
    <FirstComp />
    <Image src="/images/Logo Ticker.svg" width={500} height={500} alt="logo" className="w-full h-auto block md:hidden lg:hidden"/>
    <Image src="/images/Logo Ticker.svg" width={500} height={500} alt="logo" className="w-full h-auto hidden md:block lg:hidden"/>
    <Image src="/images/Logo Ticker.svg" width={500} height={500} alt="logo" className="w-full h-auto hidden md:hidden lg:block"/>
    <secondComp />

    </div>
  );
}
