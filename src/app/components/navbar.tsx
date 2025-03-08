"use client"

import React, { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import Image from 'next/image';
import UIButton from './UIButton';


export default function NavBar () {
    let [isVisible, setIsVisible] = useState(false)


    const toggleVisibility =() => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="w-full flex flex-col justify-center items-center py-4 bg-navbar">
            <div className="w-full h-navbar flex flex-row justify-between items-center my-4 mx-6 md:hidden">
            <div>
                <div><Image src="./images/logosaas.svg" alt="menu" width={20} height={20}/></div>
                <div></div>
            </div>
            <div>
                <div className="w-8"><button className="w-full h-full"onClick={toggleVisibility}><Image src="./images/menu.svg" alt="menu" width={100} height={100} className="w-full h-full"/></button></div>
            </div>
            </div>
                    <div className={`${isVisible ? " w-full h-screen fixed inset-0 flex flex-col justify-center items-center gap-y-20PX bg-white text-center z-50" : "hidden"}`}>
                    <button onClick={toggleVisibility} className="w-10 h-8 absolute top-4 right-4"><MdOutlineCancel className="w-full h-full"/></button>
                    <div>About</div>
                    <div>Features</div>
                    <div>Customers</div>
                    <div>Updates</div>
                    <div>Help</div>
                    <div className="w-full flex justify-center"><div className="w-4/5 text-center bg-black text-white p-10 rounded-mid">Get for free</div></div>
                </div>
                <div className='hidden md:w-90p md:flex md:flex-row md:justify-between'>
                    <div className='flex flex-row justify-start items-center gap-3 text-[16px]'>
                        <Image src="./images/logosaas.svg" alt="menu" width={20} height={20}/>
                        <p>made by</p>
                        <Image src="/images/black-horizontal 1.svg" alt='framer' width={50} height={50} />
                    </div>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <ul className='flex flex-row text-[16px] gap-3 text-navlink'>
                            <li>About</li>
                            <li>Features</li>
                            <li>Customers</li>
                            <li>Updates</li>
                            <li>Help</li>
                        </ul>
                        <UIButton variant='primary'>Get for free</UIButton>
                    </div>
                </div>
        </div>
    )
}