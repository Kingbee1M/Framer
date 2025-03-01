
import Image from "next/image"

interface objProps {
    image: string;
    alts: string;
    title: string;
    content: string;
}
export default function Object({image, title, alts, content}: objProps) {
    return (
        <div className="w-4/5 h-auto shadow-custom rounded-xl flex flex-col justify-center items-center text-center gap-5 py-7">
            <Image src={image} alt={alts} width={100} height={100} className="w-4/5" />
            <p className="font-bold">{title}</p>
            <p className="text-purpleFont text-[14px]">{content}</p>
        </div>
    )
}