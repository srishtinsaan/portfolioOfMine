import comingSoon from '../assets/images/coming_soon.jpg'
import obys from '../assets/images/obys.png'
import blog from '../assets/images/blog_application.png'
import todo from '../assets/images/todo.png'
import password from '../assets/images/password.png'
import youX from '../assets/images/youX.png'
import jeevdhan from '../assets/images/jeevdhan.png'
import bloodbank from '../assets/images/bloodbank.png'



function Projects() {

  const project = [
    {name : "Blood Banks Near Me", image : bloodbank, desc : "A full-stack web app to find nearby blood banks by PIN code.", 
      github : "https://github.com/srishtinsaan/Blood-Banks-Near-Me",
    tools: ["MongoDB", "Express", "React", "Node.js", "Framer-motion", "Tailwind CSS"],
  live : "https://bloodbanksnearme-frontend.vercel.app/"},
  {name : "Jeevdhan", image : jeevdhan, desc : "A digital biosecurity platform for pigs and poultry farms to alert about diseases.", 
      github : "https://github.com/srishtinsaan/jeevdhan",
    tools: ["React", "Tailwind CSS", "Appwrite"],
  live : "https://jeevdhan.vercel.app/"},
  {name : "Blog Application", image : blog, desc : "A MVP of CRUD blog application using Appwrite.",
      github : "https://github.com/srishtinsaan/YouX",
    tools: ["Appwite", "React", "TinyMCE"],
  live : "https://blog-application-ten-woad.vercel.app/"},
    {name : "Obys Agency UI Clone", image : obys, desc : "A sleek clone of the modern Obys Agency website UI.",
      github : "https://github.com/srishtinsaan/Obys_Agency---UI-Clone",
    tools: ["HTML", "CSS", "Javascript", "GSAP", "Locomotive", "Scrolltrigger"],
  live : "https://obys-agency-ui-clone.vercel.app/"},
    {name : "YouX", image : youX, desc : "A social platform backend that combines YouTube and X.",
      github : "https://github.com/srishtinsaan/YouX",
    tools: ["MongoDB", "Express","Node.js", "Cloudinary", "Postman", "JWT"],
  live : ""},
    
    {name : "To Do Application", image :todo, desc : "A simple task manager to organize daily activities made using Redux.",
      github : "https://github.com/srishtinsaan/Redux-ToDo",
    tools: ["React", "Redux", "Tailwind CSS"],
  live : ""},
    {name : "Wallet Dashboard", image : comingSoon, desc : "A clean dashboard for tracking expenses and transactions.",
      github : "https://github.com/srishtinsaan/Wallet-dashboard",
    tools: ["React", "Shadcn", "Tailwind CSS"],
  live : ""},
    {name : "Password generator", image : password, desc : "A secure tool to generate strong random passwords instantly.",
      github : "https://github.com/srishtinsaan/password-generator",
    tools: ["React","Javascript", "Tailwind CSS", ],
  live : "https://password-generator-dun-alpha.vercel.app/"}
  ]
  
  return (
  <div className="flex flex-wrap gap-15">
    {project.map((proj, index) => (
      <div 
        key={index} 
        className="flex justify-center gap-15 place-content-around flex-wrap mb-15"
      >
        <div className="w-70 relative lg:min-h-[200px] shadow-[0_30px_22px_-11px_rgba(255,255,255,0.2)]">
          
          {/* image */}
          <div className="w-full h-40 overflow-hidden">
            <img src={proj.image} className={`w-full h-full object-cover 
              ${proj.image === comingSoon ? "object-[50%_80%]" : ""}
              ${proj.image === todo ? "object-[0%_80%]" : ""}
              ${proj.image === youX ? "object-[7%_80%]" : ""}

              `}  alt={proj.name}  />
          </div>

          {/* heading */}
          <div className="w-full border-white h-10 bg-white/10 flex items-center">
            <h1 className="ml-4 text-xl sm:text-2xl lg:text-xl">{proj.name}</h1>
          </div>

          {/* desc */}
          <div className="w-full min-h-[50px] mx-4">
            <p className="text-sm mt-4">{proj.desc}</p>
          </div>
          
          {/* tools */}
 <div className=" flex flex-wrap gap-2 mx-4 mt-0"> 
  {proj.tools.map((tool, i) => ( 
    <button key={i} 
    className="px-2 py-1 text-xs rounded-md bg-white/10 border border-white/20 text-white shadow-sm hover:bg-white/20 transition"> 
    {tool} </button> 
  ))} 
  </div>

{/* buttons */}

{/* github */}
<div className="flex justify-between items-center mx-4 mt-4 mb-4">
  <button className="relative p-1 text-sm rounded-md px-3 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] bg-white/10 backdrop-blur-md border border-white/20 text-white overflow-hidden group">
    <a href={proj.github} target="_blank" rel="noopener noreferrer">
      Github
    </a>
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
  </button>

{/* live */}
  <button
    className={`relative p-1 text-sm rounded-md px-3 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] 
    bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group
    ${proj.image === comingSoon ||  proj.image === youX || proj.image === todo  ? "text-gray-400" : "text-white"}`}
  >
    <a href={proj.live} target="_blank" rel="noopener noreferrer">
      Live
    </a>
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
  </button>
</div>

        </div>
      </div>
    ))}
  </div>
)

}

export default Projects
