import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'

function Menu() {
    const menuItems = ['About', 'Tools', 'Projects', 'Resume', 'Contacts'];
    const [clicked, setClicked] = useState(null);

  return (
    <div className='w-full h-12 border-b-1 border-white flex items-center place-content-around'>
        {menuItems.map((items, index) => (
            <NavLink key={index} to={`/${items.toLowerCase()}`}
            className= {({ isActive}) => `px-1 py-1 ${isActive ? "border-b-1 border-white font-semibold" : "text-gray-100"}`}>{items}</NavLink>
        ))}
        
    </div>
  )
}

export default Menu
