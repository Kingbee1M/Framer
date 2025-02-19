"use client"

import { Container } from "postcss"
import React, { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";

const holder = "w-full flex flex-col justify-center items-center py-4 bg-navbar"
const wrapper = "w-full h-navbar flex flex-row justify-between items-center my-4 mx-6"
const menu = "w-full h-full"
const imgHolder = "w-8"
const btn = "w-full h-full"
const dropDown = " w-full h-screen fixed inset-0 flex flex-col justify-center items-center gap-y-20PX bg-white text-center z-50"
const dropDown2 = "hidden"
const getParent = "w-full flex justify-center"
const get = "w-4/5 text-center bg-black text-white p-10 rounded-mid"
const btn2 = "w-10 h-8 absolute top-4 right-4"
const btnImg = "w-full h-full"

export default function NavBar () {
    let [isVisible, setIsVisible] = useState(false)


    const toggleVisibility =() => {
        setIsVisible(!isVisible)
    }

    return (
        <div className={holder}>
            <div className={wrapper}>
            <div>
                <div><img src="./images/logosaas.svg" alt="menu" /></div>
                <div></div>
            </div>
            <div>
                <div className={imgHolder}><button className={btn} onClick={toggleVisibility}><img src="./images/menu.svg" alt="menu" className={menu}/></button></div>
            </div>
            </div>
                    <div className={`${isVisible ? dropDown : dropDown2}`}>
                    <button onClick={toggleVisibility} className={btn2}><MdOutlineCancel className={btnImg}/></button>
                    <div>About</div>
                    <div>Features</div>
                    <div>Customers</div>
                    <div>Updates</div>
                    <div>Help</div>
                    <div className={getParent}><div className={get}>Get for free</div></div>
                </div>
        </div>
    )
}