import Image from "next/image"



export default function Fotter (){
    return(
        <div className="bg-black text-softGrey font-main">
            <Image src="/images/logosaas.svg" width={30} height={30} alt="logo" />
            <div>Effortlessly turn your ideas into a fully
            functional, responsive, no-code SaaS website.</div>
            <Image src="/images/Socials.svg" width={30} height={30} alt="logo" />
            <Image src="/images/Socials (1).svg" width={30} height={30} alt="logo" />
            <Image src="/images/Socials (2).svg" width={30} height={30} alt="logo" />
            <Image src="/images/Socials (3).svg" width={30} height={30} alt="logo" />
            <Image src="/images/Socials (4).svg" width={30} height={30} alt="logo" />
            <Image src="/images/Socials (5).svg" width={30} height={30} alt="logo" />
        </div>

    )
}