import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import logo from '../assets/logo.svg'

const NavBar = () => {

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
    <div className="flex flex-col bg-red-400">
    <div className="fixed top-0 left-0 w-full flex flex-row items-center justify-between p-3 bg-base-500 border-b border-base-300 shadow-xl z-50 bg-white">
    
    {/*Left NavBar*/}
    <div className="flex flex-row items-center">
    
      {/* <img src={Aptistaan1} className="h-[20px] cursor-pointer" ></img> */}
        <h1><img src={logo} className="h-5"></img></h1>
        </div>
        {/* */}
       
       {/*Right Navbar */}
        <div className="space-x-4 flex flex-row items-center">
        {/* <Link to="/" className="hover:underline">Home</Link>
        <Link to="/About" className="hover:underline">About</Link>
        <Link to="/Contact" className="hover:underline">Contact</Link> */}
        <div>
         <AiOutlineUser className="shadow-xl rounded-xl size-6 p-1 border-2 border-black cursor-pointer" onClick={toggleOptions}></AiOutlineUser>
          
        </div>
      </div>
       {/* */}

    </div>

    
       {/*Options*/}
      {showOptions && ( <div className="fixed right-0 bg-white shadow-xl rounded-xl top-10">
      <ul className="p-2">
        <li className="cursor-pointer hover:bg-blue-100 p-1" >Profile</li>
        <li className="cursor-pointer hover:bg-blue-100 p-1" >Reset Password</li>
        <li className="cursor-pointer hover:bg-blue-100 p-1">Sign Out</li>
        </ul>
      </div>)}

      {/* */}
   
    </div>
    </>
  )
}

export default NavBar
