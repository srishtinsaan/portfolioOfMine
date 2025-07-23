import React from 'react'

function Tools() {
  const frontend_data = [
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
    { name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Framer", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" },
    { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Vite.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"},
  ]

  const backend_data = [
    
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", image: "https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000" },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Appwrite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg" },
  ]

  return (
   <div className=''>

      {/* frontend */}
      <div className='w-full min-h-[80px] '>
        <h1 className='text-2xl font-semibold mb-5'>Frontend</h1>

        {/* fronted divs */}
          <div className="whitespace-wrap mb-6 m-0">
  <div className="gap-2 lg:gap-4 flex-shrink-0">
    {frontend_data.map((items, index) => (
      <div key={index} className="inline-flex rounded-md p-2 gap-2  lg:mr-2 sm:mr-2 md:mr-2">
        <div className="w-6 h-6 rounded-md">
          <img src={items.image} alt="" />
        </div>
        <h4>{items.name}</h4>
      </div>
    ))}
  </div>
</div>

        
      </div>

      {/* backend */}
      <div className='w-full min-h-[80px] '>
        <h1 className='text-2xl font-semibold mb-5'>Backend</h1>

        {/* fronted divs */}
          <div className="whitespace-wrap mb-6 m-0">
  <div className="gap-2 flex-shrink-0">
    {backend_data.map((items, index) => (
      <div key={index} className="inline-flex rounded-md p-2 gap-2 mr-2">
        <div className="w-6 h-6 rounded-md">
          <img src={items.image} alt="" />
        </div>
        <h4>{items.name}</h4>
      </div>
    ))}
  </div>
</div>

        
      </div>
      
    </div>
  )
}

export default Tools
