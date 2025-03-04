import Image from "next/image"
import FootLink from "../FootLink"

export default function Fotter (){
    const footerLinks: [string, string[]][] = [
        ["Product", ["Features", "Integrations", "Updates", "FAQ", "Pricing"]],
        ["Company", ["About", "Blog", "Careers", "Manifesto", "Press", "Contact"]],
        ["Resources", ["Examples", "Community", "Guides", "Docs"]],
        ["Legal", ["Privacy", "Terms", "Security"]],
    ];
    return(
        <div className="bg-black text-softGrey font-main py-16 flex justify-center items-center">
            <div className="w-90p flex flex-col md:justify-between lg:justify-between">
            <div className="flex flex-col justify-start gap-5">
            <Image src="/images/logosaas (2).svg" width={60} height={60} alt="logo" />
            <div>Effortlessly turn your ideas into a fully
            functional, responsive, no-code SaaS website.</div>
            <div className="flex flex-row justify-start items-center">
            <Image src="/images/Socials.svg" width={30} height={30} alt="logo" />
            <Image src="/images/Socials (1).svg" width={30} height={30} alt="logo" />
            <Image src="/images/Socials (2).svg" width={30} height={30} alt="logo" />
            <Image src="/images/Socials (3).svg" width={30} height={30} alt="logo" />
            <Image src="/images/Socials (4).svg" width={30} height={30} alt="logo" />
            <Image src="/images/Socials (5).svg" width={30} height={30} alt="logo" />
            </div>
            </div>
            <div className="flex flex-col justify-start">
                {footerLinks.map(([title, content], index) => (
                    <FootLink key={index} title={title} content={content} />
                ))}
            </div>
            </div>
        </div>
    )
}