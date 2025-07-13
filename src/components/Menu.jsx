import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'

function Menu() {
    const menuItems = ['About', 'Tools', 'Projects', 'Resume', 'Contacts',];
    const [clicked, setClicked] = useState(null);

  return (
    <div className='w-full h-12 border-b-[0.5px] px-2 lg:border-b-1 flex items-center overflow-x-auto whitespace-nowrap lg:place-content-around md:place-content-around sm:place-content-around '>
        {menuItems.map((items, index) => (
            <NavLink key={index} to={`/${items.toLowerCase()}`}
            className= {({ isActive}) => `inline-block mx-2 px-1 py-1 ${isActive ? "border-b-[0.5px] lg:border-b-1 font-semibold" : "text-gray-100"}`}>{items}</NavLink>
        ))}
        
    </div>
  )
}

export default Menu
