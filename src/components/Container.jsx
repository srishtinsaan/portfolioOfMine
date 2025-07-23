
import Profile from './Profile'
import Menu from './Menu'
import ContainerBody from './ContainerBody'

function Container() {
  
  return (
    <div className="w-full max-w-3xl overflow-x-hidden shadow-[0px_0px_20px_rgba(255,255,255,0.4)] lg:mt-20 mt-10 md:mt-20">
      <div className="w-full max-w-3xl mx-auto  min-h-[500px] text-white ">
        <Profile/>
        <Menu/>
        <ContainerBody/>
      </div>
    </div>
  )  
}

// border-1 sm:border-[0.5px] md:border-[0.5px] lg:border-1 border-white
export default Container
