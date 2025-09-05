import comingSoon from '../assets/images/coming_soon.jpg'
import obys from '../assets/images/obys.png'
import blog from '../assets/images/blog_application.png'
import todo from '../assets/images/todo.png'
import password from '../assets/images/password.png'
import youX from '../assets/images/youX.png'




function Projects() {

  const project = [
    {name : "Blood Banks Near Me", image : comingSoon, desc : "A full-stack app to find nearby blood banks by PIN code.", 
      github : "https://github.com/srishtinsaan/Blood-Banks-Near-Me"},
    {name : "Obys Agency UI Clone", image : obys, desc : "A sleek clone of the modern Obys Agency website UI.",
      github : "https://github.com/srishtinsaan/Obys_Agency---UI-Clone"},
    {name : "YouX", image : youX, desc : "A social platform backend that combines YouTube and X.",
      github : "https://github.com/srishtinsaan/YouX"},
    {name : "Blog Application", image : blog, desc : "A MVP of CRUD blog application using Appwrite.",
      github : "https://github.com/srishtinsaan/YouX"},
    {name : "To Do Application", image :todo, desc : "A simple task manager to organize daily activities made using Redux.",
      github : "https://github.com/srishtinsaan/Redux-ToDo"},
    {name : "Wallet Dashboard", image : comingSoon, desc : "A clean dashboard for tracking expenses and transactions.",
      github : "https://github.com/srishtinsaan/Wallet-dashboard"},
    {name : "Password generator", image : password, desc : "A secure tool to generate strong random passwords instantly.",
      github : "https://github.com/srishtinsaan/password-generator"}
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
          <div className="w-full min-h-[120px] m-4">
            <p className="text-sm mt-4">{proj.desc}</p>
          </div>

          {/* buttons */}
          <div className="m-0 absolute flex bottom-4 right-4 left-4 justify-between">
            <button className="relative p-1 text-sm rounded-md px-3 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] bg-white/10 backdrop-blur-md border border-white/20 text-white overflow-hidden group">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                    Github
              </a>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
            </button>

            <button className="relative p-1 text-sm rounded-md px-3 shadow-[0px_0px_7px_rgba(255,255,255,0.5)] bg-white/10 backdrop-blur-md border border-white/20 text-white overflow-hidden group">
              Live
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
