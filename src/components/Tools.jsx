import React from 'react'

function Tools() {
  const frontend_data = [
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
  ]

  const backend_data = [
    { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  ]
  return (
   <div className='my-10 mx-12'>

      {/* frontend */}
      <div className='w-full min-h-[80px] my-10'>
        <h1 className='text-2xl font-semibold mb-5'>Frontend</h1>

        {/* fronted divs */}
          <div className="whitespace-wrap mb-6 m-0">
  <div className="gap-2 flex-shrink-0">
    {frontend_data.map((items, index) => (
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

      {/* backend */}
      <div className='w-full min-h-[80px] my-10'>
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
