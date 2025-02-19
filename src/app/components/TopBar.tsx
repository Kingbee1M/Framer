import React from "react"

const wrapper = "w-full text-white bg-black flex justify-center item-center py-3 font-head gap-x-1"
const hidden = "hidden md:inline "
const imgHolder = "w-4 flex jusify-center"

export default function TopBar () {
    return (
        <div className={wrapper}>
        <span className={hidden}>This page is included in a free SaaS Website Kit.</span>
        <span>View the complete Kit</span>
        <span className={imgHolder}><img src="./images/Vector.svg" alt="pointer" /></span>
      </div>
    )
}