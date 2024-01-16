import { useEffect, useState } from "react";

const Header = (props)=>{
    let[selector,setSelector]= useState(false);
    function selection(){
        selector? setSelector(false):setSelector(true);
    }
    useEffect(()=>{
        props.select(selector);
    },[selector])
    return(
        <header className="flex justify-between items-center p-4 bg-cyan-400">
            <nav className="flex gap-16 items-center justify-center">
                <h1 className="text-xl font-medium">TextUtils</h1>
                <ul className="hidden md:flex gap-4">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer text-gray-600 hover:text-black">About Us</li>
                    <li className="cursor-pointer text-gray-600 hover:text-black">Contact</li>
                </ul>
            </nav>
            <div onClick={selection} className="md:hidden cursor-pointer hover:bg-gray-600/20 p-1 active:scale-[0.97]">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </div>
            <div className="hidden md:flex">
                <label>Enable dark Mode</label>
            </div>
           
        </header>
    )
}

export default Header;