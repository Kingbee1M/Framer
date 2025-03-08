import React from "react"
import Image from "next/image"

export default function TopBar () {
    return (
        <div className="w-full text-white bg-black flex justify-center item-center py-3 font-head gap-x-1">
        <span className="hidden md:inline ">This page is included in a free SaaS Website Kit.</span>
        <span>View the complete Kit</span>
        <span className="w-4 flex jusify-center"><Image src="./images/Vector.svg" alt="pointer" width={20} height={20}/></span>
      </div>
    )
}