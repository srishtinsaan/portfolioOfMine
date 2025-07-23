import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'

function Menu() {
    const menuItems = ['About', 'Tools', 'Projects', 'Resume', 'Contacts',];
    const [clicked, setClicked] = useState(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    // lg:border-b-1 border-b-[0.5px] 
    <div
      className="w-full h-12 px-2 flex items-center overflow-x-auto overflow-y-hidden whitespace-nowrap
        lg:place-content-around md:place-content-around sm:place-content-around scrollbar-hide
        bg-white/10 backdrop-blur relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Moving gradient circle */}
      {hovering && (
        <div
          className="absolute w-16 h-16 pointer-events-none rounded-full 
          bg-radial  from-white/30 via-gray-300/10 to-transparent 
          transition duration-100 blur-xl"
          style={{
            left: pos.x - 26 + 'px', // center the 128px (32 rem) div
            top: pos.y -  26 + 'px',
            zIndex: 0,
          }}
        />
      )}

        {menuItems.map((items, index) => (
        <NavLink 
            key={index} 
            to={`/${items.toLowerCase()}`}
            className={({ isActive }) => 
                `inline-block mx-2 px-1 py-1 z-10 ${isActive ? "border-b-[0.5px] lg:border-b-1 font-semibold" : "text-gray-100"}`
            }>
            {items}
        </NavLink>
    ))}
        
    </div>
  )
}


export default Menu
