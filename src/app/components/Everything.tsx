import Object from "./Object"

export default function Everything () {
    const objectives = [
        {
            image: "/images/helix.svg",
            alts: "helix",
            title: "Integration ecosystem",
            content: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
        },

        {
            image: "/images/cube-helix 1.svg",
            alts: "cube",
            title: "Goal setting and tracking",
            content: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
        },
    ]
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center gap-1 font-main mt-20">
            <div className="font-semibold  border-solid border-greyBorder border rounded-2xl px-3 py-2 text-[10px]">Everything you need</div>
            <div className="font-head text-[22px] font-[800] text-center">Streamlined for <span className="text-lightBlue">easy management</span></div>
            <div className="purpleFont break-words text-center text-[15px] text-purpleFont md:w-3/5 lg:w-25p">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</div>
            <div className="w-full flex flex-col justify-center items-center mt-20 gap-10 ">
                {objectives.map ((objects, index) => (
                    <Object key={index} image={objects.image} alts={objects.alts} title={objects.title} content={objects.content} />
                ))}
            </div>
        </div>
    )
}