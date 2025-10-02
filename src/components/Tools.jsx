
function Tools() {
  const frontend_data = [
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
    { name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Framer", image: "https://img.icons8.com/?size=100&id=L2hKYZI79drI&format=png&color=000000" },
    { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    
  ]

  const backend_data = [
    
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", image: "https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000" },
    {name: "NPM", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg"}
  ]

  const dbandServices = [
        { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Appwrite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg" },
        { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },

  ]

  return (
   <div className=''>
      {/* frontend title*/}
      <div className='w-full min-h-[80px] '>
        <h1 className='text-xl sm:text-2xl lg:text-2xl  font-semibold mb-5'>Frontend</h1>

        {/* frontend divs */}
        <div className="whitespace-wrap mb-6 m-0">
          <div className="gap-2 lg:gap-4 flex-shrink-0">
            {frontend_data.map((items, index) => (
              <div key={index} className="inline-flex rounded-md p-2 gap-2 lg:mr-2 sm:mr-2 md:mr-2">
                <div className="w-6 h-6 rounded-md">
                  <img src={items.image} alt="" />
                </div>
                <h4>{items.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* backend title*/}
      <div className='w-full min-h-[80px] '>
        <h1 className='text-xl sm:text-2xl lg:text-2xl font-semibold mb-5'>Backend</h1>

        {/* backend divs */}
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

      {/* Db & services title*/}
      <div className='w-full min-h-[80px] '>
        <h1 className='text-xl sm:text-2xl lg:text-2xl font-semibold mb-5'>Database & Services</h1>

        {/* Db & services divs */}
        <div className="whitespace-wrap mb-6 m-0">
          <div className="gap-2 flex-shrink-0">
            {dbandServices.map((items, index) => (
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
