import { useState } from "react";

const BarShow = (props)=>{
    console.log(props.check);
    return(
        <ul style={{display: `${props.check}`}} className="hidden md:hidden gap-4">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer text-gray-600 hover:text-black">About Us</li>
                    <li className="cursor-pointer text-gray-600 hover:text-black">Contact</li>
        </ul>
    )
}

export default BarShow; 