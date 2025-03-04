interface linkProps {
    title: string;
    content: string[];
}

export default function FootLink({ title, content }: linkProps) {
    return (
        <div className="my-3">
            <p className="text-white mb-2 font-bold">{title}</p>
            <div className="flex flex-col justify-start gap-2">
                {content.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
}